import { ImgHTMLAttributes } from 'react';
import { extractAltText } from '@/lib/image-utils';

interface SmartImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  src: string;
  alt?: string; // Optional - will be auto-generated from filename if not provided
  customAlt?: string; // Explicit override
}

/**
 * Smart Image Component
 * Automatically extracts alt text from filename if not provided
 * Serves images as WebP format for better performance
 * 
 * @example
 * // Alt text auto-generated from filename
 * <SmartImage src="/api/uploads/best-study-abroad-consultants_123456.webp" />
 * // Result: alt="Best Study Abroad Consultants"
 * 
 * @example
 * // Custom alt text
 * <SmartImage src="/api/uploads/image.webp" alt="Custom description" />
 * // Result: alt="Custom description"
 */
export function SmartImage({ src, alt, customAlt, ...props }: SmartImageProps) {
  // Priority: customAlt > alt prop > auto-generated from filename
  const finalAlt = customAlt || alt || extractAltText(src);
  
  return (
    <img
      src={src}
      alt={finalAlt}
      loading="lazy"
      {...props}
    />
  );
}

export default SmartImage;
