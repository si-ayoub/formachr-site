import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Camping et Hôtellerie de Plein Air — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire pour Camping et Hôtellerie de Plein Air. Tout camping proposant un snack, bar-restaurant ou point de restauration doit former au moins un membre du personnel. Attestation DRAAF, financement OPCO disponible. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-camping` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour un camping avec restaurant ou snack ?", answer: "Oui, dès lors qu&apos;un camping propose une activité de restauration — snack-bar, restaurant, pizzeria, épicerie avec préparation alimentaire — au moins un membre du personnel doit détenir l&apos;attestation de formation en hygiène alimentaire de 14 heures. Le code NAF 55.30Z (terrains de camping) est concerné par le décret du 24 juin 2011 lorsque l&apos;établissement exerce une activité de restauration." },
  { question: "Quelles sont les spécificités de l&apos;hygiène alimentaire en camping saisonnier ?", answer: "Les campings font face à des défis spécifiques : saisonnalité du personnel (turn-over élevé nécessitant des formations régulières), structures mobiles ou semi-permanentes (food trucks, paillotes, snacks de plein air), gestion de l&apos;eau potable sur le site, forte affluence estivale avec des pics de fréquentation, et exposition aux températures élevées qui compliquent le maintien de la chaîne du froid." },
  { question: "Comment financer la formation HACCP pour le personnel de camping ?", answer: "La formation peut être financée par l&apos;OPCO AKTO pour les salariés du secteur de l&apos;hôtellerie de plein air. Les saisonniers en CDI ou CDD y ont également droit. Les exploitants de camping peuvent aussi mobiliser le plan de développement des compétences de leur entreprise, ou solliciter des aides régionales et France Travail pour les créateurs d&apos;entreprise." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par secteur", url: "/formation-hygiene-alimentaire" },
        { name: "Formation HACCP Camping", url: "/formation-haccp-camping" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Camping et Hôtellerie de Plein Air",
        description: "Tout camping proposant un snack, bar-restaurant ou point de restauration doit former au moins un membre du personnel.",
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
          <li className="text-gray-800 font-medium">Camping et Hôtellerie de Plein Air</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              ⚠️ FORMATION OBLIGATOIRE — Code NAF 55.30Z
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Camping et Hôtellerie de Plein Air</span><br />
              <span className="text-xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">Tout camping proposant un snack-bar, un restaurant ou un point de restauration doit former au moins un membre du personnel à l&apos;hygiène alimentaire.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation","📋 Attestation officielle DRAAF","💰 Financement OPCO 100%","⚡ Sessions toute la France"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="camping" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP Camping — Ce que la loi impose</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tout camping ou établissement d&apos;hôtellerie de plein air (code NAF 55.30Z) proposant une activité de restauration
              doit justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>L&apos;hôtellerie de plein air connaît un essor considérable en France, avec plus de 8 000 campings accueillant chaque année des millions de vacanciers. La majorité de ces établissements proposent un service de restauration — snack-bar, restaurant, pizzeria, épicerie avec préparation alimentaire — qui les soumet aux mêmes obligations d&apos;hygiène que tout autre établissement de restauration commerciale. Le décret du 24 juin 2011 impose qu&apos;au moins un membre du personnel de chaque point de restauration détienne l&apos;attestation de formation HACCP de 14 heures.</p>

            <p>Les campings présentent des défis sanitaires spécifiques qui rendent la formation HACCP particulièrement pertinente. La saisonnalité constitue le premier enjeu : la majorité des campings fonctionnent de mai à septembre, avec un recrutement massif de personnel saisonnier qui change chaque année. Ce turn-over élevé impose une vigilance constante en matière de formation et de transmission des bonnes pratiques d&apos;hygiène. Le référent hygiène formé HACCP joue un rôle crucial dans l&apos;encadrement et la sensibilisation des équipes saisonnières.</p>

            <p>Les structures de restauration en camping sont souvent atypiques : paillotes de plage, snacks en structure légère, food trucks, cuisines semi-ouvertes ou installations mobiles. Ces configurations posent des problèmes spécifiques en matière de maîtrise des températures, de protection contre les nuisibles, de gestion de l&apos;eau et d&apos;hygiène des surfaces de travail. La formation HACCP adaptée au camping aborde ces problématiques concrètes et propose des solutions pratiques adaptées aux contraintes du plein air.</p>

            <p>La gestion de la chaîne du froid en période estivale est un point critique majeur pour les campings. Les températures extérieures élevées, combinées à des installations frigorifiques parfois limitées et à des pics de fréquentation importants, augmentent considérablement le risque de rupture de la chaîne du froid. La formation enseigne les protocoles de contrôle des températures, les bonnes pratiques de stockage en conditions de chaleur et les actions correctives à mettre en œuvre en cas d&apos;anomalie.</p>

            <p>La gestion de l&apos;eau potable sur le site du camping est un autre enjeu sanitaire important. Les points d&apos;eau utilisés pour la préparation alimentaire doivent répondre aux normes de potabilité. Les installations de stockage d&apos;eau, les systèmes de distribution et les équipements de lavage doivent faire l&apos;objet d&apos;une surveillance régulière. La formation HACCP aborde les risques liés à la contamination hydrique et les mesures préventives à mettre en place.</p>

            <p>Les contrôles sanitaires de la DDPP sont fréquents dans les campings, notamment en période estivale. Les inspecteurs vérifient la conformité des installations, le respect de la chaîne du froid, la propreté des locaux et des équipements, la traçabilité des denrées et la présence de l&apos;attestation de formation HACCP. L&apos;absence de cette attestation peut entraîner une amende de 5e classe (jusqu&apos;à 1 500 €) et, en cas de manquements graves, une fermeture administrative du point de restauration en pleine saison — une catastrophe économique pour l&apos;exploitant.</p>

            <p>Le programme de formation intègre les spécificités de l&apos;hôtellerie de plein air : gestion des buffets de petit-déjeuner en extérieur, organisation de barbecues collectifs, vente de glaces et produits réfrigérés, conservation des denrées dans des structures mobiles. Depuis l&apos;arrêté du 12 février 2024, les 4 heures de mise en pratique permettent aux stagiaires de travailler sur des cas concrets issus de leur environnement professionnel : audit d&apos;un snack de camping, plan de nettoyage adapté aux structures de plein air, procédures d&apos;ouverture et de fermeture saisonnière.</p>
          </div>
          <h2 className="text-2xl font-bold mt-10 mb-6">Programme de formation adapté — Camping et Hôtellerie de Plein Air</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "Réglementation", points: ["Paquet hygiène européen","Obligations légales restauration en camping","Contrôles DDPP saisonniers","Sanctions et fermeture administrative"] },
              { titre: "Dangers alimentaires", points: ["Microbiologie en conditions estivales","Dangers biologiques, chimiques, physiques","TIAC et risques liés à la chaleur","Gestion de l&apos;eau potable sur site"] },
              { titre: "Méthode HACCP", points: ["7 principes HACCP","CCP : chaîne du froid en été","Plan de Maîtrise Sanitaire adapté","Traçabilité et gestion des stocks saisonniers"] },
              { titre: "Mise en pratique (4h)", points: ["Audit snack/restaurant de camping","Chaîne du froid en structure mobile","Nettoyage et désinfection plein air","Procédures ouverture/fermeture saison"] },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Camping</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP Camping</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
