import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AudienceSectionNew from "@/components/audience-section-new";
import DocumentChecklistGenerator from "@/components/document-checklist-generator";
import IeltsSection from "@/components/ielts-section";
import CountriesSection from "@/components/countries-section";
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
      <AudienceSectionNew />
      <DocumentChecklistGenerator />
      <IeltsSection />
      <CountriesSection />
      <UniversityPartnersSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
