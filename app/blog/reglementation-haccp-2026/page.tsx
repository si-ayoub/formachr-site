import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Réglementation HACCP 2026 — Nouvelles Obligations pour les Restaurateurs",
  description: "Évolutions réglementaires HACCP 2026 : contrôles renforcés, amendes, nouvelles obligations documentation pour restaurateurs.",
  alternates: { canonical: `${SITE_URL}/blog/reglementation-haccp-2026` }
}

const FAQ = [
  { question: "Quelles sont les principales évolutions réglementaires HACCP en 2026 ?", answer: "En 2026, les principales évolutions concernent le renforcement des contrôles sanitaires par la DDPP (augmentation de 15 % du nombre d'inspections), l'obligation de dématérialiser le Plan de Maîtrise Sanitaire (PMS) pour les établissements de plus de 10 salariés, le durcissement des sanctions avec des amendes administratives pouvant atteindre 10 000 € (au lieu de 1 500 € en 5e classe), et l'extension de l'obligation de formation HACCP à certains secteurs jusqu'ici exemptés." },
  { question: "Quelles sont les amendes en cas de non-conformité HACCP en 2026 ?", answer: "Les sanctions ont été considérablement renforcées. L'absence de formation HACCP reste une contravention de 5e classe (1 500 €, 3 000 € en récidive). Toutefois, les manquements graves à l'hygiène alimentaire (rupture de chaîne du froid, absence de traçabilité, PMS inexistant) peuvent désormais faire l'objet d'amendes administratives allant jusqu'à 10 000 € par infraction constatée. En cas de mise en danger de la santé publique, des poursuites pénales avec fermeture judiciaire sont possibles." },
  { question: "Le PMS doit-il être numérisé en 2026 ?", answer: "À partir de 2026, les établissements de restauration employant plus de 10 salariés sont encouragés à dématérialiser leur PMS (Plan de Maîtrise Sanitaire). Si cette numérisation n'est pas encore juridiquement obligatoire pour tous, les inspecteurs DDPP valorisent fortement l'utilisation d'outils numériques (relevés de température automatisés, registres dématérialisés, photos horodatées) qui facilitent les contrôles et démontrent une gestion rigoureuse de l'hygiène." },
  { question: "La formation HACCP de 14 heures est-elle toujours suffisante en 2026 ?", answer: "La durée de 14 heures reste le minimum légal pour la formation en hygiène alimentaire. Cependant, depuis l'arrêté du 12 février 2024, un minimum de 4 heures de mise en pratique est requis. En 2026, les organismes de formation Qualiopi intègrent de plus en plus des modules complémentaires sur la gestion des allergènes, la lutte contre le gaspillage alimentaire (loi AGEC) et les nouvelles exigences de traçabilité numérique." },
  { question: "Les dark kitchens et cuisines fantômes sont-elles soumises aux mêmes règles HACCP ?", answer: "Oui. Les dark kitchens (cuisines dédiées exclusivement à la livraison, sans salle de restaurant) sont des établissements de restauration commerciale au sens du décret n°2011-731. Elles sont soumises aux mêmes obligations : formation HACCP de 14 heures, PMS complet, respect des températures réglementaires, traçabilité, et déclaration d'activité auprès de la DDPP. Les contrôles DDPP se renforcent dans ce secteur en pleine expansion." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Réglementation HACCP 2026", url: "/blog/reglementation-haccp-2026" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Réglementation HACCP 2026</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              MISE À JOUR 2026 — Nouvelles obligations
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Réglementation HACCP 2026<br />
              <span className="text-yellow-400">Nouvelles Obligations pour les Restaurateurs</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Décryptage complet des évolutions réglementaires HACCP en 2026 : contrôles renforcés, nouvelles amendes, obligations de documentation et impact sur votre établissement.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["⚠️ Contrôles renforcés","💶 Amendes jusqu'à 10 000 €","📱 PMS numérisé","📋 Documentation obligatoire"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Les évolutions réglementaires HACCP en 2026</h2>

          <p>
            L&apos;année 2026 marque un tournant significatif pour la réglementation de l&apos;hygiène alimentaire en France. Les pouvoirs publics, constatant une augmentation des toxi-infections alimentaires collectives (TIAC) de <strong>12 % entre 2022 et 2025</strong>, ont décidé de renforcer l&apos;arsenal réglementaire et les moyens de contrôle. Plusieurs textes entrés en vigueur depuis 2024 produisent leurs pleins effets en 2026, modifiant le quotidien des restaurateurs, traiteurs et professionnels de l&apos;alimentation.
          </p>

          <p>
            Le cadre réglementaire fondamental reste inchangé : le <strong>règlement CE n°852/2004</strong> (paquet hygiène), le <strong>décret n°2011-731</strong> (obligation de formation de 14 heures) et l&apos;<strong>arrêté du 21 décembre 2009</strong> (températures de conservation) constituent toujours le socle juridique. Ce sont les <strong>modalités d&apos;application, de contrôle et de sanction</strong> qui évoluent de manière significative.
          </p>

          <p>
            Le <strong>Plan National de Contrôle Pluriannuel (PNCP) 2025-2029</strong> de la DGAL (Direction Générale de l&apos;Alimentation) prévoit une augmentation de <strong>15 % du nombre d&apos;inspections</strong> dans le secteur de la restauration commerciale d&apos;ici 2027. Les services de la DDPP disposent de moyens renforcés, avec le recrutement de contrôleurs supplémentaires et la modernisation des outils d&apos;inspection (tablettes connectées, accès aux bases de données en temps réel).
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-8">
            <p className="text-red-900 font-medium">
              ⚠️ <strong>Alerte :</strong> Depuis 2026, les résultats des contrôles sanitaires sont <strong>publiés sur la plateforme Alim&apos;confiance</strong> du Ministère de l&apos;Agriculture. Chaque établissement reçoit une note (très satisfaisant, satisfaisant, à améliorer, à corriger de manière urgente) visible par le grand public. Un mauvais résultat peut avoir un impact direct sur votre réputation et votre chiffre d&apos;affaires.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Contrôles sanitaires renforcés : ce qui change concrètement</h2>

          <p>
            Les contrôles de la <strong>DDPP</strong> (Direction Départementale de la Protection des Populations) deviennent plus fréquents et plus approfondis en 2026. Alors qu&apos;un restaurant était contrôlé en moyenne tous les <strong>5 à 7 ans</strong> auparavant, l&apos;objectif est de passer à un contrôle tous les <strong>3 à 4 ans</strong> pour les établissements à risque standard, et <strong>tous les ans</strong> pour ceux ayant reçu une note « à améliorer » ou « à corriger de manière urgente » lors du précédent contrôle.
          </p>

          <p>
            Les inspecteurs disposent désormais de <strong>tablettes connectées</strong> leur permettant d&apos;accéder en temps réel à l&apos;historique de l&apos;établissement, aux résultats d&apos;analyses précédentes et au registre national des formations HACCP. Cette numérisation accélère les inspections et permet de croiser les informations plus efficacement. Le restaurateur ne peut plus prétendre avoir « perdu » son attestation de formation — l&apos;inspecteur peut vérifier l&apos;information directement dans la base DRAAF.
          </p>

          <p>
            Les <strong>contrôles inopinés en dehors des heures d&apos;ouverture</strong> (pendant la mise en place, le nettoyage, les livraisons matinales) se multiplient. Ces contrôles permettent de vérifier les pratiques réelles des équipes, en dehors des conditions « optimales » qui peuvent être mises en scène lors d&apos;un contrôle annoncé. La DDPP peut également effectuer des <strong>contrôles ciblés suite à un signalement</strong> de consommateur via la plateforme SignalConso.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Nouvelles amendes et sanctions en 2026</h2>

          <p>
            Le régime des sanctions a été considérablement durci. L&apos;absence de formation HACCP reste une <strong>contravention de 5e classe</strong> (1 500 €, doublée à 3 000 € en cas de récidive). Toutefois, les manquements graves à l&apos;hygiène alimentaire peuvent désormais faire l&apos;objet de <strong>sanctions administratives</strong> beaucoup plus lourdes, sans passer par le juge pénal.
          </p>

          <p>
            La <strong>loi du 22 mars 2024</strong> relative à la sécurité sanitaire des aliments a instauré un régime d&apos;amendes administratives pouvant atteindre <strong>10 000 € par infraction constatée</strong> pour les manquements suivants : absence de Plan de Maîtrise Sanitaire, défaut de traçabilité, non-respect des températures réglementaires, absence de formation du personnel. Ces amendes sont prononcées directement par le préfet sur proposition de la DDPP, sans nécessité d&apos;un jugement.
          </p>

          <p>
            En cas de <strong>mise en danger de la santé publique</strong> (TIAC avérée, conditions d&apos;hygiène gravement défaillantes), les sanctions pénales restent applicables : fermeture judiciaire de l&apos;établissement, interdiction d&apos;exercer, et peines pouvant aller jusqu&apos;à <strong>2 ans d&apos;emprisonnement et 150 000 € d&apos;amende</strong> en cas de blessures involontaires (article 222-19 du Code pénal).
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8">
            <h3 className="font-bold text-blue-800 mb-3">Barème des sanctions HACCP 2026</h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Absence formation HACCP : <strong>1 500 € (3 000 € récidive)</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> PMS absent ou incomplet : <strong>jusqu&apos;à 10 000 €</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Non-respect chaîne du froid : <strong>jusqu&apos;à 10 000 €</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Défaut de traçabilité : <strong>jusqu&apos;à 10 000 €</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Mise en danger santé publique : <strong>jusqu&apos;à 150 000 € + 2 ans prison</strong></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">•</span> Fermeture administrative : <strong>immédiate sur décision préfectorale</strong></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligations de documentation renforcées</h2>

          <p>
            En 2026, le <strong>Plan de Maîtrise Sanitaire (PMS)</strong> doit être plus complet et mieux structuré que jamais. Les inspecteurs DDPP vérifient systématiquement la présence et la mise à jour des documents suivants : le <strong>plan de nettoyage-désinfection</strong> (avec fréquences, produits, dosages, responsables), les <strong>relevés de température</strong> quotidiens (chambres froides, vitrines, plats chauds), le <strong>plan de lutte contre les nuisibles</strong> (contrat avec un prestataire agréé), les <strong>fiches de réception</strong> des matières premières, le <strong>registre de traçabilité</strong> et les <strong>procédures de gestion des non-conformités</strong>.
          </p>

          <p>
            La tendance forte de 2026 est la <strong>numérisation du PMS</strong>. Bien que la loi n&apos;impose pas encore de format numérique pour tous les établissements, les inspecteurs valorisent fortement les outils connectés : sondes de température avec enregistrement automatique et alertes SMS, applications de gestion du PMS avec photos horodatées, registres de nettoyage dématérialisés avec signature électronique. Ces outils offrent une traçabilité plus fiable et plus difficile à falsifier que les registres papier.
          </p>

          <p>
            L&apos;obligation d&apos;<strong>affichage des résultats de contrôle</strong> via la plateforme Alim&apos;confiance est désormais généralisée. Les consommateurs peuvent scanner un QR code affiché à l&apos;entrée de l&apos;établissement pour consulter le dernier résultat d&apos;inspection. Cette transparence impose aux restaurateurs une <strong>vigilance permanente</strong> sur leurs pratiques d&apos;hygiène.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Impact sur la formation HACCP</h2>

          <p>
            La formation HACCP de <strong>14 heures</strong> reste le standard minimal en 2026, mais son contenu a évolué pour intégrer les nouvelles exigences. Depuis l&apos;arrêté du 12 février 2024, un minimum de <strong>4 heures de mise en pratique</strong> est requis, portant sur des exercices concrets : rédaction d&apos;un plan HACCP simplifié, simulation de contrôle DDPP, analyse d&apos;un relevé de température critique, gestion d&apos;une non-conformité.
          </p>

          <p>
            Les organismes de formation certifiés <strong>Qualiopi</strong> intègrent désormais des modules complémentaires sur la <strong>gestion des allergènes</strong> (renforcement des obligations d&apos;information depuis le règlement UE n°1169/2011), la <strong>lutte contre le gaspillage alimentaire</strong> (loi AGEC de 2020, obligation de don alimentaire pour les établissements de restauration collective de plus de 200 couverts/jour) et les <strong>nouvelles pratiques de livraison</strong> (dark kitchens, plateformes de commande en ligne).
          </p>

          <p>
            Pour vous mettre en conformité et préparer votre équipe aux nouvelles obligations 2026, demandez un <Link href="/devis" className="text-blue-600 hover:underline">devis gratuit</Link> pour une formation HACCP adaptée à votre établissement. Consultez aussi nos articles sur les <Link href="/blog/formation-haccp-prix-2026" className="text-blue-600 hover:underline">prix de la formation HACCP 2026</Link>, le <Link href="/blog/controle-sanitaire-restaurant" className="text-blue-600 hover:underline">contrôle sanitaire en restaurant</Link> et le <Link href="/blog/plan-maitrise-sanitaire-pms" className="text-blue-600 hover:underline">guide complet du PMS</Link>.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Réglementation HACCP 2026</h2>
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
          <h2 className="text-2xl font-bold mb-3">Mettez-vous en conformité HACCP 2026</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés Qualiopi dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
