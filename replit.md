# Dunya Consultants

## Overview
Dunya Consultants is a full-stack web application for visa consultation services for students aiming to study abroad. Its vision is to be Pakistan's most trusted visa consultancy, leveraging technology to streamline the student journey from consultation to pre-departure. The application features a professional dark blue gradient design with custom branding.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Form Handling**: React Hook Form with Zod
- **Animations**: Framer Motion
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript
- **API Design**: RESTful API (JSON responses)
- **Middleware**: Express for parsing and logging
- **Error Handling**: Centralized middleware
- **Email Service**: Resend (configured with RESEND_API_KEY secret, using no-reply@dunyaconsultants.com)

### Data Storage
- **Database**: PostgreSQL 16 (Replit modules)
- **ORM**: Drizzle ORM
- **Schema Management**: Drizzle Kit
- **Connection**: Neon Database serverless driver
- **Fallback**: In-memory storage for development/testing

### Database Schema
- `users`: Authentication and user management
- `contacts`: Contact form submissions
- `testimonials`: Student success stories
- `adminUsers`: Enterprise admin user management with roles and permissions
- `blogPosts`: Content management system with publishing workflow
- `postAssignments`: Granular post access control assignments
- `adminSessions`: Secure admin authentication sessions
- `auditLogs`: Activity tracking and audit trail
- `backup_configs`: Database backup configuration settings
- `backup_history`: Historical records of database backups
- `branchIcons`: Office branch icons with drag-and-drop ordering for homepage carousel
- `universityIcons`: University partner logos with drag-and-drop ordering for display across website

### Key Features
- Contact Management (validated forms)
- Testimonials System
- UI Component Library (shadcn/ui with Radix UI)
- Authentication Framework
- Study Abroad Journey (interactive timeline)
- Smart Tools (Cost Calculator, Course Match, Document Checklist)
- Dynamic display of 20+ Office Locations
- Display of 50+ Global University Partners
- Test Preparation Pages (IELTS, PTE, TOEFL, Duolingo with authentic content and pricing)
- Extensive Blog System (SEO-optimized, dynamic content)
- Complete Study Destination Guides (USA, UK, Canada, Finland, Australia, Belgium, Turkey)
- Event Management (with registration forms)
- Consultation Booking (real-time calendar)
- WhatsApp Integration (Direct contact button linking to +92 326 1111947 for instant consultation)

### Content Management System (Enterprise-Level)
- **Multi-User Authentication**: Secure admin authentication with session management
- **Multi-Role System**: Users can have multiple roles assigned simultaneously (e.g., Editor + Leads Manager)
- **Five Core Role Types**: 
  - Admin: Full system access with ability to manage all users and reset passwords
  - Events Manager: Manage events, registrations, and QR codes
  - Leads Manager: Manage consultation leads and assignments
  - Editor: Create and edit assigned content
  - Publisher: Publish content to live site
  - Custom: Define specific permission combinations
- **Granular Permissions System**: Checkbox-based custom permissions for fine-grained access control
  - canCreate: Create new content
  - canEdit: Edit existing content  
  - canPublish: Publish content to live site
  - canDelete: Delete content
  - canManageUsers: Manage user accounts and permissions
  - canManageCategories: Create and manage content categories
  - canViewAnalytics: Access analytics and reporting
  - canManageMedia: Upload and manage media files
  - canAccessEvents: Access event management features
  - canAccessQRScanner: Access QR scanner functionality
  - canManageLeads: Access and manage lead submissions
  - canDownloadRegistrations: Download event registration data
  - canDeleteRegistrations: Delete event registrations
- **Dynamic Permission Refresh**: User permissions are automatically refreshed on dashboard load to ensure latest access controls are applied
- **Post-Level Access Control**: Admins can assign specific posts to individual users
- **User Management Interface**: Admin dashboard for creating users, assigning multiple roles, managing permissions, with bulk delete functionality
  - **Admin Privileges**: Admins can update usernames and reset passwords for all users (secure password reset without viewing current passwords)
  - **Current User Accounts**:
    - dunyasgd: Admin
    - mubashir: Admin
    - bwpadmin: Events Manager
    - abuzar: Editor + Leads Manager (multi-role)
    - test1: Editor
- **Post Assignment Interface**: Dedicated interface for managing which users can access specific posts
- **Enhanced Blog Editor**: Modern, clean redesign with:
  - Two-column responsive layout (main content left, sidebar right)
  - Tabbed sidebar with "Post Settings" and "SEO Settings" tabs
  - Post Settings tab: Categories (dropdown with hierarchical selection), URL slug, excerpt, author, featured image, publish date
  - SEO Settings tab: Focus keyword, meta description with character counter (0/160)
  - ReactQuill-based rich text editor with HTML mode toggle
  - Advanced content blocks system
- **Dual Dashboard Access**: Role-based dashboard with different features based on user permissions
- **Approval System**: Three-state approval workflow (Approved, Not Approved, Editable) with color-coded dropdown in blog editor
- **Post Filtering System**: 
  - Status filter counters in All Posts page (All, Published, Draft, Trash)
  - Dashboard cards navigate to filtered views (e.g., clicking "Published" card shows only published posts)
  - URL-based filtering with query parameters for bookmarkable filtered views
