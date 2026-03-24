"use client"

import { useState } from "react"
import Link from "next/link"

const TYPES = [
  { value: "restaurant", label: "Restaurant traditionnel" },
  { value: "snack", label: "Snack / Kebab" },
  { value: "food-truck", label: "Food Truck" },
  { value: "boulangerie", label: "Boulangerie / Patisserie" },
  { value: "boucherie", label: "Boucherie / Charcuterie" },
  { value: "collectivite", label: "Restauration collective" },
  { value: "hotel", label: "Hotel" },
  { value: "supermarche", label: "Supermarche / GMS" },
  { value: "traiteur", label: "Traiteur / Evenementiel" },
  { value: "autre", label: "Autre" },
]

const EMPLOYES = [
  { value: "1", label: "1 personne (moi-meme)" },
  { value: "2-5", label: "2 a 5 salaries" },
  { value: "6-10", label: "6 a 10 salaries" },
  { value: "10+", label: "Plus de 10 salaries" },
]

const MODES = [
  { value: "presentiel", label: "Presentiel (inter-entreprises)" },
  { value: "en-ligne", label: "En ligne (e-learning)" },
  { value: "intra", label: "Intra-entreprise (dans mon local)" },
  { value: "indifferent", label: "Peu importe" },
]

const REGIONS = [
  { value: "paris", label: "Paris / Ile-de-France" },
  { value: "grande-ville", label: "Grande ville (Lyon, Marseille, Lille...)" },
  { value: "province", label: "Ville moyenne / Province" },
]

interface PriceResult {
  minPrice: number
  maxPrice: number
  mode: string
  financing: string[]
  duration: string
  discount: string | null
}

function calculatePrice(
  type: string,
  employes: string,
  mode: string,
  region: string
): PriceResult {
  let minPrice = 0
  let maxPrice = 0
  let resolvedMode = mode

  if (mode === "indifferent") {
    resolvedMode = "presentiel"
  }

  // Base prices by mode
  switch (resolvedMode) {
    case "presentiel":
      minPrice = 290
      maxPrice = 490
      break
    case "en-ligne":
      minPrice = 179
      maxPrice = 259
      break
    case "intra":
      minPrice = 500
      maxPrice = 900
      break
    default:
      minPrice = 290
      maxPrice = 490
  }

  // Paris premium
  if (region === "paris") {
    minPrice += 50
    maxPrice += 50
  }

  // Sector adjustments
  if (type === "hotel" || type === "supermarche" || type === "collectivite") {
    minPrice += 30
    maxPrice += 30
  }

  // Determine financing options
  const financing: string[] = []
  let discount: string | null = null

  if (employes === "1") {
    financing.push("CPF (Compte Personnel de Formation)")
    financing.push("France Travail (AIF) si demandeur d'emploi")
    financing.push("Autofinancement")
  } else if (employes === "2-5") {
    financing.push("OPCO AKTO (100% prise en charge)")
    financing.push("OPCO EP ou OCAPIAT selon convention")
    financing.push("CPF des salaries")
    discount = "Remise possible pour 2+ inscriptions simultanees"
  } else if (employes === "6-10") {
    financing.push("OPCO AKTO (100% prise en charge)")
    financing.push("OPCO EP ou OCAPIAT selon convention")
    financing.push("Plan de developpement des competences")
    discount = "Tarif groupe : -10% a -15% a partir de 3 inscrits"
  } else if (employes === "10+") {
    financing.push("OPCO (prise en charge selon branche)")
    financing.push("Plan de developpement des competences")
    financing.push("Formation intra-entreprise recommandee")
    discount = "Tarif degressif : -15% a -25% selon le nombre d'inscrits"
    if (resolvedMode !== "intra") {
      minPrice = Math.round(minPrice * 0.9)
      maxPrice = Math.round(maxPrice * 0.9)
    }
  }

  // Duration label
  const duration =
    resolvedMode === "en-ligne"
      ? "14h — a votre rythme (2 a 3 semaines)"
      : "14h (1,5 a 2 jours)"

  // Mode label for display
  const modeLabel =
    resolvedMode === "presentiel"
      ? "Presentiel (inter-entreprises)"
      : resolvedMode === "en-ligne"
        ? "En ligne (e-learning)"
        : "Intra-entreprise"

  return {
    minPrice,
    maxPrice,
    mode: modeLabel,
    financing,
    duration,
    discount,
  }
}

