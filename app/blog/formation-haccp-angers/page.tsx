import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Angers — Maine-et-Loire 2026",
  description: "Formation HACCP à Angers et en Maine-et-Loire (49). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet restaurateurs angevins 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-angers` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Angers ?", answer: "Angers propose des centres de formation certifiés Qualiopi dans le centre-ville (quartier de la gare Saint-Laud, place du Ralliement), dans la zone Atoll à Beaucouzé et dans le quartier Saint-Serge. Des sessions sont organisées 1 à 2 fois par mois. Cholet et Saumur proposent également des sessions ponctuelles pour le sud et l'est du département." },
  { question: "Combien coûte la formation HACCP en Maine-et-Loire ?", answer: "Le tarif moyen en Maine-et-Loire se situe entre 250 et 340 euros en présentiel et entre 179 et 259 euros en e-learning. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR. France Travail propose l'AIF. La Région Pays de la Loire offre des aides complémentaires via le dispositif VISA Métiers pour les demandeurs d'emploi." },
  { question: "La formation HACCP est-elle adaptée aux restaurants de la vallée de la Loire ?", answer: "Oui, les organismes angevins intègrent les spécificités de la restauration ligérienne : manipulation des vins d'Anjou (service et conservation), produits du terroir (rillauds, fouées, pâtisseries angevines), cuisine à base de poissons de Loire (sandre, brochet) et gestion des produits maraîchers locaux. La traçabilité des produits AOP (Cointreau, vins d'Anjou) est également abordée." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Angers", url: "/blog/formation-haccp-angers" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Angers",
        description: "Formation hygiène alimentaire HACCP à Angers — 14 heures, attestation officielle",
        city: "Angers",
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
          <li className="text-gray-800 font-medium">Formation HACCP Angers</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              MAINE-ET-LOIRE (49) &mdash; Pays de la Loire
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Angers<br />
              <span className="text-yellow-400">Maine-et-Loire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Formation HACCP &agrave; Angers et en Maine-et-Loire. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Angers gare Saint-Laud","Cholet & Saumur","Terroir ligérien","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Angers : guide des restaurateurs du Maine-et-Loire</h2>

          <p>
            Angers, pr&eacute;fecture du Maine-et-Loire et capitale historique de l&apos;Anjou, est une ville de <strong>155 000 habitants</strong> (300 000 dans la m&eacute;tropole) situ&eacute;e au c&oelig;ur de la vall&eacute;e de la Loire. R&eacute;guli&egrave;rement class&eacute;e parmi les <strong>villes les plus agr&eacute;ables de France</strong>, Angers attire de nombreux cr&eacute;ateurs d&apos;entreprise dans le secteur de la restauration. Le Maine-et-Loire compte plus de <strong>2 200 &eacute;tablissements de restauration</strong>.
          </p>

          <p>
            La gastronomie angevine est riche et vari&eacute;e : restaurants de cuisine traditionnelle lig&eacute;rienne, bistrots modernes, cr&ecirc;peries, restaurants gastronomiques et une sc&egrave;ne food truck en plein essor. Tous ces &eacute;tablissements sont soumis &agrave; l&apos;obligation de formation HACCP. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/angers" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Angers sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP et contr&ocirc;les DDPP en Maine-et-Loire</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> impose la formation HACCP de 14 heures. La <strong>DDPP 49</strong> effectue des contr&ocirc;les r&eacute;guliers, notamment dans le centre historique d&apos;Angers (quartier de la Doutre, rue Saint-Aubin, place du Ralliement), les march&eacute;s alimentaires et la zone commerciale d&apos;Atoll &agrave; Beaucouz&eacute;. Les restaurants de <strong>Saumur</strong> (ch&acirc;teaux de la Loire) et de <strong>Cholet</strong> font &eacute;galement l&apos;objet de contr&ocirc;les r&eacute;guliers.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement en Pays de la Loire</h2>

          <p>
            Les tarifs en Maine-et-Loire sont <strong>tr&egrave;s comp&eacute;titifs</strong> : <strong>250 &agrave; 340 &euro;</strong> en pr&eacute;sentiel, <strong>179 &agrave; 259 &euro;</strong> en e-learning. L&apos;OPCO AKTO finance jusqu&apos;&agrave; 100 %. La <strong>R&eacute;gion Pays de la Loire</strong> propose le dispositif <strong>VISA M&eacute;tiers</strong> pour les demandeurs d&apos;emploi souhaitant se former aux m&eacute;tiers de la restauration.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation 49", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 49 : contr&ocirc;les r&eacute;guliers", "Centre historique Angers", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Produits du terroir angevin", "Cha&icirc;ne du froid et DLC", "Gestion des 14 allerg&egrave;nes"] },
              { titre: "Pratique professionnelle", points: ["Plan HACCP personnalis&eacute;", "Tra&ccedil;abilit&eacute; produits locaux", "Simulation contr&ocirc;le DDPP", "Nettoyage-d&eacute;sinfection"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "VISA M&eacute;tiers Pays de la Loire", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Angers</h2>

          <p>
            Formation de 14 heures sur 2 jours. <strong>Jour 1</strong> : cadre r&eacute;glementaire, dangers alimentaires, microbiologie, BPH, 7 principes HACCP. <strong>Jour 2</strong> (4h pratique) : plan HACCP personnalis&eacute;, tra&ccedil;abilit&eacute;, simulation contr&ocirc;le DDPP, fiches de suivi. Attestation DRAAF d&eacute;livr&eacute;e imm&eacute;diatement. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Angers</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Angers</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi en Maine-et-Loire &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
