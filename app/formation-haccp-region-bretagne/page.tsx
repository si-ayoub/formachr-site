import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Bretagne — Rennes, Brest, Lorient 2026",
  description: "Formation hygiène alimentaire HACCP en Bretagne : Rennes, Brest, Lorient, Vannes, Saint-Brieuc. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-bretagne` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Bretagne ?", answer: "Oui, tous les établissements de restauration commerciale en Bretagne doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Les 4 départements bretons sont concernés par cette obligation légale." },
  { question: "Comment financer la formation HACCP en Bretagne ?", answer: "L'OPCO AKTO prend en charge à 100 % la formation pour les salariés du secteur CHR. France Travail et le CPF sont mobilisables. La Région Bretagne dispose également de dispositifs d'aide à la formation professionnelle." },
  { question: "Quelles sont les spécificités HACCP en Bretagne ?", answer: "La Bretagne est une région maritime avec une forte tradition de crêperies, de restaurants de fruits de mer et de pêche. La manipulation des produits de la mer, des galettes de sarrasin et du beurre salé impose une maîtrise rigoureuse des principes HACCP." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Bretagne", url: "/formation-haccp-region-bretagne" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Bretagne",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Bretagne. Attestation DRAAF, financement OPCO.",
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
          <li className="text-gray-800 font-medium">Bretagne</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Bretagne — Terre maritime et gastronomique
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Bretagne</span><br />
              <span className="text-xl font-bold">Rennes, Brest, Lorient 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Bretagne, avec ses 2 700 km de côtes, est une région maritime par excellence. Crêperies, restaurants de fruits de mer, bistrots portuaires et food trucks : la formation HACCP est indispensable pour tous les professionnels bretons.
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
            <LeadForm city="Rennes" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Bretagne — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Bretagne doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La Bretagne est l&apos;une des régions les plus identitaires de France sur le plan culinaire. Les crêperies bretonnes, véritables institutions, proposent des galettes de sarrasin et des crêpes de froment préparées avec le beurre salé local. Ces établissements, qu&apos;ils soient traditionnels ou modernes, sont tous soumis à l&apos;obligation de formation HACCP. La maîtrise de l&apos;hygiène est essentielle pour garantir la sécurité des garnitures (jambon, fromage, oeuf, produits de la mer).</p>
            <p>La pêche bretonne est l&apos;une des plus importantes de France. Lorient, Concarneau, Douarnenez, Saint-Malo et Brest sont des ports de pêche majeurs. Les restaurants de fruits de mer qui jalonnent le littoral breton servent huîtres de Cancale, homards, langoustines, coquilles Saint-Jacques et bar de ligne. Ces produits très périssables nécessitent une maîtrise parfaite de la chaîne du froid et des principes HACCP.</p>
            <p>Le tourisme balnéaire et culturel en Bretagne est considérable. Saint-Malo, Dinard, Carnac, Quiberon, Belle-Île-en-Mer et la Côte de Granit Rose attirent des millions de visiteurs chaque été. La saisonnalité touristique génère une forte demande de formation HACCP pour les établissements saisonniers qui ouvrent de mai à septembre.</p>
            <p>Rennes, capitale régionale et ville universitaire dynamique, dispose d&apos;une scène gastronomique en plein renouveau avec des bistronomies, des bars à galettes modernes et une restauration internationale diversifiée. Brest développe également son offre culinaire autour de son port et de son Océanopolis.</p>
            <p>Le financement est facilité par l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail, le CPF et les dispositifs de la Région Bretagne. Le tarif moyen se situe entre 270 et 420 euros TTC en présentiel.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements de Bretagne</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-35-ille-et-vilaine" className="text-blue-600 hover:text-blue-800 font-medium underline">Ille-et-Vilaine (35)</Link></li>
            <li><Link href="/formation-haccp-29-finistere" className="text-blue-600 hover:text-blue-800 font-medium underline">Finistère (29)</Link></li>
            <li><Link href="/formation-haccp-56-morbihan" className="text-blue-600 hover:text-blue-800 font-medium underline">Morbihan (56)</Link></li>
            <li><Link href="/formation-haccp-22-cotes-d-armor" className="text-blue-600 hover:text-blue-800 font-medium underline">Côtes-d&apos;Armor (22)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Rennes","Brest","Lorient","Vannes","Saint-Brieuc","Quimper","Saint-Malo","Lannion","Concarneau","Fougères"].map(v => (
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Bretagne</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Bretagne</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
