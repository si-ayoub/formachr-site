#!/usr/bin/env node
/**
 * indexnow.mjs
 * ------------
 * Reads all URLs from the live sitemap.xml and submits them to IndexNow
 * (Bing, Yandex, and other participating search engines).
 *
 * IndexNow allows up to 10,000 URLs per request.
 * Docs: https://www.indexnow.org/documentation
 *
 * Env vars:
 *   INDEXNOW_KEY  — override the default API key (optional)
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const LOG_FILE = resolve(ROOT, "indexnow-log.json");
const SITE_URL = "https://www.formachr.fr";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const API_KEY = process.env.INDEXNOW_KEY || "62e018b44dfee97d7417fed176e83492";
const KEY_LOCATION = `${SITE_URL}/${API_KEY}.txt`;

// IndexNow endpoints — submitting to one notifies all participating engines
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

// ── Helpers ──────────────────────────────────────────────────────────────────

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
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
  return { lastRun: null, submittedUrls: {} };
}

function saveLog(log) {
  writeFileSync(LOG_FILE, JSON.stringify(log, null, 2), "utf-8");
}

async function submitToIndexNow(endpoint, urls) {
  const body = {
    host: new URL(SITE_URL).host,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return { status: res.status, statusText: res.statusText };
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("=== IndexNow — indexnow.mjs ===\n");

  // 1. Fetch sitemap
  console.log(`Fetching sitemap: ${SITEMAP_URL}`);
  const allUrls = await fetchSitemapUrls();
  console.log(`Found ${allUrls.length} URLs in sitemap.\n`);

  if (allUrls.length === 0) {
    console.log("No URLs found in sitemap. Exiting.");
    return;
  }

  // 2. Load log and find new/updated URLs
  const log = loadLog();
  const now = Date.now();
  const oneWeekMs = 7 * 24 * 60 * 60 * 1000;

  // Submit URLs not submitted in the last 7 days
  const urlsToSubmit = allUrls.filter((url) => {
    const prev = log.submittedUrls[url];
    if (!prev) return true;
    return now - new Date(prev).getTime() > oneWeekMs;
  });

  console.log(`URLs to submit: ${urlsToSubmit.length} (${allUrls.length - urlsToSubmit.length} recently submitted, skipped)\n`);

  if (urlsToSubmit.length === 0) {
    console.log("All URLs were submitted recently. Nothing to do.");
    log.lastRun = new Date().toISOString();
    saveLog(log);
    return;
  }

  // 3. Submit in batches of 10,000 (IndexNow limit)
  const BATCH_SIZE = 10_000;
  for (let i = 0; i < urlsToSubmit.length; i += BATCH_SIZE) {
    const batch = urlsToSubmit.slice(i, i + BATCH_SIZE);
    console.log(`Submitting batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} URLs)...`);

    for (const endpoint of INDEXNOW_ENDPOINTS) {
      try {
        const result = await submitToIndexNow(endpoint, batch);
        const ok = result.status >= 200 && result.status < 300;
        console.log(`  ${ok ? "OK" : "WARN"}  ${endpoint} → ${result.status} ${result.statusText}`);
      } catch (err) {
        console.log(`  ERR  ${endpoint} → ${err.message}`);
      }
    }

    // Mark all batch URLs as submitted
    const timestamp = new Date().toISOString();
    for (const url of batch) {
      log.submittedUrls[url] = timestamp;
    }
  }

  // 4. Save log
  log.lastRun = new Date().toISOString();
  saveLog(log);

  console.log(`\nDone. ${urlsToSubmit.length} URLs submitted to ${INDEXNOW_ENDPOINTS.length} endpoints.`);
  console.log(`Log saved to indexnow-log.json`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
