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
  { id: 1, src: img1, alt: "Student Counseling Session", caption: "One-on-one student guidance sessions" },
  { id: 2, src: img2, alt: "Annual Awards Ceremony", caption: "Celebrating excellence in education consulting" },
  { id: 3, src: img3, alt: "Branch Manager Recognition", caption: "Branch Manager of the Year award ceremony" },
  { id: 4, src: img4, alt: "Team Meeting", caption: "Strategic planning and team collaboration" },
  { id: 5, src: img5, alt: "Professional Conference", caption: "International education conference participation" },
  { id: 6, src: img6, alt: "Training Workshop", caption: "Professional development and training session" },
  { id: 7, src: img7, alt: "Corporate Event", caption: "Company milestone celebration" },
  { id: 8, src: img8, alt: "Educational Seminar", caption: "Educational seminar for prospective students" },
  { id: 9, src: img9, alt: "Office Consultation", caption: "Professional consultation services" },
  { id: 10, src: img10, alt: "Team Building", caption: "Team building and motivational session" },
  { id: 11, src: img11, alt: "International Programs", caption: "Global education program showcase" },
  { id: 12, src: img12, alt: "Success Stories", caption: "Celebrating student success stories" }
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
          
          {/* Infinite Sliding Container */}
          <div className="flex">
            <motion.div
              className="flex gap-4 py-4"
              animate={{
                x: [0, -1220]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of images - Display 5 images */}
              {carouselImages.slice(0, 10).map((image) => (
                <div
                  key={`first-${image.id}`}
                  className="relative rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0 w-[240px] h-[160px] group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium text-center">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop - Display 5 images */}
              {carouselImages.slice(0, 10).map((image) => (
                <div
                  key={`second-${image.id}`}
                  className="relative rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0 w-[240px] h-[160px] group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium text-center">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}