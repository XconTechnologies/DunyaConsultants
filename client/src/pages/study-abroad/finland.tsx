import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, DollarSign, FileText, GraduationCap, Globe, MapPin, Calendar, Calculator, FileCheck, Users, Zap, Snowflake, Download } from "lucide-react";
import SmartToolsPopup from "@/components/SmartToolsPopup";
import ApplicationForm from "@/components/ApplicationForm";

export default function StudyAbroadFinland() {
  const downloadChecklist = () => {
    const checklistText = `FINLAND STUDY ABROAD DOCUMENT CHECKLIST

Required Documents:
• Original Passport
• All Educational Documents Attested
• Degree & Transcript Copies
• IELTS / PTE / TOEFL Score Card
• Motivation Letter
• CV/Resume
• 2 Recommendation Letters

Contact Information:
UAN: (+92) 304 1110947
Email: info@dunyaconsultants.com
Address: Alif Tower, Sargodha

© Dunya Consultants - Your trusted study abroad partner`;

    const blob = new Blob([checklistText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Finland-Study-Documents-Checklist.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const documentChecklist = [
    "Original Passport",
    "All Educational Documents Attested", 
    "Degree & Transcript Copies",
    "IELTS / PTE / TOEFL Score Card",
    "Motivation Letter",
    "CV/Resume",
    "2 Recommendation Letters"
  ];

  const whyChooseFinland = [
    "High-quality education system",
    "Strong focus on research and innovation", 
    "Excellent work-life balance",
    "Beautiful natural environment",
    "Safe and peaceful country",
    "English-taught programs available",
    "EU education benefits",
    "Technology and innovation hub",
    "Free education for EU students",
    "Pathway to other Nordic countries"
  ];

  const visaRequirements = [
    { title: "Letter of Acceptance", description: "Official acceptance letter from Finnish university" },
    { title: "Financial Proof", description: "Bank statement showing €560 per month for living expenses" },
    { title: "Health Insurance", description: "Comprehensive health insurance coverage" },
    { title: "Academic Transcripts", description: "Certified copies of all academic qualifications" },
    { title: "Language Proficiency", description: "IELTS/TOEFL/PTE scores or Finnish language proficiency" }
  ];

  const englishRequirements = [
    { test: "IELTS", ug: "6.0-6.5", pg: "6.5-7.0" },
    { test: "TOEFL", ug: "80-92", pg: "92-100" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Study in <span className="text-blue-300">Finland</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-100 mb-8">
              Experience world-class education in the land of innovation with 13 universities and exceptional research opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <GraduationCap className="w-5 h-5 mr-2" />
                13 Universities
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Snowflake className="w-5 h-5 mr-2" />
                Innovation Hub
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Research Excellence
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
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <DollarSign className="w-8 h-8 bg-[#1D50C9] mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">€8,000 - €18,000</p>
                      <p className="text-gray-600">Annual Tuition Fee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 bg-[#1D50C9] mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">€560/month</p>
                      <p className="text-gray-600">Living Cost Requirement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-8 h-8 bg-[#1D50C9] mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">13</p>
                      <p className="text-gray-600">Universities Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* English Requirements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
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
                            <span className="bg-[#1D50C9] font-semibold">{req.ug}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                            <span className="font-medium">Postgraduate:</span>
                            <span className="bg-[#1D50C9] font-semibold">{req.pg}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tuition Fee Details */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Tuition Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-#1e3a8a mb-2">Bachelor's Programs</h4>
                      <p className="text-3xl font-bold bg-[#1D50C9]">€8,000 - €12,000</p>
                      <p className="text-#1a73e8">per year</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-#1e3a8a mb-2">Master's Programs</h4>
                      <p className="text-3xl font-bold bg-[#1D50C9]">€10,000 - €18,000</p>
                      <p className="text-#1a73e8">per year</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Finland */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Why Choose To Study In Finland?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyChooseFinland.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 #1D50C9 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Visa Requirements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Study Visa Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {visaRequirements.map((req, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900 mb-2">{req.title}</h4>
                      <p className="text-gray-600 text-sm">{req.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-[#1565c0] mb-2">💡 Important Note:</h4>
                  <p className="text-#1a73e8 text-sm">Finland offers excellent scholarship opportunities for international students. EU students enjoy free tuition at public universities.</p>
                </div>
              </CardContent>
            </Card>


          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            
            {/* Smart Tools */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-[#1D50C9] flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Smart Tools for Finland
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SmartToolsPopup 
                  country="Finland" 
                />
              </CardContent>
            </Card>
            
            {/* Documents Checklist */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-[#1D50C9] flex items-center">
                  <FileCheck className="w-5 h-5 mr-2" />
                  Documents Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documentChecklist.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 #1D50C9 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={downloadChecklist}
                  className="w-full mt-6 bg-[#1D50C9] hover:bg-[#0f3ba8] text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Checklist
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#1D50C9] flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Expert Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-#1e3a8a">UAN Number</p>
                  <p className="text-xl font-bold bg-[#1D50C9]">(+92) 304 1110947</p>
                </div>
                
                <ApplicationForm country="Finland">
                  <Button className="w-full bg-[#1D50C9] hover:bg-[#1845B3] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </ApplicationForm>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/923041110947?text=Hello, I want to start my application for studying in Finland. Please guide me through the process.')}
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