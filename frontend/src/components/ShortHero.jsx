import React from 'react';
import Hero2 from "../assets/hero2.png";

export default function ShortHero({title}) {
  return (
    <section 
      className="relative h-[451px] w-full flex items-center overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${Hero2})`
      }}
    >
      {/* Gradient Overlay: Adjusted colors to match the deep navy in your image.
          'from-[#0a192f]' gives it that specific corporate/tech blue feel.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 via-[#0a192f]/40 to-transparent"></div>

      {/* Container: Using your site's specific max-width and padding.
          'w-full' ensures the container occupies the space so 'mx-auto' can center it.
      */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-14 py-5">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          {title}
        </h1>
      </div>
      
      {/* Blueprint/Grid Effect: Reduced opacity to 5% to keep it subtle like the source image */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      ></div>
    </section>
  );
}