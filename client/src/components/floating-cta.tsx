import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Users, Calendar, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [isVisible, setIsVisible] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("General");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            /* Floating Action Button */
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <button
                onClick={toggleExpanded}
                className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center text-white relative overflow-hidden group z-[10001]"
              >
                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <Phone className="w-6 h-6" />
                </div>
                
                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">!</span>
                </div>
              </button>

              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[10000]">
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
              <Card className="shadow-2xl border-0 bg-white z-[10000] relative">
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

                    {/* Country Counselor Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Select Country Counselor:
                      </label>
                      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose counselor" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCounselors.map((counselor) => (
                            <SelectItem key={counselor.country} value={counselor.country}>
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">{counselor.flag}</span>
                                <div>
                                  <div className="font-medium">{counselor.country}</div>
                                  <div className="text-xs text-gray-500">{counselor.name}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      {/* Selected Counselor Info */}
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-lg">{selectedCounselor.flag}</span>
                          <div>
                            <div className="font-medium text-gray-900">
                              {selectedCounselor.name}
                            </div>
                            <div className="text-gray-600">
                              {selectedCounselor.country} Counselor
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button 
                        asChild
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
                        size="lg"
                      >
                        <a href={`tel:${selectedCounselor.phone.replace(/\s+/g, '')}`}>
                          <Phone className="w-5 h-5 mr-2" />
                          Call {selectedCounselor.name}: {selectedCounselor.phone}
                        </a>
                      </Button>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary/5 hover:text-primary"
                        size="lg"
                      >
                        <a href={`https://wa.me/${selectedCounselor.phone.replace(/[\s+-]/g, '')}?text=Hello! I would like to get a free consultation for ${selectedCounselor.country} from ${selectedCounselor.name}.`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          WhatsApp {selectedCounselor.name}
                        </a>
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