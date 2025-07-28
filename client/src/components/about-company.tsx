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
    ...createImageSet(0, 8), 
    ...createImageSet(0, 8), 
    ...createImageSet(0, 8)
  ];
  
  const rightColumnImages = [
    ...createImageSet(6, 8), 
    ...createImageSet(6, 8), 
    ...createImageSet(6, 8)
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Infinite Scrolling Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl bg-gray-100">
              
              {/* Left Column - Scrolling Up */}
              <div className="absolute left-2 top-0 w-[calc(50%-8px)] h-full overflow-hidden">
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{
                    y: [0, -50 * leftColumnImages.length / 3]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {leftColumnImages.map((img, index) => (
                    <div
                      key={`left-${index}`}
                      className="relative rounded-lg overflow-hidden shadow-md flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Company Image ${index + 1}`}
                        className="w-full h-[120px] object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Scrolling Down */}
              <div className="absolute right-2 top-0 w-[calc(50%-8px)] h-full overflow-hidden">
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{
                    y: [-50 * rightColumnImages.length / 3, 0]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {rightColumnImages.map((img, index) => (
                    <div
                      key={`right-${index}`}
                      className="relative rounded-lg overflow-hidden shadow-md flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Company Image ${index + 1}`}
                        className="w-full h-[120px] object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
                ABOUT COMPANY
              </h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                WHO WE ARE
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dunya Consultants is one of the best education consultants in Pakistan. 
                We stand among the top study abroad consultants and provide detailed 
                guidance on study abroad programs to students.
              </p>
            </div>

            {/* Expandable Features List */}
            <div className="space-y-3">
              {expandableContent.map((item, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200 border-l-4 border-blue-600"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-bold text-lg mr-3">+</span>
                      <span className="text-gray-900 font-medium text-left">
                        {item.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedItems.includes(index) ? "auto" : 0,
                      opacity: expandedItems.includes(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-gray-600 leading-relaxed">
                      {item.content}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Read More Button */}
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
                Read More
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}