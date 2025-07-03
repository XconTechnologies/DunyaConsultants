import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Import images from assets
import img1 from "@assets/Avari Carnival (147 of 1139)_1751536114472.webp";
import img2 from "@assets/Avari Carnival (152 of 1139)_1751536114473.webp";
import img3 from "@assets/Branch Manager of the year_1751536114473.webp";
import img4 from "@assets/Dunya AGM (183 of 577)_1751536114474.webp";
import img5 from "@assets/Dunya AGM (187 of 577)_1751536114474.webp";
import img6 from "@assets/Dunya AGM (319 of 577)_1751536114475.webp";
import img7 from "@assets/Dunya AGM (337 of 577)_1751536114475.webp";
import img8 from "@assets/Dunya AGM (350 of 577)_1751536114475.webp";
import img9 from "@assets/IMG-20250510-WA0020_1751536114476.webp";
import img10 from "@assets/IMG-20250510-WA0028_1751536114476.webp";
import img11 from "@assets/IMG-20250510-WA0070_1751536114476.webp";
import img12 from "@assets/MHQ07389_1751536114477.webp";

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
    alt: "Student Consultation Event",
    caption: "Professional Student Consultation Events"
  },
  {
    id: 2,
    src: img2,
    alt: "Expert Guidance Session",
    caption: "One-on-One Expert Guidance Sessions"
  },
  {
    id: 3,
    src: img3,
    alt: "Branch Manager Award",
    caption: "Branch Manager of the Year Award 2025"
  },
  {
    id: 4,
    src: img4,
    alt: "Annual General Meeting",
    caption: "Annual General Meeting 2025"
  },
  {
    id: 5,
    src: img5,
    alt: "Professional Seminar",
    caption: "Professional Development Seminars"
  },
  {
    id: 6,
    src: img6,
    alt: "Leadership Conference",
    caption: "Leadership Conference & Workshop"
  },
  {
    id: 7,
    src: img7,
    alt: "Strategic Planning",
    caption: "Strategic Planning & Development Sessions"
  },
  {
    id: 8,
    src: img8,
    alt: "Team Building",
    caption: "Team Building & Collaborative Events"
  },
  {
    id: 9,
    src: img9,
    alt: "Modern Office Consultation",
    caption: "Modern Office Consultation Environment"
  },
  {
    id: 10,
    src: img10,
    alt: "Expert Advisory Session",
    caption: "Expert Advisory Sessions"
  },
  {
    id: 11,
    src: img11,
    alt: "International Study Programs",
    caption: "International Study Programs Consultation"
  },
  {
    id: 12,
    src: img12,
    alt: "Team Training",
    caption: "Team Building & Professional Training"
  }
];

export default function ImageCarousel() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  // Preload all images
  useEffect(() => {
    carouselImages.forEach(image => {
      if (!loadedImages.has(image.id)) {
        const img = new Image();
        img.src = image.src;
        img.onload = () => handleImageLoad(image.id);
      }
    });
  }, [loadedImages]);

  return (
    <section ref={ref} className="relative -mt-20 mb-20 z-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Horizontal Sliding Images */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left fade overlay */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Sliding images container */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -300 * carouselImages.length]
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Duplicate images for seamless loop */}
            {[...carouselImages, ...carouselImages].map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white min-w-[280px] flex-shrink-0"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="aspect-[4/3] relative">
                  {/* Loading skeleton */}
                  {!loadedImages.has(image.id) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
                  )}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${
                      loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(image.id)}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Caption on Hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-3 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-white text-sm font-semibold leading-tight">
                      {image.caption}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}