import { useState, useEffect } from 'react'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Solutions', 'Products', 'Why geoConvergence', 'Resources', 'Career', 'Contact']

  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-blue-700 text-white text-sm text-center py-2 px-4 leading-6 z-50 relative">
        &nbsp;
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'shadow-[0px_4px_18px_0px_rgba(0,28,71,0.25)]'
            : 'shadow-[0px_4px_18px_0px_rgba(0,28,71,0.15)]'
        } ${darkMode ? 'bg-slate-900 border-b border-slate-800' : 'bg-white border-b border-slate-100'}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-5 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="9" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
              <span
                className={`text-xl font-bold font-['Titillium_Web'] tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                geoConvergence
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className={`text-base font-Inter transition-colors hover:text-blue-700 whitespace-nowrap ${
                  darkMode ? 'text-slate-300' : 'text-neutral-600'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-b from-blue-800 to-blue-700 text-white text-base font-Inter font-semibold rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600 transition-all"
            >
              Request Demo
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`w-14 h-7 rounded-full transition-all duration-300 relative flex items-center px-1 ${
                darkMode ? 'bg-blue-700' : 'bg-blue-200'
              }`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 flex items-center justify-center text-xs ${
                  darkMode ? 'translate-x-7' : 'translate-x-0'
                }`}
              >
                {darkMode ? '🌙' : '☀️'}
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-6 rounded-full relative flex items-center px-1 transition-all duration-300 ${
                darkMode ? 'bg-blue-700' : 'bg-blue-200'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className={`lg:hidden border-t px-6 py-4 flex flex-col gap-4 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
            }`}
          >
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className={`text-base font-Inter py-1 ${
                  darkMode ? 'text-slate-300' : 'text-neutral-600'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 px-6 py-3 bg-gradient-to-b from-blue-800 to-blue-700 text-white text-base font-Inter font-semibold rounded-2xl text-center"
            >
              Request Demo
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
