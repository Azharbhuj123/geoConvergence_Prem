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
      <section className="max-w-[1440px] mx-auto px-6 lg:px-14 py-10 mt-10">
        <MidSection data={data} />

        <div className="font-['Titillium_Web',sans-serif]">
          <h1
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--heading)" }}
          >
            Information Technology – IT Services
          </h1>

          <div className="space-y-6">
            {categories.map((cat) => (
              <div key={cat.code}>
                {cat.showTab ? (
                  /* ── 518210C: tabbed card ── */
                  <div className="overflow-hidden  rounded-[20px] shadow-[0px_7px_29.700000762939453px_0px_rgba(172,172,172,0.20)]">
                    {/* Tab header row */}
                    <div
                      className="flex"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <div
                        className="px-4 py-2 text-sm"
                        style={{
                          color: "var(--text)",
                          borderRight: "1px solid var(--border)",
                          background: "var(--f6f6f6)",
                        }}
                      >
                        Category
                      </div>
                      <div
                        className="px-4 py-2 text-sm font-medium"
                        style={{
                          color: "var(--text)",
                          background: "var(--f6f6f6)",
                        }}
                      >
                        {cat.code}
                      </div>
                    </div>

                    {/* Description label */}
                    <div
                      className="px-4 py-2 text-sm"
                      style={{
                        color: "var(--text)",
                        background: "var(--bg-secondary)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      Description
                    </div>

                    {/* Content */}
                    <div
                      className="px-[55px] py-[38px] text-sm leading-relaxed"
                      style={{
                        color: "var(--text)",
                        background: "var(--card)",
                      }}
                    >
                      {cat.description}
                    </div>
                  </div>
                ) : (
                  /* ── 541370GEO / 54151S: badge above content box ── */
                  <div>
                    {/* Badge — inline width, sits above the box */}
                    <div className="  inline-block">
                      <span
                        className="inline-block text-sm p-[16px] rounded"
                        style={{
                          color: "var(--text)",
                          background: "var(--f6f6f6)",
                        }}
                      >
                        {cat.code}
                      </span>
                    </div>

                    {/* Separate content box */}
                    <div
                      className="  px-[55px] py-[38px] text-sm leading-relaxed rounded-[20px] shadow-[0px_7px_29.700000762939453px_0px_rgba(172,172,172,0.20)]"
                      style={{
                        color: "var(--text)",
                        background: "var(--card)",
                      }}
                    >
                      {cat.description}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA darkMode={theme === "dark"} />
      <Footer darkMode={theme === "dark"} />
    </div>
  );
}
