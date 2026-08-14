import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import coverPhoto from '../assets/images/cover-contact-watermelon.webp'
import { useSEO } from '../lib/useSEO'

const PRODUCT_OPTIONS = [
  'Mangue',
  'Haricot vert',
  'Gombo',
  'Piment',
  'Citrons & Limes',
  'Tomate',
  'Aubergine',
  'Poivron',
  'Oignon',
  'Concombre',
  'Ananas',
  'Autre',
]

const INFO_CARDS = [
  {
    title: 'Adresse',
    lines: ['Camberène, Kawsara', 'Dakar, Sénégal'],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    ),
  },
  {
    title: 'Téléphone',
    lines: ['+221 77 525 60 15', 'Disponible du lundi au vendredi'],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a11.25 11.25 0 0 1-6.16-6.16l1.293-.97a1.125 1.125 0 0 0 .417-1.173L8.963 3.102a1.125 1.125 0 0 0-1.09-.852H6.5A2.25 2.25 0 0 0 4.25 4.5v.75Z"
      />
    ),
  },
  {
    title: 'Email',
    lines: ['contact@iblprimeurs.com', 'Réponse rapide'],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    ),
  },
  {
    title: 'Marchés desservis',
    lines: ['Europe', 'Maghreb', "Afrique de l'Ouest"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M3.6 9h16.8M3.6 15h16.8M12 3a14.95 14.95 0 0 1 3 9 14.95 14.95 0 0 1-3 9 14.95 14.95 0 0 1-3-9 14.95 14.95 0 0 1 3-9Z"
      />
    ),
  },
]

const FAQ = [
  { question: 'Quels pays livrez-vous ?', answer: 'Nous accompagnons des partenaires en Europe, au Maghreb et en Afrique de l’Ouest selon les besoins de chaque projet.' },
  { question: 'Quels produits exportez-vous ?', answer: 'Mangues, haricots verts, gombo, piments, citrons et limes, tomates, aubergines, poivrons, oignons, concombres et ananas.' },
  { question: 'Comment obtenir un devis ?', answer: 'Complétez le formulaire ou contactez directement notre équipe. Nous reviendrons vers vous dans les meilleurs délais.' },
  { question: 'Acceptez-vous de nouveaux partenaires ?', answer: 'Oui. Chaque demande est étudiée afin de proposer une solution adaptée à vos besoins.' },
]

