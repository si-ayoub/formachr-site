#!/usr/bin/env node
/**
 * auto-index-google.mjs
 * ---------------------
 * Reads all URLs from the live sitemap.xml, sends each to the
 * Google Indexing API (URL_UPDATED), and logs results to indexed-urls.json.
 *
 * Quota: 200 URLs / day (Google Indexing API default).
 *
 * Auth: uses GOOGLE_SA_JSON env var (base64-encoded service-account JSON)
 *       or falls back to ./halal4329-79d37450050c.json at project root.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { sign } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const LOG_FILE = resolve(ROOT, "indexed-urls.json");
const MAX_URLS_PER_DAY = 200;
const SITE_URL = "https://www.formachr.fr";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// ── Helpers ──────────────────────────────────────────────────────────────────

function loadServiceAccount() {
  // 1) Env var (base64-encoded JSON) — used in GitHub Actions
  if (process.env.GOOGLE_SA_JSON) {
    return JSON.parse(Buffer.from(process.env.GOOGLE_SA_JSON, "base64").toString("utf-8"));
  }
  // 2) Local file
  const localPath = resolve(ROOT, "halal4329-79d37450050c.json");
  if (existsSync(localPath)) {
    return JSON.parse(readFileSync(localPath, "utf-8"));
  }
  throw new Error("No service account found. Set GOOGLE_SA_JSON env var or place halal4329-79d37450050c.json at project root.");
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
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const unsigned = `${encode(header)}.${encode(payload)}`;
  const signature = sign("RSA-SHA256", Buffer.from(unsigned), sa.private_key);
  return `${unsigned}.${signature.toString("base64url")}`;
}

async function getAccessToken(sa) {
  const jwt = createJwt(sa);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.access_token;
}

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  // Extract <loc>...</loc> values
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

function loadLog() {
  if (existsSync(LOG_FILE)) {
    return JSON.parse(readFileSync(LOG_FILE, "utf-8"));
  }
  return { lastRun: null, totalIndexed: 0, urls: {} };
}

function saveLog(log) {
  writeFileSync(LOG_FILE, JSON.stringify(log, null, 2), "utf-8");
}

async function requestIndexing(url, token) {
  const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  const data = await res.json();
  return { status: res.status, data };
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("=== Google Indexing — auto-index-google.mjs ===\n");

  // 1. Auth
  const sa = loadServiceAccount();
  console.log(`Service account: ${sa.client_email}`);
  const token = await getAccessToken(sa);
  console.log("Access token obtained.\n");

  // 2. Fetch sitemap
  console.log(`Fetching sitemap: ${SITEMAP_URL}`);
  const allUrls = await fetchSitemapUrls();
  console.log(`Found ${allUrls.length} URLs in sitemap.\n`);

  // 3. Load previous log to skip recently indexed URLs (< 24h)
  const log = loadLog();
  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;

  // Filter: skip URLs indexed less than 24h ago
  const urlsToIndex = allUrls.filter((url) => {
    const prev = log.urls[url];
    if (!prev) return true;
    return now - new Date(prev.lastIndexed).getTime() > oneDayMs;
  });

  const batch = urlsToIndex.slice(0, MAX_URLS_PER_DAY);
  console.log(`URLs to index today: ${batch.length} (of ${urlsToIndex.length} pending, ${MAX_URLS_PER_DAY}/day limit)\n`);

  if (batch.length === 0) {
    console.log("Nothing to index — all URLs were indexed recently.");
    log.lastRun = new Date().toISOString();
    saveLog(log);
    return;
  }

  // 4. Index each URL
  let success = 0;
  let errors = 0;

  for (const url of batch) {
    try {
      const result = await requestIndexing(url, token);
      if (result.status === 200) {
        success++;
        log.urls[url] = {
          lastIndexed: new Date().toISOString(),
          status: "OK",
          notifyTime: result.data.urlNotificationMetadata?.latestUpdate?.notifyTime || null,
        };
        console.log(`  OK  ${url}`);
      } else {
        errors++;
        log.urls[url] = {
          lastIndexed: new Date().toISOString(),
          status: `ERROR_${result.status}`,
          error: result.data.error?.message || JSON.stringify(result.data),
        };
        console.log(`  ERR ${url} — ${result.status}: ${result.data.error?.message || ""}`);
      }
    } catch (err) {
      errors++;
      log.urls[url] = {
        lastIndexed: new Date().toISOString(),
        status: "FETCH_ERROR",
        error: err.message,
      };
      console.log(`  ERR ${url} — ${err.message}`);
    }

    // Small delay to be polite to the API
    await new Promise((r) => setTimeout(r, 200));
  }

  // 5. Save log
  log.lastRun = new Date().toISOString();
  log.totalIndexed = Object.values(log.urls).filter((u) => u.status === "OK").length;
  saveLog(log);

  console.log(`\nDone: ${success} OK, ${errors} errors. Log saved to indexed-urls.json`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
