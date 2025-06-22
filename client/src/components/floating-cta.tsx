import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Users, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpanded = () => {
    setShowFull(!showFull);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {!showFull ? (
            /* Floating Action Button */
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <button
                onClick={toggleExpanded}
                className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center text-white relative overflow-hidden group"
              >
                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                
                {/* Icons */}
                <div className="relative z-10 flex items-center space-x-1">
                  <Phone className="w-5 h-5" />
                  <MessageCircle className="w-4 h-4" />
                </div>
                
                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">!</span>
                </div>
              </button>

              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                  Get Free Consultation
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Expanded CTA Card */
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="w-80"
            >
              <Card className="shadow-2xl border-0 bg-white">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white relative">
                    <button
                      onClick={toggleExpanded}
                      className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Free Consultation</h3>
                        <p className="text-blue-100 text-sm">Available Now</p>
                      </div>
                    </div>
                    
                    {/* Live Indicators */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>15 counselors online</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-300 fill-current" />
                        <span>4.8/5 rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <p className="text-gray-600 text-sm mb-2">
                        Get expert guidance for your study abroad journey
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>30 min session</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>100% Free</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
                        size="lg"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now: +92 304 1110947
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary/5"
                        size="lg"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp Chat
                      </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center space-x-4 pt-2 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">15K+</div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">98%</div>
                        <div className="text-xs text-gray-500">Success</div>
                      </div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent">15+</div>
                        <div className="text-xs text-gray-500">Years</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}