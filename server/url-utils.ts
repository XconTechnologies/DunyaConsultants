/**
 * URL Utilities for generating full public URLs
 * Works in both development and production environments
 */

/**
 * Get the base URL for the current environment
 * @returns Full base URL (e.g., https://dunyaconsultants.com or http://localhost:5000)
 */
export function getBaseUrl(): string {
  // Production domain
  const productionDomain = 'https://dunyaconsultants.com';
  
  // Check if we're in production
  if (process.env.NODE_ENV === 'production') {
    return productionDomain;
  }
  
  // Check for REPLIT_DOMAINS environment variable (Replit production)
  if (process.env.REPLIT_DOMAINS) {
    const domains = process.env.REPLIT_DOMAINS.split(',');
    if (domains.includes('dunyaconsultants.com')) {
      return productionDomain;
    }
    // Use the first Replit domain
    return `https://${domains[0]}`;
  }
  
  // Development - check for REPL_SLUG (Replit dev environment)
  if (process.env.REPL_SLUG) {
    const replSlug = process.env.REPL_SLUG;
    const replOwner = process.env.REPL_OWNER || 'replit';
    return `https://${replSlug}.${replOwner}.repl.co`;
  }
  
  // Fallback to localhost for local development
  const port = process.env.PORT || 5000;
  return `http://localhost:${port}`;
}

/**
 * Generate a full public URL for an uploaded file
 * @param relativePath - Relative path from public directory (e.g., 'uploads/articles/study-in-uk.webp')
 * @returns Full public URL
 */
export function getPublicFileUrl(relativePath: string): string {
  const baseUrl = getBaseUrl();
  const cleanPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Generate a sanitized filename from a title or original filename
 * Converts to lowercase, replaces spaces with hyphens, removes special characters
 * @param filename - Original filename or title
 * @returns Sanitized filename (e.g., 'study-in-uk')
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .toLowerCase()
    .replace(/\s+/g, '-')              // Replace spaces with hyphens
    .replace(/[^a-z0-9-_.]/g, '')      // Remove special characters except hyphens, dots, underscores
    .replace(/-+/g, '-')               // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '');            // Remove leading/trailing hyphens
}

/**
 * Generate a unique filename to prevent collisions
 * @param baseName - Base filename without extension
 * @param extension - File extension (e.g., '.webp')
 * @returns Unique filename (e.g., 'study-in-uk.webp' or 'study-in-uk-2.webp')
 */
export function generateUniqueFilename(baseName: string, extension: string): string {
  const sanitized = sanitizeFilename(baseName);
  return `${sanitized}${extension}`;
}

/**
 * Extract environment info for logging/debugging
 * @returns Environment information object
 */
export function getEnvironmentInfo() {
  return {
    nodeEnv: process.env.NODE_ENV,
    replitDomains: process.env.REPLIT_DOMAINS,
    replSlug: process.env.REPL_SLUG,
    replOwner: process.env.REPL_OWNER,
    port: process.env.PORT,
    baseUrl: getBaseUrl(),
  };
}
