import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchProductPage } from '../lib/api';   // Create this query
import Events from '../components/Events';
import { Services_Description } from '../components/Services_Description';
import { ProductPageData } from '../lib/data/productPageData';

export default function ProductPage() {
    const { theme } = useThemeStore();
    const { toggleTheme } = useThemeStore();

    const { data, isLoading } = useQuery({
        queryKey: ['productPage'],
        queryFn: fetchProductPage,
    });
    // Use fetched data or fallback
    const pageData = data || ProductPageData;

    console.log("pageData", pageData);


    return (
        <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />

            <main>
                {/* Hero */}
                <Hero
                    darkMode={theme === 'dark'}
                    hero={pageData.hero}
                    title="Solutions"
                    minHeight="min-h-[451px]"
                />

                {/* Services Intro */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)] px-6 py-10 sm:px-10 sm:py-20 xl:px-14 xl:py-24`}>
                    <Services_Description
                        pageData={pageData.servicesIntro}
                        theme={theme}
                    />

                    {/* Solution Blocks */}
                    {pageData.solutions.map((solution, index) => (
                        <SolutionBlock
                            key={index}
                            title={solution.title}
                            description={solution.description}
                            description2={solution.description2}
                            button={{ text: solution?.button?.text, link: solution?.button?.link }}
                            image={solution.image}
                            imagePosition={index % 2 === 0 ? "left" : "right"}
                            darkMode={theme === 'dark'}
                        />
                    ))}
                </section>


                {/* Solution Blocks */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)]`}>
                    <Events
                        darkMode={theme === 'dark'}
                        eventsData={pageData.events}
                    />
                </section>

                {/* Final CTA */}
                <CTA
                    darkMode={theme === 'dark'}
                    CtaData={pageData.finalCta}
                />
            </main>

            <Footer darkMode={theme === 'dark'} />
        </div>
    );
}