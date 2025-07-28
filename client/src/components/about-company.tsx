import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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

// Unified Who We Are Section
export default function AboutCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Create multiple sets of images for truly infinite scrolling
  const createImageSet = (startIndex: number, count: number) => {
    const set = [];
    for (let i = 0; i < count; i++) {
      set.push(aboutImages[(startIndex + i) % aboutImages.length]);
    }
    return set;
  };

  const leftColumnImages = [
    ...createImageSet(0, 12), 
    ...createImageSet(0, 12)
  ];
  
  const rightColumnImages = [
    ...createImageSet(6, 12), 
    ...createImageSet(6, 12)
  ];

  return (
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Enhanced Scrolling Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-3xl bg-white/20 backdrop-blur-sm border border-blue-200/30 shadow-2xl">
              
              {/* Decorative elements with blue theme */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-12 shadow-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl -rotate-12 shadow-lg"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl rotate-45 shadow-lg"></div>

              {/* Left Column - Scrolling Up */}
              <div className="absolute left-4 top-4 w-[calc(50%-12px)] h-[calc(100%-32px)] overflow-hidden rounded-2xl">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={{
                    y: [0, -1500]
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {leftColumnImages.map((img, index) => (
                    <div
                      key={`left-${index}`}
                      className="relative rounded-xl overflow-hidden shadow-xl group flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Company Image ${index + 1}`}
                        className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Scrolling Down */}
              <div className="absolute right-4 top-4 w-[calc(50%-12px)] h-[calc(100%-32px)] overflow-hidden rounded-2xl">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={{
                    y: [-1500, 0]
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {rightColumnImages.map((img, index) => (
                    <div
                      key={`right-${index}`}
                      className="relative rounded-xl overflow-hidden shadow-xl group flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Company Image ${index + 1}`}
                        className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Accordion Content */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Expandable Features List */}
            <div className="space-y-4">
              {expandableContent.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full flex items-center justify-between p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">+</span>
                        </div>
                        <span className="text-gray-900 font-semibold text-left text-lg">
                          {item.title}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedItems.includes(index) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300"
                      >
                        <ChevronDown className="w-5 h-5 text-blue-600" />
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
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-blue-100">
                        <div className="pt-2 border-t border-blue-200">
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
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Read More</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"
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

// Export combined component
export default function AboutCompany() {
  return (
    <>
      <CenteredAboutHeader />
      <AboutCompanyContent />
    </>
  );
}