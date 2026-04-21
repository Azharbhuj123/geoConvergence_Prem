import { useThemeStore, useWindowSize } from '../store/useThemeStore';
import Button from './UI/Button'; // Assuming UI/Button exists, as it's used elsewhere for buttons

export default function OpenPositions({ title, subtitle, jobs }) {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const { width } = useWindowSize()
  const isLarge = width >= 1024;

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[var(--bg)]`}>
      <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-['Titillium_Web'] text-[var(--text)] leading-tight tracking-tight`}>
            {title || "Currently Open Positions"}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text)] opacity-80 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {jobs?.map((job, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 md:p-10 rounded-[32px] flex flex-col sm:flex-row gap-8 justify-between border-t-[6px] border-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${isDark ? 'bg-slate-900' : 'bg-white'
                }`}
            >
              <div className="flex-1 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-extrabold font-['Titillium_Web'] uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-xs font-bold rounded-full uppercase tracking-widest border border-blue-600/20">
                      {job.type}
                    </span>
                  </div>
                  <p className={`text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 opacity-80 ${isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                    {job.description}
                  </p>
                </div>

                <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 font-semibold text-xs sm:text-sm uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">📍</span> {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">💰</span> {job.salary}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start sm:justify-end shrink-0">
                <Button href="#" size={isLarge ? "lg" : "sm"} className="w-full shadow-lg hover:shadow-blue-600/20 transition-all">
                  Apply Today
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}