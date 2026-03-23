import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Île-de-France — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Île-de-France. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-ile-de-france` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour tous les restaurants en Île-de-France ?", answer: "Oui, depuis octobre 2012, tous les établissements de restauration commerciale en Île-de-France (restaurants, snacks, food trucks, traiteurs) doivent justifier d&apos;au moins un membre du personnel formé en hygiène alimentaire. Cette obligation s&apos;applique dans les 8 départements franciliens." },
  { question: "Combien coûte une formation HACCP en Île-de-France ?", answer: "Le prix d&apos;une formation HACCP en Île-de-France varie entre 290 € et 490 € TTC en présentiel. Des sessions en ligne sont disponibles à partir de 200 €. La formation peut être prise en charge à 100 % par l&apos;OPCO AKTO pour les salariés du secteur CHR." },
  { question: "Où se déroulent les formations HACCP en Île-de-France ?", answer: "Des sessions de formation sont proposées dans toutes les grandes villes de la région : Paris (nombreux centres dans chaque arrondissement), Boulogne-Billancourt, Saint-Denis, Versailles, Argenteuil, Créteil, Nanterre et bien d&apos;autres communes." },
  { question: "Quelle est la DRAAF compétente pour l&apos;Île-de-France ?", answer: "La DRAAF Île-de-France, basée à Paris, est l&apos;autorité compétente pour agréer les organismes de formation en hygiène alimentaire dans les 8 départements de la région (75, 77, 78, 91, 92, 93, 94, 95)." },
  { question: "Combien de temps dure la formation HACCP en Île-de-France ?", answer: "La formation dure 14 heures minimum (généralement réparties sur 2 jours). Depuis l&apos;arrêté du 12 février 2024, elle doit comporter au moins 4 heures de mise en pratique. L&apos;attestation est délivrée à vie, sans obligation de recyclage." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Île-de-France", url: "/formation-haccp-ile-de-france" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Île-de-France",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Île-de-France",
        city: "Paris",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Île-de-France",
        city: "Paris",
        postalCode: "75001",
        lat: 48.8566,
        lng: 2.3522
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Île-de-France</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Île-de-France — 45 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Île-de-France</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              L&apos;Île-de-France est la première région de France en nombre d&apos;établissements de restauration commerciale. Avec plus de 45 000 restaurants, snacks, food trucks et commerces alimentaires, la région francilienne concentre à elle seule près d&apos;un quart de l&apos;offre nationale de restauration. La formation HACCP y est donc un enjeu majeur pour les professionnels du secteur.
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
            <LeadForm city="Paris" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Île-de-France — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Île-de-France doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La Direction Régionale de l&apos;Alimentation, de l&apos;Agriculture et de la Forêt (DRAAF) d&apos;Île-de-France est compétente pour agréer les organismes de formation en hygiène alimentaire sur l&apos;ensemble des huit départements franciliens : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Yvelines (78), Essonne (91), Val-d&apos;Oise (95) et Seine-et-Marne (77). Tous les organismes proposant la formation HACCP dans ces départements doivent être enregistrés auprès de cette DRAAF.</p>
            <p>Le tissu économique francilien est d&apos;une richesse exceptionnelle. Paris, capitale gastronomique mondiale, abrite à elle seule plus de 15 000 restaurants allant du bistrot de quartier aux établissements étoilés. La petite couronne (92, 93, 94) connaît un développement rapide des food trucks, dark kitchens et concepts de restauration rapide, tous soumis à l&apos;obligation de formation. La grande couronne (78, 91, 95, 77) voit se multiplier les zones commerciales avec des pôles de restauration importants.</p>
            <p>La formation hygiène alimentaire en Île-de-France dure 14 heures, conformément au décret du 24 juin 2011 modifié par l&apos;arrêté du 12 février 2024. Elle comprend désormais 4 heures obligatoires de mise en pratique. Le programme aborde la réglementation européenne (paquet hygiène), les dangers alimentaires (biologiques, chimiques, physiques), les 7 principes de la méthode HACCP, le Plan de Maîtrise Sanitaire (PMS) et la gestion des allergènes. En Île-de-France, les contrôles de la DDPP sont particulièrement fréquents en raison de la densité d&apos;établissements.</p>
            <p>Le financement de la formation HACCP en Île-de-France est accessible par plusieurs voies. L&apos;OPCO AKTO prend en charge à 100 % la formation pour les salariés du secteur CHR (cafés, hôtels, restaurants). Les demandeurs d&apos;emploi peuvent bénéficier d&apos;une prise en charge par France Travail (ex-Pôle Emploi). Les créateurs d&apos;entreprise peuvent mobiliser les aides régionales ou le dispositif CPF. Le prix moyen d&apos;une formation HACCP en Île-de-France varie entre 290 € et 490 € TTC en présentiel, avec des sessions disponibles chaque semaine dans la plupart des villes de la région.</p>
            <p>La région francilienne présente des spécificités en matière d&apos;hygiène alimentaire. La densité de population et le nombre élevé de touristes internationaux (plus de 50 millions par an) imposent une vigilance accrue sur la sécurité sanitaire des aliments. Les services de la DDPP de Paris et de la petite couronne effectuent des contrôles réguliers, et l&apos;absence d&apos;attestation de formation HACCP peut entraîner une amende de 5e classe (jusqu&apos;à 1 500 €). Les restaurants des zones touristiques (Champs-Élysées, Montmartre, Le Marais) sont particulièrement surveillés.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Île-de-France</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-paris" className="text-blue-600 hover:text-blue-800 font-medium underline">Paris</Link></li>
                <li><Link href="/formation-haccp-boulogne-billancourt" className="text-blue-600 hover:text-blue-800 font-medium underline">Boulogne-Billancourt</Link></li>
                <li><Link href="/formation-haccp-saint-denis" className="text-blue-600 hover:text-blue-800 font-medium underline">Saint-Denis</Link></li>
                <li><Link href="/formation-haccp-argenteuil" className="text-blue-600 hover:text-blue-800 font-medium underline">Argenteuil</Link></li>
                <li><Link href="/formation-haccp-versailles" className="text-blue-600 hover:text-blue-800 font-medium underline">Versailles</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "45 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Île-de-France</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire pour tous les restaurants en Île-de-France ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, depuis octobre 2012, tous les établissements de restauration commerciale en Île-de-France (restaurants, snacks, food trucks, traiteurs) doivent justifier d&apos;au moins un membre du personnel formé en hygiène alimentaire. Cette obligation s&apos;applique dans les 8 départements franciliens.</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte une formation HACCP en Île-de-France ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le prix d&apos;une formation HACCP en Île-de-France varie entre 290 € et 490 € TTC en présentiel. Des sessions en ligne sont disponibles à partir de 200 €. La formation peut être prise en charge à 100 % par l&apos;OPCO AKTO pour les salariés du secteur CHR.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où se déroulent les formations HACCP en Île-de-France ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions de formation sont proposées dans toutes les grandes villes de la région : Paris (nombreux centres dans chaque arrondissement), Boulogne-Billancourt, Saint-Denis, Versailles, Argenteuil, Créteil, Nanterre et bien d&apos;autres communes.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Quelle est la DRAAF compétente pour l&apos;Île-de-France ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">La DRAAF Île-de-France, basée à Paris, est l&apos;autorité compétente pour agréer les organismes de formation en hygiène alimentaire dans les 8 départements de la région (75, 77, 78, 91, 92, 93, 94, 95).</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien de temps dure la formation HACCP en Île-de-France ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">La formation dure 14 heures minimum (généralement réparties sur 2 jours). Depuis l&apos;arrêté du 12 février 2024, elle doit comporter au moins 4 heures de mise en pratique. L&apos;attestation est délivrée à vie, sans obligation de recyclage.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Île-de-France</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
