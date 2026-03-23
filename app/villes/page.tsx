import type { Metadata } from "next"
import Link from "next/link"
import { VILLES } from "@/data/villes"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP par ville — Toutes les villes de France",
  description: "Trouvez votre formation hygiène alimentaire dans votre ville. Plus de 150 villes couvertes partout en France. Devis gratuit sous 24h.",
  alternates: { canonical: `${SITE_URL}/villes` }
}

// Grouper par région
const villesParRegion = VILLES.reduce((acc, v) => {
  if (!acc[v.region]) acc[v.region] = []
  acc[v.region].push(v)
  return acc
}, {} as Record<string, typeof VILLES>)

export default function VillesPage() {
  const regions = Object.keys(villesParRegion).sort()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li className="text-gray-800">Formation HACCP par ville</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-3">Formation HACCP par ville</h1>
      <p className="text-gray-600 mb-10">
        Sessions disponibles chaque semaine dans plus de 150 villes de France.
        Cliquez sur votre ville pour découvrir les organismes agréés, tarifs et options de financement.
      </p>

      <div className="space-y-10">
        {regions.map(region => (
          <div key={region}>
            <h2 className="text-xl font-bold text-blue-700 border-b border-blue-100 pb-2 mb-4">{region}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {villesParRegion[region]
                .sort((a, b) => b.population - a.population)
                .map(v => (
                  <Link key={v.slug} href={`/formation-haccp-${v.slug}`}
                    className="flex flex-col bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-400 hover:shadow-sm transition-all group">
                    <span className="font-medium text-sm text-gray-800 group-hover:text-blue-700">{v.nom}</span>
                    <span className="text-xs text-gray-400 mt-0.5">{v.dept}</span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Votre ville n&apos;est pas listée ?</h2>
        <p className="text-gray-600 mb-4">Nos partenaires couvrent toute la France. Remplissez le formulaire et nous trouvons la solution la plus proche de chez vous.</p>
        <Link href="/devis" className="inline-block bg-blue-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
          Demander un devis gratuit →
        </Link>
      </div>
    </div>
  )
}
