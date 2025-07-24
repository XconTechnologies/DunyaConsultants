import Navigation from '@/components/navigation';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Footer from '@/components/footer';

export default function GreenCardInternationalStudents() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Full-width Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#124FD3] via-[#124FD3] to-[#0d3db8] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Green Card for International Students</h1>
          <p className="text-2xl opacity-90">Complete Guide to Permanent Residency in the USA</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  For international students studying in the United States, obtaining a green card represents the ultimate goal of achieving permanent residency. This comprehensive guide will walk you through the various pathways, requirements, and processes available to international students seeking to make the USA their permanent home.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-emerald-900">What is a Green Card?</h3>
                <p className="text-gray-700">
                  A green card, officially known as a Permanent Resident Card, grants you the right to live and work permanently in the United States. It's the stepping stone to U.S. citizenship and provides numerous benefits including access to federal benefits, ability to sponsor family members, and protection under U.S. laws.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Green Card Pathways for International Students</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Employment-Based Green Card (EB Categories)</h3>
                  <p className="text-gray-700 mb-3">
                    The most common path for international students involves employment-based immigration through various EB categories.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">EB-1 (Priority Workers)</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Extraordinary ability professionals</li>
                        <li>• Outstanding professors/researchers</li>
                        <li>• Multinational executives</li>
                        <li>• No labor certification required</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">EB-2 (Advanced Degree)</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Master's degree or higher</li>
                        <li>• Bachelor's + 5 years experience</li>
                        <li>• National Interest Waiver (NIW)</li>
                        <li>• Labor certification usually required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Family-Based Green Card</h3>
                  <p className="text-gray-700 mb-3">
                    Marriage to a U.S. citizen or permanent resident can provide a pathway to permanent residency.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Immediate relative of U.S. citizen (spouse, parent, unmarried child under 21)</li>
                    <li>• Family preference categories for other relationships</li>
                    <li>• Requires proof of genuine relationship</li>
                    <li>• No annual limits for immediate relatives</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Diversity Visa Lottery</h3>
                  <p className="text-gray-700 mb-3">
                    The annual Diversity Visa (DV) lottery program provides 50,000 green cards to individuals from countries with low immigration rates to the U.S.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Free to apply, annual registration period</li>
                    <li>• Requires high school education or equivalent</li>
                    <li>• Must be from an eligible country</li>
                    <li>• Random selection process</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">The F-1 to Green Card Process</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Typical Timeline for Students</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">Step 1:</span>
                    <span className="text-gray-700">Complete studies on F-1 visa</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">Step 2:</span>
                    <span className="text-gray-700">Apply for Optional Practical Training (OPT)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">Step 3:</span>
                    <span className="text-gray-700">Find employer willing to sponsor H-1B visa</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">Step 4:</span>
                    <span className="text-gray-700">Employer files PERM labor certification</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">Step 5:</span>
                    <span className="text-gray-700">File Form I-140 (Immigrant Petition)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">Step 6:</span>
                    <span className="text-gray-700">File Form I-485 (Adjust Status) or consular processing</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">STEM OPT Extension Benefits</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Benefit</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Regular OPT</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">STEM Extension</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Duration</td>
                      <td className="border border-gray-300 px-4 py-2">12 months</td>
                      <td className="border border-gray-300 px-4 py-2">Additional 24 months</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Time</td>
                      <td className="border border-gray-300 px-4 py-2">12 months</td>
                      <td className="border border-gray-300 px-4 py-2">36 months total</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">H-1B Attempts</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 attempts</td>
                      <td className="border border-gray-300 px-4 py-2">3-4 attempts</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Employer Requirements</td>
                      <td className="border border-gray-300 px-4 py-2">Basic employment</td>
                      <td className="border border-gray-300 px-4 py-2">E-Verify enrollment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">National Interest Waiver (NIW)</h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-green-900">NIW Advantages for Students</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• No employer sponsorship required</li>
                  <li>• No labor certification needed</li>
                  <li>• Can be self-petitioned</li>
                  <li>• Faster processing times</li>
                  <li>• Job mobility and flexibility</li>
                </ul>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">NIW Eligibility Criteria</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Advanced degree or exceptional ability</li>
                    <li>• Proposed endeavor has substantial merit and national importance</li>
                    <li>• Well-positioned to advance the proposed endeavor</li>
                    <li>• Beneficial to waive labor certification requirements</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Common NIW Fields for Students</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Science, Technology, Engineering, Mathematics (STEM)</li>
                    <li>• Healthcare and medical research</li>
                    <li>• Renewable energy and environment</li>
                    <li>• Education and academic research</li>
                    <li>• Business and entrepreneurship</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">EB-1A: Extraordinary Ability</h2>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-purple-900">EB-1A Criteria (3 out of 10 required)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Receipt of major awards or prizes</li>
                    <li>• Membership in exclusive associations</li>
                    <li>• Published material about you</li>
                    <li>• Participation as a judge</li>
                    <li>• Original contributions to field</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Scholarly articles authored</li>
                    <li>• Critical employment or role</li>
                    <li>• High salary or remuneration</li>
                    <li>• Commercial success in arts</li>
                    <li>• Other comparable evidence</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Processing Times and Costs</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Process</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Processing Time</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Government Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">PERM Labor Certification</td>
                      <td className="border border-gray-300 px-4 py-2">6-12 months</td>
                      <td className="border border-gray-300 px-4 py-2">$0 (employer pays)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">I-140 Petition</td>
                      <td className="border border-gray-300 px-4 py-2">4-8 months</td>
                      <td className="border border-gray-300 px-4 py-2">$700 (+ $2,500 premium)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">I-485 Adjustment</td>
                      <td className="border border-gray-300 px-4 py-2">8-14 months</td>
                      <td className="border border-gray-300 px-4 py-2">$1,140 (+ $1,440 biometrics)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Consular Processing</td>
                      <td className="border border-gray-300 px-4 py-2">3-6 months</td>
                      <td className="border border-gray-300 px-4 py-2">$325 (+ medical exam)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Priority Dates and Country Caps</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-yellow-900">Per-Country Limits Impact</h3>
                <p className="text-gray-700 mb-3">
                  Annual green card limits and per-country caps significantly affect waiting times for students from certain countries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Heavily Impacted Countries</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• India: 10-20+ year wait for EB-2/EB-3</li>
                      <li>• China: 2-5 year wait for EB-2/EB-3</li>
                      <li>• Philippines: 3-5 year wait</li>
                      <li>• Mexico: 2-3 year wait</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Strategies for Long Waits</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Pursue EB-1 qualification</li>
                      <li>• Apply for NIW</li>
                      <li>• Consider family-based options</li>
                      <li>• Maintain valid work status</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Tips for Success</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">Academic Excellence</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Maintain high GPA throughout studies</li>
                    <li>• Pursue advanced degrees (Master's/PhD)</li>
                    <li>• Engage in research and publications</li>
                    <li>• Build strong faculty relationships</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-900">Professional Development</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Gain relevant work experience through internships</li>
                    <li>• Develop specialized skills in high-demand fields</li>
                    <li>• Build professional networks</li>
                    <li>• Obtain industry certifications</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-900">Legal Strategy</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Consult with experienced immigration attorneys</li>
                    <li>• Start planning early in your studies</li>
                    <li>• Keep detailed records of achievements</li>
                    <li>• Consider multiple pathways simultaneously</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Common Challenges and Solutions</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Challenge: H-1B Lottery System</h3>
                  <p className="text-gray-700 mb-3">
                    The H-1B cap and lottery system creates uncertainty for students transitioning from OPT.
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">Solutions:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Pursue STEM OPT extension for more chances</li>
                      <li>• Consider cap-exempt employers (universities, non-profits)</li>
                      <li>• Explore L-1 visa options with multinational companies</li>
                      <li>• Apply for NIW to bypass H-1B requirement</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Challenge: Long Processing Times</h3>
                  <p className="text-gray-700 mb-3">
                    Green card processing can take several years, creating uncertainty about status.
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">Solutions:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Apply for premium processing when available</li>
                      <li>• Maintain valid work authorization throughout</li>
                      <li>• Consider concurrent filing when eligible</li>
                      <li>• Keep backup plans for visa extensions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Recent Changes and Updates</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-red-900">2024 Updates</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• USCIS policy updates on premium processing</li>
                  <li>• New STEM OPT fields added to eligible list</li>
                  <li>• Enhanced security measures for applications</li>
                  <li>• Digital transformation initiatives</li>
                  <li>• Fee increases for various applications</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Conclusion</h2>
              <p className="text-gray-700 mb-6">
                Obtaining a green card as an international student requires careful planning, patience, and strategic decision-making. While the process can be complex and time-consuming, understanding your options and preparing early can significantly increase your chances of success.
              </p>
              
              <p className="text-gray-700 mb-6">
                The key is to start planning early in your academic career, maintain excellent academic and professional records, and consider multiple pathways simultaneously. With proper preparation and guidance, achieving permanent residency in the United States is an attainable goal.
              </p>
              
              <p className="text-gray-700 mb-8">
                Remember that immigration law is complex and constantly evolving. It's essential to consult with qualified immigration attorneys who can provide personalized advice based on your specific circumstances and goals.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Can I apply for a green card while on F-1 visa?</h3>
                  <p className="text-gray-700">Yes, you can apply for a green card while on F-1 status, but you must maintain your student status until you receive your green card or adjust to another status.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">What's the fastest way to get a green card as a student?</h3>
                  <p className="text-gray-700">The fastest routes are typically EB-1A (extraordinary ability), NIW (national interest waiver), or marriage to a U.S. citizen. These don't require labor certification and have shorter processing times.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Do I need a job offer to apply for a green card?</h3>
                  <p className="text-gray-700">It depends on the category. EB-2 and EB-3 typically require job offers, while EB-1A, NIW, and family-based categories don't. Some categories like NIW allow self-petitioning.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Can I travel outside the US while my green card application is pending?</h3>
                  <p className="text-gray-700">Yes, but you need to maintain valid status and may need advance parole if applying for adjustment of status. Travel on F-1 or H-1B is generally safer than using advance parole.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <ContactForm />
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#pathways" className="text-blue-600 hover:underline">Green Card Pathways</a></li>
                  <li><a href="#f1-process" className="text-blue-600 hover:underline">F-1 to Green Card</a></li>
                  <li><a href="#stem-opt" className="text-blue-600 hover:underline">STEM OPT Benefits</a></li>
                  <li><a href="#niw" className="text-blue-600 hover:underline">National Interest Waiver</a></li>
                  <li><a href="#eb1a" className="text-blue-600 hover:underline">EB-1A Extraordinary Ability</a></li>
                  <li><a href="#processing-times" className="text-blue-600 hover:underline">Processing Times</a></li>
                  <li><a href="#success-tips" className="text-blue-600 hover:underline">Tips for Success</a></li>
                  <li><a href="#faqs" className="text-blue-600 hover:underline">FAQs</a></li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-emerald-900">Quick Facts</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 50,000+ employment-based green cards annually</li>
                  <li>• 7% per-country limit applies</li>
                  <li>• EB-1 has no backlog for most countries</li>
                  <li>• STEM OPT = 36 months total work time</li>
                  <li>• NIW doesn't require job offer</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">Best Strategies</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Start planning in first year</li>
                  <li>• Pursue advanced degrees</li>
                  <li>• Build publication record</li>
                  <li>• Network with professionals</li>
                  <li>• Consider multiple pathways</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-yellow-900">Common Timelines</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• EB-1A: 8-15 months</li>
                  <li>• NIW: 10-18 months</li>
                  <li>• EB-2/EB-3: 2-20+ years</li>
                  <li>• Family-based: 1-3 years</li>
                  <li>• DV Lottery: 6-12 months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}