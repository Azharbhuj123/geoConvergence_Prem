import React, { useRef, useState, useEffect } from 'react';
import { urlFor } from '../lib/sanity';
import { Facebook, Instagram, Linkedin, Twitter } from './UI/Svgs';

export default function TeamLeadership({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, members } = data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  const icons = [Twitter, Linkedin, Facebook, Instagram];

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1280) return 2;
    return 3;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create an extended array for infinite scroll (repeated 4 times to be safe)
  const extendedMembers = members?.length
    ? [...members, ...members, ...members, ...members]
    : [];

  // Auto play
  useEffect(() => {
    if (!members?.length) return;

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused, itemsPerPage, members?.length]);

  // Handle infinite wrap
  useEffect(() => {
    if (!members?.length) return;

    if (currentIndex >= members.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev % members.length);
      }, 700); // 700ms matches the transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, members?.length]);

  const totalPages = Math.ceil((members?.length || 0) / itemsPerPage);
  const normalizedIndex = currentIndex % (members?.length || 1);
  const activeDot = Math.floor(normalizedIndex / itemsPerPage);

  return (
    <section
      className={`pt-20 pb-20 px-6 sm:px-10 xl:px-14 transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-white'
        }`}
    >
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="mb-16 flex flex-col">
          <h2 className={`font-Web heading-primary mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <p className={`text-lg sm:text-xl leading-relaxed max-w-3xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="-mx-3">
              <div
                className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {extendedMembers?.map((member, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 xl:w-1/3 flex-shrink-0 px-3"
                  >
                    <div
                      className={`group relative p-6 rounded-[2rem] transition-all duration-300 h-full
                      ${darkMode ? 'bg-slate-900 border border-slate-800 hover:bg-white' : 'bg-[#f4f6fb] hover:bg-[#002052]'}`}
                    >

                      {/* Image */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                        {member.image ? (
                          <img
                            src={urlFor(member.image)}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-200" />
                        )}
                      </div>

                      {/* Text */}
                      <div
                        className={`p-5 rounded-2xl border transition-colors duration-300 ${darkMode
                          ? 'border-blue-800/30 group-hover:border-blue-400'
                          : 'border-blue-700 group-hover:border-blue-300'
                          }`}
                      >
                        <h3
                          className={`text-2xl xl:text-3xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-[#002052]' : 'text-slate-900 group-hover:text-white'
                            }`}
                        >
                          {member.name}
                        </h3>

                        <p
                          className={`text-lg font-medium transition-colors duration-300 ${darkMode
                            ? 'text-slate-400 group-hover:text-blue-200'
                            : 'text-slate-600 group-hover:text-slate-300'
                            }`}
                        >
                          {member.position}
                        </p>

                        <p
                          className={`text-lg mt-5 font-medium transition-colors duration-300 ${darkMode
                            ? 'text-slate-400 group-hover:text-blue-200'
                            : 'text-slate-600 group-hover:text-slate-300'
                            }`}
                        >
                          {member.shortBio}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(i * itemsPerPage);
                }}
                className={`h-2.5 rounded-full transition-all duration-500 ${i === activeDot
                  ? 'w-12 bg-blue-600'
                  : `w-2.5 ${darkMode ? 'bg-slate-700' : 'bg-slate-300'}`
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}