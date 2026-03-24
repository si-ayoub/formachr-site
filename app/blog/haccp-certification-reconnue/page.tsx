import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Certification HACCP Reconnue — Qualiopi et Agréments 2026",
  description: "Certification HACCP reconnue en 2026 : Qualiopi, DRAAF, ROFHYA. Comment vérifier qu'un organisme est certifié et que l'attestation est valide.",
  alternates: { canonical: `${SITE_URL}/blog/haccp-certification-reconnue` }
}

const FAQ = [
  { question: "Comment vérifier qu'un organisme de formation HACCP est certifié Qualiopi ?", answer: "Pour vérifier la certification Qualiopi d'un organisme, consultez la liste officielle sur le site du ministère du Travail (data.gouv.fr) ou sur le site de France compétences. L'organisme doit afficher le logo Qualiopi avec la mention « Actions de formation » et son numéro de certification. Vous pouvez également demander une copie du certificat Qualiopi, qui mentionne les dates de validité et l'organisme certificateur (Bureau Veritas, AFNOR, Certifopac, etc.)." },
  { question: "Quelle est la différence entre Qualiopi et l'enregistrement DRAAF/ROFHYA ?", answer: "Ce sont deux dispositifs distincts et complémentaires. L'enregistrement au ROFHYA (Registre Officiel des Formations en Hygiène Alimentaire) auprès de la DRAAF est une obligation légale : tout organisme dispensant la formation HACCP de 14 heures doit y être inscrit. Qualiopi est une certification qualité facultative mais indispensable pour que la formation soit éligible aux financements publics (OPCO, France Travail, CPF). Un organisme sérieux possède les deux." },
  { question: "L'attestation HACCP est-elle valable à vie ?", answer: "L'attestation HACCP de 14 heures n'a pas de date d'expiration légale. Cependant, les inspecteurs DDPP et les bonnes pratiques professionnelles recommandent un recyclage tous les 5 ans pour tenir compte des évolutions réglementaires. Par ailleurs, le Plan de Maîtrise Sanitaire (PMS) de l'établissement doit prévoir des mises à jour régulières de la formation pour tout le personnel manipulant des denrées." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Certification HACCP Reconnue", url: "/blog/haccp-certification-reconnue" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Certifiée",
        description: "Formation HACCP certifiée Qualiopi — attestation reconnue DRAAF",
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
          <li className="text-gray-800 font-medium">Certification HACCP Reconnue</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold">
              CERTIFICATIONS &mdash; Qualiopi, DRAAF, ROFHYA
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Certification HACCP Reconnue<br />
              <span className="text-yellow-400">Qualiopi et Agr&eacute;ments 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Comment v&eacute;rifier qu&apos;un organisme de formation HACCP est certifi&eacute;, que l&apos;attestation est reconnue et que le financement est possible.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Qualiopi obligatoire financement","DRAAF / ROFHYA","Attestation valide","Éviter les arnaques"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Certification HACCP : d&eacute;m&ecirc;ler le vrai du faux en 2026</h2>

          <p>
            Avec la multiplication des offres de formation HACCP &mdash; pr&eacute;sentiel, e-learning, hybride &mdash; il est devenu crucial de savoir <strong>distinguer une formation l&eacute;gitime d&apos;une arnaque</strong>. En 2026, des centaines d&apos;organismes proposent la formation HACCP de 14 heures en France, mais tous ne sont pas &eacute;galement s&eacute;rieux. Cet article vous explique les <strong>certifications et agr&eacute;ments</strong> qui garantissent la validit&eacute; de votre formation.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Qualiopi : la certification qualit&eacute; indispensable</h2>

          <p>
            <strong>Qualiopi</strong> est la certification qualit&eacute; des organismes de formation, institu&eacute;e par la loi &laquo; Avenir professionnel &raquo; de 2018 et obligatoire depuis le 1er janvier 2022. Un organisme certifi&eacute; Qualiopi a &eacute;t&eacute; audit&eacute; par un organisme certificateur acr&eacute;dit&eacute; (Bureau Veritas, AFNOR, Certifopac, etc.) sur <strong>7 crit&egrave;res et 32 indicateurs</strong> portant sur la qualit&eacute; de la formation.
          </p>

          <p>
            La certification Qualiopi est <strong>indispensable</strong> pour que la formation soit &eacute;ligible aux financements publics : <strong>OPCO</strong> (AKTO, EP, etc.), <strong>France Travail</strong> (AIF), <strong>CPF</strong> et aides r&eacute;gionales. Sans Qualiopi, l&apos;organisme ne peut pas &eacute;mettre de facture prise en charge par ces dispositifs. Pour v&eacute;rifier la certification, consultez la liste officielle sur <strong>data.gouv.fr</strong> ou demandez une copie du certificat.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">DRAAF et ROFHYA : l&apos;enregistrement l&eacute;gal</h2>

          <p>
            Tout organisme dispensant la formation HACCP de 14 heures doit &ecirc;tre enregistr&eacute; au <strong>ROFHYA</strong> (Registre Officiel des Formations en Hygi&egrave;ne Alimentaire) aupr&egrave;s de la <strong>DRAAF</strong> (Direction R&eacute;gionale de l&apos;Alimentation, de l&apos;Agriculture et de la For&ecirc;t) de sa r&eacute;gion. Cet enregistrement est une <strong>obligation l&eacute;gale</strong> issue du d&eacute;cret n&deg;2011-731 et de l&apos;arr&ecirc;t&eacute; du 5 octobre 2011.
          </p>

          <p>
            L&apos;enregistrement ROFHYA garantit que l&apos;organisme respecte le <strong>r&eacute;f&eacute;rentiel de formation</strong> officiel de 14 heures et que les formateurs disposent des comp&eacute;tences requises. L&apos;attestation d&eacute;livr&eacute;e par un organisme enregistr&eacute; est la seule reconnue par les inspecteurs DDPP lors des contr&ocirc;les.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">&Eacute;viter les arnaques : les signaux d&apos;alerte</h2>

          <p>
            Plusieurs signaux doivent vous alerter sur la qualit&eacute; d&apos;une formation HACCP : un <strong>prix anormalement bas</strong> (inf&eacute;rieur &agrave; 100 &euro;), l&apos;absence de mention Qualiopi ou ROFHYA sur le site de l&apos;organisme, une <strong>dur&eacute;e inf&eacute;rieure &agrave; 14 heures</strong>, l&apos;absence de partie pratique (obligatoire depuis 2024), un certificat ou &laquo; dipl&ocirc;me &raquo; au lieu d&apos;une attestation de formation, et l&apos;impossibilit&eacute; de fournir un num&eacute;ro d&apos;enregistrement DRAAF.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-8">
            <h3 className="font-bold text-red-800 mb-3">Signaux d&apos;alerte &mdash; Formation HACCP non conforme</h3>
            <ul className="space-y-2 text-sm text-red-900">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">&bull;</span> Prix inf&eacute;rieur &agrave; 100 &euro; (trop bas pour &ecirc;tre s&eacute;rieux)</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">&bull;</span> Dur&eacute;e inf&eacute;rieure &agrave; 14 heures</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">&bull;</span> Pas de mention Qualiopi ni ROFHYA</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">&bull;</span> &laquo; Dipl&ocirc;me &raquo; ou &laquo; certificat &raquo; au lieu d&apos;attestation</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold">&bull;</span> Aucune partie pratique dans le programme</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "Qualiopi", points: ["Certification qualit&eacute; obligatoire", "7 crit&egrave;res, 32 indicateurs", "Audit par organisme acr&eacute;dit&eacute;", "Indispensable financement OPCO"] },
              { titre: "DRAAF / ROFHYA", points: ["Enregistrement l&eacute;gal obligatoire", "R&eacute;f&eacute;rentiel 14h respect&eacute;", "Formateurs qualifi&eacute;s", "Attestation reconnue DDPP"] },
              { titre: "Attestation valide", points: ["Nominative (nom du stagiaire)", "Dat&eacute;e et sign&eacute;e", "Nom organisme + n&deg; DRAAF", "Pas de date d&apos;expiration l&eacute;gale"] },
              { titre: "Bonnes pratiques", points: ["V&eacute;rifier Qualiopi sur data.gouv", "Demander n&deg; ROFHYA", "Recyclage recommand&eacute; 5 ans", "Comparer 3 organismes minimum"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Dur&eacute;e de validit&eacute; de l&apos;attestation HACCP</h2>

          <p>
            L&apos;attestation HACCP de 14 heures <strong>n&apos;a pas de date d&apos;expiration l&eacute;gale</strong>. Aucun texte r&eacute;glementaire n&apos;impose un renouvellement p&eacute;riodique. Cependant, les <strong>bonnes pratiques professionnelles</strong> et les recommandations des inspecteurs DDPP pr&eacute;conisent un <strong>recyclage tous les 5 ans</strong> pour int&eacute;grer les &eacute;volutions r&eacute;glementaires (comme l&apos;arr&ecirc;t&eacute; de 2024 sur les 4h de pratique). Le PMS de l&apos;&eacute;tablissement doit pr&eacute;voir un plan de formation continue pour le personnel.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Certification HACCP Reconnue</h2>
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
          <h2 className="text-2xl font-bold mb-3">Trouvez un organisme certifi&eacute; Qualiopi</h2>
          <p className="text-blue-100 mb-6">Formation HACCP reconnue &mdash; Attestation DRAAF &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
