import React, { useRef, useState, useEffect } from 'react';
import { urlFor } from '../lib/sanity';

export default function TeamLeadership({ data, darkMode }) {
  if (!data) return null;
  const { title, subtitle, members } = data;
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress || 0);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center lg:text-left">
          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-['Titillium_Web'] mb-4 sm:mb-6 leading-tight tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed mx-auto lg:mx-0 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-8 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {members?.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] snap-start p-4 sm:p-5 md:p-6 rounded-3xl shadow-xl ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-[#f4f6fb]'}`}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4 sm:mb-6">
                  {member.image ? (
                    <img
                      src={urlFor(member.image)}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-700">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="px-1">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold font-['Titillium_Web'] mb-1 sm:mb-2 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {members?.map((_, i) => {
              const totalDots = members.length;
              const activeIndex = Math.round((scrollProgress / 100) * (totalDots - 1)) || 0;
              const isActive = i === activeIndex;

              return (
                <button
                  key={i}
                  onClick={() => {
                    if (scrollRef.current && scrollRef.current.children[i]) {
                      const child = scrollRef.current.children[i];
                      scrollRef.current.scrollTo({
                        left: child.offsetLeft - scrollRef.current.offsetLeft,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-blue-400 ${isActive
                    ? 'w-8 sm:w-10 bg-[#0055FE]'
                    : `w-2 ${darkMode ? 'bg-slate-700' : 'bg-slate-300'}`
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
