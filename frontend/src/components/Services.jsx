import { urlFor } from "../lib/sanity";
import Button from "./UI/Button";
import clsx from "clsx";

const variants = {
  default: {
    light: {
      bg: "bg-white",
      title: "text-slate-900",
      subtitle: "text-slate-600",
    },
    dark: {
      bg: "#0f172a",
      title: "text-slate-100",
      subtitle: "text-slate-300",
    },
  },
  blue: {
    light: {
      bg: "#09155F",
      title: "text-slate-100",
      subtitle: "text-slate-300",
    },
    dark: {
      bg: "bg-blue-950",
      title: "text-slate-100",
      subtitle: "text-slate-300",
    },
  },
};

export default function Services({
  darkMode,
  services,
  variant = "default",
  className,
  button = true,
  length,
}) {
  const theme = variants[variant][darkMode ? "dark" : "light"];

  const isHex = theme.bg.startsWith("#");

  return (
    <section
      className={clsx(
        "py-20 pb-20 px-6 sm:px-8 lg:px-14",
        !isHex && theme.bg,
        className
      )}
      style={isHex ? { backgroundColor: theme.bg } : undefined}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12">
          <div className="flex flex-col gap-5 max-w-[600px] xl:max-w-[993px]">
            <h2
              className={clsx(
                "heading-primary font-Web ",
                theme.title,
              )}
            >
              {services?.sectionTitle ||
                "Connect Your Spaces to Smart Digital Twin"}
            </h2>
            <p
              className={clsx(
                "text-subtitle",
                theme.subtitle,
              )}
            >
              {services?.sectionSubtitle ||
                "Bringing the gap from scan data to fully operational BIM models."}
            </p>
          </div>
          {button && (
            <Button
              href="#"
              variant="primary"
              size="md"
              
            >
              {"View More"}
            </Button>
          )}
        </div>

        {/* Cards grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${length || 3} gap-7`}>
          {services?.cards?.map((step, index) => (
            <div
              key={step.title || index}
              className="relative rounded-[20px] overflow-hidden group cursor-pointer h-[400px] sm:h-[450px] xl:h-[545px]"
            >
              {/* Background Image */}
              <img
                src={step.image ? urlFor(step.image) : ""}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
              />

              {/* Gradient Overlay - Darker on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 transition-all duration-700 group-hover:to-black/85 group-hover:via-black/50" />

              {/* Content Container - Slides UP on hover */}
              <div className="backdrop-blur-sm absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col gap-2.5 transition-all duration-700 group-hover:-translate-y-6">
                <h3 className="text-white text-2xl sm:text-3xl font-bold font-Web leading-8">
                  {step.title}
                </h3>
                <p className="text-white/90 text-base sm:text-lg font-Inter leading-6 transition-all duration-700 group-hover:line-clamp-none line-clamp-3">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}