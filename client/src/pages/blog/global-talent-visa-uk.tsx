import React from 'react';
import { ArrowRight, FileText, Globe, CheckCircle, Clock, DollarSign, AlertCircle, Calendar } from 'lucide-react';
import ContactSection from '@/components/blog/ContactSection';

export default function GlobalTalentVisaUK() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Global Talent Visa UK</h1>
              <p className="mt-2 text-gray-600">Complete Guide to UK's Premier Talent Immigration Route</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Globe className="w-4 h-4 mr-1" />
                UK Immigration
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Global Talent Visa UK"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Quick Facts */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Duration: Up to 5 years</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Cost: £716</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Processing: 3 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Success Rate: 95%+</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  The Global Talent Visa UK allows exceptionally skilled individuals to live and work in the UK for up to five years, 
                  with the possibility of extending stay or applying for permanent residency and eventually British citizenship. 
                  This prestigious visa route also permits bringing your partner and children to live in the UK.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-800">
                        <strong>Important Note:</strong> Dunya Consultants does not offer this visa service. 
                        This guide is for informational purposes only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Eligibility Criteria
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Strong record of achievements in your industry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Must be at least 18 years old</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Proven leadership or leadership potential in your field</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Endorsement from approved organization (arts, digital technology, science, academia)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Exceptional skills and contributions to your field</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Required Documents */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Required Documents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Personal Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Valid passport (6+ months validity)</li>
                      <li>• Birth/marriage certificates</li>
                      <li>• Tuberculosis test results (if required)</li>
                      <li>• Police clearance certificates</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Documents</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Endorsement letter from approved organization</li>
                      <li>• Awards, certificates, publications</li>
                      <li>• Financial documents</li>
                      <li>• Evidence of achievements</li>
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
                      <h3 className="text-lg font-semibold">Document Preparation</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Check required documents before starting your application</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">2</div>
                      <h3 className="text-lg font-semibold">Online Application</h3>
                    </div>
                    <p className="text-gray-600 ml-11">Apply online or at a visa application center from any country with legal residence</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">3</div>
                      <h3 className="text-lg font-semibold">Application Review</h3>
                    </div>
                    <p className="text-gray-600 ml-11">If in UK, you and family may extend or switch visa types</p>
                  </div>
                </div>
              </section>

              {/* Cost Breakdown */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Cost Breakdown
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">With Endorsement</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Endorsement Application:</span>
                          <span className="font-semibold">£524</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Visa Application:</span>
                          <span className="font-semibold">£192</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-semibold">Total:</span>
                          <span className="font-semibold text-blue-600">£716</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">With Eligible Award</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Full Application:</span>
                          <span className="font-semibold">£716</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Per Family Member:</span>
                          <span className="font-semibold">£716</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Processing Time */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Processing Time & Decision
                </h2>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-900">Standard Processing</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    After submitting your online application, confirming identity, and providing documents, 
                    you'll typically receive a decision within 3 weeks.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Applications may take longer if:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Family member requires appointment while you don't</li>
                      <li>• Documents need verification</li>
                      <li>• Interview is required</li>
                      <li>• Personal history concerns (criminal record)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Visa Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Work Flexibility</h3>
                    <p className="text-sm text-blue-800">
                      Choose to work, change jobs easily, freelance, or start your own business
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Family Inclusion</h3>
                    <p className="text-sm text-green-800">
                      Bring your partner and children to live in the UK
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Path to Settlement</h3>
                    <p className="text-sm text-purple-800">
                      Apply for permanent residency and eventually British citizenship
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-900 mb-2">Biometric Residence Permit</h3>
                    <p className="text-sm text-orange-800">
                      Receive BRP for banking, tax number, and official identification
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What is the Global Talent Visa UK success rate?</h3>
                    <p className="text-gray-600">
                      The UK Global Talent Visa has a very high approval rate, usually over 95%. 
                      Some reports indicate it can be as high as 99.2%.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">How can I get a UK exceptional talent visa?</h3>
                    <p className="text-gray-600">
                      You must demonstrate outstanding skills in your field by either winning a top award listed by the UK government 
                      or obtaining an official endorsement from an approved organization.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What is Global Talent Visa endorsement?</h3>
                    <p className="text-gray-600">
                      A Global Talent Visa endorsement is official approval from a recognized organization that confirms 
                      you are already a leader or have the potential to become one in your field.
                    </p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Assistance?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get expert consultation for your immigration needs
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
                  Contact Us
                </button>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#eligibility" className="block text-gray-600 hover:text-blue-600">Eligibility Criteria</a>
                  <a href="#documents" className="block text-gray-600 hover:text-blue-600">Required Documents</a>
                  <a href="#application" className="block text-gray-600 hover:text-blue-600">Application Process</a>
                  <a href="#cost" className="block text-gray-600 hover:text-blue-600">Cost Breakdown</a>
                  <a href="#processing" className="block text-gray-600 hover:text-blue-600">Processing Time</a>
                  <a href="#benefits" className="block text-gray-600 hover:text-blue-600">Visa Benefits</a>
                  <a href="#faqs" className="block text-gray-600 hover:text-blue-600">FAQs</a>
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/global-talent-visa-australia" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Global Talent Visa Australia</h4>
                    <p className="text-xs text-gray-600 mt-1">Complete guide to Australia's talent visa</p>
                  </a>
                  <a href="/blog/uk-internship-international-students" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">UK Internships for International Students</h4>
                    <p className="text-xs text-gray-600 mt-1">Opportunities for international students</p>
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
              Ready to apply for the UK Global Talent Visa? Contact our expert team for personalized guidance and professional support throughout your application process.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}