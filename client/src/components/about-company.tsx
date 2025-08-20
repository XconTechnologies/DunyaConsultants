import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Shield, Award, Globe, Users, CheckCircle } from "lucide-react";

// Import the company collage image
import companyCollage from "@assets/Frame 1000007739_1755692774444.png";

const expandableContent = [
  {
    icon: Users,
    title: "17 City Branches & 200 Certified Counsellors",
    content: "Comprehensive support network across Pakistan with expert counsellors providing personalized guidance to every student."
  },
  {
    icon: Globe,
    title: "250 Ambassadors & 50+ Foreign Universities",
    content: "Global partnerships with international representatives and direct university connections for priority processing."
  },
  {
    icon: Award,
    title: "Scholarship Programs",
    content: "Access to exclusive scholarship opportunities and financial aid programs to make studying abroad more affordable."
  },
  {
    icon: Shield,
    title: "Smooth Visa Approval Process",
    content: "Proven track record with streamlined visa processing and expert guidance throughout the entire application journey."
  },
  {
    icon: CheckCircle,
    title: "Study Abroad Guidance",
    content: "End-to-end support from university selection to departure preparation, ensuring your success every step of the way."
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={companyCollage}
              alt="Company collage showcasing achievements and team"
              className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
              loading="eager"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl h-full min-h-[400px] lg:min-h-[600px] flex flex-col">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1D50C9] mb-4">
                  WHO WE ARE
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Dunya Consultants is one of the best education consultants in Pakistan. 
                  We stand among the top study abroad consultants and provide detailed 
                  guidance on study abroad programs to students.
                </p>
              </motion.div>

              {/* Content Items */}
              <div className="space-y-6 flex-1">
                {expandableContent.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center shadow-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
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