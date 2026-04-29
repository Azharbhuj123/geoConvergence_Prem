import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/footer_logo.png'
import { useThemeStore } from '../store/useThemeStore'
export default function Footer({ darkMode }) {
  const [email, setEmail] = useState('')
  const { theme } = useThemeStore();

  const services = [
    { name: 'Scan2Twin', path: '/scan2twin' },
    { name: 'Indoor Mapping', path: '/indoormaps' },
    { name: 'LiDAR Scanning', path: '/lidar-scanning' },
    { name: '3D Modeling', path: '/3d-modeling' },
    { name: 'ArcGIS Indoors', path: '/arcgis-indoors' },
  ]

  const company = [
    { name: 'Why geoConvergence', path: '/why' },
    { name: 'Products', path: '/products' },
    { name: 'Careers', path: '/careers' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/contact' },
  ]
  return (
    <footer className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--footer-bg)] px-6 sm:px-8 lg:px-14 text-white`} >
      <div className="max-w-[1440px] mx-auto pt-14 pb-8 flex flex-col gap-7">
        {/* Newsletter + divider */}
        <div className="pb-7 border-b border-white/20 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <h3
            className="text-white heading-primary font-Web uppercase max-w-3xl"
          >
            Stay Ahead with Digital Twin Insights
          </h3>

          {/* Email input */}
          <div className="flex items-center gap-0 bg-white/20 rounded-full border border-blue-700 pl-7 pr-3 py-3 w-full max-w-sm lg:max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder:text-white/60 text-base  font-light font-Inter uppercase outline-none leading-6 min-w-0"
            />
            <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-blue-600 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" />
            </div>
            <p className="text-white/80 text-sm sm:text-base font-Inter leading-6 max-w-lg">
              Building the foundation for the future of indoor intelligence through high-precision mapping and digital twin technology.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-lg sm:text-xl font-bold font-Web leading-7">Services</h4>
            {services.map((s) => (
              <Link key={s} to={s.path} className="text-white/75 text-sm sm:text-base font-Inter hover:text-white transition-colors">
                {s.name}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-lg sm:text-xl font-bold font-Web">Company</h4>
            {company.map((c) => (
              <Link key={c} to={c.path} className="text-white/75 text-sm sm:text-base font-Inter hover:text-white transition-colors">
                {c.name}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col justify-between items-end gap-6">
            <div />
            <div className="flex gap-3">
              {[
                // LinkedIn
                <svg key="li" width="18" height="18" viewBox="0 0 24 24" fill="black"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
                // Instagram
                <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="black" stroke="none" /></svg>,
                // Twitter/X
                <svg key="x" width="18" height="18" viewBox="0 0 24 24" fill="black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 bg-slate-200 hover:bg-white rounded-xl flex items-center justify-center transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="text-white text-xs sm:text-sm font-Inter leading-4">
            © 2026 geoConvergence. All rights reserved. Precision in every dimension.
          </p>
          <div className="flex gap-6 sm:gap-12">
            {['Terms', 'Privacy', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-white text-xs sm:text-sm font-Inter hover:text-blue-300 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
