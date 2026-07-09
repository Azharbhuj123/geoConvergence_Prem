import { useState, useEffect } from 'react';
import { useThemeStore } from '../store/useThemeStore';

const testimonials = [
  {
    name: 'Air Force Recruiting Service (AFRS)',
    role: 'Eric Carlson, Market Research Analyst',
    quote: 'The AFRS recruiting force needs to be responsive, efficient, and effective in today’s challenging recruiting environment. geoConvergence’s mapping solution is helping us achieve our recruiting mission.',
    avatar: 'LO',
    color: 'from-sky-600 to-sky-900',
  },
  {
    name: 'Baltimore County Public Schools',
    role: 'Debra Addicks, Facilities Information Systems',
    quote: 'Throughout the project, the geoConvergence team has been professional, collaborative, and responsive, completing their work with minimal disruption to school operations. Their attention to detail and commitment to accuracy have been appreciated.',
    avatar: 'CA',
    color: 'from-indigo-700 to-indigo-900',
  },
  {
    name: 'Air Force Recruiting Service (AFRS)',
    role: 'Eric Carlson, Market Research Analyst',
    quote: 'The AFRS recruiting force needs to be responsive, efficient, and effective in today’s challenging recruiting environment. geoConvergence’s mapping solution is helping us achieve our recruiting mission.',
    avatar: 'LO',
    color: 'from-sky-600 to-sky-900',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ darkMode, pageData }) {
  const [active, setActive] = useState(1);
  const { theme } = useThemeStore();

  // Auto-rotate every 4.5 seconds (feels natural)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${theme === 'dark' ? 'dark' : ''} pb-20 lg:pb-24 px-6 sm:px-8 lg:px-10 xl:px-14 bg-[var(--bg)] `}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header - unchanged */}
        <div className="flex flex-col items-center gap-7 mb-0">
          <h2
            className={`text-center heading-primary font-Web capitalize leading-tight`}
          >
            {pageData?.title || "What Our Customers Say"}
          </h2>
          <p className={`text-center text-lg sm:text-xl font-Inter max-w-[678px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {pageData?.subtitle || "Organizations across the US trust geoConvergence to power their facility intelligence."}
          </p>
        </div>

        {/* Carousel Container */}
        {/* <div className="relative h-[250px] sm:h-[300px] xl:h-[380px] flex items-center justify-center overflow-hidden"> */}
        <div
          className="
    relative
    h-[340px]
    sm:h-[360px]
    xl:h-[380px]
    flex items-center justify-center
    overflow-hidden
    px-2 sm:px-0
  "
        >
          {testimonials.map((t, i) => {
            const isCenter = i === active;
            const position = (i - active + testimonials.length) % testimonials.length;

            // Position logic to match reference image
            let translateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;
            let brightness = 'brightness-100';

            const isMobile = window.innerWidth < 640;

            if (position === 0) {
              translateX = 0;
              scale = isMobile ? 1 : 1.08;
              opacity = 1;
              zIndex = 30;
              brightness = 'brightness-110';
            } else if (position === 1) {
              translateX = isMobile ? 85 : 320;
              scale = isMobile ? 0.92 : 0.85;
              opacity = 0.75;
              zIndex = 10;
              brightness = 'brightness-75';
            } else {
              translateX = isMobile ? -85 : -320;
              scale = isMobile ? 0.92 : 0.85;
              opacity = 0.75;
              zIndex = 10;
              brightness = 'brightness-75';
            }

            return (
              <div
                key={t.name}
                onClick={() => setActive(i)}
                className={`cursor-context-menu absolute transition-all duration-700 ease-out rounded-[20px] p-6 sm:p-8 flex flex-col gap-5 w-[92%] sm:w-full max-w-[480px] shadow-[0_0_40px_rgba(15,23,42,0.12)]
                  ${darkMode
                    ? isCenter ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-100'
                    : isCenter ? 'bg-white text-slate-900' : 'bg-slate-200 text-slate-900'
                  }`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                {/* Avatar */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold font-Inter text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className={`text-base sm:text-lg font-medium font-Inter ${isCenter ? 'text-slate-900' : darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                      {t.name}
                    </div>
                    <div className={`text-sm font-Inter ${isCenter ? 'text-slate-600' : darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {t.role}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center md:justify-start w-full">
                  <StarRating />
                </div>

                <p className={`text-base sm:text-lg font-Inter leading-8 ${isCenter ? 'text-slate-700' : darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  "{t.quote}"
                </p>
              </div>
            );
          })}
        </div>

        {/* Dots - unchanged */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? 'bg-blue-600 w-8' : darkMode ? 'bg-slate-600' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}