
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/utils";       // import your data
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Blog | IEEE Student Branch of UCSC",
  description: "Articles, event highlights, and updates from IEEE UCSC.",
};

export default function BlogPage() {
  return (
    <main className="h-[300vh] relative">
      <div className="sticky top-7 hero p-5">
      <h1 className=" text-center text-4xl font-bold text-primary-blue py-10 uppercase">Blog</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} data={post} />
        ))}
      </div>
      </div>

    </main>
  );
}
