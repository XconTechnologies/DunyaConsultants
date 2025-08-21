import { Clock, User, Share2 } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function RequirementsComputerScienceUSA() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Exact Kaplan Style */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study Destinations
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white italic">
              Requirements to Study Computer Science in USA
            </h1>
            <p className="text-white text-sm lg:text-base max-w-3xl mx-auto leading-relaxed mb-8">
              Complete guide to admission requirements, eligibility criteria, costs, and top universities for CS programs in America
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
                <span>12 min read</span>
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
                  The United States has many well-known colleges as well as universities that offer Computer Science (CS) degrees. Computer Science is an important field and is becoming more useful every day. Many students want to study computer science for a Bachelor's or Master's degree in the USA but are unsure if they meet the requirements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While each university has its own rules, there are some common requirements to study computer science in the USA. Knowing those requirements can help you decide better which university you should select.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Graduates of US universities are in high demand in IT and Computer Science jobs. A degree from an American university is respected worldwide and opens up great job opportunities. US universities focus on both theory and practical learning, giving students the skills needed for successful careers.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#what-field" className="hover:bg-[#1845B3]">What Field of Study is Computer Science?</a></li>
                  <li><a href="#eligibility" className="hover:bg-[#1845B3]">Eligibility Criteria to Study Computer Science in USA</a></li>
                  <li><a href="#documents" className="hover:bg-[#1845B3]">Documents Required for Fields of Computer Science</a></li>
                  <li><a href="#admission-process" className="hover:bg-[#1845B3]">Admission Process for Computer Science Study in USA</a></li>
                  <li><a href="#cost" className="hover:bg-[#1845B3]">Cost to study Computer Science Abroad in the USA</a></li>
                  <li><a href="#universities" className="hover:bg-[#1845B3]">List of the Best Universities to Study Computer Science in USA</a></li>
                  <li><a href="#scholarships" className="hover:bg-[#1845B3]">Scholarships for Education for Computer Science in the USA</a></li>
                </ul>
              </div>

              {/* What Field of Study is Computer Science? */}
              <section id="what-field" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">What Field of Study is Computer Science?</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Computer science is the study of computers and software. Studying computer science focuses on creating and improving software systems rather than the hardware (physical parts) of computers. USA CS covers topics like artificial intelligence, computer security, programming, and how to use computers in areas like biology and graphics.
                  </p>
                  <p>
                    Students from the best schools for computer science in the US learn how to design, develop, and manage software, as well as understand the basic principles behind how computers work. They also study areas like computer networks, databases, and human-computer interaction to solve real-world problems with technology.
                  </p>
                </div>
              </section>

              {/* Eligibility Criteria */}
              <section id="eligibility" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Eligibility Criteria to Study Computer Science in USA</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    To get admission to a Bachelor's degree in US CS, there are certain requirements you need to meet. These may vary slightly depending on the university, but the basic qualifications are as follows:
                  </p>
                  <div className="bg-blue-50 border-l-4 #1D50C9 p-4 my-4">
                    <ul className="space-y-2">
                      <li>• You will need to provide a copy of your passport and get a visa to study in the USA.</li>
                      <li>• You must have finished your high school education.</li>
                      <li>• You need to show that you can understand and speak English well.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Documents Required */}
              <section id="documents" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Documents Required for Fields of Computer Science</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>Here are the documents and proofs you may need to apply for a Computer Science degree in the USA:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-gray-800">Academic Documents</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Official transcript</strong> – Your grades and exam results from high school or any previous studies</li>
                        <li>• <strong>Top grades</strong> – Good marks, especially in subjects like Mathematics, Logic, or Informatics</li>
                        <li>• <strong>Personal statement</strong> – A written statement explaining why you are a great candidate for the program</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-gray-800">Supporting Documents</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Application fee</strong> – A one-time fee, typically between 30 to 150 EUR</li>
                        <li>• <strong>Proof of identity</strong> – A passport or another ID, along with 2-4 passport-sized photos</li>
                        <li>• <strong>Medical certificate</strong> – A document confirming your health condition</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-[#1565c0]">Financial Documents</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Proof of financial support</strong> – Evidence showing you can afford tuition fees, living costs, and health insurance</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-[#1565c0]">Recommendation</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Letters of recommendation</strong> – Letters from teachers or people who can vouch for your skills and qualities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Admission Process */}
              <section id="admission-process" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Admission Process for Computer Science Study in USA</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>Here is a simple guide to applying for a Bachelor's in Computer Science at a university in the USA:</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Research Universities</h3>
                        <p className="text-gray-600">Look for good universities that provide Computer Science courses.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Submit Application</h3>
                        <p className="text-gray-600">Once you have selected a university, fill out the application form for the Bachelor's degree and pay the application fee.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Submit Documents</h3>
                        <p className="text-gray-600">Check the required documents and send their scanned copies.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Interview Process</h3>
                        <p className="text-gray-600">After you submit your application, you will get an email about the interview.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Admission Decision</h3>
                        <p className="text-gray-600">Prepare for the interview and wait for the admission decision.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 #1D50C9 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Confirm Seat</h3>
                        <p className="text-gray-600">If you are accepted, you'll need to pay a deposit fee to confirm your seat. This fee is required to secure your place.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cost Information */}
              <section id="cost" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Cost to study Computer Science Abroad in the USA</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    The cost of studying Computer Science in the USA varies depending on the university type, location, and program level. Here's a general breakdown of expenses:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-[#1565c0]">Public Universities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tuition: $25,000-$40,000 per year</li>
                        <li>• Living expenses: $15,000-$20,000 per year</li>
                        <li>• Books & supplies: $1,500-$2,000 per year</li>
                        <li>• <strong>Total: $41,500-$62,000 per year</strong></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-[#1565c0]">Private Universities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Tuition: $40,000-$60,000 per year</li>
                        <li>• Living expenses: $15,000-$20,000 per year</li>
                        <li>• Books & supplies: $1,500-$2,000 per year</li>
                        <li>• <strong>Total: $56,500-$82,000 per year</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Top Universities */}
              <section id="universities" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">List of the Best Universities to Study Computer Science in USA</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>The United States is home to some of the world's top-ranked computer science programs. Here are some of the best universities for CS studies:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-lg #1845B3 mb-2">MIT</h3>
                      <p className="text-gray-600 text-sm">Massachusetts Institute of Technology</p>
                      <p className="text-gray-700 mt-2">Rank: #1 in Computer Science</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-lg #1845B3 mb-2">Stanford University</h3>
                      <p className="text-gray-600 text-sm">Stanford, California</p>
                      <p className="text-gray-700 mt-2">Rank: #2 in Computer Science</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-lg #1845B3 mb-2">UC Berkeley</h3>
                      <p className="text-gray-600 text-sm">University of California, Berkeley</p>
                      <p className="text-gray-700 mt-2">Rank: #3 in Computer Science</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-lg #1845B3 mb-2">Carnegie Mellon</h3>
                      <p className="text-gray-600 text-sm">Pittsburgh, Pennsylvania</p>
                      <p className="text-gray-700 mt-2">Rank: #4 in Computer Science</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-lg #1845B3 mb-2">Harvard University</h3>
                      <p className="text-gray-600 text-sm">Cambridge, Massachusetts</p>
                      <p className="text-gray-700 mt-2">Top Ivy League CS Program</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold text-lg #1845B3 mb-2">Caltech</h3>
                      <p className="text-gray-600 text-sm">California Institute of Technology</p>
                      <p className="text-gray-700 mt-2">Top STEM Research University</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Scholarships */}
              <section id="scholarships" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Scholarships for Education for Computer Science in the USA</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>There are various scholarship opportunities available for international students pursuing Computer Science in the USA:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-[#1565c0] mb-3">Merit-Based Scholarships</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Presidential Scholarships</li>
                        <li>• Dean's Excellence Awards</li>
                        <li>• Academic Merit Scholarships</li>
                        <li>• STEM-specific scholarships</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-[#1565c0] mb-3">Government Scholarships</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Fulbright Scholarship Program</li>
                        <li>• Government-sponsored programs</li>
                        <li>• International student aid</li>
                        <li>• Research assistantships</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Conclusion</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Studying Computer Science in the USA offers excellent career prospects and access to cutting-edge technology and research. While the admission requirements may seem challenging, proper preparation and understanding of the process can significantly increase your chances of success.
                  </p>
                  <p>
                    Remember to start your application process early, prepare thoroughly for standardized tests, and research scholarship opportunities. With determination and proper guidance, you can achieve your goal of studying Computer Science at a top American university.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">How many years does it take to study computer science?</h3>
                    <p className="text-gray-700">A Bachelor's degree in Computer Science typically takes 4 years to complete, while a Master's degree takes 1-2 years. PhD programs can take 4-6 years depending on research requirements.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Which industries utilize computer science?</h3>
                    <p className="text-gray-700">Computer science graduates work in technology companies, finance, healthcare, entertainment, automotive, aerospace, education, and virtually every industry that uses technology.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">What are the benefits of studying computer science?</h3>
                    <p className="text-gray-700">Benefits include high salary potential, job security, diverse career opportunities, ability to work remotely, constant learning opportunities, and the chance to solve real-world problems through technology.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Should I study computer science?</h3>
                    <p className="text-gray-700">You should consider computer science if you enjoy problem-solving, logical thinking, mathematics, and technology. It's ideal for those who want a stable, well-paying career with growth opportunities.</p>
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
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">4 years (Bachelor's)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Annual Cost:</span>
                    <span className="font-medium">$41,500-$82,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Starting Salary:</span>
                    <span className="font-medium">$70,000-$120,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">English Test:</span>
                    <span className="font-medium">TOEFL/IELTS Required</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Application Fee:</span>
                    <span className="font-medium">$30-$150</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Top University:</span>
                    <span className="font-medium">MIT</span>
                  </li>
                </ul>
              </div>

              {/* Application Timeline */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-#1e3a8a mb-4">Application Timeline</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-[#1565c0]">12-18 months before</div>
                    <div className="text-gray-600">Research & Planning</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#1565c0]">8-12 months before</div>
                    <div className="text-gray-600">Test Preparation</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#1565c0]">6-8 months before</div>
                    <div className="text-gray-600">Application Submission</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#1565c0]">3-6 months before</div>
                    <div className="text-gray-600">Financial Planning</div>
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