import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Star, MessageCircle, ChevronLeft, ChevronRight, Quote, Award, GraduationCap } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample testimonials data with Pakistani students
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      course: "MS Computer Science",
      university: "University of Toronto",
      country: "Canada",
      rating: 5,
      text: "Dunya Consultants made my dream of studying in Canada come true. Their guidance throughout the visa process was exceptional, and I'm now pursuing my Master's at one of the top universities.",
      achievement: "Got 95% Scholarship",
      year: "2024"
    },
    {
      id: 2,
      name: "Fatima Khan",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c38c?w=150&h=150&fit=crop&crop=face",
      course: "MBA Finance",
      university: "London Business School",
      country: "UK",
      rating: 5,
      text: "Professional service and excellent support. The team helped me secure admission to my dream university in London. I couldn't have done it without their expertise and dedication.",
      achievement: "£10,000 Scholarship",
      year: "2023"
    },
    {
      id: 3,
      name: "Muhammad Ali",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      course: "PhD Engineering",
      university: "MIT",
      country: "USA",
      rating: 5,
      text: "Outstanding consultation services! They guided me through every step of the application process for my PhD program. Now I'm researching at MIT thanks to their support.",
      achievement: "Full Funding",
      year: "2024"
    },
    {
      id: 4,
      name: "Ayesha Malik",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      course: "MS Data Science",
      university: "University of Melbourne",
      country: "Australia",
      rating: 5,
      text: "Highly recommended! Their team provided excellent guidance for my Australian visa and university application. I'm now studying at one of Australia's top universities.",
      achievement: "Merit Scholarship",
      year: "2023"
    },
    {
      id: 5,
      name: "Hassan Raza",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      course: "MS Business Analytics",
      university: "University of Edinburgh",
      country: "UK",
      rating: 5,
      text: "Exceptional service from start to finish. The counselors were knowledgeable and supportive throughout my application journey. I'm grateful for their professional assistance.",
      achievement: "Dean's List",
      year: "2024"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentSlide + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-green-600 text-2xl font-bold italic transform -rotate-2 inline-block">
              Testimonial
            </span>
            <div className="w-16 h-1 bg-green-500 mx-auto mt-1"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Students Say</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Real success stories from Pakistani students who achieved their international education dreams with our guidance
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Stacked Paper Effect */}
                <div className="absolute -top-2 -left-2 w-full h-full bg-white rounded-2xl shadow-md opacity-30 transform rotate-1"></div>
                <div className="absolute -top-1 -left-1 w-full h-full bg-white rounded-2xl shadow-md opacity-60 transform rotate-0.5"></div>
                
                <Card className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 group-hover:scale-105">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-green-100 opacity-50 group-hover:opacity-70 transition-opacity">
                    <Quote className="w-8 h-8" />
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    {testimonial.achievement}
                  </div>

                  <CardContent className="p-6 pt-12">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Student Info */}
                    <div className="flex items-center">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-green-200"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.course}</p>
                        <p className="text-xs text-blue-600 font-medium">{testimonial.university}, {testimonial.country}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-green-50 border-2 border-green-200 text-green-600 shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-green-600 scale-125' 
                      : 'bg-green-200 hover:bg-green-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-green-50 border-2 border-green-200 text-green-600 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-green-100 mb-6">Join thousands of Pakistani students who've achieved their international education dreams</p>
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2" size={20} />
              Start Your Journey Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
