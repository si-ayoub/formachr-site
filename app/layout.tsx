import type { Metadata } from "next"
import "./globals.css"
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, schemaOrganization, schemaWebSite } from "@/lib/seo"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MusmapBanner from "@/components/MusmapBanner"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: "%s | " + SITE_NAME },
  description: SITE_DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  verification: { google: "dc9de31b5dca6a81" },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/og-image.svg`, width: 1200, height: 630 }],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.svg`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite()) }} />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <div className="max-w-7xl mx-auto px-4"><MusmapBanner /></div>
        <Footer />
      </body>
    </html>
  )
}
