import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchGeoPrinterPage } from '../lib/api';
import { geoPrinterPageData } from '../lib/data/geoPrinterPageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import WorkProcessSection from '../components/WorkProcessSection';

import { Building2, Cog, Compass, Database, LayoutGrid, Search, Settings, ShieldCheck, Users } from 'lucide-react';

const workProcessSteps = [
    {
        title: "1. Discover",
        description: "Understand users, data, workflows, systems, constraints, and priorities.",
        icon: Search,
    },
    {
        title: "2. Plan",
        description: "Understand users, data, workflows, systems, constraints, and priorities.",
        icon: LayoutGrid,
    },
    {
        title: "3. Implement",
        description: "Define the architecture, migration path, deployment approach, and data requirements.",
        icon: Cog,
    },
    {
        title: "4. Optimize",
        description: "Tune performance, improve configuration, and resolve workflow or reliability gaps.",
        icon: Settings,
    },
    {
        title: "5. Manage",
        description: "Support the environment through administration, monitoring, maintenance, and issue resolution.",
        icon: Users,
    },
];


export default function GeoPrinterPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ['geoPrinterPage'],
    queryFn: fetchGeoPrinterPage,
  });

  const pageData = data || geoPrinterPageData;
  const isDark = theme === 'dark';

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "Geo Printer"} minHeight="min-h-[451px]" />

        {pageData.firstSolution && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14 py-10 sm:py-20`}>
            <SolutionBlock
              title={pageData.firstSolution.title}
              description={pageData.firstSolution.description}
              description2={pageData.firstSolution.description2}
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

        {/* {pageData.howItWorks && (
          <Services
            darkMode={isDark}
            services={pageData.howItWorks}
            variant="default"
            length={pageData.howItWorks.cards.length}
          />
        )} */}

        <section className="bg-[#09155F] px-6 sm:px-10 pb-15 lg:pb-24 xl:px-14 mb-10 xl:mb-20">
          <WorkProcessSection
            title="How We Work"
            steps={workProcessSteps}
          />
        </section>

        <section className='pt-5'>
          <CTA darkMode={isDark} CtaData={pageData.finalCta} />
        </section>
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
