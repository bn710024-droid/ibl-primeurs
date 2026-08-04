import { Link } from 'react-router-dom'
import ctaPhoto from '../assets/images/cta-conteneur.webp'

interface CTAProps {
  title?: string
  description?: string
  buttonLabel?: string
}

export default function CTA({
  title = 'Vous recherchez un fournisseur fiable au Sénégal ?',
  description = 'Échangeons sur vos besoins. Notre équipe vous accompagne pour construire un approvisionnement durable et adapté à votre marché.',
  buttonLabel = 'Demander un devis',
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 px-6 py-28 lg:px-10 lg:py-36">
      <img
        src={ctaPhoto}
        alt="Chargement d'un conteneur d'export IBL Primeurs"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-ink-950/75" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-paper-50 sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper-100/80">
          {description}
        </p>
        <div className="mt-8">
          <Link
            to="/contact#devis"
            className="inline-flex rounded-lg bg-clay-500 px-8 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-clay-600"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
