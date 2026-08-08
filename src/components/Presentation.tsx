import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import presentationPhoto from '../assets/images/presentation-producteur.webp'

export default function Presentation() {
  return (
    <section id="a-propos" className="px-6 pb-28 pt-16 lg:px-10 lg:pb-36 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid max-w-7xl items-center gap-12 overflow-hidden lg:grid-cols-2 lg:gap-16"
      >
        <img
          src={presentationPhoto}
          alt="Producteur partenaire d'IBL Primeurs récoltant des haricots verts"
          className="relative z-10 aspect-[3/4] w-full rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)] lg:-mt-28 lg:aspect-[4/3]"
          width={1280}
          height={1707}
          loading="lazy"
          decoding="async"
        />

        <div>
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
            À propos
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
            Une entreprise tournée vers l'export
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-700">
            IBL Primeurs accompagne les professionnels de l'importation avec
            des produits frais issus du Sénégal, préparés pour répondre aux
            exigences des marchés internationaux.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            Notre mission est simple : offrir des produits de qualité, des
            expéditions fiables et une collaboration durable avec chacun de
            nos partenaires.
          </p>
          <Link
            to="/a-propos"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-ink-950 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-ink-950 hover:text-paper-50"
          >
            En savoir plus
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
