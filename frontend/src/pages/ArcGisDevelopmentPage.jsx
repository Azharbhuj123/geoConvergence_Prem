import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Building2, Compass, Database, LayoutGrid, Settings, ShieldCheck } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchArcGisDevelopmentPage } from '../lib/api';
import { arcgisDevelopmentPageData } from '../lib/data/arcgisDevelopmentPageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import { Services_Description } from '../components/Services_Description';
import SolutionBlock from '../components/SolutionBlock';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Services from '../components/Services';
import { urlFor } from '../lib/sanity';
import { FeatureCard } from './ArcGisIndoorsPage';

const iconMap = {
  Building2,
  LayoutGrid,
  Compass,
  ShieldCheck,
  Database,
  Settings
};

function CapabilityItem({ title }) {
  return (
    <li className="flex items-start gap-4 border-b border-slate-200 py-4 last:border-b-0">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#0f172a]/20 bg-white shadow-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-[#020b4d]" />
      </span>
      <span className="font-Inter text-subtitle text-[var(--text)]">
        {title}
      </span>
    </li>
  );
}

export default function ArcGisDevelopmentPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data, isLoading } = useQuery({
    queryKey: ['arcgisDevelopmentPage'],
    queryFn: fetchArcGisDevelopmentPage,
  });

  const pageData = data || arcgisDevelopmentPageData;
  const isDark = theme === 'dark';

  const parsedStatsData = pageData.stats?.cards?.map(card => {
    const valueStr = card.number.replace(/[^0-9]/g, '');
    const value = parseInt(valueStr) || null;
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
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "ArcGIS Indoors"} minHeight="min-h-[451px]" className="!max-w-[1440px]" />

        <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14 py-12 sm:py-16`}>
          {pageData.solutions?.map((solution, index) => (
            <div key={index} className={index === 1 ? 'bg-[var(--slate-bg)]' : ''}>
              <SolutionBlock
                title={solution.title}
                description={solution.description}
                button={solution.button ? { text: solution.button.text, link: solution?.button.link } : null}
                image={solution.image}
                imagePosition="left"
                darkMode={isDark}
                variant="section"
              />
            </div>
          ))}
        </section>
        {pageData.coreValues && (
          <CoreValues
            title={pageData.coreValues.sectionTitle}
            cards={pageData.coreValues.cards}
          />
        )}

        <section className="bg-[var(--bg)] px-6 sm:px-10 pb-10 sm:pb-16 lg:pb-24 xl:px-14 pt-10 xl:pt-20" id="solutions-support">
          <div className="mx-auto max-w-[1440px]">
            <Motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="font-Web heading-primary"
            >
              {pageData.facilityFeaturesSection?.title}
            </Motion.h2>
            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="font-Intro text-subtitle text-left pt-4 sm:max-w-[700px]"
            >
              {pageData.facilityFeaturesSection?.subtitle}
            </Motion.p>


            {(() => {
              const cards = pageData.facilityFeaturesSection?.cards || [];

              const getRows = () => {
                if (cards.length <= 3) return [cards];

                return [cards.slice(0, 3), cards.slice(3)];
              };

              const rows = getRows();

              return (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-[30px]">
                  {cards.map((card, index) => {
                    const total = cards.length;

                    let xlSpan = "xl:col-span-2";

                    // Last 2 cards become 50/50 on xl
                    if (total === 5 && index >= 3) {
                      xlSpan = "xl:col-span-3";
                    }

                    return (
                      <FeatureCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        icon={iconMap[card.icon] || Settings}
                        className={`
          ${xlSpan}
          ${index >= 3 && total === 5
                            ? "!min-h-[166px]"
                            : "!min-h-[290px]"
                          }
        `}
                      />
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </section>

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
