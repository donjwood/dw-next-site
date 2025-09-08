import { getBasicContentPageBySlug } from "@/lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { BasicContentPage } from '@/types/contentful';

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-bold my-6">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-semibold my-5">{children}</h2>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="my-4">{children}</p>
    ),
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a href={node.data.uri} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
  },
};

export default async function AboutPage() {
  const aboutPageContent = await getBasicContentPageBySlug('about');

  if (!aboutPageContent) {
    return <div>Page not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{aboutPageContent.fields.title}</h1>
      <div className="prose prose-lg max-w-none">
        {documentToReactComponents(aboutPageContent.fields.body, options)}
      </div>
    </article>
  );
}
