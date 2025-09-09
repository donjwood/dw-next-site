import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

// Generate static params for all blog posts
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  const formattedDate = post.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{post.title}</h1>
      <div className="text-gray-600 mb-4">{formattedDate}</div>
      <div className="divider divider-neutral"></div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
