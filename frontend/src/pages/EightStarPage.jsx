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
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--bg)]">
          <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-10 sm:gap-14 md:gap-16">
            
            {/* Top Row: Card and Description */}
            <MidSection data={data} />

            {/* Bottom Row: Data Table */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {data.tableData.map((row, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6"
                >
                  {/* Label Box */}
                  <div className="w-full md:w-1/2 bg-slate-100 dark:bg-slate-900 px-6 sm:px-8 py-4 sm:py-5 flex items-center rounded-2xl shadow-sm border border-slate-200/50 dark:border-white/5 transition-colors">
                    <span className="font-extrabold font-['Titillium_Web'] text-base sm:text-lg md:text-xl text-[var(--text)] uppercase tracking-wide">
                      {row.label}
                    </span>
                  </div>

                  {/* Value Box */}
                  <div className="w-full md:w-1/2 bg-slate-100 dark:bg-slate-900 px-6 sm:px-8 py-4 sm:py-5 flex items-center rounded-2xl shadow-sm border border-slate-200/50 dark:border-white/5 transition-colors">
                    {row.isLink ? (
                      <a
                        href={row.link}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-bold text-sm sm:text-base md:text-lg break-all lg:break-normal"
                      >
                        {row.value}
                      </a>
                    ) : row.isList ? (
                      <div className="flex flex-col gap-2 py-1">
                        {row.value.map((item, i) => (
                          <a
                            key={i}
                            href={item.link}
                            className="text-[var(--text)] font-semibold transition-all hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base md:text-lg leading-relaxed"
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <span className="font-medium text-sm sm:text-base md:text-lg text-[var(--text)] opacity-90 leading-relaxed">
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
