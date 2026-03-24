import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP PACA — Marseille, Nice, Toulon 2026",
  description: "Formation hygiène alimentaire HACCP en PACA : Marseille, Nice, Toulon, Aix-en-Provence, Avignon. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-paca` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en région PACA ?", answer: "Oui, tous les établissements de restauration commerciale de Provence-Alpes-Côte d'Azur doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Cela concerne les 6 départements de la région." },
  { question: "Comment financer la formation HACCP en PACA ?", answer: "La formation peut être financée à 100 % par l'OPCO AKTO pour les salariés du secteur CHR. Les demandeurs d'emploi peuvent solliciter France Travail. Le CPF est également mobilisable pour cette formation." },
  { question: "Quelles sont les spécificités HACCP en PACA ?", answer: "La région PACA est fortement touristique avec une saisonnalité marquée en été. Les restaurants de bord de mer, les établissements saisonniers et les food trucks sur les marchés provençaux doivent tous respecter l'obligation de formation HACCP." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "PACA", url: "/formation-haccp-region-paca" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — PACA",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Provence-Alpes-Côte d'Azur. Attestation DRAAF, financement OPCO.",
        price: "280",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Formations par région</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">PACA</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 PACA — 3e région touristique de France
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">PACA</span><br />
              <span className="text-xl font-bold">Marseille, Nice, Toulon 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Provence-Alpes-Côte d&apos;Azur est l&apos;une des régions les plus touristiques de France. Avec ses milliers de restaurants, bars et commerces alimentaires sur le littoral méditerranéen, la formation HACCP y est un enjeu majeur pour les professionnels de la restauration.
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
            <LeadForm city="Marseille" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en PACA — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en PACA doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La région Provence-Alpes-Côte d&apos;Azur est un territoire d&apos;exception pour la gastronomie méditerranéenne. Marseille, deuxième ville de France, est célèbre pour sa bouillabaisse, ses navettes et sa cuisine provençale riche en huile d&apos;olive, herbes de Provence et produits de la mer. Nice offre sa socca, sa pissaladière et sa salade niçoise, tandis que les marchés provençaux d&apos;Aix-en-Provence et d&apos;Avignon regorgent de produits frais nécessitant une manipulation conforme aux normes HACCP.</p>
            <p>Le secteur touristique en PACA génère une forte demande saisonnière. Chaque été, des milliers de restaurants saisonniers, paillotes de plage, food trucks et glaciers ouvrent sur le littoral méditerranéen, de la Camargue à Menton. Tous ces établissements sont soumis à l&apos;obligation de formation HACCP, et les contrôles sanitaires de la DDPP sont renforcés pendant la période estivale en raison des risques accrus liés à la chaleur.</p>
            <p>La formation dure 14 heures minimum avec 4 heures de mise en pratique obligatoire. Elle couvre les 7 principes HACCP, la réglementation européenne, les dangers alimentaires (particulièrement importants en climat chaud pour la chaîne du froid), le Plan de Maîtrise Sanitaire et la gestion des allergènes. La DRAAF PACA agrée les organismes de formation sur les 6 départements de la région.</p>
            <p>Les Alpes-de-Haute-Provence et les Hautes-Alpes, bien que moins peuplées, connaissent également une activité de restauration importante liée au tourisme de montagne et au thermalisme. Les établissements de ces zones rurales doivent aussi se conformer aux obligations de formation.</p>
            <p>Le financement est accessible via l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail pour les demandeurs d&apos;emploi, et le CPF. Le prix moyen en PACA se situe entre 280 et 450 euros TTC. De nombreux centres de formation proposent des sessions en présentiel à Marseille, Nice, Toulon, Aix-en-Provence et Avignon, ainsi que des formations en ligne.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements de PACA</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-13-bouches-du-rhone" className="text-blue-600 hover:text-blue-800 font-medium underline">Bouches-du-Rhône (13)</Link></li>
            <li><Link href="/formation-haccp-06-alpes-maritimes" className="text-blue-600 hover:text-blue-800 font-medium underline">Alpes-Maritimes (06)</Link></li>
            <li><Link href="/formation-haccp-83-var" className="text-blue-600 hover:text-blue-800 font-medium underline">Var (83)</Link></li>
            <li><Link href="/formation-haccp-84-vaucluse" className="text-blue-600 hover:text-blue-800 font-medium underline">Vaucluse (84)</Link></li>
            <li><Link href="/formation-haccp-05-hautes-alpes" className="text-blue-600 hover:text-blue-800 font-medium underline">Hautes-Alpes (05)</Link></li>
            <li><Link href="/formation-haccp-04-alpes-de-haute-provence" className="text-blue-600 hover:text-blue-800 font-medium underline">Alpes-de-Haute-Provence (04)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Marseille","Nice","Toulon","Aix-en-Provence","Avignon","Cannes","Antibes","Fréjus","Arles","Gap"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
            <p className="text-blue-900 text-sm">
              🔗 Découvrez les restaurants halal à Marseille sur <a href="https://musmap.com/fr/restaurants/marseille" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">musmap.com/fr/restaurants/marseille</a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "20 000+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "280€ – 450€" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP PACA</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en PACA</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
