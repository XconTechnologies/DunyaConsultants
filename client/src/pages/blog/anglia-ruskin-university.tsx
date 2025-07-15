import React from 'react';
import { Award, GraduationCap, MapPin, Star, Users, Building, CheckCircle, Trophy } from 'lucide-react';

export default function AngliaRuskinUniversity() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Anglia Ruskin University</h1>
              <p className="mt-2 text-gray-600">A Trusted Partner of Dunya Consultants</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Award className="w-4 h-4 mr-1" />
                UK University
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
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=1200&q=80"
                  alt="Anglia Ruskin University"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Key Achievements */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Trophy className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">University of the Year 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Gold Teaching Excellence Award</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">162 Years of History</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">East Anglia, UK</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Anglia Ruskin University (ARU) is one of the most prestigious public universities located in East Anglia, UK, 
                  with a rich history spanning around 162 years. The university was named "University of the Year" in 2023 
                  for its innovative and student-friendly approach to education.
                </p>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  ARU offers a wide range of courses across multiple disciplines including Finance, Acting, Accounting, Drama, 
                  Art, Computer Science, Architecture, Data Science, Education, Environment, Marketing, Medicine, Law, Music, 
                  and Nursing. The university has received a Gold award for teaching excellence and maintains strong 
                  partnerships with leading consultancies worldwide.
                </p>
              </div>

              {/* Why Choose ARU */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Why Choose Anglia Ruskin University?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Award className="w-6 h-6 text-gold-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Award-Winning Excellence</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Gold rating for teaching excellence</li>
                      <li>• Times Higher Education University of the Year 2023</li>
                      <li>• Recognized for positive societal impact</li>
                      <li>• Strong industry recognition</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Users className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Student-Centered Support</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Comprehensive student support services</li>
                      <li>• Flexible study options</li>
                      <li>• Personal and academic balance</li>
                      <li>• Career guidance from day one</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Star className="w-6 h-6 text-yellow-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Global Rankings</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Top 40 universities in the UK</li>
                      <li>• 301-350 range globally (THE Rankings)</li>
                      <li>• Consistent high performance</li>
                      <li>• International recognition</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Building className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Career Success</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• High graduate employment rates</li>
                      <li>• Strong industry partnerships</li>
                      <li>• Internship and work experience opportunities</li>
                      <li>• Continued support after graduation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* University Rankings */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  University Rankings
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">UK Rankings</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Times University Guide 2024:</span>
                          <span className="font-semibold">115th</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guardian University Guide 2024:</span>
                          <span className="font-semibold">102nd</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Times Higher Education (THE):</span>
                          <span className="font-semibold">Top 40</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Global Rankings</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>THE World Rankings:</span>
                          <span className="font-semibold">301-350</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CWUR Global:</span>
                          <span className="font-semibold">1412/20,966</span>
                        </div>
                        <div className="flex justify-between">
                          <span>US News Global:</span>
                          <span className="font-semibold">#814 Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Academic Programs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Academic Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Business & Finance</h3>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Finance</li>
                      <li>• Accounting</li>
                      <li>• Marketing</li>
                      <li>• Business Management</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Technology & Science</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Computer Science</li>
                      <li>• Data Science</li>
                      <li>• Engineering</li>
                      <li>• Life Sciences</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-900 mb-2">Health & Medicine</h3>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Medicine</li>
                      <li>• Nursing</li>
                      <li>• Psychology</li>
                      <li>• Health & Social Care</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Creative Arts</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Acting</li>
                      <li>• Drama</li>
                      <li>• Art</li>
                      <li>• Music</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Law & Education</h3>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Law</li>
                      <li>• Education</li>
                      <li>• Environmental Studies</li>
                      <li>• Architecture</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Specialized Programs</h3>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Land-based studies</li>
                      <li>• Animal sciences</li>
                      <li>• Sports</li>
                      <li>• Part-time undergraduate</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Partnership with Dunya Consultants */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Partnership with Dunya Consultants
                </h2>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-900">Trusted Partnership</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Anglia Ruskin University has established a strong partnership with Dunya Consultants to provide 
                    comprehensive support for Pakistani students seeking to study in the UK. This collaboration ensures 
                    students receive expert guidance throughout their entire academic journey.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Services Provided</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Application guidance and support</li>
                        <li>• Visa assistance and documentation</li>
                        <li>• Scholarship information and applications</li>
                        <li>• Pre-departure briefings</li>
                        <li>• Ongoing student support</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits for Students</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Streamlined admission process</li>
                        <li>• Reduced application stress</li>
                        <li>• Expert advice on course selection</li>
                        <li>• Financial planning assistance</li>
                        <li>• Continuous support throughout studies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* English Language Requirements */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  English Language Requirements
                </h2>
                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="font-semibold text-yellow-900 mb-3">Minimum Requirements for International Students</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">IELTS</h4>
                      <p className="text-sm text-gray-600">
                        Overall: 5.5<br />
                        Each section: 5.5
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">TOEFL iBT</h4>
                      <p className="text-sm text-gray-600">
                        Overall: 72<br />
                        Similar scores in each section
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">PTE Academic</h4>
                      <p className="text-sm text-gray-600">
                        Overall: 59<br />
                        Similar scores in each section
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Admission Process */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Admission Process
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">1</div>
                      <h3 className="text-lg font-semibold">Choose Your Course</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Select your preferred program from ARU's comprehensive course offerings
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">2</div>
                      <h3 className="text-lg font-semibold">Submit Application</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Apply online through the university's application portal with required documents
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3">3</div>
                      <h3 className="text-lg font-semibold">Meet Requirements</h3>
                    </div>
                    <p className="text-gray-600 ml-11">
                      Ensure you meet academic and English language requirements for your chosen program
                    </p>
                  </div>
                </div>
              </section>

              {/* Student Support Services */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                  Student Support Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Academic Support</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Personal tutoring</li>
                      <li>• Study skills workshops</li>
                      <li>• Academic writing support</li>
                      <li>• Library and research facilities</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Career Services</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Career guidance and counseling</li>
                      <li>• Job placement assistance</li>
                      <li>• Internship opportunities</li>
                      <li>• Industry networking events</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">International Student Support</h3>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Visa and immigration advice</li>
                      <li>• Orientation programs</li>
                      <li>• Cultural integration support</li>
                      <li>• International student societies</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-900 mb-2">Well-being Support</h3>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Mental health services</li>
                      <li>• Health and medical support</li>
                      <li>• Counseling services</li>
                      <li>• Disability support</li>
                    </ul>
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
                    <h3 className="font-semibold text-gray-900 mb-2">What are ARU English language requirements?</h3>
                    <p className="text-gray-600">
                      International students need a minimum IELTS score of 5.5, TOEFL iBT score of 72, 
                      or Pearson PTE Academic score of 59, with similar scores in each section.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">How can I get admission to Anglia Ruskin University London?</h3>
                    <p className="text-gray-600">
                      To apply to ARU London, choose your course, submit your application online, 
                      and meet the academic and English language requirements for your chosen program.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">ARU Admission Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get expert guidance for ARU admissions through our partnership
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

              {/* ARU Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">ARU Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-medium">1858</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">Public University</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">East Anglia, UK</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">39,000+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Campuses:</span>
                    <span className="font-medium">5</span>
                  </div>
                </div>
              </div>

              {/* Rankings Summary */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Rankings Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">UK Ranking:</span>
                    <span className="font-medium">Top 40</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Global Ranking:</span>
                    <span className="font-medium">301-350</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Teaching:</span>
                    <span className="font-medium">Gold Award</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Recognition:</span>
                    <span className="font-medium">University of the Year 2023</span>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/global-talent-visa-australia" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Global Talent Visa Australia</h4>
                    <p className="text-xs text-gray-600 mt-1">Complete guide</p>
                  </a>
                  <a href="/blog/cyprus-visa-pakistan" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Cyprus Visa for Pakistan</h4>
                    <p className="text-xs text-gray-600 mt-1">Student visa guide</p>
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