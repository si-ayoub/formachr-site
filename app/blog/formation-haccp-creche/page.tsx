import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Crèche — Alimentation des Nourrissons et Jeunes Enfants",
  description: "Formation HACCP pour crèches et structures petite enfance. Spécificités nourrissons, allergènes, préparation biberons.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-creche` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour le personnel de crèche ?", answer: "Oui. Les crèches, micro-crèches, haltes-garderies et jardins d'enfants sont des établissements de restauration collective soumis au règlement CE n°852/2004. Le personnel préparant ou distribuant les repas doit être formé à l'hygiène alimentaire. Le décret n°2010-613 du 7 juin 2010 relatif aux EAJE (Établissements d'Accueil du Jeune Enfant) renforce cette obligation en exigeant que le personnel en charge de l'alimentation ait des compétences spécifiques en nutrition et hygiène infantile." },
  { question: "Comment préparer les biberons en respectant les normes HACCP ?", answer: "La préparation des biberons est un CCP critique en crèche. Le lait infantile en poudre doit être reconstitué avec de l'eau portée à 70 °C minimum (pour détruire les éventuelles bactéries Cronobacter sakazakii présentes dans la poudre), puis refroidi rapidement à température de consommation (37 °C). Le biberon préparé doit être consommé dans l'heure ou conservé à +4 °C maximum pendant 24 heures. Le matériel (biberons, tétines, doseurs) doit être stérilisé ou lavé en lave-vaisselle à +65 °C minimum." },
  { question: "Quels allergènes surveiller en crèche ?", answer: "La diversification alimentaire des nourrissons (à partir de 4-6 mois) expose les jeunes enfants à un risque accru de réactions allergiques. Les allergènes les plus fréquents chez le nourrisson sont le lait de vache, les œufs, l'arachide, les fruits à coque, le poisson, le blé (gluten), le soja et le sésame. La crèche doit disposer d'un Projet d'Accueil Individualisé (PAI) pour chaque enfant allergique, rédigé par le médecin traitant ou l'allergologue, et le personnel doit être formé à l'utilisation du stylo auto-injecteur d'adrénaline." },
  { question: "Quel est le financement de la formation HACCP en crèche ?", answer: "Les crèches municipales peuvent mobiliser le budget formation du CNFPT. Les crèches associatives et privées relèvent généralement de l'OPCO EP (Entreprises de Proximité) ou de l'OPCO Santé selon leur convention collective. La CAF peut cofinancer les formations liées à l'amélioration de la qualité d'accueil dans le cadre de la Prestation de Service Unique (PSU). Le coût moyen est de 250 € à 400 € pour 14 heures." },
  { question: "Quelles sont les températures réglementaires pour les repas en crèche ?", answer: "Les repas servis en crèche doivent respecter des températures strictes : plats chauds à +63 °C minimum au moment du service, produits froids à +3 °C maximum (compotes, yaourts, fromages). Les biberons reconstitués doivent être à 37 °C pour le service ou conservés à +4 °C. La remise en température des plats livrés par un prestataire doit atteindre +63 °C à cœur en moins d'une heure. Les échantillons témoins sont obligatoires et doivent être conservés 5 jours à +3 °C." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Crèche", url: "/blog/formation-haccp-creche" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Crèche</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              PETITE ENFANCE — Normes spécifiques
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Crèche<br />
              <span className="text-yellow-400">Alimentation des Nourrissons et Jeunes Enfants</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Guide complet sur la formation HACCP en crèche : préparation des biberons, diversification alimentaire, gestion des allergènes et protocoles pour les tout-petits.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ Formation adaptée petite enfance","🍼 Protocole biberons","⚠️ Allergènes nourrissons","📋 PAI obligatoire"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="creche" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Pourquoi la formation HACCP est vitale en crèche</h2>

          <p>
            Les crèches, micro-crèches, haltes-garderies et jardins d&apos;enfants accueillent des enfants de <strong>2 mois et demi à 3 ans</strong> — une population extrêmement vulnérable sur le plan alimentaire. Le système immunitaire des nourrissons est encore immature, leur flore intestinale en cours de développement, et leur poids corporel réduit rend les conséquences d&apos;une contamination alimentaire proportionnellement beaucoup plus graves que chez l&apos;adulte. Une quantité infime de bactéries pathogènes peut provoquer une infection sévère chez un bébé de quelques mois.
          </p>

          <p>
            En France, les structures d&apos;accueil de la petite enfance servent entre <strong>2 et 4 repas par jour</strong> à chaque enfant (petit-déjeuner, déjeuner, goûter, parfois dîner pour les crèches à horaires étendus), sans compter les biberons pour les plus petits. La diversité des âges au sein d&apos;une même structure implique une diversité de préparations : <strong>biberons de lait infantile</strong> pour les 0-6 mois, <strong>purées et compotes lisses</strong> pour les 6-9 mois, <strong>textures écrasées à la fourchette</strong> pour les 9-12 mois, et <strong>repas en morceaux</strong> pour les plus grands. Chaque catégorie représente des risques sanitaires spécifiques.
          </p>

          <p>
            Le <strong>règlement CE n°852/2004</strong> s&apos;applique sans restriction aux cuisines de crèche. Le <strong>décret n°2010-613 du 7 juin 2010</strong> relatif aux EAJE (Établissements d&apos;Accueil du Jeune Enfant) ajoute des exigences supplémentaires en matière de qualité nutritionnelle et de sécurité alimentaire pour les jeunes enfants. La <strong>PMI</strong> (Protection Maternelle et Infantile) effectue des contrôles réguliers et vérifie la conformité des pratiques d&apos;hygiène alimentaire.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 my-8">
            <p className="text-yellow-900 font-medium">
              ⚠️ <strong>Alerte sécurité :</strong> La bactérie <strong>Cronobacter sakazakii</strong> (anciennement Enterobacter sakazakii) peut être présente dans les laits infantiles en poudre. Elle est responsable de méningites néonatales graves. C&apos;est pourquoi l&apos;OMS recommande de reconstituer les biberons avec de l&apos;eau à <strong>+70 °C minimum</strong> pour détruire cet agent pathogène, puis de refroidir rapidement à température de consommation.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">La préparation des biberons : un protocole HACCP strict</h2>

          <p>
            La préparation des biberons est sans doute le <strong>CCP le plus critique</strong> en crèche. Le lait infantile en poudre n&apos;est pas un produit stérile : il peut contenir des bactéries pathogènes comme <strong>Cronobacter sakazakii</strong> ou <strong>Salmonella</strong>. Le protocole de préparation doit être scrupuleusement respecté pour garantir la sécurité des nourrissons.
          </p>

          <p>
            L&apos;eau utilisée pour la reconstitution doit être portée à <strong>+70 °C minimum</strong> (recommandation OMS) avant l&apos;ajout de la poudre. Cette température permet de détruire les bactéries potentiellement présentes dans le lait en poudre. Le biberon est ensuite <strong>refroidi rapidement</strong> sous un filet d&apos;eau froide jusqu&apos;à atteindre la température de consommation (<strong>37 °C</strong>), vérifiée à l&apos;intérieur du poignet ou au thermomètre.
          </p>

          <p>
            Un biberon préparé doit être <strong>consommé dans l&apos;heure</strong> à température ambiante, ou conservé au réfrigérateur à <strong>+4 °C maximum pendant 24 heures</strong>. Un biberon entamé et non terminé par l&apos;enfant doit être <strong>jeté immédiatement</strong> — il ne doit en aucun cas être conservé pour un usage ultérieur, car la salive de l&apos;enfant a contaminé le lait restant.
          </p>

          <p>
            Le matériel (biberons, tétines, anneaux, doseurs) doit être <strong>lavé au lave-vaisselle</strong> à +65 °C minimum ou stérilisé à la vapeur. Le plan de travail dédié à la préparation des biberons doit être nettoyé et désinfecté avant chaque préparation. Un registre de traçabilité des biberons (heure de préparation, numéro de lot de la poudre, nom de l&apos;enfant) est fortement recommandé.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Diversification alimentaire et gestion des allergènes</h2>

          <p>
            La <strong>diversification alimentaire</strong> des nourrissons débute entre 4 et 6 mois, sur recommandation du pédiatre. Cette période est particulièrement sensible en matière d&apos;allergies alimentaires : c&apos;est lors de l&apos;introduction de nouveaux aliments que les premières réactions allergiques se manifestent. Les crèches doivent mettre en place un protocole rigoureux d&apos;<strong>introduction des aliments</strong> en coordination avec les parents et le médecin de la crèche.
          </p>

          <p>
            Les <strong>allergènes les plus fréquents chez le nourrisson</strong> sont le lait de vache (première cause d&apos;allergie alimentaire chez le nourrisson), les œufs, l&apos;arachide, les fruits à coque, le poisson, le blé (gluten), le soja et le sésame. La crèche doit disposer d&apos;un <strong>Projet d&apos;Accueil Individualisé (PAI)</strong> pour chaque enfant présentant une allergie diagnostiquée. Ce document, rédigé par l&apos;allergologue ou le pédiatre, précise les aliments interdits, les symptômes à surveiller, la conduite à tenir en cas de réaction allergique et l&apos;éventuelle prescription d&apos;un <strong>stylo auto-injecteur d&apos;adrénaline</strong>.
          </p>

          <p>
            Le personnel de crèche — y compris les auxiliaires de puériculture et les éducateurs de jeunes enfants qui peuvent être amenés à donner les repas — doit être <strong>formé à la reconnaissance des signes d&apos;allergie alimentaire</strong> (urticaire, œdème des lèvres, difficultés respiratoires, vomissements) et aux gestes d&apos;urgence, notamment l&apos;utilisation du stylo auto-injecteur et l&apos;appel au 15 (SAMU).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Les températures réglementaires en crèche</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8">
            <h3 className="font-bold text-blue-800 mb-3">Températures à respecter en crèche</h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Plats chauds au moment du service : <strong>+63 °C minimum</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Produits froids (compotes, yaourts) : <strong>+3 °C maximum</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Biberons reconstitués conservés : <strong>+4 °C maximum (24h max)</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Eau de reconstitution biberon : <strong>+70 °C minimum</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Remise en température (liaison froide) : <strong>+63 °C en moins d&apos;1h</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Stockage chambre froide : <strong>0 à +3 °C</strong></li>
            </ul>
          </div>

          <p>
            La plupart des crèches fonctionnent en <strong>liaison froide</strong> : les repas sont préparés par un prestataire extérieur (cuisine centrale), livrés réfrigérés et remis en température sur place. La remise en température est un CCP majeur : le plat doit atteindre <strong>+63 °C à cœur en moins d&apos;une heure</strong>. Si ce seuil n&apos;est pas atteint dans le temps imparti, le plat doit être jeté.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Hygiène du personnel et protocoles spécifiques</h2>

          <p>
            Le personnel en contact avec l&apos;alimentation des nourrissons doit respecter des règles d&apos;hygiène <strong>renforcées</strong> par rapport à la restauration classique. Le lavage des mains doit être effectué avec un <strong>savon bactéricide</strong> et un séchage avec des essuie-mains à usage unique avant chaque manipulation d&apos;aliment, après chaque change de couche, après chaque passage aux toilettes et après s&apos;être mouché. Des <strong>gants à usage unique</strong> sont recommandés pour la distribution des repas aux nourrissons.
          </p>

          <p>
            La <strong>tenue de travail</strong> du personnel de cuisine en crèche comprend une blouse propre (changée quotidiennement), une charlotte couvrant l&apos;intégralité de la chevelure, et des chaussures dédiées réservées à la cuisine. Les bijoux (bagues, bracelets, montres) sont interdits lors de la manipulation des aliments. Le personnel malade (gastro-entérite, infection cutanée, angine) doit être écarté de la préparation et du service des repas jusqu&apos;à la guérison complète.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Financement de la formation HACCP en crèche</h2>

          <p>
            Le financement de la formation HACCP pour le personnel de crèche dépend du statut de la structure. Les <strong>crèches municipales</strong> peuvent solliciter le <strong>CNFPT</strong> (Centre National de la Fonction Publique Territoriale) pour les agents territoriaux. Les <strong>crèches associatives</strong> relèvent de l&apos;<strong>OPCO EP</strong> ou de l&apos;<strong>OPCO Santé</strong> selon leur convention collective. Les <strong>micro-crèches privées</strong> dépendent généralement de l&apos;OPCO EP.
          </p>

          <p>
            La <strong>CAF</strong> (Caisse d&apos;Allocations Familiales) peut cofinancer les formations liées à l&apos;amélioration de la qualité d&apos;accueil dans le cadre de la <strong>Prestation de Service Unique (PSU)</strong>. Certaines CAF départementales proposent des <strong>appels à projets qualité</strong> incluant un volet formation hygiène alimentaire. Le coût moyen d&apos;une formation HACCP adaptée aux crèches se situe entre <strong>250 € et 400 €</strong> par stagiaire.
          </p>

          <p>
            Pour obtenir un devis adapté à votre structure, consultez notre page <Link href="/devis" className="text-blue-600 hover:underline">demande de devis gratuit</Link>. Retrouvez aussi nos articles sur la <Link href="/blog/haccp-restauration-collective" className="text-blue-600 hover:underline">démarche HACCP en restauration collective</Link> et sur le <Link href="/blog/financer-formation-haccp-opco" className="text-blue-600 hover:underline">financement OPCO</Link>.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Crèche</h2>
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
          <h2 className="text-2xl font-bold mb-3">Formez votre personnel de crèche à l&apos;HACCP</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Formation adaptée petite enfance — Financement CAF/OPCO</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
