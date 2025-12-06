# Dunya Consultants

## Overview
Dunya Consultants is a full-stack web application for visa consultation services, primarily for students seeking to study abroad. The project's goal is to become Pakistan's leading visa consultancy by leveraging technology to streamline the entire student journey, from initial consultation to pre-departure preparations. The application features a professional dark blue gradient design and custom branding.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions
The application features a professional dark blue gradient design with custom branding, site-wide responsive design, consistent typography and color schemes, and interactive elements including hover effects, animations, and dynamic content displays. Standardized section titles and descriptions incorporate gradient effects, and a unified blue color scheme is used throughout the website.

### Technical Implementations
- **Frontend**: React 18 with TypeScript, Tailwind CSS (shadcn/ui), TanStack Query for state management, Wouter for routing, React Hook Form with Zod for form handling, and Framer Motion for animations. Vite is the build tool.
- **Backend**: Node.js 20 with Express.js and TypeScript, implementing a RESTful API with JSON responses, centralized error handling, and Resend for email services.
- **Data Storage**: PostgreSQL 16 managed with Drizzle ORM and Drizzle Kit, connecting via the Neon Database serverless driver.
- **Object Storage**: Replit App Storage (Google Cloud Storage) for unified image storage. It includes an `ObjectStorageService` for uploads/management, an ACL framework for access control, and direct access via the `/objects/*` route.

### Feature Specifications
- **Client Interaction**: Contact management, testimonials system, interactive study abroad journey, consultation booking with real-time calendar, and WhatsApp integration.
- **Information & Tools**: Smart tools (Cost Calculator, Course Match, Document Checklist), dynamic display of office locations and university partners, test preparation pages (IELTS, PTE, TOEFL, Duolingo), extensive SEO-optimized blog, and comprehensive study destination guides.
- **Event Management**: System for managing events with registration forms, QR code-based check-in, and dual-field content display (short description for hero/SEO, excerpt for post-banner ticker). Event editor preserves HTML styles and scripts by auto-detecting them and preventing Rich Text mode sanitization.
- **Enterprise-Level CMS**: Multi-user authentication, multi-role system with granular permissions, dynamic permission refresh, post-level access control, user management with display name support for author attribution, an enhanced blog editor with SEO settings, three-state approval workflow, and blocks mode with race condition prevention.
- **Icon Management System**: Tabbed admin interface for managing and reordering branch and university icons with CRUD operations, visibility toggles, and WebP conversion.
- **SEO & Social Media Integration**: Dynamic per-page meta tags with unique titles, descriptions, and featured images for events, blog posts, and static pages. Server-side meta tag injection for social media crawlers (Facebook, WhatsApp, Twitter, LinkedIn, etc.) with automatic featured image fallback. Client-side dynamic meta tag updates using setMetaTags function for regular browsers. Production cache headers for optimized performance.
- **Featured Image Management System**: Dual-storage support for featured images (local at `/public/uploads/articles/` and object storage at `/objects/uploads/`), full public URLs, smart URL normalization, environment-aware URL generation, auto-optimization (WebP conversion, sizing, compression), and robust error handling.
- **URL Redirect Management System**: Comprehensive redirect management with 301/302 support, multi-hop loop prevention (5-hop depth limit), case-insensitive hostname checking, in-memory caching with 60s TTL and immediate invalidation after mutations, asynchronous hit tracking, and admin UI for CRUD operations with inline editing.

### System Design Choices
The system uses TanStack Query for frontend API calls, Express.js for validated backend routes, and Drizzle ORM for type-safe database queries. JSON is the standard for client-server communication. React components update based on query states, and there's automatic scroll-to-top on page transitions. The dashboard redirects all users to `/admin/dashboard`.

**Custom Content Blocks System**: The blog editor supports rich content blocks including paragraph, heading, tip, FAQ, table, HTML, button, image, YouTube, spacer, divider, schema, consultation, WhatsApp channel, and list blocks. All blocks support HTML content with intelligent style/script extraction and injection into the document head to prevent conflicts. The IntegratedContentRenderer tracks rendered block IDs to prevent duplication and seamlessly integrates custom blocks with legacy HTML content.

**Custom Content Blocks Backward Compatibility**: Editor transformations (transformServerBlocks and transformToContentBlocks) support both legacy (secondButton*) and new (button2*) naming conventions for consultation blocks to ensure data persistence across database schema migrations. Renderers also maintain dual naming support for seamless backward compatibility.

## Performance Optimizations (LCP Improvements)
**Mobile Performance Focus - LCP Optimization**:
1. **Homepage & All Pages**: Removed heavy animated blob patterns and grid backgrounds on mobile (hidden with `hidden md:block` and `hidden lg:block`)
2. **Stats Banner**: Simplified background animations; show only 2 critical stats initially on mobile, additional 2 stats below
3. **Study Abroad Pages (Turkey, etc.)**: Removed `animate-pulse` effects from hero text; hidden non-critical stat cards on mobile (`hidden sm:flex`, `hidden lg:flex`); added CSS containment (`contain: layout style paint`)
4. **Hero Sections**: Simplified SVG patterns - converted from heavy base64 inline SVGs to lightweight CSS radial-gradients, only visible on md/lg screens
5. **Lazy Loading**: Hero sections use simple gradients; below-the-fold components already use React.lazy with Suspense

## External Dependencies
- `@neondatabase/serverless`: PostgreSQL connectivity.
- `drizzle-orm`: Type-safe database operations.
- `@tanstack/react-query`: Server state management.
- `framer-motion`: Animations.
- `react-hook-form`: Form handling and validation.
- `@hookform/resolvers`: Form validation integration.
- `zod`: Schema validation.
- `@radix-ui/*`: Accessible UI primitives.
- `tailwindcss`: CSS styling.
- `lucide-react`: Icons.
- `class-variance-authority`: Component variant management.
- `@google/genai`: Google Gemini AI integration (chatbot functionality).