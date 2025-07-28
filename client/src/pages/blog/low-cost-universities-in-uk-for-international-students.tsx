import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import ContactForm from "../../components/blog/ContactForm";
import { ArrowRight, Users, MapPin, Star, CheckCircle, DollarSign, Home, BookOpen, Bus } from "lucide-react";

export default function LowCostUniversitiesInUkForInternationalStudents() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative bg-[#124FD3] text-white py-16 lg:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 79, 211, 0.9), rgba(18, 79, 211, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container max-w-[1440px] mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Low-Cost Universities in UK for International Students
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Complete guide to affordable UK universities and living costs for international students
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">University Guides</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">UK Education</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">International Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-[1440px] mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Planning to study abroad is one of the major steps for any international student. It is not just about learning but also about getting new experiences. The United Kingdom is one of the most popular choices among international students worldwide because of its highly ranked universities. However, studying abroad comes with many responsibilities. One important thing to think about is the tuition fees and living cost in UK for international students.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Moreover, living cost in UK can be pretty high but do not let that discourage you. With proper planning, you can manage all expenses. Undoubtedly, studying in the UK is a great investment for your future. Graduates from UK universities are among the most employable people in the world. If you are interested to know more about student living expenses in UK, this entire guide is for you.
                </p>
              </div>

              {/* UK University Fees Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#124FD3] pl-4">
                  UK University Fees for International Students
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The UK universities fees for international students depends on the course as well as the university you choose. Fees vary from one university to another and also between the countries within the United Kingdom like Scotland, England, Wales, and Northern Ireland.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Generally, the UK university fee for arts, humanities, and education courses is less, while medicine and engineering are more expensive. Moreover, UK master degree fees usually are pretty expensive, and MBA courses are often the costliest.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Let's discuss UK university fee for different study levels below:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-[#124FD3] text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Study Level</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Average Tuition Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Undergraduate Bachelor's Program</td>
                        <td className="border border-gray-300 px-4 py-3">£10,000 – £20,000 each year</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Postgraduate Master's Program</td>
                        <td className="border border-gray-300 px-4 py-3">£10,000 – £20,000 each year</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Doctoral Program</td>
                        <td className="border border-gray-300 px-4 py-3">£15,000 to £24,000 per year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Low-cost Universities Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#124FD3] pl-4">
                  Low-cost Universities in UK for International Students
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you are searching for UK cheapest universities, please consider applying to one of the universities mentioned below:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Leeds Beckett University",
                    "University of the West of Scotland",
                    "University of Sunderland",
                    "College of Human and Health Sciences",
                    "Coventry University",
                    "Aston University",
                    "Ulster University",
                    "University of Buckingham"
                  ].map((university, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{university}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Living Cost Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#124FD3] pl-4">
                  Living Cost in UK for International Students
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Living expenses in UK for international students are an important part of the total cost of studying in the country. The cost of living in UK for international students includes food, transport, accommodation, shopping, bills, and leisure activities. On average, living costs are somewhere between £1100 to £1300 every month.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Like tuition fees, student living expenses in UK depend on your lifestyle as well as where you live. For example, rent in cities such as Brighton and London are more than places like Manchester or Aberdeen.
                </p>

                {/* Accommodation Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Home className="h-6 w-6 text-[#124FD3] mr-2" />
                    Accommodation
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    While studying in the United Kingdom, you can choose to live either on-campus or off-campus. On-campus options include staying in a private residence or with other students in university halls. If you prefer to live in student accommodation, like private housing or university halls, the cost usually includes water, electricity, Wi-Fi, gas, etc.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-[#124FD3] text-white">
                          <th className="border border-gray-300 px-4 py-3 text-left">Accommodation Type</th>
                          <th className="border border-gray-300 px-4 py-3 text-left">Average Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">University Residence</td>
                          <td className="border border-gray-300 px-4 py-3">£515 – £727</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Private Housing</td>
                          <td className="border border-gray-300 px-4 py-3">£505 -£848</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Food Costs Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-6 w-6 text-[#124FD3] mr-2" />
                    Food Costs
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Majority of cheapest universities in UK provide affordable meals on campus, which can help you save money. However, eating out every day can quickly increase your living expenses in UK for international students per month. It is important to plan your student budget in advance when deciding where and what to eat.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As an international student, you will likely spend around £150 – £250 every month on meals and groceries, depending on your choices and how well you manage your costs.
                  </p>
                </div>

                {/* Transportation Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Bus className="h-6 w-6 text-[#124FD3] mr-2" />
                    Transportation Expenses
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    There are plenty of transport options for international students and you can even get discounts. Taxis can be quite expensive, so it is better to use trains or coaches, which often provide special student discount cards to save money.
                  </p>
                </div>
              </section>

              {/* Conclusion Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#124FD3] pl-4">
                  Conclusion
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Studying in the UK can be an incredible experience for international students, offering world-class education and diverse cultural exposure. While the costs may seem daunting initially, with careful planning and choosing affordable universities, you can make your dream of studying in the UK a reality.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Remember to research thoroughly, apply for scholarships, and consider all living expenses when budgeting for your studies. The investment in UK education often pays off through excellent career opportunities and global recognition of your qualifications.
                </p>
              </section>

              {/* FAQs Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#124FD3] pl-4">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      How can I save living cost in UK while studying?
                    </h3>
                    <p className="text-gray-700">
                      You can save money by choosing shared accommodation, cooking at home instead of eating out, using student discounts for transportation, and taking advantage of free activities and events on campus.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Am I allowed to work while studying in the UK?
                    </h3>
                    <p className="text-gray-700">
                      Yes, international students on a Student visa can typically work up to 20 hours per week during term time and full-time during holidays. However, check your specific visa conditions as restrictions may vary.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      How much does rent cost every month in the UK?
                    </h3>
                    <p className="text-gray-700">
                      Monthly rent varies significantly by location and accommodation type. University residence costs £515-£727 per month, while private housing ranges from £505-£848 per month. London is typically more expensive than other cities.
                    </p>
                  </div>
                </div>
              </section>

            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              
              {/* Quick Facts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-[#124FD3] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Tuition Fees</p>
                      <p className="text-sm text-gray-600">£10,000 - £24,000/year</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Home className="h-5 w-5 text-[#124FD3] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Living Costs</p>
                      <p className="text-sm text-gray-600">£1,100 - £1,300/month</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-[#124FD3] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Work Rights</p>
                      <p className="text-sm text-gray-600">20 hours/week during studies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#124FD3] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Popular Cities</p>
                      <p className="text-sm text-gray-600">London, Manchester, Edinburgh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Affordable Universities */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Top Affordable Universities</h3>
                <div className="space-y-3">
                  {[
                    { name: "Leeds Beckett University", location: "Leeds" },
                    { name: "University of Sunderland", location: "Sunderland" },
                    { name: "Coventry University", location: "Coventry" },
                    { name: "Ulster University", location: "Northern Ireland" }
                  ].map((uni, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded border">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{uni.name}</p>
                        <p className="text-xs text-gray-600">{uni.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Expert Guidance</h3>
                <p className="text-gray-600 mb-4">
                  Need help choosing affordable UK universities? Our experts can guide you through the process.
                </p>
                <ContactForm />
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}