import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { schemaCourse, schemaFAQ, schemaBreadcrumb, schemaLocalBusiness, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Formation HACCP Auvergne-Rhône-Alpes — Hygiène Alimentaire Obligatoire 2026",
  description: "Formation hygiène alimentaire HACCP en Auvergne-Rhône-Alpes. Organismes certifiés dans 5 grandes villes. 14h, attestation DRAAF, financement OPCO. Devis gratuit.",
  alternates: { canonical: `${SITE_URL}/formation-haccp-auvergne-rhone-alpes` }
}

const FAQ = [
  { question: "La formation HACCP est-elle obligatoire à Lyon et en Auvergne-Rhône-Alpes ?", answer: "Oui, tous les établissements de restauration commerciale de la région Auvergne-Rhône-Alpes sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire. Cela concerne les 12 départements de la région." },
  { question: "Combien coûte la formation HACCP en Auvergne-Rhône-Alpes ?", answer: "Le prix varie entre 290 € et 450 € TTC en présentiel. La prise en charge par l&apos;OPCO AKTO est possible à 100 % pour les salariés du secteur CHR. Les demandeurs d&apos;emploi peuvent faire financer la formation par France Travail." },
  { question: "Où trouver une formation HACCP en Auvergne-Rhône-Alpes ?", answer: "Des sessions sont organisées régulièrement dans les grandes villes : Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy, Valence, Chambéry et Bourg-en-Bresse. Des formations en ligne sont également disponibles." },
  { question: "La formation HACCP aborde-t-elle les spécificités des produits locaux ?", answer: "Oui, le programme inclut l&apos;étude des dangers spécifiques liés aux produits du terroir (fromages au lait cru, charcuteries artisanales). Les organismes de formation adaptent souvent leurs exemples aux spécialités locales de la région." },
  { question: "Combien de restaurants sont concernés en Auvergne-Rhône-Alpes ?", answer: "La région compte environ 32 000 établissements de restauration commerciale, dont plus de 3 500 à Lyon seul. Tous sont soumis à l&apos;obligation de formation HACCP depuis octobre 2012." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb([
        { name: "Accueil", url: "/" },
        { name: "Formations par région", url: "/villes" },
        { name: "Formation HACCP Auvergne-Rhône-Alpes", url: "/formation-haccp-auvergne-rhone-alpes" }
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCourse({
        name: "Formation Hygiène Alimentaire HACCP en Auvergne-Rhône-Alpes",
        description: "Formation spécifique en matière d&apos;hygiène alimentaire adaptée à la restauration commerciale en Auvergne-Rhône-Alpes",
        city: "Lyon",
        price: "290",
        duration: "PT14H"
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness({
        name: "Formation HACCP Auvergne-Rhône-Alpes",
        city: "Lyon",
        postalCode: "69001",
        lat: 45.764,
        lng: 4.8357
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ(FAQ)) }} />

      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li>›</li>
          <li><Link href="/villes" className="hover:text-blue-600">Villes</Link></li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Formation HACCP Auvergne-Rhône-Alpes</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/40 text-sm px-3 py-1 rounded-full mb-4">
              📍 Auvergne-Rhône-Alpes — 32 000 établissements concernés
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Formation HACCP<br />
              <span className="text-yellow-400">en Auvergne-Rhône-Alpes</span><br />
              <span className="text-2xl font-bold">Hygiène Alimentaire Obligatoire 2026</span>
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              La région Auvergne-Rhône-Alpes est la deuxième région de France par sa population et son dynamisme économique. Avec Lyon, capitale mondiale de la gastronomie, et plus de 32 000 établissements de restauration commerciale, la formation HACCP constitue un enjeu central pour les professionnels de l&apos;alimentation dans cette région.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["✅", "Organismes agréés DRAAF"],
                ["📋", "Attestation officielle"],
                ["💰", "Financement OPCO possible"],
                ["⚡", "Sessions disponibles rapidement"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2">{icon} {text}</div>
              ))}
            </div>
          </div>
          <div>
            <LeadForm city="Lyon" title="Devis gratuit — Réponse sous 24h" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Formation hygiène alimentaire en Auvergne-Rhône-Alpes — Ce qu&apos;il faut savoir</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="text-yellow-900 font-medium">
              📋 <strong>Obligation légale :</strong> Tous les établissements de restauration commerciale en Auvergne-Rhône-Alpes doivent justifier d&apos;au minimum un salarié ayant suivi la formation spécifique en matière d&apos;hygiène alimentaire de 14 heures (décret n°2011-731 du 24 juin 2011).
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>La DRAAF Auvergne-Rhône-Alpes, dont le siège est à Lyon, agrée les organismes de formation en hygiène alimentaire pour les 12 départements de la région : Ain (01), Allier (03), Ardèche (07), Cantal (15), Drôme (26), Isère (38), Loire (42), Haute-Loire (43), Puy-de-Dôme (63), Rhône (69), Savoie (73) et Haute-Savoie (74). La diversité des territoires, entre métropoles dynamiques et zones rurales de montagne, impose une offre de formation adaptée.</p>
            <p>Lyon, troisième ville de France, est internationalement reconnue pour sa gastronomie. Les bouchons lyonnais, les restaurants étoilés et les halles Paul Bocuse font de la métropole lyonnaise un pôle majeur de la restauration. Grenoble, au pied des Alpes, et Annecy, ville touristique prisée, comptent également un nombre important de restaurants. Les stations de ski (Chamonix, Val d&apos;Isère, Les 2 Alpes) génèrent une forte activité saisonnière de restauration qui nécessite des formations HACCP régulières.</p>
            <p>Le programme de formation HACCP en Auvergne-Rhône-Alpes suit le référentiel national de 14 heures. Il comprend l&apos;étude de la réglementation française et européenne, l&apos;identification des dangers alimentaires spécifiques à la région (fromages AOP au lait cru, charcuteries artisanales), les 7 principes HACCP et leur application pratique. L&apos;arrêté du 12 février 2024 impose désormais 4 heures minimum de mise en pratique, renforçant l&apos;aspect opérationnel de la formation.</p>
            <p>Le financement de la formation est facilité par l&apos;OPCO AKTO qui prend en charge les salariés du secteur CHR. Les créateurs d&apos;entreprise en Auvergne-Rhône-Alpes peuvent solliciter les aides de la Région ou de France Travail. Le coût moyen est de 290 € à 450 € TTC. De nombreuses sessions sont disponibles chaque semaine à Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand et Annecy.</p>
            <p>La région Auvergne-Rhône-Alpes se distingue par la richesse de ses produits du terroir : fromages AOP (Saint-Nectaire, Reblochon, Beaufort, Fourme d&apos;Ambert, Cantal), charcuteries, vins (Côtes du Rhône, Beaujolais) et spécialités culinaires (quenelles, gratin dauphinois, truffade). La manipulation de ces produits, notamment les fromages au lait cru, exige une maîtrise rigoureuse des principes HACCP. Les contrôles sanitaires dans la région sont effectués par les DDPP de chaque département.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Trouver une formation HACCP en Auvergne-Rhône-Alpes</h2>
          <p className="text-gray-600 mb-4">Des sessions de formation sont disponibles dans les principales villes de la région :</p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li><Link href="/formation-haccp-lyon" className="text-blue-600 hover:text-blue-800 font-medium underline">Lyon</Link></li>
                <li><Link href="/formation-haccp-grenoble" className="text-blue-600 hover:text-blue-800 font-medium underline">Grenoble</Link></li>
                <li><Link href="/formation-haccp-saint-etienne" className="text-blue-600 hover:text-blue-800 font-medium underline">Saint-Étienne</Link></li>
                <li><Link href="/formation-haccp-clermont-ferrand" className="text-blue-600 hover:text-blue-800 font-medium underline">Clermont-Ferrand</Link></li>
                <li><Link href="/formation-haccp-annecy" className="text-blue-600 hover:text-blue-800 font-medium underline">Annecy</Link></li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Établissements en région", value: "32 000+" },
              { label: "Durée formation", value: "14 heures" },
              { label: "Prix indicatif", value: "290€ – 490€" },
              { label: "Financement OPCO", value: "100%" },
            ].map(stat => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-blue-700">{stat.value}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Questions fréquentes — Formation HACCP en Auvergne-Rhône-Alpes</h2>
          <div className="space-y-3">

              <details key={0} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP est-elle obligatoire à Lyon et en Auvergne-Rhône-Alpes ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, tous les établissements de restauration commerciale de la région Auvergne-Rhône-Alpes sont soumis à l&apos;obligation de former au minimum un salarié à l&apos;hygiène alimentaire. Cela concerne les 12 départements de la région.</div>
              </details>

              <details key={1} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien coûte la formation HACCP en Auvergne-Rhône-Alpes ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Le prix varie entre 290 € et 450 € TTC en présentiel. La prise en charge par l&apos;OPCO AKTO est possible à 100 % pour les salariés du secteur CHR. Les demandeurs d&apos;emploi peuvent faire financer la formation par France Travail.</div>
              </details>

              <details key={2} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Où trouver une formation HACCP en Auvergne-Rhône-Alpes ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Des sessions sont organisées régulièrement dans les grandes villes : Lyon, Grenoble, Saint-Étienne, Clermont-Ferrand, Annecy, Valence, Chambéry et Bourg-en-Bresse. Des formations en ligne sont également disponibles.</div>
              </details>

              <details key={3} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  La formation HACCP aborde-t-elle les spécificités des produits locaux ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">Oui, le programme inclut l&apos;étude des dangers spécifiques liés aux produits du terroir (fromages au lait cru, charcuteries artisanales). Les organismes de formation adaptent souvent leurs exemples aux spécialités locales de la région.</div>
              </details>

              <details key={4} className="border bg-white rounded-xl overflow-hidden group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold hover:bg-gray-50 list-none">
                  Combien de restaurants sont concernés en Auvergne-Rhône-Alpes ?
                  <span className="text-blue-600 text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t">La région compte environ 32 000 établissements de restauration commerciale, dont plus de 3 500 à Lyon seul. Tous sont soumis à l&apos;obligation de formation HACCP depuis octobre 2012.</div>
              </details>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Trouver ma formation HACCP en Auvergne-Rhône-Alpes</h2>
          <p className="text-blue-100 mb-6">Nos conseillers identifient les meilleures sessions disponibles dans votre secteur et vous transmettent un devis personnalisé sous 24h.</p>
          <Link href="/devis" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander mon devis gratuit →
          </Link>
        </div>
      </section>
    </>
  )
}
