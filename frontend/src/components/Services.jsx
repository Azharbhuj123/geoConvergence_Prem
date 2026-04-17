import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity'

export default function Services() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "services"][0]{
      sectionTitle,
      sectionSubtitle,
      cards[]{
        title,
        description,
        image
      }
    }`

    client.fetch(query)
      .then((result) => {
        setData(result)
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  if (loading) return <div className="py-20 text-center">Loading Services...</div>
  if (!data) return <div>Error loading services</div>

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {data.sectionTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {data.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={urlFor(card.image).width(600).url()}
                alt={card.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}