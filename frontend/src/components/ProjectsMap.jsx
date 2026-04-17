export default function ProjectsMap({ darkMode }) {
  return (
    <section
      className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
          <div className="flex flex-col gap-2">
            <h2
              className={`font-bold font-['Titillium_Web'] leading-tight ${
                darkMode ? 'text-slate-100' : 'text-slate-900'
              }`}
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
            >
              Projects Across the United States
            </h2>
            <p className={`text-lg font-['Inter'] leading-7 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              Scale and precision delivered coast to coast.
            </p>
          </div>
          <a
            href="#"
            className="self-start lg:self-auto flex-shrink-0 px-8 py-4 bg-gradient-to-b from-blue-800 to-blue-700 text-white text-lg font-bold font-['Inter'] rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600 transition-all"
          >
            View Map
          </a>
        </div>

        {/* Map placeholder */}
        <div
          className={`w-full rounded-[20px] overflow-hidden flex items-center justify-center relative ${
            darkMode ? 'bg-slate-800' : 'bg-zinc-200'
          }`}
          style={{ height: 'clamp(280px, 40vw, 734px)' }}
        >
          {/* US Map SVG silhouette placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 900 500" className="w-4/5 h-4/5" fill="currentColor">
              <path d="M150,150 Q200,100 300,120 L400,80 Q500,60 600,100 L700,90 Q800,100 850,150 L870,250 Q880,320 820,360 L750,380 Q700,400 650,390 L600,420 Q550,440 480,420 L420,400 Q370,390 320,410 L270,400 Q220,390 200,360 L160,320 Q130,280 140,230 Z" className={darkMode ? 'text-slate-600' : 'text-slate-400'} />
            </svg>
          </div>

          {/* Map pins */}
          {[
            { x: '30%', y: '35%' }, { x: '45%', y: '30%' }, { x: '60%', y: '40%' },
            { x: '75%', y: '35%' }, { x: '20%', y: '55%' }, { x: '55%', y: '55%' },
            { x: '70%', y: '50%' }, { x: '40%', y: '45%' },
          ].map((pin, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: pin.x, top: pin.y, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-700 rounded-full border-2 border-white shadow-lg animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            </div>
          ))}

          {/* Overlay label */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-700 rounded-full border-2 border-white" />
            <span className={`text-sm font-['Inter'] font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Active project locations
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
