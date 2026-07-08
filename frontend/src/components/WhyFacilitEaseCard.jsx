import { HelpCircle } from 'lucide-react'
import { urlFor } from '../lib/sanity'

export default function WhyFacilitEaseCard({ icon, title, description }) {
  return (
    <article className="flex min-h-[160px] flex-col gap-4 rounded-[20px] bg-[#000941] p-6 shadow-[0_12px_30px_rgba(0,9,65,0.16)]">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          {icon ? (
            <img src={urlFor(icon)} alt="" className="h-10 w-10 object-contain" />
          ) : (
            <HelpCircle className="h-8 w-8 text-white" aria-hidden="true" />
          )}
        </div>
        {title && (
          <h3 className="font-Web text-xl font-bold uppercase leading-tight tracking-[0.03em] text-white">
            {title}
          </h3>
        )}
      </div>
      {description && (
        <p className="font-Inter text-base leading-7 text-white/90">
          {description}
        </p>
      )}
    </article>
  )
}
