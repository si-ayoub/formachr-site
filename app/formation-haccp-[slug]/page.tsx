import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { VILLES, VILLES_PAR_SLUG, type Ville } from "@/data/villes"
import { VILLES_5000, VILLES_5000_PAR_SLUG, type Ville5000 } from "@/data/villes-5000"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

interface Props {
  params: Promise<{ slug: string }>
}

// Merged ville type used in the page
interface MergedVille {
  nom: string
  slug: string
  dept: string
  numDept: string
  region: string
  population: number
  nbRestaurantsEstime: number
  codePostal: string
  lat: number
  lng: number
}

function slugifyRegion(r: string): string {
  return r.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/['']/g, "-").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

function slugifyDept(numDept: string): string {
  const map: Record<string, string> = {
    "75": "75-paris", "69": "69-rhone", "13": "13-bouches-du-rhone",
    "31": "31-haute-garonne", "33": "33-gironde", "59": "59-nord",
    "67": "67-bas-rhin", "44": "44-loire-atlantique", "76": "76-seine-maritime",
    "06": "06-alpes-maritimes", "34": "34-herault", "57": "57-moselle",
    "38": "38-isere", "63": "63-puy-de-dome", "35": "35-ille-et-vilaine",
    "45": "45-loiret", "87": "87-haute-vienne", "14": "14-calvados",
    "29": "29-finistere", "21": "21-cote-d-or"
  }
  return map[numDept] || ""
}

// Build merged lookup: villes.ts data takes priority (has nbRestaurantsEstime)
function getMergedVille(slug: string): MergedVille | null {
  const original = VILLES_PAR_SLUG[slug]
  if (original) return original

  const v5k = VILLES_5000_PAR_SLUG[slug]
  if (!v5k) return null

  return {
    ...v5k,
    nbRestaurantsEstime: Math.round(v5k.population * 0.006),
  }
}

// Get 5 neighbor cities from the same department
function getNeighborCities(ville: MergedVille): Ville5000[] {
  return VILLES_5000
    .filter(v => v.numDept === ville.numDept && v.slug !== ville.slug)
    .sort((a, b) => b.population - a.population)
    .slice(0, 5)
}

// Generate all slugs from both sources (deduplicated)
export async function generateStaticParams() {
  const slugs = new Set<string>()
  for (const v of VILLES) slugs.add(v.slug)
  for (const v of VILLES_5000) slugs.add(v.slug)
  return Array.from(slugs).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const ville = getMergedVille(slug)
  if (!ville) return {}

  const title = `Formation HACCP ${ville.nom} (${ville.numDept}) — Hygiène Alimentaire 2026`
  const desc = `Formation HACCP à ${ville.nom} (${ville.numDept}) dès 290€. 14h, attestation DRAAF, devis sous 24h. Financement OPCO possible.`

  return {
    title,
    description: desc.slice(0, 155),
    alternates: { canonical: `${SITE_URL}/formation-haccp-${ville.slug}` },
    openGraph: { title, description: desc, locale: "fr_FR" }
  }
}

