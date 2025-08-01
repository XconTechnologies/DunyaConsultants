import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
  Target
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import all Finland visa success images
import finlandSuccess1 from '@assets/WhatsApp Image 2025-05-14 at 16.20.13_fe907d87_1754048683577.jpg';
import finlandSuccess2 from '@assets/WhatsApp Image 2025-05-14 at 16.20.15_7db41ca4_1754048683577.jpg';
import finlandSuccess3 from '@assets/WhatsApp Image 2025-05-14 at 16.20.15_9da6acc1_1754048683578.jpg';
import finlandSuccess4 from '@assets/WhatsApp Image 2025-05-14 at 16.40.26_1df4b8bf_1754048683579.jpg';
import finlandSuccess5 from '@assets/WhatsApp Image 2025-05-15 at 12.46.07_99d45e3b_1754048683580.jpg';
import finlandSuccess6 from '@assets/WhatsApp Image 2025-06-10 at 11.17.34_fb382c5f_1754048683581.jpg';
import finlandSuccess7 from '@assets/WhatsApp Image 2025-06-12 at 17.41.22_4fca03db_1754048683582.jpg';
import finlandSuccess8 from '@assets/WhatsApp Image 2025-06-12 at 17.59.01_b55a7be2_1754048683583.jpg';
import finlandSuccess9 from '@assets/WhatsApp Image 2025-06-16 at 17.36.55_72932ae9_1754048683584.jpg';
import finlandSuccess10 from '@assets/WhatsApp Image 2025-06-18 at 12.22.14_dc11bfff_1754048683585.jpg';
import finlandSuccess11 from '@assets/WhatsApp Image 2025-06-18 at 12.22.15_cb694013_1754048683585.jpg';
import finlandSuccess12 from '@assets/IMG-20250623-WA0012_1754048683586.jpg';

export default function OurSuccessStories() {
  // Finland visa success images for infinite carousel
  const finlandImages = [
    finlandSuccess1,
    finlandSuccess2,
    finlandSuccess3,
    finlandSuccess4,
    finlandSuccess5,
    finlandSuccess6,
    finlandSuccess7,
    finlandSuccess8,
    finlandSuccess9,
    finlandSuccess10,
    finlandSuccess11,
    finlandSuccess12
  ];

  // State for infinite carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect for infinite carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === finlandImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [finlandImages.length]);

  // Placeholder data - user will provide actual content
  const successStories = [
    {
      studentName: "Sample Student Name",
      country: "Country",
      university: "University Name",
      program: "Program Name",
      year: "2024",
      achievement: "Achievement Details",
      story: "Student success story details will be added here based on user-provided data.",
      scholarship: "Scholarship Amount",
      image: "/api/placeholder/150/150"
    }
  ];

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
              🇫🇮 Finland Dreams Come True!
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Witness the incredible journey of Pakistani students conquering Finland with our expert guidance
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

      {/* Finland Visa Success Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🎉 Finland Visa{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Success Gallery
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real visa approvals, real students, real dreams achieved - Your Finland journey starts here!
              </p>
            </motion.div>
          </div>

          {/* Infinite Loop Carousel */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            {finlandImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.1
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={image}
                  alt={`Finland Visa Success ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {finlandImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white shadow-lg scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Success Counter Overlay */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {currentIndex + 1}/{finlandImages.length}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Success Stories
                </div>
              </div>
            </div>

            {/* Catchy Success Message */}
            <div className="absolute bottom-16 left-6 right-6 text-center z-20">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-lg p-4"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  🎯 Another Finland Dream Achieved!
                </h3>
                <p className="text-blue-100 text-sm md:text-base">
                  Join hundreds of Pakistani students who trusted Dunya Consultants for their Finland visa success
                </p>
              </motion.div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Finland Visas Approved</h3>
              <p className="text-gray-600">Successful student visa approvals in 2024-2025</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">Finland visa approval success rate</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partner Universities</h3>
              <p className="text-gray-600">Top Finnish institutions we work with</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Global{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to student success worldwide
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

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Student{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Inspiring journeys of students who made their dreams come true
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{story.studentName}</CardTitle>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        {story.university}
                      </Badge>
                      <p className="text-sm text-gray-600">{story.program}</p>
                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {story.country}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Quote className="w-6 h-6 text-blue-400 mb-2" />
                    <p className="text-gray-600 italic">{story.story}</p>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center text-sm">
                        <Award className="w-4 h-4 text-yellow-500 mr-2" />
                        <span className="font-medium">{story.scholarship}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-gray-600">{story.achievement}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Placeholder message for user to add content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready for Your Success Stories
              </h3>
              <p className="text-gray-600">
                This page is ready to showcase your authentic student success stories. 
                Please provide the real success story data to populate this section.
              </p>
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