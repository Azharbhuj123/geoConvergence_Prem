import { useEffect } from 'react'
import { useThemeStore } from './store/useThemeStore'

function App() {
  const { theme } = useThemeStore()
   const { toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  
  return <div>
    <p className='heading'>Welcome to the GeoConvergence App</p>
    <button onClick={toggleTheme}>Toggle Theme</button>
  </div>
}

export default App