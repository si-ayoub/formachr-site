import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Occitanie — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Occitanie. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-occitanie` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Occitanie ?", answer: "Oui, tous les établissements de restauration commerciale en Occitanie doivent justifier d&apos;au moins un membre du personnel formé à l&apos;hygiène alimentaire (14h). Cette obligation s&apos;applique dans les 13 départements de la région depuis 2012." },
  { question: "Combien coûte la formation HACCP à Toulouse ou Montpellier ?", answer: "Le tarif varie entre 290 € et 450 € TTC en présentiel. La formation peut être financée à 100 % par l&apos;OPCO AKTO pour les salariés ou par France Travail pour les demandeurs d&apos;emploi." },
  { question: "La formation HACCP aborde-t-elle les produits du terroir occitan ?", answer: "Le programme national est adapté au contexte local. Les formateurs illustrent les principes HACCP avec des exemples concrets liés au foie gras, au roquefort, au cassoulet et aux autres spécialités de la région." },
  { question: "Où trouver une formation HACCP en Occitanie ?", answer: "Des sessions sont organisées régulièrement à Toulouse, Montpellier, Nîmes, Perpignan, Béziers, Albi, Tarbes et Carcassonne. Des formations à distance sont également disponibles depuis toute la région." },
  { question: "Les saisonniers du littoral doivent-ils être formés en HACCP ?", answer: "L&apos;établissement doit justifier d&apos;au moins un salarié formé. Pour les restaurants saisonniers du littoral, il est vivement recommandé de former le personnel avant l&apos;ouverture, car les contrôles DDPP sont renforcés en été." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Occitanie", url: "/formation-haccp-occitanie" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Occitanie",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Occitanie",
        city: "Toulouse",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Occitanie",
        city: "Toulouse",
        postalCode: "31000",
        lat: 43.6047,
        lng: 1.4442
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Occitanie</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Occitanie — 25 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Occitanie</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              L&apos;Occitanie, née de la fusion du Languedoc-Roussillon et de Midi-Pyrénées, est une région riche en traditions culinaires. Avec Toulouse et Montpellier comme métropoles phares et plus de 25 000 établissements de restauration, la formation HACCP est essentielle pour les professionnels de la restauration en Occitanie.
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
            <LeadForm city="Toulouse" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Occitanie — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Occitanie doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Occitanie agrée les organismes de formation en hygiène alimentaire pour les 13 départements de la région, de l&apos;Ariège aux Pyrénées-Orientales, du Lot à l&apos;Hérault. Cette vaste région présente des réalités très différentes : métropoles dynamiques (Toulouse, Montpellier), stations balnéaires du littoral méditerranéen, villages touristiques du Tarn ou de l&apos;Aveyron, et stations thermales des Pyrénées.</p>
            <p>La gastronomie occitane est d&apos;une grande diversité : cassoulet de Castelnaudary, foie gras du Gers, roquefort de l&apos;Aveyron, aligot de l&apos;Aubrac, brandade de Nîmes, anchoïade de Collioure. Ces spécialités imposent des connaissances spécifiques en matière d&apos;hygiène alimentaire, notamment la maîtrise des températures de conservation du foie gras et la gestion des produits laitiers crus comme le roquefort.</p>
            <p>La formation HACCP en Occitanie suit le programme national de 14 heures avec 4 heures de pratique obligatoire depuis 2024. Elle couvre la réglementation (paquet hygiène, décret 2011), les dangers alimentaires, la méthode HACCP en 7 principes, le PMS et la traçabilité. Les formateurs adaptent les exemples aux produits du terroir occitan et aux enjeux locaux : restauration de plage sur le littoral, saisonnalité touristique, marchés de plein air.</p>
            <p>Le financement est assuré par l&apos;OPCO AKTO pour les salariés CHR, France Travail pour les demandeurs d&apos;emploi, et les aides régionales d&apos;Occitanie. Le prix moyen est de 290 € à 450 € TTC. Des sessions sont proposées chaque semaine à Toulouse, Montpellier, Nîmes, Perpignan et dans les principales villes de la région.</p>
            <p>Le littoral occitan, de la Grande-Motte à Argelès-sur-Mer, voit sa population et son nombre de restaurants exploser en été. Les contrôles sanitaires sont renforcés pendant la haute saison par les DDPP départementales. Les marchés de producteurs et les tables d&apos;hôtes rurales, très populaires dans les campagnes occitanes, sont également soumis à la réglementation sur l&apos;hygiène alimentaire. La formation HACCP permet aux professionnels de maîtriser ces enjeux et d&apos;éviter les sanctions.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Occitanie</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-toulouse" className="text-blue-600 hover:text-blue-800 font-medium underline">Toulouse</Link></li>
                <li><Link href="/formation-haccp-montpellier" className="text-blue-600 hover:text-blue-800 font-medium underline">Montpellier</Link></li>
                <li><Link href="/formation-haccp-nimes" className="text-blue-600 hover:text-blue-800 font-medium underline">Nîmes</Link></li>
                <li><Link href="/formation-haccp-perpignan" className="text-blue-600 hover:text-blue-800 font-medium underline">Perpignan</Link></li>
                <li><Link href="/formation-haccp-beziers" className="text-blue-600 hover:text-blue-800 font-medium underline">Béziers</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "25 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Occitanie</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire en Occitanie ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale en Occitanie doivent justifier d&apos;au moins un membre du personnel formé à l&apos;hygiène alimentaire (14h). Cette obligation s&apos;applique dans les 13 départements de la région depuis 2012.</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP à Toulouse ou Montpellier ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le tarif varie entre 290 € et 450 € TTC en présentiel. La formation peut être financée à 100 % par l&apos;OPCO AKTO pour les salariés ou par France Travail pour les demandeurs d&apos;emploi.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP aborde-t-elle les produits du terroir occitan ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le programme national est adapté au contexte local. Les formateurs illustrent les principes HACCP avec des exemples concrets liés au foie gras, au roquefort, au cassoulet et aux autres spécialités de la région.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Occitanie ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont organisées régulièrement à Toulouse, Montpellier, Nîmes, Perpignan, Béziers, Albi, Tarbes et Carcassonne. Des formations à distance sont également disponibles depuis toute la région.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Les saisonniers du littoral doivent-ils être formés en HACCP ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">L&apos;établissement doit justifier d&apos;au moins un salarié formé. Pour les restaurants saisonniers du littoral, il est vivement recommandé de former le personnel avant l&apos;ouverture, car les contrôles DDPP sont renforcés en été.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Occitanie</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
