import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation ISO 22000 — Certification Sécurité Alimentaire 2026",
  description: "Formation ISO 22000 : norme internationale de management de la sécurité alimentaire. Différences avec HACCP, programme, certification. Devis gratuit pour restauration et industrie agroalimentaire.",
  alternates: { canonical: `${SITE_URL}/iso-22000` }
}

const FAQ = [
  { question: "Quelle est la différence entre HACCP et ISO 22000 ?", answer: "Le HACCP est une méthode d'analyse des dangers et de maîtrise des points critiques. L'ISO 22000 est une norme de management intégrée qui inclut le HACCP mais va plus loin : elle structure un système de management de la sécurité des denrées alimentaires (SMSDA) avec des exigences organisationnelles, de communication et d'amélioration continue." },
  { question: "L'ISO 22000 est-elle obligatoire pour un restaurant ?", answer: "Non, l'ISO 22000 n'est pas obligatoire pour un restaurant traditionnel. Elle est recommandée (et souvent exigée par les clients) pour les cuisines centrales, traiteurs industriels, grossistes alimentaires et fournisseurs de la grande distribution." },
  { question: "Combien coûte la formation ISO 22000 ?", answer: "Une formation ISO 22000 coûte entre 800€ et 2 500€ selon la durée (2 à 5 jours), le niveau (sensibilisation, auditeur interne, responsable) et l'organisme. Elle est finançable via les OPCO pour les salariés." },
  { question: "Quelle est la différence entre ISO 22000 et FSSC 22000 ?", answer: "FSSC 22000 est un référentiel de certification construit sur la base d'ISO 22000, complété par des Programme Pré-Requis (PRP) spécifiques (ISO/TS 22002). C'est la certification la plus reconnue dans l'industrie agroalimentaire mondiale pour les fournisseurs de la grande distribution." },
  { question: "Peut-on faire la formation ISO 22000 en ligne ?", answer: "Oui, des formations de sensibilisation à l'ISO 22000 sont disponibles en e-learning. Cependant les formations d'auditeur interne et de responsable qualité nécessitent généralement une partie en présentiel pour les travaux pratiques." },
]

export default function Iso22000Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "ISO 22000", url: "/iso-22000" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation ISO 22000 — Management Sécurité Alimentaire",
        description: "Formation à la norme ISO 22000 de management de la sécurité des denrées alimentaires. Pour l'industrie agroalimentaire, restauration collective et cuisines centrales.",
        price: "800",
        duration: "PT16H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">ISO 22000</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">🏆 NORME INTERNATIONALE</div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation ISO 22000<br />
              <span className="text-yellow-400">Sécurité Alimentaire</span><br />
              <span className="text-xl font-bold">Management & Certification 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              L&apos;ISO 22000 est la <strong>norme internationale de management de la sécurité des denrées alimentaires</strong>.
              Elle intègre le HACCP dans un système de management complet, indispensable pour l&apos;industrie agroalimentaire,
              les cuisines centrales et les fournisseurs de la grande distribution.
            </p>
          </div>
          <div><LeadForm title="Devis Formation ISO 22000 — 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">HACCP vs ISO 22000 — Tableau comparatif</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Critère</th>
                    <th className="text-left p-4 font-semibold text-blue-700">HACCP / Hygiène Alimentaire</th>
                    <th className="text-left p-4 font-semibold text-green-700">ISO 22000</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Nature", "Méthode / Obligation légale", "Norme de management volontaire"],
                    ["Obligatoire", "✅ Oui (restauration commerciale)", "❌ Non (recommandé)"],
                    ["Public cible", "Restaurant, snack, boulangerie...", "IAA, cuisines centrales, grossistes"],
                    ["Durée formation", "14 heures (2 jours)", "16 à 40 heures (2 à 5 jours)"],
                    ["Prix indicatif", "290€ – 490€", "800€ – 2 500€"],
                    ["Certification", "Attestation DRAAF", "Certification tierce partie (AFNOR, Bureau Veritas...)"],
                    ["Financement", "OPCO AKTO", "OPCO + Plan de formation"],
                  ].map(([critere, haccp, iso]) => (
                    <tr key={critere} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-700">{critere}</td>
                      <td className="p-4 text-blue-700">{haccp}</td>
                      <td className="p-4 text-green-700">{iso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Niveaux de formation ISO 22000</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { niveau: "Sensibilisation", duree: "1 journée (7h)", public: "Tous les collaborateurs", contenu: "Principes ISO 22000, HACCP, enjeux sécurité alimentaire", prix: "300€ – 500€" },
                { niveau: "Auditeur Interne", duree: "2 jours (14h)", public: "Responsable qualité, managers", contenu: "Conduite d'audits internes, interprétation des exigences, plan d'action", prix: "800€ – 1 500€" },
                { niveau: "Responsable / Déploiement", duree: "3 à 5 jours", public: "Responsable QHSE, dirigeants", contenu: "Mise en place du SMSDA, pilotage de la certification, amélioration continue", prix: "1 500€ – 2 500€" },
              ].map(n => (
                <div key={n.niveau} className="border border-gray-200 rounded-xl p-5">
                  <div className="font-bold text-blue-700 text-lg mb-1">{n.niveau}</div>
                  <div className="text-sm text-gray-500 mb-3">{n.duree} — {n.public}</div>
                  <p className="text-sm text-gray-600 mb-3">{n.contenu}</p>
                  <div className="font-bold text-green-700">{n.prix}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Autres certifications sécurité alimentaire</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { nom: "FSSC 22000", desc: "ISO 22000 + PRP spécifiques. Standard le plus reconnu dans l'IAA mondiale pour les fournisseurs GD.", cible: "Industrie agroalimentaire" },
                { nom: "IFS Food", desc: "International Featured Standard. Exigé par les distributeurs européens (Auchan, Carrefour, Metro...).", cible: "Fournisseurs grande distribution" },
                { nom: "BRC Global Standard", desc: "British Retail Consortium. Référentiel des distributeurs anglo-saxons. Reconnu mondialement.", cible: "Export, distributeurs UK/USA" },
                { nom: "GlobalG.A.P.", desc: "Standard de bonnes pratiques agricoles. Couvre la production primaire et la traçabilité amont.", cible: "Producteurs, exploitations agricoles" },
              ].map(c => (
                <div key={c.nom} className="border rounded-xl p-5">
                  <div className="font-bold text-blue-700 mb-1">{c.nom}</div>
                  <div className="text-xs text-green-600 font-medium mb-2">🎯 {c.cible}</div>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — ISO 22000</h2>
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
