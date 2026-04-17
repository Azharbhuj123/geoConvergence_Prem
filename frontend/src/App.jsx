import { useEffect } from 'react'
import { useThemeStore } from './store/useThemeStore'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
  const { theme } = useThemeStore()
   const { toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  
return (
  <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>

    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-gray-800 text-white rounded-full text-sm"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  </div>
)
}

export default App