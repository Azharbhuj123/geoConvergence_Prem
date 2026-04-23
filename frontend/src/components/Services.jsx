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
      bg: "bg-slate-950",
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
  button=true
}) {
  const steps = [
    {
      title: "Capture",
      description:
        "High-precision LiDAR and photogrammetry laser scanning of your physical facilities at the speed of walking.",
      image: "https://placehold.co/420x545/1e3a5f/ffffff?text=Capture",
    },
    {
      title: "Process",
      description:
        "Automated cloud-based processing that converts raw point cloud data into structured BIM-ready architectural models.",
      image: "https://placehold.co/420x545/1e3a5f/ffffff?text=Process",
    },
    {
      title: "Integrate",
      description:
        "Seamlessly deploy your Digital Twin into asset management, wayfinding, and operational planning tools.",
      image: "https://placehold.co/420x545/1e3a5f/ffffff?text=Integrate",
    },
  ];
  const theme = variants[variant][darkMode ? "dark" : "light"];

  const isHex = theme.bg.startsWith("#");
  return (

<section
  className={clsx(
    "py-20 mb-20 px-6 sm:px-8 lg:px-14",
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
                "font-bold font-['Titillium_Web'] leading-tight text-[clamp(1.5rem,3.5vw,3rem)]",
                theme.title,
              )}
            >
              {services?.sectionTitle ||
                "Connect Your Spaces to Smart Digital Twin"}
            </h2>
            <p
              className={clsx(
                "text-lg sm:text-xl font-Inter leading-8",
                theme.subtitle,
              )}
            >
              {services?.sectionSubtitle ||
                "Bringing the gap from scan data to fully operational BIM models."}
            </p>
          </div>
          {button && <Button
            href="#"
            variant="primary"
            className="px-8 py-4 w-50 h-14 relative bg-gradient-to-b from-blue-800 to-blue-700 rounded-2xl inline-flex flex-col justify-center items-center"
          >
            {"View More"}
          </Button>}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services?.cards?.map((step) => (
            <div
              key={step.title}
              className="relative rounded-[20px] overflow-hidden group cursor-pointer"
              style={{ height: "clamp(400px, 30vw, 545px)" }}
            >
              {/* Background image */}
              <img
                src={step.image ? urlFor(step.image) : ""}
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
                <p className="text-white/90 text-base sm:text-lg font-Inter leading-6">
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
