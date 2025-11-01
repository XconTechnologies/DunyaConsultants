# Image Utilities Usage Guide

## Overview
The image utility system automatically:
- Serves all images with WebP content type headers
- Extracts human-readable alt text from filenames
- Provides consistent image handling across frontend and backend

## Backend (Server)

### Automatic Image Metadata
All images served via `/api/uploads/:filename` automatically include:
- `Content-Type`: Proper MIME type (image/webp, image/jpeg, etc.)
- `X-Image-Alt`: Auto-generated alt text from filename
- `Cache-Control`: Optimized caching headers

### Example Response Headers
```
GET /api/uploads/best-study-abroad-consultants_1758093944871_81b978.webp

Response Headers:
Content-Type: image/webp
X-Image-Alt: Best Study Abroad Consultants
Cache-Control: public, max-age=31536000, immutable
```

### Server-Side Functions

```typescript
import { extractAltTextFromFilename, getImageMetadata } from './server/image-utils';

// Extract alt text from filename
const alt = extractAltTextFromFilename('best-study-abroad-consultants_1758093944871.webp');
// Result: "Best Study Abroad Consultants"

// Get complete image metadata
const metadata = getImageMetadata('image.webp', req.get('Accept'));
// Result: { alt: "Image", contentType: "image/webp", filename: "image.webp" }
```

## Frontend (React)

### Option 1: SmartImage Component (Recommended)

The easiest way to use auto-generated alt text:

```tsx
import SmartImage from '@/components/ui/smart-image';

// Auto-generated alt text from filename
<SmartImage 
  src="/api/uploads/best-study-abroad-consultants_1758093944871.webp"
  className="w-full h-auto"
/>
// Renders: <img alt="Best Study Abroad Consultants" ... />

// Custom alt text (overrides auto-generation)
<SmartImage 
  src="/api/uploads/image.webp"
  alt="Custom description here"
/>

// Explicit custom alt (highest priority)
<SmartImage 
  src="/api/uploads/image.webp"
  customAlt="Explicit override"
/>
```

### Option 2: Utility Functions

For more control or custom components:

```tsx
import { extractAltText, getImageProps, toWebP } from '@/lib/image-utils';

// Extract alt text only
const alt = extractAltText('/api/uploads/study-abroad_123456.webp');
// Result: "Study Abroad"

// Get complete image props
const { src, alt } = getImageProps('/api/uploads/image.png');
// Result: { src: "/api/uploads/image.png", alt: "Image" }

// Custom alt text
const { src, alt } = getImageProps('/api/uploads/image.png', 'My custom description');
// Result: { src: "/api/uploads/image.png", alt: "My custom description" }

// Convert to WebP URL
const webpUrl = toWebP('/api/uploads/image.png');
// Result: "/api/uploads/image.webp"

// Use in your component
<img src={src} alt={alt} loading="lazy" />
```

### Option 3: Inline Usage

```tsx
import { extractAltText } from '@/lib/image-utils';

function MyComponent({ imageUrl }) {
  return (
    <img 
      src={imageUrl}
      alt={extractAltText(imageUrl)}
      className="rounded-lg"
    />
  );
}
```

## Alt Text Extraction Logic

The system automatically cleans filenames:

| Filename | Generated Alt Text |
|----------|-------------------|
| `best-study-abroad-consultants_1758093944871_81b978.webp` | Best Study Abroad Consultants |
| `student-visa-guide_123456.png` | Student Visa Guide |
| `IELTS-preparation-tips.jpg` | Ielts Preparation Tips |
| `university_partners_2024.webp` | University Partners 2024 |

**Cleaning steps:**
1. Remove file extensions (.webp, .png, .jpg, etc.)
2. Remove Unix timestamps (13+ digit numbers)
3. Remove hash patterns (8+ character alphanumeric)
4. Replace underscores and hyphens with spaces
5. Capitalize first letter of each word

## Best Practices

### ✅ DO:
```tsx
// Use SmartImage for automatic alt text
<SmartImage src="/api/uploads/study-guide.webp" />

// Provide custom alt for important images
<SmartImage src="/api/uploads/logo.webp" alt="Dunya Consultants Logo" />

// Use descriptive filenames (they become alt text!)
study-abroad-consultants-pakistan.webp
// Alt: "Study Abroad Consultants Pakistan"
```

### ❌ DON'T:
```tsx
// Don't use random/cryptic filenames
img_x7h3k.webp  // Alt: "Img X7h3k" (not helpful)

// Don't leave alt empty when auto-generation fails
<img src={url} alt="" />  // Bad for accessibility

// Don't duplicate information
<SmartImage 
  src="/api/uploads/study-abroad-guide.webp" 
  alt="Study Abroad Guide"  // Redundant - already auto-generated
/>
```

## Migration Guide

### Before:
```tsx
// Old way - manual alt text
<img 
  src="/api/uploads/best-consultants_1758093944871.webp"
  alt="Best consultants image"
  loading="lazy"
/>
```

### After:
```tsx
// New way - automatic alt text
<SmartImage src="/api/uploads/best-consultants_1758093944871.webp" />
// Auto-generates: alt="Best Consultants"
```

## Testing Alt Text

Check what alt text will be generated:

```bash
# In browser console or Node.js
import { extractAltText } from '@/lib/image-utils';

console.log(extractAltText('best-study-abroad_1758093944871_81b978.webp'));
// Output: "Best Study Abroad"
```

## Benefits

1. **Better SEO**: Descriptive alt text from meaningful filenames
2. **Accessibility**: All images have alt text by default
3. **Consistency**: Same logic across frontend and backend
4. **Performance**: WebP format with optimized headers
5. **Developer Experience**: Less boilerplate code
6. **Maintainability**: Change alt text logic in one place

## API Reference

### Server (`server/image-utils.ts`)
- `extractAltTextFromFilename(filename: string): string`
- `getImageContentType(filename: string, acceptHeader?: string): string`
- `getImageMetadata(filename: string, acceptHeader?: string)`
- `formatImageForFrontend(imageUrl: string | null | undefined)`

### Client (`client/src/lib/image-utils.ts`)
- `extractAltText(filename: string | null | undefined): string`
- `getImageProps(src: string | null | undefined, customAlt?: string)`
- `toWebP(url: string | null | undefined): string`

### Component (`client/src/components/ui/smart-image.tsx`)
- `<SmartImage src={string} alt?: string customAlt?: string {...props} />`
