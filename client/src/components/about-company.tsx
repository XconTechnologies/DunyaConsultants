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

  // Optimized image sets with fewer images for fast loading
  const leftColumnImages = useMemo(() => [
    ...aboutImages.slice(0, 3), 
    ...aboutImages.slice(0, 3)
  ], []);
  
  const rightColumnImages = useMemo(() => [
    ...aboutImages.slice(3, 6), 
    ...aboutImages.slice(3, 6)
  ], []);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
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
            className="text-3xl lg:text-4xl font-bold mb-6 text-[#1e3a8a]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            WHO WE ARE
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

        <div className="space-y-16">
          
          {/* Horizontal Infinite Scrolling Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Top Row - Moving Right */}
            <div className="relative h-24 mb-6 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="absolute inset-0 flex items-center">
                <motion.div
                  className="flex gap-6 whitespace-nowrap"
                  animate={{
                    x: [0, -1000]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Duplicate images for seamless loop */}
                  {[...aboutImages, ...aboutImages, ...aboutImages].map((img, index) => (
                    <div
                      key={`top-${index}`}
                      className="flex-shrink-0 w-32 h-16 rounded-xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={img}
                        alt={`Company Image ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Bottom Row - Moving Left */}
            <div className="relative h-24 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="absolute inset-0 flex items-center">
                <motion.div
                  className="flex gap-6 whitespace-nowrap"
                  animate={{
                    x: [-1000, 0]
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Duplicate images for seamless loop */}
                  {[...aboutImages, ...aboutImages, ...aboutImages].map((img, index) => (
                    <div
                      key={`bottom-${index}`}
                      className="flex-shrink-0 w-32 h-16 rounded-xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={img}
                        alt={`Company Image ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Floating stats overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8">
              <motion.div
                className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">17+</div>
                  <div className="text-sm text-gray-700 font-medium">Cities</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">250+</div>
                  <div className="text-sm text-gray-700 font-medium">Ambassadors</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
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