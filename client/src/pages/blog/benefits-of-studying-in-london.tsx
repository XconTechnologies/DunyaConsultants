import React from 'react';
import { Calendar, Clock, User, MapPin, GraduationCap, Users, Briefcase, Building, Home } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function BenefitsOfStudyingInLondon() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study Destinations
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Top Reasons to Study in London
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover why London is one of the world's top destinations for international students, offering world-class education, vibrant culture, and endless opportunities.
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
                <span>8 min read</span>
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
                  London is the capital of the United Kingdom and is home to around eight million people at present including more than 382,000 students. Undoubtedly, it is one of the best cities for international students to pursue their higher education. For those who are unsure about why UK for studies, remember that studying in London is not just an academic experience, instead it is a life-changing journey.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The city is famous for welcoming people from all over the world to study, live, and work. Moreover, students will not only receive a high-quality education but also improve their career opportunities by studying in one of the leading cities of the world.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Studying in London helps you grow into a confident individual while building long-term friendships. There are many benefits of study in UK, especially London, like an exciting lifestyle, endless learning opportunities, and much more. If you are interested in studying abroad in London, our team at Dunya Consultants will guide you.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#why-study-london" className="hover:text-blue-600">Why Study in London?</a></li>
                  <li><a href="#top-universities" className="hover:text-blue-600">Top-Rated Universities</a></li>
                  <li><a href="#international-community" className="hover:text-blue-600">International Student Community</a></li>
                  <li><a href="#career-opportunities" className="hover:text-blue-600">Career Opportunities</a></li>
                  <li><a href="#nightlife-culture" className="hover:text-blue-600">Culture & Nightlife</a></li>
                  <li><a href="#student-accommodation" className="hover:text-blue-600">Student Accommodation</a></li>
                  <li><a href="#faqs" className="hover:text-blue-600">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* London Facts */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">London at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Population:</strong> 8+ million people</p>
                    <p className="text-gray-700 mb-2"><strong>Students:</strong> 382,000+ international students</p>
                    <p className="text-gray-700 mb-2"><strong>Universities:</strong> 40+ higher education institutions</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Languages:</strong> 300+ languages spoken</p>
                    <p className="text-gray-700 mb-2"><strong>Global Ranking:</strong> Top 5 student cities worldwide</p>
                    <p className="text-gray-700"><strong>Employment Rate:</strong> 95%+ graduate employment</p>
                  </div>
                </div>
              </div>

              {/* Why Study in London Section */}
              <section id="why-study-london" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Why Study in London?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  London is one of the top cities in the world as well as a major financial hub. This makes it the best place for building your future. The city provides numerous opportunities for professional growth to prepare you for life after university. Here are the top reasons why London is famous for studying abroad.
                </p>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Key Advantages of Studying in London</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Academic Excellence:</strong> World-renowned universities</p>
                      <p className="text-gray-700 mb-2"><strong>Global Recognition:</strong> Internationally valued degrees</p>
                      <p className="text-gray-700 mb-2"><strong>Diversity:</strong> Students from 200+ countries</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Career Hub:</strong> Europe's business capital</p>
                      <p className="text-gray-700 mb-2"><strong>Cultural Richness:</strong> Museums, theaters, galleries</p>
                      <p className="text-gray-700"><strong>Language:</strong> Perfect English-speaking environment</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Top Universities Section */}
              <section id="top-universities" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Top-Rated Universities</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  There are some of the best inner London universities, such as London Metropolitan University, London South Bank University, and University of East London. Studying in London means you will get an education that is highly valued everywhere.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  With more than forty universities, you can choose from a variety of programs. Don't worry if you did not follow the usual A-Level path, there are lots of options for you with different levels of education and backgrounds.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      World-Class Institutions
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Imperial College London - Global Top 10 for Engineering & Technology</li>
                      <li>• University College London (UCL) - Leading research university</li>
                      <li>• King's College London - Renowned for Medicine and Law</li>
                      <li>• London School of Economics (LSE) - Top for Social Sciences</li>
                      <li>• Queen Mary University of London - Excellence in Science</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      Specialized Colleges
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• London Business School - Top MBA programs globally</li>
                      <li>• Royal College of Art - World's leading art and design university</li>
                      <li>• London School of Hygiene & Tropical Medicine - Public health excellence</li>
                      <li>• City, University of London - Strong industry connections</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* International Community Section */}
              <section id="international-community" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">International Student Population</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Most of you have already heard that is London good for Pakistani students? Obviously yes! London has more than 382,000 students which creates a lively and huge student community. The city also provides many student groups, societies, and clubs according to different cultures.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  No matter where you are from, you can find others with similar backgrounds and aims to connect with. This not only helps during your studies but also gives you the chance to make friendships and contacts from around the world.
                </p>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Diverse Student Community
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Total Students:</strong> 382,000+</p>
                      <p className="text-gray-700 mb-2"><strong>International:</strong> 40% of student body</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Countries:</strong> 200+ nationalities</p>
                      <p className="text-gray-700 mb-2"><strong>Pakistani Students:</strong> 15,000+</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Student Societies:</strong> 1000+</p>
                      <p className="text-gray-700"><strong>Cultural Groups:</strong> 150+</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Career Opportunities Section */}
              <section id="career-opportunities" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Career Opportunities</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The majority of the graduates choose to start their careers in London compared to other cities. This is why students choose UK for study. London is home to several biggest companies, with more than hundreds of Europe's biggest businesses based here.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  London also provides many opportunities for students and graduates, such as internships, job fairs, apprenticeship programs, and mentorships. With so many options, it is the best place to polish your skills and find your dream job.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Major Industries & Sectors
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Financial Services - Banking, Investment, Insurance</li>
                          <li>• Technology - Fintech, AI, Software Development</li>
                          <li>• Creative Industries - Media, Advertising, Design</li>
                          <li>• Healthcare - Pharmaceuticals, Medical Research</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Legal Services - International Law Firms</li>
                          <li>• Consulting - Management, Strategy, Operations</li>
                          <li>• Education - Universities, Training Organizations</li>
                          <li>• Tourism & Hospitality - Global Travel Hub</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Graduate Employment Statistics</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-2xl font-bold text-green-600">95%</p>
                        <p className="text-gray-700">Graduate Employment Rate</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">£35K</p>
                        <p className="text-gray-700">Average Starting Salary</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">6 months</p>
                        <p className="text-gray-700">Average Job Search Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Culture & Nightlife Section */}
              <section id="nightlife-culture" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Best Nightlife & Culture</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  London is full of entertainment, from theatre shows to live music events. The city has more than seven thousand bars and pubs, five thousand restaurants, and more than 350 music venues.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  You can find affordable fun in beautiful London at night. Many theatres provide discounted tickets on the day of the performance, so you can enjoy a great show without spending too much. Music events are also budget-friendly, with lots of free options or tickets under ten pounds every day.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">Entertainment & Culture Hub</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Venues & Entertainment:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 7,000+ bars and pubs</li>
                        <li>• 5,000+ restaurants</li>
                        <li>• 350+ music venues</li>
                        <li>• 100+ theaters in West End</li>
                        <li>• 170+ museums (many free entry)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Student-Friendly Options:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Student discounts at most venues</li>
                        <li>• Free museum entry for students</li>
                        <li>• Discounted theater tickets</li>
                        <li>• Student nights at clubs and bars</li>
                        <li>• Free outdoor events year-round</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Student Accommodation Section */}
              <section id="student-accommodation" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Student Accommodation</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Moving to London is a big step, and choosing the right place to stay is extremely important. Student accommodation plays a big role in your experience. You need a place that fits your budget, helps with your studies, as well as supports your social life.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  London provides a high standard of living, and its student accommodation is the best. This makes it easy to find a comfortable and suitable place to call home while you study.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <Home className="w-5 h-5 mr-2" />
                      Accommodation Options
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">University Halls:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• En-suite rooms with shared facilities</li>
                          <li>• Self-catered or catered options</li>
                          <li>• £150-300 per week</li>
                          <li>• Social events and support</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Private Accommodation:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Shared houses and flats</li>
                          <li>• Studio apartments</li>
                          <li>• £200-500 per week</li>
                          <li>• More independence and flexibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">Cost of Living Breakdown</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-gray-700 mb-1"><strong>Accommodation:</strong></p>
                        <p className="text-gray-700">£150-500/week</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-1"><strong>Food & Groceries:</strong></p>
                        <p className="text-gray-700">£50-80/week</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-1"><strong>Transport:</strong></p>
                        <p className="text-gray-700">£25-35/week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Is studying abroad worth it in London?</h3>
                    <p className="text-gray-700">Studying in London is a dream for many students. The city is full of exciting opportunities, from top universities to lively city life which makes it a great place to learn and grow.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Why you choose University of East London?</h3>
                    <p className="text-gray-700">The University of East London is known for its career-focused programs as well as its huge community. It is the best place to study and prepare for your future.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What are the admission requirements for London universities?</h3>
                    <p className="text-gray-700">Requirements vary by university and program, but generally include academic qualifications, English proficiency (IELTS 6.0-7.0), personal statement, and references. Pakistani students typically need 60-75% in intermediate for undergraduate programs.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can international students work while studying in London?</h3>
                    <p className="text-gray-700">Yes, international students can work up to 20 hours per week during term time and full-time during holidays. This helps cover living expenses and gain valuable work experience.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What is the cost of studying in London for Pakistani students?</h3>
                    <p className="text-gray-700">Tuition fees range from £15,000-£35,000 per year depending on the university and program. Living costs are approximately £12,000-£15,000 per year including accommodation, food, and transportation.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  London is a lively city with something for everyone. It is home to some of the best universities in the world. London provides students the chance to study at top universities and be part of a global community. You will meet people from all over the world, get new experiences, and have opportunities to grow academically as well as professionally.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  For those who wonder is London a good place to live, it is the best place to live and study with exciting city life to the rich culture. Each year, hundreds of international students choose London to study abroad and get a high-quality education.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Ready to Study in London?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants for your London university applications and visa process.
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
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  London Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Population:</span>
                    <span className="font-medium">8+ million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">382,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Universities:</span>
                    <span className="font-medium">40+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-medium">300+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employment Rate:</span>
                    <span className="font-medium text-green-600">95%+</span>
                  </div>
                </div>
              </div>

              {/* Top Universities */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                  Top London Universities
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Imperial College London</p>
                    <p className="text-gray-600">World Rank: #6</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">UCL</p>
                    <p className="text-gray-600">World Rank: #8</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">King's College London</p>
                    <p className="text-gray-600">World Rank: #35</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">LSE</p>
                    <p className="text-gray-600">World Rank: #49</p>
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