import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/geoC_Logo_Dark.png";
import dark_logo from "../assets/logo_Light.png";
import Button, { ThemeButton } from "./UI/Button";
import { urlFor } from "../lib/sanity";

export default function Navbar({ darkMode, logo: cmsLogo, ctaText, ctaLink, compact = false }) {


  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Solutions", path: "/solutions" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about-us" },
    { name: "Government", path: "/government" },
    { name: "Blogs", path: "/blog" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      {/* Top announcement bar */}
      {!compact && (
        <div className="w-full bg-[#326FB7] text-white text-md text-center py-2 px-4 leading-6 z-50 relative">
          <a href="/scan2twin">
            {"Experience Scan2Twin in action book your live demo today."}
          </a>
        </div>
      )}

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "shadow-[0px_4px_18px_0px_rgba(0,28,71,0.25)]"
          : "shadow-[0px_4px_18px_0px_rgba(0,28,71,0.15)]"
          } ${darkMode ? "bg-slate-900 border-b border-slate-800" : "bg-white border-b border-slate-100"}`}
      >
        <div className={`max-w-[1440px] mx-auto flex justify-between items-center ${compact ? "px-2 py-3 min-[375px]:px-4 sm:px-8 sm:py-4 lg:px-10" : "px-4 py-7 sm:px-8 lg:px-10"}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 ${compact ? "min-w-0 w-[clamp(5.5rem,32vw,9.375rem)] shrink" : "flex-shrink-0 max-w-[160px] sm:max-w-[220px] xl:max-w-none"}`}>
            <img src={cmsLogo ? urlFor(cmsLogo) : darkMode ? dark_logo : logo} alt="" className={compact ? "block h-auto w-full rounded bg-white p-1.5 min-[375px]:p-2 sm:p-4" : ""} />
          </Link>

          {/* Desktop nav links */}
          {!compact && <div className="hidden xl:flex items-center gap-6 xl:gap-7 px-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-Inter transition-colors hover:text-blue-700 whitespace-nowrap ${darkMode ? "text-slate-300" : "text-neutral-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>}

          {/* Right side */}
          <div className="hidden xl:flex items-center gap-4">
            <Button size="sm" className={compact ? "!text-sm !py-2 !px-2 !rounded-lg" : "!text-base !py-2 !px-2"} href={ctaLink || "/contact"}>
              {ctaText || "Request Demo"}
            </Button>

            {/* Dark mode toggle */}
            <ThemeButton />
          </div>

          {/* Mobile hamburger */}
          <div className={`flex xl:hidden shrink-0 items-center ${compact ? "gap-1.5 min-[375px]:gap-3" : "gap-3"}`}>
            {compact && (
              <Button size="sm" className="whitespace-nowrap !rounded-lg !px-2 !py-1.5 !text-[11px] !leading-5 min-[375px]:!px-3 min-[375px]:!py-2 min-[375px]:!text-xs" href={ctaLink || "/contact"}>
                {ctaText || "Request Demo"}
              </Button>
            )}

            <ThemeButton />

            {!compact && <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-1 sm:p-2 rounded-lg ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>}
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className={`xl:hidden border-t px-6 py-4 flex flex-col gap-4 ${darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-100"
              }`}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-Inter py-1 ${darkMode ? "text-slate-300" : "text-neutral-600"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={ctaLink || "/contact"}
              className="mt-2 px-6 py-3 bg-gradient-to-b from-blue-800 to-blue-700 text-white text-base font-Inter font-semibold rounded-2xl text-center"
            >
              {ctaText || "Request Demo"}
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
