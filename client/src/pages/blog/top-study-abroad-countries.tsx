import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, User, Share2, Download, Phone, Mail, MessageCircle, ChevronRight, ChevronDown, ChevronUp, Globe, Star, DollarSign, Users } from 'lucide-react';

const TopStudyAbroadCountries: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Which country is best for studying abroad?",
      answer: "The UK and US have top universities. Canada and Australia provide great work opportunities, and Germany provides affordable education. The best country depends on your field of study, budget, and career goals."
    },
    {
      question: "Which country is the most affordable for international students?",
      answer: "Germany provides free or low-cost education at public universities, while Canada and Europe also have relatively lower tuition fees compared to the US and UK."
    },
    {
      question: "What factors should I consider when choosing a study abroad destination?",
      answer: "Consider factors such as academic goals, tuition fees, lifestyle, job opportunities, cultural experiences, visa requirements, and post-graduation work opportunities."
    },
    {
      question: "How many Pakistani students study abroad annually?",
      answer: "Every year, over 700,000 students and professionals from Pakistan move abroad for studies, making it one of the largest sources of international students globally."
    }
  ];

  const countries = [
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      highlights: [
        "Home to Oxford and Cambridge universities",
        "High-quality education with flexible courses",
        "Strong focus on practical and scientific knowledge",
        "Many scholarship opportunities available"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "United States",
      flag: "🇺🇸",
      highlights: [
        "Largest number of international students worldwide",
        "Ivy League schools and globally recognized institutions",
        "Diverse courses and top-ranked universities",
        "Strong career opportunities after graduation"
      ],
      color: "from-red-500 to-blue-600"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      highlights: [
        "26+ institutions in QS World University Rankings",
        "Affordable tuition fees and friendly communities",
        "Numerous scholarship programs available",
        "Pathways to permanent residency for graduates"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      highlights: [
        "43 universities, many ranking among world's best",
        "Diverse culture and beautiful surroundings",
        "Wide variety of courses available",
        "Part-time work opportunities while studying"
      ],
      color: "from-green-500 to-blue-600"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      highlights: [
        "Free or low-cost education at public universities",
        "Leading institutions like Technical University of Munich",
        "Strong economy and advanced technology",
        "Vibrant student life and cultural heritage"
      ],
      color: "from-yellow-500 to-red-600"
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      highlights: [
        "Interactive learning approach with direct engagement",
        "Focus on innovation and research",
        "Rich cultural heritage and vibrant campus life",
        "Strong support system for international students"
      ],
      color: "from-purple-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>March 14, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>7 min read</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm">
              {/* Hero Image */}
              <div className="aspect-video bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-3xl font-bold mb-2">Top Study Abroad Countries</h1>
                  <p className="text-xl opacity-90">Discover the Best Destinations for International Students</p>
                </div>
              </div>

              <div className="p-8">
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Studying in another country is the best and life-changing experience. It helps students get high quality 
                    education, explore new cultures, and find better career opportunities. Every year, over 700,000 students 
                    and professionals from Pakistan move abroad for studies.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Statistics</h3>
                    <div className="grid grid-cols-2 gap-4 text-blue-800">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        <span>700,000+ Pakistani students abroad annually</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        <span>Multiple top-ranking destinations</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        <span>World-class education quality</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        <span>Various scholarship opportunities</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Factors to Consider When Choosing a Study Destination
                  </h2>
                  <p className="mb-6">
                    Choosing the right country can be a difficult decision, as many factors need to be considered. 
                    These include the quality of education, tuition fees, student visa process, lifestyle, and job 
                    opportunities after graduation. Students should think about their academic goals when selecting a country.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Considerations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Quality of education and university rankings</span>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Tuition fees and living costs</span>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Student visa process and requirements</span>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Post-graduation work opportunities</span>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Cultural environment and lifestyle</span>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Scholarship and financial aid availability</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Best Countries to Study Abroad
                  </h2>
                  <p className="mb-6">
                    Choosing the best country for studying abroad is not just about picking a well-known university. 
                    It is about finding a place according to your education goals and future career plans. Each country 
                    provides different benefits. Here are some of the best countries for international students:
                  </p>

                  <div className="space-y-8 my-8">
                    {countries.map((country, index) => (
                      <div key={index} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${country.color}`}></div>
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <span className="text-4xl mr-4">{country.flag}</span>
                            <h3 className="text-2xl font-bold text-gray-900">{country.name}</h3>
                          </div>
                          
                          <div className="space-y-3">
                            {country.highlights.map((highlight, highlightIndex) => (
                              <div key={highlightIndex} className="flex items-start">
                                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Country Comparison Quick Guide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Top Academic Quality</h4>
                        <p className="text-sm text-gray-700">UK, US, Australia</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Most Affordable</h4>
                        <p className="text-sm text-gray-700">Germany, Canada, Europe</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-purple-900 mb-2">Best Work Opportunities</h4>
                        <p className="text-sm text-gray-700">Canada, Australia, Germany</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Making Your Decision
                  </h2>
                  <p className="mb-6">
                    When choosing a country to study abroad, it is important to consider factors such as academic goals, 
                    tuition fees, lifestyle, job opportunities, and cultural experiences. Whether you are looking for 
                    affordable education, top-ranked universities, or strong career opportunities, each of these countries 
                    has something unique to provide.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Expert Recommendations</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>✓ Research thoroughly before making your decision</li>
                      <li>✓ Consider your budget and financial resources</li>
                      <li>✓ Think about your long-term career goals</li>
                      <li>✓ Look into scholarship opportunities</li>
                      <li>✓ Consider the cultural fit and lifestyle</li>
                      <li>✓ Check visa requirements and processes</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Conclusion
                  </h2>
                  <p className="mb-6">
                    Each study abroad destination offers unique advantages and opportunities. The UK and US provide 
                    world-class education and prestigious universities, while Canada and Australia offer great work 
                    opportunities and immigration pathways. Germany stands out for its affordable education, and 
                    Europe provides diverse cultural experiences. Take your time to research and select the country 
                    that best meets your needs and future goals. Remember, the right choice will depend on your 
                    individual circumstances, academic interests, and career aspirations.
                  </p>

                  {/* FAQ Section */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                        >
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {expandedFaq === index && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#factors" className="block text-sm text-blue-600 hover:text-blue-800">Key Factors</a>
                  <a href="#countries" className="block text-sm text-blue-600 hover:text-blue-800">Best Countries</a>
                  <a href="#decision" className="block text-sm text-blue-600 hover:text-blue-800">Making Your Decision</a>
                  <a href="#conclusion" className="block text-sm text-blue-600 hover:text-blue-800">Conclusion</a>
                  <a href="#faq" className="block text-sm text-blue-600 hover:text-blue-800">FAQ</a>
                </nav>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Study Abroad Guidance?</h3>
                <p className="text-gray-600 mb-4">Get expert advice on choosing the right country and university for your studies.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">UAN: (+92) 304 1110947</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">info@dunyaconsultants.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">WhatsApp Available</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mt-4">
                  Get Free Consultation
                </button>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link href="/blog/master-of-laws-llm-australia" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Master of Laws (LLM) in Australia</div>
                    <div className="text-xs text-gray-500">Complete guide to LLM programs</div>
                  </Link>
                  <Link href="/blog/uk-internship-international-students" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">UK Internship for International Students</div>
                    <div className="text-xs text-gray-500">Internship opportunities guide</div>
                  </Link>
                  <Link href="/blog/gmat-test-fee-pakistan" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">GMAT Test Fee in Pakistan</div>
                    <div className="text-xs text-gray-500">GMAT exam details</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStudyAbroadCountries;