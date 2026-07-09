import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import FeaturedProducts from '../components/FeaturedProducts'
import Events from '../components/Events'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useThemeStore } from '../store/useThemeStore'
import { useQuery } from '@tanstack/react-query'
import { connectArcGISPage } from '../lib/api'
import SolutionBlock from '../components/SolutionBlock'

export default function ConnectArcGISPage() {
    const { theme } = useThemeStore();
    const { toggleTheme } = useThemeStore();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['connectArcGISPage'],
        queryFn: connectArcGISPage,
    })

    return (
        <div className={theme === 'dark' ? "dark" : ""}
            style={{ background: 'var(--bg)', color: 'var(--text)', transition: 'all 0.3s ease' }}>
            <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />
            <main>
                <Hero darkMode={theme === 'dark'} hero={data?.hero} minHeight="min-h-[451px" />
                <section className="bg-[var(--bg)] px-6 py-12 sm:px-8 md:py-16 lg:px-14">
                    <SolutionBlock
                        title={data?.firstSolution.title}
                        description={data?.firstSolution.description}
                        button={null}
                        image={data?.firstSolution.image}
                        imagePosition="right"
                        variant="section"
                    />
                </section>

                <Services darkMode={theme === 'dark'} services={data?.featuredProducts} variant='blue' button={null} />

                <section className="pt-10 sm:pt-20">
                    <CTA darkMode={theme === 'dark'} CtaData={data?.finalCta} showButton2={false} />
                </section>
            </main>
            <Footer darkMode={theme === 'dark'} />
        </div>
    )
}
