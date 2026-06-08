import { useThemeStore } from "../store/useThemeStore";
import { useQuery } from "@tanstack/react-query";
import { fetchCareerPage } from "../lib/api";
import { careerPageData } from "../lib/data/careerPageData";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolutionBlock from "../components/SolutionBlock";
import CoreValues from "../components/CoreValues";
import OpenPositions from "../components/OpenPositions";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Services_Description } from "../components/Services_Description";
import Stats from "../components/Stats";

export default function CareerPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ["careerPage"],
    queryFn: fetchCareerPage,
  });

  const pageData = data || careerPageData;
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
          title={pageData.hero?.title || "Career"}
          minHeight="min-h-[400px]"
        />

        {/* Meet the Team */}
        {/* {pageData.meetTheTeam && (
          <section
            className={`${theme === "dark" ? "dark" : ""} bg-[var(--bg)] px-6 sm:px-10 xl:px-14 py-5`}
          >
            <SolutionBlock
              title={pageData.meetTheTeam.title}
              description={pageData.meetTheTeam.description}
              listItems={pageData.meetTheTeam.listItems}
              image={pageData.meetTheTeam.image}
              imagePosition="left"
              darkMode={isDark}
              variant="section"
            />
          </section>
        )} */}

        {/* Easy Steps Section */}
        {/* {pageData.keyFeatures && (
          <section className={`px-6 sm:px-10 xl:px-14 pt-10`}>
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
        )} */}

        {/* Core Values */}
        {/* {pageData.coreValues && (
          <CoreValues
            title={pageData.coreValues.sectionTitle}
            cards={pageData.coreValues.cards}
          />
        )} */}

        {/* Open Positions */}
        {pageData.openPositions && (
          <OpenPositions
            title={pageData.openPositions.sectionTitle}
            subtitle={pageData.openPositions.sectionSubtitle}
            jobs={pageData.openPositions.jobs}
          />
        )}

        {/* Testimonials */}
        {/* <Testimonials darkMode={isDark} /> */}

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
