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

// ─── Sidebar Widget ───────────────────────────────────────────────────────────

function SidebarWidget({ title, children }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Title row with left blue accent bar */}
      <div className="flex items-center gap-3 pb-3 border-b border-[var(--border)]">
        <div className="w-1 h-6 rounded-sm bg-[#326FB7] flex-shrink-0" />
        <h4 className="text-[17px] font-bold text-[var(--heading)]">{title}</h4>
      </div>
      {children}
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
        <section className="max-w-[1440px] mx-auto px-6 lg:px-14 py-14">

          {/* Section heading */}
          <div className="mb-10">
            <h2
              className="font-bold text-[var(--heading)] font-['Titillium_Web']"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
            >
              Our Latest News &amp; Blogs
            </h2>
            <div className="mt-2 w-16 h-[3px] rounded-full bg-[#326FB7]" />
          </div>

          {/* 2-column layout: article + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-12 items-start">

            {/* ── LEFT: Full Article ── */}
            <article className="flex flex-col gap-7 min-w-0">

              {/* 2×2 Image Gallery */}
              <div className="grid grid-cols-2 gap-3">
                {GALLERY_IMAGES.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-[12px] aspect-[4/3]"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Category + date */}
              <div className="flex items-center gap-3 flex-wrap mt-1">
                <span className="inline-block px-3 py-[5px] text-[10px] font-bold tracking-widest uppercase text-white rounded-[6px] bg-[#326FB7]">
                  FACILITIES GIS
                </span>
                <span className="text-[13px] text-[var(--muted)] font-medium">April 10, 2025</span>
              </div>

              {/* Article H1 */}
              <h1
                className="font-bold text-[var(--heading)] font-['Titillium_Web'] leading-[1.3]"
                style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)' }}
              >
                Seat-Level Digital Twins: Scaling ArcGIS Indoors and Public Safety for Multi-Tiered Arenas
              </h1>

              {/* Intro */}
              <p className="text-[14px] sm:text-[15px] leading-[1.85] text-[var(--muted)]">
                {INTRO}
              </p>

              {/* Divider */}
              <div className="h-px bg-[var(--border)]" />

              {/* Content Sections */}
              {SECTIONS.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h2
                    className="font-bold text-[var(--heading)] font-['Titillium_Web']"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
                  >
                    {section.heading}
                  </h2>
                  {section.paras.map((para, j) => (
                    <p
                      key={j}
                      className="text-[14px] sm:text-[15px] leading-[1.85] text-[var(--muted)]"
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
                <div className="flex flex-wrap gap-2 mt-1">
                  {POPULAR_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                      className={`px-3 py-1.5 rounded-[7px] text-[12px] font-semibold border transition-all duration-200 ${
                        activeTag === tag
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
                <div className="flex flex-col gap-5 mt-1">
                  {RECENT_POSTS.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="flex items-start gap-3 group"
                    >
                      {/* Thumbnail */}
                      <div className="w-[68px] h-[54px] rounded-[9px] overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {/* Text */}
                      <div className="flex flex-col gap-1 min-w-0 flex-1">
                        <p className="text-[12px] sm:text-[13px] font-semibold text-[var(--heading)] leading-snug line-clamp-2 group-hover:text-[#326FB7] transition-colors">
                          {post.title}
                        </p>
                        <p className="text-[11px] text-[var(--muted)]">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </SidebarWidget>

            </aside>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials darkMode={darkMode} />

        {/* CTA */}
        <CTA darkMode={darkMode} />

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
