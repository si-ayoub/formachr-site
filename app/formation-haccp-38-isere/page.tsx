import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Isère (38) — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP dans le Isère (38). Organismes certifiés DRAAF, 14h, attestation officielle. Financement OPCO disponible. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-38-isere` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire dans le Isère (38) ?", answer: "Oui, tous les établissements de restauration commerciale du département Isère (38) sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire. Cette formation de 14 heures est obligatoire depuis octobre 2012." },
  { question: "Combien coûte une formation HACCP dans le Isère ?", answer: "Le tarif varie entre 290€ et 490€ TTC en présentiel. La formation peut être prise en charge à 100% par l&apos;OPCO AKTO pour les salariés du secteur CHR ou par France Travail pour les demandeurs d&apos;emploi." },
  { question: "Où trouver une formation HACCP dans le Isère ?", answer: "Des sessions sont organisées régulièrement à Grenoble, Saint-Martin-d&apos;Hères, Échirolles, Vienne, Bourgoin-Jallieu. Des formations en ligne sont également disponibles." },
  { question: "Quelle est la DRAAF compétente pour le Isère ?", answer: "Le département Isère (38) dépend de la DRAAF Auvergne-Rhône-Alpes pour l&apos;agrément des organismes de formation en hygiène alimentaire." },
  { question: "Combien de restaurants sont concernés dans le Isère ?", answer: "Le département Isère compte environ 1 800 établissements de restauration commerciale soumis à l&apos;obligation de formation HACCP." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par département", url: "/villes" },
        { name: "Formation HACCP Isère (38)", url: "/formation-haccp-38-isere" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Isère (38)",
        description: "Formation HACCP adaptée à la restauration commerciale dans le département Isère",
        city: "Grenoble",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Isère",
        city: "Grenoble",
        postalCode: "38000",
        lat: 45.1885,
        lng: 5.7245
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Départements</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Isère (38)</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Isère (38) — Auvergne-Rhône-Alpes
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Isère (38)</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              L&apos;Isère, département alpin au cœur de la région Auvergne-Rhône-Alpes, est un territoire de montagne et de gastronomie. Avec Grenoble comme préfecture et les stations de ski environnantes, plus de 1 800 établissements sont soumis à la formation HACCP.
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
            <LeadForm city="Grenoble" title="Devis gratuit — Isère (38)" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire dans le Isère — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale du département Isère (38) doivent justifier d&apos;au minimum un salarié ayant suivi la formation en hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Grenoble, capitale des Alpes françaises, est une ville universitaire et technologique entourée de montagnes. Le gratin dauphinois, les noix de Grenoble AOP et le Saint-Marcellin sont des spécialités emblématiques. Les stations de ski (Alpe d&apos;Huez, Les 2 Alpes, Chamrousse) génèrent une activité de restauration saisonnière importante, nécessitant des formations HACCP avant chaque saison d&apos;hiver. Vienne, ville gallo-romaine au bord du Rhône, est reconnue pour ses restaurants gastronomiques. Le festival Jazz à Vienne attire chaque été des milliers de visiteurs.</p>
            <p>La formation hygiène alimentaire dans le Isère dure <strong>14 heures</strong>, conformément au décret du 24 juin 2011 modifié par l&apos;arrêté du 12 février 2024. Elle comprend désormais <strong>4 heures obligatoires de mise en pratique</strong>. Le programme aborde la réglementation européenne (paquet hygiène), les dangers alimentaires (biologiques, chimiques, physiques), les 7 principes de la méthode HACCP, le Plan de Maîtrise Sanitaire (PMS) et la gestion des allergènes.</p>
            <p>Le financement de la formation HACCP dans le Isère peut être pris en charge par <strong>l&apos;OPCO AKTO</strong> pour les salariés du secteur CHR (cafés, hôtels, restaurants). Les demandeurs d&apos;emploi peuvent bénéficier d&apos;une prise en charge par <strong>France Travail</strong>. Les créateurs d&apos;entreprise peuvent mobiliser le CPF ou les aides régionales.</p>
            <p>Les services de la <strong>DDPP du Isère</strong> effectuent des contrôles réguliers dans les établissements de restauration. L&apos;absence d&apos;attestation de formation HACCP lors d&apos;un contrôle peut entraîner une <strong>amende de 5e classe</strong> (jusqu&apos;à 1 500 €). Il est donc essentiel pour tout professionnel de la restauration dans le département de s&apos;assurer qu&apos;au moins un membre de son personnel détient cette attestation.</p>
            <p>À l&apos;issue de la formation de 14 heures, le stagiaire reçoit une <strong>attestation officielle</strong> délivrée par un organisme agréé par la DRAAF Auvergne-Rhône-Alpes. Cette attestation est <strong>valable à vie</strong>, sans obligation de recyclage. Cependant, il est recommandé de mettre à jour ses connaissances régulièrement, notamment après les évolutions réglementaires comme l&apos;arrêté de 2024 sur les heures de pratique.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes du Isère pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-grenoble" className="text-blue-600 hover:text-blue-800 font-medium underline">Grenoble</Link></li>
                <li><Link href="/formation-haccp-saint-martin-d-heres" className="text-blue-600 hover:text-blue-800 font-medium underline">Saint-Martin-d&apos;Hères</Link></li>
                <li><Link href="/formation-haccp-echirolles" className="text-blue-600 hover:text-blue-800 font-medium underline">Échirolles</Link></li>
                <li><Link href="/formation-haccp-vienne" className="text-blue-600 hover:text-blue-800 font-medium underline">Vienne</Link></li>
                <li><Link href="/formation-haccp-bourgoin-jallieu" className="text-blue-600 hover:text-blue-800 font-medium underline">Bourgoin-Jallieu</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Restaurants dans le 38", value: "1 800+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Isère (38)</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP dans le Isère</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre département et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
