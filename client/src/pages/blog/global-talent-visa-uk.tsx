import ContactForm from '@/components/blog/ContactForm';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { BookOpen, Clock, User, Calendar } from 'lucide-react';

export default function GlobalTalentVisaUK() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Visa Guides
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Global Talent Visa UK: Complete Guide for Skilled Professionals
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The Global Talent Visa UK allows skilled individuals to live and work in the UK for up to five years. Learn about eligibility criteria, application process, costs, and requirements for this competitive visa route.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                January 25, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                12 min read
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-lg shadow-sm border p-8">
              
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Global Talent Visa UK allows you to live and work in the country for up to five years. You can extend your stay or apply for permanent residency. Later, you can even apply for British citizenship. This visa also lets you bring your partner and children and gives your family the opportunity to live in the UK.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To qualify, most applicants need global talent visa endorsement from one of six organizations approved by the UK Home Office. <strong>Dunya Consultants does not offer this visa.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The application process for a global talent visa is highly competitive and involves multiple steps. So getting expert legal advice can help in your application and improve your chances of success. However, in some cases, you may not need an endorsement. If you have won a recognized international award in your field, you can apply directly for the UK Global Talent Visa without going through the endorsement process.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#eligibility" className="hover:bg-[#1845B3]">Eligibility Criteria for Global UK Talent Visa</a></li>
                  <li><a href="#documents" className="hover:bg-[#1845B3]">Documents Required for Global Talent UK Visa</a></li>
                  <li><a href="#application-process" className="hover:bg-[#1845B3]">How to Apply for a Global Talent Visa for UK?</a></li>
                  <li><a href="#costs" className="hover:bg-[#1845B3]">Cost to apply for Global Talent UK Visa</a></li>
                  <li><a href="#timeline" className="hover:bg-[#1845B3]">When will you receive your Global Talent Visa UK?</a></li>
                  <li><a href="#conclusion" className="hover:bg-[#1845B3]">Conclusion</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Eligibility Criteria */}
              <div className="mb-8" id="eligibility">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Eligibility Criteria for Global UK Talent Visa</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To be eligible for a UK Global Talent Visa, you need to meet global talent visa requirements as given below:
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1565c0]">Key Requirements</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Have a strong record of achievements in your industry</li>
                    <li>Be at least 18 years old</li>
                    <li>Prove that you are a leader or have the potential to be a leader in your field</li>
                    <li>Get an endorsement from an approved organization in areas like arts, digital technology, science, or academia</li>
                    <li>Prove your exceptional skills and contributions to your field</li>
                  </ul>
                </div>
              </div>

              {/* Documents Required */}
              <div className="mb-8" id="documents">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Documents Required for Global Talent UK Visa</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To apply for a UK Global Talent Visa, you will need:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Personal Documents</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• A valid passport with at least 6 months left before it expires</li>
                      <li>• Birth or marriage certificates if your family is traveling with you</li>
                      <li>• Tuberculosis test results if needed based on your country</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Financial & Professional Documents</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Bank statements or financial documents showing you can support yourself in the UK</li>
                      <li>• An endorsement letter from an approved organization confirming you qualify for the visa</li>
                      <li>• Awards, certificates, publications, or other documents proving your skills and achievements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="mb-8" id="application-process">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">How to Apply for a Global Talent Visa for UK?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  You can apply for a UK Global Talent Visa online.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="#1D50C9 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Check Required Documents</h4>
                      <p className="text-gray-600">First, check which documents you need before starting your application.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="#1D50C9 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Apply Online or at Visa Center</h4>
                      <p className="text-gray-600">In some cases, you may apply at a visa application center. You can apply from any country if you have legal permission to live there for at least 6 months.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="#1D50C9 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Check Visa Center Availability</h4>
                      <p className="text-gray-600">Make sure there is a visa center near you that accepts tier 1 Global Talent visa applications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="#1D50C9 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Extension or Switch (If in UK)</h4>
                      <p className="text-gray-600">If you are already in the UK, you, your partner, and your children may be able to extend your visa or switch to a global impact work visa.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Costs Breakdown */}
              <div className="mb-8" id="costs">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Cost to apply for Global Talent UK Visa</h2>
                
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#1565c0] mb-3">Total Cost Breakdown</h4>
                  <div className="space-y-3 text-#1a73e8">
                    <p className="font-medium">The total cost to apply for a UK Global Talent Visa is <strong>£716</strong>.</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>If applying with endorsement:</span>
                        <span className="font-semibold">£524 + £192</span>
                      </div>
                      <div className="flex justify-between">
                        <span>If applying based on eligible award:</span>
                        <span className="font-semibold">£716 (full amount)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>For partner/children (each):</span>
                        <span className="font-semibold">£716</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Timeline */}
              <div className="mb-8" id="timeline">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">When will you receive your Global Talent Visa UK?</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  After you apply online, confirm your identity, and submit your documents, you will usually receive a decision on your visa within 3 weeks.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-[#1565c0] mb-2">Standard Processing</h4>
                    <p className="text-#1a73e8">3 weeks for standard applications</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-[#1565c0] mb-2">Priority Service</h4>
                    <p className="text-#1a73e8">You may have the option to pay extra for a faster decision</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-[#1565c0] mb-2">Longer Processing Cases</h4>
                    <p className="text-#1a73e8">Your application might take longer if you are applying with a family member who needs an appointment while you do not, if your documents need verification, if you are required to attend an interview, or if there are concerns due to your personal history.</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                  Once processed, you will receive an email or letter with the decision on your application, explaining the next steps you need to take.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-8" id="conclusion">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Global Talent Visa UK allows skilled individuals in certain fields to live and work in the UK. <strong>Dunya Consultants does not offer this visa.</strong> It replaced the Tier 1 visa in 2020. This visa lets you stay in the UK for up to five years, and you will receive a Biometric Residence Permit (BRP) after approval.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  The BRP helps with things like opening a bank account or getting a tax number. The visa requires proof of your skills but gives you a lot of freedom. You can choose to work; change jobs easily, freelance, or even start your own business.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8" id="faqs">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">What is the global talent visa UK success rate?</h4>
                    <p className="text-gray-700">
                      The UK Global Talent Visa has a very high approval rate, usually over 95%. Some reports say it can be as high as 99.2%.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">How can I get a UK exceptional talent visa?</h4>
                    <p className="text-gray-700">
                      You must show outstanding skills in your field by either winning a top award listed by the UK government or getting an official endorsement.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">What is global talent visa endorsement?</h4>
                    <p className="text-gray-700">
                      A Global Talent Visa endorsement is official approval from a recognized organization that confirms a person is already a leader or has the potential to become one in their field.
                    </p>
                  </div>
                </div>
              </div>

            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 #1D50C9" />
                Quick Facts
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Visa Duration:</span>
                  <span className="font-medium">Up to 5 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Application Cost:</span>
                  <span className="font-medium">£716</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Time:</span>
                  <span className="font-medium">3 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-medium">95%+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Endorsement:</span>
                  <span className="font-medium">Required</span>
                </div>
              </div>
            </div>

            {/* Eligible Fields */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 #1D50C9" />
                Eligible Fields
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Digital Technology</span>
                  <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Tech Leader</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Academia & Research</span>
                  <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Researcher</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Arts & Culture</span>
                  <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Creative</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Science & Innovation</span>
                  <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">Innovator</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}