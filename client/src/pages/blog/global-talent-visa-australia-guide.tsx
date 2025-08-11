import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, FileText, Target, Award, Globe, DollarSign, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function GlobalTalentVisaAustraliaGuide() {
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
              A Complete Guide to Global Talent Visa Australia
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to Australia's Global Talent Visa (Subclass 858) for highly skilled professionals seeking permanent residency through the fast-track pathway.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>March 20, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 min read</span>
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
                  If you have special skills and internationally recognized qualifications, you can apply for <strong>Global Talent Visa Australia (subclass 858)</strong>. This visa allows you to live, work, and study in Australia permanently, and you can also bring your family. There is no age limit to apply which makes it a great option for those who may not qualify for other visas due to age restrictions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Moreover, the Australia global talent visa is for highly talented individuals. To be eligible, you must prove that your skills or work will benefit the country. This visa is also best for experts, researchers, and professionals with innovative ideas or business plans. If you are a high achiever in your field and want to build a future in Australia, this visa provides a great opportunity. This guide will help you understand the application process so you can take the next step toward a successful career in Australia.
                </p>
              </div>

              {/* What is Global Talent Visa */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  What is Global Talent Visa Australia?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Australian Global Talent Visa is for highly skilled and talented individuals as mentioned earlier. It has two main categories: the Global Talent Pathway and the Distinguished Talent Pathway. This visa is for people with exceptional achievements who can bring valuable skills to Australia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By attracting top talent, this talent visa helps Australia grow by sharing knowledge, encouraging new ideas, and creating job opportunities. In 2020-2021, the number of spots for this visa increased from 5,000 to 15,000 to welcome more skilled professionals.
                </p>
              </section>

              {/* Eligibility Criteria */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Eligibility Criteria for Global Talent Visa Australia
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To apply for the GTI Australia visa (subclass 858) in Australia, you need to meet specific requirements:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 #1D50C9 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">A recognized Australian individual or organization must nominate you as a top talent in your field.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 #1D50C9 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">You must have international recognition for exceptional skills in a profession, sport, arts, or academic research.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 #1D50C9 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">You must show that you can earn a salary of AUD 162,000 or more per year in Australia.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 #1D50C9 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Your expertise should benefit Australia's economy as well as society in the long run.</span>
                  </li>
                </ul>
              </section>

              {/* Required Documents */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Documents Required to Apply for Australia Global Talent Visa
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To apply for the Australian Global Talent Independent Visa (Subclass 858), you need to provide important documents. These help prove your eligibility and support your skilled visa Australia application.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Visa Application Form",
                    "Passport-Size Photo", 
                    "Valid Passport",
                    "Visa Fee Payment",
                    "Financial Proof",
                    "Salary Proof",
                    "English Language Requirement",
                    "Police Clearance",
                    "Family Documents",
                    "Proof of Skills & Experience"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 #1D50C9 mr-3" />
                      <span className="text-gray-700 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Application Steps */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Steps to Apply for Australian Global Talent Visa
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To apply for the Australian Global Talent Visa, you must follow these steps and provide the required documents for migrating to Australia.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                      Get a Nomination
                    </h3>
                    <ul className="space-y-2 ml-11">
                      <li className="text-gray-700">• You need a nomination from an eligible person or organization in Australia.</li>
                      <li className="text-gray-700">• This person or group must have a strong reputation in your field.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                      Gather Supporting Documents
                    </h3>
                    <ul className="space-y-2 ml-11">
                      <li className="text-gray-700">• Collect proof of your achievements, such as awards, publications, or letters from experts in your field.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                      Submit an Expression of Interest (EOI)
                    </h3>
                    <ul className="space-y-2 ml-11">
                      <li className="text-gray-700">• Fill out the Global Talent contact form and submit it online.</li>
                      <li className="text-gray-700">• This allows Australian immigration know you are interested in applying to GTI fast track visa Australia.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                      Apply Through ImmiAccount
                    </h3>
                    <ul className="space-y-2 ml-11">
                      <li className="text-gray-700">• If your EOI is approved, you will receive an Invitation Code and Reference Identifier.</li>
                      <li className="text-gray-700">• Use these details to submit your visa application through ImmiAccount.</li>
                      <li className="text-gray-700">• If your EOI is rejected, you can still apply for other Australian visas.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cost Information */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Cost of a GTI Visa Australia (Global Talent Visa)
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The cost to apply for the Australia Global Talent Visa is <strong>AUD 4,180</strong> for the main applicant. If a family member over 18 is applying with you, the fee is <strong>AUD 2,095</strong>, while for a child under 18, it is <strong>AUD 1,045</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Additionally, if an applicant over 18 does not have functional English, they must pay an extra <strong>AUD 4,890</strong> as a second installment fee. These fees do not include other expenses like health checks, police certificates, or document translations.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Global Talent Visa Australia is a fast-track way for highly skilled professionals to get permanent residency. It provides great opportunities for career growth, personal development, and long-term stability in Australia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you meet the eligibility criteria and have exceptional skills in your field, this visa could be your pathway to a successful future in Australia. Contact Dunya Consultants for expert guidance through the application process.
                </p>
              </section>

              {/* FAQs */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #1D50C9 pl-4">
                  FAQs
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What are the chances of getting a Global talent visa Australia?
                    </h3>
                    <p className="text-gray-700">
                      The chances depend on your qualifications, achievements, and how well you meet the eligibility criteria. Having strong documentation and a good nominator increases your chances significantly.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What is a GTI visa Australia?
                    </h3>
                    <p className="text-gray-700">
                      GTI stands for Global Talent Independent visa. It's a permanent visa (subclass 858) for highly skilled individuals who can contribute to Australia's economy and society.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Are Global talent visa Australia and skilled visa Australia same?
                    </h3>
                    <p className="text-gray-700">
                      No, they are different. The Global Talent visa is specifically for exceptionally talented individuals, while skilled visas have different requirements and are based on occupation lists and points systems.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply for Global Talent Visa?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants for your Global Talent Visa Australia application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+923041110947"
                    className="inline-flex items-center justify-center px-6 py-3 #1845B3 text-white font-semibold rounded-lg hover:bg-#1a73e8 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (+92) 304 1110947
                  </a>
                  <a
                    href="mailto:query@teamdunya.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
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
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 #1D50C9" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Type:</span>
                    <span className="font-medium">Permanent (Subclass 858)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Age Limit:</span>
                    <span className="font-medium">No Age Limit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Main Applicant Fee:</span>
                    <span className="font-medium">AUD 4,180</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salary Requirement:</span>
                    <span className="font-medium">AUD 162,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing:</span>
                    <span className="font-medium">Fast-track</span>
                  </div>
                </div>
              </div>

              {/* Application Requirements */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 #1D50C9" />
                  Key Requirements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 #1D50C9 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Australian nomination required</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 #1D50C9 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">International recognition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 #1D50C9 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">High earning potential</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 #1D50C9 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Benefit to Australia</span>
                  </li>
                </ul>
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