import { useEffect, useRef } from 'react'

const clients = [
  {
    title: 'Federal Small Business Specialty',
    subtitle: '2026 Partner of the Year',
    color: '#4F46E5',
    logo: '/logos/esri1.png',
  },
  {
    title: 'Esri Partner Conference',
    subtitle: '2023 Award Winner',
    color: '#0EA5E9',
    logo: '/logos/esri2.png',
  },
  {
    title: 'Federal Small Business Specialty',
    subtitle: '2023 Award Winner',
    color: '#F97316',
    logo: '/logos/esri3.png',
  },
]

function LogoItem({ item }) {
  return (
    <div className="flex items-center gap-3 px-10 min-w-[320px]">
      <img src={item.logo} alt="" className="w-14 h-14 object-contain" />

      <div className="leading-tight">
        <h4 className="text-sm font-semibold" style={{ color: item.color }}>
          {item.title}
        </h4>
        <p className="text-xs text-slate-500 mt-1">{item.subtitle}</p>
      </div>
    </div>
  )
}

export default function Clients() {
  const trackRef = useRef(null)

  return (
    <section className="bg-white py-10 overflow-hidden">

      {/* Track */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-max"
          style={{
            animation: 'scroll 20s linear infinite',
          }}
        >
          {/* duplicate for smooth loop */}
          {[...clients, ...clients, ...clients].map((item, i) => (
            <LogoItem key={i} item={item} />
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
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </section>
  )
}