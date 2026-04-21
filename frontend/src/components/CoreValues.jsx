import { useThemeStore } from '../store/useThemeStore';

export default function CoreValues({ title, cards }) {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${isDark ? 'bg-slate-950' : 'bg-blue-950'}`}>
      <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-['Titillium_Web'] text-white mb-10 sm:mb-14 md:mb-16 lg:mb-20 text-center tracking-tight leading-tight">
          {title || "Our Core Values"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards?.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 md:p-10 rounded-[28px] flex flex-col justify-between gap-8 h-auto min-h-[280px] sm:min-h-[320px] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 border border-white/5 ${
                isDark ? 'bg-slate-900' : 'bg-white/10 backdrop-blur-sm'
              }`}
            >
              <div>
                <h3 className={`text-xl sm:text-2xl font-extrabold font-['Titillium_Web'] uppercase tracking-wider mb-3 sm:mb-4 leading-tight text-white`}>
                  {card.title}
                </h3>
                <p className={`text-sm sm:text-base font-medium font-Inter leading-relaxed text-white/80`}>
                  {card.description}
                </p>
              </div>

              {/* Icon Circle */}
              <div className="flex items-center justify-end mt-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/40">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
