import { useMemo, useState } from "react";
import Button from "./UI/Button";
import PopupModal from "./PopupModal";
import { urlFor } from "../lib/sanity";
import { motion as Motion } from 'framer-motion';
import { eightStarPageData } from "../lib/data/eightStarPageData";
import { NAVSEASeaportPageData } from "../lib/data/NAVSEASeaportPageData";
import { gSAMASPageData } from "../lib/data/gSAMAS";
import { Sba8aPageData } from "../lib/data/Sba8aPageData";
import EightStarPage from "../pages/EightStarPage";
import GSAMasPage from "../pages/GSAMasPage";
import NAVSEASeaportPage from "../pages/NAVSEASeaportPage";
import GSS2Page from "../pages/GSS2Page";

const sharedContact = [
  "geoConvergence, LLC",
  "642 N Madison Street Bloomington IN 47404",
  "Point of Contact: Prem Radhakrishnan",
  "Phone: (855) 447-3939",
  "Direct: (812) 219-7524",
  "Email: prem@geoconvergence.com",
];

const popupContent = {
  "8star": {
    title: eightStarPageData.contractInfo.title,
    subtitle: eightStarPageData.hero.subtitle,
    description: eightStarPageData.mainDescription,
    image: eightStarPageData.contractInfo.image,
    sections: [
      {
        type: "table",
        title: "Contract Information",
        rows: eightStarPageData.tableData,
      },
    ],
    CTA: eightStarPageData.finalCta,
  },
  "navsea-seaport": {
    title: NAVSEASeaportPageData.contractInfo.title,
    subtitle: NAVSEASeaportPageData.hero.subtitle,
    description: NAVSEASeaportPageData.mainDescription,
    image: NAVSEASeaportPageData.contractInfo.image,
    sections: [
      {
        type: "list",
        title: NAVSEASeaportPageData.firstSolution.title,
        items: NAVSEASeaportPageData.firstSolution.services,
      },
      {
        type: "list",
        title: NAVSEASeaportPageData.secondSolution.title,
        items: NAVSEASeaportPageData.secondSolution.services,
      },
    ],
    CTA: NAVSEASeaportPageData.finalCta,
  },
  "gsa-mas": {
    title: gSAMASPageData.contractInfo.title,
    subtitle: gSAMASPageData.hero.subtitle,
    description: gSAMASPageData.mainDescription,
    image: gSAMASPageData.contractInfo.image,
    sections: [
      {
        type: "list",
        title: gSAMASPageData.firstSolution.title,
        items: gSAMASPageData.firstSolution.services,
      },
      {
        type: "list",
        title: gSAMASPageData.secondSolution.title,
        items: gSAMASPageData.secondSolution.services,
      },
    ],
    CTA: gSAMASPageData.finalCta,
  },
  "gss-2.0": {
    title: "GS&S 2.0",
    subtitle: "Advanced geospatial support and mapping solutions for mission planning and operational decision-making.",
    description: [
      "GS&S 2.0 provides high-precision geospatial intelligence, real-time mapping, and mission-ready support to enhance operational planning and decision-making for USAF missions.",
    ],
    image: NAVSEASeaportPageData.contractInfo.image,
    sections: [
      {
        type: "cards",
        title: "Capabilities",
        items: [
          {
            title: "Advanced Geospatial Support",
            description: "Accurate data, analysis, and real-time mapping for mission needs.",
          },
          {
            title: "Precision Mapping Solutions",
            description: "Procurement-ready mapping support aligned to government workflows.",
          },
          {
            title: "Reliable Mission Support",
            description: "Consistent delivery for operational and program requirements.",
          },
          {
            title: "Data-Driven Insights",
            description: "Geospatial intelligence that improves planning, visibility, and decisions.",
          },
        ],
      },
    ],
    CTA: NAVSEASeaportPageData.finalCta,
  },
  "sba-8a": {
    title: Sba8aPageData.contractInfo.title,
    subtitle: Sba8aPageData.hero.subtitle,
    description: Sba8aPageData.mainDescription,
    image: Sba8aPageData.contractInfo.image,
    sections: [
      {
        type: "list",
        title: Sba8aPageData.firstSolution.title,
        items: Sba8aPageData.firstSolution.services,
      },
      {
        type: "contact",
        title: "Contact",
        items: sharedContact,
      },
    ],
    CTA: Sba8aPageData.finalCta,
  },
  "hubzone": {
    title: "U.S. HUBZone Certified",
    subtitle: "Streamlined HUBZone contracting support for eligible federal opportunities.",
    description: [
      "geoConvergence helps agencies move from requirement definition to contract award with clear technical scoping, acquisition support, and responsive program coordination.",
    ],
    image: Sba8aPageData.contractInfo.image,
    sections: [
      {
        type: "contact",
        title: "geoConvergence Contact",
        items: sharedContact,
      },
      {
        type: "steps",
        title: "Streamlined Sole Source Process",
        items: [
          "Discuss the project with geoConvergence and establish technical requirements, timeline, and price estimate.",
          "Contact the Contracting Officer, Agency Small Business Specialist, or SBA Business Opportunity Specialist for assistance.",
          "The Contracting Officer sends an Offering Letter to the SBA requesting permission to negotiate with geoConvergence.",
          "The SBA confirms eligibility and authorizes negotiations.",
          "The Contracting Officer negotiates cost and terms with geoConvergence.",
          "The award document is prepared and sent to geoConvergence for signature.",
          "The Contracting Officer signs the executed contract and sends it to the SBA.",
          "Contract performance begins after award completion.",
        ],
      },
    ],
    CTA: Sba8aPageData.finalCta,
  },
};

