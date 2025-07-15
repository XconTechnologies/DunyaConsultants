import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, User, Share2, Download, Phone, Mail, MessageCircle, ChevronRight, ChevronDown, ChevronUp, Target, BookOpen, Brain, Smartphone } from 'lucide-react';

const IELTSPreparationTips: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Is 7.5 a Good IELTS Score?",
      answer: "Yes, 7.5 is considered a very good IELTS score. It indicates a good level of English proficiency and is accepted by most universities and immigration programs. Many top universities require a minimum of 6.5-7.0, so 7.5 exceeds most requirements."
    },
    {
      question: "How to Get a 7+ Band in IELTS?",
      answer: "To achieve a 7+ band score, focus on all four skills equally, practice regularly with authentic materials, improve your vocabulary, understand the test format thoroughly, and take multiple practice tests. Consistent preparation for 2-3 months is usually required."
    },
    {
      question: "How long is the IELTS Score Valid?",
      answer: "IELTS scores are valid for 2 years from the test date. After this period, you'll need to retake the exam if you want to use your scores for university applications or immigration purposes."
    },
    {
      question: "How long should I prepare for IELTS?",
      answer: "Preparation time depends on your current English level. Generally, 2-3 months of focused preparation is recommended for most students. Beginners may need 4-6 months, while advanced speakers might need only 1-2 months."
    }
  ];

  const preparationTips = [
    {
      title: "Identify Your Weak Areas",
      description: "To prepare well for the IELTS practice test, it's important to know what you are good at and what you need to improve. When you find your weak areas, you can spend more time practicing them.",
      icon: <Target className="w-8 h-8 text-red-600" />,
      color: "from-red-50 to-pink-50"
    },
    {
      title: "Use Visual Study Maps",
      description: "Mind maps are a great way to organize and remember information. They use pictures and connections to help you understand things quickly and remember better by using images and colors.",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      color: "from-purple-50 to-violet-50"
    },
    {
      title: "Create and Use Flashcards",
      description: "Flashcards are small cards that help you remember new words and ideas. They are useful for learning English and preparing for the IELTS test. Adding pictures makes it easier to remember.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "Understand the IELTS Test Structure",
      description: "Before taking any test, it's good to know its structure and types of questions. For IELTS, understand the different sections, tasks, and how to complete them correctly.",
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      color: "from-green-50 to-emerald-50"
    }
  ];

  const additionalTips = [
    {
      title: "Take Practice Tests",
      description: "The British Council provides free IELTS practice tests for all four skills. Take practice tests in timed settings, just like the real exam, to build confidence."
    },
    {
      title: "Follow a Study Schedule",
      description: "Make a daily study schedule. Even 30 minutes daily is more effective than sporadic long sessions. Try to study at the same time every day for consistency."
    },
    {
      title: "Highlight Key Information",
      description: "Underlining key points in texts helps you remember information easily. It also makes it easier to find important details when reviewing your notes."
    },
    {
      title: "Write Short Summaries",
      description: "Writing summaries is a great way to remember important information. It helps you focus on key points while avoiding unnecessary details."
    },
    {
      title: "Work on All Four Language Skills",
      description: "Practice reading, writing, listening, and speaking equally. Read English materials daily, write essays, listen to podcasts, and practice speaking with others."
    },
    {
      title: "Use Learning Apps",
      description: "The British Council has free apps with podcasts and video lessons. Use technology to make learning more interactive and accessible."
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
                <span>March 10, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>10 min read</span>
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

      {/* Full Width Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Top 10 IELTS Preparation Tips</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">Master IELTS with Expert Tips for High Band Score</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm">

              <div className="p-8">
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Getting a good score in the IELTS exam is very important. It helps you study in countries like the UK, 
                    US, and Canada. IELTS is accepted by over 12,500 organizations worldwide and has helped many people 
                    achieve their study as well as career goals.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Why IELTS Preparation Matters</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Accepted by over 12,500 organizations worldwide</li>
                      <li>• Required for study in UK, US, Canada, and Australia</li>
                      <li>• High scores can help win scholarships</li>
                      <li>• Improves overall English communication skills</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Target className="w-8 h-8 text-green-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Academic Benefits</h3>
                      </div>
                      <p className="text-gray-700">A high IELTS score opens doors to prestigious universities and may qualify you for scholarships and financial aid.</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Life Skills</h3>
                      </div>
                      <p className="text-gray-700">IELTS preparation improves your English skills, making it easier to communicate and adjust to life in English-speaking countries.</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    IELTS Test Structure Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Listening (30 minutes)</h3>
                      <p className="text-gray-700 mb-2">4 sections with 10 questions each</p>
                      <p className="text-sm text-gray-500">Tests your ability to understand spoken English</p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Reading (60 minutes)</h3>
                      <p className="text-gray-700 mb-2">3 sections with 40 questions total</p>
                      <p className="text-sm text-gray-500">Tests reading comprehension and analysis</p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Writing (60 minutes)</h3>
                      <p className="text-gray-700 mb-2">2 tasks: report/letter + essay</p>
                      <p className="text-sm text-gray-500">Tests written communication skills</p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Speaking (11-14 minutes)</h3>
                      <p className="text-gray-700 mb-2">3 parts: interview + cue card + discussion</p>
                      <p className="text-sm text-gray-500">Tests oral communication abilities</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Essential Tips and Tricks for IELTS Preparation
                  </h2>
                  <p className="mb-6">
                    Whether you have already booked for the IELTS exam online or are just thinking about it, we have 
                    gathered the best tips to help you get the highest score in each section of the IELTS exam.
                  </p>

                  <div className="space-y-6 my-8">
                    {preparationTips.map((tip, index) => (
                      <div key={index} className={`bg-gradient-to-br ${tip.color} rounded-lg p-6`}>
                        <div className="flex items-start">
                          <div className="mr-4 flex-shrink-0">
                            {tip.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h3>
                            <p className="text-gray-700">{tip.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Effective Strategies</h3>
                  <div className="space-y-4 my-8">
                    {additionalTips.map((tip, index) => (
                      <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                        <div className="flex items-start">
                          <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                            <span className="text-blue-600 font-bold text-sm">{index + 5}</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h4>
                            <p className="text-gray-700">{tip.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Study Schedule Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-900 mb-2">Daily Practice (30-60 minutes)</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• 15 minutes vocabulary building</li>
                          <li>• 20 minutes skill-specific practice</li>
                          <li>• 15 minutes review and error analysis</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-900 mb-2">Weekly Goals</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• 2 complete practice tests</li>
                          <li>• Focus on one weak skill per week</li>
                          <li>• Review and analyze all mistakes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Essential Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Official Materials</h4>
                        <ul className="text-green-800 space-y-1">
                          <li>✓ British Council IELTS preparation</li>
                          <li>✓ IDP IELTS practice tests</li>
                          <li>✓ Cambridge IELTS books</li>
                          <li>✓ Official IELTS website resources</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Digital Tools</h4>
                        <ul className="text-green-800 space-y-1">
                          <li>✓ IELTS apps and online platforms</li>
                          <li>✓ English learning apps</li>
                          <li>✓ Vocabulary building tools</li>
                          <li>✓ Practice test simulators</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Section-Specific Preparation Tips
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Listening & Reading</h3>
                      <ul className="text-blue-800 space-y-2">
                        <li>• Practice with different accents</li>
                        <li>• Time management is crucial</li>
                        <li>• Read questions before listening/reading</li>
                        <li>• Don't spend too long on one question</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-purple-900 mb-3">Writing & Speaking</h3>
                      <ul className="text-purple-800 space-y-2">
                        <li>• Practice with sample topics</li>
                        <li>• Learn essay structures and formats</li>
                        <li>• Record yourself speaking</li>
                        <li>• Get feedback from teachers/native speakers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Common Mistakes to Avoid</h3>
                    <ul className="text-red-800 space-y-2">
                      <li>• Don't focus only on one skill - practice all four equally</li>
                      <li>• Don't memorize answers - understand the concepts</li>
                      <li>• Don't ignore time management during practice</li>
                      <li>• Don't skip reading instructions carefully</li>
                      <li>• Don't use informal language in formal writing tasks</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Conclusion
                  </h2>
                  <p className="mb-6">
                    Getting a good score in the IELTS exam requires consistent practice and the right preparation strategy. 
                    The best way to succeed is to understand the test structure, practice regularly with authentic materials, 
                    work on all four skills equally, and use the tips mentioned above. Remember that IELTS preparation is 
                    not just about passing a test - it's about developing strong English communication skills that will help 
                    you succeed in your academic and professional life. With dedicated effort and the right approach, you 
                    can achieve your target score and reach your goals.
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
                  <a href="#structure" className="block text-sm text-blue-600 hover:text-blue-800">Test Structure</a>
                  <a href="#tips" className="block text-sm text-blue-600 hover:text-blue-800">Essential Tips</a>
                  <a href="#strategies" className="block text-sm text-blue-600 hover:text-blue-800">Additional Strategies</a>
                  <a href="#section-specific" className="block text-sm text-blue-600 hover:text-blue-800">Section-Specific Tips</a>
                  <a href="#conclusion" className="block text-sm text-blue-600 hover:text-blue-800">Conclusion</a>
                  <a href="#faq" className="block text-sm text-blue-600 hover:text-blue-800">FAQ</a>
                </nav>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need IELTS Preparation Help?</h3>
                <p className="text-gray-600 mb-4">Get expert guidance on IELTS preparation and achieve your target score.</p>
                
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
                  <Link href="/blog/ielts-listening-skills" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">How to Improve IELTS Listening Skills</div>
                    <div className="text-xs text-gray-500">Listening test strategies</div>
                  </Link>
                  <Link href="/blog/gmat-test-fee-pakistan" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">GMAT Test Fee in Pakistan</div>
                    <div className="text-xs text-gray-500">GMAT exam details</div>
                  </Link>
                  <Link href="/blog/top-study-abroad-countries" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">Top Study Abroad Countries</div>
                    <div className="text-xs text-gray-500">Best destinations guide</div>
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

export default IELTSPreparationTips;