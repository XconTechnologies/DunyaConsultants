import Navigation from "@/components/navigation";
import DocumentChecklistGenerator from "@/components/document-checklist-generator";
import Footer from "@/components/footer";

export default function DocumentChecklist() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <DocumentChecklistGenerator />
      <Footer />
    </div>
  );
}