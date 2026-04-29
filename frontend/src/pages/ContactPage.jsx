import React, { useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { PhoneCallIcon, MailPlus, LocationEdit } from 'lucide-react';

export default function ContactPage() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  const heroData = {
    title: "Contact geoConvergence",
    subtitle: "Reach out to our team to discuss enterprise GIS solutions, contract vehicles, or partnership opportunities.",
    backgroundImage: {
      _type: "image",
      asset: { _ref: "image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png" }
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Real submission disabled locally, per instruction.
  };

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={heroData}
          minHeight="min-h-[451px]" />

        {/* Main Contact Section */}
        <section className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${isDark ? 'bg-slate-950' : 'bg-[var(--bg)]'}`}>
          <div className="max-w-[1440px] mx-auto">

            {/* The Big Blue Card Container */}
            <div className={`rounded-[20px] shadow-2xl p-6 lg:p-12 overflow-hidden bg-[#002052]`}>

              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                {/* Left Side (Form) */}
                <div className="w-full lg:w-[60%] flex flex-col justify-center">
                  <h2 className="heading-primary font-Web text-white mb-3 tracking-wide">
                    Send us a message
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 max-w-lg">
                    Do you have questions? A complaint? Or need any help from our team? Write to us here.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row gap-5">
                      <div className="flex-1">
                        <label className="block text-slate-300 font-medium mb-2" htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="Your First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${isDark ? 'bg-[#F3F4F6] text-black placeholder-slate-500 border border-slate-700' : 'bg-white text-black placeholder-slate-500'
                            }`}
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-slate-300 font-medium mb-2" htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Your Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${isDark ? 'bg-[#F3F4F6] text-black placeholder-slate-500 border border-slate-700' : 'bg-white text-black placeholder-slate-500 '
                            }`}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-2" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${isDark ? 'bg-[#F3F4F6] text-black placeholder-slate-500 border border-slate-700' : 'bg-white text-black placeholder-slate-500 '
                          }`}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-2" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="How can we help?"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y ${isDark ? 'bg-[#F3F4F6] text-black placeholder-slate-500 border border-slate-700' : 'bg-white text-black placeholder-slate-500 '
                          }`}
                        required
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 block tracking-wide"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>

                {/* Right Side (Info Card) */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
                  <div className={`p-8 lg:p-10 rounded-2xl h-full flex flex-col justify-between shadow-lg border ${isDark ? 'bg-[#0f172a] border-slate-700' : 'bg-[#E5E5E5]'
                    }`}>
                    <div>
                      <h3 className="heading-primary font-Inter text-center mb-8">
                        Hi! We are always here to help you.
                      </h3>

                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
                          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <PhoneCallIcon width={150} height={150} color="#1E3B5E" />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold uppercase tracking-wider text-[#002052]`}>Phone</p>
                            <p className={`text-md font-Inter text-[#64748b]`}>+1 (812) 650-2544</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
                          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <MailPlus width={150} height={150} color="#1E3B5E" />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold uppercase tracking-wider text-[#002052]`}>Email</p>
                            <p className={`text-md font-Inter text-[#64748b]`}>info@ geoconvergence.com</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
                          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <LocationEdit width={150} height={150} color="#1E3B5E" />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold uppercase tracking-wider text-[#002052]`}>Location</p>
                            <p className={`text-md font-Inter text-[#64748b]`}>1675 West 4th Street, Cleveland, OH 44113</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 pt-8">
                      <p className={`text-md font-semibold uppercase mb-4 ${isDark ? "text-white" : "text-[#002052]"}`}>Connect With Us</p>

                      <hr className="border-white/50 mb-6" />

                      <div className="flex gap-3">
                        {[
                          // Facebook
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <path d="M13 22V12h3l1-4h-4V6.5c0-1.2.3-2 2-2H18V1.2C17.5 1.1 16.2 1 14.7 1 11.6 1 9.5 2.9 9.5 6.2V8H7v4h2.5v10H13z" />
                          </svg>,
                          // Instagram
                          <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="black" stroke="none" /></svg>,
                          // Twitter/X
                          <svg key="x" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                        ].map((icon, i) => (
                          <a
                            key={i}
                            href="#"
                            className="w-11 h-11 bg-[#002052] rounded-xl flex items-center justify-center transition-colors"
                          >
                            {icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
