import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, User, FileText, Phone, Mail, Building, CheckCircle, AlertCircle, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function TBTestForUKVisaInPakistan() {
  const documents = [
    "Clear and valid photocopy of National ID Card or passport",
    "Past medical records (if you have suffered from TB or lung disease)",
    "Receipt for UK TB test fee payment"
  ];

  const eligibilityRequirements = [
    "Planning to live in UK for over 6 months",
    "Applying for any long-term visa (not tourist visa)",
    "Traveling from Pakistan where TB is common",
    "Must be above 16 years old (recommended)"
  ];

  const testCenters = [
    { name: "Karachi TB Test Center", address: "Clifton Block 5, Karachi", phone: "+92-21-35296745" },
    { name: "Lahore TB Test Center", address: "Gulberg III, Lahore", phone: "+92-42-35714892" },
    { name: "Islamabad TB Test Center", address: "F-6 Markaz, Islamabad", phone: "+92-51-2605463" }
  ];

  return (
    
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#124FD3] via-[#124FD3] to-[#0d3db8] flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl font-bold mb-4">TB Test for UK Visa in Pakistan</h1>
            <p className="text-2xl font-light">A concise guide before you apply for visa application</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before planning to travel to the United Kingdom, Pakistani students have to meet fixed requirements set by the UK government. From showing evidence that you have enough financial resources for your trip to proving your intentions to return to your home country, everything is checked and verified. In addition to all this, one of the most essential <strong>United Kingdom student visa requirements</strong> that is a must for the citizens of Pakistan is the <strong>TB test for UK</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All candidates who are willing to stay in the UK for a period of more than six months or 180 days have to get this certificate demonstrating that they are free from Pulmonary Tuberculosis before applying for their visa. If you are interested in learning more about the TB test for a UK visa in Pakistan, contact our experts at Dunya Consultants to book your appointment today!
                </p>
              </div>

              {/* When Do You Need TB Test */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
                  <AlertCircle className="mr-3 h-6 w-6" />
                  When Do You Need to Do a TB test for UK visa?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The primary purpose of TB screening for a UK visa is to inspect the presence of Lung TB and prevent the affected people from spreading the disease to others. The UK government has made the TB screening test for a UK visa mandatory for citizens of different countries, including Pakistan, Bangladesh, Nepal, Sri Lanka, and India.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">The criteria for a UK visa TB test are as follows:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why TB Test Required */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Why is a TB test required for UK visa?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The UK TB test centres are very conscious about the screening for your Tuberculosis to avoid spread of this infectious disease. That's why it is included in the medical for UK visa. Let's discuss below why it is compulsory:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                        <h3 className="font-semibold text-green-800">Fulfill immigration requirements</h3>
                      </div>
                      <p className="text-green-700 text-sm">Essential requirement for UK visa compliance</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                        <h3 className="font-semibold text-blue-800">Ensures protection and safety</h3>
                      </div>
                      <p className="text-blue-700 text-sm">Protects both individual and public health</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="h-6 w-6 text-purple-600 mr-2" />
                        <h3 className="font-semibold text-purple-800">Guarantees public health protection</h3>
                      </div>
                      <p className="text-purple-700 text-sm">Maintains UK's public health standards</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="h-6 w-6 text-orange-600 mr-2" />
                        <h3 className="font-semibold text-orange-800">Prevents the spread of TB</h3>
                      </div>
                      <p className="text-orange-700 text-sm">Controls infectious disease transmission</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Documents Required */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Documents Required for UK TB Test in Pakistan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a Pakistani student or resident, you should go a little earlier than your UK TB test appointment to avoid any delays or rejections. The British visa application centre has some TB test requirements that you need to meet, as given below:
                </p>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-white rounded-lg border-l-4 border-blue-500"
                    >
                      <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* TB Test Fee */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-yellow-800 flex items-center">
                  <DollarSign className="mr-3 h-6 w-6" />
                  TB Test for UK Visa Fees
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You will need to pay the UK TB test fee to qualify for a UK student visa from Pakistan. The test fee for TB screening test for UK visa is around <strong>seventy-eight dollars</strong>.
                </p>
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">TB Test Fee:</span>
                    <span className="text-2xl font-bold text-yellow-700">$78 USD</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Note:</strong> This fee should be paid directly at the authorized clinic in USD. Remember that you cannot get a refund if your test results come positive for Tuberculosis.
                  </p>
                </div>
              </motion.div>

              {/* Test Centers */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Authorized TB Test Centers in Pakistan</h2>
                <div className="grid gap-6">
                  {testCenters.map((center, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <MapPin className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                            <div className="lg:col-span-3">
                              <h3 className="font-bold text-gray-800 mb-2">{center.name}</h3>
                              <p className="text-gray-600 mb-2 flex items-center">
                                <Building className="h-4 w-4 mr-2" />
                                {center.address}
                              </p>
                              <p className="text-gray-600 flex items-center">
                                <Phone className="h-4 w-4 mr-2" />
                                {center.phone}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Validity */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">UK Visa TB Test Validity</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After following the proper TB test procedure for UK visa, you will finally receive a clearance certificate. The validity of a TB test is around <strong>six months</strong> from the medical examination (x-ray date) day. However, this may vary from one country to another.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Moreover, you should get your TB screening done just three to four weeks before applying for a visa to avoid any rejections or delays. After that, make sure you provide following information correctly on the TB clearance certificate for UK visa:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Complete name</li>
                  <li>X-Ray date</li>
                  <li>Date of birth</li>
                  <li>X-Ray result date</li>
                  <li>Full name and address of the approved clinic that provides the certificate</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 text-green-800">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Being a citizen of Pakistan, one of the most essential United Kingdom student visa requirements is to get your TB screening done. Without a TB test for UK visa, you are not allowed to stay in the UK for a period of more than six months. After getting your screening done, you will receive a TB clearance certificate for UK visa which needs to be submitted while applying.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are thinking of applying to UK universities but are not aware of the proper process and requirements, we are here to help you. Our expert and most professional team at Dunya Consultants will guide you about everything from university selection to visa processing.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">How is a TB test for UK done?</h3>
                    <p className="text-gray-700">
                      Your doctor will examine you properly for any physical signs of Tuberculosis. In a few cases, this might include a chest X-ray or CT scan.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">What are TB test requirements for a UK visa?</h3>
                    <p className="text-gray-700">
                      You will need to submit a valid photocopy of your National ID Card or passport as well as a paid receipt for the TB test fee.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">How can I book a UK TB test appointment?</h3>
                    <p className="text-gray-700">
                      You should visit one of the certified clinics to book your appointment for a TB test. You need to get a clearance certificate to be eligible for a UK visa.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Quick Facts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Test Fee:</span>
                      <span className="font-semibold text-blue-800">$78 USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Validity:</span>
                      <span className="font-semibold text-blue-800">6 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Required for:</span>
                      <span className="font-semibold text-blue-800">6+ months stay</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Age Limit:</span>
                      <span className="font-semibold text-blue-800">16+ years</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Get Expert Guidance</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select Country</option>
                      <option>UK</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>Australia</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Get Free Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>(+92) 304 1110947</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="mr-2 h-4 w-4" />
                      <span>query@teamdunya.com</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <Building className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <span>110 Link Stadium Road Sargodha</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}