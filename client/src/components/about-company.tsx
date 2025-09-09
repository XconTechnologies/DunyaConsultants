import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check, Shield, Award, Globe, Users, CheckCircle } from "lucide-react";
import aboutImage from "@assets/best-study-abroad-consultants-in-pakistan_1757420372210.webp";


const expandableContent = [
  {
    icon: Users,
    title: "20+ Branches & 200 Certified Counsellors",
    content: "Comprehensive support network across Pakistan with certified overseas education consultants Pakistan, providing personalized guidance to every student."
  },
  {
    icon: Globe,
    title: "250 Ambassadors & 50+ Foreign Universities",
    content: "Global partnerships with universities abroad and direct university connections for priority processing and seamless admission process."
  },
  {
    icon: Award,
    title: "Scholarship Programs",
    content: "Access to exclusive scholarship opportunities and financial aid programs to make studying abroad more affordable."
  },
  {
    icon: Shield,
    title: "Smooth Visa Approval Process",
    content: "Proven track record with streamlined visa application processing and expert study visa consultants guiding you throughout the entire admission process."
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
          <div className="relative order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="best-study-abroad-consultants-in-pakistan"
              className="w-full h-[450px] object-contain sm:h-80 sm:object-cover md:h-96 lg:h-[600px] object-center rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right Side - Content */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl min-h-64 sm:min-h-80 md:min-h-96 lg:h-[600px] flex flex-col justify-between">
              {/* About Company Badge */}
              <div className="mb-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full shadow-sm" style={{ backgroundColor: '#1D50C9' }}>
                  <span className="text-xs font-semibold text-white tracking-wide uppercase">
                    ✦ About Company
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1D50C9]">
                Who We Are
              </h2>

              {/* Content Items */}
              <div className="space-y-1.5 sm:space-y-2 flex-1">
                {expandableContent.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 p-1 rounded-xl hover:bg-blue-50/50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center shadow-lg">
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-xs leading-snug">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}