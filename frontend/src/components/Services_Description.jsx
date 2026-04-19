import React from 'react';

export default function Services_Description({ pageData, theme }) {
  const isDark = theme === 'dark';
  
  if (!pageData?.servicesDescription) return null;

  return (
    <div className={`w-full mx-auto px-6 lg:px-14 py-20 lg:py-24 ${isDark ? 'dark' : ''} bg-[var(--bg)]`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[933px]">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Titillium_Web'] leading-[60px] text-[var(--text)] mb-5">
                {pageData.servicesDescription.title}
            </h2>
            <p className="text-xl leading-8 text-[var(--text)]">
                {pageData.servicesDescription.description}
            </p>
        </div>
      </div>
    </div>
  );
}
