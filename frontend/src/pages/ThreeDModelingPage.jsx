import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import { useQuery } from "@tanstack/react-query";
import { fetchThreeDModelingPage } from "../lib/api";
import { threeDModelingPageData } from "../lib/data/threeDModelingPageData";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoreValues from "../components/CoreValues";
import { Services_Description } from "../components/Services_Description";
import SolutionBlock from "../components/SolutionBlock";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function ThreeDModelingPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ["threeDModelingPage"],
    queryFn: fetchThreeDModelingPage,
  });

  const pageData = data || threeDModelingPageData;
  const isDark = theme === "dark";

  const parsedStatsData = pageData.stats?.cards?.map((card) => {
    const valueStr = card.number.replace(/[^0-9]/g, "");
    const value = parseInt(valueStr) || 0;
    const suffix = card.number.replace(/[0-9]/g, "");
    return {
      value,
      suffix,
      label: card.label,
      icon: (
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
        <Hero
          darkMode={isDark}
          hero={pageData.hero}
          title={pageData.hero?.title || "3D Modeling & Point-to-BIM"}
          minHeight="min-h-[550px]"
        />
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
        {pageData.coreValues && (
          <CoreValues
            title={pageData.coreValues.sectionTitle}
            cards={pageData.coreValues.cards}
          />
        )}

        <section
          className={`bg-[var(--bg)] px-6 py-10 sm:px-10 sm:py-20 xl:px-14 xl:py-24`}
        >
          <Services_Description
            pageData={pageData.servicesDescription}
            theme={theme}
          />
          {pageData.solutions?.map((solution, index) => (
            <div
              key={index}
              className={index === 1 ? "bg-[var(--slate-bg)]" : ""}
            >
              <SolutionBlock
                title={solution.title}
                description={solution.description}
                button={
                  solution.buttonText
                    ? { text: solution.buttonText, link: "#" }
                    : null
                }
                image={solution.image}
                imagePosition={index % 2 === 0 ? "right" : "left"}
                darkMode={isDark}
              />
            </div>
          ))}
        </section>

        {pageData.stats && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
            <Services_Description pageData={pageData.stats} theme={theme} />
            <Stats
              darkMode={isDark}
              statsData={parsedStatsData}
              className={"!px-0 !pt-15"}
            />
          </section>
        )}
        <section className={`py-15`}>
          
        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
        </section>

      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
