import Navigation from '@/components/navigation';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Footer from '@/components/footer';

export default function IELTSAcceptability2025() {
  return (
    <div className="min-h-screen bg-gray-50">
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">IELTS Acceptability in 2025</h1>
          <p className="text-2xl opacity-90">Which Countries & Universities Recognize It?</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Are you willing to go abroad this year? If yes, then you might need to take the IELTS test. IELTS Academic is the best option for students who want to study in another country. This test is accepted in 140 countries and is required for studying, working, and migrating to recognized English speaking countries like Australia, Canada, the UK, the USA, New Zealand, and Ireland. IELTS (International English Language Testing System) is a well-known English test for people whose first language is not English.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                All IELTS accepted countries have different score requirements based on the type of visa. More than 11,000 institutions worldwide, including universities, companies, and government offices, accept IELTS. Because of its strong reputation, numerous people take this test to achieve their study or work goals abroad. Now, let's look at the top countries where IELTS is accepted.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Which Countries Accept IELTS?</h2>
              <p className="text-lg text-gray-700 mb-6">
                If you are wondering that IELTS is accepted in which countries, you should know that more than 10,000 institutions in 140 countries recognize this test. However, most people prefer countries like Australia, Ireland, the UK, Canada, the USA, and New Zealand. Each IELTS country list has its own rules and score requirements.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 text-white rounded-full text-3xl font-bold mb-4">140</div>
                <p className="text-gray-700 font-medium">Countries Accept IELTS</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-900 flex items-center">
                  <span className="mr-3">🇬🇧</span> United Kingdom
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  The UK has been welcoming international students for a long time. Universities and colleges have UK IELTS band requirements 2025 for admission, and IELTS is also needed for visa applications.
                </p>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-red-800 mb-3">Top universities in the UK that accept IELTS:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• University of Oxford</li>
                    <li>• London School of Economics and Political Science (LSE)</li>
                    <li>• University College London (UCL)</li>
                    <li>• University of Cambridge</li>
                    <li>• Imperial College London</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                  <span className="mr-3">🇺🇸</span> United States
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  The USA is one of the most popular countries for students and workers. Many universities accept IELTS scores for admission.
                </p>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-blue-800 mb-3">Top universities in the USA that accept IELTS:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Stanford University</li>
                    <li>• Harvard University</li>
                    <li>• Massachusetts Institute of Technology (MIT)</li>
                    <li>• Yale University</li>
                    <li>• University of California, Berkeley</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-900 flex items-center">
                  <span className="mr-3">🇦🇺</span> Australia
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Australia is a great place to study and work. Universities require IELTS scores for admissions, and IELTS is also needed for migration.
                </p>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-green-800 mb-3">Top universities in Australia that accept IELTS:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• University of Queensland</li>
                    <li>• University of New South Wales (UNSW)</li>
                    <li>• Australian National University</li>
                    <li>• University of Melbourne</li>
                    <li>• University of Sydney</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-purple-900 flex items-center">
                  <span className="mr-3">🇪🇺</span> Europe
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Many universities in Europe do not have strict IELTS requirements. Most accept a score between 6.0 and 6.5. Some universities, like ISC Paris, even allow admission without an IELTS score.
                </p>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-purple-800 mb-3">Top universities in Europe that accept IELTS:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• University of Montpellier</li>
                    <li>• Sorbonne University</li>
                    <li>• Sciences Po</li>
                    <li>• Paris Institute of Political Studies</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-orange-900 flex items-center">
                  <span className="mr-3">🇳🇿</span> New Zealand
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  New Zealand is a beautiful country with great education options. IELTS is required for university admission and for immigration, especially for skilled workers.
                </p>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-orange-800 mb-3">Top universities in New Zealand that accept IELTS:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• University of Otago</li>
                    <li>• Victoria University of Wellington</li>
                    <li>• University of Auckland</li>
                    <li>• University of Canterbury</li>
                    <li>• Auckland University of Technology</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-900 flex items-center">
                  <span className="mr-3">🇨🇦</span> Canada
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Canada is known for its excellent education system and friendly immigration policies. IELTS is required for university admissions and visas.
                </p>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-red-800 mb-3">Top universities in Canada that accept IELTS:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• McGill University</li>
                    <li>• University of British Columbia</li>
                    <li>• University of Toronto</li>
                    <li>• University of Waterloo</li>
                    <li>• University of Montreal</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-900 flex items-center">
                  <span className="mr-3">🇮🇪</span> Ireland
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  To study in Ireland, you need an IELTS score. For undergraduate courses, the required score is between 5.5 and 6.0. For postgraduate courses, it is between 6.0 and 6.5. Most universities require an overall score of 6.5, with at least 6.0 in each section.
                </p>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-green-800 mb-3">Top universities in Ireland that accept IELTS:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Waterford Institute of Technology</li>
                    <li>• Trinity College Dublin</li>
                    <li>• University College Cork</li>
                    <li>• College Limerick</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Which country accepts 5 bands for IELTS?</h3>
                  <p className="text-gray-700">Canada, US, UK, and Australia accept at least a 5.0 score in the IELTS General Training test. Different countries have their own minimum IELTS score requirements.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">IELTS exam is for which country?</h3>
                  <p className="text-gray-700">Many countries, like Canada, Australia, United States, the UK, and New Zealand accept IELTS for study and immigration purposes.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">What is the IELTS band requirement for all countries?</h3>
                  <p className="text-gray-700">IELTS band requirements vary by country and purpose. Generally, most countries require a minimum of 5.5-6.0 for undergraduate studies and 6.0-6.5 for postgraduate studies.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Which country accepts overall 6 bands in 2025?</h3>
                  <p className="text-gray-700">Most countries including UK, Canada, Australia, and New Zealand accept overall 6 bands for various study and immigration programs in 2025.</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="text-lg leading-relaxed">
                The IELTS test checks how well you understand and use English. It is mainly for students from non-English-speaking countries who want to study in English-speaking countries. The test measures four skills: listening, reading, speaking, and writing. Many universities in IELTS accepted countries like the UK, Australia, New Zealand, the USA, and Canada require this for admission. These countries accept IELTS scores for both study and immigration. If you plan to study abroad, IELTS is an important test to prove your English skills.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <ContactForm />
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">IELTS Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Countries Accept:</span>
                    <span className="font-medium">140+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Institutions:</span>
                    <span className="font-medium">11,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Test Skills:</span>
                    <span className="font-medium">4 (L, R, W, S)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Score Range:</span>
                    <span className="font-medium">0-9 bands</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Popular Destinations</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">🇬🇧 United Kingdom</span>
                    <span className="text-green-600">6.0-7.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">🇦🇺 Australia</span>
                    <span className="text-green-600">6.0-7.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">🇨🇦 Canada</span>
                    <span className="text-green-600">6.0-7.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">🇺🇸 United States</span>
                    <span className="text-green-600">6.0-7.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">🇳🇿 New Zealand</span>
                    <span className="text-green-600">6.0-6.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection 
        title="Need Help with IELTS Requirements?"
        description="Our expert counselors can help you understand IELTS requirements for your target country and university. Get personalized guidance for your study abroad journey."
      />

      <Footer />
    </div>
  );
    </div>
  );
}