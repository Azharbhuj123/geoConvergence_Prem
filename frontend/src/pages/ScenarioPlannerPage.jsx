import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchScenarioPlannerPage } from '../lib/api';
import { scenarioPlannerPageData } from '../lib/data/scenarioPlannerPageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function ScenarioPlannerPage() {
  const { theme, toggleTheme } = useThemeStore();
  
  const { data } = useQuery({
    queryKey: ['scenarioPlannerPage'],
    queryFn: fetchScenarioPlannerPage,
  });

  const pageData = data || scenarioPlannerPageData;
  const isDark = theme === 'dark';

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "Scenario Planner"} minHeight="min-h-[451px]"/>

        {pageData.firstSolution && (
          <section className="bg-[var(--bg)]">
            <SolutionBlock
              title={pageData.firstSolution.title}
              description={pageData.firstSolution.description}
              button={pageData.firstSolution.buttonText ? { text: pageData.firstSolution.buttonText, link: "#" } : null}
              image={pageData.firstSolution.image}
              imagePosition="right"
              darkMode={isDark}
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
            variant="blue" 
          />
        )}

        {pageData.secondSolution && (
          <section className="bg-[var(--slate-bg)]">
             <SolutionBlock
              title={pageData.secondSolution.title}
              description={pageData.secondSolution.description}
              button={pageData.secondSolution.buttonText ? { text: pageData.secondSolution.buttonText, link: "#" } : null}
              image={pageData.secondSolution.image}
              imagePosition="left"
              darkMode={isDark}
            />
          </section>
        )}

        {pageData.useCases && (
          <Services 
            darkMode={isDark} 
            services={pageData.useCases} 
            variant="default" 
          />
        )}

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
