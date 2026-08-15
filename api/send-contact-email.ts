import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ALLOWED_ORIGINS = ['https://iblprimeurs.com', 'https://www.iblprimeurs.com']
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LENGTHS = { nom: 100, email: 150, telephone: 30, produit: 200, message: 3000 }

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

const requestLog = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  timestamps.push(now)
  requestLog.set(ip, timestamps)
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const origin = req.headers.origin
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests' })
  }

  const { produit, nom, email, telephone, message, website } = req.body

  if (website) {
    // Honeypot rempli par un bot : on répond succès sans rien envoyer.
    return res.status(200).json({ success: true })
  }

  if (!nom || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  if (typeof nom !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid field types' })
  }

  if (
    nom.length > MAX_LENGTHS.nom ||
    email.length > MAX_LENGTHS.email ||
    (telephone && String(telephone).length > MAX_LENGTHS.telephone) ||
    (produit && String(produit).length > MAX_LENGTHS.produit) ||
    message.length > MAX_LENGTHS.message
  ) {
    return res.status(400).json({ error: 'Field too long' })
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  const escapedNom = escapeHtml(nom)
  const escapedEmail = escapeHtml(email)
  const escapedTelephone = escapeHtml(telephone || '')
  const escapedProduit = escapeHtml(produit || 'Non spécifié')
  const escapedMessage = escapeHtml(message).replace(/\n/g, '<br>')

  try {
    await resend.emails.send({
      from: 'noreply@iblprimeurs.com',
      to: 'contact@iblprimeurs.com',
      subject: `Nouveau message de ${escapedNom} — ${escapedProduit}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${escapedNom}</p>
        <p><strong>Email :</strong> ${escapedEmail}</p>
        ${escapedTelephone ? `<p><strong>Téléphone :</strong> ${escapedTelephone}</p>` : ''}
        <p><strong>Produit :</strong> ${escapedProduit}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${escapedMessage}</p>
      `,
      replyTo: email,
    })

    return res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
