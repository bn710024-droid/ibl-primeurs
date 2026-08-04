import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import aboutParcoursPhoto from '../assets/images/about-parcours.webp'
import aboutEquipePhoto from '../assets/images/about-equipe.webp'
import coverPhoto from '../assets/images/cover-apropos-mangotree.webp'
import talayBoxPhoto from '../assets/images/talay-mango-box.webp'
import { useSEO } from '../lib/useSEO'

const VALUES = [
  { title: 'Exigence', description: "Un contrôle qualité rigoureux à chaque étape, de la récolte à l'expédition." },
  { title: 'Confiance', description: 'Des relations durables avec nos partenaires producteurs et nos clients internationaux.' },
  { title: 'Durabilité', description: 'Des pratiques agricoles responsables et une logistique pensée pour limiter les pertes.' },
  { title: 'Proximité', description: 'Une équipe réactive, à l’écoute des besoins spécifiques de chaque marché.' },
]

export default function AboutPage() {
  useSEO({
    title: "À propos — Notre histoire depuis 1994",
    description:
      "Depuis 1994, IBL Primeurs accompagne les importateurs internationaux avec des fruits et légumes frais du Sénégal. Découvrez notre parcours, nos valeurs et notre marque Talay Afric Mango.",
    path: '/a-propos',
    image: coverPhoto,
  })

  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Plus de trois décennies au service de l'export sénégalais"
        description="Depuis 1994, IBL Primeurs accompagne les importateurs internationaux avec des fruits et légumes frais répondant aux exigences des marchés les plus compétitifs."
        imageSrc={coverPhoto}
      />

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <img
            src={aboutParcoursPhoto}
            alt="Producteur partenaire d'IBL Primeurs dans son champ au Sénégal"
            className="aspect-[4/3] w-full order-last rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)] lg:order-first"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
              Notre parcours
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Fondée en 1994, une expertise construite sur le long terme
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              <p className="text-base leading-relaxed text-ink-700">
                Fondée en 1994, IBL Primeurs s'est imposée comme un partenaire de
                confiance pour l'exportation de fruits et légumes frais depuis
                le Sénégal, en combinant savoir-faire agronomique et exigence
                qualité à chaque étape de la chaîne.
              </p>
              <p className="text-base leading-relaxed text-ink-700">
                Au fil des décennies, l'entreprise a structuré une logistique
                export fiable — chaîne du froid, contrôle qualité, traçabilité
                — pour répondre aux exigences les plus strictes des marchés
                internationaux.
              </p>
              <p className="text-base leading-relaxed text-ink-700">
                Aujourd'hui, IBL Primeurs continue de grandir en s'appuyant sur
                un réseau de producteurs partenaires rigoureusement sélectionnés
                et une équipe engagée au quotidien pour la satisfaction de ses
                clients.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-paper-100 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
              Nos valeurs
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Les principes qui façonnent chacune de nos expéditions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-display text-lg font-semibold text-ink-950">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
            Notre équipe
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-ink-950 sm:text-4xl">
            Des femmes et des hommes engagés pour la qualité
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700">
            Derrière chaque expédition se trouve une équipe mobilisée pour
            assurer la sélection des produits, le contrôle qualité, la
            préparation des commandes et le suivi logistique. Chaque étape
            est réalisée avec le même objectif : livrer des produits
            conformes aux attentes de nos partenaires internationaux.
          </p>
          <img
            src={aboutEquipePhoto}
            alt="Équipe d'IBL Primeurs lors de la récolte au champ"
            className="mt-10 aspect-[21/9] w-full rounded-[22px] object-cover shadow-[0_20px_45px_-20px_rgba(18,53,36,0.35)]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="bg-ink-950 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-400">
              Notre marque
            </p>
            <h2 className="font-display text-3xl font-bold text-paper-50 sm:text-4xl">
              Talay, notre signature à l'export
            </h2>
            <p className="mt-3 font-display text-sm font-semibold uppercase tracking-wide text-clay-400">
              African Mango
            </p>
            <div className="mt-5 flex flex-col gap-4">
              <p className="text-base leading-relaxed text-paper-100/70">
                Pour porter notre exigence sur les marchés internationaux, nous
                avons créé notre propre marque : Talay. Elle incarne notre
                engagement envers une sélection rigoureuse et une qualité
                constante, du verger jusqu'à la livraison.
              </p>
              <p className="text-base leading-relaxed text-paper-100/70">
                Chaque carton exporté sous cette marque reflète notre
                savoir-faire et la confiance que nous accordent nos partenaires
                importateurs depuis 1994.
              </p>
            </div>
          </div>
          <img
            src={talayBoxPhoto}
            alt="Carton d'export Talay d'IBL Primeurs rempli de mangues"
            className="w-full object-contain"
            width={1535}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <CTA />
    </>
  )
}
