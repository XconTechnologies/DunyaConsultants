import React from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, User, FileText, Phone, Mail, Building, CheckCircle, GraduationCap, BookOpen, MapPin, Star, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ContactSection from '../../components/blog/ContactSection';

export default function JanuaryIntakeUniversitiesInUK() {
  const universityList = [
    {
      name: "University of Greenwich",
      location: "London",
      rank: "501-600 (THE World Rankings)",
      programs: "Business, Engineering, Computing",
      fees: "£14,500 - £16,000"
    },
    {
      name: "Coventry University",
      location: "Coventry",
      rank: "401-500 (THE World Rankings)",
      programs: "Business, Engineering, Health Sciences",
      fees: "£15,000 - £17,000"
    },
    {
      name: "University of Bedfordshire",
      location: "Luton/Bedford",
      rank: "801-1000 (THE World Rankings)",
      programs: "Business, Computing, Media Arts",
      fees: "£13,500 - £15,500"
    },
    {
      name: "Middlesex University",
      location: "London",
      rank: "601-800 (THE World Rankings)",
      programs: "Business, Psychology, Art & Design",
      fees: "£14,000 - £16,500"
    },
    {
      name: "University of Bolton",
      location: "Bolton",
      rank: "Ranked in UK",
      programs: "Engineering, Business, Health",
      fees: "£12,500 - £14,500"
    },
    {
      name: "London Metropolitan University",
      location: "London",
      rank: "Modern University",
      programs: "Business, Law, Computing",
      fees: "£13,000 - £15,000"
    }
  ];

  const advantages = [
    {
      title: "Less Competition",
      description: "Fewer applicants compete for January intake, improving your chances",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Faster Processing",
      description: "Quicker application processing and decision-making",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Early Graduation",
      description: "Graduate earlier and enter the job market sooner",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Weather Advantage",
      description: "Start studies in winter and enjoy pleasant spring/summer",
      icon: <Star className="h-6 w-6" />
    }
  ];

  const applicationRequirements = [
    "Completed undergraduate degree with minimum 60% marks",
    "English language proficiency (IELTS 6.0-6.5 or equivalent)",
    "Statement of Purpose explaining academic and career goals",
    "Academic transcripts from all previous institutions",
    "Two academic or professional reference letters",
    "Updated CV highlighting academic and work experience",
    "Copy of passport for international students",
    "Financial documents showing ability to pay fees and living costs"
  ];

  const popularPrograms = [
    { field: "Business Management", duration: "1 year", fee: "£14,000-16,000" },
    { field: "Computer Science", duration: "1-2 years", fee: "£15,000-17,000" },
    { field: "Engineering", duration: "1-2 years", fee: "£16,000-18,000" },
    { field: "International Business", duration: "1 year", fee: "£14,500-16,500" },
    { field: "Data Science", duration: "1 year", fee: "£15,500-17,500" },
    { field: "Project Management", duration: "1 year", fee: "£14,000-16,000" }
  ];

  const applicationTimeline = [
    { phase: "Program Research", period: "August - September", description: "Research universities and programs accepting January intake" },
    { phase: "Application Preparation", period: "September - October", description: "Prepare all required documents and meet entry requirements" },
    { phase: "Application Submission", period: "October - November", description: "Submit applications through university portals or UCAS" },
    { phase: "Application Review", period: "November - December", description: "Universities review applications and conduct interviews if required" },
    { phase: "Offer Letters", period: "December - January", description: "Receive conditional or unconditional offer letters" },
    { phase: "Visa Application", period: "December - January", description: "Apply for student visa with CAS from chosen university" }
  ];

  return (
    <>
      <Navigation />
      <div className="w-[1440px] mx-auto">
        {/* Hero Section */}
        <div className="relative h-[500px] bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
          <div className="relative z-10 text-center px-8">
            <h1 className="text-5xl font-bold mb-4">January Intake Universities in UK</h1>
            <p className="text-2xl font-light">Complete guide to UK universities offering January/Spring admission</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8 p-8">
          {/* Main Article */}
          <div className="flex-1">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  While most UK universities traditionally offer September intake for international students, many institutions now provide <strong>January intake opportunities</strong> to accommodate students who miss the main admission cycle or prefer starting their studies in the spring semester.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  January intake, also known as Spring admission, offers Pakistani students a second chance to begin their UK education journey. This alternative admission pathway provides flexibility and can be particularly beneficial for students who need additional time to prepare their applications or improve their English language scores.
                </p>
              </div>

              {/* What is January Intake */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
                  <Calendar className="mr-3 h-6 w-6" />
                  What is January Intake?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  January intake refers to the admission process where universities accept students for the spring semester, typically starting in January or February. This is the second major intake after the primary September admission cycle.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This intake is particularly popular among international students who need additional time for visa processing, English language preparation, or financial planning. Many UK universities now offer comprehensive programs during this period.
                </p>
              </motion.div>

              {/* Advantages of January Intake */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Advantages of January Intake</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white border border-blue-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                              {advantage.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-800 mb-2">{advantage.title}</h3>
                              <p className="text-gray-600">{advantage.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Top Universities Offering January Intake */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Top UK Universities Offering January Intake</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here are the leading UK universities that accept international students for January admission:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">University</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Location</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ranking</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Popular Programs</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Annual Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {universityList.map((university, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">{university.name}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">{university.location}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-600 text-sm">{university.rank}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm">{university.programs}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">{university.fees}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Popular Programs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular Programs for January Intake</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The following programs are commonly available during January intake at UK universities:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {popularPrograms.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-gradient-to-br from-indigo-50 to-blue-100 border-indigo-200">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold text-indigo-800 mb-3">{program.field}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-indigo-700">Duration:</span>
                              <span className="font-semibold text-indigo-800">{program.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-indigo-700">Annual Fee:</span>
                              <span className="font-semibold text-indigo-800">{program.fee}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Admission Requirements */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Admission Requirements</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To secure admission in January intake, Pakistani students must meet the following requirements:
                </p>
                <div className="grid gap-4">
                  {applicationRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application Timeline */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Timeline for January Intake</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Follow this timeline to ensure successful application for January admission:
                </p>
                <div className="space-y-6">
                  {applicationTimeline.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                              <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                                {phase.period}
                              </span>
                            </div>
                            <p className="text-gray-600">{phase.description}</p>
                          </div>
                        </div>
                      </div>
                      {index < applicationTimeline.length - 1 && (
                        <div className="absolute left-5 top-10 w-0.5 h-6 bg-blue-300"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Application Tips */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-green-800">Application Tips for Pakistani Students</h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Apply early as January intake has limited seats compared to September</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ensure you have sufficient time for visa processing (6-8 weeks)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Prepare financial documents showing ability to cover first year expenses</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Contact universities directly to confirm program availability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Consider weather conditions and arrange appropriate clothing</span>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="mb-8 p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 text-purple-800">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  January intake provides an excellent alternative pathway for Pakistani students who want to study in the UK. With reduced competition and faster processing times, it offers strategic advantages for students who plan their applications carefully.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  While program options may be more limited compared to September intake, many reputable universities offer quality programs during this period. Contact Dunya Consultants for personalized guidance on January intake applications and ensure you meet all requirements for a successful admission.
                </p>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Is January intake as good as September intake?</h3>
                    <p className="text-gray-700">
                      Yes, January intake offers the same quality education and degree recognition. The main difference is in the number of available programs.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Do all UK universities offer January intake?</h3>
                    <p className="text-gray-700">
                      No, not all universities offer January intake. It's more common in post-1992 universities and certain programs. Research specific universities for availability.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">When should I apply for January intake?</h3>
                    <p className="text-gray-700">
                      Applications typically open in August-September with deadlines in October-November. Apply as early as possible for better chances.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Are scholarships available for January intake?</h3>
                    <p className="text-gray-700">
                      Some scholarships are available, but options may be more limited compared to September intake. Check with individual universities for specific opportunities.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Can I get a student visa for January intake?</h3>
                    <p className="text-gray-700">
                      Yes, the student visa process is the same for January intake. Allow 6-8 weeks for visa processing after receiving your CAS.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Will I graduate at the same time as September intake students?</h3>
                    <p className="text-gray-700">
                      For one-year programs, January students typically graduate in December/January, while September students graduate in summer.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-80">
            <div className="sticky top-8 space-y-6">
              {/* Quick Facts */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    January Intake Facts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Application Deadline:</span>
                      <span className="font-semibold text-blue-800">Oct-Nov</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Program Start:</span>
                      <span className="font-semibold text-blue-800">January</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Competition:</span>
                      <span className="font-semibold text-blue-800">Lower</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Processing:</span>
                      <span className="font-semibold text-blue-800">Faster</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Universities */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Top January Universities</h3>
                  <div className="space-y-3">
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <div className="font-medium">University of Greenwich</div>
                      <div className="text-blue-600 text-xs">London • £14,500-16,000</div>
                    </div>
                    <div className="p-2 bg-indigo-50 rounded text-sm">
                      <div className="font-medium">Coventry University</div>
                      <div className="text-indigo-600 text-xs">Coventry • £15,000-17,000</div>
                    </div>
                    <div className="p-2 bg-purple-50 rounded text-sm">
                      <div className="font-medium">Middlesex University</div>
                      <div className="text-purple-600 text-xs">London • £14,000-16,500</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Form */}
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Get January Admission Info</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Preferred Program</option>
                      <option>Business Management</option>
                      <option>Computer Science</option>
                      <option>Engineering</option>
                      <option>Other</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Get Admission Guidance
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>(+92) 304 1110947</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="mr-2 h-4 w-4" />
                      <span>query@teamdunya.com</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <Building className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <span>110 Link Stadium Road Sargodha</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}