import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const COMMITMENTS = [
  {
    title: 'Sélection rigoureuse',
    description: 'Des producteurs partenaires choisis pour la constance de leur qualité.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: 'Contrôle qualité',
    description: 'Des vérifications à chaque étape, de la récolte à l’emballage.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M9 3.75v0a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v0M9 3.75h6"
      />
    ),
  },
  {
    title: 'Logistique maîtrisée',
    description: 'Une chaîne du froid continue pour préserver fraîcheur et qualité.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 0h17.25m-17.25 0V9.375c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125v4.875"
      />
    ),
  },
  {
    title: 'Livraison internationale',
    description: 'Une expédition fiable vers l’Europe, le Maghreb et au-delà.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15l-.75 13.5h-13.5L4.5 3Zm3 6h9m-9 3.75h9"
      />
    ),
  },
]

export default function QualityCommitment() {
  return (
    <section id="qualite" className="px-6 py-28 lg:px-10 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-12 text-center">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
            Qualité
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            La qualité n'est pas une promesse. C'est notre méthode de travail.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
            De la sélection des producteurs jusqu'à l'expédition, chaque
            étape est suivie avec rigueur afin d'assurer une qualité
            constante.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ink-950/5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-ink-950">
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/qualite"
            className="rounded-lg border border-ink-950 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-ink-950 hover:text-paper-50"
          >
            Découvrir notre démarche qualité
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
