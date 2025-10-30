import { MessageCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppChannelCTA() {
  return (
    <div className="my-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-600/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Left Section - Icon and Text */}
            <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left text-white">
              <div className="bg-white/20 p-3 sm:p-4 rounded-full backdrop-blur-sm flex-shrink-0 shadow-lg">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-white">
                <h3 className="!text-white font-bold text-lg sm:text-xl mb-1" style={{ color: 'white' }}>
                  Stay Updated with Our WhatsApp Channel
                </h3>
                <p className="!text-white text-sm sm:text-base">
                  Get instant updates on visa news, scholarships, and study abroad opportunities!
                </p>
              </div>
            </div>

            {/* Right Section - CTA Button */}
            <a 
              href="https://whatsapp.com/channel/0029VbAnwfe8qIzremjcqn2V" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 w-full sm:w-auto"
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-white text-[#1D50C9] hover:bg-blue-50 hover:scale-105 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group px-6 py-3 rounded-xl"
                data-testid="button-join-whatsapp-channel"
              >
                <Bell className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Join Channel
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
