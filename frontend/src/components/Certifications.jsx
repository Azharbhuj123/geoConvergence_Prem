import { urlFor } from "../lib/sanity";
import { useWindowSize } from "../store/useThemeStore";
import Button from "./UI/Button";

export default function Certifications({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, items } = data;
  const { width } = useWindowSize()
  const isLarge = width >= 1024;

  return (
    <section className={`py-16 md:py-20 lg:py-24 ${darkMode ? 'bg-slate-950 text-white' : 'bg-[#0B1B3D] text-white'}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">

        {/* Heading */}
        <div className="mb-12 md:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Titillium_Web'] mb-4 md:mb-6">
            {title || "Our Certification"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed md:leading-relaxed">
            {subtitle || "As an SBA 8(a) Joint Venture, True North Joint Venture, LLC..."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {items?.map((cert, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between shadow-xl transition-all duration-300 items-center md:items-start text-center md:text-left ${darkMode ? 'bg-slate-900 text-white border border-slate-800' : 'bg-white text-slate-900'}`}
            >
              <div className="w-full flex flex-col items-center md:items-start">
                {/* Top Image */}
                <div className="mb-6 md:mb-8 h-16 md:h-20 flex items-center justify-center md:justify-start w-full">
                  {cert.image && (
                    <img
                      src={urlFor(cert.image)}
                      alt={cert.name}
                      className="h-full object-contain"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-['Titillium_Web'] mb-3 md:mb-4">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className={`text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 w-full ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {cert.description ||
                    "geoConvergence has access to the STARS III vehicle through our Joint Venture, True North Joint Venture, LLC."}
                </p>
              </div>

              {/* Button */}
              <div className="w-full flex justify-center md:justify-start">
                <Button variant="primary" size={isLarge ? "lg" : "sm"} className="px-6 py-3 md:px-8 md:py-4">
                  View All
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}