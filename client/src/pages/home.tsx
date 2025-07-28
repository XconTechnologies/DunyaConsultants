import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutCompany from "@/components/about-company";
import IeltsSection from "@/components/ielts-section";
import CountriesSection from "@/components/countries-section";
import ConsultationBookingCalendar from "@/components/consultation-booking-calendar";
import EventsSection from "@/components/events-section";

import StatsBanner from "@/components/stats-banner";
import UniversityPartnersSection from "@/components/university-partners-section";
import BusinessProposalsSection from "@/components/business-proposals-section";
import FloatingCTA from "@/components/floating-cta";
import ScrollProgress from "@/components/scroll-progress";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutCompany />
      <StatsBanner />
      <IeltsSection />
      <CountriesSection />
      <ConsultationBookingCalendar />
      <UniversityPartnersSection />
      <EventsSection />
      <BusinessProposalsSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
