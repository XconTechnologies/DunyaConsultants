import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import AudienceSection from "@/components/audience-section";
import IeltsSection from "@/components/ielts-section";
import ProcessSection from "@/components/process-section";
import CountriesSection from "@/components/countries-section";
import EventsSection from "@/components/events-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import UniversityPartnersSection from "@/components/university-partners-section";
import CostCalculatorSection from "@/components/cost-calculator-section";
import GoogleReviewsSection from "@/components/google-reviews-section";
import OfficeLocationsSection from "@/components/office-locations-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <AudienceSection />
      <IeltsSection />
      <ProcessSection />
      <CountriesSection />
      <EventsSection />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <UniversityPartnersSection />
      <CostCalculatorSection />
      <OfficeLocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
