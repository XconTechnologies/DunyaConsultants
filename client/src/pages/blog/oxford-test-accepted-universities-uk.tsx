import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, User, Share2, Download, Phone, Mail, MessageCircle, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import ContactForm from '@/components/blog/ContactForm';

const OxfordTestAcceptedUniversitiesUK: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the OIETC exam fee in Pakistan?",
      answer: "The OIETC exam fee in Pakistan varies depending on the test center and location. Contact your local test center or visit the official OIETC website for current pricing information."
    },
    {
      question: "How can I do OIETC registration?",
      answer: "OIETC registration can be done online through the official Oxford International Education Training Centre website. You'll need to create an account, fill in your details, and select your preferred test date and location."
    },
    {
      question: "How can I check the OIETC result?",
      answer: "OIETC results are typically available online through the official portal. You'll receive your login credentials after completing the exam, which you can use to check your scores."
    },
    {
      question: "Which universities accept Oxford test in UK?",
      answer: "Many UK universities accept OIETC including University of Edinburgh, University of Nottingham, Bangor University, Liverpool John Moores University, Birmingham City University, University of Leeds, University of Bristol, and Staffordshire University."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
                <span>8 min read</span>
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
        backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Oxford Test Accepted Universities in UK</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">Complete Guide to OIETC Accepted Universities</p>
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
                    Many students from around the world dream of studying in the UK because of its high quality education. 
                    It is one of the top choices for international students. If you want to study in the UK, picking the right 
                    university is very important for your success.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Facts</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• OIETC stands for Oxford International Education Training Centre</li>
                      <li>• ELLT is an alternative to IELTS for English proficiency</li>
                      <li>• Many top UK universities accept OIETC scores</li>
                      <li>• Test is conducted by OI Digital Institute</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    What is OIETC Meaning?
                  </h2>
                  <p className="mb-6">
                    OIETC full form is Oxford International Education Training Centre. It provides the ELLT, which means 
                    English Language Level Test. This OIETC test is an alternative to IELTS (International English Language 
                    Testing System) and is used to check the English skills of international students. The ELLT is offered 
                    by OI Digital Institute and is considered as a reliable way to assess English proficiency.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Oxford Test Accepted Universities List in UK
                  </h2>
                  <p className="mb-6">
                    If you are an international student planning to study at a top university in the UK and have taken 
                    the OIETC English Language Level Test (ELLT), we have researched an OIETC accepted university list 
                    in UK that accepts ELLT scores.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">University of Edinburgh</h3>
                      <p className="text-gray-700 mb-4">
                        Popular for strong academic programs in Medicine, Law, and Literature. Rich history with 
                        notable alumni including Charles Darwin and Alexander Graham Bell.
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        <span>Accepts OIETC scores</span>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">University of Nottingham</h3>
                      <p className="text-gray-700 mb-4">
                        Top university known for research and innovation, especially in Medicine, Engineering, 
                        and Social Sciences. Has campuses in Nottingham and Malaysia.
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        <span>Accepts OIETC scores</span>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Bangor University</h3>
                      <p className="text-gray-700 mb-4">
                        Provides many degree programs at affordable costs without compromising quality. 
                        Ranks among the top 50 universities in the UK (QS WUR 2023).
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        <span>Accepts OIETC scores</span>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Liverpool John Moores University</h3>
                      <p className="text-gray-700 mb-4">
                        Well-respected public university popular for programs in Music, Multimedia, 
                        and Sports Science with strong international reputation.
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        <span>Accepts OIETC scores</span>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Birmingham City University</h3>
                      <p className="text-gray-700 mb-4">
                        World-ranking university with over 24,000 students from 80 countries. 
                        Birmingham is ranked among the world's top 50 student cities.
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        <span>Accepts OIETC scores</span>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">University of Leeds</h3>
                      <p className="text-gray-700 mb-4">
                        Leading research university accepting OIETC scores for courses like Environmental Science, 
                        Mechanical Engineering, and Marketing.
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        <span>Accepts OIETC scores</span>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">University of Bristol</h3>
                      <p className="text-gray-700 mb-4">
                        Ranked among the top 10 universities in the UK and 61st in the world (QS World Rankings 2023). 
                        Part of the Russell Group with high graduate employability.
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        <span>Accepts OIETC scores</span>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Staffordshire University</h3>
                      <p className="text-gray-700 mb-4">
                        Public research university providing quality education with flexible admission requirements 
                        and strong industry connections.
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        <span>Accepts OIETC scores</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Key Takeaways</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>✓ OIETC is a reliable alternative to IELTS for UK university admissions</li>
                      <li>✓ Multiple top-ranking UK universities accept OIETC scores</li>
                      <li>✓ Universities span various fields including Medicine, Engineering, and Business</li>
                      <li>✓ OIETC provides flexibility for international students</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Conclusion
                  </h2>
                  <p className="mb-6">
                    Choosing OIETC accepted universities will give you confidence and ensure you receive a high-quality education. 
                    The universities listed above accept OIETC scores and provide excellent academic programs for international students. 
                    Whether you're interested in Medicine, Engineering, Business, or other fields, these universities offer diverse 
                    opportunities for your academic and professional growth.
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
                  <a href="#meaning" className="block text-sm text-blue-600 hover:text-blue-800">What is OIETC?</a>
                  <a href="#universities" className="block text-sm text-blue-600 hover:text-blue-800">Accepted Universities</a>
                  <a href="#conclusion" className="block text-sm text-blue-600 hover:text-blue-800">Conclusion</a>
                  <a href="#faq" className="block text-sm text-blue-600 hover:text-blue-800">FAQ</a>
                </nav>
              </div>

              {/* Contact Form */}
              <ContactForm />

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog/kaplan-test-of-english" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Kaplan Test of English (KTE)</div>
                    <div className="text-xs text-gray-500">Complete guide to KTE</div>
                  </Link>
                  <Link href="/blog/global-talent-visa-australia" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Global Talent Visa Australia</div>
                    <div className="text-xs text-gray-500">Immigration guide</div>
                  </Link>
                  <Link href="/blog/anglia-ruskin-university" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Anglia Ruskin University</div>
                    <div className="text-xs text-gray-500">Partnership details</div>
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

export default OxfordTestAcceptedUniversitiesUK;