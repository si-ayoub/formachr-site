import { MetadataRoute } from "next"
import { VILLES } from "@/data/villes"
import { SITE_URL } from "@/lib/seo"

const SECTEURS = [
  "restaurant","snack","food-truck","boulangerie","boucherie-charcuterie",
  "restauration-collective","hotel","creche","ephad","pizzeria","traiteur"
]

const FINANCEMENTS = ["cpf","opco","gratuite","pole-emploi","financement"]
const FORMATS = ["en-ligne","presentiel","intra-entreprise"]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/formation-hygiene-alimentaire`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/permis-exploitation`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/iso-22000`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/plan-maitrise-sanitaire`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${SITE_URL}/villes`, lastModified: now, changeFrequency: "weekly", priority: 0.90 },
    { url: `${SITE_URL}/devis`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.70 },
  ]

  // Pages secteurs
  const secteurPages: MetadataRoute.Sitemap = SECTEURS.map(s => ({
    url: `${SITE_URL}/formation-haccp-${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.80
  }))

  // Pages financement
  const financementPages: MetadataRoute.Sitemap = FINANCEMENTS.map(f => ({
    url: `${SITE_URL}/formation-haccp-${f}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75
  }))

  // Pages format
  const formatPages: MetadataRoute.Sitemap = FORMATS.map(f => ({
    url: `${SITE_URL}/formation-haccp-${f}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75
  }))

  // Pages villes (750 pages auto-générées)
  const villePages: MetadataRoute.Sitemap = VILLES.map(v => ({
    url: `${SITE_URL}/formation-haccp-${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: v.population > 100000 ? 0.85 : v.population > 50000 ? 0.75 : 0.65
  }))

  return [...staticPages, ...secteurPages, ...financementPages, ...formatPages, ...villePages]
}
