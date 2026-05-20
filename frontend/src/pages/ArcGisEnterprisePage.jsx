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
import { FeatureCard } from './ArcGisIndoorsPage';

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
        title: "Discover",
        description: "Understand users, data, workflows, systems, constraints, and priorities.",
        icon: Search,
    },
    {
        title: "Plan",
        description: "Understand users, data, workflows, systems, constraints, and priorities.",
        icon: LayoutGrid,
    },
    {
        title: "Implement",
        description: "Define the architecture, migration path, deployment approach, and data requirements.",
        icon: Cog,
    },
    {
        title: "Optimize",
        description: "Tune performance, improve configuration, and resolve workflow or reliability gaps.",
        icon: Settings,
    },
    {
        title: "Manage",
        description: "Support the environment through administration, monitoring, maintenance, and issue resolution.",
        icon: Users,
    },
];

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
                <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "ArcGIS Indoors"} minHeight="min-h-[640px]" className="!max-w-[1280px]" maxWidth="!max-w-[964px]" />

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

                {pageData.coreValues && (
                    <section id="operational-capabilities">
                        <CoreValues
                            title={pageData.facilityFeaturesSection?.title}
                            subTitle={pageData.facilityFeaturesSection?.subTitle}
                            cards={pageData.facilityFeaturesSection.cards}
                            lastRowHeight="120px"
                            maxWidth="!max-w-[1072px]"
                        />
                    </section>
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