export default async function VillePage({ params }: Props) {
  const { slug } = await params
  const ville = getMergedVille(slug)
  if (!ville) notFound()

  const neighbors = getNeighborCities(ville)
  const regionSlug = slugifyRegion(ville.region)
  const deptSlug = slugifyDept(ville.numDept)

  const faqVille = [
    {
      question: `La formation HACCP est-elle obligatoire à ${ville.nom} ?`,
      answer: `Oui, tous les établissements de restauration commerciale à ${ville.nom} (${ville.numDept}) et dans tout le département ${ville.dept} sont soumis à l'obligation de former au minimum un salarié à l'hygiène alimentaire (14h). Cette obligation est nationale depuis octobre 2012.`
    },
    {
      question: `Où trouver une formation HACCP à ${ville.nom} ?`,
      answer: `Plusieurs organismes certifiés proposent des sessions de formation hygiène alimentaire à ${ville.nom} et dans les communes proches du département ${ville.dept}. Remplissez notre formulaire pour recevoir les meilleures offres disponibles sous 24h.`
    },
    {
      question: `Quel est le prix d'une formation HACCP à ${ville.nom} ?`,
      answer: `Le tarif d'une formation hygiène alimentaire à ${ville.nom} varie entre 290€ et 490€ TTC en présentiel. Elle peut être prise en charge à 100% par l'OPCO AKTO pour les salariés du secteur CHR.`
    },
    {
      question: `Peut-on faire la formation HACCP en ligne depuis ${ville.nom} ?`,
      answer: `Oui, certains organismes proposent des formations à distance accessibles depuis ${ville.nom} en ${ville.region}. Depuis l'arrêté du 12 février 2024, la formation doit comporter 4 heures de mise en pratique.`
    },
    {
      question: `Combien de temps dure la formation HACCP à ${ville.nom} ?`,
      answer: `La formation hygiène alimentaire à ${ville.nom} dure 14 heures minimum, généralement réparties sur 2 jours. Depuis 2024, elle comprend 4 heures obligatoires de mise en pratique. L'attestation est délivrée à vie.`
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
              📍 {ville.nom} — {ville.dept} ({ville.numDept})
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">à {ville.nom}</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Environ {ville.nbRestaurantsEstime.toLocaleString("fr-FR")} établissements à {ville.nom} sont concernés par l&apos;obligation
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

      {/* INFOS LOCALES — ~800 mots */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire à {ville.nom} — Ce qu&apos;il faut savoir</h2>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              À <strong>{ville.nom}</strong>, commune du département <strong>{ville.dept} ({ville.numDept})</strong> en région <strong>{ville.region}</strong>,
              l&apos;obligation de formation en hygiène alimentaire concerne l&apos;ensemble des
              <strong> établissements de restauration commerciale</strong> : restaurants traditionnels,
              snacks, kebabs, food trucks, boulangeries, pâtisseries, traiteurs et tous les commerces alimentaires proposant un service sur place ou à emporter.
            </p>
            <p>
              Cette obligation, instaurée par le <strong>décret n°2011-731 du 24 juin 2011</strong>, impose à chaque établissement de restauration commerciale de justifier d&apos;au minimum <strong>un membre du personnel ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire</strong>. Cette formation, communément appelée « formation HACCP », constitue le socle réglementaire de la sécurité sanitaire des aliments en France.
            </p>
            <p>
              La formation, souvent appelée &quot;formation HACCP&quot;, dure <strong>14 heures</strong> et doit être dispensée
              par un organisme agréé par la <strong>DRAAF</strong> (Direction Régionale de l&apos;Alimentation, de l&apos;Agriculture
              et de la Forêt) de la région <strong>{ville.region}</strong>.
              À l&apos;issue, le stagiaire reçoit une <strong>attestation officielle</strong> valable à vie, à conserver en cas de contrôle sanitaire par la DDPP du département {ville.dept}.
            </p>
            <p>
              Le <strong>programme de la formation HACCP</strong> à {ville.nom} couvre quatre grands modules. Le premier aborde la <strong>réglementation européenne et française</strong> : le paquet hygiène (règlements CE 852/2004 et 853/2004), les obligations des exploitants et les sanctions encourues. Le deuxième module traite des <strong>dangers alimentaires</strong> : risques biologiques (bactéries, virus, parasites), chimiques (résidus, allergènes) et physiques (corps étrangers). Le troisième module présente la <strong>méthode HACCP en 7 principes</strong> : analyse des dangers, détermination des points critiques (CCP), fixation des limites critiques, mise en place de systèmes de surveillance, actions correctives, procédures de vérification et documentation. Le quatrième module, obligatoire depuis l&apos;arrêté du 12 février 2024, consacre <strong>4 heures à la mise en pratique</strong> : contrôle des températures, gestion de la chaîne du froid, protocoles de nettoyage-désinfection et bonnes pratiques de manipulation des denrées.
            </p>
            <p>
              Le financement de cette formation peut être pris en charge par <strong>l&apos;OPCO AKTO</strong> pour les
              salariés du secteur CHR (cafés, hôtels, restaurants), couvrant jusqu&apos;à 100 % du coût de la formation. Les demandeurs d&apos;emploi peuvent
              la financer via <strong>France Travail</strong> (ex-Pôle Emploi). Les créateurs ou repreneurs d&apos;entreprise de restauration à {ville.nom} peuvent mobiliser le <strong>CPF</strong> (Compte Personnel de Formation) ou solliciter les <strong>aides de la Région {ville.region}</strong>.
            </p>
            <p>
              Le <strong>prix d&apos;une formation HACCP à {ville.nom}</strong> varie entre <strong>290 € et 490 € TTC</strong> en présentiel, selon l&apos;organisme et le format choisi. Des formations en ligne sont proposées à partir de 200 €, mais doivent depuis 2024 intégrer les 4 heures de pratique, souvent réalisées en complément lors d&apos;une session en présentiel.
            </p>
            <p>
              Les services de la <strong>DDPP (Direction Départementale de la Protection des Populations) du {ville.dept}</strong> effectuent des contrôles réguliers dans les établissements de restauration de {ville.nom} et des communes environnantes. L&apos;absence d&apos;attestation de formation HACCP lors d&apos;un contrôle constitue une infraction passible d&apos;une <strong>amende de 5e classe</strong> pouvant atteindre 1 500 €. Au-delà de l&apos;aspect réglementaire, la formation permet aux professionnels de maîtriser les bonnes pratiques d&apos;hygiène essentielles à la sécurité des consommateurs et à la pérennité de leur établissement.
            </p>
            <p>
              L&apos;attestation de formation est <strong>délivrée à vie</strong>, sans obligation légale de recyclage. Néanmoins, il est vivement recommandé de mettre à jour ses connaissances régulièrement, notamment suite aux évolutions réglementaires comme l&apos;arrêté de 2024 sur la pratique obligatoire, ou aux nouvelles exigences en matière de gestion des <strong>14 allergènes majeurs</strong> et de <strong>traçabilité</strong>.
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

      {/* VILLES VOISINES + LIENS DEPT/REGION */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="max-w-4xl mx-auto">
          {neighbors.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Formation HACCP dans le {ville.dept} — Villes proches</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {neighbors.map(n => (
                  <Link key={n.slug} href={`/formation-haccp-${n.slug}`}
                    className="flex items-center justify-between border rounded-xl p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <div>
                      <span className="font-semibold text-gray-800">{n.nom}</span>
                      <span className="text-xs text-gray-500 ml-2">({n.numDept})</span>
                    </div>
                    <span className="text-sm text-gray-400">{n.population.toLocaleString("fr-FR")} hab.</span>
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="flex flex-wrap gap-3">
            {deptSlug && (
              <Link href={`/formation-haccp-${deptSlug}`}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
                📍 Formation HACCP {ville.dept} ({ville.numDept})
              </Link>
            )}
            {regionSlug && (
              <Link href={`/formation-haccp-${regionSlug}`}
                className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
                🗺️ Formation HACCP {ville.region}
              </Link>
            )}
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
