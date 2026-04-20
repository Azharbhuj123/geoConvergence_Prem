import React from 'react';

export default function ContractVehicles({ data, darkMode }) {
  if (!data) return null;
  const { title, subtitle, vehicles } = data;

  return (
    <section className={`py-24 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className={`text-4xl md:text-5xl font-bold font-['Titillium_Web'] mb-6 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {title}
            </h2>
            <p className={`text-xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {subtitle}
            </p>
          </div>

          <div className="lg:w-2/3 grid gap-8 sm:grid-cols-2">
            {vehicles?.map((vehicle, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50' 
                    : 'bg-neutral-50 border-neutral-200 hover:border-blue-500/30'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold font-['Titillium_Web'] mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {vehicle.name}
                </h3>
                <p className={`leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {vehicle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
