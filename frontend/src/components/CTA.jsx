export default function CTA({ darkMode }) {
  return (
    <section
      className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 lg:p-24 flex flex-col items-center gap-9">
          {/* Background layers */}
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute inset-0 mix-blend-hue bg-slate-900" />

          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <h2
              className="text-white font-bold font-['Titillium_Web'] leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              Ready to define your<br className="hidden sm:block" /> digital dimension?
            </h2>
            <p className="text-white text-lg sm:text-xl font-Inter leading-8 max-w-[756px]">
              Join hundreds of organizations using geoConvergence to unlock the full potential of their physical assets.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-7 pt-4">
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-b from-blue-800 to-blue-700 text-slate-100 text-xl sm:text-2xl font-bold font-Inter rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600 transition-all text-center leading-8"
            >
              Schedule a Consultation
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-neutral-200 hover:bg-neutral-100 text-blue-700 text-xl sm:text-2xl font-bold font-Inter rounded-2xl transition-all text-center leading-7"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
