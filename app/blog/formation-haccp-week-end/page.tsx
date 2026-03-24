import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP le Week-end — Organismes 2026",
  description: "Formation HACCP le samedi et dimanche en 2026. Trouvez un organisme certifié Qualiopi proposant des sessions week-end, tarifs et financement.",
  alternates: { canonical: `${SITE_URL}/blog/formation-haccp-week-end` }
}

const FAQ = [
  { question: "Peut-on suivre la formation HACCP le week-end ?", answer: "Oui, plusieurs organismes certifiés Qualiopi proposent des sessions de formation HACCP le week-end, généralement le samedi et le dimanche consécutifs (7h + 7h = 14h). Cette formule est particulièrement prisée par les restaurateurs en activité qui ne peuvent pas fermer leur établissement en semaine, et par les créateurs d'entreprise qui conservent un emploi salarié pendant leur projet." },
  { question: "La formation HACCP le week-end coûte-t-elle plus cher ?", answer: "Les tarifs des sessions week-end sont généralement 10 à 20 % supérieurs à ceux des sessions en semaine, en raison des majorations salariales des formateurs (travail le dimanche). Comptez entre 320 et 450 euros en présentiel le week-end, contre 250 à 380 euros en semaine. Certains organismes ne pratiquent pas de majoration. Le financement OPCO AKTO et France Travail s'applique de la même manière, quelle que soit la date de la session." },
  { question: "Les sessions week-end sont-elles aussi fréquentes que les sessions en semaine ?", answer: "Non, les sessions week-end sont moins fréquentes : comptez 1 à 2 sessions par mois dans les grandes villes (Paris, Lyon, Marseille, Bordeaux) et 1 session par mois ou tous les 2 mois dans les villes moyennes. Il est recommandé de s'inscrire 3 à 4 semaines à l'avance car les places sont limitées et la demande est forte, surtout en septembre et janvier." }
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Formation HACCP le Week-end", url: "/blog/formation-haccp-week-end" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation HACCP Week-end",
        description: "Formation HACCP le samedi et dimanche — 14 heures, attestation officielle",
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
          <li className="text-gray-800 font-medium">Formation HACCP le Week-end</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/80 text-sm px-3 py-1 rounded-full mb-4 font-bold text-gray-900">
              WEEK-END &mdash; Samedi &amp; Dimanche
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP le Week-end<br />
              <span className="text-yellow-400">Organismes 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Trouvez un organisme certifi&eacute; Qualiopi proposant la formation HACCP le samedi et dimanche. Id&eacute;al pour les professionnels en activit&eacute;.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Samedi + dimanche","Sans fermer votre restaurant","Attestation identique","Financement OPCO possible"].map(t => (
                <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div><LeadForm sector="restaurant" title="Devis gratuit — Réponse sous 24h" /></div>
        </div>
      </section>

      <article className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Formation HACCP le week-end : pourquoi et pour qui ?</h2>

          <p>
            La formation HACCP de 14 heures se d&eacute;roule traditionnellement sur <strong>2 jours cons&eacute;cutifs en semaine</strong>. Mais pour de nombreux professionnels de la restauration, fermer leur &eacute;tablissement deux jours en semaine repr&eacute;sente une <strong>perte de chiffre d&apos;affaires consid&eacute;rable</strong>. C&apos;est pourquoi un nombre croissant d&apos;organismes certifi&eacute;s Qualiopi proposent d&eacute;sormais des sessions le <strong>samedi et dimanche</strong>.
          </p>

          <p>
            Les profils concern&eacute;s par les sessions week-end sont vari&eacute;s : <strong>restaurateurs ind&eacute;pendants</strong> qui ne peuvent pas d&eacute;l&eacute;guer la gestion de leur &eacute;tablissement, <strong>cr&eacute;ateurs d&apos;entreprise</strong> encore salari&eacute;s dans un autre secteur, <strong>salari&eacute;s en reconversion</strong> qui pr&eacute;parent leur projet de restauration, et <strong>conjoints collaborateurs</strong> qui participent &agrave; l&apos;activit&eacute; sans &ecirc;tre pr&eacute;sents en semaine.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Attestation identique, programme identique</h2>

          <p>
            Il est important de souligner que la formation HACCP le week-end d&eacute;livre la <strong>m&ecirc;me attestation</strong> qu&apos;une formation en semaine. Le programme de 14 heures est identique, conforme au r&eacute;f&eacute;rentiel national et int&egrave;gre les <strong>4 heures de pratique</strong> impos&eacute;es par l&apos;arr&ecirc;t&eacute; de 2024. L&apos;attestation est reconnue par la DRAAF et valable sur tout le territoire national, quelle que soit la date de la session.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Trouver un organisme proposant des sessions week-end</h2>

          <p>
            Les sessions week-end sont principalement disponibles dans les <strong>grandes agglom&eacute;rations</strong> o&ugrave; la demande est suffisante : Paris et &Icirc;le-de-France (plusieurs sessions par mois), Lyon, Marseille, Bordeaux, Toulouse, Lille et Nantes (1 &agrave; 2 sessions par mois). Dans les villes moyennes, les sessions week-end sont plus rares (1 par mois ou tous les 2 mois).
          </p>

          <p>
            Pour identifier un organisme proposant des sessions week-end, v&eacute;rifiez les crit&egrave;res suivants : <strong>certification Qualiopi</strong> (obligatoire pour le financement OPCO), <strong>enregistrement DRAAF</strong>, <strong>avis des stagiaires</strong> (Google, Trustpilot), et <strong>taille des groupes</strong> (privil&eacute;giez 8 &agrave; 12 stagiaires pour un apprentissage de qualit&eacute;).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tarifs des sessions week-end</h2>

          <p>
            Les tarifs des sessions week-end sont g&eacute;n&eacute;ralement <strong>10 &agrave; 20 % sup&eacute;rieurs</strong> &agrave; ceux des sessions en semaine, principalement en raison des majorations salariales des formateurs pour le travail dominical. Comptez entre <strong>320 et 450 &euro;</strong> en pr&eacute;sentiel le week-end, contre 250 &agrave; 380 &euro; en semaine. Certains organismes ne pratiquent aucune majoration, ce qui m&eacute;rite d&apos;&ecirc;tre v&eacute;rifi&eacute; lors de votre demande de devis.
          </p>

          <p>
            Le <strong>financement OPCO AKTO et France Travail</strong> s&apos;applique de la m&ecirc;me mani&egrave;re pour les sessions week-end. La date de la formation n&apos;a pas d&apos;impact sur l&apos;&eacute;ligibilit&eacute; au financement.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              { titre: "Format week-end", points: ["Samedi 9h-17h (7h)", "Dimanche 9h-17h (7h)", "14h sur 2 jours cons&eacute;cutifs", "4h de pratique incluses"] },
              { titre: "Profils concern&eacute;s", points: ["Restaurateurs en activit&eacute;", "Cr&eacute;ateurs encore salari&eacute;s", "Salari&eacute;s en reconversion", "Conjoints collaborateurs"] },
              { titre: "Disponibilit&eacute;", points: ["Grandes villes : 1-2x/mois", "Villes moyennes : 1x/mois", "R&eacute;servation 3-4 sem. &agrave; l&apos;avance", "Demande forte sept. et janv."] },
              { titre: "Tarifs et financement", points: ["320-450&euro; (10-20% suppl&eacute;ment)", "OPCO AKTO : prise en charge 100%", "France Travail AIF", "M&ecirc;me attestation DRAAF"] }
            ].map(m => (
              <div key={m.titre} className="border rounded-xl p-5">
                <h3 className="font-bold text-blue-700 mb-3">{m.titre}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {m.points.map(p => <li key={p} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Alternative : la formation HACCP en e-learning</h2>

          <p>
            Si aucune session week-end n&apos;est disponible pr&egrave;s de chez vous, le <strong>e-learning</strong> constitue une alternative int&eacute;ressante. Les formations en ligne permettent de suivre la partie th&eacute;orique &agrave; votre rythme (soir, week-end, jours f&eacute;ri&eacute;s) et de compl&eacute;ter par une session de pratique en visioconf&eacute;rence programm&eacute;e &agrave; votre convenance. Le tarif est g&eacute;n&eacute;ralement inf&eacute;rieur (179 &agrave; 259 &euro;) et l&apos;attestation est identique.
          </p>

        </div>
      </article>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fr&eacute;quentes &mdash; Formation HACCP le Week-end</h2>
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
          <h2 className="text-2xl font-bold mb-3">Formation HACCP le week-end pr&egrave;s de chez vous</h2>
          <p className="text-blue-100 mb-6">Organismes certifi&eacute;s Qualiopi &mdash; Sessions samedi-dimanche &mdash; Devis sous 24h</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
