import { ArrowLeft, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, Target, Award, Users, Globe, TrendingUp, Star, Headphones, PenTool, MessageSquare, Eye } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function IELTSPreparationTipsAndTricks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                IELTS Preparation
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              IELTS Preparation Tips and Tricks: Master All Four Skills
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide with proven strategies, expert tips, and practical techniques to excel in all four IELTS sections and achieve your target band score.
            </p>
            <div className="flex items-center justify-center space-x-6 text-emerald-200">
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
                <span>15 min read</span>
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
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80"
                  alt="IELTS Preparation Tips and Tricks"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Preparing for the IELTS exam requires strategic planning, consistent practice, and effective techniques. This comprehensive guide provides you with proven tips and tricks to excel in all four IELTS sections: Listening, Reading, Writing, and Speaking. Whether you're aiming for band 6.5 or 8.0, these strategies will help you achieve your target score.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  General IELTS Preparation Strategies
                </h2>

                <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-4">Before You Start</h3>
                  <div className="space-y-3">
                    <div className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span><strong>Take a diagnostic test</strong> to assess your current level and identify weak areas</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span><strong>Set a realistic target band score</strong> based on your requirements</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span><strong>Create a study schedule</strong> with at least 2-3 months preparation time</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span><strong>Gather authentic materials</strong> like Cambridge IELTS books and official practice tests</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  IELTS Listening Tips and Tricks
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Headphones className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold text-blue-900">Pre-Listening Strategies</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Read questions carefully</strong> before audio starts</li>
                      <li>• <strong>Predict answers</strong> based on context and grammar</li>
                      <li>• <strong>Identify question types</strong> (gap-fill, multiple choice, matching)</li>
                      <li>• <strong>Highlight keywords</strong> in questions</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">While Listening</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Follow the audio flow</strong> - don't get stuck on one question</li>
                      <li>• <strong>Listen for synonyms</strong> and paraphrases, not exact words</li>
                      <li>• <strong>Take notes using abbreviations</strong> and symbols</li>
                      <li>• <strong>Pay attention to signposting words</strong> (however, but, finally)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Common Mistakes to Avoid</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Don't exceed word limits</strong> (usually 1-3 words)</li>
                      <li>• <strong>Check spelling carefully</strong> - wrong spelling = wrong answer</li>
                      <li>• <strong>Don't leave blanks</strong> - guess if you're unsure</li>
                      <li>• <strong>Transfer answers immediately</strong> after each section</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  IELTS Reading Tips and Tricks
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Eye className="w-6 h-6 text-orange-600 mr-2" />
                      <h3 className="text-xl font-semibold text-orange-900">Time Management</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Spend 20 minutes per passage</strong> (total 60 minutes)</li>
                      <li>• <strong>Read questions first</strong> to understand what to look for</li>
                      <li>• <strong>Skim for general ideas</strong>, then scan for specific information</li>
                      <li>• <strong>Don't read every word</strong> - focus on key information</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">Question Strategies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">True/False/Not Given</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• TRUE: Information matches exactly</li>
                          <li>• FALSE: Information contradicts</li>
                          <li>• NOT GIVEN: Information not mentioned</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Multiple Choice</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Eliminate wrong options first</li>
                          <li>• Look for paraphrases</li>
                          <li>• Don't choose based on keywords alone</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-teal-900 mb-3">Vocabulary Building</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Learn academic vocabulary</strong> from various topics</li>
                      <li>• <strong>Practice with synonyms</strong> and paraphrases</li>
                      <li>• <strong>Focus on context clues</strong> to guess word meanings</li>
                      <li>• <strong>Build topic-specific vocabulary</strong> (science, environment, technology)</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  IELTS Writing Tips and Tricks
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <PenTool className="w-6 h-6 text-pink-600 mr-2" />
                      <h3 className="text-xl font-semibold text-pink-900">Task 1 (Academic) - Charts and Graphs</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Spend 20 minutes</strong> on Task 1 (minimum 150 words)</li>
                      <li>• <strong>Identify the main trends</strong> and key features</li>
                      <li>• <strong>Use varied vocabulary</strong> for describing changes (increase, surge, plummet)</li>
                      <li>• <strong>Don't give opinions</strong> - just describe what you see</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">Task 2 - Essays</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Essay Structure</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Introduction:</strong> Paraphrase question + thesis statement</li>
                          <li>• <strong>Body Paragraph 1:</strong> Main idea + supporting details</li>
                          <li>• <strong>Body Paragraph 2:</strong> Second main idea + examples</li>
                          <li>• <strong>Conclusion:</strong> Summarize main points</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Tips</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Spend 40 minutes</strong> on Task 2 (minimum 250 words)</li>
                          <li>• <strong>Plan before writing</strong> (5 minutes planning)</li>
                          <li>• <strong>Use linking words</strong> (furthermore, however, in conclusion)</li>
                          <li>• <strong>Vary sentence structures</strong> (simple, compound, complex)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-3">Common Writing Mistakes</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Off-topic responses</strong> - Always address the question directly</li>
                      <li>• <strong>Repetitive vocabulary</strong> - Use synonyms and varied expressions</li>
                      <li>• <strong>Grammar errors</strong> - Check subject-verb agreement, tenses</li>
                      <li>• <strong>Informal language</strong> - Use formal academic style</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  IELTS Speaking Tips and Tricks
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-cyan-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <MessageSquare className="w-6 h-6 text-cyan-600 mr-2" />
                      <h3 className="text-xl font-semibold text-cyan-900">Part 1 - Introduction (4-5 minutes)</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Keep answers concise</strong> but developed (2-3 sentences)</li>
                      <li>• <strong>Extend your responses</strong> with examples or reasons</li>
                      <li>• <strong>Practice common topics</strong> (work, hobbies, hometown)</li>
                      <li>• <strong>Use personal experiences</strong> to make answers authentic</li>
                    </ul>
                  </div>

                  <div className="bg-violet-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-violet-900 mb-3">Part 2 - Cue Card (3-4 minutes)</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Preparation Strategy</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Use the 1-minute prep time</strong> to make notes</li>
                          <li>• <strong>Plan using the bullet points</strong> on the card</li>
                          <li>• <strong>Think of specific examples</strong> and details</li>
                          <li>• <strong>Practice common topics</strong> (person, place, event, object)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Speaking Tips</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Speak for the full 2 minutes</strong> - don't stop early</li>
                          <li>• <strong>Use storytelling techniques</strong> to engage the listener</li>
                          <li>• <strong>Include emotions and feelings</strong> in your response</li>
                          <li>• <strong>Connect ideas with linking words</strong> (first, then, finally)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-rose-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-rose-900 mb-3">Part 3 - Discussion (4-5 minutes)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Give developed answers</strong> with explanations and examples</li>
                      <li>• <strong>Express and justify opinions</strong> clearly</li>
                      <li>• <strong>Compare and contrast</strong> different perspectives</li>
                      <li>• <strong>Use complex language</strong> and varied vocabulary</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Essential Practice Schedule
                </h2>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-4">12-Week Preparation Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Weeks 1-4: Foundation</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Diagnostic test</li>
                        <li>• Basic skills building</li>
                        <li>• Vocabulary expansion</li>
                        <li>• Grammar review</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Weeks 5-8: Skill Development</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Section-specific practice</li>
                        <li>• Strategy application</li>
                        <li>• Timed practice tests</li>
                        <li>• Weakness targeting</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Weeks 9-12: Test Mastery</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Full practice tests</li>
                        <li>• Speaking practice</li>
                        <li>• Final revision</li>
                        <li>• Test day preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Recommended Resources
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Official Materials</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Cambridge IELTS Books (14, 15, 16, 17)</li>
                      <li>• IELTS.org practice tests</li>
                      <li>• British Council IELTS preparation</li>
                      <li>• IDP IELTS preparation materials</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">Online Resources</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• BBC Learning English</li>
                      <li>• TED Talks for listening practice</li>
                      <li>• News websites for reading</li>
                      <li>• Speaking practice apps</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-500 pl-4">
                  Test Day Tips
                </h2>

                <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-4">Before the Test</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>Get a good night's sleep and eat a healthy breakfast</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>Arrive at the test center 30 minutes early</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>Bring required documents (passport, confirmation)</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                      <span>Stay calm and confident</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-teal-900 mb-4">Final Reminders</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <Star className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span><strong>Practice consistently</strong> - daily practice is better than intensive sessions</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <Star className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span><strong>Focus on your weakest areas</strong> while maintaining strong skills</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <Star className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span><strong>Use authentic materials</strong> for realistic practice</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <Star className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span><strong>Get feedback</strong> from teachers or native speakers</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <Star className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                      <span><strong>Stay motivated</strong> by tracking your progress</span>
                    </li>
                  </ul>
                </div>

                {/* Social Share */}
                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Article</h3>
                  <div className="flex space-x-4">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
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
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>Preparation: 2-3 months</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Target className="w-4 h-4 mr-2" />
                    <span>Band Score: 0-9</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Test Duration: 2h 45m</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span>Skills: All 4 sections</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#general" className="text-emerald-600 hover:underline">General Strategies</a></li>
                  <li><a href="#listening" className="text-emerald-600 hover:underline">Listening Tips</a></li>
                  <li><a href="#reading" className="text-emerald-600 hover:underline">Reading Tips</a></li>
                  <li><a href="#writing" className="text-emerald-600 hover:underline">Writing Tips</a></li>
                  <li><a href="#speaking" className="text-emerald-600 hover:underline">Speaking Tips</a></li>
                  <li><a href="#schedule" className="text-emerald-600 hover:underline">Practice Schedule</a></li>
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
              Ready to excel in your IELTS exam? Contact our expert trainers for personalized coaching, proven strategies, and comprehensive preparation support to achieve your target band score.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}