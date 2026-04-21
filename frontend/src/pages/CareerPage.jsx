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
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "Career"} minHeight="min-h-[451px]" />

        {/* Easy Steps Section */}
        {pageData.easySteps && (
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--bg)]">
            <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
              <div className="flex flex-col gap-4 sm:gap-6 mb-10 sm:mb-14 md:mb-16 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-['Titillium_Web'] text-[var(--text)] leading-tight tracking-tight">
                  {pageData.easySteps.sectionTitle}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text)] mx-auto max-w-3xl opacity-80 leading-relaxed">
                  {pageData.easySteps.sectionSubtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {pageData.easySteps.cards?.map((card, idx) => (
                  <div key={idx} className={`p-6 sm:p-8 rounded-[28px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 shadow-lg border ${
                    isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
                  }`}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600/10 dark:bg-blue-600/20 rounded-2xl text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 sm:mb-6">
                      <span className="text-xl sm:text-2xl font-black font-['Titillium_Web']">{idx + 1}</span>
                    </div>
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-extrabold font-['Titillium_Web'] mb-2 sm:mb-4 leading-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed opacity-80 ${
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
