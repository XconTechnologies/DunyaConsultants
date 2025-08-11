import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle, AlertCircle, FileText, Target, Award, Globe, DollarSign, MessageCircle, Phone, Mail, Star, MapPin, Users, GraduationCap, Plane } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/blog/ContactForm';
import ContactSection from '@/components/blog/ContactSection';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function CyprusVisaPakistan() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-[#4285F4] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="#4285F4 text-white px-4 py-2 rounded-full text-sm font-medium">
                Visa Guides
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Cyprus Visa for Pakistan: Complete Student Guide 2025
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Complete guide for Pakistani students on Cyprus visa requirements, application process, fees, scholarships, and step-by-step procedure for studying in Cyprus.
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>March 19, 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Dunya Consultants</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>12 min read</span>
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

              {/* Visa Overview */}
              <section className="mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Plane className="w-6 h-6 #4285F4 mr-2" />
                    Cyprus Visa Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 #4285F4 mr-2" />
                      <span className="text-gray-700">Duration: Up to 3 months (extendable)</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 #4285F4 mr-2" />
                      <span className="text-gray-700">Visa Fee: €60-€90</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 #4285F4 mr-2" />
                      <span className="text-gray-700">Processing Time: 1 month</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 #4285F4 mr-2" />
                      <span className="text-gray-700">Residence Permit: €70</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Studying in Cyprus is the best choice for Pakistani students because it has some of the top universities and affordable education. The country provides study programs in various fields, including art, music, business, medicine, and more. Both public and private universities provide higher education, and the government is actively working to improve funding and provide Cyprus study visa for Pakistani students.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Students can pursue a bachelor's, Master's, or doctorate degree. A bachelor's degree typically takes four years, while a master's can be completed in one to two years. One of the biggest advantages of studying in Cyprus is that students can enter medical programs without an entrance exam. Tuition fees vary depending on the university and program.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Both local and international students need to pay tuition fees, but scholarships are available to help them cover some of the costs. With high quality education and scholarship opportunities, Cyprus is a great place for higher studies.
                </p>
              </div>

              {/* What is Cyprus Study Visa */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #4285F4 pl-4">
                  What is a Cyprus Study Visa?
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A Cyprus study visa for Pakistan is a special visa that allows students from outside the European Union to enter and stay in Cyprus for their studies. This visa lets students stay in the country for up to three months.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If they need to stay longer, they can apply for a temporary residence permit, which allows them to continue their studies in Cyprus for up to four years. This Cyprus student visa is only for students who want to study in Cyprus and is required for those coming from non-EU countries.
                  </p>
                </div>
              </section>

              {/* Documents Required */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #4285F4 pl-4">
                  Documents Required for Cyprus Visa from Pakistan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To apply, you need to meet the following Cyprus visa requirements for Pakistan as mentioned below:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "A transcript showing your previous courses and grades",
                    "A scanned copy of your high school or bachelor's degree certificate", 
                    "A scanned copy of your passport and birth certificate",
                    "Your updated CV (resume)",
                    "Proof of scholarship or financial support",
                    "Test scores if required by the university",
                    "2 to 3 recommendation letters from teachers or employers",
                    "A portfolio or writing samples (if required for your course)"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 #4285F4 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{doc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #4285F4 pl-4">
                  How to Apply for a Cyprus Student Visa from Pakistan?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The admission process to apply for Cyprus study visa for Pakistani student is as follows:
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Get Accepted into a University",
                      description: "The first step is to apply and secure admission at a recognized university in Cyprus. Once accepted, you will receive an official acceptance letter, which is a crucial requirement for your visa application."
                    },
                    {
                      step: "2",
                      title: "Collect Your Documents",
                      description: "You need a valid passport with at least six months of validity. Your acceptance letter from the university is mandatory. You must also provide proof of financial means, showing you have at least €5,000-€7,000 per year to cover living expenses and Cyprus university fees. Health insurance covering your stay in Cyprus is required, along with academic transcripts from your previous studies."
                    },
                    {
                      step: "3",
                      title: "Apply for the Visa",
                      description: "After gathering all documents, book an appointment at the Cypriot Embassy in Pakistan. Fill out the visa application form correctly and submit it along with the required documents. You may be asked to attend an interview as part of the process."
                    },
                    {
                      step: "4",
                      title: "Wait for Approval",
                      description: "Visa processing times vary, but most applications are processed within one month. It is advised to apply as early as possible to avoid delays."
                    },
                    {
                      step: "5",
                      title: "Apply for a Residence Permit",
                      description: "Once you arrive in Cyprus, you must apply for a temporary residence permit at the Civil Registry and Migration Department. This is necessary to extend your stay beyond the initial visa period."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <div className="w-10 h-10 #4285F4 text-white rounded-full flex items-center justify-center mr-4 text-lg font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Visa Fees */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #4285F4 pl-4">
                  Cyprus Visa Fees for Pakistani Students
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-green-100 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pakistani students planning to study in Cyprus need to pay certain visa fees. The Cyprus visa price in Pakistan for a short-stay visa (Category C) is €90, while the long-stay visa (Category D) costs €60.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Once students arrive in Cyprus, they must apply for a temporary residence permit, which costs €70. These fees are necessary for legal entry and stay in the country for study purposes.
                  </p>
                </div>
                
                {/* Fee Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <DollarSign className="w-8 h-8 #4285F4 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Short-Stay Visa</h4>
                    <p className="text-2xl font-bold #3367D6">€90</p>
                    <p className="text-sm text-gray-600">Category C</p>
                  </div>
                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <DollarSign className="w-8 h-8 #4285F4 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Long-Stay Visa</h4>
                    <p className="text-2xl font-bold #3367D6">€60</p>
                    <p className="text-sm text-gray-600">Category D</p>
                  </div>
                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <FileText className="w-8 h-8 #4285F4 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Residence Permit</h4>
                    <p className="text-2xl font-bold #3367D6">€70</p>
                    <p className="text-sm text-gray-600">Required in Cyprus</p>
                  </div>
                </div>
              </section>

              {/* Scholarships */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #4285F4 pl-4">
                  Scholarships Available in Cyprus for Pakistani Students
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cyprus provides merit-based scholarships for international students. Pakistani students can apply for scholarships from universities like the Cyprus International University, University of Nicosia, and Cyprus West University. Some other popular scholarships include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Award className="w-5 h-5 #4285F4 mr-2" />
                      Cyprus State Scholarship Foundation
                    </h4>
                    <p className="text-sm text-gray-600">Government-funded scholarships for international students</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Award className="w-5 h-5 #4285F4 mr-2" />
                      Erasmus Mundus Joint Master Degrees
                    </h4>
                    <p className="text-sm text-gray-600">EU-funded prestigious master's programs</p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #4285F4 pl-4">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Cyprus is becoming a popular place for students because of its good education system, low tuition fees, and diverse culture. For Pakistani students, it provides quality European education at an affordable cost, making it a best choice for both undergraduate and graduate studies.
                </p>
              </section>

              {/* FAQs */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 #4285F4 pl-4">
                  FAQs
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What is the Cyprus study visa success rate from Pakistan?
                    </h3>
                    <p className="text-gray-700">
                      Cyprus has a high visa success rate for Pakistani students who meet all requirements and provide complete documentation. With proper guidance from educational consultants, the success rate can exceed 85%.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Can I apply for a Cyprus work visa price in Pakistan?
                    </h3>
                    <p className="text-gray-700">
                      Yes, Pakistani citizens can apply for Cyprus work visas. The application process and fees vary depending on the type of work and duration of stay. It's recommended to consult with immigration experts for specific requirements.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      How long does it take to process a Cyprus student visa?
                    </h3>
                    <p className="text-gray-700">
                      The standard processing time for a Cyprus student visa is approximately 1 month. However, it's advisable to apply at least 2-3 months before your intended travel date to account for any delays.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      What is the minimum financial requirement for Cyprus student visa?
                    </h3>
                    <p className="text-gray-700">
                      Students must show proof of financial means of at least €5,000-€7,000 per year to cover living expenses and university fees in Cyprus.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply for Cyprus Student Visa?</h3>
                <p className="text-gray-700 mb-6">
                  Get expert guidance from Dunya Consultants for your Cyprus visa application and university admission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+923041110947"
                    className="inline-flex items-center justify-center px-6 py-3 #3367D6 text-white font-semibold rounded-lg hover:bg-#1a73e8 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (+92) 304 1110947
                  </a>
                  <a
                    href="mailto:query@teamdunya.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
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
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 #4285F4" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Duration:</span>
                    <span className="font-medium">3 months (extendable)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Time:</span>
                    <span className="font-medium">1 month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visa Fee:</span>
                    <span className="font-medium">€60-€90</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Residence Permit:</span>
                    <span className="font-medium">€70</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Financial Proof:</span>
                    <span className="font-medium">€5,000-€7,000/year</span>
                  </div>
                </div>
              </div>

              {/* Popular Universities */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 #4285F4" />
                  Popular Universities
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 #4285F4 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Cyprus International University</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 #4285F4 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">University of Nicosia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 #4285F4 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Cyprus West University</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 #4285F4 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">European University Cyprus</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 #4285F4 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Frederick University</span>
                  </li>
                </ul>
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