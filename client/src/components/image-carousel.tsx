import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Import images from assets
import img1 from "@assets/IMG-20250425-WA0015_1750755121095.jpg";
import img2 from "@assets/IMG-20250425-WA0016_1750755121093.jpg";
import img3 from "@assets/IMG-20250425-WA0017_1750755121094.jpg";
import img4 from "@assets/Halic-University-15-2048x879_1750756910276.jpg";
import img5 from "@assets/Linkedin Cover_1750765339302.jpg";
import img6 from "@assets/2983550_1750486804143.jpg";
import img7 from "@assets/57296202fc4079cdfca9b3d72a4d0cf6_1751529291131.jpg";
import img8 from "@assets/dc409228eb0680c8f13c6c0d748ca083_1751528798111.jpg";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: img1,
    alt: "Student Success Story",
    caption: "Empowering Students Worldwide"
  },
  {
    id: 2,
    src: img2,
    alt: "University Campus",
    caption: "Top International Universities"
  },
  {
    id: 3,
    src: img3,
    alt: "Education Excellence",
    caption: "Excellence in Education"
  },
  {
    id: 4,
    src: img4,
    alt: "Global Education",
    caption: "World-Class Education"
  },
  {
    id: 5,
    src: img5,
    alt: "Team Success",
    caption: "Professional Team"
  },
  {
    id: 6,
    src: img6,
    alt: "Educational Journey",
    caption: "Your Journey to Success"
  },
  {
    id: 7,
    src: img7,
    alt: "Academic Achievement",
    caption: "Academic Excellence"
  },
  {
    id: 8,
    src: img8,
    alt: "Student Life",
    caption: "Student Life & Success"
  }
];

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section ref={ref} className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover moments of success, academic excellence, and the journey of thousands of students
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Image Container */}
          <div 
            className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {carouselImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={index === currentSlide ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Caption */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {image.caption}
                  </h3>
                  <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevSlide}
              className="ml-4 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextSlide}
              className="mr-4 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Play/Pause Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Dots Navigation */}
        <motion.div
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-600 w-8 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
            />
          ))}
        </motion.div>

        {/* Thumbnail Strip */}
        <motion.div
          className="mt-8 flex justify-center space-x-4 overflow-x-auto pb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {carouselImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide 
                  ? 'ring-4 ring-blue-500 scale-110' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}