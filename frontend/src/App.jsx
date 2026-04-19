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
import LidarScanningPage from './pages/LidarScanningPage'
import ThreeDModelingPage from './pages/ThreeDModelingPage'
import ArcGisIndoorsPage from './pages/ArcGisIndoorsPage'
import DigitalTwinsPage from './pages/DigitalTwinsPage'
import ReservAssistPage from './pages/ReservAssistPage'
import GeoPrinterPage from './pages/GeoPrinterPage'
import ScenarioPlannerPage from './pages/ScenarioPlannerPage'
import RoomReservPage from './pages/RoomReservPage'

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
      <Route path="/lidar-scanning" element={<LidarScanningPage />} />
      <Route path="/3d-modeling" element={<ThreeDModelingPage />} />
      <Route path="/arcgis-indoors" element={<ArcGisIndoorsPage />} />
      <Route path="/digital-twins" element={<DigitalTwinsPage />} />
      <Route path="/reserv-assist" element={<ReservAssistPage />} />
      <Route path="/geo-printer" element={<GeoPrinterPage />} />
      <Route path="/scenario-planner" element={<ScenarioPlannerPage />} />
      <Route path="/room-reserv" element={<RoomReservPage />} />
    </Routes>

  </div>
)
}

export default App