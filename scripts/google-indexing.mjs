#!/usr/bin/env node
/**
 * google-indexing.mjs
 * -------------------
 * Reads the live sitemap, submits up to 200 URLs/day to Google Indexing API,
 * and logs submissions to google-indexing-log.json (30-day cooldown).
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { google } from "googleapis";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const LOG_FILE = resolve(ROOT, "google-indexing-log.json");
const SA_PATH = "/tmp/sa.json";
const MAX_PER_DAY = 200;
const COOLDOWN_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const SITEMAP_URL = "https://www.formachr.fr/sitemap.xml";

// ── Auth ────────────────────────────────────────────────────────────────────

function getAuthClient() {
  if (!existsSync(SA_PATH)) {
    throw new Error(`Service account not found at ${SA_PATH}`);
  }
  const sa = JSON.parse(readFileSync(SA_PATH, "utf-8"));
  return new google.auth.JWT(
    sa.client_email,
    null,
    sa.private_key,
    ["https://www.googleapis.com/auth/indexing"],
  );
}

// ── Sitemap ─────────────────────────────────────────────────────────────────

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) urls.push(m[1]);
  return urls;
}

// ── Log ─────────────────────────────────────────────────────────────────────

function loadLog() {
  if (existsSync(LOG_FILE)) {
    return JSON.parse(readFileSync(LOG_FILE, "utf-8"));
  }
  return { lastRun: null, urls: {} };
}

function saveLog(log) {
  writeFileSync(LOG_FILE, JSON.stringify(log, null, 2), "utf-8");
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log("=== Google Indexing API ===\n");

  const auth = getAuthClient();
  await auth.authorize();
  console.log("Authenticated.\n");

  const allUrls = await fetchSitemapUrls();
  console.log(`Sitemap: ${allUrls.length} URLs found.\n`);

  const log = loadLog();
  const now = Date.now();

  // Filter out URLs submitted less than 30 days ago
  const pending = allUrls.filter((url) => {
    const entry = log.urls[url];
    if (!entry || entry.status !== "OK") return true;
    return now - new Date(entry.submittedAt).getTime() > COOLDOWN_MS;
  });

  const batch = pending.slice(0, MAX_PER_DAY);
  console.log(`To submit: ${batch.length} (${pending.length} pending, limit ${MAX_PER_DAY}/day)\n`);

  if (batch.length === 0) {
    console.log("Nothing to submit — all URLs were submitted recently.");
    log.lastRun = new Date().toISOString();
    saveLog(log);
    return;
  }

  let ok = 0;
  let errors = 0;

  for (const url of batch) {
    try {
      const res = await google.indexing("v3").urlNotifications.publish({
        auth,
        requestBody: { url, type: "URL_UPDATED" },
      });

      ok++;
      log.urls[url] = {
        submittedAt: new Date().toISOString(),
        status: "OK",
        notifyTime: res.data?.urlNotificationMetadata?.latestUpdate?.notifyTime || null,
      };
      console.log(`  OK  ${url}`);
    } catch (err) {
      errors++;
      const msg = err.response?.data?.error?.message || err.message;
      log.urls[url] = {
        submittedAt: new Date().toISOString(),
        status: `ERROR`,
        error: msg,
      };
      console.log(`  ERR ${url} — ${msg}`);
    }

    // Rate-limit politeness
    await new Promise((r) => setTimeout(r, 200));
  }

  log.lastRun = new Date().toISOString();
  saveLog(log);

  console.log(`\nDone: ${ok} OK, ${errors} errors.`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
