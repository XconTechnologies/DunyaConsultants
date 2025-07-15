import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, BookOpen, CheckCircle, ExternalLink, ArrowRight, Eye, Target, Zap, Award, TrendingUp, Users, Globe, Cog, Scale, GraduationCap, MapPin, DollarSign, FileText, Star, Shield, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EngineeringLawProgramsCanada() {
  const shareLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/intent/tweet?text=Engineering and Law Programs in Canada - Best Universities for Pakistani Students&url=" + encodeURIComponent(window.location.href),
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook", 
      url: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      icon: Facebook,
      color: "hover:text-blue-600"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href),
      icon: Linkedin,
      color: "hover:text-blue-700"
    }
  ];

  const tableOfContents = [
    { id: "engineering-programs", title: "Engineering Programs in Canada" },
    { id: "law-programs", title: "Law Programs in Canada" },
    { id: "top-universities", title: "Top Universities for Pakistani Students" },
    { id: "admission-requirements", title: "Admission Requirements" },
    { id: "tuition-costs", title: "Tuition Fees & Living Costs" },
    { id: "career-opportunities", title: "Career Opportunities" },
    { id: "application-process", title: "Application Process" },
    { id: "faqs", title: "FAQs" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const topUniversities = [
    {
      name: "University of Toronto",
      programs: ["Engineering", "Law"],
      ranking: "#1 in Canada",
      tuition: "CAD $60,000/year",
      location: "Toronto, ON"
    },
    {
      name: "University of British Columbia",
      programs: ["Engineering", "Law"],
      ranking: "#2 in Canada",
      tuition: "CAD $55,000/year",
      location: "Vancouver, BC"
    },
    {
      name: "McGill University",
      programs: ["Engineering", "Law"],
      ranking: "#3 in Canada",
      tuition: "CAD $50,000/year",
      location: "Montreal, QC"
    },
    {
      name: "University of Waterloo",
      programs: ["Engineering"],
      ranking: "#1 Engineering",
      tuition: "CAD $65,000/year",
      location: "Waterloo, ON"
    }
  ];

  const engineeringSpecializations = [
    { name: "Computer Engineering", demand: "Very High", salary: "CAD $85,000+" },
    { name: "Software Engineering", demand: "Extremely High", salary: "CAD $90,000+" },
    { name: "Electrical Engineering", demand: "High", salary: "CAD $80,000+" },
    { name: "Mechanical Engineering", demand: "High", salary: "CAD $75,000+" },
    { name: "Civil Engineering", demand: "High", salary: "CAD $70,000+" },
    { name: "Chemical Engineering", demand: "Moderate", salary: "CAD $85,000+" }
  ];

  const lawSpecializations = [
    { name: "Corporate Law", demand: "High", salary: "CAD $120,000+" },
    { name: "Immigration Law", demand: "Very High", salary: "CAD $100,000+" },
    { name: "Criminal Law", demand: "Moderate", salary: "CAD $90,000+" },
    { name: "Family Law", demand: "High", salary: "CAD $85,000+" },
    { name: "Environmental Law", demand: "Growing", salary: "CAD $95,000+" },
    { name: "Intellectual Property Law", demand: "High", salary: "CAD $110,000+" }
  ];

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
            <span className="text-gray-900">Engineering and Law Programs in Canada</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="py-8">
              {/* Featured Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative group overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-white/20 to-red-600/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Engineering and Law Programs in Canada"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Badge className="bg-red-600 text-white mb-3">Study in Canada</Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      Engineering and Law Programs in Canada
                    </h1>
                    <p className="text-gray-200 text-lg">
                      Best Universities for Pakistani Students in 2025
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Article Meta */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Dunya Consultants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">January 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">12 min read</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Share</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Canada has emerged as a premier destination for Pakistani students seeking world-class education in 
                    Engineering and Law. With its prestigious universities, excellent post-graduation work opportunities, 
                    and pathway to permanent residency, Canada offers unparalleled advantages for international students 
                    in these high-demand fields.
                  </p>

                  <section id="engineering-programs" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                      Engineering Programs in Canada
                    </h2>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Choose Engineering in Canada?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            icon: Cog,
                            title: "World-Class Education",
                            description: "Canadian engineering programs are globally recognized and accredited by professional bodies"
                          },
                          {
                            icon: TrendingUp,
                            title: "High Demand",
                            description: "Engineering professionals are in high demand across Canada with excellent job prospects"
                          },
                          {
                            icon: DollarSign,
                            title: "Competitive Salaries",
                            description: "Engineering graduates earn some of the highest starting salaries in Canada"
                          },
                          {
                            icon: Globe,
                            title: "Immigration Pathways",
                            description: "Engineering is a priority occupation for Canadian immigration programs"
                          }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-4 rounded-lg border border-gray-200"
                          >
                            <item.icon className="h-6 w-6 text-red-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Popular Engineering Specializations</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Demand</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Salary</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {engineeringSpecializations.map((spec, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <Badge variant={spec.demand === "Extremely High" ? "default" : spec.demand === "Very High" ? "secondary" : "outline"}>
                                    {spec.demand}
                                  </Badge>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{spec.salary}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  <section id="law-programs" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                      Law Programs in Canada
                    </h2>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-red-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Study Law in Canada?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            icon: Scale,
                            title: "Diverse Legal System",
                            description: "Learn both common law and civil law systems, giving you unique expertise"
                          },
                          {
                            icon: Users,
                            title: "Multicultural Environment",
                            description: "Study in a diverse environment that prepares you for global legal practice"
                          },
                          {
                            icon: Award,
                            title: "International Recognition",
                            description: "Canadian law degrees are recognized worldwide and open global career opportunities"
                          },
                          {
                            icon: Shield,
                            title: "Strong Legal Framework",
                            description: "Canada's robust legal system provides excellent learning opportunities"
                          }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-4 rounded-lg border border-gray-200"
                          >
                            <item.icon className="h-6 w-6 text-purple-600 mb-2" />
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Law Specializations & Career Prospects</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Demand</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Salary</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {lawSpecializations.map((spec, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <Badge variant={spec.demand === "Very High" ? "default" : spec.demand === "High" ? "secondary" : "outline"}>
                                    {spec.demand}
                                  </Badge>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{spec.salary}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  <section id="top-universities" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                      Top Universities for Pakistani Students
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {topUniversities.map((university, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{university.name}</h3>
                              <Badge variant="secondary" className="text-xs">{university.ranking}</Badge>
                            </div>
                            <Building className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="space-y-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{university.location}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-2" />
                              <span>{university.tuition}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {university.programs.map((program, idx) => (
                              <Badge key={idx} variant="outline">{program}</Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section id="admission-requirements" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                      Admission Requirements
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-blue-800">Engineering Programs</h3>
                        <ul className="space-y-3 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Bachelor's degree with strong math and science background</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Minimum 3.0 GPA (or equivalent)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>IELTS 6.5+ or TOEFL 90+</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>GRE scores (for some programs)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Statement of Purpose</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Letters of Recommendation</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-purple-800">Law Programs</h3>
                        <ul className="space-y-3 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Bachelor's degree in any field</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Minimum 3.3 GPA (highly competitive)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>LSAT score (required for JD programs)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>IELTS 7.0+ or TOEFL 100+</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Personal Statement</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Letters of Recommendation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="tuition-costs" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                      Tuition Fees & Living Costs
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-semibold mb-4 text-green-800">Engineering Programs</h3>
                        <ul className="space-y-2 text-green-700">
                          <li>• Undergraduate: CAD $35,000 - $65,000/year</li>
                          <li>• Graduate: CAD $25,000 - $45,000/year</li>
                          <li>• PhD: CAD $20,000 - $35,000/year</li>
                          <li>• Co-op programs available</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                        <h3 className="text-xl font-semibold mb-4 text-purple-800">Law Programs</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li>• JD Programs: CAD $45,000 - $70,000/year</li>
                          <li>• LLM Programs: CAD $25,000 - $50,000/year</li>
                          <li>• PhD Law: CAD $20,000 - $35,000/year</li>
                          <li>• Scholarships available</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h3 className="text-xl font-semibold mb-4 text-yellow-800">Living Costs (Annual)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-yellow-700 mb-2">Toronto/Vancouver</h4>
                          <ul className="text-sm text-yellow-600">
                            <li>• Total: CAD $15,000-20,000</li>
                            <li>• Housing: CAD $8,000-12,000</li>
                            <li>• Food: CAD $4,000-5,000</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-700 mb-2">Other Cities</h4>
                          <ul className="text-sm text-yellow-600">
                            <li>• Total: CAD $12,000-15,000</li>
                            <li>• Housing: CAD $6,000-9,000</li>
                            <li>• Food: CAD $3,500-4,500</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-700 mb-2">Additional Costs</h4>
                          <ul className="text-sm text-yellow-600">
                            <li>• Books: CAD $1,500-2,000</li>
                            <li>• Transportation: CAD $1,200-1,800</li>
                            <li>• Miscellaneous: CAD $2,000-3,000</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="career-opportunities" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                      Career Opportunities
                    </h2>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Post-Graduation Work Permit (PGWP)</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>3-year work permit for graduates from eligible programs</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Opportunity to gain Canadian work experience</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Pathway to permanent residency through various immigration programs</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No job offer required to apply for PGWP</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Engineering Career Paths</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Software Development Companies</li>
                          <li>• Technology Startups</li>
                          <li>• Manufacturing Industries</li>
                          <li>• Government Agencies</li>
                          <li>• Consulting Firms</li>
                          <li>• Research Institutions</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Law Career Opportunities</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Law Firms (Corporate/Criminal)</li>
                          <li>• Government Legal Departments</li>
                          <li>• Corporate Legal Teams</li>
                          <li>• Non-Profit Organizations</li>
                          <li>• Judicial Services</li>
                          <li>• Legal Academia</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="application-process" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                      Application Process
                    </h2>
                    
                    <div className="bg-red-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-red-800">Step-by-Step Application Guide</h3>
                      <div className="space-y-4">
                        {[
                          "Research programs and universities",
                          "Prepare and take required standardized tests",
                          "Gather all required documents",
                          "Submit online applications",
                          "Pay application fees",
                          "Attend interviews (if required)",
                          "Receive admission decisions",
                          "Accept offer and pay deposit",
                          "Apply for student visa",
                          "Prepare for departure"
                        ].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-blue-800">Application Deadlines</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Fall Intake (September)</h4>
                          <ul className="text-sm text-blue-600">
                            <li>• Application Opens: September-October</li>
                            <li>• Deadline: January-March</li>
                            <li>• Decision: March-May</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Winter Intake (January)</h4>
                          <ul className="text-sm text-blue-600">
                            <li>• Application Opens: April-May</li>
                            <li>• Deadline: September-October</li>
                            <li>• Decision: October-December</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                      Frequently Asked Questions
                    </h2>
                    
                    <div className="space-y-6">
                      {[
                        {
                          question: "Can I work while studying in Canada?",
                          answer: "Yes, international students can work up to 20 hours per week during studies and full-time during breaks. Engineering co-op programs also provide paid work experience."
                        },
                        {
                          question: "What are the job prospects for engineering and law graduates?",
                          answer: "Both fields have excellent job prospects. Engineering has a 95%+ employment rate within 6 months of graduation, while law graduates also enjoy strong employment rates, especially in corporate and immigration law."
                        },
                        {
                          question: "Is it possible to get permanent residency after graduation?",
                          answer: "Yes, Canada offers various pathways to permanent residency for graduates, including the Canadian Experience Class (CEC) and Provincial Nominee Programs (PNP). Engineering and law are both in-demand occupations."
                        },
                        {
                          question: "What are the scholarship opportunities for Pakistani students?",
                          answer: "Many universities offer merit-based scholarships, research assistantships, and teaching assistantships. The Vanier Canada Graduate Scholarships and Trudeau Foundation Scholarships are prestigious options for graduate students."
                        }
                      ].map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition-colors"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Share Article */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Share This Article</h3>
                  <div className="flex space-x-3">
                    {shareLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full bg-gray-100 transition-colors ${link.color}`}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Get Expert Guidance</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Ready to start your engineering or law journey in Canada? Get personalized advice from our experts.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}