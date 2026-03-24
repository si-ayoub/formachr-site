import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Grand Est — Strasbourg, Metz, Reims 2026",
  description: "Formation hygiène alimentaire HACCP en Grand Est : Strasbourg, Metz, Reims, Nancy, Mulhouse. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-grand-est` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Grand Est ?", answer: "Oui, tous les établissements de restauration commerciale en Grand Est doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). L'obligation concerne les 10 départements de la région, de l'Alsace à la Champagne." },
  { question: "Comment financer la formation HACCP en Grand Est ?", answer: "L'OPCO AKTO finance à 100 % la formation pour les salariés du secteur CHR. France Travail et le CPF sont mobilisables. La Région Grand Est dispose également d'aides pour les créateurs d'entreprise et les reconversions professionnelles." },
  { question: "Quelles sont les spécificités HACCP en Grand Est ?", answer: "Le Grand Est est une région frontalière (Allemagne, Belgique, Luxembourg, Suisse) avec une forte tradition culinaire (choucroute, quiche lorraine, bière). Le tourisme viticole en Alsace et champenois en Champagne génère une demande importante de formation HACCP." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Grand Est", url: "/formation-haccp-region-grand-est" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Grand Est",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Grand Est. Attestation DRAAF, financement OPCO.",
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
          <li className="text-gray-800 font-medium">Grand Est</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Grand Est — Alsace, Lorraine, Champagne
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Grand Est</span><br />
              <span className="text-xl font-bold">Strasbourg, Metz, Reims 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Le Grand Est réunit l&apos;Alsace, la Lorraine et la Champagne-Ardenne. Cette région frontalière, riche d&apos;une gastronomie unique entre influences françaises et germaniques, compte des milliers de restaurants soumis à l&apos;obligation HACCP.
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
            <LeadForm city="Strasbourg" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Grand Est — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Grand Est doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Le Grand Est est une région d&apos;une richesse gastronomique exceptionnelle. L&apos;Alsace, avec ses winstubs, ses tartes flambées, sa choucroute et ses vins d&apos;Alsace, est l&apos;une des destinations culinaires les plus prisées de France. Strasbourg, siège du Parlement européen, attire des millions de touristes, notamment pendant son célèbre marché de Noël, le Christkindelsmärik, qui génère une activité de restauration intense nécessitant des formations HACCP.</p>
            <p>La Lorraine apporte sa quiche lorraine, ses mirabelles, sa potée lorraine et ses madeleines de Commercy. Metz et Nancy, les deux grandes métropoles lorraines, disposent d&apos;un tissu de restauration dense et varié. La Champagne est mondialement connue pour son vin effervescent, et Reims et Épernay accueillent un tourisme oenotouristique important avec de nombreux restaurants gastronomiques.</p>
            <p>La position frontalière du Grand Est (Allemagne, Belgique, Luxembourg, Suisse) en fait un carrefour européen avec un tourisme d&apos;affaires et de transit considérable. Les gares TGV et les aéroports de la région génèrent une forte demande de restauration rapide et de services alimentaires, tous soumis aux obligations HACCP.</p>
            <p>La formation dure 14 heures minimum avec 4 heures de mise en pratique obligatoire. Elle couvre les 7 principes HACCP, la réglementation européenne, les dangers alimentaires, le Plan de Maîtrise Sanitaire et la gestion des allergènes. La DRAAF Grand Est agrée les organismes sur les 10 départements de la région.</p>
            <p>Le financement est accessible via l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail, le CPF et les aides de la Région Grand Est. Le tarif moyen se situe entre 270 et 430 euros TTC. Des sessions sont disponibles chaque semaine à Strasbourg, Metz, Reims, Nancy, Mulhouse et Colmar.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements du Grand Est</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-67-bas-rhin" className="text-blue-600 hover:text-blue-800 font-medium underline">Bas-Rhin (67)</Link></li>
            <li><Link href="/formation-haccp-57-moselle" className="text-blue-600 hover:text-blue-800 font-medium underline">Moselle (57)</Link></li>
            <li><Link href="/formation-haccp-51-marne" className="text-blue-600 hover:text-blue-800 font-medium underline">Marne (51)</Link></li>
            <li><Link href="/formation-haccp-68-haut-rhin" className="text-blue-600 hover:text-blue-800 font-medium underline">Haut-Rhin (68)</Link></li>
            <li><Link href="/formation-haccp-54-meurthe-et-moselle" className="text-blue-600 hover:text-blue-800 font-medium underline">Meurthe-et-Moselle (54)</Link></li>
            <li><Link href="/formation-haccp-08-ardennes" className="text-blue-600 hover:text-blue-800 font-medium underline">Ardennes (08)</Link></li>
            <li><Link href="/formation-haccp-10-aube" className="text-blue-600 hover:text-blue-800 font-medium underline">Aube (10)</Link></li>
            <li><Link href="/formation-haccp-52-haute-marne" className="text-blue-600 hover:text-blue-800 font-medium underline">Haute-Marne (52)</Link></li>
            <li><Link href="/formation-haccp-55-meuse" className="text-blue-600 hover:text-blue-800 font-medium underline">Meuse (55)</Link></li>
            <li><Link href="/formation-haccp-88-vosges" className="text-blue-600 hover:text-blue-800 font-medium underline">Vosges (88)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Strasbourg","Metz","Reims","Nancy","Mulhouse","Colmar","Troyes","Charleville-Mézières","Épernay","Thionville"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "14 000+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "270€ – 430€" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Grand Est</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Grand Est</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
