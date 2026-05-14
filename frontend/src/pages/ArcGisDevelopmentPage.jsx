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

export function FeatureCard({ title, description, icon, className = "" }) {
  return (
    <Motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative h-[330px] rounded-[20px] bg-[#020b4d] p-[30px] text-white shadow-lg transition-shadow duration-300 hover:shadow-xl ${className}`}
    >
      <div className="pr-28">
        <h3 className="font-Web text-xl xl:text-3xl font-bold uppercase leading-tight text-white">
          {title}
        </h3>

        <p className="mt-4 font-Inter text-md xl:text-xl leading-6 text-white/82">
          {description}
        </p>
      </div>

      <div className="absolute bottom-6 right-6">
        <span className="flex h-18 w-18 sm:h-24 sm:w-24 items-center justify-center rounded-lg bg-[#2f80d1] text-white shadow-lg shadow-black/20">
          {React.createElement(icon, { size: 58, strokeWidth: 2 })}
        </span>
      </div>
    </Motion.article>
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
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "ArcGIS Indoors"} minHeight="min-h-[500px]" className="!max-w-[1440px]" />

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

        <section className="bg-[var(--bg)] px-6 sm:px-10 lg:pb-24 xl:px-14 pt-10 xl:pt-20">
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

            {/* <div className="mt-10 grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
              {pageData.facilityFeaturesSection?.cards?.map((card) => (
                <FeatureCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  icon={iconMap[card.icon] || Settings}
                />
              ))}
            </div> */}


            {(() => {
              const cards = pageData.facilityFeaturesSection?.cards || [];

              const getRows = () => {
                if (cards.length <= 3) return [cards];

                return [cards.slice(0, 3), cards.slice(3)];
              };

              const rows = getRows();

              return (
                <div className="mt-10 space-y-[30px]">
                  {rows.map((row, rowIndex) => {
                    const isLastRow =
                      rowIndex === rows.length - 1 && rows.length > 1;

                    let gridClass = "";

                    if (row.length === 1) {
                      gridClass = "grid-cols-1";
                    } else if (row.length === 2) {
                      gridClass = "grid-cols-1 md:grid-cols-2";
                    } else {
                      gridClass = "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";
                    }

                    return (
                      <div
                        key={rowIndex}
                        className={`grid gap-[30px] ${gridClass}`}
                      >
                        {row.map((card) => (
                          <FeatureCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            icon={iconMap[card.icon] || Settings}
                            className={
                              isLastRow
                                ? "!h-[205px]"
                                : ""
                            }
                          />
                        ))}
                      </div>
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
