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
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

// Import Finland visa success images - Finland study visa posts only (no Umer Farooq)
import image1 from '@assets/IMG-20250623-WA0011_1754049301060.jpg';
import image2 from '@assets/IMG-20250623-WA0012_1754049278747.jpg';
import image3 from '@assets/IMG-20250623-WA0013_1754049301061.jpg';
import image4 from '@assets/IMG-20250623-WA0014_1754049278748.jpg';
import image5 from '@assets/WhatsApp Image 2025-05-14 at 16.20.14_2ad80b19_1754049278749.jpg';
import image6 from '@assets/WhatsApp Image 2025-05-14 at 16.20.14_663cf00a_1754049278749.jpg';
import image7 from '@assets/WhatsApp Image 2025-06-13 at 15.22.21_168eba8b_1754049309050.jpg';
import image8 from '@assets/WhatsApp Image 2025-06-16 at 12.12.25_5460ad33_1754049309051.jpg';
import image9 from '@assets/WhatsApp Image 2025-06-18 at 12.22.14_ea3c798e_1754049309052.jpg';
import image10 from '@assets/WhatsApp Image 2025-05-14 at 16.20.13_fe907d87_1754049278735.jpg';

export default function OurSuccessStories() {
  const finlandSuccessImages = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10
  ];

  // Carousel state for infinite scroll
  const [translateX, setTranslateX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Responsive items to show
  const getItemsToShow = () => {
    if (windowWidth < 640) return 1; // Mobile: 1 image
    if (windowWidth < 768) return 2; // Tablet: 2 images
    if (windowWidth < 1024) return 3; // Small desktop: 3 images
    return 4; // Large desktop: 4 images
  };
  
  const itemsToShow = getItemsToShow();
  const itemWidth = 100 / itemsToShow;
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auto-scroll effect for infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const nextPosition = prev - itemWidth;
        // Reset to beginning when we've scrolled through all original items
        if (Math.abs(nextPosition) >= (finlandSuccessImages.length * itemWidth)) {
          return 0;
        }
        return nextPosition;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [itemWidth, finlandSuccessImages.length]);

  const nextSlide = () => {
    setTranslateX(prev => {
      const nextPosition = prev - itemWidth;
      if (Math.abs(nextPosition) >= (finlandSuccessImages.length * itemWidth)) {
        return 0;
      }
      return nextPosition;
    });
  };

  const prevSlide = () => {
    setTranslateX(prev => {
      if (prev >= 0) {
        return -((finlandSuccessImages.length - itemsToShow) * itemWidth);
      }
      return prev + itemWidth;
    });
  };

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

      {/* Finland Visa Success Stories Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
          </div>

          {/* Infinite Loop Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-50 p-6"
            >
              {/* Carousel Track */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out gap-4"
                  style={{ 
                    transform: `translateX(${translateX}%)`,
                    width: `${(finlandSuccessImages.length * 2) * itemWidth}%` // Double the width for seamless loop
                  }}
                >
                  {/* Original images with animations */}
                  {finlandSuccessImages.map((image, index) => (
                    <motion.div
                      key={`original-${index}`}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex-shrink-0 group"
                      style={{ width: `${itemWidth}%` }}
                    >
                      <div className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-white border group-hover:shadow-2xl transition-all duration-300">
                        <img
                          src={image}
                          alt={`Finland visa success story ${index + 1}`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                        
                        {/* Success Badge */}
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          ✓ Approved
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {/* Duplicate images for seamless loop with animations */}
                  {finlandSuccessImages.map((image, index) => (
                    <motion.div
                      key={`duplicate-${index}`}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: (index + finlandSuccessImages.length) * 0.1 }}
                      className="flex-shrink-0 group"
                      style={{ width: `${itemWidth}%` }}
                    >
                      <div className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-white border group-hover:shadow-2xl transition-all duration-300">
                        <img
                          src={image}
                          alt={`Finland visa success story ${index + 1}`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                        
                        {/* Success Badge */}
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          ✓ Approved
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>


            </motion.div>


          </div>

          {/* Success Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Success Rate</h3>
              <p className="text-gray-600">95% visa approval rate for Finland applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scholarship Winners</h3>
              <p className="text-gray-600">Multiple students secured scholarships up to €6000</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Universities</h3>
              <p className="text-gray-600">Admissions to leading Finnish institutions</p>
            </div>
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