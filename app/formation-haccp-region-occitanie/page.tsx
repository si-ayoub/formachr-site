import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Occitanie — Toulouse, Montpellier, Nîmes 2026",
  description: "Formation hygiène alimentaire HACCP en Occitanie : Toulouse, Montpellier, Nîmes, Perpignan, Carcassonne. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-occitanie` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Occitanie ?", answer: "Oui, tous les établissements de restauration commerciale en Occitanie doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Cette obligation couvre les 13 départements de la région, de la Haute-Garonne aux Pyrénées-Orientales." },
  { question: "Comment financer la formation HACCP en Occitanie ?", answer: "L'OPCO AKTO finance à 100 % la formation pour les salariés du secteur CHR. Les demandeurs d'emploi peuvent bénéficier d'une prise en charge par France Travail. Le CPF et les aides de la Région Occitanie sont également accessibles." },
  { question: "Quelles sont les spécificités HACCP en Occitanie ?", answer: "L'Occitanie est marquée par une forte tradition culinaire (cassoulet, foie gras, vins) et un tourisme balnéaire important sur le littoral méditerranéen. La saisonnalité estivale impose des formations adaptées aux établissements saisonniers." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Occitanie", url: "/formation-haccp-region-occitanie" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Occitanie",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Occitanie. Attestation DRAAF, financement OPCO.",
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
          <li className="text-gray-800 font-medium">Occitanie</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Occitanie — 13 départements, du Languedoc aux Pyrénées
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Occitanie</span><br />
              <span className="text-xl font-bold">Toulouse, Montpellier, Nîmes 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              L&apos;Occitanie, deuxième plus grande région de France par sa superficie, réunit le Languedoc-Roussillon et Midi-Pyrénées. Avec ses milliers de restaurants, bars à tapas, food trucks et commerces alimentaires, la formation HACCP y est indispensable.
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
            <LeadForm city="Toulouse" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Occitanie — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Occitanie doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>L&apos;Occitanie est une terre de gastronomie exceptionnelle. Toulouse, la Ville Rose, est réputée pour son cassoulet, sa saucisse de Toulouse et sa cuisine du Sud-Ouest généreuse. Montpellier, capitale du Languedoc, attire chaque année des milliers d&apos;étudiants et de touristes qui dynamisent le secteur de la restauration. Nîmes, avec ses arènes romaines et ses férias, combine patrimoine historique et traditions culinaires méditerranéennes.</p>
            <p>La région est également un haut lieu de la production de foie gras, de canard, de vins (Languedoc, Gaillac, Cahors, Corbières) et de fromages (Roquefort, Pélardon). Ces produits régionaux, manipulés par les restaurateurs et les traiteurs, nécessitent une maîtrise rigoureuse des principes HACCP, notamment en matière de chaîne du froid et de traçabilité.</p>
            <p>Le littoral méditerranéen de l&apos;Occitanie, de la Camargue au Pays catalan, connaît une forte saisonnalité touristique. Chaque été, des centaines de restaurants saisonniers, paillotes et bars de plage ouvrent sur les stations balnéaires du Cap d&apos;Agde, Palavas-les-Flots, Canet-en-Roussillon et Collioure. La formation HACCP est alors particulièrement sollicitée avant la saison estivale.</p>
            <p>La formation dure 14 heures minimum avec 4 heures de mise en pratique. Elle couvre les 7 principes HACCP, la réglementation européenne, les dangers alimentaires, le Plan de Maîtrise Sanitaire et la gestion des allergènes. La DRAAF Occitanie agrée les organismes sur les 13 départements de la région.</p>
            <p>Le financement est facilité par l&apos;OPCO AKTO (prise en charge à 100 % pour le secteur CHR), France Travail, le CPF et les dispositifs de la Région Occitanie. Le tarif moyen se situe entre 270 et 430 euros TTC en présentiel, avec des sessions hebdomadaires dans les grandes villes.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements d&apos;Occitanie</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-31-haute-garonne" className="text-blue-600 hover:text-blue-800 font-medium underline">Haute-Garonne (31)</Link></li>
            <li><Link href="/formation-haccp-34-herault" className="text-blue-600 hover:text-blue-800 font-medium underline">Hérault (34)</Link></li>
            <li><Link href="/formation-haccp-30-gard" className="text-blue-600 hover:text-blue-800 font-medium underline">Gard (30)</Link></li>
            <li><Link href="/formation-haccp-66-pyrenees-orientales" className="text-blue-600 hover:text-blue-800 font-medium underline">Pyrénées-Orientales (66)</Link></li>
            <li><Link href="/formation-haccp-11-aude" className="text-blue-600 hover:text-blue-800 font-medium underline">Aude (11)</Link></li>
            <li><Link href="/formation-haccp-81-tarn" className="text-blue-600 hover:text-blue-800 font-medium underline">Tarn (81)</Link></li>
            <li><Link href="/formation-haccp-12-aveyron" className="text-blue-600 hover:text-blue-800 font-medium underline">Aveyron (12)</Link></li>
            <li><Link href="/formation-haccp-09-ariege" className="text-blue-600 hover:text-blue-800 font-medium underline">Ariège (09)</Link></li>
            <li><Link href="/formation-haccp-46-lot" className="text-blue-600 hover:text-blue-800 font-medium underline">Lot (46)</Link></li>
            <li><Link href="/formation-haccp-48-lozere" className="text-blue-600 hover:text-blue-800 font-medium underline">Lozère (48)</Link></li>
            <li><Link href="/formation-haccp-32-gers" className="text-blue-600 hover:text-blue-800 font-medium underline">Gers (32)</Link></li>
            <li><Link href="/formation-haccp-65-hautes-pyrenees" className="text-blue-600 hover:text-blue-800 font-medium underline">Hautes-Pyrénées (65)</Link></li>
            <li><Link href="/formation-haccp-82-tarn-et-garonne" className="text-blue-600 hover:text-blue-800 font-medium underline">Tarn-et-Garonne (82)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Toulouse","Montpellier","Nîmes","Perpignan","Carcassonne","Béziers","Albi","Tarbes","Narbonne","Sète"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "18 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Occitanie</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Occitanie</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
