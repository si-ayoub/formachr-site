import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Centre-Val de Loire — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Centre-Val de Loire. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-centre-val-de-loire` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Centre-Val de Loire ?", answer: "Oui, tous les établissements de restauration commerciale des 6 départements de la région doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
  { question: "Combien coûte la formation HACCP à Tours ou Orléans ?", answer: "Le prix varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible pour les salariés du secteur CHR." },
  { question: "Les restaurants des châteaux de la Loire sont-ils concernés ?", answer: "Oui, tous les établissements de restauration commerciale, y compris ceux situés dans les châteaux, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire." },
  { question: "Où trouver une formation HACCP en Centre-Val de Loire ?", answer: "Des sessions sont proposées à Orléans, Tours, Bourges, Blois, Chartres et Châteauroux. Des formations en ligne sont aussi disponibles." },
  { question: "La formation aborde-t-elle les fromages de chèvre ?", answer: "Oui, le programme inclut la manipulation des produits laitiers. Les formateurs locaux illustrent les bonnes pratiques avec des exemples concrets sur les fromages de chèvre AOP de la région (Sainte-Maure, Valençay, Selles-sur-Cher)." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Centre-Val de Loire", url: "/formation-haccp-centre-val-de-loire" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Centre-Val de Loire",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Centre-Val de Loire",
        city: "Orléans",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Centre-Val de Loire",
        city: "Orléans",
        postalCode: "45000",
        lat: 47.9029,
        lng: 1.9093
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Centre-Val de Loire</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Centre-Val de Loire — 10 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Centre-Val de Loire</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Le Centre-Val de Loire, terre des châteaux et du patrimoine gastronomique ligérien, compte plus de 10 000 établissements de restauration commerciale. De Tours à Orléans, en passant par les vignobles de Touraine et de Sancerre, la formation HACCP est obligatoire pour tous les professionnels de la restauration.
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
            <LeadForm city="Orléans" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Centre-Val de Loire — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Centre-Val de Loire doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Centre-Val de Loire agrée les organismes de formation pour les 6 départements : Loiret (45), Indre-et-Loire (37), Cher (18), Loir-et-Cher (41), Eure-et-Loir (28) et Indre (36). La région, traversée par la Loire, est célèbre pour ses châteaux et son tourisme gastronomique.</p>
            <p>La gastronomie du Centre-Val de Loire est raffinée : rillettes et rillons de Tours, tarte Tatin, fromages de chèvre (Sainte-Maure-de-Touraine, Valençay, Selles-sur-Cher, Crottin de Chavignol), vins de Touraine, de Sancerre et de Chinon. Le patrimoine culinaire ligérien est inscrit au patrimoine mondial de l&apos;UNESCO à travers le paysage culturel de la Loire.</p>
            <p>La formation HACCP en Centre-Val de Loire dure 14 heures avec 4 heures de pratique. Le programme aborde la réglementation, les dangers alimentaires, la méthode HACCP et le PMS. Les formateurs intègrent les spécificités locales : conservation des fromages de chèvre au lait cru, hygiène dans les caves de dégustation, gestion des buffets dans les châteaux-restaurants.</p>
            <p>Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides régionales. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Orléans, Tours, Bourges, Blois et Chartres.</p>
            <p>Le tourisme des châteaux de la Loire (Chambord, Chenonceau, Amboise) génère une activité de restauration importante. Les restaurants gastronomiques, les tables d&apos;hôtes et les traiteurs liés à l&apos;événementiel dans les châteaux doivent tous respecter les normes HACCP. Les marchés de producteurs et les caves de dégustation avec restauration complètent le panorama des professionnels concernés dans la région.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Centre-Val de Loire</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-orleans" className="text-blue-600 hover:text-blue-800 font-medium underline">Orléans</Link></li>
                <li><Link href="/formation-haccp-tours" className="text-blue-600 hover:text-blue-800 font-medium underline">Tours</Link></li>
                <li><Link href="/formation-haccp-bourges" className="text-blue-600 hover:text-blue-800 font-medium underline">Bourges</Link></li>
                <li><Link href="/formation-haccp-blois" className="text-blue-600 hover:text-blue-800 font-medium underline">Blois</Link></li>
                <li><Link href="/formation-haccp-chartres" className="text-blue-600 hover:text-blue-800 font-medium underline">Chartres</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "10 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Centre-Val de Loire</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en Centre-Val de Loire ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale des 6 départements de la région doivent former au moins un salarié à l&apos;hygiène alimentaire (14h).</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP à Tours ou Orléans ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le prix varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO est possible pour les salariés du secteur CHR.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les restaurants des châteaux de la Loire sont-ils concernés ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale, y compris ceux situés dans les châteaux, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Centre-Val de Loire ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont proposées à Orléans, Tours, Bourges, Blois, Chartres et Châteauroux. Des formations en ligne sont aussi disponibles.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation aborde-t-elle les fromages de chèvre ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, le programme inclut la manipulation des produits laitiers. Les formateurs locaux illustrent les bonnes pratiques avec des exemples concrets sur les fromages de chèvre AOP de la région (Sainte-Maure, Valençay, Selles-sur-Cher).</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Centre-Val de Loire</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
