import { useEffect, useRef } from 'react'
import slide_logo_1 from '../assets/slide_logo_1.png'
import slide_logo_2 from '../assets/slide_logo_2.png'
import slide_logo_3 from '../assets/slide_logo_3.png'
import slide_logo_4 from '../assets/slide_logo_4.png'
import slide_logo_5 from '../assets/slide_logo_5.png'
import slide_logo_6 from '../assets/slide_logo_6.png'
const clients = [
  {
    title: 'Federal Small Business Specialty',
    subtitle: '2026 Partner of the Year',
    color: '#4F46E5',
    logo: slide_logo_1,
  },
  {
    title: 'Esri Partner Conference',
    subtitle: '2023 Award Winner',
    color: '#0EA5E9',
    logo: slide_logo_2,
  },
  {
    title: 'Federal Small Business Specialty',
    subtitle: '2023 Award Winner',
    color: '#F97316',
    logo: slide_logo_3,
  },
  {
    title: 'Federal Small Business Specialty',
    subtitle: '2026 Partner of the Year',
    color: '#4F46E5',
    logo: slide_logo_4,
  },
  {
    title: 'Esri Partner Conference',
    subtitle: '2023 Award Winner',
    color: '#0EA5E9',
    logo: slide_logo_5,
  },
  {
    title: 'Federal Small Business Specialty',
    subtitle: '2023 Award Winner',
    color: '#F97316',
    logo: slide_logo_6,
  },
]

function LogoItem({ item, darkMode }) {
  return (
    <div className="flex items-center justify-center gap-3 px-8 md:px-12 min-w-[280px]">
      <img src={item.logo} alt={item.title} className={`w-16 h-16 object-contain ${darkMode ? 'brightness-0 invert opacity-80' : ''}`} />

      <div className="leading-tight">
        <h4 className="text-sm font-bold" style={{ color: darkMode ? '#60A5FA' : item.color }}>
          {item.title}
        </h4>
        <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>{item.subtitle}</p>
      </div>
    </div>
  )
}

export default function Clients({ darkMode }) {
  return (
    <section className={`py-8 overflow-hidden border-y ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
      {/* Track */}
      <div className="relative w-full overflow-hidden max-w-[1440px] mx-auto">
        {/* Gradients for smooth fade effect on edges */}
        <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r ${darkMode ? 'from-slate-900' : 'from-white'} to-transparent`}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l ${darkMode ? 'from-slate-900' : 'from-white'} to-transparent`}></div>

        <div
          className="flex w-max items-center"
          style={{
            animation: 'scroll 25s linear infinite',
          }}
        >
          {/* duplicate for smooth loop */}
          {[...clients, ...clients, ...clients, ...clients].map((item, i) => (
            <LogoItem key={i} item={item} darkMode={darkMode} />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </section>
  )
}