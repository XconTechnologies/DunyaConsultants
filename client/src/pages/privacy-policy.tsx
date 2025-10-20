import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Globe, FileText, Mail, Phone } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { setStaticPageMeta } from "@/lib/seo";

export default function PrivacyPolicy() {
  useEffect(() => {
    setStaticPageMeta(
      "Privacy Policy - Dunya Consultants",
      "Learn how Dunya Consultants protects your personal data. Read our Privacy Policy to understand how we collect, use, and safeguard your information responsibly."
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90">
              Your trust is our priority. Learn how we protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Dunya Consultants, we value the confidence that you have in us and the information you shared. Study abroad consulting, visas, and anything else, whatever the reason you reach out to us for, we guarantee your information is treated confidentially, with respect and honesty.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                This Policy describes how we will collect, use, and protect your information when you reach out to us through our website, visit our office, or interact with our team.
              </p>
            </div>

            {/* 1. Who We Are */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-[#1D50C9]" />
                <h2 className="text-2xl font-bold text-gray-900">1. Who We Are</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dunya Consultants has a global presence, with offices located within Pakistan, Egypt, Saudi Arabia, United Kingdom, and Turkey. We are an overseas education consultancy, helping prospective students with university admission processes, visas, and related consultancy services.
              </p>
              <p className="text-gray-700 mb-2">For any privacy-related concerns, you may reach us at:</p>
              <div className="flex flex-col gap-2 ml-4">
                <a 
                  href="mailto:info@dunyaconsultants.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1D50C9] hover:text-[#1845B3] transition-colors"
                  data-testid="link-email-privacy"
                >
                  <Mail className="w-4 h-4" />
                  info@dunyaconsultants.com
                </a>
                <a 
                  href="https://wa.me/923041110947" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1D50C9] hover:text-[#1845B3] transition-colors"
                  data-testid="link-whatsapp-privacy"
                >
                  <Phone className="w-4 h-4" />
                  +92 304 1110947
                </a>
              </div>
            </div>

            {/* 2. Information We Collect */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#1D50C9]" />
                <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal information that helps us serve you better, including but not limited to:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="text-gray-700">
                  <strong>Personal Identification:</strong> Name, birthday, gender, number, email, and address.
                </li>
                <li className="text-gray-700">
                  <strong>Academic Information:</strong> Your qualifications records, transcripts, or certificates.
                </li>
                <li className="text-gray-700">
                  <strong>Financial & Visa Documents:</strong> Passport copies, bank statements, or sponsorship letters and proof of funds for visa or admission processes.
                </li>
                <li className="text-gray-700">
                  <strong>Technical Data:</strong> Your IP address, type of browser, and device information; cookies for analytics or ads.
                </li>
                <li className="text-gray-700">
                  <strong>Marketing & Communication Preferences:</strong> Information you give for newsletter subscriptions or for study abroad information.
                </li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your data is used to deliver personalized and efficient consulting services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Handling study abroad and visa applications</li>
                <li>Sharing bespoke recommendations and admission advice</li>
                <li>Informing clientele about changes in applications and new opportunities in real time</li>
                <li>Addressing customer inquiries through our contact or lead forms</li>
                <li>Implementing Google Ads and other social media marketing strategies and preparing remarketing strategies</li>
                <li>Enhancing our site and services based on summary analytics data</li>
              </ul>
            </div>

            {/* 4. Legal Basis for Processing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We process your data based on one or more of the following legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>For example, we consider your consent when you send us an inquiry or fill out a form</li>
                <li>We also have a contract to execute when you sign up for our consultancy services</li>
                <li>Additionally, we comply with legal obligations for immigration and visa processing</li>
                <li>Lastly, we have your valid business interests, for example, improving your services and marketing relevant offers to you</li>
              </ul>
            </div>

            {/* 5. Data Sharing and Disclosure */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your personal information may be shared only with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Partner universities and institutions for admission processing</li>
                <li>Whenever the law requires</li>
                <li>Contracted vendors (like courier, translation, verification agencies) for documentation</li>
                <li>Advertising partners (ex: Google Ads, Facebook, LinkedIn) for analytics and advertising, under strict data protection agreements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                We do not sell or rent your personal information to any third party.
              </p>
            </div>

            {/* 6. Cookies and Tracking Technologies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies to improve your experience and to analyze traffic on our site. We have integrated Google Ads and social media pixels (Facebook, Instagram, LinkedIn) to assist in displaying relevant ads based on your previous activity on our site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You have the option to change your settings and disable cookies, but keep in mind this might restrict some functionalities of our site.
              </p>
            </div>

            {/* 7. Data Retention and Security */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#1D50C9]" />
                <h2 className="text-2xl font-bold text-gray-900">7. Data Retention and Security</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We keep your personal data only for the time it's needed for the specific reason it was collected. More sensitive information like passports, financial documents, and transcripts are securely saved in our CRM system which encodes and limits access.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To avoid unauthorized access or disclosure, we systematically train our staff in privacy protection.
              </p>
            </div>

            {/* 8. Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You might have the right to do the following depending on where you are and the laws that apply to you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Ask for a copy of your information</li>
                <li>Ask to correct or take out information that is wrong</li>
                <li>Take back your approval for marketing messages anytime</li>
                <li>Say no to having your data processed in some situations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, contact us at{' '}
                <a 
                  href="mailto:info@dunyaconsultants.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1D50C9] hover:text-[#1845B3] transition-colors underline"
                >
                  info@dunyaconsultants.com
                </a>
              </p>
            </div>

            {/* 9. Your Consent */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                When you use our website, fill out our contact forms, or give us your information, you are agreeing to this Privacy Policy and the data collection and use as stated within. You can contact us to withdraw your consent at any time.
              </p>
            </div>

            {/* 10. Updates to This Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We might change our Privacy Policy from time to time. If we do, we'll let you know. Those changes are reflected on the effective date on this page.
              </p>
            </div>

            {/* 11. Contact Us */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us:
              </p>
              <div className="flex flex-col gap-2 ml-4">
                <a 
                  href="mailto:info@dunyaconsultants.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1D50C9] hover:text-[#1845B3] transition-colors"
                  data-testid="link-email-contact"
                >
                  <Mail className="w-4 h-4" />
                  info@dunyaconsultants.com
                </a>
                <a 
                  href="https://wa.me/923041110947" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1D50C9] hover:text-[#1845B3] transition-colors"
                  data-testid="link-whatsapp-contact"
                >
                  <Phone className="w-4 h-4" />
                  +92 304 1110947
                </a>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Last Updated: October 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
