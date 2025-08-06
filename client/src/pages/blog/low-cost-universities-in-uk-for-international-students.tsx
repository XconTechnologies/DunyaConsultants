import React from 'react';
import { Calendar, Clock, User, DollarSign, BookOpen, CheckCircle, Home, Bus, ShoppingCart, GraduationCap, MapPin, TrendingUp, AlertTriangle, FileText } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/blog/ContactForm';

export default function LowCostUniversitiesInUkForInternationalStudents() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-[#124FD3] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Study in UK
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Low-Cost Universities in UK for International Students
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide to tuition fees and living costs in UK for international students, including the most affordable universities and practical budgeting tips.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>December 27, 2024</span>
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
                  Planning to study abroad is one of the major steps for any international student. It is not just about learning but also about getting new experiences. The United Kingdom is one of the most popular choices among international students worldwide because of its highly ranked universities. However, studying abroad comes with many responsibilities. One important thing to think about is the <strong>tuition fees and living cost in UK for international students</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Moreover, living cost in UK can be pretty high but do not let that discourage you. With proper planning, you can manage all expenses. Undoubtedly, studying in the UK is a great investment for your future. Graduates from UK universities are among the most employable people in the world.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you are interested to know more about <strong>student living expenses in UK</strong>, this entire guide is for you. We'll cover everything from university fees to accommodation costs and practical budgeting strategies.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#uk-university-fees" className="hover:text-blue-600">UK University Fees for International Students</a></li>
                  <li><a href="#low-cost-universities" className="hover:text-blue-600">Low-Cost Universities in UK</a></li>
                  <li><a href="#living-costs" className="hover:text-blue-600">Living Cost in UK for International Students</a></li>
                  <li><a href="#accommodation" className="hover:text-blue-600">Accommodation Costs</a></li>
                  <li><a href="#food-costs" className="hover:text-blue-600">Food and Grocery Expenses</a></li>
                  <li><a href="#transportation" className="hover:text-blue-600">Transportation Expenses</a></li>
                  <li><a href="#budgeting-tips" className="hover:text-blue-600">Money-Saving Tips</a></li>
                  <li><a href="#faqs" className="hover:text-blue-600">Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* UK University Fees Section */}
              <section id="uk-university-fees" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">UK University Fees for International Students</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The <strong>UK universities fees for international students</strong> depends on the course as well as the university you choose. Fees vary from one university to another and also between the countries within the United Kingdom like Scotland, England, Wales, and Northern Ireland.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Generally, the UK university fee for arts, humanities, and education courses is less, while medicine and engineering are more expensive. Moreover, <strong>UK master degree fees</strong> usually are pretty expensive, and MBA courses are often the costliest.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Average Tuition Fees by Study Level
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Study Level</th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Average Tuition Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-6 py-4 font-medium">Undergraduate Bachelor's Program</td>
                          <td className="border border-gray-300 px-6 py-4 text-blue-600 font-semibold">£10,000 – £20,000 per year</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-6 py-4 font-medium">Postgraduate Master's Program</td>
                          <td className="border border-gray-300 px-6 py-4 text-blue-600 font-semibold">£10,000 – £20,000 per year</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-6 py-4 font-medium">Doctoral Program</td>
                          <td className="border border-gray-300 px-6 py-4 text-blue-600 font-semibold">£15,000 – £24,000 per year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Important Fee Considerations
                  </h4>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Medical and dentistry programs can cost £35,000-£50,000 per year</li>
                    <li>• MBA programs typically range from £20,000-£60,000 per year</li>
                    <li>• Scottish universities may offer lower fees for EU students</li>
                    <li>• Additional costs include application fees, visa fees, and health surcharge</li>
                  </ul>
                </div>
              </section>

              {/* Low-cost Universities Section */}
              <section id="low-cost-universities" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Low-Cost Universities in UK for International Students</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    UK's Most Affordable Universities
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you are searching for <strong>UK cheapest universities</strong>, please consider applying to one of the universities mentioned below. These institutions offer quality education at more affordable tuition rates for international students.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { name: "Leeds Beckett University", fee: "£12,000-£13,500", location: "Leeds, England" },
                    { name: "University of the West of Scotland", fee: "£13,800-£15,000", location: "Scotland" },
                    { name: "University of Sunderland", fee: "£13,000-£14,500", location: "Sunderland, England" },
                    { name: "College of Human and Health Sciences", fee: "£11,500-£13,000", location: "Various Locations" },
                    { name: "Coventry University", fee: "£15,000-£16,800", location: "Coventry, England" },
                    { name: "Aston University", fee: "£16,300-£19,950", location: "Birmingham, England" },
                    { name: "Ulster University", fee: "£15,360-£15,840", location: "Northern Ireland" },
                    { name: "University of Buckingham", fee: "£18,240-£35,440", location: "Buckingham, England" }
                  ].map((university, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{university.name}</h4>
                          <p className="text-blue-600 font-medium text-sm mb-1">{university.fee}/year</p>
                          <p className="text-gray-600 text-sm flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {university.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">What Makes These Universities Affordable?</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Cost Factors:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Lower tuition fees compared to Russell Group universities</li>
                        <li>• Often located in areas with lower living costs</li>
                        <li>• More scholarship opportunities available</li>
                        <li>• Competitive pricing to attract international students</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Quality Assurance:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• All UK universities maintain high academic standards</li>
                        <li>• Regulated by the Office for Students (OfS)</li>
                        <li>• Degrees recognized worldwide</li>
                        <li>• Excellent student support services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Living Cost Section */}
              <section id="living-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Living Cost in UK for International Students</h2>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Monthly Living Expenses Overview</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Living expenses in UK for international students</strong> are an important part of the total cost of studying in the country. The cost of living in UK for international students includes food, transport, accommodation, shopping, bills, and leisure activities.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    On average, living costs are somewhere between <strong>£1,100 to £1,300 every month</strong>. Like tuition fees, student living expenses in UK depend on your lifestyle as well as where you live. For example, rent in cities such as Brighton and London are more than places like Manchester or Aberdeen.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Monthly Budget Breakdown
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-700 mb-2">London</h5>
                      <p className="text-2xl font-bold text-gray-800 mb-1">£1,400</p>
                      <p className="text-gray-600 text-sm">per month</p>
                    </div>
                    <div className="text-center bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-700 mb-2">Major Cities</h5>
                      <p className="text-2xl font-bold text-gray-800 mb-1">£1,200</p>
                      <p className="text-gray-600 text-sm">per month</p>
                    </div>
                    <div className="text-center bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-700 mb-2">Smaller Cities</h5>
                      <p className="text-2xl font-bold text-gray-800 mb-1">£900</p>
                      <p className="text-gray-600 text-sm">per month</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Accommodation Section */}
              <section id="accommodation" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Accommodation Costs</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <Home className="w-5 h-5 mr-2" />
                    Accommodation Options
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While studying in the United Kingdom, you can choose to live either on-campus or off-campus. On-campus options include staying in a private residence or with other students in university halls. If you prefer to live in student accommodation, like private housing or university halls, the cost usually includes water, electricity, Wi-Fi, gas, etc.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Accommodation Cost Comparison</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-blue-600 text-white">
                            <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Accommodation Type</th>
                            <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Average Cost per Week</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-6 py-4 font-medium">University Residence</td>
                            <td className="border border-gray-300 px-6 py-4 text-blue-600 font-semibold">£515 – £727</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">Private Housing</td>
                            <td className="border border-gray-300 px-6 py-4 text-blue-600 font-semibold">£505 – £848</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-3">University Halls Benefits:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />All bills included</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />On-campus convenience</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Social opportunities</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Security and support</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-3">Private Housing Benefits:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />More independence</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Choice of location</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Potentially lower costs</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Own cooking facilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Food Costs Section */}
              <section id="food-costs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Food and Grocery Expenses</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Monthly Food Budget
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Majority of <strong>cheapest universities in UK</strong> provide affordable meals on campus, which can help you save money. However, eating out every day can quickly increase your living expenses in UK for international students per month. It is important to plan your student budget in advance when deciding where and what to eat.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As an international student, you will likely spend around <strong>£150 – £250 every month</strong> on meals and groceries, depending on your choices and how well you manage your costs.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-blue-700 mb-2">Cooking at Home</h4>
                    <p className="text-2xl font-bold text-gray-800 mb-2">£150-£200</p>
                    <p className="text-gray-600 text-sm">per month</p>
                    <ul className="text-left text-gray-600 text-sm mt-3 space-y-1">
                      <li>• Groceries and cooking</li>
                      <li>• Most economical option</li>
                      <li>• Healthy meal control</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-blue-700 mb-2">Mixed Approach</h4>
                    <p className="text-2xl font-bold text-gray-800 mb-2">£200-£300</p>
                    <p className="text-gray-600 text-sm">per month</p>
                    <ul className="text-left text-gray-600 text-sm mt-3 space-y-1">
                      <li>• Some cooking + eating out</li>
                      <li>• Campus meals included</li>
                      <li>• Balanced approach</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-blue-700 mb-2">Eating Out Frequently</h4>
                    <p className="text-2xl font-bold text-gray-800 mb-2">£350-£500</p>
                    <p className="text-gray-600 text-sm">per month</p>
                    <ul className="text-left text-gray-600 text-sm mt-3 space-y-1">
                      <li>• Restaurants and takeaways</li>
                      <li>• Most expensive option</li>
                      <li>• Convenient but costly</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Money-Saving Food Tips</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Smart Shopping:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Shop at discount supermarkets (Aldi, Lidl)</li>
                        <li>• Buy store brands and generic products</li>
                        <li>• Use student discount cards</li>
                        <li>• Shop for deals and yellow-sticker reductions</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Cooking Strategies:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Meal planning and batch cooking</li>
                        <li>• Share cooking costs with flatmates</li>
                        <li>• Learn basic cooking skills</li>
                        <li>• Use campus food banks if available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Transportation Section */}
              <section id="transportation" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Transportation Expenses</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <Bus className="w-5 h-5 mr-2" />
                    Getting Around in the UK
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    There are plenty of transport options for international students and you can even get discounts. Taxis can be quite expensive, so it is better to use trains or coaches, which often provide special student discount cards to save money.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-3">Public Transport Options</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Bus Monthly Pass</span>
                        <span className="text-blue-600 font-semibold">£50-£80</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Train Monthly Pass</span>
                        <span className="text-blue-600 font-semibold">£100-£200</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">London Oyster Card</span>
                        <span className="text-blue-600 font-semibold">£120-£150</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Cycling (one-time)</span>
                        <span className="text-blue-600 font-semibold">£100-£300</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-3">Student Transport Discounts</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />16-25 Railcard (33% off train fares)</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Student bus passes</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />City-specific student discounts</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />University shuttle services</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Bike-sharing schemes</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Budgeting Tips Section */}
              <section id="budgeting-tips" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Money-Saving Tips for International Students</h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Essential Budgeting Strategies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Before Arrival:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Research scholarship opportunities</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Compare university and living costs</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Set up a UK bank account</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Budget for initial setup costs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">During Studies:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Track monthly expenses</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Take advantage of student discounts</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Consider part-time work (up to 20 hours/week)</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Use free university facilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Working While Studying</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Work Regulations:</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Maximum 20 hours per week during term time</li>
                          <li>• Full-time work during holidays</li>
                          <li>• On-campus jobs often available</li>
                          <li>• Must have valid student visa</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Typical Student Jobs:</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Campus tour guide or assistant</li>
                          <li>• Retail or hospitality work</li>
                          <li>• Tutoring other students</li>
                          <li>• Research assistant positions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I save living cost in UK while studying?</h3>
                    <p className="text-gray-700">You can save money by cooking at home, using student discounts, choosing cheaper accommodation options, walking or cycling instead of using expensive transport, and taking advantage of free university facilities and activities.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Am I allowed to work while studying in the UK?</h3>
                    <p className="text-gray-700">Yes, international students on a student visa can work up to 20 hours per week during term time and full-time during holidays. However, you must check your visa conditions and ensure you don't exceed the allowed hours.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">How much does rent cost every month in the UK?</h3>
                    <p className="text-gray-700">Rent costs vary significantly by location. University halls typically cost £515-£727 per week, while private housing ranges from £505-£848 per week. London is generally more expensive than other UK cities.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">What's the cheapest city to study in the UK?</h3>
                    <p className="text-gray-700">Cities like Aberdeen, Belfast, Newcastle, Leeds, and Cardiff generally offer lower living costs compared to London, Brighton, or Oxford. However, factor in both tuition fees and living expenses when making your decision.</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">How much money should I budget per month as an international student?</h3>
                    <p className="text-gray-700">Budget approximately £1,100-£1,300 per month for living expenses outside London, and £1,400+ per month for London. This includes accommodation, food, transport, and personal expenses.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Conclusion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Studying in the UK as an international student requires careful financial planning, but it's entirely manageable with the right approach. By choosing affordable universities, understanding living costs, and implementing smart budgeting strategies, you can make your UK education dream a reality without breaking the bank.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Remember that education in the UK is an investment in your future. The degrees are globally recognized, and the networking opportunities and career prospects often justify the initial investment. With proper planning and by following the cost-saving tips outlined in this guide, you can successfully manage your finances while enjoying a world-class education.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Start planning early, research thoroughly, and don't hesitate to reach out to university financial aid offices for additional support and scholarship opportunities.
                </p>
              </section>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Need Help Planning Your UK Education Budget?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants on university selection, cost planning, and scholarship opportunities for studying in the UK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call Now: +92 304 1110947
                  </a>
                  <a 
                    href="mailto:query@teamdunya.com" 
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
                    <span className="text-gray-600">Average Monthly Cost:</span>
                    <span className="font-medium">£1,100-£1,300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cheapest University:</span>
                    <span className="font-medium">£11,500+/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accommodation:</span>
                    <span className="font-medium">£515-£848/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Food Budget:</span>
                    <span className="font-medium">£150-£250/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Allowance:</span>
                    <span className="font-medium text-green-600">20 hrs/week</span>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-blue-500" />
                  Monthly Budget Breakdown
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Accommodation</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">£500-£850</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Food</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">£150-£250</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Transport</span>
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">£50-£150</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Utilities & Bills</span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">£100-£200</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Personal/Leisure</span>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">£100-£200</span>
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