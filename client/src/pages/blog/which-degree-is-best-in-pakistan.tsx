import React from 'react';
import { Calendar, Clock, User, AlertTriangle, FileText, CheckCircle, Users, DollarSign, TrendingUp, Briefcase, GraduationCap, BookOpen } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function WhichDegreeIsBestInPakistan() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Career Guide
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Which Degree is Best in Pakistan?
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide to choosing the right degree with highest scope, career opportunities, and earning potential in Pakistan's evolving job market.
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  When it comes to taking admission to an undergraduate program, selecting the right degree is one of the most important things to consider for your future. Your entire career depends on the degree you decide to pursue. That's why it is essential to pay massive attention to <strong>which field is best in Pakistan</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before making a final decision, properly research the scope of each program you are interested in. Some of the <strong>best courses in Pakistan</strong> include engineering, MBBS, IT, and much more. In addition, the majority of students do not get proper guidance and are not aware of the scope of this ever-growing market.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you are one of them, do not worry. Here is a detailed guide for you. We have done proper research on the trending courses and made a list of <strong>professional degrees in Pakistan</strong> to make it easier for you.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#top-degrees" className="hover:bg-[#1845B3]">Top Degrees in Pakistan</a></li>
                  <li><a href="#it-computer-science" className="hover:bg-[#1845B3]">IT & Computer Science</a></li>
                  <li><a href="#engineering" className="hover:bg-[#1845B3]">Engineering Fields</a></li>
                  <li><a href="#business-administration" className="hover:bg-[#1845B3]">Business Administration</a></li>
                  <li><a href="#medical-fields" className="hover:bg-[#1845B3]">Medical & Healthcare</a></li>
                  <li><a href="#emerging-fields" className="hover:bg-[#1845B3]">Emerging Career Fields</a></li>
                  <li><a href="#career-guidance" className="hover:bg-[#1845B3]">Career Selection Tips</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Top Degrees Overview */}
              <section id="top-degrees" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Top Degrees in Pakistan 2025</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Quick Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-#1a73e8 mb-2">IT & CS</h4>
                      <p className="#1845B3">Highest Growth Potential</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-#1a73e8 mb-2">Engineering</h4>
                      <p className="#1845B3">Traditional High-Paying</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-#1a73e8 mb-2">Medical</h4>
                      <p className="#1845B3">Social Prestige & Security</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Pakistan's economy is rapidly evolving with digitalization, infrastructure development, and increasing global integration. This transformation creates new opportunities in technology, healthcare, engineering, and business sectors. Understanding market demands and future trends is crucial for making informed career decisions.
                </p>
              </section>

              {/* IT & Computer Science Section */}
              <section id="it-computer-science" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Information Technology & Computer Science</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#1565c0] mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Why IT is the Top Choice
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Growth Factors:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• IT exports exceed $2.6 billion annually</li>
                        <li>• 15-25% annual salary increases</li>
                        <li>• Global remote work opportunities</li>
                        <li>• High entrepreneurship potential</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Salary Ranges:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Entry Level: PKR 40,000 - 80,000</li>
                        <li>• Mid-Level: PKR 100,000 - 250,000</li>
                        <li>• Senior Level: PKR 300,000 - 800,000</li>
                        <li>• Leadership: PKR 1,000,000+</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-[#1565c0] mb-3">Specialization Areas</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Software Development & Programming</li>
                        <li>• Cybersecurity & Information Security</li>
                        <li>• Data Science & Analytics</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Artificial Intelligence & Machine Learning</li>
                        <li>• Mobile App Development</li>
                        <li>• Cloud Computing & DevOps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Engineering Section */}
              <section id="engineering" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Engineering Fields</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Engineering has been a popular career choice with many different fields to choose from. You need to research <strong>which engineering field has the highest scope in Pakistan</strong>. Engineers can earn a decent income in today's world, and the tech industry has grown rapidly, making engineering an exciting and rewarding career option.
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-2">High-Demand Engineering Fields</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Electrical Engineering:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Power generation and transmission</li>
                          <li>• Electronics and telecommunications</li>
                          <li>• Renewable energy systems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Mechanical Engineering:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Manufacturing and production</li>
                          <li>• Automotive industry</li>
                          <li>• Industrial automation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-[#1565c0] mb-3 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Engineering Salary Expectations
                    </h4>
                    <div className="grid md:grid-cols-4 gap-4 text-center">
                      <div className="bg-blue-50 p-4 rounded">
                        <h5 className="font-semibold text-#1a73e8">Fresh Graduates</h5>
                        <p className="text-gray-700">PKR 35,000 - 60,000</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded">
                        <h5 className="font-semibold text-#1a73e8">Experienced (5+ years)</h5>
                        <p className="text-gray-700">PKR 80,000 - 200,000</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded">
                        <h5 className="font-semibold text-#1a73e8">Senior Engineers</h5>
                        <p className="text-gray-700">PKR 250,000 - 500,000</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded">
                        <h5 className="font-semibold text-#1a73e8">Project Managers</h5>
                        <p className="text-gray-700">PKR 400,000 - 800,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Business Administration Section */}
              <section id="business-administration" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Business Administration</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Business degrees like <strong>BBA and MBA</strong> are among the best in Pakistan for students who want to enter the corporate world. The <strong>BBA scope in Pakistan</strong> provides new job opportunities in finance, management, and marketing.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Furthermore, business graduates are in high demand in the corporate sector because they are suitable for a variety of roles. A BBA degree is a great option for those searching for high-paying jobs.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-[#1565c0] mb-3">Specialized Business Fields</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Finance and Banking</li>
                        <li>• Marketing and Sales</li>
                        <li>• Human Resource Management</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Supply Chain and Operations</li>
                        <li>• International Business</li>
                        <li>• Management and Strategy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-[#1565c0] mb-3">Career Progression in Business</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Management Trainee</span>
                        <span className="#1845B3 font-semibold">PKR 40,000 - 70,000/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Middle Management</span>
                        <span className="#1845B3 font-semibold">PKR 100,000 - 250,000/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Senior Management</span>
                        <span className="#1845B3 font-semibold">PKR 300,000 - 600,000/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">Executive Level</span>
                        <span className="#1845B3 font-semibold">PKR 800,000 - 2,000,000/month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Medical Fields Section */}
              <section id="medical-fields" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Medical & Healthcare Fields</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Medical Doctor (MBBS)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• High social status and respect</li>
                          <li>• Job security and stability</li>
                          <li>• Private practice opportunities</li>
                          <li>• Specialization potential</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Earning Potential:</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Junior Doctors: PKR 50,000 - 100,000</li>
                          <li>• Specialists: PKR 200,000 - 500,000</li>
                          <li>• Consultants: PKR 500,000 - 1,500,000</li>
                          <li>• Private Practice: PKR 1,000,000+</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-[#1565c0] mb-3">Allied Health Sciences</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Pharmacy (PharmD)</li>
                        <li>• Physiotherapy (DPT)</li>
                        <li>• Medical Laboratory Technology</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Radiology and Medical Imaging</li>
                        <li>• Nursing (Generic BSN)</li>
                        <li>• Dental Surgery (BDS)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Emerging Fields Section */}
              <section id="emerging-fields" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Emerging High-Potential Fields</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-xl font-semibold text-[#1565c0] mb-4">Data Science & Analytics</h3>
                    <p className="text-gray-700 mb-4">
                      Every industry needs data professionals due to government digitization initiatives, e-commerce growth, and research expansion.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Skills:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Statistical analysis and modeling</li>
                          <li>• Machine learning and AI</li>
                          <li>• Big data technologies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Salary Potential:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Data Analyst: PKR 60,000 - 150,000</li>
                          <li>• Data Scientist: PKR 120,000 - 300,000</li>
                          <li>• Senior Data Scientist: PKR 350,000+</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-[#1565c0] mb-3">Digital Marketing & E-commerce</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Growth Drivers:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Increasing internet penetration</li>
                          <li>• Mobile commerce expansion</li>
                          <li>• SME digitization trends</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Digital marketing specialist</li>
                          <li>• E-commerce manager</li>
                          <li>• SEO/SEM specialist</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Career Guidance Section */}
              <section id="career-guidance" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Career Selection Tips</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[#1565c0] mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Factors to Consider
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Personal Interests</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• What subjects do you enjoy?</li>
                          <li>• What are your natural strengths?</li>
                          <li>• Do you prefer analytical or creative work?</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Market Demand</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Job growth projections</li>
                          <li>• Industry expansion trends</li>
                          <li>• Skills shortage areas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Financial Considerations</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Starting salary expectations</li>
                          <li>• Career growth potential</li>
                          <li>• Educational investment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1565c0] mb-3">Success Strategies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Academic Excellence</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Consistent effort and dedication</li>
                          <li>• Active learning techniques</li>
                          <li>• Practical application focus</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Professional Development</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Industry certifications</li>
                          <li>• Networking and mentorship</li>
                          <li>• Continuous skill updates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Which degree has the highest salary potential in Pakistan?</h3>
                    <p className="text-gray-700">Information Technology and Computer Science degrees offer the highest salary potential, with senior professionals earning PKR 1,000,000+ monthly. Medicine and specialized engineering fields also offer excellent earning potential.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Which engineering field has the most scope in Pakistan?</h3>
                    <p className="text-gray-700">Electrical, Software, and Mechanical engineering have the highest scope. Software engineering particularly offers global opportunities and high growth potential in Pakistan's expanding tech sector.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Is BBA a good choice for career growth?</h3>
                    <p className="text-gray-700">Yes, BBA provides excellent career growth opportunities in corporate sectors, banking, marketing, and management. It offers versatility and opens doors to various industries.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What are the emerging high-paying fields in Pakistan?</h3>
                    <p className="text-gray-700">Data Science, Digital Marketing, Cybersecurity, AI/Machine Learning, and Renewable Energy are emerging high-paying fields with excellent growth prospects.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How important is university ranking for career success?</h3>
                    <p className="text-gray-700">While university ranking matters, skills, practical experience, and networking often have more impact on career success. Focus on programs with strong industry connections and practical training.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  The best degree in Pakistan depends on individual interests, aptitudes, and career goals, but certain fields offer exceptional opportunities in the current economic landscape. Information Technology and Computer Science stands out as the top choice due to high demand, excellent salaries, and global opportunities.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Engineering, Healthcare, and Business Administration remain strong traditional choices with modern relevance. Success in any field requires dedication, continuous learning, and strategic career planning.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Students should focus on programs that offer both immediate job prospects and long-term growth potential, while also considering international opportunities and technological advancement.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#1565c0]">Need Career Guidance?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants on choosing the right degree and career path for your future success.
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
                    <span className="text-gray-600">Top Paying Field:</span>
                    <span className="font-medium">IT & Computer Science</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Most Traditional:</span>
                    <span className="font-medium">Engineering & Medical</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fastest Growing:</span>
                    <span className="font-medium">Data Science</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best ROI:</span>
                    <span className="font-medium">Business Admin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Global Demand:</span>
                    <span className="font-medium #1845B3">Very High</span>
                  </div>
                </div>
              </div>

              {/* Salary Comparison */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 #1D50C9" />
                  Average Starting Salaries
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>IT & CS</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">PKR 40-80k</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Engineering</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">PKR 35-60k</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Medical</span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">PKR 50-100k</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Business</span>
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">PKR 40-70k</span>
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