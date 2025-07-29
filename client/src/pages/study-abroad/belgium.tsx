import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, DollarSign, FileText, GraduationCap, Globe, MapPin, Calendar, Calculator, FileCheck, Users, Zap, Castle } from "lucide-react";

export default function StudyAbroadBelgium() {
  const documentChecklist = [
    "Original Passport",
    "All Educational Documents Attested", 
    "Degree & Transcript Certified Copies",
    "IELTS / TOEFL Score Card",
    "Motivation Letter",
    "CV/Resume",
    "2 Academic References",
    "Financial Proof"
  ];

  const whyChooseBelgium = [
    "High-quality multilingual education",
    "Central location in Europe", 
    "Rich cultural heritage",
    "Strong research opportunities",
    "Affordable tuition fees",
    "Gateway to European job market",
    "Excellent student support services",
    "Historic and modern cities",
    "Strong industry connections",
    "Part of European Union benefits"
  ];

  const visaRequirements = [
    { title: "Admission Letter", description: "Official acceptance letter from Belgian university" },
    { title: "Financial Proof", description: "Bank statement showing €670 per month for living expenses" },
    { title: "Academic Documents", description: "Certified copies of all academic qualifications" },
    { title: "Health Insurance", description: "Comprehensive health insurance coverage" },
    { title: "Clean Criminal Record", description: "Police clearance certificate from home country" }
  ];

  const englishRequirements = [
    { test: "IELTS", ug: "6.0-6.5", pg: "6.5-7.0" },
    { test: "TOEFL", ug: "80-90", pg: "90-100" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative bg-[#124FD3] text-white pt-24 pb-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #000000 0%, #FFD700 33%, #FF0000 67%, #000000 100%)',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Study in <span className="text-yellow-400">Belgium</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-100 mb-8">
              Experience exceptional education in the heart of Europe with renowned universities and rich cultural heritage
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <GraduationCap className="w-5 h-5 mr-2" />
                Top Universities
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Castle className="w-5 h-5 mr-2" />
                Heart of Europe
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Multilingual Education
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
              <Card className="border-l-4 border-l-yellow-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <DollarSign className="w-8 h-8 text-yellow-600 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">€906 - €4,175</p>
                      <p className="text-gray-600">Annual Tuition Fee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-red-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 text-red-600 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">€670/month</p>
                      <p className="text-gray-600">Living Cost Requirement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-black">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-8 h-8 text-gray-900 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">15+</p>
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
                          <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                            <span className="font-medium">Undergraduate:</span>
                            <span className="text-yellow-600 font-semibold">{req.ug}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                            <span className="font-medium">Postgraduate:</span>
                            <span className="text-red-600 font-semibold">{req.pg}</span>
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
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-yellow-900 mb-2">EU Students</h4>
                      <p className="text-3xl font-bold text-yellow-600">€906</p>
                      <p className="text-yellow-700">per year</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-red-900 mb-2">Non-EU Students</h4>
                      <p className="text-3xl font-bold text-red-600">€4,175</p>
                      <p className="text-red-700">per year</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Belgium */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Why Choose To Study In Belgium?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyChooseBelgium.map((benefit, index) => (
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
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Important Note:</h4>
                  <p className="text-yellow-700 text-sm">Belgium offers excellent scholarship opportunities and work permit options for international students. Students can work up to 20 hours per week during studies.</p>
                </div>
              </CardContent>
            </Card>

            {/* Smart Tools Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Smart Tools for Belgium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-yellow-50"
                    onClick={() => window.open('/cost-calculator', '_blank')}
                  >
                    <Calculator className="w-8 h-8 text-yellow-600" />
                    <span className="font-semibold">Cost Calculator</span>
                    <span className="text-sm text-gray-600 text-center">Calculate your total study costs in Belgium</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-red-50"
                    onClick={() => window.open('/course-match-tool', '_blank')}
                  >
                    <GraduationCap className="w-8 h-8 text-red-600" />
                    <span className="font-semibold">Course Match</span>
                    <span className="text-sm text-gray-600 text-center">Find the perfect course for you</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-gray-50"
                    onClick={() => window.open('/document-checklist', '_blank')}
                  >
                    <FileCheck className="w-8 h-8 text-gray-900" />
                    <span className="font-semibold">Document Checklist</span>
                    <span className="text-sm text-gray-600 text-center">Get your personalized checklist</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            
            {/* Documents Checklist */}
            <Card className="mb-8">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#1e3a8a] flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Expert Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="font-semibold text-yellow-900">UAN Number</p>
                  <p className="text-xl font-bold text-yellow-600">(+92) 304 1110947</p>
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