import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

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

// Split images for dual scrolling sections
const leftImages = [img1, img3, img5];
const rightImages = [img2, img4, img6];

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
    title: "Smooth Visa Approval Process", 
    content: "As a growing study abroad consultants' firm, we help students in visa interview preparations and guide them throughout the student visa application process."
  }
];

export default function AboutCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side - Modern Scrollable Image Gallery */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Container with Modern Design */}
              <div className="relative h-[450px] lg:h-[500px] bg-gradient-to-br from-white/40 via-blue-50/50 to-indigo-100/40 backdrop-blur-xl border border-white/50 rounded-[2rem] p-6 shadow-2xl">
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl rotate-12 shadow-xl opacity-90"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl -rotate-12 shadow-xl opacity-90"></div>
                <div className="absolute top-1/3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl rotate-45 shadow-lg opacity-80"></div>
                <div className="absolute bottom-1/3 -left-3 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl -rotate-45 shadow-lg opacity-80"></div>

                {/* Dual Scrolling Image Gallery */}
                <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    
                    {/* Left Column - Scrolling Up to Down */}
                    <div className="h-full overflow-hidden">
                      <div className="flex flex-col space-y-4 animate-scroll-up">
                        {[...leftImages, ...leftImages, ...leftImages].map((img, index) => (
                          <div
                            key={`left-${index}`}
                            className="relative flex-shrink-0"
                          >
                            <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                              <div className="relative h-32 lg:h-40">
                                <img
                                  src={img}
                                  alt={`Company image ${(index % 3) + 1}`}
                                  className="w-full h-full object-cover"
                                  loading="eager"
                                  onLoad={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                  }}
                                  style={{ opacity: '0', transition: 'opacity 0.3s ease' }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Scrolling Down to Up */}
                    <div className="h-full overflow-hidden">
                      <div className="flex flex-col space-y-4 animate-scroll-down">
                        {[...rightImages, ...rightImages, ...rightImages].map((img, index) => (
                          <div
                            key={`right-${index}`}
                            className="relative flex-shrink-0"
                          >
                            <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                              <div className="relative h-32 lg:h-40">
                                <img
                                  src={img}
                                  alt={`Company image ${(index % 3) + 1}`}
                                  className="w-full h-full object-cover"
                                  loading="eager"
                                  onLoad={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                  }}
                                  style={{ opacity: '0', transition: 'opacity 0.3s ease' }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient Fade Effects */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-50/80 to-transparent pointer-events-none z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-50/80 to-transparent pointer-events-none z-10"></div>
                </div>
              </div>




            </div>
          </motion.div>

          {/* Right Side - Single Unified Content Box */}
          <motion.div
            className="h-[450px] lg:h-[500px]"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            {/* Single Unified Content Container */}
            <div className="h-full bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl shadow-xl p-6 flex flex-col justify-center">
              {/* Why Choose Heading */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </motion.div>

              <div className="space-y-5">
                {expandableContent.map((item, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 flex-1 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed ml-7">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}