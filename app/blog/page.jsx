"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { blogPosts } from "@/utils/blog";

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const searchableText = `${post.title} ${post.description} ${post.category}`.toLowerCase();
      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [category, query]);

  return (
    <main className="min-h-screen bg-primary-white px-5 pb-24 pt-32 text-secondary-blue md:px-12 lg:px-20">
      <header className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-blue">
          IEEE UCSC Blog
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-primary-blue md:text-7xl">
          Ideas, experiences, and updates from our community.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          Explore technical articles, event highlights, and stories from the IEEE Student Branch of UCSC.
        </p>
      </header>

      <section className="mx-auto mt-14 max-w-6xl" aria-label="Filter blog posts">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="w-full md:max-w-md">
            <span className="sr-only">Search blog posts</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search posts..."
              className="w-full border-b border-secondary-blue/40 bg-transparent px-1 py-3 outline-none placeholder:text-secondary-blue/60 focus:border-primary-blue"
            />
          </label>

          <div className="flex flex-wrap gap-2" aria-label="Filter by category">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  category === item
                    ? "border-primary-blue bg-primary-blue text-primary-white"
                    : "border-primary-blue/30 text-primary-blue hover:bg-primary-blue/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        {filteredPosts.map((post) => (
          <article key={post.slug} className="group overflow-hidden rounded-sm bg-secondary-white">
            <Link href={`/blog/${post.slug}/`} className="block h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-wider text-primary-blue">
                  <span>{post.category}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h2 className="mt-4 line-clamp-3 text-2xl font-semibold text-primary-blue">
                  {post.title}
                </h2>
                <p className="mt-3 leading-relaxed">{post.description}</p>
                <span className="mt-6 inline-block font-semibold text-primary-blue">
                  Read article →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </section>

      {filteredPosts.length === 0 && (
        <p className="mx-auto mt-12 max-w-6xl text-center text-lg">
          No blog posts match your search.
        </p>
      )}
    </main>
  );
}