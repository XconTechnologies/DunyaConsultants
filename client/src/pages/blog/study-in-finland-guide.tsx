import React from 'react';
import { Calendar, Clock, User, FileText, GraduationCap, CheckCircle, Users, AlertCircle, BookOpen, DollarSign, MapPin, Star } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function StudyInFinlandGuide() {
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
            <h1 className="text-5xl font-bold mb-6 leading-[1.5rem]">
              Study in Finland: Complete Guide for Pakistani Students
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover why Finland, with the world's #1 education system, offers exceptional opportunities for Pakistani students with high visa success rates and affordable living costs.
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
                <span>10 min read</span>
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
                  Finland stands out as an exceptional destination for international education, consistently ranked as having the world's best education system. Known as the happiest and safest country in the world, Finland offers Pakistani students a unique combination of world-class education, affordable living costs, and exceptional quality of life.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a Schengen country and welfare state, Finland provides students with visa-free entry to 27 Schengen countries and access to one of the world's most comprehensive social welfare systems. With a remarkably high visa success rate of up to 98% and no appointment booking issues, Finland has become an increasingly popular choice for Pakistani students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This comprehensive guide covers everything Pakistani students need to know about studying in Finland, from admission requirements to living costs and visa processes.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="hidden md:block bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-study-finland" className="hover:bg-[#1845B3]">Why Choose to Study in Finland?</a></li>
                  <li><a href="#education-system" className="hover:bg-[#1845B3]">Finland's Education System</a></li>
                  <li><a href="#english-requirements" className="hover:bg-[#1845B3]">English Language Requirements</a></li>
                  <li><a href="#tuition-costs" className="hover:bg-[#1845B3]">Tuition Fees and Living Costs</a></li>
                  <li><a href="#visa-requirements" className="hover:bg-[#1845B3]">Visa Requirements</a></li>
                  <li><a href="#documents-checklist" className="hover:bg-[#1845B3]">Required Documents</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">Application Process</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Finland Overview */}
              <div className="bg-blue-50 border-l-4 #1D50C9 p-6 mb-8">
                <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Study in Finland at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Education Ranking:</strong> #1 in the World</p>
                    <p className="text-gray-700 mb-2"><strong>Quality of Life:</strong> Happiest & Safest Country</p>
                    <p className="text-gray-700 mb-2"><strong>Visa Success Rate:</strong> Up to 98%</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Living Cost:</strong> €500/month</p>
                    <p className="text-gray-700 mb-2"><strong>Bank Statement:</strong> €7,500 (2.5M PKR)</p>
                    <p className="text-gray-700"><strong>Schengen Access:</strong> 27 countries</p>
                  </div>
                </div>
              </div>

              {/* Why Study in Finland Section */}
              <section id="why-study-finland" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Why Choose to Study in Finland?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Finland offers numerous unique advantages that make it an ideal destination for Pakistani students seeking quality education and exceptional quality of life.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        No. 1 Educational System in the World
                      </h3>
                      <p className="text-gray-700">Finland consistently ranks as having the world's best education system with innovative teaching methods.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Happiest and Safest Country
                      </h3>
                      <p className="text-gray-700">Finland ranks as the world's happiest and safest country, providing excellent quality of life.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Schengen Country & Welfare State
                      </h3>
                      <p className="text-gray-700">Access to comprehensive social welfare system and Schengen area benefits.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Visa Free Entry to 27 Countries
                      </h3>
                      <p className="text-gray-700">Student residence permit allows visa-free travel to all Schengen countries.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Affordable Living Cost
                      </h3>
                      <p className="text-gray-700">Very affordable living costs at approximately €500 per month.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Low Financial Requirements
                      </h3>
                      <p className="text-gray-700">Bank statement requirement of only €7,500 (around 2.5 million PKR).</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        No Appointment Issues
                      </h3>
                      <p className="text-gray-700">Streamlined visa process with no appointment booking complications.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        High Visa Success Rate
                      </h3>
                      <p className="text-gray-700">Exceptional visa approval rate of up to 98% for qualified applicants.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* English Requirements Section */}
              <section id="english-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">English Language Requirements</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Finnish universities require proof of English proficiency for international programs taught in English.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Bachelor's Programs</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">IELTS:</h4>
                        <p className="text-gray-700">6.5 overall</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">PTE:</h4>
                        <p className="text-gray-700">60 overall</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">TOEFL:</h4>
                        <p className="text-gray-700">78 overall</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Master's Programs</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">IELTS:</h4>
                        <p className="text-gray-700">6.5 overall</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">PTE:</h4>
                        <p className="text-gray-700">62 overall</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">TOEFL:</h4>
                        <p className="text-gray-700">91 overall</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tuition Costs Section */}
              <section id="tuition-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Tuition Fees and Living Costs</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Finland offers very competitive tuition fees and one of the lowest living costs among European countries.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Tuition Fees</h3>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold #1845B3 mb-2">€7,500</div>
                        <p className="text-gray-700 text-sm">per year (both undergraduate & graduate)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Living Costs</h3>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold #1845B3 mb-2">€500</div>
                        <p className="text-gray-700 text-sm">per month (all expenses)</p>
                      </div>
                      <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">Bank statement requirement: €7,500 (≈ 2.5M PKR)</p>
                      </div>
                    </div>
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
                    <p className="text-gray-700">Valid passport for the duration of your studies.</p>
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
                      Attested Photocopies of Degree & Transcript
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
                      <li>• 2 Recommendation Letters</li>
                      <li>• Experience Certificate (if applicable)</li>
                      <li>• Europass CV</li>
                      <li>• Motivation Letter</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What makes Finland's education system the best in the world?</h3>
                    <p className="text-gray-700">Finland's education system emphasizes equality, innovation, and student well-being with highly qualified teachers and research-based teaching methods.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What is the visa success rate for Pakistani students?</h3>
                    <p className="text-gray-700">Finland has an exceptionally high visa success rate of up to 98% for qualified Pakistani students with no appointment booking issues.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Can I travel to other European countries with a Finnish student visa?</h3>
                    <p className="text-gray-700">Yes, as Finland is a Schengen country, you can travel visa-free to 27 Schengen countries with your Finnish residence permit.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">How much should I budget for living expenses in Finland?</h3>
                    <p className="text-gray-700">Living costs in Finland are very reasonable at approximately €500 per month, covering accommodation, food, transportation, and personal expenses.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What is the minimum bank statement requirement?</h3>
                    <p className="text-gray-700">You need to show a bank statement of €7,500 (approximately 2.5 million PKR) to demonstrate financial capability.</p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-[#1565c0] mb-4">Ready to Experience World's Best Education in Finland?</h3>
                <p className="text-gray-700 mb-6">Dunya Consultants provides expert guidance for Finnish university applications and visa processes. Join thousands of successful Pakistani students studying in Finland.</p>
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
                    <span className="text-gray-600">Education Rank:</span>
                    <span className="font-medium">#1 Worldwide</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Success:</span>
                    <span className="font-medium">Up to 98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-medium">€500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schengen Access:</span>
                    <span className="font-medium">27 countries</span>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/finland-visa-requirements-pakistani-students" className="block #1845B3 hover:text-[#1565c0] text-sm">Finland Visa Requirements</a>
                  <a href="/blog/study-in-uk-complete-guide" className="block #1845B3 hover:text-[#1565c0] text-sm">Study in UK Guide</a>
                  <a href="/blog/study-in-canada-complete-guide" className="block #1845B3 hover:text-[#1565c0] text-sm">Study in Canada Guide</a>
                  <a href="/blog/ielts-preparation-tips-and-tricks" className="block #1845B3 hover:text-[#1565c0] text-sm">IELTS Preparation Tips</a>
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