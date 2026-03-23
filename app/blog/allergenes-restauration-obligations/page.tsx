import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "14 Allergènes en Restauration — Obligations Légales et Affichage 2026",
  description: "Liste des 14 allergènes obligatoires en restauration. Règlement INCO, affichage, formation du personnel et sanctions. Guide complet pour les restaurateurs.",
  alternates: { canonical: `${SITE_URL}/blog/allergenes-restauration-obligations` }
}

const FAQ = [
  { question: "Quels sont les 14 allergènes à déclaration obligatoire en restauration ?", answer: "Les 14 allergènes à déclaration obligatoire selon le règlement INCO 1169/2011 sont : gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, graines de sésame, anhydride sulfureux et sulfites (>10 mg/kg), lupin et mollusques. Tout établissement de restauration doit informer ses clients de la présence de ces allergènes dans ses plats." },
  { question: "L'affichage des allergènes est-il obligatoire dans un restaurant ?", answer: "Oui, depuis le 1er juillet 2015, tout établissement de restauration doit informer le consommateur de la présence des 14 allergènes. L'information peut être écrite (carte, affiche, classeur) ou orale, à condition qu'une mention visible renvoie le client vers le personnel formé. Un document écrit détaillant les allergènes par plat doit être tenu à disposition." },
  { question: "Quelles sont les sanctions en cas de non-respect de l'affichage des allergènes ?", answer: "Le non-respect de l'obligation d'information sur les allergènes constitue une infraction passible d'une amende de 450€ à 1 500€ (contravention de 3e classe). En cas de récidive ou de mise en danger du consommateur, les sanctions peuvent atteindre 3 000€. En cas d'accident allergique grave, la responsabilité pénale du restaurateur peut être engagée pour blessures involontaires." },
  { question: "Un restaurateur doit-il former son personnel sur les allergènes ?", answer: "Oui, la formation du personnel est une obligation implicite du règlement INCO. Si l'information allergène est transmise oralement, le personnel doit être formé pour pouvoir répondre précisément aux questions des clients. La formation HACCP de 14 heures inclut un module sur la gestion des allergènes. Il est recommandé de former tous les employés en contact avec les clients ou les denrées." },
  { question: "Comment gérer les allergènes dans un buffet ou en livraison ?", answer: "Pour un buffet, chaque plat doit être accompagné d'une étiquette ou fiche indiquant les allergènes présents. Pour la livraison et la vente à emporter, l'information allergène doit figurer sur l'emballage, le bon de livraison ou être accessible en ligne (site, application). Les plateformes de livraison (Uber Eats, Deliveroo) exigent désormais la déclaration des allergènes par plat." }
]

