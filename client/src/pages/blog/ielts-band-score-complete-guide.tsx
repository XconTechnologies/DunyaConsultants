import Navigation from '@/components/navigation';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Footer from '@/components/footer';

export default function IELTSBandScoreGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Full-width Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#124FD3] via-[#124FD3] to-[#0d3db8] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">IELTS Band Score: Complete Guide</h1>
          <p className="text-2xl opacity-90">Understanding the Scoring System</p>
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
                  The IELTS (International English Language Testing System) is one of the most popular English tests accepted worldwide. It is needed for working, studying, or immigrating to countries like Canada, Australia, UK, and New Zealand. Students who want to study abroad must take the IELTS to prove their English skills.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-green-900">Key Information</h3>
                <p className="text-gray-700">
                  The IELTS test has four parts: Listening, Writing, Reading, and Speaking. Each part is scored separately, and you also get an overall IELTS score between 1 and 9. A higher IELTS band score increases your chances of getting into a good university.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Details for IELTS Band Score</h2>
              <p className="text-gray-700 mb-6">The IELTS band score details are as follows:</p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Band Level</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Skill Level</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">9</td>
                      <td className="border border-gray-300 px-4 py-2">Expert User</td>
                      <td className="border border-gray-300 px-4 py-2">Fully understands and speaks English fluently and correctly. Can use the language accurately in any situation.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">8</td>
                      <td className="border border-gray-300 px-4 py-2">Very Good User</td>
                      <td className="border border-gray-300 px-4 py-2">Speaks and understands English very well with only a few small mistakes. Can handle complex discussions.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">7</td>
                      <td className="border border-gray-300 px-4 py-2">Good User</td>
                      <td className="border border-gray-300 px-4 py-2">Uses English well but makes some mistakes. Can understand and communicate in most situations.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">6</td>
                      <td className="border border-gray-300 px-4 py-2">Competent User</td>
                      <td className="border border-gray-300 px-4 py-2">Can communicate effectively despite some errors. Understands fairly advanced language.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">5</td>
                      <td className="border border-gray-300 px-4 py-2">Modest User</td>
                      <td className="border border-gray-300 px-4 py-2">Understands basic English and can communicate in most situations but makes many mistakes.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">4</td>
                      <td className="border border-gray-300 px-4 py-2">Limited User</td>
                      <td className="border border-gray-300 px-4 py-2">Can only use simple English in familiar situations. Has trouble understanding clearly.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">3</td>
                      <td className="border border-gray-300 px-4 py-2">Extremely Limited User</td>
                      <td className="border border-gray-300 px-4 py-2">Can understand and communicate only basic ideas in very familiar situations.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">2</td>
                      <td className="border border-gray-300 px-4 py-2">Intermittent User</td>
                      <td className="border border-gray-300 px-4 py-2">Can only use a few words or short sentences to give basic information.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">1</td>
                      <td className="border border-gray-300 px-4 py-2">Non-User</td>
                      <td className="border border-gray-300 px-4 py-2">Cannot use English, except for maybe a few words.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">0</td>
                      <td className="border border-gray-300 px-4 py-2">Did Not Attempt Test</td>
                      <td className="border border-gray-300 px-4 py-2">No test was taken, so no score is available.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Calculate IELTS Score?</h2>
              <p className="text-gray-700 mb-6">
                The IELTS score calculator shows how good your English is. The scores include whole and half points. Each part of the test gets its own score. IELTS band score chart are easy to understand and follow a 9-band scale. The lowest score is 1, and the highest is 9.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IELTS Reading Scores</h3>
              <p className="text-gray-700 mb-4">
                The IELTS Reading test has 40 questions, and each correct answer gets one point. IELTS reading score are then converted into the IELTS 9-band scale, with IELTS academic reading score given in whole or half bands.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-700">
                  <strong>Important:</strong> Both Academic and General Training Reading tests follow the same scoring system, but the difficulty level differs. Academic Reading texts may have harder words and complex writing, while General Training Reading may require more correct answers to achieve the same band score.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IELTS Speaking Scores</h3>
              <p className="text-gray-700 mb-4">
                The IELTS passing score for Speaking is based on four key areas:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Fluency and Coherence:</strong> How smoothly and clearly you speak</li>
                <li><strong>Lexical Resource:</strong> The variety of words you use</li>
                <li><strong>Grammatical Range and Accuracy:</strong> How correctly you use grammar</li>
                <li><strong>Pronunciation:</strong> How well you pronounce words</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Each area is given an equal score, and the final Speaking band score is the average of these scores.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IELTS Writing Scores</h3>
              <p className="text-gray-700 mb-6">
                The IELTS Writing test is scored based on four criteria similar to Speaking:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Task Achievement/Response:</strong> How well you answer the question</li>
                <li><strong>Coherence and Cohesion:</strong> How well your ideas flow together</li>
                <li><strong>Lexical Resource:</strong> Your vocabulary range and accuracy</li>
                <li><strong>Grammatical Range and Accuracy:</strong> Your grammar skills</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-yellow-900">Score Calculation Formula</h3>
                <p className="text-gray-700">
                  Your overall IELTS band score is calculated by taking the average of your four individual scores (Listening, Reading, Writing, Speaking) and rounding to the nearest whole or half band.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">University Requirements by Band Score</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-900">Band 6.0-6.5</h3>
                  <p className="text-gray-700 mb-2">Undergraduate programs</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Most UK universities</li>
                    <li>• Australian universities</li>
                    <li>• Canadian colleges</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Band 7.0-7.5</h3>
                  <p className="text-gray-700 mb-2">Postgraduate programs</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Top UK universities</li>
                    <li>• US universities</li>
                    <li>• Professional programs</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Conclusion</h2>
              <p className="text-gray-700 mb-6">
                Understanding the IELTS band score system is crucial for your success. To succeed, set a target score and plan your study time wisely. A good IELTS score can open many opportunities for education and work abroad. Remember that consistent practice and proper preparation are key to achieving your desired band score.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">What is a good IELTS score?</h3>
                  <p className="text-gray-700">A good IELTS score depends on your goals. For undergraduate study, 6.0-6.5 is generally acceptable. For postgraduate programs and immigration, 7.0-7.5 is often required. Top universities may require 8.0 or higher.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">How IELTS score is calculated?</h3>
                  <p className="text-gray-700">Your overall IELTS band score is the average of your four individual scores (Listening, Reading, Writing, Speaking), rounded to the nearest whole or half band. Each section is scored from 1-9.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">How much IELTS score required for UK?</h3>
                  <p className="text-gray-700">For UK universities, you typically need 6.0-6.5 for undergraduate programs and 6.5-7.0 for postgraduate programs. Top universities like Oxford and Cambridge may require 7.5 or higher.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">What is the average band score for IELTS?</h3>
                  <p className="text-gray-700">The global average IELTS band score is around 6.0. However, Pakistani students typically score between 5.5-6.5, with many achieving 6.0-6.5 with proper preparation.</p>
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
                  <li><a href="#band-score-details" className="text-blue-600 hover:underline">Band Score Details</a></li>
                  <li><a href="#score-calculation" className="text-blue-600 hover:underline">Score Calculation</a></li>
                  <li><a href="#reading-scores" className="text-blue-600 hover:underline">Reading Scores</a></li>
                  <li><a href="#speaking-scores" className="text-blue-600 hover:underline">Speaking Scores</a></li>
                  <li><a href="#writing-scores" className="text-blue-600 hover:underline">Writing Scores</a></li>
                  <li><a href="#university-requirements" className="text-blue-600 hover:underline">University Requirements</a></li>
                  <li><a href="#faqs" className="text-blue-600 hover:underline">FAQs</a></li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-green-900">Score Improvement Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Practice all four skills daily</li>
                  <li>• Take mock tests regularly</li>
                  <li>• Focus on weak areas</li>
                  <li>• Learn academic vocabulary</li>
                  <li>• Get professional feedback</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">Test Information</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Test Duration: 2 hours 45 minutes</li>
                  <li>• Score Range: 1-9 bands</li>
                  <li>• Validity: 2 years</li>
                  <li>• Results: Available after 13 days</li>
                  <li>• Retake: No waiting period</li>
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