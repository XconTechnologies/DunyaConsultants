import { useRef, useState, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Import the same images from the carousel
import img1 from "@assets/Avari Carnival (147 of 1139)_1751536114472.webp";
import img2 from "@assets/Avari Carnival (152 of 1139)_1751536114473.webp";
import img3 from "@assets/Branch Manager of the year_1751536114473.webp";
import img4 from "@assets/Dunya AGM (183 of 577)_1751536114474.webp";
import img5 from "@assets/Dunya AGM (187 of 577)_1751536114474.webp";
import img6 from "@assets/Dunya AGM (319 of 577)_1751536114475.webp";
import img7 from "@assets/Dunya AGM (337 of 577)_1751536114475.webp";
import img8 from "@assets/Dunya AGM (350 of 577)_1751536114475.webp";
import img9 from "@assets/IMG-20250510-WA0020_1751536114476.webp";
import img10 from "@assets/IMG-20250510-WA0028_1751536114476.webp";
import img11 from "@assets/IMG-20250510-WA0070_1751536114476.webp";
import img12 from "@assets/MHQ07558_1751536114477.webp";

const aboutImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
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

  // Optimized image sets with fewer duplicates for better performance
  const leftColumnImages = useMemo(() => [
    ...aboutImages.slice(0, 6), 
    ...aboutImages.slice(0, 6)
  ], []);
  
  const rightColumnImages = useMemo(() => [
    ...aboutImages.slice(6, 12), 
    ...aboutImages.slice(6, 12)
  ], []);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-indigo-400 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-4 h-4 bg-purple-400 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header Section */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
              ABOUT COMPANY
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent">
              WHO WE ARE
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Dunya Consultants is one of the best education consultants in Pakistan. 
            We stand among the top study abroad consultants and provide detailed 
            guidance on study abroad programs to students.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Enhanced Scrolling Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glass morphism container */}
              <div className="relative h-[550px] lg:h-[650px] bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-4 shadow-2xl">
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl rotate-12 shadow-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl -rotate-12 shadow-lg"></div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl rotate-45 shadow-lg"></div>

                {/* Enhanced Left Column */}
                <div className="absolute left-6 top-6 w-[calc(50%-16px)] h-[calc(100%-48px)] overflow-hidden rounded-2xl">
                  <motion.div
                    className="flex flex-col gap-4"
                    animate={{
                      y: [0, -600]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {leftColumnImages.map((img, index) => (
                      <div
                        key={`left-${index}`}
                        className="relative rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                      >
                        <img
                          src={img}
                          alt={`Company Image ${index + 1}`}
                          className="w-full h-32 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Enhanced Right Column */}
                <div className="absolute right-6 top-6 w-[calc(50%-16px)] h-[calc(100%-48px)] overflow-hidden rounded-2xl">
                  <motion.div
                    className="flex flex-col gap-4"
                    animate={{
                      y: [-600, 0]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {rightColumnImages.map((img, index) => (
                      <div
                        key={`right-${index}`}
                        className="relative rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                      >
                        <img
                          src={img}
                          alt={`Company Image ${index + 1}`}
                          className="w-full h-32 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-6 py-3 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">17+</div>
                  <div className="text-xs text-gray-600">Cities</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-8 bg-white rounded-2xl px-6 py-3 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">250+</div>
                  <div className="text-xs text-gray-600">Ambassadors</div>
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
                      className="w-full flex items-center justify-between p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">+</span>
                        </div>
                        <span className="text-gray-900 font-semibold text-left text-lg">
                          {item.title}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedItems.includes(index) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-full bg-gray-100 group-hover:bg-white transition-colors duration-300"
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