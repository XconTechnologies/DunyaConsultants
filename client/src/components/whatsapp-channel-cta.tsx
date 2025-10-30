import { motion } from "framer-motion";
import { MessageCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppChannelCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] my-8"
    >
      <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Left Section - Icon and Text */}
            <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm flex-shrink-0">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                  Stay Updated with Our WhatsApp Channel
                </h3>
                <p className="text-blue-100 text-sm sm:text-base">
                  Get instant updates on visa news, scholarships, and study abroad opportunities!
                </p>
              </div>
            </div>

            {/* Right Section - CTA Button */}
            <a 
              href="https://whatsapp.com/channel/0029VbAnwfe8qIzremjcqn2V" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button 
                size="lg"
                className="bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                data-testid="button-join-whatsapp-channel"
              >
                <Bell className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Join Channel
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
