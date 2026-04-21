import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity'
import Button from './UI/Button'
import { useWindowSize } from '../store/useThemeStore'

export default function Hero({ darkMode, hero, minHeight = 'min-h-[600px] md:min-h-screen' }) {
  const [loading, setLoading] = useState(false)

  if (loading) return (
    <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-slate-950' : 'bg-slate-100'}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin" />
        <span className={`font-Inter text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Loading...</span>
      </div>
    </div>
  )

  const title = hero?.title
  const subtitle = hero?.subtitle
  const btn1 = hero?.button1
  const btn2 = hero?.button2
  const bgImage = hero?.backgroundImage ? urlFor(hero.backgroundImage) : null
  const { width } = useWindowSize()
  const isLarge = width >= 1024;

  return (
    <section
      className={`relative ${minHeight} flex items-center lg:items-end py-20 sm:py-24 md:py-28 lg:pb-24 xl:pb-28 overflow-hidden 
        ${darkMode ? 'bg-slate-950' : 'bg-slate-100'}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Background gradient overlay */}
      {!bgImage && (
        <div className={`absolute inset-0 ${darkMode ? 'bg-slate-950' : 'bg-slate-200'}`}>
          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(${darkMode ? '#334155' : '#94a3b8'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? '#334155' : '#94a3b8'} 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          {/* Blue glow */}
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-900/40 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[120px]" />
        </div>
      )}

      {/* Gradient overlay when bg image exists */}
      {bgImage && (
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-slate-950/90 sm:from-slate-950/80 via-slate-950/70 to-slate-950/20" />
      )}

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 sm:gap-10 md:gap-12 transition-all">
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 max-w-[760px]">
            <h1 className="text-white font-extrabold font-['Titillium_Web'] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl">
              {title}
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-Inter leading-relaxed drop-shadow-xl max-w-2xl">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start w-full sm:w-auto">
            {btn1 && (
              <Button href={btn1.link} variant="primary" size={isLarge ? "lg" : "sm"} className="w-full sm:w-auto min-w-[180px] sm:min-w-[220px]">
                {btn1.text}
              </Button>
            )}
            {btn2 && (
              <Button href={btn2.link} variant="secondary" size={isLarge ? "lg" : "sm"} className="w-full sm:w-auto min-w-[180px] sm:min-w-[220px]">
                {btn2.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
