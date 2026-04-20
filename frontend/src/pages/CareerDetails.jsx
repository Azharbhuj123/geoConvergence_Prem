import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCareerDetails } from "../lib/api";
import { pageData } from "../lib/data/page";
import { useThemeStore } from "../store/useThemeStore";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ShortHero from "../components/ShortHero";
import Testimonials from "../components/Testimonials";

const TESTIMONIALS = [
  { name: "Theodore James", featured: false },
  { name: "Liam Oliver", featured: true },
  { name: "Charlotte Amelia", featured: false },
];

const SERVICES = [
  "Scan2Twin",
  "Indoor Mapping",
  "LiDAR Scanning",
  "3D Modeling",
  "ArcGIS Indoors",
];
const COMPANY_LINKS = ["About us", "Careers", "Contact us", "Lift Media"];

// ─── Sub-components ──────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 fill-[#326FB7]" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function CvIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="8" width="36" height="48" rx="4" fill="#1a1a2e" />
      <rect
        x="16"
        y="18"
        width="24"
        height="3"
        rx="1.5"
        fill="white"
        opacity=".7"
      />
      <rect
        x="16"
        y="26"
        width="24"
        height="3"
        rx="1.5"
        fill="white"
        opacity=".7"
      />
      <rect
        x="16"
        y="34"
        width="16"
        height="3"
        rx="1.5"
        fill="white"
        opacity=".7"
      />
      <circle cx="46" cy="44" r="12" fill="#326FB7" />
      <text
        x="46"
        y="49"
        textAnchor="middle"
        fontSize="13"
        fill="white"
        fontWeight="700"
      >
        CV
      </text>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="fill-black dark:fill-gray-800"
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-black dark:text-gray-800"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="fill-black dark:fill-gray-800"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function HowToApply({ items }) {
  if (!items) return null;
  return (
    <div className="bg-[var(--bg-secondary)] rounded-[20px] p-7 flex flex-col gap-5">
      <div className="bg-[#000941] rounded-[14px] py-2.5 px-5 text-white  text-[22px] font-bold text-center leading-snug w-full">
        How To Apply?
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-[var(--muted)] text-[15px] leading-relaxed"
          >
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SendCVCard() {
  return (
    <div className="bg-[var(--bg-secondary)] rounded-[20px] p-7 flex flex-col items-center gap-5 text-center">
      <div className="w-[90px] h-[90px] rounded-full bg-[#e2e8f0] dark:bg-slate-700 flex items-center justify-center">
        <CvIcon />
      </div>
      <h3 className=" text-[22px] font-bold text-[var(--text)]">
        Send us your C.V.
      </h3>
      <p className="text-[var(--muted)] text-[15px] leading-relaxed max-w-[240px]">
        Send us your C.V.
        <br />
        Do you want to work with us? Please, send your CV to{" "}
        <strong className="font-bold">Info123@gmail.com</strong>
      </p>
      <p className="text-[var(--muted)] font-bold text-base">OR</p>
      <button className="px-8 py-3 bg-gradient-to-br from-[#0043AC] to-[#0C59DB] rounded-[14px] text-[#F2F4FA] font-bold text-[15px] tracking-wide shadow-[0_8px_20px_-6px_rgba(12,89,219,0.4)] hover:opacity-90 transition-opacity">
        CONTACT US
      </button>
    </div>
  );
}

// ─── Main Right Panel ─────────────────────────────────────────────────────────

function JobStats({ stats }) {
  if (!stats) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 border-t-none border-[var(--border)] mt-20">
      {stats.map(({ label, value }, i) => (
        <div
          key={label}
          className={`py-4 px-2 text-center flex flex-col gap-0.5 ${
            i < stats.length - 1
              ? "border-r border-[#BABABA] dark:border-slate-600"
              : ""
          }`}
        >
          <span className=" text-[17px] font-bold text-[var(--heading)] leading-tight">
            {label}
          </span>
          <span className=" text-[17px] font-bold text-[var(--heading)] leading-tight">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function JobTabs({ activeTab, setActiveTab, tabs, tabData }) {
  if (!tabs || !tabData) return null;
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-5 justify-around">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-10 py-2 rounded-[14px] text-[13px] font-bold transition-all cursor-pointer  ${
              activeTab === t.key
                ? "bg-[#000941] text-white"
                : "bg-[var(--card)] text-[var(--muted)] outline outline-1 outline-[var(--border)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="h-[2px] bg-[var(--border)] my-4" />
      <div className="border border-[var(--border)] rounded-[14px] p-6 text-[15px] leading-[1.75] text-[var(--text)] bg-[var(--card)] transition-colors duration-200">
        {tabData[activeTab]}
      </div>
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const { theme, toggleTheme } = useThemeStore();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["careerDetails", id],
    queryFn: () => fetchCareerDetails(id),
    enabled: !!id,
  });

  const careerDetails = data || pageData.careerDetailsPage;
  const TAB_DATA = careerDetails.tabData;
  const TABS = careerDetails.tabs;
  const STATS = careerDetails.stats;
  const APPLY_ITEMS = careerDetails.applyItems;

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-[var(--bg)] mx-auto overflow-x-hidden transition-colors duration-200">
        <Navbar darkMode={theme === "dark"} toggleDarkMode={toggleTheme} />
        <ShortHero title="Career Details" />

        {/* Career Detail */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-14 py-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 items-start">
            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <HowToApply items={APPLY_ITEMS} />
              <SendCVCard />
            </div>

            {/* Main content */}
            <div className="flex flex-col gap-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=75"
                alt="Professional working at laptop"
                className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover rounded-[20px]"
              />
              <JobStats stats={STATS} />
              <JobTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={TABS}
                tabData={TAB_DATA}
              />
            </div>
          </div>
        </section>

        <Testimonials darkMode={theme === "dark"} />
        <CTA darkMode={theme === "dark"} />
        <Footer darkMode={theme === "dark"} />
      </div>
    </div>
  );
}
