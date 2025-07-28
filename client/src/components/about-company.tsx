import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const aboutImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
];

export default function AboutCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Scrolling Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
              {/* Decorative circles similar to reference */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-orange-500 rounded-full z-10"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-blue-600 rounded-full z-10"></div>
              
              {/* Scrolling Images Container */}
              <div className="flex flex-col gap-4 h-full">
                {/* First Column - Scrolling Up */}
                <motion.div
                  className="flex flex-col gap-4 w-1/2 absolute left-0"
                  animate={{
                    y: [-200, -400]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {[...aboutImages, ...aboutImages].map((img, index) => (
                    <div
                      key={`col1-${index}`}
                      className="relative rounded-xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={img}
                        alt={`Company Image ${index + 1}`}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Second Column - Scrolling Down */}
                <motion.div
                  className="flex flex-col gap-4 w-1/2 absolute right-0"
                  animate={{
                    y: [-400, -200]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 10
                  }}
                >
                  {[...aboutImages.slice(5), ...aboutImages.slice(0, 5), ...aboutImages.slice(5), ...aboutImages.slice(0, 5)].map((img, index) => (
                    <div
                      key={`col2-${index}`}
                      className="relative rounded-xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={img}
                        alt={`Company Image ${index + 1}`}
                        className="w-full h-32 object-cover"
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

            {/* Features List */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 font-bold text-lg mr-3">+</span>
                <span className="text-gray-900 font-medium">
                  17 City Branches & 200 Certified Counsellors
                </span>
              </motion.div>

              <motion.div
                className="flex items-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 font-bold text-lg mr-3">+</span>
                <span className="text-gray-900 font-medium">
                  250 Ambassadors & 50+ Foreign Universities
                </span>
              </motion.div>

              <motion.div
                className="flex items-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 font-bold text-lg mr-3">+</span>
                <span className="text-gray-900 font-medium">
                  Scholarship Programs
                </span>
              </motion.div>

              <motion.div
                className="flex items-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 font-bold text-lg mr-3">+</span>
                <span className="text-gray-900 font-medium">
                  Smooth Visa Approval Process
                </span>
              </motion.div>

              <motion.div
                className="flex items-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 font-bold text-lg mr-3">+</span>
                <span className="text-gray-900 font-medium">
                  Study Abroad Guidance
                </span>
              </motion.div>
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