- **Audit Trail**: Activity logging for user actions and content changes
- **Database Backup System**: Comprehensive backup management with:
  - Manual and scheduled backups (daily, weekly, monthly)
  - Selective backup of 8 data types (Leads, Event Registrations, QR Codes, Blog Posts, Media Files, Users, Forms, Categories)
  - Backup restore functionality (additive restore - adds backup data to existing data)
  - Backup history tracking with download capability
  - Automated backup configuration with highly visible toggle
  - Storage location management (local and cloud)
  - Cloud storage integration support (Google Drive, Dropbox, OneDrive) - requires API credentials to be configured
  - Note: Cloud integrations available but user opted for local backups only
  - Note: Restore is additive (not replacement) and has limited relational data support

### Icon Management System
- **Tabbed Admin Interface**: Single unified page (`/admin/branch-icons`) with tabs for managing both branch and university icons
- **Branch Icons Management**: 
  - CRUD operations for office branch icons displayed in homepage carousel
  - Drag-and-drop reordering with real-time display order updates
  - Toggle visibility (active/inactive) for individual icons
  - Seed endpoint to import existing branch data (12 office locations)
  - Fields: name, iconUrl, route, displayOrder, isActive
- **University Icons Management**: 
  - CRUD operations for university partner logos displayed across website
  - Drag-and-drop reordering with real-time display order updates
  - Toggle visibility (active/inactive) for individual logos
  - Seed endpoint with sample university data (8 sample universities)
  - Fields: name, logoUrl, route, displayOrder, isActive
- **Shared Architecture**: 
  - Custom `useIconManagement` hook for reusable CRUD logic
  - Presentational components (`IconTable`, `IconFormDialog`) shared between both icon types
  - Configurable image field names (iconUrl for branches, logoUrl for universities)
  - Consistent API patterns for both entity types
- **Security**: Seed endpoints allow unauthenticated access only when database is empty (initial setup), then require admin authentication

### UI/UX Decisions
- Professional dark blue gradient design with custom branding.
- Site-wide responsive design.
- Consistent typography and color schemes.
- Interactive elements including hover effects, animations, and dynamic content displays.
- Standardized section titles and descriptions with gradient effects.
- Unified blue color scheme across the entire website.

### System Design Choices
- Frontend uses TanStack Query for API calls.
- Express.js routes handle requests with validation.
- Drizzle ORM ensures type-safe database queries.
- JSON responses are used for client-server communication.
- React components update based on query state changes.
- Automatic scroll-to-top functionality on page transitions.
- Tabbed visa success stories for different countries.
- Infinite horizontal carousels for success stories.
- `/dashboard` route redirects all users to `/admin/dashboard`.

### SEO & Social Media Integration
- **Server-Side Social Meta Tags**: Social media crawlers (WhatsApp, Facebook, Twitter, LinkedIn) receive dynamically injected meta tags via middleware
- **Comprehensive Page Coverage**: All 25+ office locations, 7 study destinations, 4 test prep pages, and blog posts have specific Open Graph and Twitter Card meta tags
- **Smart Featured Images**: Automatic image extraction fallback system (Featured Image → First Content Image → Default Fallback)
- **Office-Specific Social Previews**: Each office page (Lahore DHA, Islamabad, Karachi, international offices, etc.) has custom titles and descriptions for social sharing
- **Production Cache Headers**: Static assets cached for 1 year in production (images, CSS, JS, fonts) for optimal performance
- **Security**: All meta tag values are HTML-escaped to prevent injection attacks

## Performance Optimizations

### Website Performance (November 2025)
- **Compression**: Gzip compression middleware reduces CSS/JS file sizes by ~70-80%
- **Critical CSS**: Enhanced inline critical CSS for faster initial render
- **Image Optimization**: 
  - Added width/height attributes to prevent layout shifts
  - Logo loading changed from lazy to eager with fetchpriority="high"
  - Local asset usage instead of external URLs
- **Resource Hints**: Added modulepreload hints for faster JavaScript loading
- **Cache Strategy**: Production assets cached for 1 year (images, CSS, JS, fonts)
- **Code Splitting**: 
  - All non-critical pages lazy loaded with React.lazy()
  - ReactQuill CSS moved from global import to blog-editor only (reduces main bundle)
  - Aggressive Tailwind CSS purging configured
- **Bundle Optimization**: Removed unused imports from main App.tsx bundle
- **Note**: Logo files (DC White Logo, DC Blue Logo) are currently 170-175KB each and should be optimized to modern formats (WebP) for further performance gains
- **Note**: For production deployment, run `npm run build` to generate optimized bundle with tree-shaking and minification

## External Dependencies
- `@neondatabase/serverless`: PostgreSQL connectivity
- `drizzle-orm`: Type-safe database operations
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library
- `react-hook-form`: Form handling and validation
- `@hookform/resolvers`: Form validation integration
- `zod`: Schema validation
- `@radix-ui/*`: Accessible UI primitives
- `tailwindcss`: CSS framework
- `lucide-react`: Icon library
- `class-variance-authority`: Component variant management
- `@google/genai`: Google Gemini AI integration for chatbot functionality