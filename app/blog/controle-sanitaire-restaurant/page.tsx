import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { SITE_URL, schemaFAQ, schemaBreadcrumb } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contrôle Sanitaire Restaurant — Préparer et Réussir l'Inspection 2026",
  description: "Comment préparer un contrôle sanitaire en restaurant : déroulement, documents requis, système Alim'confiance, sanctions et conseils pour réussir l'inspection.",
  alternates: { canonical: `${SITE_URL}/blog/controle-sanitaire-restaurant` }
}

const FAQ = [
  { question: "À quelle fréquence un restaurant est-il contrôlé par la DDPP ?", answer: "La fréquence des contrôles dépend du niveau de risque de l'établissement et des priorités nationales. En moyenne, un restaurant est contrôlé tous les 2 à 5 ans. Cependant, un établissement ayant fait l'objet de plaintes de consommateurs, d'un signalement de TIAC ou d'un précédent contrôle défavorable peut être inspecté beaucoup plus fréquemment, parfois plusieurs fois dans la même année." },
  { question: "Peut-on refuser un contrôle sanitaire de la DDPP ?", answer: "Non, il est interdit de refuser un contrôle sanitaire. Les inspecteurs de la DDPP ont un pouvoir de police administrative et peuvent se présenter sans rendez-vous pendant les heures d'ouverture ou de production. Refuser l'accès aux locaux ou entraver le contrôle constitue un délit d'obstacle à fonctions, passible de 6 mois d'emprisonnement et de 7 500 euros d'amende selon l'article L. 205-11 du Code rural." },
  { question: "Quelles sont les sanctions possibles après un contrôle sanitaire ?", answer: "Les sanctions varient selon la gravité des non-conformités. Du moins grave au plus grave : un rapport d'observations avec un délai de mise en conformité, une mise en demeure avec obligation de corriger sous 30 jours, un procès-verbal transmis au procureur, une fermeture administrative temporaire ou définitive, et des amendes pouvant atteindre 15 000 euros pour les infractions les plus graves. En cas de danger immédiat pour la santé publique, la fermeture peut être prononcée immédiatement." },
  { question: "Comment fonctionne le système Alim'confiance ?", answer: "Alim'confiance est le dispositif de transparence des résultats des contrôles sanitaires, mis en place par le ministère de l'Agriculture. Après chaque inspection, l'établissement reçoit une note allant de 'Très satisfaisant' à 'À corriger de manière urgente', en passant par 'Satisfaisant' et 'À améliorer'. Les résultats sont publiés sur le site alim-confiance.gouv.fr et sur l'application mobile, consultables par les consommateurs pendant 1 an." },
  { question: "Quels documents faut-il préparer pour un contrôle sanitaire ?", answer: "Les documents essentiels à présenter sont : le Plan de Maîtrise Sanitaire (PMS) à jour, les attestations de formation HACCP du personnel, les relevés de température des dernières semaines, les bons de livraison et documents de traçabilité, le plan de nettoyage et désinfection, le contrat de dératisation/désinsectisation, la déclaration ou l'agrément sanitaire, les fiches techniques des produits de nettoyage, et l'affichage des allergènes. Conservez ces documents dans un classeur accessible facilement." }
]

export default function ControleSanitaireRestaurantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Contrôle sanitaire restaurant", url: "/blog/controle-sanitaire-restaurant" }
      ])) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li><li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li><li>›</li>
          <li className="text-gray-800 font-medium">Contrôle sanitaire restaurant</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-4">Réglementation</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Contrôle Sanitaire Restaurant<br />
              <span className="text-yellow-400">Préparer et Réussir l&apos;Inspection 2026</span>
            </h1>
            <p className="text-blue-100 mb-6">Guide complet pour comprendre le déroulement d&apos;un contrôle sanitaire, anticiper les points vérifiés et éviter les sanctions.</p>
          </div>
          <div><LeadForm title="Formation HACCP pour votre équipe" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-blue prose-lg">

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Qui réalise les contrôles sanitaires en restauration ?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les contrôles sanitaires dans les restaurants sont principalement effectués par la DDPP (Direction Départementale de la Protection des Populations) ou la DDCSPP (Direction Départementale de la Cohésion Sociale et de la Protection des Populations) selon l&apos;organisation départementale. Ces services relèvent du ministère de l&apos;Agriculture et de la Souveraineté alimentaire.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les inspecteurs sont des agents assermentés, généralement des techniciens ou des ingénieurs des services vétérinaires, formés à la réglementation alimentaire européenne et nationale. Ils disposent d&apos;un pouvoir de police administrative qui leur permet de pénétrer dans tout établissement alimentaire sans rendez-vous, pendant les heures d&apos;ouverture ou de production.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            D&apos;autres services peuvent également intervenir dans certains cas : la DGCCRF (Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes) pour les questions de loyauté commerciale et d&apos;étiquetage, l&apos;ARS (Agence Régionale de Santé) en cas de suspicion de toxi-infection alimentaire collective (TIAC), et les services municipaux d&apos;hygiène dans certaines grandes villes. En pratique, c&apos;est la DDPP qui assure la grande majorité des contrôles en restauration commerciale.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Que vérifient les inspecteurs lors d&apos;un contrôle ?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le contrôle sanitaire suit une grille d&apos;inspection standardisée qui couvre l&apos;ensemble des exigences réglementaires. Les inspecteurs procèdent méthodiquement en commençant généralement par une visite des locaux, puis par la vérification des documents et des enregistrements.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sur le terrain, ils vérifient l&apos;état général des locaux (propreté des sols, murs, plafonds, absence de nuisibles), le bon fonctionnement des équipements de froid (thermomètre visible, température conforme), le respect de la marche en avant (séparation des zones propres et souillées), l&apos;état des denrées stockées (respect des DLC, étiquetage, absence de produits périmés), les conditions de préparation des aliments (hygiène des manipulations, protection des denrées), et l&apos;hygiène du personnel (tenue propre, coiffe, lavage des mains).
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sur le plan documentaire, les inspecteurs demandent à consulter le Plan de Maîtrise Sanitaire (PMS), les relevés de température des dernières semaines, les fiches de nettoyage remplies, les documents de traçabilité (bons de livraison, étiquettes fournisseurs), les attestations de formation HACCP du personnel, le contrat de dératisation et les rapports d&apos;intervention du prestataire, la déclaration sanitaire de l&apos;établissement, et l&apos;affichage relatif aux allergènes.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Les inspecteurs peuvent également prélever des échantillons d&apos;aliments ou de surfaces pour des analyses microbiologiques en laboratoire. Ces prélèvements sont effectués lorsqu&apos;un doute existe sur la qualité sanitaire des produits ou pour confirmer un soupçon de contamination. Les résultats sont communiqués à l&apos;exploitant dans les jours suivants et peuvent entraîner des mesures complémentaires si les normes bactériologiques ne sont pas respectées.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Le système de notation Alim&apos;confiance</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Depuis le 1er mars 2017, les résultats des contrôles sanitaires sont rendus publics via le dispositif Alim&apos;confiance, conformément à la loi d&apos;avenir pour l&apos;agriculture du 13 octobre 2014. Ce dispositif de transparence vise à informer les consommateurs sur le niveau d&apos;hygiène des établissements alimentaires et à encourager les professionnels à maintenir un niveau élevé de conformité.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Après chaque contrôle, l&apos;établissement se voit attribuer l&apos;un des quatre niveaux d&apos;hygiène suivants. Le niveau &quot;Très satisfaisant&quot; signifie que l&apos;établissement présente un très bon niveau de maîtrise, sans aucune non-conformité notable. Le niveau &quot;Satisfaisant&quot; indique que les points réglementaires sont globalement respectés, avec quelques non-conformités mineures. Le niveau &quot;A améliorer&quot; signale des non-conformités qui nécessitent des actions correctives dans un délai défini. Le niveau &quot;A corriger de manière urgente&quot; indique des manquements graves qui exigent des mesures immédiates sous peine de sanctions.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Les résultats sont publiés sur le site alim-confiance.gouv.fr et sur l&apos;application mobile Alim&apos;confiance, accessibles gratuitement par tous les consommateurs. Chaque résultat reste visible pendant 1 an après la date du contrôle. Pour les restaurateurs, obtenir un bon score Alim&apos;confiance est devenu un véritable atout commercial, car de plus en plus de clients consultent ces résultats avant de choisir un restaurant. Un mauvais résultat peut au contraire avoir un impact négatif significatif sur la fréquentation.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Les sanctions possibles après un contrôle</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les suites données à un contrôle sanitaire dépendent de la nature et de la gravité des non-conformités constatées. Le système de sanctions est progressif et vise d&apos;abord à obtenir la mise en conformité de l&apos;établissement avant de recourir à des mesures plus sévères.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le premier niveau est le rapport d&apos;observations, qui liste les non-conformités mineures relevées et demande à l&apos;exploitant de les corriger. Il n&apos;y a pas de sanction formelle, mais un contrôle de suivi peut être programmé. Le deuxième niveau est la mise en demeure, un document officiel qui impose de corriger les non-conformités dans un délai précis, généralement de 15 à 30 jours. Le non-respect de la mise en demeure entraîne automatiquement des sanctions plus lourdes.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le troisième niveau est le procès-verbal (PV), dressé pour les infractions pénales constatées. Le PV est transmis au procureur de la République qui décide des poursuites. Les amendes peuvent atteindre 1 500 euros pour les contraventions de 5e classe et jusqu&apos;à 15 000 euros pour les délits les plus graves. En cas de mise en danger de la santé des consommateurs, les peines peuvent aller jusqu&apos;à 2 ans d&apos;emprisonnement et 150 000 euros d&apos;amende.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Le quatrième niveau est la fermeture administrative. Le préfet peut ordonner la fermeture temporaire ou définitive d&apos;un établissement lorsque les manquements constatés présentent un danger grave et immédiat pour la santé publique. La fermeture est effective immédiatement et ne peut être levée qu&apos;après la mise en conformité complète, vérifiée par un nouveau contrôle. Les cas les plus fréquents de fermeture sont l&apos;infestation de nuisibles (cafards, rongeurs), une rupture grave de la chaîne du froid, l&apos;insalubrité manifeste des locaux ou l&apos;absence totale de traçabilité.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Comment bien préparer un contrôle sanitaire</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La meilleure préparation à un contrôle sanitaire est de maintenir en permanence un niveau d&apos;hygiène conforme aux exigences réglementaires. Il ne s&apos;agit pas de &quot;préparer&quot; le contrôle au dernier moment, mais de mettre en place des routines quotidiennes qui garantissent la conformité à tout instant, puisque les inspecteurs se présentent sans prévenir.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Commencez par vous assurer que votre Plan de Maîtrise Sanitaire est rédigé, complet et à jour. Vérifiez que tous les enregistrements sont remplis quotidiennement : relevés de température des enceintes réfrigérées matin et soir, fiches de contrôle à réception des marchandises, fiches de nettoyage signées par le personnel responsable. Ces documents doivent être facilement accessibles, idéalement dans un classeur dédié en cuisine.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Assurez-vous que tout le personnel en contact avec les denrées alimentaires dispose de son attestation de formation en hygiène alimentaire (formation HACCP de 14 heures). La loi impose qu&apos;au moins une personne par établissement ait suivi cette formation, mais dans la pratique, former l&apos;ensemble de l&apos;équipe est fortement recommandé et valorisé lors des contrôles.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Mettez en place un système d&apos;auto-contrôle interne. Réalisez un audit interne mensuel en utilisant une grille similaire à celle des inspecteurs. Vérifiez la propreté de chaque zone, le bon fonctionnement des thermomètres, le respect des DLC dans les réfrigérateurs, l&apos;état du plan de nettoyage, et la mise à jour des documents de traçabilité. Corrigez immédiatement toute non-conformité détectée et documentez les actions correctives prises.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Les documents à avoir prêts le jour du contrôle</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le jour du contrôle, vous devez être en mesure de présenter rapidement un ensemble de documents. Le Plan de Maîtrise Sanitaire complet constitue la pièce maîtresse. Organisez-le dans un classeur structuré avec des intercalaires clairs, facilement consultable par l&apos;inspecteur.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Préparez les attestations de formation HACCP de tous les employés concernés, classées par ordre chronologique. Rassemblez les relevés de température des quatre dernières semaines au minimum, ainsi que les fiches de nettoyage remplies et signées. Conservez les bons de livraison des trois derniers mois, triés par fournisseur, avec les étiquettes des produits tracés.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ayez à disposition le contrat de dératisation et désinsectisation avec les derniers rapports d&apos;intervention du prestataire, les fiches techniques et fiches de données de sécurité (FDS) des produits de nettoyage utilisés, le récépissé de déclaration sanitaire auprès de la DDPP ou votre numéro d&apos;agrément, les résultats d&apos;analyses microbiologiques si vous en réalisez, et un document d&apos;affichage des allergènes visible par les clients. L&apos;ensemble de ces documents doit être stocké dans un lieu connu de tous les membres de l&apos;équipe, afin qu&apos;ils puissent être présentés même en l&apos;absence du responsable.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Les non-conformités les plus fréquentes</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les rapports annuels de la DGAL (Direction Générale de l&apos;Alimentation) permettent d&apos;identifier les non-conformités les plus couramment relevées en restauration commerciale. Les connaître permet de renforcer vos points faibles avant le passage des inspecteurs.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La non-conformité la plus fréquente concerne le non-respect des températures de conservation. Réfrigérateurs réglés à une température trop élevée, absence de thermomètre visible, relevés de température non effectués ou incomplets sont constatés dans près de 40 % des contrôles. Viennent ensuite les défauts de nettoyage et de désinfection : sols gras, hottes encrassées, plans de travail mal entretenus, matériel de nettoyage en mauvais état.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Les problèmes de traçabilité arrivent en troisième position : absence de bons de livraison, produits non étiquetés en chambre froide, DLC secondaires non indiquées sur les préparations maison, registre fournisseurs inexistant. Les défauts liés au personnel sont également fréquents : absence de formation HACCP, tenue de travail inadaptée, bijoux en zone de préparation, non-respect du protocole de lavage des mains.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Enfin, l&apos;absence ou l&apos;insuffisance du Plan de Maîtrise Sanitaire reste un motif majeur de sanction. Un PMS générique non adapté à l&apos;établissement, un PMS jamais mis à jour depuis l&apos;ouverture, ou tout simplement l&apos;absence totale de PMS constituent des non-conformités majeures qui entraînent systématiquement une mise en demeure.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Après le contrôle : les étapes à suivre</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            À l&apos;issue du contrôle, l&apos;inspecteur remet un rapport d&apos;inspection qui détaille les constats effectués, les non-conformités relevées et les suites envisagées. Lisez attentivement ce rapport et conservez-le dans votre classeur PMS.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Si des non-conformités ont été relevées, mettez en place les actions correctives immédiatement, sans attendre la mise en demeure officielle. Documentez chaque action corrective : date, description de la non-conformité, mesure prise, personne responsable, vérification de l&apos;efficacité. Cette documentation prouve votre réactivité et votre engagement en matière de sécurité alimentaire.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Si vous avez reçu une mise en demeure, respectez scrupuleusement le délai imparti pour effectuer les corrections. Vous pouvez envoyer un courrier à la DDPP décrivant les mesures prises, accompagné de photos ou de factures si nécessaire (achat de nouveaux équipements, travaux de rénovation, formation du personnel). Un contrôle de suivi sera probablement programmé pour vérifier la mise en conformité.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Dans tous les cas, utilisez le contrôle comme une opportunité d&apos;amélioration. Organisez une réunion avec votre équipe pour partager les conclusions du rapport, identifier les points à renforcer et rappeler les procédures du PMS. Un contrôle sanitaire, même s&apos;il génère du stress, est avant tout un outil au service de la qualité et de la sécurité alimentaire dans votre établissement. Les restaurants qui prennent les contrôles au sérieux et qui investissent dans la formation HACCP de leur personnel obtiennent quasi systématiquement des résultats &quot;Satisfaisant&quot; ou &quot;Très satisfaisant&quot; sur Alim&apos;confiance.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Contrôle sanitaire restaurant</h2>
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
          <h2 className="text-2xl font-bold mb-4">Préparez votre équipe au contrôle sanitaire</h2>
          <p className="text-blue-200 mb-6">La formation HACCP de 14 heures est le meilleur investissement pour réussir vos inspections. Obtenez un devis gratuit auprès de nos organismes certifiés Qualiopi.</p>
          <Link href="/devis" className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
