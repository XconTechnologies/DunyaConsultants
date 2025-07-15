import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Linkedin, Twitter, BookOpen, CheckCircle, Phone, Award, Star, Users, Globe, TrendingUp, ExternalLink, Briefcase, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function UKInternshipInternationalStudents() {
  const shareUrl = window.location.href;
  const title = "UK Internship for International Students";

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      color: "text-blue-400 hover:text-blue-600"
    }
  ];

  const tableOfContents = [
    { id: "introduction", title: "Introduction to UK Internships" },
    { id: "visa-requirements", title: "Visa Requirements" },
    { id: "types-of-internships", title: "Types of Internships" },
    { id: "application-process", title: "Application Process" },
    { id: "top-companies", title: "Top Companies Hiring" },
    { id: "salary-expectations", title: "Salary Expectations" },
    { id: "preparation-tips", title: "Preparation Tips" },
    { id: "success-stories", title: "Success Stories" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-gray-900">UK Internship for International Students</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="py-8">
              {/* Featured Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="UK Internship"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">UK Internships</h2>
                  <p className="text-lg">Gateway to Your Career</p>
                </div>
              </motion.div>

              {/* Article Header */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
                  UK Internship for International Students
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">Jan 2, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">13 min read</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Dunya Consultants</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full">
                      UK Internship
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full">
                      International Students
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-full">
                      Career Development
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">Share:</span>
                    {shareLinks.map((link) => (
                      <button
                        key={link.name}
                        className={`p-3 rounded-full hover:shadow-lg transition-all duration-300 ${link.color}`}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div id="introduction" className="mb-10">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Securing an internship in the UK as an international student is an excellent way to gain valuable work experience, build professional networks, and enhance your career prospects. The UK offers diverse internship opportunities across various industries, from finance and technology to healthcare and creative arts.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    This comprehensive guide will walk you through everything you need to know about finding, applying for, and securing internships in the UK as an international student, including visa requirements, application processes, and tips for success.
                  </p>
                </div>

                <div id="visa-requirements" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Visa Requirements for International Students</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Understanding visa requirements is crucial for international students seeking internships in the UK. The regulations vary depending on your current visa status and the type of internship.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Visa Work Rights:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Up to 20 hours per week during term time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Full-time work during holidays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Internships as part of course curriculum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>No self-employment or business activities</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="types-of-internships" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Internships Available</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The UK offers various types of internships to suit different academic backgrounds, career goals, and time commitments.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">
                        <Briefcase className="w-5 h-5 inline mr-2" />
                        Summer Internships
                      </h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• Duration: 8-12 weeks</li>
                        <li>• Full-time commitment</li>
                        <li>• Competitive programs</li>
                        <li>• Often paid positions</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-green-900 mb-3">
                        <Building className="w-5 h-5 inline mr-2" />
                        Industrial Placements
                      </h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Duration: 12 months</li>
                        <li>• Part of degree program</li>
                        <li>• Sandwich year option</li>
                        <li>• University support</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-purple-900 mb-3">
                        <Star className="w-5 h-5 inline mr-2" />
                        Graduate Internships
                      </h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• Post-graduation opportunities</li>
                        <li>• 3-6 months duration</li>
                        <li>• Path to full-time roles</li>
                        <li>• Professional development</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-orange-900 mb-3">
                        <Users className="w-5 h-5 inline mr-2" />
                        Part-time Internships
                      </h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Flexible hours</li>
                        <li>• Study-work balance</li>
                        <li>• Skill development</li>
                        <li>• Network building</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="application-process" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process Step-by-Step</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The application process for UK internships typically follows a structured approach, though specific requirements may vary by company and industry.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Timeline:</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                        <span>Research and identify target companies (Start 6 months early)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                        <span>Prepare application materials (CV, cover letter, portfolio)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                        <span>Submit applications (Deadlines vary: Oct-Feb for summer)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                        <span>Complete online assessments and tests</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                        <span>Attend interviews (phone, video, or in-person)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">6</span>
                        <span>Receive offer and complete onboarding</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div id="top-companies" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Companies Hiring International Interns</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Many leading UK companies actively recruit international students for internship programs across various sectors.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Financial Services</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Barclays</li>
                        <li>• HSBC</li>
                        <li>• Goldman Sachs</li>
                        <li>• JP Morgan</li>
                        <li>• Lloyds Banking Group</li>
                        <li>• Deutsche Bank</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Google</li>
                        <li>• Microsoft</li>
                        <li>• Amazon</li>
                        <li>• IBM</li>
                        <li>• Accenture</li>
                        <li>• Deloitte Digital</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Consulting</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• McKinsey & Company</li>
                        <li>• Boston Consulting Group</li>
                        <li>• PwC</li>
                        <li>• EY</li>
                        <li>• KPMG</li>
                        <li>• Deloitte</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Engineering</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Rolls-Royce</li>
                        <li>• BAE Systems</li>
                        <li>• Arup</li>
                        <li>• Dyson</li>
                        <li>• Airbus</li>
                        <li>• Shell</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="salary-expectations" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Salary Expectations</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Internship salaries in the UK vary significantly based on industry, company size, location, and duration of the program.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">£15,000-£25,000</div>
                      <div className="text-sm text-gray-600">Annual (placement year)</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">£300-£600</div>
                      <div className="text-sm text-gray-600">Weekly (summer internship)</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">£10-£15</div>
                      <div className="text-sm text-gray-600">Hourly rate</div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Salary by Industry:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Investment Banking: £600-£1,200/week</li>
                      <li>• Technology: £400-£800/week</li>
                      <li>• Consulting: £500-£900/week</li>
                      <li>• Engineering: £300-£600/week</li>
                      <li>• Marketing: £250-£500/week</li>
                      <li>• Non-profit: £150-£350/week</li>
                    </ul>
                  </div>
                </div>

                <div id="preparation-tips" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparation Tips for Success</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Thorough preparation is essential for securing competitive internship positions in the UK.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">CV and Cover Letter</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Tailor to each application</li>
                        <li>• Highlight relevant skills</li>
                        <li>• Include academic achievements</li>
                        <li>• Show cultural awareness</li>
                        <li>• Proofread carefully</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Interview Preparation</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Research the company thoroughly</li>
                        <li>• Practice common questions</li>
                        <li>• Prepare specific examples</li>
                        <li>• Understand UK business culture</li>
                        <li>• Prepare thoughtful questions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="success-stories" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Here are inspiring examples of international students who secured prestigious internships in the UK.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Sarah - Goldman Sachs Summer Analyst</h4>
                      <p className="text-blue-800 text-sm mb-2">Computer Science student from Pakistan</p>
                      <p className="text-blue-800 text-sm">"Started preparing 8 months early, networked extensively, and practiced technical interviews. The internship led to a full-time offer."</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-green-900 mb-2">Ahmed - Rolls-Royce Engineering Placement</h4>
                      <p className="text-green-800 text-sm mb-2">Mechanical Engineering student from Bangladesh</p>
                      <p className="text-green-800 text-sm">"Applied through university career services, emphasized my project work and passion for aerospace engineering."</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-purple-900 mb-2">Maria - BBC Graduate Trainee</h4>
                      <p className="text-purple-800 text-sm mb-2">Media Studies student from Brazil</p>
                      <p className="text-purple-800 text-sm">"Gained relevant experience through university media projects and demonstrated strong storytelling skills."</p>
                    </div>
                  </div>
                </div>

                <div id="conclusion" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Securing an internship in the UK as an international student requires careful planning, thorough preparation, and persistence. The opportunities are abundant across various industries, and the experience gained can be invaluable for your future career.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Start your preparation early, leverage your university's career services, and don't be discouraged by initial rejections. With the right approach and dedication, you can successfully secure a meaningful internship experience in the UK.
                  </p>
                </div>

                <div id="faqs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">When should I start applying for summer internships?</h3>
                      <p className="text-gray-700 text-sm">Most summer internship applications open in October and close between December and February. Start preparing 6 months in advance.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Do I need work authorization for internships?</h3>
                      <p className="text-gray-700 text-sm">Student visa holders can work up to 20 hours per week during term time and full-time during holidays without additional authorization.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">How competitive are UK internships?</h3>
                      <p className="text-gray-700 text-sm">Top-tier internships are highly competitive with acceptance rates of 1-5%. However, there are many opportunities across different levels and industries.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Can internships lead to full-time job offers?</h3>
                      <p className="text-gray-700 text-sm">Yes, many companies use internship programs as recruitment pipelines. Success rates for return offers range from 60-90% depending on the company.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Need Career Guidance?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our career counselors can help you prepare for UK internship applications and interviews.
                  </p>
                  <Button className="w-full" onClick={() => window.open('tel:+923041110947', '_blank')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call (+92) 304 1110947
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}