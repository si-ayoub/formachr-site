import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP CPF — Financement 2026 et Alternatives",
  description: "La formation HACCP est-elle finançable par le CPF en 2026 ? Découvrez les alternatives : OPCO AKTO, France Travail, plan de formation. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-cpf` }
}

const FAQ = [
  { question: "Peut-on financer la formation HACCP avec son CPF ?", answer: "Depuis le 1er janvier 2023, la formation hygiène alimentaire pour la restauration commerciale n'est plus éligible au CPF. La principale alternative est l'OPCO AKTO pour les salariés CHR (prise en charge 100%)." },
  { question: "Comment financer sa formation HACCP sans CPF ?", answer: "Les alternatives sont : l'OPCO AKTO pour les salariés du secteur CHR (100%), France Travail pour les demandeurs d'emploi, les aides régionales, ou le paiement direct (290-490€ déductible des charges)." },
  { question: "L'OPCO AKTO prend-il en charge 100% de la formation HACCP ?", answer: "Oui, dans la majorité des cas. L'OPCO AKTO prend en charge l'intégralité de la formation hygiène alimentaire pour les salariés du secteur cafés, hôtels, restaurants. Contactez votre OPCO AKTO régional pour monter le dossier." },
]

export default function HaccpCpfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />
      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li><li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP CPF</li>
        </ol>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP et CPF<br /><span className="text-yellow-400">Ce qu&apos;il faut savoir en 2026</span>
            </h1>
            <div className="bg-orange-500/80 rounded-xl p-4 mb-5 text-sm">
              <strong>⚠️ Important :</strong> Depuis janvier 2023, la formation hygiène alimentaire n&apos;est plus éligible au CPF.
              La principale alternative est l&apos;<strong>OPCO AKTO</strong> (prise en charge 100% pour les salariés CHR).
            </div>
          </div>
          <div><LeadForm title="Trouver mon financement — 24h" /></div>
        </div>
      </section>
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Alternatives de financement au CPF</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "OPCO AKTO", badge: "⭐ Recommandé", desc: "Pour les salariés du secteur CHR. Prise en charge 100% dans la plupart des cas.", color: "green" },
              { titre: "France Travail", badge: "✅ Disponible", desc: "Pour les demandeurs d'emploi en reconversion dans la restauration.", color: "blue" },
              { titre: "Plan de formation entreprise", badge: "✅ Disponible", desc: "L'employeur finance via le plan de développement des compétences (OPCO remboursement).", color: "blue" },
              { titre: "Paiement direct", badge: "Simple", desc: "290-490€, déductible des charges. Option la plus rapide sans dossier.", color: "gray" },
            ].map(f => (
              <div key={f.titre} className={`border-2 rounded-xl p-5 ${f.color==="green"?"border-green-200 bg-green-50":f.color==="blue"?"border-blue-100":"border-gray-200"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-bold">{f.titre}</div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${f.color==="green"?"bg-green-100 text-green-700":f.color==="blue"?"bg-blue-100 text-blue-700":"bg-gray-100 text-gray-600"}`}>{f.badge}</span>
                </div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
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
