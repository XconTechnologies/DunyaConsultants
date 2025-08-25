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
  Quote
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SuccessStories() {
  const featuredStories = [
    {
      name: "Ayesha Khan",
      country: "United Kingdom",
      university: "University of Oxford",
      program: "Master's in Computer Science",
      year: "2024",
      image: "/api/placeholder/150/150",
      story: "With Dunya Consultants' guidance, I achieved my dream of studying at Oxford. Their expert counseling and visa support made the impossible possible.",
      scholarship: "£15,000 Merit Scholarship",
      achievement: "First Pakistani student in her program"
    },
    {
      name: "Muhammad Ali Hassan",
      country: "United States",
      university: "Stanford University",
      program: "PhD in Engineering",
      year: "2024",
      image: "/api/placeholder/150/150",
      story: "From a small town in Pakistan to Stanford University - Dunya Consultants believed in my potential and helped me secure full funding for my PhD.",
      scholarship: "Full PhD Funding + $50,000/year",
      achievement: "Research published in Nature"
    },
    {
      name: "Fatima Ahmed",
      country: "Canada",
      university: "University of Toronto",
      program: "Master's in Business Administration",
      year: "2023",
      image: "/api/placeholder/150/150",
      story: "Professional guidance from application to visa approval. Now working at a top consulting firm in Toronto with excellent career prospects.",
      scholarship: "CAD $25,000 Dean's Award",
      achievement: "Job offer before graduation"
    }
  ];

  const studentAchievements = [
    {
      category: "Top Universities",
      count: "500+",
      description: "Students placed in world-renowned institutions",
      examples: ["Harvard", "Oxford", "Cambridge", "MIT", "Stanford"]
    },
    {
      category: "Scholarships Won",
      count: "PKR 2B+",
      description: "Total scholarship amount secured for students",
      examples: ["Merit Awards", "Need-based Aid", "Research Grants", "Full Funding"]
    },
    {
      category: "Countries",
      count: "25+",
      description: "Countries where our students are studying",
      examples: ["USA", "UK", "Canada", "Australia", "Germany"]
    },
    {
      category: "Success Rate",
      count: "95%",
      description: "Visa approval rate for our students",
      examples: ["Student Visas", "Study Permits", "F-1 Visas", "Tier 4 Visas"]
    }
  ];

  const recentSuccesses = [
    {
      name: "Ahmed Raza",
      university: "Harvard University",
      program: "Master's in Public Policy",
      country: "USA",
      scholarship: "$40,000",
      date: "December 2024"
    },
    {
      name: "Sara Malik",
      university: "Cambridge University",
      program: "PhD in Mathematics",
      country: "UK",
      scholarship: "Full Funding",
      date: "November 2024"
    },
    {
      name: "Hassan Ali",
      university: "University of Melbourne",
      program: "Master's in Data Science",
      country: "Australia",
      scholarship: "AUD 30,000",
      date: "October 2024"
    },
    {
      name: "Zainab Sheikh",
      university: "McGill University",
      program: "Master's in Medicine",
      country: "Canada",
      scholarship: "CAD 35,000",
      date: "September 2024"
    },
    {
      name: "Omar Khan",
      university: "TU Munich",
      program: "Master's in Engineering",
      country: "Germany",
      scholarship: "DAAD Scholarship",
      date: "August 2024"
    },
    {
      name: "Maryam Chaudhry",
      university: "KTH Royal Institute",
      program: "Master's in Technology",
      country: "Sweden",
      scholarship: "Full Tuition Waiver",
      date: "July 2024"
    }
  ];

  const testimonials = [
    {
      quote: "Dunya Consultants didn't just help me get into university; they transformed my entire perspective on what's possible. The personalized guidance and unwavering support made all the difference.",
      author: "Dr. Kamran Sheikh",
      position: "PhD Graduate, MIT",
      country: "USA",
      rating: 5
    },
    {
      quote: "From the first consultation to landing in London, every step was professionally managed. I'm now pursuing my dream career in international law.",
      author: "Aisha Tariq",
      position: "LLM Graduate, King's College London",
      country: "UK",
      rating: 5
    },
    {
      quote: "The scholarship guidance was exceptional. I never thought I could afford to study abroad, but Dunya Consultants made it financially possible.",
      author: "Bilal Ahmad",
      position: "Master's Student, University of Toronto",
      country: "Canada",
      rating: 5
    }
  ];

  const companyMilestones = [
    {
      year: "2007",
      milestone: "Founded with a vision to democratize international education",
      impact: "Started with 5 students"
    },
    {
      year: "2010",
      milestone: "First 100 successful student placements",
      impact: "Established partnerships with 50 universities"
    },
    {
      year: "2015",
      milestone: "Opened international offices",
      impact: "Expanded to UK and Dubai offices"
    },
    {
      year: "2020",
      milestone: "Digital transformation during pandemic",
      impact: "Continued services online, helped 1000+ students"
    },
    {
      year: "2024",
      milestone: "20+ offices globally, 10,000+ success stories",
      impact: "Pakistan's most trusted education consultancy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <Trophy className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">10,000+ Success Stories</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white">
              Success Stories
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Celebrating our students' achievements and the journey that brought us here
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50">
                Share Your Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Inspiring journeys of students who achieved their dreams with our guidance
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{story.name}</CardTitle>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="bg-blue-50 text-[#1D50C9]">
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
                        <Award className="w-4 h-4 text-[#1D50C9] mr-2" />
                        <span className="font-medium">{story.scholarship}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-[#1D50C9] mr-2" />
                        <span className="text-gray-600">{story.achievement}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Statistics */}
      <section className="py-20 bg-gradient-to-r from-#1e3a8a to-#1e3a8a text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-blue-100">
                Numbers that reflect our commitment to student success
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  {achievement.count}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.category}</h3>
                <p className="text-blue-100 mb-4">{achievement.description}</p>
                <div className="space-y-1">
                  {achievement.examples.map((example, i) => (
                    <div key={i} className="text-sm text-blue-200">
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Successes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Recent{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Successes
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Latest achievements from our student community
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentSuccesses.map((success, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{success.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {success.date}
                  </Badge>
                </div>
                <p className="text-sm #1845B3 font-medium mb-1">
                  {success.university}
                </p>
                <p className="text-sm text-gray-600 mb-2">{success.program}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {success.country}
                  </div>
                  <div className="flex items-center text-sm font-medium #1845B3">
                    <Award className="w-4 h-4 mr-1" />
                    {success.scholarship}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Student{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                In their own words: What our students say about their journey
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex text-blue-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-blue-400 mb-3" />
                    <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm #1845B3 font-medium">{testimonial.country}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                17 years of dedication to student success
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1D50C9] to-[#1845B3]"></div>
            
            {companyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full flex items-center justify-center text-white font-bold">
                          {milestone.year}
                        </div>
                        <Calendar className="w-5 h-5 #1D50C9 ml-3" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {milestone.milestone}
                      </h3>
                      <p className="text-gray-600">{milestone.impact}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}