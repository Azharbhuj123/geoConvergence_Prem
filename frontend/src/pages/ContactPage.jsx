import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useThemeStore } from '../store/useThemeStore';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { PhoneCallIcon, MailPlus, LocationEdit } from 'lucide-react';
import Button from '../components/UI/Button';
import { submitContactForm } from '../lib/api';
import { PageToast } from '../components/UI/PageLoader';
import { Facebook, Instagram, Linkedin, Twitter, YouTube } from '../components/UI/Svgs';

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const recaptchaRef = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken('');
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    // Basic frontend validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // CAPTCHA validation
    if (!recaptchaToken) {
      setError("Please complete the CAPTCHA verification.");
      setLoading(false);
      return;
    }

    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      setRecaptchaToken('');
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
      recaptchaRef.current?.reset();
      setRecaptchaToken('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={isDark ? 'dark' : ''} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero darkMode={isDark} hero={heroData}
          minHeight="sm:min-h-[451px]" />

        {/* Main Contact Section */}
        <section className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14`}>
          <div className="max-w-[1440px] mx-auto">

            {/* The Big Blue Card Container */}
            <div className={`rounded-[20px] shadow-2xl p-6 lg:p-12 overflow-hidden bg-[#09155F]`}>

              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                {/* Left Side (Form) */}
                <div className="w-full lg:w-[53%] flex flex-col justify-center">
                  <h2 className="heading-primary font-Web !text-white mb-3 tracking-wide">
                    Send us a message
                  </h2>
                  <p className="text-white/80 text-subtitle mb-8 max-w-lg">
                    Do you have questions? A complaint? Or need any help from our team? Write to us here.
                  </p>

                  {success && (
                    <PageToast message={"Thank you! Your message has been sent successfully. We'll get back to you soon."} type={"success"} />
                  )}

                  {error && (
                    <PageToast message={error} type={"error"} />
                  )}

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
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeHxAcTAAAAAFn3WDHgAQC_q1FiRLmm56ac0xWY"}
                        onChange={handleRecaptchaChange}
                        onExpired={handleRecaptchaExpired}
                        theme={isDark ? "dark" : "light"}
                      />
                    </div>

                    <div className="mt-4">
                      <Button size='sm' type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Request'}
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Right Side (Info Card) */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
                  <div className={`p-8 lg:p-10 rounded-2xl h-full flex flex-col justify-between shadow-lg border ${isDark ? 'bg-[#0f172a] border-slate-700' : 'bg-[#E5E5E5]'
                    }`}>
                    <div>
                      <h3 className={`text-2xl xl:text-[26px] font-Inter text-center font-bold mb-8 ${isDark ? "text-white" : "text-[#09155F]"}`}>
                        Hi! We are always here to help you.
                      </h3>

                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6 bg-white p-4 sm:p-6 rounded-xl">
                          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <PhoneCallIcon width={150} height={150} color="#09155F" />
                          </div>
                          <div>
                            <p className={`text-md font-bold uppercase tracking-wider text-[#09155F] pb-1`}>Phone</p>
                            <p className={`text-lg font-Inter text-[#64748b]`}>
                              <a href="tel:+18554473939" target="_blank" rel="noopener noreferrer">
                                (855) 447 – 3939
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 bg-white p-4 sm:p-6 rounded-xl">
                          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <MailPlus width={150} height={150} color="#09155F" />
                          </div>
                          <div>
                            <p className="text-md font-bold uppercase tracking-wider text-[#09155F] pb-1">Email</p>
                            <a
                              href="mailto:info@geoconvergence.com" target="_blank" rel="noopener noreferrer"
                              className="text-lg font-Inter text-[#64748b] break-all hover:underline"
                            >
                              info@geoconvergence.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 bg-white p-4 sm:p-6 rounded-xl">
                          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <LocationEdit width={150} height={150} color="#09155F" />
                          </div>
                          <div>
                            <p className={`text-md font-bold uppercase tracking-wider text-[#09155F] pb-1`}>Location</p>
                            <p className={`text-lg font-Inter text-[#64748b] hover:underline`}>
                              <a href="https://maps.app.goo.gl/22o7bLdEDkFTr14x7" target="_blank" rel="noopener noreferrer">
                                642 N Madison St, Bloomington, IN 47404
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-8">
                      <p className={`text-lg font-bold mb-4 ${isDark ? "text-white" : "text-[#09155F]"}`}>Connect With Us</p>

                      <hr className="border-white/50 mb-6" />

                      <div className="flex gap-3">
                        {[
                          // LinkedIn
                          <Linkedin color={"white"} />,
                          // Facebook
                          <Facebook color={"white"} />,
                          // YouTube
                          <YouTube color={"white"} />,
                          // Twitter/X
                          <Twitter color={"white"} />,
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
