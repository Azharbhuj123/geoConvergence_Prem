import React from "react";
import Button from "./UI/Button";
import { urlFor } from "../lib/sanity";

export default function ContractVehicles({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, vehicles } = data;

  return (
    <section
      className={`w-full py-10 px-6 sm:px-10 xl:px-14 ${darkMode ? "bg-slate-900" : "bg-[#fff]"}`}
    >
      {/* Header */}
      <div className="max-w-[1440px] mx-auto mb-4 md:mb-12">
        <h2
          className={`heading-primary mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          {title || "Contract Vehicles"}
        </h2>
        <p
          className={`text-subtitle leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {vehicles?.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 flex flex-col justify-between min-h-[380px] shadow-xl transition-all duration-300 ${darkMode ? "bg-[#0B1B3D] text-white" : "bg-[#09155F] text-white"}`}
          >
            {/* Top */}
            <div>
              {/* Logo */}
              <div className="mb-8 h-16 flex items-center">
                {item.image && (
                  <img
                    src={urlFor(item.image)}
                    alt={item.name}
                    className="h-full object-contain"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold font-['Titillium_Web'] mb-4">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {item.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-auto">
              <Button variant="primary" size="sm" className="w-full">
                Know More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
