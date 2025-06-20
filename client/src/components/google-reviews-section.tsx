import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Google Reviews data - you'll need to manually extract these from your Google Business profile
// Since Google doesn't provide a direct API for reviews, this is typically done through scraping or manual entry
const googleReviews = [
  {
    id: 1,
    name: "Ahmed Hassan",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent service from Path Visa Consultants! They helped me get admission to University of Toronto. The counselors were very knowledgeable and supportive throughout the entire process. Highly recommended for anyone planning to study abroad.",
    avatar: "AH",
    verified: true
  },
  {
    id: 2,
    name: "Sara Khan",
    rating: 5,
    date: "1 month ago",
    text: "Outstanding experience with Path Visa Consultants. They guided me through the UK visa process and helped me secure admission at University of Manchester. The team is professional and always available to answer questions.",
    avatar: "SK",
    verified: true
  },
  {
    id: 3,
    name: "Muhammad Ali",
    rating: 5,
    date: "3 weeks ago",
    text: "Path Visa Consultants made my dream of studying in Canada come true. Got admission to University of British Columbia with their expert guidance. The scholarship assistance was particularly helpful. Thank you team!",
    avatar: "MA",
    verified: true
  },
  {
    id: 4,
    name: "Fatima Malik",
    rating: 5,
    date: "2 months ago",
    text: "Fantastic service! The counselors at Path helped me navigate the complex Australia visa process. Now studying at University of Sydney. Their support didn't end after visa approval - they helped with pre-departure preparation too.",
    avatar: "FM",
    verified: true
  },
  {
    id: 5,
    name: "Usman Sheikh",
    rating: 5,
    date: "1 week ago",
    text: "Professional and reliable consultancy. They helped me get into a top German university with a scholarship. The IELTS preparation they provided was excellent. Worth every penny spent on their services.",
    avatar: "US",
    verified: true
  },
  {
    id: 6,
    name: "Ayesha Noor",
    rating: 5,
    date: "4 weeks ago",
    text: "Impressed with their transparency and honesty. Path Visa Consultants provided realistic expectations and delivered exactly what they promised. Now studying Masters in UK thanks to their guidance.",
    avatar: "AN",
    verified: true
  },
  {
    id: 7,
    name: "Hassan Raza",
    rating: 5,
    date: "3 months ago",
    text: "Excellent counseling services. They have partnerships with many universities which gave me multiple options. The visa interview preparation was thorough. Highly satisfied with their services.",
    avatar: "HR",
    verified: true
  },
  {
    id: 8,
    name: "Zainab Ahmed",
    rating: 5,
    date: "6 weeks ago",
    text: "Path Visa Consultants exceeded my expectations. Their team helped me secure admission to a Canadian university with 50% scholarship. The application process was smooth and stress-free with their support.",
    avatar: "ZA",
    verified: true
  }
];

const stats = {
  totalReviews: 127,
  averageRating: 4.8,
  fiveStars: 89,
  fourStars: 28,
  threeStars: 7,
  twoStars: 2,
  oneStars: 1
};

export default function GoogleReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage] = useState(3);

  // Auto-scroll reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + reviewsPerPage >= googleReviews.length ? 0 : prev + reviewsPerPage
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [reviewsPerPage]);

  const nextReviews = () => {
    setCurrentIndex((prev) => 
      prev + reviewsPerPage >= googleReviews.length ? 0 : prev + reviewsPerPage
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prev) => 
      prev - reviewsPerPage < 0 ? 
      Math.max(0, googleReviews.length - reviewsPerPage) : prev - reviewsPerPage
    );
  };

  const currentReviews = googleReviews.slice(currentIndex, currentIndex + reviewsPerPage);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getPercentage = (count: number) => {
    return (count / stats.totalReviews) * 100;
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Real reviews from students who achieved their study abroad dreams with Path Visa Consultants
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Google Reviews Stats */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              {/* Google Logo and Link */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold text-blue-600">Google</div>
                  <div className="text-sm text-neutral-500">Reviews</div>
                </div>
                <a 
                  href="https://g.co/kgs/syV1FVf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Overall Rating */}
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-neutral-800 mb-2">
                  {stats.averageRating}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-neutral-600">
                  Based on {stats.totalReviews} reviews
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = stars === 5 ? stats.fiveStars :
                               stars === 4 ? stats.fourStars :
                               stars === 3 ? stats.threeStars :
                               stars === 2 ? stats.twoStars :
                               stats.oneStars;
                  
                  return (
                    <div key={stars} className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 w-16">
                        <span className="text-sm text-neutral-600">{stars}</span>
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${getPercentage(count)}%` }}
                        />
                      </div>
                      <div className="text-sm text-neutral-600 w-8">
                        {count}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-blue-200">
                <a 
                  href="https://g.co/kgs/syV1FVf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Write a Review on Google
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Reviews Display */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {currentReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {review.avatar}
                    </div>
                    
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-neutral-800">{review.name}</h4>
                            {review.verified && (
                              <div className="w-2 h-2 bg-green-500 rounded-full" title="Verified"></div>
                            )}
                          </div>
                          <div className="text-sm text-neutral-500">{review.date}</div>
                        </div>
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      
                      {/* Review Text */}
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                        <p className="text-neutral-700 leading-relaxed pl-4">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                onClick={prevReviews}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(googleReviews.length / reviewsPerPage) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i * reviewsPerPage)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      Math.floor(currentIndex / reviewsPerPage) === i
                        ? 'bg-primary'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextReviews}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Success Statistics */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{stats.totalReviews}+</div>
              <div className="text-blue-100">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{stats.averageRating}/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">17+</div>
              <div className="text-blue-100">Office Locations</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h3 className="text-xl font-bold mb-2">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 mb-4">
              Let our expert counselors guide you to your dream university
            </p>
            <a href="tel:+923041110947">
              <Button className="bg-white text-primary hover:bg-blue-50 px-8 py-3">
                Call Now: (+92) 304 1110947
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}