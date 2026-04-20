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
      className={`py-12 lg:py-12    bg-[var(--bg)] ${
        // darkMode ? "bg-slate-950" : "bg-slate-50"
        theme === "dark" ? "dark" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14   ">
        <div
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 lg:p-24 flex flex-col items-center gap-9 bg-cover bg-center"
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
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <h2 className="text-white font-bold leading-tight text-[clamp(2rem,5vw,3.75rem)] drop-shadow-xl">
              {title}
            </h2>

            <p className="text-white text-lg sm:text-xl leading-8 max-w-[756px] drop-shadow-xl">
              {subtitle}
            </p>
          </div>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-7 pt-4">
            <Button
              href={btn1.link}
              variant="primary"
              className="px-12 py-4 text-lg"
            >
              {btn1.text}
            </Button>

            <Button
              href={btn2.link}
              variant="secondary"
              className="px-12 py-4 text-lg"
            >
              {btn2.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
