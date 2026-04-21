import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import Navbar from "../components/Navbar";
import ShortHero from "../components/ShortHero";
import MidSection from "../components/MidSection";
import { NAVSEASeaportPageData } from "../lib/data/NAVSEASeaportPageData";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function GSAMasPage() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  const data = NAVSEASeaportPageData;

  const categories = [
    {
      code: "518210C",
      showTab: true,
      title: null,
      description: (
        <>
          <p className="mb-2">
            Cloud Computing and Cloud Related IT Professional Services SIN
            518210C Cloud Computing and Cloud Related IT Professional Services
          </p>
          <p>
            Includes commercially available cloud computing services such as
            Infrastructure as a Service (IaaS), Platform as a Service (PaaS),
            and Software as a Service (SaaS) and emerging cloud computing
            services. IT professional services that are focused on providing the
            types of services that support the Government's adoption of,
            migration to, or governance/management of cloud computing. Specific
            cloud related IT professional labor categories and/or fixed-price
            professional services solutions (e.g., migration services) that
            support activities associated with assessing cloud solutions,
            refactoring workloads for cloud systems, migrating legacy or other
            systems to cloud solutions, providing management/governance of cloud
            solutions, DevOps, developing cloud native applications, or other
            cloud oriented activities are within scope of this SIN.
          </p>
        </>
      ),
    },
    {
      code: "541370GEO",
      showTab: false,
      title: null,
      description: (
        <p>
          Earth Observation Solutions 541370GEO provides geospatial earth
          observation technologies, products, and services to include, but not
          limited to ground, satellite and aerial based sensor data and imagery;
          worldwide digital transmission, internet, data, and video services and
          products through various networks, platforms, and applications.
          Offerings include global coverage, imagery, analysis, as a service,
          change detection, human geography, observation as a service, archive
          storage and distribution, monitoring, basemaps (mosaics), and earth
          observation solutions for accurate, mission critical information for
          uses to include, but not limited to, environmental, agriculture,
          meteorology, forestry, fish &amp; wildlife habitats, disaster response
          and recovery, defense, maritime, mapping, humanitarian support,
          transportation, and public safety.
        </p>
      ),
    },
    {
      code: "54151S",
      showTab: false,
      title: null,
      description: (
        <p>
          Information Technology Professional Services IT Professional Services
          and/or labor categories for database planning and design; systems
          analysis, integration, and design; programming, conversion and
          implementation support; network services, data/records management, and
          testing.
        </p>
      ),
    },
  ];
  return (
    <div
      className={isDark ? "dark" : ""}
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <ShortHero title={"GSA MAS"} />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--bg)]">
        <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20">
          <MidSection data={data} />

          <div className="font-['Titillium_Web'] flex flex-col gap-8 sm:gap-10 md:gap-12">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-center lg:text-left text-[var(--heading)]"
            >
              Information Technology – IT Services
            </h2>

            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12">
              {categories.map((cat) => (
                <div key={cat.code}>
                  {cat.showTab ? (
                    /* ── 518210C: tabbed card ── */
                    <div className="overflow-hidden rounded-[32px] shadow-2xl border border-[var(--border)] transition-all duration-300 hover:shadow-blue-900/10 dark:hover:shadow-blue-500/5">
                      {/* Tab header row */}
                      <div
                        className="flex flex-col sm:flex-row border-b border-[var(--border)] bg-slate-100 dark:bg-slate-900"
                      >
                        <div
                          className="px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-widest border-b sm:border-b-0 sm:border-r border-[var(--border)] text-blue-600 dark:text-blue-500"
                        >
                          Category
                        </div>
                        <div
                          className="px-6 py-4 text-sm sm:text-base font-extrabold text-[var(--text)]"
                        >
                          {cat.code}
                        </div>
                      </div>

                      {/* Description label */}
                      <div
                        className="px-6 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] bg-slate-50 dark:bg-slate-800/50 border-b border-[var(--border)] text-slate-500"
                      >
                        Description
                      </div>

                      {/* Content */}
                      <div
                        className="p-6 sm:p-10 md:p-12 lg:p-14 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--text)] bg-[var(--card)] opacity-90"
                      >
                        {cat.description}
                      </div>
                    </div>
                  ) : (
                    /* ── 541370GEO / 54151S: badge above content box ── */
                    <div className="flex flex-col gap-4">
                      {/* Badge — inline width, sits above the box */}
                      <div className="flex justify-center lg:justify-start">
                        <span
                          className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-black uppercase tracking-widest rounded-xl bg-blue-600/10 text-blue-600 border border-blue-600/20"
                        >
                          {cat.code}
                        </span>
                      </div>

                      {/* Separate content box */}
                      <div
                        className="p-6 sm:p-10 md:p-12 lg:p-14 text-sm sm:text-base md:text-lg leading-relaxed rounded-[32px] shadow-2xl bg-[var(--card)] border border-[var(--border)] opacity-90 transition-all duration-300 hover:shadow-blue-900/10 dark:hover:shadow-blue-500/5"
                      >
                        {cat.description}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA darkMode={theme === "dark"} />
      <Footer darkMode={theme === "dark"} />
    </div>
  );
}
