import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import Navbar from "../components/Navbar";
import ShortHero from "../components/ShortHero";
import MidSection from "../components/MidSection";
import { NAVSEASeaportPageData } from "../lib/data/NAVSEASeaportPageData";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HubZonePage() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  const data = NAVSEASeaportPageData;

  const contactInfo = [
    {
      company: "geoConvergence, LLC",
      details: [
        "642 N Madison Street Bloomington IN 47404",
        "Point of Contact: Prem Radhakrishnan",
        "Phone: (855) 447-3939",
        "Direct: (812) 219-7524",
        "Email: prem@geoconvergence.com",
      ],
    },
    {
      company: "Small Business Administration (SBA)",
      details: [
        "Indiana District Office",
        "8500 Keystone Crossing #400",
        "Indianapolis, IN 46240",
        "Phone: (317) 226-7272",
        "Point of Contact: Vernice Mathis, BOS",
        "Direct: (202) 845-4069",
        "Email: vernice.mathis@sba.gov",
      ],
    },
  ];
  return (
    <div
      className={isDark ? "dark" : ""}
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <ShortHero title={"U.S. HUBZone Certified"} />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--bg)]">
        <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20">
          <MidSection data={data} />

          <div className="w-full flex flex-col gap-10 sm:gap-14 md:gap-16">
            {/* Top Header Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {contactInfo.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#001a41] text-white p-6 sm:p-8 md:p-10 rounded-[32px] shadow-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl sm:text-2xl font-extrabold font-['Titillium_Web'] mb-6 pb-4 border-b border-white/20 tracking-tight">
                    {card.company}
                  </h3>
                  <ul className="space-y-4">
                    {card.details.map((line, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm sm:text-base opacity-90 leading-relaxed"
                      >
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 xl:p-20 border border-[var(--border)] overflow-hidden">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#001a41] dark:text-white mb-8 sm:mb-10 max-w-2xl leading-tight tracking-tight">
                How to award a streamlined HUBZone Sole Source Contract:
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                {/* Left Column Steps */}
                <div className="space-y-6 sm:space-y-8">
                  {[
                    "Discuss project with geoConvergence and establish technical requirements, a time frame, and a price estimate.",
                    "Contact your Contracting Officer (KO), Agency Small Business Specialist, or Vernice Mathis, SBA Business Opportunity Specialist supporting geoConvergence, for assistance and provide a package that includes the requirements description, estimated period of performance, applicable NAICS code, anticipated dollar value, etc. IAW FAR19.804-2 “Agency Offering”. (geoConvergence can help you prepare this package.)",
                    "The KO will send an Offering Letter to the SBA requesting permission to conduct sole source negotiations with geoConvergence. (geoConvergence will have already alerted their Business Opportunity Specialist to expect the package in order to expedite the process.)",
                    "The SBA confirms eligibility of geoConvergence and authorizes the negotiations."
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="font-black text-[#001a41] dark:text-blue-500 text-lg sm:text-xl lg:text-2xl shrink-0 leading-none">{i + 1}.</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>

                {/* Right Column Steps */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex gap-4">
                    <span className="font-black text-[#001a41] dark:text-blue-500 text-lg sm:text-xl lg:text-2xl shrink-0 leading-none">5.</span>
                    <div className="flex flex-col gap-4">
                      <p>The KO negotiates with geoConvergence.</p>
                      <ul className="space-y-3 list-none opacity-90 border-l-2 border-blue-600/30 pl-4 sm:pl-6">
                        <li className="text-sm sm:text-base italic">
                          Simplified Acquisition efforts do not require a technical proposal; the KO sends RFQ to geoConvergence requesting cost proposal; upon receipt, KO negotiates cost and terms with geoConvergence.
                        </li>
                        <li className="text-sm sm:text-base italic">
                          If the estimate exceeds the Simplified Acquisition Threshold (currently $250K), the KO sends RFP to geoConvergence requesting technical and cost proposals; upon receipt, KO negotiates cost and terms with geoConvergence.
                        </li>
                      </ul>
                    </div>
                  </div>
                  {[
                    "Upon completion of negotiations, KO prepares a contract award document and sends to geoConvergence for signature.",
                    "Upon receipt of the executed contract from geoConvergence, the KO signs contract and sends it to the SBA.",
                    "Contract performance begins. Although the duration can vary considerably depending on complexity and urgency, this entire acquisition process has been accomplished in as little as two weeks."
                  ].map((step, i) => (
                    <div key={i + 6} className="flex gap-4">
                      <span className="font-black text-[#001a41] dark:text-blue-500 text-lg sm:text-xl lg:text-2xl shrink-0 leading-none">{i + 6}.</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Image */}
              <div className="mt-12 sm:mt-16 md:mt-20 rounded-[28px] overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern Architecture and Precision"
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Section 1: Contract Types */}
              <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col gap-4 sm:gap-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#001a41] dark:text-white tracking-tight">
                  1. Contract Types
                </h3>
                <div className="h-1 lg:h-1.5 w-20 bg-blue-600 rounded-full" />
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-4xl">
                  There are no additional limitations in terms of contract type to be awarded under the 8(a) program. Cost-reimbursable, fixed price, time, and materials (and their variations) can be issued. We generally recommend a broadly scoped master contract from which task orders may be issued. This method provides the customer with maximum flexibility and control without a requisite commitment to utilize the full value of the contract.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA darkMode={theme === "dark"} />
      <Footer darkMode={theme === "dark"} />
    </div>
  );
}
