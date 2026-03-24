import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

const RECIPIENT = process.env.LEAD_RECIPIENT_EMAIL || "2adevellopment@gmail.com"

interface LeadData {
  nom: string
  telephone: string
  email?: string
  ville: string
  typeEtablissement: string
  format?: string
}

const TYPE_LABELS: Record<string, string> = {
  restaurant: "Restaurant traditionnel",
  snack: "Snack / Kebab / Restauration rapide",
  "food-truck": "Food truck",
  boulangerie: "Boulangerie / Pâtisserie",
  boucherie: "Boucherie / Charcuterie",
  "restauration-collective": "Restauration collective",
  hotel: "Hôtel restaurant",
  creche: "Crèche / EHPAD",
  autre: "Autre",
}

const FORMAT_LABELS: Record<string, string> = {
  presentiel: "Présentiel",
  ligne: "En ligne / Distanciel",
  intra: "Intra-entreprise",
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadData

    if (!body.nom || !body.telephone || !body.ville || !body.typeEtablissement) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 })
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY
    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY manquante")
      return NextResponse.json({ error: "Configuration manquante" }, { status: 500 })
    }

    const typeLabel = TYPE_LABELS[body.typeEtablissement] || body.typeEtablissement
    const formatLabel = body.format ? (FORMAT_LABELS[body.format] || body.format) : "Non précisé"
    const now = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })

    const emailData = {
      sender: { name: "FormaCHR Leads", email: "leads@formachr.fr" },
      to: [{ email: RECIPIENT, name: "Ayoub — 2A Digital" }],
      subject: `🎯 Nouveau lead HACCP — ${body.ville} — ${typeLabel}`,
      htmlContent: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e3a8a;color:white;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px">🎯 Nouveau lead Formation HACCP</h1>
            <p style="margin:8px 0 0;opacity:.8;font-size:14px">${now}</p>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;width:40%;color:#374151">Nom</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827">${body.nom}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#374151">Téléphone</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827">
                  <a href="tel:${body.telephone}" style="color:#1d4ed8;text-decoration:none">${body.telephone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#374151">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827">
                  ${body.email ? `<a href="mailto:${body.email}" style="color:#1d4ed8;text-decoration:none">${body.email}</a>` : "<em style='color:#9ca3af'>Non renseigné</em>"}
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#374151">Ville</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827">${body.ville}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#374151">Type d'établissement</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827">${typeLabel}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:600;color:#374151">Format préféré</td>
                <td style="padding:10px 0;color:#111827">${formatLabel}</td>
              </tr>
            </table>
            <div style="margin-top:20px;padding:16px;background:#eff6ff;border-radius:8px;font-size:13px;color:#1e40af">
              💡 <strong>Action :</strong> Rappeler ce prospect sous 24h pour lui proposer un devis personnalisé.
            </div>
          </div>
        </div>
      `,
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Brevo error:", error)
      return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Lead API error:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 })
  }
}
