import { useEffect, useState } from "react";

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



export function PageToast({
  message,
  type = "info",
  duration = 4000,
  onClose,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        onClose?.();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    success: "text-green-600 border-green-200 bg-green-50",
    error: "text-red-600 border-red-200 bg-red-50",
    warning: "text-yellow-600 border-yellow-200 bg-yellow-50",
    info: "text-fg-brand border-default bg-neutral-primary-soft",
  };

  const currentStyle = typeStyles[type] || typeStyles.info;

  return (
    <div
      className={`
        fixed top-6 left-1/2 z-[9999]
        -translate-x-1/2
        transition-all duration-300 ease-in-out
        ${visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-8 opacity-0"
        }
      `}
    >
      <div
        className={`flex items-center w-full max-w-xs p-4 rounded-base shadow-lg border ${currentStyle}`}
        role="alert"
      >
        <svg
          className="w-6 h-6 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
          />
        </svg>

        <div className="ms-2.5 text-sm border-s border-default ps-3.5">
          {message}
        </div>
      </div>
    </div>
  );
}

