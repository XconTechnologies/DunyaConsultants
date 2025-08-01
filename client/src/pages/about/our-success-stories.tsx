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
import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function OurSuccessStories() {
  const [activeCountry, setActiveCountry] = useState('Finland');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define visa post type
  type VisaPost = {
    id: number;
    studentName: string;
    visaType: string;
    approvalDate: string;
    program: string;
    university: string;
    description: string;
    image: string;
  };

  // Finland visa approval posts - based on Google Drive content
  const finlandVisaPosts: VisaPost[] = [
    {
      id: 1,
      studentName: "Student Name 1",
      visaType: "Study Visa",
      approvalDate: "May 2025",
      program: "Master's Program",
      university: "University Name",
      description: "Successfully approved Finland study visa",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      studentName: "Student Name 2", 
      visaType: "Study Visa",
      approvalDate: "June 2025",
      program: "Bachelor's Program",
      university: "University Name",
      description: "Finland visa approval success",
      image: "/api/placeholder/400/300"
    },
    // More posts will be added based on actual data from drive
  ];

  // Country-wise visa approvals
  const countryVisaData: Record<string, VisaPost[]> = {
    'Finland': finlandVisaPosts,
    'Sweden': [], // Will be populated with actual data
    'Canada': [], // Will be populated with actual data
    'Australia': [], // Will be populated with actual data
    'UK': [], // Will be populated with actual data
    'USA': [] // Will be populated with actual data
  };

  const currentCountryPosts = countryVisaData[activeCountry] || [];
  const postsPerSlide = 3;
  const totalSlides = Math.ceil(currentCountryPosts.length / postsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlidePosts = () => {
    const startIndex = currentSlide * postsPerSlide;
    return currentCountryPosts.slice(startIndex, startIndex + postsPerSlide);
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

      {/* Visa Approval Success Stories by Country */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Visa Approval{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recent visa approvals organized by destination countries
              </p>
            </motion.div>
          </div>

          {/* Country Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(countryVisaData).map((country) => (
              <button
                key={country}
                onClick={() => {
                  setActiveCountry(country);
                  setCurrentSlide(0);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCountry === country
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {country}
                  {countryVisaData[country].length > 0 && (
                    <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
                      {countryVisaData[country].length}
                    </Badge>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Carousel for Selected Country */}
          {currentCountryPosts.length > 0 ? (
            <div className="relative">
              {/* Carousel Navigation */}
              {totalSlides > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </button>
                </>
              )}

              {/* Visa Posts Grid */}
              <div className="overflow-hidden">
                <motion.div
                  key={`${activeCountry}-${currentSlide}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
                >
                  {getCurrentSlidePosts().map((post: VisaPost, index: number) => (
                    <Card key={post.id} className="border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="text-center">
                        <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                          <CheckCircle className="w-16 h-16 text-white" />
                        </div>
                        <CardTitle className="text-lg text-gray-900">{post.studentName}</CardTitle>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          Visa Approved
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Award className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="font-medium">{post.visaType}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                            <span className="text-gray-600">{post.approvalDate}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <GraduationCap className="w-4 h-4 text-purple-500 mr-2" />
                            <span className="text-gray-600">{post.program}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-gray-600">{post.university}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-4">{post.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </div>

              {/* Slide Indicators */}
              {totalSlides > 1 && (
                <div className="flex justify-center space-x-2 mt-8">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-2xl mx-auto">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {activeCountry} Visa Success Stories Coming Soon
                </h3>
                <p className="text-gray-600">
                  We're preparing to showcase our successful {activeCountry} visa approvals. 
                  Check back soon or contact us for the latest success stories.
                </p>
              </div>
            </motion.div>
          )}
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