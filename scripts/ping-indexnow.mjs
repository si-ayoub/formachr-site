#!/usr/bin/env node
/**
 * ping-indexnow.mjs
 * -----------------
 * Reads all URLs from the live sitemap.xml and submits them to IndexNow
 * with the key "formachr2026".
 *
 * Usage: node scripts/ping-indexnow.mjs
 */

const SITE_URL = "https://www.formachr.fr";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const API_KEY = "formachr2026";
const KEY_LOCATION = `${SITE_URL}/formachr2026.txt`;

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

async function submitToIndexNow(urls) {
  const body = {
    host: new URL(SITE_URL).host,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return { status: res.status, statusText: res.statusText };
}

async function main() {
  console.log("=== IndexNow Ping — formachr2026 ===\n");

  console.log(`Fetching sitemap: ${SITEMAP_URL}`);
  const allUrls = await fetchSitemapUrls();
  console.log(`Found ${allUrls.length} URLs in sitemap.\n`);

  if (allUrls.length === 0) {
    console.log("No URLs found. Exiting.");
    return;
  }

  // Submit in batches of 10,000 (IndexNow limit)
  const BATCH_SIZE = 10_000;
  let submitted = 0;

  for (let i = 0; i < allUrls.length; i += BATCH_SIZE) {
    const batch = allUrls.slice(i, i + BATCH_SIZE);
    console.log(`Submitting batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} URLs)...`);

    try {
      const result = await submitToIndexNow(batch);
      const ok = result.status >= 200 && result.status < 300;
      console.log(`  ${ok ? "OK" : "WARN"} → ${result.status} ${result.statusText}`);
      submitted += batch.length;
    } catch (err) {
      console.error(`  ERR → ${err.message}`);
    }
  }

  console.log(`\nDone. ${submitted}/${allUrls.length} URLs submitted to IndexNow.`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
