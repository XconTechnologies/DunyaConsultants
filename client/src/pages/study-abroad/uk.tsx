import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, DollarSign, FileText, GraduationCap, Globe, MapPin, Calendar, Calculator, FileCheck, Users, Zap, Heart, Download } from "lucide-react";
import SmartToolsPopup from "@/components/SmartToolsPopup";
import ApplicationForm from "@/components/ApplicationForm";

export default function StudyAbroadUK() {
  const [selectedProgram, setSelectedProgram] = useState("undergraduate");

  const downloadChecklist = () => {
    const checklistText = `UK STUDY ABROAD DOCUMENT CHECKLIST

Required Documents:
• All Educational Documents
• Statement of Purpose
• IELTS (if Applicable)
• 2 Recommendation Letters
• Experience Certificate
• Passport
• Europass CV

Contact Information:
UAN: (+92) 304 1110947
Email: info@dunyaconsultants.com
Address: Alif Tower, Sargodha

© Dunya Consultants - Your trusted study abroad partner`;

    const blob = new Blob([checklistText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'UK-Study-Documents-Checklist.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const documentChecklist = [
    "All Educational Documents",
    "Statement of Purpose", 
    "IELTS (if Applicable)",
    "2 Recommendation Letters",
    "Experience Certificate",
    "Passport",
    "Europass CV"
  ];

  const whyChooseUK = [
    "Cost-effective education",
    "Shorter and intense UG and PG programs", 
    "Work-study Programs",
    "No language barrier",
    "Moderate weather",
    "Highest visa ratio for Pakistani students",
    "Cultural diversity",
    "Affordable accommodations",
    "Relatively, simple visa process",
    "Numerous historical and cultural places to explore",
    "Safe, and supportive country with high quality of life"
  ];

  const visaRequirements = [
    { title: "Original Passport", description: "Valid passport for duration of stay" },
    { title: "CAS", description: "Confirmation of acceptance for study" },
    { title: "Medical Certificate", description: "Tuberculosis (TB) test results required for Pakistani applicants" },
    { title: "Birth Certificate", description: "Proof of relationship to sponsor (Birth Certificate, FRC)" },
    { title: "Proof of Finances", description: "Financial evidence to support your studies" }
  ];

  const englishRequirements = [
    { test: "IELTS", ug: "6.0 with no less than 5.5", pg: "6.5 with no less than 6.0" },
    { test: "PTE", ug: "59 minimum each (varies by university)", pg: "59 minimum each" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-8 text-white">
              Study in <span className="text-white">UK</span>
            </h1>
            <p className="text-lg lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Experience world-renowned education with 166 universities offering over 50,000+ programs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <GraduationCap className="w-5 h-5 mr-2" />
                166 Universities
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Highest Visa Ratio
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                50,000+ Programs
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      <DollarSign className="w-6 h-6 text-[#1D50C9]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">£11,000 - £17,000</p>
                      <p className="text-sm text-gray-600">Annual Tuition Fee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-green-50 p-3 rounded-lg mr-4">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">IELTS 6.0+</p>
                      <p className="text-sm text-gray-600">English Requirement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-purple-50 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">166</p>
                      <p className="text-sm text-gray-600">Universities Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* English Requirements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[text-[#1D50C9]] flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  English Language Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {englishRequirements.map((req, index) => (
                    <Card key={index} className="border-2">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-center">{req.test}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                            <span className="font-medium">Undergraduate:</span>
                            <span className="text-[text-[#1D50C9]] font-semibold">{req.ug}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                            <span className="font-medium">Postgraduate:</span>
                            <span className="text-[text-[#1D50C9]] font-semibold">{req.pg}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tuition Fee Details */}
            <Card className="mb-8 bg-gray-50 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Tuition Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-8 text-center">
                      <h4 className="font-semibold text-gray-700 mb-3">Undergraduate Programs</h4>
                      <p className="text-4xl font-bold text-[#1D50C9] mb-2">£11,000 - £17,000</p>
                      <p className="text-gray-500">per year</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-8 text-center">
                      <h4 className="font-semibold text-gray-700 mb-3">Graduate Programs</h4>
                      <p className="text-4xl font-bold text-[#1D50C9] mb-2">£11,000 - £17,000</p>
                      <p className="text-gray-500">per year</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose UK */}
            <Card className="mb-8 bg-gray-50 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Why Choose To Study In UK?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyChooseUK.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                      <div className="bg-green-50 p-1 rounded-full">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Visa Requirements */}
            <Card className="mb-8 bg-gray-50 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Study Visa Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {visaRequirements.map((req, index) => (
                    <Card key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">{req.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{req.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-[#1565c0] mb-2">TB Test Centers in Pakistan:</h4>
                  <ul className="list-disc list-inside text-blue-700 space-y-1">
                    <li>AMC (Approved Medical Centre)</li>
                    <li>Dr. Arshad Health Associates</li>
                    <li>IOM (International Organization for Migration)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>


          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            
            {/* Smart Tools */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-[text-[#1D50C9]] flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Smart Tools for UK
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SmartToolsPopup 
                  country="UK" 
                />
              </CardContent>
            </Card>
            
            {/* Documents Checklist */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-[text-[#1D50C9]] flex items-center">
                  <FileCheck className="w-5 h-5 mr-2" />
                  Documents Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documentChecklist.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={downloadChecklist}
                  className="w-full mt-6 text-[text-[#1D50C9]] hover:bg-[#0f3ba8] text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Checklist
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[text-[#1D50C9]] flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Expert Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">UAN Number</p>
                  <p className="text-xl font-bold text-[text-[#1D50C9]]">(+92) 304 1110947</p>
                </div>
                
                <ApplicationForm country="UK">
                  <Button className="w-full bg-[#1D50C9] hover:bg-[#1D50C9] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </ApplicationForm>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/923041110947?text=Hello, I want to start my application for studying in UK. Please guide me through the process.')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Start Your Application
                </Button>
                
                <div className="text-center text-sm text-gray-600">
                  <p>📧 info@dunyaconsultants.com</p>
                  <p>📍 Alif Tower, Sargodha</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}