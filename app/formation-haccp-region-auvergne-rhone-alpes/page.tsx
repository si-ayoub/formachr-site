import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Auvergne-Rhône-Alpes — Lyon, Grenoble, Saint-Étienne 2026",
  description: "Formation hygiène alimentaire HACCP en Auvergne-Rhône-Alpes : Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-auvergne-rhone-alpes` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Auvergne-Rhône-Alpes ?", answer: "Oui, tous les établissements de restauration commerciale de la région doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Cette obligation concerne les 12 départements de la région, du Rhône à la Haute-Savoie." },
  { question: "Quel est le prix d'une formation HACCP en Auvergne-Rhône-Alpes ?", answer: "Le tarif moyen se situe entre 280 € et 450 € TTC en présentiel. La formation peut être financée à 100 % par l'OPCO AKTO pour les salariés CHR, ou par France Travail pour les demandeurs d'emploi." },
  { question: "Où suivre une formation HACCP en Auvergne-Rhône-Alpes ?", answer: "Des sessions sont proposées à Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy, Chambéry, Valence et Villeurbanne. Des formations en ligne sont également disponibles pour toute la région." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Auvergne-Rhône-Alpes", url: "/formation-haccp-region-auvergne-rhone-alpes" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Auvergne-Rhône-Alpes",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Auvergne-Rhône-Alpes. Attestation DRAAF, financement OPCO.",
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
          <li className="text-gray-800 font-medium">Auvergne-Rhône-Alpes</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Auvergne-Rhône-Alpes — 2e région de France
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Auvergne-Rhône-Alpes</span><br />
              <span className="text-xl font-bold">Lyon, Grenoble, Saint-Étienne 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Deuxième région de France par sa population et son dynamisme économique, Auvergne-Rhône-Alpes abrite des milliers de restaurants, boucheries, boulangeries et commerces alimentaires soumis à l&apos;obligation de formation HACCP.
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
            <LeadForm city="Lyon" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Auvergne-Rhône-Alpes — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Auvergne-Rhône-Alpes doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Auvergne-Rhône-Alpes est la deuxième région française par le nombre d&apos;habitants et le dynamisme de son secteur de restauration. Lyon, capitale de la gastronomie française, est mondialement reconnue pour ses bouchons lyonnais, ses halles Paul Bocuse et sa scène culinaire innovante. La ville compte des milliers de restaurants, des bistrots traditionnels aux tables étoilées, tous soumis à l&apos;obligation de formation en hygiène alimentaire.</p>
            <p>La région se distingue par une grande diversité culinaire. Les spécialités locales — quenelles, gratins dauphinois, fromages auvergnats (Saint-Nectaire, Cantal, Fourme d&apos;Ambert), charcuteries de Savoie — nécessitent une maîtrise rigoureuse des règles d&apos;hygiène. Le secteur du tourisme hivernal dans les stations de ski des Alpes (Chamonix, Val d&apos;Isère, Les Arcs, L&apos;Alpe d&apos;Huez) génère une forte demande saisonnière de formation HACCP pour les restaurants d&apos;altitude, chalets et résidences de tourisme.</p>
            <p>La formation dure 14 heures minimum, incluant 4 heures de mise en pratique obligatoire depuis l&apos;arrêté du 12 février 2024. Elle couvre les 7 principes HACCP, la réglementation européenne, les dangers alimentaires, le Plan de Maîtrise Sanitaire et la gestion des allergènes. La DRAAF Auvergne-Rhône-Alpes, basée à Lyon, agrée les organismes de formation sur les 12 départements de la région.</p>
            <p>Le tissu économique régional comprend également de nombreuses industries agroalimentaires dans le Puy-de-Dôme, la Loire et l&apos;Ain, où la formation HACCP est essentielle pour les professionnels de la restauration collective et de la transformation alimentaire. Grenoble, ville universitaire et technologique, voit croître sa scène food truck et restauration rapide.</p>
            <p>Le financement de la formation est facilité par l&apos;OPCO AKTO (prise en charge à 100 % pour les salariés CHR), France Travail pour les demandeurs d&apos;emploi, et le CPF. Le prix moyen se situe entre 280 et 450 euros TTC. Les sessions sont disponibles chaque semaine dans les principales villes de la région.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements d&apos;Auvergne-Rhône-Alpes</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-69-rhone" className="text-blue-600 hover:text-blue-800 font-medium underline">Rhône (69)</Link></li>
            <li><Link href="/formation-haccp-38-isere" className="text-blue-600 hover:text-blue-800 font-medium underline">Isère (38)</Link></li>
            <li><Link href="/formation-haccp-42-loire" className="text-blue-600 hover:text-blue-800 font-medium underline">Loire (42)</Link></li>
            <li><Link href="/formation-haccp-63-puy-de-dome" className="text-blue-600 hover:text-blue-800 font-medium underline">Puy-de-Dôme (63)</Link></li>
            <li><Link href="/formation-haccp-74-haute-savoie" className="text-blue-600 hover:text-blue-800 font-medium underline">Haute-Savoie (74)</Link></li>
            <li><Link href="/formation-haccp-01-ain" className="text-blue-600 hover:text-blue-800 font-medium underline">Ain (01)</Link></li>
            <li><Link href="/formation-haccp-73-savoie" className="text-blue-600 hover:text-blue-800 font-medium underline">Savoie (73)</Link></li>
            <li><Link href="/formation-haccp-26-drome" className="text-blue-600 hover:text-blue-800 font-medium underline">Drôme (26)</Link></li>
            <li><Link href="/formation-haccp-07-ardeche" className="text-blue-600 hover:text-blue-800 font-medium underline">Ardèche (07)</Link></li>
            <li><Link href="/formation-haccp-43-haute-loire" className="text-blue-600 hover:text-blue-800 font-medium underline">Haute-Loire (43)</Link></li>
            <li><Link href="/formation-haccp-03-allier" className="text-blue-600 hover:text-blue-800 font-medium underline">Allier (03)</Link></li>
            <li><Link href="/formation-haccp-15-cantal" className="text-blue-600 hover:text-blue-800 font-medium underline">Cantal (15)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Lyon","Grenoble","Saint-Étienne","Clermont-Ferrand","Annecy","Chambéry","Valence","Villeurbanne","Vénissieux","Bourg-en-Bresse"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
            <p className="text-blue-900 text-sm">
              🔗 Découvrez les restaurants halal à Lyon sur <a href="https://musmap.com/fr/restaurants/lyon" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">musmap.com/fr/restaurants/lyon</a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "25 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Auvergne-Rhône-Alpes</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Auvergne-Rhône-Alpes</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