export default function AllergenesRestaurationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "14 Allergènes en Restauration", url: "/blog/allergenes-restauration-obligations" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li><li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li><li>›</li>
          <li className="text-gray-800 font-medium">14 Allergènes en Restauration</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">⚖️ OBLIGATION LÉGALE</div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Les 14 Allergènes en Restauration<br />
              <span className="text-yellow-400">Obligations Légales et Affichage 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Le <strong>règlement européen INCO 1169/2011</strong> impose à tout établissement de restauration d&apos;informer
              ses clients sur la présence des <strong>14 allergènes à déclaration obligatoire</strong>. Non-respect = sanctions
              financières et pénales. Voici le guide complet pour vous mettre en conformité.
            </p>
          </div>
          <div><LeadForm title="Devis Formation HACCP & Allergènes — 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold mb-6">Pourquoi la gestion des allergènes est-elle cruciale en restauration ?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les allergies alimentaires touchent aujourd&apos;hui environ <strong>3 à 4 % de la population adulte</strong> et jusqu&apos;à
            <strong> 8 % des enfants</strong> en France. Chaque année, les réactions allergiques graves (choc anaphylactique)
            provoquent des hospitalisations et, dans les cas les plus dramatiques, des décès. En restauration, le risque
            est amplifié par le fait que le consommateur ne prépare pas lui-même son repas et n&apos;a pas toujours accès
            à la liste complète des ingrédients.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Face à cet enjeu de santé publique, l&apos;Union européenne a adopté le <strong>règlement INCO (UE) n° 1169/2011</strong>,
            entré en application le 13 décembre 2014 pour les denrées préemballées, et étendu à la restauration et aux
            denrées non préemballées depuis le <strong>1er juillet 2015</strong> en France (décret n° 2015-447). Ce texte
            impose à tout professionnel de la restauration — qu&apos;il s&apos;agisse d&apos;un restaurant traditionnel, d&apos;un fast-food,
            d&apos;un traiteur, d&apos;une boulangerie ou d&apos;un food truck — d&apos;informer clairement le consommateur sur la présence
            des 14 allergènes majeurs dans les plats proposés.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Au-delà de l&apos;obligation légale, la bonne gestion des allergènes est un gage de professionnalisme et de
            confiance. Les consommateurs allergiques sont de plus en plus vigilants et n&apos;hésitent pas à changer
            d&apos;établissement si l&apos;information n&apos;est pas clairement disponible. Maîtriser ce sujet, c&apos;est aussi
            fidéliser une clientèle exigeante et éviter tout risque juridique.
          </p>

          <h2 className="text-2xl font-bold mb-6">La liste complète des 14 allergènes obligatoires</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le règlement INCO identifie <strong>14 substances ou groupes de substances</strong> provoquant des allergies
            ou intolérances. Ces allergènes doivent être déclarés dès lors qu&apos;ils sont présents dans un plat, même
            en quantité infime, qu&apos;ils soient utilisés comme ingrédient principal, auxiliaire technologique ou
            support d&apos;arôme.
          </p>

          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {[
              { num: 1, nom: "Gluten", detail: "Blé, seigle, orge, avoine, épeautre, kamut et leurs souches hybridées. Inclut les farines, pâtes, pain, bière, sauces liées." },
              { num: 2, nom: "Crustacés", detail: "Crevettes, crabes, homards, langoustines, écrevisses et produits dérivés (bisques, beurre de crustacés, surimi)." },
              { num: 3, nom: "Œufs", detail: "Œufs et produits à base d'œufs : mayonnaise, pâtes aux œufs, pâtisseries, meringues, certaines panures." },
              { num: 4, nom: "Poissons", detail: "Toutes espèces de poissons et produits dérivés : fumet, sauce de poisson, surimi, gélatine de poisson." },
              { num: 5, nom: "Arachides", detail: "Cacahuètes et produits dérivés : huile d'arachide, beurre de cacahuète, satay. Attention aux contaminations croisées." },
              { num: 6, nom: "Soja", detail: "Graines de soja et dérivés : tofu, sauce soja, lécithine de soja (E322), protéines de soja texturées, edamame." },
              { num: 7, nom: "Lait", detail: "Lait et produits laitiers : beurre, crème, fromage, yaourt, lactosérum, caséine, lactose." },
              { num: 8, nom: "Fruits à coque", detail: "Amandes, noisettes, noix, noix de cajou, noix de pécan, noix du Brésil, pistaches, noix de macadamia/du Queensland." },
              { num: 9, nom: "Céleri", detail: "Céleri-branche et céleri-rave, en frais, en poudre ou dans les bouillons et mélanges d'épices." },
              { num: 10, nom: "Moutarde", detail: "Graines de moutarde et moutarde préparée. Présente dans de nombreuses vinaigrettes, marinades et sauces." },
              { num: 11, nom: "Graines de sésame", detail: "Graines entières, huile de sésame, tahini. Fréquent dans la cuisine asiatique et les pains à burger." },
              { num: 12, nom: "Sulfites (SO₂ > 10 mg/kg)", detail: "Anhydride sulfureux et sulfites. Présents dans le vin, les fruits secs, les crevettes transformées, certaines charcuteries." },
              { num: 13, nom: "Lupin", detail: "Graines et farine de lupin. Utilisé comme substitut de la farine de blé dans certains produits sans gluten." },
              { num: 14, nom: "Mollusques", detail: "Escargots, moules, huîtres, calmars, poulpes, seiches et produits dérivés (encre de seiche, sauce d'huître)." },
            ].map(a => (
              <div key={a.num} className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-100 text-red-700 font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0">{a.num}</span>
                  <span className="font-bold text-gray-900">{a.nom}</span>
                </div>
                <p className="text-sm text-gray-600">{a.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Obligations d&apos;affichage et d&apos;information : ce que dit la loi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le décret n° 2015-447 du 17 avril 2015 transpose en droit français les dispositions du règlement INCO
            pour les denrées non préemballées. Concrètement, le restaurateur a <strong>deux options</strong> pour informer
            ses clients sur les allergènes présents dans ses plats :
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
              <h3 className="font-bold text-blue-800 mb-2">Option 1 : Information écrite directe</h3>
              <p className="text-sm text-gray-700">
                Les allergènes sont mentionnés directement sur la carte, le menu, un tableau d&apos;affichage visible
                ou un classeur mis à disposition du client. Cette option est la plus sûre car elle ne dépend pas
                de la disponibilité ou de la formation du personnel. Les allergènes doivent être <strong>mis en évidence</strong> (gras,
                italique, couleur, pictogramme) pour être facilement repérables.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl">
              <h3 className="font-bold text-green-800 mb-2">Option 2 : Information orale avec renvoi écrit</h3>
              <p className="text-sm text-gray-700">
                Une affiche ou mention visible (sur la carte par exemple) indique au client qu&apos;il peut obtenir
                l&apos;information allergène auprès du personnel. Dans ce cas, un <strong>document écrit détaillant les
                allergènes par plat</strong> doit être tenu à jour et disponible immédiatement sur demande. Le personnel
                en contact avec la clientèle doit être formé pour orienter correctement les clients.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quelle que soit l&apos;option choisie, le restaurateur doit <strong>tenir à jour un document écrit</strong> récapitulant,
            pour chaque plat ou préparation, les allergènes présents. Ce document doit être facilement accessible
            et mis à jour à chaque changement de carte, de recette ou de fournisseur. En pratique, la plupart
            des restaurateurs utilisent un <strong>tableau croisé</strong> (matrice allergènes/plats) affiché en cuisine
            et consultable en salle.
          </p>

          <h2 className="text-2xl font-bold mb-6">Formation du personnel : une obligation implicite</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le règlement INCO ne mentionne pas explicitement une obligation de formation spécifique aux allergènes.
            Cependant, dès lors que l&apos;information est transmise oralement (option 2), il est évident que le personnel
            doit maîtriser le sujet. En cas d&apos;accident allergique, si un serveur a donné une information erronée,
            la responsabilité du restaurateur sera engagée.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La <strong>formation HACCP obligatoire de 14 heures</strong> (arrêté du 5 octobre 2011) inclut un module sur
            la gestion des allergènes dans le cadre de la maîtrise des dangers biologiques, chimiques et physiques.
            Cependant, cette formation est obligatoire pour au moins une personne par établissement. Il est fortement
            recommandé de <strong>sensibiliser l&apos;ensemble du personnel</strong> : cuisiniers, serveurs, plongeurs, extras.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les points essentiels que le personnel doit maîtriser sont : la liste des 14 allergènes, la lecture
            des étiquettes fournisseurs, le protocole en cas de demande client (vérification de la fiche plat,
            consultation du chef si doute), la conduite à tenir en cas de réaction allergique (appel du 15,
            position latérale de sécurité, utilisation d&apos;un stylo auto-injecteur d&apos;adrénaline si disponible).
            Des sessions de rappel régulières, au minimum à chaque changement de carte, sont recommandées.
          </p>

          <h2 className="text-2xl font-bold mb-6">Prévention des contaminations croisées</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Au-delà de la déclaration des allergènes intentionnellement utilisés, le restaurateur doit prendre
            des mesures pour <strong>limiter les contaminations croisées</strong>. Une contamination croisée survient
            lorsqu&apos;un allergène est transféré involontairement d&apos;un aliment à un autre, par exemple via un
            ustensile, un plan de travail, une huile de friture ou les mains du cuisinier.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les bonnes pratiques pour prévenir les contaminations croisées comprennent : le <strong>stockage séparé</strong> des
            ingrédients allergènes (étagères dédiées, contenants hermétiques étiquetés), l&apos;utilisation d&apos;<strong>ustensiles
            dédiés</strong> pour les préparations sans allergènes (planches de couleur, couteaux identifiés), le <strong>nettoyage
            rigoureux</strong> des plans de travail entre chaque préparation, la gestion des <strong>huiles de friture</strong> (ne
            pas frire des produits sans gluten dans une huile ayant servi pour des beignets panés), et le
            <strong> lavage des mains</strong> systématique entre les manipulations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            La traçabilité est également essentielle. Chaque fournisseur doit fournir la liste des allergènes
            présents dans ses produits. Lors d&apos;un changement de fournisseur ou de référence, la fiche allergène
            du plat concerné doit être immédiatement mise à jour. Un système de <strong>fiches techniques par plat</strong>,
            incluant la liste des ingrédients et les allergènes identifiés, est la base d&apos;une gestion rigoureuse.
          </p>

          <h2 className="text-2xl font-bold mb-6">Cas particuliers : buffets, livraison, food trucks et traiteurs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les <strong>buffets</strong> (restaurants, hôtels, traiteurs événementiels) posent un défi spécifique car
            les plats sont en libre-service. Chaque plat doit être accompagné d&apos;une étiquette ou fiche
            mentionnant les allergènes. Les pinces et cuillères de service doivent être dédiées pour éviter
            les contaminations croisées entre les plats. En pratique, un petit chevalet devant chaque plat
            avec les pictogrammes allergènes est la solution la plus lisible.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour la <strong>vente à emporter et la livraison</strong>, l&apos;information allergène doit accompagner le produit.
            Elle peut figurer sur l&apos;emballage, sur le ticket de caisse, sur un document joint au sac de livraison,
            ou être accessible via un QR code renvoyant vers une page en ligne. Les plateformes de livraison
            comme Uber Eats, Deliveroo et Just Eat imposent désormais aux restaurateurs partenaires de
            renseigner les allergènes pour chaque plat dans leur interface. Le non-renseignement peut entraîner
            la suspension du compte restaurateur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les <strong>food trucks</strong> sont soumis aux mêmes obligations que les restaurants classiques. L&apos;espace
            réduit rend la gestion plus complexe : il est recommandé d&apos;afficher un tableau allergènes bien
            visible à l&apos;intérieur du camion ou sur le comptoir de service. Pour les <strong>traiteurs</strong> intervenant
            sur des événements, la fiche allergène doit être transmise au client (organisateur) en amont,
            et un affichage doit être prévu sur le lieu de l&apos;événement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Enfin, les <strong>établissements de restauration collective</strong> (cantines scolaires, EHPAD, hôpitaux)
            ont des obligations renforcées. La déclaration nutritionnelle complète est recommandée, et un
            protocole d&apos;accueil individualisé (PAI) doit être mis en place pour les enfants allergiques
            en milieu scolaire. Le personnel de cantine doit être spécifiquement formé à la gestion des
            allergies, y compris aux gestes d&apos;urgence.
          </p>

          <h2 className="text-2xl font-bold mb-6">Sanctions en cas de non-conformité</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le non-respect de l&apos;obligation d&apos;information sur les allergènes est sanctionné à plusieurs niveaux.
            Les agents de la <strong>DDPP (Direction Départementale de la Protection des Populations)</strong> contrôlent
            les établissements et peuvent relever les infractions suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Contravention de 3e classe</strong> : amende de 450€ pour absence d&apos;information allergène ou information incomplète.</li>
            <li><strong>Contravention de 5e classe</strong> : amende pouvant atteindre 1 500€ (3 000€ en récidive) pour tromperie ou information mensongère sur les allergènes.</li>
            <li><strong>Responsabilité civile et pénale</strong> : en cas de réaction allergique grave consécutive à une information erronée, le restaurateur peut être poursuivi pour blessures involontaires (article 222-19 du Code pénal), avec des peines pouvant aller jusqu&apos;à 3 ans d&apos;emprisonnement et 45 000€ d&apos;amende.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            En pratique, lors d&apos;un contrôle sanitaire, les inspecteurs vérifient systématiquement la présence
            du document allergène et interrogent le personnel sur sa connaissance du sujet. Un restaurant
            qui ne dispose pas de fiche allergène à jour recevra au minimum un avertissement avec mise en
            demeure de se mettre en conformité sous 15 jours.
          </p>

          <h2 className="text-2xl font-bold mb-6">Conseils pratiques pour se mettre en conformité</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voici les étapes concrètes pour mettre votre établissement en conformité avec les obligations
            allergènes :
          </p>
          <div className="space-y-3 mb-6">
            {[
              { etape: "1. Inventorier vos recettes", desc: "Listez tous vos plats et identifiez, pour chacun, les ingrédients contenant un ou plusieurs des 14 allergènes. Vérifiez les étiquettes de vos fournisseurs." },
              { etape: "2. Créer votre matrice allergènes", desc: "Établissez un tableau croisé avec vos plats en lignes et les 14 allergènes en colonnes. Cochez les cases correspondantes. Ce document est votre référence interne." },
              { etape: "3. Choisir votre mode d'information", desc: "Décidez si vous optez pour l'information écrite sur la carte ou l'information orale avec affiche de renvoi. L'option écrite est plus sûre et plus simple à gérer." },
              { etape: "4. Former votre personnel", desc: "Organisez une session de formation interne sur les 14 allergènes, la lecture de votre matrice et la conduite à tenir face à un client allergique." },
              { etape: "5. Mettre en place les procédures anti-contamination", desc: "Définissez les règles de stockage, de préparation et de nettoyage pour limiter les contaminations croisées. Affichez ces procédures en cuisine." },
              { etape: "6. Mettre à jour à chaque changement", desc: "Actualisez votre matrice allergènes à chaque modification de carte, changement de recette ou changement de fournisseur. Datez chaque version." },
            ].map(e => (
              <div key={e.etape} className="bg-gray-50 rounded-xl p-4">
                <div className="font-bold text-gray-900 mb-1">{e.etape}</div>
                <p className="text-sm text-gray-600">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-blue-800 mb-2">La formation HACCP couvre les allergènes</h3>
            <p className="text-sm text-gray-700 mb-3">
              La <strong>formation hygiène alimentaire HACCP de 14 heures</strong> inclut un module complet sur la gestion
              des allergènes. Elle est obligatoire pour tout établissement de restauration commerciale et
              constitue le socle de connaissances indispensable pour maîtriser ce sujet. Les organismes de
              formation certifiés Qualiopi proposent des sessions en présentiel et en ligne.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
              Trouver une formation HACCP près de chez moi
            </Link>
          </div>
        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Allergènes en restauration</h2>
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
    </>
  )
}
