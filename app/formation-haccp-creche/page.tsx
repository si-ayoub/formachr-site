import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Crèche et Établissements Petite Enfance — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire pour Crèche et Établissements Petite Enfance. Les crèches et établissements accueillant des jeunes enfants sont soumis à des e... Attestation DRAAF, financement OPCO disponible. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-creche` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour une crèche ?", answer: "Oui, toute crèche préparant et servant des repas est soumise à l'obligation de formation hygiène alimentaire. Les risques étant amplifiés avec les nourrissons et jeunes enfants, des formations spécialisées sont recommandées." },
  { question: "Quels sont les risques HACCP spécifiques en crèche ?", answer: "Les risques majeurs incluent : allergènes (réactions graves chez les nourrissons), Listeria et Salmonelles dans les préparations lactées, hygiène des biberons, contaminations croisées, et températures de réchauffe." },
  { question: "Comment financer la formation HACCP Crèche et Établissements Petite Enfance ?", answer: "La formation peut être financée à 100% par l'OPCO AKTO pour les salariés du secteur CHR. Les créateurs d'entreprise peuvent utiliser France Travail ou des aides régionales." },
  { question: "Quelle est la durée de la formation HACCP Crèche et Établissements Petite Enfance ?", answer: "La formation dure 14 heures minimum (1,5 à 2 jours), dont 4 heures de mise en pratique obligatoire depuis l'arrêté du 12 février 2024." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par secteur", url: "/formation-hygiene-alimentaire" },
        { name: "Formation HACCP Crèche et Établissements Petite Enfance", url: "/formation-haccp-creche" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Crèche et Établissements Petite Enfance",
        description: "Les crèches et établissements accueillant des jeunes enfants sont soumis à des e...",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/formation-hygiene-alimentaire" className="hover:text-blue-600">Hygiène Alimentaire</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Crèche et Établissements Petite Enfance</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              ⚠️ FORMATION OBLIGATOIRE — Code NAF 88.91A
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Crèche et Établissements Petite Enfance</span><br />
              <span className="text-xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">Les crèches et établissements accueillant des jeunes enfants sont soumis à des exigences HACCP renforcées en raison de la fragilité de leur public.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation","📋 Attestation officielle DRAAF","💰 Financement OPCO 100%","⚡ Sessions toute la France"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="creche" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP Crèche et Établissements Petite Enfance — Ce que la loi impose</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de type Crèche et Établissements Petite Enfance (code NAF 88.91A) doit justifier
              d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Les crèches et établissements accueillant des jeunes enfants sont soumis à des exigences HACCP renforcées en raison de la fragilité de leur public. À l&apos;issue de la formation, le stagiaire reçoit une <strong>attestation officielle</strong> délivrée
            par un organisme agréé par la DRAAF régionale. En cas de contrôle sanitaire (DDPP), l&apos;absence d&apos;attestation
            peut entraîner une <strong>amende de 5e classe</strong>.</p>
          </div>
          <h2 className="text-2xl font-bold mt-10 mb-6">Programme de formation adapté — Crèche et Établissements Petite Enfance</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "Réglementation", points: ["Paquet hygiène européen","Obligations légales","Contrôles DDPP","Sanctions"] },
              { titre: "Dangers alimentaires", points: ["Microbiologie des aliments","Dangers biologiques, chimiques, physiques","TIAC","Gestion des allergènes"] },
              { titre: "Méthode HACCP", points: ["7 principes HACCP","Points Critiques (CCP)","Plan de Maîtrise Sanitaire","Traçabilité"] },
              { titre: "Mise en pratique (4h)", points: ["Températures conservation/cuisson","Chaîne du froid et du chaud","Nettoyage et désinfection","Stockage et rangement"] },
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">✓</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Crèche et Établissements Petite Enfance</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP Crèche et Établissements Petite Enfance</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
