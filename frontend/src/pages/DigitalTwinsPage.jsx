import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchDigitalTwinsPage } from '../lib/api';
import { digitalTwinsPageData } from '../lib/data/digitalTwinsPageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function DigitalTwinsPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ['digitalTwinsPage'],
    queryFn: fetchDigitalTwinsPage,
  });

  const pageData = data || digitalTwinsPageData;
  const isDark = theme === 'dark';

  // Parse Key Features into Stats component format
  const parsedStatsData = pageData.keyFeatures?.cards?.map(card => {
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
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "Digital Twins"} minHeight="min-h-[451px]" />

        {pageData.firstSolution && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
            <SolutionBlock
              title={pageData.firstSolution.title}
              description={pageData.firstSolution.description}
              button={pageData.firstSolution.buttonText ? { text: pageData.firstSolution.buttonText, link: "#" } : null}
              image={pageData.firstSolution.image}
              imagePosition="left"
              darkMode={isDark}
              variant='section'
            />
          </section>
        )}

        {pageData.coreValues && (
          <CoreValues
            title={pageData.coreValues.sectionTitle}
            cards={pageData.coreValues.cards}
          />
        )}

        {pageData.howItWorks && (
          <Services
            darkMode={isDark}
            services={pageData.howItWorks}
            variant="default"
            length={pageData.howItWorks.cards.length}
          />
        )}

        {pageData.secondSolution && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
            <SolutionBlock
              title={pageData.secondSolution.title}
              description={pageData.secondSolution.description}
              button={pageData.secondSolution.buttonText ? { text: pageData.secondSolution.buttonText, link: "#" } : null}
              image={pageData.secondSolution.image}
              imagePosition="left"
              darkMode={isDark}
              variant='section'
            />
          </section>
        )}

        {pageData.useCases && (
          <Services
            darkMode={isDark}
            services={pageData.useCases}
            variant="blue"
            length={pageData.useCases.cards.length}
          />
        )}

        {/* Easy Steps Section */}
        {pageData.keyFeatures && (
          <section className={`px-6 sm:px-10 xl:px-14 pt-10`}>
            <Services_Description
              pageData={pageData.keyFeatures}
              theme={theme}
              className="!py-0 !px-0"
            />
            <Stats
              darkMode={isDark}
              statsData={parsedStatsData}
              className="!px-0  py-[3.75rem]"
              extraClass="!text-lg sm:!text-xl"
            />
          </section>
        )}

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
