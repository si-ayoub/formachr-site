import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Normandie — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Normandie. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-normandie` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Normandie ?", answer: "Oui, tous les établissements de restauration commerciale des 5 départements normands doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
  { question: "Combien coûte la formation HACCP en Normandie ?", answer: "Le tarif varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible à 100 % pour les salariés du secteur CHR." },
  { question: "Où trouver une formation HACCP en Normandie ?", answer: "Des sessions sont proposées à Rouen, Le Havre, Caen, Cherbourg, Évreux, Lisieux et Dieppe. Des formations en ligne sont aussi disponibles." },
  { question: "La formation aborde-t-elle les fromages au lait cru ?", answer: "Oui, le programme inclut la gestion des produits laitiers et les dangers liés au lait cru. Les formateurs normands illustrent les bonnes pratiques avec des exemples concrets sur le camembert et les autres fromages AOP." },
  { question: "Les restaurants du Mont-Saint-Michel sont-ils concernés ?", answer: "Oui, tous les restaurants du Mont-Saint-Michel et des zones touristiques normandes doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Normandie", url: "/formation-haccp-normandie" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Normandie",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Normandie",
        city: "Rouen",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Normandie",
        city: "Rouen",
        postalCode: "76000",
        lat: 49.4431,
        lng: 1.0993
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Normandie</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Normandie — 14 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Normandie</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Normandie, terre de traditions culinaires, est reconnue pour ses fromages (camembert, livarot, pont-l&apos;évêque), son cidre, son calvados et ses fruits de mer. Avec plus de 14 000 établissements de restauration, la formation HACCP est une obligation pour tous les professionnels normands.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["✅", "Organismes agréés DRAAF"],
                ["📋", "Attestation officielle"],
                ["💰", "Financement OPCO possible"],
                ["⚡", "Sessions disponibles rapidement"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2">{icon} {text}</div>
              ))}
            </div>
          </div>
          <div>
            <LeadForm city="Rouen" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Normandie — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Normandie doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Normandie agrée les organismes de formation pour les 5 départements : Seine-Maritime (76), Calvados (14), Manche (50), Eure (27) et Orne (61). De Rouen au Mont-Saint-Michel, la région offre une diversité culinaire remarquable.</p>
            <p>La gastronomie normande est indissociable de ses produits laitiers. Le camembert de Normandie AOP, le livarot, le pont-l&apos;évêque et le neufchâtel sont fabriqués dans les fromageries locales. La crème fraîche, le beurre et le cidre sont omniprésents dans la cuisine normande. Les fruits de mer (huîtres de Saint-Vaast, coquilles Saint-Jacques de la baie de Seine, moules de Barfleur) complètent cette richesse gastronomique.</p>
            <p>La formation HACCP en Normandie dure 14 heures avec 4 heures de pratique. Le programme aborde la réglementation, les dangers alimentaires (avec un focus sur les produits laitiers au lait cru et les fruits de mer), la méthode HACCP et le PMS. Les enjeux liés à la chaîne du froid des produits de la mer sont particulièrement développés.</p>
            <p>Le financement est accessible via l&apos;OPCO AKTO, France Travail et les aides régionales. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Rouen, Le Havre, Caen, Cherbourg et Évreux.</p>
            <p>Le tourisme normand (plages du Débarquement, Deauville, Honfleur, Mont-Saint-Michel) attire des millions de visiteurs chaque année. Les restaurants, crêperies et établissements de bord de mer voient leur activité décupler en saison. Les contrôles DDPP sont renforcés dans les zones touristiques. La Normandie est aussi un bassin important pour l&apos;industrie agroalimentaire (Danone, Lactalis), qui impose ses propres exigences HACCP.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Normandie</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-rouen" className="text-blue-600 hover:text-blue-800 font-medium underline">Rouen</Link></li>
                <li><Link href="/formation-haccp-le-havre" className="text-blue-600 hover:text-blue-800 font-medium underline">Le Havre</Link></li>
                <li><Link href="/formation-haccp-caen" className="text-blue-600 hover:text-blue-800 font-medium underline">Caen</Link></li>
                <li><Link href="/formation-haccp-cherbourg" className="text-blue-600 hover:text-blue-800 font-medium underline">Cherbourg</Link></li>
                <li><Link href="/formation-haccp-evreux" className="text-blue-600 hover:text-blue-800 font-medium underline">Évreux</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "14 000+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "290€ – 490€" },
              { label: "Financement OPCO", value: "100%" },
            ].map(stat => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Normandie</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en Normandie ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale des 5 départements normands doivent former au moins un salarié à l&apos;hygiène alimentaire (14h).</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP en Normandie ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le tarif varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible à 100 % pour les salariés du secteur CHR.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Normandie ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont proposées à Rouen, Le Havre, Caen, Cherbourg, Évreux, Lisieux et Dieppe. Des formations en ligne sont aussi disponibles.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation aborde-t-elle les fromages au lait cru ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, le programme inclut la gestion des produits laitiers et les dangers liés au lait cru. Les formateurs normands illustrent les bonnes pratiques avec des exemples concrets sur le camembert et les autres fromages AOP.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les restaurants du Mont-Saint-Michel sont-ils concernés ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les restaurants du Mont-Saint-Michel et des zones touristiques normandes doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Normandie</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
