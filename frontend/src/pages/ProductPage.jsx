import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchProductPage } from '../lib/api';
import Events from '../components/Events';
import { Services_Description } from '../components/Services_Description';
import { ProductPageData } from '../lib/data/productPageData';
import { urlFor } from '../lib/sanity';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

/* =========================
   CARD COMPONENT
========================= */
function ServicesCardPreview({ card, index }) {
    return (
        <Link to={card.button?.link || "#"}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -20% 0px" }}
                transition={{
                    duration: 0.8,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.1
                }}
                className="relative rounded-[30px] overflow-hidden group cursor-pointer h-[500px] lg:h-[650px] w-full shadow-2xl"
            >
                {/* Background Image with Parallax-like hover effect */}
                <img
                    src={card.image ? urlFor(card.image) : ""}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-75"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 transition-all duration-700 group-hover:to-black/90 group-hover:via-black/40" />

                {/* Content Container */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    {/* DEFAULT CONTENT */}
                    <div className="backdrop-blur-md bg-black/10 rounded-2xl p-6 lg:p-8 transition-opacity duration-.15 group-hover:opacity-0 group-hover:translate-y-10">
                        <h3 className="text-white text-3xl lg:text-5xl font-bold font-Web leading-tight mb-4">
                            {card.title}
                        </h3>
                        <span className="block text-lg px-4 py-1 rounded-full text-white text-sm font-bold mb-4 uppercase tracking-wider">
                            {card.subTitle}
                        </span>
                        <p className="text-white/80 text-lg lg:text-xl font-Inter leading-relaxed line-clamp-2">
                            {card.description || "Experience the next level of digital transformation with our integrated solutions."}
                        </p>
                    </div>

                    {/* HOVER OVERLAY (Revealed on hover) */}
                    <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end opacity-0 translate-y-20 transition-all duration-300 delay-.15 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="inline-block w-fit px-4 py-1 rounded-full bg-white text-blue-900 text-sm font-bold mb-4 uppercase tracking-wider hover:bg-[#09155F] hover:text-white transition-colors duration-300">
                            <a href={card.button?.link}>
                                {card.button?.text}
                            </a>
                        </span>
                        <h3 className="text-white text-3xl lg:text-5xl font-bold font-Web leading-tight mb-4">
                            {card.title}
                        </h3>
                        <p className="text-white/90 text-lg lg:text-xl font-Inter leading-relaxed">
                            {card.description || "Our advanced mapping and modeling tools provide unparalleled precision and insight for your enterprise assets."}
                        </p>
                        <div className="mt-8 h-1 w-24 bg-white rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

/* =========================
   PAGE
========================= */
export default function ProductPage() {
    const { theme, toggleTheme } = useThemeStore();

    const { data } = useQuery({
        queryKey: ['productPage'],
        queryFn: fetchProductPage,
    });

    const pageData = data || ProductPageData;

    return (
        <div className={theme === 'dark' ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />

            <main>
                {/* HERO */}
                <Hero
                    darkMode={theme === 'dark'}
                    hero={pageData.hero}
                    title="Our Products"
                    minHeight="!min-h-[250px]"
                />

                {/* =========================
                    MAIN SECTION
                ========================= */}
                <section className={`${theme === 'dark' ? 'dark' : ''}
               bg-[var(--bg)] px-6 py-20 sm:px-10 relative`}
                >
                    <div className="max-w-[1440px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                            {/* =========================
                                LEFT - STICKY (FIXED)
                            ========================= */}
                            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                    className="rounded-3xl p-8 lg:p-12 
                               shadow-[0_0_40px_rgba(15,23,42,0.12)] border-2 border-white 
                               mt-16"
                                >
                                    <Services_Description
                                        pageData={pageData.servicesIntro}
                                        theme={theme}
                                    />
                                </motion.div>
                            </div>

                            {/* =========================
                                RIGHT - SCROLL CARDS
                            ========================= */}
                            <div className="lg:col-span-7 space-y-28 lg:space-y-36 pt-0 lg:pt-16 xl:pt-24">
                                {pageData.howItWorks?.cards?.map((card, index) => (
                                    <div key={index} className="flex flex-col">
                                        <ServicesCardPreview
                                            card={card}
                                            index={index}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                {/* EVENTS */}
                {/* <section className="bg-[var(--slate-bg)] py-24">
                    <div className="max-w-[1440px] mx-auto">
                        <Events
                            darkMode={theme === 'dark'}
                            eventsData={pageData.events}
                            extraClass="!py-0"
                        />
                    </div>
                </section> */}

                {/* CTA */}
                <CTA
                    darkMode={theme === 'dark'}
                    CtaData={pageData.finalCta}
                />
            </main>

            <Footer darkMode={theme === 'dark'} />
        </div>
    );
}