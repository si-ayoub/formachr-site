import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Gratuite — Comment en Bénéficier en 2026 ?",
  description: "Formation HACCP gratuite : découvrez les conditions pour bénéficier d'une formation hygiène alimentaire sans frais. CPF, OPCO 100%, AIF France Travail, aides régionales. Guide complet 2026.",
  alternates: { canonical: `${SITE_URL}/financement-gratuite` }
}

const FAQ = [
  { question: "La formation HACCP peut-elle vraiment être gratuite ?", answer: "Oui, la formation HACCP peut être entièrement gratuite pour le stagiaire grâce à plusieurs dispositifs de financement publics. Le CPF, les OPCO et l'AIF de France Travail permettent une prise en charge à 100% du coût pédagogique. Le stagiaire ne débourse rien : le financement est versé directement à l'organisme de formation." },
  { question: "Quelles sont les conditions pour obtenir une formation HACCP gratuite ?", answer: "Les conditions varient selon le dispositif utilisé. Pour le CPF, il faut disposer d'un solde suffisant (environ 300€). Pour l'OPCO, il faut être salarié d'une entreprise cotisant à un OPCO (AKTO, OCAPIAT, OPCO EP). Pour l'AIF, il faut être inscrit comme demandeur d'emploi à France Travail. Certaines régions proposent également des aides spécifiques pour les créateurs d'entreprise." },
  { question: "Comment trouver une formation HACCP gratuite près de chez moi ?", answer: "Commencez par vérifier votre solde CPF sur moncompteformation.gouv.fr. Si vous êtes salarié, contactez votre OPCO pour connaître vos droits à la formation. Si vous êtes demandeur d'emploi, parlez-en à votre conseiller France Travail. Enfin, demandez un devis gratuit auprès d'un organisme certifié Qualiopi qui pourra vous orienter vers le meilleur financement disponible." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Financement", url: "/financement-gratuite" },
        { name: "Formation Gratuite", url: "/financement-gratuite" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Formation Gratuite",
        description: "Formation HACCP gratuite grâce aux financements CPF, OPCO, AIF France Travail et aides régionales.",
        price: "0",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/financement-gratuite" className="hover:text-blue-600">Financement</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation Gratuite</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-600/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              🎁 FORMATION HACCP GRATUITE — 0€
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Gratuite</span><br />
              <span className="text-xl font-bold">Comment en bénéficier en 2026 ?</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">Obtenez votre formation HACCP sans rien payer grâce au CPF, aux OPCO, à France Travail ou aux aides régionales. Plusieurs dispositifs permettent une prise en charge à 100&nbsp;%.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 0€ de reste à charge","📋 CPF / OPCO / AIF","💰 Aides régionales","⚡ Attestation officielle DRAAF"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="gratuite" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP gratuite — Tous les dispositifs en 2026</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              🎁 <strong>Bonne nouvelle :</strong> La formation HACCP peut être entièrement gratuite pour le stagiaire. Plusieurs dispositifs
              de financement permettent une prise en charge à 100&nbsp;% : CPF, OPCO, AIF France Travail ou aides du Conseil Régional.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La <strong>formation HACCP en hygiène alimentaire</strong> est une obligation légale pour tout établissement manipulant des denrées alimentaires. Son coût, généralement compris entre 250 et 450&nbsp;euros, peut représenter un frein pour les créateurs d&apos;entreprise, les salariés ou les demandeurs d&apos;emploi. Pourtant, de nombreux dispositifs permettent d&apos;obtenir cette formation <strong>gratuitement</strong>, sans aucun reste à charge.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">1. Le CPF — Compte Personnel de Formation</h3>
            <p>Le <strong>Compte Personnel de Formation</strong> est le dispositif le plus accessible. Chaque actif (salarié, indépendant, demandeur d&apos;emploi) dispose d&apos;un solde CPF alimenté chaque année à hauteur de 500&nbsp;euros (plafonné à 5&nbsp;000&nbsp;euros). Si votre solde CPF couvre le coût de la formation, celle-ci est <strong>entièrement gratuite</strong> pour vous. Rendez-vous sur <strong>moncompteformation.gouv.fr</strong> pour vérifier votre solde et rechercher une formation HACCP éligible. Attention : depuis mai 2024, une participation forfaitaire de 100&nbsp;euros est demandée, sauf pour les demandeurs d&apos;emploi qui en sont exonérés.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">2. L&apos;OPCO — Prise en charge à 100&nbsp;% pour les salariés</h3>
            <p>Les salariés des secteurs de la restauration, de l&apos;hôtellerie et de l&apos;agroalimentaire peuvent bénéficier d&apos;une <strong>prise en charge intégrale</strong> par leur OPCO. L&apos;OPCO <strong>AKTO</strong> (secteur CHR) finance jusqu&apos;à 100&nbsp;% du coût pédagogique pour les entreprises de moins de 50 salariés. <strong>OCAPIAT</strong> couvre les entreprises de l&apos;agroalimentaire et <strong>OPCO EP</strong> les commerces alimentaires de proximité. L&apos;employeur dépose la demande de prise en charge avant le début de la formation. Le financement est versé directement à l&apos;organisme : le salarié ne débourse rien.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">3. L&apos;AIF — France Travail (ex Pôle Emploi)</h3>
            <p>Les <strong>demandeurs d&apos;emploi</strong> inscrits à France Travail peuvent solliciter l&apos;<strong>Aide Individuelle à la Formation (AIF)</strong>. Ce dispositif couvre 100&nbsp;% du coût pédagogique lorsqu&apos;aucun autre financement n&apos;est mobilisable. La demande est effectuée par votre conseiller France Travail sur le portail Kairos, à partir du devis fourni par l&apos;organisme de formation. L&apos;accord est obtenu en 2 à 3 semaines. Pendant la formation, vous conservez vos allocations chômage ou percevez la RFFT.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">4. Les aides régionales et le Conseil Régional</h3>
            <p>Plusieurs <strong>Conseils Régionaux</strong> proposent des aides spécifiques pour la formation professionnelle, notamment à destination des créateurs et repreneurs d&apos;entreprise. Ces aides varient selon les régions :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Île-de-France</strong> : programme régional de formation avec places gratuites pour les demandeurs d&apos;emploi.</li>
              <li><strong>Auvergne-Rhône-Alpes</strong> : chèques formation pour les créateurs d&apos;entreprise.</li>
              <li><strong>Occitanie</strong> : dispositif &laquo;&nbsp;Parcours Emploi Compétences&nbsp;&raquo; incluant des formations réglementaires.</li>
              <li><strong>Hauts-de-France</strong> : programme &laquo;&nbsp;Proch&apos;Emploi&nbsp;&raquo; avec accompagnement formation.</li>
              <li><strong>Nouvelle-Aquitaine</strong> : aides à la qualification professionnelle.</li>
            </ul>
            <p>Renseignez-vous auprès de votre Conseil Régional ou de la Mission Locale de votre territoire pour connaître les dispositifs disponibles dans votre région.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">5. Autres dispositifs de financement gratuit</h3>
            <p>D&apos;autres solutions existent pour obtenir une formation HACCP gratuite :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>AGEFIPH</strong> : financement pour les travailleurs en situation de handicap.</li>
              <li><strong>Transitions Pro</strong> : pour les salariés en reconversion professionnelle (PTP - Projet de Transition Professionnelle).</li>
              <li><strong>Employeurs</strong> : certains employeurs prennent en charge directement la formation de leurs salariés via leur plan de développement des compétences.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Comment choisir le meilleur financement ?</h3>
            <p>Le choix du dispositif dépend de votre situation personnelle. En résumé :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Salarié en poste</strong> → OPCO (demande par l&apos;employeur) ou CPF (initiative personnelle).</li>
              <li><strong>Demandeur d&apos;emploi</strong> → AIF France Travail ou CPF (exonération des 100&nbsp;€).</li>
              <li><strong>Créateur d&apos;entreprise</strong> → CPF, aide régionale ou AIF si inscrit à France Travail.</li>
              <li><strong>Travailleur indépendant</strong> → CPF ou FAF (Fonds d&apos;Assurance Formation) de votre secteur.</li>
            </ul>
            <p>Notre équipe vous accompagne gratuitement pour identifier le <strong>meilleur financement</strong> adapté à votre profil. Demandez un devis gratuit et recevez une réponse personnalisée sous 24 heures.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Gratuite</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP gratuitement</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — On trouve le meilleur financement pour vous</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
