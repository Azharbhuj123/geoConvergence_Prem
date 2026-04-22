export const Services_Description = ({ pageData, theme, className }) => {
  if (!pageData) {return null;}
    return (
        <div className={`w-full max-w-[1440px] mx-auto ${theme === 'dark' ? 'dark' : ''} bg-[var(--bg)] ${className}`}>
            <div className="max-w-[933px]">
                <h2 className="heading-primary mb-5">
                    {pageData.title}
                </h2>
                <p className="text-subtitle">
                    {pageData.description}
                </p>
            </div>
        </div>
    )
}
