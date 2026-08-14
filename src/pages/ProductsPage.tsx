import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import mangueEuropePhoto from '../assets/images/gallery-eu-mangue-04.webp'
import mangueAvionPhoto from '../assets/images/page-produits-mangue-avion.webp'
import haricotVertPhoto from '../assets/images/page-produits-haricot-vert.webp'
import gomboPhoto from '../assets/images/page-produits-gombo.webp'
import pimentPhoto from '../assets/images/page-produits-piment.webp'
import citronsLimesPhoto from '../assets/images/page-produits-citrons-limes.webp'
import tomatePhoto from '../assets/images/page-produits-tomate.webp'
import auberginePhoto from '../assets/images/page-produits-aubergine.webp'
import poivronPhoto from '../assets/images/page-produits-poivron.webp'
import oignonPhoto from '../assets/images/page-produits-oignon.webp'
import concombrePhoto from '../assets/images/page-produits-concombre.webp'
import ananasPhoto from '../assets/images/page-produits-ananas.webp'
import coverPhoto from '../assets/images/cover-produits-pineapple.webp'
import { useSEO } from '../lib/useSEO'

const PRODUCTS = [
  {
    name: 'Mangue',
    photo: mangueEuropePhoto,
    tagline: 'Une mangue reconnue pour sa qualité et sa tenue au transport.',
    description: 'Nos mangues sont soigneusement sélectionnées et préparées pour répondre aux exigences des marchés internationaux, avec une attention particulière portée à la fraîcheur, au calibre et à la présentation.',
    meta: [
      { label: 'Variétés disponibles', value: 'Kent • Keitt • Springfields • Palmers • Osteen' },
      { label: 'Origine', value: "Sénégal, Burkina Faso, Mali, Côte d'Ivoire" },
      { label: 'Disponibilité', value: 'Mars – Août' },
    ],
  },
  {
    name: 'Mangue avion de haute qualité',
    quoteLabel: 'Mangue',
    photo: mangueAvionPhoto,
    tagline: 'Une mangue reconnue pour sa qualité et sa tenue au transport.',
    description: 'Nos mangues sont soigneusement sélectionnées et préparées pour répondre aux exigences des marchés internationaux, avec une attention particulière portée à la fraîcheur, au calibre et à la présentation.',
    meta: [
      { label: 'Variétés disponibles', value: 'Kent • Keitt • Springfields' },
      { label: 'Disponibilité', value: 'Mars – Août' },
    ],
  },
  {
    name: 'Haricot vert',
    photo: haricotVertPhoto,
    tagline: 'Récolté avec soin pour préserver sa fraîcheur et sa qualité.',
    description: 'Nos haricots verts sont préparés selon les standards export afin d’offrir une excellente présentation et une bonne conservation jusqu’à destination.',
    meta: [{ label: 'Disponibilité', value: 'Octobre – Mai' }],
  },
  {
    name: 'Gombo',
    photo: gomboPhoto,
    tagline: 'Sélectionné pour sa fraîcheur et sa qualité constante.',
    description: 'Le gombo est récolté à maturité optimale afin de répondre aux attentes des marchés spécialisés.',
    meta: [],
  },
  {
    name: 'Piment',
    photo: pimentPhoto,
    tagline: 'Une sélection adaptée aux besoins des marchés internationaux.',
    description: 'Nos piments sont triés avec soin pour garantir une qualité homogène et une excellente conservation.',
    meta: [],
  },
  {
    name: 'Citrons & Limes',
    photo: citronsLimesPhoto,
    tagline: 'Fraîcheur, jutosité et qualité export.',
    description: 'Nos citrons et limes sont sélectionnés pour leur excellente tenue au transport et leur qualité constante.',
    meta: [],
  },
  {
    name: 'Tomate',
    photo: tomatePhoto,
    tagline: 'Une tomate charnue, sélectionnée pour sa fermeté et sa couleur.',
    description: 'Nos tomates sont récoltées à bonne maturité et triées avec soin pour répondre aux exigences de fraîcheur et de présentation des marchés internationaux.',
    meta: [],
  },
  {
    name: 'Aubergine',
    photo: auberginePhoto,
    tagline: 'Une aubergine à la peau lisse et brillante, gage de fraîcheur.',
    description: "Nos aubergines sont sélectionnées pour leur fermeté et leur belle coloration, préparées selon les standards d'exportation.",
    meta: [],
  },
  {
    name: 'Poivron',
    photo: poivronPhoto,
    tagline: 'Un poivron charnu et coloré, apprécié pour sa qualité constante.',
    description: "Nos poivrons sont récoltés à maturité et conditionnés avec soin pour garantir fraîcheur et tenue jusqu'à destination.",
    meta: [],
  },
  {
    name: 'Oignon',
    photo: oignonPhoto,
    tagline: 'Un oignon rouge robuste, réputé pour sa bonne conservation.',
    description: 'Nos oignons sont sélectionnés pour leur calibre homogène et leur excellente tenue au transport et au stockage.',
    meta: [],
  },
  {
    name: 'Concombre',
    photo: concombrePhoto,
    tagline: 'Un concombre frais et croquant, cueilli à bonne maturité.',
    description: "Nos concombres sont récoltés avec soin afin de préserver leur fraîcheur et leur qualité jusqu'à l'expédition.",
    meta: [],
  },
  {
    name: 'Ananas',
    photo: ananasPhoto,
    tagline: 'Un ananas sucré et parfumé, sélectionné pour l’export.',
    description: "Nos ananas sont récoltés à bonne maturité et conditionnés avec soin pour garantir fraîcheur et qualité jusqu'à destination.",
    meta: [{ label: 'Origine', value: "Côte d'Ivoire" }],
  },
]

