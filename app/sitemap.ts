import { MetadataRoute } from "next"
import { VILLES } from "@/data/villes"
import { VILLES_5000 } from "@/data/villes-5000"
import { SITE_URL } from "@/lib/seo"

const SECTEURS = [
  "restaurant","snack","food-truck","boulangerie","boucherie-charcuterie",
  "restauration-collective","hotel","creche","ephad","pizzeria","traiteur",
  "supermarche","camping","association"
]

const FINANCEMENTS = ["cpf","opco","gratuite","pole-emploi","financement"]
const FORMATS = ["en-ligne","presentiel","intra-entreprise"]

const BLOG_SLUGS = [
  "7-principes-haccp",
  "controle-sanitaire-restaurant-preparer",
  "difference-haccp-hygiene-alimentaire",
  "formation-haccp-gratuite-opco",
  "allergenes-14-obligatoires-restaurant",
  "plan-maitrise-sanitaire-exemple",
  "formation-haccp-food-truck-obligations",
  "temperatures-conservation-aliments",
  "iso-22000-vs-haccp-difference",
  "ouvrir-restaurant-formations-obligatoires",
  "financer-formation-haccp-opco",
  "formation-haccp-food-truck",
  "plan-maitrise-sanitaire-pms",
  "controle-sanitaire-restaurant",
  "formation-haccp-boucherie",
  "permis-exploitation-guide-complet",
  "formation-haccp-prix-2026",
  "formation-haccp-en-ligne-vs-presentiel",
  "allergenes-restauration-obligations",
  "formation-haccp-gratuite-pole-emploi",
  "formation-haccp-boulangerie",
  "formation-haccp-traiteur",
  "formation-haccp-ehpad",
  "formation-haccp-creche",
  "formation-haccp-pizzeria",
  "reglementation-haccp-2026",
  "cout-formation-haccp",
  "formation-haccp-en-ligne-gratuite",
  "haccp-restauration-collective",
  "formation-haccp-ile-de-france",
  "formation-haccp-versailles",
  "formation-haccp-creteil",
  "formation-haccp-boulogne-billancourt",
  "formation-haccp-nanterre",
  "formation-haccp-argenteuil",
  "formation-haccp-bordeaux",
  "formation-haccp-rennes",
  "formation-haccp-grenoble",
  "formation-haccp-montpellier",
  "formation-haccp-toulon",
  "formation-haccp-dijon",
  "formation-haccp-angers",
  "formation-haccp-caen",
  "formation-haccp-reims",
  "formation-haccp-rouen",
  "haccp-food-truck-reglementation",
  "formation-haccp-alternance",
  "formation-haccp-week-end",
  "haccp-certification-reconnue",
  "formation-haccp-micro-entrepreneur",
]

const REGIONS = [
  "ile-de-france","auvergne-rhone-alpes","provence-alpes-cote-d-azur",
  "occitanie","nouvelle-aquitaine","hauts-de-france","grand-est",
  "pays-de-la-loire","normandie","bretagne","bourgogne-franche-comte",
  "centre-val-de-loire","corse"
]

const DEPARTEMENTS = [
  // 20 originaux
  "75-paris","69-rhone","13-bouches-du-rhone","31-haute-garonne","33-gironde",
  "59-nord","67-bas-rhin","44-loire-atlantique","76-seine-maritime",
  "06-alpes-maritimes","34-herault","57-moselle","38-isere","63-puy-de-dome",
  "35-ille-et-vilaine","45-loiret","87-haute-vienne","14-calvados",
  "29-finistere","21-cote-d-or",
  // 76 restants
  "01-ain","02-aisne","03-allier","04-alpes-de-haute-provence","05-hautes-alpes",
  "07-ardeche","08-ardennes","09-ariege","10-aube","11-aude","12-aveyron",
  "15-cantal","16-charente","17-charente-maritime","18-cher","19-correze",
  "2A-corse-du-sud","2B-haute-corse","22-cotes-d-armor","23-creuse",
  "24-dordogne","25-doubs","26-drome","27-eure","28-eure-et-loir","30-gard",
  "32-gers","36-indre","37-indre-et-loire","39-jura","40-landes",
  "41-loir-et-cher","42-loire","43-haute-loire","46-lot","47-lot-et-garonne",
  "48-lozere","49-maine-et-loire","50-manche","51-marne","52-haute-marne",
  "53-mayenne","54-meurthe-et-moselle","55-meuse","56-morbihan","58-nievre",
  "60-oise","61-orne","62-pas-de-calais","64-pyrenees-atlantiques",
  "65-hautes-pyrenees","66-pyrenees-orientales","68-haut-rhin","70-haute-saone",
  "71-saone-et-loire","72-sarthe","73-savoie","74-haute-savoie",
  "77-seine-et-marne","78-yvelines","79-deux-sevres","80-somme","81-tarn",
  "82-tarn-et-garonne","83-var","84-vaucluse","85-vendee","86-vienne",
  "88-vosges","89-yonne","90-territoire-de-belfort","91-essonne",
  "92-hauts-de-seine","93-seine-saint-denis","94-val-de-marne","95-val-d-oise"
]

