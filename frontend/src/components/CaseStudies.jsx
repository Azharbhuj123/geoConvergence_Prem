import React from "react";
import { urlFor } from "../lib/sanity";
import Button from "./UI/Button";
import { useWindowSize } from "../store/useThemeStore";

export default function CaseStudies({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, studies } = data;
  const { width } = useWindowSize()
  const isLarge = width >= 1024;

  return (
    <section className="bg-[#0D1B5E] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 lg:mb-20 gap-8 items-center md:items-start text-center md:text-left">
          <div className="max-w-3xl flex flex-col items-center md:items-start">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Titillium_Web'] mb-4 md:mb-6">
              {title || "Case Studies"}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed">
              {subtitle ||
                "At geoConvergence, we don't just visualize spaces — we transform complex physical environments into intelligent, actionable digital assets."}
            </p>
          </div>

          <Button variant="primary" size={isLarge ? "lg" : "sm"} className="whitespace-nowrap shrink-0 mx-auto md:mx-0 md:px-8 md:py-4">
            View All
          </Button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {studies?.slice(0, 2).map((study, i) => (
            <div
              key={i}
              className={`rounded-3xl p-5 md:p-6 lg:p-8 shadow-xl transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}
            >
              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden mb-6 md:mb-8 w-full aspect-[16/9]">
                {study.image ? (
                  <img
                    src={urlFor(study.image)}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 dark:bg-slate-700" />
                )}

                {/* TAG BADGE */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 bg-[#0055FE] text-white text-xs md:text-sm lg:text-base font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg uppercase tracking-wider shadow-md whitespace-nowrap">
                  {i === 0 ? "UPDATED" : "NEW ITEM"}
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-2 md:px-4 pb-2 md:pb-4 w-full flex flex-col items-center md:items-start">
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold font-['Titillium_Web'] mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-[#0B1B3D]'}`}>
                  {study.title}
                </h3>

                <p className={`text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-2 w-full ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {study.description}
                </p>

                <button size={isLarge ? "lg" : "sm"} className="text-[#0055FE] text-sm md:text-base lg:text-lg font-bold hover:text-blue-700 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group mx-auto md:mx-0">
                  Read More
                  <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
