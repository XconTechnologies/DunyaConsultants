import React from 'react';
import { Calendar, Clock, User, ArrowLeft, Phone, Mail, MapPin, ExternalLink, Download, Star, CheckCircle, AlertTriangle, BookOpen, GraduationCap, Globe } from 'lucide-react';
import { Link } from 'wouter';

export default function StudyGapAcceptableUKMasters() {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{ backgroundColor: '#124FD3' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-white">Study Gap UK Masters</span>
              </div>
            </nav>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                <BookOpen className="w-3 h-3 mr-1" />
                Study Abroad Guide
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              How Much Study Gap is Acceptable in UK for Masters?
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 25, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Complete guide to understanding study gap acceptance for UK Masters programs, including acceptable gap periods, documentation requirements, and tips for strengthening your application.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Quick Summary */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Quick Summary
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• UK universities generally accept study gaps of 1-5 years for Masters programs</li>
                  <li>• Gaps above 5 years require strong justification and documentation</li>
                  <li>• Work experience during gaps is viewed positively</li>
                  <li>• Professional development and skill enhancement strengthen applications</li>
                </ul>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  <li><a href="#acceptable-gap" className="text-blue-600 hover:text-blue-800 transition-colors">What is an Acceptable Study Gap?</a></li>
                  <li><a href="#gap-categories" className="text-blue-600 hover:text-blue-800 transition-colors">Study Gap Categories</a></li>
                  <li><a href="#documentation" className="text-blue-600 hover:text-blue-800 transition-colors">Required Documentation</a></li>
                  <li><a href="#strengthen-application" className="text-blue-600 hover:text-blue-800 transition-colors">How to Strengthen Your Application</a></li>
                  <li><a href="#university-specific" className="text-blue-600 hover:text-blue-800 transition-colors">University-Specific Requirements</a></li>
                  <li><a href="#faqs" className="text-blue-600 hover:text-blue-800 transition-colors">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  One of the most common concerns for Pakistani students planning to pursue a Masters degree in the UK is whether their study gap will affect their admission chances. The good news is that UK universities are generally understanding about study gaps, especially when they are well-justified and documented properly.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  This comprehensive guide will help you understand what constitutes an acceptable study gap, how to document it effectively, and strategies to strengthen your application regardless of your gap period.
                </p>
              </div>

              {/* What is an Acceptable Study Gap */}
              <section id="acceptable-gap" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  What is an Acceptable Study Gap?
                </h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Generally Acceptable Gaps</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>1-2 years:</strong> Widely accepted with minimal documentation</li>
                    <li>• <strong>3-5 years:</strong> Acceptable with proper justification</li>
                    <li>• <strong>5+ years:</strong> Requires strong documentation and compelling reasons</li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Most UK universities understand that students may take gaps for various legitimate reasons including work experience, family commitments, financial preparation, or personal development. The key is demonstrating how you utilized this time productively.
                </p>
              </section>

              {/* Study Gap Categories */}
              <section id="gap-categories" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Study Gap Categories and Acceptance
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Positive Gap Activities
                    </h3>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Full-time work experience</li>
                      <li>• Professional certifications</li>
                      <li>• Internships and training</li>
                      <li>• Entrepreneurial ventures</li>
                      <li>• Volunteer work</li>
                      <li>• Language learning</li>
                      <li>• Research projects</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
                      Gaps Requiring Justification
                    </h3>
                    <ul className="space-y-2 text-yellow-700 text-sm">
                      <li>• Health issues</li>
                      <li>• Family emergencies</li>
                      <li>• Financial constraints</li>
                      <li>• Travel/exploration</li>
                      <li>• Career exploration</li>
                      <li>• Personal development</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Required Documentation */}
              <section id="documentation" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Required Documentation for Study Gaps
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Employment Gaps</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Employment certificates and experience letters</li>
                      <li>• Salary certificates or pay slips</li>
                      <li>• Job responsibilities and achievements</li>
                      <li>• Professional development activities</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal/Health Gaps</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Medical certificates (if health-related)</li>
                      <li>• Statement of purpose explaining the gap</li>
                      <li>• Evidence of productive activities during the gap</li>
                      <li>• Family responsibility documentation (if applicable)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparation Gaps</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Language test preparation certificates</li>
                      <li>• Professional course completions</li>
                      <li>• Internship certificates</li>
                      <li>• Volunteer work documentation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How to Strengthen Your Application */}
              <section id="strengthen-application" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  How to Strengthen Your Application with Study Gaps
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Statement of Purpose Tips</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Address the gap directly and honestly</li>
                      <li>• Highlight skills gained during the gap</li>
                      <li>• Connect gap experience to your chosen course</li>
                      <li>• Show personal and professional growth</li>
                      <li>• Demonstrate renewed academic focus</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Supporting Documents</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Strong academic transcripts</li>
                      <li>• Professional recommendations</li>
                      <li>• Updated CV with gap explanation</li>
                      <li>• Portfolio of work/projects</li>
                      <li>• Certification from gap activities</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-3">Pro Tip</h3>
                  <p className="text-indigo-800">
                    Frame your study gap as a period of intentional growth and preparation for advanced studies. Universities value students who have real-world experience and clear academic goals.
                  </p>
                </div>
              </section>

              {/* University-Specific Requirements */}
              <section id="university-specific" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  University-Specific Gap Policies
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">University Tier</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Acceptable Gap</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Documentation Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3">Top Russell Group</td>
                        <td className="border border-gray-300 px-4 py-3">1-3 years (preferred)</td>
                        <td className="border border-gray-300 px-4 py-3">Comprehensive</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Mid-tier Universities</td>
                        <td className="border border-gray-300 px-4 py-3">1-5 years</td>
                        <td className="border border-gray-300 px-4 py-3">Moderate</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3">Post-92 Universities</td>
                        <td className="border border-gray-300 px-4 py-3">Up to 7 years</td>
                        <td className="border border-gray-300 px-4 py-3">Basic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Is a 3-year study gap acceptable for UK Masters?</h3>
                    <p className="text-gray-700">Yes, a 3-year gap is generally acceptable if you can demonstrate productive use of time through work experience, professional development, or other meaningful activities.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Do I need to explain gaps of less than 1 year?</h3>
                    <p className="text-gray-700">Short gaps under 1 year typically don't require detailed explanation, but mentioning any productive activities can strengthen your application.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can work experience compensate for a longer study gap?</h3>
                    <p className="text-gray-700">Absolutely. Relevant work experience is highly valued and can actually strengthen your application, especially for professional Masters programs.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What if I have multiple study gaps?</h3>
                    <p className="text-gray-700">Multiple gaps require careful explanation showing a clear progression in your academic and professional journey. Focus on the learning and growth from each period.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Conclusion
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Study gaps are not necessarily barriers to UK Masters admission. What matters most is how you present and justify your gap period. With proper documentation, a strong statement of purpose, and evidence of productive use of time, you can successfully apply to UK universities regardless of your study gap.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Remember that many successful students have had study gaps, and universities understand that life doesn't always follow a linear academic path. The key is demonstrating maturity, clear goals, and readiness for advanced study.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help with Your UK Application?</h3>
                <p className="text-lg mb-6">Our experienced counselors can help you present your study gap positively and strengthen your UK Masters application.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+923041110947" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Call Now: +92 304 1110947
                  </a>
                  <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Acceptable Gap:</span>
                    <span className="font-medium">1-5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Documentation:</span>
                    <span className="font-medium">Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Experience:</span>
                    <span className="font-medium">Beneficial</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Impact:</span>
                    <span className="font-medium">Positive if justified</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Expert Guidance</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                      <option value="">Study Gap Duration</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Get Free Consultation
                  </button>
                </form>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <Link href="/blog/uk-student-visa-requirements" className="block p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">UK Student Visa Requirements</h4>
                    <p className="text-gray-600 text-xs">Complete guide to UK student visa application process</p>
                  </Link>
                  <Link href="/blog/best-uk-universities" className="block p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Best UK Universities for Masters</h4>
                    <p className="text-gray-600 text-xs">Top universities for international students</p>
                  </Link>
                  <Link href="/blog/uk-masters-application" className="block p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">UK Masters Application Guide</h4>
                    <p className="text-gray-600 text-xs">Step-by-step application process</p>
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Dunya Consultants</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    <span>+92 304 1110947</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <span>info@dunyaconsultants.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Sargodha, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}