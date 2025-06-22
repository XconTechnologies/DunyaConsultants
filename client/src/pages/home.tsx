import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AudienceSectionNew from "@/components/audience-section-new";
import IeltsSection from "@/components/ielts-section";
import CountriesSection from "@/components/countries-section";
import AccreditationsSection from "@/components/accreditations-section";
import MobileProcessSection from "@/components/mobile-process-section";
import StatsBanner from "@/components/stats-banner";
import AchievementsSection from "@/components/achievements-section";
import StudentJourneyVisualization from "@/components/student-journey-visualization";
import SuccessStoriesCarousel from "@/components/success-stories-carousel";
import FloatingCTA from "@/components/floating-cta";
import ScrollProgress from "@/components/scroll-progress";

import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import UniversityPartnersSection from "@/components/university-partners-section";

import GoogleReviewsSection from "@/components/google-reviews-section";
import OfficeLocationsSection from "@/components/office-locations-section";
import ContactInfoSection from "@/components/contact-info-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <StatsBanner />
      <AchievementsSection />
      <AudienceSectionNew />
      <IeltsSection />
      <CountriesSection />
      <StudentJourneyVisualization />
      <MobileProcessSection />
      <AccreditationsSection />
      <SuccessStoriesCarousel />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <UniversityPartnersSection />
      <OfficeLocationsSection />
      <ContactSection />
      <ContactInfoSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
