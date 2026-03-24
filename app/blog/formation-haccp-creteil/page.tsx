import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Créteil — Val-de-Marne 2026",
  description: "Formation HACCP à Créteil et dans le Val-de-Marne (94). Organismes certifiés Qualiopi, 14h, financement OPCO AKTO. Guide complet restaurateurs 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-creteil` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Créteil ?", answer: "Créteil dispose de plusieurs centres de formation certifiés Qualiopi, principalement situés à proximité de la station de métro Créteil — Préfecture (ligne 8) et dans la zone d'activités du Palais de Justice. Des sessions sont également proposées à Maisons-Alfort, Vitry-sur-Seine et Ivry-sur-Seine. La fréquence des sessions varie d'une à deux fois par mois en période normale, avec des sessions supplémentaires en septembre et janvier." },
  { question: "Quel est le prix de la formation HACCP dans le Val-de-Marne ?", answer: "Le tarif moyen de la formation HACCP dans le Val-de-Marne se situe entre 290 et 370 euros en présentiel, ce qui est inférieur aux tarifs parisiens (350-490 euros). En e-learning, comptez 179 à 259 euros. L'OPCO AKTO finance jusqu'à 100 % des frais pour les salariés du secteur CHR des entreprises de moins de 50 salariés. France Travail peut également financer la formation via l'AIF pour les demandeurs d'emploi inscrits." },
  { question: "La DDPP du Val-de-Marne contrôle-t-elle souvent les restaurants ?", answer: "Oui, la DDPP du Val-de-Marne effectue des contrôles réguliers sur les établissements de restauration du département. Les zones commerciales (Belle Épine, Créteil Soleil), les marchés alimentaires et les rues commerçantes de Créteil, Maisons-Alfort et Vincennes font l'objet d'une surveillance particulière. Lors d'un contrôle, l'inspecteur vérifie en priorité l'attestation de formation HACCP, le Plan de Maîtrise Sanitaire (PMS) et le respect de la chaîne du froid." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Créteil", url: "/blog/formation-haccp-creteil" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Créteil",
        description: "Formation hygiène alimentaire HACCP à Créteil — 14 heures, attestation officielle",
        city: "Créteil",
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
          <li className="text-gray-800 font-medium">Formation HACCP Cr&eacute;teil</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              VAL-DE-MARNE (94) &mdash; Sessions r&eacute;guli&egrave;res
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Cr&eacute;teil<br />
              <span className="text-yellow-400">Val-de-Marne 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Guide complet de la formation hygi&egrave;ne alimentaire HACCP &agrave; Cr&eacute;teil et dans le Val-de-Marne. Tarifs comp&eacute;titifs, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Créteil Préfecture","Maisons-Alfort","Vitry & Ivry","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Cr&eacute;teil : pourquoi choisir le Val-de-Marne</h2>

          <p>
            Cr&eacute;teil, pr&eacute;fecture du Val-de-Marne (94), est un p&ocirc;le &eacute;conomique majeur du sud-est de l&apos;&Icirc;le-de-France. Avec une population de plus de <strong>90 000 habitants</strong> et une zone d&apos;activit&eacute;s dynamique, la ville accueille de nombreux &eacute;tablissements de restauration, des restaurants traditionnels aux food trucks en passant par les traiteurs et les boulangeries. Le Val-de-Marne compte au total pr&egrave;s de <strong>3 500 &eacute;tablissements alimentaires</strong> soumis &agrave; l&apos;obligation de formation HACCP.
          </p>

          <p>
            Suivre sa formation HACCP &agrave; Cr&eacute;teil pr&eacute;sente des avantages concrets par rapport &agrave; Paris : des <strong>tarifs 15 &agrave; 25 % inf&eacute;rieurs</strong>, une accessibilit&eacute; optimale gr&acirc;ce au m&eacute;tro ligne 8 (terminus Cr&eacute;teil &mdash; Pointe du Lac) et au RER, des groupes de formation plus restreints (8 &agrave; 12 stagiaires en moyenne) favorisant un apprentissage personnalis&eacute;, et un stationnement plus facile pour les professionnels motoris&eacute;s.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">L&apos;obligation HACCP dans le Val-de-Marne</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> impose &agrave; tout &eacute;tablissement de restauration commerciale de disposer d&apos;au moins un membre du personnel form&eacute; &agrave; l&apos;hygi&egrave;ne alimentaire. Cette obligation concerne les restaurants, brasseries, snacks, pizzerias, food trucks, traiteurs et boulangeries avec espace de consommation sur place. La formation doit durer <strong>14 heures minimum</strong> et &ecirc;tre dispens&eacute;e par un organisme enregistr&eacute; aupr&egrave;s de la DRAAF et, id&eacute;alement, certifi&eacute; Qualiopi.
          </p>

          <p>
            La <strong>DDPP du Val-de-Marne</strong> effectue des contr&ocirc;les r&eacute;guliers, en particulier dans les centres commerciaux (Cr&eacute;teil Soleil, Belle &Eacute;pine &agrave; Thiais), les march&eacute;s alimentaires et les rues commer&ccedil;antes. L&apos;absence d&apos;attestation HACCP est une infraction de 5e classe, sanctionn&eacute;e par une amende de <strong>1 500 &euro;</strong> (3 000 &euro; en r&eacute;cidive). Pour d&eacute;couvrir l&apos;offre de restauration locale, consultez les <a href="https://musmap.com/fr/restaurants/creteil" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Cr&eacute;teil sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">O&ugrave; se former &agrave; Cr&eacute;teil et dans le 94</h2>

          <p>
            Les centres de formation HACCP dans le Val-de-Marne se concentrent principalement autour de <strong>Cr&eacute;teil Pr&eacute;fecture</strong> (acc&egrave;s m&eacute;tro ligne 8), de <strong>Maisons-Alfort</strong> (proximit&eacute; de l&apos;&Eacute;cole V&eacute;t&eacute;rinaire, m&eacute;tro ligne 8) et de <strong>Vitry-sur-Seine</strong>. Certains organismes proposent &eacute;galement des sessions &agrave; <strong>Ivry-sur-Seine</strong> et &agrave; <strong>Vincennes</strong>, villes limitrophes de Paris offrant un acc&egrave;s rapide depuis la capitale.
          </p>

          <p>
            Les sessions sont organis&eacute;es une &agrave; deux fois par mois en p&eacute;riode normale, avec une fr&eacute;quence accrue en septembre-octobre (p&eacute;riode de cr&eacute;ation d&apos;entreprises) et en janvier. Les formats propos&eacute;s incluent le <strong>pr&eacute;sentiel inter-entreprises</strong> (2 jours cons&eacute;cutifs), le <strong>pr&eacute;sentiel intra-entreprise</strong> (dans vos locaux, &agrave; partir de 4 stagiaires) et le <strong>e-learning</strong> avec sessions de pratique en visioconf&eacute;rence.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Financement et tarifs dans le Val-de-Marne</h2>

          <p>
            Le co&ucirc;t de la formation HACCP &agrave; Cr&eacute;teil et dans le Val-de-Marne est parmi les plus comp&eacute;titifs d&apos;&Icirc;le-de-France. Comptez entre <strong>290 et 370 &euro;</strong> en pr&eacute;sentiel et entre <strong>179 et 259 &euro;</strong> en e-learning. L&apos;<strong>OPCO AKTO</strong> finance jusqu&apos;&agrave; 100 % des frais pour les salari&eacute;s du secteur CHR. Les demandeurs d&apos;emploi peuvent b&eacute;n&eacute;ficier du financement <strong>France Travail</strong> via l&apos;AIF (Aide Individuelle &agrave; la Formation), avec un d&eacute;lai moyen de 10 &agrave; 15 jours pour l&apos;accord.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "Cadre r&eacute;glementaire", points: ["D&eacute;cret 2011-731 (14h obligatoires)", "R&egrave;glement CE 852/2004", "Arr&ecirc;t&eacute; 2024 : 4h pratique", "Contr&ocirc;les DDPP 94 r&eacute;guliers"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Cha&icirc;ne du froid et DLC", "Plan de nettoyage-d&eacute;sinfection", "14 allerg&egrave;nes obligatoires"] },
              { titre: "Mise en pratique", points: ["&Eacute;laboration plan HACCP", "Exercice tra&ccedil;abilit&eacute;", "Simulation contr&ocirc;le DDPP", "Fiches de suivi temp&eacute;ratures"] },
              { titre: "Attestation et financement", points: ["Attestation DRAAF officielle", "OPCO AKTO prise en charge 100%", "France Travail AIF", "Qualiopi garanti"] }
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
            Le programme de la formation HACCP &agrave; Cr&eacute;teil suit le r&eacute;f&eacute;rentiel national de 14 heures, r&eacute;parti sur 2 jours. La <strong>premi&egrave;re journ&eacute;e</strong> (7h) couvre le cadre l&eacute;gal fran&ccedil;ais et europ&eacute;en, les dangers alimentaires (microbiologiques, chimiques, physiques, allerg&egrave;nes), les bonnes pratiques d&apos;hygi&egrave;ne (BPH) et les 7 principes de la m&eacute;thode HACCP. La <strong>seconde journ&eacute;e</strong> (7h, dont 4h de pratique minimum depuis 2024) est consacr&eacute;e &agrave; l&apos;application concr&egrave;te : construction d&apos;un plan HACCP adapt&eacute; &agrave; votre activit&eacute;, gestion des non-conformit&eacute;s, tra&ccedil;abilit&eacute; et pr&eacute;paration aux contr&ocirc;les DDPP.
          </p>

          <p>
            &Agrave; l&apos;issue de la formation, chaque stagiaire re&ccedil;oit une <strong>attestation nominative</strong> reconnue sur tout le territoire national. Il est recommand&eacute; de renouveler la formation tous les 5 ans pour int&eacute;grer les &eacute;volutions r&eacute;glementaires.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Cr&eacute;teil</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Cr&eacute;teil</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi dans le Val-de-Marne &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
