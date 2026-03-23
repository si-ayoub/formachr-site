import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { SITE_DESCRIPTION, schemaFAQ } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP France 2026 — Hygiène Alimentaire Obligatoire Restauration",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "https://www.formachr.fr" }
}

const FAQ_HOME = [
  { question: "La formation HACCP est-elle obligatoire pour un restaurant ?", answer: "Oui. Depuis le 1er octobre 2012, tout établissement de restauration commerciale doit avoir au minimum un salarié formé à l'hygiène alimentaire (14h). Absence = risque d'amende et fermeture." },
  { question: "Combien coûte une formation HACCP ?", answer: "Entre 179€ et 650€ selon l'organisme. Elle peut être financée à 100% par l'OPCO AKTO pour les salariés du secteur restauration." },
  { question: "Combien de temps dure la formation HACCP ?", answer: "14 heures minimum (1,5 à 2 jours), dont 4 heures de mise en pratique obligatoire depuis l'arrêté du 12 février 2024." },
  { question: "La formation HACCP doit-elle être renouvelée ?", answer: "Non. L'attestation est valable sans limite de durée. Un recyclage tous les 5 ans est toutefois recommandé." },
  { question: "Peut-on faire la formation HACCP en ligne ?", answer: "Oui, mais la formation doit inclure 4h de mise en pratique selon l'arrêté 2024. Vérifiez la conformité de l'organisme." },
  { question: "Quelle différence entre HACCP et hygiène alimentaire ?", answer: "La 'formation HACCP' est le nom commercial de la 'Formation spécifique en matière d'hygiène alimentaire adaptée à la restauration commerciale'. L'ISO 22000 est une norme de management plus avancée pour l'industrie agroalimentaire." },
]

const SECTEURS = [
  { icon: "🍽️", label: "Restaurant", href: "/formation-haccp-restaurant" },
  { icon: "🥙", label: "Snack / Kebab", href: "/formation-haccp-snack" },
  { icon: "🚚", label: "Food Truck", href: "/formation-haccp-food-truck" },
  { icon: "🥐", label: "Boulangerie", href: "/formation-haccp-boulangerie" },
  { icon: "🥩", label: "Boucherie", href: "/formation-haccp-boucherie-charcuterie" },
  { icon: "🏫", label: "Collectivité", href: "/formation-haccp-restauration-collective" },
  { icon: "🏨", label: "Hôtel", href: "/formation-haccp-hotel" },
  { icon: "👶", label: "Crèche / EHPAD", href: "/formation-haccp-creche" },
]

const FORMATIONS = [
  { title: "Hygiène Alimentaire (HACCP)", desc: "Formation obligatoire 14h — Attestation DRAAF officielle", badge: "Obligatoire", color: "blue", href: "/formation-hygiene-alimentaire" },
  { title: "Permis d'Exploitation", desc: "Pour vendre de l'alcool — Valable 10 ans", badge: "Obligatoire", color: "blue", href: "/permis-exploitation" },
  { title: "ISO 22000", desc: "Norme internationale sécurité alimentaire", badge: "Recommandé", color: "green", href: "/iso-22000" },
  { title: "Plan de Maîtrise Sanitaire", desc: "Construire votre PMS conforme aux exigences", badge: "Essentiel", color: "orange", href: "/plan-maitrise-sanitaire" },
]

