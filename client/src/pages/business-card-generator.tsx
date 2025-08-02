import BusinessCardGenerator from "@/components/business-card-generator";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function BusinessCardGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-24">
        <BusinessCardGenerator />
      </div>
      <Footer />
    </div>
  );
}