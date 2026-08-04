import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Produits', to: '/produits' },
  { label: 'Qualité', to: '/qualite' },
  { label: 'Marchés', to: '/marches' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'border-b border-ink-950/10 bg-paper-50/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          to="/"
          className={`font-display text-xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-ink-950' : 'text-paper-50'
          }`}
        >
          IBL <span className="text-clay-500">Primeurs</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.to === '/' ? pathname === '/' : pathname.startsWith(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isScrolled
                    ? isActive
                      ? 'text-clay-600'
                      : 'text-ink-700 hover:text-clay-600'
                    : isActive
                      ? 'text-clay-400'
                      : 'text-paper-100/90 hover:text-paper-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact#devis"
            className={`rounded-lg border px-6 py-2.5 text-sm font-semibold transition-colors duration-200 ${
              isScrolled
                ? 'border-ink-950 bg-ink-950 text-paper-50 hover:border-clay-500 hover:bg-clay-500 hover:text-ink-950'
                : 'border-paper-50/70 text-paper-50 hover:border-clay-400 hover:text-clay-400'
            }`}
          >
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className={`flex flex-col gap-1.5 p-2 lg:hidden ${isScrolled ? 'text-ink-950' : 'text-paper-50'}`}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-ink-950/10 bg-paper-50 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="text-base font-medium text-ink-700">
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact#devis"
              className="mt-2 rounded-lg border border-ink-950 bg-ink-950 px-6 py-3 text-center text-sm font-semibold text-paper-50"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
