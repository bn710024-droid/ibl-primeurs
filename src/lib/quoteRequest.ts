export interface QuoteRequestPayload {
  name: string
  company: string
  role: string
  country: string
  email: string
  phone: string
  products: string[]
  quantity: string
  message: string
}

// Point d'intégration unique pour le formulaire de devis : aujourd'hui ouvre le client mail
// (mailto:), demain il suffit de remplacer ce corps par un appel Formspree/EmailJS/Resend —
// la signature et l'appelant (ContactPage) restent inchangés.
export async function submitQuoteRequest(payload: QuoteRequestPayload): Promise<void> {
  const subject = encodeURIComponent(`Demande de devis — ${payload.company || payload.name}`)
  const body = encodeURIComponent(
    `Nom : ${payload.name}\nSociété : ${payload.company}\nFonction : ${payload.role}\nPays : ${payload.country}\nEmail : ${payload.email}\nTéléphone / WhatsApp : ${payload.phone}\nProduit(s) recherché(s) : ${payload.products.join(', ')}\nQuantité estimée : ${payload.quantity}\n\nMessage :\n${payload.message}`,
  )
  window.location.href = `mailto:contact@iblprimeurs.com?subject=${subject}&body=${body}`
}
