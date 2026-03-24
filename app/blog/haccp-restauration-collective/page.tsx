import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "HACCP Restauration Collective — Obligations Cantines et Self-Service",
  description: "HACCP en restauration collective : obligations cantines, GEMRCN, démarche HACCP collective, contrôles préfectoraux.",
  alternates: { canonical: `${SITE_URL}/blog/haccp-restauration-collective` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en restauration collective ?", answer: "Oui, la réglementation européenne (règlement CE 852/2004) et le droit français imposent que tout établissement de restauration collective dispose de personnel formé à l'hygiène alimentaire. Contrairement à la restauration commerciale où la formation de 14 heures est obligatoire pour au moins une personne, la restauration collective doit s'appuyer sur une démarche HACCP complète intégrée au PMS (Plan de Maîtrise Sanitaire), avec du personnel formé aux bonnes pratiques d'hygiène." },
  { question: "Quelle est la différence entre HACCP en restauration collective et commerciale ?", answer: "La restauration collective (cantines scolaires, hôpitaux, EHPAD, entreprises) est soumise à des exigences supplémentaires par rapport à la restauration commerciale. Elle doit respecter le GEMRCN (recommandations nutritionnelles), gérer des volumes importants (souvent plus de 500 repas/jour), maîtriser la liaison chaude et froide, effectuer des prélèvements d'échantillons témoins conservés 5 jours, et se soumettre aux contrôles de l'ARS en plus de la DDPP." },
  { question: "Qui contrôle l'HACCP en restauration collective ?", answer: "Les contrôles sont effectués par la DDPP (Direction Départementale de la Protection des Populations) et l'ARS (Agence Régionale de Santé). En restauration scolaire, les services vétérinaires départementaux interviennent également. Les contrôles portent sur le PMS, les relevés de température, la traçabilité, les échantillons témoins, l'état des locaux et la formation du personnel. En cas de TIAC (Toxi-Infection Alimentaire Collective), une enquête approfondie est systématiquement déclenchée." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "HACCP Restauration Collective", url: "/blog/haccp-restauration-collective" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>&rsaquo;</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>&rsaquo;</li>
          <li className="text-gray-800 font-medium">HACCP Restauration Collective</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              RESTAURATION COLLECTIVE &mdash; Cantines et self-service
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              HACCP Restauration Collective<br />
              <span className="text-yellow-400">Obligations Cantines et Self-Service</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">March&eacute;s publics, GEMRCN, contr&ocirc;les pr&eacute;fectoraux, liaison chaude et froide : tout ce que la restauration collective doit savoir sur la d&eacute;marche HACCP.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Cantines scolaires","Hôpitaux et EHPAD","Entreprises et self","Conformité GEMRCN"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restauration-collective" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">HACCP en restauration collective : un cadre r&eacute;glementaire renforc&eacute;</h2>
          <p>
            La restauration collective regroupe l&apos;ensemble des activit&eacute;s de pr&eacute;paration et de service de repas en dehors du cadre familial et commercial : <strong>cantines scolaires</strong>, restaurants d&apos;entreprise, self-service hospitaliers, EHPAD, centres p&eacute;nitentiaires, arm&eacute;es et collectivit&eacute;s territoriales. Ce secteur sert chaque jour plus de <strong>8 millions de repas en France</strong>, ce qui en fait un enjeu majeur de sant&eacute; publique. La d&eacute;marche HACCP y est non seulement obligatoire, mais soumise &agrave; des exigences particuli&egrave;rement strictes en raison des volumes trait&eacute;s et de la vuln&eacute;rabilit&eacute; de certains publics (enfants, personnes &acirc;g&eacute;es, patients hospitalis&eacute;s).
          </p>
          <p>
            Le cadre r&eacute;glementaire repose sur le <strong>r&egrave;glement europ&eacute;en CE 852/2004</strong> relatif &agrave; l&apos;hygi&egrave;ne des denr&eacute;es alimentaires, le d&eacute;cret n&deg; 2011-731 du 24 juin 2011 et l&apos;arr&ecirc;t&eacute; du 21 d&eacute;cembre 2009 relatif aux r&egrave;gles sanitaires applicables aux activit&eacute;s de commerce de d&eacute;tail, d&apos;entreposage et de transport de produits d&apos;origine animale et denr&eacute;es alimentaires en contenant. En restauration collective, ces textes sont compl&eacute;t&eacute;s par des <strong>obligations sp&eacute;cifiques</strong> li&eacute;es aux march&eacute;s publics et aux recommandations nutritionnelles.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">March&eacute;s publics et cahier des charges HACCP</h2>
          <p>
            La majorit&eacute; des &eacute;tablissements de restauration collective publique fonctionnent dans le cadre de <strong>march&eacute;s publics</strong>. Qu&apos;il s&apos;agisse d&apos;une gestion directe (en r&eacute;gie) ou d&apos;une d&eacute;l&eacute;gation &agrave; un prestataire priv&eacute; (soci&eacute;t&eacute;s de restauration collective comme Sodexo, Elior, Compass), le cahier des charges int&egrave;gre syst&eacute;matiquement des <strong>clauses HACCP</strong>. Le prestataire doit d&eacute;montrer la mise en place d&apos;un PMS (Plan de Ma&icirc;trise Sanitaire) complet, fournir les preuves de formation du personnel et se soumettre &agrave; des audits r&eacute;guliers.
          </p>
          <p>
            Les collectivit&eacute;s territoriales (mairies, d&eacute;partements, r&eacute;gions) exigent fr&eacute;quemment dans leurs appels d&apos;offres la certification <strong>ISO 22000</strong> ou la d&eacute;monstration d&apos;une d&eacute;marche HACCP formalis&eacute;e. Le non-respect de ces clauses peut entra&icirc;ner la r&eacute;siliation du march&eacute;, des p&eacute;nalit&eacute;s financi&egrave;res et l&apos;exclusion des futures consultations. Pour les gestionnaires en r&eacute;gie directe, l&apos;absence de d&eacute;marche HACCP engage la responsabilit&eacute; de la collectivit&eacute; et de ses &eacute;lus.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">GEMRCN : les recommandations nutritionnelles obligatoires</h2>
          <p>
            Le <strong>GEMRCN</strong> (Groupement d&apos;&Eacute;tude des March&eacute;s en Restauration Collective et de Nutrition) &eacute;tablit les recommandations nutritionnelles applicables &agrave; la restauration collective. Depuis la loi EGAlim de 2018, ces recommandations ont &eacute;t&eacute; renforc&eacute;es et rendues plus contraignantes, notamment en restauration scolaire. Le GEMRCN impose des <strong>fr&eacute;quences de service</strong> pour chaque famille d&apos;aliments sur 20 repas cons&eacute;cutifs : fr&eacute;quence minimale pour les fruits, les l&eacute;gumes, les produits laitiers, les c&eacute;r&eacute;ales compl&egrave;tes, et fr&eacute;quence maximale pour les produits frits, les produits sucr&eacute;s et les viandes grasses.
          </p>
          <p>
            L&apos;int&eacute;gration du GEMRCN dans la d&eacute;marche HACCP est essentielle. Les fiches techniques des recettes doivent mentionner les <strong>valeurs nutritionnelles</strong>, les allerg&egrave;nes pr&eacute;sents et l&apos;origine des mati&egrave;res premi&egrave;res. Le plan de menus doit &ecirc;tre valid&eacute; par un di&eacute;t&eacute;ticien et archiv&eacute; pour contr&ocirc;le. En restauration scolaire, un <strong>menu v&eacute;g&eacute;tarien hebdomadaire</strong> est d&eacute;sormais obligatoire depuis la loi Climat et R&eacute;silience de 2021.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">D&eacute;marche HACCP collective vs commerciale : les diff&eacute;rences cl&eacute;s</h2>
          <p>
            Si les <strong>7 principes HACCP</strong> restent identiques (analyse des dangers, d&eacute;termination des CCP, &eacute;tablissement des limites critiques, surveillance, actions correctives, v&eacute;rification, documentation), leur application en restauration collective pr&eacute;sente des sp&eacute;cificit&eacute;s majeures. Les <strong>volumes</strong> sont consid&eacute;rablement plus importants : une cantine scolaire sert en moyenne 300 &agrave; 800 repas par service, une cuisine centrale peut produire plusieurs milliers de repas par jour. Cette &eacute;chelle impose des proc&eacute;dures renforc&eacute;es en mati&egrave;re de tra&ccedil;abilit&eacute; et de contr&ocirc;le des temp&eacute;ratures.
          </p>
          <p>
            La <strong>liaison chaude et froide</strong> constitue un point critique sp&eacute;cifique &agrave; la restauration collective. En liaison chaude, les repas pr&eacute;par&eacute;s en cuisine centrale doivent &ecirc;tre maintenus &agrave; une temp&eacute;rature sup&eacute;rieure &agrave; +63 &deg;C jusqu&apos;au service. En liaison froide, les repas sont refroidis rapidement (passage de +63 &deg;C &agrave; +10 &deg;C en moins de 2 heures), stock&eacute;s entre 0 et +3 &deg;C, puis r&eacute;chauff&eacute;s &agrave; +63 &deg;C minimum avant le service. Chaque &eacute;tape n&eacute;cessite des relev&eacute;s de temp&eacute;rature document&eacute;s et archiv&eacute;s.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Contr&ocirc;les pr&eacute;fectoraux et ARS : ce qu&apos;ils v&eacute;rifient</h2>
          <p>
            Les &eacute;tablissements de restauration collective sont soumis &agrave; des <strong>contr&ocirc;les r&eacute;guliers</strong> de la DDPP et de l&apos;ARS (Agence R&eacute;gionale de Sant&eacute;). Les inspecteurs v&eacute;rifient le PMS (Plan de Ma&icirc;trise Sanitaire), les relev&eacute;s de temp&eacute;rature, les fiches de nettoyage-d&eacute;sinfection, la tra&ccedil;abilit&eacute; des mati&egrave;res premi&egrave;res, les <strong>&eacute;chantillons t&eacute;moins</strong> (obligatoirement conserv&eacute;s 5 jours &agrave; temp&eacute;rature comprise entre 0 et +3 &deg;C), la conformit&eacute; des locaux et des &eacute;quipements, et la formation du personnel.
          </p>
          <p>
            En cas de <strong>TIAC (Toxi-Infection Alimentaire Collective)</strong>, d&eacute;finie par au moins 2 cas group&eacute;s de sympt&ocirc;mes similaires li&eacute;s &agrave; une m&ecirc;me origine alimentaire, une enqu&ecirc;te approfondie est syst&eacute;matiquement d&eacute;clench&eacute;e. Les &eacute;chantillons t&eacute;moins sont analys&eacute;s, les proc&eacute;dures HACCP audit&eacute;es et les responsabilit&eacute;s &eacute;tablies. Les sanctions peuvent aller de la mise en demeure &agrave; la <strong>fermeture administrative</strong> de l&apos;&eacute;tablissement, avec des poursuites p&eacute;nales en cas de n&eacute;gligence av&eacute;r&eacute;e.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Le PMS en restauration collective : contenu et mise en place</h2>
          <p>
            Le <strong>Plan de Ma&icirc;trise Sanitaire (PMS)</strong> est le document central de la d&eacute;marche HACCP en restauration collective. Il comprend trois volets : les bonnes pratiques d&apos;hygi&egrave;ne (BPH), le plan HACCP proprement dit et la tra&ccedil;abilit&eacute;. En restauration collective, le PMS doit &ecirc;tre particuli&egrave;rement d&eacute;taill&eacute; et couvrir l&apos;ensemble des processus, de la r&eacute;ception des mati&egrave;res premi&egrave;res au service des repas.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 not-prose">
            <p className="text-blue-900 font-medium mb-3">
              <strong>Contenu du PMS en restauration collective :</strong>
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">&bull;</span> Fiche d&apos;agr&eacute;ment ou d&eacute;claration d&apos;activit&eacute;</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">&bull;</span> Plan de nettoyage-d&eacute;sinfection avec protocoles et fr&eacute;quences</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">&bull;</span> Plan de lutte contre les nuisibles (contrat avec un prestataire agr&eacute;&eacute;)</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">&bull;</span> Proc&eacute;dures de r&eacute;ception et de contr&ocirc;le des mati&egrave;res premi&egrave;res</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">&bull;</span> Relev&eacute;s de temp&eacute;rature (chambres froides, liaison chaude/froide)</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">&bull;</span> Fiches de tra&ccedil;abilit&eacute; (origine, DLC, num&eacute;ros de lots)</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">&bull;</span> Proc&eacute;dure de gestion des &eacute;chantillons t&eacute;moins</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">&bull;</span> Attestations de formation du personnel</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Formation du personnel : obligations et bonnes pratiques</h2>
          <p>
            En restauration collective, la formation &agrave; l&apos;hygi&egrave;ne alimentaire ne se limite pas &agrave; la formation HACCP de 14 heures. Le personnel doit &ecirc;tre form&eacute; de mani&egrave;re <strong>continue et r&eacute;guli&egrave;re</strong> aux bonnes pratiques d&apos;hygi&egrave;ne, aux proc&eacute;dures sp&eacute;cifiques de l&apos;&eacute;tablissement et &agrave; la gestion des allerg&egrave;nes. Les agents de restauration, les cuisiniers, les chefs de cuisine et les responsables qualit&eacute; ont chacun des besoins de formation diff&eacute;rents.
          </p>
          <p>
            Les <strong>cantines scolaires</strong> font l&apos;objet d&apos;une attention particuli&egrave;re en raison du public accueilli. Le personnel doit ma&icirc;triser la gestion des allerg&egrave;nes (PAI &mdash; Projet d&apos;Accueil Individualis&eacute;), les r&egrave;gles de service adapt&eacute;es aux enfants et les protocoles en cas d&apos;accident alimentaire. Dans les <strong>h&ocirc;pitaux et EHPAD</strong>, la formation porte &eacute;galement sur les r&eacute;gimes sp&eacute;ciaux (sans sel, sans r&eacute;sidu, texture modifi&eacute;e) et la pr&eacute;vention de la d&eacute;nutrition. Les <strong>restaurants d&apos;entreprise</strong> doivent quant &agrave; eux g&eacute;rer la diversit&eacute; des r&eacute;gimes alimentaires (v&eacute;g&eacute;tarien, halal, sans gluten) tout en respectant les normes HACCP.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Cas sp&eacute;cifiques : &eacute;coles, h&ocirc;pitaux et entreprises</h2>
          <p>
            Chaque type d&apos;&eacute;tablissement de restauration collective pr&eacute;sente des enjeux HACCP particuliers. En <strong>milieu scolaire</strong>, la loi EGAlim impose 50 % de produits durables et de qualit&eacute; dont 20 % de bio, un menu v&eacute;g&eacute;tarien hebdomadaire, et la lutte contre le gaspillage alimentaire. Ces exigences doivent s&apos;int&eacute;grer dans la d&eacute;marche HACCP sans compromettre la s&eacute;curit&eacute; sanitaire.
          </p>
          <p>
            En <strong>milieu hospitalier</strong>, la restauration est un soin &agrave; part enti&egrave;re. Les patients immunod&eacute;prim&eacute;s n&eacute;cessitent une alimentation pr&eacute;par&eacute;e dans des conditions d&apos;hygi&egrave;ne renforc&eacute;es (aliments cuits, absence de crudités dans certains cas). La tra&ccedil;abilit&eacute; doit permettre d&apos;identifier chaque repas servi &agrave; chaque patient. En <strong>restauration d&apos;entreprise</strong>, les volumes servis en temps limit&eacute; (g&eacute;n&eacute;ralement entre 11h30 et 14h) imposent une organisation logistique rigoureuse, avec des proc&eacute;dures HACCP adapt&eacute;es au service en self et au maintien en temp&eacute;rature prolong&eacute;.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; HACCP restauration collective</h2>
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
          <h2 className="text-2xl font-bold mb-3">Formation HACCP pour la restauration collective</h2>
          <p className="text-blue-100 mb-6">Devis personnalis&eacute; sous 24h &mdash; Organismes certifi&eacute;s Qualiopi</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
