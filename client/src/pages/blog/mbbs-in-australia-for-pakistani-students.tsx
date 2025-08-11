import { motion } from "framer-motion";
import { Calendar, Clock, User, GraduationCap, MapPin, DollarSign, BookOpen, Award, FileText, Phone, Mail, Building, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function MBBSInAustraliaForPakistaniStudents() {
  const eligibilityRequirements = [
    "Completed higher secondary education from a certified board",
    "Minimum age of seventeen years",
    "Clear UCAT or UMAT entrance examinations",
    "IELTS score of minimum 7.0",
    "Some universities may require MCAT or GAMSAT scores"
  ];

  const requiredDocuments = [
    "Recent passport-sized images",
    "Entry exam scores (UCAT, MCAT, UMAT, or NEET)",
    "Birth certificate copy",
    "Valid passport",
    "Higher secondary education certificates and transcripts",
    "Recommendation letter",
    "Health insurance documentation",
    "English language proficiency test scores",
    "Statement of Purpose (SOP)",
    "Valid student visa"
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Research and Choose Medical Colleges",
      description: "Search for Australian universities providing MBBS courses and consider academic ranking and application requirements"
    },
    {
      step: 2,
      title: "Check Eligibility Criteria", 
      description: "Ensure you fulfill all requirements for MBBS in Australia including academic and test score prerequisites"
    },
    {
      step: 3,
      title: "Collect Application Documents",
      description: "Gather all required documents including certificates, test scores, and supporting materials"
    },
    {
      step: 4,
      title: "Give Compulsory Entrance Exams",
      description: "Take required entrance examinations such as UCAT, UMAT, MCAT, or GAMSAT as per university requirements"
    },
    {
      step: 5,
      title: "Apply to Chosen Medical Universities",
      description: "Submit applications through official university websites or the Universities Admissions Centre"
    }
  ];

  const topUniversities = [
    { name: "University of Melbourne", fees: "AUD 70,000-80,000" },
    { name: "University of Sydney", fees: "AUD 75,000-85,000" },
    { name: "Monash University", fees: "AUD 72,000-82,000" },
    { name: "University of Queensland", fees: "AUD 68,000-78,000" },
    { name: "University of New South Wales", fees: "AUD 74,000-84,000" },
    { name: "Australian National University", fees: "AUD 70,000-80,000" }
  ];

  const faqData = [
    {
      question: "How to apply for MBBS in Australia?",
      answer: "Apply through university websites or Universities Admissions Centre. Complete entrance exams (UCAT/UMAT), submit required documents, meet eligibility criteria, and obtain student visa."
    },
    {
      question: "How long does it take to complete an MBBS in Australia?",
      answer: "MBBS in Australia is taught as either a 4-year MD (Doctor of Medicine) program or a 6-year combined MBBS (Bachelor of Medical Science and Doctor of Medicine) course."
    },
    {
      question: "What is the fees of MBBS in Australia?",
      answer: "Annual tuition fees range from AUD 68,000 to AUD 85,000 depending on the university. Additional living expenses are approximately AUD 20,000-25,000 per year."
    },
    {
      question: "How much percentage is required for MBBS in Australia?",
      answer: "Generally require excellent academic performance in higher secondary education (typically 85%+ or equivalent), along with strong scores in entrance examinations like UCAT or UMAT."
    }
  ];

  return (
    
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#4285F4] via-[#4285F4] to-[#3367D6] overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
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
              MBBS in Australia for Pakistani Students
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl leading-relaxed">
              Complete guide to pursuing medical education in Australia with world-class universities, comprehensive programs, and excellent career opportunities.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="h-4 w-4" />
                <span>Published: Jan 19, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                <span>18 min read</span>
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
              <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border-l-4 #3367D6">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Are you a Pakistani student planning to do an <strong>MBBS in Australia</strong>? Unsurprisingly, hundreds of students wish the same every year. There are some of the best medical colleges in Australia for international students. These institutions not only provide the best quality education but also increase career opportunities for students.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  MBBS in this country is taught either as a four-year MD (Doctor of Medicine) or a six-year combined MBBS (Bachelor of Medical Science and Doctor of Medicine) course. Furthermore, the lessons given in these medical colleges are not just limited to theoretical knowledge. The teachers and professors also train them for the practical life ahead.
                </p>
              </div>

              {/* Requirements Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #3367D6 pl-4">
                  What are the Requirements for an MBBS Degree in Australia?
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    To get admission into a medical college in Australia, applicants should meet the eligibility criteria. Without fulfilling the criteria, there are greater chances of admission refusal.
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
                        <div className="flex-shrink-0 w-6 h-6 #3367D6 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                          ✓
                        </div>
                        <span className="text-gray-800">{requirement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Documents Needed */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #3367D6 pl-4">
                  Documents Needed for Admission to MBBS University in Australia
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    You can apply for medical courses in Australia either through the official website of the university, the application portal, or Universities Admissions Centre. However, the list of documents that you should collect is as follows:
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
                        <FileText className="h-5 w-5 #3367D6" />
                        <span className="text-gray-800 text-sm">{document}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #3367D6 pl-4">
                  Application Process for Admission to Low-cost MBBS in Australia
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    The step-by-step application process to apply to the best medical colleges in Australia for international students is given below:
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
                        <div className="flex-shrink-0 w-12 h-12 #3367D6 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #3367D6 pl-4">
                  MBBS in Australia for Pakistani Students Fee Structure
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Tuition Fees</h3>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <DollarSign className="h-6 w-6 #3367D6" />
                          <span className="text-2xl font-bold #3367D6">AUD 68,000 - 85,000</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Annual tuition fees for MBBS programs at top Australian universities. Fees vary by institution and program structure.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Costs</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded">
                          <span className="text-gray-700">Living Expenses</span>
                          <span className="font-semibold">AUD 20,000-25,000/year</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded">
                          <span className="text-gray-700">Accommodation</span>
                          <span className="font-semibold">AUD 15,000-20,000/year</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded">
                          <span className="text-gray-700">Health Insurance</span>
                          <span className="font-semibold">AUD 500-700/year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Top Universities */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #3367D6 pl-4">
                  Top Medical Universities with Affordable MBBS Costs in Australia
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Here are some of the top medical universities in Australia offering excellent MBBS programs for international students:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 #3367D6">
                          <th className="text-left py-3 text-gray-900 font-semibold">University Name</th>
                          <th className="text-right py-3 text-gray-900 font-semibold">Annual Fees (AUD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topUniversities.map((university, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                          >
                            <td className="py-4 text-gray-800">{university.name}</td>
                            <td className="py-4 text-right font-semibold #3367D6">{university.fees}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #3367D6 pl-4">
                  Conclusion
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 #3367D6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Australia offers exceptional opportunities for Pakistani students to pursue MBBS with world-renowned medical education, state-of-the-art facilities, and excellent career prospects. The country's focus on practical training and research excellence makes it an ideal destination for aspiring medical professionals. With proper preparation, entrance exam scores, and professional guidance, you can successfully secure admission to Australia's top medical universities and build a rewarding medical career.
                  </p>
                </div>
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 #3367D6 pl-4">
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
                        <span className="flex-shrink-0 w-6 h-6 #3367D6 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
              <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 #3367D6" />
                    Quick Facts
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">4-6 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Fees:</span>
                      <span className="font-semibold">AUD 68,000-85,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-semibold">English</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">IELTS Required:</span>
                      <span className="font-semibold">Yes (7.0+)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Entrance Exam:</span>
                      <span className="font-semibold">UCAT/UMAT</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 #3367D6" />
                    Get Expert Guidance
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    Ready to start your MBBS journey in Australia? Our experts are here to help with admissions, visa guidance, and entrance exam preparation.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full #3367D6 hover:bg-#1a73e8 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (+92) 304 1110947
                    </Button>
                    <Button variant="outline" className="w-full #3367D6 #3367D6 hover:bg-blue-50">
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
                    <Building className="h-5 w-5 #3367D6" />
                    Visit Our Office
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 #3367D6 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        110 Link Stadium Road Sargodha, Pakistan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 #3367D6" />
                      <span className="text-gray-700">(+92) 304 1110947</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 #3367D6" />
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