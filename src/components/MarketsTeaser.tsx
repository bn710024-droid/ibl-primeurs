import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MarketsMap from './MarketsMap'

const MARKETS = ['Union Européenne', 'Maroc', 'Maghreb', 'Afrique de l’Ouest']

export default function MarketsTeaser() {
  return (
    <section className="bg-paper-100 px-6 py-28 lg:px-10 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
            Marchés
          </p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Nous exportons là où la qualité est attendue.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-700">
            Grâce à notre expérience et à notre organisation logistique, nous
            accompagnons des partenaires en Europe, au Maghreb et en Afrique
            de l'Ouest.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            {MARKETS.map((market) => (
              <li key={market} className="flex items-center gap-2.5 text-sm font-medium text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                {market}
              </li>
            ))}
          </ul>
          <Link
            to="/marches"
            className="mt-7 inline-flex rounded-lg border border-ink-950 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-ink-950 hover:text-paper-50"
          >
            Découvrir nos marchés
          </Link>
        </div>

        <MarketsMap />
      </motion.div>
    </section>
  )
}
