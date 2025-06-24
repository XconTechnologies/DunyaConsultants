import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import IeltsSection from "@/components/ielts-section";
import CountriesSection from "@/components/countries-section";
import StudentJourneyTimeline from "@/components/student-journey-timeline";
import OfficeLocationsSection from "@/components/office-locations-section";
import StatsBanner from "@/components/stats-banner";
import UniversityPartnersSection from "@/components/university-partners-section";
import FloatingCTA from "@/components/floating-cta";
import ScrollProgress from "@/components/scroll-progress";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <StatsBanner />
      <IeltsSection />
      <CountriesSection />
      <StudentJourneyTimeline />
      <UniversityPartnersSection />
      <OfficeLocationsSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
