import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionBlock from '../components/SolutionBlock';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useThemeStore } from '../store/useThemeStore';
import { useQuery } from '@tanstack/react-query';
import { fetchProductPage } from '../lib/api';   // Create this query
import Events from '../components/Events';


// You can put this in lib/data/solutionsData.js or use as fallback
const ProductPageData = {
    announcement: {
        text: "Experience Scan2Twin in action — book your live demo today."
    },

    hero: {
        title: "Feature Page",
        backgroundImage: {
            _type: "image",
            asset: {
                _ref: "image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png"
            }
        }
    },

    servicesIntro: {
        title: "Services",
        description: "Powered by our Scan2Twin pipeline, these applications transform captured data into actionable, real-world solutions for operations, planning, and decision-making."
    },

    solutions: [
        {
            title: "Scan2Twin",
            description: "Transform physical spaces into intelligent digital twins using advanced mobile mapping technology. Capture survey-grade 3D data of complex indoor environments—without disrupting operations. Our all-terrain systems and mobile LiDAR deliver ArcGIS-ready digital twins with automated privacy protection.",
            buttonText: "View More",
            image: {
                _type: "image",
                asset: { _ref: "image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png" }
            }
        },
        {
            title: "Indoor Mapping & Digital Twins",
            description: "geoConvergence creates comprehensive digital twins—intelligent virtual replicas of your physical facilities that enable better decision-making across your organization. From initial data capture through ongoing facility management, we deliver end-to-end digital twin solutions.",
            buttonText: "View More",
            image: {
                _type: "image",
                asset: { _ref: "image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png" }
            }
        },
        {
            title: "LiDAR Scanning & Reality Capture",
            description: "Unlock unparalleled precision and efficiency in your projects with our state-of-the-art 3D laser scanning services. Whether you’re an architect, engineer, or contractor, our solutions provide the detailed insights necessary to design, build, and maintain with confidence.",
            buttonText: "View More",
            image: {
                _type: "image",
                asset: { _ref: "image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png" }
            }
        },
        {
            title: "3D Modeling & Point-to-BIM",
            description: "Convert real-world physical environments into precise and data-rich digital models using advanced 3D modeling and Point-to-BIM workflows. This process takes raw spatial data from scans and measurements and transforms it into intelligent BIM-ready structures.",
            buttonText: "View More",
            image: {
                _type: "image",
                asset: { _ref: "image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png" }
            }
        },
        {
            title: "ArcGIS Indoors Implementation",
            description: "Custom ArcGIS applications that address your spatial data needs. We extend standard GIS capabilities with tools for data collection, custom internal dashboards, and public-facing maps that present spatial data effectively.",
            buttonText: "View More",
            image: {
                _type: "image",
                asset: { _ref: "image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png" }
            }
        }
    ],

    events: {
        title: "Specialty Tools",
        description: "Powerful tools designed to handle specific tasks with precision and efficiency. Enhance your workflow with advanced features built to deliver accurate and reliable results."
    },

    finalCta: {
        title: "Ready to define your digital dimension?",
        subtitle: "Join hundreds of organizations using geoConvergence to unlock the full potential of their physical assets.",
        button1: { text: "Schedule a Consultation", link: "#" },
        button2: { text: "View Case Studies", link: "#" },
        backgroundImage: {
            _type: "image",
            asset: { _ref: "image-9aedb38aefaf4d3ee8418015a0fbaccc866c1ed5-1320x532-png" }
        }
    }
};

export const Services_Description = ({pageData, theme}) => {
    return(
         <div className={`w-full max-w-[1440px] mx-auto px-14 py-24 ${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)]`}>
                    <div className="max-w-[933px]">
                        <h2 className="text-5xl font-bold font-['Titillium_Web'] leading-[60px] text-[var(--text)] mb-5">
                            {pageData.servicesIntro.title}
                        </h2>
                        <p className="text-xl leading-8 text-[var(--text)]">
                            {pageData.servicesIntro.description}
                         </p>
                    </div>
                </div>
    )
}

export default function ProductPage() {
    const { theme } = useThemeStore();
    const { toggleTheme } = useThemeStore();

    const { data, isLoading } = useQuery({
        queryKey: ['productPage'],
        queryFn: fetchProductPage,
    });

    // Use fetched data or fallback
    const pageData = data || ProductPageData;

    return (
        <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />

            <main>
                {/* Hero */}
                <Hero
                    darkMode={theme === 'dark'}
                    hero={pageData.hero}
                    title="Solutions"
                />

                {/* Services Intro */}
               <Services_Description
               pageData={pageData}
               theme={theme}
               />

                {/* Solution Blocks */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)]`}>
                    {pageData.solutions.map((solution, index) => (
                        <SolutionBlock
                            key={index}
                            title={solution.title}
                            description={solution.description}
                            button={{ text: solution.buttonText, link: "#" }}
                            image={solution.image}
                            imagePosition={index % 2 === 0 ? "right" : "left"}
                            darkMode={theme === 'dark'}
                        />
                    ))}
                </section>


                {/* Solution Blocks */}
                <section className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)]`}>
                  <Events 
                  darkMode={theme === 'dark'} 
                  className="text-center"
                  eventsData={pageData.events}
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