import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Restaurant à Nantes — Hygiène Alimentaire 2026",
  description: "Formation hygiène alimentaire pour restaurants traditionnels à Nantes. 14h, attestation DRAAF, financement OPCO. Devis gratuit sous 24h.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-restaurant-nantes` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour les restaurants traditionnels à Nantes ?", answer: "Oui, tous les établissements de type Restaurant (code NAF 56.10A) à Nantes sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire (14h). Cette obligation est en vigueur depuis octobre 2012." },
  { question: "Combien coûte la formation HACCP Restaurant à Nantes ?", answer: "Le tarif varie entre 290€ et 490€ TTC en présentiel à Nantes. La formation peut être prise en charge à 100% par l&apos;OPCO AKTO pour les salariés du secteur ou par France Travail pour les demandeurs d&apos;emploi." },
  { question: "Quelle est la durée de la formation HACCP Restaurant ?", answer: "La formation dure 14 heures minimum, incluant 4 heures de mise en pratique obligatoire depuis l&apos;arrêté du 12 février 2024. Elle est généralement dispensée sur 2 jours." },
  { question: "L&apos;attestation HACCP Restaurant est-elle valable à vie ?", answer: "Oui, l&apos;attestation de formation en hygiène alimentaire est délivrée à vie, sans obligation de recyclage. Elle est valable pour tout type d&apos;établissement alimentaire en France." },
  { question: "Peut-on suivre la formation HACCP Restaurant en ligne depuis Nantes ?", answer: "Certains organismes proposent des formations à distance. Cependant, depuis 2024, 4 heures de mise en pratique sont obligatoires. Des formules mixtes (e-learning + présentiel) existent à Nantes." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formation HACCP Restaurant", url: "/formation-haccp-restaurant" },
        { name: "Formation HACCP Restaurant Nantes", url: "/formation-haccp-restaurant-nantes" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Restaurant à Nantes",
        description: "Formation hygiène alimentaire spécifique Restaurant traditionnel à Nantes",
        city: "Nantes",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Restaurant Nantes",
        city: "Nantes",
        postalCode: "44000",
        lat: 47.2184,
        lng: -1.5536
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/formation-haccp-restaurant" className="hover:text-blue-600">Restaurant</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Restaurant à Nantes</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              ⚠️ OBLIGATOIRE — Code NAF 56.10A
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Restaurant à Nantes</span><br />
              <span className="text-xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Nantes, métropole dynamique de l&apos;Ouest, fruits de mer et muscadet, impose à tous les restaurants traditionnels de former au moins un salarié à l&apos;hygiène alimentaire. Trouvez la meilleure formation HACCP Restaurant près de chez vous.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation","📋 Attestation officielle DRAAF","💰 Financement OPCO 100%","⚡ Sessions à Nantes"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" city="Nantes" title="Devis gratuit — Restaurant Nantes" /></div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP Restaurant à Nantes — Ce que la loi impose</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de type Restaurant traditionnel (code NAF 56.10A) à Nantes doit justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>À <strong>Nantes</strong>, les restaurants traditionnels sont soumis à l&apos;obligation de formation en hygiène alimentaire depuis le décret du 24 juin 2011. Cette formation, communément appelée « formation HACCP », dure <strong>14 heures</strong> et doit être dispensée par un organisme agréé par la DRAAF. Elle comprend désormais <strong>4 heures de mise en pratique obligatoire</strong> depuis l&apos;arrêté du 12 février 2024.</p>
            <p>Le programme de la formation HACCP pour les restaurants traditionnels couvre quatre grands axes : la <strong>réglementation</strong> française et européenne (paquet hygiène), l&apos;identification des <strong>dangers alimentaires</strong> spécifiques au secteur restaurant, les <strong>7 principes de la méthode HACCP</strong> et leur application concrète, ainsi que la mise en place d&apos;un <strong>Plan de Maîtrise Sanitaire</strong> (PMS) adapté.</p>
            <p>Les restaurants traditionnels de Nantes font l&apos;objet de <strong>contrôles réguliers de la DDPP</strong>. L&apos;absence d&apos;attestation de formation HACCP peut entraîner une amende de 5e classe (jusqu&apos;à 1 500 €). Au-delà de l&apos;obligation légale, la formation permet de maîtriser les bonnes pratiques d&apos;hygiène essentielles à la sécurité des consommateurs.</p>
            <p>Le <strong>financement</strong> de la formation HACCP Restaurant à Nantes peut être pris en charge par l&apos;<strong>OPCO AKTO</strong> pour les salariés du secteur CHR, par <strong>France Travail</strong> pour les demandeurs d&apos;emploi, ou par le <strong>CPF</strong> et les aides régionales pour les créateurs d&apos;entreprise. Le tarif moyen à Nantes est de <strong>290 € à 490 € TTC</strong> en présentiel.</p>
            <p>À l&apos;issue de la formation, le stagiaire reçoit une <strong>attestation officielle</strong> valable à vie, sans obligation de recyclage. Cette attestation est reconnue dans toute la France et permet d&apos;exercer dans n&apos;importe quel type d&apos;établissement alimentaire.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Programme adapté — Restaurant</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "Réglementation", points: ["Paquet hygiène européen", "Obligations légales Restaurant traditionnel", "Contrôles DDPP", "Sanctions et amendes"] },
              { titre: "Dangers alimentaires", points: ["Microbiologie des aliments", "Dangers biologiques, chimiques, physiques", "TIAC et toxi-infections", "Gestion des allergènes (14 allergènes)"] },
              { titre: "Méthode HACCP", points: ["7 principes HACCP", "Points Critiques de Contrôle (CCP)", "Plan de Maîtrise Sanitaire", "Traçabilité et documentation"] },
              { titre: "Mise en pratique (4h)", points: ["Températures conservation/cuisson", "Chaîne du froid et du chaud", "Nettoyage et désinfection", "Bonnes pratiques en restaurant"] },
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

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — HACCP Restaurant à Nantes</h2>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <details key={i} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  {faq.question}
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Formation HACCP Restaurant à Nantes</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés à Nantes</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
