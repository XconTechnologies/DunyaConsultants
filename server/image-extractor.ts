/**
 * Utility to extract the first meaningful image from content
 * Excludes logos, favicons, and UI elements
 */

interface ContentBlock {
  type: string;
  data: any;
}

const EXCLUDED_IMAGES = [
  'logo',
  'favicon',
  'icon',
  'avatar',
  'header',
  'navbar',
  'footer',
  'banner',
  'dunya-consultants-logo',
  'dc-logo'
];

/**
 * Check if an image URL should be excluded
 */
function isExcludedImage(url: string): boolean {
  const lowerUrl = url.toLowerCase();
  return EXCLUDED_IMAGES.some(excluded => lowerUrl.includes(excluded));
}

/**
 * Extract first image from HTML content
 */
export function extractFirstImageFromHTML(html: string): string | null {
  if (!html) return null;

  // Match img tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;

  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && !isExcludedImage(src)) {
      return src;
    }
  }

  return null;
}

/**
 * Extract first image from content blocks
 */
export function extractFirstImageFromBlocks(contentBlocks: ContentBlock[]): string | null {
  if (!contentBlocks || contentBlocks.length === 0) return null;

  for (const block of contentBlocks) {
    // Image block
    if (block.type === 'image' && block.data?.url) {
      const url = block.data.url;
      if (!isExcludedImage(url)) {
        return url;
      }
    }

    // HTML block - might contain images
    if (block.type === 'html' && block.data?.html) {
      const imgFromHtml = extractFirstImageFromHTML(block.data.html);
      if (imgFromHtml) {
        return imgFromHtml;
      }
    }
  }

  return null;
}

/**
 * Extract first image from blog post content (HTML or blocks)
 */
export function extractFirstImage(content: string, contentBlocks?: ContentBlock[]): string | null {
  // Try content blocks first (more reliable)
  if (contentBlocks && contentBlocks.length > 0) {
    const imgFromBlocks = extractFirstImageFromBlocks(contentBlocks);
    if (imgFromBlocks) return imgFromBlocks;
  }

  // Fallback to HTML content
  if (content) {
    return extractFirstImageFromHTML(content);
  }

  return null;
}
