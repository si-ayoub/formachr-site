import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Rouen — Seine-Maritime 2026",
  description: "Formation HACCP à Rouen et en Seine-Maritime (76). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet restaurateurs rouennais 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-rouen` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Rouen ?", answer: "Rouen dispose de centres de formation certifiés Qualiopi dans le centre historique (quartier de la cathédrale, rue du Gros-Horloge), à proximité de la gare Rouen Rive Droite et dans la zone du Madrillet à Saint-Étienne-du-Rouvray. Des sessions sont organisées 1 à 2 fois par mois. Le Havre et Dieppe proposent aussi des sessions pour les restaurateurs de la côte." },
  { question: "Combien coûte la formation HACCP en Seine-Maritime ?", answer: "Le tarif moyen en Seine-Maritime se situe entre 250 et 350 euros en présentiel et entre 179 et 259 euros en e-learning. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR. France Travail propose l'AIF. La Région Normandie offre des aides via le dispositif Qualif' Individuel pour les demandeurs d'emploi." },
  { question: "La formation HACCP couvre-t-elle la restauration portuaire du Havre ?", answer: "Oui, les organismes de Seine-Maritime intègrent les spécificités de la restauration en zone portuaire et côtière : manipulation des produits de la pêche (poissons frais, crevettes de Honfleur, moules de bouchot), gestion de la chaîne du froid pour les produits de la mer, et restauration liée au trafic maritime (croisières, ferries transmanche)." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Rouen", url: "/blog/formation-haccp-rouen" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Rouen",
        description: "Formation hygiène alimentaire HACCP à Rouen — 14 heures, attestation officielle",
        city: "Rouen",
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
          <li className="text-gray-800 font-medium">Formation HACCP Rouen</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              SEINE-MARITIME (76) &mdash; Normandie
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Rouen<br />
              <span className="text-yellow-400">Seine-Maritime 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Formation HACCP &agrave; Rouen et en Seine-Maritime. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Rouen centre & gare","Le Havre & Dieppe","Produits de la mer","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Rouen : guide des restaurateurs de Seine-Maritime</h2>

          <p>
            Rouen, pr&eacute;fecture de la Seine-Maritime et capitale historique de la Normandie, est une ville de <strong>115 000 habitants</strong> (500 000 dans la m&eacute;tropole). Son centre historique m&eacute;di&eacute;val (vieux Rouen, cath&eacute;drale peinte par Monet) et sa proximit&eacute; de Paris (1h15 en train) en font une destination gastronomique pris&eacute;e. La Seine-Maritime est un d&eacute;partement &agrave; la double identit&eacute; : urbaine (Rouen, Le Havre) et c&ocirc;ti&egrave;re (Dieppe, F&eacute;camp, &Eacute;tretat).
          </p>

          <p>
            Le d&eacute;partement compte plus de <strong>3 800 &eacute;tablissements de restauration</strong>, des bistrots rouennais aux restaurants de poissons du Havre et de Dieppe. Tous doivent se conformer &agrave; l&apos;obligation de formation HACCP. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/rouen" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Rouen sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP et contr&ocirc;les en Seine-Maritime</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> s&apos;applique &agrave; tous les &eacute;tablissements. La <strong>DDPP 76</strong> contr&ocirc;le r&eacute;guli&egrave;rement le vieux Rouen (rue du Gros-Horloge, place du Vieux-March&eacute;), le port du Havre, les restaurants c&ocirc;tiers de <strong>Dieppe</strong> et <strong>F&eacute;camp</strong>, et les march&eacute;s aux poissons. La manipulation des <strong>produits de la mer frais</strong> fait l&apos;objet d&apos;une attention particuli&egrave;re lors des inspections.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Sp&eacute;cificit&eacute;s de la restauration en Seine-Maritime</h2>

          <p>
            La Seine-Maritime est un d&eacute;partement &agrave; forte tradition maritime. La manipulation des <strong>produits de la p&ecirc;che</strong> (hareng de Boulogne, sole dieppoise, crevettes grises, coquilles Saint-Jacques) impose des pr&eacute;cautions HACCP sp&eacute;cifiques : cha&icirc;ne du froid stricte (0 &agrave; +2 &deg;C), tra&ccedil;abilit&eacute; renforc&eacute;e, d&eacute;tection des allerg&egrave;nes (crustac&eacute;s, poissons, mollusques) et gestion des risques li&eacute;s &agrave; l&apos;histamine.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs et financement en Normandie</h2>

          <p>
            Tarifs comp&eacute;titifs : <strong>250 &agrave; 350 &euro;</strong> en pr&eacute;sentiel, <strong>179 &agrave; 259 &euro;</strong> en e-learning. L&apos;OPCO AKTO finance jusqu&apos;&agrave; 100 %. La <strong>R&eacute;gion Normandie</strong> propose <strong>Qualif&apos; Individuel</strong> pour les demandeurs d&apos;emploi.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation 76", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 76 : contr&ocirc;les ports et c&ocirc;te", "March&eacute;s aux poissons surveill&eacute;s", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne produits mer", points: ["Cha&icirc;ne du froid 0-2&deg;C poissons", "Risques histamine", "Allerg&egrave;nes crustac&eacute;s/mollusques", "Tra&ccedil;abilit&eacute; p&ecirc;che"] },
              { titre: "Pratique professionnelle", points: ["Plan HACCP restaurant/poissonnerie", "Gestion stocks produits frais", "Simulation contr&ocirc;le DDPP", "Nettoyage-d&eacute;sinfection"] },
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

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Rouen</h2>

          <p>
            Formation de 14 heures sur 2 jours. <strong>Jour 1</strong> : cadre r&eacute;glementaire, dangers alimentaires, microbiologie, BPH, 7 principes HACCP. <strong>Jour 2</strong> (4h pratique) : plan HACCP personnalis&eacute;, tra&ccedil;abilit&eacute; produits de la mer, simulation contr&ocirc;le DDPP, fiches de suivi. Attestation DRAAF. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Rouen</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Rouen</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi en Seine-Maritime &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
