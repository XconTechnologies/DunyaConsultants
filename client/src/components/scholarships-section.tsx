import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, MapPin, GraduationCap, Clock, Award, Users, BookOpen } from "lucide-react";

export default function ScholarshipsSection() {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const scholarships = [
    {
      id: 1,
      title: "Chevening Scholarships",
      country: "UK",
      university: "Various UK Universities",
      amount: "Full Tuition + Living Allowance",
      type: "Government",
      deadline: "November 7, 2024",
      eligibility: "Master's degree candidates",
      description: "UK government's global scholarship programme, funded by the Foreign, Commonwealth & Development Office (FCDO) and partner organisations.",
      requirements: ["2 years work experience", "IELTS 6.5 overall", "Leadership potential", "Return to home country for 2 years"],
      benefits: ["Full tuition fees", "Monthly stipend", "Economy return airfare", "Visa costs"],
      applicationProcess: "Online application through Chevening website, references, academic transcripts, English test scores.",
      website: "https://www.chevening.org/",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      id: 2,
      title: "Australia Awards Scholarships",
      country: "Australia",
      university: "Participating Australian Universities",
      amount: "Full Scholarship",
      type: "Government",
      deadline: "April 30, 2024",
      eligibility: "Undergraduate and Postgraduate",
      description: "Australian Government scholarships for students from developing countries to study in Australia.",
      requirements: ["Strong academic record", "English proficiency", "Leadership potential", "Commitment to development"],
      benefits: ["Full tuition", "Living allowance", "Health cover", "Return airfare"],
      applicationProcess: "Apply through Australian Embassy or online portal in your country.",
      website: "https://www.australiaawards.gov.au/",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      id: 3,
      title: "Fulbright Foreign Student Program",
      country: "USA",
      university: "US Universities",
      amount: "$50,000 - $80,000",
      type: "Government",
      deadline: "May 15, 2024",
      eligibility: "Master's and PhD",
      description: "The flagship international educational exchange program sponsored by the U.S. government.",
      requirements: ["Bachelor's degree", "TOEFL/IELTS", "GRE/GMAT", "Leadership experience"],
      benefits: ["Tuition support", "Living stipend", "Health insurance", "Professional development"],
      applicationProcess: "Apply through Fulbright Commission in Pakistan or IIE website.",
      website: "https://foreign.fulbrightonline.org/",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      id: 4,
      title: "Vanier Canada Graduate Scholarships",
      country: "Canada",
      university: "Canadian Universities",
      amount: "CAD $50,000/year for 3 years",
      type: "Government",
      deadline: "November 3, 2024",
      eligibility: "PhD candidates",
      description: "Prestigious scholarship to attract and retain world-class doctoral students.",
      requirements: ["PhD enrollment", "Academic excellence", "Research potential", "Leadership skills"],
      benefits: ["CAD $50,000 annually", "3-year support", "Research opportunities"],
      applicationProcess: "Nominated by Canadian institution, online application through ResearchNet.",
      website: "https://vanier.gc.ca/",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      id: 5,
      title: "DAAD Scholarships",
      country: "Germany",
      university: "German Universities",
      amount: "€850-1,200/month",
      type: "Government",
      deadline: "October 31, 2024",
      eligibility: "Master's and PhD",
      description: "German Academic Exchange Service scholarships for international students.",
      requirements: ["Bachelor's degree", "German/English proficiency", "Academic excellence"],
      benefits: ["Monthly stipend", "Health insurance", "Travel allowance", "Study materials"],
      applicationProcess: "Online application through DAAD portal with required documents.",
      website: "https://www.daad.de/",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      id: 6,
      title: "Commonwealth Scholarships",
      country: "UK",
      university: "UK Universities",
      amount: "Full Funding",
      type: "Government",
      deadline: "December 14, 2024",
      eligibility: "Master's and PhD from developing countries",
      description: "UK government scholarships for citizens of Commonwealth countries.",
      requirements: ["First-class degree", "Research proposal", "Development impact"],
      benefits: ["Full tuition", "Living allowance", "Airfare", "Thesis grant"],
      applicationProcess: "Apply through Commonwealth Scholarship Commission online portal.",
      website: "https://cscuk.fcdo.gov.uk/",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      id: 7,
      title: "University of Toronto Scholarships",
      country: "Canada",
      university: "University of Toronto",
      amount: "CAD $25,000 - $40,000",
      type: "University",
      deadline: "January 15, 2024",
      eligibility: "International undergraduate and graduate students",
      description: "Merit-based scholarships for exceptional international students.",
      requirements: ["Outstanding academic record", "Leadership qualities", "Community involvement"],
      benefits: ["Partial to full tuition", "Merit recognition", "Networking opportunities"],
      applicationProcess: "Automatic consideration with admission application.",
      website: "https://www.utoronto.ca/",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      id: 8,
      title: "Melbourne Graduate Research Scholarships",
      country: "Australia",
      university: "University of Melbourne",
      amount: "AUD $33,000/year",
      type: "University",
      deadline: "October 31, 2024",
      eligibility: "PhD and Research Master's",
      description: "Prestigious research scholarships for domestic and international students.",
      requirements: ["Research excellence", "Academic merit", "Research proposal"],
      benefits: ["Living allowance", "Fee remission", "Overseas health cover"],
      applicationProcess: "Apply with research degree application through university portal.",
      website: "https://www.unimelb.edu.au/",
      color: "from-[#1D50C9] to-[#1845B3]"
    }
  ];

  const countries = ["all", "UK", "Canada", "Australia", "USA", "Germany"];
  
  const filteredScholarships = selectedCountry === "all" 
    ? scholarships 
    : scholarships.filter(s => s.country === selectedCountry);

  const stats = {
    total: scholarships.length,
    government: scholarships.filter(s => s.type === "Government").length,
    university: scholarships.filter(s => s.type === "University").length,
    countries: Array.from(new Set(scholarships.map(s => s.country))).length
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1D50C9]">
            Study Abroad Scholarships
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover fully-funded and partial scholarships for Pakistani students to study at top universities worldwide
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="text-center shadow-lg border-l-4 #1D50C9">
            <CardContent className="p-6">
              <Award className="h-10 w-10 #1845B3 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{stats.total}</h3>
              <p className="text-gray-600">Available Scholarships</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg border-l-4 #1D50C9">
            <CardContent className="p-6">
              <Users className="h-10 w-10 #1845B3 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{stats.government}</h3>
              <p className="text-gray-600">Government Scholarships</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg border-l-4 #1D50C9">
            <CardContent className="p-6">
              <BookOpen className="h-10 w-10 #1845B3 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{stats.university}</h3>
              <p className="text-gray-600">University Scholarships</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg border-l-4 #1D50C9">
            <CardContent className="p-6">
              <MapPin className="h-10 w-10 #1845B3 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{stats.countries}</h3>
              <p className="text-gray-600">Countries</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Country Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {countries.map((country) => (
            <Button
              key={country}
              variant={selectedCountry === country ? "default" : "outline"}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedCountry === country
                  ? "bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white shadow-lg"
                  : "hover:bg-gray-100"
              }`}
            >
              {country === "all" ? "All Countries" : country}
            </Button>
          ))}
        </motion.div>

        {/* Scholarships Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredScholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${scholarship.color} text-white p-6`}>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {scholarship.type}
                    </Badge>
                    <div className="flex items-center space-x-1 text-white/90">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{scholarship.country}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 leading-tight">
                    {scholarship.title}
                  </CardTitle>
                  <p className="text-white/90 text-sm">{scholarship.university}</p>
                </CardHeader>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 #1845B3" />
                      <div>
                        <p className="font-semibold text-gray-900">{scholarship.amount}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 #1845B3" />
                      <div>
                        <p className="text-sm text-gray-600">Deadline</p>
                        <p className="font-semibold text-gray-900">{scholarship.deadline}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-5 w-5 #1845B3" />
                      <div>
                        <p className="text-sm text-gray-600">Eligibility</p>
                        <p className="font-semibold text-gray-900">{scholarship.eligibility}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {scholarship.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scholarship.requirements.slice(0, 3).map((req, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 #1845B3 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scholarship.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 #1845B3 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 space-y-3">
                    <Button 
                      className={`w-full bg-gradient-to-r ${scholarship.color} text-white hover:shadow-lg transition-all`}
                      onClick={() => window.open(scholarship.website, '_blank')}
                    >
                      Apply Now
                    </Button>
                    <a href="tel:+923041110947" className="w-full">
                      <Button 
                        variant="outline" 
                        className="w-full"
                      >
                        Get Guidance
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Need Help with Scholarship Applications?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our expert counselors have helped thousands of students secure scholarships worth millions of dollars. 
                    Get personalized guidance for your scholarship applications.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 #1845B3 rounded-full"></div>
                      <span>Scholarship search and identification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 #1845B3 rounded-full"></div>
                      <span>Application essay writing and review</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 #1845B3 rounded-full"></div>
                      <span>Interview preparation and coaching</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-3xl font-bold #1845B3 mb-2">₹2.5 Crore+</div>
                    <p className="text-gray-600">Scholarships secured for our students</p>
                  </div>
                  <div className="space-y-3">
                    <a href="tel:+923041110947" className="w-full">
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white hover:shadow-xl transition-all"
                      >
                        Book Free Consultation
                      </Button>
                    </a>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open(`mailto:info@dunyaconsultants.com`, '_self')}
                    >
                      Email Us
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}