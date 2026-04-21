import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchThreeDModelingPage } from '../lib/api';
import { threeDModelingPageData } from '../lib/data/threeDModelingPageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Services_Description from '../components/Services_Description';
import SolutionBlock from '../components/SolutionBlock';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function ThreeDModelingPage() {
  const { theme, toggleTheme } = useThemeStore();
  
  const { data } = useQuery({
    queryKey: ['threeDModelingPage'],
    queryFn: fetchThreeDModelingPage,
  });

  const pageData = data || threeDModelingPageData;
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
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "3D Modeling & Point-to-BIM"} minHeight="min-h-[451px]"/>

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
          <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--bg)]">
            <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-10 sm:mb-12 text-center lg:text-left flex flex-col gap-4 sm:gap-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-['Titillium_Web'] text-[var(--text)] leading-tight tracking-tight">
                {pageData.stats.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text)] opacity-80 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
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
