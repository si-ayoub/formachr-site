// IndexNow — ping des URLs piliers formachr après un deploy prod validé.
// Usage : node --use-system-ca scripts/indexnow-ping.mjs
const HOST = "www.formachr.fr";
const KEY = "formachr2026";
const BASE = `https://${HOST}`;

const VILLES_20 = [
  "paris", "lyon", "marseille", "toulouse", "bordeaux", "lille", "nantes",
  "strasbourg", "nice", "rennes", "grenoble", "montpellier", "toulon",
  "dijon", "angers", "reims", "rouen", "caen", "saint-etienne", "metz",
];

const SECTEURS = [
  "restaurant", "snack", "food-truck", "boulangerie", "boucherie-charcuterie",
  "restauration-collective", "hotel", "creche", "pizzeria", "traiteur",
  "supermarche", "camping", "association",
];

const urls = [
  `${BASE}/`,
  `${BASE}/villes`,
  `${BASE}/devis`,
  `${BASE}/calculateur-prix`,
  ...VILLES_20.map((v) => `${BASE}/formation-haccp-${v}`),
  ...SECTEURS.map((s) => `${BASE}/formation-haccp-${s}`),
];

async function main() {
  const keyRes = await fetch(`${BASE}/${KEY}.txt`);
  if (!keyRes.ok) {
    console.error(`ABANDON : ${BASE}/${KEY}.txt renvoie ${keyRes.status} (doit être 200)`);
    process.exit(1);
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${BASE}/${KEY}.txt`,
      urlList: urls,
    }),
  });
  console.log(`IndexNow: ${res.status} ${res.statusText} — ${urls.length} URLs soumises`);
  if (!res.ok) console.error(await res.text());
}

main().catch((e) => { console.error(e); process.exit(1); });
