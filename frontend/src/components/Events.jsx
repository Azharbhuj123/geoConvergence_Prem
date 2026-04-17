export default function Events({ darkMode }) {
  const events = [
    {
      tag: 'Upcoming Events',
      title: 'Esri FedGIS Conference 2026',
      date: 'February 10–11, 2026',
      location: 'Washington, DC',
      description:
        'Scan2Twin mobile LiDAR that delivers ArcGIS-ready digital twins, enterprise architecture and custom development solutions for spatial data challenges.',
      image: 'https://placehold.co/738x532/0c1424/ffffff?text=FedGIS+2026',
    },
    {
      tag: 'Upcoming Events',
      title: 'Geo Week 2026',
      date: 'February 16–18, 2026',
      location: 'Colorado Convention Center',
      description:
        "We're demonstrating how our full-stack Scan2Twin solution delivers operational digital twins at scale — transforming LiDAR captures into ArcGIS Indoors environments structured around real facility workflows.",
      image: 'https://placehold.co/946x531/0c1424/ffffff?text=Geo+Week+2026',
    },
  ]

  return (
    <section
      className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3">
          <h2
            className={`font-bold font-['Titillium_Web'] leading-tight ${
              darkMode ? 'text-slate-100' : 'text-slate-900'
            }`}
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            Upcoming Events
          </h2>
          <p className={`text-lg sm:text-xl font-['Inter'] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Meet us where the industry connects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {events.map((event) => (
            <div
              key={event.title}
              className="relative rounded-[20px] overflow-hidden group"
              style={{ minHeight: '531px' }}
            >
              {/* Background image */}
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 backdrop-blur-[2px]" />

              {/* Content */}
              <div className="relative z-10 h-full p-7 sm:p-8 flex flex-col justify-end gap-5">
                <div className="flex flex-col gap-5">
                  {/* Tag */}
                  <div className="inline-flex self-start">
                    <span className="px-4 py-2 bg-white/30 backdrop-blur-sm text-slate-100 text-base font-['Inter'] rounded-xl">
                      {event.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-slate-100 font-bold font-['Titillium_Web'] capitalize leading-tight"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
                  >
                    {event.title}
                  </h3>

                  {/* Date & Location */}
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                      </svg>
                      <span className="text-slate-100 text-base font-['Inter'] leading-8">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                        <path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z"/><circle cx="12" cy="9" r="2.5"/>
                      </svg>
                      <span className="text-slate-100 text-base font-['Inter'] leading-8">{event.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-200 text-base sm:text-lg font-['Inter'] leading-7 line-clamp-3">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <div>
                    <a
                      href="#"
                      className="inline-block px-8 py-4 bg-gradient-to-b from-blue-800 to-blue-700 text-slate-100 text-base sm:text-lg font-bold font-['Inter'] rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600 transition-all leading-7"
                    >
                      Let's Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
