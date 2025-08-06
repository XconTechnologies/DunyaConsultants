import React from 'react';
import { Calendar, Clock, User, GraduationCap, MapPin, DollarSign, BookOpen, Award, FileText, CheckCircle, Globe, Users, Target, AlertTriangle } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function TurkeyBurslariScholarshipCompleteGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Scholarship Guide
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Turkey Burslari Scholarship: Complete Guide 2025
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to Turkey Bursları Scholarship including eligibility, application process, benefits, and opportunities for Pakistani students to study in Turkey.
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
                <span>15 min read</span>
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
                  The <strong>Turkey Bursları Scholarship</strong> is one of the most prestigious and comprehensive scholarship programs offered by the Turkish government. This fully-funded scholarship program provides exceptional opportunities for international students to pursue undergraduate, graduate, and doctoral studies at top Turkish universities.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With over 4,000 scholarships awarded annually to students from more than 160 countries, Turkey Bursları has become a gateway for Pakistani students seeking world-class education in a culturally rich environment. The program covers full tuition fees, accommodation, monthly stipend, and many additional benefits.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you're a Pakistani student dreaming of studying in Turkey, this comprehensive guide will help you understand everything about the Turkey Bursları Scholarship, including eligibility criteria, application process, benefits, and tips for success.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#what-is-turkey-burslari" className="hover:text-blue-600">What is Turkey Bursları Scholarship?</a></li>
                  <li><a href="#scholarship-types" className="hover:text-blue-600">Types of Scholarships Available</a></li>
                  <li><a href="#benefits" className="hover:text-blue-600">Scholarship Benefits & Coverage</a></li>
                  <li><a href="#eligibility" className="hover:text-blue-600">Eligibility Requirements</a></li>
                  <li><a href="#application-process" className="hover:text-blue-600">Application Process</a></li>
                  <li><a href="#required-documents" className="hover:text-blue-600">Required Documents</a></li>
                  <li><a href="#universities" className="hover:text-blue-600">Participating Universities</a></li>
                  <li><a href="#tips-success" className="hover:text-blue-600">Tips for Success</a></li>
                  <li><a href="#faqs" className="hover:text-blue-600">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* What is Turkey Bursları */}
              <section id="what-is-turkey-burslari" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">What is Turkey Bursları Scholarship?</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Program Overview</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Turkey Bursları is a government-funded scholarship program established by the Turkish government to attract international students to Turkish higher education institutions. The program aims to create a global network of future leaders who will contribute to mutual understanding and cooperation between Turkey and their home countries.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="text-2xl font-bold text-blue-700 mb-2">4,000+</h4>
                      <p className="text-blue-600">Annual Scholarships</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="text-2xl font-bold text-blue-700 mb-2">160+</h4>
                      <p className="text-blue-600">Countries Covered</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="text-2xl font-bold text-blue-700 mb-2">200+</h4>
                      <p className="text-blue-600">Universities</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The scholarship program has gained significant popularity among Pakistani students due to Turkey's strategic location bridging Europe and Asia, its rich cultural heritage, high-quality education system, and the warm hospitality of Turkish people toward Pakistani students.
                </p>
              </section>

              {/* Scholarship Types */}
              <section id="scholarship-types" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Types of Scholarships Available</h2>

                <div className="space-y-6">
                  {/* Full-Time Scholarships */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Full-Time Scholarships
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-gray-800 mb-2">Undergraduate Scholarships</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Available for engineering, health sciences, social sciences</li>
                          <li>• Basic sciences and humanities programs</li>
                          <li>• Applications open January-February through TBBS</li>
                          <li>• 4-year program duration</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-gray-800 mb-2">Graduate Scholarships</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Master's and PhD programs available</li>
                          <li>• Humanities, natural sciences, social sciences</li>
                          <li>• Engineering and technology fields</li>
                          <li>• 2-year master's, 4-year PhD duration</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-gray-800 mb-2">Merit-Based Scholarships</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• For students with international awards</li>
                          <li>• Top academic achievements required</li>
                          <li>• Language proficiency (GPA 3.5+/4)</li>
                          <li>• Additional benefits included</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-gray-800 mb-2">Art Scholarships</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Undergraduate, master's, or PhD</li>
                          <li>• Performing arts, fine arts, music</li>
                          <li>• Portfolio submission required</li>
                          <li>• Special talent assessment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Short-Term Scholarships */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Short-Term Scholarships
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Research Scholarship</h4>
                        <p className="text-gray-700 text-sm mb-2">Monthly stipend of 12,000 TL</p>
                        <p className="text-gray-600 text-sm">Duration: 3-12 months</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Success Scholarship</h4>
                        <p className="text-gray-700 text-sm mb-2">Monthly stipend of 2,000 TL</p>
                        <p className="text-gray-600 text-sm">Duration: 1 year</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">KATİP Scholarship</h4>
                        <p className="text-gray-700 text-sm mb-2">Monthly stipend of 10,000 TL</p>
                        <p className="text-gray-600 text-sm">Duration: 8 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Scholarship Benefits & Coverage</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    What's Included in Turkey Bursları
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Financial Benefits:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Full tuition fee coverage</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Monthly stipend (varies by level)</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Accommodation allowance</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Health insurance coverage</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Round-trip airfare</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Academic Support:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Turkish language course (1 year)</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />University placement guarantee</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Academic mentorship</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Research opportunities</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Library and lab access</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Monthly Stipend Amounts (2025)
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-700">Undergraduate</h5>
                      <p className="text-gray-700 text-lg font-bold">3,000 TL</p>
                      <p className="text-gray-600 text-sm">per month</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-700">Master's</h5>
                      <p className="text-gray-700 text-lg font-bold">4,000 TL</p>
                      <p className="text-gray-600 text-sm">per month</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-700">PhD</h5>
                      <p className="text-gray-700 text-lg font-bold">5,000 TL</p>
                      <p className="text-gray-600 text-sm">per month</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-700">Research</h5>
                      <p className="text-gray-700 text-lg font-bold">12,000 TL</p>
                      <p className="text-gray-600 text-sm">per month</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Eligibility Requirements</h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">General Requirements</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Basic Criteria:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Must be a non-Turkish citizen</li>
                          <li>• Age limits vary by program level</li>
                          <li>• Strong academic record required</li>
                          <li>• Not previously studied in Turkey with government scholarship</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language Requirements:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• English or Turkish language proficiency</li>
                          <li>• TOEFL/IELTS for English programs</li>
                          <li>• Turkish language course provided</li>
                          <li>• Certificate verification required</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Age Limits by Program Level</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center bg-gray-50 p-4 rounded">
                        <h5 className="font-semibold text-gray-800">Undergraduate</h5>
                        <p className="text-blue-600 text-xl font-bold">Under 21</p>
                        <p className="text-gray-600 text-sm">years old</p>
                      </div>
                      <div className="text-center bg-gray-50 p-4 rounded">
                        <h5 className="font-semibold text-gray-800">Master's</h5>
                        <p className="text-blue-600 text-xl font-bold">Under 30</p>
                        <p className="text-gray-600 text-sm">years old</p>
                      </div>
                      <div className="text-center bg-gray-50 p-4 rounded">
                        <h5 className="font-semibold text-gray-800">PhD</h5>
                        <p className="text-blue-600 text-xl font-bold">Under 35</p>
                        <p className="text-gray-600 text-sm">years old</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Academic Requirements</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Minimum GPA Requirements:</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Undergraduate: 70% or equivalent</li>
                          <li>• Master's: 75% or equivalent</li>
                          <li>• PhD: 80% or equivalent</li>
                          <li>• Merit-based: 3.5+ GPA</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Additional Criteria:</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Strong motivation letter</li>
                          <li>• Relevant work/research experience</li>
                          <li>• Leadership and extracurricular activities</li>
                          <li>• Community service involvement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section id="application-process" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Application Process</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Application Timeline 2025</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                      <h4 className="font-semibold text-gray-800">Jan 10 - Feb 20</h4>
                      <p className="text-gray-600 text-sm">Application Period</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                      <h4 className="font-semibold text-gray-800">March - April</h4>
                      <p className="text-gray-600 text-sm">Document Review</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                      <h4 className="font-semibold text-gray-800">May - June</h4>
                      <p className="text-gray-600 text-sm">Interview Process</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                      <h4 className="font-semibold text-gray-800">July</h4>
                      <p className="text-gray-600 text-sm">Final Results</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Step-by-Step Application Guide</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h5 className="font-semibold text-gray-800">Step 1: Create Online Account</h5>
                        <p className="text-gray-700 text-sm">Register on the official Türkiye Scholarships website and create your application account with valid email address.</p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h5 className="font-semibold text-gray-800">Step 2: Complete Application Form</h5>
                        <p className="text-gray-700 text-sm">Fill out the comprehensive application form with accurate personal, academic, and contact information.</p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h5 className="font-semibold text-gray-800">Step 3: Upload Required Documents</h5>
                        <p className="text-gray-700 text-sm">Submit all required documents including transcripts, certificates, passport copy, and personal statement.</p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h5 className="font-semibold text-gray-800">Step 4: Select Programs and Universities</h5>
                        <p className="text-gray-700 text-sm">Choose up to 12 programs and universities in order of preference from the available options.</p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h5 className="font-semibold text-gray-800">Step 5: Submit Application</h5>
                        <p className="text-gray-700 text-sm">Review all information carefully and submit your application before the deadline.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Required Documents */}
              <section id="required-documents" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Required Documents</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Document Checklist
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Essential Documents:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Completed online application form</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Valid passport copy</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Academic transcripts and certificates</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Language proficiency certificates</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Personal statement/motivation letter</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Additional Documents:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Letters of recommendation (2-3)</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Research proposal (for graduate programs)</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Portfolio (for art programs)</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Health certificate</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Passport-sized photographs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Important Document Guidelines
                  </h4>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• All documents must be in English or Turkish (official translations required)</li>
                    <li>• Academic documents must be notarized and apostilled</li>
                    <li>• File size limit: 5MB per document</li>
                    <li>• Accepted formats: PDF, JPG, PNG</li>
                    <li>• Documents must be clear and legible</li>
                  </ul>
                </div>
              </section>

              {/* Universities */}
              <section id="universities" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Participating Universities</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Top Universities Available
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-gray-800 mb-2">Istanbul Universities</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Boğaziçi University</li>
                        <li>• Istanbul Technical University</li>
                        <li>• Marmara University</li>
                        <li>• Sabancı University</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-gray-800 mb-2">Ankara Universities</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Ankara University</li>
                        <li>• Middle East Technical University</li>
                        <li>• Hacettepe University</li>
                        <li>• Bilkent University</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-gray-800 mb-2">Other Major Cities</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Akdeniz University (Antalya)</li>
                        <li>• Ege University (Izmir)</li>
                        <li>• Çukurova University (Adana)</li>
                        <li>• Erciyes University (Kayseri)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Popular Fields of Study</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-700">Engineering</h5>
                      <p className="text-gray-600 text-sm">Computer, Electrical, Mechanical, Civil</p>
                    </div>
                    <div className="text-center bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-700">Business</h5>
                      <p className="text-gray-600 text-sm">MBA, Economics, Finance, Management</p>
                    </div>
                    <div className="text-center bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-700">Medical Sciences</h5>
                      <p className="text-gray-600 text-sm">Medicine, Dentistry, Pharmacy</p>
                    </div>
                    <div className="text-center bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold text-blue-700">Social Sciences</h5>
                      <p className="text-gray-600 text-sm">Psychology, Sociology, International Relations</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tips for Success */}
              <section id="tips-success" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Tips for Success</h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Application Success Strategies
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Academic Excellence:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Maintain high GPA throughout studies</li>
                          <li>• Focus on relevant extracurricular activities</li>
                          <li>• Obtain strong letters of recommendation</li>
                          <li>• Demonstrate leadership experience</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Application Quality:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Write compelling personal statement</li>
                          <li>• Research universities and programs thoroughly</li>
                          <li>• Submit application well before deadline</li>
                          <li>• Prepare for potential interviews</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Common Mistakes to Avoid</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Application Errors:</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Incomplete or inaccurate information</li>
                          <li>• Poor quality document uploads</li>
                          <li>• Generic personal statements</li>
                          <li>• Missing supporting documents</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Strategic Mistakes:</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Not researching program requirements</li>
                          <li>• Applying to unrealistic programs only</li>
                          <li>• Weak motivation for studying in Turkey</li>
                          <li>• Insufficient preparation for interviews</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: When does the Turkey Bursları application open for 2025?</h3>
                    <p className="text-gray-700">The application period for Turkey Bursları 2025 typically opens in January (around January 10) and closes in February (around February 20). The exact dates are announced on the official website.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can Pakistani students apply for Turkey Bursları Scholarship?</h3>
                    <p className="text-gray-700">Yes, Pakistani students are eligible to apply for Turkey Bursları Scholarship. Pakistan is among the countries covered by this scholarship program, and many Pakistani students receive this scholarship annually.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Is IELTS mandatory for Turkey Bursları Scholarship?</h3>
                    <p className="text-gray-700">IELTS is not always mandatory. You can submit TOEFL, IELTS, or other recognized English proficiency tests. For programs taught in Turkish, language proficiency is provided through a one-year preparatory course.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What is the success rate for Pakistan applicants?</h3>
                    <p className="text-gray-700">The success rate varies annually, but Pakistan typically has a good representation among scholarship recipients. Success depends on academic performance, application quality, and competition from other applicants.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can I work while studying on Turkey Bursları Scholarship?</h3>
                    <p className="text-gray-700">Turkey Bursları scholars can work part-time with proper permits. However, the scholarship provides sufficient monthly stipend to cover living expenses, so work is optional rather than necessary.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What happens after I complete my studies?</h3>
                    <p className="text-gray-700">After graduation, you can choose to return to your home country, continue with higher studies, or explore career opportunities in Turkey or other countries, subject to visa and work permit requirements.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Turkey Bursları Scholarship represents an exceptional opportunity for Pakistani students to pursue world-class education in a culturally rich and academically vibrant environment. With comprehensive coverage including tuition fees, monthly stipend, accommodation, and health insurance, this scholarship removes financial barriers to quality education.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Success in the Turkey Bursları application requires careful preparation, strong academic credentials, and a compelling personal narrative that demonstrates your commitment to academic excellence and cross-cultural understanding.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Start your preparation early, research thoroughly, and present your best self through a well-crafted application. Turkey awaits talented Pakistani students ready to embark on an enriching educational journey.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Ready to Apply for Turkey Bursları?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants on your Turkey Bursları Scholarship application. Our experienced team will help you prepare a winning application.
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
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Period:</span>
                    <span className="font-medium">Jan-Feb 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Countries Covered:</span>
                    <span className="font-medium">160+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Scholarships:</span>
                    <span className="font-medium">4,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-medium">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-medium text-green-600">Fully Funded</span>
                  </div>
                </div>
              </div>

              {/* Scholarship Benefits */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-500" />
                  Scholarship Benefits
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center p-2 bg-green-50 rounded">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Full Tuition Coverage</span>
                  </div>
                  <div className="flex items-center p-2 bg-green-50 rounded">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Monthly Stipend</span>
                  </div>
                  <div className="flex items-center p-2 bg-green-50 rounded">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Accommodation</span>
                  </div>
                  <div className="flex items-center p-2 bg-green-50 rounded">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Health Insurance</span>
                  </div>
                  <div className="flex items-center p-2 bg-green-50 rounded">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Round-trip Airfare</span>
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