import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, FileText, Target, Award, Globe, DollarSign, MessageCircle, Phone, Mail, Star, MapPin, Users, GraduationCap } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function AngliaRuskinUniversity() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                University Guides
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Anglia Ruskin University – A Trusted Partner of Dunya Consultants
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to Anglia Ruskin University, one of UK's leading institutions with 162 years of history and a trusted partnership with Dunya Consultants for Pakistani students.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>March 19, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>8 min read</span>
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
                  <strong>Anglia Ruskin University (ARU)</strong> is one of the most popular public universities located in East Anglia, UK, with a history of around 162 years. It was named "University of the Year" in 2023 for its innovative as well as student-friendly approach. Anglia University provides many courses in subjects like Finance, Acting, Accounting, Drama, Art, Computer Science, Architecture, Data Science, Education, Environment, Marketing, Medicine, Law, Music, and Nursing.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Moreover, the Anglia Ruskin University London focuses on helping students succeed and providing a great learning experience. It has also received a Gold award for teaching excellence. ARU college works closely with Dunya Consultants to guide and support Pakistani students in their journey to study in the United Kingdom. This partnership makes sure students receive the best advice and a smooth application process, making their dream of studying at ARU a reality.
                </p>
              </div>

              {/* University Highlights */}
              <section className="mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-6 h-6 text-blue-500 mr-2" />
                    ARU Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-700">University of the Year 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-gold-500 mr-2" />
                      <span className="text-gray-700">Gold Teaching Excellence Award</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-700">162 Years of History</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-gray-700">Multiple UK Campus Locations</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose ARU */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Why Choose Anglia Ruskin University to Study?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Anglia Ruskin University provides a strong combination of academic excellence as well as career opportunities. Being a trusted partner of Dunya Consultants, let's discuss below why you should study ARU College:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      number: "1",
                      text: "ARU has been awarded a Gold rating for the best teaching. It won Times Higher Education University of the Year 2023 for making a positive impact."
                    },
                    {
                      number: "2", 
                      text: "ARU supports students in every way to help them succeed. It provides flexible study options so students can balance education with personal life."
                    },
                    {
                      number: "3",
                      text: "ARU is ranked among the best universities in the UK and worldwide by Times Higher Education."
                    },
                    {
                      number: "4",
                      text: "Students learn through practical experiences; including internships, live projects, and online resources."
                    },
                    {
                      number: "5",
                      text: "Career help starts from day one and continues even after graduation. Strong partnerships with top companies provide internships and work experience."
                    },
                    {
                      number: "6",
                      text: "ARU graduates have high job success rates in their chosen fields."
                    }
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                        {reason.number}
                      </div>
                      <p className="text-gray-700">{reason.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ARU Rankings */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Anglia Ruskin University Ranking in UK
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Anglia Ruskin University London is one of the top universities in the UK and is recognized worldwide for its quality education.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">UK Rankings</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 115th in Times University Guide 2024</li>
                      <li>• 102nd in Guardian University Guide 2024</li>
                      <li>• Top 40 universities in UK (THE)</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Global Rankings</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 301-350 range globally (THE)</li>
                      <li>• #814 in US News Global Rankings</li>
                      <li>• 1412 out of 20,966 universities (CWUR)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These rankings highlight ARU's commitment to providing high-quality education and research opportunities.
                </p>
              </section>

              {/* Partnership with Dunya Consultants */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  How is Anglia Ruskin University London a Trusted Partner of Dunya Consultants?
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Anglia Ruskin University London is a trusted partner of Dunya Consultants that helps Pakistani students study in the UK with ease. This partnership makes sure students get quality education, career opportunities, and smooth admission support.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dunya Consultants guides students through the entire process, from applying to ARU College to getting their visas and scholarships. ARU provides job-focused courses and has strong links with industries, helping students find good career opportunities after graduation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through this partnership, students can also explore scholarship options to reduce study costs. With full support from Dunya Consultants, students can start their journey with confidence and without any stress.
                  </p>
                </div>

                {/* Partnership Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Admission Support</h4>
                    <p className="text-sm text-gray-600">Complete guidance through ARU application process</p>
                  </div>
                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Visa Assistance</h4>
                    <p className="text-sm text-gray-600">Expert help with UK student visa applications</p>
                  </div>
                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <DollarSign className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Scholarship Guidance</h4>
                    <p className="text-sm text-gray-600">Access to scholarship opportunities and funding</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Anglia Ruskin University provides specialized courses in land-based studies, animal sciences, and sports. It is famous for its best programs in arts, health, education, and social care, along with popular courses in psychology, engineering, and life sciences. ARU also has a large number of part-time undergraduate students who successfully secure jobs after their studies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As a trusted partner of Dunya Consultants, ARU provides Pakistani students with high quality education and career opportunities. Dunya Consultants helps students through the entire admission and visa process.
                </p>
              </section>

              {/* FAQs */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  FAQs
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What are ARU English language requirements?
                    </h3>
                    <p className="text-gray-700">
                      International students need a minimum IELTS score of 5.5, TOEFL iBT score of 72, or Pearson PTE Academic score of 59, with similar scores in each section.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      How can I get admission to Anglia Ruskin University London?
                    </h3>
                    <p className="text-gray-700">
                      To apply to Anglia Ruskin University (ARU) London, choose your course, submit your application online, and meet the academic and English language requirements for your chosen program.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply to Anglia Ruskin University?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants for your ARU application and UK student visa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+923041110947"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (+92) 304 1110947
                  </a>
                  <a
                    href="mailto:query@teamdunya.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
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
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-500" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-medium">1858 (162 years)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">Public University</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">East Anglia, UK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Teaching Award:</span>
                    <span className="font-medium">Gold Rating</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IELTS Requirement:</span>
                    <span className="font-medium">5.5 minimum</span>
                  </div>
                </div>
              </div>

              {/* Popular Courses */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Popular Courses
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Computer Science</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Business & Finance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Medicine & Nursing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Arts & Drama</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Engineering</span>
                  </li>
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