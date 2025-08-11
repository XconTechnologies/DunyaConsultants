import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, TrendingUp, Globe } from "lucide-react";

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Award,
      title: "Award Winner",
      description: "Best Education Consultancy 2024",
      subtitle: "Excellence in Service",
      color: "from-blue-400 to-blue-500",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: TrendingUp,
      title: "Growing Fast",
      description: "500+ new students monthly",
      subtitle: "Expanding Rapidly",
      color: "from-[#4285F4] to-[#3367D6]",
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Offices across Pakistan",
      subtitle: "Nationwide Network",
      color: "from-[#4285F4] to-[#1a73e8]",
      bgColor: "from-blue-50 to-blue-100"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-neutral-700">Our Achievements</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#4285F4' }}>
            Recognized <span style={{ color: '#4285F4' }}>Excellence</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has earned us recognition and trust from students and institutions worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`text-center bg-gradient-to-br ${achievement.bgColor} rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50`}
            >
              <div className="relative">
                <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl transform hover:rotate-6 transition-transform duration-300`}>
                  <achievement.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br ${achievement.color} rounded-2xl blur-xl opacity-30`}></div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                {achievement.description}
              </p>

              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <div className={`w-2 h-2 bg-gradient-to-r ${achievement.color} rounded-full animate-pulse`}></div>
                <span className="text-sm font-semibold text-neutral-700">{achievement.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Join Our Success Story
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Be part of our growing community of successful students who have achieved their international education dreams
            </p>
            <button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}