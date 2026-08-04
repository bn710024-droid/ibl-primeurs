import Hero from '../components/Hero'
import KeyFigures from '../components/KeyFigures'
import Presentation from '../components/Presentation'
import ProductsTeaser from '../components/ProductsTeaser'
import QualityCommitment from '../components/QualityCommitment'
import MarketsTeaser from '../components/MarketsTeaser'
import CTA from '../components/CTA'

export default function HomePage() {
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
