import React from 'react';
import { Calendar, Clock, User, FileText, GraduationCap, CheckCircle, Users, AlertCircle, BookOpen, DollarSign, MapPin, Globe, Home } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function StudyInTurkeyGuide() {
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
              Study in Turkey: Complete Guide for Pakistani Students
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience European standard education at affordable costs where European and Asian cultures meet, with numerous scholarships and unique cultural opportunities for Pakistani students.
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
                <span>12 min read</span>
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
                  Turkey offers Pakistani students a unique opportunity to experience European standard education at affordable costs while enjoying a rich cultural heritage where East meets West. As a bridge between European and Asian cultures, Turkey provides an exceptional educational environment with modern universities, reasonable tuition fees, and abundant scholarship opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With its strategic location, Turkey offers students the chance to explore ancient history and iconic monuments while pursuing modern education. The country's affordable living costs, coupled with low tuition fees, make it an attractive destination for Pakistani students seeking quality education without financial burden.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This comprehensive guide covers everything Pakistani students need to know about studying in Turkey, from admission requirements to visa processes and cultural experiences.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="hidden md:block bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-study-turkey" className="hover:bg-[#1845B3]">Why Choose to Study in Turkey?</a></li>
                  <li><a href="#education-system" className="hover:bg-[#1845B3]">Turkish Education System</a></li>
                  <li><a href="#visa-requirements" className="hover:bg-[#1845B3]">Study Visa Requirements</a></li>
                  <li><a href="#tuition-costs" className="hover:bg-[#1845B3]">Tuition Fees and Living Costs</a></li>
                  <li><a href="#accommodation" className="hover:bg-[#1845B3]">Student Accommodation</a></li>
                  <li><a href="#documents-checklist" className="hover:bg-[#1845B3]">Required Documents</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">Application Process</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Turkey Overview */}
              <div className="bg-blue-50 border-l-4 border-l-[#1D50C9] p-6 mb-8">
                <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Study in Turkey at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Education Standard:</strong> European level</p>
                    <p className="text-gray-700 mb-2"><strong>Living Cost:</strong> €400-650/month</p>
                    <p className="text-gray-700 mb-2"><strong>Cultural Heritage:</strong> Ancient history & monuments</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Scholarships:</strong> Numerous opportunities</p>
                    <p className="text-gray-700 mb-2"><strong>Location:</strong> Bridge between Europe & Asia</p>
                    <p className="text-gray-700"><strong>Tuition:</strong> Very affordable</p>
                  </div>
                </div>
              </div>

              {/* Why Study in Turkey Section */}
              <section id="why-study-turkey" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Why Choose to Study in Turkey?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Turkey offers unique advantages that make it an excellent choice for Pakistani students seeking affordable, quality education in a culturally rich environment.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        European Standard of Education
                      </h3>
                      <p className="text-gray-700">High-quality education meeting European standards with modern teaching methods and facilities.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Low Cost of Living
                      </h3>
                      <p className="text-gray-700">Very affordable living costs ranging from €400-650 per month, making education accessible.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Explore Ancient History
                      </h3>
                      <p className="text-gray-700">Rich historical heritage with ancient monuments and cultural sites throughout the country.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Numerous Scholarships Available
                      </h3>
                      <p className="text-gray-700">Extensive scholarship programs available for international students, including Pakistani students.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Affordable Tuition Fees
                      </h3>
                      <p className="text-gray-700">Very reasonable tuition fees making quality education financially accessible.</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        East Meets West Culture
                      </h3>
                      <p className="text-gray-700">Unique cultural experience where European and Asian cultures blend harmoniously.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tuition Costs Section */}
              <section id="tuition-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Tuition Fees and Living Costs</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Turkey offers some of the most affordable education costs globally, making it highly accessible for Pakistani students.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Bachelor Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">$3,000 - $6,000</div>
                      <p className="text-gray-700 text-sm">with initial deposit of $1,000</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Master's Programs</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold #1845B3 mb-2">$4,000 - $6,000</div>
                      <p className="text-gray-700 text-sm">whole program fee with initial deposit of $1,000</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Living Costs</h3>
                  <p className="text-gray-700">As an international student, you can live in Turkey with a budget of <strong>€400-650 per month</strong>. This is much more affordable when compared to other study destinations in the world.</p>
                </div>
              </section>

              {/* Accommodation Section */}
              <section id="accommodation" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Student Accommodation Options</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Turkey offers various accommodation options to suit different budgets and preferences.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <Home className="w-5 h-5 mr-2" />
                      University Dormitories
                    </h3>
                    <p className="text-gray-700">Costs vary depending on the university and facilities provided.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      State Dormitories
                    </h3>
                    <p className="text-gray-700">Most affordable option at €24-38 per month.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Private Dormitories
                    </h3>
                    <p className="text-gray-700">Come with much better facilities but also higher costs.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Renting a Flat
                    </h3>
                    <p className="text-gray-700">€68-283 per month depending on the location and size of the apartment.</p>
                  </div>
                </div>
              </section>

              {/* Visa Requirements Section */}
              <section id="visa-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Study Visa Requirements for Pakistani Students</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pakistani students must obtain a student visa to study in Turkey. Here are the essential requirements:
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Passport Validity</h3>
                    <p className="text-gray-700">Your passport must be valid for at least 90 days.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Study Visa Form</h3>
                    <p className="text-gray-700">A completed and signed Turkish student visa application form.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Required Documentation</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 2 passport-size photos</li>
                      <li>• Letter of acceptance from your university (including duration of stay)</li>
                      <li>• Proof of travel insurance for your entire stay in Turkey</li>
                      <li>• Proof of health insurance</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Additional Requirements</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Proof of booked flight tickets to Turkey</li>
                      <li>• Evidence of sufficient financial resources to support study and living in Turkey</li>
                      <li>• Proof of accommodation in Turkey</li>
                      <li>• Previous education certificates or diplomas</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Documents Checklist Section */}
              <section id="documents-checklist" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Required Documents Checklist</h2>
                
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Original Passport
                    </h3>
                    <p className="text-gray-700">Valid passport for the duration of your intended stay.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Educational Documents
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Inter degree & result documents</li>
                      <li>• Matric degree & result documents</li>
                      <li>• BS degree + transcript (if applicable)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Test Scores and Certificates
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• IELTS / PTE Score Card</li>
                      <li>• Experience Certificate (if applicable)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Supporting Documents
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 2 Recommendation Letters</li>
                      <li>• GRE / GMAT (Optional)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-l-[#1D50C9] pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">How affordable is studying in Turkey compared to other countries?</h3>
                    <p className="text-gray-700">Turkey is significantly more affordable than most study destinations, with tuition fees starting from $3,000 and living costs of €400-650 per month.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Are there scholarship opportunities for Pakistani students?</h3>
                    <p className="text-gray-700">Yes, Turkey offers numerous scholarship programs for international students, including specific opportunities for Pakistani students.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What makes Turkey unique culturally?</h3>
                    <p className="text-gray-700">Turkey offers a unique experience where European and Asian cultures meet, providing rich historical heritage with ancient monuments and modern educational facilities.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">What are the accommodation options for international students?</h3>
                    <p className="text-gray-700">Students can choose from university dormitories, state dormitories (€24-38/month), private dormitories, or rent apartments (€68-283/month).</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Is the education quality in Turkey recognized internationally?</h3>
                    <p className="text-gray-700">Yes, Turkish universities maintain European standards of education with internationally recognized degrees and modern teaching facilities.</p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-[#1565c0] mb-4">Ready to Experience Where East Meets West?</h3>
                <p className="text-gray-700 mb-6">Dunya Consultants provides comprehensive guidance for Turkish university applications, visa processes, and scholarship opportunities. Start your affordable European-standard education journey today.</p>
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
                    <span className="text-gray-600">Bachelor Fees:</span>
                    <span className="font-medium">$3,000-6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Master's Fees:</span>
                    <span className="font-medium">$4,000-6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-medium">€400-650/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Culture:</span>
                    <span className="font-medium">East meets West</span>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/study-in-turkey-2024" className="block #1845B3 hover:text-[#1565c0] text-sm">Study in Turkey 2024</a>
                  <a href="/blog/study-in-belgium-guide" className="block #1845B3 hover:text-[#1565c0] text-sm">Study in Belgium Guide</a>
                  <a href="/blog/study-in-finland-guide" className="block #1845B3 hover:text-[#1565c0] text-sm">Study in Finland Guide</a>
                  <a href="/blog/ielts-preparation-tips-and-tricks" className="block #1845B3 hover:text-[#1565c0] text-sm">IELTS Preparation Tips</a>
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