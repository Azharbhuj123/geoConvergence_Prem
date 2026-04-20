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
    <section className={`py-24 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold font-['Titillium_Web'] mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <p className={`text-xl max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {members?.map((member, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[340px] snap-start"
              >
                <div className={`relative rounded-t-[40px] overflow-hidden aspect-[4/5] ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  {member.image ? (
                    <img 
                      src={urlFor(member.image)} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                       <svg className="w-3/4 h-3/4 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                       </svg>
                    </div>
                  )}

                  {/* Blue Accent Badge */}
                  <div className="absolute top-8 right-0 bg-[#0055FE] text-white py-2 px-3 rounded-l-full flex items-center gap-2 shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                </div>

                <div className={`p-8 rounded-b-2xl border-b-[6px] border-[#0055FE] ${darkMode ? 'bg-slate-900 text-white' : 'bg-neutral-50 text-slate-900 shadow-sm'}`}>
                  <h3 className="text-3xl font-bold font-['Titillium_Web'] mb-1 tracking-tight">
                    {member.name}
                  </h3>
                  <p className={`text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-[#0055FE]'}`}>
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
             {Array.from({ length: Math.ceil((members?.length || 0) / (members?.length > 4 ? 4 : 1)) }).map((_, i) => {
               // Simplified dots for visual representation
               return (
                 <div 
                   key={i} 
                   className={`h-2 transition-all duration-300 rounded-full ${
                     (scrollProgress / 100) * (members?.length || 1) >= (i * (members?.length / 3)) && (scrollProgress / 100) * (members?.length || 1) < ((i+1) * (members?.length / 3)) 
                     ? 'w-8 bg-[#0055FE]' 
                     : `w-2 ${darkMode ? 'bg-slate-700' : 'bg-slate-300'}`
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
