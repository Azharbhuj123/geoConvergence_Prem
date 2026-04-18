import React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-gradient-to-b from-blue-800 to-blue-700 text-white shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600",
  secondary:
    "bg-neutral-200 text-blue-700 hover:bg-neutral-100",
};

const sizes = {
  md: "px-8 py-4 text-base sm:text-lg",
  sm: "px-6 py-3 text-sm",
  lg: "px-10 py-5 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
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