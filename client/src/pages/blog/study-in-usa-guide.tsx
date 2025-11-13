import React, { useState } from 'react';
import { Calendar, Clock, User, FileText, GraduationCap, CheckCircle, Users, AlertCircle, BookOpen, DollarSign, MapPin } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';
import ConsultationFormPopup from '@/components/consultation-form-popup';
import { Button } from '@/components/ui/button';
import { getBlogUrl } from '@/lib/blog-utils';

export default function StudyInUSAGuide() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-[#1D50C9] text-white px-4 py-2 rounded-full text-sm font-medium">
                Study Destination
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Study in USA: Complete Guide for Pakistani Students
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to studying in the United States including visa requirements, admission process, costs, and everything Pakistani students need to know.
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The United States of America remains one of the most popular study destinations for Pakistani students seeking world-class education. With over 5,000 higher education institutes offering programs for international students, the USA provides unparalleled opportunities for academic and professional growth.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  From prestigious Ivy League universities to innovative technology schools, the USA offers a diverse range of educational institutions. The American education system is globally recognized, and degrees from US universities open doors to excellent career opportunities worldwide.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This comprehensive guide covers everything Pakistani students need to know about studying in the USA, including admission requirements, visa process, costs, and practical tips for success.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="hidden md:block bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-study-usa" className="hover:bg-[#1845B3]">Why Choose to Study in USA?</a></li>
                  <li><a href="#education-system" className="hover:bg-[#1845B3]">USA Education System Overview</a></li>
                  <li><a href="#admission-requirements" className="hover:bg-[#1845B3]">Admission Requirements</a></li>
                  <li><a href="#visa-requirements" className="hover:bg-[#1845B3]">Study Visa Requirements</a></li>
                  <li><a href="#tuition-costs" className="hover:bg-[#1845B3]">Tuition Fees and Living Costs</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">Application Process</a></li>
                  <li><a href="#documents-checklist" className="hover:bg-[#1845B3]">Required Documents</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* USA Overview */}
              <div className="bg-blue-50 border-l-4 border-l-[#1D50C9] p-6 mb-8">
                <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Study in USA at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Universities:</strong> 5,000+ institutions</p>
                    <p className="text-gray-700 mb-2"><strong>International Students:</strong> 1 million+</p>
                    <p className="text-gray-700 mb-2"><strong>Academic Calendar:</strong> Fall, Spring, Summer</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Student Visa:</strong> F-1 Visa</p>
                    <p className="text-gray-700 mb-2"><strong>Work Opportunities:</strong> CPT & OPT available</p>
                    <p className="text-gray-700"><strong>Language:</strong> English</p>
                  </div>
                </div>
              </div>

              {/* Why Study in USA Section */}
              <section id="why-study-usa" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Why Choose to Study in USA?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The United States offers numerous advantages for international students, making it the world's top destination for higher education.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        World-recognized Education System
                      </h3>
                      <p className="text-gray-700">US universities consistently rank among the top institutions globally, offering internationally accepted degrees.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Diverse Career Opportunities
                      </h3>
                      <p className="text-gray-700">Access to internships, job placements, and networking opportunities with leading companies.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Flexible Education System
                      </h3>
                      <p className="text-gray-700">Choose from a wide variety of subjects and customize your academic path.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Research and Training Opportunities
                      </h3>
                      <p className="text-gray-700">Access to cutting-edge research facilities and training programs.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Earn While Learning
                      </h3>
                      <p className="text-gray-700">Work opportunities through CPT and OPT programs to gain experience and offset costs.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Travel Opportunities
                      </h3>
                      <p className="text-gray-700">Explore diverse states and cultures within the United States.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Visa Requirements Section */}
              <section id="visa-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Study Visa Requirements for Pakistani Students</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pakistani students must obtain an F-1 student visa to study in the USA. The visa process requires several documents and fees.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Visa Fees for Pakistani Students</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Required Fees:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>SEVIS Fee:</strong> $350</li>
                        <li>• <strong>DS-160 Appointment:</strong> $185</li>
                        <li>• <strong>Total:</strong> $535</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Important Documents:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• I-20 Certificate</li>
                        <li>• Letter of Admission</li>
                        <li>• Financial Support Documents</li>
                        <li>• Valid Passport</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">I-20 Certificate</h3>
                    <p className="text-gray-700">Certificate of Eligibility Form provided by the International Student Services Office at your university.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Financial Support Documents</h3>
                    <p className="text-gray-700">Current proof of support that covers expenses for program duration as indicated on Form I-20 (bank statements, award letters, or loan approval letters).</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Form DS-160</h3>
                    <p className="text-gray-700">Nonimmigrant Visa Application available at your local US Embassy or Consulate's website.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Additional Requirements</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Two passport-size photos</li>
                      <li>• Passport valid for minimum 6 months</li>
                      <li>• SEVIS fee receipt</li>
                      <li>• Machine Readable Visa (MRV) fee</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Tuition Costs Section */}
              <section id="tuition-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Average Annual Tuition Fees</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tuition fees in the USA vary significantly depending on the type of institution and program level.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Undergraduate Programs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Public (In-state):</span>
                        <span className="font-semibold">$27,940</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Public (Out-of-state):</span>
                        <span className="font-semibold">$45,240</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Private Universities:</span>
                        <span className="font-semibold">$57,570</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Graduate Programs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Range:</span>
                        <span className="font-semibold">$18,000 - $65,000</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-4">
                        <p>* Fees vary by program and university</p>
                        <p>* Scholarships available for Pakistani students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Documents Checklist Section */}
              <section id="documents-checklist" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Required Documents Checklist</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ensure you have all the required documents before starting your application process.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Original Passport
                    </h3>
                    <p className="text-gray-700">Ensure your passport is valid for the duration of your intended stay abroad.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Educational Documents
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Intermediate degree & result documents</li>
                      <li>• Matric degree & result documents</li>
                      <li>• BS degree + transcript (if applicable)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Test Scores
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• IELTS / PTE Score Card</li>
                      <li>• GRE / GMAT (Optional/Required by some programs)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Supporting Documents
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 2 Recommendation Letters</li>
                      <li>• Experience Certificate (if applicable)</li>
                      <li>• Statement of Purpose</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">How much does it cost to study in the USA?</h3>
                    <p className="text-gray-700">Tuition fees range from $27,940 to $57,570 for undergraduate programs and $18,000 to $65,000 for graduate programs, depending on the institution type.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Can I work while studying in the USA?</h3>
                    <p className="text-gray-700">Yes, international students can work through Curricular Practical Training (CPT) and Optional Practical Training (OPT) programs.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Are scholarships available for Pakistani students?</h3>
                    <p className="text-gray-700">Yes, there are various scholarships available for Pakistani students on merit, need-based, and other grounds.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What is the minimum IELTS score required?</h3>
                    <p className="text-gray-700">IELTS requirements vary by university and program, typically ranging from 6.0 to 7.0 overall score.</p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-[#1565c0] mb-4">Ready to Start Your USA Study Journey?</h3>
                <p className="text-gray-700 mb-6">Dunya Consultants is here to guide you through every step of the application process. Contact us today for personalized assistance.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-[#1845B3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a73e8] transition-colors">
                    Get Free Consultation
                  </a>
                  <Button 
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-white text-[#1845B3] border-2 border-[#1845B3] hover:bg-[#1845B3] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Connect now
                  </Button>
                  <a href="tel:+923041110947" className="border border-[#1845B3] text-[#1845B3] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Call Now: +92 304 111 0947
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Contact Form */}
              <ContactForm />
              
              {/* Quick Info */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-[#1565c0]">Quick Study Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Student Visa:</span>
                    <span className="font-medium">F-1 Visa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Fees:</span>
                    <span className="font-medium">$535</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-medium">5,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Permit:</span>
                    <span className="font-medium">CPT & OPT</span>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Related Articles</h3>
                <div className="space-y-3">
                  <a href={getBlogUrl("study-in-uk")} className="block #1845B3 hover:text-[#1565c0] text-sm">Study in UK: Complete Guide</a>
                  <a href={getBlogUrl("study-in-canada")} className="block #1845B3 hover:text-[#1565c0] text-sm">Study in Canada Guide</a>
                  <a href="/blog/ielts-preparation-tips-and-tricks" className="block #1845B3 hover:text-[#1565c0] text-sm">IELTS Preparation Tips</a>
                  <a href="/blog/requirements-to-study-computer-science-in-usa" className="block #1845B3 hover:text-[#1565c0] text-sm">Computer Science in USA</a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Dunya Consultants</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Phone:</strong> +92 304 111 0947</p>
                  <p><strong>Email:</strong> info@dunyaconsultants.com</p>
                  <p><strong>Address:</strong> Dunya Consultant 106 Sadium Road, Opposite Bajwa Trauma Centre, Sargodha.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Consultation Form Popup */}
      <CompactConsultationForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}