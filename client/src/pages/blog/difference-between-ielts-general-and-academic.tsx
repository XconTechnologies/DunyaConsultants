import Navigation from '@/components/navigation';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Footer from '@/components/footer';

export default function DifferenceIELTSGeneralAcademic() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Full-width Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Difference between IELTS General and Academic</h1>
          <p className="text-2xl opacity-90">Complete Guide for Pakistani Students</p>
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
                  IELTS is an English test for people who want to study, work, or move to a country where English is the main language. There are two types of IELTS tests: Academic and General Training. IELTS is the only test that lets you choose between these two options. More than 11,500 schools, employers, and immigration offices worldwide, including 3,400 in the USA, accept IELTS as proof of English skills.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Key Difference</h3>
                <p className="text-gray-700">
                  The main difference between IELTS academic VS general Training tests is in the Reading and Writing sections. The General Training test has topics from everyday life, like ads, newspaper articles, and public notices, while the Academic test includes more complex topics.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Test Format for IELTS General VS Academic</h2>
              <p className="text-gray-700 mb-6">
                The IELTS test has four parts: Reading, Listening, Writing, and Speaking. There are two types of IELTS tests: Academic and General Training. The Listening and Speaking parts are the same for both, but the Reading and Writing parts are different.
              </p>

              <div className="bg-green-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-green-900">Major Differences Between Academic and General Training</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-3 text-blue-800">IELTS Academic</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• For university and higher education</li>
                      <li>• Academic texts and research materials</li>
                      <li>• Formal academic writing tasks</li>
                      <li>• University-level vocabulary</li>
                      <li>• Scientific and academic topics</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-3 text-orange-800">IELTS General Training</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• For work and immigration</li>
                      <li>• Everyday English texts</li>
                      <li>• Personal and semi-formal letters</li>
                      <li>• Workplace vocabulary</li>
                      <li>• Social and practical topics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Writing Test Differences</h3>
                <p className="text-gray-700 mb-4">
                  The Writing section shows the clearest difference between Academic and General Training IELTS. Each has two tasks with different requirements and formats.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">Academic Writing</h4>
                    <div className="space-y-3">
                      <div>
                        <strong>Task 1:</strong> Describe visual information (graphs, charts, diagrams)
                      </div>
                      <div>
                        <strong>Task 2:</strong> Write an academic essay on given topic
                      </div>
                      <div>
                        <strong>Word Count:</strong> Task 1 (150 words), Task 2 (250 words)
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-3 text-orange-800">General Training Writing</h4>
                    <div className="space-y-3">
                      <div>
                        <strong>Task 1:</strong> Write a letter (formal, semi-formal, or informal)
                      </div>
                      <div>
                        <strong>Task 2:</strong> Write an essay on general interest topic
                      </div>
                      <div>
                        <strong>Word Count:</strong> Task 1 (150 words), Task 2 (250 words)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-900">Reading Test Differences</h3>
                <p className="text-gray-700 mb-4">
                  The Reading section also varies significantly between the two test types, reflecting different purposes and contexts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">Academic Reading</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 3 long academic passages</li>
                      <li>• Taken from journals, books, magazines</li>
                      <li>• Complex academic vocabulary</li>
                      <li>• University-level difficulty</li>
                      <li>• Scientific and technical topics</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-3 text-orange-800">General Training Reading</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 3 sections with different text types</li>
                      <li>• Advertisements, notices, workplace documents</li>
                      <li>• Everyday vocabulary</li>
                      <li>• Practical and social contexts</li>
                      <li>• Work and immigration topics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Which Test Should You Choose?</h3>
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Choose IELTS Academic if:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• You want to study at undergraduate or postgraduate level</li>
                      <li>• You're applying for university admission</li>
                      <li>• You need to register with professional bodies</li>
                      <li>• You're seeking academic qualification recognition</li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Choose IELTS General Training if:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• You're migrating to Australia, Canada, New Zealand, or UK</li>
                      <li>• You want to work or train in an English-speaking country</li>
                      <li>• You're applying for secondary education</li>
                      <li>• You need it for visa or immigration purposes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Section</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Number of Questions/Tasks</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Time Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Listening</td>
                      <td className="border border-gray-300 px-4 py-2">40 questions</td>
                      <td className="border border-gray-300 px-4 py-2">About 30 minutes (+10 minutes for paper-based test)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Reading</td>
                      <td className="border border-gray-300 px-4 py-2">40 questions</td>
                      <td className="border border-gray-300 px-4 py-2">60 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Writing</td>
                      <td className="border border-gray-300 px-4 py-2">2 tasks</td>
                      <td className="border border-gray-300 px-4 py-2">60 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Speaking</td>
                      <td className="border border-gray-300 px-4 py-2">3 parts</td>
                      <td className="border border-gray-300 px-4 py-2">11–14 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">What are the Major Differences between Academic and General IELTS?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-900">IELTS General Training</h3>
                  <p className="text-gray-700">
                    For people who want to live and work in an English-speaking country. It tests how well they can use English in everyday life, like talking to others, reading signs, and writing simple messages.
                  </p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">IELTS Academic</h3>
                  <p className="text-gray-700">
                    For students who want to study in a university abroad. It checks if they can understand and use English for learning, like writing essays, reading textbooks, and listening to lectures.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">IELTS Writing Test</h2>
              <p className="text-gray-700 mb-6">The IELTS Writing test has two tasks that you must complete.</p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IELTS Academic Writing</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Task 1:</strong> You will see a chart, graph, diagram, map, or process. You must write at least 150 words to explain the information in a formal way.</li>
                <li><strong>Task 2:</strong> You will write an essay (at least 250 words) on a given topic. The question may ask for your opinion, discussion of two different views, or analysis of a problem.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IELTS General Training Writing</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Task 1:</strong> You will write a letter based on a given situation. It may be formal (e.g., request, complaint, recommendation) or informal (e.g., an invitation to a friend).</li>
                <li><strong>Task 2:</strong> The essay task is the same as the Academic test but with more general topics. You must write in a formal style and give examples.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">IELTS Reading Test</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IELTS Academic Reading</h3>
              <p className="text-gray-700 mb-4">The IELTS academic reading test has three sections, and each section has one long passage.</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>The passages come from books, magazines, and journals.</li>
                <li>The language used is more complex, similar to what students read in universities.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IELTS General Training Reading</h3>
              <p className="text-gray-700 mb-4">The IELTS general reading practice test has three sections with different types of texts.</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Section 1 has short texts, like notices and advertisements</li>
                <li>Section 2 has texts related to work, like job descriptions and company policies</li>
                <li>Section 3 has one long text on a general topic</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Conclusion</h2>
              <p className="text-gray-700 mb-6">
                Both IELTS tests check your English ability in Reading, Writing, Listening, and Speaking. IELTS scores range from 1 to 9 and a higher score improves your chances of studying or working in top institutions. Choose the right test based on your goals - Academic for university study, General Training for work and immigration.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-yellow-900">Important Note</h3>
                <p className="text-gray-700">
                  Make sure to check with your target institution or immigration office about which IELTS test they accept before registering for the exam.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">What is the IELTS academic fee in Pakistan?</h3>
                  <p className="text-gray-700">The IELTS academic fee in Pakistan is approximately PKR 65,000 to PKR 70,000, depending on the test center and location.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">How can I take the IELTS academic practice test?</h3>
                  <p className="text-gray-700">You can take IELTS academic practice tests through the official IELTS website, Cambridge English practice materials, or through authorized test preparation centers.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">What is the difference between academic and general IELTS?</h3>
                  <p className="text-gray-700">The main difference is in the Reading and Writing sections. Academic IELTS is for university study with complex academic texts, while General Training is for work and immigration with everyday English topics.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">What is the general IELTS listening score?</h3>
                  <p className="text-gray-700">The listening section is the same for both Academic and General Training IELTS, scored from 1 to 9 bands based on correct answers out of 40 questions.</p>
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
                  <li><a href="#test-format" className="text-blue-600 hover:underline">Test Format</a></li>
                  <li><a href="#major-differences" className="text-blue-600 hover:underline">Major Differences</a></li>
                  <li><a href="#writing-test" className="text-blue-600 hover:underline">Writing Test</a></li>
                  <li><a href="#reading-test" className="text-blue-600 hover:underline">Reading Test</a></li>
                  <li><a href="#faqs" className="text-blue-600 hover:underline">FAQs</a></li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">Quick Facts</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Test Duration: 2 hours 45 minutes</li>
                  <li>• Score Range: 1-9 bands</li>
                  <li>• Validity: 2 years</li>
                  <li>• Test Centers: Available worldwide</li>
                  <li>• Results: Available after 13 days</li>
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