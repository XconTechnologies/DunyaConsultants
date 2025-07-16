import { ArrowLeft, Clock, User, Share2, Download, GraduationCap, Globe, BookOpen, Users, CheckCircle, Building, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function BachelorsICTSoftwareEngineering() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>March 8, 2025</span>
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
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Bachelors in ICT (Software Engineering)</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">Complete Guide to Software Engineering Programs in Finland</p>
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
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Software and technology are now a big part of everyday life. With digital advancements, societies are 
                    changing the way they work, creating many job opportunities for IT professionals. A Bachelor's degree in 
                    Information and Communication Technology (ICT) focuses on Software Engineering and teaches students the 
                    skills to design, develop, test, and maintain software.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Why Study Software Engineering?</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• High demand for skilled software engineers globally</li>
                      <li>• Excellent career prospects and salary potential</li>
                      <li>• Opportunity to work in diverse industries</li>
                      <li>• Finland offers world-class education in technology</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Career Opportunities</h3>
                      </div>
                      <p className="text-gray-700">Software engineering graduates can work as developers, system architects, project managers, or start their own tech companies.</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Globe className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Global Reach</h3>
                      </div>
                      <p className="text-gray-700">Over 24,000 international students study in Finland, making it a diverse and exciting place to learn and network.</p>
                    </div>
                  </div>

                  <p className="mb-6">
                    Finland is a great place to study Software Engineering, with Karelia University of applied sciences providing 
                    Bachelor's programs. More than 24,000 international students study in Finland, making it a diverse and exciting 
                    place to learn. You'll have the chance to meet people from different backgrounds and gain valuable experience 
                    for your future career in technology.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Universities Offering Bachelors in Software Engineering in Finland
                  </h2>
                  <p className="mb-6">
                    Numerous universities in the world provide BS software engineering programs. Here are some top institutions:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Universities:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Karelia University Finland</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Massachusetts Institute of Technology (MIT)</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Stanford University</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Sheffield Hallam University</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Carnegie Mellon University</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Eligibility Criteria for BS Software Engineering in Finland
                  </h2>
                  <p className="mb-6">
                    To apply for software engineer Finland program, you need to meet certain academic and language requirements:
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Academic Requirements:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-green-800">At least 55-60% marks in FSc. Pre-Engineering or ICS</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-green-800">IELTS score of 6.0 overall or equivalent</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-green-800">PTE score of 55 overall or equivalent</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Documents Required for Software Engineering in Finland
                  </h2>
                  <p className="mb-6">
                    To apply for a Software Engineering program in Finland, you need the following documents:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <FileText className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-medium text-gray-900">Academic Documents</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Original mark sheet from previous studies</li>
                        <li>• Transfer Certificate</li>
                        <li>• Migration Certificate (if applicable)</li>
                        <li>• Conduct Certificate</li>
                      </ul>
                    </div>

                    <div className="bg-white border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <FileText className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-medium text-gray-900">Personal Documents</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Proof of English language proficiency</li>
                        <li>• Curriculum Vitae (CV)</li>
                        <li>• Motivation letter</li>
                        <li>• Proof of date of birth</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    How to Apply for an ICT (Software Engineering) Program?
                  </h2>
                  <p className="mb-6">
                    Follow these steps to apply for your software engineering program:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">1</div>
                        <h3 className="text-lg font-semibold text-gray-900">Research Universities</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Visit the official websites and search for Software Engineering programs. Look at the qualifications 
                        needed, like English language skills and academic requirements.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">2</div>
                        <h3 className="text-lg font-semibold text-gray-900">Prepare Documents</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Gather required papers like academic transcripts, recommendation letters (if needed), and English 
                        proficiency certificates.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">3</div>
                        <h3 className="text-lg font-semibold text-gray-900">Submit Application</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Submit your application online and pay the application fee (if required). Make sure all information 
                        is accurate and complete.
                      </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4">4</div>
                        <h3 className="text-lg font-semibold text-gray-900">Track Application</h3>
                      </div>
                      <p className="text-gray-700 ml-12">
                        Keep checking the website for updates on your admission status and respond to any additional 
                        requirements promptly.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Finland good for software engineering?</h3>
                      <p className="text-gray-700">
                        Yes, Finland is a great place for software engineering because it has a strong tech industry, many job 
                        opportunities, good salaries, and high quality of life. The country is home to many successful tech 
                        companies and offers excellent education.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I apply to Karelia University of applied sciences?</h3>
                      <p className="text-gray-700">
                        You can apply to Karelia University of Applied Sciences online at www.studyinfo.fi. There are different 
                        application periods throughout the year, so check their website for specific deadlines and requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#universities" className="block text-sm text-gray-600 hover:text-blue-600">Universities</a>
                  <a href="#eligibility" className="block text-sm text-gray-600 hover:text-blue-600">Eligibility Criteria</a>
                  <a href="#documents" className="block text-sm text-gray-600 hover:text-blue-600">Required Documents</a>
                  <a href="#application" className="block text-sm text-gray-600 hover:text-blue-600">Application Process</a>
                  <a href="#faqs" className="block text-sm text-gray-600 hover:text-blue-600">FAQs</a>
                </nav>
              </div>

              {/* Contact Form */}
              <ContactForm />

            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your software engineering journey in Finland? Contact our expert team for personalized guidance and support.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}