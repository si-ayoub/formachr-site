import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Pizzeria — Guide Hygiène pour Pizzaïolos 2026",
  description: "Formation HACCP obligatoire pour pizzerias. Pâte à pizza, garnitures, four à bois, livraison. Guide complet.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-pizzeria` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour ouvrir une pizzeria ?", answer: "Oui. La pizzeria est un établissement de restauration commerciale soumis au décret n°2011-731 du 24 juin 2011. Au moins une personne de l'établissement doit justifier d'une formation en hygiène alimentaire de 14 heures minimum. Cette obligation s'applique aux pizzerias traditionnelles, aux pizzerias à emporter, aux food trucks pizza et aux franchises. L'absence d'attestation HACCP expose le gérant à une amende de 5e classe (1 500 €, 3 000 € en récidive)." },
  { question: "Quels sont les risques sanitaires spécifiques à la pizza ?", answer: "Les risques principaux en pizzeria concernent : la conservation de la pâte à pizza (fermentation incontrôlée, développement de levures pathogènes), les garnitures périssables (mozzarella, charcuterie, fruits de mer, œufs) qui doivent être maintenues à +4 °C maximum, la contamination croisée entre garnitures crues et cuites sur le plan de travail, et le maintien en température des pizzas cuites avant livraison. Le four à bois pose des problèmes spécifiques de nettoyage des cendres et de régulation de la température de cuisson." },
  { question: "Quelles sont les règles HACCP pour la livraison de pizzas ?", answer: "La livraison de pizzas est encadrée par l'arrêté du 21 décembre 2009. Les pizzas chaudes doivent être livrées à +63 °C minimum, dans des contenants isothermes alimentaires. Le délai entre la sortie du four et la livraison ne doit idéalement pas dépasser 30 minutes. Les sacs isothermes doivent être nettoyés et désinfectés quotidiennement. Pour les pizzas froides (salades, desserts accompagnant la commande), la température de +7 °C maximum doit être respectée pendant le transport." },
  { question: "Comment nettoyer un four à bois en pizzeria selon les normes HACCP ?", answer: "Le four à bois nécessite un entretien spécifique : retrait quotidien des cendres et braises résiduelles, brossage de la sole avec une brosse métallique dédiée, inspection des parois pour détecter d'éventuelles fissures (nid à bactéries), et nettoyage de la bouche du four. Le bois utilisé doit être du bois naturel non traité (interdiction des bois peints, vernis ou traités chimiquement). Un registre de nettoyage du four doit être tenu dans le cadre du PMS." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Pizzeria", url: "/blog/formation-haccp-pizzeria" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Pizzeria</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              RESTAURATION RAPIDE — Obligation HACCP
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Pizzeria<br />
              <span className="text-yellow-400">Guide Hygiène pour Pizzaïolos 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Guide complet sur la formation HACCP en pizzeria : pâte à pizza, garnitures, four à bois, four électrique, livraison et food truck pizza.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation obligatoire","🔥 Four à bois & électrique","🛵 Livraison réglementée","📋 Attestation DRAAF"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="pizzeria" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Pourquoi la formation HACCP est obligatoire en pizzeria</h2>

          <p>
            La pizzeria est l&apos;un des concepts de restauration les plus populaires en France, avec plus de <strong>21 000 établissements</strong> recensés sur le territoire. Qu&apos;il s&apos;agisse d&apos;une pizzeria traditionnelle avec four à bois, d&apos;un restaurant à emporter, d&apos;une franchise ou d&apos;un food truck spécialisé, <strong>tous ces établissements sont soumis à l&apos;obligation de formation HACCP</strong> définie par le décret n°2011-731 du 24 juin 2011.
          </p>

          <p>
            La pizza, malgré son apparente simplicité, concentre de nombreux <strong>risques sanitaires</strong>. La pâte à base de farine et de levure est un milieu favorable au développement de micro-organismes si la fermentation n&apos;est pas maîtrisée. Les garnitures — mozzarella, charcuterie (jambon, pepperoni, anchois), fruits de mer, œufs, légumes frais — sont des denrées périssables dont la conservation nécessite une chaîne du froid irréprochable. Le passage au four à très haute température (+350 °C à +450 °C) assainit le produit, mais la recontamination post-cuisson est un risque réel, notamment lors de la livraison.
          </p>

          <p>
            Le <strong>règlement CE n°852/2004</strong> impose aux exploitants alimentaires de mettre en place des procédures fondées sur les principes HACCP. La formation de 14 heures permet au pizzaïolo et au gérant de comprendre les dangers, d&apos;identifier les points critiques de contrôle spécifiques à leur activité et de mettre en place un <strong>Plan de Maîtrise Sanitaire (PMS)</strong> adapté.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 my-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Bon à savoir :</strong> Les plateformes de livraison (Uber Eats, Deliveroo, Just Eat) exigent de plus en plus que les restaurants partenaires fournissent une <strong>attestation de formation HACCP</strong> lors de l&apos;inscription. C&apos;est devenu un critère d&apos;activation du compte restaurateur sur ces plateformes.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">La pâte à pizza : fermentation et conservation</h2>

          <p>
            La pâte à pizza est composée de farine, d&apos;eau, de levure (fraîche ou sèche), de sel et parfois d&apos;huile d&apos;olive. La <strong>fermentation</strong> est un processus biologique contrôlé qui donne à la pâte sa texture et son goût caractéristiques. Du point de vue HACCP, cette fermentation doit être strictement maîtrisée pour éviter le développement de micro-organismes indésirables.
          </p>

          <p>
            La <strong>fermentation à température ambiante</strong> (entre +20 °C et +25 °C) ne doit pas excéder <strong>4 à 6 heures</strong>. Au-delà, le risque de développement de bactéries pathogènes ou de moisissures augmente significativement. La technique de la <strong>fermentation lente au froid</strong> (maturation des pâtons au réfrigérateur à +4 °C pendant 24 à 72 heures) est non seulement préférable sur le plan gustatif, mais aussi plus sûre d&apos;un point de vue sanitaire, car la température basse ralentit la multiplication des micro-organismes.
          </p>

          <p>
            Les pâtons doivent être conservés dans des <strong>bacs alimentaires fermés</strong>, identifiés avec la date et l&apos;heure de préparation, et stockés en chambre froide selon le principe <strong>FIFO</strong>. La pâte non utilisée dans les délais prévus doit être jetée — il est interdit de la recycler en la mélangeant à une pâte fraîche.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Les garnitures : chaîne du froid et contamination croisée</h2>

          <p>
            Les garnitures de pizza sont le principal vecteur de risque sanitaire. La <strong>mozzarella</strong>, ingrédient star de la pizza, est un fromage frais à conservation limitée qui doit être maintenu à <strong>+4 °C maximum</strong> et consommé dans les <strong>24 à 48 heures</strong> après ouverture. Les charcuteries (jambon, salami, pepperoni, pancetta) doivent être tranchées sur un plan de travail propre, avec du matériel dédié, et conservées filmées au réfrigérateur entre chaque service.
          </p>

          <p>
            La <strong>contamination croisée</strong> est un risque majeur en pizzeria. Le plan de travail où le pizzaïolo étale la pâte et dispose les garnitures est en contact successif avec des ingrédients de natures différentes : farine (sec), tomate (acide), fromage (produit laitier), charcuterie (protéine animale), légumes crus (potentiellement contaminés par des germes telluriques). Le plan de travail doit être <strong>nettoyé et désinfecté</strong> entre chaque type de garniture ou, a minima, entre chaque service.
          </p>

          <p>
            Les <strong>garnitures pré-préparées</strong> (légumes grillés, sauce bolognaise, poulet effiloché) doivent être refroidies rapidement après cuisson (passage de +63 °C à +10 °C en moins de 2 heures), conservées en bacs gastronormes à <strong>+4 °C</strong>, et consommées dans les <strong>72 heures</strong>. Chaque bac doit être étiqueté avec la date de fabrication et la DLC interne.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Four à bois vs four électrique : les enjeux HACCP</h2>

          <p>
            Le <strong>four à bois</strong> est l&apos;emblème de la pizzeria traditionnelle, mais il pose des défis spécifiques en matière d&apos;hygiène. La cuisson au feu de bois génère des <strong>cendres et des résidus de combustion</strong> qui peuvent contaminer les pizzas si le four n&apos;est pas correctement entretenu. Le bois utilisé doit être du <strong>bois naturel non traité</strong> : il est strictement interdit d&apos;utiliser du bois peint, verni, aggloméré ou traité chimiquement, sous peine de dégager des substances toxiques lors de la combustion.
          </p>

          <p>
            Le nettoyage quotidien du four à bois comprend le <strong>retrait des cendres</strong> à l&apos;aide d&apos;un racloir et d&apos;une brosse métallique, le <strong>brossage de la sole</strong> (surface de cuisson) pour éliminer les résidus de farine brûlée et de fromage fondu, et l&apos;<strong>inspection des parois</strong> pour détecter d&apos;éventuelles fissures susceptibles d&apos;abriter des bactéries ou des nuisibles. Un <strong>registre de nettoyage</strong> du four doit être tenu quotidiennement dans le cadre du PMS.
          </p>

          <p>
            Le <strong>four électrique</strong> (à convection, à sole ou rotatif) offre un meilleur contrôle de la température et un nettoyage plus aisé. La plupart des fours professionnels modernes disposent d&apos;un <strong>programme d&apos;auto-nettoyage par pyrolyse</strong> qui porte la température interne à +500 °C, détruisant tout résidu organique. Pour les deux types de four, la température de cuisson doit être suffisante pour atteindre <strong>+70 °C à cœur</strong> du produit, ce qui est largement assuré par les températures de cuisson de la pizza (+300 °C à +450 °C).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Livraison de pizzas : les obligations HACCP</h2>

          <p>
            La livraison de pizzas est devenue une part prépondérante du chiffre d&apos;affaires des pizzerias, accélérée par l&apos;essor des plateformes de livraison. Du point de vue HACCP, la livraison représente un <strong>CCP supplémentaire</strong> où la chaîne du chaud peut être rompue. Les pizzas cuites doivent être maintenues à <strong>+63 °C minimum</strong> jusqu&apos;à la remise au client.
          </p>

          <p>
            Les <strong>sacs et conteneurs isothermes</strong> utilisés pour le transport doivent être en matériau alimentaire, maintenus propres et <strong>désinfectés quotidiennement</strong>. Les cartons de pizza eux-mêmes doivent être conformes au <strong>règlement CE n°1935/2004</strong> relatif aux matériaux en contact avec les denrées alimentaires (absence de métaux lourds, encres alimentaires). Le délai entre la sortie du four et la livraison au client ne devrait idéalement pas dépasser <strong>30 minutes</strong>.
          </p>

          <p>
            Pour les pizzerias proposant également des <strong>accompagnements froids</strong> (salades, tiramisù, boissons), une séparation physique entre les produits chauds et froids doit être assurée pendant le transport. Les produits froids doivent être maintenus à <strong>+7 °C maximum</strong>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Food truck pizza : contraintes supplémentaires</h2>

          <p>
            Le <strong>food truck pizza</strong> cumule les contraintes de la pizzeria traditionnelle et celles de la restauration ambulante. L&apos;espace réduit du camion rend la maîtrise de l&apos;hygiène plus difficile : plans de travail limités, stockage restreint, accès à l&apos;eau potable limité. Le food truck doit disposer d&apos;un <strong>réservoir d&apos;eau potable</strong> d&apos;au moins 60 litres, d&apos;un bac de récupération des eaux usées de capacité équivalente, et d&apos;un lave-mains à commande non manuelle.
          </p>

          <p>
            La formation HACCP aborde les <strong>spécificités de la restauration ambulante</strong> : gestion de l&apos;approvisionnement quotidien, conservation des garnitures pendant les déplacements, nettoyage-désinfection en fin de service dans un espace confiné, et gestion des déchets. Pour en savoir plus, consultez notre guide dédié sur la <Link href="/blog/formation-haccp-food-truck" className="text-blue-600 hover:underline">formation HACCP food truck</Link>.
          </p>

          <p>
            Pour comparer les organismes de formation et obtenir un devis adapté à votre pizzeria, rendez-vous sur notre page <Link href="/devis" className="text-blue-600 hover:underline">demande de devis gratuit</Link>. Découvrez aussi notre article sur les <Link href="/blog/formation-haccp-prix-2026" className="text-blue-600 hover:underline">prix de la formation HACCP en 2026</Link>.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Pizzeria</h2>
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
          <h2 className="text-2xl font-bold mb-3">Formez votre équipe pizzeria à l&apos;HACCP</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés Qualiopi dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
