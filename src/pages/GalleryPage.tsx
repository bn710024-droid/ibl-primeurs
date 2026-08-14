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
import euMangue01 from '../assets/images/gallery-eu-mangue-01.webp'
import euMangue03 from '../assets/images/gallery-eu-mangue-03.webp'
import euMangue04 from '../assets/images/gallery-eu-mangue-04.webp'
import euMangue07 from '../assets/images/gallery-eu-mangue-07.webp'
import marocMangue01 from '../assets/images/gallery-maroc-mangue-01.webp'
import marocMangue02 from '../assets/images/gallery-maroc-mangue-02.webp'
import marocMangue03 from '../assets/images/gallery-maroc-mangue-03.webp'
import marocMangue04 from '../assets/images/gallery-maroc-mangue-04.webp'
import marocMangue05 from '../assets/images/gallery-maroc-mangue-05.webp'
import marocMangue06 from '../assets/images/gallery-maroc-mangue-06.webp'
import marocMangue07 from '../assets/images/gallery-maroc-mangue-07.webp'
import ananas01 from '../assets/images/gallery-ananas-01.webp'
import ananas02 from '../assets/images/gallery-ananas-02.webp'
import ananas03 from '../assets/images/gallery-ananas-03.webp'
import ananas04 from '../assets/images/gallery-ananas-04.webp'
import ananas05 from '../assets/images/gallery-ananas-05.webp'
import ananas06 from '../assets/images/gallery-ananas-06.webp'
import ananas07 from '../assets/images/gallery-ananas-07.webp'
import ananas08 from '../assets/images/gallery-ananas-08.webp'
import legumeTomate01 from '../assets/images/gallery-tomate-01.webp'
import legumeTomate02 from '../assets/images/gallery-tomate-02.webp'
import legumeTomate03 from '../assets/images/gallery-tomate-03.webp'
import legumeTomate04 from '../assets/images/gallery-tomate-04.webp'
import legumePoivron01 from '../assets/images/gallery-poivron-01.webp'
import legumeAubergine01 from '../assets/images/gallery-aubergine-01.webp'
import mangueAmelie01 from '../assets/images/page-produits-mangue-amelie.webp'
import mangueAmelie02 from '../assets/images/gallery-mangue-amelie-02.webp'
import coverPhoto from '../assets/images/cover-apropos-mangotree.webp'

