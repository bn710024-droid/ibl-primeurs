import { Link } from 'react-router-dom'

const NAV_COLUMNS = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', to: '/' },
      { label: 'À propos', to: '/a-propos' },
      { label: 'Produits', to: '/produits' },
      { label: 'Qualité', to: '/qualite' },
      { label: 'Marchés', to: '/marches' },
      { label: 'Galerie', to: '/galerie' },
    ],
  },
]

const SOCIALS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 px-6 pb-10 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-paper-50/10 pb-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold text-paper-50">
              IBL <span className="text-clay-400">Primeurs</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper-100/55">
              Exportateur sénégalais de fruits et légumes frais depuis 1994.
              Un partenaire de confiance pour les importateurs, grossistes et
              distributeurs internationaux.
            </p>
            <div className="mt-6 flex gap-5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm font-medium text-paper-100/50 transition-colors hover:text-clay-400"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {NAV_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-paper-50/80">
                {column.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-paper-100/55 transition-colors hover:text-clay-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-paper-50/80">
              Contact
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-paper-100/55">
              <li>Camberène, Kawsara — Dakar, Sénégal</li>
              <li>
                <a href="mailto:contact@iblprimeurs.com" className="transition-colors hover:text-clay-400">
                  contact@iblprimeurs.com
                </a>
              </li>
              <li>
                <a href="tel:+221775256015" className="transition-colors hover:text-clay-400">
                  +221 77 525 60 15
                </a>
              </li>
              <li>
                <Link to="/contact" className="font-semibold text-clay-400 transition-colors hover:text-clay-500">
                  Formulaire de contact &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-paper-100/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} IBL Primeurs. Tous droits réservés.</p>
          <p>Des produits frais du Sénégal pour les marchés internationaux.</p>
        </div>
      </div>
    </footer>
  )
}
