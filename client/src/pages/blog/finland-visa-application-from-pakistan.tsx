import { motion } from "framer-motion";
import { Calendar, Clock, User, Tag, ArrowRight, BookOpen, FileText, Phone, Mail, MapPin, CheckCircle, AlertCircle, DollarSign, Globe, Users, Star, Award, TrendingUp, Eye, Share2, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import ContactSection from "../../components/contact-us-section";
import Footer from "../../components/footer";

export function FinlandVisaApplicationFromPakistan() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Finland",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-2 text-blue-200 mb-4">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">January 20, 2025</span>
              <span className="text-blue-300">•</span>
              <Clock className="h-4 w-4" />
              <span className="text-sm">15 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Finland Admissions 2025 – Finland Application Fee & Deadline 2025
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              Complete guide to Finland student visa applications from Pakistan, including admission requirements, application fees, deadlines, and step-by-step visa process for 2025.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">By Dunya Consultants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4" />
                <span className="text-sm">Study in Finland</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span className="text-sm">2,847 views</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 prose prose-lg max-w-none"
          >
            {/* Article Introduction */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-0">
                Finland is quite popular for providing high-quality education to international students. Those who are willing to study in Finland will find many degree programs that focus on student learning as well as advanced technology. Tuition fees in Finland are more affordable as compared to other Western countries. The country also provides a friendly environment which makes it a top choice for students looking for the best education experience.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              As an international student in Finland, you can also work part-time while studying and even search for job opportunities after graduation. Finland is a welcoming place for students and provides both bachelor's and master's programs. If you are interested in studying there, it is important to know about the Finland study visa requirements and admission process. By understanding the process, you can take the first step towards studying in one of the most student-friendly countries in the world.
            </p>

            {/* Best Finnish Universities */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                Best Finnish Universities for International Students
              </h2>
              
              <p className="text-gray-700 mb-6">Here is a list of some famous universities in Finland that are providing the best academic programs:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "Aalto University",
                  "University of Jyväskylä", 
                  "University of Turku",
                  "LUT University",
                  "University of Vaasa",
                  "Hanken School of Economics",
                  "Metropolia University of Applied Sciences",
                  "Laurea University of Applied Sciences"
                ].map((university, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{university}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                Eligibility Criteria for Finland Study Visa from Pakistan
              </h2>
              
              <p className="text-gray-700 mb-6">To apply for higher education programs in Finland, you must meet specific Finland student visa requirements based on the level of study as given below:</p>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Bachelor's Programs</h3>
                  <p className="text-green-700">You must have a high school diploma that qualifies you for university in your home country.</p>
                </div>
                
                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Master's Programs</h3>
                  <p className="text-blue-700">You must have a bachelor's degree. Additionally, University of Applied Sciences (UAS) master's programs require two years of relevant job experience.</p>
                </div>
              </div>
            </section>

            {/* Requirements Section */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-purple-600 mr-3" />
                Requirements to Study in Finland for International Students
              </h2>
              
              <p className="text-gray-700 mb-6">When applying to study in Finland, make sure to gather all the required documents to complete your requirements for Finland student visa smoothly:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "Filled-out application form",
                  "Proof of English proficiency (IELTS, TOEFL)",
                  "Academic transcripts & degree certificates",
                  "Statement of Purpose or application essays (if required)",
                  "Recommendation letters & motivation letters",
                  "Portfolio (if needed for programs like design or architecture)"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{requirement}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Application Process */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="h-8 w-8 text-indigo-600 mr-3" />
                How to Apply for a Finland Student Visa from Pakistan?
              </h2>
              
              <p className="text-gray-700 mb-6">If you want to apply for a student visa to Finland from Pakistan, follow these simple steps:</p>
              
              <div className="space-y-4 mb-6">
                {[
                  "Go to the official website for a Finland study visa from Pakistan to get started.",
                  "Complete the Finland d visa application form online.",
                  "Make sure to attach all the documents required for Finland student visa.",
                  "Submit the processing fee as part of your application.",
                  "Go to the nearest Finnish embassy or authorized service center to provide your fingerprints and verify your identity."
                ].map((step, index) => (
                  <div key={index} className="flex items-start p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-800">{step}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Application Fee & Deadline */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-8 w-8 text-red-600 mr-3" />
                Finland Application Fee & Deadline 2025
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-red-800 mb-2">Application Fee</h3>
                <p className="text-red-700 mb-4">Students applying for higher education in Finland from countries outside the EEA, EU, or Switzerland have to pay an application fee of <strong>100 euros</strong>. This fee is required for both Bachelor's as well as Master's degree programs.</p>
                
                <h3 className="font-semibold text-red-800 mb-2">Application Deadline</h3>
                <p className="text-red-700">The Finland application deadline for Major intake is <strong>22nd January, 2025</strong>. Make sure to apply in your selected program in advance and meet all the criteria on time.</p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-emerald-600 mr-3" />
                Conclusion
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Finland provides a high-quality education to international students with a strong focus on personal as well as professional growth. Finnish universities are quite popular in areas like environmental science, technology, and business. Study in Finland provides more than 500-degree programs taught in English which makes them a great option for international students. Getting a degree from a top Finnish university is a key for building a successful career, whether in research, academics, or practical fields. Moreover, it is crucial to meet all requirements to study in Finland for international students.
              </p>
            </section>

            {/* FAQs */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="h-8 w-8 text-blue-600 mr-3" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">How much bank balance is required for Finland student visa?</h3>
                  <p className="text-gray-700">To apply for a student visa in Finland, you need to show you have enough money to live there. For studies lasting one academic year or more, you need to prove you have at least €6,720 per year (approximately €560 per month).</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">What is Finland study visa ratio from Pakistan?</h3>
                  <p className="text-gray-700">Finland has a good visa approval rate for Pakistani students who meet all the requirements and submit complete documentation. The success rate is generally high for genuine students with proper financial backing and clear study plans.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">How much bank balance is required for Finland student visa with spouse?</h3>
                  <p className="text-gray-700">If you're bringing your spouse, you need to show additional financial proof. The total amount required increases to approximately €13,440 per year for both the student and spouse combined.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I study in Finland without IELTS?</h3>
                  <p className="text-gray-700">While IELTS is the most commonly accepted English proficiency test, some universities in Finland may accept other tests like TOEFL, PTE Academic, or Cambridge English qualifications. Some programs may also waive the English requirement if you've completed previous education in English.</p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Finland Study Journey?</h3>
              <p className="text-blue-100 mb-6">Get expert guidance from Pakistan's most trusted education consultancy</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+923041110947" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (+92) 304 1110947
                </a>
                <a 
                  href="mailto:query@teamdunya.com" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Consultation
                </a>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {[
                  { title: "Best Finnish Universities", id: "universities" },
                  { title: "Eligibility Criteria", id: "eligibility" },
                  { title: "Required Documents", id: "requirements" },
                  { title: "Application Process", id: "process" },
                  { title: "Fees & Deadlines", id: "fees" },
                  { title: "FAQs", id: "faqs" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 pl-4 border-l-2 border-transparent hover:border-blue-600"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Facts */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-700">Application Fee:</span>
                  <span className="font-semibold text-blue-900">€100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Deadline:</span>
                  <span className="font-semibold text-blue-900">Jan 22, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Financial Proof:</span>
                  <span className="font-semibold text-blue-900">€6,720/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Language Test:</span>
                  <span className="font-semibold text-blue-900">IELTS/TOEFL</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                  Get Free Consultation
                </button>
              </form>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Study in Finland: Complete Guide",
                    category: "Study Guides",
                    readTime: "8 min read"
                  },
                  {
                    title: "Finland Scholarship Opportunities",
                    category: "Scholarships",
                    readTime: "6 min read"
                  },
                  {
                    title: "Student Life in Finland",
                    category: "Lifestyle",
                    readTime: "5 min read"
                  }
                ].map((article, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                      {article.title}
                    </h4>
                    <div className="text-xs text-gray-500 mt-1">
                      {article.category} • {article.readTime}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}