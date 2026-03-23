import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation Hygiène Alimentaire Obligatoire — Programme HACCP 14h 2026",
  description: "Formation spécifique en matière d'hygiène alimentaire obligatoire pour la restauration commerciale. Programme 14h conforme arrêté 2024, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-hygiene-alimentaire` }
}

const FAQ = [
  { question: "Qui est obligé de suivre la formation hygiène alimentaire ?", answer: "Tout établissement de restauration commerciale (restaurant traditionnel, snack, food truck, cafétéria, restauration rapide) doit avoir au minimum un salarié formé. Cette obligation est définie par l'article L.233-4 du code rural et le décret du 24 juin 2011." },
  { question: "Quel est le contenu de la formation hygiène alimentaire 2026 ?", answer: "La formation couvre : les dangers microbiologiques, physiques et chimiques ; la réglementation (paquet hygiène) ; les bonnes pratiques d'hygiène (BPH) ; les principes HACCP ; le plan de maîtrise sanitaire (PMS) ; les températures de conservation, cuisson et refroidissement ; la gestion des allergènes ; la traçabilité." },
  { question: "Quelle est la différence entre 'formation HACCP' et 'formation hygiène alimentaire' ?", answer: "Il s'agit de la même formation. Le nom officiel imposé par la réglementation est 'Formation spécifique en matière d'hygiène alimentaire adaptée à l'activité des établissements de restauration commerciale'. 'Formation HACCP' est le terme commercial couramment utilisé." },
  { question: "Comment financer la formation hygiène alimentaire ?", answer: "Plusieurs dispositifs existent : OPCO AKTO pour les salariés du secteur CHR (prise en charge 100%), France Travail pour les demandeurs d'emploi, CPF dans certains cas. Contactez-nous pour identifier votre dispositif adapté." },
  { question: "Quelles sont les sanctions en cas d'absence de formation ?", answer: "L'absence de personne formée dans votre établissement peut entraîner une mise en demeure lors d'un contrôle sanitaire, suivie d'une amende de 5e classe (jusqu'à 1 500€) si non régularisé dans le délai imparti." },
]

export default function FormationHygieneAlimentairePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formation Hygiène Alimentaire", url: "/formation-hygiene-alimentaire" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Spécifique en matière d'Hygiène Alimentaire pour la Restauration Commerciale",
        description: "Formation obligatoire de 14h pour les établissements de restauration commerciale. Couvre HACCP, BPH, PMS, réglementation.",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      {/* BREADCRUMB */}
      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation Hygiène Alimentaire</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">⚠️ FORMATION OBLIGATOIRE</div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation Hygiène Alimentaire<br />
              <span className="text-yellow-400">(Formation HACCP)</span><br />
              Obligatoire en Restauration
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              La <strong>formation spécifique en matière d&apos;hygiène alimentaire</strong> est obligatoire pour tout 
              restaurant, snack, food truck ou boulangerie en France depuis le 1er octobre 2012.
              <br /><br />
              <strong className="text-white">14 heures</strong> — Attestation officielle DRAAF — Financement OPCO disponible
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ Programme conforme arrêté 2024","📋 Attestation officielle","💰 Financement OPCO 100%","🗓️ Sessions chaque semaine"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm title="Trouver ma formation — Devis sous 24h" /></div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Qu&apos;est-ce que la formation hygiène alimentaire ?</h2>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Souvent appelée <strong>&quot;formation HACCP&quot;</strong>, la formation spécifique en matière d&apos;hygiène alimentaire 
              adaptée à l&apos;activité des établissements de restauration commerciale est une <strong>obligation légale nationale</strong> 
              définie par l&apos;article L.233-4 du code rural et de la pêche maritime.
            </p>
            <p>
              Depuis le <strong>1er octobre 2012</strong>, tout établissement de restauration commerciale — restaurant traditionnel, 
              snack, kebab, food truck, cafétéria, restauration rapide — doit justifier qu&apos;au minimum <strong>un membre de son 
              personnel a suivi cette formation</strong> et détient l&apos;attestation correspondante.
            </p>
            <p>
              Le référentiel de formation a été mis à jour par l&apos;<strong>arrêté du 12 février 2024</strong>, qui impose notamment 
              <strong> 4 heures de mise en pratique minimum</strong> sur les 14 heures totales de formation.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Programme de la formation hygiène alimentaire 2026</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "Module 1 — Réglementation", points: ["Paquet hygiène européen","Obligations légales restaurateur","DDPP et contrôles sanitaires","Sanctions en cas de non-conformité"] },
              { titre: "Module 2 — Dangers alimentaires", points: ["Microbiologie des aliments","Dangers biologiques, chimiques, physiques","Intoxications alimentaires","Toxi-infections collectives (TIAC)"] },
              { titre: "Module 3 — HACCP & BPH", points: ["7 principes de la méthode HACCP","Bonnes Pratiques d'Hygiène (BPH)","Points Critiques de Contrôle (CCP)","Plan de Maîtrise Sanitaire (PMS)"] },
              { titre: "Module 4 — Pratique (4h min.)", points: ["Températures conservation/cuisson","Gestion chaîne du froid","Nettoyage et désinfection","Gestion des allergènes"] },
            ].map(m => (
              <div key={m.titre} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Qui est concerné par l&apos;obligation ?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["🍽️","Restaurant traditionnel"],["🥙","Snack / Kebab"],["🚚","Food Truck"],["🥐","Boulangerie"],
              ["🥩","Boucherie"],["☕","Café / Bar-restaurant"],["🏨","Hôtel restaurant"],["🍕","Pizzeria"],
            ].map(([icon, label]) => (
              <Link key={label as string} href={`/formation-haccp-${(label as string).toLowerCase().replace(/\s*\/\s*/g,"-").replace(/\s+/g,"-").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}`}
                className="flex items-center gap-2 border rounded-lg p-3 text-sm font-medium hover:border-blue-400 hover:text-blue-700 transition-all">
                <span className="text-2xl">{icon}</span>{label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
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
    </>
  )
}
