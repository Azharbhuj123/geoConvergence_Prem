import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCareerDetails } from "../lib/api";
import { pageData } from "../lib/data/page";
import { useThemeStore } from "../store/useThemeStore";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ShortHero from "../components/ShortHero";
import Testimonials from "../components/Testimonials";
import Button from "../components/UI/Button";

// ─── Sub-components ──────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 fill-[#326FB7] mt-1" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function CvIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="8" width="36" height="48" rx="4" fill="#FFF" />
      <rect
        x="16"
        y="18"
        width="24"
        height="3"
        rx="1.5"
        fill="black"
        opacity=".7"
      />
      <rect
        x="16"
        y="26"
        width="24"
        height="3"
        rx="1.5"
        fill="black"
        opacity=".7"
      />
      <rect
        x="16"
        y="34"
        width="16"
        height="3"
        rx="1.5"
        fill="black"
        opacity=".7"
      />
      <circle cx="46" cy="44" r="12" fill="#326FB7" />
      <text
        x="46"
        y="49"
        textAnchor="middle"
        fontSize="13"
        fill="black"
        fontWeight="700"
      >
        CV
      </text>
    </svg>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function HowToApply({ items }) {
  if (!items) return null;
  return (
    <div className="bg-[var(--bg-secondary)] rounded-[20px] p-7 flex flex-col gap-5">
      <div className="bg-[#000941] rounded-[14px] py-2.5 px-5 text-white text-lg sm:text-xl xl:text-[30px] font-bold font-Web text-center leading-snug w-full">
        How To Apply?
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-flex-start gap-2 text-[var(--muted)] text-lg sm:text-xl leading-relaxed"
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
      <div className="w-[90px] h-[90px] rounded-full bg-[#e2e8f0] dark:bg-black flex items-center justify-center">
        <CvIcon />
      </div>
      <h3 className="text-lg sm:text-xl xl:text-[30px] font-bold text-[var(--text)] font-Web">
        Send us your C.V.
      </h3>
      <p className="text-[var(--muted)] text-lg sm:text-xl leading-relaxed max-w-[240px]">
        Send us your C.V.
        <br />
        Do you want to work with us? Please, send your CV to{" "}
        <a className="font-bold break-words" href="mailto:info@geoConvergence.com">
          info@geoConvergence.com
        </a>
      </p>
      <p className="text-[var(--muted)] font-bold text-base">OR</p>
      <Button size="sm" href="/contact" target="_blank" rel="noopener noreferrer">
        CONTACT US
      </Button>
    </div>
  );
}

// ─── Main Right Panel ─────────────────────────────────────────────────────────

function JobStats({ stats }) {
  if (!stats) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 border-t-none border-[var(--border)]">
      {stats.map(({ label, value }, i) => (
        <div
          key={label}
          className={`py-4 px-2 text-center flex flex-col gap-0.5 ${i < stats.length - 1
            ? "border-r border-[#BABABA] dark:border-slate-600"
            : ""
            }`}
        >
          <span className=" text-lg sm:text-xl font-bold text-[var(--heading)] leading-tight font-Web">
            {label}
          </span>
          <span className=" text-lg sm:text-xl font-Inter text-[var(--text)] break-words">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function getBlockText(block) {
  return block?.children?.map((child) => child.text || "").join("") || "";
}

function renderTextChild(child, index) {
  let content = child.text || "";

  if (child.marks?.includes("strong")) {
    content = <strong className="font-bold">{content}</strong>;
  }

  if (child.marks?.includes("em")) {
    content = <em>{content}</em>;
  }

  return <span key={child._key || index}>{content}</span>;
}

function renderPortableBlock(block, index) {
  const children = block.children?.map(renderTextChild);
  const key = block._key || index;

  if (block.style === "h2") {
    return (
      <h2 key={key} className="text-2xl font-bold font-Web text-[var(--heading)] leading-snug">
        {children || getBlockText(block)}
      </h2>
    );
  }

  if (block.style === "h3") {
    return (
      <h3 key={key} className="text-xl font-bold font-Web text-[var(--heading)] leading-snug">
        {children || getBlockText(block)}
      </h3>
    );
  }

  return (
    <p key={key}>
      {children || getBlockText(block)}
    </p>
  );
}

function renderTabContent(content) {
  if (!content) return null;

  if (typeof content === "string") {
    return <p>{content}</p>;
  }

  if (!Array.isArray(content)) {
    return null;
  }

  const renderedBlocks = [];

  for (let i = 0; i < content.length; i += 1) {
    const block = content[i];

    if (block.listItem === "bullet") {
      const listItems = [];

      while (content[i]?.listItem === "bullet") {
        const currentBlock = content[i];
        listItems.push(
          <li key={currentBlock._key || i}>
            {currentBlock.children?.map(renderTextChild) || getBlockText(currentBlock)}
          </li>
        );
        i += 1;
      }

      i -= 1;
      renderedBlocks.push(
        <ul key={`list-${renderedBlocks.length}`} className="list-disc pl-6 space-y-2">
          {listItems}
        </ul>
      );
      continue;
    }

    renderedBlocks.push(renderPortableBlock(block, i));
  }

  return <div className="flex flex-col gap-4">{renderedBlocks}</div>;
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
            className={`px-4 py-2 rounded-[14px]  text-sm sm:text-lg font-Inter font-bold transition-all cursor-pointer  ${activeTab === t.key
              ? "bg-[#000941] text-white"
              : "bg-[var(--card)] text-[var(--muted)] text-sm sm:text-lg font-Inter outline outline-1 outline-[var(--border)]"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="h-[2px] bg-[var(--border)] my-5" />
      <div className="border border-[var(--border)] rounded-[14px] p-6 text-lg  leading-[1.75] text-[var(--text)] bg-[var(--card)] transition-colors duration-200">
        {renderTabContent(tabData[activeTab])}
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
          <div className="flex items-center gap-2  mb-4 sm:mb-8 font-Inter font-bold text-lg sm:text-xl">
            <Link to="/career" className="text-[#326FB7] hover:underline">
              Careers
            </Link>
            <span>/</span>
            <span className="text-[var(--muted)]">
              {careerDetails.title}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 items-start">
            {/* Sidebar */}
            <div className="flex flex-col md:flex-row lg:flex-col gap-6 order-2 lg:order-1">
              <HowToApply items={APPLY_ITEMS} />
              <SendCVCard />
            </div>

            {/* Main content */}
            <div className="flex flex-col gap-0 order-1 lg:order-2">
              {/* <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=75"
                alt="Professional working at laptop"
                className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover rounded-[20px]"
              /> */}
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
        {/* <section className="pt-15">
          <Testimonials darkMode={theme === "dark"} />
        </section> */}
        <CTA darkMode={theme === "dark"} />
        <Footer darkMode={theme === "dark"} />
      </div>
    </div>
  );
}
