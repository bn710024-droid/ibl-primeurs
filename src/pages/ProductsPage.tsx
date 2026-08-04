import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import manguePhoto from '../assets/images/page-produits-mangue.jpeg'
import haricotVertPhoto from '../assets/images/page-produits-haricot-vert.jpeg'
import gomboPhoto from '../assets/images/page-produits-gombo.jpeg'
import pimentPhoto from '../assets/images/page-produits-piment.jpeg'
import citronsLimesPhoto from '../assets/images/page-produits-citrons-limes.jpeg'
import coverPhoto from '../assets/images/cover-produits-pineapple.jpeg'

const PRODUCTS = [
  {
    name: 'Mangue',
    photo: manguePhoto,
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
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''
                }`}
              >
                <img
                  src={product.photo}
                  alt={product.name}
                  className="aspect-[4/3] w-full rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)]"
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
                  <a
                    href="/contact"
                    className="mt-6 inline-flex rounded-lg border border-ink-950 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-ink-950 hover:text-paper-50"
                  >
                    Demander la fiche technique
                  </a>
                </div>
              </div>
            ))}
          </div>
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
