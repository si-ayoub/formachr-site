import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Bourgogne-Franche-Comté — Dijon, Besançon 2026",
  description: "Formation hygiène alimentaire HACCP en Bourgogne-Franche-Comté : Dijon, Besançon, Chalon-sur-Saône, Mâcon, Belfort. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-bourgogne-franche-comte` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Bourgogne-Franche-Comté ?", answer: "Oui, tous les établissements de restauration commerciale en Bourgogne-Franche-Comté doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Les 8 départements de la région sont concernés." },
  { question: "Comment financer la formation HACCP en Bourgogne-Franche-Comté ?", answer: "L'OPCO AKTO finance à 100 % la formation pour les salariés CHR. France Travail et le CPF sont mobilisables. La Région Bourgogne-Franche-Comté dispose d'aides complémentaires pour les professionnels de la restauration." },
  { question: "Quelles sont les spécificités HACCP en Bourgogne-Franche-Comté ?", answer: "La région est un haut lieu de la gastronomie française (vins de Bourgogne, moutarde de Dijon, comté, escargots, boeuf bourguignon). Le tourisme oenotouristique et la tradition culinaire imposent une formation HACCP rigoureuse." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Bourgogne-Franche-Comté", url: "/formation-haccp-region-bourgogne-franche-comte" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Bourgogne-Franche-Comté",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Bourgogne-Franche-Comté. Attestation DRAAF, financement OPCO.",
        price: "270",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Formations par région</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Bourgogne-Franche-Comté</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Bourgogne-Franche-Comté — Haut lieu de gastronomie
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Bourgogne-Franche-Comté</span><br />
              <span className="text-xl font-bold">Dijon, Besançon 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Bourgogne-Franche-Comté est une terre de gastronomie mondialement reconnue. Vins de Bourgogne, comté, moutarde de Dijon, escargots : les restaurateurs de la région doivent maîtriser les principes HACCP pour valoriser ces produits d&apos;exception en toute sécurité.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["✅", "Organismes agréés DRAAF"],
                ["📋", "Attestation officielle 14h"],
                ["💰", "Financement OPCO 100%"],
                ["⚡", "Sessions chaque semaine"],
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
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Bourgogne-Franche-Comté — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Bourgogne-Franche-Comté doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La Bourgogne-Franche-Comté est un territoire d&apos;exception gastronomique. La Bourgogne est célèbre dans le monde entier pour ses vins (Romanée-Conti, Chablis, Pommard, Meursault), sa moutarde de Dijon, ses escargots de Bourgogne, son boeuf bourguignon et ses oeufs en meurette. Dijon, capitale des Ducs de Bourgogne, est une ville gastronomique majeure avec la Cité internationale de la gastronomie et du vin, inaugurée en 2022.</p>
            <p>La Franche-Comté apporte ses propres trésors culinaires : le comté, fromage AOP le plus produit en France, le morbier, la cancoillotte, les saucisses de Morteau et de Montbéliard. Besançon, capitale comtoise, et les villages du Jura disposent de restaurants et fromageries où la maîtrise HACCP est essentielle pour garantir la qualité et la sécurité de ces produits à base de lait cru.</p>
            <p>Le tourisme oenotouristique en Bourgogne est un moteur économique majeur. La Route des Grands Crus, classée au patrimoine mondial de l&apos;UNESCO, attire des visiteurs du monde entier qui fréquentent les restaurants et caves de dégustation de Beaune, Nuits-Saint-Georges et Gevrey-Chambertin. Le Jura offre également un tourisme nature et gastronomique avec ses vins jaunes et ses fromages.</p>
            <p>La formation dure 14 heures avec 4 heures de pratique obligatoire. Elle couvre les 7 principes HACCP, la réglementation européenne, les dangers alimentaires, le PMS et la gestion des allergènes. La DRAAF Bourgogne-Franche-Comté agrée les organismes sur les 8 départements.</p>
            <p>Le financement est accessible via l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail, le CPF et les aides régionales. Le tarif moyen se situe entre 270 et 420 euros TTC. Des sessions sont proposées à Dijon, Besançon, Chalon-sur-Saône, Mâcon, Auxerre et Belfort.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements de Bourgogne-Franche-Comté</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-21-cote-d-or" className="text-blue-600 hover:text-blue-800 font-medium underline">Côte-d&apos;Or (21)</Link></li>
            <li><Link href="/formation-haccp-25-doubs" className="text-blue-600 hover:text-blue-800 font-medium underline">Doubs (25)</Link></li>
            <li><Link href="/formation-haccp-71-saone-et-loire" className="text-blue-600 hover:text-blue-800 font-medium underline">Saône-et-Loire (71)</Link></li>
            <li><Link href="/formation-haccp-39-jura" className="text-blue-600 hover:text-blue-800 font-medium underline">Jura (39)</Link></li>
            <li><Link href="/formation-haccp-58-nievre" className="text-blue-600 hover:text-blue-800 font-medium underline">Nièvre (58)</Link></li>
            <li><Link href="/formation-haccp-89-yonne" className="text-blue-600 hover:text-blue-800 font-medium underline">Yonne (89)</Link></li>
            <li><Link href="/formation-haccp-70-haute-saone" className="text-blue-600 hover:text-blue-800 font-medium underline">Haute-Saône (70)</Link></li>
            <li><Link href="/formation-haccp-90-territoire-de-belfort" className="text-blue-600 hover:text-blue-800 font-medium underline">Territoire de Belfort (90)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Dijon","Besançon","Chalon-sur-Saône","Mâcon","Auxerre","Belfort","Nevers","Sens","Montbéliard","Beaune"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "7 000+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "270€ – 420€" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Bourgogne-Franche-Comté</h2>
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

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Bourgogne-Franche-Comté</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
