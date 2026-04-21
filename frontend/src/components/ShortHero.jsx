import React from "react";
import Hero2 from "../assets/hero2.png";

export default function ShortHero({ title }) {
  return (
    <section
      className="relative h-[200px] sm:h-[280px] md:h-[360px] lg:h-[451px] w-full flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${Hero2})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 via-[#0a192f]/50 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-2xl">
          {title}
        </h1>
      </div>

      {/* Blueprint Grid Effect */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </section>
  );
}
