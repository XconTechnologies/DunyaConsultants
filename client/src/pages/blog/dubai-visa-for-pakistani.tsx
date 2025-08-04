import React from 'react';
import { Calendar, Clock, User, MapPin, FileText, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function DubaiVisaForPakistani() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Visa Guide
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Dubai Study Visa Requirements from Pakistan
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide to obtaining your Dubai student visa from Pakistan with all requirements, eligibility criteria, and application process.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 28, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dubai is also known as the City of Gold. It is not only one of the richest places in the world but also a top choice for education. It provides the best facilities for both local as well as international students. If you are from Pakistan and willing to study in Dubai, you need to apply for a Dubai study visa.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is required if you want to pursue a full-time undergraduate or postgraduate program. However, before you make any plans, it is essential to understand the Dubai study visa requirements from Pakistan. These include the mandatory documents and steps to follow to obtain the visa.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Once you fulfill all the requirements, you can begin your education in Dubai. Moreover, students can also get work experience while studying. However, there are particular rules that need to be followed when working under a student visa.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#what-is-dubai-visa" className="hover:text-blue-600">What is a Dubai Student Visa?</a></li>
                  <li><a href="#eligibility-criteria" className="hover:text-blue-600">Eligibility Criteria</a></li>
                  <li><a href="#entry-requirements" className="hover:text-blue-600">Entry Requirements</a></li>
                  <li><a href="#required-documents" className="hover:text-blue-600">Required Documents</a></li>
                  <li><a href="#application-process" className="hover:text-blue-600">Application Process</a></li>
                  <li><a href="#visa-costs" className="hover:text-blue-600">Visa Costs and Fees</a></li>
                  <li><a href="#faqs" className="hover:text-blue-600">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Key Benefits */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Benefits of Dubai Student Visa</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Stay in Dubai for entire study duration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Work part-time while studying (with restrictions)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Access to world-class education facilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Renewable based on program duration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    Opportunity for post-graduation employment
                  </li>
                </ul>
              </div>

              {/* What is Dubai Visa Section */}
              <section id="what-is-dubai-visa" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">What is a Dubai Student Visa?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  A Dubai visa for Pakistani students' visa is a special visa for those who are planning to study in Dubai. This visa lets you enter and stay in the city for the entire time you are studying.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  It can be renewed based on the duration of your selected program. Moreover, with a UAE visa for Pakistani students, you can work part-time while studying. However, certain rules must be followed for this.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Types of Dubai Student Visas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Short-term Visa:</strong> Up to 6 months for language courses</p>
                      <p className="text-gray-700 mb-2"><strong>Long-term Visa:</strong> 1-4 years for degree programs</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Undergraduate Visa:</strong> Bachelor's degree programs</p>
                      <p className="text-gray-700"><strong>Postgraduate Visa:</strong> Master's and PhD programs</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Eligibility Criteria Section */}
              <section id="eligibility-criteria" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Eligibility Criteria for Dubai Student Visa from Pakistan</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  To apply Dubai visa from Pakistan, students need to fulfill the following requirements as given below:
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Basic Requirements
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• You should have an official acceptance letter from a Dubai university</li>
                      <li>• You should be at least eighteen years old</li>
                      <li>• Older students need to submit a certificate showing they are continuing studies</li>
                      <li>• You need a sponsor (parent/relative or university)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Health & Legal Requirements
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pass a medical check-up to ensure good health</li>
                      <li>• Visa application approved by GDRFA (General Directorate of Residency and Foreigners Affairs)</li>
                      <li>• Clean criminal background check</li>
                      <li>• Valid passport with at least 6 months validity</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Academic Requirements for Long-term Visa
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• School students: Minimum 95% in high school graduation</li>
                      <li>• University students: At least GPA of 3.75</li>
                      <li>• Valid transcripts from recognized institutions</li>
                      <li>• English proficiency test scores (IELTS/TOEFL)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Entry Requirements Section */}
              <section id="entry-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Dubai Entry Requirements from Pakistan Students</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Essential Entry Documents</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Valid Passport:</strong> 6+ months validity</p>
                      <p className="text-gray-700 mb-2"><strong>Student Visa:</strong> Approved by UAE authorities</p>
                      <p className="text-gray-700 mb-2"><strong>Admission Letter:</strong> From Dubai university</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Health Certificate:</strong> Medical fitness proof</p>
                      <p className="text-gray-700 mb-2"><strong>Insurance:</strong> Valid health insurance</p>
                      <p className="text-gray-700"><strong>Financial Proof:</strong> Bank statements</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Required Documents Section */}
              <section id="required-documents" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Required Documents for Dubai Student Visa</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Personal Documents</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Valid passport with 6 months validity</li>
                      <li>• Passport-size photographs (white background)</li>
                      <li>• Birth certificate (attested)</li>
                      <li>• National ID card copy</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Academic Documents</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• University acceptance letter</li>
                      <li>• Academic transcripts (attested)</li>
                      <li>• Degree certificates</li>
                      <li>• English proficiency test results</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Financial & Legal Documents</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Bank statements (last 6 months)</li>
                      <li>• Sponsorship letter</li>
                      <li>• Police clearance certificate</li>
                      <li>• Medical fitness certificate</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Application Process Section */}
              <section id="application-process" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Dubai Student Visa Application Process</h2>
                
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">1</div>
                      <h3 className="text-lg font-semibold text-gray-800">Get University Admission</h3>
                    </div>
                    <p className="text-gray-700">Apply and receive acceptance letter from a recognized Dubai university or educational institution.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">2</div>
                      <h3 className="text-lg font-semibold text-gray-800">Prepare Documents</h3>
                    </div>
                    <p className="text-gray-700">Gather all required documents including personal, academic, and financial papers with proper attestation.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">3</div>
                      <h3 className="text-lg font-semibold text-gray-800">Submit Application</h3>
                    </div>
                    <p className="text-gray-700">Submit visa application through UAE embassy or authorized visa processing center in Pakistan.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">4</div>
                      <h3 className="text-lg font-semibold text-gray-800">Medical & Biometrics</h3>
                    </div>
                    <p className="text-gray-700">Complete medical examination and biometric data collection as required by UAE authorities.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">5</div>
                      <h3 className="text-lg font-semibold text-gray-800">Receive Visa</h3>
                    </div>
                    <p className="text-gray-700">Upon approval, receive your Dubai student visa and prepare for travel to begin your studies.</p>
                  </div>
                </div>
              </section>

              {/* Visa Costs Section */}
              <section id="visa-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Dubai Student Visa Costs and Fees</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Fee Breakdown
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Processing Fee:</strong> AED 2,300 - 2,700</p>
                      <p className="text-gray-700 mb-2"><strong>Security Deposit:</strong> AED 2,500 - 3,000</p>
                      <p className="text-gray-700 mb-2"><strong>Medical Examination:</strong> AED 300 - 500</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Health Insurance:</strong> AED 1,300 - 1,400</p>
                      <p className="text-gray-700 mb-2"><strong>Emirates ID:</strong> AED 370</p>
                      <p className="text-gray-700"><strong>Total Approximate:</strong> AED 6,770 - 8,270</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How long does Dubai student visa processing take?</h3>
                    <p className="text-gray-700">Typically 15-30 working days from the date of complete application submission, depending on the university and visa type.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can I work while studying in Dubai?</h3>
                    <p className="text-gray-700">Yes, students can work part-time with proper work permits. However, there are restrictions on working hours and types of employment allowed.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Is health insurance mandatory for Dubai student visa?</h3>
                    <p className="text-gray-700">Yes, valid health insurance is mandatory for all student visa holders in Dubai. The cost ranges from AED 1,300-1,400 annually.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can I extend my Dubai student visa?</h3>
                    <p className="text-gray-700">Yes, student visas can be renewed based on your program duration and continued enrollment in the educational institution.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Obtaining a Dubai student visa from Pakistan requires careful preparation and adherence to all requirements. The process involves multiple steps including university admission, document preparation, and visa application submission.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  With proper planning and expert guidance, Pakistani students can successfully obtain their Dubai student visa and pursue their educational goals in one of the world's most dynamic cities.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Need Help with Dubai Student Visa?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert assistance from Dunya Consultants for your Dubai student visa application and ensure a smooth process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call Now: +92 304 1110947
                  </a>
                  <a 
                    href="mailto:info@dunyaconsultants.com" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-medium">15-30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Cost:</span>
                    <span className="font-medium">AED 6,770-8,270</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Min Age:</span>
                    <span className="font-medium">18 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Rights:</span>
                    <span className="font-medium">Part-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance:</span>
                    <span className="font-medium">Mandatory</span>
                  </div>
                </div>
              </div>

              {/* Visa Requirements */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  Key Requirements
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>University Admission</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Required</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Financial Proof</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Essential</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Medical Checkup</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Mandatory</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>GDRFA Approval</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Critical</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}