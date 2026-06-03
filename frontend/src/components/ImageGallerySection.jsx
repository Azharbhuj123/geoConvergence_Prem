import { useEffect, useState, useRef } from "react";
import { X, ZoomIn } from "lucide-react";
import clsx from "clsx";
import { urlFor } from "../lib/sanity";

function getImageUrl(image, width = 1920) {
  if (!image) return "";
  if (typeof image === "string") return image;
  return urlFor(image).replace(/w=\d+/, `w=${width}`);
}

function normalizeGallery(pageData) {
  if (Array.isArray(pageData)) {
    return { title: "Image Gallery", subtitle: "", images: pageData };
  }
  return {
    title: pageData?.title || "Image Gallery",
    subtitle: pageData?.subtitle || "",
    images: pageData?.images || pageData?.cards || [],
  };
}

export default function ImageGallerySection({ darkMode, pageData, className }) {
  const [active, setActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const gallery = normalizeGallery(pageData);
  const images = gallery.images.filter(
    (item) => item?.image || item?.asset || typeof item === "string"
  );

  // Auto-rotate — same cadence as Testimonials
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, images.length]);

  // Lightbox keyboard / scroll-lock
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!images.length) return null;

  return (
    <section
      className={clsx(
        darkMode ? "dark" : "",
        "bg-[var(--bg)] py-10 md:py-20 pb-20 px-6 sm:px-8 lg:px-14",
        className
      )}
    >
      <style>{`
        @keyframes imageGalleryFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes imageGalleryZoomIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-5 max-w-[760px]">
          <h2 className="heading-primary font-Web">{gallery.title}</h2>
          {gallery.subtitle && (
            <p
              className={clsx(
                "text-subtitle",
                darkMode ? "text-slate-300" : "text-slate-600"
              )}
            >
              {gallery.subtitle}
            </p>
          )}
        </div>

        {/* Carousel — mirrors Testimonials layout exactly */}
        <div
          className="
            relative
            h-[540px] sm:h-[600px] xl:h-[660px]
            flex items-center justify-center
            overflow-hidden
            px-2 sm:px-0
          "
        >
          {images.map((item, i) => {
            const image = item.image || item;
            const alt = item.alt || item.caption || `${gallery.title} image ${i + 1}`;
            const thumbUrl = getImageUrl(image, 900);
            const isCenter = i === active;

            // Relative position in the ring (0 = active, 1 = right, last = left)
            const position = (i - active + images.length) % images.length;

            const isMobile =
              typeof window !== "undefined" && window.innerWidth < 640;

            let translateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (position === 0) {
              translateX = 0;
              scale = isMobile ? 1 : 1.08;
              opacity = 1;
              zIndex = 30;
            } else if (position === 1) {
              // right
              translateX = isMobile ? 85 : 340;
              scale = isMobile ? 0.92 : 0.85;
              opacity = 0.7;
              zIndex = 10;
            } else if (position === images.length - 1) {
              // left
              translateX = isMobile ? -85 : -340;
              scale = isMobile ? 0.92 : 0.85;
              opacity = 0.7;
              zIndex = 10;
            } else {
              // hidden cards beyond left/right
              translateX = position < images.length / 2 ? 600 : -600;
              scale = 0.7;
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={item._key || item.alt || i}
                onClick={() => {
                  if (!isCenter) {
                    // Side card: advance carousel to this item
                    setActive(i);
                    setIsPaused(false);
                  }
                }}
                onMouseEnter={() => isCenter && setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => isCenter && setIsPaused(true)}
                onTouchEnd={() => {
                  // Resume after a short delay on mobile touch
                  setTimeout(() => setIsPaused(false), 3000);
                }}
                className={clsx(
                  "group absolute cursor-pointer transition-all duration-700 ease-out",
                  "rounded-[20px] overflow-hidden",
                  "w-[92%] sm:w-full",
                  // Height matches the container
                  "h-[480px] sm:h-[540px] xl:h-[600px]",
                  "max-w-[780px] sm:max-w-[720px] xl:max-w-[880px]",
                  "shadow-[0_0_40px_rgba(15,23,42,0.12)]",
                  !isCenter && "cursor-pointer"
                )}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                {/* Image */}
                <img
                  src={thumbUrl}
                  alt={alt}
                  loading="lazy"
                  className={clsx(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                    isCenter
                      ? "group-hover:scale-105 group-hover:brightness-75"
                      : "brightness-75"
                  )}
                />

                {/* Gradient overlay */}
                <div
                  className={clsx(
                    "absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/55 transition-all duration-500",
                    isCenter &&
                      "group-hover:via-black/20 group-hover:to-black/75"
                  )}
                />

                {/* Caption + zoom icon — only on center card, reveal on hover */}
                {isCenter && (
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div>
                      {item.caption && (
                        <p className="font-Inter text-base sm:text-lg leading-6 text-white">
                          {item.caption}
                        </p>
                      )}
                    </div>
                    {/* Zoom button — opens lightbox */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage({ ...item, image, alt });
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg transition hover:bg-white hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/60"
                      aria-label={`Open ${alt} fullscreen`}
                    >
                      <ZoomIn size={20} aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dots — identical to Testimonials */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={clsx(
                "h-2.5 rounded-full transition-all duration-300",
                i === active
                  ? "bg-blue-600 w-8"
                  : darkMode
                  ? "bg-slate-600 w-2.5"
                  : "bg-slate-300 w-2.5"
              )}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox — unchanged from original */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-4 py-6 backdrop-blur-sm animate-[imageGalleryFadeIn_180ms_ease-out]"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition hover:bg-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/60"
            aria-label="Close gallery image"
          >
            <X size={22} aria-hidden="true" />
          </button>

          <figure
            className="max-h-[90vh] max-w-[min(1180px,92vw)] scale-100 animate-[imageGalleryZoomIn_220ms_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getImageUrl(selectedImage.image, 1920)}
              alt={selectedImage.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-[20px] object-contain shadow-2xl"
            />
            {selectedImage.caption && (
              <figcaption className="mt-4 text-center font-Inter text-sm sm:text-base text-white/85">
                {selectedImage.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  );
}