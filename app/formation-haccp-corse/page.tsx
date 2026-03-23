import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Corse — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Corse. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-corse` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Corse ?", answer: "Oui, tous les établissements de restauration commerciale de Corse (Corse-du-Sud et Haute-Corse) doivent former au moins un salarié à l&apos;hygiène alimentaire (14h)." },
  { question: "Combien coûte la formation HACCP en Corse ?", answer: "Le prix varie entre 300 € et 490 € TTC en présentiel, légèrement plus élevé qu&apos;en métropole. Des formations en ligne sont disponibles à partir de 200 €. Le financement OPCO AKTO est possible." },
  { question: "Peut-on suivre la formation HACCP en ligne depuis la Corse ?", answer: "Oui, des formations à distance sont disponibles et permettent de pallier l&apos;insularité. Depuis l&apos;arrêté de 2024, 4 heures de pratique sont obligatoires, mais certains organismes proposent des solutions mixtes." },
  { question: "Où trouver une formation HACCP en Corse ?", answer: "Des sessions sont organisées à Ajaccio et Bastia principalement. Des organismes du continent se déplacent également pour proposer des sessions à Porto-Vecchio, Calvi ou Corte selon la demande." },
  { question: "Les fermes-auberges corses sont-elles concernées ?", answer: "Oui, les fermes-auberges qui proposent de la restauration commerciale sont soumises à l&apos;obligation de formation HACCP." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Corse", url: "/formation-haccp-corse" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Corse",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Corse",
        city: "Ajaccio",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Corse",
        city: "Ajaccio",
        postalCode: "20000",
        lat: 41.9263,
        lng: 8.7369
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Corse</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Corse — 4 500 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Corse</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La Corse, île de beauté et de traditions culinaires uniques, compte plus de 4 500 établissements de restauration commerciale. Du littoral touristique aux villages de montagne, la formation HACCP est obligatoire pour tous les professionnels de la restauration insulaire.
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
            <LeadForm city="Ajaccio" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Corse — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Corse doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF de Corse agrée les organismes de formation pour les 2 départements : Corse-du-Sud (2A) et Haute-Corse (2B). L&apos;insularité de la Corse crée des défis spécifiques en matière de formation : le déplacement des formateurs depuis le continent ou l&apos;organisation de sessions locales sont des enjeux logistiques importants.</p>
            <p>La gastronomie corse est riche et authentique : charcuteries AOP (coppa, lonzu, prisuttu, figatellu), fromages (brocciu AOP, tomme corse), miel de maquis, huile d&apos;olive, farine de châtaigne. La cuisine corse mêle influences méditerranéennes et traditions montagnardes. Les auberges de montagne, les restaurants de plage et les fermes-auberges proposent une cuisine du terroir qui nécessite une maîtrise de l&apos;hygiène alimentaire.</p>
            <p>La formation HACCP en Corse dure 14 heures avec 4 heures de pratique. Le programme national est adapté aux réalités insulaires : conservation des charcuteries artisanales, manipulation du brocciu frais, hygiène dans les fermes-auberges, gestion de la chaîne du froid dans un contexte insulaire (transport maritime des denrées).</p>
            <p>Le financement est possible via l&apos;OPCO AKTO, France Travail et les aides de la Collectivité de Corse. Le prix moyen est de 300 € à 490 € TTC (légèrement plus élevé qu&apos;en métropole en raison de l&apos;insularité). Des sessions sont organisées à Ajaccio et Bastia, et des formations en ligne permettent de pallier l&apos;éloignement géographique.</p>
            <p>La Corse accueille plus de 3 millions de touristes chaque année, principalement en été. Cette saisonnalité intense multiplie les besoins en personnel formé pour les restaurants côtiers, les paillotes de plage et les hôtels-restaurants. Les DDPP de Corse renforcent les contrôles en haute saison. L&apos;insularité impose également une vigilance accrue sur le transport et la conservation des denrées alimentaires acheminées par bateau ou avion depuis le continent.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Corse</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-ajaccio" className="text-blue-600 hover:text-blue-800 font-medium underline">Ajaccio</Link></li>
                <li><Link href="/formation-haccp-bastia" className="text-blue-600 hover:text-blue-800 font-medium underline">Bastia</Link></li>
                <li><Link href="/formation-haccp-porto-vecchio" className="text-blue-600 hover:text-blue-800 font-medium underline">Porto-Vecchio</Link></li>
                <li><Link href="/formation-haccp-calvi" className="text-blue-600 hover:text-blue-800 font-medium underline">Calvi</Link></li>
                <li><Link href="/formation-haccp-corte" className="text-blue-600 hover:text-blue-800 font-medium underline">Corte</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "4 500+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Corse</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en Corse ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale de Corse (Corse-du-Sud et Haute-Corse) doivent former au moins un salarié à l&apos;hygiène alimentaire (14h).</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP en Corse ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le prix varie entre 300 € et 490 € TTC en présentiel, légèrement plus élevé qu&apos;en métropole. Des formations en ligne sont disponibles à partir de 200 €. Le financement OPCO AKTO est possible.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Peut-on suivre la formation HACCP en ligne depuis la Corse ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, des formations à distance sont disponibles et permettent de pallier l&apos;insularité. Depuis l&apos;arrêté de 2024, 4 heures de pratique sont obligatoires, mais certains organismes proposent des solutions mixtes.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Corse ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont organisées à Ajaccio et Bastia principalement. Des organismes du continent se déplacent également pour proposer des sessions à Porto-Vecchio, Calvi ou Corte selon la demande.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les fermes-auberges corses sont-elles concernées ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, les fermes-auberges qui proposent de la restauration commerciale sont soumises à l&apos;obligation de formation HACCP.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Corse</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
