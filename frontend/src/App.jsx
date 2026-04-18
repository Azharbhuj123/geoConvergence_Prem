import { useEffect } from 'react'
import { useThemeStore } from './store/useThemeStore'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CareerPage from './pages/CareerDetails'

function App() {
  
return (
  <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/career" element={<CareerPage />} />
    </Routes>

  </div>
)
}

export default App