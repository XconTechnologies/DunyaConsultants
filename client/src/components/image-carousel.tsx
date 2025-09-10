import { useRef, lazy, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";

// Lazy load images for better initial performance
const carouselImages = [
  { id: 1, src: "/attached_assets/Avari Carnival (147 of 1139)_1751536114472.webp", alt: "best Study Abroad Consultants in Pakistan", caption: "One-on-one student guidance sessions" },
  { id: 2, src: "/attached_assets/Avari Carnival (152 of 1139)_1751536114473.webp", alt: "Annual Awards Ceremony", caption: "Celebrating excellence in education consulting" },
  { id: 3, src: "/attached_assets/Branch Manager of the year_1751536114473.webp", alt: "Branch Manager Recognition", caption: "Branch Manager of the Year award ceremony" },
  { id: 4, src: "/attached_assets/Dunya AGM (183 of 577)_1751536114474.webp", alt: "Team Meeting", caption: "Strategic planning and team collaboration" },
  { id: 5, src: "/attached_assets/Dunya AGM (187 of 577)_1751536114474.webp", alt: "Professional Conference", caption: "International education conference participation" },
  { id: 6, src: "/attached_assets/Dunya AGM (319 of 577)_1751536114475.webp", alt: "Training Workshop", caption: "Professional development and training session" },
  { id: 7, src: "/attached_assets/Dunya AGM (337 of 577)_1751536114475.webp", alt: "Corporate Event", caption: "Company milestone celebration" },
  { id: 8, src: "/attached_assets/Dunya AGM (350 of 577)_1751536114475.webp", alt: "Educational Seminar", caption: "Educational seminar for prospective students" },
];


export default function ImageCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="-mt-20 mb-20 overflow-hidden">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1500]
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of images */}
              {carouselImages.map((image) => (
                  <motion.div
                    key={`first-${image.id}`}
                    className="w-[350px] h-[250px] flex-shrink-0 rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      width={350}
                      height={250}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {carouselImages.map((image) => (
                  <motion.div
                    key={`second-${image.id}`}
                    className="w-[350px] h-[250px] flex-shrink-0 rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      width={350}
                      height={250}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
              ))}
            </motion.div>
        </motion.div>
    </section>
  );
}