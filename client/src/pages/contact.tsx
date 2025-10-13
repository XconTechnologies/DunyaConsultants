import { useEffect } from "react";
import Navigation from "@/components/navigation";
import ContactUsSection from "@/components/contact-us-section";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import { setStaticPageMeta } from "@/lib/seo";

export default function ContactPage() {
  useEffect(() => {
    setStaticPageMeta(
      "Contact Us",
      "Get in touch with Dunya Consultants for expert study abroad guidance. Contact our visa consultants for university admissions, visa applications, and IELTS preparation support."
    );
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <ContactUsSection />
      <Footer />
    </div>
  );
}