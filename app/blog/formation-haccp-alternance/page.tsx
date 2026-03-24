import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP en Alternance 2026 — Guide Apprentissage",
  description: "Comment suivre la formation HACCP en alternance ou apprentissage en 2026. Financement, organismes, programme adapté aux apprentis en restauration.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-alternance` }
}

const FAQ = [
  { question: "Un apprenti en restauration doit-il suivre la formation HACCP ?", answer: "Oui, la formation HACCP de 14 heures est obligatoire pour tout établissement de restauration commerciale (décret n°2011-731). Si l'apprenti est le seul employé présent en cuisine, il doit détenir l'attestation. En pratique, c'est généralement le maître d'apprentissage ou un salarié permanent qui détient l'attestation, mais former l'apprenti est fortement recommandé pour sa montée en compétences et la sécurité de l'établissement." },
  { question: "Qui finance la formation HACCP d'un apprenti ?", answer: "La formation HACCP d'un apprenti peut être financée par l'OPCO de l'entreprise (AKTO pour le secteur CHR), dans le cadre du plan de développement des compétences. Le coût est distinct de celui du contrat d'apprentissage. L'OPCO prend en charge jusqu'à 100 % des frais pour les entreprises de moins de 50 salariés. L'apprenti ne débourse rien : c'est l'entreprise qui fait la demande auprès de l'OPCO." },
  { question: "La formation HACCP est-elle incluse dans le CAP Cuisine ou le Bac Pro ?", answer: "Les diplômes de l'Éducation nationale (CAP Cuisine, CAP Commercialisation et Services, Bac Pro CSR, BTS MHR) intègrent un module d'hygiène alimentaire dans leur programme. Les titulaires de ces diplômes sont dispensés de la formation HACCP de 14 heures, conformément à l'arrêté du 25 novembre 2011. Cette dispense s'applique à condition que le diplôme ait été obtenu après le 1er janvier 2006." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP en Alternance", url: "/blog/formation-haccp-alternance" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP en Alternance",
        description: "Formation HACCP adaptée aux apprentis et alternants en restauration",
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
          <li className="text-gray-800 font-medium">Formation HACCP en Alternance</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              APPRENTISSAGE &mdash; Guide 2026
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP en Alternance<br />
              <span className="text-yellow-400">Guide Apprentissage 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Comment int&eacute;grer la formation HACCP dans un parcours en alternance. Financement OPCO, dispenses dipl&ocirc;mes, programme adapt&eacute; aux apprentis.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Apprentis restauration","Financement OPCO AKTO","Dispenses diplômes","14h adaptées"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP et alternance : ce que dit la loi</h2>

          <p>
            L&apos;alternance (apprentissage ou contrat de professionnalisation) est une voie privil&eacute;gi&eacute;e pour acc&eacute;der aux m&eacute;tiers de la restauration. En 2026, plus de <strong>80 000 apprentis</strong> sont form&eacute;s chaque ann&eacute;e dans le secteur CHR en France. La question de la formation HACCP se pose naturellement pour ces jeunes professionnels qui manipulent des denr&eacute;es alimentaires au quotidien.
          </p>

          <p>
            Le <strong>d&eacute;cret n&deg;2011-731</strong> impose qu&apos;au moins un membre du personnel de chaque &eacute;tablissement de restauration commerciale justifie de la formation HACCP de 14 heures. L&apos;apprenti n&apos;est pas n&eacute;cessairement la personne d&eacute;sign&eacute;e &mdash; c&apos;est g&eacute;n&eacute;ralement le ma&icirc;tre d&apos;apprentissage ou le g&eacute;rant &mdash; mais former l&apos;apprenti est <strong>fortement recommand&eacute;</strong> pour plusieurs raisons.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Dispenses de formation HACCP pour les dipl&ocirc;m&eacute;s</h2>

          <p>
            L&apos;<strong>arr&ecirc;t&eacute; du 25 novembre 2011</strong> liste les dipl&ocirc;mes qui dispensent de la formation HACCP de 14 heures. Les titulaires des dipl&ocirc;mes suivants, obtenus <strong>apr&egrave;s le 1er janvier 2006</strong>, sont dispens&eacute;s : CAP Cuisine, CAP Commercialisation et Services en HCR, Bac Pro Cuisine, Bac Pro Commercialisation et Services, BTS Management en H&ocirc;tellerie-Restauration, et les dipl&ocirc;mes &eacute;quivalents. Si l&apos;apprenti pr&eacute;pare l&apos;un de ces dipl&ocirc;mes, il sera dispens&eacute; une fois dipl&ocirc;m&eacute;.
          </p>

          <p>
            <strong>Attention</strong> : la dispense ne s&apos;applique que si le dipl&ocirc;me a &eacute;t&eacute; <strong>obtenu</strong>. Pendant la dur&eacute;e de l&apos;apprentissage, avant l&apos;obtention du dipl&ocirc;me, l&apos;apprenti n&apos;est pas encore dispens&eacute;. Il est donc pertinent de suivre la formation HACCP de 14 heures en d&eacute;but d&apos;alternance, ce qui permet d&apos;&ecirc;tre imm&eacute;diatement op&eacute;rationnel et conforme.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Financement OPCO pour les apprentis</h2>

          <p>
            La formation HACCP d&apos;un apprenti est financ&eacute;e par l&apos;<strong>OPCO de l&apos;entreprise</strong>, ind&eacute;pendamment du co&ucirc;t du contrat d&apos;apprentissage. Pour le secteur CHR, l&apos;<strong>OPCO AKTO</strong> prend en charge jusqu&apos;&agrave; 100 % des frais dans le cadre du plan de d&eacute;veloppement des comp&eacute;tences pour les entreprises de moins de 50 salari&eacute;s. L&apos;apprenti ne d&eacute;bourse rien : c&apos;est l&apos;employeur qui fait la demande de prise en charge.
          </p>

          <p>
            La proc&eacute;dure est simple : l&apos;employeur choisit un organisme certifi&eacute; <strong>Qualiopi</strong>, demande un devis, d&eacute;pose le dossier aupr&egrave;s de l&apos;OPCO AKTO <strong>avant le d&eacute;but de la formation</strong>, et inscrit l&apos;apprenti &agrave; la session. Le d&eacute;lai moyen d&apos;accord est de 15 &agrave; 20 jours.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Pourquoi former vos apprentis au HACCP</h2>

          <p>
            M&ecirc;me si la loi n&apos;impose pas que l&apos;apprenti soit la personne d&eacute;sign&eacute;e pour la conformit&eacute; HACCP, former vos alternants pr&eacute;sente des avantages concrets : <strong>mont&eacute;e en comp&eacute;tences acc&eacute;l&eacute;r&eacute;e</strong>, responsabilisation du jeune professionnel, r&eacute;duction des risques sanitaires dans votre &eacute;tablissement, et <strong>valorisation du CV</strong> de l&apos;apprenti pour la suite de sa carri&egrave;re.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "Cadre l&eacute;gal alternance", points: ["D&eacute;cret 2011-731 : 14h HACCP", "Arr&ecirc;t&eacute; 2011 : dispenses dipl&ocirc;mes", "CAP/Bac Pro/BTS dispens&eacute;s", "Dispense apr&egrave;s obtention uniquement"] },
              { titre: "Financement apprentis", points: ["OPCO AKTO prise en charge 100%", "Plan d&eacute;veloppement comp&eacute;tences", "Z&eacute;ro co&ucirc;t pour l&apos;apprenti", "D&eacute;lai 15-20 jours accord"] },
              { titre: "Programme adapt&eacute;", points: ["7 principes HACCP", "Mise en pratique cuisine", "Bonnes pratiques d&apos;hygi&egrave;ne", "Simulation contr&ocirc;le DDPP"] },
              { titre: "Avantages", points: ["Mont&eacute;e en comp&eacute;tences rapide", "Responsabilisation apprenti", "R&eacute;duction risques sanitaires", "Valorisation CV"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Organisation pratique de la formation HACCP en alternance</h2>

          <p>
            La formation HACCP de 14 heures se d&eacute;roule sur 2 jours, g&eacute;n&eacute;ralement pendant le temps de travail en entreprise (pas pendant les cours au CFA). L&apos;id&eacute;al est de planifier la formation <strong>en d&eacute;but d&apos;alternance</strong> (premier trimestre) pour que l&apos;apprenti acqui&egrave;re rapidement les bases de l&apos;hygi&egrave;ne alimentaire. Les organismes proposent des sessions inter-entreprises (l&apos;apprenti rejoint un groupe) ou intra-entreprise (formation dans vos locaux, &agrave; partir de 4 stagiaires).
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP en Alternance</h2>
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
          <h2 className="text-2xl font-bold mb-3">Formez vos apprentis au HACCP</h2>
          <p className="text-blue-100 mb-6">Financement OPCO AKTO &mdash; Programme adapt&eacute; &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
