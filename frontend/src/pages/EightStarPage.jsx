import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import { eightStarPageData } from "../lib/data/eightStarPageData";

import Navbar from "../components/Navbar";
import ShortHero from "../components/ShortHero";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import MidSection from "../components/MidSection";

export default function EightStarPage() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  const data = eightStarPageData;

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

            {/* Bottom Row: Data Table Refactored to match Image 1 */}
            <div className="flex flex-col gap-3 pb-20 ">
              {data.tableData.map((row, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-3 md:gap-5"
                >
                  {/* Label Box */}
                  <div className="w-full md:w-1/2 bg-[var(--f6f6f6)] px-6 py-3 flex items-center rounded-sm">
                    <span className="font-Inter   text-lg font-medium text-[var(--text)]">
                      {row.label}
                    </span>
                  </div>

                  {/* Value Box */}
                  <div className="w-full md:w-1/2 bg-[var(--f6f6f6)] px-6 py-3 flex items-center rounded-sm">
                    {row.isLink ? (
                      <a
                        href={row.link}
                        className="text-[var(--text)] hover:underline font-medium underline underline-offset-4 decoration-1"
                      >
                        {row.value}
                      </a>
                    ) : row.isList ? (
                      <div className="flex flex-col gap-1.5 py-1">
                        {row.value.map((item, i) => (
                          <a
                            key={i}
                            href={item.link}
                            className="text-[var(--text)] font-medium transition-colors text-lg leading-relaxed"
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <span className="font-medium text-lg text-[var(--text)]">
                        {row.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA darkMode={isDark} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
