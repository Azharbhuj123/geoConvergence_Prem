import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useThemeStore } from '../store/useThemeStore';
import Navbar from '../components/Navbar';
import ShortHero from '../components/ShortHero';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogDetails, fetchBlogPage } from '../lib/api';
import { pageData } from '../lib/data/page';
import { RecentPosts } from './Blog';

// ─── Sidebar Widget ───────────────────────────────────────────────────────────

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
// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BlogDetails() {
  const { theme, toggleTheme } = useThemeStore();
  const darkMode = theme === 'dark';
  const { id } = useParams();
  const [activeTag, setActiveTag] = useState(null);

  // Fetch individual blog details
  const { data: detailsData } = useQuery({
    queryKey: ['blogDetails', id],
    queryFn: () => fetchBlogDetails(id),
    enabled: !!id,
  });

  // Fetch blog list for sidebar (tags/recent)
  const { data: blogPageData } = useQuery({
    queryKey: ['blogPage'],
    queryFn: fetchBlogPage,
  });

  const details = detailsData || pageData.blogDetailsPage;
  const GALLERY_IMAGES = details.galleryImages;
  const INLINE_IMAGE = details.inlineImage;
  const INTRO = details.intro;
  const SECTIONS = details.sections;

  const blogContent = blogPageData?.blog || pageData.blogPage;
  const POPULAR_TAGS = blogContent.popularTags;
  const RECENT_POSTS = blogContent.recentPosts;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-[var(--bg)] mx-auto overflow-x-hidden transition-colors duration-200">

        {/* Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} />

        {/* Hero */}
        <ShortHero title="Blogs Details" />

        {/* ── Main Content Section ── */}
        <section className="px-6 lg:px-14 py-14">
          <div className="max-w-[1440px] mx-auto">
            {/* Section heading */}
            <div className="mb-10">
              <h2
                className="heading-primary font-Web"
              >
                Our Latest News &amp; Blogs
              </h2>

              {/* 2×2 Image Gallery */}
              <div className="grid grid-cols-2 gap-3 pt-6 pb-8 lg:pb-p[60px] lg:pt-[36px]">
                {GALLERY_IMAGES.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-[12px] w-full h-[300px]"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 align-center justify-center py-7">
                <h2 className="text-center text-[var(--heading)] text-lg md:text-xl xl:text-[36px] font-Web font-bold max-w-[1040px] m-auto" >Seat-Level Digital Twins: Scaling ArcGIS Indoors and Public Safety for Multi-Tiered Arenas</h2>
                <p className="font-Inter text-center text-[var(--muted)] text-sm lg:text-lg">Goal: Bring 93 municipal buildings and the 260,000 sq. ft. Dignity Health Arena into a single ArcGIS Enterprise environment. The Challenge: 2D floor plans fail when applied to the overlapping concourses and sloped seating bowls of a massive entertainment venue. The Approach: Captured the arena with mobile LiDAR, processed it into a Revit BIM model, and fed it directly into an ArcGIS Indoors network. Public Safety: The routing-aware spatial data powers S/Planner, allowing security teams to simulate evacuations and spot bottlenecks without disrupting daily operations.</p>
              </div>
            </div>

            {/* 2-column layout: article + sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_540px] gap-10 items-start">

              {/* ── LEFT: Full Article ── */}
              <article className="flex flex-col gap-7 min-w-0">

                {/* Article H1 */}
                <h1
                  className="font-bold text-[var(--heading)] font-Web leading-[1.3] text-lg sm:text-xl xl:text-[36px]"
                >
                  From City Blocks to the Arena Floor
                </h1>

                {/* Intro */}
                {INTRO.map((para, i) => (
                  <p key={i} className="text-sm sm:text-lg leading-[1.85] text-[var(--muted)]">
                    {para}
                  </p>
                ))}

                {/* Divider */}
                <div className="h-px bg-[var(--border)]" />

                {/* Content Sections */}
                {SECTIONS.map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <h2
                      className="font-bold text-[var(--heading)] font-Web leading-[1.3] text-lg sm:text-xl xl:text-[36px]"
                    >
                      {section.heading}
                    </h2>
                    {section.paras.map((para, j) => (
                      <p
                        key={j}
                        className="text-sm sm:text-lg leading-[1.85] text-[var(--muted)]"
                      >
                        {para}
                      </p>
                    ))}
                    {/* Inline full-width image after section index 2 (Why Spatial Safety) */}
                    {idx === 2 && (
                      <div className="mt-3 rounded-[14px] overflow-hidden w-full">
                        <img
                          src={INLINE_IMAGE}
                          alt="Arena interior view"
                          className="w-full h-[260px] sm:h-[320px] object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* Back link */}
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

              {/* ── RIGHT: Sidebar ── */}
              <aside className="flex flex-col gap-8 lg:sticky lg:top-8">

                {/* Popular Tags */}
                <SidebarWidget title="Popular Tags">
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_TAGS.map((tag) => (
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

                {/* Recent Posts */}
                <SidebarWidget title="Recent Post">
                  <RecentPosts
                  recentPosts={RECENT_POSTS}
                  />
                </SidebarWidget>

              </aside>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="">
          <Testimonials darkMode={darkMode} />
        </section>
        {/* CTA */}
        <CTA darkMode={darkMode} />

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
