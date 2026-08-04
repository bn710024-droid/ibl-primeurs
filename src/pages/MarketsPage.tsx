import PageHero from '../components/PageHero'
import MarketsMap from '../components/MarketsMap'
import CTA from '../components/CTA'

const REGIONS = [
  {
    title: 'Union Européenne',
    description: "L'Union européenne représente l'un de nos principaux marchés. Nos produits sont préparés pour répondre aux exigences de qualité et de fraîcheur attendues par les professionnels européens.",
  },
  {
    title: 'Maroc',
    description: 'Grâce à la proximité géographique, nous accompagnons nos partenaires marocains avec des solutions d’approvisionnement adaptées à leurs besoins.',
  },
  {
    title: 'Maghreb',
    description: 'Nous développons des relations commerciales avec plusieurs acteurs de la région en proposant des produits conformes aux standards internationaux.',
  },
  {
    title: "Afrique de l'Ouest",
    description: 'Notre présence régionale nous permet d’assurer un approvisionnement fiable auprès de partenaires situés en Afrique de l’Ouest.',
  },
]

const SHIPPING = [
  { title: 'Transport maritime', description: 'Pour les expéditions en conteneurs de produits frais.' },
  { title: 'Transport aérien', description: 'Pour les produits nécessitant une livraison rapide.' },
  { title: 'Conditionnement adapté', description: 'Des emballages conçus pour protéger les produits pendant le transport.' },
  { title: 'Documentation export', description: "Préparation des documents nécessaires à l'expédition internationale." },
]

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Marchés"
        title="Connecter le Sénégal aux marchés internationaux"
        description="Depuis le Sénégal, IBL Primeurs accompagne les importateurs, grossistes et distributeurs avec des solutions d'approvisionnement adaptées aux exigences de chaque marché. Notre expertise nous permet de répondre aux attentes de partenaires recherchant qualité, régularité et fiabilité."
      />

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
              Nos destinations
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Des marchés exigeants, une même exigence de qualité
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {REGIONS.map((region) => (
              <div key={region.title} className="border-l-2 border-clay-500 pl-5">
                <h3 className="font-display text-lg font-bold text-ink-950">{region.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-700">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-100 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-clay-500">
              Logistique
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Une organisation pensée pour l'export
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-700">
              Chaque expédition est préparée en fonction des exigences du
              client, du produit et de la destination. Notre équipe veille à
              organiser les opérations afin de préserver la qualité des
              produits tout au long de leur acheminement.
            </p>
          </div>

          <p className="mb-8 text-center font-display text-sm font-bold uppercase tracking-wide text-ink-500">
            Nos solutions d'expédition
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SHIPPING.map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-clay-500 text-sm font-bold text-ink-950">
                  {index + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Une présence tournée vers l'international
            </h2>
          </div>
          <MarketsMap />
        </div>
      </section>

      <CTA
        title="Construisons un partenariat durable"
        description="Vous recherchez un fournisseur de fruits et légumes frais au Sénégal ? Notre équipe est prête à étudier votre projet et à vous accompagner dans vos futurs approvisionnements."
      />
    </>
  )
}
