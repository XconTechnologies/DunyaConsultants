import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, FileText, Target, Award, Globe, DollarSign, MessageCircle, Phone, Mail, Star, MapPin, Users, GraduationCap, Building2, Briefcase, Flag, Heart } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function TurkeyBestChoicePakistaniStudents() {
  const universities = [
    "Atlas University", "Arel University", "Isik University", "Gelisim University",
    "Altinbas University", "Kultur University", "Beykoz University", "Beykent University",
    "Uskudar University", "Halic University", "Dogus University", "Aydin University",
    "Bahçeşehir University"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study in Turkey
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Why Turkey is Best Choice for Pakistani Students?
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover the benefits of studying in Turkey for Pakistani students - from affordable tuition fees to high-quality education and rich cultural heritage.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>March 17, 2025</span>
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

              {/* Turkey Overview */}
              <section className="mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Flag className="w-6 h-6 text-blue-500 mr-2" />
                    Turkey Study Overview
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">200+</div>
                      <div className="text-sm text-blue-800">Universities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">94.2%</div>
                      <div className="text-sm text-blue-800">Enrollment Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">129</div>
                      <div className="text-sm text-blue-800">Public Universities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">5/5</div>
                      <div className="text-sm text-blue-800">Bologna Score</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  At present, numerous students are choosing to study abroad. Study in Turkey has become a top choice for Pakistani students. There are many reasons for this. Turkey provides affordable tuition fees, high-quality education, as well as a rich cultural history. Since it is a Muslim-majority country, Pakistani students find it easier to adjust and practice their faith.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Universities in Turkey for international students also provide support services for international students, helping them settle in comfortably. Moreover, many scholarships are available to help cover tuition fees and living costs which make education in Turkey more affordable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pakistan and Turkey share a strong friendship, including military and cultural ties, which makes Turkey an even more attractive study destination for Pakistani students. To learn more about study in Turkey for international students, please keep reading below:
                </p>
              </div>

              {/* Best Universities Section */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Best Universities in Turkey for International Students
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Let's discuss about the list of universities in Turkey for international students in English below:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Sr. No.</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">University Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {universities.map((university, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">{index + 1}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">{university}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Why Education in Turkey Section */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Why Education in Turkey is Best for Pakistani Students?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Turkey is located between Europe and Asia, making it easy to travel and experience different cultures. Here are some main reasons to study in Turkey from Pakistan:
                </p>

                {/* Reasons Cards */}
                <div className="space-y-8">
                  
                  {/* Top Universities */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <GraduationCap className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Top Universities in Turkey</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Turkey has over 200 universities, with 129 being public universities in Turkey for international students. Most universities are modern and use the latest teaching methods. Both public and private universities in Turkey follow the Bologna Agreement, which sets education standards across Europe.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Turkish universities also participate in Erasmus+, allowing students to join exchange programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* High-Quality Education */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <Award className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">High-Quality Education</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Turkey ranks second in the world for higher education enrollment, with a 94.2% schooling rate. It follows the Bologna Process perfectly, scoring 5 out of 5. This means a study in Turkey from Pakistan is accepted in all European countries.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          The ECTS credit system is used, and students receive a Diploma Supplement that helps with international recognition.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Growing Education Hub */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <Building2 className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">A Growing Education Hub</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Turkey has become a major education destination in Europe and globally. With increasing investments in higher education infrastructure and technology, Turkish universities are attracting more international students each year. The country offers modern facilities, research opportunities, and academic partnerships worldwide.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Affordable Living */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <DollarSign className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable and Comfortable Living</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Turkey offers one of the most affordable living costs in Europe. Students can enjoy comfortable accommodation, delicious food, and modern amenities at reasonable prices. The cost of living is significantly lower compared to other European countries, making it an attractive option for Pakistani students.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Muslim-Friendly Country */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <Heart className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">A Muslim-Friendly Country</h3>
                        <p className="text-gray-700 leading-relaxed">
                          As a Muslim-majority country, Turkey provides a comfortable environment for Pakistani students to practice their faith. Mosques are readily available, halal food is easily accessible, and Islamic values are respected throughout the society. This cultural compatibility helps Pakistani students feel at home.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Diversity */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <Globe className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Diversity & Safe Environment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Turkey offers a unique blend of Eastern and Western cultures, providing students with diverse experiences. The country maintains a safe and secure environment for international students, with low crime rates and friendly local communities that welcome foreign students.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* English-Taught Programs */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <BookOpen className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">English-Taught Programs</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Many Turkish universities offer programs taught entirely in English, eliminating language barriers for international students. This makes it easier for Pakistani students to pursue their desired fields of study without needing to learn Turkish initially.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Student-Friendly Cities */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <MapPin className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Student-Friendly Cities</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Major Turkish cities like Istanbul, Ankara, and Izmir are highly student-friendly with excellent public transportation, student discounts, cultural activities, and vibrant student communities. These cities offer the perfect balance of academic excellence and social life.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Scholarships */}
                  <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <Star className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Scholarships for Pakistani Students</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Turkey offers numerous scholarship opportunities for Pakistani students, including the prestigious Turkiye Burslari Scholarship program that covers tuition fees, accommodation, and living expenses. Many universities also provide merit-based scholarships to attract talented international students.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Turkey stands out as an exceptional choice for Pakistani students seeking quality higher education abroad. With its combination of affordable costs, high educational standards, cultural compatibility, and numerous opportunities, Turkey offers everything Pakistani students need for a successful academic journey. The strong diplomatic ties between Pakistan and Turkey, along with the welcoming Turkish society, make it an ideal destination for students looking to expand their horizons while feeling at home.
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
                      What is study in Turkey cost for Pakistani students?
                    </h3>
                    <p className="text-gray-700">
                      The cost of studying in Turkey for Pakistani students is quite affordable. Public universities charge around $1,000-$4,000 per year for tuition, while private universities range from $5,000-$20,000 annually. Living expenses typically cost $300-$600 per month, making Turkey one of the most budget-friendly study destinations.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Is study in Turkey for Pakistani students worth it?
                    </h3>
                    <p className="text-gray-700">
                      Absolutely! Studying in Turkey offers excellent value for money with high-quality education, internationally recognized degrees, cultural compatibility, and great career opportunities. The Bologna Process compliance ensures degrees are recognized globally, and the affordable costs make it accessible for Pakistani families.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Are there any English universities in Turkey?
                    </h3>
                    <p className="text-gray-700">
                      Yes, many Turkish universities offer programs taught entirely in English. Some top English-taught institutions include Boğaziçi University, Middle East Technical University, Sabancı University, Koç University, and Bilkent University. These universities provide excellent education in English across various fields.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      How to study in private universities in Turkey for international students?
                    </h3>
                    <p className="text-gray-700">
                      International students can apply to private universities in Turkey through direct application to the university, online application portals, or through authorized education consultants. Requirements typically include academic transcripts, English proficiency tests (TOEFL/IELTS), passport copies, and application fees. Many private universities offer scholarships to international students.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What scholarships are available for Pakistani students in Turkey?
                    </h3>
                    <p className="text-gray-700">
                      The main scholarship program is Turkiye Burslari, which covers full tuition, accommodation, health insurance, and monthly allowance. Additionally, many universities offer merit-based scholarships, and there are specific programs for different fields of study. The scholarship application period typically opens in January each year.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-50 to-red-100 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Turkish Education Journey?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants for Turkish university applications, visa processing, and scholarship opportunities.
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
                    <span className="text-gray-600">Study Level:</span>
                    <span className="font-medium">Bachelor's, Master's, PhD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuition:</span>
                    <span className="font-medium">$1,000-$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-medium">$300-$600/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">English/Turkish</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Intake:</span>
                    <span className="font-medium">Sep, Feb</span>
                  </div>
                </div>
              </div>

              {/* Top Reasons */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-blue-500" />
                  Top Reasons
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Affordable tuition and living costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Muslim-friendly environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">High-quality education</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Scholarship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Cultural diversity</span>
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