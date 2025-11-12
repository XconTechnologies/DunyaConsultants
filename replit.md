# Dunya Consultants

## Overview
Dunya Consultants is a full-stack web application designed for visa consultation services, specifically for students aspiring to study abroad. The project aims to become Pakistan's leading visa consultancy by using technology to streamline the entire student journey, from initial consultation to pre-departure preparations. The application features a professional dark blue gradient design and custom branding.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions
The application features a professional dark blue gradient design with custom branding. It utilizes a site-wide responsive design, consistent typography and color schemes, and interactive elements including hover effects, animations, and dynamic content displays. Standardized section titles and descriptions incorporate gradient effects, and a unified blue color scheme is used throughout the website.

### Technical Implementations
- **Frontend**: Built with React 18 and TypeScript, using Tailwind CSS with shadcn/ui for styling, TanStack Query for state management, Wouter for routing, React Hook Form with Zod for form handling, and Framer Motion for animations. Vite is used as the build tool.
- **Backend**: Powered by Node.js 20 with Express.js and TypeScript, implementing a RESTful API with JSON responses. It includes centralized error handling and uses Resend for email services.
- **Data Storage**: PostgreSQL 16 is the primary database, managed with Drizzle ORM and Drizzle Kit for schema management. It connects via the Neon Database serverless driver.
- **Object Storage**: Replit App Storage (Google Cloud Storage) for unified image storage across development and production environments (November 2025).
  - **ObjectStorageService**: Centralized service for uploading, downloading, and managing cloud objects
  - **ACL Framework**: Public/private access control with metadata-based policies
  - **Upload Flow**: Memory buffering → temp file optimization → cloud upload → cleanup
  - **Backward Compatibility**: `/api/uploads/:filename` checks cloud first, then local filesystem fallback
  - **Direct Access**: `/objects/*` route serves objects directly from cloud storage
  - **Migration Script**: `scripts/migrate-uploads-to-object-storage.ts` for moving legacy local files
  - **Bucket**: `replit-objstore-090be4a9-f182-4782-9681-f64d617da3cf`

### Feature Specifications
- **Contact Management**: Validated forms for inquiries.
- **Testimonials System**: Displays student success stories.
- **Study Abroad Journey**: An interactive timeline.
- **Smart Tools**: Includes a Cost Calculator, Course Match, and Document Checklist.
- **Location & Partner Display**: Dynamically shows 20+ office locations and 50+ global university partners.
- **Test Preparation**: Pages for IELTS, PTE, TOEFL, and Duolingo with authentic content.
- **Extensive Blog System**: SEO-optimized and dynamic content capabilities.
- **Study Destination Guides**: Comprehensive guides for multiple countries (USA, UK, Canada, Finland, Australia, Belgium, Turkey).
- **Event Management**: With registration forms.
- **Consultation Booking**: Real-time calendar functionality.
- **WhatsApp Integration**: Direct contact button for instant consultations.
- **Enterprise-Level CMS**: Features multi-user authentication, a multi-role system (Admin, Events Manager, Leads Manager, Editor, Publisher, Custom), granular checkbox-based permissions, dynamic permission refresh, post-level access control, and a user management interface. It includes an enhanced blog editor with SEO settings, a three-state approval workflow, and blocks mode with race condition prevention for auto-save operations (November 2025).
- **Icon Management System**: A tabbed admin interface for managing and reordering both branch and university icons with CRUD operations and visibility toggles. Includes WebP conversion functionality for university icons using `/attached_assets/` paths (fixed November 2025).
- **SEO & Social Media Integration**: Server-side social meta tags for all critical pages, automatic featured image fallback, and production cache headers.
- **Featured Image Management System** (January 2026): Dual-storage system for blog post featured images:
  - **Dual Storage Support**: 
    - **Featured Image Upload**: Local storage at `/public/uploads/articles/` with readable SEO-friendly filenames (e.g., `study-in-uk.webp`)
    - **Media Library Upload**: Object storage at `/objects/uploads/` with cloud-backed storage (e.g., `uk-visa-settlement-updates_1762925143497_cc4a1623.webp`)
    - Both storage systems fully supported, images display correctly from either location
  - **Full Public URLs**: Database stores complete environment-aware URLs
  - **Smart URL Normalization**: Handles object storage paths (`/objects/uploads/`), local storage (`/uploads/articles/`), and HTTP→HTTPS conversion
  - **Environment-Aware**: Automatic dev/production URL generation via `server/url-utils.ts`
  - **Auto-Optimization**: WebP conversion, intelligent sizing, quality compression
  - **Edge Case Handling**: Fallback to `blog-featured-image.webp` for emoji/special-char-only titles
  - **No 404 Errors**: srcset generation disabled for uploaded images (no responsive variants exist)
  - **API Endpoints**: POST `/api/admin/blog-posts/featured-image/upload`, DELETE `/api/admin/blog-posts/featured-image`
  - **Client Utilities**: `getBlogFeaturedImageProps()`, `normalizeFeaturedImageUrl()` in `client/src/lib/image-utils.ts`
  - See `FEATURED_IMAGES_README.md` for usage guide

