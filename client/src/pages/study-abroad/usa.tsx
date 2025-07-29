import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, DollarSign, FileText, GraduationCap, Globe, MapPin, Calendar, Calculator, FileCheck, Users, Zap } from "lucide-react";
import CountryFlag from "@/components/CountryFlag";

export default function StudyAbroadUSA() {
  const [selectedProgram, setSelectedProgram] = useState("undergraduate");

  const documentChecklist = [
    "Original Passport",
    "Inter Degree & Result Documents", 
    "Matric Degree & Result Documents",
    "IELTS / PTE Score Card",
    "Experience Certificate",
    "BS Degree + Transcript",
    "2 Recommendation Letters",
    "GRE / GMAT (Optional)"
  ];

  const whyChooseUSA = [
    "World-recognized education system",
    "Internationally accepted degrees", 
    "Flexible education system",
    "Diverse Career Opportunity",
    "Excellent support for international students",
    "Research and training opportunities",
    "Exclusive campus life",
    "Travel opportunities to states",
    "Earn while learning",
    "Curricular Practical Training (CPT) and Optional Practical Training (OPT)"
  ];

  const visaRequirements = [
    { title: "I-20 Certificate", description: "Certificate of Eligibility Form provided by ISSO" },
    { title: "Letter Of Admission", description: "Letter of admission provided by Graduate Division or UCSF professional school" },
    { title: "Financial Support Documents", description: "Current proof of support that would meet expenses for program duration" },
    { title: "Passport Valid", description: "Passport valid for a minimum of six months into the future" },
    { title: "Form DS-160", description: "Nonimmigrant Visa Application available at US Embassy" },
    { title: "Photos", description: "Two photos" },
    { title: "MRV Fee", description: "Machine Readable Visa fee" },
    { title: "SEVIS Fee", description: "Receipt for payment of SEVIS Fee" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative bg-[#124FD3] text-white pt-24 pb-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #2563eb 100%)',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇺🇸</span>
              <h1 className="text-5xl lg:text-7xl font-bold">
                Study in <span className="text-yellow-400">USA</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-blue-100 mb-8">
              Discover world-class education opportunities in the United States with over 5,000 higher education institutes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <GraduationCap className="w-5 h-5 mr-2" />
                5,000+ Universities
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Globe className="w-5 h-5 mr-2" />
                World's Top Education
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                International Students Welcome
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
                    <DollarSign className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">$27,940 - $65,000</p>
                      <p className="text-gray-600">Annual Tuition Range</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">SEVIS $350</p>
                      <p className="text-gray-600">+ DS-160 $185</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">5,000+</p>
                      <p className="text-gray-600">Higher Education Institutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tuition Fee Details */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Tuition Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedProgram} onValueChange={setSelectedProgram}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                    <TabsTrigger value="graduate">Graduate</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="undergraduate" className="mt-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold text-blue-900">Public In-State</h4>
                          <p className="text-2xl font-bold text-blue-600">$27,940</p>
                          <p className="text-sm text-blue-700">per year</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold text-green-900">Public Out-of-State</h4>
                          <p className="text-2xl font-bold text-green-600">$45,240</p>
                          <p className="text-sm text-green-700">per year</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-purple-50 border-purple-200">
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold text-purple-900">Private Nonprofit</h4>
                          <p className="text-2xl font-bold text-purple-600">$57,570</p>
                          <p className="text-sm text-purple-700">per year</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="graduate" className="mt-6">
                    <Card className="bg-orange-50 border-orange-200">
                      <CardContent className="p-6 text-center">
                        <h4 className="font-semibold text-orange-900 mb-2">Graduate Programs</h4>
                        <p className="text-3xl font-bold text-orange-600">$18,000 - $65,000</p>
                        <p className="text-orange-700">per annum</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Why Choose USA */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Why Choose To Study In USA?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyChooseUSA.map((benefit, index) => (
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
              </CardContent>
            </Card>

            {/* Smart Tools Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1e3a8a] flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Smart Tools for USA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-blue-50"
                    onClick={() => window.open('/cost-calculator', '_blank')}
                  >
                    <Calculator className="w-8 h-8 text-blue-600" />
                    <span className="font-semibold">Cost Calculator</span>
                    <span className="text-sm text-gray-600 text-center">Calculate your total study costs in USA</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-green-50"
                    onClick={() => window.open('/course-match-tool', '_blank')}
                  >
                    <GraduationCap className="w-8 h-8 text-green-600" />
                    <span className="font-semibold">Course Match</span>
                    <span className="text-sm text-gray-600 text-center">Find the perfect course for you</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-6 flex flex-col items-center space-y-2 hover:bg-purple-50"
                    onClick={() => window.open('/document-checklist', '_blank')}
                  >
                    <FileCheck className="w-8 h-8 text-purple-600" />
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
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">UAN Number</p>
                  <p className="text-xl font-bold text-blue-600">(+92) 304 1110947</p>
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