import Button from "./UI/Button";
import { useThemeStore } from "../store/useThemeStore";
import video from "../assets/CTA.mp4";

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
};

export default function CTA({ darkMode, CtaData }) {
  const { theme } = useThemeStore();
  const data = CtaData || finalCta;

  const title = data.title || finalCta.title;
  const subtitle = data.subtitle || finalCta.subtitle;

  const btn1 = data.button1 || finalCta.button1;
  const btn2 = data.button2 || finalCta.button2;

  return (
    <section
      className={`pb-12 lg:pb-[6rem] px-6 sm:px-8 lg:px-14 bg-[var(--bg)] ${theme === "dark" ? "dark" : ""
        }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 lg:p-24 flex flex-col items-center gap-9 min-h-[420px]">

            {/* Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>

            {/* Dark + brand overlay (this is what you actually want) */}
            <div className="absolute inset-0 bg-[#001536]/70" />

            {/* Optional soft gradient like your screenshot */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001536]/80 via-[#001536]/40 to-[#001536]/80" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              <h2 className="text-white font-bold leading-tight text-[clamp(2rem,5vw,4.063rem)] lg:w-[685.069px]">
                {title}
              </h2>

              <p className="text-white text-lg sm:text-[20px] leading-8 max-w-[756px]">
                {subtitle}
              </p>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-7 pt-4">
              <Button href={btn1.link} variant="primary" size="lg">
                {btn1.text}
              </Button>

              <Button href={btn2.link} variant="secondary" size="lg">
                {btn2.text}
              </Button>
            </div>
          </div>

        </div>
    </section>
  );
}