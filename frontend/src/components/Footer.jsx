import { useState } from 'react'
import { Link } from 'react-router-dom'
import defaultLogo from '../assets/logo_Light.png'
import { useThemeStore } from '../store/useThemeStore'
import { subscribeNewsletter } from '../lib/api'
import { PageToast } from './UI/PageLoader'
import { Facebook, Instagram, Linkedin, Twitter, YouTube } from './UI/Svgs'
import { urlFor } from '../lib/sanity'

export default function Footer({
  logo,
  brandTitle,
  partnerLabel,
  copyright,
  socialLinks,
  partnerLogos,
}) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')
  const { theme } = useThemeStore();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatusMsg('Please enter an email address.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatusMsg('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      await subscribeNewsletter(trimmedEmail);
      setStatusMsg('Successfully subscribed!');
      setEmail('');
    } catch (err) {
      console.error(err);
      if (err.message === 'Already subscribed') {
        setStatusMsg('This email is already subscribed.');
      } else {
        setStatusMsg('Subscription failed. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { name: 'Scan2Twin', path: '/scan2twin' },
    { name: 'Indoor Mapping', path: '/indoormaps' },
    { name: 'LiDAR Scanning', path: '/lidar-scanning' },
    // { name: '3D Modeling', path: '/3d-modeling' },
    { name: 'ArcGIS Development', path: '/arcgis-development' },
  ]

  const company = [
    { name: 'About Us', path: '/why' },
    { name: 'Products', path: '/products' },
    { name: 'Careers', path: '/career' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ]

  if (copyright || socialLinks?.length || partnerLogos?.length || brandTitle || partnerLabel || logo) {
    return (
      <footer className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)] px-6 py-12 text-[var(--text)] sm:px-8 lg:px-14`}>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 text-center">
          {(partnerLabel || partnerLogos?.length > 0) && (
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              {partnerLabel && (
                <p className="font-Web text-xl font-bold text-[#000941] text-[var(--text)]">
                  {partnerLabel}
                </p>
              )}
              {partnerLogos?.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {partnerLogos.map((partner, index) => {
                    const content = partner.logo ? (
                      <img src={urlFor(partner.logo)} alt={partner.name || ''} className="h-12 w-auto object-contain bg-white" />
                    ) : null

                    return partner.link ? (
                      <a key={partner.name || index} href={partner.link} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div key={partner.name || index}>{content}</div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {logo && <img src={urlFor(logo)} alt="" className="h-16 w-auto object-contain" />}
          {brandTitle && (
            <h2 className="font-Web text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
              {brandTitle}
            </h2>
          )}

          {socialLinks?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.platform || index}
                  href={social.url || '#'}
                  target={social.url ? '_blank' : undefined}
                  rel={social.url ? 'noopener noreferrer' : undefined}
                  aria-label={social.platform}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 transition-colors hover:bg-slate-300"
                >
                  {social.icon && <img src={urlFor(social.icon)} alt="" className="h-20 w-20 object-contain" />}
                </a>
              ))}
            </div>
          )}

          {copyright && (
            <p className="font-Inter text-sm leading-6 text-[var(--muted)]">
              {copyright}
            </p>
          )}
        </div>
      </footer>
    )
  }

  return (
    <footer className={`${theme === 'dark' ? 'dark' : ''} bg-[var(--footer-bg)] px-6 sm:px-8 lg:px-14 text-white`} >
      <div className="max-w-[1440px] mx-auto pb-8 flex flex-col gap-7">
        {/* Newsletter + divider */}
        <div className="py-7 border-b border-white flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <h3
            className="text-white text-lg sm:text-[30px] font-semibold xl:text-[30px] font-Web uppercase max-w-[437px] leading-[1.1]"
          >
            Stay Ahead with Digital Twin Insights
          </h3>

          {/* Email input */}
          <div className="flex flex-col w-full max-w-sm lg:max-w-[417px] gap-2">
            <form onSubmit={handleSubscribe} className="flex items-center gap-0 bg-white/20 rounded-full border border-blue-700 pl-7 pr-3 py-3 w-full">
              <input
                type="email"
                placeholder="Subscribe to our Newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/60 text-base font-light font-Inter outline-none leading-6 min-w-0"
                disabled={loading}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </form>
            {statusMsg && (
              <PageToast message={statusMsg} type={"success"} />
            )}
          </div>
        </div>

        {/* Main footer content */}
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Link to="/">
                <img src={defaultLogo} alt="GeoConvergence" className="h-18 w-auto" />
              </Link>
            </div>
            <p className="text-white/80 text-subtitle font-Inter leading-8 max-w-md">
              Building the foundation for the future of indoor intelligence through high-precision mapping and digital twin technology.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-lg sm:text-2xl font-bold font-Web leading-7">Services</h4>
            {services.map((s) => (
              <Link key={s} to={s.path} className="text-white/75 text-sm sm:text-xl font-Inter hover:text-white transition-colors xl:leading-[1.5]">
                {s.name}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-lg sm:text-2xl  font-bold font-Web">Company</h4>
            {company.map((c) => (
              <Link key={c} to={c.path} className="text-white/75 text-sm sm:text-xl font-Inter hover:text-white transition-colors xl:leading-[1.5]">
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
                <Linkedin />,
                // Facebook
                // <Facebook color={"black"} />,
                // YouTube
                <YouTube color={"black"} />,
                // Twitter/X
                <Twitter />,
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
