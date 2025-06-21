import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Star, MessageCircle } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-8 animate-pulse">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : null
        }
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            variant="outline"
            size="lg"
            className="bg-white text-primary px-8 py-4 text-lg font-semibold border-2 border-primary hover:bg-primary hover:text-white"
          >
            <MessageCircle className="mr-2" size={20} />
            Read More Success Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
