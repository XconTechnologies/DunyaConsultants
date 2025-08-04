import React from 'react';
import { Calendar, Clock, User, MapPin, Star, GraduationCap, Target, BookOpen } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function Top10UniversitiesLondon() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                University Guide
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Top 10 Universities in London
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover the best universities in London for international students, featuring world-class education, diverse programs, and excellent career prospects in one of the world's most vibrant cities.
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
                  London is a famous city popular for its culture as well as its best education system. It is the capital of the United Kingdom and has some of the best universities in London as compared to any other city in the country. No doubt, staying in this city can be very expensive but there are many public transport options like bike lanes that can help students to save money.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are planning to study in top universities in London, it is important to search for the best one for you. Moreover, there are around forty universities here and every one has its own benefits. These universities are ranked depending on their previous achievements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While choosing a university, you need to consider what each one provides in its campus life or the specific field of program you are interested in. To get more details, please keep reading below.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-london" className="hover:text-blue-600">Why Choose London Universities?</a></li>
                  <li><a href="#top-universities" className="hover:text-blue-600">Top 10 Universities in London</a></li>
                  <li><a href="#admission-process" className="hover:text-blue-600">Admission Process</a></li>
                  <li><a href="#cost-living" className="hover:text-blue-600">Cost of Living</a></li>
                  <li><a href="#faqs" className="hover:text-blue-600">Frequently Asked Questions</a></li>
                  <li><a href="#conclusion" className="hover:text-blue-600">Conclusion</a></li>
                </ul>
              </div>

              {/* Why Choose London Section */}
              <section id="why-london" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Why Choose London Universities?</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">London's Educational Advantages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-blue-500 mr-3" />
                      Home to 40+ world-class universities
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="w-5 h-5 text-blue-500 mr-3" />
                      Rich cultural heritage and diverse student community
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                      Gateway to European opportunities
                    </li>
                    <li className="flex items-center">
                      <Target className="w-5 h-5 text-blue-500 mr-3" />
                      Strong industry connections and career prospects
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="w-5 h-5 text-blue-500 mr-3" />
                      Historic institutions with global recognition
                    </li>
                  </ul>
                </div>
              </section>

              {/* Top Universities List */}
              <section id="top-universities" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Top 10 Universities in London</h2>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  London is not the cheapest place for students. There are numerous universities to select from. It is good to check out the top universities in London for international students. Let's have a look at the best London universities list below.
                </p>

                <div className="space-y-8">
                  {/* University College London */}
                  <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">1</div>
                      <h3 className="text-2xl font-bold text-gray-900">University College London (UCL)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Established:</strong> 1826 - First university in London</p>
                        <p className="text-gray-700 mb-2"><strong>Location:</strong> Bloomsbury, West End of London</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Global Recognition:</strong> Students from 150+ countries</p>
                        <p className="text-gray-700"><strong>Notable Alumni:</strong> 29 Nobel Prize winners</p>
                      </div>
                    </div>
                  </div>

                  {/* Imperial College London */}
                  <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-emerald-50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">2</div>
                      <h3 className="text-2xl font-bold text-gray-900">Imperial College London</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Specialization:</strong> Science, Engineering, Medicine, Business</p>
                        <p className="text-gray-700 mb-2"><strong>Location:</strong> South Kensington</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Ranking:</strong> Top 10 globally for engineering</p>
                        <p className="text-gray-700"><strong>Notable:</strong> Strong industry partnerships</p>
                      </div>
                    </div>
                  </div>

                  {/* King's College London */}
                  <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-violet-50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">3</div>
                      <h3 className="text-2xl font-bold text-gray-900">King's College London</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Established:</strong> 1829</p>
                        <p className="text-gray-700 mb-2"><strong>Location:</strong> Multiple campuses across London</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Strengths:</strong> Medicine, Law, Humanities</p>
                        <p className="text-gray-700"><strong>Notable:</strong> 12 Nobel Prize winners</p>
                      </div>
                    </div>
                  </div>

                  {/* London School of Economics */}
                  <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-amber-50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">4</div>
                      <h3 className="text-2xl font-bold text-gray-900">London School of Economics (LSE)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Specialization:</strong> Economics, Politics, Social Sciences</p>
                        <p className="text-gray-700 mb-2"><strong>Location:</strong> Holborn, Central London</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Global Rank:</strong> #2 for Social Sciences</p>
                        <p className="text-gray-700"><strong>Alumni:</strong> 18 Nobel Prize winners</p>
                      </div>
                    </div>
                  </div>

                  {/* Queen Mary University of London */}
                  <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-rose-50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">5</div>
                      <h3 className="text-2xl font-bold text-gray-900">Queen Mary University of London</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Location:</strong> Mile End, East London</p>
                        <p className="text-gray-700 mb-2"><strong>Notable:</strong> Affordable accommodation options</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Strengths:</strong> Medicine, Engineering, Humanities</p>
                        <p className="text-gray-700"><strong>Campus:</strong> Beautiful historic campus</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Universities Summary */}
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Other Top London Universities (6-10)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>6. Birkbeck University:</strong> Part-time and evening courses</p>
                        <p className="text-gray-700 mb-2"><strong>7. Goldsmiths:</strong> Creative arts and humanities</p>
                        <p className="text-gray-700 mb-2"><strong>8. Royal Holloway:</strong> Beautiful campus, strong research</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-2"><strong>9. SOAS:</strong> Asian and African studies specialist</p>
                        <p className="text-gray-700 mb-2"><strong>10. City University:</strong> Business and journalism excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Admission Process */}
              <section id="admission-process" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Admission Process</h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">1. Research and Choose Universities</h3>
                    <p className="text-gray-700">Research programs, entry requirements, and application deadlines for your chosen universities.</p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">2. Prepare Required Documents</h3>
                    <p className="text-gray-700">Academic transcripts, English proficiency test results, personal statement, and letters of recommendation.</p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">3. Submit Applications</h3>
                    <p className="text-gray-700">Apply through UCAS for undergraduate programs or directly to universities for postgraduate programs.</p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">4. Apply for Student Visa</h3>
                    <p className="text-gray-700">Once accepted, apply for your Student visa (formerly Tier 4) to study in the UK.</p>
                  </div>
                </div>
              </section>

              {/* Cost of Living */}
              <section id="cost-living" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Cost of Living in London</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Average Monthly Expenses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Accommodation:</strong> £600-£1,200</p>
                      <p className="text-gray-700 mb-2"><strong>Food:</strong> £200-£400</p>
                      <p className="text-gray-700 mb-2"><strong>Transport:</strong> £150-£200</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Books & Supplies:</strong> £50-£100</p>
                      <p className="text-gray-700 mb-2"><strong>Personal Expenses:</strong> £200-£300</p>
                      <p className="text-gray-700"><strong>Total:</strong> £1,200-£2,200 per month</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Which is the best university in London?</h3>
                    <p className="text-gray-700">University College London (UCL) is often considered the best, ranking consistently in the top 10 globally. However, the "best" depends on your field of study and personal preferences.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What are the admission requirements for London universities?</h3>
                    <p className="text-gray-700">Most London universities require strong academic performance, English language proficiency (IELTS/TOEFL), personal statements, and letters of recommendation. Specific requirements vary by university and program.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How expensive is studying in London?</h3>
                    <p className="text-gray-700">London is expensive, but there are ways to save money through public transport, student discounts, and choosing universities with affordable accommodation options like Queen Mary University.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can international students work while studying?</h3>
                    <p className="text-gray-700">Yes, international students with a Student visa can work up to 20 hours per week during term time and full-time during holidays.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion" className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  London offers some of the world's best universities with diverse programs and excellent career prospects. While the cost of living is high, the educational experience, cultural exposure, and career opportunities make it a worthwhile investment for international students.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  When choosing among London's top universities, consider your field of study, budget, location preferences, and career goals. Each university has its unique strengths and offerings that can shape your academic and professional future.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Ready to Apply to London Universities?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants on choosing the right London university and navigating the application process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
                  <Target className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-medium">40+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top Ranked:</span>
                    <span className="font-medium">UCL, Imperial</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Range:</span>
                    <span className="font-medium">£1,200-2,200/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application:</span>
                    <span className="font-medium">UCAS/Direct</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Rights:</span>
                    <span className="font-medium">20 hrs/week</span>
                  </div>
                </div>
              </div>

              {/* Top University Categories */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                  University Categories
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Russell Group</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Top Tier</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Specialist Colleges</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Focused</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Modern Universities</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Practical</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>University of London</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Federation</span>
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