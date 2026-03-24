import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Grenoble — Isère 2026",
  description: "Formation HACCP à Grenoble et en Isère (38). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet pour restaurateurs grenoblois 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-grenoble` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Grenoble ?", answer: "Grenoble dispose de centres de formation certifiés Qualiopi principalement situés dans le quartier Europole (près de la gare), le centre-ville (place Victor Hugo, cours Jean Jaurès) et la zone Inovallée à Meylan. Des sessions sont organisées 2 à 3 fois par mois. Voiron et Bourgoin-Jallieu proposent également des sessions ponctuelles pour les restaurateurs du nord-Isère." },
  { question: "Combien coûte la formation HACCP en Isère ?", answer: "Le tarif moyen en Isère se situe entre 260 et 360 euros en présentiel et entre 179 et 259 euros en e-learning. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR. France Travail propose l'AIF pour les demandeurs d'emploi. La Région Auvergne-Rhône-Alpes offre des aides complémentaires via le Pass Formation pour les créateurs d'entreprise." },
  { question: "La formation HACCP couvre-t-elle les spécificités des restaurants de montagne ?", answer: "Oui, les organismes grenoblois intègrent les spécificités de la restauration en zone de montagne : gestion des approvisionnements en altitude, contraintes logistiques des stations de ski, restauration saisonnière (ouverture/fermeture), conservation à basse température ambiante en hiver et risques accrus en été. Ces aspects sont abordés lors de la mise en pratique (jour 2)." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Grenoble", url: "/blog/formation-haccp-grenoble" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Grenoble",
        description: "Formation hygiène alimentaire HACCP à Grenoble — 14 heures, attestation officielle",
        city: "Grenoble",
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
          <li className="text-gray-800 font-medium">Formation HACCP Grenoble</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              IS&Egrave;RE (38) &mdash; Auvergne-Rh&ocirc;ne-Alpes
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Grenoble<br />
              <span className="text-yellow-400">Is&egrave;re 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Guide complet de la formation HACCP &agrave; Grenoble et en Is&egrave;re. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Grenoble Europole","Voiron & Bourgoin","Stations de ski","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Grenoble : guide pour les restaurateurs is&eacute;rois</h2>

          <p>
            Grenoble, pr&eacute;fecture de l&apos;Is&egrave;re et capitale des Alpes fran&ccedil;aises, est une ville de <strong>160 000 habitants</strong> (450 000 dans la m&eacute;tropole) entour&eacute;e de montagnes. Sa position g&eacute;ographique unique en fait un p&ocirc;le de restauration singulier : restaurants urbains du centre-ville, &eacute;tablissements de montagne dans les stations environnantes (Chamrousse, Villard-de-Lans, les Deux Alpes, l&apos;Alpe d&apos;Huez), et restauration saisonni&egrave;re li&eacute;e au tourisme hivernal et estival.
          </p>

          <p>
            L&apos;Is&egrave;re compte plus de <strong>3 500 &eacute;tablissements de restauration</strong> soumis &agrave; l&apos;obligation de formation HACCP. La ville est &eacute;galement un p&ocirc;le universitaire majeur (65 000 &eacute;tudiants), ce qui g&eacute;n&egrave;re une forte demande de restauration rapide et de snacking. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/grenoble" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Grenoble sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP en Is&egrave;re et contr&ocirc;les DDPP</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> impose la formation HACCP de 14 heures &agrave; tout &eacute;tablissement de restauration commerciale. La <strong>DDPP de l&apos;Is&egrave;re</strong> est particuli&egrave;rement attentive aux &eacute;tablissements saisonniers des stations de ski, qui ouvrent et ferment chaque saison et doivent reconstituer leurs &eacute;quipes. Les contr&ocirc;les sont fr&eacute;quents en centre-ville de Grenoble (quartier Saint-Laurent, place Grenette) et dans les stations pendant la saison d&apos;hiver.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Sp&eacute;cificit&eacute;s de la restauration en montagne</h2>

          <p>
            La restauration en zone de montagne pr&eacute;sente des <strong>d&eacute;fis HACCP particuliers</strong>. L&apos;approvisionnement en altitude peut &ecirc;tre complexe, avec des d&eacute;lais de livraison plus longs et des ruptures de cha&icirc;ne du froid potentielles pendant le transport. Les restaurants de station fonctionnent souvent en <strong>mode saisonnier</strong>, ce qui implique une mise en route des &eacute;quipements froids en d&eacute;but de saison et une vigilance accrue sur la propret&eacute; des locaux apr&egrave;s une longue p&eacute;riode de fermeture.
          </p>

          <p>
            Les organismes de formation grenoblois int&egrave;grent ces sp&eacute;cificit&eacute;s dans leur programme, en abordant la <strong>gestion des stocks en altitude</strong>, les proc&eacute;dures de remise en service des &eacute;quipements frigorifiques et les bonnes pratiques de nettoyage-d&eacute;sinfection apr&egrave;s fermeture saisonni&egrave;re.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement en Is&egrave;re</h2>

          <p>
            Les tarifs de la formation HACCP en Is&egrave;re sont <strong>tr&egrave;s comp&eacute;titifs</strong> : entre <strong>260 et 360 &euro;</strong> en pr&eacute;sentiel et entre <strong>179 et 259 &euro;</strong> en e-learning. L&apos;OPCO AKTO finance jusqu&apos;&agrave; 100 % pour les salari&eacute;s CHR. La <strong>R&eacute;gion Auvergne-Rh&ocirc;ne-Alpes</strong> propose le <strong>Pass Formation</strong> pour les cr&eacute;ateurs d&apos;entreprise et les demandeurs d&apos;emploi.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation Is&egrave;re", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 38 : contr&ocirc;les stations", "Restauration saisonni&egrave;re", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne alimentaire", points: ["7 principes HACCP", "Cha&icirc;ne du froid en altitude", "Tra&ccedil;abilit&eacute; montagne", "Gestion allerg&egrave;nes"] },
              { titre: "Pratique montagne", points: ["Approvisionnement altitude", "Remise en service saisonni&egrave;re", "Stockage conditions sp&eacute;ciales", "Nettoyage apr&egrave;s fermeture"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "Pass Formation R&eacute;gion AURA", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Grenoble</h2>

          <p>
            La formation de 14 heures sur 2 jours suit le r&eacute;f&eacute;rentiel national. <strong>Jour 1</strong> : cadre r&eacute;glementaire, dangers alimentaires, microbiologie, BPH, 7 principes HACCP. <strong>Jour 2</strong> (4h de pratique) : plan HACCP personnalis&eacute;, tra&ccedil;abilit&eacute;, simulation contr&ocirc;le DDPP, fiches de suivi. Attestation DRAAF d&eacute;livr&eacute;e imm&eacute;diatement. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Grenoble</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Grenoble</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi en Is&egrave;re &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
