import type { Metadata } from "next"
import CalculateurClient from "./CalculateurClient"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Calculateur Prix Formation HACCP 2026 — Estimez votre Budget",
  description: "Estimez le prix de votre formation HACCP selon votre type d'établissement, nombre de salariés et mode de formation. Devis gratuit sous 24h.",
  alternates: { canonical: `${SITE_URL}/calculateur-prix` }
}

export default function Page() {
  return <CalculateurClient />
}
