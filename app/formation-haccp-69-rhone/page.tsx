import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Rhône (69) — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP dans le Rhône (69). Organismes certifiés DRAAF, 14h, attestation officielle. Financement OPCO disponible. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-69-rhone` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire dans le Rhône (69) ?", answer: "Oui, tous les établissements de restauration commerciale du département Rhône (69) sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire. Cette formation de 14 heures est obligatoire depuis octobre 2012." },
  { question: "Combien coûte une formation HACCP dans le Rhône ?", answer: "Le tarif varie entre 290€ et 490€ TTC en présentiel. La formation peut être prise en charge à 100% par l&apos;OPCO AKTO pour les salariés du secteur CHR ou par France Travail pour les demandeurs d&apos;emploi." },
  { question: "Où trouver une formation HACCP dans le Rhône ?", answer: "Des sessions sont organisées régulièrement à Lyon, Villeurbanne, Vénissieux, Caluire-et-Cuire, Saint-Priest. Des formations en ligne sont également disponibles." },
  { question: "Quelle est la DRAAF compétente pour le Rhône ?", answer: "Le département Rhône (69) dépend de la DRAAF Auvergne-Rhône-Alpes pour l&apos;agrément des organismes de formation en hygiène alimentaire." },
  { question: "Combien de restaurants sont concernés dans le Rhône ?", answer: "Le département Rhône compte environ 3 500 établissements de restauration commerciale soumis à l&apos;obligation de formation HACCP." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par département", url: "/villes" },
        { name: "Formation HACCP Rhône (69)", url: "/formation-haccp-69-rhone" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Rhône (69)",
        description: "Formation HACCP adaptée à la restauration commerciale dans le département Rhône",
        city: "Lyon",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Rhône",
        city: "Lyon",
        postalCode: "69001",
        lat: 45.764,
        lng: 4.8357
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Départements</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Rhône (69)</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Rhône (69) — Auvergne-Rhône-Alpes
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Rhône (69)</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Le Rhône, avec Lyon comme préfecture, est un département emblématique de la gastronomie française. Les bouchons lyonnais, les restaurants étoilés et les halles Paul Bocuse font du Rhône un territoire où la formation HACCP revêt une importance particulière.
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
            <LeadForm city="Lyon" title="Devis gratuit — Rhône (69)" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire dans le Rhône — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale du département Rhône (69) doivent justifier d&apos;au minimum un salarié ayant suivi la formation en hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Lyon est internationalement reconnue comme la capitale mondiale de la gastronomie. Les bouchons lyonnais, ces restaurants traditionnels servant quenelles, tablier de sapeur et cervelle de canut, sont une institution. Le département compte environ 3 500 établissements de restauration commerciale, tous soumis à l&apos;obligation de formation HACCP. La DRAAF Auvergne-Rhône-Alpes, basée à Lyon, agrée les organismes de formation. Le Rhône bénéficie d&apos;une offre de formation particulièrement riche, avec des sessions disponibles chaque semaine dans la métropole lyonnaise. Les prix varient entre 290 € et 450 € TTC en présentiel.</p>
            <p>La formation hygiène alimentaire dans le Rhône dure <strong>14 heures</strong>, conformément au décret du 24 juin 2011 modifié par l&apos;arrêté du 12 février 2024. Elle comprend désormais <strong>4 heures obligatoires de mise en pratique</strong>. Le programme aborde la réglementation européenne (paquet hygiène), les dangers alimentaires (biologiques, chimiques, physiques), les 7 principes de la méthode HACCP, le Plan de Maîtrise Sanitaire (PMS) et la gestion des allergènes.</p>
            <p>Le financement de la formation HACCP dans le Rhône peut être pris en charge par <strong>l&apos;OPCO AKTO</strong> pour les salariés du secteur CHR (cafés, hôtels, restaurants). Les demandeurs d&apos;emploi peuvent bénéficier d&apos;une prise en charge par <strong>France Travail</strong>. Les créateurs d&apos;entreprise peuvent mobiliser le CPF ou les aides régionales.</p>
            <p>Les services de la <strong>DDPP du Rhône</strong> effectuent des contrôles réguliers dans les établissements de restauration. L&apos;absence d&apos;attestation de formation HACCP lors d&apos;un contrôle peut entraîner une <strong>amende de 5e classe</strong> (jusqu&apos;à 1 500 €). Il est donc essentiel pour tout professionnel de la restauration dans le département de s&apos;assurer qu&apos;au moins un membre de son personnel détient cette attestation.</p>
            <p>À l&apos;issue de la formation de 14 heures, le stagiaire reçoit une <strong>attestation officielle</strong> délivrée par un organisme agréé par la DRAAF Auvergne-Rhône-Alpes. Cette attestation est <strong>valable à vie</strong>, sans obligation de recyclage. Cependant, il est recommandé de mettre à jour ses connaissances régulièrement, notamment après les évolutions réglementaires comme l&apos;arrêté de 2024 sur les heures de pratique.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes du Rhône pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-lyon" className="text-blue-600 hover:text-blue-800 font-medium underline">Lyon</Link></li>
                <li><Link href="/formation-haccp-villeurbanne" className="text-blue-600 hover:text-blue-800 font-medium underline">Villeurbanne</Link></li>
                <li><Link href="/formation-haccp-venissieux" className="text-blue-600 hover:text-blue-800 font-medium underline">Vénissieux</Link></li>
                <li><Link href="/formation-haccp-caluire-et-cuire" className="text-blue-600 hover:text-blue-800 font-medium underline">Caluire-et-Cuire</Link></li>
                <li><Link href="/formation-haccp-saint-priest" className="text-blue-600 hover:text-blue-800 font-medium underline">Saint-Priest</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Restaurants dans le 69", value: "3 500+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Rhône (69)</h2>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <details key={i} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  {faq.question}
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP dans le Rhône</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre département et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
