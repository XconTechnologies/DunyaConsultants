import { motion } from "framer-motion";
import { Calendar, Clock, User, GraduationCap, MapPin, DollarSign, BookOpen, Award, FileText, Phone, Mail, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function MBBSInSwedenForPakistaniStudents() {
  const universities = [
    "Linköping University Faculty of Medicine and Health Sciences",
    "Örebro University School of Medical Sciences", 
    "Karolinska Institute Faculty of Medicine",
    "Sahlgrenska Academy, University of Gothenburg",
    "Uppsala University Faculty of Medicine",
    "Lund University Faculty of Medicine",
    "Umea University Faculty of Medicine",
    "Gothenburg University"
  ];

  const eligibilityRequirements = [
    "Completed 12th class with at least 50% marks in Chemistry, Biology, and Physics",
    "Age between 17-25 years at the time of application",
    "English language proficiency test scores (IELTS/TOEFL)",
    "May require entrance examinations for certain universities"
  ];

  const requiredDocuments = [
    "Completed Application Form",
    "Authorized photocopy of high school diploma",
    "Proof of Secondary Education",
    "2 Passport-sized pictures",
    "Valid Passport or National ID",
    "English Language Proficiency (IELTS/TOEFL)",
    "Transcripts or Academic Records",
    "Personal Statement or SOP",
    "Letters of Recommendation",
    "Application Fee",
    "Financial statement",
    "Medical Certificate"
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Visit University Website",
      description: "Check official website for latest admission intake notifications and updates"
    },
    {
      step: 2, 
      title: "Access Application Portal",
      description: "Open the leading application portal for university admissions"
    },
    {
      step: 3,
      title: "Fill Application Form",
      description: "Complete online application form and pay application charges"
    },
    {
      step: 4,
      title: "Submit Documents",
      description: "Submit all mandatory supporting documents"
    },
    {
      step: 5,
      title: "Track Application",
      description: "Keep checking application status frequently"
    }
  ];

  const scholarships = [
    "Swedish Institute Scholarships",
    "University-specific scholarships",
    "Merit-based financial aid",
    "Need-based assistance programs"
  ];

  const faqData = [
    {
      question: "How can I increase my chances of admission to medical colleges in Sweden?",
      answer: "Maintain excellent academic grades, prepare thoroughly for entrance exams, demonstrate strong English proficiency, and submit a compelling personal statement highlighting your motivation for medicine."
    },
    {
      question: "What is Sweden's visa ratio for Pakistani students?",
      answer: "Sweden generally has a favorable visa approval rate for Pakistani students who meet all requirements and provide complete documentation. Success rates are high for well-prepared applications."
    },
    {
      question: "Who can sponsor me for MBBS in Sweden?",
      answer: "Parents, close relatives, or educational loan providers can sponsor your studies. You need to show sufficient financial resources to cover tuition fees and living expenses."
    },
    {
      question: "Is IELTS mandatory for a Sweden student visa?",
      answer: "Yes, English proficiency proof through IELTS, TOEFL, or other accepted tests is mandatory for international students from non-English speaking countries like Pakistan."
    }
  ];

  return (
    
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              MBBS in Sweden for Pakistani Students
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl leading-relaxed">
              Comprehensive guide to pursuing medical education in Sweden with world-class universities, affordable fees, and excellent career opportunities.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="h-4 w-4" />
                <span>Published: Jan 19, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                <span>20 min read</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <User className="h-4 w-4" />
                <span>Dunya Consultants</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Article Content */}
          <div className="lg:col-span-2">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              
              {/* Introduction */}
              <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border-l-4 border-blue-600">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Are you willing to pursue your medical study abroad but are confused about which country to choose from? If yes, then you are at the right place. <strong>MBBS in Sweden for Pakistani students</strong> is one of the best options that you should consider. The government of Sweden has made massive progress in various fields like technology, science, and education over the past decades.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Many medical colleges in Sweden provide high-quality education to international students. These institutions not only allow you to experience a new and totally different culture but also provide several on-campus facilities. Moreover, Swedish universities additionally pay massive attention to the personal growth of all students and prepare them for practical life.
                </p>
              </div>

              {/* Medical Universities List */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  List of Medical Universities in Sweden
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Over the past years, Sweden has gained massive popularity for having the best medical colleges. The teachers in these medical institutions focus on problem-solving strategies rather than just simple learning methods.
                  </p>
                  <div className="grid gap-4">
                    {universities.map((university, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 font-medium">{university}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Eligibility Criteria */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  Eligibility Criteria for Sweden Medical University
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    While searching for medical colleges in Sweden to study MBBS for Pakistan students, the first and foremost thing to do is check the eligibility criteria.
                  </p>
                  <div className="grid gap-4">
                    {eligibilityRequirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                          ✓
                        </div>
                        <span className="text-gray-800">{requirement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Requirements */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  MBBS in Sweden for Pakistani Students Requirements
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The documents required to study in Sweden from Pakistan are as follows:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {requiredDocuments.map((document, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-800 text-sm">{document}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  Application Process to Study in Sweden Medical University
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    The Sweden MBBS duration for Pakistani students is approximately 5-6 years. To get admission to medical universities in Sweden, you must follow the proper process to apply as given below:
                  </p>
                  <div className="space-y-6">
                    {applicationSteps.map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex gap-6 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Fee Structure */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  MBBS in Sweden for Pakistani Students Fee Structure
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Tuition Fees</h3>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <DollarSign className="h-6 w-6 text-blue-600" />
                          <span className="text-2xl font-bold text-blue-600">85,000 - 95,000 SEK</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Annual tuition fees for MBBS programs. Amount may vary based on programs, universities, and curriculum.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Costs</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded">
                          <span className="text-gray-700">Living Expenses</span>
                          <span className="font-semibold">8,000-12,000 SEK/month</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded">
                          <span className="text-gray-700">Accommodation</span>
                          <span className="font-semibold">4,000-8,000 SEK/month</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded">
                          <span className="text-gray-700">Application Fee</span>
                          <span className="font-semibold">900 SEK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Scholarships */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  Scholarships to Study MBBS in Sweden
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Several scholarship opportunities are available for Pakistani students to help reduce the financial burden of studying MBBS in Sweden:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {scholarships.map((scholarship, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Award className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-800 font-medium">{scholarship}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  Conclusion
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Sweden offers excellent opportunities for Pakistani students to pursue MBBS with world-class education, modern facilities, and reasonable costs. The country's focus on practical learning and research makes it an ideal destination for medical education. With proper preparation and guidance from experienced consultants, you can successfully secure admission to top Swedish medical universities.
                  </p>
                </div>
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          Q
                        </span>
                        {faq.question}
                      </h3>
                      <div className="ml-9">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

            </motion.article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              
              {/* Quick Facts */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    Quick Facts
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">5-6 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Fees:</span>
                      <span className="font-semibold">85,000-95,000 SEK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-semibold">English/Swedish</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">IELTS Required:</span>
                      <span className="font-semibold">Yes (6.5+)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Universities:</span>
                      <span className="font-semibold">8+ Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-gradient-to-br from-blue-50 to-emerald-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Get Expert Guidance
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    Ready to start your MBBS journey in Sweden? Our experts are here to help with admissions, visa guidance, and scholarship applications.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (+92) 304 1110947
                    </Button>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card className="bg-gradient-to-br from-blue-50 to-violet-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    Visit Our Office
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        110 Link Stadium Road Sargodha, Pakistan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">(+92) 304 1110947</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">query@teamdunya.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
      </div>
    
    </div>
  );
}