import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo"
import LeadForm from "@/components/LeadForm"

export const metadata: Metadata = {
  title: "Devis Formation HACCP Gratuit — Réponse sous 24h",
  description: "Obtenez votre devis personnalisé pour une formation hygiène alimentaire. Gratuit, sans engagement. Nos conseillers trouvent la meilleure offre dans votre zone sous 24h.",
  alternates: { canonical: `${SITE_URL}/devis` }
}

export default function DevisPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Devis Formation HACCP Gratuit</h1>
          <p className="text-gray-600">Remplissez le formulaire ci-dessous. Un conseiller vous contacte <strong>sous 24h</strong> avec les meilleures offres disponibles dans votre zone.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
            <span>✅ 100% gratuit</span>
            <span>✅ Sans engagement</span>
            <span>✅ Réponse sous 24h</span>
          </div>
        </div>
        <LeadForm title="Obtenir mon devis personnalisé" />
        <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-gray-500">
          <div className="bg-white p-4 rounded-xl border"><div className="text-2xl font-bold text-blue-700">14h</div>Formation complète</div>
          <div className="bg-white p-4 rounded-xl border"><div className="text-2xl font-bold text-blue-700">100%</div>Financement OPCO</div>
          <div className="bg-white p-4 rounded-xl border"><div className="text-2xl font-bold text-blue-700">150+</div>Villes couvertes</div>
        </div>
      </div>
    </div>
  )
}
