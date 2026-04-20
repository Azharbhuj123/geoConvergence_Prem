// components/SolutionBlock.jsx
import Button from "./UI/Button";
import { urlFor } from "../lib/sanity";
import { useThemeStore } from "../store/useThemeStore";

export default function SolutionBlock({
  title,
  description,
  highlightText,
  listItems,
  button,
  image,
  imagePosition = "right", // "left" or "right"
  darkMode = false,
  className = "",
  services=[],
}) {
  const imgUrl = image ? urlFor(image) : null;
  const { theme } = useThemeStore();

  return (
    <div className={`w-full max-w-[1440px] mx-auto px-6 lg:px-14 ${theme === 'dark' ? 'dark' : ''} ${className}`}>
      <div
        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16 lg:py-24 ${imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
      >
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/13] bg-zinc-200">
            {imgUrl ? (
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400" />
            )}
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Titillium_Web'] leading-tight mb-8 text-[var(--text)]">
            {title}
          </h2>

          <div className="space-y-6 text-neutral-600 text-lg leading-8 text-[var(--text)]">
            {Array.isArray(description) ? (
              description.map((para, i) => <p key={i} className="text-[var(--text)]">{para}</p>)
            ) : (
              <p dangerouslySetInnerHTML={{ __html: description }} className="text-[var(--text)]"></p>
            )}

            {highlightText && (
              <p className="font-semibold text-[var(--text)]">
                {highlightText}
              </p>
            )}

            {listItems && listItems.length > 0 && (
              <ul className="list-disc pl-6 space-y-2 text-[var(--text)]">
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {Array.isArray(services) && services?.length > 0 && (
            <div className="mt-[20px]">
              <ul className="space-y-2">
                {services.map((service, i) => (
                  <li key={i} className="text-[var(--text)] list-disc">{service}</li>
                ))}
              </ul>
            </div>
          )}

          {button && (
            <div className="mt-10">
              <Button
                href={button.link || "#"}
                variant="primary"
                className="px-10 py-4 text-lg font-bold"
              >
                {button.text || "View More"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}