import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Versailles — Guide Yvelines 2026",
  description: "Formation HACCP à Versailles et dans les Yvelines (78). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet pour restaurateurs versaillais 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-versailles` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Versailles ?", answer: "Plusieurs organismes certifiés Qualiopi proposent la formation HACCP de 14 heures à Versailles et dans les Yvelines. Les centres de formation sont situés principalement dans le centre-ville de Versailles (à proximité de la gare Versailles Rive Gauche), à Saint-Germain-en-Laye et à Poissy. Des sessions sont organisées une à deux fois par mois, avec une fréquence accrue en septembre-octobre et au printemps." },
  { question: "Combien coûte la formation HACCP dans les Yvelines ?", answer: "Le tarif moyen de la formation HACCP de 14 heures dans les Yvelines se situe entre 290 et 380 euros en présentiel, soit environ 10 à 15 % moins cher qu'à Paris intra-muros. En e-learning, comptez entre 179 et 259 euros. Ces coûts peuvent être intégralement pris en charge par l'OPCO AKTO pour les salariés du secteur CHR (cafés, hôtels, restaurants) ou par France Travail pour les demandeurs d'emploi." },
  { question: "La formation HACCP est-elle obligatoire pour ouvrir un restaurant à Versailles ?", answer: "Oui, la formation HACCP de 14 heures est obligatoire pour tout établissement de restauration commerciale, conformément au décret n°2011-731 du 24 juin 2011. Au moins un membre du personnel doit justifier de cette formation. Versailles et les Yvelines dépendent de la DDPP des Yvelines qui effectue des contrôles réguliers, notamment dans le centre-ville touristique et les zones de restauration du quartier Saint-Louis et du marché Notre-Dame." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Versailles", url: "/blog/formation-haccp-versailles" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Versailles",
        description: "Formation hygiène alimentaire HACCP à Versailles — 14 heures, attestation officielle",
        city: "Versailles",
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
          <li className="text-gray-800 font-medium">Formation HACCP Versailles</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              YVELINES (78) &mdash; Sessions mensuelles
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Versailles<br />
              <span className="text-yellow-400">Guide Yvelines 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Trouvez votre formation hygi&egrave;ne alimentaire HACCP &agrave; Versailles et dans les Yvelines. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Versailles centre","Saint-Germain-en-Laye","Poissy & Mantes","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Versailles : le guide complet pour les restaurateurs des Yvelines</h2>

          <p>
            Versailles, ville royale et pr&eacute;fecture des Yvelines, est un p&ocirc;le de restauration dynamique. Avec pr&egrave;s de <strong>800 &eacute;tablissements de restauration</strong> dans le d&eacute;partement des Yvelines (78), la demande en formation HACCP est soutenue tout au long de l&apos;ann&eacute;e. Que vous soyez restaurateur dans le centre historique de Versailles, traiteur &agrave; Saint-Germain-en-Laye ou g&eacute;rant d&apos;un snack &agrave; Poissy, la formation hygi&egrave;ne alimentaire de 14 heures est une <strong>obligation l&eacute;gale</strong> incontournable.
          </p>

          <p>
            Le d&eacute;partement des Yvelines b&eacute;n&eacute;ficie de la proximit&eacute; de Paris, ce qui offre un large choix d&apos;organismes de formation certifi&eacute;s Qualiopi. Cependant, suivre la formation localement pr&eacute;sente des avantages consid&eacute;rables : des <strong>tarifs inf&eacute;rieurs de 10 &agrave; 15 %</strong> par rapport &agrave; Paris intra-muros, des groupes plus restreints favorisant un meilleur apprentissage, et un gain de temps sur les d&eacute;placements. Les centres de formation versaillais sont accessibles par le RER C (gare Versailles Rive Gauche, 35 minutes depuis Saint-Michel) et par le Transilien N (gare Versailles Chantiers, 15 minutes depuis Montparnasse).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Pourquoi la formation HACCP est obligatoire dans les Yvelines</h2>

          <p>
            Conform&eacute;ment au <strong>d&eacute;cret n&deg;2011-731 du 24 juin 2011</strong>, tout &eacute;tablissement de restauration commerciale doit justifier d&apos;au moins un membre du personnel form&eacute; &agrave; l&apos;hygi&egrave;ne alimentaire. Cette obligation s&apos;applique &agrave; tous les types de restauration : restaurants traditionnels, brasseries, snacks, food trucks, pizzerias, boulangeries avec espace de consommation, et traiteurs. Dans les Yvelines, la <strong>DDPP 78</strong> (Direction D&eacute;partementale de la Protection des Populations) effectue des contr&ocirc;les r&eacute;guliers, en particulier dans les zones touristiques comme le quartier du ch&acirc;teau de Versailles, le march&eacute; Notre-Dame et les rues commer&ccedil;antes du centre-ville.
          </p>

          <p>
            L&apos;absence d&apos;attestation HACCP lors d&apos;un contr&ocirc;le constitue une <strong>infraction de 5e classe</strong>, passible d&apos;une amende de 1 500 &euro; (3 000 &euro; en r&eacute;cidive). Au-del&agrave; de la sanction financi&egrave;re, c&apos;est la r&eacute;putation de votre &eacute;tablissement qui est en jeu : les r&eacute;sultats des contr&ocirc;les sanitaires sont publi&eacute;s sur la plateforme <strong>Alim&apos;confiance</strong> du minist&egrave;re de l&apos;Agriculture.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Les zones de restauration cl&eacute;s dans les Yvelines</h2>

          <p>
            Le d&eacute;partement des Yvelines pr&eacute;sente une g&eacute;ographie de la restauration vari&eacute;e. Le <strong>centre-ville de Versailles</strong> concentre une forte densit&eacute; de restaurants, brasseries et salons de th&eacute;, attir&eacute;s par les millions de visiteurs du ch&acirc;teau. <strong>Saint-Germain-en-Laye</strong>, avec sa rue pi&eacute;tonne et son march&eacute; couvert, constitue un second p&ocirc;le de restauration important. Les villes de <strong>Poissy</strong>, <strong>Mantes-la-Jolie</strong>, <strong>Sartrouville</strong> et <strong>Les Mureaux</strong> accueillent &eacute;galement de nombreux &eacute;tablissements alimentaires dont les g&eacute;rants doivent se conformer aux obligations HACCP. Si vous cherchez des <a href="https://musmap.com/fr/restaurants/versailles" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Versailles sur musmap</a>, vous constaterez la richesse de l&apos;offre locale.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Financement de la formation HACCP dans les Yvelines</h2>

          <p>
            Plusieurs dispositifs permettent de financer int&eacute;gralement votre formation HACCP dans les Yvelines. L&apos;<strong>OPCO AKTO</strong>, op&eacute;rateur de comp&eacute;tences du secteur CHR, prend en charge jusqu&apos;&agrave; 100 % des frais p&eacute;dagogiques pour les entreprises de moins de 50 salari&eacute;s. Les demandeurs d&apos;emploi peuvent b&eacute;n&eacute;ficier de l&apos;<strong>AIF</strong> (Aide Individuelle &agrave; la Formation) via France Travail. Les cr&eacute;ateurs d&apos;entreprise ont acc&egrave;s aux aides r&eacute;gionales d&apos;&Icirc;le-de-France et au dispositif &laquo; Ch&egrave;que formation &raquo;.
          </p>

          <p>
            Le tarif moyen dans les Yvelines se situe entre <strong>290 et 380 &euro;</strong> en pr&eacute;sentiel et entre <strong>179 et 259 &euro;</strong> en e-learning. Comparez les organismes sur leur certification Qualiopi, la taille des groupes (privil&eacute;giez les groupes de 8 &agrave; 12 stagiaires) et la qualit&eacute; du support p&eacute;dagogique.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation locale", points: ["D&eacute;cret 2011-731 (14h obligatoires)", "Contr&ocirc;les DDPP Yvelines fr&eacute;quents", "Zones touristiques surveill&eacute;es", "Arr&ecirc;t&eacute; 2024 : 4h de pratique minimum"] },
              { titre: "Hygi&egrave;ne et s&eacute;curit&eacute;", points: ["M&eacute;thode HACCP appliqu&eacute;e", "Cha&icirc;ne du froid et tra&ccedil;abilit&eacute;", "Plan de Ma&icirc;trise Sanitaire (PMS)", "Gestion des allerg&egrave;nes"] },
              { titre: "Pratique professionnelle", points: ["Nettoyage et d&eacute;sinfection", "Stockage et conservation", "R&eacute;ception des marchandises", "Marche en avant"] },
              { titre: "Financement et certification", points: ["Financement OPCO AKTO 100%", "Aide France Travail (AIF)", "Attestation DRAAF officielle", "Organismes certifi&eacute;s Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme type de la formation HACCP &agrave; Versailles (14 heures)</h2>

          <p>
            La formation HACCP de 14 heures, r&eacute;partie sur 2 jours cons&eacute;cutifs, couvre un programme complet adapt&eacute; aux r&eacute;alit&eacute;s des restaurateurs des Yvelines. La premi&egrave;re journ&eacute;e aborde le cadre r&eacute;glementaire (paquet hygi&egrave;ne europ&eacute;en, d&eacute;cret de 2011, arr&ecirc;t&eacute; de 2024), les dangers alimentaires (microbiologiques, chimiques, physiques) et les <strong>7 principes de la m&eacute;thode HACCP</strong>. La seconde journ&eacute;e est consacr&eacute;e &agrave; la mise en pratique : &eacute;laboration d&apos;un plan HACCP pour votre &eacute;tablissement, exercice de tra&ccedil;abilit&eacute;, simulation de contr&ocirc;le DDPP et r&eacute;daction des fiches de suivi (temp&eacute;ratures, nettoyage, r&eacute;ception).
          </p>

          <p>
            &Agrave; l&apos;issue de la formation, vous recevez une <strong>attestation de formation officielle</strong>, reconnue par la DRAAF et valable sur l&apos;ensemble du territoire national. Cette attestation doit &ecirc;tre conserv&eacute;e dans les locaux de votre &eacute;tablissement et pr&eacute;sent&eacute;e &agrave; tout contr&ocirc;le de la DDPP des Yvelines. Il est recommand&eacute; d&apos;effectuer un recyclage tous les 5 ans pour rester &agrave; jour des &eacute;volutions r&eacute;glementaires.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Versailles</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Versailles</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi dans les Yvelines &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
