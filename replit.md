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

## Recent Changes

- **January 31, 2025 - Test Preparation Pages Enhancement**: Removed "Spoken English" and "Interview Prep" pages from navigation as requested. Created comprehensive new test preparation pages for PTE, TOEFL, and Duolingo based on user-provided specifications. Each page features authentic test format information, preparation courses with Pakistani pricing, score requirements, expert tips, and call-to-action sections. All pages include proper header/footer layout consistency with Navigation and Footer components. Fixed TypeScript errors in navigation component with proper type annotations for megaMenuData access patterns.
- **January 31, 2025 - IELTS Page Complete Redesign**: Completely redesigned IELTS page to match the comprehensive format of new test preparation pages. Features modern hero section with blue-purple gradient, detailed test format sections (Listening, Reading, Writing, Speaking), preparation courses with Pakistani pricing (PKR 20,000 - PKR 45,000), band requirements for different purposes, expert tips section, and professional call-to-action. Includes proper Navigation and Footer components for layout consistency and maintains the established design patterns across all test preparation pages. Fixed routing issue by adding `/test-prep/ielts` route to match navigation structure.
- **January 31, 2025 - Complete Blue Color Scheme Implementation**: Successfully implemented unified blue color scheme across entire website except homepage as requested. Converted ALL hero sections (test preparation pages, study abroad pages, about pages) from mixed color gradients (purple, red, green, etc.) to pure blue gradients (from-blue-900 via-blue-800 to-blue-700). Fixed text visibility issues by updating top padding from pt-24 to pt-32 on all hero sections to prevent navigation overlap and ensure no text is cropped or hidden. All pages now maintain consistent blue branding while preserving comprehensive content structure and functionality.
- **February 1, 2025 - About Us Navigation Restructure**: Reorganized About Us menu structure as requested. Combined "Our Stories" and "Success Stories" into unified "Success Stories" page, removed "Leadership & Team" item from navigation, and created comprehensive new "Why Choose Us" page. Updated navigation component to reflect new structure with two main sections: Company (Our Story, Who We Are, Mission & Vision) and Why Choose Us (Success Stories, Why Choose Us). Created detailed Why Choose Us page featuring company advantages, achievements, services overview, and testimonials with consistent blue branding. Success Stories page combines company journey milestones with student achievements, testimonials, and recent placement successes. Both pages include proper Navigation and Footer components for layout consistency.
- **February 1, 2025 - Finland Visa Success Carousel Implementation**: Redesigned Finland visa success section in Our Success Stories page to display as infinite horizontal carousel per user preference. Implemented single-line carousel with continuous loop animation using authentic Finland visa success images from attached_assets. Carousel features slow, smooth scrolling with 50ms intervals and 0.1% movement increments for optimal viewing experience. Triple image rendering ensures seamless infinite loop without gaps or blank spaces. Each image displays with success badges, hover effects, and proper object-contain scaling. Removed grid layout in favor of horizontal carousel format as specifically requested by user.
- **February 1, 2025 - UK Visa Success Stories Section Added**: Created comprehensive UK Visa Success Stories section following Finland section format. Implemented identical infinite horizontal carousel with 12 authentic UK visa success images showing student achievements at University of Sunderland, Ulster University, Glasgow Caledonian University, and University of Salford. Section features indigo/blue color scheme to differentiate from Finland section, hover-to-pause functionality, success badges, and achievement highlights including fast visa processing (3-7 days), scholarship successes up to £4400, and premier university admissions. Both carousels run independently with separate state management for optimal user experience.
- **February 2, 2025 - Navigation Menu Color Enhancement**: Implemented vibrant color schemes across all navigation mega menu sections to replace dull gray appearance. Study Abroad uses blue gradients, Test Prep uses indigo, Offices uses cyan, Blog uses purple, and About Us uses emerald. Applied matching hover effects and updated featured section with rich blue gradient for improved visual appeal and user experience.
- **February 2, 2025 - Our Success Stories Duplication Fix**: Removed duplicate "Finland Success Highlights" section that was showing similar achievement cards as the "UK Success Highlights" section. Eliminated redundant content displaying overlapping information like "Fast Visa Processing", "Scholarship Success", and "Premier Universities" to create cleaner page structure without duplication.
- **February 2, 2025 - Tabbed Visa Success Stories Implementation**: Combined separate Finland and UK visa success sections into unified "Our Success Stories – Visas" section with country tabs. Implemented expandable tab system with UK (default) and Finland tabs, enabling easy addition of more countries later. Single carousel dynamically switches content based on active tab while maintaining consistent design. Each tab displays country-specific success highlights and images with proper color coding (indigo for UK, blue/green for Finland). Carousel resets position on tab changes for optimal user experience.
- **February 2, 2025 - Sweden Visa Success Stories Addition**: Added Sweden as third country tab using 8 authentic Sweden visa success images showcasing students like Hafiza Amna Nawaz, Maria Ihsan, Ahmad Faraz, M. Saad Ullah, Arbab Gull, Shehzadi Sakina Begum, Muhammad Hamza, and Faizan Saleem. Sweden tab features yellow color coding, lightning-fast processing highlights (3-7 days), top universities (Halmstad, Uppsala), and Schengen multiple entry visa benefits. All success stories show authentic approvals with universities like University of Skovde, University West, and Uppsala University across various programs including Environmental Science, Mathematics, Information Technology, Biomedicine, and Leadership.
- **February 3, 2025 - Complete Office Locations Enhancement**: Added all 21 office locations to "Our Office Locations" page with comprehensive city details in card format. Enhanced hero section visibility by adjusting padding from py-16 to pt-32 pb-16 to prevent navigation overlap. Added statistics overview showing 21 total offices (18 Pakistan + 3 International) serving 35,000+ students. Implemented region badges to distinguish international offices and improved filtering functionality. All domestic offices (15 cities) and international offices (Jeddah, Istanbul, Edinburgh) now display complete contact information, services, staff counts, and success rates.
- **February 3, 2025 - Site-wide Scroll Position Fix**: Implemented automatic scroll-to-top functionality using custom useScrollToTop hook and ScrollToTop component. Fixed issue where navigating between pages would retain previous scroll position instead of starting from top. Added ScrollToTop component to main App router to ensure all page transitions reset scroll position to top, improving user navigation experience across the entire website.
- **February 3, 2025 - Blog Page Blue Hero Section Redesign**: Redesigned blog page hero section with consistent blue color scheme (from-blue-900 via-blue-800 to-blue-700). Updated both main blog listing page and individual article page headers to use unified blue gradients instead of mixed colors. Enhanced hero section visibility by adjusting padding to pt-32 pb-20 to prevent navigation overlap. Updated call-to-action banner colors from orange/yellow/red to blue gradients maintaining consistent branding throughout the blog experience.
- **February 3, 2025 - Complete Blog Page Visual Enhancement**: Completely redesigned blog page with enhanced blue theme throughout. Upgraded hero section with animated background elements, gradient text effects, improved statistics cards with hover animations, and professional backdrop blur effects. Enhanced search and filter section with blue gradient styling. Improved all blog cards (featured and regular) with blue gradient headers, enhanced shadows, hover animations, and refined typography. Updated all buttons to use blue gradient styling with hover effects. Redesigned newsletter subscription section with animated background elements and improved user experience. Added proper Navigation and Footer components for complete layout consistency.