import { motion } from "framer-motion";
import { Users, MapPin, Mail, Phone, Award, Star, Target } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

// Import team member images
import usamaAshrafImg from "@assets/WhatsApp Image 2025-08-28 at 16.42.49_5510c1da_1756381388641.jpg";
import taimurKhanImg from "@assets/image_1756381126653.png";
import abdullahImg from "@assets/WhatsApp Image 2025-08-28 at 16.47.01_86cf7a45_1756381633554.jpg";
import usamaRandhawaImg from "@assets/WhatsApp Image 2025-08-28 at 12.50.31_9a52d3d7_1756381984656.jpg";
import aliAbidImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.37_2bc11f6e_1756446807208.jpg";
import hafizHamzaImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.38_c995b7bf_1756446909359.jpg";
import muhammadDabeerImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.39_1a086e0b_1756447231089.jpg";
import muhammadSohailImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.42_14fc9675_1756447399651.jpg";
import asadUllahImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.45_76d68df5_1756447435212.jpg";
import muhammadUsamaImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.42_750d3eaa_1756447532273.jpg";
import muhammadUmerImg from "@assets/image_1756447669274.png";
import mudassarRazaImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.46_4b955486_1756447920101.jpg";
import rashidAliImg from "@assets/WhatsApp Image 2025-08-29 at 10.45.47_29125617_1756448310126.jpg";

const teamMembers = [
  {
    id: 1,
    image: taimurKhanImg,
    name: "Taimur Ahmad Khan",
    designation: "Senior Business Development Manager"
  },
  {
    id: 2,
    image: usamaAshrafImg,
    name: "Usama Ashraf",
    designation: "Regional Manager"
  },
  {
    id: 3,
    image: abdullahImg,
    name: "Abdullah",
    designation: "Branch Manager Sargodha"
  },
  {
    id: 4,
    image: usamaRandhawaImg,
    name: "Usama Bashir Randhawa",
    designation: "Branch Manager Gujranwala"
  },
  {
    id: 5,
    image: aliAbidImg,
    name: "Ali Abid",
    designation: "Branch Manager Sheikhupura"
  },
  {
    id: 6,
    image: hafizHamzaImg,
    name: "Hafiz Hamza Sabir",
    designation: "Branch Manager Sialkot"
  },
  {
    id: 7,
    image: muhammadDabeerImg,
    name: "Muhammad Dabeer Raza",
    designation: "Operations Manager SGD/ Supervisor Jhelum"
  },
  {
    id: 8,
    image: muhammadSohailImg,
    name: "Muhammad Sohail Ashraf",
    designation: "Lead Language Instructor"
  },
  {
    id: 9,
    image: asadUllahImg,
    name: "Asad Ullah",
    designation: "Business Development Manager"
  },
  {
    id: 10,
    image: muhammadUsamaImg,
    name: "Muhammad Usama",
    designation: "Accounts Manager"
  },
  {
    id: 11,
    image: muhammadUmerImg,
    name: "Muhammad Umer Nadeem",
    designation: "Europe Destination Manager"
  },
  {
    id: 12,
    image: mudassarRazaImg,
    name: "Mudassar Raza",
    designation: "Branch Manager"
  },
  {
    id: 13,
    image: rashidAliImg,
    name: "Rashid Ali",
    designation: "Branch Manager Islamabad"
  }
];

const stats = [
  { icon: Users, label: "Team Members", value: "200+" },
  { icon: Target, label: "Success Rate", value: "98%" },
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: MapPin, label: "Countries Covered", value: "15+" }
];

export default function TeamPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Team Dunya Consultants
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who make your study abroad dreams come true
            </p>
            <div className="mt-8 flex justify-center">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1D50C9] to-[#1845B3]">
                Our Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                          className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-white shadow-lg"
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
                          className="text-gray-600 mb-1 sm:mb-4" 
                          style={{ fontSize: '11px', fontWeight: 400, lineHeight: '1.3' }}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1D50C9] to-[#1845B3]">
                Why Our Team Stands Out
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert team is here to guide you every step of the way to your study abroad success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1D50C9] rounded-full font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Our Team
              </motion.a>
              <motion.a
                href="tel:+923261111947"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}