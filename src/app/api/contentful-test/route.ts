import { contentfulClient, contentfulPreviewClient } from '@/lib/contentful';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isPreview = searchParams.get('preview') === 'true';
  const client = isPreview ? contentfulPreviewClient : contentfulClient;

  try {
    // This will fetch all entries from your space
    const entries = await client.getEntries({
      limit: 1, // Just get one entry to test
    });

    return NextResponse.json({
      success: true,
      message: `Successfully connected to Contentful ${isPreview ? 'Preview' : 'Delivery'} API`,
      data: entries,
    });
  } catch (error) {
    console.error('Contentful error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to connect to Contentful',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
