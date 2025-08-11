import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  phone?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed",
    text: "Hi Aunty, I am your youngest client or student to start diet with you because I was pre diabetic & obese because I was very pampered. It was so impossible in the starting. Papa was writing this from my side but I thought I should do it. I'm big enough. Lost 15kg in 3 months and now I look smarter and become popular in friends. My relatives outside Delhi don't even recognise me now. Your speciality is the school tiffin food. I'm happy to be healthy and fit. Thank you so much",
    rating: 5,
    phone: "8800704223"
  },
  {
    id: 2,
    name: "Fatima",
    text: "Dunya Consultants helped me throughout my visa application process. Their team was very professional and guided me step by step. The documentation support was excellent and I got my student visa approved within 4 weeks. I highly recommend their services to anyone planning to study abroad. The counselors are very knowledgeable about different countries and universities.",
    rating: 5,
    phone: "0300 1234567"
  },
  {
    id: 3,
    name: "Hassan",
    text: "I was confused about which country and university to choose for my Masters degree. Dunya Consultants provided excellent guidance and helped me select the perfect program in Canada. Their scholarship assistance was amazing and I got 50% tuition fee waiver. The pre-departure briefing was very helpful. Thank you for making my dream come true.",
    rating: 5,
    phone: "0321 9876543"
  },
  {
    id: 4,
    name: "Ayesha",
    text: "The team at Dunya Consultants is outstanding. From initial consultation to visa approval, everything was handled professionally. They helped me with IELTS preparation, university applications, and visa documentation. I'm now studying in UK and couldn't be happier. Their post-arrival support is also excellent. Highly recommended!",
    rating: 5,
    phone: "0333 5647382"
  },
  {
    id: 5,
    name: "Muhammad",
    text: "Excellent service from Dunya Consultants. They guided me through the entire process of studying in Australia. The team is very responsive and always available to answer questions. They helped me get admission in my preferred university with scholarship. The visa process was smooth and hassle-free. Thank you for your professional services.",
    rating: 5,
    phone: "0345 7890123"
  }
];

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-6 h-6 ${index < rating ? '#1845B3 fill-green-600' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 #1D50C9 rounded-full translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 #1D50C9 rounded-full -translate-x-48 translate-y-48" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Stylized Testimonial Heading */}
          <motion.h2 
            className="text-6xl lg:text-7xl font-bold mb-8 relative"
            style={{
              fontFamily: 'Brush Script MT, cursive',
              color: '#4a5d23',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
            whileHover={{ scale: 1.02 }}
          >
            Testimonial
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 #1845B3 rounded-full opacity-70" />
          </motion.h2>
        </motion.div>

        {/* Main Testimonial Card Stack */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Background Cards for Stack Effect */}
          <div className="absolute top-2 left-2 w-full h-full bg-white rounded-2xl shadow-lg transform rotate-1 opacity-30" />
          <div className="absolute top-4 left-4 w-full h-full bg-white rounded-2xl shadow-lg transform -rotate-1 opacity-50" />
          
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            {/* Red Paperclip */}
            <div className="absolute -top-3 left-8">
              <div className="w-8 h-16 #1D50C9 rounded-full transform rotate-12 shadow-md" 
                   style={{
                     clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                   }}>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-6 right-6 flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center mb-8">
              {renderStars(currentTestimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed text-justify font-medium">
                {currentTestimonial.text}
              </p>
            </div>

            {/* Author Section */}
            <div className="flex justify-between items-end">
              <div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-#1a73e8 mb-2" 
                     style={{ fontFamily: 'Brush Script MT, cursive' }}>
                    —{currentTestimonial.name}
                  </p>
                </div>
              </div>
              <div className="text-right">
                {currentTestimonial.phone && (
                  <p className="text-gray-600 font-mono text-lg">
                    {currentTestimonial.phone}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center mt-12 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? '#1845B3 scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </motion.div>

        {/* All Testimonials Preview */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'scale-110' : 'scale-100 opacity-60'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`bg-white rounded-lg p-4 shadow-md border-2 ${
                index === currentIndex ? '#1D50C9' : 'border-transparent'
              }`}>
                <div className="text-center">
                  <p className="font-bold text-#1a73e8 text-lg mb-1">
                    {testimonial.name}
                  </p>
                  <div className="flex justify-center mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-3">
                    {testimonial.text.substring(0, 60)}...
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}