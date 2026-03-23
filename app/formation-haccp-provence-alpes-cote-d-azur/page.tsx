import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Provence-Alpes-Côte d&apos;Azur — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Provence-Alpes-Côte d&apos;Azur. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-provence-alpes-cote-d-azur` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en PACA ?", answer: "Oui, tous les établissements de restauration commerciale en Provence-Alpes-Côte d&apos;Azur sont soumis à l&apos;obligation de formation HACCP. Cela concerne les restaurants, snacks, food trucks, traiteurs et commerces alimentaires des 6 départements de la région." },
  { question: "Les saisonniers doivent-ils suivre la formation HACCP en PACA ?", answer: "L&apos;obligation porte sur l&apos;établissement : au moins un membre du personnel doit détenir l&apos;attestation. Il est recommandé de former les saisonniers avant la saison estivale pour garantir la conformité lors des contrôles." },
  { question: "Quel est le prix de la formation HACCP à Marseille ou Nice ?", answer: "Le tarif varie entre 290 € et 490 € TTC en présentiel. Des formations en ligne sont proposées à partir de 200 €. Le financement OPCO AKTO peut couvrir 100 % du coût pour les salariés du secteur CHR." },
  { question: "Quand suivre la formation HACCP en PACA ?", answer: "Des sessions sont disponibles toute l&apos;année. Il est conseillé de planifier la formation entre mars et mai pour être prêt avant la haute saison touristique. Les organismes proposent également des sessions accélérées." },
  { question: "Les restaurants de plage sont-ils soumis à la formation HACCP ?", answer: "Oui, tous les établissements de restauration commerciale, y compris les paillotes et restaurants de plage, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire. Les contrôles DDPP sont renforcés sur le littoral en été." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Provence-Alpes-Côte d&apos;Azur", url: "/formation-haccp-provence-alpes-cote-d-azur" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Provence-Alpes-Côte d&apos;Azur",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Provence-Alpes-Côte d&apos;Azur",
        city: "Marseille",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Provence-Alpes-Côte d&apos;Azur",
        city: "Marseille",
        postalCode: "13001",
        lat: 43.2965,
        lng: 5.3698
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Provence-Alpes-Côte d&apos;Azur</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Provence-Alpes-Côte d&apos;Azur — 28 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Provence-Alpes-Côte d&apos;Azur</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La région Provence-Alpes-Côte d&apos;Azur (PACA) est l&apos;une des destinations touristiques les plus fréquentées de France. Avec plus de 28 000 établissements de restauration et une forte saisonnalité estivale, la formation HACCP revêt une importance particulière pour les professionnels de la restauration en PACA.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["✅", "Organismes agréés DRAAF"],
                ["📋", "Attestation officielle"],
                ["💰", "Financement OPCO possible"],
                ["⚡", "Sessions disponibles rapidement"],
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
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Provence-Alpes-Côte d&apos;Azur — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Provence-Alpes-Côte d&apos;Azur doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF PACA, basée à Marseille, agrée les organismes de formation en hygiène alimentaire pour les 6 départements de la région : Bouches-du-Rhône (13), Var (83), Alpes-Maritimes (06), Vaucluse (84), Alpes-de-Haute-Provence (04) et Hautes-Alpes (05). La côte méditerranéenne concentre la majorité des établissements, avec une densité particulièrement élevée entre Marseille et Menton.</p>
            <p>La Côte d&apos;Azur accueille chaque année des millions de touristes, ce qui génère une demande importante en restauration, notamment pendant la saison estivale. Restaurants de plage, paillotes, snacks de bord de mer, food trucks des marchés provençaux : tous ces établissements sont soumis à l&apos;obligation de formation HACCP. Les villes de Nice, Cannes, Saint-Tropez et Antibes voient leur nombre de restaurants doubler en été, nécessitant des sessions de formation régulières pour le personnel saisonnier.</p>
            <p>Le programme de formation HACCP en PACA dure 14 heures et aborde les spécificités de la cuisine méditerranéenne : conservation des produits de la mer (bouillabaisse, poissons grillés), gestion des températures en climat chaud, manipulation de l&apos;huile d&apos;olive et des herbes de Provence, sécurité des buffets en extérieur. L&apos;arrêté du 12 février 2024 renforce la partie pratique avec 4 heures minimum de mise en situation.</p>
            <p>Le financement est accessible via l&apos;OPCO AKTO (salariés CHR), France Travail (demandeurs d&apos;emploi) et les aides régionales. En PACA, le prix moyen est de 290 € à 490 € TTC. Les sessions sont disponibles toute l&apos;année à Marseille, Nice, Toulon et Aix-en-Provence, avec des sessions renforcées avant la saison estivale (mars-mai) pour préparer l&apos;afflux de saisonniers.</p>
            <p>Les services de la DDPP en PACA sont particulièrement vigilants pendant la saison estivale. Les contrôles se concentrent sur les établissements saisonniers, les restaurants de plage et les food trucks. La chaleur méditerranéenne impose une rigueur accrue dans le respect de la chaîne du froid. Les professionnels de la restauration en PACA doivent maîtriser les températures de conservation, le transport des denrées et la gestion des terrasses extérieures, points critiques fréquemment contrôlés.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Provence-Alpes-Côte d&apos;Azur</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-marseille" className="text-blue-600 hover:text-blue-800 font-medium underline">Marseille</Link></li>
                <li><Link href="/formation-haccp-nice" className="text-blue-600 hover:text-blue-800 font-medium underline">Nice</Link></li>
                <li><Link href="/formation-haccp-toulon" className="text-blue-600 hover:text-blue-800 font-medium underline">Toulon</Link></li>
                <li><Link href="/formation-haccp-aix-en-provence" className="text-blue-600 hover:text-blue-800 font-medium underline">Aix-en-Provence</Link></li>
                <li><Link href="/formation-haccp-avignon" className="text-blue-600 hover:text-blue-800 font-medium underline">Avignon</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "28 000+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "290€ – 490€" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Provence-Alpes-Côte d&apos;Azur</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en PACA ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale en Provence-Alpes-Côte d&apos;Azur sont soumis à l&apos;obligation de formation HACCP. Cela concerne les restaurants, snacks, food trucks, traiteurs et commerces alimentaires des 6 départements de la région.</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les saisonniers doivent-ils suivre la formation HACCP en PACA ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">L&apos;obligation porte sur l&apos;établissement : au moins un membre du personnel doit détenir l&apos;attestation. Il est recommandé de former les saisonniers avant la saison estivale pour garantir la conformité lors des contrôles.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Quel est le prix de la formation HACCP à Marseille ou Nice ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le tarif varie entre 290 € et 490 € TTC en présentiel. Des formations en ligne sont proposées à partir de 200 €. Le financement OPCO AKTO peut couvrir 100 % du coût pour les salariés du secteur CHR.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Quand suivre la formation HACCP en PACA ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont disponibles toute l&apos;année. Il est conseillé de planifier la formation entre mars et mai pour être prêt avant la haute saison touristique. Les organismes proposent également des sessions accélérées.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les restaurants de plage sont-ils soumis à la formation HACCP ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale, y compris les paillotes et restaurants de plage, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire. Les contrôles DDPP sont renforcés sur le littoral en été.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Provence-Alpes-Côte d&apos;Azur</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
