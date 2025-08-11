import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Shield, Award, Globe, Users } from "lucide-react";

// Import the company collage image
import companyCollage from "@assets/image_1754657399088.png";

const expandableContent = [
  {
    icon: Shield,
    title: "Honesty",
    content: "Clear guidance at every step. We explain options, costs, and timelines so you always know what's happening."
  },
  {
    icon: Award,
    title: "Certified Consultants", 
    content: "Friendly experts help with course selection, documents, applications, and visa from start to finish."
  },
  {
    icon: Globe,
    title: "Multiple Destinations", 
    content: "Apply to Turkey, the US, the UK, Canada, and more, with support in Pakistan and abroad."
  },
  {
    icon: Users,
    title: "Official Representatives", 
    content: "We work directly with trusted universities so your application is accurate and gets priority."
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

                {/* Single Company Collage Image */}
                <div className="relative h-full rounded-[1.5rem] p-4">
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white ring-4 ring-white group hover:shadow-3xl transition-all duration-300 h-full">
                      <img
                        src={companyCollage}
                        alt="Company collage showcasing achievements and team"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <h2 className="text-2xl font-bold mb-2 text-[#1D2D4E]">Why Choose Dunya Consultants?</h2>
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
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
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