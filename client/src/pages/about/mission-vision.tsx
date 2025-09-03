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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1D50C9] rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D50C9]">Our Mission</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl md:text-2xl font-semibold text-[#1D50C9] mb-4">
                  "To help international students achieve their academic goals and become leaders in their respective fields."
                </p>
                <p>
                  At Dunya Consultants, our mission is centered on empowering students to reach their full potential through quality international education. We are dedicated to providing comprehensive guidance and support throughout every step of their academic journey.
                </p>
                <p>
                  We believe that education is the key to unlocking opportunities and creating positive change in the world. Our commitment extends beyond just visa processing - we aim to shape future leaders who will contribute meaningfully to society.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-80 lg:h-96">
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-[#1D50C9] rounded-full flex items-center justify-center">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
                    <p className="text-gray-700">
                      Guiding students towards achieving their academic goals and becoming leaders in their chosen fields.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1D50C9] rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D50C9]">Our Vision</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl md:text-2xl font-semibold text-[#1D50C9] mb-4">
                  "To unlock the transformative power of education for our clients with our dedication to provide excellent service and personalized support to each of them."
                </p>
                <p>
                  We envision a world where every student has access to quality international education, regardless of their background or circumstances. Our vision drives us to continuously innovate and improve our services.
                </p>
                <p>
                  We aim to be recognized as the most trusted and reliable education consultancy in Pakistan, known for our commitment to excellence, integrity, and student success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:order-1 relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-80 lg:h-96">
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-[#1D50C9] rounded-full flex items-center justify-center">
                      <Eye className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Transformative Education</h3>
                    <p className="text-gray-700">
                      Unlocking the transformative power of education with excellent service and personalized support.
                    </p>
                  </div>
                </div>
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