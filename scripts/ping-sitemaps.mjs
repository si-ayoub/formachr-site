#!/usr/bin/env node
/**
 * ping-sitemaps.mjs
 * -----------------
 * Unified script that pings all three indexing services after a deploy:
 *   1. Google Indexing API  (URL_UPDATED, 200/day quota)
 *   2. Bing Webmaster Tools (submit URL via API key)
 *   3. IndexNow             (batch submit to all participating engines)
 *
 * Env vars:
 *   GOOGLE_SA_JSON   — base64-encoded Google service account JSON (required for Google)
 *   BING_API_KEY     — Bing Webmaster Tools API key (optional, skips Bing if missing)
 *   INDEXNOW_KEY     — override default IndexNow API key (optional)
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { sign } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const LOG_FILE = resolve(ROOT, "ping-sitemaps-log.json");
const SITE_URL = "https://www.formachr.fr";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const MAX_GOOGLE_PER_DAY = 200;
const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || "62e018b44dfee97d7417fed176e83492";
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

// ── Helpers ──────────────────────────────────────────────────────────────────

function loadLog() {
  if (existsSync(LOG_FILE)) {
    return JSON.parse(readFileSync(LOG_FILE, "utf-8"));
  }
  return { lastRun: null, google: {}, bing: {}, indexnow: {} };
}

function saveLog(log) {
  writeFileSync(LOG_FILE, JSON.stringify(log, null, 2), "utf-8");
}

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) urls.push(match[1]);
  return urls;
}

function olderThan(isoDate, ms) {
  if (!isoDate) return true;
  return Date.now() - new Date(isoDate).getTime() > ms;
}

// ── 1. Google Indexing API ───────────────────────────────────────────────────

function loadServiceAccount() {
  if (process.env.GOOGLE_SA_JSON) {
    return JSON.parse(
      Buffer.from(process.env.GOOGLE_SA_JSON, "base64").toString("utf-8")
    );
  }
  const localPath = resolve(ROOT, "google-sa.json");
  if (existsSync(localPath)) {
    return JSON.parse(readFileSync(localPath, "utf-8"));
  }
  return null;
}

function createJwt(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const encode = (obj) =>
    Buffer.from(JSON.stringify(obj)).toString("base64url");
  const unsigned = `${encode(header)}.${encode(payload)}`;
  const signature = sign("RSA-SHA256", Buffer.from(unsigned), sa.private_key);
  return `${unsigned}.${signature.toString("base64url")}`;
}

async function getGoogleToken(sa) {
  const jwt = createJwt(sa);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Google token error ${res.status}: ${await res.text()}`);
  return (await res.json()).access_token;
}

async function pingGoogle(urls, log) {
  console.log("\n━━━ 1/3  Google Indexing API ━━━");
  const sa = loadServiceAccount();
  if (!sa) {
    console.log("  SKIP  No GOOGLE_SA_JSON env var or google-sa.json file found.");
    return;
  }

  console.log(`  Auth: ${sa.client_email}`);
  const token = await getGoogleToken(sa);

  const oneDayMs = 24 * 60 * 60 * 1000;
  const pending = urls.filter((u) => olderThan(log.google[u]?.at, oneDayMs));
  const batch = pending.slice(0, MAX_GOOGLE_PER_DAY);
  console.log(`  URLs: ${batch.length} to index (${pending.length} pending, ${MAX_GOOGLE_PER_DAY}/day limit)`);

  let ok = 0,
    err = 0;
  for (const url of batch) {
    try {
      const res = await fetch(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url, type: "URL_UPDATED" }),
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        ok++;
        log.google[url] = { at: new Date().toISOString(), status: "OK" };
      } else {
        err++;
        log.google[url] = {
          at: new Date().toISOString(),
          status: `ERROR_${res.status}`,
          error: data.error?.message || "",
        };
        console.log(`  ERR  ${url} — ${res.status}`);
      }
    } catch (e) {
      err++;
      log.google[url] = { at: new Date().toISOString(), status: "FETCH_ERROR", error: e.message };
      console.log(`  ERR  ${url} — ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  console.log(`  Done: ${ok} OK, ${err} errors`);
}

// ── 2. Bing Webmaster Tools API ──────────────────────────────────────────────

async function pingBing(urls, log) {
  console.log("\n━━━ 2/3  Bing Webmaster Tools ━━━");
  const apiKey = process.env.BING_API_KEY;
  if (!apiKey) {
    console.log("  SKIP  No BING_API_KEY env var found.");
    return;
  }

  const oneDayMs = 24 * 60 * 60 * 1000;
  const pending = urls.filter((u) => olderThan(log.bing[u], oneDayMs));
  console.log(`  URLs: ${pending.length} to submit`);

  // Bing URL Submission API — batch of up to 500
  const BATCH_SIZE = 500;
  let ok = 0, err = 0;
  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const batch = pending.slice(i, i + BATCH_SIZE);
    try {
      const res = await fetch(
        `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            siteUrl: SITE_URL,
            urlList: batch,
          }),
        }
      );
      if (res.ok) {
        ok += batch.length;
        const ts = new Date().toISOString();
        for (const url of batch) log.bing[url] = ts;
        console.log(`  OK   Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} URLs submitted`);
      } else {
        err += batch.length;
        const text = await res.text();
        console.log(`  ERR  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${res.status} — ${text.slice(0, 200)}`);
      }
    } catch (e) {
      err += batch.length;
      console.log(`  ERR  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${e.message}`);
    }
  }
  console.log(`  Done: ${ok} OK, ${err} errors`);
}

// ── 3. IndexNow ──────────────────────────────────────────────────────────────

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

async function pingIndexNow(urls, log) {
  console.log("\n━━━ 3/3  IndexNow ━━━");

  const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
  const pending = urls.filter((u) => olderThan(log.indexnow[u], oneWeekMs));
  console.log(`  URLs: ${pending.length} to submit (${urls.length - pending.length} recently submitted)`);

  if (pending.length === 0) {
    console.log("  All URLs submitted recently. Nothing to do.");
    return;
  }

  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: pending.slice(0, 10_000),
  };

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      const ok = res.status >= 200 && res.status < 300;
      console.log(`  ${ok ? "OK  " : "WARN"} ${endpoint} → ${res.status} ${res.statusText}`);
    } catch (e) {
      console.log(`  ERR  ${endpoint} → ${e.message}`);
    }
  }

  const ts = new Date().toISOString();
  for (const url of pending) log.indexnow[url] = ts;
  console.log(`  Done: ${pending.length} URLs submitted to ${INDEXNOW_ENDPOINTS.length} endpoints`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔══════════════════════════════════════════╗");
  console.log("║     ping-sitemaps — Indexing Pinger      ║");
  console.log("╚══════════════════════════════════════════╝");

  console.log(`\nFetching sitemap: ${SITEMAP_URL}`);
  const urls = await fetchSitemapUrls();
  console.log(`Found ${urls.length} URLs in sitemap.`);

  if (urls.length === 0) {
    console.log("No URLs found. Exiting.");
    return;
  }

  const log = loadLog();

  await pingGoogle(urls, log);
  await pingBing(urls, log);
  await pingIndexNow(urls, log);

  log.lastRun = new Date().toISOString();
  saveLog(log);

  console.log(`\n✓ All done. Log saved to ping-sitemaps-log.json`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
