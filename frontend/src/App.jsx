import { useEffect } from 'react'
import { useThemeStore } from './store/useThemeStore'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CareerDetails from './pages/CareerDetails'
import CareerPage from './pages/CareerPage'
import SolutionsPage from './pages/SolutionPage'
import ProductPage from './pages/ProductPage'
import BlogPage from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Scan2TwinPage from './pages/Scan2Twin'
import IndoorMapsPage from './pages/IndoorMapsPage'
import ContactPage from './pages/ContactPage'

function App() {
  
return (
  <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/career/:id" element={<CareerDetails />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/scan2twin" element={<Scan2TwinPage />} />
      <Route path="/indoormaps" element={<IndoorMapsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>

  </div>
)
}

export default App