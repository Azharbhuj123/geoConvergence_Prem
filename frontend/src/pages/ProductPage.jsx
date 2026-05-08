// import { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import SolutionBlock from '../components/SolutionBlock';
// import CTA from '../components/CTA';
// import Footer from '../components/Footer';
// import { useThemeStore } from '../store/useThemeStore';
// import { useQuery } from '@tanstack/react-query';
// import { fetchProductPage } from '../lib/api';   // Create this query
// import Events from '../components/Events';
// import { Services_Description } from '../components/Services_Description';
// import { ProductPageData } from '../lib/data/productPageData';

// export default function ProductPage() {
//     const { theme } = useThemeStore();
//     const { toggleTheme } = useThemeStore();

//     const { data, isLoading } = useQuery({
//         queryKey: ['productPage'],
//         queryFn: fetchProductPage,
//     });
//     // Use fetched data or fallback
//     const pageData = data || ProductPageData;

//     console.log('Product Page Data:', pageData);


//     return (
//         <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>
//             <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />

//             <main>
//                 {/* Hero */}
//                 <Hero
//                     darkMode={theme === 'dark'}
//                     hero={pageData.hero}
//                     title="Solutions"
//                     minHeight="min-h-[451px]"
//                 />

//                 {/* Services Intro */}
//                 {/* <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)] px-6 py-10 sm:px-10 sm:py-20 xl:px-14 xl:py-24`}>
//                     <div className=" sm:sticky top-24 z-10 bg-[var(--bg)] p-8 rounded-md shadow-lg">
//                         <Services_Description
//                             pageData={pageData.servicesIntro}
//                             theme={theme}
//                         />
//                     </div>
//                     {pageData.solutions.map((solution, index) => (
//                         <SolutionBlock
//                             key={index}
//                             title={solution.title}
//                             description={solution.description}
//                             highlightText={solution?.highlightText}
//                             description2={solution.description2}
//                             button={{ text: solution?.button?.text, link: solution?.button?.link }}
//                             image={solution.image}
//                             imagePosition={index % 2 === 0 ? "left" : "right"}
//                             darkMode={theme === 'dark'}
//                         />
//                     ))}
//                 </section> */}
//                 <section
//                     className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)] px-6 py-10 sm:px-10 sm:py-20 xl:px-14 xl:py-24 relative`}
//                 >
//                     <div className="grid grid-cols-1 lg:grid-cols-8 gap-10">

//                         {/* Sticky Left Side */}
//                         <div className="lg:col-span-4 self-start">
//                             <div className="sticky top-24">
//                                 <Services_Description
//                                     pageData={pageData.servicesIntro}
//                                     theme={theme}
//                                 />
//                             </div>
//                         </div>

//                         {/* Right Side Solution Blocks */}
//                         <div className="lg:col-span-4">
//                             {pageData.solutions.map((solution, index) => (
//                                 <SolutionBlock
//                                     key={index}
//                                     title={solution.title}
//                                     description={solution.description}
//                                     description2={solution.description2}
//                                     button={{
//                                         text: solution?.button?.text,
//                                         link: solution?.button?.link
//                                     }}
//                                     image={solution.image}
//                                     imagePosition={index % 2 === 0 ? "left" : "right"}
//                                     darkMode={theme === 'dark'}
//                                     showImage={false}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </section>


//                 {/* Solution Blocks */}
//                 <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)]`}>
//                     <Events
//                         darkMode={theme === 'dark'}
//                         eventsData={pageData.events}
//                         extraClass={"!py-0 !pb-20"}
//                     />
//                 </section>

//                 {/* Final CTA */}
//                 <CTA
//                     darkMode={theme === 'dark'}
//                     CtaData={pageData.finalCta}
//                 />
//             </main>

//             <Footer darkMode={theme === 'dark'} />
//         </div>
//     );
// }


import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchProductPage } from '../lib/api';
import Events from '../components/Events';
import { Services_Description } from '../components/Services_Description';
import { ProductPageData } from '../lib/data/productPageData';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ProductPage() {
    const { theme } = useThemeStore();
    const { toggleTheme } = useThemeStore();

    const { data, isLoading } = useQuery({
        queryKey: ['productPage'],
        queryFn: fetchProductPage,
    });

    const pageData = data || ProductPageData;

    // Refs for scroll control
    const sectionRef = useRef(null);
    const leftPanelRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Smooth progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform values for Apple-like feel
    const leftY = useTransform(smoothProgress, [0, 1], [0, -80]);
    const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.4]);

    return (
        <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />

            <main>
                {/* Hero */}
                <Hero
                    darkMode={theme === 'dark'}
                    hero={pageData.hero}
                    title="Solutions"
                    minHeight="min-h-[451px]"
                />

                {/* Apple-style Solutions Section */}
                <section
                    ref={sectionRef}
                    className={`${theme === 'dark' ? 'dark' : ''} 
               bg-[var(--bg)] px-6 py-20 sm:px-10 relative`}
                >
                    <div className="max-w-[1440px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                            {/* LEFT PANEL - STICKY */}
                            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                    className="bg-[var(--bg)] rounded-3xl p-8 lg:p-12 
                               shadow-xl border border-[var(--border)] 
                               mt-16"
                                >
                                    <Services_Description
                                        pageData={pageData.servicesIntro}
                                        theme={theme}
                                    />
                                </motion.div>
                            </div>

                            {/* RIGHT SIDE - SCROLLABLE CONTENT */}
                            <div className="lg:col-span-7 space-y-28 lg:space-y-36">
                                {pageData.solutions.map((solution, index) => {
                                    const isEven = index % 2 === 0;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 80 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false, margin: "-120px" }}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <SolutionBlock
                                                title={solution.title}
                                                description={solution.description}
                                                description2={solution.description2}
                                                highlightText={solution?.highlightText}
                                                button={{
                                                    text: solution?.button?.text,
                                                    link: solution?.button?.link
                                                }}
                                                image={solution.image}
                                                imagePosition={isEven ? "left" : "right"}
                                                darkMode={theme === 'dark'}
                                                showImage={false}
                                            />

                                            {index < pageData.solutions.length - 1 && (
                                                <div className="hidden lg:block h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent my-20" />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </section>

                {/* Events Section */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)]`}>
                    <Events
                        darkMode={theme === 'dark'}
                        eventsData={pageData.events}
                        extraClass={"!py-0 !pb-20"}
                    />
                </section>

                {/* Final CTA */}
                <CTA
                    darkMode={theme === 'dark'}
                    CtaData={pageData.finalCta}
                />
            </main>

            <Footer darkMode={theme === 'dark'} />
        </div>
    );
}