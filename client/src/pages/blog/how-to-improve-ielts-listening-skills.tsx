import { ArrowLeft, Clock, User, Share2, Headphones, CheckCircle, AlertCircle, FileText, BookOpen, Award, Users, Target, Globe, TrendingUp, Star, Play, Volume2, Pause } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function HowToImproveIELTSListeningSkills() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                IELTS Preparation
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              How to Improve IELTS Listening Skills: Complete Guide
            </h1>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Master the IELTS Listening section with proven strategies, practice techniques, and expert tips to achieve your target band score.
            </p>
            <div className="flex items-center justify-center space-x-6 text-pink-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 min read</span>
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
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1583266161297-6b7f2d2d8b4a?auto=format&fit=crop&w=1200&q=80"
                  alt="IELTS Listening Skills Improvement"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The IELTS Listening test can be challenging, but with the right strategies and consistent practice, you can significantly improve your performance. This comprehensive guide will provide you with proven techniques to enhance your listening skills and achieve your target band score.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-pink-500 pl-4">
                  Understanding the IELTS Listening Test Format
                </h2>

                <div className="bg-pink-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-pink-900 mb-4">Test Structure</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Headphones className="w-5 h-5 text-pink-600 mr-3" />
                      <span><strong>Duration:</strong> 30 minutes + 10 minutes transfer time</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Target className="w-5 h-5 text-pink-600 mr-3" />
                      <span><strong>Questions:</strong> 40 questions across 4 sections</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Volume2 className="w-5 h-5 text-pink-600 mr-3" />
                      <span><strong>Audio:</strong> Played only once</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Globe className="w-5 h-5 text-pink-600 mr-3" />
                      <span><strong>Accents:</strong> British, Australian, Canadian, American</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-pink-500 pl-4">
                  The Four Sections Explained
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Section 1: Social Context</h3>
                    <p className="text-gray-700 mb-2">Conversation between two people in everyday situations</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Hotel bookings</li>
                      <li>• Restaurant reservations</li>
                      <li>• Shopping inquiries</li>
                      <li>• Travel arrangements</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Section 2: Social Context</h3>
                    <p className="text-gray-700 mb-2">Monologue in everyday situations</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Radio announcements</li>
                      <li>• Public speeches</li>
                      <li>• Tour guide talks</li>
                      <li>• Event introductions</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Section 3: Educational Context</h3>
                    <p className="text-gray-700 mb-2">Conversation between 2-4 people in academic setting</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Student discussions</li>
                      <li>• Tutorial sessions</li>
                      <li>• Assignment planning</li>
                      <li>• Academic consultations</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Section 4: Academic Context</h3>
                    <p className="text-gray-700 mb-2">Academic monologue or lecture</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• University lectures</li>
                      <li>• Academic presentations</li>
                      <li>• Research findings</li>
                      <li>• Conference talks</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-pink-500 pl-4">
                  Top 10 Strategies to Improve Your Listening Skills
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-pink-900 mb-3">1. Practice Active Listening Daily</h3>
                    <p className="text-gray-700 mb-3">
                      Develop the habit of listening to English content for at least 30 minutes daily. Focus on understanding the main ideas and supporting details.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Recommended Resources:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• BBC Learning English</li>
                        <li>• TED Talks</li>
                        <li>• English podcasts</li>
                        <li>• YouTube educational channels</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">2. Focus on Different English Accents</h3>
                    <p className="text-gray-700 mb-3">
                      IELTS features various English accents. Familiarize yourself with British, American, Australian, and Canadian pronunciations.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">British Accent</h5>
                        <p className="text-xs text-gray-600">BBC News, UK documentaries</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">American Accent</h5>
                        <p className="text-xs text-gray-600">CNN, American movies</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">Australian Accent</h5>
                        <p className="text-xs text-gray-600">ABC Australia, documentaries</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">Canadian Accent</h5>
                        <p className="text-xs text-gray-600">CBC News, Canadian content</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">3. Improve Your Prediction Skills</h3>
                    <p className="text-gray-700 mb-3">
                      Before listening, read the questions and predict what type of information you need to listen for.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Prediction Techniques:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Look for question words (what, where, when, how)</li>
                        <li>• Identify the answer type (number, name, date)</li>
                        <li>• Use context clues from surrounding text</li>
                        <li>• Consider grammar patterns in gaps</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">4. Master Note-Taking Techniques</h3>
                    <p className="text-gray-700 mb-3">
                      Develop efficient note-taking skills to capture key information while listening.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Note-Taking Tips:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Use abbreviations and symbols</li>
                        <li>• Focus on keywords and numbers</li>
                        <li>• Don't write complete sentences</li>
                        <li>• Practice shorthand techniques</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">5. Practice with Authentic Materials</h3>
                    <p className="text-gray-700 mb-3">
                      Use official IELTS practice materials and Cambridge test books for authentic practice.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Recommended Materials:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cambridge IELTS books (14, 15, 16, 17)</li>
                        <li>• IELTS.org practice tests</li>
                        <li>• British Council practice materials</li>
                        <li>• IDP IELTS practice resources</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-pink-500 pl-4">
                  Common Question Types and How to Approach Them
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Multiple Choice</h3>
                    <p className="text-gray-700 mb-3">Listen for specific information that matches one of the options.</p>
                    <div className="bg-white p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Strategy:</h4>
                      <p className="text-xs text-gray-600">Read all options before listening and eliminate incorrect answers.</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Gap Fill</h3>
                    <p className="text-gray-700 mb-3">Complete sentences or notes with missing words from the audio.</p>
                    <div className="bg-white p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Strategy:</h4>
                      <p className="text-xs text-gray-600">Predict the word type needed and listen for exact words.</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Matching</h3>
                    <p className="text-gray-700 mb-3">Match items from two lists or match information to categories.</p>
                    <div className="bg-white p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Strategy:</h4>
                      <p className="text-xs text-gray-600">Look for synonyms and paraphrases of the given options.</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Map/Diagram</h3>
                    <p className="text-gray-700 mb-3">Label a map, plan, or diagram based on the audio description.</p>
                    <div className="bg-white p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Strategy:</h4>
                      <p className="text-xs text-gray-600">Follow directional language and spatial relationships.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-pink-500 pl-4">
                  Practice Schedule for Optimal Results
                </h2>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-pink-900 mb-4">Weekly Practice Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Monday</h4>
                      <p className="text-xs text-gray-600">Section 1 Practice</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Tuesday</h4>
                      <p className="text-xs text-gray-600">Section 2 Practice</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Wednesday</h4>
                      <p className="text-xs text-gray-600">Section 3 Practice</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Thursday</h4>
                      <p className="text-xs text-gray-600">Section 4 Practice</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Friday</h4>
                      <p className="text-xs text-gray-600">Full Test Practice</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Saturday</h4>
                      <p className="text-xs text-gray-600">Review & Analysis</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Sunday</h4>
                      <p className="text-xs text-gray-600">General Listening</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-pink-500 pl-4">
                  Common Mistakes to Avoid
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-900">Spelling Errors</h3>
                    </div>
                    <p className="text-gray-700 mb-2">Incorrect spelling can cost you marks even if you hear correctly.</p>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Solution: Practice writing common words and names correctly.</p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-900">Word Limit Violations</h3>
                    </div>
                    <p className="text-gray-700 mb-2">Writing more words than allowed will result in wrong answers.</p>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Solution: Always check the word limit instruction.</p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-900">Missing Transfer Time</h3>
                    </div>
                    <p className="text-gray-700 mb-2">Not using the 10-minute transfer time effectively.</p>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Solution: Transfer answers immediately after each section.</p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-900">Poor Time Management</h3>
                    </div>
                    <p className="text-gray-700 mb-2">Spending too much time on difficult questions.</p>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Solution: Move on and come back if time allows.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-pink-900 mb-4">Final Tips for Success</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-1" />
                      <span>Stay calm and focused during the test</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-1" />
                      <span>Use the preparation time before each section effectively</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-1" />
                      <span>Don't panic if you miss an answer - keep moving forward</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-1" />
                      <span>Practice under exam conditions regularly</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-1" />
                      <span>Review your mistakes and learn from them</span>
                    </li>
                  </ul>
                </div>

                {/* Social Share */}
                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                  <div className="flex space-x-4">
                    <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                      <Share2 className="w-4 h-4 mr-2 inline" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Form */}
              <ContactForm />
              
              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Test Duration: 30 minutes</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Target className="w-4 h-4 mr-2" />
                    <span>Questions: 40</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Headphones className="w-4 h-4 mr-2" />
                    <span>Audio: Played once</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-2" />
                    <span>Band Score: 0-9</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#format" className="text-pink-600 hover:underline">Test Format</a></li>
                  <li><a href="#sections" className="text-pink-600 hover:underline">Four Sections</a></li>
                  <li><a href="#strategies" className="text-pink-600 hover:underline">Top 10 Strategies</a></li>
                  <li><a href="#question-types" className="text-pink-600 hover:underline">Question Types</a></li>
                  <li><a href="#practice" className="text-pink-600 hover:underline">Practice Schedule</a></li>
                  <li><a href="#mistakes" className="text-pink-600 hover:underline">Common Mistakes</a></li>
                </ul>
              </div>

              {/* Share */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="flex-1 bg-sky-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-sky-600 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-blue-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-800 transition-colors">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Need help with your IELTS Listening preparation? Contact our expert trainers for personalized guidance and proven strategies to achieve your target band score.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}