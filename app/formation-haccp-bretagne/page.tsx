import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Bretagne — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Bretagne. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-bretagne` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Bretagne ?", answer: "Oui, tous les établissements de restauration commerciale des 4 départements bretons doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
  { question: "Combien coûte la formation HACCP en Bretagne ?", answer: "Le tarif varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible pour les salariés du secteur CHR." },
  { question: "Les crêperies sont-elles concernées par la formation HACCP ?", answer: "Oui, les crêperies sont des établissements de restauration commerciale et doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire." },
  { question: "Où trouver une formation HACCP en Bretagne ?", answer: "Des sessions sont proposées à Rennes, Brest, Quimper, Lorient, Vannes, Saint-Brieuc et Saint-Malo. Des formations en ligne sont aussi disponibles." },
  { question: "La formation aborde-t-elle les produits de la mer ?", answer: "Oui, le programme inclut la conservation et la manipulation des produits de la mer. Les formateurs bretons insistent sur la chaîne du froid du poisson, la traçabilité des coquillages et les risques liés aux fruits de mer." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Bretagne", url: "/formation-haccp-bretagne" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Bretagne",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Bretagne",
        city: "Rennes",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Bretagne",
        city: "Rennes",
        postalCode: "35000",
        lat: 48.1173,
        lng: -1.6778
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Bretagne</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Bretagne — 16 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Bretagne</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Bretagne, péninsule entre Manche et Atlantique, est une terre de gastronomie maritime et de traditions culinaires fortes. Avec plus de 16 000 établissements de restauration — crêperies, restaurants de fruits de mer, bistrots marins — la formation HACCP est indispensable pour tous les professionnels bretons.
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
            <LeadForm city="Rennes" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Bretagne — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Bretagne doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Bretagne agrée les organismes de formation pour les 4 départements : Ille-et-Vilaine (35), Finistère (29), Côtes-d&apos;Armor (22) et Morbihan (56). La Bretagne est la première région de pêche française et un bassin majeur d&apos;ostréiculture, ce qui impose des exigences élevées en matière d&apos;hygiène alimentaire.</p>
            <p>La cuisine bretonne est indissociable de la mer : huîtres de Cancale, homard breton, coquilles Saint-Jacques, sardines, bar de ligne. Les crêperies, institution bretonne par excellence, servent galettes de blé noir et crêpes de froment dans tout le territoire. Le far breton, le kouign-amann, le cidre et le chouchen complètent le patrimoine culinaire. La manipulation de ces produits, notamment les fruits de mer et le blé noir, nécessite des connaissances approfondies en hygiène.</p>
            <p>La formation HACCP en Bretagne dure 14 heures avec 4 heures de pratique. Le programme national est enrichi par les formateurs locaux avec des exemples concrets : conservation des fruits de mer, gestion de la chaîne du froid pour le poisson frais, hygiène dans les crêperies, traçabilité des coquillages.</p>
            <p>Le financement est assuré par l&apos;OPCO AKTO pour les salariés CHR, France Travail pour les demandeurs d&apos;emploi, et les aides régionales. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Rennes, Brest, Quimper, Lorient, Vannes et Saint-Brieuc.</p>
            <p>Le littoral breton, avec ses milliers de kilomètres de côtes, attire un tourisme estival important. Les restaurants de fruits de mer, les crêperies du bord de mer et les bars à huîtres doivent tous respecter les normes HACCP. L&apos;industrie de la conserve (sardines, maquereaux) et l&apos;ostréiculture bretonne sont également soumises aux exigences d&apos;hygiène. Les DDPP bretonnes sont particulièrement vigilantes sur la traçabilité des produits de la mer.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Bretagne</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-rennes" className="text-blue-600 hover:text-blue-800 font-medium underline">Rennes</Link></li>
                <li><Link href="/formation-haccp-brest" className="text-blue-600 hover:text-blue-800 font-medium underline">Brest</Link></li>
                <li><Link href="/formation-haccp-quimper" className="text-blue-600 hover:text-blue-800 font-medium underline">Quimper</Link></li>
                <li><Link href="/formation-haccp-lorient" className="text-blue-600 hover:text-blue-800 font-medium underline">Lorient</Link></li>
                <li><Link href="/formation-haccp-vannes" className="text-blue-600 hover:text-blue-800 font-medium underline">Vannes</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "16 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Bretagne</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en Bretagne ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale des 4 départements bretons doivent former au moins un salarié à l&apos;hygiène alimentaire (14h).</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP en Bretagne ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le tarif varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible pour les salariés du secteur CHR.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les crêperies sont-elles concernées par la formation HACCP ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, les crêperies sont des établissements de restauration commerciale et doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Bretagne ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont proposées à Rennes, Brest, Quimper, Lorient, Vannes, Saint-Brieuc et Saint-Malo. Des formations en ligne sont aussi disponibles.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation aborde-t-elle les produits de la mer ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, le programme inclut la conservation et la manipulation des produits de la mer. Les formateurs bretons insistent sur la chaîne du froid du poisson, la traçabilité des coquillages et les risques liés aux fruits de mer.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Bretagne</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
