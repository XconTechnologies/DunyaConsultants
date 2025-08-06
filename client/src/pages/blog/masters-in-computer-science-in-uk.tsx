import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, ExternalLink, ChevronRight, Users, GraduationCap, Building, DollarSign, MapPin, FileText, CheckCircle, Star, Globe } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/blog/ContactForm";

export default function MastersInComputerScienceInUK() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Blue Background */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#124FD3' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Link href="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Masters in Computer Science in UK
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 11, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dunya Consultants</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content - 3 columns */}
          <div className="lg:col-span-3">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Featured Image */}
              <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <GraduationCap className="w-16 h-16 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold">Masters in Computer Science</h2>
                  <p className="text-blue-100">Your Gateway to UK's Top Universities</p>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Article Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    Study in UK
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                    <Users className="w-3 h-3 mr-1" />
                    Computer Science
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Building className="w-3 h-3 mr-1" />
                    Masters Degree
                  </Badge>
                </div>

                {/* Table of Contents */}
                <Card className="mb-8 border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                      Table of Contents
                    </h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#what-is-msc" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        What is MSc Computer Science in UK?
                      </a>
                      <a href="#top-universities" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        Top Universities in UK For Masters in Computer Science
                      </a>
                      <a href="#eligibility" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        Eligibility Criteria
                      </a>
                      <a href="#documents" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        Documents Required
                      </a>
                      <a href="#application-process" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        How to Apply
                      </a>
                      <a href="#cost" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        Cost of Studying
                      </a>
                      <a href="#job-opportunities" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        Job Opportunities
                      </a>
                      <a href="#faqs" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ChevronRight className="w-4 h-4 mr-1" />
                        FAQs
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Are you looking for the best place to study for a Master's in Computer Science? The United Kingdom is home to more than 551,000 international students and provides a welcoming learning environment where they can meet people from all over the world. The IT industry is growing quickly, and skilled computer science experts are needed throughout the industry.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This makes Computer Science one of the most popular and valuable fields currently. Around 157 UK universities offer Masters in Computer Science in UK and provide top-quality education. In addition, you will get essential skills through MSc in computer science in UK like software development, coding, and system design.
                  </p>
                </div>

                <Separator className="my-8" />

                {/* What is MSc Computer Science in UK */}
                <section id="what-is-msc" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
                    What is MSc Computer Science in UK?
                  </h2>
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      A MS in computer science in UK is all about studying computers and how they work. It is also called MEng or MSc in Computer Science and usually takes around one year. In this course, you will learn important topics like how computers solve problems (algorithms), how information is stored and used, analyzing data, and how machines can work automatically.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Moreover, a master in computer science in UK can open the door to exciting job opportunities with some of the top tech companies of the world and give you all skills required for a successful career in technology.
                  </p>
                </section>

                {/* Top Universities */}
                <section id="top-universities" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Building className="w-8 h-8 mr-3 text-blue-600" />
                    Top Universities in UK For Masters in Computer Science
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Studying in the universities in UK for masters in computer science is more affordable compared to some other countries. This is because masters in CS in UK programs takes only one year which means you pay less tuition overall than in places like the United States, where programs are often longer.
                  </p>
                  
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Top 10 UK Universities for Computer Science Masters</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-semibold">Rank</th>
                              <th className="text-left py-3 px-4 font-semibold">University Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              "University of Oxford",
                              "University of Cambridge", 
                              "University College London (UCL)",
                              "University of Edinburgh",
                              "Imperial College London",
                              "University of Birmingham",
                              "Queen Mary University of London",
                              "University of Manchester",
                              "University of Southampton",
                              "University of Bristol"
                            ].map((university, index) => (
                              <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4">{university}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Eligibility Criteria */}
                <section id="eligibility" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 mr-3 text-blue-600" />
                    Eligibility Criteria for UK Masters in Computer Science
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Before applying for an MS in Computer Science in the UK, make sure you check the eligibility criteria for the university you are interested in. MS computer science in UK eligibility requirements are as follows:
                  </p>
                  
                  <div className="grid md:grid-cols-1 gap-4">
                    {[
                      "A score of 60% to 70% in your undergraduate degree",
                      "Some universities might also ask for relevant work experience",
                      "A good score in an English language test such as IELTS or TOEFL"
                    ].map((requirement, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500">
                        <CardContent className="p-4">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{requirement}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-8 h-8 mr-3 text-blue-600" />
                    Documents Required for MSc in Computer Science UK
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    When applying to UK universities for masters in computer science, you need to provide all important documents along with your application. Let's discuss below all the documents you must have while applying to MSc computer science in UK universities:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Your Bachelor's Degree certificate and transcripts",
                      "Your English language test scores, such as IELTS or TOEFL",
                      "Official academic records from your past studies",
                      "A CV or resume",
                      "Reference letters or Letters of Recommendation",
                      "A SOP or Personal Statement explaining your interest"
                    ].map((document, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-4">
                          <div className="flex items-center">
                            <FileText className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{document}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Application Process */}
                <section id="application-process" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Users className="w-8 h-8 mr-3 text-blue-600" />
                    How to Apply to Top UK Universities for Masters in Computer Science?
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The admission process for MSc computer science in UK universities begins with selecting an intake. UK universities generally have two intakes: January/February and September/October. Some universities might also provide an additional intake in May.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Check all entry requirements for MS computer science in UK you are interested in",
                      "Next, check application deadlines to submit your forms on time",
                      "Fill out and submit the masters in computer application in UK form along with all required documents",
                      "Complete payment of the application fees as given",
                      "Once your application is reviewed, you will get a confirmation email",
                      "If needed, pay the tuition fee and the initial deposit to secure your place",
                      "Get the CAS (Confirmation of Acceptance for Studies) letter",
                      "Use this Confirmation of Acceptance for Studies letter to apply for your student visa"
                    ].map((step, index) => (
                      <Card key={index} className="border-l-4 border-l-purple-500">
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Cost */}
                <section id="cost" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <DollarSign className="w-8 h-8 mr-3 text-blue-600" />
                    Cost of Studying MSc in Computer Science in UK
                  </h2>
                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-gray-900">Tuition Fees</h3>
                          <p className="text-gray-700 leading-relaxed">
                            The cost of studying MSc in Computer Science in UK varies by university and program. Generally, international students can expect to pay between £15,000 to £40,000 per year for tuition fees at top universities.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-gray-900">Living Expenses</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Living costs in the UK vary by location, with London being the most expensive. Students should budget approximately £12,000 to £18,000 per year for accommodation, food, transportation, and other personal expenses.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Job Opportunities */}
                <section id="job-opportunities" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Globe className="w-8 h-8 mr-3 text-blue-600" />
                    Job Opportunities in UK after MS in Computer Science
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    After completing your Masters in Computer Science in the UK, you'll have access to excellent career opportunities in one of the world's leading tech markets. The UK's thriving technology sector offers diverse roles across various industries.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Software Development",
                        roles: ["Software Engineer", "Full Stack Developer", "Mobile App Developer", "DevOps Engineer"],
                        icon: <FileText className="w-6 h-6" />
                      },
                      {
                        title: "Data & AI",
                        roles: ["Data Scientist", "Machine Learning Engineer", "AI Researcher", "Data Analyst"],
                        icon: <Star className="w-6 h-6" />
                      },
                      {
                        title: "Technology Leadership",
                        roles: ["Technical Lead", "Product Manager", "Solution Architect", "Technology Consultant"],
                        icon: <Users className="w-6 h-6" />
                      }
                    ].map((category, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="text-blue-600 mr-3">
                              {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                          </div>
                          <ul className="space-y-2">
                            {category.roles.map((role, roleIndex) => (
                              <li key={roleIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {role}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        Pursuing a Masters in Computer Science in the UK offers an exceptional opportunity to advance your career in technology. With world-renowned universities, cutting-edge research facilities, and strong industry connections, the UK provides an ideal environment for academic and professional growth. The one-year program duration makes it cost-effective while delivering comprehensive knowledge and skills highly valued by employers worldwide.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* FAQs */}
                <section id="faqs" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <BookOpen className="w-8 h-8 mr-3 text-blue-600" />
                    Frequently Asked Questions
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        question: "Can I do internships while pursuing a Master's in Computer Science in the UK?",
                        answer: "Yes, international students can undertake internships during their studies, subject to visa conditions. Many universities have partnerships with tech companies offering internship opportunities."
                      },
                      {
                        question: "Can you do an MS in computer science UK without IELTS?",
                        answer: "Some universities may accept alternative English proficiency tests like TOEFL, PTE, or their own English assessments. However, IELTS remains the most widely accepted test."
                      },
                      {
                        question: "Is CGPA essential for MS computer science in UK?",
                        answer: "While a good CGPA (typically 60-70% or equivalent) is important, UK universities also consider other factors like work experience, personal statement, and letters of recommendation in their holistic admission process."
                      }
                    ].map((faq, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Call to Action */}
                <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                    <p className="text-blue-100 mb-6 text-lg">
                      Get expert guidance from Pakistan's most trusted education consultancy for your UK Computer Science Masters application.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                        <Users className="w-4 h-4 mr-2" />
                        Book Free Consultation
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View All Programs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.article>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Form */}
            <ContactForm />

            {/* Quick Links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-blue-600" />
                  Related Articles
                </h3>
                <div className="space-y-3">
                  {[
                    { title: "Study in UK Guide", href: "/blog/study-in-uk" },
                    { title: "UK Student Visa Requirements", href: "/blog/uk-student-dependent-visa-new-rules" },
                    { title: "Top Universities in London", href: "/blog/top-10-universities-in-london" },
                    { title: "IELTS Preparation Tips", href: "/blog/ielts-preparation-tips-and-tricks" }
                  ].map((link, index) => (
                    <Link key={index} href={link.href} className="block">
                      <div className="flex items-center p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition-all">
                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-700 hover:text-blue-600">{link.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Need Expert Guidance?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>110 Link Stadium Road, Sargodha</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>(+92) 304 1110947</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>query@teamdunya.com</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-white text-blue-600 hover:bg-gray-100">
                  Contact Us Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}