import { motion } from "framer-motion";
import { Users, MapPin, Mail, Phone, Award, Star, Target } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CalendlyButton from "@/components/calendly-button";
import CompactConsultationForm from "@/components/compact-consultation-form";
import { useState, useEffect } from "react";
import { setStaticPageMeta } from "@/lib/seo";

// Import team member images
import usamaAshrafImg from "@assets/WhatsApp Image 2025-08-28 at 16.42.49_5510c1da_1756381388641.jpg";
import abdullahImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.36_fc7e1925_1756453355622.jpg";
import usamaRandhawaImg from "@assets/WhatsApp Image 2025-08-28 at 12.50.31_9a52d3d7_1756470982418.jpg";
import aliAbidImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.37_2bc11f6e_1756470109036.jpg";
import hafizHamzaImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.38_c995b7bf_1756446909359.jpg";
import mudassarRazaImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.46_e2b8f68e_1756461933614.jpg";
import rashidAliImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.47_29125617_1756448310126.jpg";
import talhaAzizImg from "@assets/rg[2]_1756453049445.jpg";
import shahanRashidImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.43_18fb300b_1756448434602.jpg";
import aliHassanImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.39_cb66050c_1756451810921.jpg";
import ahmedUsmanImg from "@assets/IMG_20230412_203731[1]_1756462166994.jpg";
import khalilAhmadImg from "@assets/image_1756452528951.png";
import muhammadAmanImg from "@assets/IMG-20250216-WA0054[1]_1756452725383.jpg";
import salmanMargubImg from "@assets/salman-marghub.jpg";
import umerFarooqImg from "@assets/umer-farooq.jpg";
import abdulMajeedImg from "@assets/IMG-20250707-WA0042[1]_1756462751467.jpg";
import muhammadIbrahimImg from "@assets/Cards[1]_1756466659432.jpg";
import drWaleedMostafaImg from "@assets/image_1756554691033.png";
import jowariaImg from "@assets/IMG-20250830-WA0078_1756554993755.jpg";
import sadeezaImg from "@assets/IMG-20250828-WA00733_1756555045087.jpg";

const teamMembers = [
  // CEO
  {
    id: 1,
    image: umerFarooqImg,
    name: "Umer Farooq",
    designation: "Chief Executive Officer"
  },
  // Co Founder
  {
    id: 2,
    image: salmanMargubImg,
    name: "Salman Marghub",
    designation: "Director Operations"
  },
  // General Manager
  {
    id: 3,
    image: abdulMajeedImg,
    name: "Abdul Majeed",
    designation: "General Manager"
  },
  // Director
  {
    id: 4,
    image: muhammadIbrahimImg,
    name: "Muhammad Ibrahim",
    designation: "Director Compliance"
  },
  {
    id: 5,
    image: drWaleedMostafaImg,
    name: "Dr. Waleed Mostafa",
    designation: "Branch Manager Egypt"
  },
  {
    id: 6,
    image: jowariaImg,
    name: "Jowaria Mohammad",
    designation: "Partnerships Manager UK"
  },
  // Regional Managers
  {
    id: 7,
    image: aliHassanImg,
    name: "Ali Hassan",
    designation: "Regional Manager-North"
  },
  {
    id: 8,
    image: usamaRandhawaImg,
    name: "Usama Bashir",
    designation: "Branch Manager Gujranwala"
  },
  {
    id: 9,
    image: rashidAliImg,
    name: "Rashid Ali",
    designation: "Branch Manager Islamabad"
  },
  // Branch Managers (Specified order)
  {
    id: 10,
    image: ahmedUsmanImg,
    name: "Ahmed Usman",
    designation: "Operational Manager Karachi"
  },
  {
    id: 11,
    image: abdullahImg,
    name: "Abdullah",
    designation: "Branch Manager Sargodha"
  },
  {
    id: 12,
    image: hafizHamzaImg,
    name: "Hamza Sabir",
    designation: "Branch Manager Sialkot"
  },
  {
    id: 13,
    image: sadeezaImg,
    name: "Sadeeza Nasir",
    designation: "Branch Manager Multan"
  },
  {
    id: 14,
    image: usamaAshrafImg,
    name: "Usama Ashraf",
    designation: "Branch Manager Gujrat"
  },
  {
    id: 15,
    image: talhaAzizImg,
    name: "Talha Aziz",
    designation: "Branch Manager Mian Channu"
  },
  {
    id: 16,
    image: aliAbidImg,
    name: "Ali Abid",
    designation: "Branch Manager Sheikhupura"
  },
  {
    id: 17,
    image: mudassarRazaImg,
    name: "Mudassar Raza",
    designation: "Branch Manager Mandi Bahauddin"
  },
  {
    id: 18,
    image: khalilAhmadImg,
    name: "Khalil Ahmad",
    designation: "Branch Manager Bahawalpur"
  },
  {
    id: 19,
    image: muhammadAmanImg,
    name: "Aman Khan",
    designation: "Branch Manager Mardan"
  }
];

const stats = [
  { icon: Users, label: "Team Members", value: "200+" },
  { icon: Target, label: "Success Rate", value: "98%" },
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: MapPin, label: "Countries Covered", value: "15+" }
];

export default function TeamPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  useEffect(() => {
    setStaticPageMeta(
      "Our Team",
      "Meet our experienced team of study abroad consultants, visa experts, and education counselors dedicated to helping you succeed in your international education journey."
    );
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6"
            >
              <Users className="w-10 h-10" />
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Team Dunya Consultants
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who make your study abroad dreams come true
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <CalendlyButton
                text="Book Free Consultation"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 w-full sm:w-auto px-6 py-3 text-lg font-semibold"
                size="lg"
                showIcon={false}
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={() => setIsPopupOpen(true)}
              >
                Connect now
              </Button>
            </div>
            <div className="mt-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
              >
                <p className="text-sm font-medium">
                  Experienced • Dedicated • Results-Driven
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#1D50C9] mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Members Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1D50C9] to-[#1845B3]">Our Core Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading our mission to help students achieve their global education goals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white border-0 shadow-lg h-auto sm:h-80">
                  <CardContent className="px-1 py-2 sm:px-3 sm:py-8 md:px-4 md:py-10 text-center">
                    <div className="mb-1 sm:mb-3">
                      <div className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] mx-auto">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center rounded-full border-2 sm:border-4 border-white shadow-lg"
                        />
                      </div>
                    </div>
                    {member.name && (
                      <>
                        <h3 
                          className="mb-1 sm:mb-3 font-bold" 
                          style={{ fontSize: '14px', fontWeight: 700, lineHeight: '1.1', color: '#1D50C9' }}
                        >
                          {member.name}
                        </h3>
                        <p 
                          className="text-gray-600 mb-1 sm:mb-4 text-[9px] sm:text-[13px]" 
                          style={{ fontWeight: 400, lineHeight: '1.2' }}
                        >
                          {member.designation}
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1D50C9] to-[#1845B3]">
                Why Our Team Stands Out
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our success comes from our people - dedicated professionals committed to your educational journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expertise",
                description: "Years of experience in international education and visa processing"
              },
              {
                icon: Users,
                title: "Dedication",
                description: "Personal attention to each student's unique goals and aspirations"
              },
              {
                icon: Star,
                title: "Results",
                description: "Proven track record of successful student placements worldwide"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1D50C9] mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Consultation Form Popup */}
      <CompactConsultationForm 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}