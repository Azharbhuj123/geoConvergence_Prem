import { urlFor } from "../lib/sanity";

export default function Certifications({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, items } = data;

  return (
    <section className="bg-[#06135e] py-24 text-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-['Titillium_Web']">
            {title}
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {items?.map((cert, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl p-8 flex flex-col justify-between shadow-lg"
            >

              {/* Top Image */}
              <div className="mb-6">
                {cert.image && (
                  <img
                    src={urlFor(cert.image)}
                    alt={cert.name}
                    className="h-16 object-contain"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">
                {cert.name}
              </h3>

              {/* Description (optional field fallback safe) */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {cert.description ||
                  "geoConvergence has access to the STARS III vehicle through our Joint Venture, True North Joint Venture, LLC."}
              </p>

              {/* Button */}
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm transition">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}