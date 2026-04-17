export default function Services({ darkMode }) {
  const steps = [
    {
      title: 'Capture',
      description:
        'High-precision LiDAR and photogrammetry laser scanning of your physical facilities at the speed of walking.',
      image: 'https://placehold.co/420x545/1e3a5f/ffffff?text=Capture',
    },
    {
      title: 'Process',
      description:
        'Automated cloud-based processing that converts raw point cloud data into structured BIM-ready architectural models.',
      image: 'https://placehold.co/420x545/1e3a5f/ffffff?text=Process',
    },
    {
      title: 'Integrate',
      description:
        'Seamlessly deploy your Digital Twin into asset management, wayfinding, and operational planning tools.',
      image: 'https://placehold.co/420x545/1e3a5f/ffffff?text=Integrate',
    },
  ]

  return (
    <section
      className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
          <div className="flex flex-col gap-5 max-w-[933px]">
            <h2
              className={`font-bold font-['Titillium_Web'] leading-tight ${
                darkMode ? 'text-slate-100' : 'text-slate-900'
              }`}
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              Connect Your Spaces to Smart Digital Twin
            </h2>
            <p className={`text-lg sm:text-xl font-['Inter'] leading-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Bridging the gap from scan data to fully operational BIM models.
            </p>
          </div>
          <a
            href="#"
            className="self-start lg:self-auto flex-shrink-0 px-8 py-4 bg-gradient-to-b from-blue-800 to-blue-700 text-white text-lg font-bold font-['Inter'] rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600 transition-all"
          >
            View More
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-[20px] overflow-hidden group cursor-pointer"
              style={{ height: 'clamp(400px, 50vw, 545px)' }}
            >
              {/* Background image */}
              <img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col gap-2.5">
                <h3 className="text-white text-2xl sm:text-3xl font-bold font-['Titillium_Web'] leading-8">
                  {step.title}
                </h3>
                <p className="text-white/90 text-base sm:text-lg font-['Inter'] leading-6">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
