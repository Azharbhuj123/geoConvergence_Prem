// components/SolutionBlock.jsx
import Button from "./UI/Button";
import { urlFor } from "../lib/sanity";
import { useThemeStore } from "../store/useThemeStore";

export default function SolutionBlock({
  title,
  description,
  description2,
  highlightText,
  listItems,
  button,
  image,
  imagePosition = "right", // "left" or "right"
  variant = "card", // "card" or "section"
  className = "",
  isInverted = false,
  services = [],
}) {
  const imgUrl = image ? urlFor(image) : null;
  const { theme } = useThemeStore();

  // Logic for conditional styling
  const isCard = variant === "card";
  const textColor = isInverted ? "text-white" : "text-[var(--text)]";

  const containerClasses = `
    w-full max-w-[1440px] mx-auto 
    ${isCard ? "px-6 lg:px-14 my-14 rounded-[2rem] shadow-2xl sm:rounded-[3rem]" : "px-0"} 
    ${theme === 'dark' ? 'dark' : ''} 
    ${className}
  `.trim();

  return (
    <div className={containerClasses}>
      <div
        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-8 sm:py-15   xl:py-[45px] ${imagePosition === "left" ? "lg:flex-row-reverse" : ""
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
          <h2 className={`heading-primary font-Web mb-8 ${textColor}`}>
            {title}
          </h2>

          <div className="space-y-6 text-neutral-600 text-[18px] leading-[1.75rem] text-[var(--text)]">
            {Array.isArray(description) ? (
              description.map((para, i) => (
                <p key={i} className={`${textColor} font-Inter`}>{para}</p>
              ))
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className={`${textColor} font-Inter`}
              ></p>
            )}

            {highlightText && (
              <p className="font-semibold text-lg sm:text-[20px] xl:text-[30px] text-[var(--text)] font-Inter">
                {highlightText}
              </p>
            )}

            {listItems && listItems.length > 0 && (
              <ul className="list-disc pl-6 space-y-2 text-[var(--text)] font-Inter">
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {description2 && (
            <p
              dangerouslySetInnerHTML={{ __html: description2 }}
              className="text-subtitle text-[var(--text)] mt-[10px] xl:text-[18px]"
            ></p>
          )}

          {Array.isArray(services) && services?.length > 0 && (
            <div className="mt-[20px]">
              <ul className="space-y-2">
                {services.map((service, i) => (
                  <li key={i} className="text-[var(--text)] list-disc font-Inter">{service.title}</li>
                ))}
              </ul>
            </div>
          )}

          {button && (
            <div className="mt-10">
              <Button
                href={button.link || "#"}
                variant="primary"
                size="md"
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