export default function FeaturedProducts({ darkMode }) {
  const products = [
    {
      name: 'IndoorMa.ps',
      description: 'Cloud-Based interface for rapid web-map deployment',
      image: 'https://placehold.co/420x545/0f2d52/ffffff?text=IndoorMaps',
      badge: 'Platform',
    },
    {
      name: 'Reserve Assist',
      description: 'Calendar-based space booking for ArcGIS Indoors',
      image: 'https://placehold.co/420x545/0f2d52/ffffff?text=Reserve',
      badge: 'App',
    },
    {
      name: 'Scenario Planner',
      description: 'Emergency preparedness and virtual drill simulation',
      image: 'https://placehold.co/420x545/0f2d52/ffffff?text=Scenario',
      badge: 'Tool',
    },
  ]

  return (
    <section
      className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${darkMode ? 'bg-sky-950' : 'bg-blue-950'}`}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
          <div className="flex flex-col gap-5 max-w-[933px]">
            <h2
              className="text-slate-100 font-bold font-['Titillium_Web'] leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              Feature Products
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl font-Inter leading-8">
              Powered by our Scan2Twin pipeline, these applications transform captured data into actionable, real-world solutions for operations, planning, and decision-making.
            </p>
          </div>
          <a
            href="#"
            className="self-start lg:self-auto flex-shrink-0 px-8 py-4 bg-gradient-to-b from-blue-800 to-blue-700 text-slate-100 text-lg font-bold font-Inter rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600 transition-all"
          >
            View More
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product) => (
            <div
              key={product.name}
              className="relative rounded-[20px] overflow-hidden group cursor-pointer"
              style={{ height: 'clamp(380px, 45vw, 545px)' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/75" />

              {/* Badge */}
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1 bg-blue-700/80 backdrop-blur-sm text-white text-xs font-semibold font-Inter rounded-lg uppercase tracking-wider">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col gap-2.5">
                <h3 className="text-white text-2xl sm:text-4xl font-bold font-['Titillium_Web'] leading-10">
                  {product.name}
                </h3>
                <p className="text-white/85 text-base sm:text-lg font-Inter leading-6">
                  {product.description}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
