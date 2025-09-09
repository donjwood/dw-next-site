import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="mb-4">Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} blogEntry={post} />
        ))}
      </div>
    </>
  );
}
