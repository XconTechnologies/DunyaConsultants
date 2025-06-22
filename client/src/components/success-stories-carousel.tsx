import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MapPin, GraduationCap, Calendar, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SuccessStoriesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Ahmad Hassan",
      program: "Computer Science",
      university: "University of Toronto",
      country: "Canada",
      year: "2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: "Path Visa made my dream of studying in Canada a reality. Their guidance through the entire process was exceptional, from university selection to visa approval.",
      achievement: "Full Scholarship Recipient",
      flag: "🇨🇦"
    },
    {
      id: 2,
      name: "Fatima Khan",
      program: "Business Administration",
      university: "University of Melbourne",
      country: "Australia",
      year: "2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1b5?w=150&h=150&fit=crop&crop=face",
      story: "The team at Path Visa was incredibly supportive. They helped me secure admission to my dream university and guided me through every step of the visa process.",
      achievement: "Merit Scholarship Winner",
      flag: "🇦🇺"
    },
    {
      id: 3,
      name: "Muhammad Ali",
      program: "Engineering",
      university: "Imperial College London",
      country: "United Kingdom",
      year: "2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      story: "Exceptional service! Path Visa's counselors are truly experts. They helped me navigate the complex UK visa process with ease and confidence.",
      achievement: "Dean's List Student",
      flag: "🇬🇧"
    },
    {
      id: 4,
      name: "Ayesha Ahmed",
      program: "Medicine",
      university: "Harvard Medical School",
      country: "United States",
      year: "2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: "Getting into Harvard seemed impossible until I met Path Visa. Their strategic approach and expert guidance made the impossible possible.",
      achievement: "Research Fellowship Recipient",
      flag: "🇺🇸"
    },
    {
      id: 5,
      name: "Hassan Mahmood",
      program: "Data Science",
      university: "Technical University of Munich",
      country: "Germany",
      year: "2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      story: "Path Visa's detailed guidance and support made studying in Germany a smooth experience. Highly recommend their services to all students.",
      achievement: "DAAD Scholarship Holder",
      flag: "🇩🇪"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-neutral-700">Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Students <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Love</span> Our Service
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real students who achieved their dreams with Path Visa Consultants
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="mx-4 shadow-xl border-0 bg-white">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Story Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="mb-6">
                            <Quote className="w-12 h-12 text-primary/20 mb-4" />
                            <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed mb-6 italic">
                              "{story.story}"
                            </p>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center mb-4">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>

                          {/* Student Info */}
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img
                                  src={story.image}
                                  alt={story.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-neutral-800">{story.name}</h3>
                                <p className="text-sm text-neutral-600">{story.achievement}</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                                <GraduationCap className="w-4 h-4 text-primary" />
                                <span>{story.program}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                                <MapPin className="w-4 h-4 text-secondary" />
                                <span>{story.university}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                                <span className="text-lg">{story.flag}</span>
                                <span>{story.country}</span>
                                <Calendar className="w-4 h-4 ml-2 text-accent" />
                                <span>{story.year}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Visual Side */}
                        <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                          </div>

                          <div className="text-center text-white relative z-10">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                              <img
                                src={story.image}
                                alt={story.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div className="space-y-4">
                              <div className="text-6xl mb-4">{story.flag}</div>
                              <h3 className="text-2xl font-bold">{story.name}</h3>
                              <p className="text-blue-100">{story.program}</p>
                              <p className="text-sm text-blue-200">{story.university}</p>
                              
                              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mt-4">
                                <Award className="w-4 h-4" />
                                <span className="text-sm font-medium">{story.achievement}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-white/50 hover:bg-white shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-white/50 hover:bg-white shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary scale-125'
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Award } from "lucide-react";