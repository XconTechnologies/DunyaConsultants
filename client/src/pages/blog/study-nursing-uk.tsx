import React from 'react';
import { Heart, GraduationCap, FileText, Clock, DollarSign, MapPin, Users, CheckCircle } from 'lucide-react';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function StudyNursingUK() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Study Nursing in the UK</h1>
              <p className="mt-2 text-gray-600">Complete Guide for International Students</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Heart className="w-4 h-4 mr-1" />
                Healthcare Education
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80"
                  alt="Study Nursing in the UK"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Quick Facts */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Program Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Duration: 4 years</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Cost: £14,000-£30,000/year</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">IELTS: 7.0 overall, 6.5 each</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Includes practical placements</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Nursing is a highly respected and in-demand profession worldwide, making it an excellent career choice for students. 
                  The UK is particularly popular among international students seeking quality nursing education. To work as a nurse in the UK, 
                  international students must complete the Overseas Nursing Programme (ONP), which allows them to register as nurses with the NMC.
                </p>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  Once registered, nurses can work in hospitals, clinics, or private healthcare settings. A nursing degree in the UK typically 
                  takes four years to complete and includes both theoretical learning and practical training through hospital placements.
                </p>
              </div>

              {/* Best Universities */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Top 10 UK Universities for Nursing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { rank: 1, name: "University of Dundee", location: "Scotland" },
                    { rank: 2, name: "University of Glasgow", location: "Scotland" },
                    { rank: 3, name: "University of Edinburgh", location: "Scotland" },
                    { rank: 4, name: "University of Liverpool", location: "England" },
                    { rank: 5, name: "Kingston University London", location: "England" },
                    { rank: 6, name: "University of York", location: "England" },
                    { rank: 7, name: "Manchester Metropolitan University", location: "England" },
                    { rank: 8, name: "Cardiff University", location: "Wales" },
                    { rank: 9, name: "University of Sheffield", location: "England" },
                    { rank: 10, name: "University of Northampton", location: "England" }
                  ].map((uni, index) => (
                    <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{uni.rank}. {uni.name}</h3>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {uni.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">{uni.rank}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Eligibility Criteria */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Eligibility Criteria for International Students
                </h2>
                <div className="bg-white rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Academic Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-sm">Qualifications equal to UK A-levels or relevant bachelor's degree</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-sm">Strong background in sciences (Biology, Chemistry)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Other Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-sm">IELTS 7.0 overall, 6.5 in each section</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-sm">Pass character and health checks</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-sm">Criminal record check (DBS)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Required Documents */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Required Documents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Academic Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Academic transcripts</li>
                      <li>• Certificates of graduation</li>
                      <li>• English language proficiency (IELTS/TOEFL)</li>
                      <li>• Personal statement</li>
                      <li>• Letters of recommendation</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Personal Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Valid passport</li>
                      <li>• CV/Resume</li>
                      <li>• Proof of funds</li>
                      <li>• DBS check</li>
                      <li>• Medical check</li>
                      <li>• NMC account (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Application Process
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">1</div>
                      <h3 className="text-lg font-semibold">Choose Your University & Program</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Research nursing programs (Adult Nursing, Mental Health Nursing, etc.) and check entry requirements</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">2</div>
                      <h3 className="text-lg font-semibold">Apply Through UCAS</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Create UCAS account, write personal statement, and submit references</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">3</div>
                      <h3 className="text-lg font-semibold">Prove English Proficiency</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Take IELTS or equivalent test and check each university's specific requirements</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">4</div>
                      <h3 className="text-lg font-semibold">Complete Additional Requirements</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Health checks, DBS check, immunization records, and possible interview</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">5</div>
                      <h3 className="text-lg font-semibold">After Applying</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Track UCAS application, accept offer, arrange accommodation, and prepare for studies</p>
                  </div>
                </div>
              </section>

              {/* Cost Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Cost for International Students
                </h2>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Tuition Fees</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Standard Universities:</span>
                          <span className="font-semibold">£14,000-£30,000/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Private Institutions:</span>
                          <span className="font-semibold">Up to £35,000/year</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Financial Support</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span>Scholarships available</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span>Financial aid programs</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span>NHS bursaries (for some programs)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Career Prospects */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Career Prospects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Work Settings</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• NHS hospitals and clinics</li>
                      <li>• Private healthcare facilities</li>
                      <li>• Community health centers</li>
                      <li>• Residential care homes</li>
                      <li>• Mental health services</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Specializations</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Adult nursing</li>
                      <li>• Mental health nursing</li>
                      <li>• Children's nursing</li>
                      <li>• Learning disability nursing</li>
                      <li>• Midwifery</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* NHS Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  NHS Career Pathway
                </h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-blue-900">NHS Employment</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The National Health Service (NHS) offers structured career progression with standardized pay scales. 
                    Nurses advance through different bands based on experience and qualifications.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Band 5</h4>
                      <p className="text-sm text-gray-600">Newly qualified nurses</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Band 6</h4>
                      <p className="text-sm text-gray-600">Experienced nurses, team leaders</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Band 7+</h4>
                      <p className="text-sm text-gray-600">Senior nurses, managers</p>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Guidance?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get expert advice on nursing programs in the UK
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">+92 304 1110947</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">info@dunyaconsultants.com</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4">
                  Get Consultation
                </button>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#universities" className="block text-sm text-gray-600 hover:text-blue-600">Top Universities</a>
                  <a href="#eligibility" className="block text-sm text-gray-600 hover:text-blue-600">Eligibility</a>
                  <a href="#documents" className="block text-sm text-gray-600 hover:text-blue-600">Documents</a>
                  <a href="#application" className="block text-sm text-gray-600 hover:text-blue-600">Application Process</a>
                  <a href="#cost" className="block text-sm text-gray-600 hover:text-blue-600">Cost Information</a>
                  <a href="#career" className="block text-sm text-gray-600 hover:text-blue-600">Career Prospects</a>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/uk-internship-international-students" className="block p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">UK Internships</h4>
                    <p className="text-xs text-gray-600 mt-1">For international students</p>
                  </a>
                  <a href="/blog/improve-ielts-listening-skills" className="block p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">IELTS Preparation</h4>
                    <p className="text-xs text-gray-600 mt-1">Improve listening skills</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to pursue nursing studies in the UK? Contact our expert team for personalized guidance and comprehensive support throughout your application journey.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}