### System Design Choices
The system uses TanStack Query for frontend API calls, Express.js for validated backend routes, and Drizzle ORM for type-safe database queries. JSON is the standard for client-server communication. React components update based on query states, and there's automatic scroll-to-top on page transitions. The dashboard redirects all users to `/admin/dashboard`.

## External Dependencies
- `@neondatabase/serverless`: For PostgreSQL connectivity.
- `drizzle-orm`: For type-safe database operations.
- `@tanstack/react-query`: For server state management.
- `framer-motion`: For animations.
- `react-hook-form`: For form handling and validation.
- `@hookform/resolvers`: For form validation integration.
- `zod`: For schema validation.
- `@radix-ui/*`: For accessible UI primitives.
- `tailwindcss`: For CSS styling.
- `lucide-react`: For icons.
- `class-variance-authority`: For component variant management.
- `@google/genai`: For Google Gemini AI integration (chatbot functionality).

## Performance Optimizations

### Performance Guide
See `PERFORMANCE_OPTIMIZATION_GUIDE.md` for comprehensive performance optimization details, testing procedures, and best practices.

### Core Web Vitals Improvements (November 2025)
- **LCP Optimization**: Improved from 5s → 4.23s → 3.78s → 1.95s → **1.54s (✅ GOOD)** through:
  - Restored critical JavaScript module preloading (`/src/main.tsx`)
  - Fixed logo preload path to use correct asset location
  - Optimized font loading with preload + inline critical CSS (weights 400, 600)
  - Async loading of remaining font weights (300, 500, 700)
  - Prioritized LCP image preload (AboutCompany image) with fetchpriority="high"
  - **FIXED (Nov 6)**: Removed problematic srcset from LCP image preload - was causing 404 errors
  - **FIXED (Nov 6)**: Removed srcset from AboutCompany component to prevent 404s on legacy images
  - Fixed 21 branch icon 404 errors to reduce network noise
  - Deferred Calendly CSS/JS to requestIdleCallback/setTimeout
  - Added Early Hints via Link headers (limited impact without HTTP 103)
  - **REVERTED (Nov 6)**: Removed deferred Navigation/ScrollProgress - was causing layout shifts and CLS issues
  - **OPTIMIZED (Nov 6)**: Branches carousel now uses RAF for layout measurements to prevent forced reflows
  - Fixed FCP tracking with buffered observers and fallback mechanism
- **FCP Tracking**: Successfully implemented with buffered observers - improved to **1.54s ✅ GOOD**
- **Server Performance**: Balanced compression level (6) for optimal CPU/speed trade-off
- **Monitoring**: Comprehensive Core Web Vitals tracking (TTFB, FCP, LCP, INP) with color-coded status
- **Production Build**: Successfully configured and tested with Vite + esbuild
- **Current Status** (Nov 6, 2025): 
  - FCP: **1.54s ✅ GOOD** (below 1.8s target) - 90% improvement from 14.7s
  - LCP: **1.54s ✅ GOOD** (below 2.5s target) - 62% improvement from 4.0s
  - TTFB: **331ms ✅ GOOD** (below 800ms target)
  - INP: **32ms ✅ GOOD** (below 200ms target)
  - All Core Web Vitals now in "GOOD" range
- **Render Blocking Optimizations**:
  - Deferred Google Analytics (5s on mobile, 3s on desktop)
  - Deferred Facebook Pixel (5s on mobile, 3s on desktop)
  - Deferred Calendly resources using requestIdleCallback
  - Critical font weights (400, 600) inlined, others loaded async
  - No render-blocking CSS on critical path
