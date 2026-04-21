import { useState } from 'react'
import logo from '../assets/footer_logo.png'
export default function Footer({ darkMode }) {
  const [email, setEmail] = useState('')

  const services = ['Scan2Twin', 'Indoor Mapping', 'LiDAR Scanning', '3D Modeling', 'ArcGIS Indoors Implementation']
  const company = ['Why geoConvergence', 'Products', 'Careers', 'Resources', 'Contact Us']

  return (
    <footer className="dark bg-[var(--bg)] text-white">
      <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 flex flex-col gap-10 sm:gap-12 lg:gap-16">
        {/* Newsletter + divider */}
        <div className="pb-10 border-b border-white/20 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 text-center lg:text-left">
          <h3 className="text-slate-100 font-extrabold font-['Titillium_Web'] uppercase leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl">
            Stay Ahead with Digital Twin Insights
          </h3>

          {/* Email input */}
          <div className="flex items-center gap-0 bg-white/10 rounded-full border border-blue-700/50 pl-6 sm:pl-7 pr-2 sm:pr-3 py-2 sm:py-3 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 transition-all focus-within:border-blue-500 focus-within:bg-white/20">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder:text-white/60 text-sm sm:text-base font-medium font-Inter uppercase outline-none leading-relaxed min-w-0"
            />
            <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-blue-600 active:scale-95 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-8 text-center lg:text-left">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2">
              <img src={logo} alt="geoConvergence logo" className="h-8 sm:h-10 w-auto object-contain" />
            </div>
            <p className="text-white/80 text-sm sm:text-base font-Inter leading-relaxed max-w-xs lg:max-w-full">
              Building the foundation for the future of indoor intelligence through high-precision mapping and digital twin technology.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h4 className="text-white text-lg sm:text-xl font-extrabold font-['Titillium_Web'] uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-2">
              {services.map((s) => (
                <a key={s} href="#" className="text-white/70 text-sm sm:text-base font-Inter hover:text-white hover:translate-x-1 lg:hover:translate-x-2 transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h4 className="text-white text-lg sm:text-xl font-extrabold font-['Titillium_Web'] uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2">
              {company.map((c) => (
                <a key={c} href="#" className="text-white/70 text-sm sm:text-base font-Inter hover:text-white hover:translate-x-1 lg:hover:translate-x-2 transition-all">
                  {c}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col justify-between gap-8 items-center lg:items-start">
            <h4 className="text-white text-lg sm:text-xl font-extrabold font-['Titillium_Web'] uppercase tracking-wider lg:hidden">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { key: "li", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> },
                { key: "ig", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg> },
                { key: "x", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
              ].map(({ key, icon }) => (
                <a
                  key={key}
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-white hover:text-slate-900 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>
            <div className="hidden lg:block h-12" /> {/* Spacer to align with columns if needed */}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 text-center">
          <p className="text-white/60 text-xs sm:text-sm font-Inter font-medium">
            © 2026 geoConvergence. All rights reserved. Precision in every dimension.
          </p>
          <div className="flex justify-center gap-6 sm:gap-10">
            {['Terms', 'Privacy', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-white/60 text-xs sm:text-sm font-semibold font-Inter hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
