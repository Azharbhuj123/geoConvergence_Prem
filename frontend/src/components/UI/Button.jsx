import React from "react";
import clsx from "clsx";
import { useThemeStore } from "../../store/useThemeStore";

const variants = {
  primary:
    "bg-gradient-to-b from-blue-800 to-blue-700 text-white text-base font-Inter font-semibold rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] transition-all duration-300 ease-in-out border border-transparent  hover:bg-none hover:bg-neutral-200 hover:text-blue-700",

  secondary:
    "bg-neutral-200 text-blue-700 text-base font-Inter font-semibold rounded-2xl transition-all duration-300 ease-in-out border border-transparent hover:bg-gradient-to-b hover:from-blue-800 hover:to-blue-700 hover:text-white",
};

const sizes = {
  sm: "font-Inter px-6 py-3 text-[14px] sm:text-[16px] xl:text-[18px]",
  md: "font-Inter px-6 py-3 text-[16px] sm:text-[18px] xl:px-8 xl:py-4 xl:text-[20px]",
  lg: "font-Inter px-6 py-3 text-[16px] sm:text-[20px] xl:px-10 xl:py-5 xl:text-[25px]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className,
  ...props
}) {
  const baseStyles =
    "inline-block font-bold font-Inter rounded-2xl transition-all text-center leading-7 cursor-pointer";

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}


export const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button
      onClick={toggleTheme}
      className={`
    relative flex items-center
    w-16 h-8 px-1 rounded-full
    transition-all duration-300
    cursor-pointer
    ${theme === "dark" ? "bg-slate-700" : "bg-[#0f172a]"}
  `}
      aria-label="Toggle theme"
    >
      <span className="text-lg">𖤓</span>

      <span
        className={`
      absolute w-6 h-6 rounded-full
      bg-white shadow-md
      transition-transform duration-300
      ${theme === "dark" ? "translate-x-8" : "translate-x-0"}
    `}
      />

      <span className="ml-auto text-xl text-white">☽</span>
    </button>
  )
}