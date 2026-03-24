import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Pôle Emploi — AIF et France Travail 2026",
  description: "Financez votre formation HACCP avec France Travail (ex Pôle Emploi). Aide Individuelle à la Formation (AIF), conditions d'éligibilité, montants et démarches pour les demandeurs d'emploi. Guide complet 2026.",
  alternates: { canonical: `${SITE_URL}/financement-pole-emploi` }
}

const FAQ = [
  { question: "Suis-je éligible à l'AIF de France Travail pour financer ma formation HACCP ?", answer: "L'Aide Individuelle à la Formation (AIF) est accessible à tous les demandeurs d'emploi inscrits à France Travail (ex Pôle Emploi), qu'ils soient indemnisés ou non. Les bénéficiaires du CSP (Contrat de Sécurisation Professionnelle) et les personnes en accompagnement CRP ou CTP peuvent également en bénéficier. La formation doit être validée par votre conseiller France Travail." },
  { question: "Quel montant l'AIF couvre-t-elle pour la formation HACCP ?", answer: "L'AIF peut couvrir l'intégralité du coût pédagogique de la formation HACCP, soit entre 250 et 450 euros en moyenne. Il n'y a pas de plafond fixe pour l'AIF, le montant est déterminé au cas par cas en fonction du devis présenté et de la cohérence avec votre projet professionnel. Le financement est versé directement à l'organisme de formation." },
  { question: "Quelles sont les étapes pour obtenir l'AIF de France Travail ?", answer: "Contactez votre conseiller France Travail pour valider votre projet de formation HACCP. Obtenez un devis auprès d'un organisme certifié Qualiopi. Votre conseiller saisit la demande d'AIF sur le portail Kairos. Vous recevez une notification d'accord ou de refus sous 2 à 3 semaines. En cas d'accord, inscrivez-vous à la session de formation et transmettez les justificatifs à France Travail." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Financement", url: "/financement-pole-emploi" },
        { name: "Pôle Emploi", url: "/financement-pole-emploi" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Financement France Travail (Pôle Emploi)",
        description: "Financez votre formation HACCP avec l'AIF de France Travail. Demandeurs d'emploi, CSP, démarches et montants.",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/financement-pole-emploi" className="hover:text-blue-600">Financement</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Pôle Emploi</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              🏛️ FINANCEMENT FRANCE TRAVAIL (AIF)
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">France Travail / Pôle Emploi</span><br />
              <span className="text-xl font-bold">Aide Individuelle à la Formation (AIF) 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">Demandeur d&apos;emploi ? France Travail (ex Pôle Emploi) finance votre formation HACCP via l&apos;AIF. Prise en charge totale, aucun reste à charge.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ AIF jusqu'à 100%","📋 Demandeurs d'emploi","💰 0€ de reste à charge","⚡ Accord sous 2-3 semaines"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="pole-emploi" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP avec France Travail — Guide AIF complet 2026</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              🏛️ <strong>Important :</strong> Depuis janvier 2024, Pôle Emploi est devenu <strong>France Travail</strong>. L&apos;AIF (Aide Individuelle
              à la Formation) reste le principal dispositif de financement pour les demandeurs d&apos;emploi souhaitant suivre une formation HACCP.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Si vous êtes <strong>demandeur d&apos;emploi</strong> et souhaitez vous lancer dans la restauration, la vente alimentaire ou l&apos;agroalimentaire, la <strong>formation HACCP en hygiène alimentaire</strong> est une obligation légale incontournable. France Travail (ex Pôle Emploi) propose l&apos;<strong>Aide Individuelle à la Formation (AIF)</strong>, un dispositif qui peut financer intégralement votre formation, sans aucun reste à charge.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Qu&apos;est-ce que l&apos;AIF ?</h3>
            <p>L&apos;<strong>Aide Individuelle à la Formation (AIF)</strong> est un financement accordé par France Travail lorsqu&apos;aucun autre dispositif (OPCO, CPF, Conseil Régional) ne peut prendre en charge la formation. Elle couvre les <strong>frais pédagogiques</strong> de la formation, c&apos;est-à-dire le coût facturé par l&apos;organisme de formation. Le montant est déterminé au cas par cas, en fonction du devis présenté et de la cohérence avec votre projet professionnel.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Qui peut bénéficier de l&apos;AIF ?</h3>
            <p>L&apos;AIF s&apos;adresse à plusieurs publics :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Demandeurs d&apos;emploi inscrits à France Travail</strong>, qu&apos;ils soient indemnisés (ARE) ou non.</li>
              <li><strong>Bénéficiaires du CSP</strong> (Contrat de Sécurisation Professionnelle) suite à un licenciement économique.</li>
              <li><strong>Personnes en accompagnement CRP ou CTP</strong> (Convention de Reclassement Personnalisé, Contrat de Transition Professionnelle).</li>
              <li><strong>Créateurs ou repreneurs d&apos;entreprise</strong> inscrits à France Travail et ayant un projet dans la restauration ou l&apos;alimentation.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Montants et prise en charge</h3>
            <p>L&apos;AIF n&apos;a pas de plafond fixe réglementaire. Le montant accordé dépend du <strong>coût réel de la formation</strong> et de sa pertinence par rapport à votre projet de retour à l&apos;emploi. Pour une formation HACCP dont le coût moyen se situe entre 250 et 450&nbsp;euros, l&apos;AIF couvre généralement <strong>100&nbsp;% des frais pédagogiques</strong>. Le financement est versé directement à l&apos;organisme de formation, vous n&apos;avez aucune avance à faire.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Étapes pour obtenir l&apos;AIF</h3>
            <p>Voici la procédure à suivre pour bénéficier de l&apos;AIF de France Travail :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Échangez avec votre conseiller France Travail</strong> pour lui présenter votre projet professionnel dans la restauration ou l&apos;alimentation et justifier le besoin de la formation HACCP.</li>
              <li><strong>Obtenez un devis détaillé</strong> auprès d&apos;un organisme de formation certifié Qualiopi et agréé DRAAF. Demandez-nous un devis gratuit pour accélérer cette étape.</li>
              <li><strong>Votre conseiller saisit la demande d&apos;AIF</strong> sur le portail Kairos, en joignant le devis et le programme de formation.</li>
              <li><strong>Délai de traitement</strong> : comptez 2 à 3 semaines pour recevoir la notification d&apos;accord ou de refus.</li>
              <li><strong>En cas d&apos;accord</strong>, inscrivez-vous à la prochaine session disponible et suivez les 14 heures de formation.</li>
              <li><strong>Après la formation</strong>, transmettez l&apos;attestation de présence et la facture à France Travail pour finaliser le dossier.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Maintien des allocations pendant la formation</h3>
            <p>Bonne nouvelle : pendant toute la durée de votre formation HACCP (1,5 à 2 jours), vous conservez vos <strong>allocations chômage (ARE)</strong> ou percevez la <strong>Rémunération de Formation France Travail (RFFT)</strong> si vous n&apos;êtes pas indemnisé. Votre statut de demandeur d&apos;emploi est maintenu et la formation est considérée comme un acte positif de recherche d&apos;emploi.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Combiner AIF et CPF</h3>
            <p>Si votre solde CPF est insuffisant pour couvrir la totalité du coût de la formation, France Travail peut compléter via l&apos;AIF. Cette <strong>complémentarité AIF + CPF</strong> permet de financer des formations plus coûteuses. Pour la formation HACCP, le CPF seul suffit généralement, mais cette option reste possible si votre solde est faible. N&apos;hésitez pas à contacter votre conseiller pour étudier la meilleure combinaison de financements.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP et France Travail</h2>
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
          <h2 className="text-2xl font-bold mb-3">Financer ma formation HACCP avec France Travail</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Accompagnement dans vos démarches AIF</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
