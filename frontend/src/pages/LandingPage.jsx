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
import { client } from '../lib/sanity'
import { useQuery } from '@tanstack/react-query'
import { fetchLandingPage } from '../lib/api'

export default function LandingPage() {
    const { theme } = useThemeStore();
    const { toggleTheme } = useThemeStore();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['landingPage'],
        queryFn: fetchLandingPage,
    })  
    
    return (
        <div style={{ background: 'var(--bg)', color: 'var(--text)', transition: 'all 0.3s ease' }}>
            <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />
            <main>
                <Hero darkMode={theme === 'dark'} hero={data?.hero} minHeight="min-h-screen !items-center" />
                <Services darkMode={theme === 'dark'} services={data?.services} variant='default' />
                <ProjectsMap darkMode={theme === 'dark'} />
                <Stats darkMode={theme === 'dark'} />
                <Clients darkMode={theme === 'dark'} />
                <Services darkMode={theme === 'dark'} services={data?.featuredProducts} variant='blue' />
                <Events darkMode={theme === 'dark'} eventsData={data?.events} />
                <Testimonials darkMode={theme === 'dark'} />
                <CTA darkMode={theme === 'dark'} CtaData={data?.finalCta} />
            </main>
            <Footer darkMode={theme === 'dark'} />
        </div>
    )
}