import React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-gradient-to-b from-blue-800 to-blue-700 text-white shadow-[0px_8px_10px_-6px_rgba(12,89,219,0.42),0px_20px_25px_-5px_rgba(12,89,219,0.45)] hover:from-blue-700 hover:to-blue-600",
  secondary:
    "bg-neutral-200 text-blue-700 hover:bg-neutral-100",
};

const sizes = {
  sm: "px-6 py-3 text-sm",
  md: "px-6 py-3 text-sm xl:px-8 xl:py-4 xl:text-base",
  lg: "px-6 py-3 text-sm xl:px-10 xl:py-5 xl:text-lg",
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