const CROISEMENTS_SECTEURS = ["restaurant","snack","food-truck","boucherie","boulangerie"]
const CROISEMENTS_VILLES = [
  "paris","lyon","marseille","toulouse","bordeaux",
  "lille","nantes","nice","strasbourg","rennes"
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Pages statiques principales ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/formation-hygiene-alimentaire`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/permis-exploitation`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/iso-22000`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/plan-maitrise-sanitaire`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${SITE_URL}/villes`, lastModified: now, changeFrequency: "weekly", priority: 0.90 },
    { url: `${SITE_URL}/devis`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.70 },
    { url: `${SITE_URL}/financement-cpf`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${SITE_URL}/financement-opco`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${SITE_URL}/financement-pole-emploi`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${SITE_URL}/financement-gratuite`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
  ]

  // ── Pages secteurs ──────────────────────────────────────────────────────
  const secteurPages: MetadataRoute.Sitemap = SECTEURS.map(s => ({
    url: `${SITE_URL}/formation-haccp-${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.80
  }))

  // ── Pages financement ───────────────────────────────────────────────────
  const financementPages: MetadataRoute.Sitemap = FINANCEMENTS.map(f => ({
    url: `${SITE_URL}/formation-haccp-${f}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75
  }))

  // ── Pages format ────────────────────────────────────────────────────────
  const formatPages: MetadataRoute.Sitemap = FORMATS.map(f => ({
    url: `${SITE_URL}/formation-haccp-${f}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75
  }))

  // ── Pages villes (merged: villes.ts + villes-5000.ts, deduplicated) ────
  const allSlugs = new Set<string>()
  const villePages: MetadataRoute.Sitemap = []
  for (const v of VILLES) {
    allSlugs.add(v.slug)
    villePages.push({
      url: `${SITE_URL}/formation-haccp-${v.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: v.population > 100000 ? 0.85 : v.population > 50000 ? 0.75 : 0.65
    })
  }
  for (const v of VILLES_5000) {
    if (!allSlugs.has(v.slug)) {
      allSlugs.add(v.slug)
      villePages.push({
        url: `${SITE_URL}/formation-haccp-${v.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: v.population > 100000 ? 0.85 : v.population > 50000 ? 0.75 : 0.65
      })
    }
  }

  // ── Pages régions (13 régions françaises) ──────────────────────────────
  const regionPages: MetadataRoute.Sitemap = REGIONS.map(r => ({
    url: `${SITE_URL}/formation-haccp-${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85
  }))

  // ── Pages départements (20 départements prioritaires) ──────────────────
  const departementPages: MetadataRoute.Sitemap = DEPARTEMENTS.map(d => ({
    url: `${SITE_URL}/formation-haccp-${d}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.80
  }))

  // ── Pages croisements ville × secteur (50 pages) ──────────────────────
  const croisementPages: MetadataRoute.Sitemap = CROISEMENTS_SECTEURS.flatMap(s =>
    CROISEMENTS_VILLES.map(v => ({
      url: `${SITE_URL}/formation-haccp-${s}-${v}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  )

  // ── Pages blog ──────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map(slug => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.60
  }))

  return [
    ...staticPages,
    ...secteurPages,
    ...financementPages,
    ...formatPages,
    ...villePages,
    ...regionPages,
    ...departementPages,
    ...croisementPages,
    ...blogPages,
  ]
}
