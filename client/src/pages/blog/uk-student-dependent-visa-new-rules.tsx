import React from 'react';
import { Calendar, Clock, User, AlertTriangle, FileText, CheckCircle, Users, DollarSign } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function UKStudentDependentVisaNewRules() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Visa Guide
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-[1.5rem]">
              UK Student Dependent Visa – News, Requirements & Process Fees
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Latest updates on UK dependent visa requirements, new immigration rules, and comprehensive guide for bringing family members as dependents.
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
                  The UK student dependent visa type is one of the most well-known among students who are willing to bring their family members with them. Dependents usually include civil partners, spouses, unmarried partners, and children below eighteen years old. However, the UK student dependent visa new rules can vary based on the program of students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Master's or PhD students can typically take their family members with them without many restrictions. On the other hand, undergraduate as well as postgraduate students might have stricter rules about whether their partner, spouse, or kids can join them while studying in the United Kingdom.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  However, those who are extending their UK student visa or kids who are now more than eighteen years old can apply for permission to stay in the UK as dependents. It is essential to understand the eligibility criteria and requirements before applying for a dependent visa UK.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#eligibility-criteria" className="hover:bg-[#1845B3]">Eligibility Criteria</a></li>
                  <li><a href="#new-rules-2024" className="hover:bg-[#1845B3]">New Rules 2024 Updates</a></li>
                  <li><a href="#requirements" className="hover:bg-[#1845B3]">Required Documents</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">Application Process</a></li>
                  <li><a href="#visa-fees" className="hover:bg-[#1845B3]">Visa Fees Breakdown</a></li>
                  <li><a href="#important-notices" className="hover:bg-[#1845B3]">Important Policy Changes</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Important Notice */}
              <div className="bg-blue-50 border-l-4 #1D50C9 p-6 mb-8">
                <h3 className="text-xl font-semibold text-[#1565c0] mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Important 2024 Policy Changes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 #1D50C9 mr-3 mt-1" />
                    Master's students (except research-based) are no longer eligible to bring dependents
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 #1D50C9 mr-3 mt-1" />
                    New financial requirements and documentation needed
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 #1D50C9 mr-3 mt-1" />
                    Increased visa fees and processing times
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 #1D50C9 mr-3 mt-1" />
                    Stricter application requirements for all categories
                  </li>
                </ul>
              </div>

              {/* Eligibility Criteria Section */}
              <section id="eligibility-criteria" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Eligibility Criteria for UK Student Dependent Visa</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The UK dependent visa new rules for bringing family members along with you as dependents depend on numerous factors. Let's discuss the eligibility criteria below:
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Eligible Student Categories
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• PhD and research-based Master's students</li>
                      <li>• Students sponsored by government or university</li>
                      <li>• Students on courses 9 months or longer (conditions apply)</li>
                      <li>• Students under Doctorate Extension Scheme (DES)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Who Can Apply as Dependents
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Spouse or civil partner</li>
                      <li>• Unmarried partner (in relationship 2+ years)</li>
                      <li>• Children under 18 years old</li>
                      <li>• Children over 18 (if already in UK as dependents)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* New Rules 2024 Section */}
              <section id="new-rules-2024" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Major Changes in 2024 UK Immigration Rules</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Master's Students Restriction</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Effective January 2024:</strong> Most Master's degree students can no longer bring dependents to the UK. This affects:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Taught Master's programs (MSc, MA, MBA, etc.)</li>
                      <li>• Professional qualification courses</li>
                      <li>• Pre-Master's and pathway programs</li>
                    </ul>
                    <p className="text-#1a73e8 mt-3">
                      <strong>Exceptions:</strong> Research-based Master's (MRes, MPhil) and PhD students can still bring dependents.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Increased Financial Requirements</h3>
                    <p className="text-gray-700 mb-3">New maintenance fund requirements:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• £845 per month for spouse/partner (increased from £680)</li>
                      <li>• £680 per month for first child (increased from £540)</li>
                      <li>• £565 per month for additional children (increased from £450)</li>
                      <li>• Funds must be held for 28 consecutive days before application</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Requirements Section */}
              <section id="requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Student Dependent Visa UK Requirements</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  For student dependent visa requirements, there is a list of documents that is mandatory for applying. Let's have a look at these documents below:
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-2">Essential Documents</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Student PBS Dependent Form (completed online application)</li>
                      <li>• Valid passport with blank pages</li>
                      <li>• Biometric Residence Permit (BRP) of main applicant</li>
                      <li>• Financial proof (bank statements/sponsorship letters)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-2">Relationship Documents</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Marriage certificate (for spouse applications)</li>
                      <li>• Birth certificate (for children under 18)</li>
                      <li>• Evidence of relationship (for unmarried partners)</li>
                      <li>• Custody documents (if applicable)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-2">Student Status Documents</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Copy of student visa or BRP</li>
                      <li>• University enrollment confirmation letter</li>
                      <li>• Course completion certificate (if extending)</li>
                      <li>• Police registration certificate (if required)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-2">Additional Requirements for Children 16+</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Educational enrollment evidence</li>
                      <li>• Proof of financial dependency</li>
                      <li>• Accommodation arrangements</li>
                      <li>• Consent letters from both parents</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Application Process Section */}
              <section id="application-process" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Step-by-Step Application Process</h2>
                
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 #1845B3 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">1</div>
                      <h3 className="text-lg font-semibold text-gray-800">Check Eligibility</h3>
                    </div>
                    <p className="text-gray-700">Verify that the main student is eligible to bring dependents based on current immigration rules and course type.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 #1845B3 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">2</div>
                      <h3 className="text-lg font-semibold text-gray-800">Gather Documents</h3>
                    </div>
                    <p className="text-gray-700">Collect all required documents including relationship proof, financial evidence, and student status documentation.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 #1845B3 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">3</div>
                      <h3 className="text-lg font-semibold text-gray-800">Complete Online Application</h3>
                    </div>
                    <p className="text-gray-700">Fill out the dependent visa application form online through the official UK government website.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 #1845B3 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">4</div>
                      <h3 className="text-lg font-semibold text-gray-800">Pay Fees & Book Appointment</h3>
                    </div>
                    <p className="text-gray-700">Pay the visa fees and book biometric appointment at nearest visa application center.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 #1845B3 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">5</div>
                      <h3 className="text-lg font-semibold text-gray-800">Attend Biometric Appointment</h3>
                    </div>
                    <p className="text-gray-700">Attend the appointment to provide biometric data and submit all required documents.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 #1845B3 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">6</div>
                      <h3 className="text-lg font-semibold text-gray-800">Wait for Decision</h3>
                    </div>
                    <p className="text-gray-700">Wait for the decision which typically takes 3-8 weeks for applications from outside the UK.</p>
                  </div>
                </div>
              </section>

              {/* Visa Fees Section */}
              <section id="visa-fees" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">UK Student Dependent Visa Fees 2024</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0] flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Current Fee Structure
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">From Outside UK:</h4>
                      <p className="text-gray-700 mb-2"><strong>Application Fee:</strong> £348 per person</p>
                      <p className="text-gray-700 mb-2"><strong>Immigration Health Surcharge:</strong> £470 per year</p>
                      <p className="text-gray-700 mb-2"><strong>Biometric Fee:</strong> Included in application</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">From Inside UK:</h4>
                      <p className="text-gray-700 mb-2"><strong>Application Fee:</strong> £475 (postal) / £1,275 (premium)</p>
                      <p className="text-gray-700 mb-2"><strong>Immigration Health Surcharge:</strong> £470 per year</p>
                      <p className="text-gray-700"><strong>Total Cost:</strong> £818 - £1,745 per person</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Important Notices Section */}
              <section id="important-notices" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Important Policy Updates & Notices</h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Master's Students Notice</h3>
                    <p className="text-gray-700">
                      As of January 2024, most Master's degree students cannot bring dependents. This significantly affects international students planning to study with their families. Only research-based programs (MRes, MPhil) are exempt.
                    </p>
                  </div>
                  
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Processing Time Updates</h3>
                    <p className="text-gray-700">
                      Current processing times are longer than usual due to high application volumes. Allow 8-12 weeks for applications from outside the UK and 4-8 weeks for applications from within the UK.
                    </p>
                  </div>
                  
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Financial Evidence Requirements</h3>
                    <p className="text-gray-700">
                      All financial documents must be in English or officially translated. Bank statements must show funds held for 28 consecutive days ending no more than 31 days before application submission.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can Master's students still bring dependents after the 2024 changes?</h3>
                    <p className="text-gray-700">Most Master's students cannot bring dependents anymore. Only research-based Master's (MRes, MPhil) and PhD students are still eligible to bring family members.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How much money do I need to show for dependent visa applications?</h3>
                    <p className="text-gray-700">You need £845 per month for spouse/partner, £680 for first child, and £565 for additional children. These funds must be held for 28 consecutive days.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can dependents work in the UK?</h3>
                    <p className="text-gray-700">Yes, dependent visa holders can work full-time in the UK without restrictions, except for professional sports or as self-employed.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What happens if my dependent visa application is refused?</h3>
                    <p className="text-gray-700">You can either reapply with additional evidence or appeal the decision if there are grounds for appeal. You cannot get a refund of the application fee.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How long can dependents stay in the UK?</h3>
                    <p className="text-gray-700">Dependents can stay for the same duration as the main student visa holder. They must leave when the student's visa expires unless they obtain their own visa.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Do children need separate applications?</h3>
                    <p className="text-gray-700">Yes, each dependent (including children) must submit a separate application with individual fees and documentation requirements.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can I apply for dependent visa after arriving in the UK?</h3>
                    <p className="text-gray-700">Yes, but it's more expensive (£475-£1,275 vs £348) and takes longer. It's generally better to apply before arriving in the UK.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  The UK student dependent visa rules have become significantly more restrictive in 2024, particularly affecting Master's students. It's crucial to understand the current eligibility criteria and requirements before applying.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  With proper preparation, eligible students can still bring their family members to the UK. However, the increased financial requirements and stricter rules mean that professional guidance is more important than ever.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#1565c0]">Need Help with UK Dependent Visa Applications?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants on UK dependent visa applications and navigate the complex requirements successfully.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="#1845B3 text-white px-6 py-3 rounded-lg font-semibold hover:bg-#1a73e8 transition-colors"
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
                  <FileText className="w-5 h-5 mr-2 #1D50C9" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Fee:</span>
                    <span className="font-medium">£348-£1,275</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-medium">3-12 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Health Surcharge:</span>
                    <span className="font-medium">£470/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Rights:</span>
                    <span className="font-medium">Full-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">2024 Changes:</span>
                    <span className="font-medium #1845B3">Major</span>
                  </div>
                </div>
              </div>

              {/* Eligible Categories */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Users className="w-5 h-5 mr-2 #1D50C9" />
                  Eligible Students
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>PhD Students</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Eligible</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Research Master's</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Eligible</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Taught Master's</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Not Eligible</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Government Sponsored</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Eligible</span>
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