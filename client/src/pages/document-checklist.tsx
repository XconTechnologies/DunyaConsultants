import { useEffect } from "react";
import Navigation from "@/components/navigation";
import DocumentChecklistGenerator from "@/components/document-checklist-generator";
import Footer from "@/components/footer";
import { setStaticPageMeta } from "@/lib/seo";

export default function DocumentChecklist() {
  useEffect(() => {
    setStaticPageMeta(
      "Document Checklist",
      "Generate a personalized document checklist for your study abroad application. Ensure you have all required documents for visa and university applications."
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <DocumentChecklistGenerator />
      <Footer />
    </div>
  );
}