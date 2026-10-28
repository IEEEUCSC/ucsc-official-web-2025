import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const imageSrc =
    post.imageUrl || post.featuredImage || post.image || "/images/blogs/ieee-day.png";

  const paragraphs = post.content
    ? post.content
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  return (
    <main className="h-[500vh] relative">
        <div className="sticky top-0 hero pt-15 pb-10 max-w-4xl mx-auto">


      <Link
        href="/blog"
        className="text-sm font-semibold text-primary-blue hover:underline mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      
      {post.category && (
        <span className="text-xs uppercase font-semibold text-primary-blue tracking-wider block mb-2">
          {post.category}
        </span>
      )}

     
      <h1 className="text-3xl md:text-5xl font-bold text-secondary-blue leading-tight mb-3">
        {post.title}
      </h1>

      
      {post.date && (
        <p className="text-sm text-neutral-500 mb-8">{post.date}</p>
      )}

      
      {/* Featured Image - uniform dimensions */}
      <div className="relative w-full h-70 sm:h-[380px] md:h-[450px] mb-8 overflow-hidden bg-secondary-white">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      
      {post.shortDescription && (
        <p className="text-lg text-secondary-blue font-medium mb-6 leading-relaxed">
          {post.shortDescription}
        </p>
      )}

      
      <div className="space-y-4 text-secondary-blue/90 leading-relaxed text-base md:text-lg">
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      
    
      </div>
    </main>
  );
}


