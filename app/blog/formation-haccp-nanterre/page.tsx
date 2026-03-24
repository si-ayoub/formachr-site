import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Nanterre — Hauts-de-Seine 2026",
  description: "Formation HACCP à Nanterre, préfecture des Hauts-de-Seine (92). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide pour restaurateurs 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-nanterre` }
}

const FAQ = [
  { question: "Où se former au HACCP à Nanterre et La Défense ?", answer: "Nanterre et le quartier d'affaires de La Défense proposent plusieurs centres de formation certifiés Qualiopi. Les sessions se tiennent à proximité de la gare de Nanterre-Préfecture (RER A), dans le quartier du Petit-Nanterre et à La Défense (Grande Arche). La Défense est particulièrement bien desservie par le RER A, le métro ligne 1 et le tramway T2, rendant les formations accessibles depuis toute l'Île-de-France." },
  { question: "Quel est le tarif de la formation HACCP à Nanterre ?", answer: "Le tarif moyen à Nanterre et dans le nord des Hauts-de-Seine se situe entre 300 et 400 euros en présentiel. À La Défense, les tarifs peuvent être légèrement supérieurs (350-450 euros) en raison du coût des locaux. En e-learning, comptez 179 à 259 euros. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR, et France Travail propose l'AIF pour les demandeurs d'emploi." },
  { question: "La formation HACCP est-elle adaptée à la restauration collective de La Défense ?", answer: "Oui, la formation HACCP de 14 heures couvre les spécificités de la restauration collective, très présente à La Défense avec ses nombreuses cantines d'entreprise, restaurants inter-entreprises et espaces de restauration dans les tours de bureaux. Les organismes locaux proposent souvent des modules complémentaires adaptés à la restauration collective (gestion des volumes, liaison chaude/froide, GEMRCN)." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Nanterre", url: "/blog/formation-haccp-nanterre" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Nanterre",
        description: "Formation hygiène alimentaire HACCP à Nanterre — 14 heures, attestation officielle",
        city: "Nanterre",
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
          <li className="text-gray-800 font-medium">Formation HACCP Nanterre</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              HAUTS-DE-SEINE (92) &mdash; Nanterre &amp; La D&eacute;fense
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Nanterre<br />
              <span className="text-yellow-400">Hauts-de-Seine 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Formation hygi&egrave;ne alimentaire HACCP &agrave; Nanterre et La D&eacute;fense. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation DRAAF officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Nanterre Préfecture","La Défense","RER A direct","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Nanterre : pr&eacute;fecture des Hauts-de-Seine</h2>

          <p>
            Nanterre, pr&eacute;fecture des Hauts-de-Seine, est une ville de <strong>plus de 95 000 habitants</strong> situ&eacute;e &agrave; l&apos;ouest de Paris. Sa position strat&eacute;gique, &agrave; proximit&eacute; imm&eacute;diate du quartier d&apos;affaires de <strong>La D&eacute;fense</strong> (premier quartier d&apos;affaires europ&eacute;en), en fait un p&ocirc;le de restauration dynamique. Restaurants traditionnels, cantines d&apos;entreprise, food courts, snacks et food trucks coexistent pour nourrir les 180 000 salari&eacute;s quotidiens de La D&eacute;fense et la population r&eacute;sidente de Nanterre.
          </p>

          <p>
            L&apos;ensemble de ces &eacute;tablissements est soumis &agrave; l&apos;obligation de formation HACCP pr&eacute;vue par le <strong>d&eacute;cret n&deg;2011-731</strong>. Que vous g&eacute;riez un restaurant &agrave; Nanterre-Ville, un traiteur dans le quartier des Groues ou un espace de restauration &agrave; La D&eacute;fense, au moins un membre de votre &eacute;quipe doit d&eacute;tenir l&apos;attestation de formation hygi&egrave;ne alimentaire de <strong>14 heures</strong>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">La D&eacute;fense : un enjeu HACCP sp&eacute;cifique</h2>

          <p>
            Le quartier d&apos;affaires de La D&eacute;fense concentre une offre de restauration massive : plus de <strong>300 points de restauration</strong> (restaurants, food courts, boulangeries, traiteurs, cantines d&apos;entreprise) pour servir les salari&eacute;s des tours de bureaux. La restauration collective y occupe une place pr&eacute;pond&eacute;rante, avec des sp&eacute;cificit&eacute;s HACCP li&eacute;es &agrave; la <strong>gestion des volumes</strong>, la <strong>liaison chaude et froide</strong>, et les normes <strong>GEMRCN</strong> (Groupement d&apos;&Eacute;tude des March&eacute;s en Restauration Collective et de Nutrition).
          </p>

          <p>
            Les food courts r&eacute;cents (Westfield Les 4 Temps, Les Passages) accueillent de nombreux concepts de restauration rapide et de street food dont les exploitants doivent &eacute;galement justifier de la formation HACCP. La <strong>DDPP des Hauts-de-Seine</strong> effectue des contr&ocirc;les r&eacute;guliers dans ces espaces &agrave; fort trafic. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/nanterre" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Nanterre sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Acc&egrave;s et localisation des centres de formation</h2>

          <p>
            Nanterre est parfaitement desservie par les transports en commun. Le <strong>RER A</strong> relie Nanterre-Pr&eacute;fecture &agrave; Ch&acirc;telet en 15 minutes et dessert &eacute;galement Nanterre-Universit&eacute; et La D&eacute;fense. Le <strong>tramway T2</strong> longe la Seine et connecte La D&eacute;fense &agrave; Issy-les-Moulineaux. Ces facilit&eacute;s de transport permettent aux restaurateurs de tout l&apos;ouest parisien d&apos;acc&eacute;der facilement aux centres de formation de Nanterre.
          </p>

          <p>
            Les organismes certifi&eacute;s Qualiopi de la zone proposent des sessions <strong>2 &agrave; 3 fois par mois</strong>, en format inter-entreprises (2 jours cons&eacute;cutifs, groupes de 8 &agrave; 15 stagiaires) ou intra-entreprise (dans vos locaux, &agrave; partir de 4 stagiaires). Le e-learning avec sessions de pratique en visioconf&eacute;rence est &eacute;galement disponible.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Financement et prise en charge</h2>

          <p>
            Le financement de la formation HACCP &agrave; Nanterre suit les m&ecirc;mes dispositifs que le reste du territoire. L&apos;<strong>OPCO AKTO</strong>, op&eacute;rateur de comp&eacute;tences du secteur CHR, prend en charge jusqu&apos;&agrave; 100 % des frais p&eacute;dagogiques pour les entreprises de moins de 50 salari&eacute;s. Les soci&eacute;t&eacute;s de restauration collective de La D&eacute;fense rel&egrave;vent souvent de l&apos;<strong>OPCO EP</strong> (Entreprises de Proximit&eacute;) ou de l&apos;<strong>OPCO AKTO</strong> selon leur convention collective. France Travail finance via l&apos;<strong>AIF</strong> pour les demandeurs d&apos;emploi, et la R&eacute;gion &Icirc;le-de-France propose le &laquo; Ch&egrave;que formation &raquo; pour les cr&eacute;ateurs.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "Cadre l&eacute;gal", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "R&egrave;glement CE 852/2004", "Arr&ecirc;t&eacute; 2024 : 4h pratique minimum", "DDPP 92 : contr&ocirc;les La D&eacute;fense"] },
              { titre: "Hygi&egrave;ne et HACCP", points: ["7 principes HACCP", "Cha&icirc;ne du froid et tra&ccedil;abilit&eacute;", "Gestion des allerg&egrave;nes", "Plan de nettoyage-d&eacute;sinfection"] },
              { titre: "Sp&eacute;cificit&eacute;s locales", points: ["Restauration collective La D&eacute;fense", "Normes GEMRCN", "Food courts et street food", "Liaison chaude et froide"] },
              { titre: "Financement", points: ["OPCO AKTO / OPCO EP", "France Travail AIF", "Ch&egrave;que formation IDF", "Qualiopi certifi&eacute;"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Nanterre</h2>

          <p>
            La formation HACCP de 14 heures se d&eacute;roule sur 2 jours cons&eacute;cutifs. Le <strong>premier jour</strong> couvre le cadre r&eacute;glementaire europ&eacute;en et fran&ccedil;ais, les dangers alimentaires (microbiologiques, chimiques, physiques et allerg&egrave;nes), les bonnes pratiques d&apos;hygi&egrave;ne et les 7 principes de la m&eacute;thode HACCP. Le <strong>second jour</strong>, consacr&eacute; &agrave; la mise en pratique (4h minimum depuis l&apos;arr&ecirc;t&eacute; de 2024), permet d&apos;&eacute;laborer un plan HACCP adapt&eacute; &agrave; votre &eacute;tablissement, de simuler un contr&ocirc;le DDPP et de cr&eacute;er vos fiches de suivi op&eacute;rationnel.
          </p>

          <p>
            L&apos;attestation de formation est reconnue par la DRAAF et valable sur tout le territoire national. Elle doit &ecirc;tre pr&eacute;sent&eacute;e lors de tout contr&ocirc;le sanitaire. Un recyclage est recommand&eacute; tous les 5 ans pour rester conforme aux &eacute;volutions r&eacute;glementaires.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Nanterre</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Nanterre</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi &mdash; Nanterre &amp; La D&eacute;fense &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
