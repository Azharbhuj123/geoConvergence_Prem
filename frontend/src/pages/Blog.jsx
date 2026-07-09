import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useThemeStore } from '../store/useThemeStore';
import Navbar from '../components/Navbar';
import ShortHero from '../components/ShortHero';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogPage } from '../lib/api';
import { pageData } from '../lib/data/page';
import Button from '../components/UI/Button';

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

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryBadge({ label }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#326FB7]/15 text-[#326FB7] dark:bg-[#326FB7]/20 dark:text-[#60a5fa]">
      {label}
    </span>
  );
}

function BlogCard({ post }) {
  const postPath = `/blog/${post.slug || post.id}`;

  return (
    <article className="flex flex-col bg-[var(--card)] rounded-[16px] overflow-hidden border border-[var(--border)] shadow-[0_2px_14px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_28px_rgba(50,111,183,0.14)] transition-all duration-300 group">
      {/* ── Left: Image ── */}
      <div className="relative flex-shrink-0 w-full h-[200px] sm:h-[280px] xl:h-[420px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* ── Right: Content ── */}
      <div className="flex flex-col justify-center gap-3 px-6 py-6 flex-1">
        <button className="text-lg text-[var(--text)] bg-[#0C59DB73] text-center px-2 py-2 max-w-[200px] font-Inter border rounded-lg border-[var(--border)]">{post.date}</button>
        <h3 className="text-lg sm:text-xl font-Web font-bold text-[var(--heading)] leading-[1.4] line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm sm:text-lg text-[var(--muted)] leading-[1.7] line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          to={postPath}
          className="self-start mt-1 text-[var(--text)] text-lg xl:text-[20px] font-Web font-semibold flex items-center gap-1.5 hover:gap-3 transition-all duration-200 group/btn"
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

function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-[#f9fafb] font-Inter text-[#000942] border border-gray-200 rounded-xl py-3.5 px-5 outline-none focus:border-[#326FB7] transition-all"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
      </div>
    </div>
  );
}

function PopularTags({ darkMode, popularTags, selectedTag, setSelectedTag }) {
  return (
    <div className=" rounded-[20px] flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag) => {
          const isActive = selectedTag?.toLowerCase() === tag.toLowerCase();
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(isActive ? null : tag)}
              className={`px-3 py-1.5 rounded-[8px] text-md sm:text-lg font-Inter border transition-all duration-200 ${isActive
                ? 'bg-[#326FB7] text-white border-[#326FB7]'
                : 'bg-[var(--bg-secondary)] text-[var(--muted)] border-[var(--border)] hover:border-[#326FB7] hover:text-[#326FB7]'
                }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function RecentPosts({ darkMode, recentPosts }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {recentPosts.map((post) => (
          <Link
            key={post.slug || post.id}
            to={`/blog/${post.slug || post.id}`}
            className="flex items-start gap-3 group cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-18 h-18 sm:w-[112px] sm:h-[114px] object-cover rounded-[10px] flex-shrink-0 group-hover:opacity-80 transition-opacity"
            />
            <div className="flex flex-col gap-1 min-w-0">
              <p className="text-md sm:text-xl font-Web font-semibold text-[var(--heading)] leading-snug  line-clamp-2">
                {post.title}
              </p>
              <p className="text-sm sm:text-lg text-[var(--muted)]">{post.date}</p>
            </div>
          </Link>
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get('tag');

  const setSelectedTag = (tag) => {
    if (tag) {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('tag', tag);
        return next;
      });
    } else {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.delete('tag');
        return next;
      });
    }
  };

  const { data } = useQuery({
    queryKey: ['blogPage'],
    queryFn: fetchBlogPage,
  });

  const blogContent = data || pageData.blogPage;
  const BLOG_POSTS = blogContent.posts || [];
  const POPULAR_TAGS = blogContent.popularTags || [];
  const RECENT_POSTS = blogContent.recentPosts || [];

  // Validate selected tag against POPULAR_TAGS (case-insensitive check)
  const isTagValid = selectedTag && POPULAR_TAGS.some(
    (t) => t.toLowerCase() === selectedTag.toLowerCase()
  );

  // Derive filtered posts based on tag and search term
  const filteredPosts = BLOG_POSTS.filter((post) => {
    // 1. Tag filter
    if (isTagValid) {
      const postTag = post.tag || '';
      if (postTag.toLowerCase() !== selectedTag.toLowerCase()) {
        return false;
      }
    }

    // 2. Search filter (title, excerpt, tag, category)
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      const titleMatch = post.title?.toLowerCase().includes(search);
      const excerptMatch = post.excerpt?.toLowerCase().includes(search);
      const tagMatch = post.tag?.toLowerCase().includes(search);
      const categoryMatch = post.category?.toLowerCase().includes(search);

      if (!titleMatch && !excerptMatch && !tagMatch && !categoryMatch) {
        return false;
      }
    }

    return true;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-[var(--bg)] mx-auto overflow-x-hidden transition-all duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} />
        <ShortHero title="Blogs" />

        {/* ── Blog Section ── */}
        <section className="px-6 lg:px-14 py-8 sm:py-14 mt-4">
          <div className="max-w-[1440px] mx-auto ">
            <div className="mb-10">
              <h2
                className="heading-primary font-Web"
              >
                Our Latest News &amp; Blogs
              </h2>
            </div>

            {/* Grid: posts left + sidebar right */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_540px] gap-10 items-start">

              {/* ── Left: Blog Cards ── */}
              <div className="flex flex-col gap-7">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12 bg-[var(--card)] rounded-[16px] border border-[var(--border)] shadow-[0_2px_14px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_14px_rgba(0,0,0,0.25)]">
                    <p className="text-lg text-[var(--muted)] font-Inter">
                      No blog posts found.
                    </p>
                  </div>
                ) : (
                  <>
                    {visiblePosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}

                    {/* Load More */}
                    {hasMore && (
                      <div className="flex justify-center mt-4">
                        <Button
                          size='sm'
                          onClick={() => setVisibleCount((c) => c + 3)}>
                          View More
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* ── Right: Sidebar ── */}
              {/* Right Column: Sidebar */}
              <aside className="flex flex-col gap-12 lg:sticky lg:top-8">

                {/* Search Widget */}
                <SidebarWidget title="Search">
                  <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </SidebarWidget>

                {/* Popular Tags Widget */}
                <SidebarWidget title="Popular Tags">
                  <PopularTags
                    darkMode={darkMode}
                    popularTags={POPULAR_TAGS}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                  />
                </SidebarWidget>

                {/* Recent Posts Widget */}
                <SidebarWidget title="Recent Post">
                  <RecentPosts darkMode={darkMode} recentPosts={RECENT_POSTS} />
                </SidebarWidget>

              </aside>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="pt-15"> */}
          {/* <Testimonials darkMode={darkMode} /></section> */}

        {/* CTA */}
        {/* <CTA darkMode={darkMode} /> */}

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
