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

// Table of Contents types
export interface TOCItem {
  id: string;
  text: string;
  level: number;
  element?: HTMLElement;
}

// Extract table of contents from blog content
export const extractTableOfContents = (content: string): TOCItem[] => {
  if (!content) return [];

  const tocItems: TOCItem[] = [];
  
  // Check if content is HTML
  if (content.includes('<h') || content.includes('<H')) {
    // Parse HTML content using DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach((heading, index) => {
      const text = heading.textContent?.trim() || '';
      if (text) {
        const level = parseInt(heading.tagName.charAt(1));
        const id = heading.id || generateHeadingId(text, index);
        
        tocItems.push({
          id,
          text,
          level,
        });
      }
    });
  } else {
    // Parse Markdown content
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
      
      if (headingMatch) {
        const [, hashes, text] = headingMatch;
        const level = hashes.length;
        const cleanText = text.replace(/#+$/, '').trim(); // Remove trailing #
        const id = generateHeadingId(cleanText, index);
        
        tocItems.push({
          id,
          text: cleanText,
          level,
        });
      }
    });
  }
  
  return tocItems;
};

// Generate a unique ID for headings
export const generateHeadingId = (text: string, index: number): string => {
  const baseId = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  
  return baseId || `heading-${index}`;
};

// Add IDs to headings in HTML content for smooth scrolling
export const addHeadingIds = (content: string): string => {
  if (!content) return content;
  
  // Check if content is HTML
  if (content.includes('<h') || content.includes('<H')) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach((heading, index) => {
      const text = heading.textContent?.trim() || '';
      if (text && !heading.id) {
        heading.id = generateHeadingId(text, index);
      }
    });
    
    return doc.body.innerHTML;
  }
  
  // For Markdown content, add IDs inline
  return content.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, text) => {
    const cleanText = text.replace(/#+$/, '').trim();
    const id = generateHeadingId(cleanText, 0);
    return `${hashes} ${cleanText} {#${id}}`;
  });
};