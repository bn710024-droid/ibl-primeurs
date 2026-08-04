import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import manguePhoto from '../assets/images/product-mangue.webp'
import haricotVertPhoto from '../assets/images/product-haricot-vert.avif'
import gomboPhoto from '../assets/images/product-gombo.webp'
import pimentPhoto from '../assets/images/product-piment.avif'
import citronsLimesPhoto from '../assets/images/product-citrons-limes.webp'

const PRODUCTS = [
  { name: 'Mangue', photo: manguePhoto },
  { name: 'Haricot vert', photo: haricotVertPhoto },
  { name: 'Gombo', photo: gomboPhoto },
  { name: 'Piment', photo: pimentPhoto },
  { name: 'Citrons & Limes', photo: citronsLimesPhoto },
]

export default function ProductsTeaser() {
  return (
    <section className="bg-paper-100 px-6 py-28 lg:px-10 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-12 text-center">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
            Produits
          </p>
          <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Une sélection pensée pour les marchés internationaux
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
            Chaque produit est sélectionné avec attention afin de garantir
            fraîcheur, régularité et conformité aux attentes de nos clients.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <div key={product.name}>
              <img
                src={product.photo}
                alt={product.name}
                className="aspect-square w-full rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)]"
                loading="lazy"
                decoding="async"
              />
              <p className="mt-3 text-center font-display text-base font-semibold text-ink-950">
                {product.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/produits"
            className="rounded-lg bg-ink-950 px-7 py-3.5 text-sm font-semibold text-paper-50 transition-colors hover:bg-ink-900"
          >
            Voir tous les produits
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
