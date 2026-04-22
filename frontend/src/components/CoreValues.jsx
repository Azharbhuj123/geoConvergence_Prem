import { useThemeStore } from '../store/useThemeStore';

export default function CoreValues({ title, cards }) {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${isDark ? 'bg-slate-950' : 'bg-blue-950'}`}>
      <div className="max-w-[1440px] mx-auto">
        <h2 className="heading-primary text-center text-white mb-12">
          {title || "Our Core Values"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {cards?.map((card, idx) => (
            <div
              key={idx}
              className={`flex-1 min-w-[300px] max-w-[500px] h-[220px] sm:h-[240px] lg:h-[260px] p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-colors ${isDark ? 'bg-slate-800' : 'bg-white'
                }`}
            >
              <div>
                <h3 className={`text-2xl font-bold font-['Titillium_Web'] uppercase tracking-wide mb-3 ${isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                  {card.title}
                </h3>
                <p className={`text-lg font-Inter ${isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                  {card.description}
                </p>
              </div>

              {/* Icon Circle */}
              <div className="w-full flex items-center justify-end">
                <div className="w-14 h-14 sm:w-18 sm:h-18 xl:w-24 xl:h-24 bg-blue-700  rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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
