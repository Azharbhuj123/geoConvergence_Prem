import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import { useQuery } from "@tanstack/react-query";
import { fetchRoomReservPage } from "../lib/api";
import { roomReservPageData } from "../lib/data/roomReservPageData";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolutionBlock from "../components/SolutionBlock";
import CoreValues from "../components/CoreValues";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Services_Description } from "../components/Services_Description";
import Stats from "../components/Stats";
import { GeoPrinterCard1, GeoPrinterCard2, GeoPrinterCard3, RoomReservCard2, RoomReservCard4 } from "../components/UI/Svgs";
import { urlFor } from "../lib/sanity";


const cards = [
  {
    title: "Real-Time Room Status",
    description: "Show current occupancy, upcoming reservations, and availability as room schedules change.",
    icon: <GeoPrinterCard1 />,
  },
  {
    title: "Map-Based Room Search",
    description:
      "Find and book meeting spaces through the ArcGIS Indoors floor map interface.",
    icon: <RoomReservCard2 />,
  },
  {
    title: "Tablet Room Displays ",
    description:
      "Use wall-mounted tablets as room displays and booking stations outside meeting rooms.",
    icon: <GeoPrinterCard3 />,
  },
  {
    title: "Calendar Views ",
    description:
      "Review room availability in daily, weekly, or monthly formats.",
    icon: <RoomReservCard4 />,
  },
];

export default function RoomReservPage() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ["roomReservPage"],
    queryFn: fetchRoomReservPage,
  });

  const pageData = data || roomReservPageData;
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
          title={pageData.hero?.title || "RoomReserv"}
          minHeight="min-h-[451px]"
        />

        {pageData.firstSolution && (
          <section className="bg-[var(--bg)] px-6 sm:px-10 xl:px-14 py-10 sm:py-15">
            <SolutionBlock
              title={pageData.firstSolution.title}
              description={pageData.firstSolution.description}
              description2={pageData.firstSolution.description2}
              button={
                pageData.firstSolution.buttonText
                  ? { text: pageData.firstSolution.buttonText, link: "#" }
                  : null
              }
              image={pageData.firstSolution.image}
              imagePosition="right"
              darkMode={isDark}
              variant='section'
            />
          </section>
        )}

        {pageData.coreValues && (
          <CoreValues
            title={pageData.coreValues.sectionTitle}
            subTitle={pageData.coreValues.subTitle}
            cards={pageData.coreValues.cards}
            lastRowHeight="166px"
          />
        )}

        <section className="bg-[var(--bg)] px-6 sm:px-10 xl:px-14 pt-10 sm:pt-20">
          <div className="mx-auto max-w-[1440px]">
            {/* Header Section */}
            <div className="pb-10 max-w-4xl">
              <h2 className="font-Web heading-primary mb-4">
                Core Capabilities
              </h2>
              <p className="font-Inter text-subtitle">
                Manage room scheduling with map-based search, real-time status, and practical booking tools.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#09155F] text-white p-8 rounded-2xl flex flex-col gap-4 min-h-[320px] transition-transform hover:scale-[1.02]"
                >
                  <div className="text-white opacity-90">{card.icon}</div>

                  <h3 className="font-Web text-xl xl:text-[33px] font-bold leading-tight mt-2">
                    {card.title}
                  </h3>

                  <p className="font-Inter text-[15px] xl:text-[26px] text-blue-100 ">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {pageData.howItWorks && (
          <section id="works-with">
          <Services
            darkMode={isDark}
            services={pageData.howItWorks}
            variant="default"
            button={false}
            length={pageData.howItWorks.cards.length}
          />
          </section>
        )}

        {/* {pageData.useCases && (
          <Services
            darkMode={isDark}
            services={pageData.useCases}
            variant="blue"
            button={false}
            className={"pb-18"}
            length={pageData.useCases.cards.length}
          />
        )} */}

        {/* Easy Steps Section */}
        {/* {pageData.keyFeatures && (
          <section className={`px-6 sm:px-10 xl:px-14 pt-10 md:pt-20 xl:pt-24`}>
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
        <section className="bg-[var(--darkblue-bg)] px-6 sm:px-10 xl:px-14 py-10 sm:py-20">
          <div className="mx-auto max-w-[1440px]">
            {/* Header Section */}
            <div className="pb-10 max-w-4xl">
              <h2 className="font-Web heading-primary mb-4 !text-[var(--bg-secondary)]">
                {pageData.keyFeatures.title}
              </h2>
              <p className="font-Inter text-subtitle text-[var(--bg-secondary)]">
                {pageData.keyFeatures.description}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData?.keyFeatures?.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[var(--carddark-bg)] text-white p-8 rounded-2xl flex flex-col gap-4 min-h-[320px] transition-transform hover:scale-[1.02]"
                >
                  <div className="text-white opacity-90 w-[74px] h-[74px] bg-white rounded p-2">
                    <img
                      src={card.iconImage ? urlFor(card.iconImage) : ""}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-Web text-xl xl:text-[33px] font-bold leading-tight mt-2 !text-[var(--darkblue-bg)]">
                    {card.number}
                  </h3>

                  <p className="font-Inter text-[15px] xl:text-[26px] text-blue-100 !text-[var(--muted)]">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        <section className="pt-10 sm:pt-20">
          <CTA darkMode={isDark} CtaData={pageData.finalCta} />
        </section>
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
