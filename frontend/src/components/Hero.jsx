import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity'

export default function Hero() {
  const [hero, setHero] = useState(null)
  const [loading, setLoading] = useState(true)

 useEffect(() => {
  const query = `*[_type == "hero"][0]{
    title,
    subtitle,
    backgroundImage,
    button1,
    button2
  }`
  
  client.fetch(query)
    .then((data) => {
      setHero(data)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
    })
}, [])


  if (loading) return <div className="h-screen flex items-center justify-center">Loading Hero...</div>
  if (!hero) return <div>Error loading hero section</div>

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center relative"
      style={{
        backgroundImage: `url(${urlFor(hero.backgroundImage)})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
          {hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {hero.button1 && (
            <a
              href={hero.button1.link}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl text-lg transition"
            >
              {hero.button1.text}
            </a>
          )}
          {hero.button2 && (
            <a
              href={hero.button2.link}
              className="px-8 py-4 border border-white hover:bg-white hover:text-black text-white font-semibold rounded-2xl text-lg transition"
            >
              {hero.button2.text}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}