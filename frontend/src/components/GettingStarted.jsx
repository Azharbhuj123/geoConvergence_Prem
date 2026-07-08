import { ClipboardCheck, CloudUpload, Network, RefreshCcw, Rocket } from 'lucide-react'
import { urlFor } from '../lib/sanity'

const fallbackIcons = [CloudUpload, Network, ClipboardCheck, Rocket, RefreshCcw]

export default function GettingStarted({ sectionTitle, subTitle, steps = [] }) {
  return (
    <div className="bg-[var(--slate-bg)] px-6 py-14 sm:px-8 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          {sectionTitle && (
            <h2 className="font-Web text-3xl font-bold leading-tight text-[var(--heading)] md:text-4xl xl:text-[50px]">
              {sectionTitle}
            </h2>
          )}
          {subTitle && (
            <p className="font-Inter mt-4 text-lg leading-8 text-[var(--muted)]">
              {subTitle}
            </p>
          )}
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const FallbackIcon = fallbackIcons[index % fallbackIcons.length]

              return (
                <article key={step.title || index} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 sm:h-30 sm:w-30 items-center justify-center rounded-full border-2 border-[#000941] bg-white text-[#000941] shadow-[0_10px_30px_rgba(0,9,65,0.08)]">
                    {step.icon ? (
                      <img src={urlFor(step.icon)} alt="" className="h-9 w-9 object-contain" />
                    ) : (
                      <FallbackIcon className="h-8 w-8" aria-hidden="true" />
                    )}
                  </div>                  
                  {step.title && (
                    <h3 className="font-Web mt-5 text-xl font-bold leading-tight text-[var(--heading)]">
                      {step.title}
                    </h3>
                  )}
                  {step.description && (
                    <p className="font-Inter mt-3 max-w-[240px] text-sm leading-6 text-[var(--muted)]">
                      {step.description}
                    </p>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
