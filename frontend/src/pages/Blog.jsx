import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../store/useThemeStore';
import Navbar from '../components/Navbar';
import ShortHero from '../components/ShortHero';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogPage } from '../lib/api';
import { pageData } from '../lib/data/page';

function SidebarWidget({ title, children }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        {/* The blue accent bar from your reference image */}
        <div className="w-[3px] h-6 bg-[#326FB7]" />
        <h4 className="text-[20px] font-bold text-[#001D3D]">{title}</h4>
      </div>
      <div>{children}</div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryBadge({ label }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#326FB7]/15 text-[#326FB7] dark:bg-[#326FB7]/20 dark:text-[#60a5fa]">
      {label}
    </span>
  );
}

function BlogCard({ post }) {
  return (
    <article className="flex flex-col sm:flex-row bg-[var(--card)] rounded-[16px] overflow-hidden border border-[var(--border)] shadow-[0_2px_14px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_28px_rgba(50,111,183,0.14)] transition-all duration-300 group">
      {/* ── Left: Image ── */}
      <div className="relative flex-shrink-0 w-full sm:w-[44%] h-[200px] sm:h-auto overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Category badge bottom-left of image */}
        <div className="absolute bottom-4 left-4">
          <CategoryBadge label={post.category} />
        </div>
      </div>

      {/* ── Right: Content ── */}
      <div className="flex flex-col justify-center gap-3 px-6 py-6 flex-1">
        <p className="text-[12px] text-[var(--muted)] font-medium">{post.date}</p>
        <h3 className="text-[16px] sm:text-[17px] font-bold text-[var(--heading)] leading-[1.4] group-hover:text-[#326FB7] transition-colors duration-200 line-clamp-3">
          {post.title}
        </h3>
        <p className="text-[13px] sm:text-[14px] text-[var(--muted)] leading-[1.7] line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.id}`}
          className="self-start mt-1 text-[#326FB7] dark:text-[#60a5fa] text-[13px] font-semibold flex items-center gap-1.5 hover:gap-3 transition-all duration-200 group/btn"
        >
          View More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-1 transition-transform duration-200">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

function SearchBox({ darkMode }) {
  const [q, setQ] = useState('');
  return (
    <div className="bg-[var(--card)] rounded-[20px] p-6 border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex flex-col gap-4">
      <h4 className="text-[16px] font-bold text-[var(--heading)]">Search</h4>
      <div className="flex items-center gap-2 border border-[var(--border)] rounded-[12px] px-4 py-2.5 bg-[var(--bg-secondary)] focus-within:border-[#326FB7] transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--muted)] flex-shrink-0">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search"
          className="flex-1 bg-transparent outline-none text-[var(--text)] text-[14px] placeholder:text-[var(--muted)]"
        />
      </div>
    </div>
  );
}

function PopularTags({ darkMode, popularTags }) {
  const [active, setActive] = useState(null);
  return (
    <div className="bg-[var(--card)] rounded-[20px] p-6 border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex flex-col gap-4">
      <h4 className="text-[16px] font-bold text-[var(--heading)]">Popular Tags</h4>
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(active === tag ? null : tag)}
            className={`px-3 py-1.5 rounded-[8px] text-[12px] font-semibold border transition-all duration-200 ${
              active === tag
                ? 'bg-[#326FB7] text-white border-[#326FB7]'
                : 'bg-[var(--bg-secondary)] text-[var(--muted)] border-[var(--border)] hover:border-[#326FB7] hover:text-[#326FB7]'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

function RecentPosts({ darkMode, recentPosts }) {
  return (
    <div className="bg-[var(--card)] rounded-[20px] p-6 border border-[var(--border)] shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-none flex flex-col gap-4">
      <h4 className="text-[16px] font-bold text-[var(--heading)]">Recent Post</h4>
      <div className="flex flex-col gap-4">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex items-start gap-3 group cursor-pointer">
            <img
              src={post.image}
              alt={post.title}
              className="w-[64px] h-[52px] object-cover rounded-[10px] flex-shrink-0 group-hover:opacity-80 transition-opacity"
            />
            <div className="flex flex-col gap-1 min-w-0">
              <p className="text-[13px] font-semibold text-[var(--heading)] leading-snug group-hover:text-[#326FB7] transition-colors line-clamp-2">
                {post.title}
              </p>
              <p className="text-[11px] text-[var(--muted)]">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const { theme, toggleTheme } = useThemeStore();
  const darkMode = theme === 'dark';
  const [visibleCount, setVisibleCount] = useState(3);

  const { data } = useQuery({
    queryKey: ['blogPage'],
    queryFn: fetchBlogPage,
  });

  const blogContent = data?.blog || pageData.blogPage;
  const BLOG_POSTS = blogContent.posts;
  const POPULAR_TAGS = blogContent.popularTags;
  const RECENT_POSTS = blogContent.recentPosts;

  const visiblePosts = BLOG_POSTS.slice(0, visibleCount);
  const hasMore = visibleCount < BLOG_POSTS.length;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-[var(--bg)] mx-auto overflow-x-hidden transition-colors duration-200">

        {/* Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} />

        {/* Hero */}
        <ShortHero title="Blogs" />

        {/* ── Blog Section ── */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-14 py-14 mt-4">
          <div className="mb-10">
            <h2
              className="font-bold text-[var(--heading)] font-['Titillium_Web']"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              Our Latest News &amp; Blogs
            </h2>
            <div className="mt-2 w-16 h-1 rounded-full bg-gradient-to-r from-[#326FB7] to-[#0C59DB]" />
          </div>

          {/* Grid: posts left + sidebar right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-10 items-start">

            {/* ── Left: Blog Cards ── */}
            <div className="flex flex-col gap-7">
              {visiblePosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}

              {/* Load More */}
              {hasMore && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setVisibleCount((c) => c + 3)}
                    className="px-9 py-3 rounded-[14px] bg-gradient-to-br from-[#0043AC] to-[#0C59DB] text-white font-bold text-[15px] shadow-[0_8px_20px_-6px_rgba(12,89,219,0.4)] hover:opacity-90 transition-opacity"
                  >
                    View More
                  </button>
                </div>
              )}
            </div>

            {/* ── Right: Sidebar ── */}
              {/* Right Column: Sidebar */}
          <aside className="flex flex-col gap-12 lg:sticky lg:top-8">
            
            {/* Search Widget */}
            <SidebarWidget title="Search">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl py-3.5 px-5 outline-none focus:border-[#326FB7] transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
              </div>
            </SidebarWidget>

            {/* Popular Tags Widget */}
            <SidebarWidget title="Popular Tags">
              <PopularTags darkMode={darkMode} popularTags={POPULAR_TAGS} />
            </SidebarWidget>

            {/* Recent Posts Widget */}
            <SidebarWidget title="Recent Post">
              <RecentPosts darkMode={darkMode} recentPosts={RECENT_POSTS} />
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
