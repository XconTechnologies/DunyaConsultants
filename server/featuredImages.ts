/**
 * Featured Image Service for Blog Posts
 * Handles uploading, managing, and generating full public URLs for blog featured images
 * Images are stored in /public/uploads/articles/ with readable filenames
 */

import path from 'path';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import { getPublicFileUrl, sanitizeFilename as sanitizeFilenameUtil } from './url-utils';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'articles');
const MAX_IMAGE_WIDTH = 1200;
const WEBP_QUALITY = 80;

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export interface FeaturedImageUploadResult {
  filename: string;
  url: string;
  relativePath: string;
  alt: string;
  title: string;
  originalName: string;
  size: number;
  width: number;
  height: number;
}

/**
 * Check if a file exists in the uploads directory
 * @param filename - Filename to check
 * @returns True if file exists
 */
async function fileExists(filename: string): Promise<boolean> {
  const filePath = path.join(UPLOAD_DIR, filename);
  try {
    await fsPromises.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generate a unique filename by appending a counter if needed
 * @param baseName - Base filename without extension
 * @param extension - File extension (e.g., '.webp')
 * @returns Unique filename
 */
async function generateUniqueFilename(baseName: string, extension: string): Promise<string> {
  let filename = `${baseName}${extension}`;
  let counter = 1;
  
  while (await fileExists(filename)) {
    filename = `${baseName}-${counter}${extension}`;
    counter++;
  }
  
  return filename;
}

/**
 * Sanitize and generate filename from original name or title
 * @param originalName - Original filename
 * @param fallback - Fallback name if sanitization results in empty string
 * @returns Sanitized base filename (never empty)
 */
function sanitizeFilename(originalName: string, fallback: string = 'featured-image'): string {
  // Remove file extension
  const nameWithoutExt = path.parse(originalName).name;
  
  // Use the utility function to sanitize
  const sanitized = sanitizeFilenameUtil(nameWithoutExt);
  
  // Fallback to prevent empty filenames from titles with only special chars/emojis
  if (!sanitized || sanitized.trim() === '') {
    console.warn(`⚠️  Empty filename after sanitization: "${originalName}", using fallback: "${fallback}"`);
    return fallback;
  }
  
  return sanitized;
}

/**
 * Upload and optimize a featured image for a blog post
 * @param buffer - Image buffer from upload
 * @param originalName - Original filename
 * @param options - Upload options (title for better filename generation)
 * @returns Upload result with full public URL
 */
export async function uploadFeaturedImage(
  buffer: Buffer,
  originalName: string,
  options?: { title?: string }
): Promise<FeaturedImageUploadResult> {
  try {
    // Use title if provided, otherwise use original filename
    // Sanitize with fallback to ensure we never get empty basenames
    const baseName = sanitizeFilename(options?.title || originalName, 'blog-featured-image');
    
    // Runtime assertion: baseName must not be empty
    if (!baseName || baseName.trim() === '') {
      throw new Error('Failed to generate valid filename: basename is empty after sanitization');
    }
    
    // Always convert to WebP for optimal performance
    const extension = '.webp';
    
    // Generate unique filename
    const filename = await generateUniqueFilename(baseName, extension);
    const filePath = path.join(UPLOAD_DIR, filename);
    
    // Optimize and convert image to WebP
    const imageMetadata = await sharp(buffer).metadata();
    const imageBuffer = await sharp(buffer)
      .resize(MAX_IMAGE_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    
    // Save optimized image
    await fsPromises.writeFile(filePath, imageBuffer);
    
    // Get final image metadata
    const finalMetadata = await sharp(imageBuffer).metadata();
    const fileStats = await fsPromises.stat(filePath);
    
    // Generate full public URL
    const relativePath = `/uploads/articles/${filename}`;
    const fullUrl = getPublicFileUrl(relativePath);
    
    // Generate alt text and title
    const alt = baseName.toLowerCase();
    const title = baseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      filename,
      url: fullUrl,
      relativePath,
      alt,
      title,
      originalName,
      size: fileStats.size,
      width: finalMetadata.width || 0,
      height: finalMetadata.height || 0,
    };
  } catch (error) {
    console.error('Failed to upload featured image:', error);
    throw new Error('Failed to process and upload featured image');
  }
}

/**
 * Delete a featured image from the filesystem
 * @param filename - Filename to delete (or full URL)
 * @returns True if deleted successfully
 */
export async function deleteFeaturedImage(filename: string): Promise<boolean> {
  try {
    // Extract just the filename if full URL is provided
    const baseFilename = filename.includes('/') 
      ? path.basename(filename) 
      : filename;
    
    const filePath = path.join(UPLOAD_DIR, baseFilename);
    
    // Check if file exists
    if (await fileExists(baseFilename)) {
      await fsPromises.unlink(filePath);
      console.log(`✅ Deleted featured image: ${baseFilename}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Failed to delete featured image:', error);
    return false;
  }
}

/**
 * Update/replace a featured image
 * Deletes the old image and uploads the new one
 * @param oldFilename - Old filename (or URL) to delete
 * @param newBuffer - New image buffer
 * @param newOriginalName - New original filename
 * @param options - Upload options
 * @returns Upload result with full public URL
 */
export async function replaceFeaturedImage(
  oldFilename: string | null | undefined,
  newBuffer: Buffer,
  newOriginalName: string,
  options?: { title?: string }
): Promise<FeaturedImageUploadResult> {
  // Upload new image first
  const result = await uploadFeaturedImage(newBuffer, newOriginalName, options);
  
  // Delete old image if it exists
  if (oldFilename) {
    await deleteFeaturedImage(oldFilename);
  }
  
  return result;
}

/**
 * Get full public URL for an existing featured image filename
 * @param filename - Filename or relative path
 * @returns Full public URL
 */
export function getFeaturedImageUrl(filename: string): string {
  if (!filename) {
    return '';
  }
  
  // If already a full URL, return as-is
  if (filename.startsWith('http://') || filename.startsWith('https://')) {
    return filename;
  }
  
  // If it's just a filename, construct the full URL
  const baseFilename = filename.includes('/') ? path.basename(filename) : filename;
  const relativePath = `/uploads/articles/${baseFilename}`;
  return getPublicFileUrl(relativePath);
}

/**
 * Validate image file type
 * @param mimetype - MIME type of the uploaded file
 * @returns True if valid image type
 */
export function isValidImageType(mimetype: string): boolean {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  return validTypes.includes(mimetype.toLowerCase());
}

/**
 * Get file size in human-readable format
 * @param bytes - Size in bytes
 * @returns Formatted string (e.g., "245 KB")
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
