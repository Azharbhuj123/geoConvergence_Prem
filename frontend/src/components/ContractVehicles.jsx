import React from "react";

export default function ContractVehicles({ data }) {
  if (!data) return null;

  const { title, subtitle, vehicles } = data;

  return (
    <section className="w-full bg-[#f4f6fb] py-16 px-4 md:px-12">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a4f]">
          {title}
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {vehicles.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b1e63] text-white rounded-2xl p-6 flex flex-col justify-between min-h-[300px]"
          >

            {/* Top */}
            <div>
              {/* Logo */}
              <div className="mb-5 h-12 flex items-center">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition">
              Know More
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}