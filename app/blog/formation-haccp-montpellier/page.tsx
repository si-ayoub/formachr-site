import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Montpellier — Hérault 2026",
  description: "Formation HACCP à Montpellier et dans l'Hérault (34). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide restaurateurs montpelliérains 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-montpellier` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Montpellier ?", answer: "Montpellier propose plusieurs centres de formation certifiés Qualiopi, situés dans le quartier Antigone, près de la gare Saint-Roch (TGV, TER, tramway lignes 1 et 2), et dans la zone Odysseum. Des sessions sont organisées 2 à 4 fois par mois. Béziers et Sète proposent également des sessions pour les restaurateurs de l'ouest et du sud de l'Hérault." },
  { question: "Combien coûte la formation HACCP dans l'Hérault ?", answer: "Le tarif moyen dans l'Hérault se situe entre 250 et 350 euros en présentiel, légèrement inférieur à la moyenne nationale. En e-learning, comptez 179 à 259 euros. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR. France Travail Occitanie propose l'AIF. La Région Occitanie offre le dispositif Qualif Pro pour les demandeurs d'emploi." },
  { question: "La formation HACCP est-elle adaptée à la restauration estivale méditerranéenne ?", answer: "Oui, les organismes montpelliérains intègrent les spécificités de la restauration méditerranéenne : gestion de la chaîne du froid par forte chaleur (été), restauration en terrasse et en plein air, manipulation des fruits de mer et produits de la pêche locale, et particularités des restaurants saisonniers du littoral (Palavas, La Grande-Motte, Cap d'Agde)." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Montpellier", url: "/blog/formation-haccp-montpellier" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Montpellier",
        description: "Formation hygiène alimentaire HACCP à Montpellier — 14 heures, attestation officielle",
        city: "Montpellier",
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
          <li className="text-gray-800 font-medium">Formation HACCP Montpellier</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              H&Eacute;RAULT (34) &mdash; Occitanie
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Montpellier<br />
              <span className="text-yellow-400">H&eacute;rault 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Trouvez votre formation HACCP &agrave; Montpellier et dans l&apos;H&eacute;rault. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Montpellier Antigone","Béziers & Sète","Littoral méditerranéen","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Montpellier : guide pour les restaurateurs de l&apos;H&eacute;rault</h2>

          <p>
            Montpellier est la <strong>7e ville de France</strong> par sa population (290 000 habitants, 500 000 dans la m&eacute;tropole) et l&apos;une des villes les plus dynamiques du sud de la France. Sa croissance d&eacute;mographique rapide (plus de 4 000 nouveaux habitants par an) s&apos;accompagne d&apos;une <strong>explosion de l&apos;offre de restauration</strong>. L&apos;H&eacute;rault compte plus de <strong>5 500 &eacute;tablissements de restauration</strong>, de Montpellier centre aux stations baln&eacute;aires du littoral.
          </p>

          <p>
            La ville est marqu&eacute;e par une forte <strong>saisonnalit&eacute;</strong> : le littoral h&eacute;raultais (Palavas-les-Flots, La Grande-Motte, Cap d&apos;Agde, S&egrave;te) voit sa population doubler en &eacute;t&eacute;, g&eacute;n&eacute;rant une demande massive en restauration saisonni&egrave;re. Ces &eacute;tablissements doivent &eacute;galement se conformer &agrave; l&apos;obligation HACCP, avec des d&eacute;fis suppl&eacute;mentaires li&eacute;s &agrave; la chaleur m&eacute;diterran&eacute;enne. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/montpellier" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Montpellier sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP et sp&eacute;cificit&eacute;s m&eacute;diterran&eacute;ennes</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> s&apos;applique &agrave; tous les &eacute;tablissements de restauration de l&apos;H&eacute;rault. La <strong>DDPP 34</strong> est particuli&egrave;rement vigilante pendant la saison estivale, o&ugrave; la chaleur m&eacute;diterran&eacute;enne (fr&eacute;quemment au-dessus de 35 &deg;C) amplifie les risques de rupture de la cha&icirc;ne du froid. Les contr&ocirc;les sont renforc&eacute;s sur le littoral en juillet-ao&ucirc;t et dans le centre historique de Montpellier (place de la Com&eacute;die, Ecusson).
          </p>

          <p>
            La restauration m&eacute;diterran&eacute;enne pr&eacute;sente des sp&eacute;cificit&eacute;s HACCP : manipulation des <strong>fruits de mer</strong> (moules de l&apos;&eacute;tang de Thau, coquillages), service en <strong>terrasse ext&eacute;rieure</strong> sous forte chaleur, gestion des <strong>buffets froids</strong> en restauration estivale, et stockage des produits dans des conditions climatiques exigeantes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement en Occitanie</h2>

          <p>
            Les tarifs de la formation HACCP &agrave; Montpellier sont parmi les plus <strong>avantageux de France</strong> : entre <strong>250 et 350 &euro;</strong> en pr&eacute;sentiel et entre <strong>179 et 259 &euro;</strong> en e-learning. L&apos;OPCO AKTO finance jusqu&apos;&agrave; 100 % pour les salari&eacute;s CHR. La <strong>R&eacute;gion Occitanie</strong> propose le dispositif <strong>Qualif Pro</strong> pour les demandeurs d&apos;emploi souhaitant se former &agrave; un m&eacute;tier de la restauration.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation H&eacute;rault", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 34 : contr&ocirc;les &eacute;t&eacute; renforc&eacute;s", "Restauration saisonni&egrave;re littoral", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne m&eacute;diterran&eacute;enne", points: ["Cha&icirc;ne du froid par forte chaleur", "Fruits de mer et coquillages", "Service en terrasse ext&eacute;rieure", "Gestion des 14 allerg&egrave;nes"] },
              { titre: "Pratique professionnelle", points: ["Plan HACCP adapt&eacute; restaurant", "Tra&ccedil;abilit&eacute; produits de la mer", "Simulation contr&ocirc;le DDPP", "Nettoyage-d&eacute;sinfection"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "Qualif Pro Occitanie", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Montpellier</h2>

          <p>
            La formation de 14 heures sur 2 jours couvre : <strong>Jour 1</strong> &mdash; cadre r&eacute;glementaire, dangers alimentaires, microbiologie, BPH, 7 principes HACCP. <strong>Jour 2</strong> (4h de pratique) &mdash; plan HACCP personnalis&eacute;, tra&ccedil;abilit&eacute;, simulation contr&ocirc;le DDPP, fiches de suivi. Attestation DRAAF d&eacute;livr&eacute;e imm&eacute;diatement. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Montpellier</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Montpellier</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi dans l&apos;H&eacute;rault &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
