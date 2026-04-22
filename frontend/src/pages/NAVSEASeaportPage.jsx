import React from "react";
import { useThemeStore } from "../store/useThemeStore";

import Navbar from "../components/Navbar";
import ShortHero from "../components/ShortHero";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";
import { NAVSEASeaportPageData } from "../lib/data/NAVSEASeaportPageData";
import SolutionBlock from "../components/SolutionBlock";

export default function NAVSEASeaportPage() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  const data = NAVSEASeaportPageData;

  return (
    <div
      className={isDark ? "dark" : ""}
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <ShortHero title={data.hero.title} />

        {/* Main Content Section */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-14 py-10 mt-10">
          <div className="">
            {/* Top Row: Card and Description */}
            <MidSection data={data} />

            <SolutionBlock
              title={data.firstSolution.title}
              description={data.firstSolution.description}
              button={null}
              image={data.firstSolution.image}
              imagePosition="left"
              services={data.firstSolution.services}
              darkMode={isDark}
              variant="section"
              className={'!max-w-[100%] !mx-0 !px-0'}
            />

            <SolutionBlock
              title={data.secondSolution.title}
              description={data.secondSolution.description}
              button={null}
              image={data.secondSolution.image}
              imagePosition="right"
              services={data.secondSolution.services}
              darkMode={isDark}
              variant="section"
              className={'!max-w-[100%] !mx-0 !px-0'}
            />
          </div>
        </section>
        <CTA darkMode={isDark} />

      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
