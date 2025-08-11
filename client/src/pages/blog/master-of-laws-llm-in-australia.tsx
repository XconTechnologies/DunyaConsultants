import { ArrowLeft, Clock, User, Share2, Scale, CheckCircle, AlertCircle, FileText, BookOpen, Award, Users, DollarSign, Calendar, Globe, TrendingUp, Star } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function MasterOfLawsLLMAustralia() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1D50C9] to-#1565c0 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study in Australia
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Master of Laws (LLM) in Australia: A Comprehensive Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover advanced legal education opportunities in Australia with our complete guide to LLM programs, eligibility, applications, and career prospects.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>March 13, 2025</span>
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
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                  alt="Master of Laws LLM in Australia"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Master's degree in law (LL.M.) is a postgraduate degree that helps students get advanced knowledge in legal studies. Australia is one of the best places for studying master in law and has 25 universities that offer this program. It is the third most popular country for international law students, after the USA and the UK.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Masters of law in Australia usually take one year to complete. Over 458,000 international students choose Australia for higher education. To apply for an LLM in Australia, students must have a law-related qualification like Juris Doctor, an LLB, or Graduate Legal Practical Training scores.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Studying LLM in Australia allows students to explore different legal fields. It also improves analytical as well as problem-solving skills. After completing their LLM from Australia, graduates can either continue their studies with a doctorate or pursue careers as barristers, lawyers, or solicitors. Moreover, an Australian LLM provides the best career opportunities in the legal field.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  List of the Best Universities for Master of Laws in Australia
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  There are some of the top universities and colleges in Australia that provide LLM in Australia. Here are some of the best ones where you can study for a Master's degree in law in Australia:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-#1e3a8a mb-4">Top Universities for LLM in Australia</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 #1845B3 mr-3" />
                      University of Adelaide
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 #1845B3 mr-3" />
                      Australian National University
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 #1845B3 mr-3" />
                      The University of Melbourne
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 #1845B3 mr-3" />
                      University of Technology Sydney
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 #1845B3 mr-3" />
                      University of Sydney
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 #1845B3 mr-3" />
                      UNSW Sydney
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 #1845B3 mr-3" />
                      Monash University
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 #1845B3 mr-3" />
                      University of Queensland
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Eligibility Criteria for Best University for Law in Australia
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  If you want to study LLM in Australia, you must meet certain LLM degree requirements as mentioned below:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-#1e3a8a mb-4">Key Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-700">
                      <Scale className="w-5 h-5 #1845B3 mr-3 mt-1" />
                      <span>You need a bachelor's degree in law (LLB) from a recognized university.</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <Globe className="w-5 h-5 #1845B3 mr-3 mt-1" />
                      <span>You need to score between 6.5 and 7 in the IELTS test to prove your English skills.</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <Award className="w-5 h-5 #1845B3 mr-3 mt-1" />
                      <span>Some universities prefer students who have at least two years of work experience in law or a related field.</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Documents Required for Masters in Law Australia
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To apply for an LLM from Australia, you need to submit these documents:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FileText className="w-5 h-5 #1845B3 mr-2" />
                      <span className="font-semibold">Educational Certificates</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-5 h-5 #1845B3 mr-2" />
                      <span className="font-semibold">Proof of Finances</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <User className="w-5 h-5 #1845B3 mr-2" />
                      <span className="font-semibold">Identification Proof</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <BookOpen className="w-5 h-5 #1845B3 mr-2" />
                      <span className="font-semibold">Statement of Purpose</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 #1845B3 mr-2" />
                      <span className="font-semibold">Recommendation Letter</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FileText className="w-5 h-5 #1845B3 mr-2" />
                      <span className="font-semibold">CV or Resume</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  How to Apply for a Master's Degree in Law from Australia?
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  If you want to study Master's degree in law in Australia, you must follow a step-by-step application process which is as follows:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-#1e3a8a mb-3">1. Check Admission Requirements</h3>
                    <p className="text-gray-700">
                      To apply for Master of laws in Australia, you need a Bachelor of Laws (LLB) degree or an equivalent qualification. You also need to prove your English language skills through IELTS or TOEFL.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-#1e3a8a mb-3">2. Choose the Right University and Program</h3>
                    <p className="text-gray-700">
                      Research different universities and their LLM programs. Compare course details, fees, and career opportunities to find the one that best matches your goals.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-#1e3a8a mb-3">3. Prepare Your Documents</h3>
                    <p className="text-gray-700">
                      Gather all necessary documents, including academic transcripts, English proficiency test scores, a Statement of Purpose (SOP), a Letter of Recommendation (LOR), and a resume (if required). Some universities may also ask for proof of financial stability.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-#1e3a8a mb-3">4. Submit Your Application</h3>
                    <p className="text-gray-700">
                      Complete the online application form on the university's website and submit all required documents before the deadline.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-#1e3a8a mb-3">5. Receive an Offer Letter</h3>
                    <p className="text-gray-700">
                      If your application is successful, you will receive an offer letter from the university. Review the terms and conditions carefully.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-#1e3a8a mb-3">6. Apply for a Student Visa</h3>
                    <p className="text-gray-700">
                      Once you accept the offer, apply for an Australian student visa (subclass 500) through the Department of Home Affairs.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-#1e3a8a mb-3">7. Plan Your Travel</h3>
                    <p className="text-gray-700">
                      After receiving your visa, book your flight, arrange accommodation, and prepare for your journey to Australia.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Cost of Studying LLM from Best University in Australia for Law
                </h2>

                <div className="bg-white p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Tuition Fees</h3>
                      <p className="text-gray-700 mb-2">International Students: AUD $35,000 - $50,000 per year</p>
                      <p className="text-gray-700">Domestic Students: AUD $8,000 - $12,000 per year</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Living Expenses</h3>
                      <p className="text-gray-700 mb-2">Accommodation: AUD $200 - $400 per week</p>
                      <p className="text-gray-700">Other expenses: AUD $300 - $500 per week</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Scholarships for LLM in Australia
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-#1e3a8a mb-2">Government Scholarships</h3>
                    <p className="text-gray-700">Australia Awards, Endeavour Scholarships</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-#1e3a8a mb-2">University Scholarships</h3>
                    <p className="text-gray-700">Merit-based and need-based scholarships</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-#1e3a8a mb-4">FAQs</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How to study a master of applied law in Australia?</h4>
                      <p className="text-gray-700">Research universities offering applied law programs, meet eligibility requirements, and submit applications with required documents.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Can I study LLM online Australia from Pakistan?</h4>
                      <p className="text-gray-700">Yes, many Australian universities offer online LLM programs that can be completed from Pakistan.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What are master of law career opportunities?</h4>
                      <p className="text-gray-700">Graduates can work as lawyers, barristers, solicitors, legal advisors, corporate counsel, or pursue academic careers.</p>
                    </div>
                  </div>
                </div>

                {/* Social Share */}
                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                  <div className="flex space-x-4">
                    <button className="#1845B3 text-white px-4 py-2 rounded-lg hover:bg-#1a73e8 transition-colors">
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
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Duration: 1-2 years</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>Cost: AUD $35,000-$50,000</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>IELTS: 6.5-7.0</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Intake: Feb, July</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#universities" className="#1845B3 hover:underline">Best Universities</a></li>
                  <li><a href="#eligibility" className="#1845B3 hover:underline">Eligibility Criteria</a></li>
                  <li><a href="#documents" className="#1845B3 hover:underline">Required Documents</a></li>
                  <li><a href="#application" className="#1845B3 hover:underline">Application Process</a></li>
                  <li><a href="#costs" className="#1845B3 hover:underline">Cost of Study</a></li>
                  <li><a href="#scholarships" className="#1845B3 hover:underline">Scholarships</a></li>
                </ul>
              </div>

              {/* Share */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                <div className="flex space-x-2">
                  <button className="flex-1 #1845B3 text-white py-2 px-4 rounded-lg text-sm hover:bg-#1a73e8 transition-colors">
                    Facebook
                  </button>
                  <button className="flex-1 bg-sky-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-sky-600 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-#1a73e8 text-white py-2 px-4 rounded-lg text-sm hover:bg-#1565c0 transition-colors">
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
              Ready to pursue your LLM in Australia? Contact our expert team for personalized guidance and comprehensive support throughout your application journey.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}