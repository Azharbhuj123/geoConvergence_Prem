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
import { fetchWhyPage } from '../lib/api';
import { whyPageData } from '../lib/data/whyPageData';

export default function WhyPage() {
    const { theme, toggleTheme } = useThemeStore();
    const isDark = theme === 'dark';

    const { data, isLoading } = useQuery({
        queryKey: ['whyPage'],
        queryFn: fetchWhyPage,
    });

    // Use fetched data or fallback
    const pageData = data || whyPageData;

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

                {/* Solution Block */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)] px-6 sm:px-10 xl:px-14 xl:pt-20`}>
                    <SolutionBlock
                        title={pageData.solutionBlock.title}
                        description={pageData.solutionBlock.description}
                        highlightText={pageData.solutionBlock.highlightText}
                        listItems={pageData.solutionBlock.listItems}
                        button={null}
                        image={pageData.solutionBlock.image}
                        imagePosition="left"
                        darkMode={isDark}
                        variant='section'
                    />
                </section>

                {/* Certifications */}
                <Certifications
                    data={pageData.certifications}
                    darkMode={isDark}
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

                {/* Case Studies */}
                <CaseStudies
                    data={pageData.caseStudies}
                    darkMode={isDark}
                />

                {/* Team & Leadership */}
                <TeamLeadership
                    data={pageData.teamLeadership}
                    darkMode={isDark}
                />

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
