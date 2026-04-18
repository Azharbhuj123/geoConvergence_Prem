// export default function CTA({ darkMode }) {
//   return (
//     <section
//       className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
//     >
//       <div className="max-w-[1440px] mx-auto">
//         <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 lg:p-24 flex flex-col items-center gap-9">
//           {/* Background layers */}
//           <div className="absolute inset-0 bg-slate-900/80" />
//           <div className="absolute inset-0 mix-blend-hue bg-slate-900" />

import { useThemeStore } from "../store/useThemeStore";

//           {/* Decorative grid */}
//           <div
//             className="absolute inset-0 opacity-5"
//             style={{
//               backgroundImage: 'linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)',
//               backgroundSize: '40px 40px',
//             }}
//           />

//           {/* Glow */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl" />

//           {/* Content */}
//           <div className="relative z-10 flex flex-col items-center gap-6 text-center">
//             <h2
//               className="text-white font-bold font-['Titillium_Web'] leading-tight"
//               style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
//             >
//               Ready to define your<br className="hidden sm:block" /> digital dimension?
//             </h2>
//             <p className="text-white text-lg sm:text-xl font-Inter leading-8 max-w-[756px]">
//               Join hundreds of organizations using geoConvergence to unlock the full potential of their physical assets.
//             </p>
//           </div>

//           <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-7 pt-4">
//             <a
//               href="#"
//               className="px-8 py-4 bg-gradient-to-b from-blue-800 to-blue-700 text-slate-100 text-xl sm:text-2xl font-bold font-Inter rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600 transition-all text-center leading-8"
//             >
//               Schedule a Consultation
//             </a>
//             <a
//               href="#"
//               className="px-8 py-4 bg-neutral-200 hover:bg-neutral-100 text-blue-700 text-xl sm:text-2xl font-bold font-Inter rounded-2xl transition-all text-center leading-7"
//             >
//               View Case Studies
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



export default function CTA({darkMode}) {
  const {theme} = useThemeStore();
  
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>

    <section className={`px-4 py-10 sm:px-6 md:px-10 lg:px-[60px]  bg-[var(--bg)]  transition-colors duration-200`}>
      <div
        className="rounded-[24px] overflow-hidden relative min-h-[380px] flex items-center justify-center p-10 lg:p-[80px]"
        style={{ background: 'linear-gradient(160deg,#001535 0%,#002060 100%)' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=60')",
          }}
        />
        <div className="relative flex flex-col items-center gap-6 text-center max-w-[700px]">
          <h2 className=" text-[26px] sm:text-[38px] lg:text-[52px] font-bold text-white leading-tight">
            Ready to define your
            <br />
            digital dimension?
          </h2>
          <p className="text-white text-[16px] leading-relaxed opacity-90 max-w-[520px]">
            Join hundreds of organizations using geoConvergence to unlock the full potential of
            their physical assets.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <button className="px-7 py-4 rounded-[14px] bg-gradient-to-br from-[#0043AC] to-[#0C59DB] text-[#F2F4FA] text-[17px] font-bold shadow-[0_8px_20px_rgba(12,89,219,0.45)] hover:opacity-90 transition-opacity">
              Schedule a Consultation
            </button>
            <button className="px-7 py-4 rounded-[14px] bg-[#E4E2E2] text-[#326FB7] text-[17px] font-bold hover:bg-white transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>

  );
}