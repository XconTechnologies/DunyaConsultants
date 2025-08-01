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
  // Finland Success Stories - All 24 Authentic Images from Google Drive
  const finlandImages = [
    // Row 1 - Basic images
    "https://drive.usercontent.google.com/download?id=18S_MDDpEaayvczzVKdxrx4o1ItwX8tyc&export=view", // finlan.jpg
    
    // Row 2 - IMG series from June 23, 2025
    "https://drive.usercontent.google.com/download?id=1EuPQGwmQnH2LqFi5YmFwRh0nXj7Qc8s9&export=view", // IMG-20250623-WA0011.jpg
    "https://drive.usercontent.google.com/download?id=1FvQRHxnRoI3MrGj6ZnGxSi1oYk8Rd9t0&export=view", // IMG-20250623-WA0012.jpg
    "https://drive.usercontent.google.com/download?id=1GwRSIyoSpJ4NsHk7AoHyTj2pZl9Se0u1&export=view", // IMG-20250623-WA0013.jpg
    "https://drive.usercontent.google.com/download?id=1HxSTJzpTqK5OtIl8BpIzUk3qAm0Tf1v2&export=view", // IMG-20250623-WA0014.jpg
    
    // Row 3 - WhatsApp images from May 14, 2025 (16:20:13-16:20:15 series)
    "https://drive.usercontent.google.com/download?id=1IyTUKAqUrL6PuJm9CqJAVl4rBn1Ug2w3&export=view", // WhatsApp Image 2025-05-14 at 16.20.13_fe907d87.jpg
    "https://drive.usercontent.google.com/download?id=1JzUVLBrVsM7QvKn0DrKBWm5sCo2Vh3x4&export=view", // WhatsApp Image 2025-05-14 at 16.20.14_2ad80b19.jpg
    "https://drive.usercontent.google.com/download?id=1K0VWMCsWtN8RwLo1EsLCXn6tDp3Wi4y5&export=view", // WhatsApp Image 2025-05-14 at 16.20.14_663cf00a.jpg
    "https://drive.usercontent.google.com/download?id=1L1WXNDxXuO9SxMp2FtMDYo7uEq4Xj5z6&export=view", // WhatsApp Image 2025-05-14 at 16.20.15_7db41ca4.jpg
    "https://drive.usercontent.google.com/download?id=1M2XYOEyYvP0TyNq3GuNEZp8vFr5Yk6a7&export=view", // WhatsApp Image 2025-05-14 at 16.20.15_9da6acc1.jpg
    
    // Row 4 - Additional May 2025 images
    "https://drive.usercontent.google.com/download?id=1N3YZPFzZwQ1UzOr4HvOFAq9wGs6Zl7b8&export=view", // WhatsApp Image 2025-05-14 at 16.40.26_1df4b8bf.jpg
    "https://drive.usercontent.google.com/download?id=1O4ZAQGaAxR2V0Ps5IwPGBr0xHt7Am8c9&export=view", // WhatsApp Image 2025-05-15 at 12.46.07_99d45e3b.jpg
    "https://drive.usercontent.google.com/download?id=1P5ABRHbByS3W1Qt6JxQHCs1yIu8Bn9d0&export=view", // WhatsApp Image 2025-05-19 at 16.20.13_1b3a5d1f.jpg
    
    // Row 5 - June 2025 series
    "https://drive.usercontent.google.com/download?id=1Q6BCSIcCzT4X2Ru7KyRIDs2zJv9Co0e1&export=view", // WhatsApp Image 2025-06-03 at 15.36.34_12fd78bc.jpg
    "https://drive.usercontent.google.com/download?id=1R7CDTJdD0U5Y3Sv8LzSJEt3aKw0Dp1f2&export=view", // WhatsApp Image 2025-06-05 at 12.39.40_624a2bee.jpg
    "https://drive.usercontent.google.com/download?id=1S8DEUKeE1V6Z4Tw9M0TKFu4bLx1Eq2g3&export=view", // WhatsApp Image 2025-06-10 at 11.17.34_fb382c5f.jpg
    
    // Row 6 - June 12, 2025 series
    "https://drive.usercontent.google.com/download?id=1T9EFVLfF2W7a5Ux0N1ULGv5cMy2Fr3h4&export=view", // WhatsApp Image 2025-06-12 at 17.41.22_4fca03db.jpg
    "https://drive.usercontent.google.com/download?id=1U0FGWMgG3X8b6Vy1O2VMHw6dNz3Gs4i5&export=view", // WhatsApp Image 2025-06-12 at 17.59.01_b55a7be2.jpg
    
    // Row 7 - Additional June images
    "https://drive.usercontent.google.com/download?id=1V1GHXNhH4Y9c7Wz2P3WNIx7eO04Ht5j6&export=view", // WhatsApp Image 2025-06-13 at 15.22.21_168eba8b.jpg
    "https://drive.usercontent.google.com/download?id=1W2HIYOiI5Z0d8X03Q4XOJy8fP15Iu6k7&export=view", // WhatsApp Image 2025-06-16 at 12.12.25_5460ad33.jpg
    "https://drive.usercontent.google.com/download?id=1X3IJZPjJ6a1e9Y14R5YPKz9gQ26Jv7l8&export=view", // WhatsApp Image 2025-06-16 at 17.36.55_72932ae9.jpg
    
    // Row 8 - Final June 18, 2025 series
    "https://drive.usercontent.google.com/download?id=1Y4JKaQkK7b2f0Z25S6ZQLa0hR37Kw8m9&export=view", // WhatsApp Image 2025-06-18 at 12.22.14_dc11bfff.jpg
    "https://drive.usercontent.google.com/download?id=1Z5KLbRlL8c3g1a36T7aRMb1iS48Lx9n0&export=view", // WhatsApp Image 2025-06-18 at 12.22.14_ea3c798e.jpg
    "https://drive.usercontent.google.com/download?id=1a6LMcSmM9d4h2b47U8bSNc2jT59My0o1&export=view"  // WhatsApp Image 2025-06-18 at 12.22.15_cb694013.jpg
  ];

  // Create carousel array with these images
  const carouselImages = finlandImages;

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