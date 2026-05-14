import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function StepIcon({ icon, iconSize }) {
  if (!icon) return null;

  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      size: iconSize,
      className: `text-white ${icon.props.className || ""}`,
    });
  }

  return React.createElement(icon, {
    size: iconSize,
    strokeWidth: 2,
    className: "text-white",
  });
}

export function WorkProcessStep({
  title,
  description,
  icon,
  index,
  total,
  iconSize = 64,
}) {
  const hasNext = index < total - 1;

  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative flex min-h-[280px] flex-col items-center text-center"
    >
      <div className="relative flex h-35 w-35 items-center justify-center rounded-full bg-blue-700">
        <div className="flex h-31 w-31 items-center justify-center rounded-full bg-[#09155F]">
          <StepIcon icon={icon} iconSize={iconSize} />
        </div>
      </div>

      {hasNext && (
        <div className="absolute left-[calc(45%+88px)] top-[72px] hidden w-[calc(90%-96px)] items-center xl:flex">
          <span className="h-px flex-1 bg-white" />
          <ArrowRight className="-ml-1 h-5 w-5 shrink-0 text-white" strokeWidth={2.75} />
        </div>
      )}

      <h3 className="mt-8 font-Web text-2xl font-bold leading-8 text-white sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-[245px] font-Inter text-base leading-7 text-white/90 sm:text-lg">
        {description}
      </p>
    </Motion.article>
  );
}

export default function WorkProcessSection({
  title = "How We Work",
  steps = [],
  className = "",
  iconSize = 64,
  length = 5,
}) {
  return (
    <section className={`px-6 py-16 sm:px-10 lg:py-24 xl:px-14 ${className}`}>
      <div className="mx-auto max-w-[1440px]">
        <Motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center font-Web text-4xl font-bold leading-tight text-white sm:text-5xl"
        >
          {title}
        </Motion.h2>

        <div className={`mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${length} xl:gap-x-9`}>
          {steps.map((step, index) => (
            <WorkProcessStep
              key={step.id || step.title || index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
              total={steps.length}
              iconSize={step.iconSize || iconSize}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
