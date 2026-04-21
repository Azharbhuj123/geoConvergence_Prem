import React from 'react'

export default function MidSection({ data }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
      {/* Left Card */}
      <div className="w-full lg:w-1/3 bg-[#002052] rounded-3xl p-6 sm:p-8 md:p-10 text-white flex flex-col items-center text-center shadow-xl">
        <div className="relative mb-5 sm:mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center">
            <img src={data.contractInfo.logo} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-6 sm:mb-8 uppercase tracking-tight leading-tight">
          {data.contractInfo.title}
        </h3>

        <div className="w-full space-y-2 sm:space-y-3">
          <p className="text-blue-300 font-bold uppercase text-xs sm:text-sm tracking-widest">
            {data.contractInfo.subtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl font-bold leading-snug">
            {data.contractInfo.description}
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
            Phone: {data.contractInfo.phone}
          </p>
          <p className="pt-3 sm:pt-4 text-sm sm:text-base font-semibold leading-relaxed">
            {data.contractInfo.bottomText}
          </p>
        </div>
      </div>

      {/* Right Description */}
      <div className="flex-1 flex flex-col gap-5 sm:gap-6 md:gap-8 text-center lg:text-left">
        {data.mainDescription.map((p, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--muted)] leading-relaxed font-Inter"
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}
