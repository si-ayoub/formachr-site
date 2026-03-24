import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP CPF — Financer avec votre Compte Personnel de Formation",
  description: "Financez votre formation HACCP avec le CPF. Utilisez votre Compte Personnel de Formation pour obtenir votre attestation hygiène alimentaire sans reste à charge. Éligibilité, montants et démarches Mon Compte Formation.",
  alternates: { canonical: `${SITE_URL}/financement-cpf` }
}

const FAQ = [
  { question: "Suis-je éligible au financement CPF pour la formation HACCP ?", answer: "Tout salarié du secteur privé, demandeur d'emploi ou travailleur indépendant disposant d'un solde CPF peut financer sa formation HACCP. Il faut que l'organisme de formation soit certifié Qualiopi et que la formation soit inscrite au Répertoire National des Certifications Professionnelles (RNCP) ou au Répertoire Spécifique." },
  { question: "Quel montant CPF est nécessaire pour financer la formation HACCP ?", answer: "Le coût moyen d'une formation HACCP en hygiène alimentaire se situe entre 250 et 450 euros. Chaque salarié cumule environ 500 euros par an sur son CPF, dans la limite d'un plafond de 5 000 euros. Un solde CPF de quelques centaines d'euros suffit donc largement pour couvrir la totalité de la formation." },
  { question: "Comment utiliser Mon Compte Formation pour la formation HACCP ?", answer: "Rendez-vous sur moncompteformation.gouv.fr ou l'application mobile Mon Compte Formation. Connectez-vous avec FranceConnect, recherchez \"formation hygiène alimentaire HACCP\", sélectionnez un organisme certifié Qualiopi, vérifiez le prix et votre solde disponible, puis validez votre inscription en ligne. Depuis 2023, une vérification d'identité via FranceConnect+ est requise." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Financement", url: "/financement-cpf" },
        { name: "CPF", url: "/financement-cpf" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Financement CPF",
        description: "Financez votre formation HACCP avec le CPF. Compte Personnel de Formation, éligibilité et démarches.",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/financement-cpf" className="hover:text-blue-600">Financement</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">CPF</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              💰 FINANCEMENT CPF DISPONIBLE
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Financement CPF</span><br />
              <span className="text-xl font-bold">Utilisez votre Compte Personnel de Formation</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">Financez votre formation hygiène alimentaire HACCP avec votre CPF. Inscription en ligne, prise en charge totale possible, attestation officielle DRAAF.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ Éligible CPF","📋 Organismes Qualiopi","💰 Jusqu'à 5 000€ disponibles","⚡ Inscription en ligne"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="cpf" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Financer votre formation HACCP avec le CPF — Guide complet 2026</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              💰 <strong>Bon à savoir :</strong> Le Compte Personnel de Formation (CPF) permet de financer intégralement votre formation
              HACCP en hygiène alimentaire. Chaque actif cumule jusqu&apos;à 500&nbsp;€ par an, dans la limite de 5&nbsp;000&nbsp;€.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Le <strong>Compte Personnel de Formation (CPF)</strong> est l&apos;un des dispositifs les plus utilisés par les professionnels de la restauration et de l&apos;agroalimentaire pour financer leur <strong>formation HACCP en hygiène alimentaire</strong>. Depuis la réforme de 2019, chaque salarié du secteur privé, demandeur d&apos;emploi ou travailleur indépendant dispose d&apos;un compte alimenté chaque année à hauteur de 500&nbsp;euros, dans la limite d&apos;un plafond de 5&nbsp;000&nbsp;euros (8&nbsp;000&nbsp;euros pour les salariés peu qualifiés).</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Quel montant CPF pour la formation HACCP ?</h3>
            <p>Le coût moyen d&apos;une formation HACCP oscille entre <strong>250 et 450&nbsp;euros</strong> selon l&apos;organisme, la ville et le format (présentiel ou distanciel). Avec un solde CPF moyen de 1&nbsp;500 à 5&nbsp;000&nbsp;euros pour un salarié ayant quelques années d&apos;ancienneté, le financement couvre généralement <strong>100&nbsp;% des frais</strong> sans reste à charge. Il suffit de vérifier votre solde sur <strong>moncompteformation.gouv.fr</strong> pour confirmer votre éligibilité.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Organismes éligibles : la certification Qualiopi</h3>
            <p>Depuis le 1er janvier 2022, seuls les organismes de formation disposant de la <strong>certification Qualiopi</strong> peuvent proposer des formations finançables par le CPF. Pour la formation HACCP, l&apos;organisme doit également être <strong>enregistré auprès de la DRAAF</strong> (Direction Régionale de l&apos;Alimentation, de l&apos;Agriculture et de la Forêt) de sa région. Cette double exigence garantit la qualité pédagogique et la validité réglementaire de votre attestation.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Démarches sur Mon Compte Formation</h3>
            <p>La procédure d&apos;inscription est entièrement dématérialisée. Voici les étapes à suivre :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Connectez-vous à <strong>moncompteformation.gouv.fr</strong> avec FranceConnect (identité numérique, impôts, Ameli ou La Poste).</li>
              <li>Recherchez &laquo;&nbsp;formation hygiène alimentaire HACCP&nbsp;&raquo; dans la barre de recherche.</li>
              <li>Filtrez par ville, date et prix pour trouver l&apos;organisme le plus adapté à votre situation.</li>
              <li>Vérifiez que l&apos;organisme est bien certifié Qualiopi et agréé DRAAF.</li>
              <li>Validez votre inscription en ligne. Depuis 2023, une <strong>vérification d&apos;identité FranceConnect+</strong> est obligatoire pour lutter contre la fraude.</li>
              <li>Recevez votre convocation par email et présentez-vous à la session de formation.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Participation financière obligatoire depuis 2024</h3>
            <p>Attention, depuis mai 2024, une <strong>participation forfaitaire de 100&nbsp;euros</strong> est à la charge du titulaire du CPF pour toute formation. Cette somme est prélevée lors de la validation de l&apos;inscription sur Mon Compte Formation. Les demandeurs d&apos;emploi inscrits à France Travail en sont exonérés.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Délais et planification</h3>
            <p>Prévoyez un délai minimum de <strong>11 jours ouvrés</strong> entre la validation de votre inscription sur Mon Compte Formation et le début de la formation. Ce délai incompressible est imposé par la réglementation pour permettre un droit de rétractation. Planifiez donc votre formation HACCP suffisamment en avance, surtout si vous êtes en cours de création d&apos;entreprise ou si un contrôle sanitaire est imminent.</p>

            <p>Pour les professionnels de la restauration à Paris et en Île-de-France, de nombreuses sessions sont disponibles chaque semaine. Consultez notre page <Link href="/formation-haccp-paris" className="text-blue-600 hover:underline">formation HACCP Paris</Link> pour trouver une session proche de chez vous.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Alternatives au CPF</h3>
            <p>Si votre solde CPF est insuffisant ou si vous souhaitez conserver vos droits pour une autre formation, d&apos;autres dispositifs existent : financement OPCO pour les salariés du secteur CHR, AIF de France Travail pour les demandeurs d&apos;emploi, ou encore aides régionales. N&apos;hésitez pas à demander un devis gratuit pour identifier la meilleure solution de financement adaptée à votre profil.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP et CPF</h2>
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
          <h2 className="text-2xl font-bold mb-3">Financer ma formation HACCP avec le CPF</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés Qualiopi dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
