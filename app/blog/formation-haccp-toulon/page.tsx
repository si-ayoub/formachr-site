import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Toulon — Var 2026",
  description: "Formation HACCP à Toulon et dans le Var (83). Organismes certifiés Qualiopi, 14h, financement OPCO. Guide complet restaurateurs varois 2026.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-toulon` }
}

const FAQ = [
  { question: "Où suivre la formation HACCP à Toulon ?", answer: "Toulon propose des centres de formation certifiés Qualiopi dans le centre-ville (près de la gare SNCF), dans le quartier du Mourillon et dans la zone du Grand Var à La Valette. Des sessions sont organisées 1 à 3 fois par mois. Hyères, Draguignan et Fréjus proposent également des sessions pour les restaurateurs de l'est et du nord du Var." },
  { question: "La formation HACCP couvre-t-elle la restauration balnéaire du Var ?", answer: "Oui, les organismes de formation varois intègrent les spécificités de la restauration balnéaire : gestion de la chaîne du froid par forte chaleur estivale, manipulation des fruits de mer et poissons frais, service en terrasse et en plein air, restauration saisonnière sur le littoral (Bandol, Sanary, Saint-Tropez, Sainte-Maxime). Ces aspects sont traités lors de la mise en pratique." },
  { question: "Combien coûte la formation HACCP dans le Var ?", answer: "Le tarif moyen dans le Var se situe entre 260 et 360 euros en présentiel et entre 179 et 259 euros en e-learning. L'OPCO AKTO finance jusqu'à 100 % pour les salariés CHR. France Travail PACA propose l'AIF. La Région Sud (PACA) offre des aides complémentaires pour les demandeurs d'emploi via le Chèque Régional Formation." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Toulon", url: "/blog/formation-haccp-toulon" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Toulon",
        description: "Formation hygiène alimentaire HACCP à Toulon — 14 heures, attestation officielle",
        city: "Toulon",
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
          <li className="text-gray-800 font-medium">Formation HACCP Toulon</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              VAR (83) &mdash; R&eacute;gion Sud PACA
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Toulon<br />
              <span className="text-yellow-400">Var 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Trouvez votre formation HACCP &agrave; Toulon et dans le Var. Organismes certifi&eacute;s Qualiopi, financement OPCO, attestation officielle.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Toulon centre","Hyères & Fréjus","Littoral varois","Financement OPCO 100%"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP &agrave; Toulon : guide pour les restaurateurs du Var</h2>

          <p>
            Toulon, pr&eacute;fecture du Var et 14e ville de France, compte <strong>180 000 habitants</strong> (580 000 dans la m&eacute;tropole). Premi&egrave;re base navale fran&ccedil;aise, la ville est &eacute;galement un p&ocirc;le touristique majeur de la c&ocirc;te m&eacute;diterran&eacute;enne. Le Var est le <strong>premier d&eacute;partement touristique de France</strong> apr&egrave;s Paris, avec plus de 10 millions de nuit&eacute;es par an, g&eacute;n&eacute;rant une demande massive en restauration.
          </p>

          <p>
            Le d&eacute;partement compte plus de <strong>5 000 &eacute;tablissements de restauration</strong>, de Toulon aux stations baln&eacute;aires embl&eacute;matiques : <strong>Saint-Tropez</strong>, <strong>Bandol</strong>, <strong>Sanary-sur-Mer</strong>, <strong>Hy&egrave;res</strong> et <strong>Fr&eacute;jus</strong>. Tous sont soumis &agrave; l&apos;obligation de formation HACCP. D&eacute;couvrez les <a href="https://musmap.com/fr/restaurants/toulon" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">restaurants halal &agrave; Toulon sur musmap</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Obligation HACCP et contr&ocirc;les dans le Var</h2>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> impose la formation HACCP de 14 heures. La <strong>DDPP du Var</strong> est particuli&egrave;rement active en <strong>saison estivale</strong> (juin-septembre), p&eacute;riode durant laquelle les risques sanitaires sont amplifi&eacute;s par la chaleur m&eacute;diterran&eacute;enne. Les contr&ocirc;les sont renforc&eacute;s sur le littoral, dans les march&eacute;s proven&ccedil;aux et dans les zones touristiques &agrave; forte affluence.
          </p>

          <p>
            La restauration varoise pr&eacute;sente des d&eacute;fis HACCP sp&eacute;cifiques : <strong>temp&eacute;ratures ext&eacute;rieures &eacute;lev&eacute;es</strong> pouvant d&eacute;passer 40 &deg;C en &eacute;t&eacute;, service en terrasse et en plein air, manipulation de <strong>produits de la mer frais</strong> (bouillabaisse, fruits de mer, poissons grills), et gestion de la <strong>saisonnalit&eacute;</strong> (ouverture/fermeture d&apos;&eacute;tablissements, recrutement de personnel temporaire).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">O&ugrave; se former dans le Var</h2>

          <p>
            Les centres de formation HACCP du Var se concentrent &agrave; <strong>Toulon centre-ville</strong> (pr&egrave;s de la gare SNCF, acc&egrave;s TGV et TER), &agrave; <strong>La Valette-du-Var</strong> (zone commerciale Grand Var) et &agrave; <strong>Hy&egrave;res</strong>. Des sessions ponctuelles sont propos&eacute;es &agrave; <strong>Draguignan</strong> (centre Var), <strong>Fr&eacute;jus</strong> et <strong>Saint-Rapha&euml;l</strong> (est varois). Les tarifs sont comp&eacute;titifs : <strong>260 &agrave; 360 &euro;</strong> en pr&eacute;sentiel, <strong>179 &agrave; 259 &euro;</strong> en e-learning.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "R&eacute;glementation Var", points: ["D&eacute;cret 2011-731 : 14h obligatoires", "DDPP 83 : contr&ocirc;les &eacute;t&eacute; renforc&eacute;s", "Littoral touristique surveill&eacute;", "Arr&ecirc;t&eacute; 2024 : 4h pratique"] },
              { titre: "Hygi&egrave;ne m&eacute;diterran&eacute;enne", points: ["Cha&icirc;ne du froid forte chaleur", "Produits de la mer frais", "Service terrasse ext&eacute;rieure", "Allerg&egrave;nes crustac&eacute;s/poissons"] },
              { titre: "Pratique professionnelle", points: ["Plan HACCP restaurant/plage", "Tra&ccedil;abilit&eacute; produits mer", "Nettoyage-d&eacute;sinfection", "Gestion saisonnalit&eacute;"] },
              { titre: "Financement", points: ["OPCO AKTO 100%", "France Travail AIF", "Ch&egrave;que Formation R&eacute;gion Sud", "Attestation Qualiopi"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Programme de la formation HACCP &agrave; Toulon</h2>

          <p>
            La formation de 14 heures sur 2 jours : <strong>Jour 1</strong> &mdash; cadre r&eacute;glementaire, dangers alimentaires, microbiologie, BPH, 7 principes HACCP. <strong>Jour 2</strong> (4h pratique) &mdash; plan HACCP personnalis&eacute;, tra&ccedil;abilit&eacute;, simulation contr&ocirc;le DDPP, fiches de suivi. Attestation DRAAF d&eacute;livr&eacute;e imm&eacute;diatement. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Toulon</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez votre formation HACCP &agrave; Toulon</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi dans le Var &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
