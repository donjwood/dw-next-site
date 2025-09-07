
import BlogCard from "@/components/blog/BlogCard";

export default function BlogPage() {
  const posts = new Array<string>();

  return (
    <>
      <h1 className="mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogCard key={post} blogEntry={post} />
        ))}
      </div>
    </>
  );
}
