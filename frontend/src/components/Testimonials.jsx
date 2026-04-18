import { useState } from 'react'

const testimonials = [
  {
    name: 'Theodore James',
    role: 'Facilities Director, DoD',
    quote: 'geoConvergence transformed how we manage our entire portfolio. The scan-to-digital-twin pipeline cut our planning cycles by 60%.',
    avatar: 'TJ',
    color: 'from-blue-700 to-blue-900',
  },
  {
    name: 'Liam Oliver',
    role: 'GIS Manager, Indiana University',
    quote: 'The ArcGIS Indoors integration was seamless. We had a fully operational indoor map of our campus within weeks of scanning.',
    avatar: 'LO',
    color: 'from-sky-600 to-sky-900',
  },
  {
    name: 'Charlotte Amelia',
    role: 'Operations Lead, BCPS',
    quote: 'Reserve Assist changed how our staff books spaces. We eliminated double-bookings entirely and improved utilization by 40%.',
    avatar: 'CA',
    color: 'from-indigo-700 to-indigo-900',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials({ darkMode }) {
  const [active, setActive] = useState(1)

  return (
    <section
      className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-7 mb-14">
          <h2
            className={`text-center font-bold font-['Titillium_Web'] capitalize leading-tight ${
              darkMode ? 'text-slate-100' : 'text-slate-900'
            }`}
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            What Our Customers Say
          </h2>
          <p className={`text-center text-lg sm:text-xl font-Inter max-w-[678px] ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Organizations across the US trust geoConvergence to power their facility intelligence.
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-5 lg:gap-7">
          {testimonials.map((t, i) => {
            const isCenter = i === active
            return (
              <div
                key={t.name}
                onClick={() => setActive(i)}
                className={`cursor-pointer transition-all duration-400 rounded-[20px] p-6 sm:p-8 flex flex-col gap-5 ${
                  isCenter
                    ? 'shadow-[0px_9px_29.7px_0px_rgba(0,0,0,0.25)] scale-100 md:scale-105 z-10'
                    : 'opacity-70 scale-95 md:scale-100'
                } ${
                  darkMode
                    ? isCenter ? 'bg-slate-800' : 'bg-slate-900'
                    : 'bg-white'
                }`}
                style={{
                  flex: isCenter ? '1.2' : '1',
                  minWidth: '0',
                  boxShadow: isCenter ? '0px 9px 29.7px 0px rgba(0,0,0,0.20)' : 'none',
                }}
              >
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold font-Inter text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className={`text-base sm:text-lg font-medium font-Inter ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                      {t.name}
                    </div>
                    <div className={`text-sm font-Inter ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {t.role}
                    </div>
                  </div>
                </div>

                <StarRating />

                <p className={`text-base sm:text-lg font-Inter leading-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  "{t.quote}"
                </p>
              </div>
            )
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? 'bg-blue-700 w-7' : darkMode ? 'bg-slate-700' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
