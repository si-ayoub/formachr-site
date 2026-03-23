import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Pays de la Loire — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Pays de la Loire. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-pays-de-la-loire` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Pays de la Loire ?", answer: "Oui, tous les établissements de restauration commerciale des 5 départements des Pays de la Loire doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
  { question: "Combien coûte la formation HACCP à Nantes ?", answer: "Le prix varie entre 280 € et 430 € TTC en présentiel. Le financement est possible via l&apos;OPCO AKTO (salariés CHR) ou France Travail (demandeurs d&apos;emploi)." },
  { question: "Où trouver une formation HACCP en Pays de la Loire ?", answer: "Des sessions sont disponibles à Nantes, Angers, Le Mans, Saint-Nazaire, La Roche-sur-Yon et Laval. Des formations en ligne sont aussi proposées." },
  { question: "Les restaurants de fruits de mer sont-ils concernés ?", answer: "Oui, tous les restaurants et commerces alimentaires avec service sur place, y compris les restaurants de fruits de mer, sont soumis à l&apos;obligation de formation HACCP." },
  { question: "La formation HACCP aborde-t-elle les produits de la mer ?", answer: "Le programme national inclut la conservation des denrées alimentaires, dont les produits de la mer. Les formateurs adaptent les exemples aux spécificités locales : huîtres, moules, poissons frais." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Pays de la Loire", url: "/formation-haccp-pays-de-la-loire" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Pays de la Loire",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Pays de la Loire",
        city: "Nantes",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Pays de la Loire",
        city: "Nantes",
        postalCode: "44000",
        lat: 47.2184,
        lng: -1.5536
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Pays de la Loire</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Pays de la Loire — 15 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Pays de la Loire</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Les Pays de la Loire, région dynamique de l&apos;Ouest français, comptent plus de 15 000 établissements de restauration commerciale. De Nantes, métropole en plein essor, aux stations balnéaires de la côte atlantique, la formation HACCP est une obligation pour tous les professionnels de la restauration ligérienne.
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
            <LeadForm city="Nantes" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Pays de la Loire — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Pays de la Loire doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Pays de la Loire agrée les organismes de formation pour les 5 départements de la région : Loire-Atlantique (44), Maine-et-Loire (49), Sarthe (72), Mayenne (53) et Vendée (85). La région offre un mélange de métropoles dynamiques et de territoires ruraux ou côtiers.</p>
            <p>La gastronomie ligérienne est marquée par les produits de la mer (fruits de mer de la côte vendéenne, sardines de Saint-Gilles-Croix-de-Vie), les vins du muscadet et de l&apos;Anjou, les rillettes du Mans et les spécialités nantaises. Le littoral vendéen et la presqu&apos;île de Guérande avec ses marais salants complètent ce tableau gastronomique riche.</p>
            <p>La formation HACCP en Pays de la Loire dure 14 heures, comprenant 4 heures de pratique obligatoire. Le programme suit le référentiel national : réglementation, dangers alimentaires, méthode HACCP, PMS et traçabilité. Les formateurs intègrent des exemples liés aux produits locaux et aux enjeux de la restauration côtière.</p>
            <p>Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides régionales. Le prix moyen est de 280 € à 430 € TTC. Des sessions sont proposées régulièrement à Nantes, Angers, Le Mans, Saint-Nazaire et La Roche-sur-Yon.</p>
            <p>Le tourisme sur la côte vendéenne et dans les stations balnéaires de la Loire-Atlantique (La Baule, Pornic) génère une forte activité saisonnière de restauration. Les crêperies, les restaurants de fruits de mer et les glaciers du littoral sont tous concernés par l&apos;obligation de formation HACCP. Les DDPP de la région renforcent les contrôles pendant l&apos;été, et l&apos;attestation de formation est vérifiée systématiquement.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Pays de la Loire</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-nantes" className="text-blue-600 hover:text-blue-800 font-medium underline">Nantes</Link></li>
                <li><Link href="/formation-haccp-angers" className="text-blue-600 hover:text-blue-800 font-medium underline">Angers</Link></li>
                <li><Link href="/formation-haccp-le-mans" className="text-blue-600 hover:text-blue-800 font-medium underline">Le Mans</Link></li>
                <li><Link href="/formation-haccp-saint-nazaire" className="text-blue-600 hover:text-blue-800 font-medium underline">Saint-Nazaire</Link></li>
                <li><Link href="/formation-haccp-laval" className="text-blue-600 hover:text-blue-800 font-medium underline">Laval</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "15 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Pays de la Loire</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en Pays de la Loire ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale des 5 départements des Pays de la Loire doivent former au moins un salarié à l&apos;hygiène alimentaire (14h).</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP à Nantes ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le prix varie entre 280 € et 430 € TTC en présentiel. Le financement est possible via l&apos;OPCO AKTO (salariés CHR) ou France Travail (demandeurs d&apos;emploi).</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Pays de la Loire ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont disponibles à Nantes, Angers, Le Mans, Saint-Nazaire, La Roche-sur-Yon et Laval. Des formations en ligne sont aussi proposées.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les restaurants de fruits de mer sont-ils concernés ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les restaurants et commerces alimentaires avec service sur place, y compris les restaurants de fruits de mer, sont soumis à l&apos;obligation de formation HACCP.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP aborde-t-elle les produits de la mer ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le programme national inclut la conservation des denrées alimentaires, dont les produits de la mer. Les formateurs adaptent les exemples aux spécificités locales : huîtres, moules, poissons frais.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Pays de la Loire</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
