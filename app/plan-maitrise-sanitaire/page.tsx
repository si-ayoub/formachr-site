import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { SITE_URL, schemaFAQ, schemaBreadcrumb } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Plan de Maîtrise Sanitaire (PMS) — Modèle et Guide 2026",
  description: "Qu'est-ce qu'un Plan de Maîtrise Sanitaire ? Comment le rédiger ? Modèle téléchargeable pour restaurant. Obligations légales, contenu requis et conseils pratiques.",
  alternates: { canonical: `${SITE_URL}/plan-maitrise-sanitaire` }
}

const FAQ = [
  { question: "Le Plan de Maîtrise Sanitaire est-il obligatoire ?", answer: "Oui, depuis 2006 (paquet hygiène), tout établissement manipulant des denrées alimentaires doit disposer d'un Plan de Maîtrise Sanitaire (PMS). Il doit être présenté lors des contrôles sanitaires de la DDPP." },
  { question: "Quel est le contenu d'un Plan de Maîtrise Sanitaire ?", answer: "Le PMS comprend : les Bonnes Pratiques d'Hygiène (BPH), le plan HACCP de l'établissement, les procédures de traçabilité, la gestion des non-conformités, les procédures de nettoyage-désinfection, et la gestion des déchets." },
  { question: "Qui rédige le Plan de Maîtrise Sanitaire ?", answer: "Le PMS est rédigé par le responsable de l'établissement, souvent avec l'aide de la personne ayant suivi la formation HACCP. Des modèles sont disponibles auprès des chambres de commerce et des organismes de formation." },
]

export default function PmsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />
      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li><li>›</li>
          <li className="text-gray-800 font-medium">Plan de Maîtrise Sanitaire</li>
        </ol>
      </nav>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Plan de Maîtrise Sanitaire<br /><span className="text-yellow-400">(PMS)</span><br />
              <span className="text-xl font-bold">Obligatoire pour tout restaurant</span>
            </h1>
            <p className="text-blue-100 mb-6">Le PMS est le document central qui regroupe toutes les procédures d&apos;hygiène de votre établissement. Obligatoire lors des contrôles DDPP.</p>
          </div>
          <div><LeadForm title="Aide à la rédaction de votre PMS" /></div>
        </div>
      </section>
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Les 6 composantes obligatoires du PMS</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: "1", titre: "Bonnes Pratiques d'Hygiène (BPH)", points: ["Hygiène du personnel","Nettoyage et désinfection","Lutte contre les nuisibles","Gestion des déchets","Qualité de l'eau"] },
              { num: "2", titre: "Plan HACCP", points: ["Analyse des dangers","Points Critiques de Contrôle (CCP)","Limites critiques","Surveillance","Actions correctives"] },
              { num: "3", titre: "Traçabilité", points: ["Registre des fournisseurs","Étiquetage des produits","Enregistrements de température","Fiches de contrôle réception","Gestion des DLC/DDM"] },
              { num: "4", titre: "Gestion des non-conformités", points: ["Procédure de retrait/rappel","Traitement des plaintes","Non-conformités fournisseurs","Actions correctives","Enregistrements"] },
              { num: "5", titre: "Plan de nettoyage-désinfection", points: ["Fréquences par zone","Produits utilisés (fiches techniques)","Méthodes opératoires","Responsabilités","Contrôles d'efficacité"] },
              { num: "6", titre: "Maîtrise des températures", points: ["Températures par type d'aliment","Relevés quotidiens","Procédures de congélation","Cuisson : températures à cœur","Refroidissement rapide"] },
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-700 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">{m.num}</span>
                  <h3 className="font-bold text-gray-900">{m.titre}</h3>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">✓</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Plan de Maîtrise Sanitaire</h2>
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
