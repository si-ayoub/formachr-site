import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Corse — Ajaccio, Bastia 2026",
  description: "Formation hygiène alimentaire HACCP en Corse : Ajaccio, Bastia, Porto-Vecchio, Calvi, Corte. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-corse` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Corse ?", answer: "Oui, tous les établissements de restauration commerciale en Corse doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Les deux départements corses (Corse-du-Sud 2A et Haute-Corse 2B) sont concernés." },
  { question: "Comment financer la formation HACCP en Corse ?", answer: "L'OPCO AKTO finance à 100 % la formation pour les salariés CHR. France Travail et le CPF sont mobilisables. La Collectivité de Corse propose également des aides spécifiques pour les professionnels insulaires." },
  { question: "Quelles sont les spécificités HACCP en Corse ?", answer: "La Corse est une île touristique avec une forte saisonnalité estivale. Sa gastronomie unique (charcuterie corse, brocciu, vins corses, poissons) et l'insularité imposent une vigilance HACCP particulière sur l'approvisionnement et la chaîne du froid." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Corse", url: "/formation-haccp-region-corse" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Corse",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Corse. Attestation DRAAF, financement OPCO.",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Formations par région</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Corse</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Corse — Île de Beauté, terre de gastronomie
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Corse</span><br />
              <span className="text-xl font-bold">Ajaccio, Bastia 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Corse, Île de Beauté, est une destination touristique prisée avec une gastronomie authentique et identitaire. Charcuterie corse, brocciu, vins AOP : les restaurateurs corses doivent maîtriser les principes HACCP pour valoriser ces produits en toute sécurité.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["✅", "Organismes agréés DRAAF"],
                ["📋", "Attestation officielle 14h"],
                ["💰", "Financement OPCO 100%"],
                ["⚡", "Sessions disponibles sur l'île"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2">{icon} {text}</div>
              ))}
            </div>
          </div>
          <div>
            <LeadForm city="Ajaccio" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Corse — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Corse doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La Corse possède une identité gastronomique forte et unique en France. La charcuterie corse — coppa, lonzu, prisuttu, figatellu — est fabriquée à partir de porcs élevés en semi-liberté dans le maquis et nourris de châtaignes. Le brocciu, fromage frais de brebis ou de chèvre AOP, est l&apos;ingrédient emblématique de la cuisine insulaire. Les vins corses AOP (Patrimonio, Ajaccio, Figari, Porto-Vecchio) accompagnent une gastronomie qui mêle influences italiennes et traditions montagnardes.</p>
            <p>L&apos;insularité de la Corse impose des contraintes spécifiques en matière d&apos;hygiène alimentaire. L&apos;approvisionnement en denrées périssables dépend largement des liaisons maritimes et aériennes avec le continent. La chaîne du froid est un enjeu majeur, particulièrement en été lorsque les températures élevées augmentent les risques de prolifération bactérienne. Les restaurateurs corses doivent être particulièrement vigilants sur la réception, le stockage et la conservation des produits alimentaires.</p>
            <p>Le tourisme est le moteur économique de l&apos;île, avec plus de 3 millions de visiteurs par an concentrés principalement entre juin et septembre. Cette saisonnalité extrême génère une forte demande de formation HACCP avant chaque saison estivale. Les restaurants de plage, paillotes, glaciers et food trucks saisonniers sont particulièrement concernés. Porto-Vecchio, Bonifacio, Calvi, L&apos;Île-Rousse et les stations balnéaires de la côte est voient leur activité de restauration multipliée par cinq en été.</p>
            <p>La formation dure 14 heures avec 4 heures de pratique obligatoire. Elle aborde les 7 principes HACCP, la réglementation, les dangers alimentaires, le PMS et les allergènes. En Corse, les formations sont dispensées principalement à Ajaccio et Bastia, mais des sessions en ligne permettent de couvrir l&apos;ensemble du territoire insulaire, y compris les zones rurales de l&apos;intérieur.</p>
            <p>Le financement est accessible via l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail, le CPF et les aides de la Collectivité de Corse. Le tarif en Corse est légèrement supérieur au continent en raison de l&apos;insularité, entre 290 et 490 euros TTC. Des formations en ligne sont disponibles à partir de 200 euros.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements de Corse</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-2A-corse-du-sud" className="text-blue-600 hover:text-blue-800 font-medium underline">Corse-du-Sud (2A)</Link></li>
            <li><Link href="/formation-haccp-2B-haute-corse" className="text-blue-600 hover:text-blue-800 font-medium underline">Haute-Corse (2B)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Ajaccio","Bastia","Porto-Vecchio","Calvi","Corte","Propriano","Bonifacio","L'Île-Rousse"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['\s]+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "3 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Corse</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Corse</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés sur l&apos;île</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
