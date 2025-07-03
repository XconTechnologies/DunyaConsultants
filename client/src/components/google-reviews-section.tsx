import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  course: string;
  cgpa: string;
  backlogs: number;
  scholarship: string;
  rating: number;
  review: string;
  profileImage?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    course: "MSc in Data Science",
    cgpa: "3.7",
    backlogs: 0,
    scholarship: "£2,500",
    rating: 5,
    review: "Dunya Consultants helped me with the admission and visa process, and I'm pleased with their support. The entire procedure was handled by them, and I was accepted to the institution I desired. Big thanks to the complete crew that has been striving to keep my dream alive.",
    profileImage: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Fatima Khan",
    course: "MSc in Business Analytics",
    cgpa: "3.9",
    backlogs: 0,
    scholarship: "CAD 3,000",
    rating: 5,
    review: "Since day one, their assistance has been very simple and straightforward. The consultants assisted me with university selection and the admissions process, and the visa consultant assisted me with the visa application process seamlessly. They are a very knowledgeable and helpful crew. I would suggest Dunya Consultants to anyone who is interested in studying abroad.",
    profileImage: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Muhammad Ali",
    course: "MSc in Computer Science",
    cgpa: "3.8",
    backlogs: 0,
    scholarship: "AUD 4,000",
    rating: 5,
    review: "Dunya Consultants is the greatest in the industry. I received assistance with the entire visa procedure at the Dunya Consultants consultancy. Since I was new at this, I had no understanding of how to accomplish any of these procedures. The consultants were gracious and polite enough to make it crystal clear on the entire process. I filed for a student visa using their help, and it was granted. Without a doubt, I would tell my friends about Dunya Consultants.",
    profileImage: "/api/placeholder/60/60"
  },
  {
    id: 4,
    name: "Ayesha Ahmed",
    course: "MSc in International Business",
    cgpa: "3.6",
    backlogs: 0,
    scholarship: "£3,500",
    rating: 5,
    review: "An excellent resource for advice about studying abroad. I learned about a wide range of programs. All along the application procedure, the team was helpful and courteous. Moreover, I was offered assistance at every step to reach my goal. The perfect choice that can help students attain their dreams.",
    profileImage: "/api/placeholder/60/60"
  },
  {
    id: 5,
    name: "Zain Malik",
    course: "MSc in Mechanical Engineering",
    cgpa: "3.5",
    backlogs: 0,
    scholarship: "CAD 2,800",
    rating: 5,
    review: "Dunya Consultants is one of the outstanding consultancies that I would recommend to anyone. Outstandingly advised! From the beginning, they were incredibly supportive and attentively and meticulously observed each stage. Everyone was polite and dedicated to offering excellent service. I am grateful to the consultants for being so helpful and always accessible for all of my queries.",
    profileImage: "/api/placeholder/60/60"
  }
];

export default function GoogleReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Reviews Logo */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://www.studyindia.com/images/google-reviews-logo.webp" 
              alt="Google Reviews"
              className="h-12 mr-4"
            />
            <div className="text-left">
              <div className="flex items-center mb-1">
                {renderStars(5)}
                <span className="ml-2 text-lg font-semibold text-gray-700">4.8</span>
              </div>
              <p className="text-sm text-gray-600">4000+ Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Main Review Display */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Review Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img 
                src={currentReview.profileImage}
                alt={currentReview.name}
                className="w-16 h-16 rounded-full mr-4 bg-gray-200"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{currentReview.name}</h3>
                <p className="text-blue-600 font-medium">{currentReview.course}</p>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Academic Details */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600">CGPA</p>
              <p className="text-lg font-bold text-gray-900">{currentReview.cgpa}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Backlogs</p>
              <p className="text-lg font-bold text-gray-900">{currentReview.backlogs}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Scholarship</p>
              <p className="text-lg font-bold text-green-600">{currentReview.scholarship}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-6">
            {renderStars(currentReview.rating)}
          </div>

          {/* Review Text */}
          <blockquote className="text-gray-700 text-lg leading-relaxed italic">
            "{currentReview.review}"
          </blockquote>
        </motion.div>

        {/* All Reviewers Thumbnails */}
        <motion.div
          className="flex justify-center items-center mt-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'scale-110' : 'scale-100 opacity-60'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={review.profileImage}
                  alt={review.name}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-xs font-semibold text-gray-900 bg-white px-2 py-1 rounded shadow">
                  {review.name.split(' ')[0]}
                </p>
                <p className="text-xs text-gray-600 bg-white px-1 rounded shadow mt-1">
                  {review.course.split(' ').slice(0, 2).join(' ')}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Reviews Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Google Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}