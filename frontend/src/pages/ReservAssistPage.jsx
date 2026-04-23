import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchReservAssistPage } from '../lib/api';
import { reservAssistPageData } from '../lib/data/reservAssistPageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function ReservAssistPage() {
  const { theme, toggleTheme } = useThemeStore();
  
  const { data } = useQuery({
    queryKey: ['reservAssistPage'],
    queryFn: fetchReservAssistPage,
  });

  const pageData = data || reservAssistPageData;
  const isDark = theme === 'dark';

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "ReservAssist"} minHeight="min-h-[451px]"/>

        {pageData.firstSolution && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
            <SolutionBlock
              title={pageData.firstSolution.title}
              description={pageData.firstSolution.description}
              button={pageData.firstSolution.buttonText ? { text: pageData.firstSolution.buttonText, link: "#" } : null}
              image={pageData.firstSolution.image}
              imagePosition="right"
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
            className={'!py-18'}
          />
        )}

        {pageData.secondSolution && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14 pb-18`}>
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
            button={false}
            className={'mb-18'}
          />
        )}
        <section className='py-10'>
          <CTA darkMode={isDark} CtaData={pageData.finalCta} />
        </section>
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
