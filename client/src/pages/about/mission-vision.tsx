import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Globe, Users, Award, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function MissionVision() {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description: "We are committed to providing excellent service and maintaining the highest standards in everything we do."
    },
    {
      icon: Users,
      title: "Personalized Support",
      description: "Each student receives tailored guidance and support throughout their entire journey."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We prepare students for success on international platforms and global opportunities."
    },
    {
      icon: Award,
      title: "Leadership Development",
      description: "We help students become leaders in their respective fields and contribute to society."
    }
  ];

  const achievements = [
    { number: "5+", label: "Years of Excellence" },
    { number: "10,000+", label: "Students Guided" },
    { number: "20+", label: "Cities Served" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <Target className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Our Purpose & Goals</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white">
              Mission & Vision
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Dedicated to unlocking the transformative power of education for every student
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
                  <Target className="w-5 h-5 mr-2 text-[#1D50C9]" />
                  <span className="text-sm font-medium text-[#1D50C9]">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Empowering Future Leaders
                </h2>
                <div className="w-16 h-1 bg-[#1D50C9] mb-8"></div>
              </div>
              
              <blockquote className="text-2xl font-medium text-gray-800 italic border-l-4 border-[#1D50C9] pl-6 mb-8">
                "To help international students achieve their academic goals and become leaders in their respective fields."
              </blockquote>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Dunya Consultants, our mission is centered on empowering students to reach their full potential through quality international education. We are dedicated to providing comprehensive guidance and support throughout every step of their academic journey.
                </p>
                <p>
                  We believe that education is the key to unlocking opportunities and creating positive change in the world. Our commitment extends beyond just visa processing - we aim to shape future leaders who will contribute meaningfully to society.
                </p>
              </div>
            </motion.div>

            {/* Mission Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-3xl p-12 text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-4 -translate-x-4"></div>
                <div className="relative">
                  <Target className="w-16 h-16 text-white mb-8" />
                  <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Guiding students towards achieving their academic goals and becoming leaders in their chosen fields through personalized support and expert guidance.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">2,500+</div>
                      <div className="text-blue-100 text-sm">Students Guided</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-blue-100 text-sm">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vision Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative lg:order-1"
            >
              <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-blue-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-6 translate-x-6"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full translate-y-4 -translate-x-4"></div>
                <div className="relative">
                  <Eye className="w-16 h-16 text-[#1D50C9] mb-8" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformative Education</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Unlocking the transformative power of education with excellent service and personalized support for each student's unique journey.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-3xl font-bold text-[#1D50C9]">15+</div>
                      <div className="text-gray-600 text-sm">Countries</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-3xl font-bold text-[#1D50C9]">20+</div>
                      <div className="text-gray-600 text-sm">Branches</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 lg:order-2"
            >
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                  <Eye className="w-5 h-5 mr-2 text-[#1D50C9]" />
                  <span className="text-sm font-medium text-[#1D50C9]">Our Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Transforming Dreams into Reality
                </h2>
                <div className="w-16 h-1 bg-[#1D50C9] mb-8"></div>
              </div>
              
              <blockquote className="text-2xl font-medium text-gray-800 italic border-l-4 border-[#1D50C9] pl-6 mb-8">
                "To unlock the transformative power of education for our clients with our dedication to provide excellent service and personalized support to each of them."
              </blockquote>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We envision a world where every student has access to quality international education, regardless of their background or circumstances. Our vision drives us to continuously innovate and improve our services.
                </p>
                <p>
                  We aim to be recognized as the most trusted and reliable education consultancy in Pakistan, known for our commitment to excellence, integrity, and student success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D50C9] mb-4">
                Our Core Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Purpose Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D50C9] mb-8">
              Built To Make Study Abroad Easy
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  <strong>Dunya Consultants</strong> aims to prepare students for success in other continents and for productive roles as professionals and intellectuals in society. We are dedicated to making international education accessible, affordable, and achievable for every aspiring student.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D50C9] mb-4">Our Impact</h2>
              <p className="text-lg md:text-xl text-gray-600">Numbers that reflect our commitment to student success</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100"
              >
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}