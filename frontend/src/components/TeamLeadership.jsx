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
    <section className={`py-20 px-6 sm:px-10 xl:px-14 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <h2 className={`heading-primary mb-6`}>
            {title}
          </h2>
          <p className={`text-subtitle leading-relaxed`}>
            {subtitle}
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {members?.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[300px] md:w-[360px] snap-start p-6 rounded-3xl shadow-xl ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-[#f4f6fb]'}`}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                  {member.image ? (
                    <img
                      src={urlFor(member.image)}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-700">
                      <svg className="w-16 h-16 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className={`p-2 rounded-xl bg-transparent`}>
                  <h3 className={`text-2xl font-bold font-['Titillium_Web'] mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {member.name}
                  </h3>
                  <p className={`text-lg font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
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
                    ? 'w-10 bg-[#0055FE]'
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
