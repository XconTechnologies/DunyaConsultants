import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, User, Share2, Download, Phone, Mail, MessageCircle, ChevronRight, ChevronDown, ChevronUp, GraduationCap, DollarSign, FileText, MapPin } from 'lucide-react';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const MasterOfLawsLLMAustralia: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How to study a master of applied law in Australia?",
      answer: "To study a master of applied law in Australia, you need a relevant undergraduate degree, meet English language requirements (IELTS 6.5-7.0), and apply through the university's official channels. Some universities may require work experience in the legal field."
    },
    {
      question: "Can I study LLM online Australia from Pakistan?",
      answer: "Yes, several Australian universities offer online LLM programs that can be completed from Pakistan. However, check with individual universities about their online offerings and any residency requirements."
    },
    {
      question: "What are master of law career opportunities?",
      answer: "LLM graduates can pursue careers as barristers, solicitors, legal consultants, corporate lawyers, academic researchers, policy advisors, or continue with doctoral studies. The degree opens doors to both domestic and international legal career opportunities."
    }
  ];

  const universities = [
    "University of Adelaide",
    "Australian National University",
    "The University of Melbourne",
    "University of Technology Sydney",
    "University of Sydney",
    "UNSW Sydney",
    "Monash University",
    "University of Queensland"
  ];

  const requiredDocuments = [
    "Educational Certificates",
    "Proof of Finances",
    "Identification Proof",
    "Statement of Purpose",
    "Recommendation Letter",
    "CV or Resume"
  ];

  const applicationSteps = [
    {
      title: "Check Admission Requirements",
      description: "Verify that you have a Bachelor of Laws (LLB) degree or equivalent qualification and meet English language requirements."
    },
    {
      title: "Choose the Right University and Program",
      description: "Research different universities and their LLM programs. Compare course details, fees, and career opportunities."
    },
    {
      title: "Prepare Your Documents",
      description: "Gather all necessary documents including academic transcripts, English proficiency scores, SOP, and LOR."
    },
    {
      title: "Submit Your Application",
      description: "Complete the online application form for your chosen university and attach all required documents."
    },
    {
      title: "Receive an Offer Letter",
      description: "If accepted, you will receive an offer letter from the university detailing your program and conditions."
    },
    {
      title: "Apply for a Student Visa",
      description: "Apply for an Australian student visa with your offer letter and required documentation."
    },
    {
      title: "Plan Your Travel",
      description: "Arrange accommodation, flights, and other travel logistics for your arrival in Australia."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>March 13, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>10 min read</span>
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
        backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Master of Laws (LLM) in Australia</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">Your Complete Guide to Studying Law in Australia</p>
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
                    The Master's degree in law (LL.M.) is a postgraduate degree that helps students get advanced knowledge 
                    in legal studies. Australia is one of the best places for studying master in law and has 25 universities 
                    that offer this program.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Facts</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Australia is the 3rd most popular destination for international law students</li>
                      <li>• LLM programs typically take 1 year to complete</li>
                      <li>• Over 458,000 international students choose Australia for higher education</li>
                      <li>• 25 universities offer LLM programs in Australia</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Program Duration</h3>
                      </div>
                      <p className="text-gray-700">Masters of law in Australia usually take one year to complete for full-time students.</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Global Ranking</h3>
                      </div>
                      <p className="text-gray-700">Australia is the third most popular country for international law students, after the USA and UK.</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Best Universities for Master of Laws in Australia
                  </h2>
                  <p className="mb-6">
                    There are some of the top universities and colleges in Australia that provide LLM programs. 
                    Here are the best institutions where you can study for a Master's degree in law:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    {universities.map((university, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center">
                          <div className="bg-blue-100 rounded-full p-2 mr-3">
                            <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <h3 className="font-semibold text-gray-900">{university}</h3>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Eligibility Criteria
                  </h2>
                  <p className="mb-4">
                    If you want to study LLM in Australia, you must meet certain requirements:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>You need a bachelor's degree in law (LLB) from a recognized university</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>You need to score between 6.5 and 7 in the IELTS test to prove your English skills</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Some universities prefer students with at least two years of work experience in law</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Required Documents
                  </h2>
                  <p className="mb-4">
                    To apply for an LLM from Australia, you need to submit these documents:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-blue-600 mr-3" />
                          <span className="font-medium text-gray-900">{doc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Application Process
                  </h2>
                  <p className="mb-6">
                    If you want to study Master's degree in law in Australia, you must follow a step-by-step 
                    application process:
                  </p>

                  <div className="space-y-6 my-8">
                    {applicationSteps.map((step, index) => (
                      <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                        <div className="flex items-start">
                          <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                            <span className="text-blue-600 font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Cost of Studying LLM in Australia
                  </h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                    <div className="flex items-center mb-4">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <h3 className="text-lg font-semibold text-yellow-900">Tuition Fees</h3>
                    </div>
                    <p className="text-yellow-800 mb-4">
                      The cost of studying LLM in Australia varies depending on the university and program. 
                      Generally, international students can expect to pay:
                    </p>
                    <ul className="text-yellow-800 space-y-2">
                      <li>• Tuition fees: AUD $25,000 - $45,000 per year</li>
                      <li>• Living expenses: AUD $20,000 - $25,000 per year</li>
                      <li>• Additional costs: Books, materials, and other expenses</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Scholarships for LLM in Australia
                  </h2>
                  <p className="mb-6">
                    Many Australian universities offer scholarships for international students pursuing LLM programs. 
                    These scholarships can help reduce the financial burden and make your legal education more affordable. 
                    Contact your chosen university or check their website for available scholarship opportunities.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Career Opportunities</h3>
                    <p className="text-green-800 mb-4">
                      After completing their LLM from Australia, graduates can pursue various career paths:
                    </p>
                    <ul className="text-green-800 space-y-2">
                      <li>✓ Barristers and Solicitors</li>
                      <li>✓ Corporate Legal Advisors</li>
                      <li>✓ Academic Researchers</li>
                      <li>✓ Policy Advisors</li>
                      <li>✓ International Legal Consultants</li>
                      <li>✓ Doctoral Studies (PhD in Law)</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Conclusion
                  </h2>
                  <p className="mb-6">
                    Studying LLM in Australia offers excellent opportunities for international students to advance their 
                    legal careers. With world-class universities, diverse specializations, and strong industry connections, 
                    Australia provides an ideal environment for legal education. The one-year program duration and various 
                    scholarship opportunities make it an attractive choice for law graduates looking to enhance their expertise 
                    and career prospects.
                  </p>

                  {/* FAQ Section */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
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
                  <a href="#universities" className="block text-sm text-blue-600 hover:text-blue-800">Best Universities</a>
                  <a href="#eligibility" className="block text-sm text-blue-600 hover:text-blue-800">Eligibility Criteria</a>
                  <a href="#documents" className="block text-sm text-blue-600 hover:text-blue-800">Required Documents</a>
                  <a href="#application" className="block text-sm text-blue-600 hover:text-blue-800">Application Process</a>
                  <a href="#cost" className="block text-sm text-blue-600 hover:text-blue-800">Cost & Scholarships</a>
                  <a href="#faq" className="block text-sm text-blue-600 hover:text-blue-800">FAQ</a>
                </nav>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help with LLM Applications?</h3>
                <p className="text-gray-600 mb-4">Get expert guidance on Australian LLM programs and application process.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">UAN: (+92) 304 1110947</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">info@dunyaconsultants.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">WhatsApp Available</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mt-4">
                  Get Free Consultation
                </button>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog/global-talent-visa-australia" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Global Talent Visa Australia</div>
                    <div className="text-xs text-gray-500">Immigration pathway guide</div>
                  </Link>
                  <Link href="/blog/top-study-abroad-countries" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Top Study Abroad Countries</div>
                    <div className="text-xs text-gray-500">Best destinations for students</div>
                  </Link>
                  <Link href="/blog/anglia-ruskin-university" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Anglia Ruskin University</div>
                    <div className="text-xs text-gray-500">University partnership</div>
                  </Link>
                </div>
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
            Ready to start your LLM journey in Australia? Our expert counsellors are here to guide you through every step of the application process.
          </p>
        </div>
        
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MasterOfLawsLLMAustralia;