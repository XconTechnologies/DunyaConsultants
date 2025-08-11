import React from 'react';
import { Calendar, Clock, User, FileText, GraduationCap, CheckCircle, Users, AlertCircle, BookOpen, DollarSign, MapPin, Award } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function StudyInAustraliaGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study Destination
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Study in Australia: Complete Guide for Pakistani Students
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Everything Pakistani students need to know about studying in Australia including visa requirements, top universities, work opportunities, and pathway to permanent residence.
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
                <span>13 min read</span>
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
                  Australia stands as one of the world's most sought-after destinations for international education, offering Pakistani students exceptional opportunities for both academic advancement and career development. With 42 public and private universities offering over 22,000 programs, Australia provides a diverse range of educational pathways for international students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Known for its highest ranking standard of living, globally recognized institutes, and strong emphasis on research, Australia offers a unique combination of quality education and excellent lifestyle. The country's diverse environment and real-world learning approach make it an ideal destination for Pakistani students seeking comprehensive educational experiences.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This comprehensive guide covers everything Pakistani students need to know about studying in Australia, from admission requirements to visa processes and work opportunities.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-study-australia" className="hover:#1845B3">Why Choose to Study in Australia?</a></li>
                  <li><a href="#education-system" className="hover:#1845B3">Australian Education System</a></li>
                  <li><a href="#visa-requirements" className="hover:#1845B3">Study Visa Requirements</a></li>
                  <li><a href="#english-requirements" className="hover:#1845B3">English Language Requirements</a></li>
                  <li><a href="#tuition-costs" className="hover:#1845B3">Tuition Fees and Living Costs</a></li>
                  <li><a href="#documents-checklist" className="hover:#1845B3">Required Documents</a></li>
                  <li><a href="#work-opportunities" className="hover:#1845B3">Work Opportunities</a></li>
                  <li><a href="#faqs" className="hover:#1845B3">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Australia Overview */}
              <div className="bg-blue-50 border-l-4 #1D50C9 p-6 mb-8">
                <h3 className="text-xl font-semibold text-#1565c0 mb-4">Study in Australia at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Universities:</strong> 42 institutions</p>
                    <p className="text-gray-700 mb-2"><strong>Programs:</strong> 22,000+ courses</p>
                    <p className="text-gray-700 mb-2"><strong>Visa Fee:</strong> 630 AUD</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Work Hours:</strong> 20 hours/week</p>
                    <p className="text-gray-700 mb-2"><strong>Quality Ranking:</strong> Highest living standards</p>
                    <p className="text-gray-700"><strong>Focus:</strong> Research & real-world learning</p>
                  </div>
                </div>
              </div>

              {/* Why Study in Australia Section */}
              <section id="why-study-australia" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Why Choose to Study in Australia?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Australia offers numerous advantages that make it an exceptional destination for Pakistani students seeking quality education and excellent career prospects.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Highest Ranking Standard of Living
                      </h3>
                      <p className="text-gray-700">Australia consistently ranks among the top countries worldwide for quality of life and living standards.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Lower Living Expenses and Tuition Fees
                      </h3>
                      <p className="text-gray-700">Competitive tuition fees and reasonable living costs compared to other English-speaking countries.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Globally Recognized Institutes
                      </h3>
                      <p className="text-gray-700">Australian universities are internationally recognized and consistently rank among the world's best.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Diverse Environment
                      </h3>
                      <p className="text-gray-700">Multicultural society with students from around the world, creating a rich cultural experience.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Great Emphasis on Research
                      </h3>
                      <p className="text-gray-700">Access to world-class research facilities and opportunities to participate in cutting-edge research projects.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Real-world Learning
                      </h3>
                      <p className="text-gray-700">Practical, industry-focused education that prepares students for successful careers.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Work While Studying
                      </h3>
                      <p className="text-gray-700">Permission to work up to 20 hours per week while studying to gain experience and offset living costs.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Post-Study Work Opportunities
                      </h3>
                      <p className="text-gray-700">Excellent post-graduation work opportunities and pathways to permanent residence.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Visa Requirements Section */}
              <section id="visa-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Study Visa Requirements for Pakistani Students</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pakistani students must obtain a Student visa (subclass 500) to study in Australia. The visa fee is 630 AUD.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-#1565c0 mb-3">Essential Requirements</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Original Passport:</strong> Valid for the duration of your stay</li>
                      <li>• <strong>Proof of Enrollment:</strong> Confirmation of Enrollment (CoE) from Australian institution</li>
                      <li>• <strong>GTE Statement:</strong> Genuine Temporary Entrant statement</li>
                      <li>• <strong>Academic Documents:</strong> All educational certificates and transcripts</li>
                      <li>• <strong>Work Experience Documents:</strong> If applicable</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-#1565c0 mb-3">Additional Requirements</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>IELTS Test Scorecard:</strong> Meeting university and visa requirements</li>
                      <li>• <strong>Financial Evidence:</strong> Proof of sufficient funds for tuition and living expenses</li>
                      <li>• <strong>Passport-sized Photographs:</strong> Recent color photographs</li>
                      <li>• <strong>Health Insurance:</strong> Overseas Student Health Cover (OSHC)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-#1565c0 mb-3">Supporting Documents</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• High school transcripts</li>
                      <li>• Transcripts from all post-secondary institutions</li>
                      <li>• Bank statements for the last four months</li>
                      <li>• Medical certificate and biometric information</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* English Requirements Section */}
              <section id="english-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">English Language Requirements</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Australian universities require proof of English proficiency for both admission and visa purposes.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-#1565c0">IELTS Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Undergraduate Programs:</h4>
                      <p className="text-gray-700">6.5 overall with no less than 6.0 in any band</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Postgraduate Programs:</h4>
                      <p className="text-gray-700">6.5 overall with no less than 6.0 in any band</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>* Some programs may require higher scores. Always check specific university requirements.</p>
                  </div>
                </div>
              </section>

              {/* Tuition Costs Section */}
              <section id="tuition-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Tuition Fees and Living Costs</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Australia offers competitive tuition fees with excellent value for money considering the quality of education.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-#1565c0">Undergraduate Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">AUD $17,000 - $50,000</div>
                      <p className="text-gray-700 text-sm">per year (varies by program and university)</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-#1565c0">Graduate Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">AUD $17,000 - $53,000</div>
                      <p className="text-gray-700 text-sm">per year (varies by program and university)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Living Expenses</h3>
                  <p className="text-gray-700">Average living costs range from AUD $20,000 to $25,000 per year, including accommodation, food, transportation, and other personal expenses.</p>
                </div>
              </section>

              {/* Work Opportunities Section */}
              <section id="work-opportunities" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Work Opportunities</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-#1565c0 mb-3">Work While Studying</h3>
                  <p className="text-gray-700 mb-4">International students can work up to 20 hours per week during studies and full-time during study breaks.</p>
                  
                  <h3 className="text-lg font-semibold text-#1565c0 mb-3 mt-6">Post-Study Work Rights</h3>
                  <p className="text-gray-700">Graduates may be eligible for Temporary Graduate visa (subclass 485) allowing them to work in Australia after completing their studies.</p>
                </div>
              </section>

              {/* Documents Checklist Section */}
              <section id="documents-checklist" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Required Documents Checklist</h2>
                
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Original Passport
                    </h3>
                    <p className="text-gray-700">Valid passport for the duration of your intended stay.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      All Attested Educational Documents
                    </h3>
                    <p className="text-gray-700">Complete academic transcripts and certificates, properly attested.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Degree & Transcript Attested Copies
                    </h3>
                    <p className="text-gray-700">Official copies of degrees and transcripts, properly attested.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      IELTS / PTE / TOEFL Score Card
                    </h3>
                    <p className="text-gray-700">Valid English proficiency test scores meeting university and visa requirements.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-#1565c0 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Supporting Documents
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Experience Certificate (if applicable)</li>
                      <li>• 2 Recommendation Letters</li>
                      <li>• GRE / GMAT (Optional, program dependent)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What is the visa fee for Australian student visa?</h3>
                    <p className="text-gray-700">The student visa (subclass 500) fee is 630 AUD for Pakistani students.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Can I work while studying in Australia?</h3>
                    <p className="text-gray-700">Yes, international students can work up to 20 hours per week during studies and full-time during holiday breaks.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Are there scholarships available for Pakistani students?</h3>
                    <p className="text-gray-700">Yes, there are various scholarships available for Pakistani students based on merit, need, and other criteria.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What is the minimum IELTS score required?</h3>
                    <p className="text-gray-700">Generally, a minimum IELTS score of 6.5 overall with no band less than 6.0 is required, though requirements may vary by university and program.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Can I apply for permanent residence after graduating?</h3>
                    <p className="text-gray-700">Yes, Australia offers various pathways to permanent residence for international graduates, including the Temporary Graduate visa and skilled migration programs.</p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-#1565c0 mb-4">Ready to Start Your Australia Study Journey?</h3>
                <p className="text-gray-700 mb-6">Dunya Consultants provides comprehensive guidance for Australian university applications, visa processes, and scholarship opportunities. Contact us for expert assistance.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="#1845B3 text-white px-6 py-3 rounded-lg font-medium hover:bg-#1a73e8 transition-colors">
                    Get Free Consultation
                  </a>
                  <a href="tel:+923041110947" className="border #1845B3 #1845B3 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
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
                <h3 className="text-lg font-semibold mb-4 text-#1565c0">Quick Study Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Fee:</span>
                    <span className="font-medium">630 AUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Programs:</span>
                    <span className="font-medium">22,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Hours:</span>
                    <span className="font-medium">20/week</span>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/global-talent-visa-australia" className="block #1845B3 hover:text-#1565c0 text-sm">Global Talent Visa Australia</a>
                  <a href="/blog/study-in-uk-complete-guide" className="block #1845B3 hover:text-#1565c0 text-sm">Study in UK Guide</a>
                  <a href="/blog/study-in-canada-complete-guide" className="block #1845B3 hover:text-#1565c0 text-sm">Study in Canada Guide</a>
                  <a href="/blog/ielts-preparation-tips-and-tricks" className="block #1845B3 hover:text-#1565c0 text-sm">IELTS Preparation Tips</a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Dunya Consultants</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Phone:</strong> +92 304 111 0947</p>
                  <p><strong>Email:</strong> info@dunyaconsultants.com</p>
                  <p><strong>Address:</strong> Alif Tower, Buhadur Shah Zafar Road, Sargodha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}