import { useThemeStore } from "../store/useThemeStore";
import { useQuery } from "@tanstack/react-query";
import { fetchIndoorMapsPage } from "../lib/api";
import { indoorMapsPageData } from "../lib/data/indoorMapsPageData";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolutionBlock from "../components/SolutionBlock";
import Services from "../components/Services";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function IndoorMapsPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ["indoorMapsPage"],
    queryFn: fetchIndoorMapsPage,
  });

  const pageData = data || indoorMapsPageData;
  const isDark = theme === "dark";

  // Parse Key Features into Stats component format
  const parsedStatsData = pageData.keyFeatures?.cards?.map((card) => {
    // Extract numeric part
    const valueStr = card.number.replace(/[^0-9]/g, "");
    const value = parseInt(valueStr) || 0;
    // Extract suffix part (e.g. '+', '%', 'M+')
    const suffix = card.number.replace(/[0-9]/g, "");
    return {
      value,
      suffix,
      label: card.label,
      icon: (
        // A generic icon for stats dynamically populated from backend text
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    };
  });

  return (
    <div
      className={isDark ? "dark" : ""}
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={pageData.hero} title={pageData.hero?.title || "IndoorMaps"} minHeight="min-h-[451px]"/>

        {/* What is Indoor Mapping? */}
        {pageData.whatIs && (
          <section className="bg-[var(--bg)]">
            <SolutionBlock
              title={pageData.whatIs.title}
              description={pageData.whatIs.description}
              image={pageData.whatIs.image}
              imagePosition="left"
              darkMode={isDark}
            />
          </section>
        )}

        {/* How It Works */}
        {pageData.howItWorks && (
          <Services
            darkMode={isDark}
            services={pageData.howItWorks}
            variant="blue"
          />
        )}

        {/* Key Features (using Stats for numbers) */}
        {pageData.keyFeatures && (
          <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--bg)]">
            <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-10 sm:mb-12 text-center lg:text-left flex flex-col gap-4 sm:gap-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-['Titillium_Web'] text-[var(--text)] leading-tight tracking-tight">
                {pageData.keyFeatures.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text)] opacity-80 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                {pageData.keyFeatures.sectionSubtitle}
              </p>
            </div>
            <Stats darkMode={isDark} statsData={parsedStatsData} />
          </div>
        )}

        {/* Use Cases */}
        {pageData.useCases && (
          <Services
            darkMode={isDark}
            services={pageData.useCases}
            variant="default"
          />
        )}

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
