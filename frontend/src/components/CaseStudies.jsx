import React from "react";
import { urlFor } from "../lib/sanity";
import Button from "./UI/Button";

export default function CaseStudies({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, studies } = data;

  return (
    <section className="bg-[#0D1B5E] py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-white text-4xl md:text-5xl font-bold font-['Titillium_Web'] mb-6">
              {title || "Case Studies"}
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {subtitle ||
                "At geoConvergence, we don't just visualize spaces — we transform complex physical environments into intelligent, actionable digital assets."}
            </p>
          </div>

          <Button variant="primary" size="md" className="whitespace-nowrap shrink-0">
            View All
          </Button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studies?.slice(0, 2).map((study, i) => (
            <div
              key={i}
              className={`rounded-3xl p-6 shadow-xl transition-all duration-300 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}
            >
              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
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
                <div className="absolute bottom-6 left-6 bg-[#0055FE] text-white text-sm font-bold px-4 py-2 rounded-lg uppercase tracking-wider shadow-md">
                  {i === 0 ? "UPDATED" : "NEW ITEM"}
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-4 pb-4">
                <h3 className={`text-2xl font-bold font-['Titillium_Web'] mb-4 ${darkMode ? 'text-white' : 'text-[#0B1B3D]'}`}>
                  {study.title}
                </h3>

                <p className={`text-lg leading-relaxed mb-8 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {study.description}
                </p>

                <button className="text-[#0055FE] text-base font-bold hover:text-blue-700 transition-colors duration-300 flex items-center gap-2 group">
                  Read More
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
