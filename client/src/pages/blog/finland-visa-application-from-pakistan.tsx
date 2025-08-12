import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, FileText, Target, Award, Globe, DollarSign, MessageCircle, Phone, Mail, Star, MapPin, Users, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export function FinlandVisaApplicationFromPakistan() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Visa Guides
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Finland Admissions 2025 – Finland Application Fee & Deadline 2025
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide to Finland student visa applications from Pakistan, including admission requirements, application fees, deadlines, and step-by-step visa process for 2025.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 20, 2025</span>
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
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Finland is quite popular for providing high-quality education to international students. Those who are willing to study in Finland will find many degree programs that focus on student learning as well as advanced technology. Tuition fees in Finland are more affordable as compared to other Western countries. The country also provides a friendly environment which makes it a top choice for students looking for the best education experience.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As an international student in Finland, you can also work part-time while studying and even search for job opportunities after graduation. Finland is a welcoming place for students and provides both bachelor's and master's programs. If you are interested in studying there, it is important to know about the Finland study visa requirements and admission process.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  By understanding the process, you can take the first step towards studying in one of the most student-friendly countries in the world.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#universities" className="hover:bg-[#1845B3]">Best Finnish Universities for International Students</a></li>
                  <li><a href="#eligibility" className="hover:bg-[#1845B3]">Eligibility Criteria for Finland Study Visa</a></li>
                  <li><a href="#requirements" className="hover:bg-[#1845B3]">Document Requirements</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">Application Process</a></li>
                  <li><a href="#fees" className="hover:bg-[#1845B3]">Application Fees & Deadlines</a></li>
                  <li><a href="#conclusion" className="hover:bg-[#1845B3]">Conclusion</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">FAQs</a></li>
                </ul>
              </div>

              {/* Best Finnish Universities */}
              <div className="mb-8" id="universities">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Best Finnish Universities for International Students</h2>
                <p className="text-gray-700 mb-6">Here is a list of some famous universities in Finland that are providing the best academic programs:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Aalto University",
                    "University of Jyväskylä", 
                    "University of Turku",
                    "LUT University",
                    "University of Vaasa",
                    "Hanken School of Economics",
                    "Metropolia University of Applied Sciences",
                    "Laurea University of Applied Sciences"
                  ].map((university, index) => (
                    <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Star className="h-5 w-5 #1D50C9 mr-3 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{university}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="mb-8" id="eligibility">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Eligibility Criteria for Finland Study Visa from Pakistan</h2>
                <p className="text-gray-700 mb-6">To apply for higher education programs in Finland, you must meet specific Finland student visa requirements based on the level of study:</p>
                
                {/* Bachelor's Requirements */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1565c0] flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Bachelor's Programs
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 #1845B3 mr-2 mt-1 flex-shrink-0" />
                      Completion of 12 years of education (Higher Secondary Certificate)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 #1845B3 mr-2 mt-1 flex-shrink-0" />
                      English language proficiency (IELTS 6.0 or equivalent)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 #1845B3 mr-2 mt-1 flex-shrink-0" />
                      Age requirement: 18-30 years
                    </li>
                  </ul>
                </div>

                {/* Master's Requirements */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1565c0] flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Master's Programs
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 #1845B3 mr-2 mt-1 flex-shrink-0" />
                      Bachelor's degree in relevant field (16 years of education)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 #1845B3 mr-2 mt-1 flex-shrink-0" />
                      English language proficiency (IELTS 6.5 or equivalent)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 #1845B3 mr-2 mt-1 flex-shrink-0" />
                      Relevant work experience (preferred)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Document Requirements */}
              <div className="mb-8" id="requirements">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Document Requirements</h2>
                <p className="text-gray-700 mb-6">The following documents are required for Finland student visa application:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Valid passport (minimum 6 months validity)",
                    "Academic transcripts and certificates",
                    "English language proficiency test results",
                    "Statement of Purpose (SOP)",
                    "Letters of Recommendation",
                    "Financial proof (€6,720 per year)",
                    "Health insurance certificate",
                    "Passport-sized photographs",
                    "Birth certificate",
                    "Police clearance certificate"
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <FileText className="h-4 w-4 #1D50C9 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Process */}
              <div className="mb-8" id="application-process">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Application Process</h2>
                <p className="text-gray-700 mb-6">Follow these steps to apply for Finland student visa:</p>
                
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Research and Choose University",
                      description: "Select your preferred university and program from the list of accredited institutions."
                    },
                    {
                      step: 2,
                      title: "Prepare Required Documents",
                      description: "Gather all necessary documents including academic records and language test results."
                    },
                    {
                      step: 3,
                      title: "Submit Online Application",
                      description: "Apply through the university's online portal or Studyinfo.fi platform."
                    },
                    {
                      step: 4,
                      title: "Pay Application Fee",
                      description: "Pay the required application fee (usually €100-150) online."
                    },
                    {
                      step: 5,
                      title: "Wait for Admission Decision",
                      description: "Universities typically respond within 2-4 months of application deadline."
                    },
                    {
                      step: 6,
                      title: "Apply for Student Residence Permit",
                      description: "Apply for residence permit at Finnish embassy/consulate in Pakistan."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <div className="#1D50C9 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-700 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fees and Deadlines */}
              <div className="mb-8" id="fees">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Application Fees & Deadlines 2025</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0] flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Application Fees
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">University Application</h4>
                      <p className="text-2xl font-bold #1845B3">€100-150</p>
                      <p className="text-sm text-gray-600">Per application</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Residence Permit</h4>
                      <p className="text-2xl font-bold #1845B3">€350-450</p>
                      <p className="text-sm text-gray-600">Processing fee</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-[#1565c0] flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Important Deadlines 2025
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">Application Period Opens</span>
                      <span className="#1845B3 font-semibold">January 3, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">Application Deadline</span>
                      <span className="#1845B3 font-semibold">January 15, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">Admission Results</span>
                      <span className="#1845B3 font-semibold">May 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-8" id="conclusion">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Finland offers excellent opportunities for Pakistani students seeking quality education in a student-friendly environment. With affordable tuition fees, world-class universities, and post-graduation work opportunities, Finland is an ideal destination for international students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Start your application process early and ensure all documents are prepared according to the requirements. For expert guidance on Finland student visa applications, contact Dunya Consultants for personalized assistance.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8" id="faqs">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "Is IELTS required for Finland student visa?",
                      answer: "Yes, most Finnish universities require IELTS with a minimum score of 6.0-6.5 depending on the program level."
                    },
                    {
                      question: "How much bank balance is required for Finland student visa?",
                      answer: "You need to show €6,720 per year as proof of financial capability to cover living expenses in Finland."
                    },
                    {
                      question: "Can I work while studying in Finland?",
                      answer: "Yes, international students can work part-time up to 25 hours per week during studies and full-time during holidays."
                    },
                    {
                      question: "What is the processing time for Finland student visa?",
                      answer: "The residence permit processing typically takes 1-3 months from the date of application submission."
                    },
                    {
                      question: "Are there scholarships available for Pakistani students in Finland?",
                      answer: "Yes, various scholarships are available including university-specific scholarships and Finnish government scholarships for international students."
                    }
                  ].map((faq, index) => (
                    <details key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <summary className="font-semibold text-gray-900 cursor-pointer hover:bg-[#1845B3]">
                        {faq.question}
                      </summary>
                      <p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#1565c0]">Need Help with Finland Student Visa Application?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants for your Finland student visa application and study abroad journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="#1845B3 text-white px-6 py-3 rounded-lg font-semibold hover:bg-#1a73e8 transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +92 304 1110947
                  </a>
                  <a 
                    href="mailto:query@teamdunya.com" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center"
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
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Target className="w-5 h-5 mr-2 #1D50C9" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Application Fee:</span>
                    <span className="font-medium">€100-150</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Residence Permit:</span>
                    <span className="font-medium">€350-450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Financial Proof:</span>
                    <span className="font-medium">€6,720/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IELTS Required:</span>
                    <span className="font-medium">6.0-6.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-medium">1-3 months</span>
                  </div>
                </div>
              </div>

              {/* Application Timeline */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Clock className="w-5 h-5 mr-2 #1D50C9" />
                  Application Timeline
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <span>Applications Open</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Jan 3</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <span>Application Deadline</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Jan 15</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <span>Admission Results</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">May 2025</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <span>Studies Begin</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Aug 2025</span>
                  </div>
                </div>
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