import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export default function BusinessProposalsSection() {
  return (
    <section className="py-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information - Business Card Style */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg border border-blue-100">
            {/* Floating decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-200/30 rounded-full blur-xl"></div>
            
            {/* Contact Grid */}
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {/* Phone */}
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Call Us</p>
                  <a href="tel:+923041110947" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                    +92 304 1110947
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Email Us</p>
                  <a href="mailto:info@dunyaconsultants.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    info@dunyaconsultants.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Head Office</p>
                  <p className="text-red-600 font-semibold text-sm">Sargodha, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-b-3xl"></div>
            <div className="absolute bottom-2 left-4 flex gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Business Proposals Contact Cards */}
        <motion.div
          className="mt-12 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Abdul Majeed Card */}
          <div className="max-w-sm mx-auto bg-white rounded-2xl p-6 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-center">
                <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Abdul Majeed
                </h3>
                <p className="text-sm text-gray-600 mb-4">General Manager</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('abdulmajeed@dunyaconsultants.com');
                    // Could add a toast notification here
                  }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  abdulmajeed@dunyaconsultants.com
                </button>
              </div>
            </div>
          </div>

          {/* Umer Farooq Card */}
          <div className="max-w-sm mx-auto bg-white rounded-2xl p-6 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="text-center">
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Umer Farooq
                </h3>
                <p className="text-sm text-gray-600 mb-4">Business Development Manager</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('umer@dunyaconsultants.com');
                    // Could add a toast notification here
                  }}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  umer@dunyaconsultants.com
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}