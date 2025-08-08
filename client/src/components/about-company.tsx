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

// Select 5 images for static display
const displayImages = [img1, img2, img3, img4, img5];

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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100"></div>
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        


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
              <div className="relative h-[450px] lg:h-[500px] bg-gradient-to-br from-white/40 via-blue-50/50 to-blue-100/40 backdrop-blur-xl border border-white/50 rounded-[2rem] p-6 shadow-2xl">
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-blue-500 rounded-3xl rotate-12 shadow-xl opacity-90"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl -rotate-12 shadow-xl opacity-90"></div>
                <div className="absolute top-1/3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl rotate-45 shadow-lg opacity-80"></div>
                <div className="absolute bottom-1/3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl -rotate-45 shadow-lg opacity-80"></div>

                {/* Static Image Grid */}
                <div className="relative h-full rounded-[1.5rem] p-2">
                  <div className="grid grid-cols-2 gap-3 h-full">
                    {/* First 4 images in 2x2 grid */}
                    {displayImages.slice(0, 4).map((img, index) => (
                      <motion.div
                        key={`static-${index}`}
                        className="relative h-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white h-full group hover:shadow-xl transition-all duration-300">
                          <img
                            src={img}
                            alt={`Company image ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="eager"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Fifth image as overlay in bottom-right corner */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-20 h-20 lg:w-24 lg:h-24"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-xl bg-white ring-4 ring-white group hover:shadow-2xl transition-all duration-300">
                      <img
                        src={displayImages[4]}
                        alt="Company image 5"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
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
              {/* About Company Button */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-100 rounded-full mb-4 border border-blue-200">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-bold text-blue-800 tracking-wider uppercase">
                    About Company
                  </span>
                </div>
              </motion.div>

              {/* Why Choose Heading */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full"></div>
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
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
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