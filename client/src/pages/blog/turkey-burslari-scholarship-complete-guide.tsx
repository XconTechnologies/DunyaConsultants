import { motion } from "framer-motion";
import { Calendar, Clock, User, GraduationCap, MapPin, DollarSign, BookOpen, Award, FileText, Phone, Mail, Building, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function TurkeyBurslariScholarshipCompleteGuide() {
  const scholarshipUniversities = [
    "Akdeniz University",
    "Abdullah Gül University", 
    "Ankara University",
    "Boğaziçi University",
    "Bursa Technical University",
    "Çanakkale Onsekiz Mart University",
    "Çukurova University",
    "Dokuz Eylül University"
  ];

  const scholarshipTypes = [
    {
      category: "Full-Time Scholarships",
      types: [
        {
          name: "Undergraduate Scholarships",
          description: "Available for engineering, health sciences, social sciences, and basic sciences. Applications open January-February through TBBS."
        },
        {
          name: "Graduate Scholarships", 
          description: "For master's and PhD students in humanities, natural sciences, social sciences, and engineering."
        },
        {
          name: "Merit-Based Scholarships",
          description: "For students with international awards, top academic achievements, and language proficiency (GPA 3.5+/4)."
        },
        {
          name: "Art Scholarships",
          description: "For undergraduate, master's, or PhD courses in performing arts, arts, and music."
        }
      ]
    },
    {
      category: "Short-Term Scholarships", 
      types: [
        {
          name: "Research Scholarship",
          description: "Monthly stipend of 12,000 TL for 3-12 months duration."
        },
        {
          name: "Success Scholarship",
          description: "Monthly stipend of 2,000 TL for 1 year duration."
        },
        {
          name: "KATİP Scholarship",
          description: "Monthly stipend of 10,000 TL for 8 months duration."
        }
      ]
    }
  ];

  const eligibilityRequirements = [
    "Must be a non-Turkish citizen",
    "Age limits: Under 21 for undergraduate, under 30 for master's, under 35 for PhD",
    "Strong academic record with minimum GPA requirements",
    "English or Turkish language proficiency",
    "Not previously studied in Turkey with government scholarship",
    "Meet health requirements for study in Turkey"
  ];

  const applicationRequirements = [
    "Completed online application form",
    "Valid passport copy",
    "Academic transcripts and certificates",
    "Language proficiency certificates",
    "Personal statement/motivation letter",
    "Letters of recommendation",
    "Research proposal (for graduate programs)",
    "Portfolio (for art programs)",
    "Health certificate",
    "Passport-sized photographs"
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Create Online Account",
      description: "Register on the official Türkiye Scholarships website and create your application account"
    },
    {
      step: 2,
      title: "Complete Application Form",
      description: "Fill out the detailed application form with personal, academic, and program preferences"
    },
    {
      step: 3,
      title: "Upload Documents",
      description: "Submit all required documents including transcripts, certificates, and supporting materials"
    },
    {
      step: 4,
      title: "Submit Application",
      description: "Review and submit your completed application before the deadline"
    },
    {
      step: 5,
      title: "Interview Process",
      description: "Participate in interviews if selected for the shortlist"
    },
    {
      step: 6,
      title: "Final Selection",
      description: "Await final selection results and scholarship award notification"
    }
  ];

  const benefits = [
    { title: "Full Tuition Coverage", description: "Complete coverage of university tuition fees" },
    { title: "Monthly Stipend", description: "Living allowance provided monthly during studies" },
    { title: "Accommodation", description: "Free dormitory accommodation or housing allowance" },
    { title: "Health Insurance", description: "Comprehensive health insurance coverage" },
    { title: "Turkish Language Course", description: "One-year Turkish language preparation program" },
    { title: "Flight Tickets", description: "Round-trip flight tickets to Turkey" }
  ];

  const faqData = [
    {
      question: "What is the acceptance rate for the Türkiye Scholarships Burslari?",
      answer: "The acceptance rate varies by program and year, but generally ranges from 3-8% due to high competition. Engineering and medical programs typically have lower acceptance rates."
    },
    {
      question: "Is there an age limit for Turkey burslari scholarship?",
      answer: "Yes, age limits are: Under 21 for undergraduate programs, under 30 for master's programs, and under 35 for PhD programs at the time of application."
    },
    {
      question: "How much of a stipend is granted for a Burslari scholarship in Turkey?",
      answer: "Monthly stipends vary by level: Undergraduate students receive approximately 1,000 TL, Master's students 1,400 TL, and PhD students 1,800 TL per month."
    }
  ];

  return (
    
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
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
              A Complete Guide to Turkey Burslari Scholarship
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl leading-relaxed">
              Comprehensive guide to Turkey's prestigious government scholarship program offering full funding for international students.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="h-4 w-4" />
                <span>Published: Jan 19, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                <span>22 min read</span>
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
              <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border-l-4 border-red-600">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Are you dreaming of continuing your higher studies in Turkey but need more resources to cover your tuition fees and living expenses? If yes, then there is good news for you. <strong>Turkey Burslari Scholarship Program</strong> is available for those students who are searching for some financial help to study abroad.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  These scholarship programs allow students to take admission in different fields, including undergraduate, graduate, master's, or even PhD programs. In addition, this Turkiye Burslari Scholarship is offered by the government of Turkey to international students. It provides lots of benefits like reducing financial burden and allows you to learn about a new culture.
                </p>
              </div>

              {/* Universities List */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Turkiye Burslari Scholarship Universities List
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    There are many universities under Turkey Burslari Scholarship that allows students to study their preferred courses. Students must meet all requirements to secure a spot in their favorite university.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {scholarshipUniversities.map((university, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 font-medium">{university}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Types of Scholarships */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-orange-600 pl-4">
                  Types of Turkey Burslari Scholarship for International Students
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    There are several types of turkey burslari scholarships available, so you can choose one that fits your preferences and circumstances.
                  </p>
                  <div className="space-y-8">
                    {scholarshipTypes.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-orange-600">
                          {category.category}
                        </h3>
                        <div className="grid gap-4">
                          {category.types.map((type, typeIndex) => (
                            <motion.div
                              key={typeIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: (categoryIndex * 4 + typeIndex) * 0.1 }}
                              className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400"
                            >
                              <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                              <p className="text-gray-700 text-sm">{type.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Scholarship Benefits */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-600 pl-4">
                  Scholarship Benefits and Coverage
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                          <p className="text-gray-700 text-sm">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Eligibility Criteria */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">
                  Eligibility Criteria for Turkey Burslari Scholarships
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    To be eligible for the Turkey Burslari Scholarship, applicants must meet the following criteria:
                  </p>
                  <div className="grid gap-4">
                    {eligibilityRequirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-green-50 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                          ✓
                        </div>
                        <span className="text-gray-800">{requirement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Application Requirements */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  Turkiye Burslari Scholarship Requirements
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The following documents and materials are required for the scholarship application:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {applicationRequirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-800 text-sm">{requirement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">
                  How to Apply for the Turkey Burslari Scholarship?
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Follow these step-by-step instructions to apply for the Turkey Burslari Scholarship:
                  </p>
                  <div className="space-y-6">
                    {applicationSteps.map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex gap-6 p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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

              {/* Application Deadline */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-indigo-600 pl-4">
                  Turkey Burslari Scholarship Deadline
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-indigo-900 mb-4">Application Period</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Application Opens:</span>
                          <span className="font-semibold text-indigo-600">January</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Application Deadline:</span>
                          <span className="font-semibold text-indigo-600">February</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Results Announcement:</span>
                          <span className="font-semibold text-indigo-600">May-June</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-amber-900 mb-4">Important Notes</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Check official website for exact dates each year</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Applications close strictly on deadline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Submit applications well before deadline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>Prepare documents months in advance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-600 pl-4">
                  Conclusion
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-teal-600">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Turkey Burslari Scholarship is one of the most comprehensive and generous scholarship programs available to international students. With full financial coverage, quality education at top Turkish universities, and cultural immersion opportunities, it provides an excellent pathway for Pakistani students to pursue higher education. Success requires careful preparation, strong academic performance, and timely application submission. With proper guidance and dedication, you can secure this prestigious scholarship and embark on an enriching educational journey in Turkey.
                  </p>
                </div>
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-4">
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
                        <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
              <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-red-600" />
                    Quick Facts
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-semibold">100% Funded</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Stipend:</span>
                      <span className="font-semibold">1,000-1,800 TL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Application Period:</span>
                      <span className="font-semibold">Jan-Feb</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age Limit:</span>
                      <span className="font-semibold">21-35 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Universities:</span>
                      <span className="font-semibold">200+ Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    Get Expert Guidance
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    Ready to apply for Turkey Burslari Scholarship? Our experts are here to help with application preparation, document guidance, and interview coaching.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (+92) 304 1110947
                    </Button>
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-purple-600" />
                    Visit Our Office
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        110 Link Stadium Road Sargodha, Pakistan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700">(+92) 304 1110947</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-purple-600" />
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