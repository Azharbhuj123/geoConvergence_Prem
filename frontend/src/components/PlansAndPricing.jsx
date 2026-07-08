import { Check } from 'lucide-react'
import Button from './UI/Button'

export default function PlansAndPricing({ sectionTitle, subTitle, plans = [] }) {
  return (
    <section className="bg-[var(--navblue-bg)] px-6 py-14 sm:px-8 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-[720px]">
          {sectionTitle && (
            <h2 className="font-Web text-3xl font-bold leading-tight text-white md:text-4xl xl:text-[50px]">
              {sectionTitle}
            </h2>
          )}
          {subTitle && (
            <p className="font-Inter mt-4 text-lg leading-8 text-white/75">
              {subTitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const highlighted = Boolean(plan.isHighlighted)
            const cardClass = highlighted
              ? 'border-[#0c59db] bg-gradient-to-b from-[#0043ac] to-[#0c59db] text-white shadow-[0_22px_50px_rgba(12,89,219,0.35)] lg:-translate-y-3'
              : 'border-[var(--border)] bg-[var(--card)] text-[var(--text)]'

            return (
              <article
                key={plan.planName || index}
                className={`flex min-h-[430px] flex-col rounded-[20px] border p-7 ${cardClass}`}
              >
                {plan.planName && (
                  <h3 className="font-Web text-2xl font-bold leading-tight">
                    {plan.planName}
                  </h3>
                )}
                {plan.description && (
                  <p className={`font-Inter mt-3 text-base leading-7 ${highlighted ? 'text-white/85' : 'text-[var(--muted)]'}`}>
                    {plan.description}
                  </p>
                )}

                <div className={`my-6 h-px ${highlighted ? 'bg-white/30' : 'bg-[var(--border)]'}`} />

                {plan.isCustom ? (
                  plan.price && (
                    <p className="font-Web text-4xl font-bold leading-tight">
                      {plan.price}
                    </p>
                  )
                ) : (
                  <div className="flex items-end gap-2">
                    {plan.price && (
                      <span className="font-Web text-5xl font-bold leading-none">
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
                  <ul className="mt-7 flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={`${feature}-${featureIndex}`} className="font-Inter flex gap-3 text-base leading-6">
                        <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {plan.ctaText && (
                  <div className="mt-auto pt-8">
                    <Button href={plan.ctaLink || '#'} size="sm" className={highlighted ? 'bg-white !text-[#0c59db] hover:!bg-slate-100' : ''}>
                      {plan.ctaText}
                    </Button>
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
