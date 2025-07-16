import React from 'react';
import { Flag, GraduationCap, MapPin, DollarSign, Heart, Star, Globe, Users } from 'lucide-react';
import ContactSection from '@/components/blog/ContactSection';

export default function TurkeyBestChoicePakistaniStudents() {
  const universities = [
    "Atlas University", "Arel University", "Isik University", "Gelisim University",
    "Altinbas University", "Kultur University", "Beykoz University", "Beykent University",
    "Uskudar University", "Halic University", "Dogus University", "Aydin University",
    "Bahçeşehir University"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Why Turkey is Best Choice for Pakistani Students</h1>
              <p className="mt-2 text-gray-600">Discover the Benefits of Studying in Turkey</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                <Flag className="w-4 h-4 mr-1" />
                Study in Turkey
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
                  src="https://images.unsplash.com/photo-1541432901042-2d8bd64b5a9b?auto=format&fit=crop&w=1200&q=80"
                  alt="Turkey Best Choice for Pakistani Students"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Key Statistics */}
              <div className="bg-red-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Quick Facts about Turkey</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">200+</div>
                    <div className="text-sm text-red-800">Universities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">260K+</div>
                    <div className="text-sm text-red-800">Int'l Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">94.2%</div>
                    <div className="text-sm text-red-800">Enrollment Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">129</div>
                    <div className="text-sm text-red-800">Public Unis</div>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Turkey has emerged as one of the top destinations for Pakistani students seeking quality higher education abroad. 
                  The country offers a unique blend of affordable tuition fees, high-quality education, rich cultural heritage, 
                  and a Muslim-friendly environment that makes it easier for Pakistani students to adapt and thrive.
                </p>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  With strong Pakistan-Turkey friendship and cultural ties, Turkey provides an ideal study destination where 
                  students can pursue their academic goals while experiencing a familiar cultural environment.
                </p>
              </div>

              {/* Best Universities */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Best Universities in Turkey for International Students
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {universities.map((university, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{index + 1}. {university}</h3>
                            <p className="text-xs text-gray-600 mt-1 flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              Turkey
                            </p>
                          </div>
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <GraduationCap className="w-3 h-3 text-red-600" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Turkey is Best */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Why Education in Turkey is Best for Pakistani Students
                </h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-blue-900">Top Universities</h3>
                    </div>
                    <p className="text-blue-800 text-sm">
                      Turkey has over 200 universities, with 129 public universities. Most universities are modern and use latest teaching methods. 
                      Both public and private universities follow the Bologna Agreement, setting education standards across Europe.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Star className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-green-900">High-Quality Education</h3>
                    </div>
                    <p className="text-green-800 text-sm">
                      Turkey ranks second globally for higher education enrollment with 94.2% schooling rate. 
                      It follows the Bologna Process perfectly, scoring 5 out of 5, meaning degrees are accepted in all European countries.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Globe className="w-6 h-6 text-purple-600 mr-3" />
                      <h3 className="text-lg font-semibold text-purple-900">Growing Education Hub</h3>
                    </div>
                    <p className="text-purple-800 text-sm">
                      Turkey is becoming increasingly popular with around 260,289 international students. 
                      The government has made significant improvements to the education system with major investments.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <DollarSign className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-lg font-semibold text-orange-900">Affordable and Comfortable Living</h3>
                    </div>
                    <p className="text-orange-800 text-sm">
                      Turkey offers affordable tuition fees and living costs compared to other European countries. 
                      The cost of living is reasonable, making it accessible for Pakistani students.
                    </p>
                  </div>
                  
                  <div className="bg-pink-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Heart className="w-6 h-6 text-pink-600 mr-3" />
                      <h3 className="text-lg font-semibold text-pink-900">Muslim-Friendly Country</h3>
                    </div>
                    <p className="text-pink-800 text-sm">
                      As a Muslim-majority country, Pakistani students find it easier to adjust and practice their faith. 
                      The cultural similarities make the transition smoother for Pakistani students.
                    </p>
                  </div>
                </div>
              </section>

              {/* Additional Benefits */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Additional Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Cultural Diversity & Safe Environment</h3>
                    <p className="text-sm text-gray-600">
                      Turkey offers a multicultural environment that is safe and welcoming for international students, 
                      with a rich blend of European and Asian cultures.
                    </p>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">English-Taught Programs</h3>
                    <p className="text-sm text-gray-600">
                      Many universities offer programs in English, making it accessible for international students 
                      who may not speak Turkish.
                    </p>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Student-Friendly Cities</h3>
                    <p className="text-sm text-gray-600">
                      Major cities like Istanbul, Ankara, and Izmir offer excellent student facilities, 
                      transportation, and social opportunities.
                    </p>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Scholarships for Pakistani Students</h3>
                    <p className="text-sm text-gray-600">
                      Various scholarship programs are available to help Pakistani students reduce tuition fees 
                      and living costs, making education more affordable.
                    </p>
                  </div>
                </div>
              </section>

              {/* Strategic Location */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Strategic Location & Opportunities
                </h2>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Geographic Advantage</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Located between Europe and Asia</li>
                        <li>• Easy travel to multiple countries</li>
                        <li>• Experience different cultures</li>
                        <li>• Access to European opportunities</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Academic Benefits</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Erasmus+ program participation</li>
                        <li>• Exchange programs with European universities</li>
                        <li>• ECTS credit system</li>
                        <li>• International recognition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pakistan-Turkey Relations */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Pakistan-Turkey Strong Relations
                </h2>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-900">Historical Friendship</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Pakistan and Turkey share a strong friendship that includes military, cultural, and educational ties. 
                    This relationship makes Turkey an even more attractive study destination for Pakistani students.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Cultural Ties</h4>
                      <p className="text-sm text-gray-600">Shared Islamic heritage and values</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Educational Cooperation</h4>
                      <p className="text-sm text-gray-600">Joint programs and student exchanges</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Future Opportunities</h4>
                      <p className="text-sm text-gray-600">Career prospects in both countries</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What is the study cost in Turkey for Pakistani students?</h3>
                    <p className="text-gray-600">
                      Tuition fees vary by university and program, but Turkey offers more affordable education compared to other European countries. 
                      Public universities have lower fees than private institutions.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Is studying in Turkey worth it for Pakistani students?</h3>
                    <p className="text-gray-600">
                      Yes, Turkey offers excellent value with high-quality education, affordable costs, cultural compatibility, 
                      and strong job prospects after graduation.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Are there English universities in Turkey?</h3>
                    <p className="text-gray-600">
                      Yes, many universities in Turkey offer programs taught in English, making it accessible for international students 
                      who don't speak Turkish.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">How to study in private universities in Turkey?</h3>
                    <p className="text-gray-600">
                      Private universities in Turkey have their own admission processes. You need to meet their specific requirements, 
                      submit applications directly, and may need to take entrance exams.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Study in Turkey</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get expert guidance on studying in Turkey
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
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors mt-4">
                  Get Consultation
                </button>
              </div>

              {/* Turkey Facts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Turkey at a Glance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Europe & Asia</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-medium">200+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Int'l Students:</span>
                    <span className="font-medium">260,289</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">Turkish/English</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Religion:</span>
                    <span className="font-medium">Muslim Majority</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#universities" className="block text-gray-600 hover:text-red-600">Best Universities</a>
                  <a href="#benefits" className="block text-gray-600 hover:text-red-600">Why Turkey</a>
                  <a href="#advantages" className="block text-gray-600 hover:text-red-600">Additional Benefits</a>
                  <a href="#location" className="block text-gray-600 hover:text-red-600">Strategic Location</a>
                  <a href="#relations" className="block text-gray-600 hover:text-red-600">Pakistan-Turkey Relations</a>
                  <a href="#faqs" className="block text-gray-600 hover:text-red-600">FAQs</a>
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/cyprus-visa-pakistan" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Cyprus Visa for Pakistan</h4>
                    <p className="text-xs text-gray-600 mt-1">Student visa guide</p>
                  </a>
                  <a href="/blog/study-nursing-uk" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Study Nursing in UK</h4>
                    <p className="text-xs text-gray-600 mt-1">Complete guide</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to study in Turkey? Contact our expert team for personalized guidance and comprehensive support throughout your application journey to Turkish universities.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}