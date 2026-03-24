import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Hauts-de-France — Lille, Amiens, Dunkerque 2026",
  description: "Formation hygiène alimentaire HACCP en Hauts-de-France : Lille, Amiens, Dunkerque, Roubaix, Tourcoing. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-region-hauts-de-france` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire en Hauts-de-France ?", answer: "Oui, tous les établissements de restauration commerciale en Hauts-de-France doivent justifier d'au moins un membre du personnel formé en hygiène alimentaire (14 heures). Cette obligation couvre les 5 départements de la région." },
  { question: "Comment financer la formation HACCP en Hauts-de-France ?", answer: "L'OPCO AKTO finance à 100 % la formation pour les salariés du secteur CHR. France Travail et le CPF sont également mobilisables. La Région Hauts-de-France propose des aides complémentaires pour les créateurs d'entreprise." },
  { question: "Où suivre une formation HACCP en Hauts-de-France ?", answer: "Des sessions sont proposées à Lille, Amiens, Dunkerque, Roubaix, Tourcoing, Calais, Arras, Beauvais, Compiègne et Saint-Quentin. Des formations en ligne sont également disponibles." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Hauts-de-France", url: "/formation-haccp-region-hauts-de-france" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Hauts-de-France",
        description: "Formation HACCP 14h obligatoire pour la restauration commerciale en Hauts-de-France. Attestation DRAAF, financement OPCO.",
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
          <li className="text-gray-800 font-medium">Hauts-de-France</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Hauts-de-France — 3e région la plus peuplée
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Hauts-de-France</span><br />
              <span className="text-xl font-bold">Lille, Amiens, Dunkerque 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Les Hauts-de-France, troisième région la plus peuplée de France, disposent d&apos;un tissu de restauration dense et dynamique. De Lille à Amiens, des estaminets flamands aux brasseries picardes, la formation HACCP est incontournable.
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
            <LeadForm city="Lille" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP en Hauts-de-France — Tout savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de restauration commerciale en Hauts-de-France doit justifier d&apos;au minimum un salarié formé en hygiène alimentaire (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Les Hauts-de-France constituent un territoire riche en traditions culinaires. Lille, métropole européenne dynamique, est réputée pour ses estaminets, ses friteries, le welsh, la carbonnade flamande et le maroilles. La métropole lilloise concentre une forte densité de restaurants, snacks, kebabs et food trucks, tous soumis à l&apos;obligation de formation HACCP.</p>
            <p>La région est également un carrefour transfrontalier important. La proximité avec la Belgique, les Pays-Bas et le tunnel sous la Manche en font un point de passage stratégique avec un tourisme d&apos;affaires et de transit conséquent. Les gares TGV de Lille-Europe, Calais et Amiens génèrent une activité de restauration rapide importante.</p>
            <p>Le littoral de la Côte d&apos;Opale (Dunkerque, Calais, Boulogne-sur-Mer, Le Touquet) et la Baie de Somme attirent des milliers de touristes chaque année. Boulogne-sur-Mer est le premier port de pêche français, et les restaurants de poissons et fruits de mer de la région doivent maîtriser les principes HACCP pour garantir la sécurité des produits de la mer.</p>
            <p>La Picardie (Somme, Oise, Aisne) apporte sa propre richesse culinaire avec les ficelles picardes, la flamiche aux poireaux et les macarons d&apos;Amiens. Beauvais et Compiègne voient se développer une scène de restauration moderne qui nécessite des formations adaptées.</p>
            <p>Le financement de la formation est facilité par l&apos;OPCO AKTO (100 % pour les salariés CHR), France Travail, le CPF et les dispositifs de la Région Hauts-de-France. Le tarif moyen se situe entre 270 et 420 euros TTC. Des sessions hebdomadaires sont proposées à Lille, Amiens, Dunkerque, Arras, Calais et dans les villes principales.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Départements des Hauts-de-France</h2>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li><Link href="/formation-haccp-59-nord" className="text-blue-600 hover:text-blue-800 font-medium underline">Nord (59)</Link></li>
            <li><Link href="/formation-haccp-62-pas-de-calais" className="text-blue-600 hover:text-blue-800 font-medium underline">Pas-de-Calais (62)</Link></li>
            <li><Link href="/formation-haccp-80-somme" className="text-blue-600 hover:text-blue-800 font-medium underline">Somme (80)</Link></li>
            <li><Link href="/formation-haccp-60-oise" className="text-blue-600 hover:text-blue-800 font-medium underline">Oise (60)</Link></li>
            <li><Link href="/formation-haccp-02-aisne" className="text-blue-600 hover:text-blue-800 font-medium underline">Aisne (02)</Link></li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-6">Principales villes pour la formation HACCP</h2>
          <ul className="grid md:grid-cols-3 gap-3 mb-8">
            {["Lille","Amiens","Dunkerque","Roubaix","Tourcoing","Calais","Arras","Beauvais","Compiègne","Saint-Quentin"].map(v => (
              <li key={v}><Link href={`/formation-haccp-${v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} className="text-blue-600 hover:text-blue-800 underline">{v}</Link></li>
            ))}
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "15 000+" },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Hauts-de-France</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP en Hauts-de-France</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la région</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