export default function ContactPage() {
  useSEO({
    title: 'Contact — Demander un devis',
    description:
      "Contactez IBL Primeurs à Dakar pour vos besoins d'approvisionnement en fruits et légumes frais. Réponse sous 24h ouvrées pour toute demande de devis.",
    path: '/contact',
    image: coverPhoto,
  })

  const [searchParams] = useSearchParams()
  const preselectedProduct = searchParams.get('produit')
  const hasPreselectedProduct = Boolean(preselectedProduct && PRODUCT_OPTIONS.includes(preselectedProduct))

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    country: '',
    email: '',
    phone: '',
    quantity: '',
    message: hasPreselectedProduct
      ? `Bonjour, je souhaite recevoir la fiche technique et un devis pour : ${preselectedProduct}.`
      : '',
  })
  const [products, setProducts] = useState<string[]>(() => (hasPreselectedProduct ? [preselectedProduct!] : []))
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleProduct = (product: string) => {
    setProducts((current) =>
      current.includes(product) ? current.filter((p) => p !== product) : [...current, product],
    )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone,
          produit: products.length > 0 ? products.join(', ') : 'Autre',
          message: formData.message,
        }),
      })
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('Erreur de connexion. Veuillez vérifier votre internet.')
    }
  }

  return (
    <>
      <a
        href="https://wa.me/221775256015?text=Bonjour%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20produits."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter IBL Primeurs sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-clay-500 text-ink-950 shadow-[0_12px_30px_-8px_rgba(18,53,36,0.5)] transition-transform duration-200 hover:scale-105 hover:bg-clay-600"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.45 1.35 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2m0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.23 8.22m4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28" />
        </svg>
      </a>

      <PageHero
        eyebrow="Contact"
        title="Construisons un partenariat durable"
        description="Vous recherchez un fournisseur fiable de fruits et légumes frais au Sénégal ? Notre équipe est à votre disposition pour répondre à vos besoins en approvisionnement et vous accompagner dans vos projets d'importation. Nous répondons généralement sous 24 heures ouvrées."
        imageSrc={coverPhoto}
      />

      <div className="flex justify-center border-b border-ink-950/10 px-6 py-10 lg:px-10">
        <a
          href="#devis"
          className="rounded-lg bg-clay-500 px-8 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-clay-600"
        >
          Entrons en contact
        </a>
      </div>

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map((card) => (
            <div key={card.title} className="rounded-2xl border border-ink-950/10 p-8 text-center shadow-[0_20px_45px_-30px_rgba(18,53,36,0.25)]">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink-950/5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-ink-950">
                  {card.icon}
                </svg>
              </div>
              <h2 className="font-display text-base font-bold text-ink-950">{card.title}</h2>
              {card.lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-ink-700">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="devis" className="bg-paper-100 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
            Demande de devis
          </p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Parlez-nous de votre projet
          </h2>

          {isSubmitted ? (
            <div className="mt-10 border-l-2 border-clay-500 bg-paper-50 p-8">
              <p className="font-display text-lg font-bold text-ink-950">Merci pour votre message.</p>
              <p className="mt-2 text-base leading-relaxed text-ink-700">
                Votre client de messagerie devrait s'être ouvert avec votre
                demande pré-remplie. Notre équipe vous répondra rapidement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-3 text-base text-ink-950 outline-none transition-colors focus:border-clay-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Société
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-3 text-base text-ink-950 outline-none transition-colors focus:border-clay-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Fonction
                </label>
                <input
                  id="role"
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-3 text-base text-ink-950 outline-none transition-colors focus:border-clay-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Pays
                </label>
                <input
                  id="country"
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-3 text-base text-ink-950 outline-none transition-colors focus:border-clay-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-3 text-base text-ink-950 outline-none transition-colors focus:border-clay-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Téléphone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-3 text-base text-ink-950 outline-none transition-colors focus:border-clay-500"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Produit recherché
                </p>
                <div className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
                  {PRODUCT_OPTIONS.map((product) => (
                    <label key={product} className="flex items-center gap-2 text-sm text-ink-950">
                      <input
                        type="checkbox"
                        checked={products.includes(product)}
                        onChange={() => toggleProduct(product)}
                        className="h-4 w-4 accent-clay-500"
                      />
                      {product}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="quantity" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Quantité estimée
                </label>
                <input
                  id="quantity"
                  type="text"
                  placeholder="ex : 1 palette, 1 conteneur, etc."
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-3 text-base text-ink-950 outline-none transition-colors placeholder:text-ink-500/60 focus:border-clay-500"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-3 text-base text-ink-950 outline-none transition-colors focus:border-clay-500"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-lg bg-clay-500 px-9 py-4 text-sm font-semibold text-ink-950 transition-colors duration-200 hover:bg-clay-600"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
            Localisation
          </p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Basés à Camberène, Dakar
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
            Basés à Camberène, quartier Kawsara, à Dakar, nous accompagnons
            des partenaires internationaux dans leurs projets
            d'approvisionnement en fruits et légumes frais.
          </p>
          <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg border border-ink-950/10">
            <iframe
              title="Localisation IBL Primeurs — Camberène, Dakar, Sénégal"
              src="https://www.google.com/maps?q=Camberene+Kawsara,Dakar,Senegal&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper-100 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Questions fréquentes
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {FAQ.map((item) => (
              <div key={item.question} className="border-b border-ink-950/10 pb-8 last:border-b-0 last:pb-0">
                <h3 className="font-display text-lg font-semibold text-ink-950">{item.question}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
