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
import ImageGallerySection from '../components/ImageGallerySection';

import { Building2, Cog, Compass, Database, LayoutGrid, Search, Settings, ShieldCheck, Users } from 'lucide-react';
import { GeoPrinterCard1, GeoPrinterCard2, GeoPrinterCard3 } from '../components/UI/Svgs';

const workProcessSteps = [
  {
    title: "Input Data ",
    description: "Connect ArcGIS web maps and organization content.",
    icon: Search,
  },
  {
    title: "Configuration",
    description: "Select a built-in template or create a custom layout.",
    icon: LayoutGrid,
  },
  {
    title: "Rendering",
    description: "Preview the map layout before printing.",
    icon: Cog,
  },
  {
    title: "Export",
    description: "Create print-ready maps and share reusable templates across teams.",
    icon: Settings,
  }
];


export default function GeoPrinterPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ['geoPrinterPage'],
    queryFn: fetchGeoPrinterPage,
  });

  const pageData = data || geoPrinterPageData;
  const isDark = theme === 'dark';

  const cards = [
    {
      title: "Visual Builder",
      description: "Create custom layouts with drag-and-drop tools for maps, legends, and print pages.",
      icon: <GeoPrinterCard1 />,
    },
    {
      title: "ArcGIS-Ready",
      description:
        "Sign in with Esri and work with your organization’s ArcGIS web maps and content.",
      icon: <GeoPrinterCard2 />,
    },
    {
      title: "Print & Share ",
      description:
        "Preview print layouts, create professional map outputs, and keep templates consistent across projects.",
      icon: <GeoPrinterCard3 />,
    },
  ];

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "Geo Printer"} minHeight="min-h-[440px]" />

        {pageData.firstSolution && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14 py-10 sm:py-12`}>
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

        <section className="bg-[var(--bg)] px-6 sm:px-10 xl:px-14 pb-10 sm:pb-20">
          <div className="mx-auto max-w-[1440px]">
            {/* Header Section */}
            <div className="pb-10 max-w-4xl">
              <h2 className="font-Web heading-primary mb-4">
                Feature Section
              </h2>
              <p className="font-Inter text-subtitle">
                Build, preview, print, and share map layouts from one ArcGIS-ready workflow.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#09155F] text-white p-8 rounded-2xl flex flex-col gap-4 min-h-[320px] transition-transform hover:scale-[1.02]"
                >
                  <div className="text-white opacity-90">{card.icon}</div>

                  <h3 className="font-Web text-xl xl:text-[33px] font-bold leading-tight mt-2">
                    {card.title}
                  </h3>

                  <p className="font-Inter text-[15px] xl:text-[26px] text-blue-100 ">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
        <section className="bg-[#09155F] px-6 sm:px-10 pb-15 lg:pb-24 xl:px-14 mb-10 xl:mb-20">
          <WorkProcessSection
            title="How We Work"
            steps={workProcessSteps}
            length={workProcessSteps.length}
          />
        </section>

        <ImageGallerySection darkMode={isDark} pageData={pageData.imageGallery} />

        <section className='pt-5'>
          <CTA darkMode={isDark} CtaData={pageData.finalCta} />
        </section>
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
