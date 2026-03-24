import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Rennes — Bretagne 2026",
  description: "Formation HACCP à Rennes et en Ille-et-Vilaine (35). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet restaurateurs bretons 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-rennes` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Rennes ?", answer: "Rennes propose plusieurs centres de formation certifiés Qualiopi, principalement situés dans le quartier de la gare (TGV, métro ligne a), le centre-ville (rue de Saint-Malo, place de la République) et la zone Atalante-Beaulieu. Des sessions sont organisées 2 à 3 fois par mois. Saint-Malo, Vitré et Fougères accueillent également des sessions ponctuelles." },
  { question: "Combien coûte la formation HACCP en Bretagne ?", answer: "Le tarif moyen de la formation HACCP en Bretagne se situe entre 260 et 350 euros en présentiel, soit environ 15 à 20 % moins cher qu'à Paris. En e-learning, comptez 179 à 259 euros. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR, et France Travail propose l'AIF pour les demandeurs d'emploi. La Région Bretagne propose aussi des aides complémentaires via le dispositif QUALIF Emploi." },
  { question: "La formation HACCP est-elle adaptée aux crêperies bretonnes ?", answer: "Oui, la formation HACCP de 14 heures couvre tous les types de restauration, y compris les crêperies. Les crêperies bretonnes, référencées sous le code NAF 56.10A, sont soumises aux mêmes obligations que les restaurants traditionnels. La formation aborde les spécificités liées à la manipulation des produits laitiers (beurre, œufs, lait), des garnitures périssables et de la cuisson à la plancha/bilig." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Rennes", url: "/blog/formation-haccp-rennes" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Rennes",
        description: "Formation hygiène alimentaire HACCP à Rennes — 14 heures, attestation officielle",
        city: "Rennes",
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
          <li className="text-gray-800 font-medium">Formation HACCP Rennes</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              BRETAGNE &mdash; Ille-et-Vilaine (35)
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Rennes<br />
              <span className="text-yellow-400">Bretagne 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Trouvez votre formation hygi&egrave;ne alimentaire HACCP &agrave; Rennes et en Bretagne. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation DRAAF.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Rennes centre & gare","Saint-Malo","Financement OPCO AKTO","QUALIF Emploi Bretagne"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Rennes : le guide des restaurateurs bretons</h2>

          <p>
            Rennes, capitale de la Bretagne et pr&eacute;fecture d&apos;Ille-et-Vilaine, est une m&eacute;tropole dynamique de <strong>plus de 220 000 habitants</strong> (480 000 dans la m&eacute;tropole). La ville est r&eacute;put&eacute;e pour sa vie &eacute;tudiante (plus de 70 000 &eacute;tudiants) et sa sc&egrave;ne gastronomique riche, m&ecirc;lant cr&ecirc;peries traditionnelles, bistrots, restaurants gastronomiques et restauration rapide. L&apos;Ille-et-Vilaine compte plus de <strong>4 000 &eacute;tablissements de restauration</strong>, tous soumis &agrave; l&apos;obligation de formation HACCP.
          </p>

          <p>
            La Bretagne poss&egrave;de des <strong>sp&eacute;cificit&eacute;s culinaires</strong> qui impactent la formation HACCP : la manipulation du beurre et des produits laitiers dans les cr&ecirc;peries, la gestion des fruits de mer et des produits de la p&ecirc;che, et le travail du cidre et des boissons ferment&eacute;es. Les organismes de formation rennais int&egrave;grent ces particularit&eacute;s r&eacute;gionales dans leur programme. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/rennes" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Rennes sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP et contr&ocirc;les DDPP en Ille-et-Vilaine</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> s&apos;applique &agrave; tous les &eacute;tablissements de restauration d&apos;Ille-et-Vilaine. La <strong>DDPP 35</strong> effectue des contr&ocirc;les r&eacute;guliers, en particulier dans le centre historique de Rennes (rue Saint-Michel dite &laquo; rue de la Soif &raquo;, place des Lices, march&eacute; des Lices), les zones touristiques de <strong>Saint-Malo</strong> (intra-muros) et les centres commerciaux. L&apos;absence d&apos;attestation HACCP constitue une infraction de 5e classe (1 500 &euro; d&apos;amende, 3 000 &euro; en r&eacute;cidive).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement en Bretagne</h2>

          <p>
            Les tarifs de la formation HACCP en Bretagne sont <strong>parmi les plus accessibles</strong> de France m&eacute;tropolitaine : entre <strong>260 et 350 &euro;</strong> en pr&eacute;sentiel et entre <strong>179 et 259 &euro;</strong> en e-learning. Au-del&agrave; de l&apos;OPCO AKTO et de France Travail, la <strong>R&eacute;gion Bretagne</strong> propose le dispositif <strong>QUALIF Emploi</strong>, qui finance des formations qualifiantes pour les demandeurs d&apos;emploi, y compris la formation HACCP dans certains cas.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation bretonne", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 35 : contr&ocirc;les r&eacute;guliers", "Zones touristiques surveill&eacute;es", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Sp&eacute;cificit&eacute;s fruits de mer", "Produits laitiers et cr&ecirc;peries", "Gestion des 14 allerg&egrave;nes"] },
              { titre: "Pratique professionnelle", points: ["Plan HACCP adapt&eacute; cr&ecirc;perie", "Tra&ccedil;abilit&eacute; fruits de mer", "Simulation contr&ocirc;le DDPP", "Fiches de suivi temp&eacute;ratures"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "QUALIF Emploi Bretagne", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Rennes (14 heures)</h2>

          <p>
            La formation de 14 heures se d&eacute;roule sur 2 jours. <strong>Jour 1</strong> : cadre r&eacute;glementaire, dangers alimentaires, microbiologie, bonnes pratiques d&apos;hygi&egrave;ne, 7 principes HACCP. <strong>Jour 2</strong> (4h de pratique minimum) : &eacute;laboration d&apos;un plan HACCP adapt&eacute; &agrave; votre &eacute;tablissement, gestion des non-conformit&eacute;s, tra&ccedil;abilit&eacute;, simulation de contr&ocirc;le DDPP, cr&eacute;ation des fiches d&apos;enregistrement. Attestation DRAAF d&eacute;livr&eacute;e imm&eacute;diatement. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Rennes</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Rennes</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi en Bretagne &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
