import Link from "next/link"

export default function MusmapBanner() {
  return (
    <section className="mt-12 p-6 bg-green-50 rounded-xl border border-green-100">
      <h3 className="font-bold text-gray-800 mb-3">
        Vous êtes restaurateur ?
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Après votre formation HACCP, référencez gratuitement votre établissement
        sur <strong>musmap</strong>, l&apos;annuaire des restaurants halal certifiés en France.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://musmap.com/fr/villes"
          target="_blank"
          rel="noopener"
          className="text-green-700 font-semibold text-sm hover:underline"
        >
          → Voir les restaurants halal en France
        </a>
        <a
          href="https://manager.hspot.app"
          target="_blank"
          rel="noopener"
          className="text-green-700 font-semibold text-sm hover:underline"
        >
          → Gérer ma fiche restaurant
        </a>
      </div>
    </section>
  )
}
