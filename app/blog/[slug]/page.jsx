import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/utils/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary-white px-5 pb-24 pt-32 text-secondary-blue md:px-12 lg:px-20">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/blog/"
          className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-primary-blue hover:underline"
        >
          ← Back to blog
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm uppercase tracking-wider text-primary-blue">
            <span>{post.category}</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-primary-blue md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed">{post.description}</p>
        </header>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-lg leading-relaxed">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}