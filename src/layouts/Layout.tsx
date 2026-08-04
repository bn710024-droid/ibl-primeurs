import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Layout() {
  return (
    <div className="min-h-screen bg-paper-50">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
