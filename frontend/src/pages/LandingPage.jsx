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
import { useQuery } from '@tanstack/react-query'
import { fetchLandingPage } from '../lib/api'

export default function LandingPage() {
    const { theme } = useThemeStore();
    const { toggleTheme } = useThemeStore();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['landingPage'],
        queryFn: fetchLandingPage,
    })


    const parsedStatsData = data?.stats?.cards?.map(card => {
        const valueStr = card?.number?.replace(/[^0-9]/g, '');
        const value = parseInt(valueStr) || null;
        const suffix = card?.number?.replace(/[0-9]/g, '');
        return {
            value,
            suffix,
            label: card?.label,
            iconImage: card?.iconImage,
        };
    });
    return (
        <div className={theme === 'dark' ? "dark" : ""}
        style={{ background: 'var(--bg)', color: 'var(--text)', transition: 'all 0.3s ease' }}>
            <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />
            <main>
                <Hero darkMode={theme === 'dark'} hero={data?.hero} minHeight="min-h-screen items-center" />
                <Services darkMode={theme === 'dark'} services={data?.services} variant='default' />
                <ProjectsMap 
                darkMode={theme === 'dark'}
                    title={data?.projectsMap?.title}
                    description={data?.projectsMap?.description}
                    button={data?.projectsMap?.button ? { text: data?.projectsMap?.button.text, link: data?.projectsMap?.button.link } : null}
                />
                <Stats darkMode={theme === 'dark'}
                    statsData={parsedStatsData}
                />
                <Clients darkMode={theme === 'dark'}
                    title={data?.clients?.title}
                    subTitle={data?.clients?.subTitle}
                    logos={data?.clients?.cards}
                />
                <Services darkMode={theme === 'dark'} services={data?.featuredProducts} variant='blue' />
                <Events darkMode={theme === 'dark'} eventsData={data?.events} />

                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)] pt-10`}>
                <Testimonials darkMode={theme === 'dark'}
                    pageData={data?.testimonials}
                />
                </section>
                <CTA darkMode={theme === 'dark'} CtaData={data?.finalCta} />
            </main>
            <Footer darkMode={theme === 'dark'} />
        </div>
    )
}