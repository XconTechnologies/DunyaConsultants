import React from 'react';
import { Calendar, Clock, User, FileText, GraduationCap, CheckCircle, Users, AlertCircle, BookOpen } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function BangorUniversityAcceptanceRate() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                University Guide
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              A Complete Guide to Bangor University UK
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to Bangor University admission requirements, acceptance rates, application process, and everything Pakistani students need to know.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 28, 2025</span>
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

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you plan to study in the United Kingdom, finding the right university is very important. Bangor University is included in the top ten universities in the UK and is known for providing high-quality education to international students. It has around twenty-three academic schools grouped into five colleges.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The university was created in 1884 as the University College of North Wales and Bangor university acceptance rate is quite good. Today, it has more than ten thousand students from approximately eighty countries.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You can apply for admission through the Bangor application portal or UCAS for undergraduate courses. It provides a wide range of highly-rated programs in humanities, arts, and sciences. Moreover, Dunya Consultants is the official representative of Bangor University in Pakistan and will help you get admission there successfully.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#entry-requirements" className="hover:text-blue-600">Entry Requirements for International Students</a></li>
                  <li><a href="#english-requirements" className="hover:text-blue-600">English Language Requirements</a></li>
                  <li><a href="#admission-process" className="hover:text-blue-600">Step-by-Step Admission Process</a></li>
                  <li><a href="#admission-deadlines" className="hover:text-blue-600">Admission Deadlines 2024-2025</a></li>
                  <li><a href="#dunya-representative" className="hover:text-blue-600">Dunya Consultants - Official Representative</a></li>
                  <li><a href="#faqs" className="hover:text-blue-600">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* University Overview */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Bangor University at a Glance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Founded:</strong> 1884</p>
                    <p className="text-gray-700 mb-2"><strong>Students:</strong> 10,000+</p>
                    <p className="text-gray-700 mb-2"><strong>International Students:</strong> From 80+ countries</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Academic Schools:</strong> 23 schools</p>
                    <p className="text-gray-700 mb-2"><strong>Colleges:</strong> 5 main colleges</p>
                    <p className="text-gray-700"><strong>UK Ranking:</strong> Top 10 universities</p>
                  </div>
                </div>
              </div>

              {/* Entry Requirements Section */}
              <section id="entry-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Entry Requirements for International Students</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  International students who are waiting for Bangor University admissions to study undergraduate or graduate courses should meet specific Bangor University entry requirements as given below:
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      International Year Zero Program
                    </h3>
                    <p className="text-gray-700">Students need to have completed Standard XII with an average of fifty percent or above, or at least forty-five percent in some cases.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      International Year 1 Program
                    </h3>
                    <p className="text-gray-700">Students must have scored a minimum of fifty-five percent in the Standard XII certificate from a recognized state or central board.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Bachelor's or Undergraduate Degrees
                    </h3>
                    <p className="text-gray-700">Students need a minimum of sixty-five percent in all state and central boards.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Master's or Postgraduate Degrees
                    </h3>
                    <p className="text-gray-700">You should have a minimum of a 2:2 degree, 50-55 percent, or a 6.0 GPA.</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Study Gap Requirements
                    </h3>
                    <p className="text-gray-700">Students with a study gap of around three years or more must also provide at least two recommendation letters, one from an employer and one from an academic reference.</p>
                  </div>
                </div>
              </section>

              {/* English Requirements Section */}
              <section id="english-requirements" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">English Language Requirements for Bangor University Pakistan</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  International students applying to Bangor University should check English requirements from Bangor university application portal. You will need an IELTS score of 5.5 for undergraduate courses and 6.0 for bachelor's programs.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  If the required score is not met, students can take a Pre-sessional English course. A six-week course is provided for IELTS scores below 5.0, and a twelve-week course is mandatory for scores below 4.5. These English courses help improve the English language before starting the main degree.
                </p>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">English Proficiency Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Undergraduate Programs:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• IELTS: 5.5 overall</li>
                        <li>• TOEFL: 70-80</li>
                        <li>• PTE: 51-59</li>
                        <li>• Duolingo: 95-105</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Postgraduate Programs:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• IELTS: 6.0 overall</li>
                        <li>• TOEFL: 80-90</li>
                        <li>• PTE: 59-62</li>
                        <li>• Duolingo: 105-115</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Pre-sessional English Courses</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>6-week course:</strong> For IELTS scores below 5.0</p>
                    <p><strong>12-week course:</strong> For IELTS scores below 4.5</p>
                    <p><strong>Course fees:</strong> £1,500 - £3,000 depending on duration</p>
                  </div>
                </div>
              </section>

              {/* Admission Process Section */}
              <section id="admission-process" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Step-by-Step Bangor University Admissions Process</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  International students can do Bangor University online registration through its official website or UCAS. Here is the step-by-step guide for you to apply:
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">1</div>
                      <h3 className="text-lg font-semibold text-gray-800">Create a UCAS Account</h3>
                    </div>
                    <p className="text-gray-700">Sign up on the official UCAS website and check Bangor Uni term dates.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">2</div>
                      <h3 className="text-lg font-semibold text-gray-800">Choose a Course</h3>
                    </div>
                    <p className="text-gray-700">After checking Bangor University term dates 2025, Select your desired program from Bangor University's courses.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">3</div>
                      <h3 className="text-lg font-semibold text-gray-800">Upload Documents</h3>
                    </div>
                    <p className="text-gray-700">Submit all the required documents to complete your profile.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">4</div>
                      <h3 className="text-lg font-semibold text-gray-800">Write a Personal Statement</h3>
                    </div>
                    <p className="text-gray-700">Provide a SOP about yourself as well as your goals.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">5</div>
                      <h3 className="text-lg font-semibold text-gray-800">Review Your Application</h3>
                    </div>
                    <p className="text-gray-700">Double-check all details for accuracy.</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">6</div>
                      <h3 className="text-lg font-semibold text-gray-800">Pay the Application Fee</h3>
                    </div>
                    <p className="text-gray-700">Submit the non-refundable fee to finalize your application.</p>
                  </div>
                </div>
              </section>

              {/* Admission Deadlines Section */}
              <section id="admission-deadlines" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Bangor University Admissions Deadlines 2024-2025</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Bangor University has different application deadlines depending on the course. For undergraduate admissions through UCAS, the early application deadline is January 31, 2025. Late applications can be submitted until June 30, 2025, if there are still places available.
                </p>

                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Undergraduate Programs</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Early Deadline:</strong> January 31, 2025</p>
                        <p className="text-gray-700 mb-2"><strong>Late Applications:</strong> Until June 30, 2025</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Medicine/Dentistry:</strong> October 16, 2024</p>
                        <p className="text-gray-700"><strong>Veterinary Science:</strong> October 16, 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Postgraduate Programs</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-700 mb-2"><strong>September 2024 Intake:</strong> End of June</p>
                        <p className="text-gray-700"><strong>January 2025 Intake:</strong> End of October</p>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-2"><strong>Recommendation:</strong> Apply early to secure admission</p>
                        <p className="text-gray-700"><strong>Rolling Admissions:</strong> Available for most programs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Dunya Representative Section */}
              <section id="dunya-representative" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Dunya Consultants – Official Bangor University Representative in Pakistan</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Proudly, Dunya Consultants is the official representative of Bangor University UK in Pakistan. Our experts are here to provide advice to students who are thinking of studying at this popular university. We help you throughout the process, from selecting the right program to submitting your application.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In addition, our team make sure you meet all Bangor university entry requirements and deadlines without any stress. With our guidance, you can properly prepare for the best academic experience at Bangor University.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Services We Provide</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Course selection guidance</li>
                        <li>• Application assistance</li>
                        <li>• Document preparation</li>
                        <li>• English test preparation</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Visa application support</li>
                        <li>• Scholarship information</li>
                        <li>• Pre-departure briefing</li>
                        <li>• Post-arrival support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Is Duolingo accepted at Bangor University?</h3>
                    <p className="text-gray-700">Yes, Bangor University accepts Duolingo English Test with a minimum score of 95-115 depending on the program level.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What is the acceptance rate for Bangor University?</h3>
                    <p className="text-gray-700">Bangor University has a good acceptance rate of approximately 70-80% for international students, making it accessible for qualified Pakistani students.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What is the PTE score for Bangor University?</h3>
                    <p className="text-gray-700">Bangor University accepts PTE Academic with a minimum score of 51-59 for undergraduate programs and 59-62 for postgraduate programs.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: What GPA do you need for Bangor University?</h3>
                    <p className="text-gray-700">For postgraduate programs, you need a minimum GPA of 6.0 (equivalent to 2:2 degree or 50-55% marks). For undergraduate programs, 65% marks are required.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: How much are the tuition fees at Bangor University?</h3>
                    <p className="text-gray-700">Tuition fees for international students range from £14,500-£18,000 per year for undergraduate programs and £15,500-£20,000 for postgraduate programs.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can Pakistani students get scholarships at Bangor University?</h3>
                    <p className="text-gray-700">Yes, Bangor University offers various scholarships for international students, including merit-based scholarships up to £2,000-£5,000 per year.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bangor University is ranked among the top ten universities in the United Kingdom. It is a welcoming, friendly, and student-focused university that provides excellent education opportunities for international students from Pakistan.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  With Dunya Consultants as your official representative, you can ensure a smooth application process and successful admission to Bangor University. Our expert team will guide you through every step of your journey to studying in the UK.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Ready to Apply to Bangor University?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants, the official representative of Bangor University in Pakistan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call Now: +92 304 1110947
                  </a>
                  <a 
                    href="mailto:info@dunyaconsultants.com" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-medium">1884</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">10,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">International:</span>
                    <span className="font-medium">80+ countries</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Acceptance Rate:</span>
                    <span className="font-medium text-green-600">70-80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">UK Ranking:</span>
                    <span className="font-medium">Top 10</span>
                  </div>
                </div>
              </div>

              {/* Entry Requirements */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                  Entry Requirements
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Undergraduate</p>
                    <p className="text-gray-600">65% marks + IELTS 5.5</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Postgraduate</p>
                    <p className="text-gray-600">6.0 GPA + IELTS 6.0</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-medium">Foundation</p>
                    <p className="text-gray-600">50% marks + IELTS 5.0</p>
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