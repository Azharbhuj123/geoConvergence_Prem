import Button from "./UI/Button";
import { urlFor } from "../lib/sanity";
import { useThemeStore } from "../store/useThemeStore";

const finalCta = {
  title: "Ready to define your digital dimension?",
  subtitle:
    "Join hundreds of organizations using geoConvergence to unlock the full potential of their physical assets.",
  button1: {
    text: "Schedule a Consultation",
    link: "#",
  },
  button2: {
    text: "View Case Studies",
    link: "#",
  },
  backgroundImage: {
    _type: "image",
    asset: {
      _ref: "image-9aedb38aefaf4d3ee8418015a0fbaccc866c1ed5-1320x532-png",
      _type: "reference",
    },
  },
};

export default function CTA({ darkMode, CtaData }) {
  const { theme } = useThemeStore();
  const data = CtaData || finalCta;

  const title = data.title || finalCta.title;
  const subtitle = data.subtitle || finalCta.subtitle;

  const btn1 = data.button1 || finalCta.button1;
  const btn2 = data.button2 || finalCta.button2;

  const bgImage = data.backgroundImage ? urlFor(data.backgroundImage) : null;
  const hasCustomBackground = !!data.backgroundImage;

  return (
    <section
      className={`py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[var(--bg)] ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          className="relative rounded-[32px] overflow-hidden p-6 sm:p-10 md:p-14 lg:p-20 xl:p-24 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 bg-cover bg-center"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
          }}
        >
          {/* Dark Overlay + Effects - ONLY when NO custom background */}
          {!hasCustomBackground && (
            <>
              <div className="absolute inset-0 bg-slate-900/80" />
              <div className="absolute inset-0 mix-blend-hue bg-slate-900" />

              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl" />
            </>
          )}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center">
            <h2 className="text-white font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-2xl max-w-4xl">
              {title}
            </h2>

            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl drop-shadow-xl opacity-90">
              {subtitle}
            </p>
          </div>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-4 w-full">
            <Button
              href={btn1.link}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] sm:min-w-[220px]"
            >
              {btn1.text}
            </Button>

            <Button
              href={btn2.link}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] sm:min-w-[220px]"
            >
              {btn2.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
