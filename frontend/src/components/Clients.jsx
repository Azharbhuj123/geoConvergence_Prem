import { useEffect, useRef } from 'react'

const clients = [
  'Air Force Recruiting Service',
  'Indiana Department Of Transportation',
  'Baltimore County Public Schools',
  'Defense Contract Management Agency',
  'Department of the Army',
  'State of Indiana',
  'Indiana University',
  'State of Michigan',
  'City of Bakersfield',
  'Naval Surface Warfare',
  'Yuma Proving Ground Center',
]

function LogoItem({ name, darkMode }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0 px-6">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
          darkMode ? 'bg-slate-700' : 'bg-slate-200'
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#94a3b8' : '#64748b'} strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <span
        className={`text-base sm:text-lg font-bold font-['Titillium_Web'] leading-5 max-w-[160px] ${
          darkMode ? 'text-zinc-400' : 'text-zinc-500'
        }`}
      >
        {name}
      </span>
    </div>
  )
}

export default function Clients({ darkMode }) {
  const track1 = useRef(null)
  const track2 = useRef(null)

  return (
    <section
      className={`py-16 lg:py-20 overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-neutral-100'}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 mb-10">
        <p className={`text-sm font-semibold font-Inter uppercase tracking-widest text-center ${
          darkMode ? 'text-slate-500' : 'text-slate-400'
        }`}>
          Trusted by leading organizations
        </p>
      </div>

      {/* Row 1 - scrolling left */}
      <div className="relative mb-6">
        <div
          className="flex items-center"
          style={{
            animation: 'scrollLeft 40s linear infinite',
            width: 'max-content',
          }}
        >
          {[...clients, ...clients].map((name, i) => (
            <LogoItem key={i} name={name} darkMode={darkMode} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolling right */}
      <div className="relative">
        <div
          className="flex items-center"
          style={{
            animation: 'scrollRight 35s linear infinite',
            width: 'max-content',
          }}
        >
          {[...clients.slice(4), ...clients, ...clients.slice(0, 4)].map((name, i) => (
            <LogoItem key={i} name={name} darkMode={darkMode} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
