import Button from "./UI/Button";

export default function ProjectsMap({ darkMode }) {
  return (
    <section
      className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${darkMode ? 'bg-slate-950' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
          <div className="flex flex-col gap-2">
            <h2
              className={`font-bold font-['Titillium_Web'] leading-tight ${darkMode ? 'text-slate-100' : 'text-slate-900'
                }`}
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              Projects Across the United States
            </h2>
            <p className={`text-lg font-Inter leading-7 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              Scale and precision delivered coast to coast.
            </p>
          </div>
          <Button size="sm">
            View Map
          </Button>
        </div>

        {/* Map placeholder */}
        <div
          className={`w-full rounded-[20px] overflow-hidden flex items-center justify-center relative ${darkMode ? 'bg-slate-800' : 'bg-zinc-200'
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
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full  shadow-lg animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 40 60" fill="none">
                <path opacity="0.04" d="M20.0045 59.4719C28.5974 59.4719 35.5633 55.9816 35.5633 51.676C35.5633 47.3705 28.5974 43.8801 20.0045 43.8801C11.4117 43.8801 4.4458 47.3705 4.4458 51.676C4.4458 55.9816 11.4117 59.4719 20.0045 59.4719Z" fill="black" />
                <path opacity="0.04" d="M20.0045 59.4719C28.5974 59.4719 35.5633 55.9816 35.5633 51.676C35.5633 47.3705 28.5974 43.8801 20.0045 43.8801C11.4117 43.8801 4.4458 47.3705 4.4458 51.676C4.4458 55.9816 11.4117 59.4719 20.0045 59.4719Z" fill="black" />
                <path opacity="0.04" d="M20.0042 58.7632C27.7787 58.7632 34.0811 55.5902 34.0811 51.6761C34.0811 47.7619 27.7787 44.5889 20.0042 44.5889C12.2297 44.5889 5.92725 47.7619 5.92725 51.6761C5.92725 55.5902 12.2297 58.7632 20.0042 58.7632Z" fill="black" />
                <path opacity="0.04" d="M20.0043 58.0549C26.9605 58.0549 32.5995 55.1991 32.5995 51.6764C32.5995 48.1536 26.9605 45.2979 20.0043 45.2979C13.0482 45.2979 7.40918 48.1536 7.40918 51.6764C7.40918 55.1991 13.0482 58.0549 20.0043 58.0549Z" fill="black" />
                <path opacity="0.04" d="M20.0045 57.3457C26.1422 57.3457 31.1179 54.8072 31.1179 51.6759C31.1179 48.5446 26.1422 46.0061 20.0045 46.0061C13.8667 46.0061 8.89111 48.5446 8.89111 51.6759C8.89111 54.8072 13.8667 57.3457 20.0045 57.3457Z" fill="black" />
                <path opacity="0.04" d="M20.0046 56.637C25.324 56.637 29.6362 54.4158 29.6362 51.6759C29.6362 48.936 25.324 46.7148 20.0046 46.7148C14.6853 46.7148 10.373 48.936 10.373 51.6759C10.373 54.4158 14.6853 56.637 20.0046 56.637Z" fill="black" />
                <path opacity="0.04" d="M20.0043 55.9283C24.5053 55.9283 28.1541 54.0244 28.1541 51.6759C28.1541 49.3274 24.5053 47.4236 20.0043 47.4236C15.5033 47.4236 11.8545 49.3274 11.8545 51.6759C11.8545 54.0244 15.5033 55.9283 20.0043 55.9283Z" fill="black" />
                <path opacity="0.04" d="M20.0045 55.2195C23.6871 55.2195 26.6725 53.633 26.6725 51.6759C26.6725 49.7188 23.6871 48.1323 20.0045 48.1323C16.3218 48.1323 13.3364 49.7188 13.3364 51.6759C13.3364 53.633 16.3218 55.2195 20.0045 55.2195Z" fill="black" />
                <path d="M40.0082 20.0465C40.0082 28.3244 30.0061 40.093 21.8563 51.23C20.7697 52.7149 19.2385 52.7149 18.1519 51.23C10.002 40.093 0 28.5441 0 20.0465C0 8.97513 8.95613 0 20.0041 0C31.052 0 40.0082 8.97513 40.0082 20.0465Z" fill="#326FB7" />
                <g opacity="0.25">
                  <path d="M20.0041 0C8.95613 0 0 8.97513 0 20.0465C0 28.5441 10.002 40.093 18.1519 51.23C19.2632 52.7486 20.7697 52.7149 21.8563 51.23C30.0061 40.093 40.0082 28.3244 40.0082 20.0465C40.0082 8.97513 31.052 0 20.0041 0ZM20.0041 1.48493C30.2512 1.48493 38.5264 9.77764 38.5264 20.0465C38.5264 23.6083 36.2972 28.483 32.9263 33.7647C29.5554 39.0463 24.7534 44.7589 20.661 50.3512C20.3306 50.8027 19.6775 50.8027 19.3471 50.3512C15.2394 44.7379 10.9872 39.0746 7.43207 33.8169C3.87691 28.5592 1.48178 23.6898 1.48178 20.0465C1.48178 9.77764 9.75695 1.48493 20.0041 1.48493Z" fill="black" />
                </g>
                <path opacity="0.25" d="M20.0038 28.2138C24.5048 28.2138 28.1536 24.5573 28.1536 20.0467C28.1536 15.5362 24.5048 11.8796 20.0038 11.8796C15.5028 11.8796 11.854 15.5362 11.854 20.0467C11.854 24.5573 15.5028 28.2138 20.0038 28.2138Z" fill="black" />
                <path d="M20.0038 28.2138C24.5048 28.2138 28.1536 24.5573 28.1536 20.0467C28.1536 15.5362 24.5048 11.8796 20.0038 11.8796C15.5028 11.8796 11.854 15.5362 11.854 20.0467C11.854 24.5573 15.5028 28.2138 20.0038 28.2138Z" fill="#F2F4FA" />
              </svg>
            </div>
          ))}

          {/* Overlay label */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-700 rounded-full border-2 border-white" />
            <span className={`text-sm font-Inter font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Active project locations
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
