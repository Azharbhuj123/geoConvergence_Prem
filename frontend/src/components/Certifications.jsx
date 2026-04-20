import { urlFor } from '../lib/sanity';

export default function Certifications({ data, darkMode }) {
  if (!data) return null;
  const { title, subtitle, items } = data;

  return (
    <section className={`py-24 ${darkMode ? 'dark' : ''} overflow-hidden  bg-[var(--slate-bg)] text-[var(--text)]`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 ">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold font-['Titillium_Web'] mb-6 text-[var(--text)] dark:text-white`}>
            {title}
          </h2>
          <p className={`text-xl text-[var(--text)] dark:text-white`}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {items?.map((cert, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center justify-center text-center p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300 bg-[var(--bg)] ${
                darkMode ? 'hover:bg-slate-750' : 'bg-white shadow-sm hover:shadow-md'
              }`}
            >
              {cert.image ? (
                <div className="h-24 flex items-center justify-center mb-4">
                  <img 
                    src={urlFor(cert.image)} 
                    alt={cert.name} 
                    className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ) : (
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                   <svg className={`w-10 h-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              )}
              <h3 className={`font-semibold font-['Titillium_Web'] text-[var(--text)]`}>
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
