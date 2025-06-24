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
- **June 20, 2025 - Office Locations Removed**: Completely removed office locations section from the website to simplify user experience and focus on core consultation services.
- **June 20, 2025 - Events Section Added**: Created comprehensive animated events section with interactive slider showcasing upcoming seminars, workshops, webinars, and consultations. Features include registration progress tracking, event filtering, animated cards with hover effects, and call-to-action for audience participation.
- **June 20, 2025 - Countries Section Added**: Built interactive countries section with detailed information about study destinations including UK, Canada, Australia, US, Germany, and New Zealand. Features include animated slider with 3 countries per slide, comprehensive country details modals, visa success rates, scholarship information, university rankings, popular programs, and work rights details. Includes flag representations and country-specific gradient themes.
- **June 20, 2025 - Services Section Redesigned**: Transformed services section into unique carousel slider with 2 services per slide featuring gradient backgrounds, detailed modal views, step-by-step processes, benefits highlighting, and interactive navigation. Enhanced visual design with background patterns, animated icons, and comprehensive service information including duration and what's included.
- **June 20, 2025 - Contact Section Enhanced**: Updated contact section with team photo integration, UAN number (+92) 304 1110947 prominence, quick contact options (call, email, visit), team statistics overlay (17+ branches, 200+ employees, 1000+ ambassadors), and enhanced call-to-action with direct phone links.
- **June 20, 2025 - University Partners Section Added**: Created comprehensive university partners section showcasing 250+ global university partnerships with auto-sliding logo display in 4x4 grid format. Features include country-wise breakdown (USA 80+, UK 45+, Canada 35+, Australia 30+, Others 60+), university rankings, interactive hover effects, and call-to-action for university guidance.
- **June 20, 2025 - Cost Calculator Section Added**: Built comprehensive study abroad cost calculator with interactive form inputs for destination country, study level, duration, tuition fees, and living expenses. Includes real-time cost breakdown, additional expenses (IELTS, flight, insurance), and extensive FAQ section covering visa requirements, tuition fees, English tests, and application processes. Features live chat support integration and detailed cost estimation for 5 major study destinations.
- **June 20, 2025 - Google Reviews Section Added**: Created authentic Google Reviews display section with rating breakdown, verified student reviews, auto-scrolling testimonials, and direct link integration to Google Business profile (https://g.co/kgs/syV1FVf). Features include 4.8/5 star rating display, 127+ reviews showcase, rating distribution charts, and call-to-action for writing new reviews.
- **June 21, 2025 - Office Locations Section Added**: Built interactive world map infographic showcasing 17+ office locations across Pakistan with clickable markers, hover tooltips, and detailed office information. Features include dotted world map visualization, color-coded location markers, comprehensive office details (address, phone, email, hours, staff), and direct contact functionality with UAN number prominence.
- **June 21, 2025 - Interactive Map Integration**: Enhanced office locations with React Leaflet interactive map functionality. Added dual view modes (infographic vs interactive), filter system for offices and study destinations, real-time map markers with custom icons, popup information windows, and seamless switching between static and interactive map views. Integrated study destination countries with office locations on single interactive platform.
- **June 21, 2025 - Office Locations Carousel**: Redesigned office locations section as modern slider/carousel removing map visualization. Features auto-sliding office cards (2 per slide), unique gradient themes per office, specialized services highlighting, direct contact integration, background patterns, navigation controls, pagination dots, and comprehensive office details including staff count and specialized services for each location.
- **June 21, 2025 - Professional Tagline**: Simplified and refined "Dedication to Education" tagline with minimal, professional design. Features clean glassmorphism container with subtle backdrop blur, gentle fade-in animation, and understated pulse indicator. Removed complex floating elements in favor of elegant simplicity while maintaining visual impact above the main hero heading.
- **June 21, 2025 - Hero Heading Update**: Updated main hero heading to "We Focus On Premium Advice & Proven Success" for cleaner, more direct messaging that emphasizes core value proposition. Restored larger typography sizing and maintained accent color highlighting for key benefits.
- **June 21, 2025 - Services Section Redesign**: Completely restructured services section with new service offerings including Career Counselling, University Selection, Admission Support, Document Preparation, Application Submission, Interview Preparation, Pre-Departure Support, and Test Preparation Support (IELTS, PTE & More). Features 3-column grid layout showing 3 services per slide with auto-progression every 6 seconds, emoji icons, enhanced hover animations, and comprehensive modal details for each service.
- **June 22, 2025 - IELTS Dedicated Page**: Created comprehensive IELTS page inspired by IDP Pakistan structure with test format overview, preparation courses, test booking system, band requirements table, and expert tips. Features tabbed interface with overview, preparation, booking, requirements, and tips sections. Includes test center information, course pricing, and integrated booking form with authentic Pakistani test center details and pricing.
- **June 22, 2025 - IELTS Exam Day Guide**: Added "What to Expect on Exam Day" submenu under IELTS with comprehensive exam day procedures based on British Council guidelines. Features test day schedule, security procedures, what to bring/not bring, test room rules, and emergency contact information with dropdown navigation functionality.
- **June 22, 2025 - Country Guide Page**: Created comprehensive country guide page inspired by Yocket USA content with detailed information for USA, UK, Canada, and Australia. Features interactive country selection, tabbed interface for overview/universities/benefits/process, detailed USA top university listings with authentic data, application process timeline, and study benefits highlighting. Includes country-specific statistics, visa success rates, and comprehensive university information.
- **June 22, 2025 - Separate Country Guides**: Created individual detailed country guide pages for USA, UK, Canada, and Australia with comprehensive university listings, cost breakdowns, visa information, and student life details. Added Country Guide submenu dropdown navigation with unique color schemes and tabbed interfaces for each country.
- **June 22, 2025 - Accreditations Section**: Added "Our Accreditations" section to home page featuring ICEF Agency, British Council, LanguageCert, Duolingo, and PTE Academic certifications. Features unique floating card design with gradient backgrounds, hover animations, trust indicators, and quality assurance metrics in an interactive grid layout.
- **June 22, 2025 - Mobile Process Section**: Implemented collapsible/expandable process description with mobile responsiveness. Features 6-step educational journey with desktop timeline view and mobile accordion interface. Includes detailed step descriptions, deliverables, next steps, duration estimates, expand/collapse all controls, and smooth animations for enhanced user experience on all devices.
- **June 22, 2025 - Enhanced Visual Appeal**: Added multiple attractive components including animated statistics banner with counter animations, floating CTA with expandable contact card, scroll progress indicator, and success stories carousel with student testimonials. Features include animated counters, live chat indicators, trust badges, and auto-rotating testimonials with student photos and achievements.
- **June 22, 2025 - Hero Section with Video Background**: Transformed statistics banner into full-screen hero section with animated video background, enhanced typography (5xl-8xl headings), and separated achievement highlights into dedicated section. Features include floating animated elements, particle overlays, and improved call-to-action placement for better user engagement.
- **June 22, 2025 - Google Reviews Integration**: Updated "Students Love Our Service" section to display authentic Google reviews from real customers instead of system-generated testimonials. Features include verified review badges, Google branding, actual customer names and services, review dates, and direct link to Google Business profile (https://g.co/kgs/GsNsmyR) with 4.8-star rating display.
- **June 22, 2025 - Student Journey Visualization**: Implemented animated student journey visualization with milestone tracking showing 8-step pathway from consultation to study success. Features include auto-progressing timeline, interactive step selection, progress indicators, detailed milestone information, duration tracking, and animated transitions. Provides complete visual representation of the student experience with clickable milestones and status indicators.
- **June 22, 2025 - Enhanced Video Hero Overlay**: Added enhanced video overlay effects to hero section including additional dark overlay layers, animated floating elements with motion effects, and interactive video control button. Features dynamic scaling animations, opacity transitions, and play/pause functionality for better visual engagement and user control.
- **June 22, 2025 - Services Section Removal**: Removed "Our Comprehensive Services" section from home page to streamline user experience and reduce page length. The audience-specific solutions section remains to provide targeted service information.
- **June 22, 2025 - Audience Section Redesign**: Redesigned "Tailored Solutions for Everyone" section with modern card-based layout replacing tab interface. Features 3-column grid design, hover animations, active indicators, gradient backgrounds, enhanced typography, and individual solution cards for Students, Partners, and Universities with dedicated action buttons and offering details.
- **June 23, 2025 - Enhanced Mobile Process Section**: Implemented advanced collapsible/expandable process description with enhanced mobile responsiveness. Features include progress indicators, step navigation controls, expanded content with deliverables and next steps, action buttons for each step, smooth animations, and improved visual hierarchy with gradient backgrounds and enhanced typography.
- **June 23, 2025 - Hero Section Navigation**: Made header visible in hero section with white color scheme and updated logo branding to "Dunya Consultants" with white styling. Added dynamic color transitions that adapt to scroll position, maintaining visibility over video background with glassmorphism effects and proper contrast for optimal readability.
- **June 23, 2025 - Logo Integration**: Integrated new Dunya Consultants logo asset into navigation header with proper white color adaptation for hero section visibility. Updated logo styling with brightness/invert filters for optimal contrast over video background while maintaining brand identity and readability across different scroll states.
- **June 23, 2025 - Enhanced Navigation Structure**: Completely restructured navigation with comprehensive menu system including About Us (Our Story, Mission & Vision, Leadership & Team, Success Stories, Why Choose Us), Country Guide (by destination and service), Test Preparation (IELTS, PTE, TOEFL, Duolingo, Spoken English), Offices (Find Branch, Contact Details, Appointment Booking), and Blog sections. Enhanced header styling with gradient background matching hero section, improved hover effects, and refined color transitions for optimal visual integration.
- **June 23, 2025 - Mega Menu Implementation**: Replaced simple dropdown menus with sophisticated mega menu design featuring organized sections, descriptive content, featured highlights, and quick contact information. Implemented hover animations, gradient backgrounds, icon integration, and comprehensive service categorization for enhanced user experience and navigation efficiency.
- **June 23, 2025 - Expanded Navigation Sections**: Added comprehensive Offices, Blog, and Contact sections to mega menu with detailed submenus including branch finder, appointment booking, Google Maps integration, study abroad tips, student experiences, inquiry forms, live chat, WhatsApp support, social media links, and newsletter subscription options.
- **June 23, 2025 - Dual Logo Implementation**: Integrated new blue Dunya Consultants logo for sticky header state while maintaining white logo for hero section. Added dynamic logo switching based on scroll position for optimal brand visibility and contrast against different backgrounds.
- **June 23, 2025 - Real Office Data Integration**: Updated office locations section and navigation mega menu with authentic Dunya Consultants office addresses across 15 locations including 12 Pakistan offices (Lahore, Sargodha Head Office, Islamabad, Karachi, Faisalabad, Gujranwala, Sialkot, etc.) and 3 international offices (Jeddah Saudi Arabia, Istanbul Turkey, Edinburgh UK) with real phone numbers, addresses, and operating hours.
- **June 23, 2025 - Homepage Streamlining**: Removed multiple sections from home page including Office Locations, Testimonials, Google Reviews, Accreditations, Achievements, Student Journey Visualization, Success Stories Carousel, and Contact sections to create a more focused and streamlined user experience with core content only.
- **June 23, 2025 - Education Journey Timeline**: Created comprehensive interactive timeline section replacing process visualization with 7-step journey from consultation to departure. Features include interactive step navigation, detailed phase breakdowns, progress tracking, animated transitions, and call-to-action for free consultation. Timeline covers 6-month roadmap with Discovery, Planning, Preparation, Application, Admission, Visa Process, and Departure phases.
- **June 23, 2025 - Smart Tools Development**: Removed Education Journey Timeline section from home page and created two dedicated tools under Study Destinations menu: Live Cost Calculator with comprehensive cost breakdown for 5 countries (Canada, UK, Australia, USA, Germany) including tuition, living expenses, visa fees, and city-specific costs; Smart Course Match Tool with 6-question quiz providing personalized country and course recommendations based on education level, budget, language proficiency, field of interest, and future plans with detailed scoring algorithm.
- **June 23, 2025 - Timeline Process Redesign**: Redesigned "Your Journey to International Education" section with vertical timeline layout featuring alternating left-right card positioning, enhanced visual timeline with gradient connectors, interactive step dots, progress overview with statistics, and comprehensive deliverables breakdown for each of the 6 steps from consultation to departure with improved animations and hover effects.
- **June 23, 2025 - Horizontal Timeline Design**: Converted timeline to horizontal layout with animated progress indicator, floating step cards with detailed information, connecting arrows between steps, responsive mobile version, and enhanced visual hierarchy with gradient timeline bar and interactive hover effects for better user engagement.
- **June 23, 2025 - Clean Simple Timeline**: Redesigned timeline with simple grid layout featuring clean white cards, minimal design elements, clear typography, and straightforward visual hierarchy. Removed complex animations and patterns for better readability and user focus on content.
- **June 23, 2025 - Enhanced Timeline Design**: Created new timeline layout with vertical progression line, alternating left-right card positioning, centered timeline dots with step numbers, duration badges, and comprehensive mobile responsive version. Features clear visual flow from consultation to departure with enhanced typography and organized deliverables.
- **June 23, 2025 - Circular Timeline Design**: Implemented innovative circular timeline layout inspired by user-provided reference image. Features central education hub with 6 steps arranged in perfect circle, animated connection lines, floating info cards on hover, pulsing progress indicators, and comprehensive mobile fallback. Includes smooth scaling animations and interactive step selection with detailed deliverables display.
- **June 23, 2025 - Professional 8-Step Journey**: Enhanced circular timeline with comprehensive 8-step educational journey process including Initial Consultation, Strategic Planning, Test Preparation, Document Preparation, Application Submission, Admission Follow-up, Visa Processing, and Pre-Departure Preparation. Features detailed deliverables for each step, professional statistics display, enhanced call-to-action with guarantee badges, and expanded timeline covering 18-20 weeks for complete educational journey planning.
- **June 23, 2025 - Journey Section Removal**: Removed "Your Journey to International Education" section from home page to streamline user experience and focus on core consultation services. The circular timeline component remains available but is no longer displayed on the main page.
- **June 23, 2025 - Audience Section Redesign**: Completely redesigned "Tailored Solutions for Everyone" section with futuristic dark theme, featuring gradient backgrounds, animated connection hub, floating elements, backdrop blur effects, and enhanced interactivity. Added central rotating target hub connecting all solutions, improved card layouts with glassmorphism effects, and enhanced call-to-action section with consultation booking.
- **June 23, 2025 - Document Checklist Generator**: Added comprehensive document checklist generator section allowing students to create personalized checklists based on destination country (USA, UK, Canada, Australia) and study level. Features include interactive checkbox tracking, progress monitoring, document categorization, timeline guidance, and PDF download functionality. Includes authentic document requirements for each country with detailed descriptions and preparation timelines.
- **June 23, 2025 - Document Checklist Navigation**: Moved Document Checklist Generator from home page to separate page accessible via navigation under Study Destinations > Smart Tools. Added route `/document-checklist` and updated mega menu navigation structure to include the new tool alongside Cost Calculator and Course Match Tool.
- **June 23, 2025 - Office Locations Carousel**: Added comprehensive office locations section with authentic Dunya Consultants office data from 17 locations across Pakistan. Features include auto-sliding carousel with 3 cards per view, unique gradient themes for each office, detailed contact information, call-to-action buttons, navigation controls, pagination dots, and responsive design. Includes head office designation for Sargodha and complete address/phone details for all branches.
- **June 24, 2025 - Audience Section Removal**: Removed "Tailored Solutions for Everyone" section from home page to streamline user experience and focus on core services. Home page now flows directly from hero section to IELTS section.
- **June 24, 2025 - Hero Section Text Updates**: Updated hero section with new tagline "Dedication To Education" with subtitle "Excellence in Every Step", changed main heading to "Dedication To Education", updated description to include "About Dunya Consultants" introduction, and reduced icon dimensions for cleaner appearance with smaller icons and containers.
- **June 24, 2025 - Hero Section Typography**: Set exact font sizes throughout hero section - main heading 32px, paragraph 16px, and button 16px. Also updated "Our Office Locations" heading to 32px. Used inline styles for precise font size control instead of Tailwind classes.
- **June 24, 2025 - Tagline Container Removal**: Completely removed empty tagline container div from hero section for cleaner design. Main heading "Dedication To Education" remains at 32px font size with proper focus.
- **June 24, 2025 - Micro-Interaction Hover Tooltips**: Implemented comprehensive educational tooltip system using Radix UI with custom EducationalTooltip component. Added interactive hover tooltips to statistics cards in hero section and IELTS features with detailed explanations, categorized by type (educational, process, achievement, location, statistic, info), and smooth animations. Enhanced user experience with contextual information on hover.
- **June 24, 2025 - Statistics Text Size Reduction**: Significantly reduced font sizes in hero section statistics - numbers from text-4xl/5xl/6xl to text-lg/xl/2xl, labels from text-base/lg/xl to text-xs/sm, and minimized spacing for very compact appearance.
- **June 24, 2025 - Office Locations Section Cleanup**: Removed description paragraph and statistics section (17+ Offices, 15+ Cities, 200+ Expert Staff, 10K+ Students Served) from office locations section for cleaner, more focused presentation.
- **June 24, 2025 - Compact Office Layout with Auto-Slide**: Redesigned office locations with compact layout showing 4 offices per row on desktop, reduced card padding and font sizes, implemented auto-sliding functionality (4-second intervals), added hover pause/resume functionality, and enhanced responsive breakpoints for better mobile experience.
- **June 24, 2025 - Dynamic Location Filter with Search**: Implemented comprehensive filtering system with search bar for city/office/address queries, region filters (Punjab, Sindh, Federal), service filters (Visa Processing, University Applications, IELTS Training, etc.), active filter badges, clear filters functionality, and dynamic results count. Enhanced office data with region and services metadata for better filtering capabilities.
- **June 24, 2025 - International Offices Integration**: Added 3 international office locations including Jeddah (Saudi Arabia), Istanbul (Turkey), and Edinburgh (UK) with complete contact details, operating hours, and services. Added "International" region filter, special international badge indicators, and enhanced results display to show international office count separately.
- **June 24, 2025 - Office Locations Simplification**: Removed search bar, filter buttons, active filter badges, and results count from office locations section. Streamlined to show only the heading and auto-sliding office carousel for cleaner, more focused presentation.
- **June 24, 2025 - Authentic University Logo Integration**: Integrated 19 authentic university partner logos including Eton College, Southern Cross Institute, Skills Australia Institute, University of Applied Sciences Europe, IBAT College Dublin, GBS Global Applied Knowledge, College de Paris, Gisma University, Arden University Berlin, University of Europe, Berlin School of Business & Innovation, LAB University, LIM College, Webster University, QA Partnership, Hartpury University, Ulster University, Southampton Solent University, and University of South Wales. Updated statistics to reflect authentic partner countries (USA 80+, UK 65+, Germany 60+, Australia 35+, Ireland 25+, France 20+, Wales 15+) and enhanced auto-sliding carousel display with real institutional branding across 8 countries.
- **June 24, 2025 - Single Frame University Display**: Removed carousel/slider functionality from university partners section and converted to single static grid display showing all 19 authentic university logos simultaneously. Eliminated auto-sliding, navigation controls, and slide indicators for cleaner presentation focusing only on universities with actual logos. Enhanced responsive grid layout (2-5 columns based on screen size) for optimal viewing of authentic partner institutions.
- **June 24, 2025 - Statistics Removal**: Completely removed all statistics display from university partners section including country breakdowns (250+ Universities, 80+ USA, 65+ UK, 60+ Germany, 35+ Australia, 25+ Ireland, 20+ France, 15+ Wales, 50+ Countries, 95% Success Rate). Streamlined section to focus purely on university logos and simplified descriptive text for cleaner, more focused presentation.
- **June 24, 2025 - University Logos Complete Removal**: Removed all university partner logos and grid display from the "Our Global University Partners" section. Section now contains only the heading, descriptive text, and call-to-action without any visual logo elements for minimal clean presentation.
- **June 24, 2025 - New University Logos Integration**: Added 12 new authentic university partner logos including Anglia Ruskin University, University for the Creative Arts, Webster University, IC University of Applied Sciences, Beykoz University, Capilano University, LUT University, University of Niagara Falls, University of Europe, University of East Anglia, Eton College, and Halic University. Implemented responsive 4-column grid layout with interactive hover animations, country-specific color-coded badges, and staggered entrance effects covering institutions from UK, USA, Netherlands, Turkey, Canada, Finland, and Germany.
- **June 24, 2025 - Responsive Logo Grid with Advanced Hover Animations**: Implemented comprehensive responsive grid system (1-6 columns) with advanced 3D hover effects including scale transforms, perspective rotations, and spring physics. Added animated background patterns, shimmer effects, floating particles (ping/bounce), color-coded country badges, drop shadow transitions, and staggered entrance animations. Enhanced with Framer Motion spring animations, dynamic color themes per country, and smooth typography transitions for professional interactive experience.
- **June 24, 2025 - Complete University Logo Replacement**: Replaced all previous university logos with 12 new authentic partner logos including Southampton Solent University, University of South Wales, QA Partnership, Ulster University, University of Applied Sciences Europe, Southern Cross Institute, Berlin School of Business & Innovation, Arden University Berlin, Avila University, IBAT College Dublin, Skills Australia Institute, and Canterbury Christ Church University. Updated all asset imports and university data while maintaining advanced hover animations and responsive grid layout.
- **June 24, 2025 - University Logos Complete Removal**: Removed all university partner logos and grid display from the "Our Global University Partners" section. Section now contains only the heading, descriptive text, and call-to-action without any visual logo elements for minimal clean presentation.
- **June 24, 2025 - Auto-Sliding University Logo Animation**: Implemented cool auto-sliding linear animation for university partners section with 10 new authentic logos including Southampton Solent University, University of South Wales, QA Partnership, Ulster University, University of Applied Sciences Europe, Southern Cross Institute, Berlin School of Business & Innovation, Arden University Berlin, Avila University, and IBAT College Dublin. Features dual animation systems: auto-sliding carousel with progress indicators (3-second intervals) and continuous linear animation strip (20-second loop) with gradient overlays, statistics display, and interactive hover effects.
- **June 24, 2025 - 3-Row Logo Grid Layout**: Converted university partners section from sliding animations to static 3-row grid layout. Row 1 displays 4 logos, Row 2 and 3 each display 3 logos with staggered entrance animations, hover scale effects, and clean gray background containers. Maintains professional presentation while showing all 10 authentic university partner logos simultaneously.
- **June 24, 2025 - Expanded University Partners Grid**: Added 12 additional university logos to create comprehensive 6-row grid displaying 22 total partners including Skills Australia Institute, Canterbury Christ Church University, Concordia University, University of Gloucestershire, Ulster University (new logo), University of Northampton, Bangor University, University Canada West, Kadir Has University, and The University of Law. Updated statistics to reflect 300+ Universities and 20+ Countries. Layout maintains 4-column grid structure across 5 rows plus centered 2-column final row.
- **June 24, 2025 - Comprehensive University Network Expansion**: Added 10 additional authentic university logos to create extensive 8-row grid displaying 32 total partner institutions including De Montfort University Dubai, GBS Global Applied Knowledge, Abertay University, Heriot-Watt University, Bahçeşehir University, College de Paris, LIM College, GUS Medical & Veterinary Schools, Herzing University, and IC University of Applied Sciences. Expanded global coverage to include UAE, Scotland, Caribbean, and enhanced presence in existing countries. Updated statistics to 350+ Universities and 25+ Countries with complete 4-column grid layout across 8 rows.
- **June 24, 2025 - Final University Partners Expansion**: Added 10 final authentic university logos to create comprehensive 11-row grid displaying 42 total partner institutions including Beykoz University, Capilano University, LUT University, University of Niagara Falls Canada, University of Europe for Applied Sciences, Hartpury University, Eton College, Halic University, LAB University of Applied Sciences, and Teesside University. Expanded coverage to include Finland and enhanced presence in Turkey, Canada, UK, and Germany. Updated statistics to 400+ Universities and 30+ Countries with complete grid layout featuring 10 rows of 4 logos plus final row of 2 centered logos.
- **June 24, 2025 - Ultimate University Network Completion**: Added 6 additional authentic university logos to create comprehensive 12-row grid displaying 48 total partner institutions including Leeds Trinity University, Gisma University of Applied Sciences, Fanshawe College, Anglia Ruskin University, University for the Creative Arts, and Webster University. Implemented uniform logo dimensions (h-16 w-32) across all universities, reduced padding from p-3 to p-2, and changed border radius from rounded-xl to rounded-lg for consistent visual presentation. Updated statistics to 450+ Universities and 35+ Countries with complete 12-row 4-column grid layout.
- **June 24, 2025 - Clean 6-Column Grid Layout**: Redesigned university partners section with modern clean layout displaying 6 logos per row across 8 rows total. Implemented enhanced white card containers with subtle shadows, refined hover animations with vertical lift effect, optimized logo dimensions (h-14 w-28), increased padding and gaps for better spacing, and staggered entrance animations with progressive delays for smooth visual flow.
- **June 24, 2025 - Country Labels Integration**: Added country name labels below each university logo using small gray badges to clearly identify the geographical location of each partner institution. Enhanced card layout with flex-col structure to accommodate logo and country label positioning with proper spacing and visual hierarchy.
- **June 24, 2025 - Strategic Country Organization**: Reorganized university partners array to prioritize UK institutions first (14 universities), followed by Wales (2), Scotland (2), then other countries in sequence: Germany (5), Canada (5), USA (4), Australia (2), Turkey (4), Netherlands (2), Finland (2), Ireland (1), France (1), UAE (1), and Caribbean (1). This strategic ordering emphasizes primary destination preferences while maintaining comprehensive global coverage.
- **June 24, 2025 - Section Reordering**: Moved "Our Global University Partners" section above "Our Office Locations" in home page flow to prioritize display of international partnerships before local office information. Updated page sequence: Hero → Stats Banner → IELTS → Countries → University Partners → Office Locations → Footer.
- **June 24, 2025 - Statistics Removal**: Removed statistics cards section (450+ Universities, 35+ Countries, 95% Success Rate, 10K+ Students) from university partners section for cleaner, more focused presentation without redundant numerical displays.
- **June 24, 2025 - Hero Tagline Addition**: Added tagline "Your Gateway to Global Education" above "Dedication to Education" in hero section with elegant typography and smooth animations. Enhanced visual hierarchy with proper spacing and staggered animation delays for better user engagement.
- **June 24, 2025 - Student Journey Timeline**: Created comprehensive 8-step study abroad journey timeline with alternating left-right layout, interactive cards, detailed deliverables for each phase, duration estimates, and gradient timeline connector. Features include consultation, course selection, test preparation, documentation, applications, admissions, visa processing, and pre-departure phases with total journey duration of 6-12 months.
- **June 24, 2025 - Real-Time Consultation Booking Calendar**: Implemented comprehensive booking system with interactive calendar, time slot selection, consultation type options, office location selection, and complete form handling. Features include 30-day availability calendar (excluding Sundays), 18 daily time slots, 6 consultation types, 5 office locations including online option, form validation, booking confirmation, and success state management. Positioned strategically after student journey timeline to capture interested prospects.

## Changelog

```
Changelog:
- June 20, 2025. Initial setup and hero section redesign
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```