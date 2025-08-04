import React from 'react';
import { Scale, GraduationCap, FileText, Users, CheckCircle, BookOpen, AlertTriangle } from 'lucide-react';

export default function UKLLMPakistaniBar() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">From UK LLM to Pakistani Bar</h1>
              <p className="mt-2 text-gray-600">Complete Guide for Legal Practice Conversion</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Scale className="w-4 h-4 mr-1" />
                Legal Education
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
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                  alt="UK LLM to Pakistani Bar"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Quick Overview */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">LLM Duration: 1-2 years</span>
                  </div>
                  <div className="flex items-center">
                    <Scale className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Pakistani LLB Required</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Bar Council Registration</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Additional Qualification Needed</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  An LLM (Master of Laws) from the UK is a prestigious postgraduate degree that allows Pakistani students to specialize 
                  in specific areas of law. While UK law degrees are internationally respected, having a UK LLB or LLM alone does not 
                  automatically qualify you to practice law in Pakistan.
                </p>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                  <div className="flex">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-amber-800">
                        <strong>Important:</strong> You must complete additional requirements including a one-year Graduate Diploma in Law 
                        (Law Conversion Course) and register with the Pakistan Bar Council to practice law in Pakistan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility for Pakistani Bar */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Eligibility to Practice Law in Pakistan
                </h2>
                <div className="bg-white rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Bar Council Registration</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          You must register with the Pakistan Bar Council to practice law in Pakistan
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Additional Qualification Required</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          UK LLM alone cannot qualify you for Pakistani law practice without proper registration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Foreign Law Consultation</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          You can provide legal advice on foreign and international laws in Pakistan with proper qualifications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pakistani Legal System */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Understanding the Pakistani Legal System
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Legal Profession Structure</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Advocates (similar to UK barristers)</li>
                      <li>• No solicitor role in Pakistan</li>
                      <li>• LLB from recognized Pakistani university required</li>
                      <li>• Bar Association registration mandatory</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Legal Framework</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Mix of British common law and Islamic law</li>
                      <li>• English language legal documents</li>
                      <li>• Local legal procedures essential</li>
                      <li>• Strong legal networking important</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Role of UK LLM */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Role of UK LLM in Pakistani Legal Career
                </h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-3">Advantages</h3>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Specialized expertise in specific law areas</li>
                        <li>• Enhanced international law knowledge</li>
                        <li>• Stronger academic credentials</li>
                        <li>• Better opportunities in corporate law</li>
                        <li>• Academic career possibilities</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-3">Limitations</h3>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Does not automatically qualify for practice</li>
                        <li>• Additional Pakistani qualifications needed</li>
                        <li>• Local law study required</li>
                        <li>• Bar Council registration essential</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Steps to Practice Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Steps to Practice Law in Pakistan
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">1</div>
                      <h3 className="text-lg font-semibold">Complete Pakistani LLB</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      If you don't have an LLB from Pakistan, you must complete one from a recognized Pakistani university
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">2</div>
                      <h3 className="text-lg font-semibold">Apply to Pakistan Bar Council</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      After earning LLB, apply to join the Pakistan Bar Council to become a licensed advocate
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">3</div>
                      <h3 className="text-lg font-semibold">Complete Registration Process</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Submit necessary documents, pay fees, and take oath before starting practice
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">4</div>
                      <h3 className="text-lg font-semibold">Gain Local Experience</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Intern or work in Pakistan to understand local laws and build professional connections
                    </p>
                  </div>
                </div>
              </section>

              {/* Important Considerations */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Important Considerations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Legal System Differences</h3>
                    <p className="text-sm text-blue-800">
                      Pakistani law differs from UK law, requiring study of local legal procedures and practices
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Language Advantage</h3>
                    <p className="text-sm text-blue-800">
                      Many legal documents are in English, making good language skills beneficial
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Professional Networking</h3>
                    <p className="text-sm text-blue-800">
                      Building connections in the legal community opens better career opportunities
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Continuous Learning</h3>
                    <p className="text-sm text-blue-800">
                      Stay updated with Pakistani legal developments and procedural changes
                    </p>
                  </div>
                </div>
              </section>

              {/* Career Options */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Career Options with UK LLM
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Legal Consultant</h3>
                      <p className="text-sm text-gray-600">
                        Provide expertise on international and foreign law matters
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Corporate Lawyer</h3>
                      <p className="text-sm text-gray-600">
                        Work with multinational companies on cross-border legal issues
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Academic Career</h3>
                      <p className="text-sm text-gray-600">
                        Teach law or conduct research at universities
                      </p>
                    </div>
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
                    <h3 className="font-semibold text-gray-900 mb-2">What is the scope of bar at law in UK for Pakistani students?</h3>
                    <p className="text-gray-600">
                      Pakistani students who want to become barristers in the UK must complete a law degree, 
                      Bar training course, and practical training (pupillage) before qualifying as a barrister.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What is a law degree duration in Pakistan?</h3>
                    <p className="text-gray-600">
                      In Pakistan, a law degree takes five years to complete. Before 2016, it was a three-year program, 
                      but the Pakistan Bar Council changed it to five years.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Can I study British law in Pakistan?</h3>
                    <p className="text-gray-600">
                      Yes, you can study British law in Pakistan through the University of London (UOL) LLB (Hons) program. 
                      It is recognized by the HEC and Pakistan Bar Council.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Education Guidance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get expert advice on UK legal education and Pakistani bar requirements
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

              {/* Quick Navigation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#eligibility" className="block text-gray-600 hover:text-blue-600">Eligibility Requirements</a>
                  <a href="#legal-system" className="block text-gray-600 hover:text-blue-600">Pakistani Legal System</a>
                  <a href="#uk-llm-role" className="block text-gray-600 hover:text-blue-600">Role of UK LLM</a>
                  <a href="#steps" className="block text-gray-600 hover:text-blue-600">Steps to Practice</a>
                  <a href="#considerations" className="block text-gray-600 hover:text-blue-600">Important Considerations</a>
                  <a href="#career" className="block text-gray-600 hover:text-blue-600">Career Options</a>
                  <a href="#faqs" className="block text-gray-600 hover:text-blue-600">FAQs</a>
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/engineering-law-canada" className="block p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Engineering & Law in Canada</h4>
                    <p className="text-xs text-gray-600 mt-1">Best universities for Pakistani students</p>
                  </a>
                  <a href="/blog/study-nursing-uk" className="block p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Study Nursing in UK</h4>
                    <p className="text-xs text-gray-600 mt-1">Complete guide for students</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}