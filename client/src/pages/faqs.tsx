import Navigation from "@/components/navigation";
import FAQsSection from "@/components/faqs-section";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <div className="pt-20">
        <FAQsSection />
      </div>
      <Footer />
    </div>
  );
}