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
import { Services_Description } from "../components/Services_Description";

export default function IndoorMapsPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ["indoorMapsPage"],
    queryFn: fetchIndoorMapsPage,
  });

  const pageData = data || indoorMapsPageData;
  const isDark = theme === "dark";

  // Parse Key Features into Stats component format
  const parsedStatsData = pageData.keyFeatures?.cards?.map(card => {
    const valueStr = card?.number?.replace(/[^0-9]/g, '');
    const value = parseInt(valueStr) || null;
    const suffix = card?.number?.replace(/[0-9]/g, '');
    return {
      value,
      suffix,
      label: card?.label,
      iconImage: card?.iconImage,
    };
  });

  return (
    <div
      className={isDark ? "dark" : ""}
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero
          darkMode={isDark}
          hero={pageData.hero}
          title={pageData.hero?.title || "IndoorMaps"}
          minHeight="min-h-[451px]"
        />

        {/* What is Indoor Mapping? */}
        {pageData.whatIs && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
            <SolutionBlock
              title={pageData.whatIs.title}
              description={pageData.whatIs.description}
              image={pageData.whatIs.image}
              imagePosition="left"
              darkMode={isDark}
              variant="section"
            />
          </section>
        )}

        {/* How It Works */}
        {pageData.howItWorks && (
          <Services
            darkMode={isDark}
            services={pageData.howItWorks}
            variant="blue"
            button={false}
          />
        )}

        {/* Key Features (using Stats for numbers) */}
        {pageData.keyFeatures && (
          <section className={`px-6 sm:px-10 xl:px-14 pt-20`}>
            <Services_Description
              pageData={pageData.keyFeatures}
              theme={theme}
              className="!py-0 !px-0"
            />
            <Stats
              darkMode={isDark}
              statsData={parsedStatsData}
              className="!px-0  py-[3.75rem]"
              extraClass="!text-lg sm:!text-xl"
            />
          </section>
        )}

        {/* Use Cases */}
        {pageData.useCases && (
          <Services
            darkMode={isDark}
            services={pageData.useCases}
            variant="default"
            button={false}
            className={'!pt-0'}
            length={pageData?.useCases?.cards?.length}
          />
        )}


        {/* Capabilities */}
        {pageData.capabilities && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
            <SolutionBlock
              title={pageData.capabilities.title}
              description={pageData.capabilities.description}
              image={pageData.capabilities.image}
              highlightText={pageData.capabilities.highlightText}
              listItems={pageData.capabilities.listItems}
              imagePosition="right"
              darkMode={isDark}
              variant="section"
            />
          </section>
        )}

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
