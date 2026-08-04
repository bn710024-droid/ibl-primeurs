import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import tableTriPhoto from '../assets/images/quality-table-tri.webp'
import entrepotFrigoPhoto from '../assets/images/quality-entrepot-frigorifique.webp'
import inspectionManguesPhoto from '../assets/images/quality-inspection-mangues.webp'
import globalGapLogo from '../assets/images/logo-globalgap.webp'
import graspLogo from '../assets/images/logo-grasp.webp'
import coverPhoto from '../assets/images/cover-qualite-haricots.webp'
import { useSEO } from '../lib/useSEO'

const PILLARS = [
  {
    title: 'Traçabilité',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M9 3.75v0a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v0M9 3.75h6"
      />
    ),
  },
  {
    title: 'Contrôle qualité',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: 'Chaîne logistique',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 0h17.25m-17.25 0V9.375c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125v4.875"
      />
    ),
  },
  {
    title: 'Certifications',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m5.834-3.03a11.209 11.209 0 0 1-7.501-2.916 11.21 11.21 0 0 1-7.501 2.916A11.25 11.25 0 0 0 4.5 10.5c0 5.01 3.163 9.286 7.5 10.94 4.337-1.654 7.5-5.93 7.5-10.94 0-1.16-.174-2.278-.499-3.334Z"
      />
    ),
  },
]

const PROCESS_STEPS = [
  { title: 'Sélection des produits', description: 'Les produits sont soigneusement sélectionnés selon leur fraîcheur, leur maturité et leur qualité.' },
  { title: 'Contrôle qualité', description: 'Chaque lot est inspecté afin de vérifier son état, son homogénéité et sa conformité avant conditionnement.' },
  { title: 'Conditionnement', description: 'Les produits sont emballés avec des matériaux adaptés afin de préserver leur qualité pendant le transport.' },
  { title: 'Expédition', description: 'Les marchandises sont préparées pour une expédition dans le respect des exigences logistiques du client.' },
]

const CERTIFICATIONS = [
  { title: 'GlobalG.A.P.', description: "Référentiel international garantissant l'application de bonnes pratiques agricoles et la traçabilité des productions." },
  { title: 'GRASP', description: 'Complément de GlobalG.A.P. portant sur les bonnes pratiques sociales et les conditions de travail au sein des exploitations.' },
]

export default function QualityPage() {
  useSEO({
    title: 'Qualité & certifications GlobalG.A.P.',
    description:
      'Traçabilité, contrôle qualité et certifications GlobalG.A.P. et GRASP : découvrez notre démarche qualité, de la sélection des producteurs jusqu\'à l\'expédition.',
    path: '/qualite',
    image: coverPhoto,
  })

  return (
    <>
      <PageHero
        eyebrow="Qualité"
        title="La qualité, notre priorité à chaque expédition"
        description="Chez IBL Primeurs, chaque expédition fait l'objet d'un contrôle rigoureux afin de garantir des produits frais, conformes aux exigences de nos partenaires internationaux. De la sélection des produits jusqu'à leur expédition, nous veillons à préserver leur qualité, leur fraîcheur et leur traçabilité."
        imageSrc={coverPhoto}
      />

      <section className="border-b border-ink-950/10 px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-clay-500/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-clay-600">
                  {pillar.icon}
                </svg>
              </div>
              <p className="text-sm font-semibold text-ink-950">{pillar.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
              Notre engagement
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Une sélection exigeante
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
              Nous collaborons avec des producteurs et partenaires
              sélectionnés pour la qualité de leurs productions et leur
              capacité à répondre aux exigences des marchés internationaux.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-700">
              Chaque lot est préparé avec le plus grand soin avant son
              départ.
            </p>
          </div>
          <img
            src={inspectionManguesPhoto}
            alt="Mangues fraîchement récoltées prêtes pour inspection chez IBL Primeurs"
            className="aspect-[4/3] w-full rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="bg-paper-100 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
              Process
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Notre processus qualité
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-clay-500 text-sm font-bold text-ink-950">
                  {index + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.description}</p>
              </div>
            ))}
          </div>

          <img
            src={tableTriPhoto}
            alt="Table de tri et contrôle qualité des haricots verts chez IBL Primeurs"
            className="mt-12 aspect-[21/9] w-full rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <img
            src={entrepotFrigoPhoto}
            alt="Entrepôt frigorifique d'IBL Primeurs avec cartons de mangues"
            className="aspect-[4/3] w-full order-last rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)] lg:order-first"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
              Logistique
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Une logistique pensée pour préserver la fraîcheur
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
              Nous travaillons avec des solutions logistiques adaptées aux
              produits frais afin de maintenir leur qualité tout au long du
              transport.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-700">
              Notre objectif est d'assurer une livraison fiable dans le
              respect des délais convenus avec nos partenaires.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-950 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-400">
            Certifications
          </p>
          <h2 className="font-display text-3xl font-bold text-paper-50 sm:text-4xl">
            Des standards reconnus à l'international
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper-100/70">
            IBL Primeurs collabore avec des partenaires engagés dans le
            respect des bonnes pratiques agricoles et des exigences
            internationales.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="border border-paper-50/15 p-8 sm:p-10">
                <h3 className="font-display text-xl font-bold text-paper-50">{cert.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-100/55">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-paper-50/10 pt-8">
            <div className="flex h-20 w-36 items-center justify-center rounded-lg bg-paper-50 p-3">
              <img src={globalGapLogo} alt="Logo GlobalG.A.P." className="h-full w-full object-contain" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-20 w-36 items-center justify-center rounded-lg bg-paper-50 p-3">
              <img src={graspLogo} alt="Logo GRASP" className="h-full w-full object-contain" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Construisons une collaboration durable"
        description="Vous recherchez un fournisseur fiable de fruits et légumes frais au Sénégal ? Notre équipe est à votre disposition pour étudier vos besoins et vous proposer une solution adaptée à votre marché."
      />
    </>
  )
}
