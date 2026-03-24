import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Association — Hygiène Alimentaire pour Structures Associatives 2026",
  description: "Formation hygiène alimentaire pour associations servant de la nourriture : cantines associatives, événements, distribution alimentaire. Bénévoles et salariés concernés. Attestation DRAAF, financement FDVA et subventions disponibles. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-association` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour les associations qui servent de la nourriture ?", answer: "Oui, dès lors qu&apos;une association propose une activité régulière de restauration — cantine associative, distribution de repas, restauration lors d&apos;événements récurrents — elle est soumise aux mêmes obligations que les établissements de restauration commerciale. Au moins une personne (salariée ou bénévole référent) doit détenir l&apos;attestation de formation en hygiène alimentaire de 14 heures. Les événements ponctuels (repas annuel, kermesse) bénéficient d&apos;une tolérance mais restent soumis aux règles générales d&apos;hygiène." },
  { question: "Qui doit être formé dans une association : les bénévoles ou les salariés ?", answer: "La loi exige qu&apos;au moins une personne au sein de la structure soit formée. Il peut s&apos;agir d&apos;un salarié ou d&apos;un bénévole référent hygiène. Dans la pratique, il est recommandé de former le responsable de cuisine ou le coordinateur des repas, qu&apos;il soit bénévole ou salarié. Cette personne sera chargée de superviser les bonnes pratiques d&apos;hygiène et de former à son tour les autres intervenants." },
  { question: "Comment financer la formation HACCP pour une association ?", answer: "Plusieurs dispositifs de financement sont accessibles aux associations : le FDVA (Fonds pour le Développement de la Vie Associative) qui finance la formation des bénévoles, les subventions des collectivités locales (mairie, département, région), l&apos;OPCO Uniformation pour les salariés associatifs, et les crédits formation de France Travail pour les salariés en poste. Certains organismes de formation proposent également des tarifs préférentiels pour le secteur associatif." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par secteur", url: "/formation-hygiene-alimentaire" },
        { name: "Formation HACCP Association", url: "/formation-haccp-association" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP — Associations et Structures Associatives",
        description: "Toute association proposant une activité régulière de restauration doit former au moins une personne à l'hygiène alimentaire.",
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
          <li className="text-gray-800 font-medium">Association</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              ⚠️ FORMATION OBLIGATOIRE — Code NAF 94.99Z
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">Association</span><br />
              <span className="text-xl font-bold">Hygiène Alimentaire pour Structures Associatives 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">Toute association proposant une activité régulière de restauration — cantine, distribution de repas, événements — doit former au moins une personne à l&apos;hygiène alimentaire.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["✅ 14h de formation","📋 Attestation officielle DRAAF","💰 Financement FDVA / Subventions","⚡ Sessions toute la France"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="association" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation HACCP Association — Ce que la loi impose</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Toute association (code NAF 94.99Z) proposant une activité régulière de restauration ou de distribution alimentaire
              doit justifier d&apos;au minimum une personne ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures.
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>Le secteur associatif occupe une place essentielle dans le paysage alimentaire français. Des Restos du Cœur aux associations culturelles organisant des repas communautaires, en passant par les cantines associatives de quartier et les structures d&apos;aide alimentaire, des milliers d&apos;associations servent quotidiennement de la nourriture à des publics souvent vulnérables. Cette responsabilité impose le respect strict des règles d&apos;hygiène alimentaire, et notamment la formation HACCP pour au moins un membre de la structure.</p>

            <p>Le décret du 24 juin 2011 ne distingue pas entre structures commerciales et associatives : dès lors qu&apos;une entité propose une activité de restauration de manière régulière, elle est soumise à l&apos;obligation de formation en hygiène alimentaire. Les associations loi 1901 qui gèrent des cantines, des cuisines centrales, des services de portage de repas ou qui organisent régulièrement des événements avec restauration doivent donc s&apos;y conformer. Seules les manifestations ponctuelles et exceptionnelles (repas annuel de l&apos;association, kermesse) bénéficient d&apos;une certaine tolérance, bien qu&apos;elles restent soumises aux règles générales d&apos;hygiène du règlement CE 852/2004.</p>

            <p>La particularité du secteur associatif réside dans la forte présence de bénévoles qui ne disposent pas toujours d&apos;une formation professionnelle en matière d&apos;hygiène alimentaire. C&apos;est pourquoi la désignation d&apos;un référent hygiène formé HACCP est particulièrement importante dans ces structures. Ce référent — qu&apos;il soit salarié ou bénévole — sera chargé de mettre en place les bonnes pratiques d&apos;hygiène, de rédiger les procédures adaptées et de sensibiliser l&apos;ensemble des intervenants aux règles élémentaires de sécurité alimentaire.</p>

            <p>Les associations d&apos;aide alimentaire, comme les banques alimentaires, les Restos du Cœur ou les épiceries solidaires, font face à des enjeux spécifiques. Elles reçoivent souvent des dons alimentaires provenant de sources variées (grande distribution, industrie agroalimentaire, particuliers) dont elles doivent vérifier la conformité : respect des dates limites de consommation (DLC), intégrité des emballages, conditions de température lors de la collecte et du stockage. La formation HACCP leur enseigne les protocoles de tri, de stockage et de distribution adaptés à leur activité.</p>

            <p>Les associations culturelles, sportives ou religieuses qui proposent régulièrement des repas — couscous associatif, repas de rupture du jeûne, barbecue du club sportif, cantine du centre social — sont également concernées. Ces structures utilisent souvent des locaux polyvalents qui ne sont pas spécifiquement conçus pour la préparation alimentaire. La formation HACCP les aide à adapter leurs pratiques à ces contraintes : organisation des espaces, séparation des zones propres et sales, gestion du matériel et des équipements, protocoles de nettoyage et de désinfection.</p>

            <p>Les contrôles sanitaires de la DDPP peuvent concerner les associations au même titre que les restaurants commerciaux. En cas de manquement grave — absence de formation HACCP, non-respect de la chaîne du froid, défaut de traçabilité — des sanctions peuvent être prononcées, allant de l&apos;amende de 5e classe à la fermeture administrative de l&apos;activité de restauration. Au-delà des sanctions, les enjeux de santé publique sont majeurs : les publics accueillis par les associations (personnes âgées, enfants, personnes en situation de précarité) sont souvent plus vulnérables aux toxi-infections alimentaires.</p>

            <p>La formation HACCP adaptée aux associations prend en compte les réalités du terrain : budgets limités, rotation des bénévoles, locaux partagés, approvisionnement en dons alimentaires. Les 4 heures de mise en pratique, obligatoires depuis l&apos;arrêté du 12 février 2024, permettent de travailler sur des situations concrètes : organisation d&apos;un repas associatif de grande ampleur, réception et tri de dons alimentaires, mise en place d&apos;un plan de nettoyage dans un local polyvalent, gestion des allergènes lors d&apos;un événement ouvert au public.</p>

            <p>Le financement de la formation constitue souvent un frein pour les associations. Plusieurs dispositifs existent pour lever cet obstacle : le FDVA (Fonds pour le Développement de la Vie Associative) finance la formation des bénévoles, l&apos;OPCO Uniformation prend en charge la formation des salariés associatifs, et de nombreuses collectivités locales proposent des subventions dédiées à la formation dans le secteur associatif. Certains organismes de formation proposent également des tarifs solidaires pour les structures à but non lucratif.</p>
          </div>
          <h2 className="text-2xl font-bold mt-10 mb-6">Programme de formation adapté — Associations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titre: "Réglementation", points: ["Paquet hygiène européen (CE 852/2004)","Obligations légales pour les associations","Contrôles DDPP et responsabilité associative","Règles spécifiques dons alimentaires"] },
              { titre: "Dangers alimentaires", points: ["Microbiologie des aliments","Dangers biologiques, chimiques, physiques","TIAC : risques pour publics vulnérables","Allergènes et gestion des régimes spéciaux"] },
              { titre: "Méthode HACCP", points: ["7 principes HACCP","CCP adaptés au contexte associatif","Plan de Maîtrise Sanitaire simplifié","Traçabilité des dons et approvisionnements"] },
              { titre: "Mise en pratique (4h)", points: ["Organisation d&apos;un repas associatif","Réception et tri de dons alimentaires","Nettoyage de locaux polyvalents","Gestion des allergènes en événement"] },
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
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP Association</h2>
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
          <h2 className="text-2xl font-bold mb-3">Obtenir ma formation HACCP Association</h2>
          <p className="text-blue-100 mb-6">Devis personnalisé sous 24h — Organismes certifiés dans toute la France</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
