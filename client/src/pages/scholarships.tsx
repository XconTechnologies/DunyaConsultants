import { useEffect } from "react";
import Navigation from "@/components/navigation";
import ScholarshipsSection from "@/components/scholarships-section";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import { setStaticPageMeta } from "@/lib/seo";

export default function ScholarshipsPage() {
  useEffect(() => {
    setStaticPageMeta(
      "Scholarships",
      "Discover scholarship opportunities for Pakistani students studying abroad. Find fully-funded and partial scholarships for USA, UK, Canada, Australia and more destinations."
    );
  }, []);

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