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
- **Enterprise-Level CMS**: Features multi-user authentication, a multi-role system (Admin, Events Manager, Leads Manager, Editor, Publisher, Custom), granular checkbox-based permissions, dynamic permission refresh, post-level access control, and a user management interface. It includes an enhanced blog editor with SEO settings and a three-state approval workflow.
- **Icon Management System**: A tabbed admin interface for managing and reordering both branch and university icons with CRUD operations and visibility toggles.
- **SEO & Social Media Integration**: Server-side social meta tags for all critical pages, automatic featured image fallback, and production cache headers.

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

### Network Payload Optimization (November 2025)
- **Current Issue**: Total network payload is 6.43MB across all devices (widescreen, desktop, tablet, mobile)
- **Primary Causes**: Uncompressed/unoptimized images (933KB ICEF logo, 175KB DC logo, 100-200KB university logos each)
- **Code-Level Optimizations Implemented**:
  - LazyImage component with Intersection Observer for progressive loading
  - Proper width/height attributes to prevent layout shifts
  - Async decoding for non-blocking image processing
  - Loading placeholders and skeleton states
- **Required Manual Actions**:
  - **CRITICAL**: Compress ICEF Agency logo from 933KB → ~250KB (73% reduction)
  - Compress DC White Logo from 175KB → ~60KB (66% reduction)
  - Batch compress 48 university logos from ~7.2MB → ~1.8MB total (75% reduction)
  - Compress office images (Istanbul, Cairo) from 200-300KB → 60-100KB each
  - **Tools**: TinyPNG (tinypng.com), Squoosh (squoosh.app), or ImageOptim
  - **Target**: Reduce total payload from ~10.3MB to ~2.7MB (74% overall reduction)
  - **See**: `IMAGE_OPTIMIZATION_GUIDE.md` for detailed compression instructions
- **Mobile Optimization**: Additional performance optimizations for mobile devices
  - Mobile detection utilities for device-specific optimizations
  - Reduced animation steps on mobile (20 vs 40 on desktop)
  - Slower connection detection (3G or slower)
  - Deferred third-party scripts (5s on mobile vs 3s on desktop)
  - Critical inline CSS with mobile-first responsive styles