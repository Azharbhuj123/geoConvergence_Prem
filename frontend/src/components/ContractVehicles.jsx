import React from "react";
import Button from "./UI/Button";
import { useWindowSize } from "../store/useThemeStore";

export default function ContractVehicles({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, vehicles } = data;
  const { width } = useWindowSize()
  const isLarge = width >= 1024;

  return (
    <section className={`w-full py-16 md:py-20 lg:py-24 ${darkMode ? 'bg-slate-900' : 'bg-[#f4f6fb]'}`}>

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 mb-12 md:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-['Titillium_Web'] mb-4 md:mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          {title || "Contract Vehicles"}
        </h2>
        <p className={`max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8">

        {vehicles?.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[360px] md:min-h-[380px] shadow-xl transition-all duration-300 items-center md:items-start text-center md:text-left ${darkMode ? 'bg-slate-800 text-white' : 'bg-[#0B1B3D] text-white'}`}
          >
            {/* Top */}
            <div className="w-full flex flex-col items-center md:items-start">
              {/* Logo */}
              <div className="mb-6 md:mb-8 h-16 flex items-center justify-center md:justify-start w-full">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold font-['Titillium_Web'] mb-3 md:mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 w-full">
                {item.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-auto w-full">
              <Button variant="primary" size={isLarge ? "lg" : "sm"} className="w-full">
                View All
              </Button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}