// Utility function to generate proper blog URLs
export const getBlogUrl = (slug: string): string => {
  if (!slug) return '/blog';
  
  // Remove leading slash if present
  const cleanSlug = slug.startsWith('/') ? slug.slice(1) : slug;
  
  // Check if slug contains date format (YYYY/MM/DD/...)
  const datePattern = /^\d{4}\/\d{2}\/\d{2}\//;
  
  if (datePattern.test(cleanSlug)) {
    // For date-based URLs, return without /blog prefix
    return `/${cleanSlug}`;
  } else {
    // For non-date URLs, use /blog prefix
    return `/blog/${cleanSlug}`;
  }
};