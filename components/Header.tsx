import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-700">Formation</span>
            <span className="text-2xl font-bold text-green-600">HACCP</span>
            <span className="text-sm text-gray-500 font-medium hidden sm:block">France</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/formation-hygiene-alimentaire" className="hover:text-blue-700 transition-colors">Hygiène Alimentaire</Link>
            <Link href="/permis-exploitation" className="hover:text-blue-700 transition-colors">Permis d&apos;Exploitation</Link>
            <Link href="/iso-22000" className="hover:text-blue-700 transition-colors">ISO 22000</Link>
            <Link href="/formation-haccp-financement" className="hover:text-blue-700 transition-colors">Financement</Link>
            <Link href="/devis" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Devis Gratuit
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
