import { Check } from 'lucide-react'
import Button from './UI/Button'

export default function PlansAndPricing({ sectionTitle, subTitle, plans = [] }) {
  return (
    <section className="bg-[var(--navblue-bg)] px-6 py-14 sm:px-8 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-4xl">
          {sectionTitle && (
            <h2 className="font-Web text-3xl font-bold leading-tight text-white md:text-4xl xl:text-[50px]">
              {sectionTitle}
            </h2>
          )}
          {subTitle && (
            <p className="font-Inter mt-4 text-lg leading-relaxed text-white/80 xl:text-xl">
              {subTitle}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 gap-6 ${plans.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {plans.map((plan, index) => {
            const highlighted = Boolean(plan.isHighlighted)
            const cardClass = highlighted
              ? 'border-[#0c59db] bg-gradient-to-b from-[#0043ac] to-[#0c59db] text-white shadow-[0_22px_50px_rgba(12,89,219,0.35)] -translate-y-2'
              : 'border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:shadow-xl hover:border-slate-700 hover:-translate-y-1 transition-all duration-300'

            return (
              <article
                key={plan.planName || index}
                className={`flex min-h-[430px] flex-col rounded-[20px] border p-5 xl:p-7 ${cardClass}`}
              >
                {plan.planName && (
                  <h3 className="font-Web text-2xl font-bold leading-tight">
                    {plan.planName}
                  </h3>
                )}
                {plan.description && (
                  <p className={`font-Inter mt-2 text-sm sm:text-base leading-relaxed ${highlighted ? 'text-white/85' : 'text-[var(--muted)]'}`}>
                    {plan.description}
                  </p>
                )}

                <div className={`my-6 h-px ${highlighted ? 'bg-white/30' : 'bg-[var(--border)]'}`} />

                {plan.isCustom ? (
                  plan.price && (
                    <div className="flex h-[48px] items-end">
                      <p className="font-Web text-4xl sm:text-5xl font-bold leading-none tracking-tight">
                        {plan.price}
                      </p>
                    </div>
                  )
                ) : (
                  <div className="flex h-[48px] items-end gap-2">
                    {plan.price && (
                      <span className="font-Web text-4xl sm:text-5xl font-bold leading-none tracking-tight">
                        {plan.price}
                      </span>
                    )}
                    {plan.priceSuffix && (
                      <span className={`font-Inter pb-1 text-sm ${highlighted ? 'text-white/75' : 'text-[var(--muted)]'}`}>
                        {plan.priceSuffix}
                      </span>
                    )}
                  </div>
                )}

                {plan.features?.length > 0 && (
                  <ul className="mt-6 flex flex-col gap-3.5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={`${feature}-${featureIndex}`} className="font-Inter flex items-start gap-3 text-sm sm:text-base leading-snug">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? 'text-white' : 'text-[#0c59db]'}`} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {plan.ctaText && (
                  <div className="mt-auto pt-8">
                    {highlighted ? (
                      <a
                        href={plan.ctaLink || '#'}
                        className="inline-block w-full rounded-xl bg-white px-5 py-3 text-center font-Inter text-[15px] font-bold text-[#0c59db] shadow-sm transition-all hover:bg-slate-50 hover:shadow-md sm:text-[16px] xl:px-8 xl:py-4"
                      >
                        {plan.ctaText}
                      </a>
                    ) : (
                      <Button 
                        href={plan.ctaLink || '#'} 
                        size="sm" 
                        variant="primary"
                        className="w-full"
                      >
                        {plan.ctaText}
                      </Button>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
