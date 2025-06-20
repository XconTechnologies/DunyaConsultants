import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import AudienceSection from "@/components/audience-section";
import IeltsSection from "@/components/ielts-section";
import ProcessSection from "@/components/process-section";
import OfficeLocations from "@/components/office-locations";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
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
      <OfficeLocations />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
