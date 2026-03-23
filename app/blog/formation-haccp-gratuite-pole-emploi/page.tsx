import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Gratuite Pôle Emploi — Guide France Travail 2026",
  description: "Formation HACCP gratuite via France Travail (ex-Pôle Emploi). Éligibilité, financement AIF, démarches, documents. Guide complet demandeurs d'emploi.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-gratuite-pole-emploi` }
}

const FAQ = [
  { question: "La formation HACCP est-elle vraiment gratuite avec France Travail ?", answer: "Oui, la formation HACCP peut être intégralement financée par France Travail (ex-Pôle Emploi) via l'Aide Individuelle à la Formation (AIF). Le demandeur d'emploi n'a aucun reste à charge. Le financement couvre les frais pédagogiques (290-490€) et, dans certains cas, les frais annexes (transport, hébergement). L'accord dépend de la validation du projet professionnel par votre conseiller." },
  { question: "Quelles sont les conditions pour obtenir le financement AIF ?", answer: "Pour bénéficier de l'AIF, vous devez être inscrit comme demandeur d'emploi chez France Travail, avoir un projet professionnel validé dans le secteur de la restauration ou de l'agroalimentaire, et ne pas pouvoir bénéficier d'un autre financement (OPCO, CPF, région). Votre conseiller doit valider que la formation HACCP est nécessaire à votre insertion professionnelle." },
  { question: "Combien de temps faut-il pour obtenir le financement France Travail ?", answer: "Le délai moyen entre la première demande et l'accord de financement est de 2 à 4 semaines. Il faut compter environ 1 semaine pour obtenir le devis de l'organisme de formation, 1 à 2 semaines pour la validation par le conseiller, et quelques jours pour la notification officielle. Anticipez en entamant les démarches au moins 1 mois avant la date de session souhaitée." },
  { question: "Peut-on faire la formation HACCP en ligne avec le financement France Travail ?", answer: "Oui, France Travail finance aussi bien les formations HACCP en présentiel qu'en ligne (e-learning ou classes virtuelles), à condition que l'organisme de formation soit certifié Qualiopi et que le programme respecte le référentiel de 14 heures. Le format en ligne est de plus en plus accepté et facilite l'accès pour les demandeurs d'emploi éloignés des centres de formation." },
  { question: "Quelles alternatives si France Travail refuse le financement ?", answer: "Si l'AIF est refusée, plusieurs alternatives existent : le financement par le Conseil régional (programmes régionaux de formation), la POEI (Préparation Opérationnelle à l'Emploi Individuelle) si un employeur s'engage à vous recruter, les aides de certaines missions locales pour les moins de 26 ans, ou le paiement direct (290-490€, déductible si vous créez votre entreprise)." }
]

export default function FormationHaccpPoleEmploiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Gratuite France Travail", url: "/blog/formation-haccp-gratuite-pole-emploi" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li><li>›</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li><li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Gratuite France Travail</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">💰 FINANCEMENT 100%</div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Gratuite<br />
              <span className="text-yellow-400">via France Travail (ex-Pôle Emploi)</span><br />
              <span className="text-xl font-bold">Guide Complet 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Vous êtes demandeur d&apos;emploi et souhaitez travailler dans la restauration ? La <strong>formation
              hygiène alimentaire HACCP</strong> peut être <strong>financée à 100%</strong> par France Travail grâce à
              l&apos;Aide Individuelle à la Formation (AIF). Voici toutes les étapes pour en bénéficier.
            </p>
          </div>
          <div><LeadForm title="Devis Formation HACCP Gratuite — 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold mb-6">Pourquoi la formation HACCP est indispensable pour travailler en restauration</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depuis le 1er octobre 2012, la loi impose qu&apos;au moins <strong>une personne par établissement de
            restauration commerciale</strong> ait suivi la formation en hygiène alimentaire, communément appelée
            « formation HACCP ». Cette obligation concerne les restaurants traditionnels, fast-foods, snacks,
            food trucks, traiteurs, boulangeries proposant de la consommation sur place, cafétérias et
            tout établissement manipulant des denrées alimentaires destinées à la consommation immédiate.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour un demandeur d&apos;emploi souhaitant se reconvertir dans la restauration ou renforcer son
            employabilité dans ce secteur, la formation HACCP est donc un <strong>prérequis incontournable</strong>.
            Sans cette attestation, il est très difficile de se faire embaucher : les recruteurs du secteur
            CHR (Cafés, Hôtels, Restaurants) la demandent systématiquement, et elle est indispensable
            pour toute création ou reprise d&apos;établissement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            La bonne nouvelle, c&apos;est que cette formation de <strong>14 heures</strong> (2 jours) peut être entièrement
            financée par France Travail pour les demandeurs d&apos;emploi inscrits. Le coût habituel de la
            formation (entre 290€ et 490€ selon l&apos;organisme et le format) est pris en charge à 100%
            via le dispositif AIF. Vous n&apos;avez rien à débourser.
          </p>

          <h2 className="text-2xl font-bold mb-6">Qu&apos;est-ce que l&apos;AIF (Aide Individuelle à la Formation) ?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;<strong>Aide Individuelle à la Formation</strong> est un dispositif de financement proposé par
            France Travail (anciennement Pôle Emploi) pour les demandeurs d&apos;emploi inscrits. Elle permet
            de financer tout ou partie des frais pédagogiques d&apos;une formation qui n&apos;est pas couverte
            par d&apos;autres dispositifs (CPF, OPCO, programmes régionaux).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;AIF intervient en complément ou en substitution d&apos;autres financements. Pour la formation
            HACCP, comme elle n&apos;est plus éligible au CPF depuis janvier 2023, l&apos;AIF est devenue le
            <strong> principal levier de financement</strong> pour les demandeurs d&apos;emploi. Le montant de l&apos;aide
            est plafonné à 8 000€ par an (largement suffisant pour une formation HACCP à 290-490€).
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pendant la formation, le demandeur d&apos;emploi conserve ses droits : <strong>ARE (Allocation d&apos;aide
            au Retour à l&apos;Emploi)</strong> ou <strong>ASS (Allocation de Solidarité Spécifique)</strong>. Si vous
            n&apos;êtes pas indemnisé, vous pouvez bénéficier de la <strong>RFPE (Rémunération des Formations
            de Pôle Emploi)</strong>, d&apos;un montant de 685€ par mois environ. La formation HACCP ne durant
            que 2 jours, l&apos;impact sur votre indemnisation est minimal.
          </p>

          <h2 className="text-2xl font-bold mb-6">Qui est éligible au financement France Travail ?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour bénéficier de l&apos;AIF pour votre formation HACCP, vous devez remplir les conditions suivantes :
          </p>
          <div className="space-y-3 mb-6">
            {[
              { critere: "Inscription à France Travail", detail: "Vous devez être inscrit comme demandeur d'emploi (catégories A, B, C, D ou E). Les personnes en CSP (Contrat de Sécurisation Professionnelle) sont également éligibles." },
              { critere: "Projet professionnel validé", detail: "Votre conseiller France Travail doit valider que la formation HACCP s'inscrit dans votre projet professionnel (restauration, agroalimentaire, création d'entreprise alimentaire)." },
              { critere: "Aucun autre financement disponible", detail: "L'AIF intervient en dernier recours. Votre conseiller vérifiera que vous ne pouvez pas bénéficier d'un financement OPCO (si vous étiez récemment salarié CHR), régional ou autre." },
              { critere: "Organisme certifié Qualiopi", detail: "La formation doit être dispensée par un organisme certifié Qualiopi et enregistré au Répertoire National des Certifications. C'est une condition sine qua non pour le financement." },
            ].map(c => (
              <div key={c.critere} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                <div className="font-bold text-green-800 mb-1">{c.critere}</div>
                <p className="text-sm text-gray-700">{c.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les personnes en <strong>situation de handicap</strong> bénéficient de conditions facilitées : l&apos;Agefiph
            peut compléter le financement France Travail et prendre en charge des frais d&apos;adaptation
            (accessibilité, aménagements). Les <strong>jeunes de moins de 26 ans</strong> inscrits en mission locale
            peuvent également accéder à l&apos;AIF via leur conseiller mission locale, qui transmet la demande
            à France Travail.
          </p>

          <h2 className="text-2xl font-bold mb-6">Démarches étape par étape pour obtenir le financement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voici le processus complet, de la première démarche jusqu&apos;à l&apos;obtention de votre attestation HACCP :
          </p>
          <div className="space-y-4 mb-8">
            {[
              { etape: "Étape 1 : Identifier un organisme de formation", num: "1", desc: "Recherchez un organisme de formation HACCP certifié Qualiopi, proposant des sessions en présentiel près de chez vous ou en ligne. Comparez les prix et les dates. Demandez un devis détaillé mentionnant : intitulé de la formation, durée (14 heures), programme, prix TTC, numéro de déclaration d'activité, certification Qualiopi." },
              { etape: "Étape 2 : Contacter votre conseiller France Travail", num: "2", desc: "Prenez rendez-vous avec votre conseiller référent (en agence ou par téléphone). Expliquez votre projet professionnel dans la restauration et présentez le devis de la formation HACCP. Le conseiller évaluera la cohérence entre la formation et votre projet." },
              { etape: "Étape 3 : Constituer le dossier AIF", num: "3", desc: "Votre conseiller vous aidera à remplir le formulaire de demande AIF. Vous devrez fournir : le devis de l'organisme de formation, le programme détaillé, votre CV à jour, une lettre de motivation expliquant votre projet. Si vous avez une promesse d'embauche, joignez-la : elle renforce considérablement votre dossier." },
              { etape: "Étape 4 : Validation et accord de financement", num: "4", desc: "France Travail examine votre dossier (délai : 1 à 2 semaines). En cas d'accord, vous recevez une notification officielle (par courrier ou sur votre espace personnel). L'organisme de formation reçoit un bon de commande. Vous pouvez alors vous inscrire à la session de votre choix." },
              { etape: "Étape 5 : Suivre la formation (14 heures)", num: "5", desc: "Vous suivez la formation HACCP de 14 heures sur 2 jours (ou en e-learning sur 2 à 3 semaines selon votre rythme). Vous conservez vos allocations pendant la formation. À l'issue de la formation, vous recevez votre attestation officielle de formation en hygiène alimentaire." },
              { etape: "Étape 6 : Après la formation", num: "6", desc: "Transmettez votre attestation à votre conseiller France Travail pour qu'il mette à jour votre dossier. Ajoutez la certification sur votre CV et votre profil LinkedIn. Vous êtes maintenant en conformité pour travailler dans tout établissement de restauration commerciale." },
            ].map(e => (
              <div key={e.num} className="flex gap-4 items-start">
                <span className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shrink-0">{e.num}</span>
                <div className="bg-gray-50 rounded-xl p-4 flex-1">
                  <div className="font-bold text-gray-900 mb-1">{e.etape}</div>
                  <p className="text-sm text-gray-600">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Documents nécessaires pour votre dossier AIF</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour maximiser vos chances d&apos;obtenir le financement rapidement, préparez les documents suivants
            avant votre rendez-vous avec votre conseiller :
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-yellow-800 mb-3">Checklist des documents à préparer</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Devis de l&apos;organisme de formation (mentionnant Qualiopi, 14h, prix TTC)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Programme détaillé de la formation HACCP</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> CV à jour mentionnant votre projet dans la restauration</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Lettre de motivation expliquant pourquoi la formation est nécessaire</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Promesse d&apos;embauche ou offre d&apos;emploi ciblée (si disponible — très recommandé)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Pièce d&apos;identité en cours de validité</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Attestation d&apos;inscription France Travail (disponible sur votre espace personnel)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-6">La POEI : une alternative pour les employeurs qui recrutent</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si un restaurateur souhaite vous embaucher mais exige que vous ayez la formation HACCP au préalable,
            la <strong>POEI (Préparation Opérationnelle à l&apos;Emploi Individuelle)</strong> est un dispositif idéal.
            L&apos;employeur s&apos;engage à vous recruter en CDI, CDD de 12 mois minimum ou contrat de professionnalisation,
            et France Travail finance la formation nécessaire avant l&apos;embauche.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La POEI est particulièrement intéressante car elle combine formation et garantie d&apos;emploi. Le
            financement est quasi automatique dès lors que l&apos;employeur dépose l&apos;offre d&apos;emploi et s&apos;engage
            sur le recrutement. L&apos;OPCO de l&apos;employeur (AKTO pour le secteur CHR) peut co-financer la POEI,
            ce qui facilite encore l&apos;accord. La durée de la POEI peut aller jusqu&apos;à 400 heures, mais pour
            une formation HACCP de 14 heures, la procédure est rapide.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pour mettre en place une POEI, l&apos;employeur doit déposer une offre d&apos;emploi chez France Travail,
            sélectionner le candidat (vous), et remplir conjointement le formulaire POEI avec votre conseiller.
            France Travail et l&apos;OPCO valident le plan de formation, et vous démarrez la formation avant
            votre prise de poste. C&apos;est un dispositif gagnant-gagnant : l&apos;employeur obtient un salarié
            formé et opérationnel, et vous obtenez une formation gratuite assortie d&apos;un emploi.
          </p>

          <h2 className="text-2xl font-bold mb-6">Autres options de financement gratuit pour la formation HACCP</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si le financement via France Travail n&apos;aboutit pas, d&apos;autres pistes permettent d&apos;obtenir
            une formation HACCP gratuite ou à moindre coût :
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { titre: "Conseil régional", desc: "Chaque région propose des programmes de formation pour les demandeurs d'emploi. Les formations sanitaires et hygiène alimentaire figurent souvent dans les catalogues régionaux. Renseignez-vous auprès de votre Conseil régional ou sur le site du CARIF-OREF de votre région.", badge: "Gratuit" },
              { titre: "OPCO AKTO (anciens salariés CHR)", desc: "Si vous avez travaillé récemment dans le secteur CHR, vous pouvez encore bénéficier des droits acquis auprès de l'OPCO AKTO. Contactez-les directement pour vérifier vos droits résiduels, même en tant que demandeur d'emploi.", badge: "Gratuit" },
              { titre: "Missions locales (moins de 26 ans)", desc: "Les missions locales disposent de budgets formation pour les jeunes de 16 à 25 ans. La formation HACCP entre dans le champ des formations éligibles, notamment dans le cadre du CEJ (Contrat d'Engagement Jeune).", badge: "Gratuit" },
              { titre: "Paiement direct (auto-investissement)", desc: "En dernier recours, le paiement direct reste accessible : 290 à 490€ selon l'organisme et le format. Si vous créez votre entreprise, ce coût est déductible de vos charges. Certains organismes proposent un paiement en 2 ou 3 fois.", badge: "290-490€" },
            ].map(f => (
              <div key={f.titre} className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-bold text-gray-900">{f.titre}</div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${f.badge === "Gratuit" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{f.badge}</span>
                </div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Conseils pour maximiser vos chances d&apos;obtenir le financement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;accord de financement AIF n&apos;est pas automatique. Il dépend de l&apos;appréciation de votre conseiller
            et de la cohérence de votre projet. Voici les conseils qui font la différence :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Préparez un projet professionnel solide</strong> : ne demandez pas la formation HACCP « au cas où ».
              Montrez que vous avez un projet concret dans la restauration : offres d&apos;emploi ciblées, promesse
              d&apos;embauche, projet de création d&apos;entreprise, stage prévu.
            </li>
            <li>
              <strong>Obtenez une promesse d&apos;embauche</strong> : c&apos;est l&apos;argument le plus convaincant. Si un restaurateur
              est prêt à vous embaucher à condition que vous ayez la formation HACCP, demandez-lui une lettre
              de promesse d&apos;embauche. Le taux d&apos;acceptation de l&apos;AIF passe à plus de 90% avec ce document.
            </li>
            <li>
              <strong>Choisissez un organisme certifié Qualiopi</strong> : c&apos;est une condition obligatoire, mais certains
              organismes ont aussi une meilleure réputation auprès de France Travail. Privilégiez les organismes
              avec lesquels France Travail a déjà travaillé dans votre région.
            </li>
            <li>
              <strong>Demandez le devis avant le rendez-vous</strong> : arrivez avec un dossier complet (devis, programme,
              dates de session). Un dossier prêt montre votre motivation et accélère le traitement.
            </li>
            <li>
              <strong>Anticipez les délais</strong> : ne vous y prenez pas la veille de la session. Comptez 3 à 4 semaines
              entre la première démarche et le début effectif de la formation. Planifiez en conséquence.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Calendrier type : du premier contact à l&apos;attestation</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold">Semaine</th>
                  <th className="text-left p-4 font-semibold">Action</th>
                  <th className="text-left p-4 font-semibold">Détail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["S1", "Recherche organisme + devis", "Comparer 2-3 organismes Qualiopi, obtenir les devis et programmes"],
                  ["S2", "RDV conseiller France Travail", "Présenter le projet + devis, remplir le formulaire AIF"],
                  ["S2-S3", "Instruction du dossier", "France Travail étudie la demande (1 à 2 semaines)"],
                  ["S3-S4", "Notification d'accord", "Réception de l'accord AIF, inscription à la session"],
                  ["S4-S5", "Formation HACCP (14h)", "2 jours en présentiel ou 2-3 semaines en e-learning"],
                  ["S5", "Attestation reçue", "Attestation officielle, mise à jour du CV et du dossier France Travail"],
                ].map(([semaine, action, detail]) => (
                  <tr key={semaine} className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-blue-700">{semaine}</td>
                    <td className="p-4 font-medium text-gray-700">{action}</td>
                    <td className="p-4 text-gray-600">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-blue-800 mb-2">Obtenez votre devis gratuit en 24h</h3>
            <p className="text-sm text-gray-700 mb-3">
              Besoin d&apos;un <strong>devis détaillé pour votre dossier France Travail</strong> ? Nous travaillons avec
              des organismes certifiés Qualiopi dans toute la France. Recevez un devis conforme aux exigences
              de France Travail sous 24 heures, gratuitement et sans engagement.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
              Demander un devis gratuit pour France Travail
            </Link>
          </div>
        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP gratuite France Travail</h2>
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
