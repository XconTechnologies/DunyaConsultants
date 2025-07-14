import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, BookOpen, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const shareUrl = window.location.href;
  const title = "Kaplan Test of English (KTE) - Complete Guide";

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      color: "text-blue-400 hover:text-blue-600"
    }
  ];

  const tableOfContents = [
    { id: "what-is-kaplan", title: "What is Kaplan Test?" },
    { id: "sections", title: "Sections of Kaplan English Test" },
    { id: "preparation", title: "How to Prepare for KTE?" },
    { id: "cost", title: "Cost for Kaplan Assessment Exam" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-gray-900">Kaplan Test of English</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="py-8">
              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Kaplan Test of English"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              {/* Article Header */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Kaplan Test of English (KTE): Complete Guide & Preparation Tips
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>March 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Dunya Consultants</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">English Test</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Study Abroad</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Test Preparation</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Share:</span>
                    {shareLinks.map((link) => (
                      <button
                        key={link.name}
                        className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${link.color}`}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    If you are an international student planning to study for a Master's or PhD abroad, you may need to prove your English language skills. Different universities accept different tests, so it is crucial to check which one suits you best. The Kaplan Test of English (KTE) is an online test that evaluates your writing, reading, listening, and speaking skills.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    You can take Kaplan assessment test from home anytime without booking an appointment or visiting a Kaplan test center. You just need a suitable technical setup. Results are sent via email within 2-5 days. You can forward the Kaplan assessment exam results to as many universities as you want, completely free of charge. Unlike other tests, there are no extra fees for sending results.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    Here's what you need to know about the Kaplan Test of English and how to prepare for it effectively.
                  </p>
                </div>

                <div id="what-is-kaplan" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">What is Kaplan Test?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Kaplan English Test is an adaptive online test that checks your English language skills in different areas. During the test, you may need to listen to conversations, write an essay, read emails and articles, answer comprehension questions, or speak into your computer's microphone.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Unlike traditional paper-based tests, where everyone answers the same questions, Kaplan test questions work differently. It is an adaptive test, meaning the questions change based on your English level. As you take the test, KTE selects questions that match your abilities, so no two test takers have the exact same questions.
                  </p>
                </div>

                <div id="sections" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Sections of Kaplan English Test</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    The Kaplan English Test checks your skills in reading, listening, writing, and speaking across different timed and untimed sections.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Writing – Timed Section (25-40 Minutes)</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        The Writing section is timed, and its length depends on your English level. You may need to write an essay, paragraph, or email. You'll have time to read the question and type your answer. After the Kaplan assessment exam, a KTE grader will evaluate your work and give you a score.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Listening, Reading & Grammar – No Time Limit</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        In these sections, there is no timer. KTE will automatically end the test once it has enough information about your English level. Your test may be longer or shorter than others, so focus on doing your best. On average, these sections take a little over an hour to complete.
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Speaking – Timed Section (10 Minutes)</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        The Speaking section of Kaplan test questions lasts about 10 minutes. You will speak into your computer's microphone, and your responses will be recorded. A Kaplan assessment test grader will check your answers and give you a score after the test.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="preparation" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">How to Prepare for KTE?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">
                    The best way to get ready for the Kaplan English test is to practice your English skills regularly. Here are the most effective preparation strategies:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Practice English Daily</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Listen to English podcasts and practice writing messages in English. Immerse yourself in the language through various media formats.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Active Communication</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Speak with English-speaking friends, read articles regularly, and try thinking in English to improve fluency.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Format Familiarity</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Get used to multiple-choice questions. Since the test uses this format extensively, practicing similar questions will help you feel more comfortable.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">Pro Tip</h3>
                      <p className="text-blue-800 leading-relaxed text-lg">
                        You will get a chance to practice Kaplan test questions before the real exam, so don't stress about the format.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="cost" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Cost for Kaplan Assessment Exam</h2>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-8 mb-8">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-900 mb-2">£118 (€140)</p>
                      <p className="text-blue-700 text-lg font-medium">Standard Test Fee</p>
                      <p className="text-blue-600 text-sm mt-2">25% discount available for Kaplan partner universities</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The KTE costs around £118 (€140), which is competitive compared to other English proficiency tests. However, you may get a 25% discount if the university you're applying to is a Kaplan partner. Check with the university to see if you qualify.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">Results & Delivery</h3>
                    <p className="text-green-800 leading-relaxed text-lg">
                      You will receive your results via email within 2-5 working days. Kaplan does not send your results to universities—you need to share them yourself. The good news is that you can send them to as many universities as you want without paying any extra fees, unlike some other English tests.
                    </p>
                  </div>
                </div>

                <div id="conclusion" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">What This Means</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Kaplan English Test is an online test you can take from home to check your English skills. It measures your ability in listening, grammar, writing, reading, and speaking, covering levels from beginner (A1) to advanced (C2).
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The test is adaptive, meaning the questions change based on your level. Some people may get more questions than others, but that is completely normal. It is recommended to just take your time and give your best.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    KTE is a simple and flexible way to prove your English proficiency for universities that accept this certification.
                  </p>
                </div>

                <div id="faqs" className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">How many times can you take the Kaplan exam?</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        You can take the Kaplan Test of English (KTE) as many times as you want, anytime. But for each attempt, you need to register again and pay the test fee.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">How can I practice Kaplan test questions?</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        You can practice for the KTE using free resources like practice tests, quizzes, and daily questions. If you want more help, you can also buy their courses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="border-t border-gray-200 pt-8 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Dunya Consultants</p>
                      <p className="text-gray-600">Educational Consultancy Expert</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4">
                    Dunya Consultants has been helping students achieve their study abroad dreams since 2010. With over 17 offices across Pakistan and partnerships with 400+ universities worldwide, we provide comprehensive guidance for international education.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-gray-500">Share:</span>
                    {shareLinks.map((link) => (
                      <button
                        key={link.name}
                        className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${link.color}`}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Help with Test Preparation?</h3>
                  <p className="mb-6 text-blue-100">
                    Get expert guidance for Kaplan Test preparation and other English proficiency tests
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50"
                    onClick={() => window.location.href = 'tel:+923041110947'}
                  >
                    Contact Our Experts
                  </Button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-2 px-3 rounded hover:bg-white transition-colors"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Contact */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Phone:</span>
                    <a href="tel:+923041110947" className="text-blue-600 hover:underline">
                      +92 304 1110947
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Email:</span>
                    <a href="mailto:query@teamdunya.com" className="text-blue-600 hover:underline">
                      query@teamdunya.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-600">Address:</span>
                    <span className="text-gray-700">110 Link Stadium Road Sargodha</span>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <a href="#" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      IELTS vs PTE vs TOEFL: Which Test Should You Choose?
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Compare major English proficiency tests</p>
                  </a>
                  <a href="#" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      Study Abroad: Complete Application Guide 2025
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Step-by-step university application process</p>
                  </a>
                  <a href="#" className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      Scholarship Opportunities for Pakistani Students
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">Find funding for your international education</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}