import React from 'react'
import {useQuery} from '@tanstack/react-query'
import {useThemeStore} from '../store/useThemeStore'
import {fetchFacilitEasePage} from '../lib/api'
import {facilitEasePageData} from '../lib/data/facilitEasePageData'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyFacilitEaseCard from '../components/WhyFacilitEaseCard'
import SolutionBlock from '../components/SolutionBlock'
import Services from '../components/Services'
import GettingStarted from '../components/GettingStarted'
import PlansAndPricing from '../components/PlansAndPricing'
import FAQ from '../components/FAQ'
import FacilitCTA from '../components/FacilitCTA'
import Footer from '../components/Footer'
import PageLoader from '../components/UI/PageLoader'

const withHeroButtons = (hero) => {
  if (!hero) return hero

  return {
    ...hero,
    button1: hero.primaryBtnText
      ? {
          text: hero.primaryBtnText,
          link: hero.primaryBtnLink,
        }
      : null,
    button2: hero.secondBtnText
      ? {
          text: hero.secondBtnText,
          link: hero.secondBtnLink,
        }
      : null,
  }
}

const withServicesSubtitle = (section) => {
  if (!section) return section

  return {
    ...section,
    sectionSubtitle: section.sectionSubtitle || section.subTitle,
  }
}

export default function FacilitEasePage() {
  const {theme, toggleTheme} = useThemeStore()
  const isDark = theme === 'dark'

  const {data, isLoading} = useQuery({
    queryKey: ['facilitEasePage'],
    queryFn: fetchFacilitEasePage,
  })

  if (isLoading) {
    return <PageLoader />
  }

  const pageData = data || facilitEasePageData

  const hero = withHeroButtons(pageData.hero)
  const whatsIncluded = withServicesSubtitle(pageData.whatsIncluded)
  const solutionsForEverySpace = withServicesSubtitle(pageData.solutionsForEverySpace)

  return (
    <div className={isDark ? 'dark' : ''} style={{background: 'var(--bg)', color: 'var(--text)'}}>
      <Navbar
        darkMode={isDark}
        toggleDarkMode={toggleTheme}
        logo={pageData.navbar?.logo}
        ctaText={pageData.navbar?.ctaText}
        ctaLink={pageData.navbar?.ctaLink}
        compact
      />

      <main>
        {hero && (
          <Hero
            darkMode={isDark}
            hero={hero}
            minHeight="min-h-[550px]"
            className="max-w-[920px]"
          />
        )}

        {pageData.whyFacilitEase && (
          <section className="bg-[var(--bg)] px-6 py-12 sm:px-8 md:py-16 lg:px-14">
            <div className="mx-auto max-w-[1440px]">
              <div className="mb-8">
                {pageData.whyFacilitEase.sectionTitle && (
                  <h2 className="font-Web text-3xl font-bold leading-tight text-[var(--heading)] md:text-4xl xl:text-[50px]">
                    {pageData.whyFacilitEase.sectionTitle}
                  </h2>
                )}
                {pageData.whyFacilitEase.subtitle && (
                  <p className="font-Inter mt-3 text-xl leading-8 text-[var(--muted)]">
                    {pageData.whyFacilitEase.subtitle}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {pageData.whyFacilitEase.cards?.map((card, index) => (
                  <WhyFacilitEaseCard
                    key={card.title || index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {pageData.startYourJourney && (
          <section className="bg-[var(--navblue-bg)] px-6 py-10 sm:px-8 lg:px-14">
            <SolutionBlock
              title={pageData.startYourJourney.title}
              description={pageData.startYourJourney.description}
              button={
                pageData.startYourJourney.buttonText
                  ? {
                      text: pageData.startYourJourney.buttonText,
                      link: pageData.startYourJourney.buttonLink,
                    }
                  : null
              }
              image={pageData.startYourJourney.image}
              imagePosition="right"
              variant="section"
              isInverted
            />
          </section>
        )}

        {whatsIncluded && (
          <Services
            darkMode={isDark}
            services={whatsIncluded}
            variant="default"
            button={null}
            className={"!pb-0"}
          />
        )}

        {pageData.facilitEaseInAction && (
          <section className="bg-[var(--bg)] px-6 py-10 sm:px-8 md:py-16 lg:px-14">
            <SolutionBlock
              title={pageData.facilitEaseInAction.title}
              description={pageData.facilitEaseInAction.description}
              button={
                pageData.facilitEaseInAction.buttonText
                  ? {
                      text: pageData.facilitEaseInAction.buttonText,
                      link: pageData.facilitEaseInAction.buttonLink,
                    }
                  : null
              }
              image={pageData.facilitEaseInAction.image}
              imagePosition="left"
              variant="section"
            />
          </section>
        )}

        {solutionsForEverySpace && (
          <Services
            darkMode={isDark}
            services={solutionsForEverySpace}
            variant="blue"
            length={solutionsForEverySpace.cards?.length}
            button={null}
          />
        )}

        {pageData.gettingStarted && (
          <section id="getting-started">
            <GettingStarted
              darkMode={isDark}
              sectionTitle={pageData.gettingStarted.sectionTitle}
              subTitle={pageData.gettingStarted.subTitle}
              steps={pageData.gettingStarted.steps}
            />
          </section>
        )}

        {pageData.plansAndPricing && (
          <PlansAndPricing
            darkMode={isDark}
            sectionTitle={pageData.plansAndPricing.sectionTitle}
            subTitle={pageData.plansAndPricing.subTitle}
            plans={pageData.plansAndPricing.plans}
          />
        )}

        {pageData.faq && (
          <section id="faq">
            <FAQ
              darkMode={isDark}
              sectionTitle={pageData.faq.sectionTitle}
              subTitle={pageData.faq.subTitle}
              questions={pageData.faq.questions}
            />
          </section>
        )}

        {pageData.ctaSection && (
          <FacilitCTA
            darkMode={isDark}
            sectionTitle={pageData.ctaSection.sectionTitle}
            subTitle={pageData.ctaSection.subTitle}
            namePlaceholder={pageData.ctaSection.namePlaceholder}
            lastNamePlaceholder={pageData.ctaSection.lastNamePlaceholder}
            emailPlaceholder={pageData.ctaSection.emailPlaceholder}
            phonePlaceholder={pageData.ctaSection.phonePlaceholder}
            messagePlaceholder={pageData.ctaSection.messagePlaceholder}
            submitBtnText={pageData.ctaSection.submitBtnText}
            backgroundImage={pageData.ctaSection.backgroundImage}
          />
        )}
      </main>

      {pageData.footer && (
        <Footer
          darkMode={isDark}
          logo={pageData.footer.logo}
          brandTitle={pageData.footer.brandTitle}
          partnerLabel={pageData.footer.partnerLabel}
          copyright={pageData.footer.copyright}
          socialLinks={pageData.footer.socialLinks}
          partnerLogos={pageData.footer.partnerLogos}
        />
      )}
    </div>
  )
}
