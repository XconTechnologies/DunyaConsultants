import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, BookOpen, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const shareUrl = window.location.href;
  const title = "Kaplan Test of English (KTE) - Complete Guide";

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      color: "bg-blue-400 hover:bg-blue-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-700 hover:bg-blue-800"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`,
      color: "bg-gray-600 hover:bg-gray-700"
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-blue-600">Kaplan Test of English</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Featured Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Kaplan Test of English</h1>
                    <p className="text-xl opacity-90">Complete Guide & Preparation Tips</p>
                  </div>
                </div>
              </div>

              {/* Article Meta */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
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

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="secondary">English Test</Badge>
                    <Badge variant="secondary">Study Abroad</Badge>
                    <Badge variant="secondary">Test Preparation</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Share:</span>
                    {shareLinks.map((link) => (
                      <Button
                        key={link.name}
                        size="sm"
                        variant="outline"
                        className={`w-8 h-8 p-0 ${link.color} border-0 text-white`}
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <link.icon className="w-3 h-3" />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    If you are an international student planning to study for a Master's or PhD abroad, you may need to prove your English language skills. Different universities accept different tests, so it is crucial to check which one suits you best. The Kaplan Test of English (KTE) is an online test that evaluates your writing, reading, listening, and speaking skills.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    You can take Kaplan assessment test from home anytime without booking an appointment or visiting a Kaplan test center. You just need a suitable technical setup. Results are sent via email within 2-5 days. You can forward the Kaplan assessment exam results to as many universities as you want, completely free of charge. Unlike other tests, there are no extra fees for sending results.
                  </p>
                </div>

                <div id="what-is-kaplan" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Kaplan Test?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Kaplan English Test is an adaptive online test that checks your English language skills in different areas. During the test, you may need to listen to conversations, write an essay, read emails and articles, answer comprehension questions, or speak into your computer's microphone.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Unlike traditional paper-based tests, where everyone answers the same questions, Kaplan test questions work differently. It is an adaptive test, meaning the questions change based on your English level. As you take the test, KTE selects questions that match your abilities, so no two test takers have the exact same questions.
                  </p>
                </div>

                <div id="sections" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Sections of Kaplan English Test</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    In the Kaplan testing center, The Kaplan English Test checks your skills in reading, listening, writing, and speaking.
                  </p>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Writing – Timed Section (25-40 Minutes)</h3>
                        <p className="text-gray-700">
                          The Writing section is timed, and its length depends on your English level. You may need to write an essay, paragraph, or email. You'll have time to read the question and type your answer. After the Kaplan assessment exam, a KTE grader will evaluate your work and give you a score.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Listening, Reading & Grammar – No Time Limit</h3>
                        <p className="text-gray-700">
                          In these sections, there is no timer. KTE will automatically end the test once it has enough information about your English level. Your test may be longer or shorter than others, so focus on doing your best. On average, these sections take a little over an hour to complete.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Speaking – Timed Section (10 Minutes)</h3>
                        <p className="text-gray-700">
                          The Speaking section of Kaplan test questions lasts about 10 minutes. You will speak into your computer's microphone, and your responses will be recorded. A Kaplan assessment test grader will check your answers and give you a score after the test.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div id="preparation" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare for KTE?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The best way to get ready for the Kaplan English test is to practice your English skills regularly. Let's discuss below how you can practice before going to Kaplan testing center.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Listen to English podcasts and practice writing messages in English.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Speak with a friend, read articles, and try thinking in English.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Get Used to Multiple-Choice Questions. Since the test uses this format, practicing similar questions can help.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">You will get a chance to practice Kaplan test questions before the real one, so don't stress.</p>
                    </div>
                  </div>
                </div>

                <div id="cost" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost for Kaplan Assessment Exam</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                    <p className="text-blue-800 font-semibold mb-2">Test Fee: £118 (€140)</p>
                    <p className="text-blue-700 text-sm">25% discount available for Kaplan partner universities</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The KTE costs around £118 (€140), which is not the cheapest option. However, you may get a 25% discount if the university you're applying to is a Kaplan partner. Check with the university to see if you qualify.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    You will receive your results at Kaplan online center in 2-5 working days. Kaplan does not send your results to universities—you need to share them yourself. The good news is that you can send them to as many universities as you want without paying any extra fees, unlike some other English tests.
                  </p>
                </div>

                <div id="conclusion" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Kaplan English Test is an online test you can take from home to check your English skills. It measures your ability in listening, grammar, writing, reading, and speaking, covering levels from beginner (A1) to advanced (C2). The test is adaptive, meaning the questions change based on your level. Some people may get more questions than others, but that is completely okay. It is recommended to just take your time and give your best. KTE is a simple and flexible way to prove your English proficiency.
                  </p>
                </div>

                <div id="faqs" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs</h2>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">How many times can you take the Kaplan exam?</h3>
                        <p className="text-gray-700">
                          You can take the Kaplan Test of English (KTE) as many times as you want, anytime. But for each attempt, you need to register again and pay the test fee.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">How can I practice Kaplan test questions?</h3>
                        <p className="text-gray-700">
                          You can practice for the KTE using free resources like practice tests, quizzes, and daily questions. If you want more help, you can also buy their courses.
                        </p>
                      </CardContent>
                    </Card>
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
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
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
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Services</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      IELTS Preparation
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      PTE Coaching
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      TOEFL Training
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      University Applications
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Visa Consultation
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}