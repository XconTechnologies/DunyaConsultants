/**
 * SEO utility functions for setting meta tags
 */

interface SetMetaTagsOptions {
  title?: string | null;
  metaTitle?: string | null;
  description?: string | null;
  metaDescription?: string | null;
  shortDescription?: string | null;
  siteName?: string;
}

/**
 * Sets the page title and meta description with fallback logic
 * Priority: metaTitle > title, metaDescription > shortDescription > description
 */
export function setMetaTags(options: SetMetaTagsOptions): void {
  const {
    title,
    metaTitle,
    description,
    metaDescription,
    shortDescription,
    siteName = "Dunya Consultants"
  } = options;

  // Set page title - use metaTitle if available, otherwise use title
  const pageTitle = metaTitle || title;
  if (pageTitle) {
    document.title = siteName ? `${pageTitle} - ${siteName}` : pageTitle;
  }

  // Set meta description - use metaDescription if available, otherwise use shortDescription or description
  const pageDescription = metaDescription || shortDescription || description;
  if (pageDescription) {
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', pageDescription);
    } else {
      // Create meta description tag if it doesn't exist
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'description');
      newMetaTag.setAttribute('content', pageDescription);
      document.head.appendChild(newMetaTag);
    }
  }
}

/**
 * Simple helper to set meta tags for static pages
 */
export function setStaticPageMeta(title: string, description: string, siteName = "Dunya Consultants"): void {
  setMetaTags({
    title,
    description,
    siteName
  });
}
