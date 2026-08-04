const FIGURES = [
  { title: 'Depuis 1994', description: 'Une expertise construite sur le long terme.' },
  { title: 'Fruits & légumes frais', description: 'Sélectionnés selon des standards rigoureux.' },
  { title: 'Export international', description: "Europe • Maghreb • Afrique de l'Ouest." },
  { title: 'GlobalG.A.P. & GRASP', description: 'Engagement qualité.' },
]

export default function KeyFigures() {
  return (
    <section className="bg-ink-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {FIGURES.map((figure, index) => (
          <div
            key={figure.title}
            className={`border-paper-50/10 px-8 py-10 ${index > 0 ? 'border-t sm:border-t-0 sm:border-l' : ''}`}
          >
            <h2 className="font-display text-lg font-semibold text-paper-50">{figure.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-paper-100/55">{figure.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
