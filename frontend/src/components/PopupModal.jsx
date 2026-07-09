import { useEffect } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { X } from "lucide-react";

export default function PopupModal({
  isOpen,
  onClose,
  title,
  children,
  darkMode = false,
  labelledBy = "popup-modal-title",
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-3 py-4 backdrop-blur-md sm:px-6 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onMouseDown={onClose}
        >
          <Motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            className={`relative flex max-h-[92vh] w-full max-w-[1200px] flex-col overflow-hidden rounded-2xl shadow-2xl ${darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-950"}`}
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div
              className={`sticky top-0 z-10 flex items-center justify-between gap-4 border-b px-4 py-3 sm:px-6 ${darkMode ? "border-white/10 bg-slate-950/95" : "border-slate-200 bg-white/95"} backdrop-blur`}
            >
              <p id={labelledBy} className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                {title}
              </p>
              <button
                type="button"
                onClick={onClose}
                className={`cursor-pointer inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition ${darkMode ? "bg-white/10 text-white hover:bg-white/20" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                aria-label="Close popup"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto px-4 py-6 sm:px-6 md:px-8 lg:px-10">
              {children}
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