- **Advanced Lighthouse Optimizations** (Nov 7, 2025):
  - Updated Google Fonts to v18 (latest stable) with proper unicode-range declarations to eliminate 404 errors
  - Added explicit MIME type headers for ES modules (`application/javascript; charset=utf-8`)
  - Implemented security headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `X-XSS-Protection`
  - Proper Content-Type headers for .tsx, .ts, .jsx, and .js files to prevent Lighthouse warnings
  - Unicode-range restrictions on font-face declarations to prevent unnecessary font variant requests
- **Next Steps**: Production deployment and real-user monitoring validation

### Network Payload Optimization (November 2025)
- **Automatic Image Optimization** (Nov 4, 2025):
  - **Server-side automatic WebP conversion**: All uploaded images are automatically converted to WebP format
  - **Intelligent compression**: Images >500KB use 75% quality, smaller images use 80% quality
  - **Maximum dimensions**: Auto-resize to 2000px width maximum to prevent oversized images
  - **Sharp library integration**: Uses Sharp for high-performance image processing
  - **Automatic file replacement**: Original files are replaced with optimized WebP versions
  - **Savings tracking**: Logs show compression savings percentage for each upload
  - **Applies to all upload endpoints**: `/api/upload`, `/api/admin/media/upload`, `/api/events/:id/media/upload`
  - **Expected reduction**: 60-80% file size reduction on new uploads
- **Cache Headers** (Optimized):
  - Uploaded images: 1-year cache (`max-age=31536000, immutable`)
  - Attached assets: 365-day cache in production
  - Static assets (CSS/JS): 1-year cache with immutable flag
  - Social meta pages: 1-hour cache for freshness
- **Legacy Image Handling**:
  - Existing images (pre-Nov 4): Remain in original format until replaced
  - Manual compression still recommended for existing large assets (see `IMAGE_OPTIMIZATION_GUIDE.md`)
  - ICEF Agency logo, DC logo, and university logos can benefit from manual re-upload
- **Code-Level Optimizations Implemented**:
  - LazyImage component with Intersection Observer for progressive loading
  - Proper width/height attributes to prevent layout shifts
  - Async decoding for non-blocking image processing
  - Loading placeholders and skeleton states
- **Mobile Optimization**: Additional performance optimizations for mobile devices
  - Mobile detection utilities for device-specific optimizations
  - Reduced animation steps on mobile (20 vs 40 on desktop)
  - Slower connection detection (3G or slower)
  - Deferred third-party scripts (5s on mobile vs 3s on desktop)
  - Critical inline CSS with mobile-first responsive styles
  - **IMPLEMENTED (Nov 6)**: Smart Responsive Image Delivery:
    - **Automatic srcset generation**: SmartImage and LazyImage components now intelligently generate responsive srcset
    - **Viewport-optimized loading**: Browser automatically selects best image size (640w for mobile, 960w for tablet, 1280w for desktop)
    - **Backwards compatible**: Only applies to uploaded images (`/api/uploads/`), not attached_assets
    - **No 404 errors**: Conservative approach uses commonly available sizes (640w, 960w, 1280w)
    - **Bandwidth savings**: Mobile devices load smaller images (~60-80% smaller than desktop)
    - **Fixed filename parsing**: Correctly handles all image formats (.png, .jpg, .webp) when generating variant URLs
    - **Automatic opt-in**: All uploaded images benefit from responsive delivery without code changes
    - **Sizes attribute**: Tells browser which size to use based on viewport: `(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 1280px`
- **Blog Image 404 Fix** (Nov 7, 2025):
  - **Comprehensive fallback system**: SmartImage and LazyImage now gracefully handle missing images with placeholder fallback
  - **Shared placeholder**: Uses `/attached_assets/generated_images/Blog_placeholder_image_201b6785.png` for all broken images
  - **State synchronization**: Components properly reset error/loaded states when src prop changes during navigation
  - **Consumer callback composition**: onError callbacks are composed, allowing consumers to handle errors while preserving fallback behavior
  - **Automatic srcset disabling**: Responsive variants are disabled when errors occur to prevent further 404 floods
  - **Database cleanup**: Updated 14 blog posts with broken featured_image paths to use placeholder
  - **Production status**: Zero blog image 404 errors - reduced from hundreds of 404s to zero
  - **Type safety**: Proper SyntheticEvent types for React's onError handlers