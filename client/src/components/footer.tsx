import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Mail, User, Building, Handshake, Users, Globe, Phone, MapPin, FileText, Calculator } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import Asset_1 from "@assets/Asset-1.png";

import New_Logo_White from "@assets/New Logo White.png";

function ContactDialog() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = `Business Proposal from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:abdul.majeed@dunyaconsultants.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center justify-center w-full px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105">
          <Mail className="w-4 h-4 mr-2" />
          Contact
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#1D50C9]">Business Proposal Contact</DialogTitle>
          <DialogDescription className="text-gray-600">
            Send us your business proposal and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <Input
              placeholder="Company/Organization"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
          <Textarea
            placeholder="Describe your business proposal... *"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="min-h-[120px]"
            required
          />
          <div className="flex justify-between items-center pt-4">
            <p className="text-sm text-gray-600">
              * Required fields
            </p>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1D50C9] hover:bg-[#1a47b8] text-white px-6"
            >
              {isSubmitting ? 'Sending...' : 'Send Proposal'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1D50C9 0%, #1E4BA8 50%, #163C8C 100%)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/3 rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/">
                  <img 
                    src={New_Logo_White} 
                    alt="Dunya Consultants Logo" 
                    className="h-10 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Your trusted partner for global education opportunities. 
                Dedicated to helping students achieve their academic dreams worldwide.
              </p>
            </div>

            {/* Offices */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold mb-6 text-white">Pakistan Offices</h4>
              <ul className="space-y-3 text-sm mb-6">
                <li>
                  <Link href="/offices" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group">
                    <Building className="w-3 h-3 mr-2 opacity-60 group-hover:opacity-100" />
                    View All Pakistan Offices
                  </Link>
                </li>
              </ul>
              
              <h4 className="text-lg font-bold mb-6 text-white">International Offices</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/offices#international-offices" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group">
                    <Globe className="w-3 h-3 mr-2 opacity-60 group-hover:opacity-100" />
                    View International Offices
                  </Link>
                </li>
              </ul>
            </div>


            {/* Contact Us Card */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg relative overflow-hidden border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-4 -translate-x-4" />
                
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-4">
                    Contact Us
                  </h4>
                
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-blue-100 text-xs font-medium">UAN:</p>
                        <a href="tel:+923261111947" className="text-white text-sm font-semibold hover:text-blue-200 transition-colors">
                          (+92) 326 1111947
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-blue-100 text-xs font-medium">Email:</p>
                        <a href="mailto:info@dunyaconsultants.com" className="text-white text-sm font-semibold hover:text-blue-200 transition-colors break-all">
                          info@dunyaconsultants.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-blue-100 text-xs font-medium">Head Office:</p>
                        <p className="text-white text-sm font-semibold leading-relaxed">
                          Alif Tower, Buhadur shah zafar road, Sargodha
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* For Business Proposals Card */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg relative overflow-hidden border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-4 -translate-x-4" />
                
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-4">
                    For Business Proposals
                  </h4>
                
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <a href="mailto:abdul.majeed@dunyaconsultants.com" className="text-white text-sm font-semibold hover:text-blue-200 transition-colors break-all">
                          abdul.majeed@dunyaconsultants.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-white text-sm font-semibold">
                          Mr. Abdul Majeed
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <ContactDialog />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-blue-100 text-sm">
              © 2025 Developed by <a href="https://xcontechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-300">XCon Technologies</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}