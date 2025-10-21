import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Globe, Briefcase, UserCheck, DollarSign, AlertCircle,
  Copyright, Shield, Gavel, RefreshCw, MessageCircle, ExternalLink,
  Phone, Mail
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { setStaticPageMeta } from "@/lib/seo";

export default function TermsOfServices() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    setStaticPageMeta(
      "Terms of Service | Dunya Consultants Pvt. Ltd.",
      "Read the Terms of Service for Dunya Consultants Pvt. Ltd. to understand your rights and responsibilities when using our study abroad consultation and visa guidance services."
    );
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'intro', label: 'Introduction', icon: FileText },
    { id: 'services', label: 'Our Services', icon: Briefcase },
    { id: 'website', label: 'Use of Website', icon: Globe },
    { id: 'contact', label: 'Contact Forms', icon: MessageCircle },
    { id: 'fees', label: 'Fees & Payments', icon: DollarSign },
    { id: 'disclaimer', label: 'Disclaimer & Liability', icon: AlertCircle },
    { id: 'intellectual', label: 'Intellectual Property', icon: Copyright },
    { id: 'privacy', label: 'Privacy & Data Use', icon: Shield },
    { id: 'termination', label: 'Termination', icon: UserCheck },
    { id: 'governing', label: 'Governing Law', icon: Gavel },
    { id: 'updates', label: 'Updates', icon: RefreshCw },
    { id: 'contactus', label: 'Contact Us', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-lg rounded-full mb-6 md:mb-8 shadow-2xl"
            >
              <Gavel className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" strokeWidth={1.5} />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight px-2">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-light leading-relaxed px-4">
              Understanding your rights and responsibilities when using our services.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 px-4">
              <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2 sm:py-3 border border-white/20">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">Clear Terms</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2 sm:py-3 border border-white/20">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">Your Protection</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 -mt-6 md:-mt-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#1D50C9]" />
                      Quick Navigation
                    </h3>
                    <nav className="space-y-1">
                      {sections.map((section, index) => (
                        <motion.a
                          key={section.id}
                          href={`#${section.id}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                            activeSection === section.id
                              ? 'bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white shadow-md'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSection(section.id);
                            const element = document.getElementById(section.id);
                            if (element) {
                              const headerOffset = 100;
                              const elementPosition = element.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                              });
                            }
                          }}
                        >
                          <section.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{section.label}</span>
                        </motion.a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Introduction */}
              <motion.div
                id="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        Welcome to Dunya Consultants Pvt. Ltd. Accessing or using our website{' '}
                        <a href="https://dunyaconsultants.com" className="text-[#1D50C9] hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                          https://dunyaconsultants.com
                        </a>{' '}
                        or using our services constitutes an agreement to these Terms of Service.
                      </p>
                      <p>
                        Please read these Terms carefully before using our website or services. If you do not accept these Terms, you may not access or use our website or any services associated with it.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Our Services */}
              <motion.div
                id="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Services</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        As an educational consultant and provider of educational visa services, Dunya Consultants Pvt. Ltd. helps students and people wanting to study abroad. We provide:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Study abroad consultation</li>
                        <li>Admission assistance</li>
                        <li>Visa application support</li>
                        <li>Test preparation guidance (IELTS, TOEFL, PTE, etc.)</li>
                        <li>Post-study and career counseling</li>
                      </ul>
                      <p>
                        We provide all of our services from Pakistan, the United Kingdom, Egypt, Saudi Arabia, and Turkey.
                      </p>
                      <div className="bg-blue-50 border-l-4 border-[#1D50C9] p-4 rounded-r-lg">
                        <p className="text-sm font-medium text-gray-900">
                          We may update, modify, or discontinue any service at any time without prior notice.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Use of the Website */}
              <motion.div
                id="website"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Use of the Website</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        You are supposed to use our site lawfully and comply with these terms and conditions. You must not:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Submit any contact or inquiry form with false, misleading, or fraudulent information.</li>
                        <li>Try to disrupt or interfere with any of the website's functions or security systems.</li>
                        <li>Reproduce, distribute, or exploit any content of the website without a prior explicit written request to Dunya Consultants Pvt. Ltd.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Forms and Inquiries */}
              <motion.div
                id="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Forms and Inquiries</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        You can reach us through our website which has contact and lead forms which enables you to request information, inquire, or express interest in our services. When you provide your information, you agree to being reached out through your given information by our consultants via email, phone, or WhatsApp.
                      </p>
                      <p>
                        In order to comply with our Privacy Policy, we may request personal information such as your name, email address, phone number, academic records, and any other pertinent documents for processing your request.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Fees and Payments */}
              <motion.div
                id="fees"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Fees and Payments</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        You can't pay for our services through our website.
                      </p>
                      <p>
                        You can pay for the services, consultations, and application processing fees in person or through approved bank transfers.
                      </p>
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="text-sm font-medium text-gray-900">
                          We won't ask for payments through unapproved links and third parties, so please check with our office before any payments. You're better off with the paperwork.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Disclaimer and Limitation of Liability */}
              <motion.div
                id="disclaimer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Disclaimer and Limitation of Liability</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Visa and Admission Outcomes:</h3>
                        <p>
                          We understand you want to get the best chance to pass the visa and get admission, yet Dunya's Consultants Pvt. Ltd. qualify the best professional support without the promise of visa and admission acceptance and permissions and endowed scholarships. Approval of the foregoing is solely determined by the relevant authorities.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy of Information:</h3>
                        <p>
                          We wish to keep our website and materials up to date, but this does not mean there will be perfect accuracy, completeness and timeliness of information at all times.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Services:</h3>
                        <p>
                          Third parties include testing bodies, universities, or social networks. The website offers link to the three above. The accuracy and relevance of the material, privacy regulations and the consequences of the three above are not our responsibility.
                        </p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <p className="text-sm font-medium text-gray-900">
                          Dunya Consultants Pvt. Ltd. and its directors, staff, or agents are not liable to you for any indirect, incidental, or consequential damages that arise due to your use of the site or services.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Intellectual Property Rights */}
              <motion.div
                id="intellectual"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <Copyright className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Intellectual Property Rights</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        The Dunya Consultants Pvt. Ltd. website content (text, images, graphics, logos, trademarks, and other materials) belongs to Dunya Consultants Pvt. Ltd. or its licensors. Dunya Consultants Pvt. Ltd. content may not be reproduced, altered, or distributed without Dunya Consultants Pvt. Ltd. prior written permission.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Privacy and Data Use */}
              <motion.div
                id="privacy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Privacy and Data Use</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        We care about your privacy. To know how we gather, handle, and protect your personal data, please read our{' '}
                        <a href="/privacy-policy" className="text-[#1D50C9] hover:underline font-medium inline-flex items-center gap-1">
                          Privacy Policy
                          <ExternalLink className="w-4 h-4" />
                        </a>.
                      </p>
                      <p>
                        When you visit our site or fill out any form, you agree to the way we handle your data as explained.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Termination of Access */}
              <motion.div
                id="termination"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <UserCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Termination of Access</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        For any reason we see fit, we may suspend or end your ability to use our site or service without notice or warning. This may be for an infringement of these Terms.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Governing Law and Jurisdiction */}
              <motion.div
                id="governing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <Gavel className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Governing Law and Jurisdiction</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        The laws of the Islamic Republic of Pakistan will govern the interpretation of these Terms.
                      </p>
                      <p>
                        All disputes arising under or in connection with these Terms will fall under the exclusive jurisdiction of the Lahore, Pakistan, courts.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Updates to These Terms */}
              <motion.div
                id="updates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <RefreshCw className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Updates to These Terms</h2>
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                      <p>
                        From time to time, we might change these Terms. Whenever that happens, we will post an "updated" effective date.
                      </p>
                      <p>
                        By continuing to use our website or services, you accept the new Terms.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                id="contactus"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm border-2 border-[#1D50C9]/20 overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-xl">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Information</h2>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        For any questions regarding these Terms or our services, please contact us:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <motion.a 
                          href="tel:+923041110947"
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                              <p className="text-sm font-bold text-gray-900 break-words">+92 304 1110947</p>
                            </div>
                          </div>
                        </motion.a>
                        
                        <motion.a 
                          href="mailto:info@dunyaconsultants.com"
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                              <p className="text-sm font-bold text-gray-900 break-words">info@dunyaconsultants.com</p>
                            </div>
                          </div>
                        </motion.a>
                        
                        <motion.a 
                          href="https://dunyaconsultants.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 sm:col-span-2 lg:col-span-1"
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#1D50C9] to-[#1845B3] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              <Globe className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Website</p>
                              <p className="text-sm font-bold text-gray-900 break-words">dunyaconsultants.com</p>
                            </div>
                          </div>
                        </motion.a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
