import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchArcGisIndoorsPage } from '../lib/api';
import { arcgisIndoorsPageData } from '../lib/data/arcgisIndoorsPageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Services_Description from '../components/Services_Description';
import SolutionBlock from '../components/SolutionBlock';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function ArcGisIndoorsPage() {
  const { theme, toggleTheme } = useThemeStore();
  
  const { data } = useQuery({
    queryKey: ['arcgisIndoorsPage'],
    queryFn: fetchArcGisIndoorsPage,
  });

  const pageData = data || arcgisIndoorsPageData;
  const isDark = theme === 'dark';

  const parsedStatsData = pageData.stats?.cards?.map(card => {
    const valueStr = card.number.replace(/[^0-9]/g, '');
    const value = parseInt(valueStr) || 0;
    const suffix = card.number.replace(/[0-9]/g, '');
    return {
      value,
      suffix,
      label: card.label,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    };
  });

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "ArcGIS Indoors"} />

        {pageData.coreValues && (
          <CoreValues 
            title={pageData.coreValues.sectionTitle} 
            cards={pageData.coreValues.cards} 
          />
        )}

        <Services_Description pageData={pageData} theme={theme} />

        <section className={`bg-[var(--bg)]`}>
            {pageData.solutions?.map((solution, index) => (
                <div key={index} className={index === 1 ? 'bg-[var(--slate-bg)]' : ''}>
                  <SolutionBlock
                      title={solution.title}
                      description={solution.description}
                      button={solution.buttonText ? { text: solution.buttonText, link: "#" } : null}
                      image={solution.image}
                      imagePosition={index % 2 === 0 ? "right" : "left"}
                      darkMode={isDark}
                  />
                </div>
            ))}
        </section>

        {pageData.stats && (
          <div className="py-12 bg-[var(--bg)]">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-['Titillium_Web'] text-[var(--text)] mb-4">
                {pageData.stats.sectionTitle}
              </h2>
              <p className="text-xl text-[var(--text)] text-opacity-80 max-w-3xl">
                {pageData.stats.sectionSubtitle}
              </p>
            </div>
            <Stats 
              darkMode={isDark} 
              statsData={parsedStatsData}
            />
          </div>
        )}

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
