import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, Target, Building2, GraduationCap, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WhoWeAre() {
  const stats = [
    { number: "17+", label: "City Branches", icon: Building2 },
    { number: "200+", label: "Certified Counsellors", icon: Users },
    { number: "250+", label: "Global Ambassadors", icon: Globe },
    { number: "50+", label: "Partner Universities", icon: GraduationCap },
  ];

  const highlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Over 200 certified counsellors providing personalized guidance to every student."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "250 ambassadors working internationally with partnerships across multiple countries."
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "Years of experience helping students achieve their study abroad dreams successfully."
    },
    {
      icon: Target,
      title: "Personalized Support",
      description: "Tailored guidance ensuring smooth and hassle-free visa and admission processes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">About Our Company</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              One of Pakistan's leading study abroad consultants, dedicated to making international education accessible to all
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Education Consultants in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Pakistan
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Dunya Consultants</strong> is one of the best education consultants in Pakistan. We stand among the top study abroad consultants and provide detailed guidance on study abroad programs to students.
                </p>
                <p>
                  With its head office in Sargodha, Dunya Consultants has branches in over <strong>17 cities</strong> across the country and a team of more than <strong>200 certified counsellors</strong>.
                </p>
                <p>
                  We are proud to have around <strong>250 ambassadors</strong> working with us internationally and have partnered with 30 top educational institutions in Pakistan and more than <strong>50 foreign universities</strong>.
                </p>
                <p>
                  Since the student visa process can be quite challenging, our Education Consultants are trained to provide <strong>personalized support</strong> to every student so that they can have a smooth and hassle-free experience.
                </p>
              </div>
              
              <div className="mt-8">
                <Link href="/about/mission-vision">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Learn About Our Mission
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence in Education</h3>
                    <p className="text-gray-700">
                      Preparing students for success in other continents and for productive roles as professionals and intellectuals in society.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why We Are{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Unique
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence and personalized support sets us apart in the education consultancy industry
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
              <p className="text-xl text-gray-600">Meet the visionary behind Dunya Consultants</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Umer Farooq</h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">Chief Executive Officer</p>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    CEO of Dunya Consultants, an Educational Consultancy Company located in Pakistan. Also the founder of XCON Technologies and a member of the Board of Directors of Dunya Group of Companies.
                  </p>
                  <p>
                    Completed his Bachelor's in Science from University of the Punjab and did his Masters from University of Engineering and Technology, Lahore.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    <a href="https://meetumerfarooq.com/" target="_blank" rel="noopener noreferrer">
                      Meet Umer Farooq
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get your consultancy booked with the best visa consultant in Pakistan – Dunya Consultants today and get answers to your education queries!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/study-abroad">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}