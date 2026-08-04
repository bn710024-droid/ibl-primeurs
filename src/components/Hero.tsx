import { Link } from 'react-router-dom'
import heroFarmlandPhoto from '../assets/images/hero-farmland.webp'

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[85vh] items-end overflow-hidden bg-ink-950 pt-24">
      <img
        src={heroFarmlandPhoto}
        alt="Terres agricoles au Sénégal, origine des produits IBL Primeurs"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="max-w-2xl">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-clay-400">
            Sénégal — Export international
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-paper-50 sm:text-5xl lg:text-6xl">
            Votre partenaire export depuis le Sénégal vers les marchés internationaux
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-100/85">
            Nous fournissons des fruits et légumes frais aux importateurs,
            grossistes et distributeurs qui recherchent une qualité
            constante, une logistique fiable et un partenaire capable de
            répondre aux exigences des marchés internationaux.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/produits"
              className="rounded-lg bg-clay-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-sm transition-colors duration-200 hover:bg-clay-600"
            >
              Découvrir nos produits
            </Link>
            <Link
              to="/contact#devis"
              className="rounded-lg border border-paper-50/50 px-7 py-3.5 text-sm font-semibold text-paper-50 transition-colors duration-200 hover:bg-paper-50/10"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