const GRANDES_VILLES = [
  { nom: "Paris", slug: "paris" }, { nom: "Lyon", slug: "lyon" }, { nom: "Marseille", slug: "marseille" },
  { nom: "Toulouse", slug: "toulouse" }, { nom: "Bordeaux", slug: "bordeaux" }, { nom: "Lille", slug: "lille" },
  { nom: "Nantes", slug: "nantes" }, { nom: "Strasbourg", slug: "strasbourg" }, { nom: "Nice", slug: "nice" },
  { nom: "Rennes", slug: "rennes" }, { nom: "Grenoble", slug: "grenoble" }, { nom: "Montpellier", slug: "montpellier" },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ_HOME)) }} />
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-blue-100 text-sm px-3 py-1 rounded-full mb-4">✅ Formation Obligatoire depuis 2012</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Formation HACCP<br /><span className="text-yellow-400">Hygiène Alimentaire</span><br />en France
            </h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">Trouvez votre formation certifiée dans votre ville. Organismes agréés DRAAF, attestation officielle, financement OPCO. <strong className="text-white">Devis gratuit sous 24h.</strong></p>
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <span className="flex items-center gap-1"><span className="text-green-400">✓</span> 14h de formation</span>
              <span className="flex items-center gap-1"><span className="text-green-400">✓</span> Attestation officielle</span>
              <span className="flex items-center gap-1"><span className="text-green-400">✓</span> Financement OPCO</span>
              <span className="flex items-center gap-1"><span className="text-green-400">✓</span> Toute la France</span>
            </div>
          </div>
          <div><LeadForm title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>
      {/* ALERTE LÉGALE */}
      <section className="bg-red-50 border-y border-red-100 py-5 px-4">
        <p className="text-center text-red-800 font-medium text-sm max-w-4xl mx-auto">⚠️ <strong>Obligation légale :</strong> Tout restaurant, snack, food truck ou boulangerie doit avoir au minimum <strong>un salarié formé</strong> à l'hygiène alimentaire. Absence = risque d'amende et fermeture administrative.</p>
      </section>
      {/* FORMATIONS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Nos formations disponibles</h2>
          <p className="text-center text-gray-500 mb-10">Obligatoires ou recommandées — Toutes certifiées et finançables</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FORMATIONS.map(f => (
              <Link key={f.href} href={f.href} className="group border rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all">
                <div className={`inline-block text-xs font-bold px-2 py-1 rounded-full mb-3 ${f.color==="blue"?"bg-blue-100 text-blue-700":f.color==="green"?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`}>{f.badge}</div>
                <h3 className="font-bold mb-2 group-hover:text-blue-700">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
                <div className="mt-4 text-blue-600 text-sm font-medium">En savoir plus →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* SECTEURS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Formation HACCP par secteur</h2>
          <p className="text-center text-gray-500 mb-10">Un programme adapté à votre activité</p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {SECTEURS.map(s => (
              <Link key={s.href} href={s.href} className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl border hover:border-blue-400 hover:shadow-sm transition-all text-center group">
                <span className="text-3xl">{s.icon}</span>
                <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* TARIFS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Prix de la formation HACCP en 2026</h2>
          <p className="text-center text-gray-500 mb-10">Financement possible à 100% via OPCO AKTO</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50"><tr>
                <th className="text-left p-4 font-semibold">Format</th>
                <th className="text-left p-4 font-semibold">Durée</th>
                <th className="text-left p-4 font-semibold">Prix</th>
                <th className="text-left p-4 font-semibold">Financement</th>
              </tr></thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Présentiel (inter-entreprises)","14h — 1,5 jours","290€ – 490€ TTC","OPCO ✓"],
                  ["En ligne (e-learning)","14h — à votre rythme","179€ – 259€ TTC","Partiel"],
                  ["Intra-entreprise","14h — dans votre local","Sur devis","OPCO ✓"],
                  ["Pack Hygiène + Permis Exploitation","34h — 4 jours","580€ – 790€ TTC","OPCO ✓"],
                ].map(([f,d,p,fin],i) => (
                  <tr key={i} className="hover:bg-blue-50">
                    <td className="p-4 font-medium">{f}</td>
                    <td className="p-4 text-gray-600">{d}</td>
                    <td className="p-4 font-bold text-blue-700">{p}</td>
                    <td className="p-4"><span className={`text-xs px-2 py-1 rounded-full ${fin.includes("✓")?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`}>{fin}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">💡 <Link href="/formation-haccp-financement" className="text-blue-600 hover:underline">Comment financer votre formation HACCP à 100% ? →</Link></p>
        </div>
      </section>
      {/* VILLES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Formation HACCP par ville</h2>
          <p className="text-center text-gray-500 mb-10">Sessions disponibles chaque semaine dans toute la France</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-3">
            {GRANDES_VILLES.map(v => (
              <Link key={v.slug} href={`/formation-haccp-${v.slug}`} className="bg-white border rounded-lg px-3 py-2 text-sm text-center font-medium text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-all">{v.nom}</Link>
            ))}
          </div>
          <div className="text-center mt-6"><Link href="/villes" className="text-blue-600 font-medium hover:underline">Voir toutes les villes →</Link></div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes sur la formation HACCP</h2>
          <div className="space-y-3">
            {FAQ_HOME.map((faq, i) => (
              <details key={i} className="border rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  {faq.question}<span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prêt à vous mettre en conformité ?</h2>
          <p className="text-blue-100 mb-8">Obtenez votre devis personnalisé en 2 minutes. Nos conseillers trouvent la meilleure formation au meilleur prix dans votre zone.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">Obtenir mon devis gratuit →</Link>
          <p className="text-blue-200 text-sm mt-4">✓ Gratuit ✓ Sans engagement ✓ Réponse sous 24h</p>
        </div>
      </section>
    </>
  )
}
