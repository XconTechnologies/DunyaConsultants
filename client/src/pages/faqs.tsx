import { useEffect } from "react";
import Navigation from "@/components/navigation";
import FAQsSection from "@/components/faqs-section";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import { setStaticPageMeta } from "@/lib/seo";

export default function FAQsPage() {
  useEffect(() => {
    setStaticPageMeta(
      "FAQs",
      "Find answers to frequently asked questions about studying abroad from Pakistan. Get expert guidance on visas, applications, universities and student life."
    );
  }, []);

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