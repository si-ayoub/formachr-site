import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Bordeaux — Gironde 2026",
  description: "Formation HACCP à Bordeaux et en Gironde (33). Organismes certifiés Qualiopi, 14h, financement OPCO AKTO. Guide complet pour restaurateurs bordelais 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-bordeaux` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Bordeaux ?", answer: "Bordeaux dispose de nombreux centres de formation certifiés Qualiopi, principalement dans le quartier Mériadeck, près de la gare Saint-Jean et dans la zone Bordeaux Lac. Des sessions sont organisées chaque semaine en raison de la forte demande. Les villes de Mérignac, Pessac et Libourne proposent également des sessions régulières à des tarifs parfois plus avantageux." },
  { question: "L'OPCO AKTO finance-t-il la formation HACCP à Bordeaux ?", answer: "Oui, l'OPCO AKTO, opérateur de compétences du secteur CHR (cafés, hôtels, restaurants), finance jusqu'à 100 % de la formation HACCP de 14 heures pour les salariés des entreprises de moins de 50 salariés. La délégation régionale AKTO Nouvelle-Aquitaine accompagne les entreprises bordelaises dans leurs démarches. Le dossier est à constituer avant le début de la formation, avec un délai moyen de validation de 15 à 20 jours." },
  { question: "Combien coûte la formation HACCP à Bordeaux ?", answer: "Le tarif moyen de la formation HACCP à Bordeaux se situe entre 280 et 380 euros en présentiel et entre 179 et 259 euros en e-learning. Ces tarifs sont dans la moyenne nationale, légèrement inférieurs à ceux de Paris. La prise en charge OPCO AKTO ou France Travail (AIF) permet dans la majorité des cas une formation gratuite pour le stagiaire." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Bordeaux", url: "/blog/formation-haccp-bordeaux" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Bordeaux",
        description: "Formation hygiène alimentaire HACCP à Bordeaux — 14 heures, attestation officielle",
        city: "Bordeaux",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>&rsaquo;</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>&rsaquo;</li>
          <li className="text-gray-800 font-medium">Formation HACCP Bordeaux</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              GIRONDE (33) &mdash; Sessions hebdomadaires
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Bordeaux<br />
              <span className="text-yellow-400">Gironde 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Trouvez votre formation hygi&egrave;ne alimentaire HACCP &agrave; Bordeaux et en Gironde. Organismes certifi&eacute;s Qualiopi, financement OPCO AKTO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Bordeaux centre","Mériadeck & gare","Mérignac & Pessac","Financement OPCO AKTO"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Bordeaux : guide complet pour les restaurateurs de Gironde</h2>

          <p>
            Bordeaux, m&eacute;tropole de la Nouvelle-Aquitaine, est l&apos;une des villes fran&ccedil;aises les plus dynamiques en mati&egrave;re de restauration. Class&eacute;e au <strong>patrimoine mondial de l&apos;UNESCO</strong>, la ville attire chaque ann&eacute;e des millions de touristes qui fr&eacute;quentent ses nombreux restaurants, bistrots et bars &agrave; vin. La Gironde compte plus de <strong>6 000 &eacute;tablissements de restauration</strong>, tous soumis &agrave; l&apos;obligation de formation HACCP pr&eacute;vue par le d&eacute;cret n&deg;2011-731.
          </p>

          <p>
            La sc&egrave;ne gastronomique bordelaise est particuli&egrave;rement riche et diversifi&eacute;e. Du quartier Saint-Pierre aux Chartrons, de la rue Sainte-Catherine aux quais de la Garonne, les restaurants se multiplient et la concurrence est intense. Dans ce contexte, la formation HACCP n&apos;est pas seulement une obligation l&eacute;gale : c&apos;est un <strong>gage de qualit&eacute; et de professionnalisme</strong> qui rassure la client&egrave;le et prot&egrave;ge votre &eacute;tablissement. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/bordeaux" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Bordeaux sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">L&apos;obligation HACCP en Gironde</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731 du 24 juin 2011</strong> impose &agrave; tout &eacute;tablissement de restauration commerciale de disposer d&apos;au moins un membre du personnel ayant suivi une formation sp&eacute;cifique en hygi&egrave;ne alimentaire de <strong>14 heures minimum</strong>. En Gironde, la <strong>DDPP 33</strong> effectue des contr&ocirc;les r&eacute;guliers, particuli&egrave;rement dans le centre historique de Bordeaux, les zones touristiques (Saint-&Eacute;milion, Arcachon, Cap Ferret) et les centres commerciaux (M&eacute;riadeck, Bordeaux Lac).
          </p>

          <p>
            L&apos;arr&ecirc;t&eacute; du 12 f&eacute;vrier 2024 a renforc&eacute; les exigences en imposant un minimum de <strong>4 heures de mise en pratique</strong> au sein des 14 heures de formation. Cette &eacute;volution r&eacute;glementaire vise &agrave; garantir que les stagiaires acqui&egrave;rent des comp&eacute;tences concr&egrave;tes et directement applicables dans leur &eacute;tablissement.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Financement OPCO AKTO &agrave; Bordeaux</h2>

          <p>
            L&apos;<strong>OPCO AKTO</strong> est l&apos;op&eacute;rateur de comp&eacute;tences privil&eacute;gi&eacute; du secteur CHR (caf&eacute;s, h&ocirc;tels, restaurants). Sa d&eacute;l&eacute;gation r&eacute;gionale <strong>Nouvelle-Aquitaine</strong>, bas&eacute;e &agrave; Bordeaux, accompagne les entreprises girondines dans le financement de la formation HACCP. La prise en charge peut atteindre <strong>100 % des frais p&eacute;dagogiques</strong> pour les entreprises de moins de 50 salari&eacute;s.
          </p>

          <p>
            Pour b&eacute;n&eacute;ficier du financement OPCO AKTO, l&apos;entreprise doit d&eacute;poser un dossier <strong>avant le d&eacute;but de la formation</strong>, incluant le devis de l&apos;organisme de formation (qui doit &ecirc;tre certifi&eacute; Qualiopi), le programme de formation et la convention de formation. Le d&eacute;lai moyen de validation est de 15 &agrave; 20 jours. Les demandeurs d&apos;emploi peuvent solliciter <strong>France Travail</strong> via l&apos;AIF.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">O&ugrave; se former &agrave; Bordeaux et en Gironde</h2>

          <p>
            Bordeaux dispose d&apos;une offre de formation HACCP abondante, avec des sessions propos&eacute;es <strong>chaque semaine</strong> dans diff&eacute;rents quartiers de la m&eacute;tropole. Les centres les plus accessibles se situent dans le quartier <strong>M&eacute;riadeck</strong> (proximit&eacute; tramway A), pr&egrave;s de la <strong>gare Saint-Jean</strong> (TGV, TER, tramway C) et dans la zone de <strong>Bordeaux Lac</strong> (proximit&eacute; parc des expositions).
          </p>

          <p>
            Les villes de la m&eacute;tropole bordelaise offrent &eacute;galement des sessions r&eacute;guli&egrave;res : <strong>M&eacute;rignac</strong> (pr&egrave;s de l&apos;a&eacute;roport), <strong>Pessac</strong> (campus universitaire) et <strong>Libourne</strong> (pour les restaurateurs du Libournais et de Saint-&Eacute;milion). Les tarifs en p&eacute;riph&eacute;rie sont g&eacute;n&eacute;ralement 5 &agrave; 10 % inf&eacute;rieurs &agrave; ceux du centre-ville.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation Gironde", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 33 : contr&ocirc;les r&eacute;guliers", "Zones touristiques surveill&eacute;es", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Cha&icirc;ne du froid et DLC", "Tra&ccedil;abilit&eacute; des produits", "Gestion des 14 allerg&egrave;nes"] },
              { titre: "Pratique professionnelle", points: ["Plan HACCP personnalis&eacute;", "Plan de nettoyage-d&eacute;sinfection", "Simulation contr&ocirc;le DDPP", "R&eacute;ception et stockage"] },
              { titre: "Financement", points: ["OPCO AKTO Nouvelle-Aquitaine", "France Travail AIF", "R&eacute;gion Nouvelle-Aquitaine", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme type de la formation (14 heures)</h2>

          <p>
            La formation HACCP &agrave; Bordeaux se d&eacute;roule sur <strong>2 jours cons&eacute;cutifs</strong> (g&eacute;n&eacute;ralement lundi-mardi ou jeudi-vendredi). Jour 1 : cadre r&eacute;glementaire fran&ccedil;ais et europ&eacute;en, dangers alimentaires, microbiologie appliqu&eacute;e, bonnes pratiques d&apos;hygi&egrave;ne, 7 principes HACCP. Jour 2 (4h de pratique minimum) : &eacute;laboration d&apos;un plan HACCP adapt&eacute;, exercice de tra&ccedil;abilit&eacute;, simulation de contr&ocirc;le sanitaire, cr&eacute;ation des fiches de suivi. L&apos;attestation DRAAF est d&eacute;livr&eacute;e imm&eacute;diatement. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Bordeaux</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Bordeaux</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi en Gironde &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
