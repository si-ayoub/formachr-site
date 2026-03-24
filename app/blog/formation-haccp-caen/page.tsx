import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Caen — Calvados 2026",
  description: "Formation HACCP à Caen et dans le Calvados (14). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet restaurateurs caennais 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-caen` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Caen ?", answer: "Caen propose des centres de formation certifiés Qualiopi dans le centre-ville (quartier de la gare SNCF, rue Saint-Jean), dans la zone Mondeville 2 et à proximité du CHU. Des sessions sont organisées 1 à 2 fois par mois. Lisieux, Bayeux et Honfleur proposent également des sessions ponctuelles pour les restaurateurs de la côte normande et du Pays d'Auge." },
  { question: "Combien coûte la formation HACCP dans le Calvados ?", answer: "Le tarif moyen dans le Calvados se situe entre 250 et 340 euros en présentiel et entre 179 et 259 euros en e-learning. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR. France Travail propose l'AIF. La Région Normandie offre des aides via le dispositif Qualif' Individuel pour les demandeurs d'emploi." },
  { question: "La formation HACCP couvre-t-elle les spécificités normandes ?", answer: "Oui, les organismes caennais intègrent les spécificités de la cuisine normande : manipulation des produits laitiers (beurre, crème, camembert AOP), gestion des fruits de mer (huîtres de la côte, moules, coquilles Saint-Jacques de la baie de Seine), produits cidricoles (cidre, calvados, pommeau) et charcuterie normande (andouille de Vire, tripes à la mode de Caen)." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Caen", url: "/blog/formation-haccp-caen" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Caen",
        description: "Formation hygiène alimentaire HACCP à Caen — 14 heures, attestation officielle",
        city: "Caen",
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
          <li className="text-gray-800 font-medium">Formation HACCP Caen</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              CALVADOS (14) &mdash; Normandie
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Caen<br />
              <span className="text-yellow-400">Calvados 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Formation HACCP &agrave; Caen et dans le Calvados. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Caen centre & gare","Honfleur & Deauville","Terroir normand","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Caen : guide des restaurateurs du Calvados</h2>

          <p>
            Caen, pr&eacute;fecture du Calvados et capitale de la Normandie, est une ville de <strong>110 000 habitants</strong> (260 000 dans l&apos;agglom&eacute;ration). La ville allie patrimoine historique (ch&acirc;teau de Guillaume le Conqu&eacute;rant, abbayes) et dynamisme &eacute;conomique. Le Calvados est un d&eacute;partement touristique majeur gr&acirc;ce aux <strong>plages du D&eacute;barquement</strong>, &agrave; la <strong>C&ocirc;te Fleurie</strong> (Deauville, Honfleur) et au <strong>Pays d&apos;Auge</strong>.
          </p>

          <p>
            Le d&eacute;partement compte plus de <strong>3 000 &eacute;tablissements de restauration</strong>, des bistrots caennais aux restaurants gastronomiques de Deauville et Honfleur. Tous doivent se conformer &agrave; l&apos;obligation de formation HACCP de 14 heures. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/caen" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Caen sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP et contr&ocirc;les en Calvados</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> s&apos;applique &agrave; tous les &eacute;tablissements. La <strong>DDPP 14</strong> contr&ocirc;le r&eacute;guli&egrave;rement le centre-ville de Caen (rue Saint-Pierre, quartier du Vaugueux), les zones touristiques (Honfleur, Deauville, plages du D&eacute;barquement) et les march&eacute;s alimentaires. La saison estivale voit les contr&ocirc;les se renforcer sur la c&ocirc;te.
          </p>

          <p>
            La cuisine normande pr&eacute;sente des sp&eacute;cificit&eacute;s HACCP : utilisation massive de <strong>beurre et de cr&egrave;me</strong> (produits laitiers sensibles), manipulation des <strong>fruits de mer</strong> (hu&icirc;tres d&apos;Isigny, coquilles Saint-Jacques), et gestion des <strong>produits cidricoles</strong>. L&apos;arr&ecirc;t&eacute; de 2024 impose d&eacute;sormais <strong>4 heures de pratique</strong> dans la formation.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement en Normandie</h2>

          <p>
            Tarifs comp&eacute;titifs dans le Calvados : <strong>250 &agrave; 340 &euro;</strong> en pr&eacute;sentiel, <strong>179 &agrave; 259 &euro;</strong> en e-learning. L&apos;OPCO AKTO finance jusqu&apos;&agrave; 100 %. La <strong>R&eacute;gion Normandie</strong> propose le dispositif <strong>Qualif&apos; Individuel</strong> pour les demandeurs d&apos;emploi.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation Calvados", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 14 : contr&ocirc;les c&ocirc;te &eacute;t&eacute;", "Zones touristiques surveill&eacute;es", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne normande", points: ["Produits laitiers (beurre, cr&egrave;me)", "Fruits de mer et coquillages", "Produits cidricoles", "14 allerg&egrave;nes obligatoires"] },
              { titre: "Pratique professionnelle", points: ["Plan HACCP personnalis&eacute;", "Tra&ccedil;abilit&eacute; AOP normande", "Simulation contr&ocirc;le DDPP", "Nettoyage-d&eacute;sinfection"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "Qualif&apos; Individuel Normandie", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Caen</h2>

          <p>
            Formation de 14 heures sur 2 jours. <strong>Jour 1</strong> : cadre r&eacute;glementaire, dangers alimentaires, microbiologie, BPH, 7 principes HACCP. <strong>Jour 2</strong> (4h pratique) : plan HACCP personnalis&eacute;, tra&ccedil;abilit&eacute;, simulation contr&ocirc;le DDPP, fiches de suivi. Attestation DRAAF. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Caen</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Caen</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi dans le Calvados &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
