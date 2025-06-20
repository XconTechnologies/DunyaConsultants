# Path Visa Consultants - System Architecture

## Overview

Path Visa Consultants is a full-stack web application that provides visa consultation services for students seeking to study abroad. The application features a professional dark blue gradient design with custom branding, built with a modern tech stack featuring a React frontend, Express.js backend, and PostgreSQL database, all deployed on Replit's infrastructure.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and interactions
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Request Handling**: Express middleware for JSON parsing and logging
- **Error Management**: Centralized error handling middleware
- **Development Server**: Custom Vite integration for hot module replacement

### Data Storage Solutions
- **Database**: PostgreSQL 16 (configured via Replit modules)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Connection**: Neon Database serverless driver for PostgreSQL connections
- **Fallback Storage**: In-memory storage implementation for development/testing

### Database Schema
The application uses three main tables:
- **users**: Authentication and user management
- **contacts**: Contact form submissions with inquiry details
- **testimonials**: Student success stories and reviews

## Key Components

### Contact Management System
- Contact form with validation for student inquiries
- Fields include personal information, destination country, and detailed messages
- Server-side validation using Zod schemas
- Automatic timestamping of submissions

### Testimonials System
- Display system for student success stories
- Support for ratings, images, and detailed testimonials
- Active/inactive status management
- Pre-seeded with sample testimonials for demonstration

### UI Component Library
- Comprehensive shadcn/ui component set
- Radix UI primitives for accessibility
- Custom styling with CSS variables for theming
- Responsive design patterns throughout

### Authentication Framework
- User schema prepared for authentication implementation
- Password hashing structure in place
- Session management infrastructure ready

## Data Flow

1. **Client Request**: Frontend components make API calls using TanStack Query
2. **API Processing**: Express.js routes handle requests with validation
3. **Database Operations**: Drizzle ORM executes type-safe database queries
4. **Response Handling**: JSON responses sent back to client with error handling
5. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling and validation
- **@hookform/resolvers**: Form validation integration
- **zod**: Schema validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

## Deployment Strategy

### Development Environment
- **Platform**: Replit with custom modules (nodejs-20, web, postgresql-16)
- **Development Server**: Vite dev server with HMR
- **Database**: PostgreSQL instance managed by Replit
- **Port Configuration**: Application serves on port 5000, exposed on port 80

### Production Build
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Deployment Target**: Replit Autoscale
- **Asset Serving**: Express serves static files from build directory

### Environment Configuration
- **Database URL**: Environment variable for PostgreSQL connection
- **Node Environment**: Separate development and production configurations
- **Static Assets**: Served from `dist/public` in production

## Recent Changes

- **June 20, 2025 - Hero Section Redesign**: Redesigned hero section to be fully centered without image, featuring dark blue gradient overlay effects, background patterns, floating animated elements, and integrated statistics cards for better visual impact and professionalism.
- **June 20, 2025 - Brand Update**: Updated brand name from "EduPath" to "Path", integrated custom logo asset throughout navigation and footer, updated all testimonials and contact information to reflect new branding.
- **June 20, 2025 - Dark Blue Theme**: Changed hero section gradient to use professional dark blue color scheme for enhanced visual appeal.
- **June 20, 2025 - Content Enhancement**: Added comprehensive sections including IELTS training features, 6-step admission process workflow, updated services to match consultancy offerings (Career Counseling, Application Handling, Scholarships, University Selection, Interview Preparation, Pre-Departure Briefing), and enhanced About section with authentic statistics (17 city branches, 200 certified counsellors, 250 ambassadors, 20+ university partnerships).
- **June 20, 2025 - Audience-Specific Solutions**: Created interactive tabbed section showcasing tailored solutions for Students (virtual coaching, applications & visas, scholarships), Partners (innovative technology, expert webinars, end-to-end support), and Universities (diverse recruitment, network access, brand visibility) with dynamic content switching and unique visual designs.
- **June 20, 2025 - Office Locations Simplified**: Removed map visualization to focus on clean office listings with region filtering, expandable cards showing detailed contact information, and streamlined presentation of office network.

## Changelog

```
Changelog:
- June 20, 2025. Initial setup and hero section redesign
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```