import React, { useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function ContactPage() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  const heroData = {
    title: "Contact Us",
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
        <Hero darkMode={isDark} hero={heroData} title="Contact Us" minHeight="min-h-[451px]"/>

        {/* Main Contact Section */}
        <section className={`py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${isDark ? 'bg-slate-950' : 'bg-[var(--bg)]'}`}>
          <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
            
            {/* The Big Blue Card Container */}
            <div className={`rounded-[20px] shadow-2xl p-5 sm:p-8 md:p-10 lg:p-12 overflow-hidden ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-blue-950'}`}>
              
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                
                {/* Left Side (Form) */}
                <div className="w-full lg:w-[60%] flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white font-['Titillium_Web'] mb-3 sm:mb-4 tracking-tight leading-tight">
                    Send us a message
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed">
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
                          className={`w-full px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
                            isDark ? 'bg-slate-800 text-white placeholder-slate-500 border border-slate-700' : 'bg-white/10 text-white placeholder-blue-300 border border-blue-800 focus:bg-white/20'
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
                          className={`w-full px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
                            isDark ? 'bg-slate-800 text-white placeholder-slate-500 border border-slate-700' : 'bg-white/10 text-white placeholder-blue-300 border border-blue-800 focus:bg-white/20'
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
                        className={`w-full px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${
                          isDark ? 'bg-slate-800 text-white placeholder-slate-500 border border-slate-700' : 'bg-white/10 text-white placeholder-blue-300 border border-blue-800 focus:bg-white/20'
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
                        className={`w-full px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y ${
                          isDark ? 'bg-slate-800 text-white placeholder-slate-500 border border-slate-700' : 'bg-white/10 text-white placeholder-blue-300 border border-blue-800 focus:bg-white/20'
                        }`}
                        required
                      ></textarea>
                    </div>

                    <div className="mt-4 sm:mt-6">
                      <button 
                        type="submit" 
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 text-sm sm:text-base lg:text-lg rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 block tracking-wide"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>

                {/* Right Side (Info Card) */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
                  <div className={`p-6 sm:p-8 lg:p-10 rounded-2xl h-full flex flex-col justify-between shadow-lg border ${
                    isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'
                  }`}>
                    <div>
                      <h3 className={`text-lg sm:text-xl md:text-2xl font-extrabold font-['Titillium_Web'] mb-2 sm:mb-3 leading-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        Hi! We are always here to help you.
                      </h3>
                      <p className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Reach out to us through any of the channels below, or visit us.
                      </p>

                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                          </div>
                          <div>
                             <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Phone</p>
                             <p className={`text-sm sm:text-base md:text-lg font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>+1 (812) 650-2544</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                          </div>
                          <div>
                             <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Email</p>
                             <p className={`text-sm sm:text-base md:text-lg font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>info@geoconvergence.com</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          </div>
                          <div>
                             <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Location</p>
                             <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>121 E 6th St.<br/>Bloomington, IN 47408</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 sm:mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                      <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Connect With Us</p>
                      <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
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
