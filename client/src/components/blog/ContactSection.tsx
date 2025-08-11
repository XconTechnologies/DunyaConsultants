import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-[#4285F4] to-#1565c0 rounded-xl p-8 text-white shadow-xl border #3367D6/20 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 #3367D6 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-medium">110 Link Stadium Road Sargodha</span>
        </div>
        
        <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 #3367D6 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <a href="tel:+923041110947" className="text-white font-medium hover:text-blue-200 transition-colors">
            (+92) 304 1110947
          </a>
        </div>
        
        <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 #3367D6 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <a href="mailto:query@teamdunya.com" className="text-white font-medium hover:text-blue-200 transition-colors">
            query@teamdunya.com
          </a>
        </div>
      </div>
    </div>
  );
}