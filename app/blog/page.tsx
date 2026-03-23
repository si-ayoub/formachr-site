import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Blog HACCP & Hygiène Alimentaire — Guides et Réglementation",
  description: "Articles experts sur la formation HACCP, l'hygiène alimentaire en restauration, la réglementation sanitaire et les certifications alimentaires en France.",
  alternates: { canonical: `${SITE_URL}/blog` }
}

const ARTICLES = [
  { slug: "7-principes-haccp", titre: "Les 7 principes de la méthode HACCP expliqués simplement", temps: "8 min", categorie: "Guide HACCP", emoji: "📋" },
  { slug: "controle-sanitaire-restaurant-preparer", titre: "Contrôle sanitaire restaurant : comment s'y préparer et éviter les sanctions", temps: "10 min", categorie: "Réglementation", emoji: "⚖️" },
  { slug: "difference-haccp-hygiene-alimentaire", titre: "Différence entre formation HACCP et hygiène alimentaire : ce que dit la loi", temps: "6 min", categorie: "Réglementation", emoji: "⚖️" },
  { slug: "formation-haccp-gratuite-opco", titre: "Comment obtenir la formation HACCP gratuite via l'OPCO AKTO", temps: "7 min", categorie: "Financement", emoji: "💰" },
  { slug: "allergenes-14-obligatoires-restaurant", titre: "Les 14 allergènes obligatoires : obligations et bonnes pratiques", temps: "8 min", categorie: "Guide HACCP", emoji: "📋" },
  { slug: "plan-maitrise-sanitaire-exemple", titre: "Plan de Maîtrise Sanitaire (PMS) : modèle et exemple pour restaurant", temps: "12 min", categorie: "Guide HACCP", emoji: "📋" },
  { slug: "formation-haccp-food-truck-obligations", titre: "Food truck : quelles obligations HACCP ? Tout ce qu'il faut savoir", temps: "6 min", categorie: "Secteurs", emoji: "🚚" },
  { slug: "temperatures-conservation-aliments", titre: "Températures de conservation des aliments : guide complet restauration", temps: "9 min", categorie: "Guide pratique", emoji: "🌡️" },
  { slug: "iso-22000-vs-haccp-difference", titre: "ISO 22000 vs HACCP : quelles différences ? Laquelle choisir ?", temps: "8 min", categorie: "Certifications", emoji: "🏆" },
  { slug: "ouvrir-restaurant-formations-obligatoires", titre: "Ouvrir un restaurant : les 4 formations obligatoires à connaître", temps: "7 min", categorie: "Création", emoji: "🚀" },
]

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li><li>›</li>
          <li className="text-gray-800">Blog</li>
        </ol>
      </nav>
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">Blog Formation HACCP & Hygiène Alimentaire</h1>
        <p className="text-gray-600 max-w-2xl">Guides pratiques, analyses réglementaires et conseils d&apos;experts pour les professionnels de la restauration.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map(a => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-32 flex items-center justify-center">
              <span className="text-5xl">{a.emoji}</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{a.categorie}</span>
                <span className="text-xs text-gray-400">{a.temps}</span>
              </div>
              <h2 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug text-sm">{a.titre}</h2>
              <div className="mt-3 text-blue-600 text-xs font-medium group-hover:underline">Lire l&apos;article →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
