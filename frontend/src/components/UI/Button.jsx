import React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-gradient-to-b from-blue-800 to-blue-700 text-white text-base font-Inter font-semibold rounded-2xl shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] transition-all duration-300 ease-in-out border border-transparent  hover:bg-none hover:bg-neutral-200 hover:text-blue-700",

  secondary:
    "bg-neutral-200 text-blue-700 text-base font-Inter font-semibold rounded-2xl transition-all duration-300 ease-in-out border border-transparent hover:bg-gradient-to-b hover:from-blue-800 hover:to-blue-700 hover:text-white",
};

// const sizes = {
//   sm: "px-6 py-3 text-sm",
//   md: "px-6 py-3 text-sm xl:px-8 xl:py-4 xl:text-base",
//   lg: "px-6 py-3 text-sm xl:px-10 xl:py-5 xl:text-lg",
// };

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
    "inline-block font-bold font-Inter rounded-2xl transition-all text-center leading-7";

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