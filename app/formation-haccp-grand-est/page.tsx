import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Grand Est — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Grand Est. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-grand-est` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire dans le Grand Est ?", answer: "Oui, tous les établissements de restauration commerciale des 10 départements du Grand Est doivent former au moins un salarié à l&apos;hygiène alimentaire (14h). L&apos;obligation s&apos;applique depuis octobre 2012." },
  { question: "Combien coûte la formation HACCP à Strasbourg ?", answer: "Le tarif varie entre 280 € et 420 € TTC en présentiel. La prise en charge OPCO AKTO est possible à 100 % pour les salariés du secteur CHR." },
  { question: "Les winstubs sont-elles soumises à la formation HACCP ?", answer: "Oui, les winstubs, comme tous les établissements de restauration commerciale, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire." },
  { question: "Où trouver une formation HACCP dans le Grand Est ?", answer: "Des sessions sont proposées à Strasbourg, Reims, Metz, Nancy, Mulhouse, Colmar, Troyes et Charleville-Mézières. Des formations en ligne sont aussi disponibles." },
  { question: "La formation HACCP est-elle reconnue en Allemagne ou au Luxembourg ?", answer: "La formation HACCP française répond aux exigences du règlement européen (CE) 852/2004, applicable dans toute l&apos;UE. Cependant, chaque pays peut avoir des exigences complémentaires. L&apos;attestation française est valable pour exercer en France." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Grand Est", url: "/formation-haccp-grand-est" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Grand Est",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Grand Est",
        city: "Strasbourg",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Grand Est",
        city: "Strasbourg",
        postalCode: "67000",
        lat: 48.5734,
        lng: 7.7521
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Grand Est</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Grand Est — 20 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Grand Est</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La région Grand Est, carrefour européen entre la France, l&apos;Allemagne et le Luxembourg, est une terre de traditions culinaires riches. Avec Strasbourg, capitale européenne, et plus de 20 000 établissements de restauration, la formation HACCP est indispensable pour les professionnels de la région.
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
            <LeadForm city="Strasbourg" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Grand Est — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Grand Est doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Grand Est agrée les organismes de formation pour les 10 départements de la région : Bas-Rhin (67), Haut-Rhin (68), Moselle (57), Meurthe-et-Moselle (54), Meuse (55), Vosges (88), Marne (51), Aube (10), Haute-Marne (52) et Ardennes (08). La diversité culturelle — Alsace, Lorraine, Champagne — se traduit par des traditions culinaires variées.</p>
            <p>La cuisine alsacienne est mondialement connue : winstubs, choucroute, tarte flambée, baeckeoffe, kouglof. En Lorraine, la quiche lorraine, la potée et les mirabelles sont emblématiques. La Champagne est célèbre pour ses vignobles et sa gastronomie raffinée. Strasbourg, avec son marché de Noël (le plus ancien de France), attire des millions de visiteurs qui fréquentent les restaurants de la ville. Toutes ces traditions culinaires exigent une maîtrise de l&apos;hygiène alimentaire.</p>
            <p>La formation HACCP dans le Grand Est suit le programme national de 14 heures, avec 4 heures de pratique obligatoire depuis 2024. Le programme couvre la réglementation, les dangers alimentaires, la méthode HACCP et le PMS. Les formateurs intègrent des exemples locaux : conservation de la choucroute, gestion des températures dans les winstubs, hygiène lors des marchés de Noël.</p>
            <p>Le financement est assuré par l&apos;OPCO AKTO pour les salariés CHR, France Travail pour les demandeurs d&apos;emploi, et les aides de la Région Grand Est. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont disponibles à Strasbourg, Reims, Metz, Nancy, Mulhouse et Colmar.</p>
            <p>La position transfrontalière du Grand Est crée des enjeux spécifiques. De nombreux travailleurs frontaliers (Luxembourg, Allemagne, Suisse) exercent dans la restauration. La réglementation française en matière d&apos;hygiène alimentaire peut différer des normes allemandes ou luxembourgeoises, rendant la formation HACCP d&apos;autant plus importante. Le tourisme viticole en Alsace et en Champagne génère également une activité de restauration saisonnière nécessitant des formations régulières.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Grand Est</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-strasbourg" className="text-blue-600 hover:text-blue-800 font-medium underline">Strasbourg</Link></li>
                <li><Link href="/formation-haccp-reims" className="text-blue-600 hover:text-blue-800 font-medium underline">Reims</Link></li>
                <li><Link href="/formation-haccp-metz" className="text-blue-600 hover:text-blue-800 font-medium underline">Metz</Link></li>
                <li><Link href="/formation-haccp-nancy" className="text-blue-600 hover:text-blue-800 font-medium underline">Nancy</Link></li>
                <li><Link href="/formation-haccp-mulhouse" className="text-blue-600 hover:text-blue-800 font-medium underline">Mulhouse</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "20 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Grand Est</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire dans le Grand Est ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale des 10 départements du Grand Est doivent former au moins un salarié à l&apos;hygiène alimentaire (14h). L&apos;obligation s&apos;applique depuis octobre 2012.</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP à Strasbourg ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le tarif varie entre 280 € et 420 € TTC en présentiel. La prise en charge OPCO AKTO est possible à 100 % pour les salariés du secteur CHR.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les winstubs sont-elles soumises à la formation HACCP ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, les winstubs, comme tous les établissements de restauration commerciale, doivent justifier d&apos;au moins un salarié formé en hygiène alimentaire.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP dans le Grand Est ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont proposées à Strasbourg, Reims, Metz, Nancy, Mulhouse, Colmar, Troyes et Charleville-Mézières. Des formations en ligne sont aussi disponibles.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle reconnue en Allemagne ou au Luxembourg ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">La formation HACCP française répond aux exigences du règlement européen (CE) 852/2004, applicable dans toute l&apos;UE. Cependant, chaque pays peut avoir des exigences complémentaires. L&apos;attestation française est valable pour exercer en France.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Grand Est</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
