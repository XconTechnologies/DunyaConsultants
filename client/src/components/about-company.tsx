import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight, Zap } from "lucide-react";

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

const whyChooseUsContent = [
  {
    title: "World-recognized education system",
    description: "Access to internationally acclaimed educational institutions and programs"
  },
  {
    title: "Internationally accepted degrees",
    description: "Qualifications recognized worldwide for global career opportunities"
  },
  {
    title: "Flexible education system",
    description: "Customizable study paths tailored to individual goals and interests"
  },
  {
    title: "Diverse Career Opportunity",
    description: "Multiple pathways leading to successful international careers"
  },
  {
    title: "Excellent support for international students",
    description: "Comprehensive assistance throughout your educational journey"
  },
  {
    title: "Research and training opportunities",
    description: "Access to cutting-edge research facilities and professional development"
  },
  {
    title: "Exclusive campus life",
    description: "Rich cultural experiences and vibrant student communities"
  },
  {
    title: "Travel opportunities to different countries",
    description: "Explore new cultures while pursuing your education abroad"
  },
  {
    title: "Earn while learning",
    description: "Work opportunities to support your studies and gain experience"
  },
  {
    title: "Comprehensive visa guidance and support",
    description: "Expert assistance with visa applications and immigration processes"
  }
];

export default function AboutCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  }, []);

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
              Why Choose To Study With Us?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dunya Consultants stands among Pakistan's premier education consultants, 
            providing comprehensive guidance for study abroad programs and international education opportunities.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Modern Image Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative h-[500px] lg:h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                
                {/* Image Display */}
                <div className="relative h-full">
                  <motion.img
                    key={currentImageIndex}
                    src={aboutImages[currentImageIndex]}
                    alt={`Company Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <h4 className="font-bold text-gray-800 mb-1">Our Journey</h4>
                      <p className="text-sm text-gray-600">Building futures through education</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImageIndex === index 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Statistics Cards */}
              <motion.div
                className="absolute -top-6 left-8 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">17+</div>
                  <div className="text-xs text-gray-600 font-medium">Cities</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-8 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">250+</div>
                  <div className="text-xs text-gray-600 font-medium">Ambassadors</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Why Choose Us Content */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            {/* Content Container with Border */}
            <div className="bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 gap-4">
                {whyChooseUsContent.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group hover:bg-green-50/50 p-3 rounded-2xl transition-all duration-300"
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
                      <h4 className="font-semibold text-gray-800 text-base mb-1 group-hover:text-gray-900 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <motion.button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
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

        </div>
      </div>
    </section>
  );
}