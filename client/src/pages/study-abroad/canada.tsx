import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function StudyAbroadCanada() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-white to-red-700 text-gray-900 pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Study in <span className="text-red-600">Canada</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700">
              Quality education with immigration opportunities in a welcoming country
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're preparing comprehensive information about studying in Canada. 
              Please check back soon or contact us for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}