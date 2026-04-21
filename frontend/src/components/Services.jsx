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
  const theme = variants[variant][darkMode ? "dark" : "light"];

  return (
    <section
      className={clsx(
        "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
        theme.bg,
        className
      )}
    >
      <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 sm:gap-10 mb-12 sm:mb-16 md:mb-20 text-center lg:text-left">
          <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl">
            <h2
              className={clsx(
                "font-extrabold font-['Titillium_Web'] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight",
                theme.title
              )}
            >
              {services?.sectionTitle || 'Connect Your Spaces to Smart Digital Twin'}
            </h2>
            <p className={clsx("text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-Inter leading-relaxed opacity-80", theme.subtitle)}>
              {services?.sectionSubtitle || 'Bridging the gap from scan data to fully operational BIM models.'}
            </p>
          </div>
          <div className="pt-4 lg:pt-0">
            <Button href="#" variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
              {'View More'}
            </Button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services?.cards?.map((step) => (
            <div
              key={step.title}
              className="relative rounded-[32px] overflow-hidden group cursor-pointer h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[545px] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background image */}
              <img
                src={step.image ? urlFor(step.image) : ''}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold font-['Titillium_Web'] leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium font-Inter leading-relaxed line-clamp-3">
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
