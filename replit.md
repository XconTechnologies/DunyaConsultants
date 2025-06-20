# EduPath Visa Consultants - System Architecture

## Overview

EduPath Visa Consultants is a full-stack web application that provides visa consultation services for students seeking to study abroad. The application is built with a modern tech stack featuring a React frontend, Express.js backend, and PostgreSQL database, all deployed on Replit's infrastructure.

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

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```