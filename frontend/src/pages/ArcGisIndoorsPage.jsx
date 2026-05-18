import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Building2, Compass, Database, LayoutGrid, Settings, ShieldCheck } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchArcGisIndoorsPage } from '../lib/api';
import { arcgisIndoorsPageData } from '../lib/data/arcgisIndoorsPageData';

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

export function FeatureCard({ title, description, icon, className = "", iconImage, }) {
  return (
    <Motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative min-h-[270px] sm:min-h-[290px] rounded-[20px] bg-[#020b4d] p-[30px] text-white shadow-lg transition-shadow duration-300 hover:shadow-xl ${className}`}
    >
      <div className="pr-28">
        <h3 className="font-Inter text-xl xl:text-3xl font-bold uppercase leading-tight text-white">
          {title}
        </h3>

        <p className="mt-4 font-Inter text-md xl:text-xl leading-6 text-white/82">
          {description}
        </p>
      </div>

      <div className="absolute bottom-6 right-6">
        {iconImage ? (
          <span className="flex h-16 w-16 sm:h-20 sm:w-20 xl:h-24 xl:w-24 items-center justify-center rounded-lg">
            <img
              src={urlFor(iconImage)}
              alt={title}
              className="w-14 h-14 sm:w-18 sm:h-18 xl:w-20 xl:h-20 object-contain transition-transform duration-500 ease-in-out group-hover:rotate-360"
            />
          </span>
        ) : (
          <span className="flex h-18 w-18 sm:h-24 sm:w-24 items-center justify-center rounded-lg bg-[#2f80d1] text-white shadow-lg shadow-black/20 transition-transform duration-500 ease-in-out group-hover:rotate-360">
            {icon && React.createElement(icon, { size: 58, strokeWidth: 2 })}
          </span>
        )}
      </div>
    </Motion.article>
  );
}

export default function ArcGisIndoorsPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data, isLoading } = useQuery({
    queryKey: ['arcgisIndoorsPage'],
    queryFn: fetchArcGisIndoorsPage,
  });

  const pageData = data || arcgisIndoorsPageData;
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
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "ArcGIS Indoors"} minHeight="min-h-[451px]" className="!max-w-[1440px]" maxWidth="!max-w-[653px]" />

        <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14 py-10 xl:py-10`}>
          {pageData.solutions?.map((solution, index) => (
            <div key={index} className={index === 1 ? 'bg-[var(--slate-bg)]' : ''}>
              <SolutionBlock
                title={solution.title}
                description={solution.description}
                button={solution.button ? { text: solution.button.text, link: solution?.button.link } : null}
                image={solution.image}
                imagePosition="left"
                darkMode={isDark}
                variant='section'
              />
            </div>
          ))}
        </section>
        {pageData.coreValues && (
          // <CoreValues
          //   title={pageData.coreValues.sectionTitle}
          //   cards={pageData.coreValues.cards}
          // />

          <section className="bg-[var(--bg)] px-6 pb-16 sm:px-10 lg:pb-24 xl:px-14">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
                {pageData.coreValues?.cards?.map((card) => (
                  <FeatureCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    iconImage={card.iconImage}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {pageData.howItWorks && (
          <Services
            darkMode={isDark}
            services={pageData.howItWorks}
            variant="blue"
            button={false}
            className={"!pb-0"}
            maxWidth={"!max-w-[1280px]"}
          />
        )}
        {pageData.keyServices && (
          <section className='bg-[var(--keyServices-bg)] px-6 sm:px-10 xl:px-14 py-10 sm:py-15 xl:py-20'>
            <div className="max-w-[1440px] mx-auto">
              {/* Cards grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-7`}>
                {pageData.keyServices?.cards?.map((step, index) => (
                  <div
                    key={index}
                    className="relative rounded-[20px] overflow-hidden group cursor-pointer h-[400px] sm:h-[450px] xl:h-[545px]"
                  >
                    {/* Background Image */}
                    <img
                      src={step.image ? urlFor(step.image) : ""}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                    />

                    {/* Gradient Overlay - Darker on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 transition-all duration-700 group-hover:to-black/85 group-hover:via-black/50" />

                    {/* Content Container - Slides UP on hover */}
                    <div className="absolute bottom-0 left-0 right-0">

                      {/* DEFAULT CONTENT (always visible) */}
                      <div className="backdrop-blur-md [mask-image:linear-gradient(to_top,black_75%,transparent)] bg-white/5 group-hover:opacity-0 p-6 sm:p-7 flex flex-col gap-2.5">
                        <h3 className="text-white text-2xl sm:text-3xl font-bold font-Web leading-8">
                          {step.title}
                        </h3>

                        <p className="text-white/90 text-base sm:text-lg font-Inter leading-6 line-clamp-3">
                          {step.description}
                        </p>
                      </div>

                      {/* HOVER OVERLAY (slides from bottom) */}
                      <div className="
                  backdrop-blur-sm absolute inset-0 p-6 sm:p-7 flex flex-col justify-end gap-2.5
                  transform translate-y-full
                  opacity-0
                  transition-all duration-700 ease-in-out
                  group-hover:translate-y-0 group-hover:opacity-100
                ">
                        <h3 className="text-white text-2xl sm:text-3xl font-bold font-Web leading-8">
                          {step.title}
                        </h3>

                        <p className="text-white/90 text-base sm:text-lg font-Inter leading-6">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        <section className="bg-[var(--bg)] px-6 py-14 sm:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto max-w-[1440px]">
            <Motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="font-Web heading-primary text-left"
            >
              {pageData.capabilitiesSection?.title}
            </Motion.h2>

            <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.58fr_1.12fr] xl:gap-14">
              <Motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <div className="relative aspect-[9/12] overflow-hidden rounded-[24px] bg-slate-200 shadow-2xl">
                  <img
                    src={pageData.capabilitiesSection?.image1 ? urlFor(pageData.capabilitiesSection.image1) : ""}
                    alt="ArcGIS Indoors 3D building visualization"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#020b4d]/25 via-transparent to-black/55 backdrop-blur-[1px]" />
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="grid gap-x-10 md:grid-cols-2"
              >
                {[0, 1].map((colIndex) => (
                  <ul key={colIndex} className={colIndex === 1 ? "md:border-l md:border-slate-100 md:pl-8" : ""}>
                    {pageData.capabilitiesSection?.capabilities?.slice(colIndex * 7, (colIndex + 1) * 7).map((capability) => (
                      <CapabilityItem key={capability} title={capability} />
                    ))}
                  </ul>
                ))}
              </Motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg)] px-6 pb-16 sm:px-10 lg:pb-24 xl:px-14">
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
              className="font-Intro text-subtitle text-left pt-4 !max-w-[948px]"
            >
              {pageData.facilityFeaturesSection?.subtitle}
            </Motion.p>

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
                const rows = [];

                for (let i = 0; i < cards.length; i += 3) {
                  rows.push(cards.slice(i, i + 3));
                }

                return rows;
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
                      gridClass = "grid-cols-1 md:grid-cols-2"; // 50/50
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
                                ? "!min-h-[166px]"
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
