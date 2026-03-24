import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Boulogne-Billancourt — Hauts-de-Seine 2026",
  description: "Formation HACCP à Boulogne-Billancourt et dans les Hauts-de-Seine (92). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide restaurateurs 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-boulogne-billancourt` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Boulogne-Billancourt ?", answer: "Boulogne-Billancourt dispose de centres de formation certifiés Qualiopi à proximité du métro Marcel Sembat (ligne 9) et du pont de Sèvres (ligne 9, terminus). Des sessions sont également proposées à Issy-les-Moulineaux, Neuilly-sur-Seine et La Défense. La fréquence est de 2 à 4 sessions par mois dans l'ensemble des Hauts-de-Seine, grâce à la densité de l'offre de formation dans ce département." },
  { question: "Combien coûte la formation HACCP dans les Hauts-de-Seine ?", answer: "Les tarifs dans les Hauts-de-Seine sont proches de ceux de Paris intra-muros en raison du niveau de vie élevé du département. Comptez entre 320 et 420 euros en présentiel et entre 179 et 259 euros en e-learning. L'OPCO AKTO prend en charge jusqu'à 100 % des frais pour les entreprises de moins de 50 salariés du secteur CHR. France Travail finance également via l'AIF pour les demandeurs d'emploi." },
  { question: "Quelles sont les spécificités HACCP pour les restaurants de Boulogne-Billancourt ?", answer: "Boulogne-Billancourt est la commune la plus peuplée des Hauts-de-Seine avec plus de 120 000 habitants. La ville compte de nombreux restaurants, brasseries et établissements de restauration rapide, notamment dans les quartiers de la Porte de Saint-Cloud, du centre-ville et de la zone du Trapèze. La DDPP des Hauts-de-Seine effectue des contrôles réguliers, particulièrement dans les zones à forte densité de restauration et les centres commerciaux." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Boulogne-Billancourt", url: "/blog/formation-haccp-boulogne-billancourt" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Boulogne-Billancourt",
        description: "Formation hygiène alimentaire HACCP à Boulogne-Billancourt — 14 heures, attestation officielle",
        city: "Boulogne-Billancourt",
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
          <li className="text-gray-800 font-medium">Formation HACCP Boulogne-Billancourt</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              HAUTS-DE-SEINE (92) &mdash; Sessions fr&eacute;quentes
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Boulogne-Billancourt<br />
              <span className="text-yellow-400">Hauts-de-Seine 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Trouvez votre formation hygi&egrave;ne alimentaire HACCP &agrave; Boulogne-Billancourt et dans les Hauts-de-Seine. Organismes Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Boulogne centre","Issy-les-Moulineaux","Neuilly & La Défense","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Boulogne-Billancourt : guide complet</h2>

          <p>
            Boulogne-Billancourt est la <strong>commune la plus peupl&eacute;e des Hauts-de-Seine</strong> et la deuxi&egrave;me d&apos;&Icirc;le-de-France apr&egrave;s Paris, avec plus de 120 000 habitants. Son tissu &eacute;conomique dense et sa proximit&eacute; imm&eacute;diate avec Paris (m&eacute;tro ligne 9, ligne 10) en font un p&ocirc;le de restauration tr&egrave;s actif. Le quartier du <strong>Trap&egrave;ze</strong>, l&apos;&icirc;le Seguin, le centre-ville historique et les abords de la Porte de Saint-Cloud accueillent des centaines de restaurants, brasseries, snacks et food trucks dont les g&eacute;rants doivent se conformer &agrave; l&apos;obligation de formation HACCP.
          </p>

          <p>
            Les Hauts-de-Seine (92) comptent au total pr&egrave;s de <strong>5 000 &eacute;tablissements de restauration</strong>. Le d&eacute;partement b&eacute;n&eacute;ficie d&apos;une offre de formation abondante, avec des organismes certifi&eacute;s Qualiopi implant&eacute;s &agrave; Boulogne-Billancourt, Issy-les-Moulineaux, Neuilly-sur-Seine, Courbevoie et La D&eacute;fense. La proximit&eacute; de Paris offre &eacute;galement l&apos;acc&egrave;s aux nombreux centres de formation parisiens.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP et contr&ocirc;les dans les Hauts-de-Seine</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> rend obligatoire la formation hygi&egrave;ne alimentaire de 14 heures pour tout &eacute;tablissement de restauration commerciale. La <strong>DDPP des Hauts-de-Seine</strong> est particuli&egrave;rement active dans les zones &agrave; forte densit&eacute; de restauration : le quartier d&apos;affaires de La D&eacute;fense, les centres commerciaux (Les 4 Temps, Les Passages), les rues commer&ccedil;antes de Boulogne-Billancourt et de Neuilly-sur-Seine. Les r&eacute;sultats des contr&ocirc;les sont publi&eacute;s sur <strong>Alim&apos;confiance</strong>.
          </p>

          <p>
            Au-del&agrave; de l&apos;amende de 1 500 &euro; pour d&eacute;faut d&apos;attestation HACCP, un r&eacute;sultat &laquo; &agrave; am&eacute;liorer &raquo; ou &laquo; &agrave; corriger de mani&egrave;re urgente &raquo; sur Alim&apos;confiance peut avoir des cons&eacute;quences commerciales d&eacute;sastreuses dans un d&eacute;partement o&ugrave; la client&egrave;le est <strong>particuli&egrave;rement exigeante</strong> en mati&egrave;re de qualit&eacute; et de s&eacute;curit&eacute; alimentaire. Pour d&eacute;couvrir les restaurants locaux, consultez les <a href="https://musmap.com/fr/restaurants/boulogne-billancourt" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Boulogne-Billancourt sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Centres de formation dans les Hauts-de-Seine</h2>

          <p>
            Les organismes de formation HACCP dans les Hauts-de-Seine se r&eacute;partissent sur plusieurs p&ocirc;les g&eacute;ographiques. &Agrave; <strong>Boulogne-Billancourt</strong>, les centres sont accessibles par le m&eacute;tro ligne 9 (stations Marcel Sembat et Billancourt) et la ligne 10 (Boulogne &mdash; Jean Jaur&egrave;s et Boulogne &mdash; Pont de Saint-Cloud). &Agrave; <strong>Issy-les-Moulineaux</strong>, la proximit&eacute; du tramway T2 et du m&eacute;tro ligne 12 facilite l&apos;acc&egrave;s. Le quartier de <strong>La D&eacute;fense</strong> accueille &eacute;galement des sessions, particuli&egrave;rement adapt&eacute;es aux professionnels de la restauration collective des tours de bureaux.
          </p>

          <p>
            Les sessions sont organis&eacute;es <strong>2 &agrave; 4 fois par mois</strong> dans l&apos;ensemble du d&eacute;partement, avec une fr&eacute;quence accrue en p&eacute;riode de rentr&eacute;e (septembre-octobre). Les formats incluent le pr&eacute;sentiel inter-entreprises, le pr&eacute;sentiel intra-entreprise (&agrave; partir de 4 stagiaires, dans vos locaux) et le e-learning avec compl&eacute;ment pratique en visioconf&eacute;rence.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement dans le 92</h2>

          <p>
            Les tarifs de la formation HACCP dans les Hauts-de-Seine sont l&eacute;g&egrave;rement sup&eacute;rieurs &agrave; la moyenne r&eacute;gionale, refl&eacute;tant le co&ucirc;t de la vie &eacute;lev&eacute; du d&eacute;partement. Comptez entre <strong>320 et 420 &euro;</strong> en pr&eacute;sentiel et entre <strong>179 et 259 &euro;</strong> en e-learning. Heureusement, plusieurs dispositifs de financement permettent une prise en charge totale : l&apos;<strong>OPCO AKTO</strong> pour les salari&eacute;s CHR, <strong>France Travail</strong> (AIF) pour les demandeurs d&apos;emploi, et les aides r&eacute;gionales d&apos;&Icirc;le-de-France pour les cr&eacute;ateurs d&apos;entreprise.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation", points: ["D&eacute;cret 2011-731 (14h obligatoires)", "Paquet hygi&egrave;ne europ&eacute;en CE 852/2004", "Arr&ecirc;t&eacute; 2024 : 4h de pratique", "Contr&ocirc;les DDPP 92 r&eacute;guliers"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Gestion de la cha&icirc;ne du froid", "Tra&ccedil;abilit&eacute; des produits", "Gestion des 14 allerg&egrave;nes"] },
              { titre: "Pratique sur site", points: ["&Eacute;laboration plan HACCP", "Plan de nettoyage-d&eacute;sinfection", "Simulation contr&ocirc;le sanitaire", "Fiches de suivi op&eacute;rationnel"] },
              { titre: "Financement", points: ["OPCO AKTO prise en charge 100%", "France Travail AIF", "Aides r&eacute;gionales IDF", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP (14 heures)</h2>

          <p>
            Le programme de formation HACCP &agrave; Boulogne-Billancourt suit le r&eacute;f&eacute;rentiel national. <strong>Jour 1</strong> (7h) : cadre r&eacute;glementaire fran&ccedil;ais et europ&eacute;en, dangers alimentaires sp&eacute;cifiques &agrave; la restauration, microbiologie appliqu&eacute;e, bonnes pratiques d&apos;hygi&egrave;ne (BPH), principes de la m&eacute;thode HACCP. <strong>Jour 2</strong> (7h, dont 4h de pratique) : application concr&egrave;te dans votre contexte professionnel, construction du diagramme de fabrication, identification des CCP, &eacute;laboration des fiches d&apos;enregistrement, pr&eacute;paration au Plan de Ma&icirc;trise Sanitaire (PMS).
          </p>

          <p>
            L&apos;attestation d&eacute;livr&eacute;e &agrave; l&apos;issue de la formation est reconnue par la DRAAF et valable sur tout le territoire national. Conservez-la pr&eacute;cieusement dans vos locaux : elle sera demand&eacute;e &agrave; chaque contr&ocirc;le DDPP. Un recyclage est recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Boulogne-Billancourt</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Boulogne-Billancourt</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi dans les Hauts-de-Seine &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
