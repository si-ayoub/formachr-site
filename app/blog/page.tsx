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
  { slug: "financer-formation-haccp-opco", titre: "Financer sa formation HACCP par l'OPCO — Guide complet 2026", temps: "10 min", categorie: "Financement", emoji: "💶" },
  { slug: "formation-haccp-food-truck", titre: "Formation HACCP Food Truck — Obligations et guide pratique 2026", temps: "12 min", categorie: "Secteurs", emoji: "🚚" },
  { slug: "plan-maitrise-sanitaire-pms", titre: "Plan de Maîtrise Sanitaire (PMS) — Guide complet et modèle 2026", temps: "14 min", categorie: "Guide HACCP", emoji: "📋" },
  { slug: "controle-sanitaire-restaurant", titre: "Contrôle sanitaire restaurant — Préparer et réussir l'inspection 2026", temps: "13 min", categorie: "Réglementation", emoji: "⚖️" },
  { slug: "formation-haccp-boucherie", titre: "Formation HACCP Boucherie Charcuterie — Obligations et Programme 2026", temps: "10 min", categorie: "Secteurs", emoji: "🥩" },
  { slug: "permis-exploitation-guide-complet", titre: "Permis d'Exploitation 2026 — Guide Complet, Prix et Obligations", temps: "11 min", categorie: "Réglementation", emoji: "📜" },
  { slug: "formation-haccp-prix-2026", titre: "Prix formation HACCP 2026 — Tarifs, comparatif et financement", temps: "10 min", categorie: "Financement", emoji: "💰" },
  { slug: "formation-haccp-en-ligne-vs-presentiel", titre: "Formation HACCP en ligne vs présentiel — Comparatif complet 2026", temps: "10 min", categorie: "Guide HACCP", emoji: "📋" },
  { slug: "allergenes-restauration-obligations", titre: "14 allergènes en restauration — Obligations légales et affichage 2026", temps: "12 min", categorie: "Réglementation", emoji: "⚠️" },
  { slug: "formation-haccp-gratuite-pole-emploi", titre: "Formation HACCP gratuite Pôle Emploi — Guide France Travail 2026", temps: "11 min", categorie: "Financement", emoji: "💶" },
  { slug: "formation-haccp-boulangerie", titre: "Formation HACCP Boulangerie — Obligations et Guide Complet 2026", temps: "10 min", categorie: "Secteurs", emoji: "🥐" },
  { slug: "formation-haccp-traiteur", titre: "Formation HACCP Traiteur — Règles d'Hygiène pour Traiteurs 2026", temps: "10 min", categorie: "Secteurs", emoji: "🍽️" },
  { slug: "formation-haccp-ehpad", titre: "Formation HACCP EHPAD — Hygiène Alimentaire en Maison de Retraite", temps: "10 min", categorie: "Secteurs", emoji: "🏥" },
  { slug: "formation-haccp-creche", titre: "Formation HACCP Crèche — Alimentation Nourrissons et Jeunes Enfants", temps: "10 min", categorie: "Secteurs", emoji: "👶" },
  { slug: "formation-haccp-pizzeria", titre: "Formation HACCP Pizzeria — Guide Hygiène pour Pizzaïolos 2026", temps: "10 min", categorie: "Secteurs", emoji: "🍕" },
  { slug: "reglementation-haccp-2026", titre: "Réglementation HACCP 2026 — Nouvelles Obligations Restaurateurs", temps: "12 min", categorie: "Réglementation", emoji: "⚖️" },
  { slug: "cout-formation-haccp", titre: "Combien Coûte une Formation HACCP ? Prix et Financements 2026", temps: "8 min", categorie: "Financement", emoji: "💰" },
  { slug: "formation-haccp-en-ligne-gratuite", titre: "Formation HACCP En Ligne Gratuite — Est-ce Possible en 2026 ?", temps: "9 min", categorie: "Financement", emoji: "💻" },
  { slug: "haccp-restauration-collective", titre: "HACCP Restauration Collective — Obligations Cantines et Self-Service", temps: "11 min", categorie: "Secteurs", emoji: "🏫" },
  { slug: "formation-haccp-ile-de-france", titre: "Formation HACCP Île-de-France — Paris, Versailles, Saint-Denis 2026", temps: "10 min", categorie: "Régions", emoji: "🗼" },
  { slug: "formation-haccp-versailles", titre: "Formation HACCP Versailles — Guide Yvelines 2026", temps: "10 min", categorie: "Villes", emoji: "🏰" },
  { slug: "formation-haccp-creteil", titre: "Formation HACCP Créteil — Val-de-Marne 2026", temps: "10 min", categorie: "Villes", emoji: "🏙️" },
  { slug: "formation-haccp-boulogne-billancourt", titre: "Formation HACCP Boulogne-Billancourt — Hauts-de-Seine 2026", temps: "10 min", categorie: "Villes", emoji: "🏙️" },
  { slug: "formation-haccp-nanterre", titre: "Formation HACCP Nanterre — Hauts-de-Seine 2026", temps: "10 min", categorie: "Villes", emoji: "🏙️" },
  { slug: "formation-haccp-argenteuil", titre: "Formation HACCP Argenteuil — Val-d'Oise 2026", temps: "10 min", categorie: "Villes", emoji: "🏙️" },
  { slug: "formation-haccp-bordeaux", titre: "Formation HACCP Bordeaux — Gironde 2026", temps: "10 min", categorie: "Villes", emoji: "🍷" },
  { slug: "formation-haccp-rennes", titre: "Formation HACCP Rennes — Bretagne 2026", temps: "10 min", categorie: "Villes", emoji: "🥞" },
  { slug: "formation-haccp-grenoble", titre: "Formation HACCP Grenoble — Isère 2026", temps: "10 min", categorie: "Villes", emoji: "🏔️" },
  { slug: "formation-haccp-montpellier", titre: "Formation HACCP Montpellier — Hérault 2026", temps: "10 min", categorie: "Villes", emoji: "☀️" },
  { slug: "formation-haccp-toulon", titre: "Formation HACCP Toulon — Var 2026", temps: "10 min", categorie: "Villes", emoji: "⚓" },
  { slug: "formation-haccp-dijon", titre: "Formation HACCP Dijon — Côte-d'Or 2026", temps: "10 min", categorie: "Villes", emoji: "🍇" },
  { slug: "formation-haccp-angers", titre: "Formation HACCP Angers — Maine-et-Loire 2026", temps: "10 min", categorie: "Villes", emoji: "🏰" },
  { slug: "formation-haccp-caen", titre: "Formation HACCP Caen — Calvados 2026", temps: "10 min", categorie: "Villes", emoji: "🧈" },
  { slug: "formation-haccp-reims", titre: "Formation HACCP Reims — Marne 2026", temps: "10 min", categorie: "Villes", emoji: "🍾" },
  { slug: "formation-haccp-rouen", titre: "Formation HACCP Rouen — Seine-Maritime 2026", temps: "10 min", categorie: "Villes", emoji: "⛵" },
  { slug: "haccp-food-truck-reglementation", titre: "Réglementation HACCP Food Truck 2026 — Code NAF, DDPP, Obligations", temps: "12 min", categorie: "Réglementation", emoji: "🚚" },
  { slug: "formation-haccp-alternance", titre: "Formation HACCP en Alternance 2026 — Guide Apprentissage", temps: "10 min", categorie: "Guide HACCP", emoji: "🎓" },
  { slug: "formation-haccp-week-end", titre: "Formation HACCP le Week-end — Organismes 2026", temps: "9 min", categorie: "Guide HACCP", emoji: "📅" },
  { slug: "haccp-certification-reconnue", titre: "Certification HACCP Reconnue — Qualiopi et Agréments 2026", temps: "11 min", categorie: "Réglementation", emoji: "🏆" },
  { slug: "formation-haccp-micro-entrepreneur", titre: "Formation HACCP Auto-Entrepreneur 2026 — Guide Micro-Entreprise", temps: "10 min", categorie: "Guide HACCP", emoji: "💼" },
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
