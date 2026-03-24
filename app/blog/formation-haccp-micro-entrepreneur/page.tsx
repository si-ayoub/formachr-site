import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Auto-Entrepreneur 2026 — Guide Micro-Entreprise",
  description: "Formation HACCP pour auto-entrepreneurs et micro-entrepreneurs en 2026. Obligations, financement FAF, AGEFICE, FAFCEA, programme et attestation.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-micro-entrepreneur` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire pour un auto-entrepreneur en restauration ?", answer: "Oui, la formation HACCP de 14 heures est obligatoire pour tout auto-entrepreneur exerçant une activité de restauration commerciale (code NAF 56.10A, 56.10B ou 56.10C), conformément au décret n°2011-731. L'auto-entrepreneur étant souvent seul dans son établissement, c'est lui-même qui doit détenir l'attestation. L'absence de formation expose à une amende de 1 500 euros lors d'un contrôle DDPP." },
  { question: "Comment financer la formation HACCP en tant qu'auto-entrepreneur ?", answer: "Les auto-entrepreneurs cotisent à un FAF (Fonds d'Assurance Formation) via la CFP (Contribution à la Formation Professionnelle) prélevée sur leur chiffre d'affaires. Pour les activités commerciales (restauration), le FAF compétent est l'AGEFICE. Pour les artisans (food truck, traiteur artisan), c'est le FAFCEA. La prise en charge peut atteindre 100 % du coût, dans la limite d'un plafond annuel (environ 1 000 à 1 400 euros selon les FAF). La demande doit être faite avant le début de la formation." },
  { question: "Un auto-entrepreneur en food truck a-t-il les mêmes obligations HACCP qu'un restaurant ?", answer: "Oui, les obligations HACCP sont identiques pour un auto-entrepreneur en food truck et un restaurant traditionnel : formation de 14 heures, déclaration DDPP (CERFA 13984*06), Plan de Maîtrise Sanitaire (PMS), traçabilité des produits, affichage des allergènes et respect de la chaîne du froid. La seule différence concerne les équipements, qui doivent être adaptés à l'espace réduit du véhicule (réservoir d'eau, lave-mains, réfrigérateur)." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP Auto-Entrepreneur", url: "/blog/formation-haccp-micro-entrepreneur" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Auto-Entrepreneur",
        description: "Formation HACCP pour auto-entrepreneurs et micro-entrepreneurs en restauration",
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
          <li className="text-gray-800 font-medium">Formation HACCP Auto-Entrepreneur</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              MICRO-ENTREPRISE &mdash; Guide 2026
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP Auto-Entrepreneur<br />
              <span className="text-yellow-400">Guide Micro-Entreprise 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Tout savoir sur la formation HACCP pour les auto-entrepreneurs et micro-entrepreneurs en restauration : obligations, financement FAF, programme.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Obligation auto-entrepreneur","Financement AGEFICE/FAFCEA","Food truck & traiteur","Attestation officielle"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP auto-entrepreneur : une obligation incontournable</h2>

          <p>
            Le statut de <strong>micro-entrepreneur</strong> (anciennement auto-entrepreneur) est le choix privil&eacute;gi&eacute; de nombreux cr&eacute;ateurs dans le secteur de la restauration : food trucks, traiteurs &agrave; domicile, cr&ecirc;peries ambulantes, vente de repas &agrave; emporter. En 2026, on estime &agrave; plus de <strong>35 000 micro-entrepreneurs</strong> le nombre d&apos;actifs dans la restauration en France.
          </p>

          <p>
            L&apos;obligation de formation HACCP s&apos;applique <strong>de la m&ecirc;me mani&egrave;re</strong> aux micro-entrepreneurs qu&apos;aux soci&eacute;t&eacute;s (SARL, SAS, EURL). Le <strong>d&eacute;cret n&deg;2011-731</strong> ne fait aucune distinction selon la forme juridique. En tant que micro-entrepreneur seul dans votre &eacute;tablissement, c&apos;est <strong>vous-m&ecirc;me</strong> qui devez d&eacute;tenir l&apos;attestation de formation de 14 heures.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Financement AGEFICE et FAFCEA pour les micro-entrepreneurs</h2>

          <p>
            Contrairement &agrave; une id&eacute;e r&eacute;pandue, les micro-entrepreneurs ont droit &agrave; des <strong>financements de formation</strong>. En effet, ils cotisent &agrave; la <strong>CFP</strong> (Contribution &agrave; la Formation Professionnelle) via un pr&eacute;l&egrave;vement sur leur chiffre d&apos;affaires (0,1 % pour les commer&ccedil;ants, 0,3 % pour les artisans). Cette cotisation ouvre droit &agrave; une prise en charge par un <strong>FAF</strong> (Fonds d&apos;Assurance Formation).
          </p>

          <p>
            Pour les micro-entrepreneurs exer&ccedil;ant une activit&eacute; <strong>commerciale</strong> (restaurant, snack, vente &agrave; emporter), le FAF comp&eacute;tent est l&apos;<strong>AGEFICE</strong> (Association de Gestion du Financement de la Formation des Chefs d&apos;Entreprise). Pour les <strong>artisans</strong> (food truck artisan, traiteur artisan, boulanger), c&apos;est le <strong>FAFCEA</strong> (Fonds d&apos;Assurance Formation des Chefs d&apos;Entreprise Artisanale). La prise en charge peut atteindre <strong>100 %</strong> du co&ucirc;t de la formation, dans la limite d&apos;un plafond annuel.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 my-8">
            <p className="text-yellow-900 font-medium">
              <strong>Important :</strong> Pour b&eacute;n&eacute;ficier du financement FAF, vous devez avoir d&eacute;clar&eacute; un chiffre d&apos;affaires <strong>positif</strong> au cours des 12 derniers mois et &ecirc;tre &agrave; jour de vos cotisations URSSAF. La demande de prise en charge doit &ecirc;tre d&eacute;pos&eacute;e <strong>avant le d&eacute;but de la formation</strong>.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">D&eacute;marches sp&eacute;cifiques pour les micro-entrepreneurs</h2>

          <p>
            En tant que micro-entrepreneur en restauration, vous devez accomplir plusieurs d&eacute;marches avant de d&eacute;marrer votre activit&eacute; : <strong>formation HACCP de 14 heures</strong> (d&eacute;cret 2011-731), <strong>d&eacute;claration DDPP</strong> (formulaire CERFA 13984*06), <strong>permis d&apos;exploitation</strong> si vous servez de l&apos;alcool (formation de 20 heures), et <strong>carte de commer&ccedil;ant ambulant</strong> si vous exercez en dehors de votre commune (food truck).
          </p>

          <p>
            Le <strong>Plan de Ma&icirc;trise Sanitaire (PMS)</strong> est &eacute;galement obligatoire, quelle que soit la taille de votre structure. Il doit documenter vos proc&eacute;dures d&apos;hygi&egrave;ne, de tra&ccedil;abilit&eacute;, de nettoyage et de gestion des non-conformit&eacute;s. La formation HACCP vous aide &agrave; construire ce PMS.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "Obligations l&eacute;gales", points: ["Formation HACCP 14h obligatoire", "D&eacute;claration DDPP (CERFA)", "PMS obligatoire", "Affichage 14 allerg&egrave;nes"] },
              { titre: "Financement micro-entreprise", points: ["AGEFICE (commerc&ccedil;ants)", "FAFCEA (artisans)", "CFP via cotisations URSSAF", "Prise en charge jusqu&apos;&agrave; 100%"] },
              { titre: "Programme HACCP", points: ["7 principes HACCP", "Cha&icirc;ne du froid et DLC", "Tra&ccedil;abilit&eacute; des produits", "4h de pratique (arr&ecirc;t&eacute; 2024)"] },
              { titre: "D&eacute;marches compl&eacute;mentaires", points: ["Permis d&apos;exploitation (alcool)", "Carte commer&ccedil;ant ambulant", "Assurance RC professionnelle", "Inscription RCS/RM"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Choisir sa formation HACCP en tant que micro-entrepreneur</h2>

          <p>
            Privil&eacute;giez un organisme <strong>certifi&eacute; Qualiopi</strong> (indispensable pour le financement FAF) et <strong>enregistr&eacute; au ROFHYA</strong> aupr&egrave;s de la DRAAF. Comparez les tarifs (250 &agrave; 400 &euro; en pr&eacute;sentiel, 179 &agrave; 259 &euro; en e-learning), la taille des groupes et les avis des stagiaires. Si votre budget est limit&eacute;, le <strong>e-learning</strong> constitue une option &eacute;conomique valable, &agrave; condition qu&apos;il int&egrave;gre les 4 heures de pratique r&eacute;glementaires.
          </p>

          <p>
            L&apos;attestation de formation est d&eacute;livr&eacute;e imm&eacute;diatement &agrave; l&apos;issue des 2 jours. Elle est reconnue par la DRAAF et valable nationalement, sans date d&apos;expiration. Recyclage recommand&eacute; tous les 5 ans.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP Auto-Entrepreneur</h2>
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
          <h2 className="text-2xl font-bold mb-3">Formation HACCP pour auto-entrepreneurs</h2>
          <p className="text-blue-100 mb-6">Financement AGEFICE/FAFCEA possible &mdash; Attestation officielle &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
