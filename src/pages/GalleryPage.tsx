import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import { useSEO } from '../lib/useSEO'

import heroFarmlandPhoto from '../assets/images/hero-farmland.webp'
import presentationPhoto from '../assets/images/presentation-producteur.webp'
import aboutParcoursPhoto from '../assets/images/about-parcours.webp'
import aboutEquipePhoto from '../assets/images/about-equipe.webp'
import inspectionManguesPhoto from '../assets/images/quality-inspection-mangues.webp'
import tableTriPhoto from '../assets/images/quality-table-tri.webp'
import entrepotFrigoPhoto from '../assets/images/quality-entrepot-frigorifique.webp'
import cteConteneurPhoto from '../assets/images/cta-conteneur.webp'
import productManguePhoto from '../assets/images/product-mangue.webp'
import productHaricotPhoto from '../assets/images/product-haricot-vert.avif'
import productGomboPhoto from '../assets/images/product-gombo.webp'
import productPimentPhoto from '../assets/images/product-piment.avif'
import productCitronsPhoto from '../assets/images/product-citrons-limes.webp'
import talayBoxPhoto from '../assets/images/talay-mango-box.webp'
import coverPhoto from '../assets/images/cover-apropos-mangotree.webp'

interface GalleryImage {
  src: string
  alt: string
  category: string
  width: number
  height: number
}

const IMAGES: GalleryImage[] = [
  { src: heroFarmlandPhoto, alt: 'Terres agricoles au Sénégal, origine des produits IBL Primeurs', category: 'Nos terres', width: 500, height: 334 },
  { src: presentationPhoto, alt: "Producteur partenaire d'IBL Primeurs récoltant des haricots verts", category: 'Nos terres', width: 576, height: 1024 },
  { src: aboutParcoursPhoto, alt: 'Manguier en culture chez un producteur partenaire', category: 'Nos terres', width: 1200, height: 1200 },
  { src: aboutEquipePhoto, alt: "L'équipe IBL Primeurs sur le terrain", category: 'Notre équipe', width: 1032, height: 774 },
  { src: inspectionManguesPhoto, alt: 'Mangues fraîchement récoltées prêtes pour inspection', category: 'Qualité & logistique', width: 1200, height: 1600 },
  { src: tableTriPhoto, alt: 'Table de tri et contrôle qualité des haricots verts', category: 'Qualité & logistique', width: 1080, height: 810 },
  { src: entrepotFrigoPhoto, alt: 'Entrepôt frigorifique avec cartons de mangues', category: 'Qualité & logistique', width: 1125, height: 1230 },
  { src: cteConteneurPhoto, alt: "Chargement d'un conteneur pour l'export", category: 'Qualité & logistique', width: 810, height: 1080 },
  { src: productManguePhoto, alt: 'Mangues fraîches préparées pour export', category: 'Nos produits', width: 612, height: 410 },
  { src: productHaricotPhoto, alt: 'Haricots verts frais préparés pour export', category: 'Nos produits', width: 500, height: 667 },
  { src: productGomboPhoto, alt: 'Gombo frais préparé pour export', category: 'Nos produits', width: 1125, height: 922 },
  { src: productPimentPhoto, alt: 'Piments frais préparés pour export', category: 'Nos produits', width: 500, height: 333 },
  { src: productCitronsPhoto, alt: 'Citrons et limes frais préparés pour export', category: 'Nos produits', width: 702, height: 1280 },
  { src: talayBoxPhoto, alt: 'Carton de mangues de la marque Talay', category: 'Nos produits', width: 1535, height: 1024 },
]

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useSEO({
    title: 'Galerie — Nos terres, nos équipes, nos produits',
    description:
      "Un aperçu en images de l'activité d'IBL Primeurs : producteurs partenaires, contrôle qualité, logistique et produits frais préparés pour l'export.",
    path: '/galerie',
    image: coverPhoto,
  })

  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length))
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % IMAGES.length))

  useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex])

  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Nos terres, nos équipes et nos produits en images"
        description="Des vergers et champs de nos producteurs partenaires jusqu'aux conteneurs prêts pour l'export, en passant par notre contrôle qualité : un aperçu visuel de notre activité au Sénégal."
        imageSrc={coverPhoto}
      />

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl columns-2 gap-4 sm:columns-3 lg:columns-4">
          {IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Agrandir : ${image.alt}`}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[18px] shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/70 via-ink-950/0 to-ink-950/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-paper-50">{image.category}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 px-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={IMAGES[activeIndex].alt}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Fermer"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-paper-50/10 text-paper-50 transition-colors hover:bg-paper-50/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(event) => { event.stopPropagation(); showPrev() }}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper-50/10 text-paper-50 transition-colors hover:bg-paper-50/20 sm:left-6"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(event) => { event.stopPropagation(); showNext() }}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper-50/10 text-paper-50 transition-colors hover:bg-paper-50/20 sm:right-6"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.img
              key={IMAGES[activeIndex].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={IMAGES[activeIndex].src}
              alt={IMAGES[activeIndex].alt}
              className="max-h-[85vh] max-w-full rounded-[18px] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </>
  )
}
