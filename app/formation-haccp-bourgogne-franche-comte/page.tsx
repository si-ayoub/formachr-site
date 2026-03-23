import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Bourgogne-Franche-Comté — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Bourgogne-Franche-Comté. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-bourgogne-franche-comte` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Bourgogne-Franche-Comté ?", answer: "Oui, tous les établissements de restauration commerciale des 8 départements de la région doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
  { question: "Combien coûte la formation HACCP à Dijon ?", answer: "Le prix varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO couvre 100 % du coût pour les salariés CHR." },
  { question: "Les caves de dégustation avec restauration sont-elles concernées ?", answer: "Oui, dès lors qu&apos;un établissement propose de la restauration commerciale (service de repas sur place), il est soumis à l&apos;obligation de formation HACCP." },
  { question: "Où trouver une formation HACCP en Bourgogne-Franche-Comté ?", answer: "Des sessions sont proposées à Dijon, Besançon, Chalon-sur-Saône, Auxerre, Belfort, Mâcon et Dole. Des formations en ligne sont aussi disponibles." },
  { question: "La formation aborde-t-elle les fromages au lait cru ?", answer: "Oui, le programme inclut les bonnes pratiques de manipulation des produits laitiers, avec des exemples concrets sur le comté, le morbier et le mont d&apos;or, produits emblématiques de la Franche-Comté." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Bourgogne-Franche-Comté", url: "/formation-haccp-bourgogne-franche-comte" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Bourgogne-Franche-Comté",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Bourgogne-Franche-Comté",
        city: "Dijon",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Bourgogne-Franche-Comté",
        city: "Dijon",
        postalCode: "21000",
        lat: 47.322,
        lng: 5.0415
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Bourgogne-Franche-Comté</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Bourgogne-Franche-Comté — 11 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Bourgogne-Franche-Comté</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Bourgogne-Franche-Comté est une région de grande tradition gastronomique. Des vignobles de Bourgogne aux fromageries du Jura, en passant par la moutarde de Dijon et les escargots, la région compte plus de 11 000 établissements de restauration commerciale soumis à l&apos;obligation de formation HACCP.
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
            <LeadForm city="Dijon" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Bourgogne-Franche-Comté — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Bourgogne-Franche-Comté doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Bourgogne-Franche-Comté agrée les organismes de formation pour les 8 départements : Côte-d&apos;Or (21), Saône-et-Loire (71), Yonne (89), Nièvre (58), Doubs (25), Jura (39), Haute-Saône (70) et Territoire de Belfort (90). La richesse des terroirs impose des connaissances spécifiques en hygiène alimentaire.</p>
            <p>La gastronomie bourguignonne est l&apos;une des plus réputées de France. Le bœuf bourguignon, les escargots de Bourgogne, la fondue comtoise, les gougères et la pôchouse sont des plats emblématiques. Les vins de Bourgogne (romanée-conti, chambertin, chablis) et le comté AOP sont connus dans le monde entier. La moutarde de Dijon, le cassis de Bourgogne et les fromages franc-comtois (comté, morbier, mont d&apos;or) complètent ce panorama gastronomique exceptionnel.</p>
            <p>La formation HACCP en Bourgogne-Franche-Comté dure 14 heures avec 4 heures de pratique. Le programme traite de la réglementation, des dangers alimentaires, de la méthode HACCP et du PMS. Les formateurs intègrent des exemples locaux : affinage du comté et du morbier, conservation des escargots, hygiène dans les caves de dégustation proposant de la restauration.</p>
            <p>Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides régionales. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Dijon, Besançon, Chalon-sur-Saône, Auxerre et Belfort.</p>
            <p>Le tourisme viticole en Bourgogne (Route des Grands Crus) et le tourisme gastronomique attirent des visiteurs du monde entier. Les restaurants, tables d&apos;hôtes et caves de dégustation avec restauration doivent tous respecter les normes HACCP. La Cité internationale de la Gastronomie et du Vin de Dijon, inaugurée en 2022, renforce le rayonnement gastronomique de la région et l&apos;importance de l&apos;hygiène alimentaire.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Bourgogne-Franche-Comté</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-dijon" className="text-blue-600 hover:text-blue-800 font-medium underline">Dijon</Link></li>
                <li><Link href="/formation-haccp-besancon" className="text-blue-600 hover:text-blue-800 font-medium underline">Besançon</Link></li>
                <li><Link href="/formation-haccp-belfort" className="text-blue-600 hover:text-blue-800 font-medium underline">Belfort</Link></li>
                <li><Link href="/formation-haccp-chalon-sur-saone" className="text-blue-600 hover:text-blue-800 font-medium underline">Chalon-sur-Saône</Link></li>
                <li><Link href="/formation-haccp-auxerre" className="text-blue-600 hover:text-blue-800 font-medium underline">Auxerre</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "11 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Bourgogne-Franche-Comté</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en Bourgogne-Franche-Comté ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale des 8 départements de la région doivent former au moins un salarié à l&apos;hygiène alimentaire (14h).</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP à Dijon ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le prix varie entre 280 € et 420 € TTC en présentiel. Le financement OPCO AKTO couvre 100 % du coût pour les salariés CHR.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les caves de dégustation avec restauration sont-elles concernées ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, dès lors qu&apos;un établissement propose de la restauration commerciale (service de repas sur place), il est soumis à l&apos;obligation de formation HACCP.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Bourgogne-Franche-Comté ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont proposées à Dijon, Besançon, Chalon-sur-Saône, Auxerre, Belfort, Mâcon et Dole. Des formations en ligne sont aussi disponibles.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation aborde-t-elle les fromages au lait cru ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, le programme inclut les bonnes pratiques de manipulation des produits laitiers, avec des exemples concrets sur le comté, le morbier et le mont d&apos;or, produits emblématiques de la Franche-Comté.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Bourgogne-Franche-Comté</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
