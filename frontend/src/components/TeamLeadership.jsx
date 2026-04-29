import React, { useRef, useState, useEffect } from 'react';
import { urlFor } from '../lib/sanity';
import { Facebook, Instagram, Linkedin, Twitter } from './UI/Svgs';

export default function TeamLeadership({ data, darkMode }) {
  if (!data) return null;

  const { title, subtitle, members } = data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  // Auto play
  useEffect(() => {
    if (!members?.length) return;

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev + itemsPerPage >= members.length ? 0 : prev + itemsPerPage
        );
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused, itemsPerPage, members?.length]);

  const totalPages = Math.ceil((members?.length || 0) / itemsPerPage);
  const activeDot = Math.floor(currentIndex / itemsPerPage);

  return (
    <section
      className={`pt-20 pb-20 px-6 sm:px-10 xl:px-14 transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-white'
        }`}
    >
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="mb-16 flex flex-col">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <p className={`text-lg leading-relaxed max-w-3xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {members?.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 group relative p-6 rounded-[2rem] transition-all duration-300
                w-full sm:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]
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

                  {/* Social Icons */}
                  <div className="absolute right-0 bottom-0 flex flex-col gap-3 p-3 bg-blue-500/90 rounded-l-xl translate-x-full group-hover:translate-x-0 transition-transform duration-300">

                    {icons.map((Icon, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center bg-[#002052] p-2 rounded-full"
                      >
                        <Icon size={18} className="text-white cursor-pointer hover:text-slate-200" color={"white"} />
                      </div>
                    ))}

                  </div>
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
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
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