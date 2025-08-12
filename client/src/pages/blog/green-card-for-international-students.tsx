import { Clock, User, Share2 } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function GreenCardInternationalStudents() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Exact Kaplan Style */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Immigration Guide
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Green Card for International Students: Complete Guide 2025
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to obtaining a Green Card as an international student, including benefits, application process, and pathways to permanent residency
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>January 27, 2025</span>
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

      {/* Main Content - Exact Kaplan Style */}
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Are you a non-U.S. student looking to become an official green card holder in the USA? Getting a green card is one of the most important steps. It lets you live as well as work in the United States without the worry of leaving one day. A green card makes you a permanent resident, giving you many of the same rights as a U.S. citizen, but not all. Each year, the US government gives the opportunity of green card for students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  There are many green card benefits for students. Through the U.S. EB-5 visa program, international students (like those on F1 student visas) can have more opportunities to attend the college or university they want. It also gives students and their families financial and other advantages of green card during and after their studies in the USA.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you are interested to learn more, please keep reading below.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#who-can-apply" className="hover:bg-[#1845B3]">Who can Apply for International Students Green Card in the USA?</a></li>
                  <li><a href="#employment-based" className="hover:bg-[#1845B3]">Employment-based immigration</a></li>
                  <li><a href="#family-based" className="hover:bg-[#1845B3]">Family-based immigration</a></li>
                  <li><a href="#diversity-visa" className="hover:bg-[#1845B3]">Diversity Visa Lottery</a></li>
                  <li><a href="#refugees-asylees" className="hover:bg-[#1845B3]">Refugees & asylees</a></li>
                  <li><a href="#green-card-benefits" className="hover:bg-[#1845B3]">Green Card Benefits for Students</a></li>
                  <li><a href="#scholarships" className="hover:bg-[#1845B3]">Scholarships for Green Card Holders</a></li>
                  <li><a href="#study-opportunities" className="hover:bg-[#1845B3]">Study Opportunities</a></li>
                  <li><a href="#work-permit" className="hover:bg-[#1845B3]">Work Permit</a></li>
                  <li><a href="#lower-tuition" className="hover:bg-[#1845B3]">Lower Tuition Fee</a></li>
                  <li><a href="#travel-flexibility" className="hover:bg-[#1845B3]">Travel Flexibility & Other Advantages</a></li>
                  <li><a href="#job-opportunities" className="hover:bg-[#1845B3]">Job Opportunities</a></li>
                </ul>
              </div>

              {/* Who can Apply */}
              <section id="who-can-apply" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Who can Apply for International Students Green Card in the USA?</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Green card holders, or Lawful Permanent Residents (LPRs), have many benefits that international students with temporary visas do not. Let's discuss in detail about who can enjoy the benefits of a green card in US below:
                  </p>
                </div>

                {/* Employment-based immigration */}
                <div id="employment-based" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Employment-based immigration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    People with advanced degrees, special skills, or exceptional abilities can get green card advantages through a job. Employers can sponsor workers if there are not enough qualified U.S. workers for certain jobs.
                  </p>
                </div>

                {/* Family-based immigration */}
                <div id="family-based" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Family-based immigration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You can apply for a green card for international students if you have a family member who is a U.S. citizen or permanent resident. This includes parents, children, spouses, and siblings.
                  </p>
                </div>

                {/* Diversity Visa Lottery */}
                <div id="diversity-visa" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Diversity Visa Lottery</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This program, also called the Green Card Lottery, randomly selects people from countries with low immigration to the U.S. Winners can get green card holder benefits.
                  </p>
                </div>

                {/* Refugees & asylees */}
                <div id="refugees-asylees" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Refugees & asylees</h3>
                  <p className="text-gray-700 leading-relaxed">
                    People granted refugee or asylum status in the USA can apply for a green card after living in the country for one year, as long as they meet certain requirements and pass background checks.
                  </p>
                </div>
              </section>

              {/* Green Card Benefits for Students */}
              <section id="green-card-benefits" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Green Card Benefits for Students</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>Here are some of the benefits of green card in USA for international students:</p>
                </div>

                {/* Scholarships for Green Card Holders */}
                <div id="scholarships" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Scholarships for Green Card Holders</h3>
                  <div className="bg-blue-50 border-l-4 #1D50C9 p-4 my-4">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Green card holders can apply for federal financial aid, which includes grants, scholarship for green card holders, and low-interest loans. This is more than what international students can get because they are not eligible for most US government help.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      By applying for scholarships, students can lower their school costs. To apply for federal loans, green card holders need to fill out the Free Application for Federal Student Aid, also called FAFSA for green card holders.
                    </p>
                  </div>
                </div>

                {/* Study Opportunities */}
                <div id="study-opportunities" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Study Opportunities</h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>
                      Green card holders can easily apply to any US school, including public and private colleges, universities, as well as vocational programs. They don't face the same visa limits or restrictions as international students.
                    </p>
                    <p>
                      Many US colleges have limited spots for international students. Green card holders are treated as local students and it improves their chances of being accepted.
                    </p>
                  </div>
                </div>

                {/* Work Permit */}
                <div id="work-permit" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Work Permit</h3>
                  <div className="bg-blue-50 border-l-4 #1D50C9 p-4 my-4">
                    <p className="text-gray-700 leading-relaxed">
                      Green card holders have unlimited work authorization in the United States. Unlike F1 students who have restrictions on where and how much they can work, green card holders can work anywhere, anytime, and for any employer without needing special permits or sponsorship.
                    </p>
                  </div>
                </div>

                {/* Lower Tuition Fee */}
                <div id="lower-tuition" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Lower Tuition Fee</h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>
                      One of the biggest financial benefits is access to in-state tuition rates at public universities. Green card holders pay significantly less than international students:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#1565c0] mb-2">International Student Tuition</h4>
                        <p className="text-gray-700">$25,000 - $50,000 per year</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#1565c0] mb-2">Green Card Holder Tuition</h4>
                        <p className="text-gray-700">$10,000 - $15,000 per year</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Travel Flexibility & Other Advantages */}
                <div id="travel-flexibility" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Travel Flexibility & Other Advantages</h3>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>Green card holders enjoy numerous travel and lifestyle benefits:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Can travel freely in and out of the United States without visa restrictions</li>
                      <li>Can live anywhere in the United States without reporting to immigration authorities</li>
                      <li>Can sponsor certain family members for green cards</li>
                      <li>Have access to Social Security benefits after meeting requirements</li>
                      <li>Can apply for U.S. citizenship after 5 years (or 3 years if married to a U.S. citizen)</li>
                      <li>Protection under U.S. laws and the Constitution</li>
                    </ul>
                  </div>
                </div>

                {/* Job Opportunities */}
                <div id="job-opportunities" className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Job Opportunities</h3>
                  <div className="bg-blue-50 border-l-4 #1D50C9 p-4 my-4">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Green card holders have access to all job opportunities in the United States, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Government jobs (federal, state, and local)</li>
                      <li>Jobs requiring security clearances</li>
                      <li>Employment in sensitive industries</li>
                      <li>Starting their own businesses</li>
                      <li>Working for any employer without sponsorship requirements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Application Pathways */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Pathways for Students to Get Green Card</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>International students typically pursue green cards through these main pathways:</p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 #1D50C9 pl-4">
                      <h3 className="font-semibold text-lg mb-2">1. Employment-Based Green Card (EB-1, EB-2, EB-3)</h3>
                      <p>After graduation, students can work on OPT (Optional Practical Training), then H-1B visa, and eventually apply for employment-based green card through their employer.</p>
                    </div>
                    
                    <div className="border-l-4 #1D50C9 pl-4">
                      <h3 className="font-semibold text-lg mb-2">2. EB-5 Investment Visa</h3>
                      <p>Students or their families can invest $800,000 - $1,050,000 in a U.S. business project to qualify for green card.</p>
                    </div>
                    
                    <div className="border-l-4 #1D50C9 pl-4">
                      <h3 className="font-semibold text-lg mb-2">3. Family-Based Green Card</h3>
                      <p>Students who marry U.S. citizens or have immediate family members who are citizens/permanent residents can apply.</p>
                    </div>
                    
                    <div className="border-l-4 #1D50C9 pl-4">
                      <h3 className="font-semibold text-lg mb-2">4. Diversity Visa Lottery</h3>
                      <p>Students from eligible countries can participate in the annual Diversity Visa Lottery program.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Conclusion</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Obtaining a green card as an international student provides tremendous benefits and opportunities for your education, career, and life in the United States. From significant cost savings on tuition to unlimited work authorization and pathway to citizenship, a green card opens doors that temporary visas cannot.
                  </p>
                  <p>
                    While the process can be complex and time-consuming, understanding your options and planning early can significantly improve your chances of success. Whether through employment, family connections, investment, or the diversity lottery, there are multiple pathways available to international students.
                  </p>
                  <p>
                    It's essential to work with experienced immigration professionals who can guide you through the process and help you choose the best strategy for your specific situation.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Can green card holders get student loans?</h3>
                    <p className="text-gray-700">Yes, green card holders are eligible for federal student aid including grants, work-study programs, and federal student loans by completing the FAFSA application.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">How can an international student get a green card?</h3>
                    <p className="text-gray-700">International students can obtain green cards through employment sponsorship, family relationships, EB-5 investment visa, or the diversity visa lottery program.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Can international students apply for green card?</h3>
                    <p className="text-gray-700">Yes, international students can apply for green cards while maintaining their F-1 status, though they must demonstrate non-immigrant intent until the green card process is complete.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Can F1 student apply for green card?</h3>
                    <p className="text-gray-700">Yes, F1 students can apply for green cards through eligible pathways such as employment sponsorship, family petitions, or investment visas while maintaining their student status.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">How long does the green card process take for students?</h3>
                    <p className="text-gray-700">The timeline varies by pathway: employment-based can take 1-10+ years depending on country of birth and category, family-based varies by relationship, and EB-5 typically takes 2-5 years.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">What is the difference between green card and citizenship?</h3>
                    <p className="text-gray-700">Green card holders are permanent residents with most rights of citizens but cannot vote in federal elections or hold certain government positions. They can apply for citizenship after meeting residency requirements.</p>
                  </div>
                </div>
              </section>

            </article>
          </div>

          {/* Sidebar - Exact Kaplan Style */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-#1e3a8a mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-medium">1-10+ years</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">EB-5 Investment:</span>
                    <span className="font-medium">$800K-$1.05M</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Tuition Savings:</span>
                    <span className="font-medium">$15K-$35K/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Work Authorization:</span>
                    <span className="font-medium">Unlimited</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Travel Freedom:</span>
                    <span className="font-medium">Unrestricted</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Path to Citizenship:</span>
                    <span className="font-medium">5 years</span>
                  </li>
                </ul>
              </div>

              {/* Green Card Pathways */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-#1e3a8a mb-4">Green Card Pathways</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-[#1565c0]">Employment-Based</div>
                    <div className="text-gray-600">EB-1, EB-2, EB-3 categories</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#1565c0]">Family-Based</div>
                    <div className="text-gray-600">Through US citizen/resident family</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#1565c0]">EB-5 Investment</div>
                    <div className="text-gray-600">$800K minimum investment</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#1565c0]">Diversity Lottery</div>
                    <div className="text-gray-600">Annual random selection</div>
                  </div>
                </div>
              </div>

              {/* Benefits Summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-#1e3a8a mb-4">Key Benefits</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Federal financial aid eligibility</li>
                  <li>• In-state tuition rates</li>
                  <li>• Unlimited work authorization</li>
                  <li>• Free travel in/out of US</li>
                  <li>• Can sponsor family members</li>
                  <li>• Path to US citizenship</li>
                  <li>• Social Security benefits</li>
                  <li>• Government job eligibility</li>
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