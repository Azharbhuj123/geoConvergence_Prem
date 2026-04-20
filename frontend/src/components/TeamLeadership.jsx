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
    <section className={`py-16 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="mb-12">
          <h2 className={`text-[32px] md:text-[36px] font-bold mb-3 ${darkMode ? 'text-white' : 'text-[#0B1B3D]'}`}>
            {title}
          </h2>
          <p className={`text-[14px] md:text-[15px] max-w-3xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {subtitle}
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {members?.map((member, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 w-[280px] md:w-[320px] snap-start p-3 rounded-2xl ${darkMode ? 'bg-slate-800' : 'bg-[#f5f6f8]'}`}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3">
                  {member.image ? (
                    <img 
                      src={urlFor(member.image)} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-700">
                       <svg className="w-12 h-12 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                       </svg>
                    </div>
                  )}
                </div>

                <div className={`p-4 rounded-xl border ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-[#c6d2e8] bg-transparent'}`}>
                  <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-[#0B1B3D]'}`}>
                    {member.name}
                  </h3>
                  <p className={`text-[13px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
             {Array.from({ length: 4 }).map((_, i) => {
               // Simplified dots for visual representation
               return (
                 <div 
                   key={i} 
                   className={`h-2 transition-all duration-300 rounded-full ${
                     i === 0 // Using static active dot for first one as per screenshot, could be dynamic based on scroll
                     ? 'w-10 bg-[#0055FE]' 
                     : `w-2 ${darkMode ? 'bg-slate-700' : 'bg-[#f0f0f0]'}`
                   }`}
                 />
               );
             })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
