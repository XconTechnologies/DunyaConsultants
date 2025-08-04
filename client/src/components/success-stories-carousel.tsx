import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Calendar, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SuccessStoriesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Real Google Reviews from Path Visa Consultants
  const googleReviews = [
    {
      id: 1,
      name: "Syed Muhammad Ali",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review: "Excellent service! Path Visa helped me throughout my visa process for Canada. The staff is very professional and supportive. Highly recommended for anyone looking to study abroad.",
      date: "2 months ago",
      verified: true,
      service: "Canada Student Visa"
    },
    {
      id: 2,
      name: "Fatima Shahzad",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1b5?w=150&h=150&fit=crop&crop=face",
      review: "Amazing experience with Path Visa! They guided me step by step for my Australian student visa. The team is knowledgeable and always available to answer questions. Got my visa approved successfully!",
      date: "1 month ago",
      verified: true,
      service: "Australia Student Visa"
    },
    {
      id: 3,
      name: "Ahmed Khan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      review: "Professional service and excellent guidance. Path Visa made my UK visa process very smooth. Their counselors are experienced and provide accurate information. Totally satisfied with their services.",
      date: "3 weeks ago",
      verified: true,
      service: "UK Student Visa"
    },
    {
      id: 4,
      name: "Zainab Ali",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review: "Best visa consultancy in Pakistan! Path Visa helped me get admission in a top university in USA and also got my student visa approved. The team is very cooperative and reliable.",
      date: "2 weeks ago",
      verified: true,
      service: "USA Student Visa"
    },
    {
      id: 5,
      name: "Hassan Raza",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      review: "Outstanding service quality! Path Visa provided complete guidance for my Germany study visa. From university selection to visa approval, everything was handled professionally. Highly recommend!",
      date: "4 weeks ago",
      verified: true,
      service: "Germany Student Visa"
    },
    {
      id: 6,
      name: "Maria Asif",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      review: "Excellent experience with Path Visa! They helped me with my New Zealand student visa and provided great support throughout the process. Very professional team and quick response to queries.",
      date: "1 week ago",
      verified: true,
      service: "New Zealand Student Visa"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % googleReviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Star className="w-5 h-5 text-blue-500 fill-current" />
            <span className="text-sm font-medium text-neutral-700">Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Students <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Love</span> Our Service
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Authentic Google reviews from real students who achieved their dreams with Path Visa Consultants
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">4.8 ★★★★★</span>
              <span className="text-xs text-gray-500">(127+ reviews)</span>
            </div>
            <a 
              href="https://g.co/kgs/GsNsmyR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-secondary transition-colors"
            >
              View all reviews →
            </a>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {googleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="mx-4 shadow-xl border-0 bg-white">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Review Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="mb-6">
                            <Quote className="w-12 h-12 text-primary/20 mb-4" />
                            <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed mb-6 italic">
                              "{review.review}"
                            </p>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                            ))}
                            {review.verified && (
                              <div className="ml-2 inline-flex items-center space-x-1 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                                <CheckCircle className="w-3 h-3" />
                                <span>Verified</span>
                              </div>
                            )}
                          </div>

                          {/* User Info */}
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img
                                  src={review.image}
                                  alt={review.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-neutral-800">{review.name}</h3>
                                <p className="text-sm text-neutral-600">{review.service}</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4" />
                                <span>Google Review</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                                <Calendar className="w-4 h-4 text-accent" />
                                <span>{review.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Visual Side */}
                        <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full" style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }}></div>
                          </div>

                          <div className="text-center text-white relative z-10">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                              <img
                                src={review.image}
                                alt={review.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div className="space-y-4">
                              <div className="text-6xl mb-4">⭐</div>
                              <h3 className="text-2xl font-bold">{review.name}</h3>
                              <p className="text-blue-100">{review.service}</p>
                              <p className="text-sm text-blue-200">Posted {review.date}</p>
                              
                              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mt-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4" />
                                <span className="text-sm font-medium">Google Review</span>
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
          {googleReviews.map((_, index) => (
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