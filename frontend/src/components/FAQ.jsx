import {useState} from 'react'
import {ChevronDown} from 'lucide-react'

export default function FAQ({sectionTitle, subTitle, questions = []}) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="bg-[var(--bg)] px-6 py-14 sm:px-8 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        {sectionTitle && (
          <h2 className="font-Web mb-2 text-3xl font-bold leading-tight text-[var(--heading)] md:text-4xl xl:text-[50px]">
            {sectionTitle}
          </h2>
        )}
        {subTitle && (
          <p className="font-Inter mb-10 text-lg leading-8 text-[var(--muted)] sm:text-xl">
            {subTitle}
          </p>
        )}

        <div className="overflow-hidden rounded-[20px] border border-[#000941]/45 bg-[var(--card)]">
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question || index} className="border-b border-[#000941]/20 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-Web text-xl font-bold leading-tight text-[var(--heading)] sm:text-2xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--heading)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    {item.answer && (
                      <p className="font-Inter px-6 pb-7 text-base leading-8 text-[var(--muted)] sm:px-8">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
