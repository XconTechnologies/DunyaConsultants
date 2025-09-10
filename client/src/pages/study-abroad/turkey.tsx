import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, DollarSign, FileText, GraduationCap, Globe, MapPin, Calendar, Calculator, FileCheck, Users, Zap, Building2, Download } from "lucide-react";
import SmartToolsPopup from "@/components/SmartToolsPopup";
import ApplicationForm from "@/components/ApplicationForm";
import CalendlyButton from "@/components/calendly-button";
import ConsultationFormPopup from "@/components/consultation-form-popup";

export default function StudyAbroadTurkey() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const downloadChecklist = () => {
    const checklistText = `TURKEY STUDY ABROAD DOCUMENT CHECKLIST

BACHELOR PROGRAM REQUIREMENTS:
• Matric Degree and Result card
• Intermediate Degree and Result card
• Passport
• Photo
• Parent names
• Email address
• Contact number
Note: For those with pending results can share hope certificate/predicted grades.

MASTER PROGRAM REQUIREMENTS:
• Bachelor Degree
• Bachelor Transcript
• Inter and Matric Degree
• Passport
• Photo
• Parent names
• Email address
• Contact number
Note: For those with pending degree can share Provisional certificate/Completion certificate.

FEES INFORMATION:
• Bachelor fee: $3,500-$6,000 per year (depending on University and program)
• Bachelor initial deposit: $1,000-$1,500 (depends on university)
• Master whole program fee: $3,000-$6,000 (depending on University and programs)
• Master initial deposit: $1,000-$1,500 (depends on university)

Contact Information:
UAN: (+92) 304 1110947
Email: info@dunyaconsultants.com
Address: Alif Tower, Sargodha

© Dunya Consultants - Your trusted study abroad partner`;

    const blob = new Blob([checklistText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Turkey-Study-Documents-Checklist.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const bachelorDocuments = [
    "Matric Degree and Result card",
    "Intermediate Degree and Result card", 
    "Passport",
    "Photo",
    "Parent names",
    "Email address",
    "Contact number"
  ];

  const masterDocuments = [
    "Bachelor Degree",
    "Bachelor Transcript",
    "Inter and Matric Degree",
    "Passport",
    "Photo",
    "Parent names",
    "Email address",
    "Contact number"
  ];

  const whyChooseTurkey = [
    "Bridge between Europe and Asia",
    "Affordable tuition and living costs", 
    "Rich cultural and historical heritage",
    "Growing international recognition",
    "Turkish government scholarships",
    "Modern university facilities",
    "Diverse academic programs",
    "Strategic geographical location",
    "Welcoming to international students",
    "Gateway to European and Asian markets"
  ];

  const visaRequirements = [
    { title: "Student Residence Permit", description: "Required within 30 days of arrival in Turkey" },
    { title: "University Acceptance", description: "Official acceptance letter from Turkish university" },
    { title: "Financial Proof", description: "Bank statement showing sufficient funds (approx. $500/month)" },
    { title: "Health Insurance", description: "Valid health insurance for duration of stay" },
    { title: "Accommodation Proof", description: "Dormitory registration or rental agreement" }
  ];

  const englishRequirements = [
    { test: "TOEFL", ug: "61-80", pg: "80-90" },
    { test: "IELTS", ug: "5.5-6.0", pg: "6.0-6.5" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Study in <span className="text-white">Turkey</span>
            </h1>
            <p className="text-lg lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Experience quality education at the crossroads of Europe and Asia with 200+ universities and rich cultural heritage
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <GraduationCap className="w-5 h-5 mr-2" />
                200+ Universities
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Building2 className="w-5 h-5 mr-2" />
                Cultural Bridge
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Affordable Education
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 w-full sm:w-auto px-6 py-3 text-lg font-semibold"
                size="lg"
                showIcon={false}
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={() => setIsPopupOpen(true)}
              >
                Connect now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="bg-white border border-gray-200 rounded p-3 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  <div className="bg-red-50 p-2 rounded mr-3">
                    <DollarSign className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">$3,000 - $6,000</p>
                    <p className="text-xs text-gray-600">Annual Tuition Fee</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded p-3 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  <div className="bg-gray-50 p-2 rounded mr-3">
                    <FileText className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">$500/month</p>
                    <p className="text-xs text-gray-600">Living Cost</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded p-3 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-50 p-2 rounded mr-3">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">200+</p>
                    <p className="text-xs text-gray-600">Universities Available</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Tuition Fee Details */}
            <Card className="mb-6 bg-gray-50 border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg md:text-xl text-[#1D50C9] flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Tuition Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center hover:shadow-sm transition-shadow">
                    <h4 className="font-medium text-blue-900 text-xs mb-1">Bachelor Programs</h4>
                    <p className="text-lg font-bold text-[#1D50C9]">$3,500 - $6,000</p>
                    <p className="text-xs text-gray-500">per year</p>
                    <p className="text-xs text-blue-600 mt-1">Initial Deposit: $1,000 - $1,500</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:shadow-sm transition-shadow">
                    <h4 className="font-medium text-gray-900 text-xs mb-1">Master Programs</h4>
                    <p className="text-lg font-bold text-gray-600">$3,000 - $6,000</p>
                    <p className="text-xs text-gray-500">whole program</p>
                    <p className="text-xs text-gray-600 mt-1">Initial Deposit: $1,000 - $1,500</p>
                  </div>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-yellow-800 text-xs"><strong>Note:</strong> Fees depend on University and program. Initial deposit varies by university.</p>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Turkey */}
            <Card className="mb-6 bg-gray-50 border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg md:text-xl text-[#1D50C9] flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Why Study in Turkey?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {whyChooseTurkey.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-white rounded border border-gray-200 hover:shadow-sm transition-shadow">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Visa Requirements */}
            <Card className="mb-6 bg-gray-50 border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg md:text-xl text-[#1D50C9] flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Visa Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {visaRequirements.map((req, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded p-3 hover:shadow-sm transition-shadow">
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">{req.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{req.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                  <h4 className="font-medium text-[#1565c0] mb-2 text-xs">Important Note:</h4>
                  <p className="text-blue-700 text-xs">Turkey offers extensive scholarship programs including Türkiye Scholarships. Students can work part-time with proper permits.</p>
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
                  Smart Tools for Turkey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SmartToolsPopup 
                  country="Turkey" 
                />
              </CardContent>
            </Card>
            
            {/* Documents Checklist */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-[text-[#1D50C9]] flex items-center">
                  <FileCheck className="w-5 h-5 mr-2" />
                  Documents Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="bachelor" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="bachelor">Bachelor</TabsTrigger>
                    <TabsTrigger value="master">Master</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="bachelor" className="mt-4">
                    <ul className="space-y-2">
                      {bachelorDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{doc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                      <p className="text-blue-700 text-xs"><strong>Note:</strong> For those with pending results can share hope certificate/predicted grades.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="master" className="mt-4">
                    <ul className="space-y-2">
                      {masterDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{doc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                      <p className="text-blue-700 text-xs"><strong>Note:</strong> For those with pending degree can share Provisional certificate/Completion certificate.</p>
                    </div>
                  </TabsContent>
                </Tabs>
                
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
                
                <ApplicationForm country="Turkey">
                  <Button className="w-full bg-[#1D50C9] hover:bg-[#1D50C9] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </ApplicationForm>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/923261111947?text=Hello, I want to start my application for studying in Turkey. Please guide me through the process.')}
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
      
      {/* Consultation Form Popup */}
      <ConsultationFormPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}