interface GalleryImage {
  src: string
  alt: string
  category: string
  width: number
  height: number
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'Nos terres': "Les vergers et champs de nos producteurs partenaires, à l'origine de chaque récolte.",
  'Notre équipe': "Les femmes et les hommes qui accompagnent chaque étape, du champ jusqu'à l'expédition.",
  'Qualité & logistique': 'Contrôle, tri et conditionnement : notre exigence à chaque étape avant expédition.',
  'Nos produits': "Un aperçu de nos fruits et légumes frais préparés pour l'export.",
  'Union européenne': "Nos mangues conditionnées, calibrées et contrôlées pour l'expédition vers le marché européen.",
  'Maroc': "Nos mangues préparées et conditionnées pour l'export vers le marché marocain.",
  'Ananas': "Nos ananas de Côte d'Ivoire, récoltés et conditionnés avec soin pour l'export.",
  'Légumes': 'Tomates, aubergines et poivrons cultivés par nos producteurs partenaires.',
  'Mangue Amélie': 'La variété Amélie, reconnaissable à sa chair verte et sa forme allongée.',
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
  { src: euMangue01, alt: 'Cartons de mangues conditionnés pour export vers l’Union européenne', category: 'Union européenne', width: 765, height: 1020 },
  { src: euMangue03, alt: 'Cartons de mangues empilés prêts pour expédition vers l’Europe', category: 'Union européenne', width: 765, height: 1020 },
  { src: euMangue04, alt: 'Contrôle des cartons de mangues avant export vers l’Union européenne', category: 'Union européenne', width: 765, height: 1020 },
  { src: euMangue07, alt: 'Équipe préparant les cartons de mangues pour export vers l’Union européenne', category: 'Union européenne', width: 765, height: 1020 },
  { src: marocMangue01, alt: 'Cartons de mangues empilés en chambre froide pour export vers le Maroc', category: 'Maroc', width: 1200, height: 675 },
  { src: marocMangue02, alt: 'Palettes de cartons de mangues préparées pour expédition vers le Maroc', category: 'Maroc', width: 720, height: 1280 },
  { src: marocMangue03, alt: 'Mangues sélectionnées en caisse pour le marché marocain', category: 'Maroc', width: 960, height: 1280 },
  { src: marocMangue04, alt: 'Contrôle des mangues avant conditionnement pour le Maroc', category: 'Maroc', width: 960, height: 1280 },
  { src: marocMangue05, alt: 'Rangée de cartons de mangues prêts pour export vers le Maroc', category: 'Maroc', width: 960, height: 1280 },
  { src: marocMangue06, alt: 'Cartons de mangues conditionnés pour le marché marocain', category: 'Maroc', width: 1200, height: 900 },
  { src: marocMangue07, alt: 'Cartons de mangues sur palette prêts pour expédition vers le Maroc', category: 'Maroc', width: 1200, height: 900 },
  { src: ananas01, alt: 'Cartons d’ananas conditionnés pour export', category: 'Ananas', width: 1080, height: 608 },
  { src: ananas02, alt: 'Ananas triés et calibrés en carton', category: 'Ananas', width: 1080, height: 608 },
  { src: ananas03, alt: 'Carton d’ananas prêt pour expédition', category: 'Ananas', width: 608, height: 1080 },
  { src: ananas04, alt: 'Cartons d’ananas empilés sur palette bois', category: 'Ananas', width: 608, height: 1080 },
  { src: ananas05, alt: 'Ananas fraîchement récoltés côte à côte', category: 'Ananas', width: 1080, height: 608 },
  { src: ananas06, alt: 'Sélection d’ananas de différents calibres', category: 'Ananas', width: 1080, height: 608 },
  { src: ananas07, alt: 'Gros plan sur un ananas prêt pour export', category: 'Ananas', width: 1080, height: 608 },
  { src: ananas08, alt: 'Ananas contrôlés avant conditionnement', category: 'Ananas', width: 1080, height: 608 },
  { src: legumeTomate01, alt: 'Tomates vertes en cours de maturation sur pied', category: 'Légumes', width: 960, height: 1280 },
  { src: legumeTomate02, alt: 'Tomates fraîchement récoltées', category: 'Légumes', width: 960, height: 1280 },
  { src: legumeTomate03, alt: 'Tomates mûres sur pied', category: 'Légumes', width: 360, height: 480 },
  { src: legumeTomate04, alt: 'Tomates en cours de maturation en serre', category: 'Légumes', width: 720, height: 1280 },
  { src: legumePoivron01, alt: 'Poivrons rouges cultivés par nos producteurs partenaires', category: 'Légumes', width: 1063, height: 990 },
  { src: legumeAubergine01, alt: 'Aubergines en cours de récolte', category: 'Légumes', width: 520, height: 1152 },
  { src: mangueAmelie01, alt: 'Cartons de mangues variété Amélie', category: 'Mangue Amélie', width: 810, height: 1080 },
  { src: mangueAmelie02, alt: 'Mangues Amélie triées en carton', category: 'Mangue Amélie', width: 810, height: 1080 },
]

const CATEGORIES = Array.from(new Set(IMAGES.map((image) => image.category))).map((category) => ({
  title: category,
  description: CATEGORY_DESCRIPTIONS[category],
  images: IMAGES.filter((image) => image.category === category),
}))

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

      {CATEGORIES.map((cat, catIndex) => (
        <section
          key={cat.title}
          className={`px-6 py-16 lg:px-10 lg:py-20 ${catIndex % 2 === 1 ? 'bg-paper-100' : ''} ${
            catIndex === 0 ? 'pt-28 lg:pt-36' : ''
          } ${catIndex === CATEGORIES.length - 1 ? 'pb-28 lg:pb-36' : ''}`}
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">{cat.title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-700">{cat.description}</p>

            <div className="mt-8 columns-2 gap-4 sm:columns-3 lg:columns-4">
              {cat.images.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(IMAGES.indexOf(image))}
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
                  <span className="pointer-events-none absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/10" />
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

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
