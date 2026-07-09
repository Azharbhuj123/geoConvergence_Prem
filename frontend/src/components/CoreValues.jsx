import { urlFor } from "../lib/sanity";
import { useThemeStore } from "../store/useThemeStore";
import { motion as Motion } from 'framer-motion';

export default function CoreValues({
  title,
  subTitle,
  cards = [],
  className = "",
  lastRowHeight = null,
  maxWidth
}) {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  const getRows = () => {
    const total = cards.length;

    if (total <= 3) return [cards];

    const firstRow = cards.slice(0, 3);
    const remaining = cards.slice(3);

    return [firstRow, remaining];
  };

  const rows = getRows();

  return (
    <section
      className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${isDark ? "bg-slate-950" : "bg-[#09155F]"
        } ${className}`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="heading-primary font-Web text-white mb-6">
          {title}
        </h2>

        {/* Subtitle */}
        {subTitle && (
          <p className={`text-subtitle text-slate-300 mb-12 ${maxWidth}`}>
            {subTitle}
          </p>
        )}

        {/* Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6"> */}
        <div
          className={`
    grid grid-cols-1 md:grid-cols-2 gap-6
    ${cards.length === 4
              ? "xl:grid-cols-4"
              : "xl:grid-cols-6"
            }
  `}
        >
          {cards.map((card, idx) => {
            const total = cards.length;

            let xlSpan =
              total === 4
                ? "xl:col-span-1"
                : "xl:col-span-2";

            // 5 cards last row = 50/50
            if (total === 5 && idx >= 3) {
              xlSpan = "xl:col-span-3";
            }
            return (
              <Motion.article
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                style={{
                  minHeight: lastRowHeight || undefined,
                  width: "100%",
                }}
                className={`
          relative min-h-[240px]
          rounded-[20px]
          p-6 md:p-8
          overflow-hidden
          transition-all duration-300 hover:shadow-xl
          ${xlSpan}
          ${isDark ? "bg-slate-800" : "bg-white"}
        `}
              >
                {/* Text */}
                <div className="">
                  <h3 className="font-Web text-xl xl:text-2xl font-bold uppercase leading-tight text-[var(--text)]">
                    {card.title}
                  </h3>

                  <p
                    className={`mt-4 pr-22 font-Inter text-base xl:text-xl leading-6 ${isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="absolute bottom-6 right-6">
                  {card.iconImage ? (
                    <span className="flex h-16 w-16 sm:h-20 sm:w-20 xl:h-24 xl:w-24 items-center justify-center rounded-lg">
                      <img
                        src={urlFor(card.iconImage)}
                        alt={card.title}
                        className="w-14 h-14 sm:w-18 sm:h-18 xl:w-20 xl:h-20 object-contain"
                      />
                    </span>
                  ) : (
                    <span className="flex h-16 w-16 sm:h-20 sm:w-20 xl:h-24 xl:w-24 items-center justify-center rounded-lg bg-[#2f80d1] shadow-lg shadow-black/20">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                  )}
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}