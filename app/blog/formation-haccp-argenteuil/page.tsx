import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Argenteuil — Val-d'Oise 2026",
  description: "Formation HACCP à Argenteuil et dans le Val-d'Oise (95). Organismes certifiés Qualiopi, 14h, financement OPCO AKTO. Guide complet restaurateurs 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-argenteuil` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Argenteuil ?", answer: "Les centres de formation HACCP dans le Val-d'Oise sont principalement situés à Argenteuil (gare d'Argenteuil, Transilien J), Cergy-Pontoise (RER A) et Sarcelles. Argenteuil, plus grande ville du département avec plus de 110 000 habitants, dispose de centres de formation accessibles depuis la gare centrale, à seulement 12 minutes de Paris Saint-Lazare par le Transilien." },
  { question: "Combien coûte la formation HACCP dans le Val-d'Oise ?", answer: "Le tarif moyen dans le Val-d'Oise est parmi les plus accessibles d'Île-de-France : entre 280 et 360 euros en présentiel, soit 20 à 30 % moins cher qu'à Paris. En e-learning, comptez 179 à 259 euros. L'OPCO AKTO prend en charge jusqu'à 100 % pour les salariés CHR des entreprises de moins de 50 salariés. France Travail Val-d'Oise finance via l'AIF pour les demandeurs d'emploi." },
  { question: "La DDPP du Val-d'Oise est-elle stricte sur les contrôles HACCP ?", answer: "La DDPP du Val-d'Oise effectue des contrôles réguliers sur l'ensemble du département, avec une attention particulière portée aux zones commerciales (Côté Seine à Argenteuil, Les 3 Fontaines à Cergy), aux marchés alimentaires et aux axes de restauration rapide. L'absence d'attestation HACCP est sanctionnée par une amende de 1 500 euros (5e classe). Les résultats sont publiés sur Alim'confiance." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Argenteuil", url: "/blog/formation-haccp-argenteuil" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Argenteuil",
        description: "Formation hygiène alimentaire HACCP à Argenteuil — 14 heures, attestation officielle",
        city: "Argenteuil",
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
          <li className="text-gray-800 font-medium">Formation HACCP Argenteuil</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              VAL-D&apos;OISE (95) &mdash; Tarifs comp&eacute;titifs
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Argenteuil<br />
              <span className="text-yellow-400">Val-d&apos;Oise 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Formation hygi&egrave;ne alimentaire HACCP &agrave; Argenteuil et dans le Val-d&apos;Oise. Tarifs parmi les plus accessibles d&apos;IDF, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Argenteuil gare","Cergy-Pontoise","Sarcelles & Garges","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Argenteuil : le guide du Val-d&apos;Oise</h2>

          <p>
            Argenteuil est la <strong>plus grande ville du Val-d&apos;Oise</strong> avec plus de 110 000 habitants, et l&apos;une des villes les plus peupl&eacute;es d&apos;&Icirc;le-de-France. Son tissu commercial dense, ses march&eacute;s alimentaires et ses nombreux restaurants, snacks et boulangeries g&eacute;n&egrave;rent une demande constante en formation HACCP. Le d&eacute;partement du Val-d&apos;Oise (95) compte au total plus de <strong>2 800 &eacute;tablissements de restauration</strong>, de Cergy-Pontoise &agrave; Sarcelles en passant par Garges-l&egrave;s-Gonesse et Ermont.
          </p>

          <p>
            L&apos;un des avantages majeurs de se former dans le Val-d&apos;Oise est le <strong>co&ucirc;t inf&eacute;rieur</strong> par rapport &agrave; Paris et aux d&eacute;partements limitrophes. Les tarifs de la formation HACCP y sont en moyenne <strong>20 &agrave; 30 % moins chers</strong> qu&apos;&agrave; Paris intra-muros, tout en offrant la m&ecirc;me qualit&eacute; de formation et la m&ecirc;me attestation reconnue par la DRAAF. Argenteuil est &eacute;galement tr&egrave;s bien desservie par le <strong>Transilien J</strong> (12 minutes depuis Paris Saint-Lazare) et le <strong>RER C</strong>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">L&apos;obligation HACCP dans le Val-d&apos;Oise</h2>

          <p>
            Comme partout en France, le <strong>d&eacute;cret n&deg;2011-731</strong> impose aux &eacute;tablissements de restauration commerciale du Val-d&apos;Oise de justifier d&apos;au moins un membre du personnel form&eacute; &agrave; l&apos;hygi&egrave;ne alimentaire (14 heures). Cette obligation concerne les restaurants, brasseries, snacks, pizzerias, food trucks, traiteurs, boulangeries avec consommation sur place et &eacute;piceries fines avec pr&eacute;paration alimentaire.
          </p>

          <p>
            La <strong>DDPP du Val-d&apos;Oise</strong> effectue des contr&ocirc;les r&eacute;guliers, avec une vigilance particuli&egrave;re sur les zones commerciales (C&ocirc;t&eacute; Seine &agrave; Argenteuil, Les 3 Fontaines &agrave; Cergy, Qwartz &agrave; Villeneuve-la-Garenne), les march&eacute;s alimentaires et les axes de restauration rapide. Les <a href="https://musmap.com/fr/restaurants/argenteuil" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Argenteuil sur musmap</a> t&eacute;moignent de la diversit&eacute; culinaire de la ville.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">O&ugrave; se former dans le Val-d&apos;Oise</h2>

          <p>
            Les centres de formation HACCP du Val-d&apos;Oise se r&eacute;partissent sur trois p&ocirc;les principaux. <strong>Argenteuil</strong> accueille des organismes &agrave; proximit&eacute; de la gare (Transilien J, 12 min de Saint-Lazare). <strong>Cergy-Pontoise</strong>, accessible par le RER A, concentre plusieurs centres li&eacute;s &agrave; l&apos;universit&eacute; et aux zones d&apos;activit&eacute;s. <strong>Sarcelles et Garges-l&egrave;s-Gonesse</strong>, desservies par le tramway T5 et le RER D, compl&egrave;tent l&apos;offre pour le sud-est du d&eacute;partement.
          </p>

          <p>
            Les sessions sont organis&eacute;es <strong>une &agrave; deux fois par mois</strong> sur chaque site, avec des sessions suppl&eacute;mentaires en p&eacute;riode de forte demande (septembre, janvier). Les groupes sont g&eacute;n&eacute;ralement plus petits qu&apos;&agrave; Paris (6 &agrave; 10 stagiaires), ce qui favorise un apprentissage personnalis&eacute; et des &eacute;changes riches avec le formateur.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs avantageux et financement</h2>

          <p>
            Le Val-d&apos;Oise offre des tarifs parmi les plus comp&eacute;titifs d&apos;&Icirc;le-de-France pour la formation HACCP : entre <strong>280 et 360 &euro;</strong> en pr&eacute;sentiel et entre <strong>179 et 259 &euro;</strong> en e-learning. Cette diff&eacute;rence de prix par rapport &agrave; Paris s&apos;explique par des co&ucirc;ts de locaux inf&eacute;rieurs et une concurrence saine entre organismes. La qualit&eacute; de la formation et la valeur de l&apos;attestation sont identiques &mdash; seul le prix change.
          </p>

          <p>
            Les dispositifs de financement sont les m&ecirc;mes que sur tout le territoire : <strong>OPCO AKTO</strong> (jusqu&apos;&agrave; 100 % pour les salari&eacute;s CHR), <strong>France Travail</strong> (AIF pour les demandeurs d&apos;emploi), et les <strong>aides r&eacute;gionales IDF</strong> pour les cr&eacute;ateurs d&apos;entreprise. Le d&eacute;lai moyen d&apos;accord France Travail dans le Val-d&apos;Oise est de 10 &agrave; 15 jours.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "Paquet hygi&egrave;ne CE 852/2004", "Arr&ecirc;t&eacute; 2024 : 4h de pratique", "Contr&ocirc;les DDPP 95 r&eacute;guliers"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Microbiologie appliqu&eacute;e", "Cha&icirc;ne du froid et DLC", "14 allerg&egrave;nes obligatoires"] },
              { titre: "Mise en pratique", points: ["Plan HACCP personnalis&eacute;", "Simulation contr&ocirc;le DDPP", "Tra&ccedil;abilit&eacute; des produits", "Fiches de suivi op&eacute;rationnel"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "Aides r&eacute;gionales IDF", "Attestation DRAAF officielle"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation (14 heures)</h2>

          <p>
            Le programme de 14 heures sur 2 jours couvre l&apos;int&eacute;gralit&eacute; du r&eacute;f&eacute;rentiel national. <strong>Jour 1</strong> : cadre r&eacute;glementaire (d&eacute;cret 2011, paquet hygi&egrave;ne, arr&ecirc;t&eacute; 2024), dangers alimentaires sp&eacute;cifiques &agrave; la restauration, bonnes pratiques d&apos;hygi&egrave;ne (BPH), les 7 principes HACCP. <strong>Jour 2</strong> (dont 4h de pratique minimum) : &eacute;laboration d&apos;un plan HACCP pour votre &eacute;tablissement, gestion des non-conformit&eacute;s, exercice de tra&ccedil;abilit&eacute;, simulation de contr&ocirc;le sanitaire, cr&eacute;ation de fiches d&apos;enregistrement.
          </p>

          <p>
            L&apos;attestation de formation est d&eacute;livr&eacute;e imm&eacute;diatement &agrave; l&apos;issue des 2 jours. Elle est reconnue par la DRAAF et valable nationalement. Pensez &agrave; la renouveler tous les 5 ans pour rester &agrave; jour.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Argenteuil</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Argenteuil</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi dans le Val-d&apos;Oise &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
