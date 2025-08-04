import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, FileText, Target, Award, Globe, DollarSign, MessageCircle, Phone, Mail, Star, MapPin, Users, GraduationCap, Building2, Briefcase } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function EngineeringLawProgramsCanada() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study in Canada
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Engineering and Law Programs in Canada: Best Universities for Pakistani Students in 2025
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide to top Canadian universities offering engineering and law programs for Pakistani students, including admission requirements, costs, and career prospects.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>March 18, 2025</span>
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

              {/* Overview */}
              <section className="mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Building2 className="w-6 h-6 text-blue-500 mr-2" />
                    Canada Study Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <GraduationCap className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-700">Top Global Education Quality</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-700">Work While Studying</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-700">Multicultural Environment</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-700">Post-Graduation Work Permit</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Canada is one of the most popular choices for Pakistani students around the world. Studying in Canada can improve your career as well as social life. The country is popular for high-quality education and research opportunities where students from all backgrounds feel welcome.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  There are some of the best engineering universities in Canada that provide advanced facilities, modern programs, and industry partnerships that help students succeed worldwide. Pakistani students can get practical experience through internships while studying.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  One big advantage of choosing Canadian universities for engineering and law is the chance to work part-time during semesters. This helps students to manage their expenses. Moreover, the safe environment, top-ranked universities, and welcoming culture make it the best place for Pakistani students to study and grow.
                </p>
              </div>

              {/* Universities Section */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Engineering and Law Universities in Canada for Pakistani Students
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As mentioned earlier, Canada has some of the engineering & law universities in Canada for Pakistani students popular for their high-quality education. These universities provide many different engineering programs, so students can choose according to their interests and career goals.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Here, we will discuss about the best law and engineering schools in Canada universities for Pakistani students:
                </p>

                {/* University Cards */}
                <div className="space-y-8">
                  
                  {/* University of Toronto */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">University of Toronto</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          <span className="text-sm font-medium">Ranked #1 in Canada by Times Higher Education 2024</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Top Ranked
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Engineering Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          The Faculty of Applied Science and Engineering has nine departments, including chemical, civil, electrical, and aerospace engineering.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Chemical Engineering</li>
                          <li>• Civil Engineering</li>
                          <li>• Electrical Engineering</li>
                          <li>• Aerospace Engineering</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Law Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Faculty of Law is one of the best law universities in Canada for common law, focusing on critical thinking and different areas of study.
                        </p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div><strong>Requirements:</strong> GPA 3.88, LSAT 168</div>
                          <div><strong>Focus:</strong> Critical thinking, diverse studies</div>
                          <div><strong>Reputation:</strong> Leading common law education</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* McGill University */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">McGill University</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">Quebec - One of three English-language universities</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Historic
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Engineering Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Engineering faculty provides programs in biological, chemical, civil, computer, electrical, materials, mechanical, mining, software, and bio-resource engineering.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Biological Engineering</li>
                          <li>• Computer Engineering</li>
                          <li>• Materials Engineering</li>
                          <li>• Bio-resource Engineering</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Law Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Faculty of Law is popular for its unique program that combines common law and civil law. One of the best law schools in Canada in the world.
                        </p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div><strong>Specialty:</strong> Common & Civil Law combination</div>
                          <div><strong>Graduates:</strong> Supreme Court positions</div>
                          <div><strong>International:</strong> ICJ positions</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* University of Alberta */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">University of Alberta</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">Co-op Programs Available</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Co-op Focus
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Engineering Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Common first-year program (qualifying first year) provides strong foundation. Students choose four-year degree or five-year co-op program with paid work experience.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Chemical Engineering</li>
                          <li>• Software Engineering</li>
                          <li>• Engineering Physics</li>
                          <li>• 5-year Co-op Programs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Law Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Faculty of Law is well-respected by top law firms in Canada with strong record of helping graduates build successful careers.
                        </p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div><strong>Recognition:</strong> Top law firms respect</div>
                          <div><strong>Student Life:</strong> 30+ clubs & associations</div>
                          <div><strong>Career Support:</strong> Strong graduate success</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* University of Waterloo */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">University of Waterloo</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <Building2 className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">Founded 1957 - Largest Engineering Faculty</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Largest Faculty
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Engineering Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Largest engineering degrees in Canada with 15 undergraduate programs and 37 graduate programs from research-focused master's to Ph.D.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Nanotechnology Engineering</li>
                          <li>• Environmental Engineering</li>
                          <li>• Management Engineering</li>
                          <li>• 37 Graduate Programs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Law Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Law programs help students understand law and legal system from different perspectives through Sociology and Legal Studies department.
                        </p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div><strong>Department:</strong> Sociology & Legal Studies</div>
                          <div><strong>Programs:</strong> Undergraduate & Graduate</div>
                          <div><strong>Focus:</strong> Research & Critical thinking</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* University of British Columbia */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">University of British Columbia (UBC)</h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          <span className="text-sm font-medium">High Global Rankings - Beautiful Campus</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Research Leader
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Engineering Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Famous for research and beautiful campus, providing engineering programs in environmental sciences, business, forestry, and psychology.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Environmental Sciences</li>
                          <li>• Engineering Business</li>
                          <li>• Forestry Engineering</li>
                          <li>• Research Focus Programs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Law Programs</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Peter A. Allard School of Law provides top law programs in Canada, known for high-quality education and research excellence.
                        </p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div><strong>School:</strong> Peter A. Allard School of Law</div>
                          <div><strong>Reputation:</strong> High-quality education</div>
                          <div><strong>Strength:</strong> Research excellence</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Canada offers excellent opportunities for Pakistani students in both engineering and law fields. With top-ranked universities, research opportunities, work permits, and a welcoming multicultural environment, studying in Canada can provide the foundation for a successful international career. The combination of quality education, practical experience through co-op programs, and post-graduation work opportunities makes Canada an ideal destination for ambitious Pakistani students.
                </p>
              </section>

              {/* FAQs */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  FAQs
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Are scholarships in Canada for Pakistani students available?
                    </h3>
                    <p className="text-gray-700">
                      Yes, there are numerous scholarships available for Pakistani students in Canada. These include government scholarships, university-specific scholarships, and merit-based awards. Many Canadian universities offer international student scholarships specifically for engineering and law programs.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What is the cost for top engineering programs in Canada?
                    </h3>
                    <p className="text-gray-700">
                      The cost varies by university and program, but international students can expect to pay between CAD $30,000 to $60,000 per year for engineering programs at top universities. Additional costs include living expenses, books, and other fees.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What is the duration for law courses in Canada?
                    </h3>
                    <p className="text-gray-700">
                      Law degree programs in Canada typically take 3 years for a JD (Juris Doctor) degree. LLM (Master of Laws) programs usually take 1-2 years to complete. Some universities also offer combined undergraduate and law degree programs that may take longer.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Can Pakistani students work while studying in Canada?
                    </h3>
                    <p className="text-gray-700">
                      Yes, international students with valid study permits can work part-time (up to 20 hours per week) during academic sessions and full-time during scheduled breaks. Many engineering and law programs also offer co-op opportunities for paid work experience.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What are the admission requirements for Pakistani students?
                    </h3>
                    <p className="text-gray-700">
                      Requirements typically include completed secondary education with strong grades, English proficiency test scores (IELTS/TOEFL), letters of recommendation, statement of purpose, and specific program requirements. Law programs may require LSAT scores, while engineering programs may need specific mathematics and science prerequisites.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Engineering or Law Journey in Canada?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants for Canadian university applications, visa processing, and scholarship opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+923041110947"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (+92) 304 1110947
                  </a>
                  <a
                    href="mailto:query@teamdunya.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
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
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Study Level:</span>
                    <span className="font-medium">Bachelor's, Master's, PhD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Rights:</span>
                    <span className="font-medium">20 hrs/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">3-5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">PGWP:</span>
                    <span className="font-medium">Up to 3 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Intake:</span>
                    <span className="font-medium">Sep, Jan, May</span>
                  </div>
                </div>
              </div>

              {/* Top Universities */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Top Universities
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">University of Toronto</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">McGill University</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">University of Alberta</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">University of Waterloo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">University of British Columbia</span>
                  </li>
                </ul>
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