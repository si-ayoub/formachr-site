import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Normandie — Rouen, Caen, Le Havre 2026",
  description: "Formation hygiène alimentaire HACCP en Normandie : Rouen, Caen, Le Havre, Évreux, Cherbourg. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-normandie` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Normandie ?", answer: "Oui, tous les établissements de restauration commerciale en Normandie doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Les 5 départements normands sont concernés par cette obligation." },
  { question: "Comment financer la formation HACCP en Normandie ?", answer: "L'OPCO AKTO finance à 100 % la formation pour les salariés CHR. France Travail et le CPF sont mobilisables. La Région Normandie propose également des aides pour les créateurs d'entreprise dans le secteur de la restauration." },
  { question: "Quelles sont les spécificités HACCP en Normandie ?", answer: "La Normandie est une région de terroir (camembert, cidre, calvados, crème fraîche) avec un tourisme important sur les plages du Débarquement, le Mont-Saint-Michel et Deauville. Les produits laitiers et la pêche imposent une vigilance HACCP renforcée." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Normandie", url: "/formation-haccp-region-normandie" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Normandie",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Normandie. Attestation DRAAF, financement OPCO.",
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
          <li className="text-gray-800 font-medium">Normandie</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Normandie — Terre de terroir et de tourisme
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Normandie</span><br />
              <span className="text-xl font-bold">Rouen, Caen, Le Havre 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Normandie est une région de terroir réputée pour ses fromages, son cidre, ses fruits de mer et sa crème fraîche. Avec un tourisme historique et balnéaire important, la formation HACCP est essentielle pour ses professionnels de la restauration.
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
            <LeadForm city="Rouen" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Normandie — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Normandie doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La Normandie est un territoire de gastronomie authentique où les produits du terroir occupent une place centrale. Le camembert, le livarot, le pont-l&apos;évêque et le neufchâtel figurent parmi les fromages les plus célèbres de France. La crème fraîche d&apos;Isigny, le beurre normand et le cidre de pays sont des ingrédients emblématiques de la cuisine locale. Les restaurateurs normands doivent maîtriser les principes HACCP, notamment pour la gestion des produits laitiers et de la chaîne du froid.</p>
            <p>La côte normande est riche en produits de la mer. Les huîtres de Saint-Vaast-la-Hougue, les moules de Barfleur, les coquilles Saint-Jacques de la Baie de Seine et le poisson frais débarqué au Havre, Dieppe et Cherbourg imposent une vigilance sanitaire rigoureuse. Les restaurants de fruits de mer, crêperies et bistrots côtiers sont particulièrement concernés par les principes HACCP liés à la conservation et à la traçabilité des produits de la pêche.</p>
            <p>Le tourisme normand est considérable : le Mont-Saint-Michel (plus de 2,5 millions de visiteurs par an), les plages du Débarquement, Honfleur, Deauville-Trouville, Étretat et Giverny attirent des millions de touristes français et internationaux. Cette fréquentation génère une forte activité de restauration saisonnière et permanente.</p>
            <p>La formation dure 14 heures avec 4 heures de pratique obligatoire. Elle couvre les 7 principes HACCP, la réglementation européenne, les dangers alimentaires, le PMS et les allergènes. La DRAAF Normandie agrée les organismes sur les 5 départements.</p>
            <p>Le financement est accessible via l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail, le CPF et les aides de la Région Normandie. Le tarif moyen se situe entre 270 et 420 euros TTC en présentiel.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements de Normandie</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-76-seine-maritime" className="text-blue-600 hover:text-blue-800 font-medium underline">Seine-Maritime (76)</Link></li>
            <li><Link href="/formation-haccp-14-calvados" className="text-blue-600 hover:text-blue-800 font-medium underline">Calvados (14)</Link></li>
            <li><Link href="/formation-haccp-27-eure" className="text-blue-600 hover:text-blue-800 font-medium underline">Eure (27)</Link></li>
            <li><Link href="/formation-haccp-50-manche" className="text-blue-600 hover:text-blue-800 font-medium underline">Manche (50)</Link></li>
            <li><Link href="/formation-haccp-61-orne" className="text-blue-600 hover:text-blue-800 font-medium underline">Orne (61)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Rouen","Caen","Le Havre","Évreux","Cherbourg","Dieppe","Lisieux","Alençon","Deauville","Honfleur"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "9 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Normandie</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Normandie</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
