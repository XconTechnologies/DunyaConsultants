import { lazy, Suspense, useEffect } from "react";
import Navigation from "@/components/navigation";
import StatsBanner from "@/components/stats-banner";
import ScrollProgress from "@/components/scroll-progress";
import Footer from "@/components/footer";
import { setStaticPageMeta } from "@/lib/seo";

// Lazy load ALL heavy components for better performance
const AboutCompany = lazy(() => import("@/components/about-company"));
const BranchesCarousel = lazy(() => import("@/components/branches-carousel"));
const IeltsSection = lazy(() => import("@/components/ielts-section"));
const CountriesSection = lazy(() => import("@/components/countries-section"));
const AccreditationSection = lazy(() => import("@/components/accreditation-section"));
const ConsultationBookingSection = lazy(() => import("@/components/consultation-booking-section"));
const UniversityPartnersSection = lazy(() => import("@/components/university-partners-section"));
// const EventsSection = lazy(() => import("@/components/events-section"));
const BlogsCarouselSection = lazy(() => import("@/components/blogs-carousel-section"));
const BusinessProposalsSection = lazy(() => import("@/components/business-proposals-section"));

// Loading skeleton component
const SectionSkeleton = () => (
  <div className="py-16 lg:py-24">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    setStaticPageMeta(
      'Home',
      'Your trusted partner for studying abroad. Expert visa consultation, university applications, test preparation, and end-to-end support for international students from Pakistan.'
    );
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <StatsBanner />
      
      <Suspense fallback={<SectionSkeleton />}>
        <AboutCompany />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <IeltsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <BranchesCarousel />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <CountriesSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <AccreditationSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ConsultationBookingSection />
      </Suspense>
      
      
      <Suspense fallback={<SectionSkeleton />}>
        <UniversityPartnersSection />
      </Suspense>
      
      {/* <Suspense fallback={<SectionSkeleton />}>
        <EventsSection />
      </Suspense> */}
      
      <Suspense fallback={<SectionSkeleton />}>
        <BlogsCarouselSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <BusinessProposalsSection />
      </Suspense>
      
      <Footer />
    </div>
  );
}
