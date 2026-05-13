// import { urlFor } from "../lib/sanity";
// import { useThemeStore } from "../store/useThemeStore";

// export default function CoreValues({ title, subTitle, cards, className, length = 3 }) {
//   const { theme } = useThemeStore();
//   const isDark = theme === "dark";

//   return (
//     <section
//       className={`py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${isDark ? "bg-slate-950" : "bg-[#09155F]"}`}
//     >
//       <div className="max-w-[1440px] mx-auto">
//         <h2 className="heading-primary font-Web text-white mb-6">
//           {title}
//         </h2>
//         {subTitle && (
//           <p
//             className={`text-subtitle mb-12`}
//           >
//             {subTitle || 'The core values that drive our success'}
//           </p>
//         )}

//         <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${length} gap-6 `}>
//           {cards?.map((card, idx) => (
//             <div
//               key={idx}
//               className={`flex-1 min-w-[300px] max-w-[500px] 
//   p-8 rounded-2xl flex flex-col justify-between 
//   relative overflow-hidden transition-colors ${isDark ? "bg-slate-800" : "bg-white"
//                 }`}
//             >
//               <div>
//                 <h3
//                   className={`text-2xl font-bold font-Web uppercase tracking-wide mb-3 text-[var(--text)]
//                     }`}
//                 >
//                   {card.title}
//                 </h3>
//                 <p
//                   className={`text-lg font-Inter ${isDark ? "text-slate-300" : "text-slate-600"
//                     }`}
//                 >
//                   {card.description}
//                 </p>
//               </div>

//               {/* Icon Circle */}
//               <div className="w-full flex items-center justify-end">
//                 {card.iconImage ?
//                   <div className="w-14 h-14 sm:w-18 sm:h-18 xl:w-24 xl:h-24 flex items-center justify-center flex-shrink-0">
//                     <img src={urlFor(card.iconImage)} className="w-14 h-14 sm:w-18 sm:h-18 xl:w-24 xl:h-24" />
//                   </div>
//                   :
//                   <div className="w-14 h-14 sm:w-18 sm:h-18 xl:w-24 xl:h-24 bg-blue-700  rounded-xl flex items-center justify-center flex-shrink-0">
//                     <svg
//                       width="32"
//                       height="32"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="white"
//                       strokeWidth="2"
//                     >
//                       <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
//                     </svg>
//                   </div>
//                 }
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { urlFor } from "../lib/sanity";
import { useThemeStore } from "../store/useThemeStore";

export default function CoreValues({
  title,
  subTitle,
  cards = [],
  className = "",
  length = 3,
}) {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  const getGridCols = () => {
    if (length === 1) return "xl:grid-cols-1";
    if (length === 2) return "xl:grid-cols-2";
    return "xl:grid-cols-3";
  };

  return (
    <section
      className={`py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-14 ${
        isDark ? "bg-slate-950" : "bg-[#09155F]"
      } ${className}`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="heading-primary font-Web text-white mb-4 sm:mb-6">
          {title}
        </h2>

        {subTitle && (
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-10 lg:mb-12 max-w-3xl">
            {subTitle}
          </p>
        )}

        {/* Responsive Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${getGridCols()} gap-4 sm:gap-6 lg:gap-8`}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`w-full min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]
              p-5 sm:p-6 lg:p-8
              rounded-xl sm:rounded-2xl
              flex flex-col justify-between
              relative overflow-hidden
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
              ${isDark ? "bg-slate-800" : "bg-white"}`}
            >
              {/* Content */}
              <div className="pr-20 sm:pr-24 lg:pr-28">
                <h3
                  className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl
                  font-bold font-Web uppercase tracking-wide
                  mb-3 sm:mb-4
                  ${isDark ? "text-white" : "text-[var(--text)]"}`}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-sm sm:text-base lg:text-lg
                  leading-6 sm:leading-7 lg:leading-8
                  font-Inter
                  ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  {card.description}
                </p>
              </div>

              {/* Icon */}
              <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
                {card.iconImage ? (
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
                    <img
                      src={urlFor(card.iconImage)}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}