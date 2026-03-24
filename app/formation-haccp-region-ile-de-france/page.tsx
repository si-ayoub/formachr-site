import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Île-de-France — Paris et Petite/Grande Couronne 2026",
  description: "Formation hygiène alimentaire HACCP en Île-de-France : Paris, Boulogne-Billancourt, Saint-Denis, Versailles, Argenteuil. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-ile-de-france` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire dans tous les départements d'Île-de-France ?", answer: "Oui, les 8 départements franciliens (75, 77, 78, 91, 92, 93, 94, 95) sont concernés par le décret du 24 juin 2011. Au moins un membre du personnel de chaque établissement de restauration commerciale doit détenir l'attestation de formation en hygiène alimentaire de 14 heures." },
  { question: "Comment financer la formation HACCP en Île-de-France ?", answer: "La formation peut être financée à 100 % par l'OPCO AKTO pour les salariés du secteur CHR. Les demandeurs d'emploi peuvent bénéficier d'une prise en charge par France Travail. Le CPF et les aides régionales du Conseil régional d'Île-de-France sont également mobilisables." },
  { question: "Où trouver un centre de formation HACCP en Île-de-France ?", answer: "Des sessions sont proposées dans toute la région : Paris intra-muros, Boulogne-Billancourt, Saint-Denis, Versailles, Argenteuil, Créteil, Nanterre, Évry, Meaux et Pontoise. Des formations en ligne sont aussi disponibles." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Île-de-France", url: "/formation-haccp-region-ile-de-france" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Île-de-France",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Île-de-France. Attestation DRAAF, financement OPCO.",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Formations par région</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Île-de-France</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Île-de-France — 8 départements, 45 000+ établissements
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Île-de-France</span><br />
              <span className="text-xl font-bold">Paris et Petite/Grande Couronne 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Première région de France par le nombre d&apos;établissements de restauration, l&apos;Île-de-France concentre plus de 45 000 restaurants, snacks, food trucks et commerces alimentaires soumis à l&apos;obligation de formation HACCP.
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
            <LeadForm city="Paris" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Île-de-France — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Île-de-France doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>L&apos;Île-de-France est la première région gastronomique de France par le volume. Paris, capitale mondiale de la cuisine, concentre à elle seule plus de 15 000 restaurants, des bistrots de quartier aux tables étoilées Michelin. La petite couronne (Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne) connaît un essor spectaculaire des dark kitchens, food trucks et concepts de restauration rapide. La grande couronne (Yvelines, Essonne, Val-d&apos;Oise, Seine-et-Marne) voit se multiplier les zones commerciales avec des pôles de restauration importants.</p>
            <p>La formation hygiène alimentaire en Île-de-France dure 14 heures minimum, conformément au décret du 24 juin 2011 modifié par l&apos;arrêté du 12 février 2024. Elle comprend 4 heures de mise en pratique obligatoire. Le programme couvre la réglementation européenne (paquet hygiène), les dangers alimentaires, les 7 principes HACCP, le Plan de Maîtrise Sanitaire et la gestion des allergènes.</p>
            <p>La DRAAF Île-de-France, basée à Paris, est compétente pour agréer les organismes de formation sur l&apos;ensemble des huit départements. Les contrôles DDPP sont particulièrement fréquents en raison de la densité d&apos;établissements et du tourisme international (plus de 50 millions de visiteurs par an). L&apos;absence d&apos;attestation peut entraîner une amende de 5e classe pouvant atteindre 1 500 euros.</p>
            <p>Le secteur de la restauration en Île-de-France est marqué par une forte saisonnalité touristique, avec des pics en été et pendant les fêtes. Les quartiers touristiques parisiens (Champs-Élysées, Montmartre, Le Marais, Saint-Germain) font l&apos;objet d&apos;une surveillance sanitaire renforcée. La diversité culinaire de la région — cuisine française traditionnelle, gastronomie internationale, street food, restauration halal, bio et végétarienne — impose une formation adaptée à chaque type d&apos;établissement.</p>
            <p>Le financement de la formation est facilité par l&apos;OPCO AKTO, qui prend en charge à 100 % la formation pour les salariés du secteur CHR. France Travail propose également des dispositifs pour les demandeurs d&apos;emploi. Le CPF (Compte Personnel de Formation) et les aides du Conseil régional d&apos;Île-de-France complètent les possibilités de financement. Le prix moyen se situe entre 290 et 490 euros TTC en présentiel.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements d&apos;Île-de-France</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-75-paris" className="text-blue-600 hover:text-blue-800 font-medium underline">Paris (75)</Link></li>
            <li><Link href="/formation-haccp-92-hauts-de-seine" className="text-blue-600 hover:text-blue-800 font-medium underline">Hauts-de-Seine (92)</Link></li>
            <li><Link href="/formation-haccp-93-seine-saint-denis" className="text-blue-600 hover:text-blue-800 font-medium underline">Seine-Saint-Denis (93)</Link></li>
            <li><Link href="/formation-haccp-94-val-de-marne" className="text-blue-600 hover:text-blue-800 font-medium underline">Val-de-Marne (94)</Link></li>
            <li><Link href="/formation-haccp-78-yvelines" className="text-blue-600 hover:text-blue-800 font-medium underline">Yvelines (78)</Link></li>
            <li><Link href="/formation-haccp-91-essonne" className="text-blue-600 hover:text-blue-800 font-medium underline">Essonne (91)</Link></li>
            <li><Link href="/formation-haccp-95-val-d-oise" className="text-blue-600 hover:text-blue-800 font-medium underline">Val-d&apos;Oise (95)</Link></li>
            <li><Link href="/formation-haccp-77-seine-et-marne" className="text-blue-600 hover:text-blue-800 font-medium underline">Seine-et-Marne (77)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Paris","Boulogne-Billancourt","Saint-Denis","Argenteuil","Versailles","Créteil","Nanterre","Évry-Courcouronnes","Meaux","Pontoise"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
            <p className="text-blue-900 text-sm">
              🔗 Découvrez les restaurants halal à Paris sur <a href="https://musmap.com/fr/restaurants/paris" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">musmap.com/fr/restaurants/paris</a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "45 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Île-de-France</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Île-de-France</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
