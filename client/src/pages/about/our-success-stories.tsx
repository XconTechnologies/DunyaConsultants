import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Globe, 
  Star, 
  Calendar,
  MapPin,
  Users,
  Award,
  TrendingUp,
  Heart,
  CheckCircle,
  Quote,
  BookOpen,
  Target,

} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

// Import Finland visa success images - using the actual files from attached_assets
import image1 from '@assets/1705387657661_1753962152110.jpeg';
import image2 from '@assets/IMG-20250623-WA0011_1754049301060.jpg';
import image3 from '@assets/IMG-20250623-WA0012_1754049278747.jpg';
import image4 from '@assets/IMG-20250623-WA0013_1754049301061.jpg';
import image5 from '@assets/IMG-20250623-WA0014_1754049278748.jpg';
import image6 from '@assets/WhatsApp Image 2025-05-14 at 16.20.14_2ad80b19_1754049278749.jpg';
import image7 from '@assets/WhatsApp Image 2025-05-14 at 16.20.14_663cf00a_1754049278749.jpg';
import image8 from '@assets/WhatsApp Image 2025-06-13 at 15.22.21_168eba8b_1754049309050.jpg';
import image9 from '@assets/WhatsApp Image 2025-06-16 at 12.12.25_5460ad33_1754049309051.jpg';
import image10 from '@assets/WhatsApp Image 2025-06-18 at 12.22.14_ea3c798e_1754049309052.jpg';
import image11 from '@assets/image_1754049820938.png';
import image12 from '@assets/WhatsApp Image 2025-05-14 at 16.20.13_fe907d87_1754049278735.jpg';

export default function OurSuccessStories() {
  const finlandSuccessImages = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12
  ];

  // Carousel state for infinite scroll
  const [translateX, setTranslateX] = useState(0);
  
  // Auto-scroll effect for infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const nextPos = prev - 0.1; // Much slower movement
        // Reset when we've moved one full set
        if (nextPos <= -33.33) { // After moving through one set (33.33% of total width)
          return 0;
        }
        return nextPos;
      });
    }, 50); // Slower update frequency

    return () => clearInterval(interval);
  }, []);

  const achievements = [
    {
      metric: "Students Placed",
      value: "10,000+",
      description: "Successful university placements worldwide"
    },
    {
      metric: "Success Rate",
      value: "95%",
      description: "Visa approval success rate"
    },
    {
      metric: "Countries",
      value: "25+",
      description: "Countries where students are studying"
    },
    {
      metric: "Universities",
      value: "400+",
      description: "Partner universities globally"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <Trophy className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Our Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Real stories of students who achieved their dreams with Dunya Consultants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Share Your Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to student success
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.metric}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Finland Visa Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Finland Visa Success</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Finland Visa{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the incredible journey of our students who secured Finland student visas with exceptional results
            </p>
          </motion.div>

          {/* Infinite Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6 mb-16">
            <div className="overflow-hidden">
              <div 
                className="flex gap-4"
                style={{ 
                  transform: `translateX(${translateX}%)`,
                  width: '300%' // Triple width for seamless looping
                }}
              >
                {/* Triple the images for seamless infinite loop */}
                {[...finlandSuccessImages, ...finlandSuccessImages, ...finlandSuccessImages].map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: '280px' }}
                  >
                    <div className="relative h-80 rounded-xl overflow-hidden shadow-lg bg-white border group">
                      <img
                        src={image}
                        alt={`Finland visa success story ${(index % finlandSuccessImages.length) + 1}`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Success Badge */}
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Success</span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg font-semibold mb-1">Finland Student Visa</h3>
                          <p className="text-sm text-gray-200">Successfully Approved</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Success Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Trophy,
                title: "High Success Rate",
                description: "95% visa approval rate for Finland applications",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Star,
                title: "Scholarship Winners", 
                description: "Multiple students secured scholarships up to €6000",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: GraduationCap,
                title: "Top Universities",
                description: "Admissions to leading Finnish institutions",
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Be Our Next Success Story
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have achieved their international education dreams with Dunya Consultants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}