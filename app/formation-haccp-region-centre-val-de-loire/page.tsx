import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Centre-Val de Loire — Tours, Orléans, Bourges 2026",
  description: "Formation hygiène alimentaire HACCP en Centre-Val de Loire : Tours, Orléans, Bourges, Chartres, Blois. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-centre-val-de-loire` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Centre-Val de Loire ?", answer: "Oui, tous les établissements de restauration commerciale en Centre-Val de Loire doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Les 6 départements de la région sont concernés par cette obligation." },
  { question: "Comment financer la formation HACCP en Centre-Val de Loire ?", answer: "L'OPCO AKTO prend en charge à 100 % la formation pour les salariés du secteur CHR. France Travail et le CPF sont mobilisables. La Région Centre-Val de Loire propose également des aides pour les professionnels en reconversion." },
  { question: "Quelles sont les spécificités HACCP en Centre-Val de Loire ?", answer: "La région est célèbre pour ses châteaux de la Loire qui attirent des millions de touristes, ses vins de Loire (Vouvray, Chinon, Sancerre) et sa gastronomie de terroir (rillettes de Tours, tarte Tatin, fromages de chèvre). Le tourisme culturel impose une offre de restauration de qualité." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Centre-Val de Loire", url: "/formation-haccp-region-centre-val-de-loire" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Centre-Val de Loire",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Centre-Val de Loire. Attestation DRAAF, financement OPCO.",
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
          <li className="text-gray-800 font-medium">Centre-Val de Loire</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Centre-Val de Loire — Châteaux, vins et gastronomie
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Centre-Val de Loire</span><br />
              <span className="text-xl font-bold">Tours, Orléans, Bourges 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Le Centre-Val de Loire, terre des châteaux et des vins de Loire, accueille chaque année des millions de touristes. Restaurants gastronomiques, auberges de charme et bistrots de terroir : la formation HACCP est essentielle pour accompagner cette activité.
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
            <LeadForm city="Tours" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Centre-Val de Loire — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Centre-Val de Loire doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Le Centre-Val de Loire est une région de patrimoine et de gastronomie. Les châteaux de la Loire (Chambord, Chenonceau, Amboise, Azay-le-Rideau, Villandry) attirent chaque année plus de 10 millions de visiteurs qui fréquentent les restaurants, auberges et tables d&apos;hôtes de la région. Cette fréquentation touristique impose aux professionnels de la restauration une maîtrise rigoureuse des principes HACCP.</p>
            <p>La cuisine du Val de Loire est réputée pour sa finesse et sa diversité. Les rillettes de Tours, la tarte Tatin, les rillons, le fromage de chèvre Sainte-Maure-de-Touraine, le crottin de Chavignol et les vins de Loire (Vouvray, Chinon, Bourgueil, Sancerre, Pouilly-Fumé) sont autant de spécialités qui font la richesse de la table ligérienne. La manipulation de ces produits, notamment les fromages au lait cru et les charcuteries artisanales, nécessite une formation HACCP approfondie.</p>
            <p>Tours, ville d&apos;art et d&apos;histoire, est le coeur gastronomique de la région avec son marché couvert et sa vie culinaire animée. Orléans, préfecture de région, développe une scène de restauration moderne et diversifiée. Chartres attire les visiteurs de sa cathédrale et de ses spectacles de lumière. Bourges, avec son patrimoine médiéval, et Blois, porte d&apos;entrée des châteaux, complètent l&apos;offre touristique et culinaire régionale.</p>
            <p>La formation dure 14 heures avec 4 heures de pratique obligatoire. Elle couvre les 7 principes HACCP, la réglementation européenne, les dangers alimentaires, le PMS et les allergènes. La DRAAF Centre-Val de Loire agrée les organismes sur les 6 départements.</p>
            <p>Le financement est facilité par l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail, le CPF et les aides de la Région Centre-Val de Loire. Le tarif moyen se situe entre 270 et 420 euros TTC en présentiel.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements du Centre-Val de Loire</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-45-loiret" className="text-blue-600 hover:text-blue-800 font-medium underline">Loiret (45)</Link></li>
            <li><Link href="/formation-haccp-37-indre-et-loire" className="text-blue-600 hover:text-blue-800 font-medium underline">Indre-et-Loire (37)</Link></li>
            <li><Link href="/formation-haccp-18-cher" className="text-blue-600 hover:text-blue-800 font-medium underline">Cher (18)</Link></li>
            <li><Link href="/formation-haccp-28-eure-et-loir" className="text-blue-600 hover:text-blue-800 font-medium underline">Eure-et-Loir (28)</Link></li>
            <li><Link href="/formation-haccp-41-loir-et-cher" className="text-blue-600 hover:text-blue-800 font-medium underline">Loir-et-Cher (41)</Link></li>
            <li><Link href="/formation-haccp-36-indre" className="text-blue-600 hover:text-blue-800 font-medium underline">Indre (36)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Tours","Orléans","Bourges","Chartres","Blois","Châteauroux","Dreux","Vierzon","Amboise","Vendôme"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "6 500+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Centre-Val de Loire</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Centre-Val de Loire</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
