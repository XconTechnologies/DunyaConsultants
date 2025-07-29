import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, DollarSign, FileText, GraduationCap, Globe, MapPin, Calendar, Calculator, FileCheck, Users, Zap, Leaf } from "lucide-react";

export default function StudyAbroadCanada() {
  const documentChecklist = [
    "Original Passport",
    "All Attested Educational Documents", 
    "Degree & Transcript Attested Copies",
    "IELTS / PTE / TOEFL Score Card",
    "Experience Certificate",
    "2 Recommendation Letters",
    "GRE / GMAT (Optional)"
  ];

  const whyChooseCanada = [
    "Identical Facilities As Residents",
    "3rd Rank In Life Quality Index", 
    "7 Canadian Universities rank among the top 200 universities all over the world",
    "Spouses are not the full-time students in Canada",
    "Work permit right after graduation",
    "Eligible to apply for permanent residence within 3 years",
    "No language barrier",
    "Submission of GIC (CAD 20,635) allows one to be free from worries about earning",
    "Lower cost of Living (CAD 750- CAD 1637 monthly)",
    "Pathway to the USA, France, Yukon Territory"
  ];

  const visaRequirements = [
    { title: "Official Transcripts", description: "High school Transcripts and transcripts from all post-secondary institutions" },
    { title: "GIC (CAD 20,635)", description: "Proof of student loan, bank statement for the last four months, bank draft" },
    { title: "Photos", description: "2 recent passport-size photos (date of birth should be written on the back)" },
    { title: "Marriage Documents", description: "Marriage License (photocopy)" },
    { title: "Other Certificates", description: "Medical Certificate and Biometric Information" }
  ];

  const englishRequirements = [
    { test: "IELTS", ug: "6.0-6.5", pg: "6.0-6.5" },
    { test: "PTE", ug: "60", pg: "60-65" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative bg-[#124FD3] text-white pt-24 pb-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #dc2626 0%, #ffffff 50%, #dc2626 100%)',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇨🇦</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Study in <span className="text-red-500">Canada</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-100 mb-8">
              Experience high-quality education with 223 universities and 213 colleges offering 8,000+ programs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <GraduationCap className="w-5 h-5 mr-2" />
                223 Universities
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Leaf className="w-5 h-5 mr-2" />
                3rd in Life Quality
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                8,000+ Programs
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
              <Card className="border-l-4 border-l-red-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <DollarSign className="w-8 h-8 text-red-600 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">CAD $21,100 - $36,100</p>
                      <p className="text-gray-600">Annual Tuition Fee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">CAD 20,635</p>
                      <p className="text-gray-600">GIC Requirement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">223</p>
                      <p className="text-gray-600">Universities Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* English Requirements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
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
                          <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                            <span className="font-medium">Undergraduate:</span>
                            <span className="text-red-600 font-semibold">{req.ug}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                            <span className="font-medium">Postgraduate:</span>
                            <span className="text-green-600 font-semibold">{req.pg}</span>
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
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Tuition Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-red-900 mb-2">Undergraduate Programs</h4>
                      <p className="text-3xl font-bold text-red-600">CAD $36,100</p>
                      <p className="text-red-700">per year</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-green-900 mb-2">Graduate Programs</h4>
                      <p className="text-3xl font-bold text-green-600">CAD $21,100</p>
                      <p className="text-green-700">per year</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Canada */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Why Choose To Study In Canada?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyChooseCanada.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Visa Requirements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
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
                
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">💡 Important Note:</h4>
                  <p className="text-green-700 text-sm">For Pakistani students, visa fees are approximately 80-90 lacs in total. Various scholarships are available for Pakistani students.</p>
                </div>
              </CardContent>
            </Card>

            {/* Smart Tools Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Smart Tools for Canada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-red-50"
                    onClick={() => window.open('/cost-calculator?country=ca', '_blank')}
                  >
                    <Calculator className="w-8 h-8 text-red-600" />
                    <span className="font-semibold">Cost Calculator</span>
                    <span className="text-sm text-gray-600 text-center">Calculate your total study costs in Canada</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-green-50"
                    onClick={() => window.open('/course-match-tool?country=ca', '_blank')}
                  >
                    <GraduationCap className="w-8 h-8 text-green-600" />
                    <span className="font-semibold">Course Match</span>
                    <span className="text-sm text-gray-600 text-center">Find the perfect course for you</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-blue-50"
                    onClick={() => window.open('/document-checklist?country=ca', '_blank')}
                  >
                    <FileCheck className="w-8 h-8 text-blue-600" />
                    <span className="font-semibold">Document Checklist</span>
                    <span className="text-sm text-gray-600 text-center">Get your personalized checklist</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            
            {/* Documents Checklist */}
            <Card className="mb-8 sticky top-8 max-h-[calc(100vh-2rem)] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e3a8a] flex items-center">
                  <FileCheck className="w-5 h-5 mr-2" />
                  Documents Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documentChecklist.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-[#124FD3] hover:bg-[#0f3ba8]">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Full Checklist
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="sticky top-8 max-h-[calc(100vh-2rem)] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e3a8a] flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Expert Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-900">UAN Number</p>
                  <p className="text-xl font-bold text-red-600">(+92) 304 1110947</p>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Consultation
                </Button>
                
                <Button variant="outline" className="w-full">
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