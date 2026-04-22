import { urlFor } from "../lib/sanity";
import Button from "./UI/Button";

export default function Certifications({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, items } = data;

  return (
    <section className={`py-20 px-6 sm:px-10 lg:px-14 ${darkMode ? 'bg-slate-950 text-white' : 'bg-[#0B1B3D] text-white'}`}>
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="heading-primary text-white mb-6">
            {title || "Our Certification"}
          </h2>
          <p className="text-subtitle">
            {subtitle || "As an SBA 8(a) Joint Venture, True North Joint Venture, LLC..."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {items?.map((cert, index) => (
            <div
              key={index}
              className={`rounded-3xl p-10 flex flex-col justify-between shadow-xl transition-all duration-300 ${darkMode ? 'bg-slate-900 text-white border border-slate-800' : 'bg-white text-slate-900'}`}
            >
              <div>
                {/* Top Image */}
                <div className="mb-8 h-20 flex items-center">
                  {cert.image && (
                    <img
                      src={urlFor(cert.image)}
                      alt={cert.name}
                      className="h-full object-contain"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-['Titillium_Web'] mb-4">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className={`text-lg leading-relaxed mb-10 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {cert.description ||
                    "geoConvergence has access to the STARS III vehicle through our Joint Venture, True North Joint Venture, LLC."}
                </p>
              </div>

              {/* Button */}
              <div>
                <Button variant="primary">
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