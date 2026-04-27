import { useEffect, useRef, useState } from "react";
import { urlFor } from "../lib/sanity";

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
}

function StatCard({ value, suffix, label, icon, iconImage, darkMode, animate }) {
  const count = useCountUp(value, 2200, animate);

  return (
    <div
      className={`${darkMode ? 'dark' : 'dark'} flex-1 min-w-[220px] rounded-2xl p-6 sm:p-8 flex flex-col gap-3 transition-all duration-300
        bg-[var(--slate-bg)]
      `}
    >
      <div
        className={`font-bold font-['Titillium_Web'] leading-tight tabular-nums text-slate-100`}
        style={{ fontSize: "clamp(1rem, 3vw, 2rem)" }}
      >
        {value}{suffix}
      </div>
      <div className={`text-sm sm:text-base font-semibold font-Inter uppercase tracking-widest ${darkMode ? 'text-slate-400' : 'text-slate-500'
        }`}>
        {label}
      </div>
      <div className="w-full flex items-center justify-end">
        {iconImage ?
          <div className="w-14 h-14 sm:w-18 sm:h-18 xl:w-24 xl:h-24 flex items-center justify-center flex-shrink-0">
            <img src={urlFor(iconImage)} className="w-14 h-14 sm:w-18 sm:h-18 xl:w-24 xl:h-24" />
          </div>
          :
          <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        }
      </div>
    </div>
  );
}

export default function Stats({ darkMode, statsData, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const defaultStats = [
    {
      value: 500,
      suffix: "M+",
      label: "Sq Ft Scanned",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      value: 200,
      suffix: "+",
      label: "Buildings Completed",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      value: 48,
      suffix: "+",
      label: "National Projects",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="10" r="4" /><path d="M12 2a10 10 0 0110 10c0 5.52-10 14-10 14S2 17.52 2 12A10 10 0 0112 2z" />
        </svg>
      ),
    },
    {
      value: 99,
      suffix: ".9%",
      label: "Data Accuracy",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
    },
  ];

  const stats = statsData || defaultStats;

  return (
    <section
      ref={ref}
      className={`pb-16 pt-15 lg:pb-20 px-6 sm:px-8 lg:px-14 ${darkMode ? "bg-slate-950" : "bg-white"} ${className}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap gap-5 sm:gap-7">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              {...stat}
              darkMode={darkMode}
              animate={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
