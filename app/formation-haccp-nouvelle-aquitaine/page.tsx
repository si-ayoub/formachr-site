import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Nouvelle-Aquitaine — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Nouvelle-Aquitaine. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-nouvelle-aquitaine` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Nouvelle-Aquitaine ?", answer: "Oui, tous les établissements de restauration commerciale de la région Nouvelle-Aquitaine sont soumis à cette obligation. Elle concerne les 12 départements, de la Charente aux Pyrénées-Atlantiques." },
  { question: "Combien coûte la formation HACCP à Bordeaux ?", answer: "Le prix varie entre 290 € et 450 € TTC en présentiel. L&apos;OPCO AKTO peut financer la totalité du coût pour les salariés du secteur CHR. Des aides régionales sont également disponibles." },
  { question: "Les ostréiculteurs doivent-ils suivre la formation HACCP ?", answer: "Les ostréiculteurs qui vendent directement au consommateur ou qui proposent de la dégustation sur place sont concernés par l&apos;obligation de formation en hygiène alimentaire." },
  { question: "Où trouver une formation HACCP en Nouvelle-Aquitaine ?", answer: "Des sessions sont organisées chaque semaine à Bordeaux, Limoges, Poitiers, Pau, La Rochelle, Bayonne, Angoulême et Périgueux. Des formations en ligne sont aussi disponibles." },
  { question: "La formation HACCP est-elle adaptée aux produits du Périgord ?", answer: "Les formateurs illustrent les principes HACCP avec des exemples locaux : conservation du foie gras, manipulation de la truffe, hygiène dans les marchés au gras. Le programme national est complété par des cas pratiques régionaux." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Nouvelle-Aquitaine", url: "/formation-haccp-nouvelle-aquitaine" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Nouvelle-Aquitaine",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Nouvelle-Aquitaine",
        city: "Bordeaux",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Nouvelle-Aquitaine",
        city: "Bordeaux",
        postalCode: "33000",
        lat: 44.8378,
        lng: -0.5792
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Nouvelle-Aquitaine</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Nouvelle-Aquitaine — 22 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Nouvelle-Aquitaine</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Nouvelle-Aquitaine est la plus vaste région de France et un territoire d&apos;excellence gastronomique. De Bordeaux et ses vignobles au bassin d&apos;Arcachon et ses huîtres, en passant par le Pays basque et le Périgord, la région compte plus de 22 000 établissements de restauration commerciale qui doivent tous respecter l&apos;obligation de formation HACCP.
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
            <LeadForm city="Bordeaux" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Nouvelle-Aquitaine — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Nouvelle-Aquitaine doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Nouvelle-Aquitaine agrée les organismes de formation pour les 12 départements de la région, de la Charente-Maritime aux Pyrénées-Atlantiques, de la Corrèze aux Landes. La diversité des territoires — littoral atlantique, vignobles bordelais, campagnes périgourdines, montagnes basques — se traduit par des besoins variés en matière de formation en hygiène alimentaire.</p>
            <p>La Nouvelle-Aquitaine est un territoire de gastronomie par excellence. Bordeaux, classée au patrimoine mondial de l&apos;UNESCO, est une métropole viticole et gastronomique de premier plan. Le bassin d&apos;Arcachon produit des huîtres réputées mondialement, le Périgord est la terre du foie gras et de la truffe, et le Pays basque offre une cuisine reconnue (piment d&apos;Espelette, gâteau basque, jambon de Bayonne). Tous ces secteurs imposent une maîtrise rigoureuse de l&apos;hygiène alimentaire.</p>
            <p>La formation HACCP en Nouvelle-Aquitaine dure 14 heures avec 4 heures de pratique obligatoire. Le programme couvre la réglementation, les dangers alimentaires, la méthode HACCP et le PMS. Les spécificités régionales sont prises en compte : manipulation des produits de la mer (huîtres, fruits de mer), conservation du foie gras et des produits du canard, hygiène dans les caves viticoles proposant de la restauration.</p>
            <p>Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides de la Région Nouvelle-Aquitaine. Le prix moyen est de 290 € à 450 € TTC. Des sessions sont disponibles toute l&apos;année à Bordeaux, Limoges, Poitiers, Pau, La Rochelle et dans les principales villes de chaque département.</p>
            <p>Le tourisme estival sur la côte atlantique (Arcachon, Biarritz, Royan, La Rochelle) génère une forte demande saisonnière en restauration. Les ostréiculteurs du bassin d&apos;Arcachon, les restaurateurs de la côte basque et les traiteurs du littoral doivent tous respecter les normes HACCP. Les DDPP de la région renforcent leurs contrôles pendant la haute saison, et l&apos;attestation de formation est systématiquement vérifiée lors des inspections.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Nouvelle-Aquitaine</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-bordeaux" className="text-blue-600 hover:text-blue-800 font-medium underline">Bordeaux</Link></li>
                <li><Link href="/formation-haccp-limoges" className="text-blue-600 hover:text-blue-800 font-medium underline">Limoges</Link></li>
                <li><Link href="/formation-haccp-poitiers" className="text-blue-600 hover:text-blue-800 font-medium underline">Poitiers</Link></li>
                <li><Link href="/formation-haccp-pau" className="text-blue-600 hover:text-blue-800 font-medium underline">Pau</Link></li>
                <li><Link href="/formation-haccp-la-rochelle" className="text-blue-600 hover:text-blue-800 font-medium underline">La Rochelle</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "22 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Nouvelle-Aquitaine</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en Nouvelle-Aquitaine ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale de la région Nouvelle-Aquitaine sont soumis à cette obligation. Elle concerne les 12 départements, de la Charente aux Pyrénées-Atlantiques.</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP à Bordeaux ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le prix varie entre 290 € et 450 € TTC en présentiel. L&apos;OPCO AKTO peut financer la totalité du coût pour les salariés du secteur CHR. Des aides régionales sont également disponibles.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les ostréiculteurs doivent-ils suivre la formation HACCP ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Les ostréiculteurs qui vendent directement au consommateur ou qui proposent de la dégustation sur place sont concernés par l&apos;obligation de formation en hygiène alimentaire.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Nouvelle-Aquitaine ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont organisées chaque semaine à Bordeaux, Limoges, Poitiers, Pau, La Rochelle, Bayonne, Angoulême et Périgueux. Des formations en ligne sont aussi disponibles.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle adaptée aux produits du Périgord ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Les formateurs illustrent les principes HACCP avec des exemples locaux : conservation du foie gras, manipulation de la truffe, hygiène dans les marchés au gras. Le programme national est complété par des cas pratiques régionaux.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Nouvelle-Aquitaine</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
