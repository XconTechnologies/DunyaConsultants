import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Shield, Award, Globe, Users } from "lucide-react";

// Import the company collage image
import companyCollage from "@assets/image_1755000279427.png";

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
    <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative bg-white rounded-3xl p-6 shadow-xl h-full min-h-[600px] flex items-center">
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={companyCollage}
                  alt="Company collage showcasing achievements and team"
                  className="w-full h-auto object-contain rounded-2xl shadow-lg"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl h-full min-h-[600px] flex flex-col">
              {/* About Company Badge */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full shadow-sm" style={{ backgroundColor: '#1D50C9' }}>
                  <span className="text-xs font-semibold text-white tracking-wide uppercase">
                    ✦ About Company
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1D50C9] mb-2">
                  Why Choose Dunya Consultants?
                </h2>
              </motion.div>

              {/* Content Items */}
              <div className="space-y-6 flex-1">
                {expandableContent.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                      <item.icon className="w-6 h-6" style={{ color: '#1D50C9' }} />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
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