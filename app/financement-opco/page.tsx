import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP OPCO — Financement par votre Opérateur de Compétences",
  description: "Financez votre formation HACCP via votre OPCO. AKTO pour la restauration CHR, OCAPIAT pour l'agroalimentaire, OPCO EP pour les entreprises de proximité. Prise en charge jusqu'à 100%. Démarches et montants.",
  alternates: { canonical: `${SITE_URL}/financement-opco` }
}

const FAQ = [
  { question: "Quel OPCO prend en charge la formation HACCP pour un restaurant ?", answer: "Les restaurants et établissements CHR (Cafés, Hôtels, Restaurants) dépendent de l'OPCO AKTO (anciennement FAFIH). AKTO est l'opérateur de compétences de référence pour le secteur de l'hôtellerie-restauration. Les entreprises de l'agroalimentaire relèvent d'OCAPIAT, et les commerces alimentaires de proximité (boulangeries, traiteurs) de l'OPCO EP." },
  { question: "Comment faire une demande de prise en charge OPCO pour la formation HACCP ?", answer: "L'employeur doit soumettre une demande de prise en charge auprès de son OPCO avant le début de la formation. Le dossier comprend le devis de l'organisme de formation, le programme pédagogique et la convention de formation. Le délai de traitement est généralement de 2 à 4 semaines. L'OPCO vérifie que l'organisme est certifié Qualiopi et que la formation est éligible." },
  { question: "Quel montant l'OPCO rembourse-t-il pour la formation HACCP ?", answer: "Le montant de prise en charge varie selon l'OPCO et la taille de l'entreprise. AKTO prend en charge jusqu'à 100% du coût pédagogique pour les entreprises de moins de 50 salariés, avec un plafond horaire d'environ 25 à 30 euros de l'heure. Pour une formation HACCP de 14 heures, cela représente un remboursement de 350 à 420 euros, couvrant la quasi-totalité du coût." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Financement", url: "/financement-opco" },
        { name: "OPCO", url: "/financement-opco" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Financement OPCO",
        description: "Financez votre formation HACCP via votre OPCO. AKTO, OCAPIAT, OPCO EP — prise en charge jusqu'à 100%.",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/financement-opco" className="hover:text-blue-600">Financement</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">OPCO</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              🏢 FINANCEMENT OPCO — JUSQU&apos;À 100%
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Financement OPCO</span><br />
              <span className="text-xl font-bold">Prise en charge par votre Opérateur de Compétences</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">Votre OPCO peut financer jusqu&apos;à 100&nbsp;% de votre formation HACCP. AKTO pour la restauration, OCAPIAT pour l&apos;agroalimentaire, OPCO EP pour les commerces de proximité.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ Prise en charge 100%","📋 AKTO / OCAPIAT / OPCO EP","💰 0€ de reste à charge","⚡ Démarche simplifiée"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="opco" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Financer votre formation HACCP par l&apos;OPCO — Guide complet 2026</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              🏢 <strong>À retenir :</strong> Les OPCO financent la formation professionnelle des salariés. Pour la restauration et le secteur CHR,
              l&apos;OPCO AKTO prend en charge jusqu&apos;à 100&nbsp;% du coût de la formation HACCP pour les entreprises de moins de 50 salariés.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Les <strong>Opérateurs de Compétences (OPCO)</strong> sont les organismes agréés par l&apos;État chargés de financer la formation professionnelle des salariés. Pour les professionnels de la restauration et de l&apos;agroalimentaire, le financement OPCO constitue le moyen le plus avantageux d&apos;obtenir la <strong>formation HACCP en hygiène alimentaire</strong> sans aucun frais pour l&apos;entreprise.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">OPCO AKTO — Restauration et secteur CHR</h3>
            <p><strong>AKTO</strong> (anciennement FAFIH) est l&apos;OPCO de référence pour les entreprises du secteur des <strong>Cafés, Hôtels et Restaurants (CHR)</strong>. Il couvre les conventions collectives de la restauration traditionnelle, de la restauration rapide, de l&apos;hôtellerie et des débits de boissons. AKTO prend en charge les formations obligatoires, dont la formation HACCP, à hauteur d&apos;un <strong>plafond horaire de 25 à 30&nbsp;euros</strong>. Pour une formation de 14 heures, cela représente un remboursement de 350 à 420&nbsp;euros, couvrant dans la plupart des cas la totalité du coût pédagogique.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">OCAPIAT — Agroalimentaire et agriculture</h3>
            <p><strong>OCAPIAT</strong> est l&apos;OPCO des secteurs de l&apos;agriculture, de la pêche, de l&apos;industrie agroalimentaire et des coopératives agricoles. Les entreprises de transformation alimentaire, les laboratoires de production et les exploitations agricoles avec activité de vente directe relèvent de cet OPCO. OCAPIAT propose des <strong>plans de développement des compétences</strong> avec des enveloppes dédiées aux formations réglementaires comme la formation HACCP.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">OPCO EP — Entreprises de proximité</h3>
            <p>L&apos;<strong>OPCO des Entreprises de Proximité (OPCO EP)</strong> couvre les commerces alimentaires de proximité : boulangeries, pâtisseries, boucheries, charcuteries, traiteurs, poissonneries et épiceries. Ces établissements sont soumis à l&apos;obligation de formation HACCP et peuvent bénéficier d&apos;une prise en charge via leur OPCO. Les <strong>entreprises de moins de 11 salariés</strong> bénéficient généralement des meilleurs taux de remboursement.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Comment soumettre votre demande de prise en charge</h3>
            <p>La procédure de demande de financement OPCO suit plusieurs étapes clés :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identifiez votre OPCO</strong> en vérifiant votre convention collective ou en consultant le site opco.fr.</li>
              <li><strong>Obtenez un devis</strong> auprès d&apos;un organisme de formation certifié Qualiopi et agréé DRAAF.</li>
              <li><strong>Déposez votre demande</strong> sur la plateforme en ligne de votre OPCO, en joignant le devis, le programme pédagogique et la convention de formation.</li>
              <li><strong>Attendez l&apos;accord de prise en charge</strong> (2 à 4 semaines en moyenne).</li>
              <li><strong>Réalisez la formation</strong> une fois l&apos;accord obtenu.</li>
              <li><strong>Transmettez les justificatifs</strong> (attestation de présence, facture acquittée) pour obtenir le remboursement.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Montants et plafonds de remboursement</h3>
            <p>Les montants de prise en charge varient selon la taille de l&apos;entreprise et l&apos;OPCO concerné. Les <strong>entreprises de moins de 50 salariés</strong> bénéficient systématiquement des meilleurs taux, pouvant atteindre 100&nbsp;% du coût pédagogique. Les entreprises de 50 à 299 salariés ont des plafonds plus bas, et les grandes entreprises de plus de 300 salariés doivent généralement compléter avec leur propre budget formation.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Délais à anticiper</h3>
            <p>La demande de prise en charge OPCO doit impérativement être déposée <strong>avant le début de la formation</strong>. Prévoyez un délai de traitement de 2 à 4 semaines. Pour les créateurs d&apos;entreprise qui doivent obtenir leur attestation HACCP avant l&apos;ouverture, il est recommandé de lancer les démarches OPCO au moins <strong>6 semaines à l&apos;avance</strong>. N&apos;hésitez pas à nous contacter pour obtenir un devis et un accompagnement personnalisé dans vos démarches de financement.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP et OPCO</h2>
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
          <h2 className="text-2xl font-bold mb-3">Financer ma formation HACCP via mon OPCO</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Accompagnement dans vos démarches OPCO</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
