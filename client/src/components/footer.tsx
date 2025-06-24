import { motion } from 'framer-motion';
import { Mail, User, Building, Handshake, Users, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/attached_assets/DC Blue Logo (1)_1750668538365.png" 
                alt="Dunya Consultants Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for global education opportunities. 
              Dedicated to helping students achieve their academic dreams worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/country-guide" className="text-gray-400 hover:text-white transition-colors">Country Guide</a></li>
              <li><a href="/ielts" className="text-gray-400 hover:text-white transition-colors">IELTS Preparation</a></li>
              <li><a href="/cost-calculator" className="text-gray-400 hover:text-white transition-colors">Cost Calculator</a></li>
              <li><a href="/course-match-tool" className="text-gray-400 hover:text-white transition-colors">Course Match Tool</a></li>
              <li><a href="/document-checklist" className="text-gray-400 hover:text-white transition-colors">Document Checklist</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">UAN: (+92) 304 1110947</p>
              <p className="text-gray-400">Email: info@dunyaconsultants.com</p>
              <p className="text-gray-400">
                Head Office: Alif Tower, Buhadur shah zafar road, Sargodha
              </p>
            </div>
          </div>

          {/* Business Proposals Section */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-3 text-center">Business Proposals</h4>
              
              {/* Partnership Categories */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Handshake className="w-3 h-3" />
                  <span>Partnerships</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Building className="w-3 h-3" />
                  <span>Strategic</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Globe className="w-3 h-3" />
                  <span>Franchise</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Users className="w-3 h-3" />
                  <span>Collaborations</span>
                </div>
              </div>

              {/* Contact Person */}
              <div className="text-center border-t border-gray-700 pt-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <User className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-semibold text-sm">Abdul Majeed</div>
                    <div className="text-xs text-gray-400">General Manager</div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">
                  abdul.majeed@dunyaconsultants.com
                </div>
                
                <motion.a
                  href="mailto:abdul.majeed@dunyaconsultants.com"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-3 h-3" />
                  <span>Send Proposal</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Dunya Consultants. All rights reserved. | Dedicated to Education
          </p>
        </div>
      </div>
    </footer>
  );
}