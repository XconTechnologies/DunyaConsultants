import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/blog/ContactForm";
import ContactSection from "@/components/blog/ContactSection";

export default function ComparisonEducationSystemPakistanUK() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-gradient-to-r from-[#1D50C9] to-[#1845B3]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D50C9]/80 to-[#1845B3]/80" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-bold mb-4">Differences Between UK and Pakistan Education Systems</h1>
            <p className="text-2xl">Comprehensive Comparison & Analysis</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-none" style={{ width: '1440px', margin: '0 auto' }}>
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="mb-8">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Education is very important for the progress of a country. Good education helps 
                    a country to grow and flourish. When more people can read and write, the country 
                    becomes richer and stronger. Educated individuals help build strong nations by 
                    working in fields like politics, engineering, medicine, business, and more.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mt-4">
                    For parents as well as students, understanding education system differences can 
                    be difficult, especially when comparing different countries. Today, we will 
                    discuss differences between UK and Pakistan education systems. The United Kingdom 
                    is one of the best and most respected in the world.
                  </p>
                </div>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    Education System Comparison of Pakistan & UK
                  </h2>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <p className="text-lg text-gray-700">
                      Pakistan's education system has three main levels: elementary (grades one to eight), 
                      secondary (grades nine to twelve), and higher education (after grade twelve). 
                      In the United Kingdom, education starts with the Early Years Foundation Stage (EYFS), 
                      which begins at age four in Reception class.
                    </p>
                  </div>
                  <p className="text-lg text-gray-700">
                    Let's discuss about UK vs Pakistan education system below:
                  </p>
                </section>

                <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    Primary and Elementary Education
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-#1565c0 mb-3">🇵🇰 Pakistan</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Children start at age 5-6 years</li>
                        <li>• Later start in rural areas</li>
                        <li>• Duration: 8 years (grades 1-8)</li>
                        <li>• Government and private schools</li>
                        <li>• Provincial control</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-#1565c0 mb-3">🇬🇧 United Kingdom</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Children start at age 4 years</li>
                        <li>• Reception class (age 4-5)</li>
                        <li>• Key Stage 1 (ages 5-6)</li>
                        <li>• Key Stage 2 (ages 7-11)</li>
                        <li>• Scotland: 7 years primary</li>
                        <li>• England: 6 years + middle school</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mt-6">
                    One of the major UK study benefits is that children begin school earlier, at age four, 
                    but starting at age five is not compulsory everywhere. In Pakistan, children usually 
                    start primary or elementary school at the age of five or six, with some rural areas 
                    starting even later.
                  </p>
                </section>

                <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    Secondary Education
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-#1565c0 mb-3">🇵🇰 Pakistan</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Duration: 4 years (grades 9-12)</li>
                        <li>• Government schools and colleges</li>
                        <li>• Provincial control</li>
                        <li>• Education not compulsory</li>
                        <li>• Limited resources in state schools</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-#1565c0 mb-3">🇬🇧 United Kingdom</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ages 12-16 or 12-17</li>
                        <li>• A-levels completed by age 18</li>
                        <li>• Mandatory education (ages 14-16)</li>
                        <li>• Better resourced curriculum</li>
                        <li>• More comprehensive resources</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mt-6">
                    In Pakistan, the duration of secondary education is around four years, from grades 9 to 12. 
                    It is provided in government schools and colleges across all provinces. In the UK, secondary 
                    education is for people of 12-16 or 12-17 years old, with students usually completing A-levels 
                    by age 18.
                  </p>
                </section>

                <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    Higher Education
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-#1565c0 mb-3">🇵🇰 Pakistan</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Begins after grade 12</li>
                        <li>• Colleges and universities</li>
                        <li>• Provincial government control</li>
                        <li>• Higher Education Commission oversight</li>
                        <li>• Various degree durations</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-#1565c0 mb-3">🇬🇧 United Kingdom</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• After secondary education</li>
                        <li>• Universities and professional colleges</li>
                        <li>• England: 3 years full-time degree</li>
                        <li>• Scotland: 4 years Honors degree</li>
                        <li>• Part-time: around 5 years</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mt-6">
                    In Pakistan, higher education begins after grade 12, in colleges as well as universities 
                    managed by the provincial government and the Higher Education Commission. Similarly, in the UK, 
                    students enter universities or professional colleges after secondary education.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    Key Differences Overview
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Aspect</th>
                          <th className="border border-gray-300 p-3 text-left">Pakistan</th>
                          <th className="border border-gray-300 p-3 text-left">United Kingdom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Starting Age</td>
                          <td className="border border-gray-300 p-3">5-6 years</td>
                          <td className="border border-gray-300 p-3">4 years (Reception)</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 p-3 font-medium">Compulsory Education</td>
                          <td className="border border-gray-300 p-3">Not compulsory</td>
                          <td className="border border-gray-300 p-3">Ages 14-16 mandatory</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Academic Calendar</td>
                          <td className="border border-gray-300 p-3">April to March</td>
                          <td className="border border-gray-300 p-3">September to August</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 p-3 font-medium">Resource Availability</td>
                          <td className="border border-gray-300 p-3">Limited in public schools</td>
                          <td className="border border-gray-300 p-3">Well-resourced curriculum</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Degree Duration</td>
                          <td className="border border-gray-300 p-3">Varies by program</td>
                          <td className="border border-gray-300 p-3">3 years (England), 4 years (Scotland)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    Academic Calendar Comparison
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-#1565c0 mb-3">Pakistan Academic Year</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Duration:</strong> April to March</li>
                        <li>• <strong>Exception:</strong> Grades 11-12 (September to June)</li>
                        <li>• <strong>Summer Break:</strong> May-August</li>
                        <li>• <strong>Winter Break:</strong> December-January</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold text-#1565c0 mb-3">UK Academic Year</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Duration:</strong> September to August</li>
                        <li>• <strong>Terms:</strong> Autumn, Spring, Summer</li>
                        <li>• <strong>Summer Break:</strong> July-August</li>
                        <li>• <strong>Christmas Break:</strong> December-January</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    Challenges in Pakistan Education System
                  </h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Major Challenges:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Limited school accessibility</li>
                          <li>• Poor public education quality</li>
                          <li>• Insufficient teacher training</li>
                          <li>• Lack of resources</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Statistics:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Literacy rate: 58.9% (Relief Web)</li>
                          <li>• Rural-urban education gap</li>
                          <li>• Gender disparity in education</li>
                          <li>• Infrastructure limitations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    FAQs
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        How can I Study in UK from Pakistan?
                      </h3>
                      <p className="text-gray-700">
                        To study there, you need to meet UK university admission requirements Pakistan. 
                        This requires an offer from a UK university, English language proof, etc.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        What is UK academic calendar vs Pakistan?
                      </h3>
                      <p className="text-gray-700">
                        The UK academic year is from September to August with three terms: Autumn, Spring, 
                        and Summer. In Pakistan, it is April to March, except for grades 11 and 12, which 
                        follow September to June.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        What are Pakistan education challenges?
                      </h3>
                      <p className="text-gray-700">
                        Pakistan's education system has many challenges. Schools are not easily accessible, 
                        and public education quality is often poor. Teachers lack proper training and resources.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Is the UK education structure better than Pakistan?
                      </h3>
                      <p className="text-gray-700">
                        The UK education system is often seen as better than Pakistan's, but both systems 
                        have differences. The quality of education can vary based on the school and the student.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 #1845B3 pl-4">
                    Conclusion
                  </h2>
                  <p className="text-lg text-gray-700">
                    Every education system whether the UK or Pakistani has its own strengths. The UK education 
                    reforms focus on specific subjects which is great for students who want to specialize. 
                    The Pakistan education policies is more structured but relies a lot on exams. Choosing 
                    the best system depends on what works for the student, their goals, as well as the kind 
                    of learning environment they prefer. Understanding these differences between UK and Pakistan 
                    education systems can help you pick the right system.
                  </p>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <ContactForm />
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">System Comparison</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pakistan Starting Age:</span>
                      <span className="font-medium text-gray-900">5-6 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">UK Starting Age:</span>
                      <span className="font-medium text-gray-900">4 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pakistan Literacy:</span>
                      <span className="font-medium text-gray-900">58.9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">UK Compulsory:</span>
                      <span className="font-medium text-gray-900">Ages 14-16</span>
                    </div>
                  </div>
                </div>
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