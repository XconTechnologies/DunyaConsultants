import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
import img12 from "@assets/MHQ07558_1751536114477.webp";

const carouselImages = [
  { id: 1, src: img1, alt: "Company Event 1" },
  { id: 2, src: img2, alt: "Company Event 2" },
  { id: 3, src: img3, alt: "Branch Manager Award" },
  { id: 4, src: img4, alt: "Annual Meeting 1" },
  { id: 5, src: img5, alt: "Annual Meeting 2" },
  { id: 6, src: img6, alt: "Team Conference 1" },
  { id: 7, src: img7, alt: "Team Conference 2" },
  { id: 8, src: img8, alt: "Professional Event" },
  { id: 9, src: img9, alt: "Office Consultation 1" },
  { id: 10, src: img10, alt: "Office Consultation 2" },
  { id: 11, src: img11, alt: "International Programs" },
  { id: 12, src: img12, alt: "Team Training" }
];

export default function ImageCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative -mt-20 mb-20 z-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Sliding Images */}
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left fade overlay */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Infinite Sliding Container */}
          <div className="flex">
            <motion.div
              className="flex gap-4 py-4"
              animate={{
                x: [0, -1400]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of images */}
              {carouselImages.map((image) => (
                <div
                  key={`first-${image.id}`}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[300px] h-[200px]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {carouselImages.map((image) => (
                <div
                  key={`second-${image.id}`}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[300px] h-[200px]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}