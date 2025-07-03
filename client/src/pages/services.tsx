import Navigation from "@/components/navigation";
import ServicesDetailSection from "@/components/services-detail-section";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <div className="pt-20">
        <ServicesDetailSection />
      </div>
      <Footer />
    </div>
  );
}