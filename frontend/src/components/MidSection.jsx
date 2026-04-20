import React from 'react'

export default function MidSection({data}) {
  return (
   <div className="flex flex-col  lg:flex-row gap-12 items-center mb-16">
                 {/* Left Card */}
                 <div className="w-full lg:w-1/3 bg-[#002052] rounded-3xl p-10 text-white flex flex-col items-center text-center shadow-xl">
                   <div className="relative mb-6">
                     {/* Star Logo Placeholder/SVG */}
                     <div className="w-24 h-24 relative flex items-center justify-center">
                        <img src={data.contractInfo.logo} alt="" />
                       </div>
                   </div>
                   <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">
                     {data.contractInfo.title}
                   </h3>
   
                   <div className="w-full space-y-2">
                     <p className="text-blue-300 font-semibold uppercase text-sm tracking-wide">
                       {data.contractInfo.subtitle}
                     </p>
                     <p className="text-xl font-bold">
                       {data.contractInfo.description}
                     </p>
                     <p className="text-lg">Phone: {data.contractInfo.phone}</p>
                     <p className="pt-4 font-semibold">
                       {data.contractInfo.bottomText}
                     </p>
                   </div>
                 </div>
   
                 {/* Right Description */}
                 <div className="flex-1 items-center space-y-8 lg:pt-4">
                   {data.mainDescription.map((p, idx) => (
                     <p
                       key={idx}
                       className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed font-Inter"
                     >
                       {p}
                     </p>
                   ))}
                 </div>
               </div>
  )
}