const REASONS = [
  "Plus de 30 ans d'expérience dans l'export",
  'Produits sélectionnés selon les standards internationaux',
  'Réseau de producteurs partenaires',
  'Contrôle qualité rigoureux',
  'Logistique maîtrisée',
  "Expéditions vers l'Europe, le Maghreb et l'Afrique de l'Ouest",
]

export default function ProductsPage() {
  useSEO({
    title: 'Nos produits — Mangue, tomate, aubergine, poivron et plus',
    description:
      "Découvrez la sélection de fruits et légumes frais d'IBL Primeurs : mangues, haricots verts, gombo, piments, citrons et limes, tomates, aubergines, poivrons, oignons et concombres, préparés pour l'export international.",
    path: '/produits',
    image: coverPhoto,
  })

  return (
    <>
      <PageHero
        eyebrow="Produits"
        title="Des produits frais sélectionnés pour les marchés internationaux"
        description="IBL Primeurs propose une sélection de fruits et légumes frais destinés aux importateurs, grossistes et distributeurs. Chaque expédition est préparée selon les exigences de nos partenaires afin de garantir fraîcheur, régularité et conformité aux standards internationaux."
        imageSrc={coverPhoto}
      />

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-16">
            {PRODUCTS.map((product, index) => (
              <div
                key={product.name}
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  index % 2 === 1 ? 'md:[&>*:first-child]:order-last' : ''
                }`}
              >
                <img
                  src={product.photo}
                  alt={product.name}
                  className="aspect-[4/3] w-full rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)]"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : undefined}
                  decoding="async"
                />
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-base font-medium text-clay-600">{product.tagline}</p>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-ink-700">
                    {product.description}
                  </p>
                  {product.meta.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-8">
                      {product.meta.map((item) => (
                        <div key={item.label}>
                          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{item.label}</p>
                          <p className="mt-1 text-sm font-medium text-ink-950">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <Link
                    to={`/contact?produit=${encodeURIComponent(product.quoteLabel ?? product.name)}#devis`}
                    className="mt-6 inline-flex rounded-lg border border-ink-950 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-ink-950 hover:text-paper-50"
                  >
                    Demander la fiche technique
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-3xl rounded-[28px] bg-paper-100 px-8 py-14 text-center lg:px-14">
          <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
            Vous recherchez un autre produit ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-700">
            Cette sélection ne couvre pas l'ensemble de notre offre. Grâce à notre réseau de
            producteurs partenaires au Sénégal, nous pouvons également sourcer d'autres fruits
            et légumes frais selon vos besoins spécifiques.
          </p>
          <Link
            to="/contact#devis"
            className="mt-8 inline-flex rounded-lg bg-clay-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-sm transition-colors duration-200 hover:bg-clay-600"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      <section className="bg-ink-950 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold text-paper-50 sm:text-4xl">
            Pourquoi choisir IBL Primeurs ?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75 9 17.25 19.5 6.75" />
                </svg>
                <p className="text-base text-paper-100/85">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
