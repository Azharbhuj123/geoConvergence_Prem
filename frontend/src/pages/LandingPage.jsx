import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import ProjectsMap from '../components/ProjectsMap'
import FeaturedProducts from '../components/FeaturedProducts'
import Clients from '../components/Clients'
import Events from '../components/Events'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useThemeStore } from '../store/useThemeStore'

export default function LandingPage() {
 const { theme } = useThemeStore()
   const { toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])


  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', transition: 'all 0.3s ease' }}>
      <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />
      <main>
        <Hero darkMode={theme === 'dark'} />
        <Services darkMode={theme === 'dark'} />
        <Stats darkMode={theme === 'dark'} />
        <ProjectsMap darkMode={theme === 'dark'} />
        <FeaturedProducts darkMode={theme === 'dark'} />
        <Clients darkMode={theme === 'dark'} />
        <Events darkMode={theme === 'dark'} />
        <Testimonials darkMode={theme === 'dark'} />
        <CTA darkMode={theme === 'dark'} />
      </main>
      <Footer darkMode={theme === 'dark'} />
    </div>
  )
}