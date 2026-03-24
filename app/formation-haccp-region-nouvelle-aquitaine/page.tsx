import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Nouvelle-Aquitaine — Bordeaux, Limoges, Pau 2026",
  description: "Formation hygiène alimentaire HACCP en Nouvelle-Aquitaine : Bordeaux, Limoges, Pau, La Rochelle, Périgueux. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-nouvelle-aquitaine` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Nouvelle-Aquitaine ?", answer: "Oui, tous les établissements de restauration commerciale en Nouvelle-Aquitaine doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Cette obligation concerne les 12 départements de la région." },
  { question: "Comment financer la formation HACCP en Nouvelle-Aquitaine ?", answer: "L'OPCO AKTO finance à 100 % la formation pour les salariés du secteur CHR. France Travail propose des aides pour les demandeurs d'emploi. Le CPF et les dispositifs de la Région Nouvelle-Aquitaine sont également mobilisables." },
  { question: "Quelles sont les spécificités HACCP en Nouvelle-Aquitaine ?", answer: "La Nouvelle-Aquitaine est la plus grande région de France. Sa gastronomie riche (vins de Bordeaux, huîtres du Bassin d'Arcachon, canard, foie gras) et son tourisme balnéaire atlantique imposent une vigilance particulière sur l'hygiène alimentaire." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Nouvelle-Aquitaine", url: "/formation-haccp-region-nouvelle-aquitaine" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Nouvelle-Aquitaine",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Nouvelle-Aquitaine. Attestation DRAAF, financement OPCO.",
        price: "270",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Formations par région</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Nouvelle-Aquitaine</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Nouvelle-Aquitaine — Plus grande région de France
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Nouvelle-Aquitaine</span><br />
              <span className="text-xl font-bold">Bordeaux, Limoges, Pau 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Nouvelle-Aquitaine est la plus grande région de France métropolitaine par sa superficie. Terre de gastronomie et de vins prestigieux, elle compte des milliers d&apos;établissements de restauration soumis à l&apos;obligation de formation HACCP.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["✅", "Organismes agréés DRAAF"],
                ["📋", "Attestation officielle 14h"],
                ["💰", "Financement OPCO 100%"],
                ["⚡", "Sessions chaque semaine"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2">{icon} {text}</div>
              ))}
            </div>
          </div>
          <div>
            <LeadForm city="Bordeaux" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Nouvelle-Aquitaine — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Nouvelle-Aquitaine doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La Nouvelle-Aquitaine est un territoire d&apos;exception pour la gastronomie française. Bordeaux, classée au patrimoine mondial de l&apos;UNESCO, est la capitale mondiale du vin et abrite une scène culinaire d&apos;une richesse remarquable. Les restaurants bordelais, des bistrots du quartier Saint-Pierre aux tables étoilées de la Cité du Vin, doivent tous se conformer aux obligations de formation HACCP.</p>
            <p>Le littoral atlantique de la région, de Royan à Hendaye en passant par le Bassin d&apos;Arcachon et Biarritz, concentre une activité touristique et de restauration considérable. Les huîtres d&apos;Arcachon, les produits de la mer de La Rochelle et la cuisine basque de Bayonne et Saint-Jean-de-Luz nécessitent une maîtrise parfaite de la chaîne du froid et des principes HACCP. La saisonnalité estivale génère une forte demande de formation pour les établissements saisonniers.</p>
            <p>L&apos;arrière-pays néo-aquitain est tout aussi riche gastronomiquement. Le Périgord est célèbre pour ses truffes, son foie gras et ses confits de canard. Le Limousin produit une viande bovine réputée. Le Pays basque offre ses fromages, son jambon de Bayonne et son piment d&apos;Espelette. Toutes ces filières imposent aux restaurateurs et traiteurs une formation rigoureuse en hygiène alimentaire.</p>
            <p>La formation dure 14 heures minimum avec 4 heures de mise en pratique obligatoire. Elle aborde les 7 principes HACCP, la réglementation européenne, les dangers alimentaires, le Plan de Maîtrise Sanitaire et les allergènes. La DRAAF Nouvelle-Aquitaine, basée à Bordeaux, agrée les organismes sur les 12 départements.</p>
            <p>Le financement est accessible via l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail pour les demandeurs d&apos;emploi, le CPF et les aides régionales. Le tarif moyen se situe entre 270 et 430 euros TTC. Des sessions sont disponibles chaque semaine à Bordeaux, Limoges, Pau, La Rochelle, Périgueux et dans les principales villes de la région.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements de Nouvelle-Aquitaine</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-33-gironde" className="text-blue-600 hover:text-blue-800 font-medium underline">Gironde (33)</Link></li>
            <li><Link href="/formation-haccp-87-haute-vienne" className="text-blue-600 hover:text-blue-800 font-medium underline">Haute-Vienne (87)</Link></li>
            <li><Link href="/formation-haccp-64-pyrenees-atlantiques" className="text-blue-600 hover:text-blue-800 font-medium underline">Pyrénées-Atlantiques (64)</Link></li>
            <li><Link href="/formation-haccp-17-charente-maritime" className="text-blue-600 hover:text-blue-800 font-medium underline">Charente-Maritime (17)</Link></li>
            <li><Link href="/formation-haccp-24-dordogne" className="text-blue-600 hover:text-blue-800 font-medium underline">Dordogne (24)</Link></li>
            <li><Link href="/formation-haccp-16-charente" className="text-blue-600 hover:text-blue-800 font-medium underline">Charente (16)</Link></li>
            <li><Link href="/formation-haccp-19-correze" className="text-blue-600 hover:text-blue-800 font-medium underline">Corrèze (19)</Link></li>
            <li><Link href="/formation-haccp-23-creuse" className="text-blue-600 hover:text-blue-800 font-medium underline">Creuse (23)</Link></li>
            <li><Link href="/formation-haccp-40-landes" className="text-blue-600 hover:text-blue-800 font-medium underline">Landes (40)</Link></li>
            <li><Link href="/formation-haccp-47-lot-et-garonne" className="text-blue-600 hover:text-blue-800 font-medium underline">Lot-et-Garonne (47)</Link></li>
            <li><Link href="/formation-haccp-79-deux-sevres" className="text-blue-600 hover:text-blue-800 font-medium underline">Deux-Sèvres (79)</Link></li>
            <li><Link href="/formation-haccp-86-vienne" className="text-blue-600 hover:text-blue-800 font-medium underline">Vienne (86)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Bordeaux","Limoges","Pau","La Rochelle","Périgueux","Bayonne","Angoulême","Biarritz","Poitiers","Agen"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
            <p className="text-blue-900 text-sm">
              🔗 Découvrez les restaurants halal à Bordeaux sur <a href="https://musmap.com/fr/restaurants/bordeaux" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">musmap.com/fr/restaurants/bordeaux</a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "16 000+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "270€ – 430€" },
              { label: "Financement OPCO", value: "100%" },
            ].map(stat => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Nouvelle-Aquitaine</h2>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <details key={i} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  {faq.question}<span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Nouvelle-Aquitaine</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
