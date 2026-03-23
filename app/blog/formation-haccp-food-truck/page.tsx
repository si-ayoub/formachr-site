import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Food Truck — Obligations et Guide Pratique 2026",
  description: "Formation HACCP obligatoire pour food truck : obligations légales, défis hygiène spécifiques, équipements requis, contrôles DDPP et conseils pratiques.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-food-truck` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour ouvrir un food truck ?", answer: "Oui, tout food truck préparant et vendant des repas doit justifier qu'au moins une personne (le gérant ou un salarié) a suivi la formation hygiène alimentaire HACCP de 14 heures. Cette obligation découle du décret n° 2011-731 et s'applique aux établissements relevant du code NAF 56.10C." },
  { question: "Quels sont les principaux risques d'hygiène spécifiques aux food trucks ?", answer: "Les food trucks font face à des défis uniques : rupture de la chaîne du froid lors des déplacements, accès limité à l'eau potable courante, gestion des déchets en milieu ouvert, températures ambiantes élevées en été dans le camion, et contamination croisée dans un espace de travail réduit." },
  { question: "Quel équipement sanitaire est obligatoire dans un food truck ?", answer: "Un food truck doit disposer au minimum d'un bac à laver les mains avec eau chaude et savon, d'un réfrigérateur avec thermomètre visible, d'un plan de travail en inox ou surface lisse lavable, de poubelles fermées, d'un système d'évacuation des eaux usées, et de rangements fermés pour les denrées." },
  { question: "Comment se passent les contrôles DDPP pour un food truck ?", answer: "La DDPP peut contrôler un food truck à tout moment, y compris sur les marchés et lors d'événements. Le contrôleur vérifie l'attestation de formation HACCP, les relevés de température, le plan de nettoyage, la traçabilité des denrées, l'état général du véhicule et la conformité des installations sanitaires." },
  { question: "Quelle assurance est nécessaire pour un food truck en plus de la formation HACCP ?", answer: "Au-delà de la formation HACCP, un food truck doit souscrire une RC professionnelle (responsabilité civile), une assurance du véhicule professionnel, et idéalement une garantie intoxication alimentaire. Certaines assurances exigent l'attestation HACCP comme condition de couverture." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Food Truck", url: "/blog/formation-haccp-food-truck" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Food Truck</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-orange-900 to-orange-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              🚚 FORMATION OBLIGATOIRE — CODE NAF 56.10C
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Food Truck</span><br />
              <span className="text-xl font-bold">Obligations et Guide Pratique 2026</span>
            </h1>
            <p className="text-orange-100 text-base mb-6 leading-relaxed">Obligations légales, défis spécifiques, équipements requis, contrôles sanitaires : tout ce que vous devez savoir pour exploiter un food truck en conformité avec la réglementation HACCP.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation obligatoire","📋 Attestation DRAAF","🚚 Spécificités food truck","💰 Financement OPCO possible"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="food-truck" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Food truck et HACCP : une obligation légale incontournable</h2>
          <p>
            Le marché du food truck en France connaît une croissance soutenue depuis plusieurs années. En 2026, on estime à plus de <strong>5 000 le nombre de food trucks</strong> actifs sur le territoire, proposant une variété de cuisines allant du burger gastronomique aux spécialités asiatiques en passant par les crêpes et les pizzas. Mais derrière cette apparente simplicité se cache une réglementation sanitaire stricte, au cœur de laquelle se trouve la <strong>formation HACCP</strong>.
          </p>
          <p>
            Comme tout établissement de restauration commerciale, un food truck est soumis au <strong>décret n° 2011-731 du 24 juin 2011</strong>, qui impose qu&apos;au moins une personne dans l&apos;établissement ait suivi la formation en matière d&apos;hygiène alimentaire. Cette formation de 14 heures, délivrée par un organisme certifié Qualiopi et enregistré auprès de la DRAAF, couvre les principes de la méthode HACCP, la réglementation sanitaire, les dangers alimentaires et les bonnes pratiques d&apos;hygiène.
          </p>
          <p>
            L&apos;arrêté du 12 février 2024 a renforcé cette obligation en imposant un <strong>minimum de 4 heures de mise en pratique</strong> au sein des 14 heures de formation. Pour les exploitants de food trucks, cette mise en pratique est particulièrement importante car elle aborde les situations concrètes du terrain : gestion de la chaîne du froid en mobilité, organisation d&apos;un espace de travail réduit, et protocoles de nettoyage adaptés.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Les défis d&apos;hygiène spécifiques au food truck</h2>
          <p>
            Un food truck n&apos;est pas un restaurant classique. Il évolue dans un environnement contraint et mobile qui génère des <strong>risques sanitaires spécifiques</strong>. La formation HACCP adaptée aux food trucks doit prendre en compte ces particularités pour être véritablement efficace.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">La chaîne du froid en mobilité</h3>
          <p>
            Le défi le plus critique pour un food truck est le <strong>maintien de la chaîne du froid</strong>. Contrairement à un restaurant fixe doté de chambres froides raccordées au réseau électrique, un food truck doit transporter ses denrées périssables sur route, les stocker dans un espace réfrigéré limité et les conserver pendant toute la durée du service, parfois sous des températures extérieures élevées. Les réfrigérateurs embarqués fonctionnent généralement sur le groupe électrogène du véhicule ou sur batterie, ce qui crée des <strong>points de vulnérabilité</strong> : panne de groupe, surcharge électrique, ouvertures fréquentes de la porte en service.
          </p>
          <p>
            La réglementation impose des <strong>températures maximales strictes</strong> : +4 °C pour les viandes et poissons crus, +3 °C pour les produits de la mer, +8 °C pour les produits laitiers et les préparations culinaires élaborées à l&apos;avance. Le food trucker doit réaliser un <strong>relevé de température</strong> au minimum deux fois par jour (matin et midi) et consigner ces données dans un registre. En cas de rupture de la chaîne du froid, les denrées concernées doivent être immédiatement jetées, sans dérogation possible.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">La gestion de l&apos;eau potable</h3>
          <p>
            L&apos;accès à l&apos;<strong>eau potable courante</strong> est une autre difficulté majeure. Un food truck doit être équipé d&apos;un réservoir d&apos;eau propre d&apos;une capacité suffisante pour assurer le lavage des mains, le rinçage des ustensiles et le nettoyage des surfaces pendant toute la durée du service. La norme recommande un minimum de <strong>60 litres d&apos;eau propre</strong> pour un service de 4 à 6 heures. Le réservoir doit être en matériau alimentaire, nettoyé et désinfecté chaque semaine, et l&apos;eau doit être renouvelée quotidiennement.
          </p>
          <p>
            En parallèle, un <strong>réservoir d&apos;eaux usées</strong> de capacité au moins égale au réservoir d&apos;eau propre doit être installé. L&apos;évacuation des eaux usées doit se faire dans un point de collecte autorisé, jamais dans la nature ou dans le caniveau. La DDPP vérifie systématiquement ce point lors des contrôles.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">L&apos;espace de travail réduit et la contamination croisée</h3>
          <p>
            Dans un food truck, l&apos;espace de travail est extrêmement restreint, souvent moins de <strong>6 à 8 m²</strong>. Cette contrainte augmente considérablement le risque de <strong>contamination croisée</strong> entre les denrées crues et cuites, entre les aliments et les produits de nettoyage, ou entre les différents allergènes. La formation HACCP insiste sur l&apos;organisation rigoureuse de l&apos;espace : séparation stricte des zones de préparation, utilisation de planches à découper de couleurs différentes, stockage des produits chimiques dans un compartiment fermé et séparé.
          </p>
          <p>
            La gestion des <strong>14 allergènes obligatoires</strong> est également plus complexe dans un food truck. L&apos;affichage doit être visible par le client (généralement sur le menu ou un panneau dédié), et les procédures de préparation doivent garantir l&apos;absence de traces croisées. Un food truck proposant des crêpes, par exemple, doit pouvoir justifier de mesures spécifiques pour les clients allergiques au gluten ou aux œufs.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">La gestion des déchets en milieu ouvert</h3>
          <p>
            Opérant souvent en extérieur (marchés, festivals, parkings), un food truck doit gérer ses <strong>déchets alimentaires et emballages</strong> de manière autonome. Le véhicule doit être équipé de poubelles fermées avec couvercle à commande non manuelle (pédale), et les déchets doivent être évacués dans un circuit de collecte adapté. Les huiles de friture usagées, si le food truck propose des fritures, doivent être stockées dans un conteneur étanche et récupérées par un prestataire agréé. Le déversement dans les eaux usées est strictement interdit et passible de sanctions.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Équipements sanitaires obligatoires dans un food truck</h2>
          <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
            {[
              { titre: "Eau et lavage", points: ["Réservoir d'eau potable (60L min.)", "Réservoir d'eaux usées (volume égal)", "Lave-mains avec eau chaude et savon", "Distributeur de savon et essuie-mains jetables"] },
              { titre: "Froid et conservation", points: ["Réfrigérateur avec thermomètre visible", "Bac isotherme pour le transport", "Thermomètre sonde calibré", "Registre de relevé de températures"] },
              { titre: "Surfaces et matériels", points: ["Plan de travail en inox ou surface lisse", "Planches à découper couleur HACCP", "Rangements fermés pour denrées", "Revêtements sols et murs lavables"] },
              { titre: "Hygiène et déchets", points: ["Poubelles à pédale avec couvercle", "Produits de nettoyage homologués", "Kit de premiers secours", "Conteneur à huiles usagées (si friture)"] },
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-orange-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">✓</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Les contrôles DDPP : comment s&apos;y préparer</h2>
          <p>
            La <strong>DDPP (Direction Départementale de la Protection des Populations)</strong> est l&apos;autorité compétente pour contrôler les food trucks, au même titre que les restaurants classiques. Les contrôles peuvent intervenir <strong>à tout moment</strong> et <strong>sans préavis</strong>, y compris sur les marchés, lors de festivals ou sur les emplacements habituels. L&apos;inspecteur peut monter dans le véhicule, vérifier les équipements, consulter les registres et effectuer des prélèvements.
          </p>
          <p>
            Lors d&apos;un contrôle, les points suivants sont systématiquement vérifiés : <strong>attestation de formation HACCP</strong> du gérant ou d&apos;un salarié, <strong>plan de maîtrise sanitaire (PMS)</strong> comprenant les procédures HACCP, les plans de nettoyage et la gestion de la traçabilité, <strong>registres de température</strong> à jour, <strong>état général du véhicule</strong> (propreté, absence de nuisibles, bon fonctionnement des équipements), et <strong>affichage des allergènes</strong>.
          </p>
          <p>
            En cas de non-conformité, les sanctions sont <strong>graduées</strong> : un simple avertissement avec mise en demeure pour les infractions mineures, une <strong>amende de 5e classe</strong> (1 500 euros) pour l&apos;absence d&apos;attestation de formation, et dans les cas les plus graves, une <strong>fermeture administrative immédiate</strong> du food truck. Cette fermeture est prononcée par le préfet et peut durer jusqu&apos;à la mise en conformité complète, ce qui peut prendre plusieurs semaines et représenter un manque à gagner considérable.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-6 not-prose">
            <p className="text-red-900 font-medium">
              ⚠️ <strong>Conseil : </strong> Gardez toujours une copie de votre attestation HACCP dans le food truck, ainsi que votre PMS, vos registres de température et vos fiches de traçabilité. En cas de contrôle inopiné, vous devez pouvoir présenter ces documents immédiatement.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Assurances et formation HACCP : un lien méconnu</h2>
          <p>
            L&apos;assurance est un volet souvent négligé par les exploitants de food trucks, pourtant il est étroitement lié à la formation HACCP. La <strong>responsabilité civile professionnelle (RC Pro)</strong> est obligatoire et couvre les dommages causés à des tiers, y compris les intoxications alimentaires. Or, de nombreux assureurs exigent désormais la présentation de l&apos;<strong>attestation de formation HACCP</strong> comme condition de souscription ou de maintien de la garantie.
          </p>
          <p>
            En cas d&apos;intoxication alimentaire collective (TIAC), si l&apos;enquête révèle que l&apos;exploitant n&apos;avait pas de formation HACCP valide, l&apos;assureur peut invoquer une <strong>clause d&apos;exclusion</strong> et refuser de prendre en charge les indemnisations. Les conséquences financières peuvent alors être désastreuses : frais médicaux des victimes, préjudice moral, perte d&apos;exploitation, frais de justice. Une TIAC impliquant un food truck lors d&apos;un festival peut facilement dépasser les <strong>100 000 euros</strong> de dommages.
          </p>
          <p>
            Au-delà de la RC Pro, il est fortement recommandé de souscrire une <strong>assurance spécifique intoxication alimentaire</strong> et une <strong>assurance perte d&apos;exploitation</strong> qui couvre les périodes d&apos;arrêt liées à une fermeture administrative. L&apos;assurance du véhicule professionnel doit également être adaptée à l&apos;usage commercial (une assurance auto classique ne couvre pas un food truck en activité).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Le Plan de Maîtrise Sanitaire adapté au food truck</h2>
          <p>
            Au-delà de la formation HACCP elle-même, tout food truck doit disposer d&apos;un <strong>Plan de Maîtrise Sanitaire (PMS)</strong> adapté à son activité. Ce document, exigé par le règlement CE n° 852/2004, décrit l&apos;ensemble des mesures prises pour garantir la sécurité sanitaire des aliments. Pour un food truck, le PMS doit inclure des procédures spécifiques : protocole de mise en route du véhicule (vérification des températures avant de charger les denrées), protocole de transport (maintien de la chaîne du froid pendant le trajet), protocole de fin de service (nettoyage complet, évacuation des déchets, vidange des eaux usées) et protocole de maintenance du véhicule.
          </p>
          <p>
            La <strong>traçabilité</strong> est un point critique pour les food trucks. Chaque lot de denrées reçu doit être enregistré avec la date de réception, le fournisseur, la DLC ou DDM, et les conditions de température à réception. Les food trucks qui s&apos;approvisionnent auprès de plusieurs fournisseurs (grossistes, marchés de producteurs) doivent être particulièrement rigoureux. En cas de TIAC, la traçabilité permet de remonter rapidement à la source de la contamination et de limiter les conséquences.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Conseils pratiques pour un food truck conforme</h2>
          <p>
            Fort de l&apos;expérience des milliers de food truckers formés chaque année, voici les <strong>bonnes pratiques</strong> qui font la différence au quotidien. Premièrement, investissez dans un <strong>thermomètre sonde de qualité</strong> et calibrez-le régulièrement. C&apos;est l&apos;outil le plus utilisé et le plus important dans un food truck. Deuxièmement, adoptez une routine de <strong>nettoyage-désinfection</strong> stricte : nettoyage complet du véhicule chaque soir, désinfection des surfaces de travail toutes les 2 heures en service, et nettoyage approfondi hebdomadaire incluant les recoins difficiles d&apos;accès.
          </p>
          <p>
            Troisièmement, organisez votre <strong>stockage de manière logique</strong> : les denrées crues en bas, les denrées cuites ou prêtes à consommer en haut, les produits chimiques dans un compartiment séparé et fermé. Quatrièmement, préparez un <strong>classeur sanitaire</strong> accessible contenant votre attestation HACCP, votre PMS, vos fiches de relevé de température, vos fiches fournisseurs et vos protocoles de nettoyage. Ce classeur doit être à bord du véhicule en permanence.
          </p>
          <p>
            Enfin, pensez à la <strong>formation continue</strong>. La formation HACCP initiale de 14 heures n&apos;a pas de date d&apos;expiration légale, mais les bonnes pratiques et la réglementation évoluent. Un rafraîchissement tous les 3 à 5 ans est vivement recommandé, d&apos;autant que certains assureurs et certains marchés ou festivals l&apos;exigent comme condition de participation. C&apos;est aussi l&apos;occasion de mettre à jour votre PMS et de revoir vos procédures à la lumière des évolutions réglementaires.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Food Truck</h2>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <details key={i} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  {faq.question}<span className="text-orange-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-orange-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP Food Truck</h2>
          <p className="text-orange-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-orange-700 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