export default function CalculateurClient() {
  const [type, setType] = useState("")
  const [employes, setEmployes] = useState("")
  const [mode, setMode] = useState("")
  const [region, setRegion] = useState("")
  const [result, setResult] = useState<PriceResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  const isFormComplete = type && employes && mode && region

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isFormComplete) return
    const price = calculatePrice(type, employes, mode, region)
    setResult(price)
    setShowResult(true)
  }

  function handleReset() {
    setShowResult(false)
    setResult(null)
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Calculateur de prix</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/40 text-blue-100 text-sm px-3 py-1 rounded-full mb-4">
            Outil gratuit — Estimation instantanee
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
            Calculateur de prix<br />
            <span className="text-yellow-400">Formation HACCP 2026</span>
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Estimez le cout de votre formation hygiene alimentaire en 30 secondes.
            Tarifs actualises, options de financement personnalisees.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Renseignez votre situation
              </h2>

              <div className="space-y-5">
                {/* Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type d&apos;etablissement
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  >
                    <option value="">-- Selectionnez --</option>
                    {TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                {/* Employees */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre de salaries a former
                  </label>
                  <select
                    value={employes}
                    onChange={(e) => setEmployes(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  >
                    <option value="">-- Selectionnez --</option>
                    {EMPLOYES.map((e) => (
                      <option key={e.value} value={e.value}>{e.label}</option>
                    ))}
                  </select>
                </div>

                {/* Mode */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mode de formation souhaite
                  </label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  >
                    <option value="">-- Selectionnez --</option>
                    {MODES.map((m) => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                </div>

                {/* Region */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Localisation
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  >
                    <option value="">-- Selectionnez --</option>
                    {REGIONS.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormComplete}
                className={`w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  isFormComplete
                    ? "bg-blue-700 text-white hover:bg-blue-800 cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Calculer mon prix
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                Estimation indicative — Le prix final depend de l&apos;organisme choisi
              </p>
            </form>
          ) : result ? (
            <div className="space-y-6">
              {/* Price result card */}
              <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-6 text-center">
                  <p className="text-blue-200 text-sm mb-1">Estimation pour votre formation HACCP</p>
                  <div className="text-4xl font-extrabold mb-1">
                    {result.minPrice}&euro; &mdash; {result.maxPrice}&euro; <span className="text-lg font-normal text-blue-200">TTC</span>
                  </div>
                  <p className="text-blue-200 text-sm">par personne</p>
                </div>

                <div className="p-6 space-y-5">
                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Format</p>
                      <p className="font-semibold text-gray-800 text-sm">{result.mode}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Duree</p>
                      <p className="font-semibold text-gray-800 text-sm">{result.duration}</p>
                    </div>
                  </div>

                  {/* DRAAF badge */}
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                    <span className="text-2xl">&#9989;</span>
                    <div>
                      <p className="font-bold text-green-800 text-sm">Attestation officielle DRAAF</p>
                      <p className="text-green-700 text-xs">Delivree a l&apos;issue de la formation — Valable sans limite de duree</p>
                    </div>
                  </div>

                  {/* Financing */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 text-sm">
                      Financements recommandes pour votre situation
                    </h3>
                    <ul className="space-y-2">
                      {result.financing.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-blue-600 mt-0.5 shrink-0">&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Group discount */}
                  {result.discount && (
                    <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <span className="text-2xl">&#128176;</span>
                      <div>
                        <p className="font-bold text-yellow-800 text-sm">Avantage groupe</p>
                        <p className="text-yellow-700 text-xs">{result.discount}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl shadow-lg border p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">
                  Obtenez un devis precis adapte a votre situation
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  Nos conseillers trouvent le meilleur organisme et le meilleur financement pour vous.
                </p>
                <Link
                  href="/devis"
                  className="inline-block bg-blue-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors text-lg"
                >
                  Obtenir mon devis gratuit &rarr;
                </Link>
                <p className="text-xs text-gray-400 mt-3">
                  &#10003; Gratuit &#10003; Sans engagement &#10003; Reponse sous 24h
                </p>
              </div>

              {/* Reset button */}
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  &larr; Modifier mes informations
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Info section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Comment est calcule le prix de la formation HACCP ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
              <h3 className="font-bold text-sm mb-2">Le format de formation</h3>
              <p className="text-sm text-gray-500">Le presentiel est plus cher que le e-learning. L&apos;intra-entreprise est sur devis selon le nombre de participants.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
              <h3 className="font-bold text-sm mb-2">Votre localisation</h3>
              <p className="text-sm text-gray-500">Les formations a Paris et en Ile-de-France sont generalement plus cheres qu&apos;en province.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
              <h3 className="font-bold text-sm mb-2">Le financement</h3>
              <p className="text-sm text-gray-500">OPCO, CPF ou France Travail peuvent financer 100% du cout. Votre reste a charge peut etre de 0 euros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un devis personnalise ?</h2>
          <p className="text-blue-100 mb-8">Notre equipe compare les organismes et trouve le meilleur tarif pour votre situation. Reponse garantie sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">Obtenir mon devis gratuit &rarr;</Link>
          <p className="text-blue-200 text-sm mt-4">&#10003; Gratuit &#10003; Sans engagement &#10003; Reponse sous 24h</p>
        </div>
      </section>
    </>
  )
}
