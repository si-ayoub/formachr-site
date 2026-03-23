import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Hauts-de-France — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Hauts-de-France. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-hauts-de-france` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire dans les Hauts-de-France ?", answer: "Oui, tous les établissements de restauration commerciale des 5 départements des Hauts-de-France doivent justifier d&apos;au moins un salarié formé à l&apos;hygiène alimentaire (14h). L&apos;obligation est en vigueur depuis octobre 2012." },
  { question: "Combien coûte la formation HACCP à Lille ?", answer: "Le prix varie entre 280 € et 420 € TTC en présentiel. La formation peut être prise en charge à 100 % par l&apos;OPCO AKTO pour les salariés du secteur CHR ou par France Travail pour les demandeurs d&apos;emploi." },
  { question: "Les friteries et estaminets sont-ils concernés ?", answer: "Oui, les friteries, estaminets et tous les commerces alimentaires avec service sur place ou à emporter sont soumis à l&apos;obligation de formation HACCP." },
  { question: "Où trouver une formation HACCP dans les Hauts-de-France ?", answer: "Des sessions sont organisées régulièrement à Lille, Amiens, Roubaix, Tourcoing, Dunkerque, Calais, Beauvais et Compiègne. Des formations à distance sont aussi disponibles." },
  { question: "L&apos;industrie agroalimentaire est-elle concernée par la formation HACCP ?", answer: "L&apos;obligation de formation HACCP de 14h concerne spécifiquement la restauration commerciale. Cependant, les entreprises agroalimentaires doivent mettre en place des procédures HACCP dans le cadre de leurs obligations réglementaires (paquet hygiène)." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Hauts-de-France", url: "/formation-haccp-hauts-de-france" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Hauts-de-France",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Hauts-de-France",
        city: "Lille",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Hauts-de-France",
        city: "Lille",
        postalCode: "59000",
        lat: 50.6292,
        lng: 3.0573
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Hauts-de-France</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Hauts-de-France — 18 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Hauts-de-France</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Les Hauts-de-France, première région agroalimentaire de France, comptent plus de 18 000 établissements de restauration commerciale. De Lille à Amiens, en passant par les villes du littoral picard et de la Côte d&apos;Opale, la formation HACCP est incontournable pour tous les professionnels de la restauration.
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
            <LeadForm city="Lille" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Hauts-de-France — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Hauts-de-France doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Hauts-de-France agrée les organismes de formation pour les 5 départements de la région : Nord (59), Pas-de-Calais (62), Somme (80), Aisne (02) et Oise (60). La région est le premier bassin agroalimentaire de France, avec de grandes industries de transformation alimentaire et un réseau dense de restauration.</p>
            <p>La gastronomie des Hauts-de-France est riche et conviviale : estaminets traditionnels, brasseries, friteries, restaurants de moules-frites. La carbonnade flamande, le welsh, le maroilles, les ficelles picardes et la tarte au sucre font partie du patrimoine culinaire régional. La proximité de la Belgique influence la cuisine locale, notamment avec la culture des bières artisanales et des frites.</p>
            <p>La formation HACCP dans les Hauts-de-France dure 14 heures avec 4 heures de pratique. Elle aborde la réglementation européenne et française, les dangers alimentaires (avec un focus sur les spécificités de la friture et de la conservation des bières), les 7 principes HACCP et le Plan de Maîtrise Sanitaire. Les formateurs adaptent les exemples aux réalités de la restauration régionale.</p>
            <p>Le financement est possible via l&apos;OPCO AKTO pour les salariés CHR, France Travail pour les demandeurs d&apos;emploi, et les aides du Conseil Régional des Hauts-de-France. Le prix moyen est de 280 € à 420 € TTC. Des sessions sont proposées chaque semaine à Lille, Amiens, Roubaix, Dunkerque et dans les principales villes de la région.</p>
            <p>La région des Hauts-de-France est un carrefour de transit (Eurotunnel, autoroutes vers la Belgique et les Pays-Bas) avec de nombreuses aires de restauration et restaurants routiers soumis à la formation HACCP. Le littoral de la Côte d&apos;Opale (Boulogne-sur-Mer, Le Touquet, Berck) voit affluer les touristes en été, augmentant les besoins en personnel formé. L&apos;industrie agroalimentaire régionale (sucreries, conserveries, brasseries) complète le panorama des professionnels concernés par l&apos;hygiène alimentaire.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Hauts-de-France</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-lille" className="text-blue-600 hover:text-blue-800 font-medium underline">Lille</Link></li>
                <li><Link href="/formation-haccp-amiens" className="text-blue-600 hover:text-blue-800 font-medium underline">Amiens</Link></li>
                <li><Link href="/formation-haccp-roubaix" className="text-blue-600 hover:text-blue-800 font-medium underline">Roubaix</Link></li>
                <li><Link href="/formation-haccp-tourcoing" className="text-blue-600 hover:text-blue-800 font-medium underline">Tourcoing</Link></li>
                <li><Link href="/formation-haccp-dunkerque" className="text-blue-600 hover:text-blue-800 font-medium underline">Dunkerque</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "18 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Hauts-de-France</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire dans les Hauts-de-France ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale des 5 départements des Hauts-de-France doivent justifier d&apos;au moins un salarié formé à l&apos;hygiène alimentaire (14h). L&apos;obligation est en vigueur depuis octobre 2012.</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP à Lille ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le prix varie entre 280 € et 420 € TTC en présentiel. La formation peut être prise en charge à 100 % par l&apos;OPCO AKTO pour les salariés du secteur CHR ou par France Travail pour les demandeurs d&apos;emploi.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les friteries et estaminets sont-ils concernés ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, les friteries, estaminets et tous les commerces alimentaires avec service sur place ou à emporter sont soumis à l&apos;obligation de formation HACCP.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP dans les Hauts-de-France ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont organisées régulièrement à Lille, Amiens, Roubaix, Tourcoing, Dunkerque, Calais, Beauvais et Compiègne. Des formations à distance sont aussi disponibles.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  L&apos;industrie agroalimentaire est-elle concernée par la formation HACCP ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">L&apos;obligation de formation HACCP de 14h concerne spécifiquement la restauration commerciale. Cependant, les entreprises agroalimentaires doivent mettre en place des procédures HACCP dans le cadre de leurs obligations réglementaires (paquet hygiène).</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Hauts-de-France</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
