import { createClient, type EntriesQueries } from 'contentful';
import type { BasicContentPage } from '../types/contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getBasicContentPageBySlug(
  slug: string
): Promise<BasicContentPage | null> {
  const entries = await contentfulClient.getEntries<BasicContentPage>({
    content_type: 'page',
    // @ts-ignore - Contentful's TypeScript types don't properly support field queries
    'fields.slug': slug,
    limit: 1,
  });

  if (entries.items.length > 0) {
    const entry = entries.items[0];
    return {
      contentTypeId: 'page',
      sys: entry.sys,
      fields: {
        title: entry.fields.title,
        slug: entry.fields.slug,
        body: entry.fields.body
      }
    };
  } else {
    return null;
  }
}