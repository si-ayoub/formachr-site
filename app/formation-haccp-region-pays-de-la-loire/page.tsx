import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Pays de la Loire — Nantes, Angers, Le Mans 2026",
  description: "Formation hygiène alimentaire HACCP en Pays de la Loire : Nantes, Angers, Le Mans, Saint-Nazaire, La Roche-sur-Yon. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-pays-de-la-loire` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Pays de la Loire ?", answer: "Oui, tous les établissements de restauration commerciale en Pays de la Loire doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Les 5 départements de la région sont concernés." },
  { question: "Comment financer la formation HACCP en Pays de la Loire ?", answer: "L'OPCO AKTO prend en charge à 100 % la formation pour les salariés du secteur CHR. France Travail et le CPF sont mobilisables. La Région Pays de la Loire propose des aides complémentaires aux porteurs de projet." },
  { question: "Où suivre une formation HACCP en Pays de la Loire ?", answer: "Des sessions sont proposées à Nantes, Angers, Le Mans, Saint-Nazaire, La Roche-sur-Yon, Laval, Cholet et Les Sables-d'Olonne. Des formations en ligne sont également disponibles." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Pays de la Loire", url: "/formation-haccp-region-pays-de-la-loire" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Pays de la Loire",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Pays de la Loire. Attestation DRAAF, financement OPCO.",
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
          <li className="text-gray-800 font-medium">Pays de la Loire</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Pays de la Loire — 5 départements dynamiques
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Pays de la Loire</span><br />
              <span className="text-xl font-bold">Nantes, Angers, Le Mans 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Les Pays de la Loire sont une région en plein essor démographique et économique. Nantes, sixième ville de France, et ses voisines Angers et Le Mans concentrent une offre de restauration variée où la formation HACCP est incontournable.
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
            <LeadForm city="Nantes" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Pays de la Loire — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Pays de la Loire doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Les Pays de la Loire sont une région attractive où la restauration connaît un fort développement. Nantes, métropole dynamique élue à plusieurs reprises parmi les villes les plus agréables de France, dispose d&apos;une scène culinaire innovante mêlant cuisine traditionnelle ligérienne, bistronomie et restauration internationale. Le quartier du Bouffay, les Machines de l&apos;île et le Voyage à Nantes attirent des centaines de milliers de visiteurs qui dynamisent le secteur.</p>
            <p>La cuisine ligérienne est marquée par les produits de la Loire et de l&apos;Atlantique : beurre blanc nantais, mogettes vendéennes, rillettes du Mans, muscadet et vins du Val de Loire. Les poissons et fruits de mer de la côte vendéenne et de Saint-Nazaire nécessitent une maîtrise rigoureuse de la chaîne du froid et des principes HACCP.</p>
            <p>Le littoral vendéen (Les Sables-d&apos;Olonne, Saint-Jean-de-Monts, Noirmoutier) connaît une forte saisonnalité touristique estivale avec de nombreux restaurants saisonniers, crêperies et glaciers. La formation HACCP est particulièrement demandée avant chaque saison. Le Mans, avec ses 24 Heures et son patrimoine médiéval, génère également un tourisme important.</p>
            <p>La formation dure 14 heures minimum avec 4 heures de mise en pratique obligatoire. Le programme couvre les 7 principes HACCP, la réglementation européenne, les dangers alimentaires, le PMS et les allergènes. La DRAAF Pays de la Loire agrée les organismes sur les 5 départements.</p>
            <p>Le financement est facilité par l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail, le CPF et les aides régionales. Le tarif moyen se situe entre 270 et 420 euros TTC. Des sessions sont disponibles chaque semaine dans les principales villes de la région.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements des Pays de la Loire</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-44-loire-atlantique" className="text-blue-600 hover:text-blue-800 font-medium underline">Loire-Atlantique (44)</Link></li>
            <li><Link href="/formation-haccp-49-maine-et-loire" className="text-blue-600 hover:text-blue-800 font-medium underline">Maine-et-Loire (49)</Link></li>
            <li><Link href="/formation-haccp-72-sarthe" className="text-blue-600 hover:text-blue-800 font-medium underline">Sarthe (72)</Link></li>
            <li><Link href="/formation-haccp-85-vendee" className="text-blue-600 hover:text-blue-800 font-medium underline">Vendée (85)</Link></li>
            <li><Link href="/formation-haccp-53-mayenne" className="text-blue-600 hover:text-blue-800 font-medium underline">Mayenne (53)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Nantes","Angers","Le Mans","Saint-Nazaire","La Roche-sur-Yon","Laval","Cholet","Les Sables-d'Olonne","Saumur","Saint-Herblain"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['\s]+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "10 000+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "270€ – 420€" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Pays de la Loire</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Pays de la Loire</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
