import { useThemeStore } from "../store/useThemeStore";
import { useQuery } from "@tanstack/react-query";
import { fetchScan2Twin } from "../lib/api";
import { scan2TwinPageData } from "../lib/data/scan2TwinPageData";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolutionBlock from "../components/SolutionBlock";
import Services from "../components/Services";
import Events from "../components/Events";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Scan2Twin() {
  const { theme, toggleTheme } = useThemeStore();

  const { data } = useQuery({
    queryKey: ["scan2Twin"],
    queryFn: fetchScan2Twin,
  });

  const pageData = data || scan2TwinPageData;
  const isDark = theme === "dark";

  return (
    <div
      className={isDark ? "dark" : ""}
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Navbar darkMode={isDark} toggleDarkMode={toggleTheme} />

      <main>
        <Hero
          darkMode={isDark}
          hero={pageData.hero}
          title={pageData.hero?.title || "Scan2Twin"}
          minHeight="min-h-[550px]"
        />

        {/* What is Scan2Twin */}
        {pageData.whatIs && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
            <SolutionBlock
              title={pageData.whatIs.title}
              description={pageData.whatIs.description}
              image={pageData.whatIs.image}
              imagePosition="left"
              darkMode={isDark}
              variant="section"
            />
          </section>
        )}

        {/* Events (Inverted Background/Theme logic from user snippet) */}
        {pageData.events && (
          <section className={`bg-[var(--bg)]`}>
            <Events darkMode={theme === "dark"} eventsData={pageData.events} />
          </section>
        )}

        {/* How It Works (Services Blue Variant from user instruction) */}
        {pageData.howItWorks && (
          <Services
            darkMode={isDark}
            services={{
              ...pageData.howItWorks,
              sectionTitle: pageData.howItWorks.title,
              sectionSubtitle: pageData.howItWorks.subtitle,
            }}
            variant="blue"
          />
        )}


        {/* Why Scan2Twin */}
        {pageData.why && (
          <section className={`bg-[var(--bg)] px-6 sm:px-10 xl:px-14`}>
            <SolutionBlock
              title={pageData.why.title}
              description={pageData.why.description}
              button={
                pageData.why.buttonText
                  ? { text: pageData.why.text, link: "#" }
                  : null
              }
              highlightText={"It delivers:"}
              image={pageData.why.image}
              imagePosition="left"
              darkMode={isDark}
              listItems={pageData.why.listItems}
              variant="section"
            />
          </section>
        )}

        {/* Use Cases */}
        {pageData.useCases && (
          <Services
            darkMode={isDark}
            services={pageData.useCases}
            variant="default"
            button={false}
          />
        )}

        <CTA darkMode={isDark} CtaData={pageData.finalCta} />
      </main>

      <Footer darkMode={isDark} />
    </div>
  );
}
