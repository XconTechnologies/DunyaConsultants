import Navigation from "@/components/navigation";
import ScholarshipsSection from "@/components/scholarships-section";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <div className="pt-20">
        <ScholarshipsSection />
      </div>
      <Footer />
    </div>
  );
}