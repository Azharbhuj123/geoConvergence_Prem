import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchCareerPage } from '../lib/api';
import { careerPageData } from '../lib/data/careerPageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import CoreValues from '../components/CoreValues';
import OpenPositions from '../components/OpenPositions';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function CareerPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ['careerPage'],
    queryFn: fetchCareerPage,
  });

  const pageData = data || careerPageData;
  const isDark = theme === 'dark';

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "Career"} />

        {/* Easy Steps Section */}
        {pageData.easySteps && (
          <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-14 bg-[var(--bg)]">
            <div className="max-w-[1440px] mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold font-['Titillium_Web'] text-[var(--text)] mb-6">
                {pageData.easySteps.sectionTitle}
              </h2>
              <p className="text-xl text-[var(--text)] mx-auto max-w-3xl opacity-80 mb-16">
                {pageData.easySteps.sectionSubtitle}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pageData.easySteps.cards?.map((card, idx) => (
                  <div key={idx} className={`p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-2 shadow-sm border ${
                    isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'
                  }`}>
                    {/* Placeholder for icon if image is not provided strictly */}
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl text-blue-600 dark:text-blue-300 flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold">{idx + 1}</span>
                    </div>
                    <h3 className={`text-2xl font-bold font-['Titillium_Web'] mb-4 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Meet the Team */}
        {pageData.meetTheTeam && (
          <section className="bg-[var(--bg)]">
            <SolutionBlock
              title={pageData.meetTheTeam.title}
              description={pageData.meetTheTeam.description}
              image={pageData.meetTheTeam.image}
              imagePosition="right"
              darkMode={isDark}
            />
          </section>
        )}

        {/* Core Values */}
        {pageData.coreValues && (
          <CoreValues 
            title={pageData.coreValues.sectionTitle} 
            cards={pageData.coreValues.cards} 
          />
        )}

        {/* Open Positions */}
        {pageData.openPositions && (
          <OpenPositions 
            title={pageData.openPositions.sectionTitle}
            subtitle={pageData.openPositions.sectionSubtitle}
            jobs={pageData.openPositions.jobs}
          />
        )}

        {/* Testimonials */}
        <Testimonials darkMode={isDark} />

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
