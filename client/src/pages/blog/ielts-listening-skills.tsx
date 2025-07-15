import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Clock, User, Share2, Download, Phone, Mail, MessageCircle, ChevronRight, ChevronDown, ChevronUp, Headphones, BookOpen, Target, Globe } from 'lucide-react';

const IELTSListeningSkills: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How to improve listening skills in English in IELTS?",
      answer: "To improve IELTS listening skills, practice daily with English conversations, watch international news, listen to podcasts from different countries, and take regular practice tests. Focus on understanding different accents and building vocabulary."
    },
    {
      question: "Is IELTS listening practice easy?",
      answer: "IELTS listening practice can be challenging initially, but with consistent practice and proper preparation strategies, it becomes manageable. The key is regular exposure to English audio materials and familiarity with the test format."
    },
    {
      question: "How can I take IELTS general listening practice test?",
      answer: "You can take IELTS general listening practice tests through official IELTS websites, preparation books, online platforms, and test preparation centers. Practice tests help you familiarize yourself with the format and timing."
    },
    {
      question: "What are the main sections of IELTS listening test?",
      answer: "The IELTS listening test has four sections with 10 questions each: Section 1 (everyday conversation), Section 2 (monologue), Section 3 (academic discussion), and Section 4 (academic lecture). The difficulty increases progressively."
    }
  ];

  const listeningTips = [
    {
      title: "Build a Strong Vocabulary",
      description: "The recordings may feature speakers with different levels of vocabulary. Work on improving your vocabulary so you won't get stuck on unfamiliar words and waste time trying to figure out their meaning.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "Get Comfortable with Different Accents",
      description: "Speakers may have accents from different English-speaking countries. Practice listening to different accents by watching international news channels, podcasts, or radio stations from various countries.",
      icon: <Globe className="w-8 h-8 text-green-600" />,
      color: "from-green-50 to-emerald-50"
    },
    {
      title: "Practice Listening While Writing Answers",
      description: "You only get one chance to listen, so improve your ability to listen and write answers simultaneously. Take practice tests to get used to answering questions while listening.",
      icon: <Target className="w-8 h-8 text-purple-600" />,
      color: "from-purple-50 to-violet-50"
    },
    {
      title: "Train Yourself to Listen Only Once",
      description: "In the actual exam, you get only one chance. Practice under real exam conditions—listen to recordings only once and try to answer questions as you hear the information.",
      icon: <Headphones className="w-8 h-8 text-orange-600" />,
      color: "from-orange-50 to-amber-50"
    }
  ];

  const additionalTips = [
    "Focus on Key Information",
    "Use English in Everyday Life",
    "Choose Topics That Interest You"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>March 12, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>8 min read</span>
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

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm">
              {/* Hero Image */}
              <div className="aspect-video bg-gradient-to-r from-pink-600 to-purple-600 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-3xl font-bold mb-2">How to Improve IELTS Listening Skills</h1>
                  <p className="text-xl opacity-90">Master Your IELTS Listening Test with Expert Tips</p>
                </div>
              </div>

              <div className="p-8">
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    The IELTS exam consists of four sections: Listening, Writing, Speaking, and Reading. Each section 
                    is important for achieving a good score. The Listening section tests how well you understand 
                    spoken English. The best way to improve is by regularly listening to English conversations, 
                    and videos and taking the general IELTS listening practice test.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">IELTS Listening Test Structure</h3>
                    <ul className="text-blue-800 space-y-1">
                      <li>• 4 sections with 10 questions each (40 questions total)</li>
                      <li>• 30 minutes listening time + 10 minutes transfer time</li>
                      <li>• Difficulty increases progressively through sections</li>
                      <li>• Same format for Academic and General versions</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Headphones className="w-8 h-8 text-purple-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Test Duration</h3>
                      </div>
                      <p className="text-gray-700">The IELTS listening test lasts about 30 minutes, with an additional 10 minutes to transfer answers to the answer sheet.</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Target className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Key Focus</h3>
                      </div>
                      <p className="text-gray-700">Focus on understanding different accents and speaking styles to prepare for the diverse range of speakers you'll encounter.</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Test Sections Breakdown
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Section 1</h3>
                      <p className="text-gray-700 mb-2">Everyday conversation between two people</p>
                      <p className="text-sm text-gray-500">Example: Booking a hotel room or making an appointment</p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Section 2</h3>
                      <p className="text-gray-700 mb-2">Monologue in an everyday context</p>
                      <p className="text-sm text-gray-500">Example: Information about local facilities or services</p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Section 3</h3>
                      <p className="text-gray-700 mb-2">Academic discussion between 2-4 people</p>
                      <p className="text-sm text-gray-500">Example: Students discussing an assignment with a tutor</p>
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Section 4</h3>
                      <p className="text-gray-700 mb-2">Academic lecture or monologue</p>
                      <p className="text-sm text-gray-500">Example: University lecture on a specific topic</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Best Tips & Tricks for IELTS Listening Test
                  </h2>
                  <p className="mb-6">
                    All IELTS Listening tests follow the same format. They are 30 minutes long, and there is no 
                    difference between the Academic and General versions. Here are the top tips for improving your 
                    listening skills:
                  </p>

                  <div className="space-y-6 my-8">
                    {listeningTips.map((tip, index) => (
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
                  <div className="bg-gray-50 rounded-lg p-6 my-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Focus on Key Information</h4>
                          <p className="text-gray-700">Not everything you hear is important for answering questions. Train yourself to identify essential parts and avoid wasting time on unnecessary details.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Use English in Everyday Life</h4>
                          <p className="text-gray-700">Engage with English daily through conversations, messages, calls, and emails. The more you use the language, the easier it becomes to understand spoken English.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Choose Topics That Interest You</h4>
                          <p className="text-gray-700">Listen to topics you enjoy to make learning more engaging. When you're interested in a topic, you naturally pay more attention and absorb more information.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Common Mistakes to Avoid</h3>
                    <ul className="text-yellow-800 space-y-2">
                      <li>• Don't try to understand every single word - focus on main ideas</li>
                      <li>• Don't panic if you miss an answer - move on to the next question</li>
                      <li>• Don't ignore the instructions - read them carefully before each section</li>
                      <li>• Don't write answers in the wrong format - follow the given examples</li>
                      <li>• Don't spend too much time on one question - manage your time wisely</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Practice Resources</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>✓ BBC Learning English - Free online resources and podcasts</li>
                      <li>✓ British Council IELTS preparation materials</li>
                      <li>✓ Cambridge IELTS practice tests</li>
                      <li>✓ IELTS official practice tests</li>
                      <li>✓ YouTube channels with IELTS listening practice</li>
                      <li>✓ English news channels (BBC, CNN, Sky News)</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Study Schedule and Time Management
                  </h2>
                  <div className="bg-blue-50 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Weekly Practice Plan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Daily (30 minutes)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Listen to English podcasts or news</li>
                          <li>• Practice with different accents</li>
                          <li>• Review vocabulary</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Weekly (2-3 times)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Complete full practice tests</li>
                          <li>• Analyze mistakes and weak areas</li>
                          <li>• Practice specific question types</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    Conclusion
                  </h2>
                  <p className="mb-6">
                    These tips for IELTS listening will help you get ready for the exam. One of the most important 
                    skills for the IELTS listening test is reading and understanding the questions properly. If you 
                    clearly understand what is being asked, you will be able to find the right answers quickly and 
                    finish the test on time. Whether you have only a few minutes each day or a full hour to study, 
                    you can easily find useful listening materials online. Use your time wisely and practice as much 
                    as possible to improve your skills.
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
                  <a href="#sections" className="block text-sm text-blue-600 hover:text-blue-800">Test Sections</a>
                  <a href="#tips" className="block text-sm text-blue-600 hover:text-blue-800">Best Tips & Tricks</a>
                  <a href="#strategies" className="block text-sm text-blue-600 hover:text-blue-800">Additional Strategies</a>
                  <a href="#schedule" className="block text-sm text-blue-600 hover:text-blue-800">Study Schedule</a>
                  <a href="#faq" className="block text-sm text-blue-600 hover:text-blue-800">FAQ</a>
                </nav>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need IELTS Preparation Help?</h3>
                <p className="text-gray-600 mb-4">Get expert guidance on IELTS preparation and improve your listening skills.</p>
                
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
                  <Link href="/blog/ielts-preparation-tips" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">IELTS Preparation Tips and Tricks</div>
                    <div className="text-xs text-gray-500">Complete preparation guide</div>
                  </Link>
                  <Link href="/blog/uk-internship-international-students" className="block hover:text-blue-600">
                    <div className="text-sm font-medium">UK Internship for International Students</div>
                    <div className="text-xs text-gray-500">Internship opportunities</div>
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

export default IELTSListeningSkills;