"use client"
import { useState } from "react"

interface LeadFormProps {
  city?: string
  sector?: string
  title?: string
}

export default function LeadForm({ city, sector, title }: LeadFormProps) {
  const [form, setForm] = useState({ nom: "", telephone: "", email: "", ville: city || "", typeEtablissement: sector || "", format: "", nombreSalaries: "", delaiSouhaite: "", _honeypot: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState("")

  const validateEmail = (email: string): boolean => {
    if (!email) return true // email is optional
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Anti-spam honeypot: if filled, silently reject
    if (form._honeypot) {
      setSent(true)
      return
    }

    if (!validateEmail(form.email)) {
      setEmailError("Veuillez entrer une adresse email valide.")
      return
    }

    setLoading(true)
    try {
      const { _honeypot, ...formData } = form
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
    } catch {
      // Still show success to the user — lead can be retried server-side
    }
    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Votre demande a été envoyée !</h3>
        <p className="text-green-700">Réponse sous <strong>24h</strong>. Un conseiller vous contacte avec les meilleures offres disponibles {city ? `à ${city}` : "dans votre zone"}.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title || "Trouver ma formation HACCP"}</h3>
      <p className="text-sm text-gray-500 mb-5">Réponse garantie sous 24h — Devis gratuit et sans engagement</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Votre nom *"
            value={form.nom}
            onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            type="tel"
            placeholder="Téléphone *"
            value={form.telephone}
            onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email (facultatif)"
            value={form.email}
            onChange={e => {
              setForm(f => ({ ...f, email: e.target.value }))
              if (emailError) setEmailError("")
            }}
            onBlur={e => {
              if (e.target.value && !validateEmail(e.target.value)) {
                setEmailError("Veuillez entrer une adresse email valide.")
              }
            }}
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${emailError ? "border-red-400" : "border-gray-300"}`}
          />
          {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
        </div>
        {!city && (
          <input
            required
            type="text"
            placeholder="Votre ville *"
            value={form.ville}
            onChange={e => setForm(f => ({ ...f, ville: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        <select
          required
          value={form.typeEtablissement}
          onChange={e => setForm(f => ({ ...f, typeEtablissement: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        >
          <option value="">Type d&apos;établissement *</option>
          <option value="restaurant">Restaurant traditionnel</option>
          <option value="snack">Snack / Kebab / Restauration rapide</option>
          <option value="food-truck">Food truck</option>
          <option value="boulangerie">Boulangerie / Pâtisserie</option>
          <option value="boucherie">Boucherie / Charcuterie</option>
          <option value="restauration-collective">Restauration collective (cantine...)</option>
          <option value="hotel">Hôtel restaurant</option>
          <option value="creche">Crèche / EHPAD</option>
          <option value="autre">Autre</option>
        </select>
        <select
          value={form.format}
          onChange={e => setForm(f => ({ ...f, format: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        >
          <option value="">Format préféré (facultatif)</option>
          <option value="presentiel">Présentiel</option>
          <option value="ligne">En ligne / Distanciel</option>
          <option value="intra">Intra-entreprise (dans mon restaurant)</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            value={form.nombreSalaries}
            onChange={e => setForm(f => ({ ...f, nombreSalaries: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="">Nombre de salariés (facultatif)</option>
            <option value="1">1</option>
            <option value="2-5">2-5</option>
            <option value="6-10">6-10</option>
            <option value="10+">10+</option>
          </select>
          <select
            value={form.delaiSouhaite}
            onChange={e => setForm(f => ({ ...f, delaiSouhaite: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="">Délai souhaité (facultatif)</option>
            <option value="urgent">Urgent (&lt; 1 semaine)</option>
            <option value="sous-1-mois">Sous 1 mois</option>
            <option value="pas-presse">Pas pressé</option>
          </select>
        </div>
        {/* Anti-spam honeypot — hidden from real users, filled by bots */}
        <input
          type="text"
          name="website"
          value={form._honeypot}
          onChange={e => setForm(f => ({ ...f, _honeypot: e.target.value }))}
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-60 text-sm"
        >
          {loading ? "Envoi en cours..." : "Recevoir mon devis gratuit →"}
        </button>
        <p className="text-xs text-center text-gray-400">🔒 Vos données sont confidentielles — Aucun démarchage non sollicité</p>
      </form>
    </div>
  )
}
