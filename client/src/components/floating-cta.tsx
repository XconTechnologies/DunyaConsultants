import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Users, Calendar, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

// Country counselor data
const countryCounselors = [
  {
    country: "UK",
    name: "Ahmad Ali",
    phone: "+923041110947",
    flag: "🇬🇧"
  },
  {
    country: "Canada",
    name: "Sarah Khan",
    phone: "+923041110948",
    flag: "🇨🇦"
  },
  {
    country: "Australia",
    name: "Hassan Sheikh",
    phone: "+923041110949",
    flag: "🇦🇺"
  },
  {
    country: "USA",
    name: "Maria Ahmed",
    phone: "+923041110950",
    flag: "🇺🇸"
  },
  {
    country: "Germany",
    name: "Usman Malik",
    phone: "+923041110951",
    flag: "🇩🇪"
  },
  {
    country: "General",
    name: "Main Office",
    phone: "+923041110947",
    flag: "🏢"
  }
];

export default function FloatingCTA() {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(true); // Always visible
  const [showFull, setShowFull] = useState(false); // Start collapsed by default
  const [selectedCountry, setSelectedCountry] = useState("General");
  const [isScrolling, setIsScrolling] = useState(false);

  // Set initial state based on mobile detection after component mounts
  useEffect(() => {
    if (isMobile !== undefined) {
      setShowFull(!isMobile); // Expanded on desktop, collapsed on mobile
    }
  }, [isMobile]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      setShowFull(false); // Close when scrolling
      
      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Set timeout to stop showing scrolling state (but don't reopen)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        // Removed auto-reopen - user must manually click to reopen
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const toggleExpanded = () => {
    setShowFull(!showFull);
  };

  const getSelectedCounselor = () => {
    return countryCounselors.find(c => c.country === selectedCountry) || countryCounselors[5];
  };

  const selectedCounselor = getSelectedCounselor();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          className="fixed bottom-6 right-6 z-[9999]"
        >
          {!showFull ? (
            // Compact Action Button - Smaller
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <button
                onClick={toggleExpanded}
                className="w-12 h-12 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full shadow-lg flex items-center justify-center text-white relative overflow-hidden group z-[10001]"
              >
                {/* Icon */}
                <div className="relative z-10">
                  <Phone className="w-4 h-4" />
                </div>
                
                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">!</span>
                </div>
              </button>
            </motion.div>
          ) : (
            // Compact CTA Card - Smaller
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="w-64"
            >
              <Card className="shadow-lg border border-gray-200 bg-white z-[10000] relative">
                <CardContent className="p-0">
                  {/* Compact Header */}
                  <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] p-3 text-white relative">
                    <button
                      onClick={toggleExpanded}
                      className="absolute top-1 right-1 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Free Consultation</h3>
                        <p className="text-blue-100 text-xs">Available Now</p>
                      </div>
                    </div>
                    
                    {/* Live Indicators */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>15 online</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-blue-300 fill-current" />
                        <span>4.8/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Simplified Content */}
                  <div className="p-3 space-y-3">
                    <p className="text-gray-600 text-xs">
                      Get expert guidance for study abroad
                    </p>

                    {/* Country Selection */}
                    <div className="space-y-2">
                      <label className="text-xs text-gray-600">
                        Country Counselor:
                      </label>
                      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger className="w-full h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCounselors.map((counselor) => (
                            <SelectItem key={counselor.country} value={counselor.country}>
                              {counselor.country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      {/* Office Info */}
                      <div className="bg-gray-50 p-2 rounded">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Main Office</span>
                          <span className="text-gray-500">General</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button 
                        asChild
                        className="w-full bg-[#1D50C9] hover:bg-[#1565c0] text-white text-xs h-8"
                      >
                        <a href={`tel:${selectedCounselor.phone.replace(/\s+/g, '')}`}>
                          <Phone className="w-3 h-3 mr-1" />
                          Call Main Office
                        </a>
                      </Button>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 text-xs h-8"
                      >
                        <a href={`https://wa.me/${selectedCounselor.phone.replace(/[\s+-]/g, '')}?text=Hello! I need consultation for study abroad.`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>

                    {/* Trust Stats */}
                    <div className="flex justify-center space-x-6 pt-2 text-center text-xs text-gray-500">
                      <div>
                        <div className="font-semibold text-[#1D50C9]">15K+</div>
                        <div>Students</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#1D50C9]">98%</div>
                        <div>Success</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#1D50C9]">15+</div>
                        <div>Years</div>
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