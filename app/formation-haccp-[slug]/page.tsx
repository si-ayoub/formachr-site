import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { VILLES, VILLES_PAR_SLUG } from "@/data/villes"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

interface Props {
  params: Promise<{ slug: string }>
}

// Génère les 150+ pages statiques à la compilation
export async function generateStaticParams() {
  return VILLES.map(v => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const ville = VILLES_PAR_SLUG[slug]
  if (!ville) return {}

  const title = `Formation HACCP à ${ville.nom} (${ville.numDept}) — Hygiène Alimentaire 2026`
  const description = `Formation hygiène alimentaire obligatoire à ${ville.nom} en ${ville.dept}. Organismes certifiés DRAAF, 14h, attestation officielle. Financement OPCO disponible. Devis gratuit sous 24h.`

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/formation-haccp-${ville.slug}` },
    openGraph: { title, description, locale: "fr_FR" }
  }
}

export default async function VillePage({ params }: Props) {
  const { slug } = await params
  const ville = VILLES_PAR_SLUG[slug]
  if (!ville) notFound()

  const faqVille = [
    {
      question: `La formation HACCP est-elle obligatoire à ${ville.nom} ?`,
      answer: `Oui, tous les établissements de restauration commerciale à ${ville.nom} et dans toute la ${ville.dept} sont soumis à l'obligation de former au minimum un salarié à l'hygiène alimentaire (14h). Cette obligation est nationale depuis octobre 2012.`
    },
    {
      question: `Où trouver une formation HACCP à ${ville.nom} ?`,
      answer: `Plusieurs organismes certifiés proposent des sessions de formation hygiène alimentaire à ${ville.nom} et dans les communes proches. Vous pouvez remplir notre formulaire pour recevoir les meilleures offres disponibles dans votre zone sous 24h.`
    },
    {
      question: `Quel est le prix d'une formation HACCP à ${ville.nom} ?`,
      answer: `Le tarif d'une formation hygiène alimentaire à ${ville.nom} varie entre 290€ et 490€ TTC en présentiel. Elle peut être prise en charge à 100% par l'OPCO AKTO pour les salariés du secteur CHR.`
    },
    {
      question: `Peut-on faire la formation HACCP en ligne depuis ${ville.nom} ?`,
      answer: `Oui, certains organismes proposent des formations à distance accessibles depuis ${ville.nom}. Depuis l'arrêté du 12 février 2024, la formation doit comporter 4 heures de mise en pratique.`
    },
    {
      question: `Combien de restaurants à ${ville.nom} sont concernés par la formation HACCP ?`,
      answer: `${ville.nom} compte environ ${ville.nbRestaurantsEstime.toLocaleString("fr-FR")} établissements de restauration commerciale, tous soumis à l'obligation de formation en hygiène alimentaire.`
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formation HACCP par ville", url: "/villes" },
        { name: `Formation HACCP ${ville.nom}`, url: `/formation-haccp-${ville.slug}` }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: `Formation Hygiène Alimentaire HACCP à ${ville.nom}`,
        description: `Formation spécifique en matière d'hygiène alimentaire adaptée à la restauration commerciale à ${ville.nom} (${ville.dept})`,
        city: ville.nom,
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: `Formation HACCP ${ville.nom}`,
        city: ville.nom,
        postalCode: ville.codePostal,
        lat: ville.lat,
        lng: ville.lng
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(faqVille)) }} />

      {/* BREADCRUMB */}
      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP {ville.nom}</li>
        </ol>
      </nav>

      {/* HERO VILLE */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 {ville.nom} — {ville.dept}
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">à {ville.nom}</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              {ville.nbRestaurantsEstime.toLocaleString("fr-FR")} établissements à {ville.nom} sont concernés par l&apos;obligation 
              de formation en hygiène alimentaire. Trouvez la meilleure session près de chez vous.
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
            <LeadForm
              city={ville.nom}
              title={`Trouver ma formation à ${ville.nom}`}
            />
          </div>
        </div>
      </section>

      {/* INFOS LOCALES */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire à {ville.nom} — Ce qu&apos;il faut savoir</h2>
          <div className="prose prose-gray max-w-none">
            <p>
              À <strong>{ville.nom}</strong>, chef-lieu du département <strong>{ville.dept}</strong> en <strong>{ville.region}</strong>, 
              l&apos;obligation de formation en hygiène alimentaire concerne l&apos;ensemble des 
              <strong> établissements de restauration commerciale</strong> : restaurants traditionnels, 
              snacks, kebabs, food trucks, boulangeries, et tous les commerces alimentaires avec service sur place.
            </p>
            <p>
              La formation, souvent appelée &quot;formation HACCP&quot;, dure <strong>14 heures</strong> et doit être dispensée 
              par un organisme agréé par la DRAAF (Direction Régionale de l&apos;Alimentation, de l&apos;Agriculture 
              et de la Forêt) de la région <strong>{ville.region}</strong>. 
              À l&apos;issue, l&apos;employé reçoit une <strong>attestation officielle</strong> à conserver en cas de contrôle sanitaire.
            </p>
            <p>
              Le financement de cette formation peut être pris en charge par <strong>l&apos;OPCO AKTO</strong> pour les 
              salariés du secteur CHR (cafés, hôtels, restaurants). Les demandeurs d&apos;emploi peuvent 
              la financer via <strong>France Travail</strong>.
            </p>
          </div>

          {/* STATS LOCALES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Restaurants à " + ville.nom, value: ville.nbRestaurantsEstime.toLocaleString("fr-FR") + "+" },
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

      {/* FAQ VILLE */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP à {ville.nom}</h2>
          <div className="space-y-3">
            {faqVille.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP à {ville.nom}</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <LeadForm city={ville.nom} title={`Devis gratuit — ${ville.nom}`} />
        </div>
      </section>
    </>
  )
}
