import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AudienceSectionNew from "@/components/audience-section-new";
import IeltsSection from "@/components/ielts-section";
import CountriesSection from "@/components/countries-section";
import MobileProcessSection from "@/components/mobile-process-section";
import StatsBanner from "@/components/stats-banner";
import UniversityPartnersSection from "@/components/university-partners-section";
import EducationJourneySection from "@/components/education-journey-section";
import FloatingCTA from "@/components/floating-cta";
import ScrollProgress from "@/components/scroll-progress";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <StatsBanner />
      <AudienceSectionNew />
      <EducationJourneySection />
      <IeltsSection />
      <CountriesSection />
      <MobileProcessSection />
      <UniversityPartnersSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
