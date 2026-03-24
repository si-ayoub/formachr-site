import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Dijon — Côte-d'Or 2026",
  description: "Formation HACCP à Dijon et en Côte-d'Or (21). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet restaurateurs dijonnais 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-dijon` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Dijon ?", answer: "Dijon propose des centres de formation certifiés Qualiopi dans le centre-ville (quartier de la gare TGV, rue de la Liberté), dans la zone Toison d'Or et à proximité du campus universitaire. Des sessions sont organisées 1 à 2 fois par mois. Beaune et Auxerre proposent également des sessions ponctuelles pour les restaurateurs du sud de la Côte-d'Or et de l'Yonne." },
  { question: "Combien coûte la formation HACCP en Côte-d'Or ?", answer: "Le tarif moyen en Côte-d'Or se situe entre 250 et 340 euros en présentiel et entre 179 et 259 euros en e-learning. Ces tarifs sont inférieurs à la moyenne nationale. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR. France Travail propose l'AIF. La Région Bourgogne-Franche-Comté propose des aides via le dispositif de formation continue." },
  { question: "La formation HACCP aborde-t-elle les spécificités de la gastronomie bourguignonne ?", answer: "Oui, les organismes dijonnais intègrent les spécificités de la cuisine bourguignonne : manipulation des escargots de Bourgogne, gestion des viandes braisées (bœuf bourguignon, coq au vin), produits locaux (moutarde, cassis, époisses), et vinification pour les restaurants associant restauration et dégustation de vins. La traçabilité des produits AOP/AOC est également abordée." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Dijon", url: "/blog/formation-haccp-dijon" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Dijon",
        description: "Formation hygiène alimentaire HACCP à Dijon — 14 heures, attestation officielle",
        city: "Dijon",
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
          <li className="text-gray-800 font-medium">Formation HACCP Dijon</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              C&Ocirc;TE-D&apos;OR (21) &mdash; Bourgogne
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Dijon<br />
              <span className="text-yellow-400">C&ocirc;te-d&apos;Or 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Formation HACCP &agrave; Dijon et en C&ocirc;te-d&apos;Or. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Dijon centre & gare","Beaune","Gastronomie bourguignonne","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Dijon : guide des restaurateurs de C&ocirc;te-d&apos;Or</h2>

          <p>
            Dijon, capitale de la Bourgogne et pr&eacute;fecture de la C&ocirc;te-d&apos;Or, est une ville de <strong>160 000 habitants</strong> (260 000 dans la m&eacute;tropole) r&eacute;put&eacute;e pour sa <strong>gastronomie exceptionnelle</strong>. Class&eacute;e &laquo; Cit&eacute; internationale de la gastronomie et du vin &raquo;, Dijon accueille chaque ann&eacute;e des milliers de visiteurs attir&eacute;s par sa cuisine bourguignonne, ses vins et ses produits du terroir. La C&ocirc;te-d&apos;Or compte plus de <strong>2 500 &eacute;tablissements de restauration</strong>.
          </p>

          <p>
            La route des Grands Crus, de Dijon &agrave; Beaune, concentre des dizaines de restaurants gastronomiques, bistrots et caves de d&eacute;gustation qui doivent tous se conformer &agrave; l&apos;obligation HACCP. Les march&eacute;s couverts de Dijon (les Halles, con&ccedil;ues par Gustave Eiffel) accueillent &eacute;galement des stands de restauration soumis aux m&ecirc;mes r&egrave;gles. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/dijon" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Dijon sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP en C&ocirc;te-d&apos;Or</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> s&apos;applique &agrave; tous les &eacute;tablissements de restauration. La <strong>DDPP 21</strong> contr&ocirc;le r&eacute;guli&egrave;rement les restaurants du centre historique de Dijon (rue de la Libert&eacute;, place Darcy, quartier des antiquaires), les &eacute;tablissements de <strong>Beaune</strong> (capitale des vins de Bourgogne) et les restaurants le long de la route des Grands Crus.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement en Bourgogne</h2>

          <p>
            Les tarifs en C&ocirc;te-d&apos;Or sont parmi les plus accessibles : <strong>250 &agrave; 340 &euro;</strong> en pr&eacute;sentiel, <strong>179 &agrave; 259 &euro;</strong> en e-learning. L&apos;OPCO AKTO finance jusqu&apos;&agrave; 100 %. La <strong>R&eacute;gion Bourgogne-Franche-Comt&eacute;</strong> propose des aides compl&eacute;mentaires pour les demandeurs d&apos;emploi et les cr&eacute;ateurs d&apos;entreprise.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation C&ocirc;te-d&apos;Or", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 21 : contr&ocirc;les r&eacute;guliers", "Route des Grands Crus", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Produits AOP/AOC bourguignons", "Cha&icirc;ne du froid et tra&ccedil;abilit&eacute;", "Gestion des 14 allerg&egrave;nes"] },
              { titre: "Sp&eacute;cificit&eacute;s locales", points: ["Escargots de Bourgogne", "Viandes brais&eacute;es (bourguignon)", "Fromages AOP (&eacute;poisses)", "D&eacute;gustation et restauration"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "R&eacute;gion BFC aides", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Dijon</h2>

          <p>
            Formation de 14 heures sur 2 jours. <strong>Jour 1</strong> : cadre r&eacute;glementaire, dangers alimentaires, microbiologie, BPH, 7 principes HACCP. <strong>Jour 2</strong> (4h pratique) : plan HACCP personnalis&eacute;, tra&ccedil;abilit&eacute; produits AOP, simulation contr&ocirc;le DDPP, fiches de suivi. Attestation DRAAF. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Dijon</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Dijon</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi en C&ocirc;te-d&apos;Or &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
