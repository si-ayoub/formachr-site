import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Réglementation HACCP Food Truck 2026 — Code NAF, DDPP, Obligations",
  description: "Réglementation HACCP spécifique aux food trucks en 2026 : code NAF 56.10C, obligations DDPP, déclaration préalable, normes d'hygiène et équipements obligatoires.",
  alternates: { canonical: `${SITE_URL}/blog/haccp-food-truck-reglementation` }
}

const FAQ = [
  { question: "Quel code NAF pour un food truck ?", answer: "Le code NAF principal pour un food truck est le 56.10C (restauration de type rapide). Ce code recouvre les activités de vente de repas et boissons à consommer sur place ou à emporter, sans service à table. Certains food trucks spécialisés peuvent relever du 56.10A (restauration traditionnelle) s'ils proposent un service à table. Le code NAF détermine la convention collective applicable et l'OPCO de rattachement (AKTO pour le CHR)." },
  { question: "Faut-il une déclaration DDPP pour un food truck ?", answer: "Oui, tout food truck doit effectuer une déclaration d'activité auprès de la DDPP (Direction Départementale de la Protection des Populations) du département où se situe le siège de l'entreprise, via le formulaire CERFA n°13984*06. Cette déclaration doit être faite avant le démarrage de l'activité. De plus, si le food truck se déplace dans plusieurs départements, il doit informer la DDPP de chaque département où il opère régulièrement." },
  { question: "Quels équipements HACCP sont obligatoires dans un food truck ?", answer: "Un food truck doit disposer au minimum de : un bac à lave-mains à commande non manuelle avec savon bactéricide et essuie-mains à usage unique, un réfrigérateur avec thermomètre visible, un plan de travail en matériau lisse et lavable (inox recommandé), une poubelle à pédale avec couvercle, un point d'eau potable (réservoir de 60 à 200 litres selon l'activité), et un bac de récupération des eaux usées. L'ensemble doit être conforme aux normes du règlement CE 852/2004." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Réglementation HACCP Food Truck", url: "/blog/haccp-food-truck-reglementation" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Food Truck",
        description: "Formation HACCP spécifique food truck — réglementation, équipements, DDPP",
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
          <li className="text-gray-800 font-medium">R&eacute;glementation HACCP Food Truck</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              R&Eacute;GLEMENTATION 2026 &mdash; Code NAF 56.10C
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              R&eacute;glementation HACCP Food Truck<br />
              <span className="text-yellow-400">Guide Complet 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Toutes les obligations HACCP sp&eacute;cifiques aux food trucks : code NAF, d&eacute;claration DDPP, &eacute;quipements obligatoires, contr&ocirc;les et sanctions.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Code NAF 56.10C","Déclaration DDPP","Équipements obligatoires","Contrôles terrain"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="food-truck" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">R&eacute;glementation HACCP food truck : tout ce que vous devez savoir en 2026</h2>

          <p>
            Le food truck est soumis &agrave; une <strong>r&eacute;glementation stricte</strong> en mati&egrave;re d&apos;hygi&egrave;ne alimentaire, identique dans ses principes &agrave; celle d&apos;un restaurant fixe, mais avec des contraintes suppl&eacute;mentaires li&eacute;es &agrave; la <strong>mobilit&eacute; du v&eacute;hicule</strong>, &agrave; l&apos;espace r&eacute;duit et &agrave; l&apos;absence de raccordement permanent aux r&eacute;seaux d&apos;eau et d&apos;&eacute;lectricit&eacute;. En 2026, la r&eacute;glementation a &eacute;t&eacute; renforc&eacute;e par l&apos;arr&ecirc;t&eacute; du 12 f&eacute;vrier 2024 qui impose un minimum de <strong>4 heures de pratique</strong> dans la formation HACCP de 14 heures.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Code NAF et cadre juridique du food truck</h2>

          <p>
            Le food truck est g&eacute;n&eacute;ralement enregistr&eacute; sous le <strong>code NAF 56.10C</strong> (restauration de type rapide), qui couvre la vente de repas et boissons &agrave; consommer sur place ou &agrave; emporter sans service &agrave; table. Ce code d&eacute;termine votre convention collective (HCR &mdash; H&ocirc;tels, Caf&eacute;s, Restaurants) et votre OPCO de rattachement (<strong>AKTO</strong>).
          </p>

          <p>
            Le food truck est consid&eacute;r&eacute; comme un <strong>&eacute;tablissement de restauration commerciale ambulante</strong>. &Agrave; ce titre, il est soumis &agrave; l&apos;ensemble du <strong>paquet hygi&egrave;ne europ&eacute;en</strong> (r&egrave;glement CE 852/2004) et au droit fran&ccedil;ais (d&eacute;cret n&deg;2011-731). La formation HACCP de 14 heures est donc <strong>obligatoire</strong>, au m&ecirc;me titre que pour un restaurant fixe.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">D&eacute;claration DDPP : une obligation pr&eacute;alable</h2>

          <p>
            Avant de d&eacute;marrer votre activit&eacute; de food truck, vous devez effectuer une <strong>d&eacute;claration d&apos;activit&eacute;</strong> aupr&egrave;s de la DDPP du d&eacute;partement de votre si&egrave;ge social, via le formulaire <strong>CERFA n&deg;13984*06</strong>. Cette d&eacute;claration est gratuite et doit &ecirc;tre faite avant la premi&egrave;re mise en service. Si vous op&eacute;rez r&eacute;guli&egrave;rement dans plusieurs d&eacute;partements, vous devez &eacute;galement informer les DDPP concern&eacute;es.
          </p>

          <p>
            En compl&eacute;ment, vous devez disposer d&apos;une <strong>carte de commer&ccedil;ant ambulant</strong> (d&eacute;livr&eacute;e par le CFE de votre Chambre de Commerce) si vous exercez en dehors de la commune de votre si&egrave;ge social. Cette carte co&ucirc;te environ <strong>30 &euro;</strong> et est valable 4 ans.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">&Eacute;quipements HACCP obligatoires dans un food truck</h2>

          <p>
            L&apos;am&eacute;nagement int&eacute;rieur d&apos;un food truck doit respecter des normes pr&eacute;cises pour garantir la s&eacute;curit&eacute; alimentaire dans un espace confin&eacute;. Les <strong>&eacute;quipements obligatoires</strong> incluent : un bac lave-mains &agrave; commande non manuelle avec savon et essuie-mains &agrave; usage unique, un r&eacute;frig&eacute;rateur avec thermom&egrave;tre visible, des plans de travail en inox ou mat&eacute;riau lisse et lavable, un r&eacute;servoir d&apos;eau potable (60 &agrave; 200 litres), un bac de r&eacute;cup&eacute;ration des eaux us&eacute;es, une poubelle &agrave; p&eacute;dale avec couvercle, et un syst&egrave;me de ventilation/extraction.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Contr&ocirc;les DDPP sur les food trucks</h2>

          <p>
            Les food trucks sont contr&ocirc;l&eacute;s <strong>sur le terrain</strong> par les inspecteurs DDPP, souvent lors de march&eacute;s, festivals ou emplacements fixes. Les points v&eacute;rifi&eacute;s incluent : l&apos;attestation HACCP, la d&eacute;claration DDPP, les temp&eacute;ratures des produits stock&eacute;s, l&apos;hygi&egrave;ne g&eacute;n&eacute;rale du v&eacute;hicule, la disponibilit&eacute; d&apos;eau potable, l&apos;affichage des allerg&egrave;nes et la tra&ccedil;abilit&eacute; des produits. L&apos;amende pour d&eacute;faut d&apos;attestation HACCP est de <strong>1 500 &euro;</strong> (5e classe).
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "Cadre juridique", points: ["Code NAF 56.10C", "D&eacute;cret 2011-731 : 14h HACCP", "CERFA 13984*06 (DDPP)", "Carte commer&ccedil;ant ambulant"] },
              { titre: "&Eacute;quipements obligatoires", points: ["Lave-mains non manuel", "R&eacute;frig&eacute;rateur + thermom&egrave;tre", "R&eacute;servoir eau potable 60-200L", "Bac eaux us&eacute;es + extraction"] },
              { titre: "Hygi&egrave;ne sp&eacute;cifique", points: ["Cha&icirc;ne du froid mobile", "Nettoyage espace confin&eacute;", "Gestion des d&eacute;chets terrain", "Affichage allerg&egrave;nes"] },
              { titre: "Contr&ocirc;les et sanctions", points: ["Contr&ocirc;les terrain DDPP", "Amende 1 500&euro; (5e classe)", "Fermeture administrative possible", "Alim&apos;confiance publication"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Formation HACCP food truck : programme sp&eacute;cifique</h2>

          <p>
            La formation HACCP de 14 heures pour food truck suit le m&ecirc;me r&eacute;f&eacute;rentiel national que pour la restauration fixe, mais les organismes sp&eacute;cialis&eacute;s adaptent le contenu aux contraintes de la restauration ambulante : gestion de l&apos;eau en circuit ferm&eacute;, nettoyage en espace r&eacute;duit, transport des denr&eacute;es, et gestion des d&eacute;chets en ext&eacute;rieur. L&apos;attestation DRAAF d&eacute;livr&eacute;e est identique et valable nationalement.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; R&eacute;glementation HACCP Food Truck</h2>
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
          <h2 className="text-2xl font-bold mb-3">Formation HACCP sp&eacute;ciale food truck</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi &mdash; Programme adapt&eacute; &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
