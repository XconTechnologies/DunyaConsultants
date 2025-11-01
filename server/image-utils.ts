import path from 'path';

/**
 * Extract human-readable alt text from an image filename
 * Removes timestamps, random hashes, file extensions, and converts to readable text
 * 
 * @param filename - The image filename (e.g., "best-study-abroad-consultants_1758093944871_81b978.webp")
 * @returns Clean alt text (e.g., "best study abroad consultants")
 */
export function extractAltTextFromFilename(filename: string): string {
  if (!filename) return '';
  
  // Remove file extension
  let altText = filename.replace(/\.(webp|png|jpg|jpeg|gif|svg)$/i, '');
  
  // Remove timestamp patterns (numbers with 13+ digits, typically Unix timestamps)
  altText = altText.replace(/_\d{13,}/g, '');
  
  // Remove hash patterns (8+ character alphanumeric strings after underscores)
  altText = altText.replace(/_[a-f0-9]{8,}/gi, '');
  
  // Remove remaining underscores and replace with spaces
  altText = altText.replace(/_/g, ' ');
  
  // Replace hyphens with spaces
  altText = altText.replace(/-/g, ' ');
  
  // Remove multiple spaces
  altText = altText.replace(/\s+/g, ' ');
  
  // Trim whitespace
  altText = altText.trim();
  
  // Capitalize first letter of each word for better readability
  altText = altText.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  return altText;
}

/**
 * Get optimized content type for image serving
 * Always prefer WebP for modern browsers
 * 
 * @param filename - The image filename
 * @param acceptHeader - The Accept header from request
 * @returns Content-Type string
 */
export function getImageContentType(filename: string, acceptHeader?: string): string {
  const ext = path.extname(filename).toLowerCase();
  
  // Check if browser supports WebP
  const supportsWebP = acceptHeader?.includes('image/webp');
  
  // Map extensions to content types
  const contentTypes: Record<string, string> = {
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };
  
  // Return WebP if file is WebP or if browser supports it
  if (ext === '.webp' || supportsWebP) {
    return 'image/webp';
  }
  
  return contentTypes[ext] || 'image/jpeg';
}

/**
 * Get image metadata including alt text and content type
 * 
 * @param filename - The image filename
 * @param acceptHeader - Optional Accept header from request
 * @returns Object with alt text and content type
 */
export function getImageMetadata(filename: string, acceptHeader?: string) {
  return {
    alt: extractAltTextFromFilename(filename),
    contentType: getImageContentType(filename, acceptHeader),
    filename: filename,
  };
}

/**
 * Format image URL with metadata for frontend use
 * 
 * @param imageUrl - The image URL (e.g., "/api/uploads/image.webp")
 * @returns Object with url and alt text
 */
export function formatImageForFrontend(imageUrl: string | null | undefined) {
  if (!imageUrl) {
    return {
      url: '',
      alt: '',
    };
  }
  
  // Extract filename from URL
  const filename = imageUrl.split('/').pop() || '';
  
  return {
    url: imageUrl,
    alt: extractAltTextFromFilename(filename),
  };
}
