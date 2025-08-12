import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, User, Share2, Download, Phone, Mail, MessageCircle, ChevronRight, ChevronDown, ChevronUp, Briefcase, GraduationCap, MapPin, Users } from 'lucide-react';

const UKInternshipInternationalStudents: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are internship programs in UK?",
      answer: "Internships in the UK give students useful work experience and help them explore careers. Some lead to job offers, and they can be paid or unpaid depending on the program and company."
    },
    {
      question: "Are internships for A level students in UK?",
      answer: "Yes, there are internship opportunities available for A-level students in the UK. These are typically shorter programs designed to give students early exposure to professional work environments."
    },
    {
      question: "Does UK provide internships for undergraduates?",
      answer: "Yes, the UK offers numerous internship opportunities for undergraduate students, including summer internships, year-long placements, and part-time internships during studies."
    },
    {
      question: "How can I avail internships for university students in UK?",
      answer: "University students can find internships through career services, online job portals, company websites, networking events, and specialized internship programs like those offered by universities such as Teesside University."
    }
  ];

  const internshipTypes = [
    {
      title: "Postgraduate Internship",
      description: "Some universities in UK, like Teesside University, provide 100% internship opportunities as part of their master's programs to international students. Usually in fields related to the student's degree.",
      icon: <GraduationCap className="w-8 h-8 #1845B3" />,
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "Summer Internships",
      description: "Last 8 to 12 weeks during summer break. Give students practical experience in fields like engineering, finance, and media. Many companies use these to find future employees.",
      icon: <Clock className="w-8 h-8 #1845B3" />,
      color: "from-green-50 to-emerald-50"
    },
    {
      title: "Industry-Specific Internships",
      description: "Fields like technology, healthcare, and finance have special internships. Big companies such as Deloitte, PwC, and the NHS provide well-structured programs with training.",
      icon: <Briefcase className="w-8 h-8 #1845B3" />,
      color: "from-purple-50 to-violet-50"
    },
    {
      title: "Year-Long Internships",
      description: "Some UK universities provide 'sandwich courses' where students work in a company for an entire academic year. Common in business, engineering, and technology programs.",
      icon: <Users className="w-8 h-8 #1845B3" />,
      color: "from-orange-50 to-amber-50"
    },
    {
      title: "Remote Internships",
      description: "With more people working online, remote internships have become popular. Allow students to work for UK-based companies from anywhere, adjusting to UK time zone.",
      icon: <MapPin className="w-8 h-8 #1845B3" />,
      color: "from-red-50 to-rose-50"
    }
  ];

  const bestInternships = [
    {
      program: "AIESEC UK",
      description: "Helps international students secure paid traineeships and internships worldwide. Best for gaining global work experience."
    },
    {
      program: "CIEE Global Internships",
      description: "A 14-week competitive internship in London. Provides hands-on industry experience and career growth."
    },
    {
      program: "Industry Immersion Program",
      description: "Best for networking with industry experts. Develops workplace skills and deep industry knowledge."
    },
    {
      program: "Global Internship Programme",
      description: "Provides internships in top sectors like banking, law, marketing, and tech. Enhances professional exposure and career prospects."
    },
    {
      program: "FIE London: Semester & Summer Internships",
      description: "Perfect for career-focused students. Helps in professional development and exploring new job roles."
    },
    {
      program: "CAPA London: The Global Education Network",
      description: "Provides 3-6 credit internships in 50+ industries. Strong connections with 1,000+ companies in London."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center #1845B3 hover:text-[#1565c0] mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>March 12, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>9 min read</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:bg-[#1845B3] rounded-full hover:bg-blue-50">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-[#1845B3] rounded-full hover:bg-blue-50">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D50C9]/80 to-[#1845B3]/80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">UK Internship for International Students</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">Your Complete Guide to UK Internship Opportunities</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm">

              <div className="p-8">
                {/* Article Content */}
                <div>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Are you a student or recent graduate looking for an internship in the UK? According to the ISE 
                    (Institute of Student Employers), almost 50% of interns in the UK get full-time job offers from 
                    the same company. This shows how important an internship in UK for international students is for 
                    starting a career.
                  </p>

                  <div className="bg-blue-50 border-l-4 #1D50C9 p-6 my-8">
                    <h3 className="text-lg font-semibold text-#1e3a8a mb-2">Key Statistics</h3>
                    <ul className="text-[#1565c0] space-y-1">
                      <li>• 50% of UK interns receive full-time job offers from the same company</li>
                      <li>• Teesside University offers 100% internship opportunities after 1-year master's</li>
                      <li>• UK provides diverse and welcoming environment for international students</li>
                      <li>• Internships help with both financial support and skill development</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Briefcase className="w-8 h-8 #1845B3 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Career Benefits</h3>
                      </div>
                      <p className="text-gray-700">Internships provide valuable work experience, networking opportunities, and potential pathways to full-time employment in the UK.</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Users className="w-8 h-8 #1845B3 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">International Support</h3>
                      </div>
                      <p className="text-gray-700">The UK offers a diverse and welcoming environment with comprehensive support systems for international students and interns.</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                    Types of Internships in UK for International Students
                  </h2>
                  <p className="mb-6">
                    Paid internships in UK for international students provide many opportunities in different fields and 
                    time frames that help students gain experience while balancing their studies. You can choose an 
                    internship opportunity that matches your career goals and schedule.
                  </p>

                  <div className="space-y-6 my-8">
                    {internshipTypes.map((type, index) => (
                      <div key={index} className={`bg-gradient-to-br ${type.color} rounded-lg p-6`}>
                        <div className="flex items-start">
                          <div className="mr-4 flex-shrink-0">
                            {type.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                            <p className="text-gray-700">{type.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                    Best Internship Programs for International Students
                  </h2>
                  <p className="mb-6">
                    Some of the most popular internship programmes for international students include:
                  </p>

                  <div className="space-y-6 my-8">
                    {bestInternships.map((internship, index) => (
                      <div key={index} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                            <span className="#1845B3 font-bold text-sm">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{internship.program}</h3>
                            <p className="text-gray-700">{internship.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border-l-4 #1D50C9 p-6 my-8">
                    <h3 className="text-lg font-semibold text-#1e3a8a mb-2">Important Considerations</h3>
                    <ul className="text-[#1565c0] space-y-2">
                      <li>• Internships should not take up more than one-third of your course time</li>
                      <li>• Many universities allow students to work part-time alongside studies</li>
                      <li>• Some internships are paid while others are unpaid</li>
                      <li>• Internships can lead to full-time job offers after graduation</li>
                      <li>• Work experience improves both professional and communication skills</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Special Opportunities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-#1e3a8a mb-2">Teesside University</h4>
                        <p className="text-sm text-gray-700">After completing a one-year master's degree, students get 100% guaranteed internship opportunities</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-#1e3a8a mb-2">Industry Leaders</h4>
                        <p className="text-sm text-gray-700">Major companies like Deloitte, PwC, and NHS offer structured internship programs</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                    Benefits of UK Internships
                  </h2>
                  <div className="bg-blue-50 border-l-4 #1D50C9 p-6 my-8">
                    <h3 className="text-lg font-semibold text-#1e3a8a mb-2">Career Advantages</h3>
                    <ul className="text-[#1565c0] space-y-2">
                      <li>✓ Practical work experience in your field of study</li>
                      <li>✓ Networking opportunities with industry professionals</li>
                      <li>✓ Potential full-time job offers (50% success rate)</li>
                      <li>✓ Enhanced CV and professional skills</li>
                      <li>✓ Financial support during studies</li>
                      <li>✓ Cultural integration and language improvement</li>
                      <li>✓ Industry insights and career exploration</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                    Application Tips
                  </h2>
                  <div className="bg-white rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Secure an Internship</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 #1845B3 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Start Early</h4>
                          <p className="text-gray-700">Begin your search well in advance as competitive positions fill up quickly</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 #1845B3 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Use University Resources</h4>
                          <p className="text-gray-700">Leverage career services, job fairs, and university partnerships</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 #1845B3 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Tailor Applications</h4>
                          <p className="text-gray-700">Customize your CV and cover letter for each internship application</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 #1845B3 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Network Actively</h4>
                          <p className="text-gray-700">Attend industry events, join professional societies, and connect with alumni</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 #1D50C9 pl-4">
                    Conclusion
                  </h2>
                  <p className="mb-6">
                    Studying in the UK is one of the best experiences, and many international students look for part-time 
                    jobs or internships to gain skills and work experience. UK internships for international students help 
                    improve professional and communication skills, which is why many universities allow students to work 
                    part-time alongside their studies. However, internships should not take up more than one-third of your 
                    course time. With programs like Teesside University's guaranteed internship opportunities and the high 
                    success rate of internships leading to full-time employment, the UK provides excellent career development 
                    opportunities for international students.
                  </p>

                  {/* FAQ Section */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white"
                        >
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {expandedFaq === index && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#types" className="block text-sm #1845B3 hover:text-[#1565c0]">Types of Internships</a>
                  <a href="#programs" className="block text-sm #1845B3 hover:text-[#1565c0]">Best Programs</a>
                  <a href="#benefits" className="block text-sm #1845B3 hover:text-[#1565c0]">Benefits</a>
                  <a href="#application" className="block text-sm #1845B3 hover:text-[#1565c0]">Application Tips</a>
                  <a href="#conclusion" className="block text-sm #1845B3 hover:text-[#1565c0]">Conclusion</a>
                  <a href="#faq" className="block text-sm #1845B3 hover:text-[#1565c0]">FAQ</a>
                </nav>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help with UK Internships?</h3>
                <p className="text-gray-600 mb-4">Get expert guidance on finding and securing internships in the UK.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 #1845B3" />
                    <span className="text-sm text-gray-700">UAN: (+92) 304 1110947</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 #1845B3" />
                    <span className="text-sm text-gray-700">info@dunyaconsultants.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 #1845B3" />
                    <span className="text-sm text-gray-700">WhatsApp Available</span>
                  </div>
                </div>

                <button className="w-full #1845B3 text-white py-2 px-4 rounded-lg hover:bg-#1a73e8 mt-4">
                  Get Free Consultation
                </button>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog/top-study-abroad-countries" className="block hover:bg-[#1845B3]">
                    <div className="text-sm font-medium">Top Study Abroad Countries</div>
                    <div className="text-xs text-gray-500">Best destinations for studies</div>
                  </Link>
                  <Link href="/blog/oxford-test-accepted-universities-uk" className="block hover:bg-[#1845B3]">
                    <div className="text-sm font-medium">Oxford Test Accepted Universities UK</div>
                    <div className="text-xs text-gray-500">OIETC university guide</div>
                  </Link>
                  <Link href="/blog/ielts-listening-skills" className="block hover:bg-[#1845B3]">
                    <div className="text-sm font-medium">IELTS Listening Skills</div>
                    <div className="text-xs text-gray-500">Test preparation tips</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UKInternshipInternationalStudents;