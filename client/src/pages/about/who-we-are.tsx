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
    { number: "15+", label: "Countries", icon: Globe, color: "from-[#1D50C9] to-[#1845B3]" },
    { number: "20+", label: "Branches", icon: Building2, color: "from-[#1D50C9] to-[#1845B3]" },
    { number: "98%", label: "Success Rate", icon: Award, color: "from-[#1D50C9] to-[#1845B3]" },
    { number: "2,500+", label: "Students Placed", icon: Users, color: "from-[#1D50C9] to-[#1845B3]" },
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
            <div className="flex flex-row gap-2 sm:gap-4 justify-center mb-16">
              <Link href="/contact">
                <Button size="sm" className="bg-white text-[#1D50C9] hover:bg-blue-50 px-2 py-1 text-xs sm:px-8 sm:py-4 sm:text-lg font-semibold sm:size-lg">
                  Book Free Consultation
                  <ArrowRight className="w-3 h-3 ml-1 sm:w-5 sm:h-5 sm:ml-2" />
                </Button>
              </Link>
              <Link href="/about/mission-vision">
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10 px-2 py-1 text-xs sm:px-8 sm:py-4 sm:text-lg sm:size-lg">
                  Our Mission & Vision
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Redesigned */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-6">
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
                  <CardContent className="p-4 md:p-8 text-center">
                    <div className={`w-12 h-12 md:w-20 md:h-20 mx-auto mb-3 md:mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm md:text-base text-gray-600 font-semibold">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content - Completely Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full text-white font-semibold mb-6">
              <Award className="w-5 h-5 mr-2" />
              About Dunya Consultants
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-6">
              Pakistan's Most Trusted{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Education Consultancy
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Empowering Pakistani students to achieve their global education dreams through expert guidance, proven processes, and unwavering support.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="h-full border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Company Overview */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Globe className="w-6 h-6 mr-3 text-[#1D50C9]" />
                        Who We Are
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong className="text-[#1D50C9]">Dunya Consultants</strong> stands as Pakistan's premier education consultancy, dedicated to transforming study abroad dreams into reality. Based in Sargodha with nationwide presence, we've successfully guided thousands of students toward their global education goals.
                      </p>
                    </div>

                    {/* Key Stats Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Building2 className="w-8 h-8 text-[#1D50C9] mr-3" />
                          <div>
                            <div className="text-2xl font-bold text-[#1D50C9]">20+</div>
                            <div className="text-sm font-semibold text-gray-700">Branch Offices</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Strategic locations across Pakistan ensuring local support everywhere</p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Users className="w-8 h-8 text-green-600 mr-3" />
                          <div>
                            <div className="text-2xl font-bold text-green-600">200+</div>
                            <div className="text-sm font-semibold text-gray-700">Expert Counselors</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Certified professionals providing personalized guidance</p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Globe className="w-8 h-8 text-purple-600 mr-3" />
                          <div>
                            <div className="text-2xl font-bold text-purple-600">15+</div>
                            <div className="text-sm font-semibold text-gray-700">Countries</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Global network spanning major study destinations</p>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                        <div className="flex items-center mb-3">
                          <GraduationCap className="w-8 h-8 text-orange-600 mr-3" />
                          <div>
                            <div className="text-2xl font-bold text-orange-600">2,500+</div>
                            <div className="text-sm font-semibold text-gray-700">Success Stories</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Students successfully placed in top universities</p>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-8 rounded-2xl text-white">
                      <div className="text-center">
                        <h4 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h4>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                          Join thousands of successful students who chose Dunya Consultants for their study abroad journey. Get expert guidance from Pakistan's most trusted education consultancy.
                        </p>
                        <Button 
                          size="lg" 
                          className="bg-white text-[#1D50C9] hover:bg-gray-100 font-semibold px-8 py-3"
                        >
                          Book Free Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Excellence Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] text-white">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center min-h-[500px]">
                  <div className="w-20 h-20 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6">Excellence in Education</h3>
                  
                  <p className="text-white/90 leading-relaxed text-lg mb-8 px-2">
                    Committed to preparing students for success on international platforms and fostering their growth as global professionals and intellectuals.
                  </p>
                  
                  <div className="space-y-5 text-white/90 text-base">
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/70 rounded-full mr-4"></div>
                      <span>Comprehensive study abroad guidance</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/70 rounded-full mr-4"></div>
                      <span>Expert visa processing support</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/70 rounded-full mr-4"></div>
                      <span>Trusted by thousands of families</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/70 rounded-full mr-4"></div>
                      <span>Proven track record since 2009</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/70 rounded-full mr-4"></div>
                      <span>Personalized counselling sessions</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/70 rounded-full mr-4"></div>
                      <span>Post-admission support services</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work - Redesigned */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-6">
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                Dunya Consultants
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We offer free consultation to help students in planning their study abroad journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
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
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-6">Meet Our Leadership</h2>
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
                    <div style={{ 
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      color: 'white !important',
                      backgroundColor: 'transparent',
                      textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                      fontFamily: 'inherit'
                    }}>Umer Farooq</div>
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