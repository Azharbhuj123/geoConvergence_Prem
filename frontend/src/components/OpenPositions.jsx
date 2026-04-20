import { useThemeStore } from '../store/useThemeStore';
import Button from './UI/Button'; // Assuming UI/Button exists, as it's used elsewhere for buttons

export default function OpenPositions({ title, subtitle, jobs }) {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 bg-[var(--bg)]`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className={`text-4xl lg:text-5xl font-bold font-['Titillium_Web'] mb-6 text-[var(--text)]`}>
            {title || "Currently Open Positions"}
          </h2>
          {subtitle && (
            <p className="text-xl text-[var(--text)] opacity-80">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs?.map((job, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl flex flex-col md:flex-row gap-6 justify-between border-t-4 border-blue-600 transition-colors ${isDark ? 'bg-slate-800' : 'bg-slate-50'
                }`}
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className={`text-2xl font-bold font-['Titillium_Web'] uppercase ${isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full uppercase tracking-wide">
                      {job.type}
                    </span>
                  </div>
                  <p className={`text-lg mb-6 line-clamp-2 ${isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                    {job.description}
                  </p>
                </div>

                <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                  <div className="flex items-center gap-2">
                    <span>📍</span> {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💰</span> {job.salary}
                  </div>
                </div>
              </div>

              <div className="md:w-auto flex items-end md:items-center justify-start md:justify-end shrink-0">
                <Button href="#" className="bg-gradient-to-r from-blue-600 to-indigo-600 !text-white px-8 py-3 w-full md:w-auto shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
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
