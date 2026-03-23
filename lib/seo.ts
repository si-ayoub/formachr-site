export const SITE_NAME = "Formation HACCP France"
export const SITE_DESCRIPTION = "Trouvez votre formation hygiène alimentaire HACCP en France. Organismes certifiés Qualiopi, 14h, attestation officielle. Financement OPCO, CPF. Devis gratuit sous 24h."
export const SITE_URL = "https://www.formachr.fr"

export interface SeoMeta {
  title: string
  description: string
  canonical?: string
  noindex?: boolean
}

export function buildTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME}`
}

// Schema.org JSON-LD helpers
export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "French"
    }
  }
}

export function schemaWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/recherche?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

export function schemaCourse({
  name,
  description,
  city,
  price,
  duration,
}: {
  name: string
  description: string
  city?: string
  price?: string
  duration?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      ...(city && {
        location: {
          "@type": "Place",
          name: city,
          address: { "@type": "PostalAddress", addressLocality: city, addressCountry: "FR" }
        }
      }),
      ...(duration && { duration }),
      ...(price && {
        offers: {
          "@type": "Offer",
          price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      })
    }
  }
}

export function schemaFAQ(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }
}

export function schemaBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  }
}

export function schemaLocalBusiness({
  name,
  city,
  postalCode,
  lat,
  lng,
}: {
  name: string
  city: string
  postalCode: string
  lat: number
  lng: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      postalCode,
      addressCountry: "FR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng
    },
    areaServed: city,
    url: SITE_URL
  }
}
