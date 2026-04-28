import Button from "./UI/Button";
import { useThemeStore } from "../store/useThemeStore";
import { urlFor } from "../lib/sanity";

export default function Events({ className, eventsData }) {
  const { theme } = useThemeStore();

  const defaultEvents = [
    {
      tag: "Upcoming Events",
      title: "Esri FedGIS Conference 2026",
      date: "February 10–11, 2026",
      location: "Washington, DC",
      description: "",
      image: "https://placehold.co/738x532/0c1424/ffffff?text=FedGIS+2026",
      btn: null,
    },
    {
      tag: "Upcoming Events",
      title: "Geo Week 2026",
      date: "February 16–18, 2026",
      location: "Colorado Convention Center",
      description: "",
      image: "https://placehold.co/946x531/0c1424/ffffff?text=Geo+Week+2026",
      btn: null,
    },
  ];

  const events =
    eventsData?.cards && eventsData.cards.length
      ? eventsData.cards.map((item) => ({
        tag: item.tag,
        title: item.title,
        date: item.date,
        location: item.location,
        description: item.description,
        image: urlFor(item.image),
        btn: item.btn || null,
      }))
      : defaultEvents;

  return (
    <section
      className={`${theme === "dark" ? "dark" : ""} py-20 pb-10 px-6 sm:px-8 lg:px-14 bg-[var(--bg)]`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        {eventsData?.title && (
          <div className={`mb-12 flex flex-col justify-center items-center gap-3 ${className}`}>
            <h2 className="font-bold font-['Titillium_Web'] text-[var(--text)] text-[clamp(1.5rem,3.5vw,3rem)]">
              {eventsData?.title}
            </h2>
            <p className="text-lg sm:text-xl font-Inter lg:w-[763px] text-center text-[var(--text)]">
              {eventsData?.description}
            </p>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {events.map((event, index) => {
            const imgUrl = event.image;

            return (
              <div
                key={index}
                className="relative rounded-[20px] overflow-hidden group h-[clamp(400px,30vw,545px)]"
              >
                {/* Image */}
                <img
                  src={imgUrl}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:brightness-75 group-hover:scale-105"
                />

                {/* Overlay - Darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90 transition-all duration-700 group-hover:from-black/30 group-hover:via-black/60 group-hover:to-black/95" />

                {/* Content Container - Slides UP on hover */}
                <div className="relative z-10 h-full p-7 sm:p-8 flex flex-col justify-end transition-all duration-700 group-hover:-translate-y-6">
                  {/* Tag */}
                  {event.tag && (
                    <div className="inline-flex self-start mb-4">
                      <span className="px-4 py-2 bg-white/30 backdrop-blur-sm text-slate-100 text-base font-Inter rounded-xl">
                        {event.tag}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-slate-100 font-bold font-['Titillium_Web'] capitalize leading-tight text-[clamp(1.5rem,3vw,3rem)] mb-4">
                    {event.title}
                  </h3>

                  {/* Date + Location */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 mb-5">
                    {event.date && (
                      <div className="flex items-center gap-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        <span className="text-slate-100 text-base font-Inter leading-8">
                          {event.date}
                        </span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                        >
                          <path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                        <span className="text-slate-100 text-base font-Inter leading-8">
                          {event.location}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {event.description && (
                    <p
                      className={`text-slate-200 text-base sm:text-lg font-Inter transition-all duration-700 overflow-hidden
                        group-hover:line-clamp-none line-clamp-3 group-hover:max-h-[180px] max-h-[4.2em]
                      `}
                    >
                      {event.description}
                    </p>
                  )}

                  {/* CTA Button */}
                  {event.btn && (
                    <div className="pt-6 transition-all duration-700 group-hover:pt-8">
                      <Button href={event.btn.link} variant="primary">
                        {event.btn.text}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}