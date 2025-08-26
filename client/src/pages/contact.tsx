import Navigation from "@/components/navigation";
import ContactUsSection from "@/components/contact-us-section";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <ContactUsSection />
      <Footer />
    </div>
  );
}