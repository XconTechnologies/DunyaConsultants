import { useRef, useState, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import OptimizedImage from "@/components/optimized-image";

// Import only 6 key images for better performance
import img1 from "@assets/Avari Carnival (147 of 1139)_1751536114472.webp";
import img2 from "@assets/Avari Carnival (152 of 1139)_1751536114473.webp";
import img3 from "@assets/Branch Manager of the year_1751536114473.webp";
import img4 from "@assets/Dunya AGM (183 of 577)_1751536114474.webp";
import img5 from "@assets/Dunya AGM (187 of 577)_1751536114474.webp";
import img6 from "@assets/Dunya AGM (319 of 577)_1751536114475.webp";

const aboutImages = [
  img1, img2, img3, img4, img5, img6
];

const expandableContent = [
  {
    title: "17 City Branches & 200 Certified Counsellors",
    content: "With its head office in Lahore, Dunya Consultants has branches in over 17 cities across the country and a team of more than 200 certified counsellors."
  },
  {
    title: "250 Ambassadors & 50+ Foreign Universities", 
    content: "We are proud to have around 250 ambassadors working with us internationally and have partnered with 30 top educational institutions in Pakistan and more than 20 foreign universities."
  },
  {
    title: "Scholarship Programs",
    content: "Since the student visa process can be quite challenging, that's why our Education Consultants are trained enough to provide personalized support to every student so that they can have a smooth and hassle-free experience."
  },
  {
    title: "Smooth Visa Approval Process", 
    content: "As a growing study abroad consultants' firm, we help students in visa interview preparations and guide them throughout the student visa application process."
  },
  {
    title: "Study Abroad Guidance",
    content: "So, what are you waiting for? Get your consultancy booked with the best visa consultant in Lahore – Dunya Consultants today and get answers to your education queries!"
  }
];

export default function AboutCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = useCallback((index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }, []);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6 border border-blue-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-bold text-blue-800 tracking-wider uppercase">
              About Company
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Who We Are
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dunya Consultants is one of the best education consultants in Pakistan. 
            We stand among the top study abroad consultants and provide detailed 
            guidance on study abroad programs to students.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-start">
          
          {/* Left Side - Modern Scrollable Image Gallery */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Container with Modern Design */}
              <div className="relative h-[600px] lg:h-[700px] bg-gradient-to-br from-white/40 via-blue-50/50 to-indigo-100/40 backdrop-blur-xl border border-white/50 rounded-[2rem] p-6 shadow-2xl">
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl rotate-12 shadow-xl opacity-90"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl -rotate-12 shadow-xl opacity-90"></div>
                <div className="absolute top-1/3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl rotate-45 shadow-lg opacity-80"></div>
                <div className="absolute bottom-1/3 -left-3 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl -rotate-45 shadow-lg opacity-80"></div>

                {/* Enhanced Scrollable Image Gallery */}
                <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                  
                  {/* Scrolling Container */}
                  <div className="h-full overflow-y-scroll scrollbar-hide">
                    <div className="space-y-6 p-2">
                      {aboutImages.map((img, index) => (
                        <motion.div
                          key={index}
                          className="relative group"
                          initial={{ opacity: 0, y: 50 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]">
                            {/* Image with Overlay Effects */}
                            <div className="relative h-48 lg:h-56">
                              <img
                                src={img}
                                alt={`Company Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                              />
                              
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              {/* Content Overlay */}
                              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="text-white">
                                  <h4 className="font-bold text-lg mb-1">Our Journey</h4>
                                  <p className="text-sm text-gray-200">Building futures together</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Decorative Border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 group-hover:border-white/30 transition-all duration-500"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Scroll Fade Effects */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-50/80 to-transparent pointer-events-none z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-50/80 to-transparent pointer-events-none z-10"></div>
                </div>
              </div>

              {/* Enhanced Floating Statistics */}
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white to-blue-50 rounded-2xl px-8 py-4 shadow-2xl border border-blue-100"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">17+</div>
                  <div className="text-sm text-gray-600 font-medium">Cities</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 left-12 bg-gradient-to-r from-white to-indigo-50 rounded-2xl px-8 py-4 shadow-2xl border border-indigo-100"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">250+</div>
                  <div className="text-sm text-gray-600 font-medium">Ambassadors</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gradient-to-r from-white to-emerald-50 rounded-2xl px-6 py-3 shadow-2xl border border-emerald-100"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">200+</div>
                  <div className="text-xs text-gray-600 font-medium">Expert Staff</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Content */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >

            {/* Enhanced Expandable Features */}
            <div className="space-y-4">
              {expandableContent.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all duration-300"
                    >
                      <span className="text-gray-900 font-semibold text-left text-lg">
                        {item.title}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedItems.includes(index) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      </motion.div>
                    </button>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedItems.includes(index) ? "auto" : 0,
                        opacity: expandedItems.includes(index) ? 1 : 0
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed bg-gradient-to-r from-gray-50 to-blue-50">
                        <div className="pt-2 border-t border-gray-200">
                          {item.content}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.button 
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Read More</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}