import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, User, Share2, Download, Phone, Mail, MessageCircle, ChevronRight, ChevronDown, ChevronUp, Calendar, DollarSign, FileText, CheckCircle } from 'lucide-react';

const GMATTestFeePakistan: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "When is GMAT registration 2025 last date?",
      answer: "The GMAT exam is available throughout the year, so there is no fixed last date to register in 2025. You can sign up and book your test anytime based on availability."
    },
    {
      question: "What is the exam fee for GMAT in Pakistan?",
      answer: "As of 2025, the GMAT exam fee in Pakistan is $250 for test center exams and $300 for online exams. This is the standard cost to take the test."
    },
    {
      question: "What is GMAT exam timing?",
      answer: "The GMAT exam takes 3 hours and 30 minutes, including breaks. It has 64 questions divided into four sections: Quantitative Reasoning, Verbal Reasoning, Integrated Reasoning, and Analytical Writing Assessment."
    },
    {
      question: "How can I fill in the GMAT application form 2025?",
      answer: "To apply for the GMAT in 2025, go to the official MBA.com website, create an account, enter your details, choose a test date, and pay the fee. You can complete the entire process online."
    }
  ];

  const registrationRequirements = [
    "Date of Birth",
    "Full Name",
    "Nationality",
    "Gender",
    "Email Address",
    "Phone Number",
    "Mailing Address",
    "Payment Method"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>March 11, 2025</span>
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

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm">
              {/* Hero Image */}
              <div className="aspect-video bg-gradient-to-r from-orange-600 to-red-600 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-3xl font-bold mb-2">GMAT Exam Date 2025 Registration</h1>
                  <p className="text-xl opacity-90">Complete Guide to GMAT Test Fee and Registration Process</p>
                </div>
              </div>

              <div className="p-8">
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    The GMAT is an important exam for students who want to get into the best business schools. 
                    Universities use this GMAT score to check your skills as well as potential for success in an MBA 
                    or other management program.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Facts</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• GMAT is conducted by Graduate Management Admission Council (GMAC)</li>
                      <li>• Available year-round with flexible scheduling</li>
                      <li>• Can be taken in-person or online</li>
                      <li>• Accepted by business schools worldwide</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    What is GMAT Test in Pakistan?
                  </h2>
                  <p className="mb-6">
                    The GMAT (Graduate Management Admission Test) is a test that helps business schools check if a student 
                    has the right skills for an MBA or other management programs. It tests important skills like understanding 
                    written information, math reasoning, and analyzing data. These skills are useful for success in business 
                    studies and careers.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">GMAT Test Sections</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Quantitative Reasoning</h4>
                        <p className="text-sm text-gray-700">Math skills and problem-solving</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Verbal Reasoning</h4>
                        <p className="text-sm text-gray-700">Reading comprehension and language skills</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Integrated Reasoning</h4>
                        <p className="text-sm text-gray-700">Data analysis and interpretation</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Analytical Writing</h4>
                        <p className="text-sm text-gray-700">Essay writing and critical thinking</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Eligibility Criteria for GMAT Registration 2025
                  </h2>
                  <p className="mb-4">
                    There are no strict rules for who can take the GMAT exam. However, there are some basic requirements:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>You must be at least 18 years old (no upper age limit)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>You can take the test up to 5 times in a year</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>Maximum of 8 times in your lifetime</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>No specific education requirements</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Registration Requirements Checklist
                  </h2>
                  <p className="mb-4">
                    When signing up for the GMAT, you'll need to provide the following details:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    {registrationRequirements.map((requirement, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-blue-600 mr-3" />
                          <span className="font-medium text-gray-900">{requirement}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    GMAT Exam Date 2025
                  </h2>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-green-900">Flexible Scheduling</h3>
                    </div>
                    <p className="text-green-800 mb-4">
                      You can take the GMAT exam almost any day of the year, except for a few holidays. The test is available in two formats:
                    </p>
                    <ul className="text-green-800 space-y-2">
                      <li>• <strong>Test Centers:</strong> Authorized test centers near you with many dates and time slots</li>
                      <li>• <strong>Online GMAT:</strong> Take the test from home at a time that suits you</li>
                      <li>• <strong>Registration:</strong> Can be done up to 24 hours before the exam (subject to availability)</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    GMAT Test Fee in Pakistan
                  </h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                    <div className="flex items-center mb-4">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <h3 className="text-lg font-semibold text-yellow-900">Exam Fees</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-900">Test Center Exam</span>
                          <span className="text-2xl font-bold text-blue-600">$250</span>
                        </div>
                        <p className="text-sm text-gray-600">Take the exam at an authorized test center</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-900">Online Exam</span>
                          <span className="text-2xl font-bold text-blue-600">$300</span>
                        </div>
                        <p className="text-sm text-gray-600">Take the exam from home with online proctoring</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Costs</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Service</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold" colSpan={2}>Rescheduling Fees</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">More than 60 days before exam</td>
                          <td className="border border-gray-300 px-4 py-2">$55</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">15 to 60 days before exam</td>
                          <td className="border border-gray-300 px-4 py-2">$110</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1 to 14 days before exam</td>
                          <td className="border border-gray-300 px-4 py-2">$165</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold" colSpan={2}>Cancellation Fees</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">More than 60 days before exam</td>
                          <td className="border border-gray-300 px-4 py-2">$110 refund ($165 fee)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">15 to 60 days before exam</td>
                          <td className="border border-gray-300 px-4 py-2">$80 refund ($195 fee)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1 to 14 days before exam</td>
                          <td className="border border-gray-300 px-4 py-2">$55 refund ($220 fee)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Additional Score Report</td>
                          <td className="border border-gray-300 px-4 py-2">$35 per report</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tips for GMAT Registration</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>✓ Book your test in advance to get your preferred date</li>
                      <li>✓ Consider your preparation timeline when selecting dates</li>
                      <li>✓ Check test center locations and availability</li>
                      <li>✓ Keep your documents ready for registration</li>
                      <li>✓ Consider taking the online version for more flexibility</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Conclusion
                  </h2>
                  <p className="mb-6">
                    You can take the GMAT almost any day of the year. There is no fixed GMAT exam date 2025 registration date, 
                    so you can choose a time that works best for you. If you prefer, you can take the GMAT Online test from home, 
                    available 24/7, every day of the week. If you want to take the test at a test center, you should check the 
                    available dates because each center has its own schedule. It's a good idea to book your test in advance to 
                    get a date that fits your plan. Choosing the right date is important for your preparation and success.
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
                  <a href="#what-is-gmat" className="block text-sm text-blue-600 hover:text-blue-800">What is GMAT?</a>
                  <a href="#eligibility" className="block text-sm text-blue-600 hover:text-blue-800">Eligibility Criteria</a>
                  <a href="#registration" className="block text-sm text-blue-600 hover:text-blue-800">Registration Process</a>
                  <a href="#exam-dates" className="block text-sm text-blue-600 hover:text-blue-800">Exam Dates</a>
                  <a href="#fees" className="block text-sm text-blue-600 hover:text-blue-800">Test Fees</a>
                  <a href="#faq" className="block text-sm text-blue-600 hover:text-blue-800">FAQ</a>
                </nav>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need GMAT Preparation Help?</h3>
                <p className="text-gray-600 mb-4">Get expert guidance on GMAT preparation and business school applications.</p>
                
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
                  <Link href="/blog/top-study-abroad-countries" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Top Study Abroad Countries</div>
                    <div className="text-xs text-gray-500">Best destinations for studies</div>
                  </Link>
                  <Link href="/blog/master-of-laws-llm-australia" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Master of Laws (LLM) in Australia</div>
                    <div className="text-xs text-gray-500">LLM program guide</div>
                  </Link>
                  <Link href="/blog/uk-internship-international-students" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">UK Internship for International Students</div>
                    <div className="text-xs text-gray-500">Internship opportunities</div>
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

export default GMATTestFeePakistan;