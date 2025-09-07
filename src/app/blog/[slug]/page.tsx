
import { notFound } from 'next/navigation'

// // Generate static params for all blog posts
// export function generateStaticParams() {
//   const posts = getAllPosts()
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug)

//   if (!post) {
//     notFound()
//   }

//   // Convert markdown to HTML
//   const processedContent = await remark()
//     .use(html)
//     .process(post.content)
//   const contentHtml = processedContent.toString()

//   const formattedDate = post.date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });


  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1></h1>
        <div className="text-gray-600 mb-4"></div>
      </article>
    </div>
  )
}
