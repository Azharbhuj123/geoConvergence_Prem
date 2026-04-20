import React from "react";

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--bg)]">
      <div className="relative">
        {/* Outer Ring (Muted) */}
        <div className="w-10 h-10 border-4 border-[var(--border)] rounded-full"></div>

        {/* Spinning Element (Navy Brand Color) */}
        <div className="absolute top-0 left-0 w-10 h-10 border-4 border-t-[#001a41] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
