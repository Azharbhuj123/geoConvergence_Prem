import { useMemo, useState } from "react";
import { urlFor } from "../lib/sanity";
import { useWindowSize } from "../store/useThemeStore";
import Button from "./UI/Button";
import PopupModal from "./PopupModal";
import Sba8aPage from "../pages/Sba8aPage";
import HubZonePage from "../pages/HubZonePage";

const popupComponents = {
  "sba-8a": Sba8aPage,
  hubzone: HubZonePage,
};

const slugFromName = (name = "") => {
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes("hubzone")) return "hubzone";
  if (normalizedName.includes("8(a)") || normalizedName.includes("8a")) return "sba-8a";

  return normalizedName
    .replace(/&/g, "and")
    .replace(/\(a\)/g, "a")
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-|-$/g, "");
};

export default function Certifications({ data, darkMode, showButton = true }) {
  const [selectedPopup, setSelectedPopup] = useState(null);

  const activePopup = useMemo(() => {
    if (!selectedPopup) return null;

    const Component = popupComponents[selectedPopup];
    if (!Component) return null;

    return { Component };
  }, [selectedPopup]);

  const closePopup = () => setSelectedPopup(null);

  if (!data) return null;

  const { title, subtitle, items } = data;
  const { width } = useWindowSize()
  const isLarge = width >= 1024;

  return (
    <section className={`py-20 px-6 sm:px-10 lg:px-14 ${darkMode ? 'bg-slate-950 text-white' : 'bg-[#09155F] text-white'}`}>
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="heading-primary font-Web text-white mb-6">
            {title || "Our Certification"}
          </h2>
          <p className="text-subtitle text-white/80">
            {subtitle || "As an SBA 8(a) Joint Venture, True North Joint Venture, LLC..."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {items?.map((cert, index) => {
            const popupSlug = cert.button?.popupSlug || cert.popupSlug || slugFromName(cert.name);
            const hasPopup = Boolean(popupComponents[popupSlug]);

            return (
              <div
                key={index}
                className={`rounded-3xl p-10 flex flex-col justify-between shadow-xl transition-all duration-300 ${darkMode ? 'bg-slate-900 text-white border border-slate-800' : 'bg-white text-slate-900'}`}
              >
                <div>
                  {/* Top Image */}
                  <div className="mb-8 h-30 flex items-center">
                    {cert.image && (
                      <img
                        src={urlFor(cert.image)}
                        alt={cert.name}
                        className="h-full object-contain"
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold font-Web mb-4">
                    {cert.name}
                  </h3>

                  {/* Description */}
                  <p className={`font-Inter text-subtitle leading-relaxed mb-10 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    {cert.description ||
                      "geoConvergence has access to the STARS III vehicle through our Joint Venture, True North Joint Venture, LLC."}
                  </p>
                </div>

                {/* Button */}
                {showButton && hasPopup &&
                  <div>
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      onClick={() => setSelectedPopup(popupSlug)}
                    >
                      {cert.button?.text || "Know more"}
                    </Button>
                  </div>
                }
              </div>
            );
          })}
        </div>
      </div>

      <PopupModal
        isOpen={Boolean(activePopup)}
        onClose={closePopup}
        title={""}
        darkMode={darkMode}
      >
        {activePopup && <activePopup.Component />}
      </PopupModal>
    </section>
  );
}
