import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactSection from '@/components/blog/ContactSection';
import ContactForm from '@/components/blog/ContactForm';

export default function RequirementsComputerScienceUSA() {
  return (
    
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-96 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
            <h1 className="text-5xl font-bold text-center mb-6">
              Requirements to Study Computer Science in USA
            </h1>
            <p className="text-2xl text-center max-w-3xl opacity-90">
              Complete guide to admission requirements, costs, and career prospects for CS programs in America
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1440px] mx-auto bg-white shadow-lg">
          <div className="px-16 py-16">
            <div className="flex gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="bg-white rounded-lg shadow-sm p-8">
                  <div className="mb-8">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      The United States is home to some of the world's most prestigious computer science programs, offering cutting-edge research opportunities and excellent career prospects. If you're considering studying computer science in the USA, understanding the admission requirements and application process is crucial for your success.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Quick Facts</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Average tuition: $30,000-$60,000 per year</li>
                      <li>• Duration: 4 years (Bachelor's), 1-2 years (Master's)</li>
                      <li>• Starting salary: $70,000-$120,000 annually</li>
                      <li>• Top employers: Google, Microsoft, Amazon, Apple</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Academic Requirements</h2>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">For Bachelor's Programs</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>High school diploma with strong performance in mathematics and science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>GPA of 3.0 or higher (preferably 3.5+)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>Completed courses in calculus, physics, and computer programming (recommended)</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">For Master's Programs</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>Bachelor's degree in computer science or related field</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>Minimum GPA of 3.0 (competitive programs require 3.5+)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span>Strong foundation in programming, algorithms, and data structures</span>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Standardized Test Requirements</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">English Language Tests</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">TOEFL iBT</h4>
                        <p className="text-gray-700">Minimum score: 79-100</p>
                        <p className="text-sm text-gray-600">Top programs require 100+</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">IELTS</h4>
                        <p className="text-gray-700">Minimum score: 6.5-7.0</p>
                        <p className="text-sm text-gray-600">Top programs require 7.0+</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">Graduate Entrance Exams</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">GRE General Test</h4>
                        <p className="text-gray-700">Required for most Master's programs</p>
                        <p className="text-sm text-gray-600">Quantitative: 160+, Verbal: 150+, Writing: 4.0+</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">GRE Subject Test</h4>
                        <p className="text-gray-700">Optional but recommended for competitive programs</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Application Documents</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">Required Documents</h3>
                      <ul className="space-y-2 text-blue-700">
                        <li>• Official transcripts</li>
                        <li>• Letters of recommendation (2-3)</li>
                        <li>• Statement of purpose</li>
                        <li>• Resume/CV</li>
                        <li>• Portfolio (if applicable)</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">Financial Documents</h3>
                      <ul className="space-y-2 text-green-700">
                        <li>• Bank statements</li>
                        <li>• Sponsor affidavit</li>
                        <li>• Scholarship letters</li>
                        <li>• I-20 form</li>
                        <li>• Visa application</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Top Universities for Computer Science</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3">MIT</h3>
                      <p className="text-gray-600 text-sm mb-2">Massachusetts Institute of Technology</p>
                      <p className="text-blue-600 font-semibold">Rank: #1</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3">Stanford</h3>
                      <p className="text-gray-600 text-sm mb-2">Stanford University</p>
                      <p className="text-blue-600 font-semibold">Rank: #2</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3">UC Berkeley</h3>
                      <p className="text-gray-600 text-sm mb-2">University of California, Berkeley</p>
                      <p className="text-blue-600 font-semibold">Rank: #3</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3">CMU</h3>
                      <p className="text-gray-600 text-sm mb-2">Carnegie Mellon University</p>
                      <p className="text-blue-600 font-semibold">Rank: #4</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Cost of Studying</h2>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                    <h3 className="font-semibold text-yellow-800 mb-4">Annual Costs (USD)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Public Universities</h4>
                        <ul className="space-y-1 text-yellow-700">
                          <li>• Tuition: $25,000-$40,000</li>
                          <li>• Living expenses: $15,000-$20,000</li>
                          <li>• Books & supplies: $1,500-$2,000</li>
                          <li>• Total: $41,500-$62,000</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Private Universities</h4>
                        <ul className="space-y-1 text-yellow-700">
                          <li>• Tuition: $40,000-$60,000</li>
                          <li>• Living expenses: $15,000-$20,000</li>
                          <li>• Books & supplies: $1,500-$2,000</li>
                          <li>• Total: $56,500-$82,000</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Career Prospects</h2>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <h3 className="font-semibold text-green-800 mb-4">Job Opportunities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Popular Roles</h4>
                        <ul className="space-y-1 text-green-700">
                          <li>• Software Engineer</li>
                          <li>• Data Scientist</li>
                          <li>• Machine Learning Engineer</li>
                          <li>• Cybersecurity Specialist</li>
                          <li>• Product Manager</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Salary Ranges</h4>
                        <ul className="space-y-1 text-green-700">
                          <li>• Entry level: $70,000-$90,000</li>
                          <li>• Mid-level: $90,000-$130,000</li>
                          <li>• Senior level: $130,000-$200,000+</li>
                          <li>• Tech giants: $150,000-$300,000+</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Application Timeline</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                      <div>
                        <h3 className="font-semibold">12-18 months before: Research & Planning</h3>
                        <p className="text-gray-600">Research programs, prepare for standardized tests</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                      <div>
                        <h3 className="font-semibold">8-12 months before: Test Preparation</h3>
                        <p className="text-gray-600">Take TOEFL/IELTS, GRE, prepare application materials</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                      <div>
                        <h3 className="font-semibold">6-8 months before: Application Submission</h3>
                        <p className="text-gray-600">Submit applications, request transcripts and recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                      <div>
                        <h3 className="font-semibold">3-6 months before: Financial Planning</h3>
                        <p className="text-gray-600">Apply for scholarships, arrange funding, prepare visa documents</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-800 mb-3">💡 Pro Tips</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Start your application process early - competitive programs fill up quickly</li>
                      <li>• Build a strong portfolio showcasing your programming projects</li>
                      <li>• Consider applying to both reach and safety schools</li>
                      <li>• Research funding opportunities and scholarships thoroughly</li>
                      <li>• Network with current students and alumni for insights</li>
                    </ul>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="w-96">
                <div className="sticky top-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactSection
          title="Ready to Apply for Computer Science in USA?"
          description="Get expert guidance on your application process and requirements. Our counselors will help you choose the right program and prepare a strong application."
        />
      </div>
      <Footer />
    
    </div>
  );
}