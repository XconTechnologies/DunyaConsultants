import React from 'react';
import { Wrench, Scale, GraduationCap, MapPin, Star, Users, Building, CheckCircle } from 'lucide-react';

export default function EngineeringLawCanada() {
  const universities = [
    {
      name: "University of Toronto",
      location: "Toronto, Ontario",
      ranking: "1st in Canada",
      specialties: ["Chemical Engineering", "Civil Engineering", "Electrical Engineering", "Aerospace Engineering", "Common Law"]
    },
    {
      name: "McGill University",
      location: "Montreal, Quebec",
      ranking: "Top 3 in Canada",
      specialties: ["Biological Engineering", "Software Engineering", "Common & Civil Law"]
    },
    {
      name: "University of Alberta",
      location: "Edmonton, Alberta",
      ranking: "Top 5 in Canada",
      specialties: ["Chemical Engineering", "Software Engineering", "Engineering Physics", "Law"]
    },
    {
      name: "University of Waterloo",
      location: "Waterloo, Ontario",
      ranking: "Top Engineering School",
      specialties: ["Nanotechnology", "Environmental Engineering", "Management Engineering", "Legal Studies"]
    },
    {
      name: "University of British Columbia",
      location: "Vancouver, BC",
      ranking: "Top 3 in Canada",
      specialties: ["Environmental Engineering", "Business Engineering", "Peter A. Allard School of Law"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Engineering and Law Programs in Canada</h1>
              <p className="mt-2 text-gray-600">Best Universities for Pakistani Students in 2025</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                <Building className="w-4 h-4 mr-1" />
                Study in Canada
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
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                  alt="Engineering and Law Programs in Canada"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Key Benefits */}
              <div className="bg-red-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Why Choose Canada?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm">High-quality education system</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm">Part-time work opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm">Safe and welcoming environment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm">Research opportunities</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Canada is one of the most popular destinations for Pakistani students seeking quality education in engineering and law. 
                  The country is renowned for its high-quality education system, research opportunities, and welcoming environment for 
                  international students. With world-class universities and industry partnerships, Canada offers excellent prospects 
                  for career advancement.
                </p>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  Students can work part-time during their studies, which helps manage expenses while gaining valuable work experience. 
                  The safe environment, multicultural society, and excellent career prospects make Canada an ideal choice for Pakistani 
                  students pursuing engineering and law degrees.
                </p>
              </div>

              {/* Top Universities */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Top Universities for Engineering and Law
                </h2>
                <div className="space-y-6">
                  {universities.map((university, index) => (
                    <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold mr-3">
                              {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{university.name}</h3>
                          </div>
                          <div className="ml-11">
                            <p className="text-gray-600 flex items-center mb-2">
                              <MapPin className="w-4 h-4 mr-1" />
                              {university.location}
                            </p>
                            <p className="text-gray-600 flex items-center mb-3">
                              <Star className="w-4 h-4 mr-1" />
                              {university.ranking}
                            </p>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                              <div className="flex flex-wrap gap-2">
                                {university.specialties.map((specialty, idx) => (
                                  <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-8 h-8 text-red-600" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* University Details */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  University Highlights
                </h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Wrench className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-blue-900">University of Toronto</h3>
                    </div>
                    <p className="text-blue-800 text-sm mb-3">
                      Ranked highest in Canada by Times Higher Education World University Rankings 2024. 
                      Faculty of Applied Science and Engineering has nine departments including chemical, civil, electrical, and aerospace engineering.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Law Faculty</h4>
                      <p className="text-sm text-gray-600">
                        Faculty of Law is one of the best law universities in Canada for common law. 
                        High admission requirements: GPA 3.88, LSAT score 168.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Scale className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-green-900">McGill University</h3>
                    </div>
                    <p className="text-green-800 text-sm mb-3">
                      One of the oldest universities in Canada and one of three English-language universities in Quebec. 
                      Engineering faculty offers programs in biological, chemical, civil, computer, and software engineering.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Law Faculty</h4>
                      <p className="text-sm text-gray-600">
                        Faculty of Law is known for its unique program combining common law and civil law. 
                        Graduates often secure positions at Supreme Court of Canada and International Court of Justice.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Users className="w-6 h-6 text-purple-600 mr-3" />
                      <h3 className="text-lg font-semibold text-purple-900">University of Alberta</h3>
                    </div>
                    <p className="text-purple-800 text-sm mb-3">
                      Common first-year program (qualifying first year) provides strong foundation in general engineering. 
                      Students can choose four-year degree or five-year co-op program with paid work experience.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Law Faculty</h4>
                      <p className="text-sm text-gray-600">
                        Faculty of Law is well-respected by top law firms and has strong record of helping graduates 
                        build successful careers with nearly 30 clubs and associations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Engineering Programs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Engineering Programs Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Popular Specializations</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Chemical Engineering</li>
                      <li>• Civil Engineering</li>
                      <li>• Electrical Engineering</li>
                      <li>• Software Engineering</li>
                      <li>• Mechanical Engineering</li>
                      <li>• Aerospace Engineering</li>
                      <li>• Environmental Engineering</li>
                      <li>• Biomedical Engineering</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Program Features</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Co-op programs with paid work experience</li>
                      <li>• Industry partnerships</li>
                      <li>• Research opportunities</li>
                      <li>• Modern facilities and labs</li>
                      <li>• Professional engineering certification</li>
                      <li>• Internship programs</li>
                      <li>• International exchange programs</li>
                      <li>• Career services support</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Law Programs */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Law Programs Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Law Program Types</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• JD (Juris Doctor) - 3 years</li>
                      <li>• LLM (Master of Laws) - 1 year</li>
                      <li>• Common Law programs</li>
                      <li>• Civil Law programs</li>
                      <li>• Combined Common & Civil Law</li>
                      <li>• International Law specializations</li>
                      <li>• Corporate Law focus</li>
                      <li>• Environmental Law</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Career Opportunities</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Law firms (corporate, litigation)</li>
                      <li>• Government positions</li>
                      <li>• Judicial clerkships</li>
                      <li>• International organizations</li>
                      <li>• Corporate legal departments</li>
                      <li>• Public interest organizations</li>
                      <li>• Academic careers</li>
                      <li>• Legal consulting</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Admission Requirements */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Admission Requirements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Wrench className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-lg font-semibold text-orange-900">Engineering Programs</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-orange-800">
                      <li>• High school diploma with strong math and science grades</li>
                      <li>• IELTS 6.5 or TOEFL 90+ for English proficiency</li>
                      <li>• SAT/ACT scores (for some universities)</li>
                      <li>• Letters of recommendation</li>
                      <li>• Personal statement</li>
                      <li>• Portfolio (for some programs)</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Scale className="w-6 h-6 text-indigo-600 mr-3" />
                      <h3 className="text-lg font-semibold text-indigo-900">Law Programs</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-indigo-800">
                      <li>• Bachelor's degree (any field)</li>
                      <li>• LSAT score (for JD programs)</li>
                      <li>• High GPA (typically 3.5+)</li>
                      <li>• IELTS 7.0 or TOEFL 100+</li>
                      <li>• Personal statement</li>
                      <li>• Letters of recommendation</li>
                      <li>• Resume/CV</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Student Life & Support */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4">
                  Student Life & Support
                </h2>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Work Opportunities</h3>
                      <p className="text-sm text-gray-600">
                        Part-time work during studies and full-time during breaks. 
                        Co-op programs provide paid work experience.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Support Services</h3>
                      <p className="text-sm text-gray-600">
                        Academic support, career counseling, health services, 
                        and international student services.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Campus Life</h3>
                      <p className="text-sm text-gray-600">
                        Student clubs, professional associations, 
                        sports facilities, and cultural events.
                      </p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">Are scholarships available for Pakistani students?</h3>
                    <p className="text-gray-600">
                      Yes, many Canadian universities offer scholarships, bursaries, and financial aid for international students. 
                      Merit-based and need-based options are available.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What is the cost for top engineering programs?</h3>
                    <p className="text-gray-600">
                      Engineering programs typically cost CAD $25,000-$50,000 per year for international students, 
                      varying by university and program.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What is the duration for law courses?</h3>
                    <p className="text-gray-600">
                      JD programs are typically 3 years, while LLM programs are 1 year. 
                      Some combined programs may take longer.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Study in Canada</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get expert guidance on engineering and law programs in Canada
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

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Canada Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Top Universities:</span>
                    <span className="font-medium">5 featured</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Programs:</span>
                    <span className="font-medium">Engineering & Law</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Work Rights:</span>
                    <span className="font-medium">Part-time + Co-op</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">English/French</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Navigation</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#universities" className="block text-gray-600 hover:text-red-600">Top Universities</a>
                  <a href="#engineering" className="block text-gray-600 hover:text-red-600">Engineering Programs</a>
                  <a href="#law" className="block text-gray-600 hover:text-red-600">Law Programs</a>
                  <a href="#admission" className="block text-gray-600 hover:text-red-600">Admission Requirements</a>
                  <a href="#student-life" className="block text-gray-600 hover:text-red-600">Student Life</a>
                  <a href="#faqs" className="block text-gray-600 hover:text-red-600">FAQs</a>
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <a href="/blog/uk-llm-pakistani-bar" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">UK LLM to Pakistani Bar</h4>
                    <p className="text-xs text-gray-600 mt-1">Legal practice conversion guide</p>
                  </a>
                  <a href="/blog/turkey-best-choice-pakistani-students" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">Study in Turkey</h4>
                    <p className="text-xs text-gray-600 mt-1">Best choice for Pakistani students</p>
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