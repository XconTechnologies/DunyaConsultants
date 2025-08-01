# Path Visa Consultants - System Architecture

## Overview
Path Visa Consultants is a full-stack web application offering visa consultation services for students aiming to study abroad. It features a professional dark blue gradient design with custom branding, built on a modern tech stack. The project's vision is to be Pakistan's most trusted visa consultancy, leveraging technology to streamline the student journey to international education, from initial consultation to pre-departure.

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

### Key Features
- **Contact Management**: Validated inquiry forms.
- **Testimonials System**: Display for student success stories with status management.
- **UI Component Library**: Comprehensive shadcn/ui components with Radix UI primitives for accessibility.
- **Authentication Framework**: Infrastructure for user authentication and session management.
- **Study Abroad Journey**: Interactive timeline visualization of the student process.
- **Smart Tools**: Cost Calculator, Course Match Tool, Document Checklist Generator.
- **Office Locations**: Dynamic display of 17+ offices including international branches.
- **University Partners**: Display of 400+ global university partnerships.
- **Test Preparation Pages**: Comprehensive guides for IELTS, PTE, TOEFL, Duolingo, with authentic content and pricing.
- **Blog System**: Extensive blog library with 164 articles on study abroad topics, featuring SEO-optimized layouts and dynamic content fetching.
- **Event Management**: Events section with registration forms for fairs, workshops, and seminars.
- **Consultation Booking**: Real-time calendar and form for booking consultations.

### UI/UX Decisions
- Professional dark blue gradient design with custom branding.
- Responsive design patterns throughout.
- Consistent typography and color schemes.
- Interactive elements like hover effects, animations, and dynamic content displays.
- Standardized section titles and descriptions with gradient effects.

### Data Flow
- Frontend uses TanStack Query for API calls.
- Express.js routes handle requests with validation.
- Drizzle ORM executes type-safe database queries.
- JSON responses are sent back to the client.
- React components update based on query state changes.

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