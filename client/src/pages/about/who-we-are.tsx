import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, Target, Building2, GraduationCap, Heart, Star, CheckCircle, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import umerFarooqPhoto from "@assets/1705387657661_1753962152110.jpeg";

export default function WhoWeAre() {
  const stats = [
    { number: "10+", label: "Countries", icon: Globe, color: "from-[#1D50C9] to-[#1845B3]" },
    { number: "14+", label: "Branches", icon: Building2, color: "from-[#1D50C9] to-[#1845B3]" },
    { number: "98%", label: "Success Rate", icon: Award, color: "from-[#1D50C9] to-[#1845B3]" },
    { number: "2,000+", label: "Visa Processing", icon: Users, color: "from-[#1D50C9] to-[#1845B3]" },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Get All Details",
      description: "Reach out to us to get all details and guidance for studying abroad from our expert education consultants.",
      icon: Phone
    },
    {
      step: "2", 
      title: "University Selection",
      description: "Choose the right university for abroad education according to your choice.",
      icon: GraduationCap
    },
    {
      step: "3",
      title: "Meet Requirements",
      description: "Our professionals will guide you to meet all requirements for study abroad programs.",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Apply To University", 
      description: "Apply to your selected foreign university. Our study abroad consultants streamline the student visa application process for a successful submission.",
      icon: Mail
    },
    {
      step: "5",
      title: "Interview Preparation",
      description: "Pass your international university interview with the help of our education counsellor.",
      icon: Users
    },
    {
      step: "6",
      title: "Visa Granted",
      description: "Finally, your visa is granted. Get ready to travel to studying abroad!",
      icon: Award
    }
  ];

  const highlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Over 200 certified counsellors providing personalized guidance to every student.",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      icon: Globe,
      title: "Global Network", 
      description: "250 ambassadors working internationally with partnerships across multiple countries.",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "Years of experience helping students achieve their study abroad dreams successfully.",
      color: "from-[#1D50C9] to-[#1845B3]"
    },
    {
      icon: Target,
      title: "Personalized Support",
      description: "Tailored guidance ensuring smooth and hassle-free visa and admission processes.",
      color: "from-[#1D50C9] to-[#1845B3]"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Redesigned */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#1565c0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/15 rounded-full backdrop-blur-sm mb-8 border border-white/20">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">About Dunya Consultants</span>
            </div>
            
            <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Why We Are{" "}
              <span className="text-white">
                Unique
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Pakistan's leading education consultancy, dedicated to making your study abroad dreams a reality with personalized guidance and proven success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about/mission-vision">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Our Mission & Vision
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Serve Around{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                The Globe
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for seamless study visa solutions abroad
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content - Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Leading Education Consultants in{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Pakistan
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p className="leading-relaxed">
                  <strong>Dunya Consultants</strong> is one of the best education consultants in Pakistan. We stand among the top study abroad consultants and provide detailed guidance on study abroad programs to students.
                </p>
                
                <p className="leading-relaxed">
                  With its head office in Lahore, Dunya Consultants has branches in over <strong className="text-[#1D50C9]">14 cities</strong> across the country and a team of more than <strong className="text-[#1D50C9]">200 counselors</strong>.
                </p>
                
                <p className="leading-relaxed">
                  We are proud to have around <strong className="text-[#1D50C9]">250 ambassadors</strong> working with us internationally and have partnered with 30 top educational institutions in Pakistan and more than <strong className="text-[#1D50C9]">20 foreign universities</strong>.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-[#1D50C9]">
                  <p className="leading-relaxed font-medium text-gray-800">
                    So, what are you waiting for? Get your consultancy booked with the best visa consultant in Lahore – <strong className="text-[#1D50C9]">Dunya Consultants</strong> today and get answers to your education queries!
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-3xl blur-lg opacity-20"></div>
                <Card className="relative bg-white shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center">
                        <GraduationCap className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence in Education</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Preparing students for success on international platforms and for productive roles as professionals and intellectuals in society.
                      </p>
                      <div className="flex justify-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#1D50C9]">15+</div>
                          <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#1D50C9]">10K+</div>
                          <div className="text-sm text-gray-600">Students Served</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures a smooth journey from consultation to visa approval
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    
                    <div className="w-14 h-14 mb-4 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-xl flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Dunya Consultants
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We offer free consultation to help students in planning their study abroad journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">Visionary leadership driving educational excellence</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-8 text-white text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={umerFarooqPhoto} 
                        alt="Umer Farooq - CEO of Dunya Consultants" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      color: '#ffffff',
                      textShadow: '0 0 1px rgba(0,0,0,0.5)'
                    }}>Umer Farooq</h3>
                    <p className="text-blue-200 font-semibold mb-4">Chief Executive Officer</p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <div className="font-semibold">Education:</div>
                        <div className="text-blue-200">University of Punjab</div>
                        <div className="text-blue-200">UET Lahore</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">About Our CEO</h4>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Hi, myself Umer Farooq! I'm the Chief Executive Officer (CEO) of Dunya Consultants, an Educational Consultancy Company located in Pakistan.
                      </p>
                      <p>
                        I am also the founder of XCON Technologies and a member of the Board of Directors of Dunya Group of Companies.
                      </p>
                      <p>
                        I have completed my Graduation (Bachelor's in Science) from University of the Punjab and did my Masters from University of Engineering and Technology, Lahore.
                      </p>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" className="border-[#1D50C9] text-[#1D50C9] hover:bg-blue-50">
                        <a href="https://meetumerfarooq.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Meet Umer Farooq
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}