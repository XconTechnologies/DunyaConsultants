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
- **Four Role Types**: Admin, Editor, Publisher, and Custom roles with distinct permissions
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
- **User Management Interface**: Admin dashboard for creating users, assigning roles, managing permissions, with bulk delete functionality
- **Post Assignment Interface**: Dedicated interface for managing which users can access specific posts
- **Enhanced Blog Editor**: ReactQuill-based editor with rich formatting, SEO optimization, and category management
- **Dual Dashboard Access**: Role-based dashboard with different features based on user permissions
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