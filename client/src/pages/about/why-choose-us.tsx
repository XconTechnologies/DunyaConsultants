import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Globe, 
  Award, 
  Clock, 
  GraduationCap,
  FileCheck,
  HeartHandshake,
  TrendingUp,
  MapPin,
  Star,
  CheckCircle
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Award,
      title: "17+ Years of Excellence",
      description: "Trusted by thousands of students worldwide with proven track record of success",
      stats: "95% Success Rate"
    },
    {
      icon: Globe,
      title: "400+ University Partners",
      description: "Direct partnerships with top universities across USA, UK, Canada, Australia & Europe",
      stats: "400+ Universities"
    },
    {
      icon: MapPin,
      title: "17+ Office Locations",
      description: "Physical presence across Pakistan and international offices for better support",
      stats: "17+ Offices"
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Certified education consultants with extensive international education experience",
      stats: "50+ Experts"
    },
    {
      icon: FileCheck,
      title: "End-to-End Services",
      description: "Complete support from course selection to visa processing and pre-departure",
      stats: "100% Support"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick application processing with dedicated team for each student",
      stats: "2-3 Weeks"
    }
  ];

  const achievements = [
    {
      number: "10,000+",
      label: "Students Placed",
      description: "Successfully placed students in top universities worldwide"
    },
    {
      number: "95%",
      label: "Visa Success Rate",
      description: "One of the highest visa approval rates in Pakistan"
    },
    {
      number: "400+",
      label: "University Partners",
      description: "Direct partnerships with prestigious institutions globally"
    },
    {
      number: "17+",
      label: "Office Locations",
      description: "Physical presence across Pakistan and internationally"
    }
  ];

  const testimonialHighlights = [
    {
      quote: "Dunya Consultants made my dream of studying in the UK a reality. Their professional guidance was exceptional.",
      author: "Sarah Ahmed",
      university: "University of Manchester",
      country: "UK"
    },
    {
      quote: "From application to visa, everything was handled professionally. Highly recommend Dunya Consultants.",
      author: "Muhammad Ali",
      university: "University of Toronto",
      country: "Canada"
    },
    {
      quote: "The team's expertise in US admissions helped me get into my dream university with scholarship.",
      author: "Fatima Khan",
      university: "Stanford University",
      country: "USA"
    }
  ];

  const services = [
    {
      title: "University Selection",
      description: "Personalized university recommendations based on your profile and goals"
    },
    {
      title: "Application Support",
      description: "Complete assistance with application forms, essays, and documentation"
    },
    {
      title: "Scholarship Guidance",
      description: "Help you find and apply for scholarships and financial aid opportunities"
    },
    {
      title: "Visa Processing",
      description: "Expert visa application support with high success rates"
    },
    {
      title: "Test Preparation",
      description: "IELTS, TOEFL, PTE, and other test preparation courses"
    },
    {
      title: "Pre-Departure Orientation",
      description: "Complete preparation for your journey including accommodation and travel"
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
              <Star className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">About Company</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Why Choose Us
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Advantages Section */}
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
                  Advantages
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What makes Dunya Consultants the preferred choice for international education
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <advantage.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {advantage.stats}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-2">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl text-blue-100">
                Numbers that speak for our excellence and commitment
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
                <div className="text-5xl font-bold text-yellow-400 mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.label}</h3>
                <p className="text-blue-100">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Complete{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end support for your international education journey
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Hear what our successful students have to say
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.university}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.country}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful students who chose Dunya Consultants for their international education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}