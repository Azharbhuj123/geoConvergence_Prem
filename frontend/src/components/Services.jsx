import { urlFor } from "../lib/sanity";
import Button from "./UI/Button";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const variants = {
  default: {
    light: {
      bg: "bg-white",
      // title: "text-slate-900",
      // subtitle: "text-slate-600",
      title: "#0f172a",
      subtitle: "#111111",
    },
    dark: {
      bg: "#0f172a",
      // title: "text-slate-100",
      // subtitle: "text-slate-300",
      title: "#f1f5f9",
      subtitle: "#94a3b8",
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
  maxWidth
}) {
  const theme = variants[variant][darkMode ? "dark" : "light"];

  const isHex = theme.bg.startsWith("#");
  const navigate = useNavigate();

  return (
    <section
      className={clsx(
        "py-10 md:py-20 pb-20 px-6 sm:px-8 lg:px-14",
        !isHex && theme.bg,
        className
      )}
      style={isHex ? { backgroundColor: theme.bg } : undefined}
    >
      <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-12">
          <div className="flex flex-col gap-5 max-w-[600px] xl:max-w-[993px]">
            <h2
              className={clsx(
                "heading-primary font-Web",
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
                maxWidth
              )}
            >
              {services?.subTitle ||
                services?.sectionSubtitle ||
                "Bringing the gap from scan data to fully operational BIM models."}
            </p>
          </div>
          {button && (
            <div>
              <Button
                href={services?.button?.link || "#"}
                variant="primary"
                size="md"

              >
                {services?.button?.text || "View More"}
              </Button>
            </div>
          )}
        </div>

        {/* Cards grid */}
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-2 gap-7",
            services?.cards?.length === 4
              ? "xl:grid-cols-4"
              : "xl:grid-cols-6",
              services?.cards?.length === 2 && "xl:grid-cols-2"
          )}
        >
          {services?.cards?.map((step, index) => {
            const total = services?.cards?.length || 0;

            let xlSpan = total === 2 ? "xl:col-span-3" : "xl:col-span-2";

            // Last 2 cards become 50/50 on xl
            if (total === 5 && index >= 3) {
              xlSpan = "xl:col-span-3";
            }
            return (
              <div
                key={step.title || index}
                className={`
  relative rounded-[20px]
  overflow-hidden
  group ${step?.link ? 'cursor-pointer' : ''}
  h-[400px] sm:h-[450px] xl:h-[545px]
  ${total !== 4 ? xlSpan : ""}
`}
                onClick={() => {
                  if (step?.link) {
                    navigate(step?.link);
                  }
                }}
              >
                {/* Background Image */}
                {step.image ? (
                  <img
                    src={urlFor(step.image)}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-500 to-[#000941]" />
                )}

                {/* Gradient Overlay - Darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 transition-all duration-700 group-hover:to-black/85 group-hover:via-black/50" />

                {/* Content Container - Slides UP on hover */}
                <div className="absolute bottom-0 left-0 right-0">

                  {/* DEFAULT CONTENT (always visible) */}
                  {/* <div className="backdrop-blur-md [mask-image:linear-gradient(to_top,black_75%,transparent)] bg-white/5 group-hover:opacity-0 p-6 sm:p-7 flex flex-col gap-2.5"> */}
                  <div
                    className="
    backdrop-blur-md
    [mask-image:linear-gradient(to_top,black_75%,transparent)]
    bg-white/5
    p-6 sm:p-7
    flex flex-col gap-2.5
    transition-opacity duration-.15
    group-hover:opacity-0
  "
                  >
                    <h3 className="text-white text-2xl sm:text-3xl font-bold font-Web leading-8">
                      {step.title}
                    </h3>

                    <p className="text-white/90 text-lg sm:text-xl font-Inter leading-6 line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* HOVER OVERLAY (slides from bottom) */}
                  <div
                    className="
    backdrop-blur-sm
    absolute inset-0
    p-6 sm:p-7
    flex flex-col justify-end gap-2.5
    translate-y-full
    opacity-0
    transition-all duration-500 delay-.05 ease-out
    group-hover:translate-y-0
    group-hover:opacity-100
  "
                  >
                    <h3 className="text-white text-2xl sm:text-3xl font-bold font-Web leading-8">
                      {step.title}
                    </h3>

                    <p className="text-white/90 text-base sm:text-lg font-Inter leading-6">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
