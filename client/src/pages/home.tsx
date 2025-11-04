import { lazy, Suspense, useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import StatsBanner from "@/components/stats-banner";
import ScrollProgress from "@/components/scroll-progress";
import Footer from "@/components/footer";
import { setStaticPageMeta } from "@/lib/seo";
import AboutCompany from "@/components/about-company";

// Lazy load only below-the-fold components for better LCP
const BranchesCarousel = lazy(() => import("@/components/branches-carousel"));
const UpcomingEventsSection = lazy(() => import("@/components/upcoming-events-section"));
const IeltsSection = lazy(() => import("@/components/ielts-section"));
const CountriesSection = lazy(() => import("@/components/countries-section"));
const AccreditationSection = lazy(() => import("@/components/accreditation-section"));
const ConsultationBookingSection = lazy(() => import("@/components/consultation-booking-section"));
const UniversityPartnersSection = lazy(() => import("@/components/university-partners-section"));
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
  // Defer Navigation and ScrollProgress to improve LCP
  const [showDeferredComponents, setShowDeferredComponents] = useState(false);

  useEffect(() => {
    setStaticPageMeta(
      'Home',
      'Your trusted partner for studying abroad. Expert visa consultation, university applications, test preparation, and end-to-end support for international students from Pakistan.'
    );

    // Defer Navigation and ScrollProgress hydration until after initial render
    // This reduces initial JavaScript execution time and improves LCP
    const deferTimer = typeof requestIdleCallback !== 'undefined'
      ? requestIdleCallback(() => setShowDeferredComponents(true))
      : setTimeout(() => setShowDeferredComponents(true), 100);

    return () => {
      if (typeof requestIdleCallback !== 'undefined') {
        cancelIdleCallback(deferTimer as number);
      } else {
        clearTimeout(deferTimer as number);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {showDeferredComponents && (
        <>
          <ScrollProgress />
          <Navigation />
        </>
      )}
      {!showDeferredComponents && (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50" />
      )}
      <StatsBanner />
      <AboutCompany />
      
      <Suspense fallback={<SectionSkeleton />}>
        <IeltsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <BranchesCarousel />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ConsultationBookingSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <CountriesSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <AccreditationSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <UniversityPartnersSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <UpcomingEventsSection />
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
