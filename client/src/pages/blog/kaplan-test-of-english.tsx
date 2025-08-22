import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, FileText, Target, Award, Globe, DollarSign, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function KaplanTestOfEnglish() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-[#1D50C9] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#1D50C9 text-white px-4 py-2 rounded-full text-sm font-medium">
                Test Preparation
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
              Kaplan Test of English (KTE): Complete Guide 2025
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to the Kaplan Test of English (KTE) including format, preparation tips, cost, and how to take the test from home.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>March 25, 2025</span>
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
                  If you are an international student planning to study for a Master's or PhD abroad, you may need to prove your English language skills. Different universities accept different tests, so it is crucial to check which one suits you best. The <strong>Kaplan Test of English (KTE)</strong> is an online test that evaluates your writing, reading, listening, and speaking skills.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can take Kaplan assessment test from home anytime without booking an appointment or visiting a Kaplan test center. You just need a suitable technical setup. Results are sent via email within 2-5 days. You can forward the Kaplan assessment exam results to as many universities as you want, completely free of charge. Unlike other tests, there are no extra fees for sending results.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you think KTE is the right test for you, please keep reading to know all the important details to help you understand how KTE works.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Table of Contents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#what-is-kaplan" className="hover:bg-[#1845B3]">What is Kaplan Test?</a></li>
                  <li><a href="#test-sections" className="hover:bg-[#1845B3]">Sections of Kaplan English Test</a></li>
                  <li><a href="#preparation" className="hover:bg-[#1845B3]">How to Prepare for KTE?</a></li>
                  <li><a href="#cost" className="hover:bg-[#1845B3]">Cost for Kaplan Assessment Exam</a></li>
                  <li><a href="#conclusion" className="hover:bg-[#1845B3]">Conclusion</a></li>
                  <li><a href="#faqs" className="hover:bg-[#1845B3]">FAQs</a></li>
                </ul>
              </div>

              {/* What is Kaplan Test Section */}
              <div className="mb-8" id="what-is-kaplan">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">What is Kaplan Test?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>Kaplan English Test</strong> is an adaptive online test that checks your English language skills in different areas. During the test, you may need to listen to conversations, write an essay, read emails and articles, answer comprehension questions, or speak into your computer's microphone.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Unlike traditional paper-based tests, where everyone answers the same questions, Kaplan test questions work differently. It is an adaptive test, meaning the questions change based on your English level. As you take the test, KTE selects questions that match your abilities, so no two test takers have the exact same questions.
                </p>
              </div>

              {/* Test Sections */}
              <div className="mb-8" id="test-sections">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Sections of Kaplan English Test</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In the Kaplan testing center, The Kaplan English Test checks your skills in reading, listening, writing, and speaking.
                </p>

                {/* Writing Section */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1565c0] flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Writing – Timed Section (25-40 Minutes)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Writing section is timed, and its length depends on your English level. You may need to write an essay, paragraph, or email. You'll have time to read the question and type your answer. After the Kaplan assessment exam, a KTE grader will evaluate your work and give you a score.
                  </p>
                </div>

                {/* Listening, Reading & Grammar Section */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1565c0] flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Listening, Reading & Grammar – No Time Limit
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In these sections, there is no timer. KTE will automatically end the test once it has enough information about your English level. Your test may be longer or shorter than others, so focus on doing your best. On average, these sections take a little over an hour to complete.
                  </p>
                </div>

                {/* Speaking Section */}
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#1565c0] flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Speaking – Timed Section (10 Minutes)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Speaking section of Kaplan test questions lasts about 10 minutes. You will speak into your computer's microphone, and your responses will be recorded. A Kaplan assessment test grader will check your answers and give you a score after the test.
                  </p>
                </div>
              </div>

              {/* Preparation Section */}
              <div className="mb-8" id="preparation">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">How to Prepare for KTE?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The best way to get ready for the Kaplan English test is to practice your English skills regularly. Let's discuss below how you can practice before going to Kaplan testing center.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 #1D50C9 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Practice Regularly</h4>
                      <p className="text-gray-600 text-sm">Listen to English podcasts and practice writing messages in English.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 #1D50C9 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Immerse Yourself</h4>
                      <p className="text-gray-600 text-sm">Speak with a friend, read articles, and try thinking in English.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 #1D50C9 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Multiple-Choice Practice</h4>
                      <p className="text-gray-600 text-sm">Since the test uses this format, practicing similar questions can help.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 #1D50C9 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Practice Questions</h4>
                      <p className="text-gray-600 text-sm">You will get a chance to practice Kaplan test questions before the real one, so don't stress.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost Section */}
              <div className="mb-8" id="cost">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Cost for Kaplan Assessment Exam</h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 #1845B3 mr-3" />
                    <h3 className="text-xl font-semibold text-[#1565c0]">Pricing Information</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The KTE costs around <strong>£118 (€140)</strong>, which is not the cheapest option. However, you may get a <strong>25% discount</strong> if the university you're applying to is a Kaplan partner. Check with the university to see if you qualify.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You will receive your results at Kaplan online center in <strong>2-5 working days</strong>. Kaplan does not send your results to universities—you need to share them yourself. The good news is that you can send them to as many universities as you want without paying any extra fees, unlike some other English tests.
                  </p>
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="mb-8" id="conclusion">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>Kaplan English Test</strong> is an online test you can take from home to check your English skills. It measures your ability in listening, grammar, writing, reading, and speaking, covering levels from beginner (A1) to advanced (C2). The test is adaptive, meaning the questions change based on your level.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Some people may get more questions than others, but that is completely okay. It is recommended to just take your time and give your best. KTE is a simple and flexible way to prove your English proficiency.
                </p>
              </div>

              {/* FAQs Section */}
              <div className="mb-8" id="faqs">
                <h2 className="text-3xl font-bold mb-6 border-l-4 #1D50C9 pl-4">FAQs</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <AlertCircle className="w-5 h-5 #1D50C9 mr-2" />
                      How many times can you take the Kaplan exam?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You can take the Kaplan Test of English (KTE) as many times as you want, anytime. But for each attempt, you need to register again and pay the test fee.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <AlertCircle className="w-5 h-5 #1D50C9 mr-2" />
                      How can I practice Kaplan test questions?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You can practice for the KTE using free resources like practice tests, quizzes, and daily questions. If you want more help, you can also buy their courses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#1565c0]">Need Help with KTE Preparation?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants for your Kaplan Test of English preparation and study abroad journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+923041110947" 
                    className="#1845B3 text-white px-6 py-3 rounded-lg font-semibold hover:bg-#1a73e8 transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +92 304 1110947
                  </a>
                  <a 
                    href="mailto:query@teamdunya.com" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center"
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
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Target className="w-5 h-5 mr-2 #1D50C9" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Test Type:</span>
                    <span className="font-medium">Online Adaptive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">1-2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-medium">£118 (€140)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Results:</span>
                    <span className="font-medium">2-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">From Home</span>
                  </div>
                </div>
              </div>

              {/* Test Sections */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 #1D50C9" />
                  Test Sections
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Writing</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">25-40 min</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Reading</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">No limit</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Listening</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">No limit</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Speaking</span>
                    <span className="text-xs bg-blue-100 #1845B3 px-2 py-1 rounded">10 min</span>
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