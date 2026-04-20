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
      <section className="max-w-[1440px] mx-auto px-6 lg:px-14 py-10 mt-10">
        <MidSection data={data} />

        <div className="w-full min-h-screen bg-[var(--bg)] font-['Titillium_Web']   space-y-8">
          {/* Top Header Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#001a41] text-white p-8 rounded-2xl shadow-lg border border-white/10"
              >
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/20 ">
                  {card.company}
                </h3>
                <ul className="space-y-3">
                  {card.details.map((line, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm md:text-base opacity-90"
                    >
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="bg-white dark:bg-[var(--card)] rounded-2xl shadow-xl p-8 md:p-12 border border-[var(--border)]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#001a41] dark:text-[var(--heading)] mb-8 w-[676px]">
              How to award a streamlined HUBZone Sole Source Contract:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base text-gray-700 dark:text-[var(--muted)] leading-relaxed">
              {/* Left Column Steps */}
              <div className="space-y-6">
                <div>
                  <p>
                    <span className="font-bold text-[#001a41] dark:text-[var(--heading)] mr-2">
                      1.
                    </span>{" "}
                    Discuss project with geoConvergence and establish technical
                    requirements, a time frame, and a price estimate.
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-[#001a41] dark:text-[var(--heading)] mr-2">
                      2.
                    </span>{" "}
                    Contact your Contracting Officer (KO), Agency Small Business
                    Specialist, or Vernice Mathis, SBA Business Opportunity
                    Specialist supporting geoConvergence, for assistance and
                    provide a package that includes the requirements
                    description, estimated period of performance, applicable
                    NAICS code, anticipated dollar value, etc. IAW FAR19.804-2
                    “Agency Offering”. (geoConvergence can help you prepare this
                    package.)
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-[#001a41] dark:text-[var(--heading)] mr-2">
                      3.
                    </span>{" "}
                    The KO will send an Offering Letter to the SBA requesting
                    permission to conduct sole source negotiations with
                    geoConvergence. (geoConvergence will have already alerted
                    their Business Opportunity Specialist to expect the package
                    in order to expedite the process.)
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-[#001a41] dark:text-[var(--heading)] mr-2">
                      4.
                    </span>{" "}
                    The SBA confirms eligibility of geoConvergence and
                    authorizes the negotiations.
                  </p>
                </div>
              </div>

              {/* Right Column Steps */}
              <div className="space-y-6">
                <div>
                  <p>
                    <span className="font-bold text-[#001a41] dark:text-[var(--heading)] mr-2">
                      5.
                    </span>{" "}
                    The KO negotiates with geoConvergence.
                  </p>
                  <ul className="mt-2 ml-6 space-y-2 list-disc opacity-80">
                    <li>
                      Simplified Acquisition efforts do not require a technical
                      proposal; the KO sends RFQ to geoConvergence requesting
                      cost proposal; upon receipt, KO negotiates cost and terms
                      with geoConvergence.
                    </li>
                    <li>
                      If the estimate exceeds the Simplified Acquisition
                      Threshold (currently $250K), the KO sends RFP to
                      geoConvergence requesting technical and cost proposals;
                      upon receipt, KO negotiates cost and terms with
                      geoConvergence.
                    </li>
                  </ul>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-[#001a41] dark:text-[var(--heading)] mr-2">
                      6.
                    </span>{" "}
                    Upon completion of negotiations, KO prepares a contract
                    award document and sends to geoConvergence for signature.
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-[#001a41] dark:text-[var(--heading)] mr-2">
                      7.
                    </span>{" "}
                    Upon receipt of the executed contract from geoConvergence,
                    the KO signs contract and sends it to the SBA.
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-[#001a41] dark:text-[var(--heading)] mr-2">
                      8.
                    </span>{" "}
                    Contract performance begins. Although the duration can vary
                    considerably depending on complexity and urgency, this
                    entire acquisition process has been accomplished in as
                    little as two weeks.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Image Placeholder */}
            <div className="my-12 rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Architecture"
                className="w-full h-[300px] object-cover"
              />
            </div>

            {/* Section 1: Contract Types */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-[#001a41] dark:text-[var(--heading)] mb-4">
                1. Contract Types
              </h3>
              <p className="text-gray-700 dark:text-[var(--muted)] leading-relaxed    pl-4">
                There are no additional limitations in terms of contract type to
                be awarded under the 8(a) program. Cost-reimbursable, fixed
                price, time, and materials (and their variations) can be issued.
                We generally recommend a broadly scoped master contract from
                which task orders may be issued. This method provides the
                customer with maximum flexibility and control without a
                requisite commitment to utilize the full value of the contract.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA darkMode={theme === "dark"} />
      <Footer darkMode={theme === "dark"} />
    </div>
  );
}
