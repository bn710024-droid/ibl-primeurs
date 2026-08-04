import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import QualityPage from './pages/QualityPage'
import MarketsPage from './pages/MarketsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="a-propos" element={<AboutPage />} />
        <Route path="produits" element={<ProductsPage />} />
        <Route path="qualite" element={<QualityPage />} />
        <Route path="marches" element={<MarketsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
