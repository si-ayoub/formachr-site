import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL, SITE_NAME, schemaBreadcrumb } from "@/lib/seo"
import LeadForm from "@/components/LeadForm"

export const metadata: Metadata = {
  title: "Devis Formation HACCP Gratuit — Réponse sous 24h",
  description:
    "Obtenez votre devis personnalisé pour une formation hygiène alimentaire HACCP. Gratuit, sans engagement. Experts certifiés, 98% de réussite, financement OPCO possible. Réponse sous 24h.",
  alternates: { canonical: `${SITE_URL}/devis` },
}

function schemaService() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Devis Formation HACCP",
    description:
      "Service de devis gratuit pour formation hygiène alimentaire HACCP. Mise en relation avec des organismes certifiés Qualiopi partout en France.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: "Formation professionnelle",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Devis gratuit et sans engagement",
    },
  }
}

export default function DevisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaBreadcrumb([
              { name: "Accueil", url: "/" },
              { name: "Devis gratuit", url: "/devis" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaService()),
        }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Accueil
            </Link>
          </li>
          <li>›</li>
          <li className="text-gray-800 font-medium">Devis gratuit</li>
        </ol>
      </nav>

      {/* Hero + Form */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Devis Formation HACCP Gratuit
              <br />
              <span className="text-yellow-400">Réponse sous 24h</span>
            </h1>
            <p className="text-blue-100 text-base mb-6 leading-relaxed">
              Remplissez le formulaire ci-contre. Un conseiller vous contacte
              sous <strong>24 heures</strong> avec les meilleures offres de
              formation hygiène alimentaire disponibles dans votre zone.
            </p>
            <div className="flex flex-wrap gap-3 text-sm mb-6">
              {[
                "Gratuit",
                "Sans engagement",
                "Réponse sous 24h",
              ].map((t) => (
                <span
                  key={t}
                  className="bg-white/10 px-4 py-2 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-blue-200">
              <div>
                <span className="block text-2xl font-bold text-white">
                  14h
                </span>
                Formation complète
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">
                  100%
                </span>
                Financement OPCO
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">
                  150+
                </span>
                Villes couvertes
              </div>
            </div>
          </div>
          <div>
            <LeadForm title="Obtenir mon devis personnalisé" />
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Pourquoi nous choisir pour votre formation HACCP ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Experts certifiés
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tous nos organismes partenaires sont certifiés Qualiopi et
                agréés par la DRAAF. Vous obtenez une attestation officielle
                reconnue lors des contrôles sanitaires.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                98% de réussite
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nos formations affichent un taux de réussite de 98% grâce à
                une pédagogie adaptée au terrain, avec des mises en situation
                concrètes pour chaque type d&apos;établissement.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Financement possible
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Votre formation peut être prise en charge à 100% par votre OPCO
                (AKTO pour la restauration). Nous vous accompagnons dans vos
                démarches de financement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires / Organismes */}
      <section className="py-12 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-6">
            Nos formations sont reconnues par
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                name: "Qualiopi",
                desc: "Certification qualité",
              },
              {
                name: "DRAAF",
                desc: "Agrément officiel",
              },
              {
                name: "OPCO",
                desc: "Financement formation",
              },
              {
                name: "France Travail",
                desc: "Aide demandeurs d'emploi",
              },
              {
                name: "DDPP",
                desc: "Conformité sanitaire",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-gray-200 rounded-lg px-6 py-4 min-w-[140px] shadow-sm"
              >
                <div className="text-lg font-bold text-blue-800">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {partner.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nos garanties
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="border border-green-200 bg-green-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">0 &euro;</div>
              <h3 className="font-bold text-gray-900 mb-1">
                100% gratuit
              </h3>
              <p className="text-sm text-gray-600">
                Le devis et la mise en relation sont entièrement gratuits. Aucun
                frais caché.
              </p>
            </div>
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">0 contrainte</div>
              <h3 className="font-bold text-gray-900 mb-1">
                Sans engagement
              </h3>
              <p className="text-sm text-gray-600">
                Vous recevez un devis sans aucune obligation. Vous êtes libre de
                comparer et de choisir.
              </p>
            </div>
            <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">&lt; 24h</div>
              <h3 className="font-bold text-gray-900 mb-1">
                Réponse rapide
              </h3>
              <p className="text-sm text-gray-600">
                Un conseiller vous recontacte sous 24 heures ouvrées avec une
                proposition adaptée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 px-4 bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à obtenir votre devis ?
          </h2>
          <p className="text-blue-200 mb-8">
            Remplissez le formulaire en 30 secondes. Un conseiller vous rappelle
            sous 24h avec les meilleures offres près de chez vous.
          </p>
          <LeadForm title="Demander mon devis gratuit" />
        </div>
      </section>
    </>
  )
}
