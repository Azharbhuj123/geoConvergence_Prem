import { urlFor } from "../lib/sanity"
import Button from "./UI/Button"
import clsx from "clsx";

const variants = {
  default: {
    light: {
      bg: "bg-white",
      title: "text-slate-900",
      subtitle: "text-slate-600",
    },
    dark: {
      bg: "bg-slate-950",
      title: "text-slate-100",
      subtitle: "text-slate-300",
    },
  },
  blue: {
    light: {
      bg: "bg-blue-950",
      title: "text-slate-100",
      subtitle: "text-slate-300",
    },
    dark: {
      bg: "bg-sky-950",
      title: "text-slate-100",
      subtitle: "text-slate-300",
    },
  },
};


export default function Services({ darkMode, services, variant = "default", className }) {
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
  const theme = variants[variant][darkMode ? "dark" : "light"];

  return (
    <section
      className={clsx(
        "py-20 lg:py-24 px-6 sm:px-8 lg:px-14",
        theme.bg,
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 items-center md:items-start text-center md:text-left">
          <div className="flex flex-col gap-5 max-w-[933px] items-center md:items-start">
            <h2
              className={clsx(
                "font-bold font-['Titillium_Web'] leading-tight",
                theme.title
              )}
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              {services?.sectionTitle || 'Connect Your Spaces to Smart Digital Twin'}
            </h2>
            <p className={clsx("text-lg sm:text-xl md:text-2xl font-Inter leading-8 md:leading-relaxed", theme.subtitle)}>
              {services?.sectionSubtitle || 'Bringing the gap from scan data to fully operational BIM models.'}
            </p>
          </div>
          <Button href="#" variant="primary" className="mx-auto md:mx-0 md:px-8 md:py-4">
            {'View More'}
          </Button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services?.cards?.map((step) => (
            <div
              key={step.title}
              className="relative rounded-[20px] overflow-hidden group cursor-pointer"
              style={{ height: 'clamp(400px, 50vw, 545px)' }}
            >
              {/* Background image */}
              <img
                src={step.image ? urlFor(step.image) : ''}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col gap-2.5 items-center md:items-start text-center md:text-left">
                <h3 className="text-white text-2xl sm:text-3xl font-bold font-['Titillium_Web'] leading-8">
                  {step.title}
                </h3>
                <p className="text-white/90 text-base sm:text-lg font-Inter leading-6">
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
