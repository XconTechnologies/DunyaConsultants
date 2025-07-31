import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";

// Import all company images for scrolling carousel
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
import img12 from "@assets/MHQ07389_1751536114477.webp";

const allImages = [
  img1, img2, img3, img4, img5, img6, 
  img7, img8, img9, img10, img11, img12
];

const whyChooseFeatures = [
  "World-recognized education guidance system",
  "Internationally accepted consultation services",
  "Flexible education planning system",
  "Diverse Career Opportunity guidance",
  "Excellent support for international students",
  "Research and training opportunities access",
  "Exclusive university partnerships",
  "Travel opportunities coordination",
  "Earn while learning programs",
  "Comprehensive visa processing support",
  "Curricular Practical Training (CPT) guidance",
  "Optional Practical Training (OPT) assistance"
];

export default function AboutCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Create scrolling image array (duplicate for seamless loop)
  const scrollingImages = useMemo(() => [
    ...allImages, ...allImages
  ], []);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
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

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Side - Scrolling Image Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative h-[600px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-2xl">
              {/* Horizontal Scrolling Images */}
              <div className="absolute inset-0 flex">
                <div className="flex gap-4 animate-scroll-horizontal">
                  {scrollingImages.map((img, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-72 h-full rounded-2xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={img}
                        alt={`Company Event ${(index % allImages.length) + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Fade overlays */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-100 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-indigo-100 to-transparent z-10"></div>
            </div>
          </motion.div>

          {/* Right Side - Why Choose Us Checkmark List */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            {/* Card Container */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              {/* Header with Icon */}
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a]">
                  Why Choose Dunya Consultants?
                </h3>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-4">
                {whyChooseFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 py-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.05) }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <motion.button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Journey Today
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
}