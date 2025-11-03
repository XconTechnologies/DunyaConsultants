import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}

// Cache directory for optimized images
const CACHE_DIR = path.join(process.cwd(), '.image-cache');

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

/**
 * Generate a cache key for optimized images
 */
function getCacheKey(filePath: string, options: ImageOptimizationOptions): string {
  const hash = crypto.createHash('md5');
  hash.update(filePath);
  hash.update(JSON.stringify(options));
  return hash.digest('hex');
}

/**
 * Get cached optimized image path
 */
function getCachedImagePath(cacheKey: string, format: string): string {
  return path.join(CACHE_DIR, `${cacheKey}.${format}`);
}

/**
 * Optimize image with caching
 */
export async function optimizeImage(
  inputPath: string,
  options: ImageOptimizationOptions = {}
): Promise<{ buffer: Buffer; contentType: string }> {
  // Default options
  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    fit = 'inside'
  } = options;

  // Generate cache key
  const cacheKey = getCacheKey(inputPath, options);
  const cachedPath = getCachedImagePath(cacheKey, format);

  // Check if cached version exists and is newer than source
  if (fs.existsSync(cachedPath)) {
    const sourceStats = fs.statSync(inputPath);
    const cacheStats = fs.statSync(cachedPath);
    
    if (cacheStats.mtime >= sourceStats.mtime) {
      // Return cached version
      const buffer = fs.readFileSync(cachedPath);
      return {
        buffer,
        contentType: `image/${format}`
      };
    }
  }

  // Optimize image
  let sharpInstance = sharp(inputPath);

  // Resize if dimensions provided
  if (width || height) {
    sharpInstance = sharpInstance.resize(width, height, {
      fit,
      withoutEnlargement: true
    });
  }

  // Convert format and compress
  switch (format) {
    case 'webp':
      sharpInstance = sharpInstance.webp({ quality, effort: 4 });
      break;
    case 'jpeg':
      sharpInstance = sharpInstance.jpeg({ quality, mozjpeg: true });
      break;
    case 'png':
      sharpInstance = sharpInstance.png({ quality, compressionLevel: 9 });
      break;
  }

  // Generate optimized image
  const buffer = await sharpInstance.toBuffer();

  // Cache the optimized image
  try {
    fs.writeFileSync(cachedPath, buffer);
  } catch (error) {
    console.error('Failed to cache optimized image:', error);
  }

  return {
    buffer,
    contentType: `image/${format}`
  };
}

/**
 * Determine optimal format based on Accept header
 */
export function getOptimalFormat(acceptHeader?: string): 'webp' | 'jpeg' {
  if (acceptHeader?.includes('image/webp')) {
    return 'webp';
  }
  return 'jpeg';
}

/**
 * Generate responsive image sizes
 */
export async function generateResponsiveImages(
  inputPath: string,
  sizes: number[] = [320, 640, 960, 1280, 1920]
): Promise<Map<number, { buffer: Buffer; contentType: string }>> {
  const results = new Map();

  for (const size of sizes) {
    try {
      const optimized = await optimizeImage(inputPath, {
        width: size,
        quality: 80,
        format: 'webp'
      });
      results.set(size, optimized);
    } catch (error) {
      console.error(`Failed to generate ${size}px version:`, error);
    }
  }

  return results;
}

/**
 * Clear old cache files (older than 30 days)
 */
export function clearOldCache(maxAgeDays: number = 30): void {
  try {
    const files = fs.readdirSync(CACHE_DIR);
    const now = Date.now();
    const maxAgeMs = maxAgeDays * 24 * 60 * 60 * 1000;

    for (const file of files) {
      const filePath = path.join(CACHE_DIR, file);
      const stats = fs.statSync(filePath);
      
      if (now - stats.mtime.getTime() > maxAgeMs) {
        fs.unlinkSync(filePath);
      }
    }
  } catch (error) {
    console.error('Failed to clear old cache:', error);
  }
}

// Clean cache on startup (run async)
clearOldCache().catch(console.error);
