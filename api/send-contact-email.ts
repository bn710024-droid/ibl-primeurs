import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { produit, nom, email, telephone, message } = req.body

  if (!nom || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
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
