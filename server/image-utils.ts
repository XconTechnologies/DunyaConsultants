import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
import { promises as fsPromises } from 'fs';

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
 * Get correct content type for image serving based on actual file extension
 * Returns the proper MIME type for the file being served
 * 
 * @param filename - The image filename
 * @param acceptHeader - The Accept header from request (currently unused, reserved for future content negotiation)
 * @returns Content-Type string
 */
export function getImageContentType(filename: string, acceptHeader?: string): string {
  const ext = path.extname(filename).toLowerCase();
  
  // Map extensions to content types
  const contentTypes: Record<string, string> = {
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };
  
  // Return correct content type based on actual file extension
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

/**
 * Image optimization options
 */
export interface ImageOptimizationOptions {
  quality?: number; // 1-100, default 80
  maxWidth?: number; // Max width in pixels, default: no limit
  maxHeight?: number; // Max height in pixels, default: no limit
  format?: 'webp' | 'jpeg' | 'png'; // Output format, default: webp
  compressionLevel?: number; // 0-9 for PNG, default: 6
}

/**
 * Optimize and convert image to WebP (or other format)
 * Automatically compresses images and converts to modern formats
 * 
 * @param inputPath - Path to the original image
 * @param outputPath - Path where optimized image will be saved
 * @param options - Optimization options
 * @returns Promise with metadata of optimized image
 */
export async function optimizeImage(
  inputPath: string,
  outputPath: string,
  options: ImageOptimizationOptions = {}
): Promise<{
  width: number;
  height: number;
  size: number;
  format: string;
}> {
  const {
    quality = 80,
    maxWidth,
    maxHeight,
    format = 'webp',
    compressionLevel = 6,
  } = options;

  try {
    let pipeline = sharp(inputPath);

    // Get original metadata
    const metadata = await pipeline.metadata();

    // Resize if dimensions are specified
    if (maxWidth || maxHeight) {
      pipeline = pipeline.resize(maxWidth, maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Convert to specified format with compression
    switch (format) {
      case 'webp':
        pipeline = pipeline.webp({ quality, effort: 6 });
        break;
      case 'jpeg':
        pipeline = pipeline.jpeg({ quality, mozjpeg: true });
        break;
      case 'png':
        pipeline = pipeline.png({ 
          compressionLevel,
          quality,
          effort: 10,
        });
        break;
    }

    // Save optimized image
    await pipeline.toFile(outputPath);

    // Get stats of optimized image
    const stats = await fsPromises.stat(outputPath);
    const optimizedMetadata = await sharp(outputPath).metadata();

    return {
      width: optimizedMetadata.width || 0,
      height: optimizedMetadata.height || 0,
      size: stats.size,
      format: optimizedMetadata.format || format,
    };
  } catch (error) {
    throw new Error(`Image optimization failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Auto-optimize uploaded image
 * Automatically converts to WebP and compresses based on image type
 * 
 * @param filePath - Path to uploaded file
 * @param uploadDir - Upload directory
 * @param originalFilename - Original filename
 * @returns Promise with optimized file info
 */
export async function autoOptimizeUpload(
  filePath: string,
  uploadDir: string,
  originalFilename: string
): Promise<{
  filename: string;
  path: string;
  width: number;
  height: number;
  size: number;
  originalSize: number;
  savings: string;
}> {
  try {
    // Get original file stats
    const originalStats = await fsPromises.stat(filePath);
    const originalSize = originalStats.size;

    // Generate new filename with .webp extension
    const ext = path.extname(originalFilename);
    const baseFilename = path.basename(filePath, path.extname(filePath));
    const newFilename = `${baseFilename}.webp`;
    const outputPath = path.join(uploadDir, newFilename);

    // Determine optimization settings based on file size
    const isLargeImage = originalSize > 500000; // > 500KB
    const quality = isLargeImage ? 75 : 80; // More aggressive compression for large images

    // Optimize image
    const optimized = await optimizeImage(filePath, outputPath, {
      quality,
      format: 'webp',
      maxWidth: 2000, // Limit max width to 2000px
    });

    // Delete original file if it's different from optimized
    if (filePath !== outputPath) {
      await fsPromises.unlink(filePath);
    }

    // Calculate savings
    const savings = ((1 - optimized.size / originalSize) * 100).toFixed(1);

    return {
      filename: newFilename,
      path: outputPath,
      width: optimized.width,
      height: optimized.height,
      size: optimized.size,
      originalSize,
      savings: `${savings}%`,
    };
  } catch (error) {
    // If optimization fails, return original file info
    console.error('Image optimization failed, using original:', error);
    const fallbackStats = await fsPromises.stat(filePath);
    return {
      filename: path.basename(filePath),
      path: filePath,
      width: 0,
      height: 0,
      size: fallbackStats.size,
      originalSize: fallbackStats.size,
      savings: '0%',
    };
  }
}
