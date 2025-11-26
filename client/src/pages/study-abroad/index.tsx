import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { setStaticPageMeta } from "@/lib/seo";
import { Link } from "wouter";
import {
  GraduationCap,
  Globe,
  MapPin,
  Users,
  Award,
  Briefcase,
  Building,
  Star,
  Sparkles,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";

const destinations = [
  {
    name: "USA",
    slug: "usa",
    image: "/objects/uploads/study-in-the-usa_1763961982261_811b2918.webp",
    description: "World-class education with 5,000+ universities, F1 visa support, and post-study work opportunities through OPT.",
    tuition: "$15K-50K/year",
    universities: "5,000+",
    highlight: "Most Popular",
    highlightColor: "bg-orange-500"
  },
  {
    name: "UK",
    slug: "uk",
    image: "/attached_assets/study-in-the-uk_1764135296704.jpg",
    description: "Prestigious British education with world-renowned universities like Oxford and Cambridge.",
    tuition: "£10K-38K/year",
    universities: "160+",
    highlight: "Top Ranked",
    highlightColor: "bg-[#1D50C9]"
  },
  {
    name: "Canada",
    slug: "canada",
    image: "/uploads/study-in-canada.jpg",
    description: "Welcoming immigration policies, high quality of life, and pathway to permanent residency.",
    tuition: "CAD 15K-35K/year",
    universities: "100+",
    highlight: "PR Pathway",
    highlightColor: "bg-green-600"
  },
  {
    name: "Australia",
    slug: "australia",
    image: "/uploads/study-in-australia.jpg",
    description: "World-class education with post-study work visa and excellent quality of life.",
    tuition: "AUD 20K-45K/year",
    universities: "43+",
    highlight: "Work Rights",
    highlightColor: "bg-[#1D50C9]"
  },
  {
    name: "Finland",
    slug: "finland",
    image: "/attached_assets/study-in-finland_1764135342075.jpg",
    description: "Free or low-cost education with innovative teaching methods and high living standards.",
    tuition: "€0-18K/year",
    universities: "40+",
    highlight: "Low Cost",
    highlightColor: "bg-orange-500"
  },
  {
    name: "Belgium",
    slug: "belgium",
    image: "/uploads/study-in-belgium.jpg",
    description: "Heart of Europe with affordable tuition, multicultural environment, and EU job market access.",
    tuition: "€900-8K/year",
    universities: "15+",
    highlight: "Affordable",
    highlightColor: "bg-green-600"
  },
  {
    name: "Turkey",
    slug: "turkey",
    image: "/uploads/study-in-turkey.jpg",
    description: "Bridge between East and West with fully-funded Türkiye Scholarships and rich cultural heritage.",
    tuition: "€1K-7K/year",
    universities: "200+",
    highlight: "Full Scholarships",
    highlightColor: "bg-orange-500"
  }
];

const stats = [
  { icon: Users, value: "5,000+", label: "Students Placed" },
  { icon: Building, value: "200+", label: "University Partners" },
  { icon: Globe, value: "15+", label: "Countries" },
  { icon: Award, value: "95%", label: "Visa Success Rate" }
];

export default function StudyAbroadIndex() {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  
  useEffect(() => {
    setStaticPageMeta(
      "Study Abroad Destinations | Dunya Consultants",
      "Explore top study abroad destinations including USA, UK, Canada, Australia, Finland, Belgium, and Turkey. Get expert guidance for your international education journey.",
      "/uploads/study-abroad-destinations.jpg"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0d2a5e] text-white pt-32 pb-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Icon with Glow Effect */}
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-xl rounded-3xl mb-6 border border-white/20 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl group-hover:scale-110 transition-transform duration-500"></div>
              <Globe className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Study Abroad <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-pulse">Destinations</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              Explore World-Class Education Opportunities Across the Globe
            </p>
            
            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                200+ University Partners
              </Badge>
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                15+ Countries
              </Badge>
              <Badge variant="secondary" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/15 backdrop-blur-md text-white border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                95% Visa Success Rate
              </Badge>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 hover:scale-105 px-8 py-4 text-lg font-semibold shadow-2xl transition-all duration-300"
                size="lg"
                showIcon={false}
              />
              <Button
                onClick={() => setShowConsultationForm(true)}
                className="bg-[#1D50C9] hover:bg-[#1845B3] text-white hover:scale-105 px-8 py-4 text-lg font-semibold shadow-2xl transition-all duration-300 rounded-full"
                size="lg"
                data-testid="connect-now-button"
              >
                Connect now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="group border-0 shadow-xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardContent className="p-4 sm:p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-[#1D50C9]">Destination</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect country for your educational journey. Each destination offers unique opportunities and experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <Link key={index} href={`/study-abroad/${destination.slug}`}>
              <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer h-full bg-white hover:-translate-y-2" data-testid={`destination-card-${destination.slug}`}>
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={`Study in ${destination.name}`}
                    className="w-full max-w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop`;
                    }}
                  />
                  
                  {/* Highlight Badge */}
                  <Badge className={`absolute top-4 right-4 ${destination.highlightColor} text-white px-3 py-1 text-xs font-semibold shadow-lg`}>
                    {destination.highlight}
                  </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    Study in {destination.name}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  
                  {/* Stats Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D50C9]/10 to-[#1845B3]/10 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-[#1D50C9]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Tuition</p>
                        <p className="text-sm font-semibold text-gray-900">{destination.tuition}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center">
                        <Building className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Universities</p>
                        <p className="text-sm font-semibold text-gray-900">{destination.universities}</p>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-4">
                    <Button className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] hover:from-[#1845B3] hover:to-[#0d2a5e] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                      Explore {destination.name}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0d2a5e] overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
          <CardContent className="p-8 sm:p-12 text-center relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl mb-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Destination is Right for You?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert counselors will help you choose the perfect destination based on your academic goals, budget, and career aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                text="Get Free Counseling"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                size="lg"
                showIcon={false}
              />
              <Link href="/contact">
                <Button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />

      {/* Consultation Form Popup */}
      <CompactConsultationForm
        isOpen={showConsultationForm}
        onClose={() => setShowConsultationForm(false)}
      />
    </div>
  );
}
