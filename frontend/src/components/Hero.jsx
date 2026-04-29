import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity'
import Button from './UI/Button'

export default function Hero({ darkMode, hero, minHeight = 'min-h-screen' }) {
  const [loading, setLoading] = useState(false)

  if (loading) return (
    <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-slate-950' : 'bg-slate-100'}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin" />
        <span className={`font-Inter text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Loading...</span>
      </div>
    </div>
  )

  // Fallback content if Sanity not configured
  const title = hero?.title
  const subtitle = hero?.subtitle
  const btn1 = hero?.button1
  const btn2 = hero?.button2
  const bgImage = hero?.backgroundImage ? urlFor(hero.backgroundImage) : null

  return (
    <section
      className={`relative ${minHeight} flex items-end pb-20 overflow-hidden px-6 sm:px-8 lg:px-14 
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
        </div>
      )}

      {/* Gradient overlay when bg image exists */}
      {bgImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/10" />
      )}

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="max-w-[653px]">
          <div className="flex flex-col gap-7 mb-12">
            <h1
              className="text-white font-bold font-['Titillium_Web'] leading-tight text-sm lg:text-lg"
              style={{ fontSize: 'clamp(2rem, 5vw, 70px)', lineHeight: '1.1' }}
            >
              {title}
            </h1>
            <p className="text-white/80 text-[16px] sm:text-[18px] xl:text-[20px] font-Inter leading-8 max-w-[592px]">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {btn1 && (
              <Button href={btn1.link} size='sm' variant="primary"  >
                {btn1.text}
              </Button>
            )}
            {btn2 && (
              <Button href={btn2.link} size='sm' variant="secondary" >
                {btn2.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
