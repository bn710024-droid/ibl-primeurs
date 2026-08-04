import Hero from '../components/Hero'
import KeyFigures from '../components/KeyFigures'
import Presentation from '../components/Presentation'
import ProductsTeaser from '../components/ProductsTeaser'
import QualityCommitment from '../components/QualityCommitment'
import MarketsTeaser from '../components/MarketsTeaser'
import CTA from '../components/CTA'
import { useSEO } from '../lib/useSEO'

export default function HomePage() {
  useSEO({
    title: 'Exportateur de fruits et légumes frais du Sénégal',
    description:
      "IBL Primeurs exporte des fruits et légumes frais depuis le Sénégal vers l'Europe, le Maghreb et l'Afrique de l'Ouest depuis 1994. Qualité, traçabilité et logistique fiable pour importateurs et distributeurs.",
    path: '/',
  })

  return (
    <>
      <Hero />
      <KeyFigures />
      <Presentation />
      <ProductsTeaser />
      <QualityCommitment />
      <MarketsTeaser />
      <CTA />
    </>
  )
}
