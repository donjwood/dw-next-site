import type { Entry, EntrySkeletonType } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

interface BaseSkeleton extends EntrySkeletonType {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface BasicContentPage extends BaseSkeleton {
  contentTypeId: 'page';
  fields: {
    title: string;
    slug: string;
    body: Document
  };
}

export type BasicContentPageEntry = Entry<BasicContentPage>;
