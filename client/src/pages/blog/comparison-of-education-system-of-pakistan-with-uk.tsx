import Navigation from '@/components/navigation';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Footer from '@/components/footer';

export default function ComparisonEducationSystemPakistanUK() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Full-width Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-red-900 via-purple-800 to-blue-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Comparison of Education System of Pakistan with UK</h1>
          <p className="text-2xl opacity-90">Understanding the Key Differences and Similarities</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The education systems of Pakistan and the United Kingdom represent two distinct approaches to learning and academic development. While both systems aim to provide quality education, they differ significantly in structure, methodology, assessment patterns, and outcomes. Understanding these differences is crucial for Pakistani students considering higher education in the UK.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-red-900">Why This Comparison Matters</h3>
                <p className="text-gray-700">
                  For Pakistani students planning to study in the UK, understanding the fundamental differences between these education systems helps in better preparation, smoother transition, and improved academic performance. This knowledge is essential for making informed decisions about international education.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview of Education Systems</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-900">Pakistan Education System</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Primary: 5 years (Grades 1-5)</li>
                    <li>• Middle: 3 years (Grades 6-8)</li>
                    <li>• Secondary: 2 years (Grades 9-10)</li>
                    <li>• Higher Secondary: 2 years (Grades 11-12)</li>
                    <li>• Bachelor's: 2-4 years</li>
                    <li>• Master's: 1-2 years</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">UK Education System</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Primary: 7 years (Ages 4-11)</li>
                    <li>• Secondary: 5 years (Ages 11-16)</li>
                    <li>• Sixth Form: 2 years (Ages 16-18)</li>
                    <li>• Bachelor's: 3 years (4 in Scotland)</li>
                    <li>• Master's: 1 year</li>
                    <li>• PhD: 3-4 years</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Detailed Comparison Table</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Pakistan</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">United Kingdom</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Language of Instruction</td>
                      <td className="border border-gray-300 px-4 py-2">Urdu/English (Mixed)</td>
                      <td className="border border-gray-300 px-4 py-2">English</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Academic Year</td>
                      <td className="border border-gray-300 px-4 py-2">April to March</td>
                      <td className="border border-gray-300 px-4 py-2">September to July</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Assessment Method</td>
                      <td className="border border-gray-300 px-4 py-2">Exam-based (Rote learning)</td>
                      <td className="border border-gray-300 px-4 py-2">Continuous assessment + Exams</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class Size</td>
                      <td className="border border-gray-300 px-4 py-2">30-50 students</td>
                      <td className="border border-gray-300 px-4 py-2">15-25 students</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Teaching Style</td>
                      <td className="border border-gray-300 px-4 py-2">Teacher-centered</td>
                      <td className="border border-gray-300 px-4 py-2">Student-centered</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Grading System</td>
                      <td className="border border-gray-300 px-4 py-2">Percentage/Letter grades</td>
                      <td className="border border-gray-300 px-4 py-2">Classifications/Letter grades</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Research Focus</td>
                      <td className="border border-gray-300 px-4 py-2">Limited at undergraduate level</td>
                      <td className="border border-gray-300 px-4 py-2">Integrated throughout</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Differences in Teaching Methodology</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Pakistan: Traditional Approach</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Characteristics:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Teacher-led instruction</li>
                        <li>• Emphasis on memorization</li>
                        <li>• Formal classroom settings</li>
                        <li>• Limited student interaction</li>
                        <li>• Textbook-based learning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Assessment:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Annual examinations</li>
                        <li>• High-stakes testing</li>
                        <li>• Theoretical knowledge focus</li>
                        <li>• Limited practical application</li>
                        <li>• Standardized board exams</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">UK: Progressive Approach</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Characteristics:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Student-centered learning</li>
                        <li>• Critical thinking emphasis</li>
                        <li>• Interactive classrooms</li>
                        <li>• Collaborative learning</li>
                        <li>• Diverse learning resources</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Assessment:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Continuous assessment</li>
                        <li>• Coursework and projects</li>
                        <li>• Practical applications</li>
                        <li>• Research-based learning</li>
                        <li>• Peer and self-assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Higher Education Comparison</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-yellow-900">University Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Pakistan Universities:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Semester or annual system</li>
                      <li>• Lecture-based teaching</li>
                      <li>• Limited research opportunities</li>
                      <li>• Traditional faculty-student relationship</li>
                      <li>• Focus on theoretical knowledge</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">UK Universities:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Term-based system</li>
                      <li>• Tutorials and seminars</li>
                      <li>• Extensive research culture</li>
                      <li>• Mentorship approach</li>
                      <li>• Balance of theory and practice</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Grading Systems Comparison</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Pakistan System</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">UK System</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Equivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">80-100%</td>
                      <td className="border border-gray-300 px-4 py-2">First Class Honours (70-100%)</td>
                      <td className="border border-gray-300 px-4 py-2">Distinction</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">70-79%</td>
                      <td className="border border-gray-300 px-4 py-2">Upper Second Class (60-69%)</td>
                      <td className="border border-gray-300 px-4 py-2">Merit</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">60-69%</td>
                      <td className="border border-gray-300 px-4 py-2">Lower Second Class (50-59%)</td>
                      <td className="border border-gray-300 px-4 py-2">Pass</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">50-59%</td>
                      <td className="border border-gray-300 px-4 py-2">Third Class (40-49%)</td>
                      <td className="border border-gray-300 px-4 py-2">Pass</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Below 50%</td>
                      <td className="border border-gray-300 px-4 py-2">Fail (Below 40%)</td>
                      <td className="border border-gray-300 px-4 py-2">Fail</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Challenges for Pakistani Students in UK</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-red-900">Academic Challenges</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Adapting to independent learning style</li>
                    <li>• Participating in class discussions</li>
                    <li>• Understanding continuous assessment</li>
                    <li>• Academic writing standards</li>
                    <li>• Research methodology</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2 text-blue-900">Cultural Challenges</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Different communication styles</li>
                    <li>• Informal teacher-student relationships</li>
                    <li>• Group work dynamics</li>
                    <li>• Time management expectations</li>
                    <li>• Social integration</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Preparation Tips for Pakistani Students</h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-green-900">Before Departure</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Improve English language skills, especially speaking and listening</li>
                  <li>• Practice critical thinking and analytical writing</li>
                  <li>• Familiarize yourself with UK academic culture</li>
                  <li>• Learn about referencing styles (Harvard, APA, MLA)</li>
                  <li>• Understand plagiarism policies and academic integrity</li>
                  <li>• Develop time management skills</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">After Arrival</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Attend orientation programs</li>
                  <li>• Seek help from international student services</li>
                  <li>• Form study groups with local students</li>
                  <li>• Utilize university support services</li>
                  <li>• Practice academic writing in writing centers</li>
                  <li>• Engage in extracurricular activities</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Advantages of UK Education System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">Academic Benefits</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• World-class research opportunities</li>
                    <li>• Innovative teaching methods</li>
                    <li>• Industry connections</li>
                    <li>• Global recognition</li>
                    <li>• Critical thinking development</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-900">Personal Growth</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Independence and self-reliance</li>
                    <li>• Cultural awareness</li>
                    <li>• Communication skills</li>
                    <li>• Professional networking</li>
                    <li>• Global perspective</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Conclusion</h2>
              <p className="text-gray-700 mb-6">
                The education systems of Pakistan and the UK represent different philosophical approaches to learning and development. While Pakistan's system emphasizes structured learning and foundational knowledge, the UK system focuses on critical thinking, research, and independent learning.
              </p>
              
              <p className="text-gray-700 mb-6">
                For Pakistani students considering UK education, understanding these differences is crucial for successful adaptation. The transition requires mental preparation, skill development, and a willingness to embrace new learning methodologies.
              </p>
              
              <p className="text-gray-700 mb-8">
                Despite the challenges, studying in the UK offers tremendous opportunities for personal and professional growth, providing students with globally recognized qualifications and invaluable life experiences.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">How different is the UK grading system from Pakistan?</h3>
                  <p className="text-gray-700">The UK uses a classification system where 70% is considered First Class Honours, while in Pakistan, 80%+ is typically required for distinction. UK grading is generally more lenient in terms of percentages but stricter in assessment criteria.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">What is the biggest challenge for Pakistani students in UK universities?</h3>
                  <p className="text-gray-700">The biggest challenge is adapting to the independent learning style, participating in class discussions, and understanding the continuous assessment system which differs significantly from Pakistan's exam-based approach.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">How can Pakistani students prepare for UK education?</h3>
                  <p className="text-gray-700">Students should focus on improving English language skills, practicing critical thinking, understanding academic writing standards, and familiarizing themselves with UK academic culture before departure.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Are Pakistani qualifications recognized in the UK?</h3>
                  <p className="text-gray-700">Yes, Pakistani qualifications are recognized by UK universities, but students may need to meet additional requirements such as English language tests (IELTS) and may require foundation courses depending on their academic background.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <ContactForm />
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">System Overview</a></li>
                  <li><a href="#detailed-comparison" className="text-blue-600 hover:underline">Detailed Comparison</a></li>
                  <li><a href="#teaching-methodology" className="text-blue-600 hover:underline">Teaching Methods</a></li>
                  <li><a href="#higher-education" className="text-blue-600 hover:underline">Higher Education</a></li>
                  <li><a href="#grading-systems" className="text-blue-600 hover:underline">Grading Systems</a></li>
                  <li><a href="#challenges" className="text-blue-600 hover:underline">Challenges</a></li>
                  <li><a href="#preparation-tips" className="text-blue-600 hover:underline">Preparation Tips</a></li>
                  <li><a href="#faqs" className="text-blue-600 hover:underline">FAQs</a></li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-red-900">Key Differences</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Teaching style: Teacher vs Student-centered</li>
                  <li>• Assessment: Exam vs Continuous</li>
                  <li>• Class size: 30-50 vs 15-25</li>
                  <li>• Duration: Longer vs Shorter programs</li>
                  <li>• Focus: Theoretical vs Practical</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">Preparation Checklist</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Improve English proficiency</li>
                  <li>• Practice critical thinking</li>
                  <li>• Learn academic writing</li>
                  <li>• Understand plagiarism policies</li>
                  <li>• Develop time management</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-green-900">UK Education Benefits</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• World-class research opportunities</li>
                  <li>• Global recognition</li>
                  <li>• Industry connections</li>
                  <li>• Critical thinking development</li>
                  <li>• Cultural diversity</li>
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