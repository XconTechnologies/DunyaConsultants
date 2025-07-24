import Navigation from '@/components/navigation';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Footer from '@/components/footer';

export default function TeessideUniversityPartner() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#124FD3] via-[#124FD3] to-[#0d3db8] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Teesside University – A Trusted Partner of Dunya Consultants</h1>
          <p className="text-2xl opacity-90">Discover Quality Education at Affordable Costs in Middlesbrough, UK</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Teesside University is a modern as well as welcoming university located in Middlesbrough, North East England. It has invested around £280 million in its campus and plans to continue improving until 2027. The university is quite popular for supporting students from different backgrounds and helping them to continue higher education. This Middlesbrough uni is located in the middle of Tees Valley and provides the best student experience. The city has something for everyone, including theatre, music, arts, and sports.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Moreover, Teesside University is also a proud partner of Dunya Consultants that work together to help students achieve their academic dreams. The university provides modern classrooms, high-quality facilities, and a friendly environment where students can learn and grow. With the best teaching methods, career-focused courses, and strong student support, Teesside University is a great option for those looking to study in the UK.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Teesside University Ranking in UK</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-blue-800 mb-3">Complete University Guide 2024</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 92nd overall ranking</li>
                    <li>• 27th for student satisfaction</li>
                    <li>• 51st for graduate prospects</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-blue-800 mb-3">US News Best Global Universities</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 94th in the UK</li>
                    <li>• 558th in Europe</li>
                    <li>• 1693rd in the world</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-blue-800 mb-3">Complete University Guide 2025</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100th</div>
                    <div className="text-sm text-gray-600">Overall</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">44th</div>
                    <div className="text-sm text-gray-600">Student Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">61st</div>
                    <div className="text-sm text-gray-600">Graduate Prospects</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-green-900">Teesside University Masters Courses and Fees</h2>
              <p className="text-lg text-gray-700 mb-6">
                Teesside University in the UK provides 2-year Master's programs with Advanced Practice, which include an internship, research work, as well as a study abroad experience. These programs help students gain real-world experience and also get a summer break to gain extra work experience, or relax.
              </p>
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="font-semibold text-green-800 mb-3">Master's Program Fees</h3>
                <p className="text-gray-700">The one-year Teesside University fees to study postgraduate courses or Master's program are around <strong>£10,000</strong>.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-green-800 mb-2">Technology & Science</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• MSc Computer Science and IT</li>
                    <li>• MSc Electronic and Electrical Engineering</li>
                    <li>• MSc Biology and Life Sciences</li>
                    <li>• MSc Food Science and Technology</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-green-800 mb-2">Business & Health</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• MSc Financial Management and Accounting</li>
                    <li>• MBA</li>
                    <li>• Master of Public Health</li>
                    <li>• MA Education</li>
                    <li>• MSc Health Care Management</li>
                    <li>• Nutrition and Dietetics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-purple-900">Why Choose Teesside University for Study?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-gray-700">Quality education at a lower cost compared to many UK universities.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-gray-700">Students need to pay less initial deposit and show less financial statements.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-gray-700">Helps students gain skills and experience for good job opportunities.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <p className="text-gray-700">Special services to help students adjust to life and studies in the UK.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</div>
                    <p className="text-gray-700">Up-to-date programs in health sciences, business, engineering, and technology.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</div>
                    <p className="text-gray-700">Students from different countries create a multicultural learning environment.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">7</div>
                    <p className="text-gray-700">Popular for excellent education and practical learning methods.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">8</div>
                    <p className="text-gray-700">Many clubs, events, and activities to make student life enjoyable.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Is Teesside University good?</h3>
                  <p className="text-gray-700">Yes, it is one of the best universities in the UK and received a Gold rating in all areas of the Teaching Excellence Framework (TEF) 2023.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">What is Teesside University acceptance rate?</h3>
                  <p className="text-gray-700">Teesside University in Middlesbrough, England, accepts about 31% of applicants and getting admission can be somewhat competitive.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Where is Teesside University located?</h3>
                  <p className="text-gray-700">Teesside University is located at Campus Heart, Southfield Road, Middlesbrough, TS1 3BX, UK.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">What are Teesside University tuition fees for international students?</h3>
                  <p className="text-gray-700">International students will need to pay around £17,000 per year for a full-time undergraduate degree.</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="text-lg leading-relaxed">
                Teesside University is a partner university of Dunya Consultants and focuses on research, innovation, as well as strong connections with businesses and professionals. With numerous Teesside University courses available, you can find the one according to your interests. The university is famous for its best teaching and modern facilities. There are many part-time job opportunities on campus and with local companies, and the university helps students find these jobs easily.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <ContactForm />
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">University Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Middlesbrough, UK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-medium">1992</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Campus Investment:</span>
                    <span className="font-medium">£280 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Acceptance Rate:</span>
                    <span className="font-medium">31%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">TEF Rating:</span>
                    <span className="font-medium">Gold</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Choose Teesside?</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Affordable tuition fees</li>
                  <li>• Low initial deposit</li>
                  <li>• Modern facilities</li>
                  <li>• Strong industry connections</li>
                  <li>• Multicultural environment</li>
                  <li>• Part-time job opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection 
        title="Interested in Teesside University?"
        description="As a trusted partner of Dunya Consultants, we can help you with your Teesside University application. Contact our expert counselors for personalized guidance."
      />

      <Footer />
    </div>
  );
}