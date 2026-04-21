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
      <div className="bg-[var(--bg)] mx-auto overflow-x-hidden transition-all duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} />
        <ShortHero title="Blogs" />

        {/* ── Blog Section ── */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-screen-xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto">
            <div className="mb-10 sm:mb-14 md:mb-16 text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--heading)] font-['Titillium_Web'] tracking-tight leading-tight">
                Our Latest News & Blogs
              </h2>
              <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg shadow-blue-500/20" />
            </div>

            {/* Grid: posts left + sidebar right */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-10 sm:gap-14 xl:gap-16 items-start">

              {/* ── Left: Blog Cards ── */}
              <div className="flex flex-col gap-8 sm:gap-10">
                {visiblePosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}

                {/* Load More */}
                {hasMore && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setVisibleCount((c) => c + 3)}
                      className="px-10 py-4 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-white font-extrabold text-base shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      View More Posts
                    </button>
                  </div>
                )}
              </div>

              {/* ── Right: Sidebar ── */}
              <aside className="flex flex-col gap-10 lg:gap-12 lg:sticky lg:top-8">
                {/* Search Widget */}
                <SearchBox darkMode={darkMode} />

                {/* Popular Tags Widget */}
                <PopularTags darkMode={darkMode} popularTags={POPULAR_TAGS} />

                {/* Recent Posts Widget */}
                <RecentPosts darkMode={darkMode} recentPosts={RECENT_POSTS} />
              </aside>
            </div>
          </div>
        </section>

        <Testimonials darkMode={darkMode} />
        <CTA darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
