import React from 'react';
import { Calendar, Clock, User, FileText, AlertCircle, CheckCircle, XCircle, Shield, CreditCard } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function MostCommonMistakesToAvoidForYourUKStudentVisaSuccess() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-white px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#1D50C9' }}>
                Visa Guides
              </span>
            </div>
            <h1 className="font-bold leading-tight mb-8 text-white" style={{ fontSize: '64px' }}>
              Mistakes to Avoid when Applying for a UK Study Visa
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-white leading-relaxed max-w-4xl mx-auto">
              Essential tips to ensure your UK student visa application success. Learn from common mistakes and increase your chances of approval.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 28, 2025</span>
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
                  The United Kingdom is a top choice for international students because it provides high-quality education and numerous career opportunities. However, before starting your studies, you need to get a UK student visa. This visa is extremely important at the beginning of your journey.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The process to apply for a visa can feel stressful since everything of your visa application is checked carefully to make sure you meet all the requirements. The best news is that millions of students have already studied in the United Kingdom.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  They have faced the same challenges, and you can learn about the mistakes to avoid when applying for a UK study visa. Remember that even one small mistake in your application can cause delays or rejection, so you need to be very careful and avoid common errors to improve your chances of admission to a UK university.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#common-mistakes" className="hover:underline" style={{ color: '#1D50C9' }}>Common Mistakes to Avoid</a></li>
                  <li><a href="#insufficient-funds" className="hover:underline" style={{ color: '#1D50C9' }}>1. Insufficient Proof of Funds</a></li>
                  <li><a href="#documentation-errors" className="hover:underline" style={{ color: '#1D50C9' }}>2. Documentation Errors</a></li>
                  <li><a href="#english-proficiency" className="hover:underline" style={{ color: '#1D50C9' }}>3. Incorrect English Proficiency Proof</a></li>
                  <li><a href="#cas-details" className="hover:underline" style={{ color: '#1D50C9' }}>4. Not Checking CAS Details</a></li>
                  <li><a href="#past-records" className="hover:underline" style={{ color: '#1D50C9' }}>5. Not Disclosing Past Records</a></li>
                  <li><a href="#success-tips" className="hover:underline" style={{ color: '#1D50C9' }}>Additional Success Tips</a></li>
                  <li><a href="#faqs" className="hover:underline" style={{ color: '#1D50C9' }}>Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Success Rate Highlight */}
              <div className="p-6 mb-8" style={{ backgroundColor: '#e8f0ff', borderLeft: '4px solid #1D50C9' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1D50C9' }}>UK Visa Success Rate</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Overall Success Rate:</strong> 98%</p>
                    <p className="text-gray-700 mb-2"><strong>Pakistani Students:</strong> 99%</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Processing Time:</strong> 15-25 working days</p>
                    <p className="text-gray-700"><strong>With Expert Help:</strong> 99.5% success rate</p>
                  </div>
                </div>
              </div>

              {/* Common Mistakes Section */}
              <section id="common-mistakes" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 pl-4" style={{ borderLeft: '4px solid #1D50C9' }}>Common Mistakes to Avoid while Applying for a UK Student Visa</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Keep in mind that if you have made a mistake on the visa application form, it will lead to your visa rejection. Let's discuss these common mistakes below:
                </p>
              </section>

              {/* Mistake 1: Insufficient Proof of Funds */}
              <section id="insufficient-funds" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 pl-4" style={{ borderLeft: '4px solid #1D50C9' }}>1. Insufficient Proof of Funds</h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  The majority of you have already heard that someone's UK visa was rejected due to a bank statement. The UKVI requires students to prove they can pay for their tuition fees as well as living costs. The exact bank statement for UK visa depends on your program length and location.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  To avoid issues regarding this, keep the required acceptable bank statement for UK student visa in your bank account for the specified time before applying. Moreover, make sure your bank statements are recent (from the last twenty-eight days).
                </p>

                <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: '#e8f0ff', border: '1px solid #b3d1ff' }}>
                  <h4 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#1D50C9' }}>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Financial Requirements Checklist
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: '#1D50C9' }} />
                      Maintain funds for 28 consecutive days before application
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: '#1D50C9' }} />
                      Provide recent bank statements (last 28 days)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: '#1D50C9' }} />
                      Show proof of tuition fees and living expenses
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: '#1D50C9' }} />
                      Ensure bank statements are certified and translated
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#e8f0ff' }}>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#1D50C9' }}>Required Amounts (2025):</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-1"><strong>London:</strong> £1,334/month</p>
                      <p className="text-gray-700"><strong>Outside London:</strong> £1,023/month</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-1"><strong>Plus:</strong> Full tuition fees</p>
                      <p className="text-gray-700"><strong>Total Duration:</strong> Up to 9 months</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mistake 2: Documentation Errors */}
              <section id="documentation-errors" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 pl-4" style={{ borderLeft: '4px solid #1D50C9' }}>2. Avoid Documentation Errors</h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Another common mistake is not submitting enough evidence to support your application. Having correct and complete documents is essential for your UK student visa application. Missing or wrong details, like wrong dates or spelling mistakes, can delay your process.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Common mistakes include submitting missing documents, not providing certified translations for non-English papers, or using expired ones. Also, make sure all details, such as your name, match your passport, CAS letter, and financial statements.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center" style={{ color: '#1D50C9' }}>
                      <FileText className="w-5 h-5 mr-2" />
                      Documentation Best Practices
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Double-check all personal details match across documents</li>
                      <li>• Provide certified translations for non-English documents</li>
                      <li>• Ensure all documents are within validity period</li>
                      <li>• Submit clear, high-quality scans or photocopies</li>
                      <li>• Include all required supporting evidence</li>
                    </ul>
                  </div>

                  <div className="rounded-lg p-6" style={{ backgroundColor: '#e8f0ff', border: '1px solid #b3d1ff' }}>
                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#1D50C9' }}>Common Documentation Mistakes:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Mismatched names across documents</li>
                          <li>• Expired documents</li>
                          <li>• Missing translations</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Unclear or blurry copies</li>
                          <li>• Incomplete financial evidence</li>
                          <li>• Wrong document formats</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mistake 3: English Proficiency */}
              <section id="english-proficiency" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 pl-4" style={{ borderLeft: '4px solid #1D50C9' }}>3. Incorrect English Proficiency Proof</h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Many students make the mistake of submitting wrong or invalid English language test results. The UKVI has specific requirements for English proficiency tests, and not all test centers or test types are accepted.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Make sure you take your English test at a UKVI-approved test center and achieve the minimum required scores for your course level. Also, check that your test results are still valid (usually within 2 years).
                </p>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#e8f0ff' }}>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: '#1D50C9' }}>Accepted English Tests & Minimum Scores:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Undergraduate (B2 Level):</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• IELTS Academic: 5.5 overall, 5.5 each skill</li>
                        <li>• TOEFL iBT: 72 overall, min. scores vary</li>
                        <li>• PTE Academic: 59 overall, 59 each skill</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Postgraduate (C1 Level):</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• IELTS Academic: 6.5 overall, 6.0 each skill</li>
                        <li>• TOEFL iBT: 88 overall, min. scores vary</li>
                        <li>• PTE Academic: 67 overall, 64 each skill</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mistake 4: CAS Details */}
              <section id="cas-details" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#1D50C9] pl-4">4. Not Checking CAS Details</h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your Confirmation of Acceptance for Studies (CAS) is a crucial document that contains important information about your course and personal details. Many students make the mistake of not carefully reviewing their CAS before submitting their visa application.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Any errors in your CAS can lead to visa rejection or delays. Always verify all information on your CAS matches your other documents and notify your university immediately if you find any discrepancies.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#1565c0] flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    CAS Verification Checklist
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Personal Details:</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Full name (exactly as in passport)</li>
                        <li>• Date of birth</li>
                        <li>• Nationality</li>
                        <li>• Passport number</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Course Information:</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Course title and level</li>
                        <li>• Start and end dates</li>
                        <li>• Tuition fees</li>
                        <li>• University details</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mistake 5: Past Records */}
              <section id="past-records" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#1D50C9] pl-4">5. Not Disclosing Past Records</h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Honesty is crucial in your visa application. Some students make the mistake of not disclosing previous visa refusals, immigration violations, or criminal records, thinking it might harm their chances.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  However, the UKVI has access to extensive databases and can easily verify your information. Not disclosing relevant information is considered deception and will result in automatic rejection and potential bans from future applications.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 text-[#1565c0] flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Always Disclose:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Previous visa refusals (any country)</li>
                    <li>• Immigration violations or overstays</li>
                    <li>• Criminal convictions or pending charges</li>
                    <li>• Previous study or work in the UK</li>
                    <li>• Any other relevant immigration history</li>
                  </ul>
                </div>
              </section>

              {/* Success Tips */}
              <section id="success-tips" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#1D50C9] pl-4">Additional Success Tips</h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">Pro Tips for Visa Success:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Start your application early</li>
                          <li>• Collect all documents before applying</li>
                          <li>• Use professional translation services</li>
                          <li>• Keep copies of all submitted documents</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Prepare thoroughly for your interview</li>
                          <li>• Get expert guidance from consultants</li>
                          <li>• Double-check everything before submission</li>
                          <li>• Apply from your home country if possible</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#1565c0]">What to Do If Your Visa Is Rejected:</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Option 1: Reapply</strong> - Address the rejection reasons and submit a new application</p>
                      <p><strong>Option 2: Appeal</strong> - Challenge the decision if you believe it was incorrect (limited grounds)</p>
                      <p><strong>Recommendation:</strong> Get professional help to analyze rejection reasons and improve your next application</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How can I check if my bank balance is acceptable for a UK student visa?</h3>
                    <p className="text-gray-700">Your bank balance should cover tuition fees plus living costs (£1,334/month in London, £1,023/month outside London) for up to 9 months. Maintain these funds for 28 consecutive days before applying.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can I reapply for a UK student visa if my first application is rejected?</h3>
                    <p className="text-gray-700">Yes, you can reapply after addressing the rejection reasons. There's no limit on reapplications, but each rejection may affect future applications. Get expert help to improve your chances.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How long does UK student visa processing take?</h3>
                    <p className="text-gray-700">Standard processing takes 15-25 working days from your biometrics appointment. Priority service (5-10 working days) is available for an additional fee.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Do I need to show work experience for a UK student visa?</h3>
                    <p className="text-gray-700">Work experience is not required for student visas. However, if you've worked, you may need to provide employment letters or tax documents as part of your financial evidence.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can I work in the UK with a student visa?</h3>
                    <p className="text-gray-700">Yes, student visa holders can typically work up to 20 hours per week during term time and full-time during holidays. Check your visa conditions for specific restrictions.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What should I do if I made a mistake in my visa application?</h3>
                    <p className="text-gray-700">Contact the visa application center immediately. Minor errors might be correctable, but significant mistakes may require withdrawing and resubmitting your application.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Applying for a UK student visa doesn't have to be stressful if you avoid these common mistakes. The key is thorough preparation, attention to detail, and ensuring all your documents are complete and accurate.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Remember that the UK welcomes international students, and with proper preparation, your visa application has an excellent chance of success. Take your time, follow the guidelines, and don't hesitate to seek professional help if needed.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  With Dunya Consultants' expert guidance, you can navigate the visa application process confidently and avoid these common pitfalls that lead to rejection.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#1565c0]">Need Help with Your UK Student Visa?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants to avoid common mistakes and ensure your visa success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="#1845B3 text-white px-6 py-3 rounded-lg font-semibold hover:bg-#1a73e8 transition-colors"
                  >
                    Call Now: +92 304 1110947
                  </a>
                  <a 
                    href="mailto:info@dunyaconsultants.com" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
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
                  <FileText className="w-5 h-5 mr-2 #1D50C9" />
                  Visa Success Tips
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-medium #1845B3">99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-medium">15-25 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fund Requirements:</span>
                    <span className="font-medium">£1,334/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IELTS Required:</span>
                    <span className="font-medium">5.5-6.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bank Statement:</span>
                    <span className="font-medium">28 days</span>
                  </div>
                </div>
              </div>

              {/* Common Mistakes Summary */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <XCircle className="w-5 h-5 mr-2 #1D50C9" />
                  Top 5 Mistakes
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium text-[#1565c0]">Insufficient Funds</p>
                    <p className="text-gray-600">Not maintaining 28-day balance</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium text-[#1565c0]">Wrong Documents</p>
                    <p className="text-gray-600">Missing or incorrect papers</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium text-[#1565c0]">English Test Issues</p>
                    <p className="text-gray-600">Invalid test or low scores</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium text-[#1565c0]">CAS Errors</p>
                    <p className="text-gray-600">Not verifying CAS details</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium text-[#1565c0]">Hidden History</p>
                    <p className="text-gray-600">Not disclosing past records</p>
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