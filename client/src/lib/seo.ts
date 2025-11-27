/**
 * SEO utility functions for setting meta tags including Open Graph and Twitter Cards
 */

interface SetMetaTagsOptions {
  title?: string | null;
  metaTitle?: string | null;
  description?: string | null;
  metaDescription?: string | null;
  shortDescription?: string | null;
  siteName?: string;
  image?: string | null;
  url?: string | null;
  type?: string;
}

/**
 * Helper function to set or create a meta tag
 */
function setMetaTag(attribute: 'name' | 'property', value: string, content: string): void {
  const existingTag = document.querySelector(`meta[${attribute}="${value}"]`);
  if (existingTag) {
    existingTag.setAttribute('content', content);
  } else {
    const newMetaTag = document.createElement('meta');
    newMetaTag.setAttribute(attribute, value);
    newMetaTag.setAttribute('content', content);
    document.head.appendChild(newMetaTag);
  }
}

/**
 * Sets the page title and meta description with fallback logic
 * Priority: metaTitle > title, metaDescription > shortDescription > description
 * Also sets Open Graph and Twitter Card tags for social media sharing
 */
export function setMetaTags(options: SetMetaTagsOptions): void {
  const {
    title,
    metaTitle,
    description,
    metaDescription,
    shortDescription,
    siteName = "Dunya Consultants",
    image,
    url,
    type = "website"
  } = options;

  // Set page title - use metaTitle if available, otherwise use title
  const pageTitle = metaTitle || title;
  const fullTitle = siteName ? `${pageTitle} - ${siteName}` : pageTitle;
  
  if (pageTitle) {
    document.title = fullTitle || "";
  }

  // Set meta description - use metaDescription if available, otherwise use shortDescription or description
  const pageDescription = metaDescription || shortDescription || description;
  
  if (pageDescription) {
    setMetaTag('name', 'description', pageDescription);
  }

  // Set Open Graph tags
  if (pageTitle) {
    setMetaTag('property', 'og:title', fullTitle || pageTitle);
  }
  
  if (pageDescription) {
    setMetaTag('property', 'og:description', pageDescription);
  }
  
  if (image) {
    setMetaTag('property', 'og:image', image);
  }
  
  if (url) {
    setMetaTag('property', 'og:url', url);
  }
  
  setMetaTag('property', 'og:type', type);
  setMetaTag('property', 'og:site_name', siteName);

  // Set Twitter Card tags
  setMetaTag('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
  
  if (pageTitle) {
    setMetaTag('name', 'twitter:title', fullTitle || pageTitle);
  }
  
  if (pageDescription) {
    setMetaTag('name', 'twitter:description', pageDescription);
  }
  
  if (image) {
    setMetaTag('name', 'twitter:image', image);
  }
}

/**
 * Simple helper to set meta tags for static pages
 */
export function setStaticPageMeta(
  title: string, 
  description: string, 
  image?: string,
  siteName = "Dunya Consultants"
): void {
  // Get current page URL for og:url
  const url = window.location.href;
  
  // Convert relative image URLs to absolute URLs for social media sharing
  let absoluteImage = image;
  if (image && !image.startsWith('http')) {
    absoluteImage = window.location.origin + image;
  }
  
  setMetaTags({
    title,
    description,
    image: absoluteImage,
    url,
    siteName
  });
}
