import { urlFor } from '../lib/sanity';

export default function SystemIntegrations({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, points = [], logos = [] } = data;

  return (
    <section
      className={`py-10 md:py-20   px-6 sm:px-10 xl:px-14 transition-colors duration-300 ${
        darkMode ? 'bg-slate-900' : 'bg-[#f4f6fb]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ── Left: text ── */}
          <div className="flex flex-col gap-6">
            <h2
              className={`heading-primary font-Web leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {title}
            </h2>

            {subtitle && (
              <p
                className={`text-base sm:text-lg font-Inter leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {subtitle}
              </p>
            )}

            {points.length > 0 && (
              <ul className="flex flex-col gap-4 mt-2">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* bullet dot */}
                    <span
                      className={`mt-[7px] flex-shrink-0 w-2 h-2 rounded-full ${
                        darkMode ? 'bg-blue-400' : 'bg-[#002052]'
                      }`}
                    />
                    <span
                      className={`text-base sm:text-lg font-Inter leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ── Right: logo grid ── */}
          {logos.length > 0 && (
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center rounded-2xl py-4 px-5 transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                    ${
                      darkMode
                        ? 'bg-slate-800 border border-slate-700'
                        : 'bg-white border border-slate-200 shadow-sm'
                    }`}
                >
                  {logo.image ? (
                    <img
                      src={urlFor(logo.image)}
                      alt={logo.name || `Integration ${i + 1}`}
                      className="h-10 sm:h-12 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <div
                      className={`h-10 w-20 rounded-md ${
                        darkMode ? 'bg-slate-700' : 'bg-slate-100'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
