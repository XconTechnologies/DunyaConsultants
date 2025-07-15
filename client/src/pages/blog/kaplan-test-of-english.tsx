import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, Target, Award, Globe } from "lucide-react";
import { Link } from "wouter";

export default function KaplanTestOfEnglish() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Test Preparation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Kaplan Test of English (KTE): Complete Guide 2025
            </h1>
            
            <p className="text-xl text-blue-100 mb-6">
              Comprehensive guide to the Kaplan Test of English (KTE) including format, preparation tips, scoring system, and how it compares to other English proficiency tests for international students.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Dunya Consultants
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Jan 15, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                8 min read
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Kaplan Test of English"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">What is KTE?</h3>
                </div>
                <p className="text-gray-700">
                  The Kaplan Test of English (KTE) is a computer-based English proficiency test designed to assess the English language skills of non-native speakers for academic and professional purposes.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Test Format and Structure</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">KTE Test Components</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Reading (30 minutes):</strong> Tests comprehension of academic texts with multiple-choice questions
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Listening (30 minutes):</strong> Evaluates understanding of spoken English in academic contexts
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Writing (30 minutes):</strong> Assesses ability to write clear, coherent academic texts
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Speaking (15 minutes):</strong> Tests oral communication skills through recorded responses
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scoring System</h2>
              
              <p className="text-gray-700 mb-6">
                The KTE uses a scoring scale from 200-800, similar to other standardized tests. Each section is scored separately, and an overall composite score is calculated.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">High Proficiency</h4>
                  <p className="text-sm text-green-700">650-800: Advanced level, ready for academic programs</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Intermediate</h4>
                  <p className="text-sm text-yellow-700">450-649: Good foundation, may need additional preparation</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Developing</h4>
                  <p className="text-sm text-orange-700">300-449: Basic skills, requires significant improvement</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Beginner</h4>
                  <p className="text-sm text-red-700">200-299: Foundational level, extensive preparation needed</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparation Tips</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  Effective Preparation Strategy
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                    <span><strong>Take a diagnostic test</strong> to identify your current level and areas for improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                    <span><strong>Create a study schedule</strong> with regular practice sessions for each skill area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                    <span><strong>Practice with official materials</strong> from Kaplan to familiarize yourself with the format</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                    <span><strong>Focus on time management</strong> during practice sessions to complete sections within time limits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                    <span><strong>Take multiple practice tests</strong> to build confidence and identify remaining weaknesses</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">KTE vs Other English Tests</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Test</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Format</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Scoring</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">KTE</td>
                      <td className="border border-gray-300 px-4 py-2">1.75 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Computer-based</td>
                      <td className="border border-gray-300 px-4 py-2">200-800</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">IELTS</td>
                      <td className="border border-gray-300 px-4 py-2">2.75 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Paper/Computer</td>
                      <td className="border border-gray-300 px-4 py-2">0-9 bands</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">TOEFL</td>
                      <td className="border border-gray-300 px-4 py-2">3 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Computer-based</td>
                      <td className="border border-gray-300 px-4 py-2">0-120</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">PTE</td>
                      <td className="border border-gray-300 px-4 py-2">2 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Computer-based</td>
                      <td className="border border-gray-300 px-4 py-2">10-90</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Universities Accepting KTE</h2>
              
              <p className="text-gray-700 mb-6">
                Many universities worldwide now accept KTE scores for admission. The test is particularly popular in:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span>United States universities</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Canadian institutions</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Australian universities</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span>UK educational institutions</span>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Take the KTE?</h3>
                <p className="mb-4">
                  Get expert guidance and preparation support from Dunya Consultants. Our experienced team will help you achieve your target score and secure admission to your dream university.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us Today
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#format" className="text-blue-600 hover:text-blue-800">Test Format and Structure</a></li>
                  <li><a href="#scoring" className="text-blue-600 hover:text-blue-800">Scoring System</a></li>
                  <li><a href="#preparation" className="text-blue-600 hover:text-blue-800">Preparation Tips</a></li>
                  <li><a href="#comparison" className="text-blue-600 hover:text-blue-800">KTE vs Other Tests</a></li>
                  <li><a href="#universities" className="text-blue-600 hover:text-blue-800">Accepting Universities</a></li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help with KTE?</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
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
      </div>
    </div>
  );
}