import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const QualityPage = lazy(() => import('./pages/QualityPage'))
const MarketsPage = lazy(() => import('./pages/MarketsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="produits" element={<ProductsPage />} />
          <Route path="qualite" element={<QualityPage />} />
          <Route path="marches" element={<MarketsPage />} />
          <Route path="galerie" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
