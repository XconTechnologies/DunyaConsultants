import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Award, 
  Shield, 
  Users, 
  Clock, 
  GraduationCap, 
  Globe, 
  TrendingUp, 
  Heart 
} from 'lucide-react';

export default function ReasonsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Years of Excellence",
      description: "Established in 2009, we have successfully guided thousands of students with our proven track record and expertise in international education.",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "98% Visa Success Rate", 
      description: "Our expert documentation and application process ensures highest visa approval rates, giving you confidence in your study abroad journey.",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "200+ Certified Counselors",
      description: "Our team of qualified education counselors provides personalized guidance based on your academic background and career aspirations.",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Student Support",
      description: "Round-the-clock assistance for all your queries, concerns, and emergencies throughout your study abroad journey.",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "400+ University Partners",
      description: "Direct partnerships with top universities across 30+ countries, ensuring you get the best placement opportunities worldwide.",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "17+ Office Locations",
      description: "Extensive network across Pakistan with offices in major cities, providing convenient access to our services nationwide.",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Free Career Counseling",
      description: "Comprehensive career guidance and aptitude assessments to help you choose the right course and country for your future.",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Post-Arrival Support",
      description: "Continued assistance even after you reach your destination, including accommodation, bank account setup, and cultural orientation.",
      gradient: "from-blue-400 to-blue-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 #4285F4 rounded-full -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 #4285F4 rounded-full translate-x-48 translate-y-48" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 #3367D6 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span style={{ color: '#4285F4' }}>8 Reasons that Sets us apart from</span>
            <br />
            <span style={{ color: '#4285F4' }}>
              Other Educational Consultants in Pakistan
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover why thousands of Pakistani students choose Dunya Consultants for their international education journey
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group-hover:border-transparent overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {reason.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                    {reason.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
                
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 group-hover:bg-white group-hover:text-gray-800 transition-colors duration-300">
                  {index + 1}
                </div>
              </div>

              {/* Floating Animation Elements */}
              <motion.div
                className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${reason.gradient} rounded-full opacity-0 group-hover:opacity-60`}
                animate={isInView ? {
                  y: [0, -10, 0],
                  opacity: [0, 0.6, 0]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <motion.div
                className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${reason.gradient} rounded-full opacity-0 group-hover:opacity-40`}
                animate={isInView ? {
                  y: [0, 10, 0],
                  opacity: [0, 0.4, 0]
                } : {}}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4285F4] via-blue-600 to-[#3367D6] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience the Difference
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
          
          <p className="text-gray-500 mt-4 text-sm">
            Join 10,000+ successful students who chose us for their dreams
          </p>
        </motion.div>
      </div>
    </section>
  );
}