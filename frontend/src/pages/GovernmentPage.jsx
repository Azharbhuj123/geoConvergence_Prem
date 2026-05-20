import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import Certifications from '../components/Certifications';
import Clients from '../components/Clients';
import ContractVehicles from '../components/ContractVehicles';
import CaseStudies from '../components/CaseStudies';
import TeamLeadership from '../components/TeamLeadership';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchGovernmentPage } from '../lib/api';
import { governmentPageData } from '../lib/data/governmentPageData';
import Events from '../components/Events';

export default function GovernmentPage() {
    const { theme, toggleTheme } = useThemeStore();
    const isDark = theme === 'dark';

    const { data, isLoading } = useQuery({
        queryKey: ['governmentPage'],
        queryFn: fetchGovernmentPage,
    });

    // Use fetched data or fallback
    const pageData = data || governmentPageData;

    return (
        <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

            <main>
                {/* Hero */}
                <Hero
                    darkMode={isDark}
                    hero={pageData.hero}
                    title={pageData.hero.title}
                    minHeight="min-h-[550px]"
                />

                {/* Certifications */}
                <Certifications
                    data={pageData.certifications}
                    darkMode={isDark}
                    showButton={false}
                />

                {/* Clients Section */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
                    <Clients darkMode={isDark} />
                </section>

                {/* Contract Vehicles */}
                <ContractVehicles
                    data={pageData.contractVehicles}
                    darkMode={isDark}
                />
                {/* Events Section */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)]`}>
                    <Events
                        darkMode={theme === 'dark'}
                        eventsData={pageData.events}
                        extraClass={"!py-0 !pb-20"}
                    />
                </section>

                {/* Final CTA */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)]   pt-[2rem]`}>
                    <CTA
                        darkMode={isDark}
                        CtaData={pageData.finalCta}
                    />
                </section>
            </main>

            <Footer darkMode={isDark} />
        </div>
    );
}
