import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Traiteur — Règles d'Hygiène pour Traiteurs 2026",
  description: "Formation HACCP obligatoire pour traiteurs : transport des aliments, maintien en température, chaîne du froid. Guide complet 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-traiteur` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour un traiteur événementiel ?", answer: "Oui. Tout professionnel qui prépare, transforme, manipule ou distribue des denrées alimentaires est soumis au règlement CE n°852/2004 (paquet hygiène). Le décret n°2011-731 impose qu'au moins une personne de l'établissement ait suivi une formation en hygiène alimentaire de 14 heures minimum. Cela concerne les traiteurs événementiels, les traiteurs organisateurs de réceptions, les traiteurs à emporter et les services de livraison de plateaux-repas." },
  { question: "Quelles sont les règles de transport des aliments pour un traiteur ?", answer: "Le transport des denrées alimentaires par un traiteur est encadré par l'arrêté du 21 décembre 2009. Les produits réfrigérés doivent être maintenus à +3 °C maximum (produits très périssables comme les charcuteries, mousses, crèmes) ou +7 °C (autres produits périssables). Les plats chauds doivent être maintenus à +63 °C minimum. Le véhicule de transport doit être isotherme ou réfrigéré, nettoyé et désinfecté après chaque utilisation. Un enregistrement de température pendant le transport est recommandé." },
  { question: "Comment garantir la chaîne du froid lors d'un événement en extérieur ?", answer: "Pour les événements en extérieur (mariages, cocktails, séminaires), le traiteur doit prévoir des équipements de maintien en température : bacs gastronormes isothermes, glacières professionnelles avec packs eutectiques, vitrines réfrigérées portables ou camions frigorifiques stationnés à proximité. Un relevé de température doit être effectué à l'arrivée sur site, au moment du service et en fin de prestation. Tout produit ayant séjourné plus de 2 heures entre +10 °C et +63 °C doit être jeté." },
  { question: "Quel est le coût de la formation HACCP pour un traiteur ?", answer: "Le tarif d'une formation HACCP de 14 heures adaptée aux traiteurs varie entre 250 € et 500 € selon l'organisme de formation et le format (présentiel ou mixte). Ce coût peut être pris en charge par l'OPCO EP, l'OPCO Métiers du Goût ou le FAFCEA pour les artisans. Les demandeurs d'emploi peuvent solliciter l'AIF via France Travail." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Traiteur", url: "/blog/formation-haccp-traiteur" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Traiteur</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-600/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              🍽️ TRAITEUR — TRANSPORT &amp; CHAÎNE DU FROID
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Traiteur<br />
              <span className="text-yellow-400">Règles d&apos;Hygiène pour Traiteurs 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Guide complet sur la formation HACCP obligatoire pour les traiteurs : transport des aliments, maintien en température, chaîne du froid et obligations lors des événements.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation obligatoire","🚛 Transport réglementé","❄️ Chaîne du froid","📋 Traçabilité événement"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="traiteur" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Pourquoi la formation HACCP est cruciale pour les traiteurs</h2>

          <p>
            Le métier de traiteur présente des <strong>risques sanitaires spécifiques</strong> que l&apos;on ne retrouve pas dans la restauration classique. Contrairement à un restaurant où les plats sont préparés et servis sur place, le traiteur doit gérer une chaîne logistique complexe : préparation en laboratoire, conditionnement, transport, stockage temporaire sur site, dressage et service — parfois plusieurs heures après la fabrication. Chaque étape représente un <strong>point critique de contrôle (CCP)</strong> où la sécurité sanitaire des aliments peut être compromise.
          </p>

          <p>
            Les toxi-infections alimentaires collectives (TIAC) liées aux prestations de traiteurs événementiels sont malheureusement fréquentes en France. Les causes les plus courantes sont la <strong>rupture de la chaîne du froid</strong> pendant le transport, le <strong>maintien insuffisant en température</strong> des plats chauds lors de buffets prolongés, et les <strong>contaminations croisées</strong> entre produits crus et cuits lors du dressage sur site. La formation HACCP de 14 heures permet aux professionnels d&apos;identifier ces dangers et de mettre en place les mesures préventives adaptées.
          </p>

          <p>
            Le <strong>règlement CE n°852/2004</strong> et le <strong>décret n°2011-731</strong> s&apos;appliquent pleinement aux traiteurs, qu&apos;ils exercent en tant qu&apos;artisan (code NAF 10.85Z — fabrication de plats préparés) ou en tant que restaurateur-traiteur. L&apos;attestation de formation HACCP est exigible lors de tout contrôle de la DDPP, y compris lors de contrôles inopinés sur les lieux d&apos;un événement.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 my-8">
            <p className="text-yellow-900 font-medium">
              ⚠️ <strong>Attention :</strong> Un traiteur qui intervient sur un événement rassemblant plus de <strong>150 convives</strong> est tenu de conserver un <strong>échantillon témoin</strong> de chaque plat servi pendant <strong>5 jours</strong> à +3 °C. Cette obligation, souvent méconnue, est systématiquement vérifiée en cas de TIAC déclarée.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Le transport des aliments : réglementation et bonnes pratiques</h2>

          <p>
            Le transport des denrées alimentaires est l&apos;une des phases les plus critiques de l&apos;activité de traiteur. L&apos;<strong>arrêté du 21 décembre 2009</strong> fixe des règles strictes en matière de températures de transport. Les produits réfrigérés très périssables (charcuteries, mousses, crèmes, tartares, produits à base d&apos;œufs) doivent être transportés à <strong>+3 °C maximum</strong>. Les autres produits périssables (salades composées, quiches, tartes salées) doivent être maintenus à <strong>+7 °C maximum</strong>. Les plats chauds, quant à eux, doivent voyager à <strong>+63 °C minimum</strong>.
          </p>

          <p>
            Le véhicule utilisé pour le transport doit répondre à des exigences précises. Pour les trajets de moins de 80 km ou d&apos;une durée inférieure à une heure, un <strong>véhicule isotherme</strong> équipé de conteneurs isothermes peut suffire. Au-delà, un <strong>véhicule frigorifique</strong> avec groupe froid autonome est indispensable. Dans tous les cas, le véhicule doit être propre, désinfecté après chaque utilisation, et dédié au transport alimentaire (pas de mélange avec d&apos;autres marchandises).
          </p>

          <p>
            La formation HACCP enseigne aux traiteurs les bonnes pratiques de chargement : séparation physique entre produits crus et cuits, positionnement des produits les plus sensibles près de la source de froid, utilisation de bacs gastronormes avec couvercles hermétiques, et vérification des températures avant le départ, à l&apos;arrivée et lors du déchargement à l&apos;aide d&apos;un <strong>thermomètre sonde étalonné</strong>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Maintien en température lors des événements</h2>

          <p>
            Le maintien en température est le défi majeur du traiteur événementiel. Lors d&apos;un cocktail, d&apos;un mariage ou d&apos;un séminaire, les plats peuvent rester exposés pendant plusieurs heures, créant un risque de prolifération bactérienne. La règle d&apos;or est simple : <strong>les plats froids doivent rester en dessous de +10 °C</strong> et <strong>les plats chauds au-dessus de +63 °C</strong>. La zone comprise entre ces deux températures est la « zone de danger » où les bactéries se multiplient de manière exponentielle.
          </p>

          <p>
            Pour les <strong>plats froids</strong>, le traiteur doit prévoir des vitrines réfrigérées portables, des buffets réfrigérés à eau glacée, ou des présentoirs avec packs eutectiques. Les pièces cocktail (verrines, canapés, sushis) ne doivent pas rester exposées plus de <strong>2 heures</strong> à température ambiante. Au-delà, elles doivent être remplacées par des lots frais sortis de la chambre froide mobile.
          </p>

          <p>
            Pour les <strong>plats chauds</strong>, les options incluent les bains-marie professionnels, les chafing dishes avec combustible (gel ou alcool), les plaques chauffantes électriques et les fours de remise en température sur site. La température de service doit être contrôlée régulièrement et les plats qui passent en dessous de +63 °C doivent être réchauffés rapidement au-dessus de <strong>+70 °C à cœur</strong> ou jetés.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">La chaîne du froid : de la cuisine au convive</h2>

          <p>
            La maîtrise de la <strong>chaîne du froid</strong> est le fil conducteur de toute prestation de traiteur réussie sur le plan sanitaire. Du laboratoire de production au verre du convive, chaque maillon de la chaîne doit être contrôlé et documenté. Le Plan de Maîtrise Sanitaire (PMS) du traiteur doit prévoir des <strong>procédures spécifiques pour chaque type de prestation</strong> : cocktail intérieur, mariage en extérieur, livraison de plateaux-repas en entreprise, buffet froid déjeunatoire.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8">
            <h3 className="font-bold text-blue-800 mb-3">Températures réglementaires pour les traiteurs</h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Produits très périssables (crèmes, mousses, tartares) : <strong>+3 °C maximum</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Autres produits périssables : <strong>+7 °C maximum</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Plats chauds en service : <strong>+63 °C minimum</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Produits surgelés : <strong>-18 °C maximum</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Remise en température : <strong>+63 °C à cœur en moins d&apos;1 heure</strong></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligations spécifiques des traiteurs événementiels</h2>

          <p>
            Le traiteur événementiel fait face à des contraintes supplémentaires par rapport au restaurateur classique. La <strong>traçabilité</strong> doit être assurée de manière renforcée : chaque lot préparé pour un événement doit être identifié avec la date de fabrication, les ingrédients utilisés (avec mention des allergènes), la date et l&apos;heure de livraison, et le nom du client. En cas de TIAC, la DDPP doit pouvoir remonter à la source de la contamination dans un délai très court.
          </p>

          <p>
            L&apos;obligation d&apos;<strong>information sur les allergènes</strong> s&apos;applique pleinement aux prestations de traiteur. Le règlement UE n°1169/2011 impose que les 14 allergènes à déclaration obligatoire soient portés à la connaissance du client final. Concrètement, le traiteur doit fournir une <strong>fiche allergènes détaillée</strong> pour chaque menu ou prestation, et le personnel de service doit être formé pour répondre aux questions des convives.
          </p>

          <p>
            Pour les événements en <strong>plein air</strong>, des précautions supplémentaires s&apos;imposent : protection des buffets contre les insectes et les intempéries (toiles alimentaires, cloches, vitrines fermées), accès à un point d&apos;eau potable pour le lavage des mains du personnel, gestion des déchets alimentaires avec des conteneurs fermés et évacuation en fin de prestation.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Financement et inscription à la formation HACCP traiteur</h2>

          <p>
            Le coût d&apos;une formation HACCP adaptée aux traiteurs se situe entre <strong>250 € et 500 €</strong> pour 14 heures. Les traiteurs artisans peuvent solliciter le <strong>FAFCEA</strong> ou l&apos;<strong>OPCO EP</strong> pour une prise en charge totale ou partielle. Les entreprises de restauration-traiteur relevant de la convention collective HCR (Hôtels, Cafés, Restaurants) dépendent de l&apos;<strong>OPCO Métiers du Goût</strong>.
          </p>

          <p>
            Pour comparer les organismes de formation et obtenir un devis adapté à votre activité, consultez notre page <Link href="/devis" className="text-blue-600 hover:underline">demande de devis gratuit</Link>. Découvrez aussi nos articles sur le <Link href="/blog/financer-formation-haccp-opco" className="text-blue-600 hover:underline">financement OPCO</Link> et la <Link href="/blog/formation-haccp-food-truck" className="text-blue-600 hover:underline">formation HACCP pour food trucks</Link>.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Traiteur</h2>
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
          <h2 className="text-2xl font-bold mb-3">Formez votre équipe traiteur à l&apos;HACCP</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés Qualiopi dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
