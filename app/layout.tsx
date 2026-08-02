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
  // Pas de canonical racine ici : il serait hérité par toutes les pages sans
  // alternates propre et les ferait toutes pointer vers la home.
  verification: { google: "dc9de31b5dca6a81" },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    // PNG 1200×630 : les .svg sont ignorés par WhatsApp/Facebook
    images: [{ url: `${SITE_URL}/og-formation-haccp.png`, width: 1200, height: 630 }],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-formation-haccp.png`],
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
