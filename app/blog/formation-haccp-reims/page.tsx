import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Reims — Marne 2026",
  description: "Formation HACCP à Reims et dans la Marne (51). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet restaurateurs rémois 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-reims` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Reims ?", answer: "Reims propose des centres de formation certifiés Qualiopi dans le centre-ville (quartier de la cathédrale, place d'Erlon), à proximité de la gare TGV (Reims Centre, 45 minutes de Paris) et dans la zone Farman-Bezannes. Des sessions sont organisées 1 à 2 fois par mois. Épernay et Châlons-en-Champagne proposent également des sessions pour les restaurateurs du sud de la Marne." },
  { question: "Combien coûte la formation HACCP dans la Marne ?", answer: "Le tarif moyen dans la Marne se situe entre 250 et 350 euros en présentiel et entre 179 et 259 euros en e-learning. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR. France Travail propose l'AIF. La Région Grand Est offre des aides complémentaires via le Chèque Formation pour les demandeurs d'emploi et les créateurs d'entreprise." },
  { question: "La formation HACCP aborde-t-elle la restauration liée au champagne ?", answer: "Oui, les organismes rémois intègrent les spécificités de la restauration champenoise : service et conservation du champagne, gestion des accords mets-vins, manipulation des produits du terroir (biscuit rose de Reims, boudin blanc de Rethel, chaource AOP), et réglementation spécifique aux caves de champagne proposant des dégustations avec accompagnement alimentaire." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Reims", url: "/blog/formation-haccp-reims" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Reims",
        description: "Formation hygiène alimentaire HACCP à Reims — 14 heures, attestation officielle",
        city: "Reims",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>&rsaquo;</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>&rsaquo;</li>
          <li className="text-gray-800 font-medium">Formation HACCP Reims</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              MARNE (51) &mdash; Grand Est
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Reims<br />
              <span className="text-yellow-400">Marne 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Formation HACCP &agrave; Reims et dans la Marne. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Reims centre & gare TGV","Épernay & Châlons","Terroir champenois","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Reims : guide des restaurateurs de la Marne</h2>

          <p>
            Reims, ville du sacre des rois de France et capitale du champagne, compte <strong>185 000 habitants</strong> (300 000 dans l&apos;agglom&eacute;ration). Class&eacute;e au patrimoine mondial de l&apos;UNESCO, la ville attire chaque ann&eacute;e des millions de visiteurs venus d&eacute;couvrir sa cath&eacute;drale, ses caves de champagne et sa gastronomie. La Marne compte plus de <strong>2 000 &eacute;tablissements de restauration</strong>.
          </p>

          <p>
            Le secteur de la restauration r&eacute;mois est fortement li&eacute; au <strong>tourisme &oelig;nologique</strong> : restaurants gastronomiques, bistrots associ&eacute;s aux maisons de champagne, bars &agrave; vins et espaces de d&eacute;gustation. Tous ces &eacute;tablissements sont soumis &agrave; l&apos;obligation HACCP. La proximit&eacute; de Paris (45 minutes en TGV) facilite les &eacute;changes et l&apos;acc&egrave;s &agrave; l&apos;offre de formation. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/reims" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Reims sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP et contr&ocirc;les dans la Marne</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> s&apos;applique &agrave; tous les &eacute;tablissements. La <strong>DDPP 51</strong> contr&ocirc;le r&eacute;guli&egrave;rement le centre-ville (place d&apos;Erlon, rue de Vesle), les caves de champagne proposant de la restauration, les restaurants d&apos;<strong>&Eacute;pernay</strong> (avenue de Champagne) et les &eacute;v&eacute;nements gastronomiques. L&apos;absence d&apos;attestation HACCP est une infraction de 5e classe.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement en Grand Est</h2>

          <p>
            Tarifs comp&eacute;titifs : <strong>250 &agrave; 350 &euro;</strong> en pr&eacute;sentiel, <strong>179 &agrave; 259 &euro;</strong> en e-learning. L&apos;OPCO AKTO finance jusqu&apos;&agrave; 100 %. La <strong>R&eacute;gion Grand Est</strong> propose le <strong>Ch&egrave;que Formation</strong> pour les demandeurs d&apos;emploi et cr&eacute;ateurs d&apos;entreprise.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation Marne", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 51 : contr&ocirc;les r&eacute;guliers", "Caves de champagne surveill&eacute;es", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Terroir champenois AOP", "Cha&icirc;ne du froid et DLC", "Gestion des 14 allerg&egrave;nes"] },
              { titre: "Pratique professionnelle", points: ["Plan HACCP personnalis&eacute;", "Tra&ccedil;abilit&eacute; produits AOP", "Simulation contr&ocirc;le DDPP", "Nettoyage-d&eacute;sinfection"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "Ch&egrave;que Formation Grand Est", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Reims</h2>

          <p>
            Formation de 14 heures sur 2 jours. <strong>Jour 1</strong> : cadre r&eacute;glementaire, dangers alimentaires, microbiologie, BPH, 7 principes HACCP. <strong>Jour 2</strong> (4h pratique) : plan HACCP personnalis&eacute;, tra&ccedil;abilit&eacute;, simulation contr&ocirc;le DDPP, fiches de suivi. Attestation DRAAF. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Reims</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Reims</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi dans la Marne &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
