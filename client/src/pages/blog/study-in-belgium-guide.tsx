import React from 'react';
import { Calendar, Clock, User, FileText, GraduationCap, CheckCircle, Users, AlertCircle, BookOpen, DollarSign, MapPin, Globe } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function StudyInBelgiumGuide() {
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
              Study in Belgium: Complete Guide for Pakistani Students
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover Belgium's world-class universities, trilingual education system, and exceptional opportunities for Pakistani students with reasonable tuition fees and easy European access.
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
                <span>11 min read</span>
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
                  Belgium offers Pakistani students a unique gateway to European education, combining world-class academic standards with cultural diversity and innovation. Known for its multilingual environment and strategic location in the heart of Europe, Belgium provides exceptional educational opportunities with reasonable tuition fees and easy access to the rest of Europe.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a hotspot for innovation and modern infrastructure, Belgium is home to some of Europe's highest-ranking universities. The country's trilingual education system (Dutch, French, and German) offers students diverse academic perspectives, while its reputation for medical studies makes it particularly attractive for students interested in healthcare fields.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This comprehensive guide covers everything Pakistani students need to know about studying in Belgium, from admission requirements to visa processes and living opportunities.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="hidden md:block bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-study-belgium" className="hover:bg-[#1845B3]">Why Choose to Study in Belgium?</a></li>
                  <li><a href="#education-system" className="hover:bg-[#1845B3]">Belgian Education System</a></li>
                  <li><a href="#english-requirements" className="hover:bg-[#1845B3]">English Language Requirements</a></li>
                  <li><a href="#tuition-costs" className="hover:bg-[#1845B3]">Tuition Fees and Living Costs</a></li>
                  <li><a href="#visa-requirements" className="hover:bg-[#1845B3]">Study Visa Requirements</a></li>
                  <li><a href="#documents-checklist" className="hover:bg-[#1845B3]">Required Documents</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">Application Process</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Belgium Overview */}
              <div className="bg-blue-50 border-l-4 #1D50C9 p-6 mb-8">
                <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Study in Belgium at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Languages:</strong> Trilingual (Dutch, French, German)</p>
                    <p className="text-gray-700 mb-2"><strong>Location:</strong> Heart of Europe</p>
                    <p className="text-gray-700 mb-2"><strong>Speciality:</strong> Top-ranked medical programs</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Innovation Hub:</strong> Modern infrastructure</p>
                    <p className="text-gray-700 mb-2"><strong>Work Rights:</strong> Available while studying</p>
                    <p className="text-gray-700"><strong>EU Access:</strong> Easy travel to Europe</p>
                  </div>
                </div>
              </div>

              {/* Why Study in Belgium Section */}
              <section id="why-study-belgium" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Why Choose to Study in Belgium?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Belgium offers unique advantages that make it an excellent choice for Pakistani students seeking quality European education with cultural diversity.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Reasonable Tuition Fees
                      </h3>
                      <p className="text-gray-700">Competitive and affordable tuition fees compared to other European destinations.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Highest Ranking Universities
                      </h3>
                      <p className="text-gray-700">Home to some of Europe's top-ranking universities with excellent academic reputation.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Easy Access to Europe
                      </h3>
                      <p className="text-gray-700">Strategic location in the heart of Europe with easy travel access to neighboring countries.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        Multilingual Environment
                      </h3>
                      <p className="text-gray-700">Unique trilingual education system offering diverse cultural and linguistic experiences.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Top Ranked for Medicine
                      </h3>
                      <p className="text-gray-700">Internationally recognized for medical education and healthcare programs.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Hotspot for Innovation
                      </h3>
                      <p className="text-gray-700">Leading center for innovation with modern infrastructure and technology.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Diversity in Research Programs
                      </h3>
                      <p className="text-gray-700">Wide range of research opportunities across various fields and disciplines.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Trilingual Education Systems
                      </h3>
                      <p className="text-gray-700">Unique opportunity to study in Dutch, French, or German language environments.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Work Along with Studying
                      </h3>
                      <p className="text-gray-700">Opportunity to work part-time while studying to gain experience and support living expenses.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* English Requirements Section */}
              <section id="english-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">English Language Requirements</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  For programs taught in English, Belgian universities require proof of English proficiency.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">IELTS Score Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Undergraduate Programs:</h4>
                      <p className="text-gray-700">6.0 overall with no less than 5.5 in any band</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Postgraduate Programs:</h4>
                      <p className="text-gray-700">6.5 overall with no less than 5.5 in any band</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>* Requirements may vary by university and program. Some programs may be taught in Dutch, French, or German.</p>
                  </div>
                </div>
              </section>

              {/* Tuition Costs Section */}
              <section id="tuition-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Tuition Fees</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Belgium offers very competitive tuition fees, making quality European education accessible to Pakistani students.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Undergraduate Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">€950 - €7,000</div>
                      <p className="text-gray-700 text-sm">per year (depending on program selected)</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Graduate Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">€1,000 - €4,000</div>
                      <p className="text-gray-700 text-sm">per year</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Visa Requirements Section */}
              <section id="visa-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Study Visa Requirements for Pakistani Students</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pakistani students need a student visa to study in Belgium. Here are the essential requirements:
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Original Passport</h3>
                    <p className="text-gray-700">It should be valid for 3 months longer than the visa duration.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Educational Documents</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Intermediate degree and result documents (attested)</li>
                      <li>• Matric degree and result documents (attested)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">English Proficiency and Additional Documents</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• IELTS/PTE scorecard with required grades</li>
                      <li>• Experience certificate (if applicable)</li>
                      <li>• Bachelor's degree (if applicable for master's programs)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Financial and Medical Requirements</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Financial proof of ability to cover tuition and living expenses</li>
                      <li>• Medical certificate confirming good health</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Documents Checklist Section */}
              <section id="documents-checklist" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Required Documents Checklist</h2>
                
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Original Passport
                    </h3>
                    <p className="text-gray-700">Valid passport extending at least 3 months beyond visa duration.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      All Attested Educational Documents
                    </h3>
                    <p className="text-gray-700">Complete academic transcripts and certificates, properly attested.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Degree & Transcript Attested Copies
                    </h3>
                    <p className="text-gray-700">Official copies of degrees and transcripts, properly attested.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      IELTS / PTE / TOEFL Score Card
                    </h3>
                    <p className="text-gray-700">Valid English proficiency test scores meeting university requirements.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Supporting Documents
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Experience Certificate (if applicable)</li>
                      <li>• 2 Recommendation Letters</li>
                      <li>• GRE / GMAT (Optional)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What makes Belgium special for medical studies?</h3>
                    <p className="text-gray-700">Belgium is internationally recognized for its medical education programs and healthcare research, offering world-class facilities and training opportunities.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Can I work while studying in Belgium?</h3>
                    <p className="text-gray-700">Yes, international students can work part-time while studying to gain experience and help support their living expenses.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Do I need to learn Dutch, French, or German to study in Belgium?</h3>
                    <p className="text-gray-700">While many programs are offered in English, learning one of the local languages can enhance your experience and future opportunities in Belgium.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">How accessible is travel to other European countries from Belgium?</h3>
                    <p className="text-gray-700">Belgium's central location in Europe makes it extremely easy to travel to neighboring countries like Netherlands, France, Germany, and Luxembourg.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What are the typical living costs in Belgium?</h3>
                    <p className="text-gray-700">Living costs in Belgium are reasonable compared to other Western European countries, with students typically spending €800-1200 per month including accommodation, food, and personal expenses.</p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-[#1565c0] mb-4">Ready to Explore Belgium's Educational Excellence?</h3>
                <p className="text-gray-700 mb-6">Dunya Consultants provides comprehensive guidance for Belgian university applications, visa processes, and program selection. Contact us for expert assistance in planning your European education journey.</p>
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
                <h3 className="text-lg font-semibold mb-4 text-[#1565c0]">Quick Study Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-medium">Trilingual</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">UG Fees:</span>
                    <span className="font-medium">€950-7,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">PG Fees:</span>
                    <span className="font-medium">€1,000-4,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Specialty:</span>
                    <span className="font-medium">Medicine</span>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/belgium-study-visa-guide-2025" className="block #1845B3 hover:text-[#1565c0] text-sm">Belgium Study Visa Guide</a>
                  <a href="/blog/study-in-belgium-for-pakistani-students" className="block #1845B3 hover:text-[#1565c0] text-sm">Study in Belgium 2025</a>
                  <a href="/blog/study-in-finland-guide" className="block #1845B3 hover:text-[#1565c0] text-sm">Study in Finland Guide</a>
                  <a href="/blog/study-in-uk-complete-guide" className="block #1845B3 hover:text-[#1565c0] text-sm">Study in UK Guide</a>
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
    </div>
  );
}