# Featured Image Management System

## Overview
A dedicated system for managing blog post featured images with full public URLs that work across both development and production environments.

## Features
- ✅ **Readable Filenames**: Images saved with SEO-friendly names (e.g., `study-in-uk.webp`)
- ✅ **Full Public URLs**: Stored as complete URLs in database
  - Dev: `http://localhost:5000/uploads/articles/study-in-uk.webp`
  - Production: `https://dunyaconsultants.com/uploads/articles/study-in-uk.webp`
- ✅ **Auto-Optimization**: All images converted to WebP, resized to max 1200px width
- ✅ **Environment-Aware**: Automatically detects and uses correct base URL:
  - Production: `NODE_ENV === 'production'` → `https://dunyaconsultants.com`
  - Replit Production: Uses `REPLIT_DOMAINS` environment variable
  - Replit Dev: Constructs URL from `REPL_SLUG` and `REPL_OWNER`
  - Local Dev: Falls back to `http://localhost:${PORT}`
- ✅ **Dedicated Storage**: Separate from general media in `/public/uploads/articles/`
- ✅ **Production-Ready**: HTTP→HTTPS conversion, extension validation, error handling
- ✅ **Edge Case Handling**: Fallback for emoji/special-character-only titles

## Usage

### Backend API

#### Upload Featured Image
```typescript
POST /api/admin/blog-posts/featured-image/upload
Authorization: Bearer {token}
Content-Type: multipart/form-data

Body:
- image: File (required)
- title: string (optional - used for better filename generation)

Response:
{
  "success": true,
  "featuredImage": "https://dunyaconsultants.com/uploads/articles/study-in-uk.webp",
  "featuredImageAlt": "study-in-uk",
  "featuredImageTitle": "Study In Uk",
  "featuredImageOriginalName": "Study in UK.jpg",
  "filename": "study-in-uk.webp",
  "size": 124563,
  "width": 1200,
  "height": 675
}
```

#### Delete Featured Image
```typescript
DELETE /api/admin/blog-posts/featured-image
Authorization: Bearer {token}
Content-Type: application/json

Body:
{
  "filename": "study-in-uk.webp"  // or full URL
}

Response:
{
  "success": true,
  "message": "Featured image deleted successfully"
}
```

#### Update Blog Post with Featured Image
```typescript
PUT /api/admin/blog-posts/:id
Authorization: Bearer {token}

Body:
{
  "featuredImage": "https://dunyaconsultants.com/uploads/articles/study-in-uk.webp",
  "featuredImageAlt": "study-in-uk",
  "featuredImageTitle": "Study In UK",
  "featuredImageOriginalName": "Study in UK.jpg",
  ...other fields
}
```

### Frontend Usage

#### Import Utilities
```typescript
import { 
  getBlogFeaturedImageProps, 
  normalizeFeaturedImageUrl 
} from '@/lib/image-utils';
```

#### Display Featured Image in Component
```typescript
// Simple usage
const imageProps = getBlogFeaturedImageProps(post);

<img 
  src={imageProps.src}
  alt={imageProps.alt}
  title={imageProps.title}
  className="w-full h-48 object-cover"
/>
```

#### With SmartImage Component
```typescript
import SmartImage from '@/components/ui/smart-image';

const imageProps = getBlogFeaturedImageProps(post);

<SmartImage 
  {...imageProps}
  className="w-full h-64 object-cover"
  loading="lazy"
/>
```

## File Structure

```
/server
  /featuredImages.ts      # Featured image service (upload, delete, optimize)
  /url-utils.ts           # Environment-aware URL generation

/client/src/lib
  /image-utils.ts         # Frontend utilities for image handling

/public/uploads/articles/ # Storage location for featured images
```

## How It Works

1. **Upload Process**:
   - Image uploaded via API endpoint
   - Filename sanitized (lowercase, hyphens, no special chars)
   - Image optimized: converted to WebP, resized to max 1200px
   - Saved to `/public/uploads/articles/`
   - Full public URL generated based on environment
   - URL and metadata returned to frontend

2. **Storage in Database**:
   ```sql
   blog_posts table:
   - featured_image: full public URL
   - featured_image_alt: alt text
   - featured_image_title: title text
   - featured_image_original_name: original filename
   ```

3. **Display in Components**:
   - Frontend fetches blog post with full URL
   - `getBlogFeaturedImageProps()` normalizes and extracts props
   - Image renders consistently across all pages

## Environment Configuration

The system automatically detects the environment using a robust fallback chain:

### Server-Side (Node.js)
```typescript
// server/url-utils.ts - getBaseUrl()
1. Production: NODE_ENV === 'production' → https://dunyaconsultants.com
2. Replit Prod: REPLIT_DOMAINS → uses domain from env var
3. Replit Dev: REPL_SLUG → https://{slug}.{owner}.repl.co
4. Local Dev: Fallback → http://localhost:{PORT}
```

### Client-Side (Browser)
```typescript
// client/src/lib/image-utils.ts - normalizeFeaturedImageUrl()
const BASE_URL = import.meta.env.MODE === 'production'
  ? 'https://dunyaconsultants.com'
  : `http://localhost:${import.meta.env.VITE_PORT || 5000}`;
```

### Production-Ready Features
- ✅ **HTTP→HTTPS Conversion**: All HTTP URLs automatically converted to HTTPS for SEO
- ✅ **Extension Validation**: Only valid image extensions (jpg, png, webp, gif, svg) accepted
- ✅ **Error Handling**: Try-catch wrapper prevents crashes from malformed data
- ✅ **Fallback Images**: Dynamic fallback based on environment
- ✅ **SEO-Friendly**: Alt text auto-generated from filenames if not provided

## Migration from Object Storage

**For New Uploads**: Use the new featured image upload endpoint

**For Existing Posts**:
1. Posts with object storage URLs (`/objects/uploads/...`) will continue to work
2. Gradually migrate by uploading new featured images via the dedicated endpoint
3. Update blog post with new full public URL

## Benefits

- ✅ **SEO**: Readable filenames improve search rankings
- ✅ **Performance**: WebP format, optimized sizes
- ✅ **Portability**: Full URLs work in any environment
- ✅ **Consistency**: Same image displays correctly everywhere
- ✅ **Maintainability**: Dedicated system, easy to understand
