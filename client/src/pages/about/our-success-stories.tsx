import { motion } from 'framer-motion';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';

export default function OurSuccessStories() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Auto-scroll every 4 seconds

    return () => {
      clearInterval(autoScroll);
    };
  }, [emblaApi]);
  // Finland Success Stories - Authentic Image (Working) + Note for Additional Images
  const finlandImages = [
    // This is the confirmed working authentic image
    "https://drive.usercontent.google.com/download?id=18S_MDDpEaayvczzVKdxrx4o1ItwX8tyc&export=view", // finlan.jpg - AUTHENTIC
  ];

  // Note: To add the remaining 23 authentic images from your Drive folder, we need the individual file IDs
  // For demonstration, I'll show the working image multiple times
  const carouselImages = [
    finlandImages[0], // Authentic image
    // Placeholder entries showing where additional authentic images will go
    ...Array(23).fill("https://via.placeholder.com/400x500/3b82f6/ffffff?text=Finland+Success+Story+Coming+Soon")
  ];

  const successStories = [
    {
      studentName: "Our Finland Success Stories",
      country: "Finland",
      university: "Various Universities",
      program: "Multiple Programs",
      year: "2024-2025",
      achievement: "Successful Finland Study Journey",
      story: "Our students have successfully secured admissions and visas for Finland, pursuing their dreams in one of Europe's top education destinations known for innovation and quality of life.",
      scholarship: "Multiple Scholarships Awarded",
      images: carouselImages
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

      {/* Finland Success Stories Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Finland{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our students celebrating their successful journey to Finland
              </p>
            </motion.div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {carouselImages.map((image, index) => (
                  <div key={index} className="flex-[0_0_300px] min-w-0 mr-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="relative group"
                    >
                      <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                        <img
                          src={image}
                          alt={`Finland Success Story ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to a simple colored placeholder
                            e.currentTarget.src = `https://via.placeholder.com/300x375/3b82f6/ffffff?text=Finland+Success+Story+${index + 1}`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="font-semibold text-sm">Finland Success Story</h3>
                            <p className="text-xs opacity-90">Achieving dreams in the land of innovation</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:text-blue-700 transition-all duration-300 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:text-blue-700 transition-all duration-300 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Finland Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Why Choose Finland for Your Studies?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>World-class education system ranked globally</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>No tuition fees for EU/EEA students</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>High quality of life and safety</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>Innovation hub with tech opportunities</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>English-taught programs available</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
                      <Globe className="w-16 h-16 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Finland</h4>
                    <p className="text-gray-600">The Nordic Education Excellence</p>
                    <div className="mt-4 space-y-1 text-sm text-gray-500">
                      <p>🏛️ Top Universities: University of Helsinki, Aalto University</p>
                      <p>📚 Popular Programs: Technology, Business, Arts</p>
                      <p>🌟 Student Satisfaction: 95%+</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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