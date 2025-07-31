import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";

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

const companyFeatures = [
  {
    title: "17 City Branches & 200 Certified Counsellors",
    description: "With its head office in Lahore, Dunya Consultants has branches in over 17 cities across the country and a team of more than 200 certified counsellors."
  },
  {
    title: "250 Ambassadors & 50+ Foreign Universities", 
    description: "We are proud to have around 250 ambassadors working with us internationally and have partnered with 30 top educational institutions in Pakistan and more than 20 foreign universities."
  },
  {
    title: "Scholarship Programs",
    description: "Since the student visa process can be quite challenging, that's why our Education Consultants are trained enough to provide personalized support to every student so that they can have a smooth and hassle-free experience."
  },
  {
    title: "Smooth Visa Approval Process", 
    description: "As a growing study abroad consultants' firm, we help students in visa interview preparations and guide them throughout the student visa application process."
  },
  {
    title: "Study Abroad Guidance",
    description: "So, what are you waiting for? Get your consultancy booked with the best visa consultant in Lahore – Dunya Consultants today and get answers to your education queries!"
  }
];

export default function AboutCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6 border border-blue-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-bold text-blue-800 tracking-wider uppercase">
              About Company
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Who We Are
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dunya Consultants is one of the best education consultants in Pakistan. 
            We stand among the top study abroad consultants and provide detailed 
            guidance on study abroad programs to students.
          </motion.p>
        </div>

        {/* Content Section - Top */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          {/* Content Container with Border - Full Width */}
          <div className="bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 lg:p-12 shadow-xl w-full">
            
            {/* Statistics Cards at Top */}
            <div className="flex justify-center gap-8 lg:gap-12 xl:gap-16 mb-12">
              <motion.div
                className="bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600">17+</div>
                  <div className="text-sm text-gray-600 font-medium">Cities</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-indigo-600">250+</div>
                  <div className="text-sm text-gray-600 font-medium">Ambassadors</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-600">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Expert Staff</div>
                </div>
              </motion.div>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              {companyFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group hover:bg-green-50/50 p-6 rounded-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {/* Check Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-base mb-2 group-hover:text-gray-900 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Additional Call-to-Action Card to fill space */}
              <motion.div
                className="xl:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 p-6 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Ready to Start Your Journey?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Join thousands of successful students who have achieved their dreams with our expert guidance and personalized support.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                    Get Free Consultation
                  </button>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Journey Today
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Infinite Carousel Section - Bottom */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
        >
          {/* Section Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Journey in Pictures
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Witness our commitment to excellence through moments that define our educational consultancy journey
            </p>
          </div>

          {/* Infinite Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling Images Container */}
            <div className="flex animate-scroll-rtl">
              {/* First set of images */}
              {aboutImages.map((img, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-80 h-60 mx-3 relative group"
                >
                  <img
                    src={img}
                    alt={`Company Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <h4 className="font-semibold text-gray-800 text-sm">Our Journey</h4>
                      <p className="text-xs text-gray-600">Building futures together</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {aboutImages.map((img, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-80 h-60 mx-3 relative group"
                >
                  <img
                    src={img}
                    alt={`Company Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <h4 className="font-semibold text-gray-800 text-sm">Our Journey</h4>
                      <p className="text-xs text-gray-600">Building futures together</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}