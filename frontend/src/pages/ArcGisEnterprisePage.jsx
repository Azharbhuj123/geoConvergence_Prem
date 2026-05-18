import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Building2, Cog, Compass, Database, LayoutGrid, Search, Settings, ShieldCheck, Users } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchArcGisEnterprisePage } from '../lib/api';
import { arcgisEnterprisePageData } from '../lib/data/arcgisEnterprisePageData';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import WorkProcessSection from '../components/WorkProcessSection';
import { urlFor } from '../lib/sanity';

const iconMap = {
    Building2,
    LayoutGrid,
    Compass,
    ShieldCheck,
    Database,
    Settings
};

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

export function FeatureCard({ title, description, iconImage, className = "" }) {
    return (
        <Motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative h-[270px] rounded-[20px] bg-[#020b4d] p-[30px] text-white shadow-lg transition-shadow duration-300 hover:shadow-xl ${className}`}
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
                <div className="absolute bottom-6 right-6">
                    {iconImage ? (
                        <span className="flex h-16 w-16 sm:h-20 sm:w-20 xl:h-24 xl:w-24 items-center justify-center rounded-lg">
                            <img
                                src={urlFor(iconImage)}
                                alt={title}
                                className="w-14 h-14 sm:w-18 sm:h-18 xl:w-20 xl:h-20 object-contain"
                            />
                        </span>
                    ) : (
                        <span className="flex h-16 w-16 sm:h-20 sm:w-20 xl:h-24 xl:w-24 items-center justify-center rounded-lg bg-[#2f80d1] shadow-lg shadow-black/20">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                        </span>
                    )}
                </div>
            </div>
        </Motion.article>
    );
}

export default function ArcGisEnterprisePage() {
    const { theme, toggleTheme } = useThemeStore();

    const { data } = useQuery({
        queryKey: ['arcgisEnterprisePage'],
        queryFn: fetchArcGisEnterprisePage,
    });

    const pageData = data || arcgisEnterprisePageData;
    const isDark = theme === 'dark';

    return (
        <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

            <main>
                <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "ArcGIS Indoors"} minHeight="min-h-[800px]" className="!max-w-[1280px]" />

                <section className="bg-[var(--bg)] px-6 sm:px-10 pb-15 lg:pb-24 xl:px-14 pt-10 xl:pt-20">
                    <div className="mx-auto max-w-[1440px]">
                        <Motion.h2
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5 }}
                            className="font-Web heading-primary"
                        >
                            {pageData.coreValues?.sectionTitle}
                        </Motion.h2>

                        {/* <div className="mt-10 grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
                            {pageData.facilityFeaturesSection?.cards?.map((card) => (
                                <FeatureCard
                                    key={card.title}
                                    title={card.title}
                                    description={card.description}
                                    iconImage={card.iconImage}
                                />
                            ))}
                        </div> */}

                        {(() => {
                            const cards = pageData.coreValues?.cards || [];

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
                                                        iconImage={card.iconImage}
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

                {pageData.coreValues && (
                    <CoreValues
                        title={pageData.facilityFeaturesSection?.title}
                        subTitle={pageData.facilityFeaturesSection?.subTitle}
                        cards={pageData.facilityFeaturesSection.cards}
                        lastRowHeight="120px"

                    />
                )}

                <section className="bg-[var(--bg)] px-6 sm:px-10 xl:px-14">
                    <WorkProcessSection
                        title="How We Work"
                        steps={workProcessSteps}
                        variant="light"
                    />
                </section>
                <CTA darkMode={isDark} CtaData={pageData.finalCta} />
            </main>

            <Footer darkMode={isDark} />
        </div>
    );
}
