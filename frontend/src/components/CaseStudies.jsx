import React from "react";
import { urlFor } from "../lib/sanity";

export default function CaseStudies({ data }) {
  if (!data) return null;

  const { title, subtitle, studies } = data;

  return (
    <section className="bg-[#0D1B5E] py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-white text-3xl font-bold mb-2">
              {title || "Case Studies"}
            </h2>
            <p className="text-gray-300 text-sm max-w-xl">
              {subtitle ||
                "At geoConvergence, we don't just visualize spaces — we transform complex physical environments into intelligent, actionable digital assets."}
            </p>
          </div>

          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
            View More
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies?.slice(0, 2).map((study, i) => (
            <div
              key={i}
              className="bg-[#F3F4F6] rounded-xl overflow-hidden p-3"
            >
              {/* IMAGE */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={urlFor(study.image)}
                  alt={study.title}
                  className="w-full h-[180px] object-cover"
                />

                {/* DATE BADGE */}
                <div className="absolute bottom-3 left-3 bg-white text-xs px-3 py-1 rounded-md shadow">
                  {study.date || "06 Apr 2026"}
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-4 px-1">
                <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-2">
                  {study.title}
                </h3>

                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {study.description}
                </p>

                <button className="text-blue-600 text-xs font-medium hover:underline">
                  Know More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}