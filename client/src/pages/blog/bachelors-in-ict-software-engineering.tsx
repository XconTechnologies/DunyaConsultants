import { ArrowLeft, Clock, User, Share2, Code, CheckCircle, AlertCircle, FileText, BookOpen, Award, Users, Target, Globe, TrendingUp, Star, Laptop, MapPin, Calendar, Zap } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function BachelorsInICTSoftwareEngineering() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Software Engineering
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Bachelors in ICT (Software Engineering): Complete Guide
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Explore comprehensive Bachelor's degree programs in ICT and Software Engineering, including curriculum, career prospects, and admission requirements.
            </p>
            <div className="flex items-center justify-center space-x-6 text-emerald-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>January 15, 2025</span>
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
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
                  alt="Software Engineering Bachelor's Degree"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Bachelor's in ICT (Information and Communication Technology) with a focus on Software Engineering is one of the most sought-after degree programs in today's digital world. This comprehensive guide explores everything you need to know about pursuing this degree, from curriculum structure to career opportunities.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  What is ICT Software Engineering?
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  ICT Software Engineering combines the theoretical foundations of computer science with practical software development skills. Students learn to design, develop, test, and maintain software systems while understanding the broader context of information and communication technologies.
                </p>

                <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-4">Key Focus Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-700">
                      <Code className="w-5 h-5 text-emerald-600 mr-3" />
                      <span>Software Development & Programming</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Laptop className="w-5 h-5 text-emerald-600 mr-3" />
                      <span>System Design & Architecture</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Globe className="w-5 h-5 text-emerald-600 mr-3" />
                      <span>Web & Mobile Development</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Target className="w-5 h-5 text-emerald-600 mr-3" />
                      <span>Database Management</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Zap className="w-5 h-5 text-emerald-600 mr-3" />
                      <span>Network & Security</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-emerald-600 mr-3" />
                      <span>Project Management</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Curriculum Structure
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">First Year - Foundation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Introduction to Programming</li>
                        <li>• Mathematics for Computing</li>
                        <li>• Computer Systems & Architecture</li>
                        <li>• Problem Solving & Logic</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Communication Skills</li>
                        <li>• English Language</li>
                        <li>• Digital Literacy</li>
                        <li>• Ethics in Computing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">Second Year - Core Concepts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Object-Oriented Programming</li>
                        <li>• Data Structures & Algorithms</li>
                        <li>• Database Systems</li>
                        <li>• Software Engineering Principles</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Web Development</li>
                        <li>• Operating Systems</li>
                        <li>• Computer Networks</li>
                        <li>• Statistics for Computing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Third Year - Advanced Topics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Advanced Software Development</li>
                        <li>• Mobile Application Development</li>
                        <li>• Software Testing & Quality</li>
                        <li>• Human-Computer Interaction</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Artificial Intelligence</li>
                        <li>• Cybersecurity</li>
                        <li>• Cloud Computing</li>
                        <li>• Final Year Project</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Top Universities for ICT Software Engineering
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-blue-900">United Kingdom</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• University of Cambridge</li>
                      <li>• Imperial College London</li>
                      <li>• University of Oxford</li>
                      <li>• University of Edinburgh</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-green-900">United States</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• MIT</li>
                      <li>• Stanford University</li>
                      <li>• Carnegie Mellon University</li>
                      <li>• University of California, Berkeley</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="text-lg font-semibold text-purple-900">Canada</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• University of Toronto</li>
                      <li>• University of Waterloo</li>
                      <li>• McGill University</li>
                      <li>• University of British Columbia</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-orange-600 mr-2" />
                      <h3 className="text-lg font-semibold text-orange-900">Australia</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• University of Melbourne</li>
                      <li>• Australian National University</li>
                      <li>• University of Sydney</li>
                      <li>• UNSW Sydney</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Admission Requirements
                </h2>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">General Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span><strong>Academic:</strong> High school diploma with strong mathematics and science grades</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span><strong>English Proficiency:</strong> IELTS 6.5+ or TOEFL 79+ (for international students)</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span><strong>Portfolio:</strong> Some universities may require coding samples or projects</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <span><strong>Statement of Purpose:</strong> Explaining your interest in software engineering</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Career Opportunities
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Software Development Roles</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Software Developer</li>
                      <li>• Full-Stack Developer</li>
                      <li>• Mobile App Developer</li>
                      <li>• Frontend/Backend Developer</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Specialized Roles</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• DevOps Engineer</li>
                      <li>• Quality Assurance Engineer</li>
                      <li>• Database Administrator</li>
                      <li>• Cybersecurity Specialist</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Leadership Roles</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Technical Lead</li>
                      <li>• Project Manager</li>
                      <li>• Software Architect</li>
                      <li>• IT Consultant</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Emerging Fields</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• AI/ML Engineer</li>
                      <li>• Cloud Solutions Architect</li>
                      <li>• Blockchain Developer</li>
                      <li>• IoT Specialist</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Salary Expectations
                </h2>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Starting Salaries by Country</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">United States</h4>
                      <p className="text-2xl font-bold text-green-600">$65,000 - $85,000</p>
                      <p className="text-sm text-gray-600">Annual starting salary</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">United Kingdom</h4>
                      <p className="text-2xl font-bold text-green-600">£25,000 - £35,000</p>
                      <p className="text-sm text-gray-600">Annual starting salary</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Canada</h4>
                      <p className="text-2xl font-bold text-green-600">CAD $50,000 - $70,000</p>
                      <p className="text-sm text-gray-600">Annual starting salary</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Australia</h4>
                      <p className="text-2xl font-bold text-green-600">AUD $60,000 - $80,000</p>
                      <p className="text-sm text-gray-600">Annual starting salary</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Skills You'll Develop
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Technical Skills</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Programming Languages (Java, Python, C++, JavaScript)</li>
                      <li>• Database Management (SQL, NoSQL)</li>
                      <li>• Web Technologies (HTML, CSS, React, Node.js)</li>
                      <li>• Version Control (Git, GitHub)</li>
                      <li>• Cloud Platforms (AWS, Azure, GCP)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Soft Skills</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Problem-solving and analytical thinking</li>
                      <li>• Team collaboration and communication</li>
                      <li>• Project management</li>
                      <li>• Critical thinking</li>
                      <li>• Adaptability and continuous learning</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Professional Skills</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Software development lifecycle</li>
                      <li>• Agile and Scrum methodologies</li>
                      <li>• Testing and quality assurance</li>
                      <li>• Documentation and technical writing</li>
                      <li>• Client interaction and requirements gathering</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Application Process
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-emerald-900 mb-3">1. Research and Choose Universities</h3>
                    <p className="text-gray-700">Research different universities and their ICT/Software Engineering programs. Consider factors like rankings, curriculum, location, and tuition fees.</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">2. Prepare Required Documents</h3>
                    <p className="text-gray-700">Gather all necessary documents including transcripts, English proficiency test scores, statement of purpose, and recommendation letters.</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">3. Submit Applications</h3>
                    <p className="text-gray-700">Submit your applications through the university's online portal or common application systems like UCAS (UK) or Common App (US).</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">4. Prepare for Interviews</h3>
                    <p className="text-gray-700">Some universities may require interviews. Prepare to discuss your interest in software engineering and your career goals.</p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-4">Why Choose ICT Software Engineering?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>High demand for skilled software engineers globally</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>Excellent career progression opportunities</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>Competitive salaries and benefits</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>Opportunity to work on cutting-edge technology</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>Flexibility to work remotely or internationally</span>
                    </li>
                  </ul>
                </div>

                {/* Social Share */}
                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                  <div className="flex space-x-4">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                      <Share2 className="w-4 h-4 mr-2 inline" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Form */}
              <ContactForm />
              
              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Duration: 3-4 years</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span>Degree: Bachelor of Science</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Code className="w-4 h-4 mr-2" />
                    <span>Focus: Software Development</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span>Job Growth: 22% (projected)</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#what-is" className="text-emerald-600 hover:underline">What is ICT Software Engineering?</a></li>
                  <li><a href="#curriculum" className="text-emerald-600 hover:underline">Curriculum Structure</a></li>
                  <li><a href="#universities" className="text-emerald-600 hover:underline">Top Universities</a></li>
                  <li><a href="#requirements" className="text-emerald-600 hover:underline">Admission Requirements</a></li>
                  <li><a href="#careers" className="text-emerald-600 hover:underline">Career Opportunities</a></li>
                  <li><a href="#salaries" className="text-emerald-600 hover:underline">Salary Expectations</a></li>
                </ul>
              </div>

              {/* Share */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="flex-1 bg-sky-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-sky-600 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-blue-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-800 transition-colors">
                    LinkedIn
                  </button>
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
              Interested in pursuing a Bachelor's in ICT Software Engineering? Contact our expert counselors for personalized guidance on university selection and application processes.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}