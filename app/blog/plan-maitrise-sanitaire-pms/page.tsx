import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { SITE_URL, schemaFAQ, schemaBreadcrumb } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Plan de Maîtrise Sanitaire (PMS) — Guide Complet et Modèle 2026",
  description: "Guide complet du Plan de Maîtrise Sanitaire : définition, 3 piliers, modèle PMS restaurant, documents obligatoires et préparation au contrôle DDPP.",
  alternates: { canonical: `${SITE_URL}/blog/plan-maitrise-sanitaire-pms` }
}

const FAQ = [
  { question: "Le Plan de Maîtrise Sanitaire est-il obligatoire pour tous les restaurants ?", answer: "Oui, le PMS est obligatoire pour tout établissement manipulant des denrées alimentaires, conformément au règlement CE 852/2004 et au Paquet Hygiène européen. Cela inclut les restaurants, les snacks, les food trucks, les boulangeries, les traiteurs et les cantines. L'absence de PMS lors d'un contrôle de la DDPP peut entraîner une mise en demeure, une fermeture administrative ou des amendes." },
  { question: "Quels sont les 3 piliers du Plan de Maîtrise Sanitaire ?", answer: "Les trois piliers du PMS sont : 1) Les Bonnes Pratiques d'Hygiène (BPH), qui couvrent l'hygiène du personnel, le nettoyage, la lutte contre les nuisibles et la gestion des déchets ; 2) Le plan HACCP, qui identifie les dangers biologiques, chimiques et physiques et définit les Points Critiques de Contrôle (CCP) ; 3) La traçabilité, qui assure le suivi des produits de la réception à la distribution." },
  { question: "Combien de temps faut-il pour rédiger un PMS complet ?", answer: "La rédaction d'un PMS complet prend généralement entre 2 et 4 semaines pour un restaurant classique. Ce délai comprend l'analyse des dangers propres à l'établissement, la rédaction des procédures BPH, l'élaboration du plan HACCP avec les diagrammes de fabrication, la mise en place des documents de traçabilité et la création des fiches d'enregistrement. Un organisme de formation HACCP peut vous accompagner dans cette démarche." },
  { question: "Quelle est la différence entre le PMS et le plan HACCP ?", answer: "Le plan HACCP est l'une des composantes du PMS, mais pas la seule. Le PMS est un document global qui englobe les Bonnes Pratiques d'Hygiène (BPH), le plan HACCP et les procédures de traçabilité. En résumé, le plan HACCP identifie les dangers et les points critiques, tandis que le PMS décrit l'ensemble du système de management de la sécurité alimentaire de l'établissement." },
  { question: "Que vérifie la DDPP concernant le PMS lors d'un contrôle ?", answer: "Lors d'un contrôle sanitaire, les inspecteurs de la DDPP vérifient que le PMS existe, qu'il est à jour et qu'il est effectivement appliqué. Ils contrôlent notamment : la cohérence du plan HACCP avec l'activité réelle, les fiches d'enregistrement des températures, les documents de traçabilité (bons de livraison, étiquettes), le plan de nettoyage et désinfection, les attestations de formation HACCP du personnel, et le contrat de dératisation." }
]

export default function PlanMaitriseSanitairePmsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Plan de Maîtrise Sanitaire (PMS)", url: "/blog/plan-maitrise-sanitaire-pms" }
      ])) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li><li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li><li>›</li>
          <li className="text-gray-800 font-medium">Plan de Maîtrise Sanitaire (PMS)</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-4">Guide HACCP</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Plan de Maîtrise Sanitaire (PMS)<br />
              <span className="text-yellow-400">Guide Complet et Modèle 2026</span>
            </h1>
            <p className="text-blue-100 mb-6">Tout ce que vous devez savoir pour rédiger, mettre en place et maintenir votre PMS en conformité avec la réglementation européenne.</p>
          </div>
          <div><LeadForm title="Besoin d'aide pour votre PMS ?" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-blue prose-lg">

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Qu&apos;est-ce qu&apos;un Plan de Maîtrise Sanitaire (PMS) ?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le Plan de Maîtrise Sanitaire, communément appelé PMS, est le document de référence qui décrit l&apos;ensemble des mesures prises par un établissement alimentaire pour garantir la sécurité et la salubrité de ses produits. Il constitue la pierre angulaire de la démarche qualité en restauration et dans toute entreprise du secteur agroalimentaire.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Concrètement, le PMS regroupe dans un seul dossier toutes les procédures d&apos;hygiène, les analyses de dangers, les systèmes de surveillance et les documents de traçabilité de votre établissement. C&apos;est le document que les inspecteurs de la DDPP (Direction Départementale de la Protection des Populations) demandent en premier lors d&apos;un contrôle sanitaire.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Bien plus qu&apos;une simple formalité administrative, le PMS est un outil de travail quotidien qui permet de prévenir les risques sanitaires, de former le personnel aux bonnes pratiques et de prouver votre engagement en matière de sécurité alimentaire. Sa rédaction nécessite une connaissance approfondie de la méthode HACCP et de la réglementation en vigueur.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Base légale : pourquoi le PMS est-il obligatoire ?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;obligation de disposer d&apos;un PMS découle directement du règlement européen CE 852/2004 relatif à l&apos;hygiène des denrées alimentaires, transposé dans le droit français par le biais du Paquet Hygiène. Ce règlement impose à tout exploitant du secteur alimentaire de mettre en place des procédures fondées sur les principes HACCP et de tenir à jour des documents démontrant le respect de ces procédures.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            L&apos;arrêté ministériel du 21 décembre 2009 précise les modalités d&apos;application en France. Il stipule que chaque établissement doit disposer d&apos;un document décrivant les mesures prises pour assurer l&apos;hygiène et la sécurité sanitaire des aliments vis-à-vis des dangers biologiques, chimiques et physiques. Ce document, c&apos;est le PMS.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Les établissements concernés incluent tous les commerces de bouche : restaurants traditionnels, restauration rapide, food trucks, boulangeries-pâtisseries, traiteurs, cantines scolaires, EHPAD, hôtels avec restauration, supermarchés disposant de rayons traiteur, et toute structure proposant des denrées alimentaires au consommateur final. Aucune exception n&apos;est prévue, quelle que soit la taille de l&apos;établissement.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Les 3 piliers du Plan de Maîtrise Sanitaire</h2>

          <h3 className="text-xl font-bold mb-3 text-gray-900">Pilier 1 : Les Bonnes Pratiques d&apos;Hygiène (BPH)</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les Bonnes Pratiques d&apos;Hygiène, également appelées pré-requis ou programmes prérequis (PRP), constituent le socle du PMS. Elles couvrent l&apos;ensemble des conditions opérationnelles nécessaires pour produire des aliments sûrs. Sans des BPH solides, le plan HACCP ne peut pas fonctionner efficacement.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les BPH incluent plusieurs domaines essentiels. L&apos;hygiène du personnel impose le port de vêtements de travail propres, le lavage régulier des mains, l&apos;interdiction de bijoux en zone de préparation et la gestion des maladies transmissibles. Le plan de nettoyage et désinfection détaille les protocoles pour chaque zone de l&apos;établissement avec les fréquences, les produits utilisés et les responsables désignés. La lutte contre les nuisibles comprend le contrat avec un prestataire agréé, les plans de dératisation et de désinsectisation, et les contrôles réguliers. La gestion des déchets précise les circuits d&apos;évacuation, les fréquences de collecte et les conditions de stockage temporaire. Enfin, la maîtrise de la chaîne du froid et du chaud constitue un volet critique avec les relevés de températures des enceintes réfrigérées, les protocoles de cuisson et de refroidissement rapide.
          </p>

          <h3 className="text-xl font-bold mb-3 text-gray-900">Pilier 2 : Le plan HACCP</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plan HACCP (Hazard Analysis Critical Control Points) est la composante analytique du PMS. Il s&apos;appuie sur les 7 principes de la méthode HACCP pour identifier, évaluer et maîtriser les dangers significatifs au regard de la sécurité des aliments. La rédaction du plan HACCP est une étape technique qui nécessite une formation spécifique.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le plan HACCP comprend les diagrammes de fabrication de chaque famille de produits, l&apos;analyse des dangers à chaque étape (réception, stockage, préparation, cuisson, refroidissement, service), la détermination des Points Critiques de Contrôle (CCP) avec leurs limites critiques, les procédures de surveillance, les actions correctives en cas de déviation, les procédures de vérification et les enregistrements associés. Pour un restaurant, les CCP les plus courants sont la réception des marchandises (contrôle des températures et des DLC), le stockage réfrigéré, la cuisson à coeur et le maintien en température (chaud supérieur à 63 degrés Celsius, froid inférieur à 3 degrés Celsius).
          </p>

          <h3 className="text-xl font-bold mb-3 text-gray-900">Pilier 3 : La traçabilité</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La traçabilité est le troisième pilier du PMS. Elle permet de suivre le parcours d&apos;un aliment de la réception à l&apos;assiette du client, et inversement (traçabilité ascendante et descendante). Le règlement CE 178/2002 impose cette obligation à tous les exploitants du secteur alimentaire.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En pratique, la traçabilité repose sur la conservation des bons de livraison, l&apos;archivage des étiquettes produits avec les numéros de lot, la tenue d&apos;un registre des fournisseurs agréés, l&apos;étiquetage interne des préparations (date de fabrication, DLC secondaire), et la capacité à effectuer un retrait ou un rappel de produit dans un délai de 2 heures maximum. Les documents de traçabilité doivent être conservés pendant 5 ans minimum. Un système de traçabilité efficace est indispensable pour gérer une crise sanitaire (toxi-infection alimentaire collective par exemple) et limiter la responsabilité de l&apos;exploitant.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Comment créer votre PMS étape par étape</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La rédaction d&apos;un PMS complet se déroule en plusieurs étapes logiques. Premièrement, réalisez un état des lieux de votre établissement : plan des locaux, liste des équipements, description des activités, identification des flux (marche en avant), inventaire des matières premières utilisées et des produits finis proposés.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Deuxièmement, rédigez les procédures de Bonnes Pratiques d&apos;Hygiène adaptées à votre activité. Chaque procédure doit indiquer clairement qui fait quoi, quand, comment et avec quels moyens. Troisièmement, élaborez votre plan HACCP en suivant les 12 étapes de la méthode (constitution de l&apos;équipe, description des produits, identification de l&apos;utilisation prévue, élaboration des diagrammes de fabrication, confirmation sur site, puis les 7 principes). Quatrièmement, mettez en place votre système de traçabilité avec les documents et enregistrements nécessaires.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Cinquièmement, créez les fiches d&apos;enregistrement qui serviront au quotidien : fiches de contrôle à réception, relevés de température, fiches de nettoyage, fiches d&apos;actions correctives. Sixièmement, formez votre personnel à l&apos;utilisation du PMS et aux procédures décrites. Enfin, planifiez les revues périodiques du PMS (au minimum une fois par an ou à chaque changement significatif dans l&apos;activité) pour garantir sa mise à jour.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Documents requis dans le PMS</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Un PMS complet doit contenir un ensemble de documents organisés de manière logique. La première section présente l&apos;établissement : description de l&apos;activité, plan des locaux, liste du personnel avec les attestations de formation HACCP, agrément ou déclaration sanitaire auprès de la DDPP.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La deuxième section regroupe les procédures BPH : protocole de lavage des mains, plan de nettoyage et désinfection avec les fiches techniques des produits utilisés, protocole de réception des marchandises, gestion des déchets, lutte contre les nuisibles (contrat du prestataire, plan d&apos;implantation des appâts), maintenance des équipements, gestion de la qualité de l&apos;eau.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La troisième section contient le plan HACCP proprement dit : diagrammes de fabrication, tableaux d&apos;analyse des dangers, fiches CCP, procédures de surveillance, procédures d&apos;actions correctives, procédures de vérification. La quatrième section rassemble les documents de traçabilité : registre des fournisseurs, modèle de bon de réception, procédure de retrait/rappel. La cinquième section contient les documents d&apos;enregistrement vierges et les archives des enregistrements remplis.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Pensez également à inclure la documentation relative à la gestion des allergènes (liste des 14 allergènes à déclaration obligatoire, fiches recettes avec indication des allergènes, procédure de communication au client) et une procédure de gestion des toxi-infections alimentaires collectives (TIAC), avec les numéros d&apos;urgence à contacter.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Ce que la DDPP attend lors d&apos;un contrôle</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les inspecteurs de la DDPP ne se contentent pas de vérifier l&apos;existence du PMS. Ils s&apos;assurent que le document est vivant, c&apos;est-à-dire qu&apos;il reflète la réalité de votre activité et qu&apos;il est effectivement utilisé au quotidien. Un PMS parfaitement rédigé mais rangé dans un tiroir sans jamais être consulté n&apos;a aucune valeur lors d&apos;un contrôle.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les inspecteurs vérifient la cohérence entre les procédures écrites et les pratiques observées. Ils demandent à consulter les enregistrements des dernières semaines (relevés de température, fiches de nettoyage, bons de réception). Ils contrôlent que les actions correctives sont documentées lorsqu&apos;une non-conformité a été détectée. Ils vérifient que le personnel connaît les procédures et sait où trouver le PMS.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Les points de contrôle prioritaires sont généralement : la maîtrise de la chaîne du froid (relevés de température à jour et conformes), la propreté des locaux et des équipements (conformité avec le plan de nettoyage), la traçabilité des matières premières (étiquetage, DLC respectées, FIFO appliqué), l&apos;hygiène du personnel (tenue, lavage des mains), et la gestion des allergènes (information du consommateur). Une non-conformité majeure sur l&apos;un de ces points peut entraîner une mise en demeure ou une fermeture temporaire.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Erreurs fréquentes à éviter</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La première erreur consiste à télécharger un PMS générique sur Internet et à le présenter tel quel lors d&apos;un contrôle. Les inspecteurs repèrent immédiatement un document non personnalisé. Votre PMS doit correspondre exactement à votre établissement, à vos locaux, à votre carte et à vos procédés de fabrication.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La deuxième erreur est de ne pas mettre à jour le PMS. Si vous changez de fournisseur, si vous modifiez votre carte, si vous réaménagez vos locaux ou si vous embauchez du nouveau personnel, le PMS doit être révisé en conséquence. Un PMS obsolète est presque aussi problématique que l&apos;absence de PMS.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La troisième erreur est de négliger les enregistrements quotidiens. Le PMS décrit ce que vous devez faire, mais les enregistrements prouvent que vous le faites réellement. Des relevés de température manquants, des fiches de nettoyage non remplies ou des bons de réception non archivés sont des non-conformités fréquemment relevées par les inspecteurs.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Enfin, la quatrième erreur est de considérer le PMS comme une contrainte administrative plutôt que comme un outil de management. Un PMS bien conçu simplifie la formation des nouveaux employés, facilite la gestion des achats et des stocks, réduit les risques de toxi-infection alimentaire et protège juridiquement le responsable de l&apos;établissement en cas de litige. C&apos;est un investissement qui se rentabilise rapidement.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Structure type d&apos;un PMS pour restaurant</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pour vous aider dans la rédaction de votre PMS, voici la structure type recommandée. Le document commence par une page de garde avec le nom de l&apos;établissement, l&apos;adresse, le numéro SIRET, le nom du responsable et la date de la dernière mise à jour. Suivent un sommaire détaillé et une fiche signalétique de l&apos;établissement.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le chapitre 1 décrit les locaux et les équipements avec le plan des locaux montrant les circuits (marche en avant), la liste des équipements de froid et de cuisson et le programme de maintenance préventive. Le chapitre 2 développe les BPH : hygiène du personnel, plan de nettoyage-désinfection, lutte contre les nuisibles, gestion des déchets, gestion de l&apos;eau. Le chapitre 3 présente le plan HACCP avec les diagrammes de fabrication, l&apos;analyse des dangers et les fiches CCP.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le chapitre 4 traite de la traçabilité et de la gestion des non-conformités. Le chapitre 5 regroupe la gestion des allergènes et l&apos;information du consommateur. Le chapitre 6 contient les annexes : attestations de formation HACCP, fiches techniques des produits de nettoyage, contrat de dératisation, résultats d&apos;analyses microbiologiques (le cas échéant), fiches d&apos;enregistrement vierges.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ce modèle de structure est conforme aux attentes des services vétérinaires et peut être adapté à tout type d&apos;établissement. N&apos;hésitez pas à faire appel à un organisme de formation HACCP certifié Qualiopi pour vous accompagner dans la rédaction de votre PMS ou pour former votre équipe aux principes fondamentaux de la sécurité alimentaire.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Plan de Maîtrise Sanitaire</h2>
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

      <section className="py-14 px-4 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d&apos;accompagnement pour votre PMS ?</h2>
          <p className="text-blue-200 mb-6">Nos organismes partenaires certifiés Qualiopi vous aident à rédiger votre Plan de Maîtrise Sanitaire et à former votre équipe HACCP.</p>
          <Link href="/devis" className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