const slugFromName = (name = "") =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\(a\)/g, "a")
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-|-$/g, "");

const renderImage = (image, alt) => {
  if (!image) return null;
  const src = typeof image === "string" ? image : urlFor(image);
  return <img src={src} alt={alt} className="max-h-20 w-auto object-contain" />;
};

export default function ContractVehicles({ data, darkMode, showButton = true }) {
  const [selectedPopup, setSelectedPopup] = useState(null);
  const { title, subtitle, vehicles } = data || {};
  const selectedVehicle = vehicles?.find(
    (item) => (item.button?.popupSlug || slugFromName(item.name)) === selectedPopup
  );
  const activeContent = useMemo(() => {
    if (!selectedPopup) return null;
    const content = popupContent[selectedPopup];
    if (content) return content;

    return {
      title: selectedVehicle?.name || "Contract Vehicle",
      subtitle: selectedVehicle?.description,
      description: selectedVehicle?.description ? [selectedVehicle.description] : [],
      image: selectedVehicle?.image,
      sections: [],
      CTA: { button1: { text: "Contact Us", link: "/contact" } },
    };
  }, [selectedPopup, selectedVehicle]);
  
  const closePopup = () => setSelectedPopup(null);

  if (!data) return null;

  return (
    <section
      className={`w-full py-10 xl:pb-20 px-6 sm:px-10 xl:px-14 ${darkMode ? "bg-slate-900" : "bg-[#fff]"}`}
    >
      {/* Header */}
      <div className="max-w-[1440px] mx-auto mb-4 md:mb-12">
        <h2
          className={`heading-primary font-Web mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          {title || "Contract Vehicles"}
        </h2>
        <p
          className={`text-subtitle leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {vehicles?.map((item, index) => (
          <Motion.article
            key={`${item.name}-${index}`}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex flex-col justify-between min-h-[400px] rounded-3xl shadow-xl transition-all duration-200 ${darkMode ? "bg-[#0B1B3D] text-white" : "bg-[#09155F] text-white"}`}>
            <div
              className={`rounded-3xl p-8 flex flex-col justify-between min-h-[380px] shadow-xl transition-all duration-300 ${darkMode ? "bg-[#0B1B3D] text-white" : "bg-[#09155F] text-white"}`}
            >
              {/* Top */}
              <div>
                {/* Logo */}
                <div className="mb-8 h-20 flex items-center justify-center">
                  {item.image && (
                    <img
                      src={urlFor(item.image)}
                      alt={item.name}
                      className="h-full object-contain"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-Web mb-4 text-center">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
                  {item.description}
                </p>
              </div>

              {/* Button */}
              {showButton &&
                <div className="mt-auto">
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    className="w-full cursor-pointer"
                    onClick={() => setSelectedPopup(item.button?.popupSlug || slugFromName(item.name))}
                  >
                    {item.button?.text || "Know More"}
                  </Button>
                </div>
              }
            </div>
          </Motion.article>
        ))}
      </div>

      <PopupModal
        isOpen={Boolean(activeContent)}
        onClose={closePopup}
        title={""}
        darkMode={darkMode}
      >
        {activeContent?.title === "8(a) STARS III" && <EightStarPage/> }
        {activeContent?.title === "GSA Schedule" && <GSAMasPage/> }
        {activeContent?.title === "SEAPORT" && <NAVSEASeaportPage/> }
        {activeContent?.title === "Air Force GSS2" && <GSS2Page/> }
        
      </PopupModal>
    </section>
  );
}
