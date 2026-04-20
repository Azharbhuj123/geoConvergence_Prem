import React from 'react';
import { urlFor } from '../lib/sanity';
import Button from './UI/Button';

export default function CaseStudies({ data, darkMode }) {
  if (!data) return null;
  const { title, subtitle, studies } = data;

  return (
    <section className={`py-24 ${darkMode ? 'bg-slate-900' : 'bg-neutral-100'}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold font-['Titillium_Web'] mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies?.map((study, index) => (
            <div 
              key={index}
              className={`group rounded-3xl overflow-hidden flex flex-col transition-all duration-500 ${
                darkMode ? 'bg-slate-950 hover:shadow-2xl hover:shadow-blue-900/20' : 'bg-white shadow-xl hover:shadow-2xl'
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-200 relative">
                {study.image ? (
                  <img 
                    src={urlFor(study.image)} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className={`text-2xl font-bold font-['Titillium_Web'] mb-4 leading-tight group-hover:text-blue-500 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {study.title}
                </h3>
                <p className={`mb-8 leading-relaxed flex-grow ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {study.description}
                </p>
                <div className="pt-2">
                  <Button 
                    href={study.link || "#"} 
                    variant="link" 
                    className={`p-0 text-lg group-hover:translate-x-2 transition-transform duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                  >
                    Read Full Story →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
