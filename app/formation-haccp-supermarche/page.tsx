import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Supermarché et Grande Distribution — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire pour Supermarché et Grande Distribution. Tout supermarché disposant d'un rayon traiteur, boulangerie ou laboratoire de préparation doit former au moins un membre du personnel. Attestation DRAAF, financement OPCO disponible. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-supermarche` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour les supermarchés ?", answer: "Oui, dès lors qu&apos;un supermarché ou hypermarché dispose d&apos;un rayon traiteur, d&apos;une boulangerie intégrée, d&apos;un laboratoire de préparation ou de tout espace où des denrées alimentaires sont manipulées ou transformées, au moins un membre du personnel doit détenir l&apos;attestation de formation en hygiène alimentaire de 14 heures, conformément au décret du 24 juin 2011." },
  { question: "Quels sont les points critiques (CCP) spécifiques à la grande distribution ?", answer: "Les principaux CCP en supermarché concernent la chaîne du froid (réception, stockage, mise en rayon des produits frais et surgelés), la contamination croisée entre produits crus et cuits au rayon traiteur, le respect des DLC et DDM lors de la rotation des stocks, ainsi que la traçabilité des lots en cas de rappel produit. La gestion des températures des vitrines réfrigérées et des chambres froides fait l&apos;objet de contrôles renforcés." },
  { question: "Comment financer la formation HACCP pour le personnel de grande distribution ?", answer: "La formation peut être prise en charge par l&apos;OPCO Commerce (anciennement FORCO) pour les salariés du secteur de la distribution. Les enseignes peuvent également mobiliser leur plan de développement des compétences. Pour les créateurs de commerce alimentaire, France Travail et les aides régionales sont mobilisables." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par secteur", url: "/formation-hygiene-alimentaire" },
        { name: "Formation HACCP Supermarché", url: "/formation-haccp-supermarche" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Supermarché et Grande Distribution",
        description: "Tout supermarché disposant d'un rayon traiteur, boulangerie ou laboratoire de préparation doit former au moins un membre du personnel.",
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
          <li className="text-gray-800 font-medium">Supermarché et Grande Distribution</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              ⚠️ FORMATION OBLIGATOIRE — Code NAF 47.11F / 47.11D
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Supermarché et Grande Distribution</span><br />
              <span className="text-xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">Tout supermarché ou hypermarché disposant d&apos;un rayon traiteur, d&apos;une boulangerie intégrée ou d&apos;un laboratoire de préparation doit former au moins un membre du personnel à l&apos;hygiène alimentaire.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation","📋 Attestation officielle DRAAF","💰 Financement OPCO 100%","⚡ Sessions toute la France"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="supermarche" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP Supermarché — Ce que la loi impose</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout établissement de type Supermarché ou Hypermarché (codes NAF 47.11D et 47.11F) disposant d&apos;espaces
              de préparation alimentaire doit justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La grande distribution alimentaire est soumise à des exigences strictes en matière d&apos;hygiène et de sécurité des aliments. Les supermarchés et hypermarchés qui manipulent, transforment ou préparent des denrées alimentaires — que ce soit au rayon traiteur, à la boulangerie intégrée, à la poissonnerie ou au laboratoire de préparation — doivent impérativement disposer d&apos;au moins un membre du personnel formé à l&apos;hygiène alimentaire HACCP. Cette obligation découle du décret n° 2011-731 du 24 juin 2011 et de l&apos;arrêté du 5 octobre 2011, qui précisent les secteurs d&apos;activité concernés par la formation obligatoire.</p>

            <p>En supermarché, les enjeux sanitaires sont particulièrement importants en raison du volume de produits manipulés quotidiennement et de la diversité des rayons alimentaires. Le rayon traiteur, où des plats sont préparés, découpés et conditionnés sur place, constitue un point critique majeur. La boulangerie intégrée, avec ses processus de cuisson et de refroidissement, nécessite une maîtrise rigoureuse des températures. Les rayons frais — fruits et légumes, produits laitiers, charcuterie, boucherie — imposent une gestion irréprochable de la chaîne du froid depuis la réception des marchandises jusqu&apos;à la mise en rayon.</p>

            <p>La formation HACCP adaptée à la grande distribution couvre l&apos;ensemble de ces problématiques. Elle aborde la réglementation européenne du Paquet Hygiène (règlements CE 852/2004 et 853/2004), les bonnes pratiques d&apos;hygiène (BPH), l&apos;élaboration du Plan de Maîtrise Sanitaire (PMS) et la méthode HACCP avec ses 7 principes fondamentaux. Les stagiaires apprennent à identifier les dangers biologiques (Salmonella, Listeria, E. coli), chimiques (résidus de produits de nettoyage, allergènes) et physiques (corps étrangers) spécifiques à l&apos;environnement de la grande distribution.</p>

            <p>Un volet essentiel de la formation concerne la gestion des dates limites de consommation (DLC) et des dates de durabilité minimale (DDM). En grande distribution, la rotation des stocks est un facteur clé de la sécurité alimentaire. Les stagiaires sont formés aux procédures de retrait et de rappel de produits, à la traçabilité ascendante et descendante, ainsi qu&apos;à la gestion des alertes sanitaires émises par la DGAL ou RappelConso.</p>

            <p>La mise en rayon des produits frais fait l&apos;objet d&apos;une attention particulière. Les températures réglementaires doivent être respectées à chaque étape : réception (contrôle à quai), stockage en chambre froide, transport interne et présentation en vitrine réfrigérée ou en linéaire. Un écart de température, même bref, peut compromettre la sécurité d&apos;un lot entier de produits. La formation enseigne les protocoles de relevé de températures, la tenue des registres et les actions correctives à mettre en œuvre en cas d&apos;anomalie.</p>

            <p>Les contrôles de la DDPP (Direction Départementale de la Protection des Populations) dans les supermarchés sont fréquents et rigoureux. L&apos;absence d&apos;attestation de formation HACCP peut entraîner une amende de 5e classe (jusqu&apos;à 1 500 € par infraction), voire une fermeture administrative en cas de manquements graves. Au-delà de l&apos;obligation légale, la formation HACCP permet de réduire significativement les risques de TIAC (Toxi-Infections Alimentaires Collectives) et de protéger la réputation de l&apos;enseigne.</p>

            <p>Depuis l&apos;arrêté du 12 février 2024, la formation inclut obligatoirement 4 heures de mise en pratique. Pour les professionnels de la grande distribution, ces heures sont consacrées à des exercices concrets : audit d&apos;un rayon frais, contrôle de la chaîne du froid, vérification de l&apos;étiquetage et simulation de gestion de crise lors d&apos;un rappel produit.</p>
          </div>
          <h2 className="text-2xl font-bold mt-10 mb-6">Programme de formation adapté — Supermarché et Grande Distribution</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "Réglementation", points: ["Paquet hygiène européen (CE 852/2004)","Obligations légales grande distribution","Contrôles DDPP et sanctions","Arrêté du 12 février 2024"] },
              { titre: "Dangers alimentaires", points: ["Microbiologie des aliments","Dangers biologiques, chimiques, physiques","TIAC et gestion des alertes","Allergènes et étiquetage"] },
              { titre: "Méthode HACCP", points: ["7 principes HACCP","Points Critiques : chaîne du froid","Plan de Maîtrise Sanitaire","Traçabilité et rappel produits"] },
              { titre: "Mise en pratique (4h)", points: ["Gestion DLC/DDM et rotation stocks","Chaîne du froid : réception à mise en rayon","Nettoyage et désinfection des rayons","Audit rayon frais et actions correctives"] },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Supermarché</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP Supermarché</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
