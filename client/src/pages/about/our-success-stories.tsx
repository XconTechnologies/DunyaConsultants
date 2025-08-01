import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Import success story images
import cyprusImage from '@assets/finlan_1754042907120.jpg';
import finlandImage1 from '@assets/IMG-20250623-WA0011_1754042924688.jpg';
import finlandImage2 from '@assets/IMG-20250623-WA0012_1754042928861.jpg';
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

// Success Stories Carousel Component
function SuccessStoriesCarousel({ stories }: { stories: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [stories.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  if (stories.length === 0) {
    return (
      <div className="text-center py-20">
        <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Success Stories Coming Soon
        </h3>
        <p className="text-gray-600">
          We're preparing amazing success stories to share with you.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {stories.map((story, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-xl p-8 shadow-lg">
                {/* Image Section */}
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src={story.image}
                      alt={`${story.studentName} success story`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/api/placeholder/400/300';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="text-center lg:text-left">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 mb-4">
                      Success Story
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {story.studentName}
                    </h3>
                    <div className="flex items-center justify-center lg:justify-start text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{story.country}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Quote className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        {story.story}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-yellow-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Scholarship</p>
                          <p className="font-semibold text-gray-900">{story.scholarship}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-green-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">IELTS Score</p>
                          <p className="font-semibold text-gray-900">{story.ieltsScore}</p>
                        </div>
                      </div>
                      {story.specialBenefit && (
                        <div className="flex items-center sm:col-span-2">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">Special Benefit</p>
                            <p className="font-semibold text-gray-900">{story.specialBenefit}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center sm:col-span-2">
                        <Users className="w-5 h-5 text-orange-500 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Contact</p>
                          <p className="font-semibold text-gray-900">{story.contact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {stories.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {stories.length > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function OurSuccessStories() {
  // Success stories with authentic images
  const successStories = [
    {
      studentName: "Shahveer Anjum",
      country: "Cyprus",
      university: "Cyprus University",
      program: "Bachelors in Computer Engineering",
      year: "2024",
      achievement: "Cyprus Study Visa Approved",
      story: "Congratulations to Shahveer Anjum on getting Cyprus Study Visa with 20% scholarship and IELTS 6. A remarkable achievement in Computer Engineering with Dunya Consultants' guidance.",
      scholarship: "20% Scholarship",
      ieltsScore: "IELTS 6",
      contact: "Umer Nadeem: 0325-611-1947",
      image: cyprusImage
    },
    {
      studentName: "Fasih Ahmed",
      country: "Finland",
      university: "Finnish University",
      program: "Sustainable International Business",
      year: "2024",
      achievement: "Finland Student Visa Approved",
      story: "Congratulations to Fasih Ahmed on getting Finland Student Visa with 2000€ scholarship, IELTS 6.5, and 5 Years Multiple Entry Visa. A successful placement in Sustainable International Business program.",
      scholarship: "2000€ Scholarship",
      ieltsScore: "IELTS 6.5",
      specialBenefit: "5 Years Multiple Entry Visa",
      contact: "Awais Ali: 0333-486-1947",
      image: finlandImage1
    },
    {
      studentName: "Fasih Ahmed",
      country: "Finland", 
      university: "Finnish University",
      program: "Sustainable International Business",
      year: "2024",
      achievement: "Finland Student Visa Approved - Office Meeting",
      story: "Another view of Fasih Ahmed's success story - celebrating the Finland Student Visa approval at our office. This moment captures the joy of achieving dreams through dedication and expert guidance.",
      scholarship: "2000€ Scholarship",
      ieltsScore: "IELTS 6.5",
      specialBenefit: "5 Years Multiple Entry Visa",
      contact: "Awais Ali: 0333-486-1947",
      image: finlandImage2
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

      {/* Success Stories Carousel */}
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

          <SuccessStoriesCarousel stories={successStories} />
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