import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, DollarSign, FileText, GraduationCap, Globe, MapPin, Calendar, Calculator, FileCheck, Users, Zap, Download, X } from "lucide-react";
import CountryFlag from "@/components/CountryFlag";
import ApplicationForm from "@/components/ApplicationForm";
import SmartToolsPopup from "@/components/SmartToolsPopup";

export default function StudyAbroadUSA() {
  const [showSmartTools, setShowSmartTools] = useState(false);


  const downloadChecklist = () => {
    const checklistText = `USA STUDY ABROAD DOCUMENT CHECKLIST

Required Documents:
• Original Passport
• Inter Degree & Result Documents
• Matric Degree & Result Documents
• IELTS / PTE Score Card
• Experience Certificate
• BS Degree + Transcript
• 2 Recommendation Letters
• GRE / GMAT (Optional)

Contact Information:
UAN: (+92) 304 1110947
Email: info@dunyaconsultants.com
Address: Alif Tower, Sargodha

© Dunya Consultants - Your trusted study abroad partner`;

    const blob = new Blob([checklistText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'USA-Study-Documents-Checklist.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

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
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="font-bold leading-tight mb-8 text-white" style={{ fontSize: '64px' }}>
              Study in <span className="text-white">USA</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
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
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      <DollarSign className="w-6 h-6 text-[#1D50C9]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">$27,940 - $65,000</p>
                      <p className="text-sm text-gray-600">Annual Tuition Range</p>
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
                      <p className="text-2xl font-bold text-gray-900">SEVIS $350</p>
                      <p className="text-sm text-gray-600">+ DS-160 $185</p>
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
                      <p className="text-2xl font-bold text-gray-900">5,000+</p>
                      <p className="text-sm text-gray-600">Higher Education Institutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tuition Fee Details */}
            <Card className="mb-8 bg-gray-50 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Tuition Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Undergraduate Programs */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Undergraduate Programs</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 text-center">
                          <h4 className="font-semibold text-gray-700 mb-2">Public In-State</h4>
                          <p className="text-3xl font-bold text-[#1D50C9] mb-1">$27,940</p>
                          <p className="text-sm text-gray-500">per year</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 text-center">
                          <h4 className="font-semibold text-gray-700 mb-2">Public Out-of-State</h4>
                          <p className="text-3xl font-bold text-[#1D50C9] mb-1">$45,240</p>
                          <p className="text-sm text-gray-500">per year</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 text-center">
                          <h4 className="font-semibold text-gray-700 mb-2">Private Nonprofit</h4>
                          <p className="text-3xl font-bold text-[#1D50C9] mb-1">$57,570</p>
                          <p className="text-sm text-gray-500">per year</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Graduate Programs */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Graduate Programs</h3>
                    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-8 text-center">
                        <h4 className="font-semibold text-gray-700 mb-3">Graduate Programs</h4>
                        <p className="text-4xl font-bold text-[#1D50C9] mb-2">$18,000 - $65,000</p>
                        <p className="text-gray-500">per annum</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose USA */}
            <Card className="mb-8 bg-gray-50 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-[#1D50C9] flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Why Choose To Study In USA?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {whyChooseUSA.map((benefit, index) => (
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
                  Smart Tools for USA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <SmartToolsPopup 
                  country="USA" 
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
                      <CheckCircle className="w-4 h-4 text-[#1D50C9] mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={downloadChecklist}
                  className="w-full mt-6 bg-[#1D50C9] hover:bg-[#0f3ba8] text-white"
                >
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
                  <p className="font-semibold text-blue-900">UAN Number</p>
                  <p className="text-xl font-bold text-[#1D50C9]">(+92) 304 1110947</p>
                </div>
                
                <ApplicationForm country="USA">
                  <Button className="w-full bg-[#1D50C9] hover:bg-[#1D50C9] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                </ApplicationForm>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/923041110947?text=Hello, I want to start my application for studying in USA. Please guide me through the process.')}
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