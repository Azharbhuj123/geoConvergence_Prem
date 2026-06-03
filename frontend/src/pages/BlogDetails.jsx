import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useThemeStore } from '../store/useThemeStore';
import Navbar from '../components/Navbar';
import ShortHero from '../components/ShortHero';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { fetchBlogDetails, fetchBlogPage } from '../lib/api';
import { pageData } from '../lib/data/page';
import { RecentPosts } from './Blog';

function SidebarWidget({ title, children }) {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className={`w-[3px] h-6 ${isDark ? 'bg-white' : 'bg-[#000942]'}`} />

        <h4 className={`text-md sm:text-lg xl:text-[30px] font-bold ${isDark ? 'text-white' : 'text-[#000942]'}`}>
          {title}
        </h4>
      </div>
      <div>{children}</div>
    </div>
  );
}

const renderEndTitle = (text) => {
  return text
    .split(/(info@geoconvergence\.com|LinkedIn)/g)
    .map((part, index) => {
      if (part === "info@geoconvergence.com") {
        return (
          <a
            key={index}
            href="mailto:info@geoconvergence.com"
            className="text-blue-600 underline"
          >
            {part}
          </a>
        );
      }

      if (part === "LinkedIn") {
        return (
          <a
            key={index}
            href="https://www.linkedin.com/company/geoconvergence/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        );
      }

      return part;
    });
};

export default function BlogDetails() {
  const { theme, toggleTheme } = useThemeStore();
  const darkMode = theme === 'dark';
  const { id: slug } = useParams();
  const [activeTag, setActiveTag] = useState(null);

  const { data: detailsData } = useQuery({
    queryKey: ['blogDetails', slug],
    queryFn: () => fetchBlogDetails(slug),
    enabled: !!slug,
  });

  const { data: blogPageData } = useQuery({
    queryKey: ['blogPage'],
    queryFn: fetchBlogPage,
  });

  const details = detailsData || pageData.blogDetailsPage;
  const galleryImages = details.galleryImages || [];
  const intro = details.intro || [];
  const sections = details.sections || [];
  const blogContent = blogPageData || pageData.blogPage;
  const popularTags = blogContent.popularTags || [];
  const recentPosts = blogContent.recentPosts || [];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-[var(--bg)] mx-auto overflow-x-hidden transition-colors duration-200">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} />

        <ShortHero title={details.heroTitle || 'Blogs Details'} />

        <section className="px-6 lg:px-14 py-14">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-10">
              <h2 className="heading-primary font-Web">
                {details.sectionTitle || 'Our Latest News & Blogs'}
              </h2>

              <div className="grid grid-cols-2 gap-3 pt-6 pb-8 lg:pb-p[60px] lg:pt-[36px]">
                {galleryImages.map((img, i) => (
                  <div
                    key={`${img.alt || 'gallery'}-${i}`}
                    className="overflow-hidden rounded-[12px] w-full h-[300px]"
                  >
                    <img
                      src={img.src || img.image}
                      alt={img.alt || details.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 align-center justify-center py-7">
                <h2 className="text-center text-[var(--heading)] text-lg md:text-xl xl:text-[36px] font-Web font-bold max-w-[1040px] m-auto">
                  {details.title}
                </h2>
                {details.summary && (
                  <p className="font-Inter text-center text-[var(--muted)] text-sm lg:text-lg">
                    {details.summary}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_540px] gap-10 items-start">
              <article className="flex flex-col gap-7 min-w-0">
                {details.articleTitle && (
                  <h1 className="font-bold text-[var(--heading)] font-Web leading-[1.3] text-lg sm:text-xl xl:text-[36px]">
                    {details.articleTitle}
                  </h1>
                )}

                {intro.map((para, i) => (
                  <p key={`intro-${i}`} className="text-sm sm:text-lg leading-[1.85] text-[var(--muted)]">
                    {para}
                  </p>
                ))}

                <div className="h-px bg-[var(--border)]" />

                {sections.map((section, idx) => (
                  <div key={`${section.heading || 'section'}-${idx}`} className="flex flex-col gap-3">
                    <h2 className="font-bold text-[var(--heading)] font-Web leading-[1.3] text-lg sm:text-xl xl:text-[36px]">
                      {section.heading}
                    </h2>
                    {(section.paras || []).map((para, j) => (
                      <p
                        key={`section-${idx}-para-${j}`}
                        className="text-sm sm:text-lg leading-[1.45] text-[var(--muted)] whitespace-pre-line"
                      >
                        {para.replace(/•/g, "\n• ")}
                      </p>
                    ))}
                    {idx === (details.inlineImageAfterSection ?? 2) && details.inlineImage && (
                      <div className="mt-3 rounded-[14px] overflow-hidden w-full">
                        <img
                          src={details.inlineImage}
                          alt={details.inlineImageAlt || details.title}
                          className="w-full h-[260px] sm:h-[320px] object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
                {details.endTitle && (
                  <h6 className="text-sm sm:text-lg leading-[1.45] text-[var(--muted)]">
                    {renderEndTitle(details.endTitle)}
                  </h6>
                )}

                <div className="pt-6 border-t border-[var(--border)]">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-[#326FB7] text-[13px] font-semibold hover:gap-4 transition-all duration-200 group"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="group-hover:-translate-x-1 transition-transform duration-200"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to All Blogs
                  </Link>
                </div>
              </article>

              <aside className="flex flex-col gap-8 lg:sticky lg:top-8">
                <SidebarWidget title="Popular Tags">
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                        className={`px-3 py-1.5 rounded-[8px] text-md sm:text-lg font-Inter border transition-all duration-200 ${activeTag === tag
                          ? 'bg-[#326FB7] text-white border-[#326FB7]'
                          : 'bg-[var(--bg-secondary)] text-[var(--muted)] border-[var(--border)] hover:border-[#326FB7] hover:text-[#326FB7]'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </SidebarWidget>

                <SidebarWidget title="Recent Post">
                  <RecentPosts recentPosts={recentPosts} />
                </SidebarWidget>
              </aside>
            </div>
          </div>
        </section>

        <section>
          <Testimonials darkMode={darkMode} />
        </section>
        <CTA darkMode={darkMode} />

        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
