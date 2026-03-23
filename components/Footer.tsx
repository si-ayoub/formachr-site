import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Formation HACCP France</h3>
            <p className="text-sm text-gray-400">Trouvez la meilleure formation hygiène alimentaire certifiée près de chez vous.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Formations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/formation-hygiene-alimentaire" className="hover:text-white transition-colors">Hygiène Alimentaire (HACCP)</Link></li>
              <li><Link href="/permis-exploitation" className="hover:text-white transition-colors">Permis d&apos;Exploitation</Link></li>
              <li><Link href="/iso-22000" className="hover:text-white transition-colors">ISO 22000</Link></li>
              <li><Link href="/formation-haccp-en-ligne" className="hover:text-white transition-colors">Formation en Ligne</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Par secteur</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/formation-haccp-restaurant" className="hover:text-white transition-colors">Restaurant</Link></li>
              <li><Link href="/formation-haccp-snack" className="hover:text-white transition-colors">Snack / Restauration rapide</Link></li>
              <li><Link href="/formation-haccp-food-truck" className="hover:text-white transition-colors">Food Truck</Link></li>
              <li><Link href="/formation-haccp-boulangerie" className="hover:text-white transition-colors">Boulangerie</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Financement</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/formation-haccp-cpf" className="hover:text-white transition-colors">CPF</Link></li>
              <li><Link href="/formation-haccp-opco" className="hover:text-white transition-colors">OPCO AKTO</Link></li>
              <li><Link href="/formation-haccp-gratuite" className="hover:text-white transition-colors">Formation Gratuite</Link></li>
              <li><Link href="/devis" className="hover:text-white transition-colors">Devis Gratuit</Link></li>
            </ul>
          </div>
        </div>
          {/* Partenaires — Ecosystème */}
          <div className="col-span-1 md:col-span-4 border-t border-gray-700 mt-4 pt-6">
            <h4 className="text-white font-semibold mb-3">Nos partenaires</h4>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://musmap.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">musmap.com — Annuaire restaurants halal</a>
              <a href="https://hspot.fr" target="_blank" rel="noopener" className="hover:text-white transition-colors">H Spot — Application restaurants halal</a>
              <a href="https://manager.hspot.app" target="_blank" rel="noopener" className="hover:text-white transition-colors">H Spot Manager — Gérez votre restaurant</a>
            </div>
          </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Formation HACCP France — Tous droits réservés</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white">Confidentialité</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
