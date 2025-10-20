import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Globe, FileText, Mail, Phone, User, Database, 
  Scale, Share2, Cookie, Clock, CheckCircle, RefreshCw, MessageCircle,
  Eye, Settings, AlertCircle
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { setStaticPageMeta } from "@/lib/seo";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    setStaticPageMeta(
      "Privacy Policy - Dunya Consultants",
      "Learn how Dunya Consultants protects your personal data. Read our Privacy Policy to understand how we collect, use, and safeguard your information responsibly."
    );
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'intro', label: 'Introduction', icon: FileText },
    { id: 'who', label: 'Who We Are', icon: Globe },
    { id: 'collect', label: 'Information We Collect', icon: Database },
    { id: 'use', label: 'How We Use Your Info', icon: Settings },
    { id: 'legal', label: 'Legal Basis', icon: Scale },
    { id: 'sharing', label: 'Data Sharing', icon: Share2 },
    { id: 'cookies', label: 'Cookies', icon: Cookie },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'rights', label: 'Your Rights', icon: CheckCircle },
    { id: 'consent', label: 'Consent', icon: Eye },
    { id: 'updates', label: 'Updates', icon: RefreshCw },
    { id: 'contact', label: 'Contact Us', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D50C9] via-[#2764E8] to-[#1845B3]"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
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
              className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-lg rounded-3xl mb-8 shadow-2xl"
            >
              <Shield className="w-14 h-14 text-white" strokeWidth={1.5} />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-light leading-relaxed">
              Your trust is our priority. Learn how we protect your information.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span className="text-sm">Secure & Confidential</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 max-w-7xl">
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
                            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
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
              {/* Introduction Card */}
              <motion.div
                id="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Introduction</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        At Dunya Consultants, we value the confidence that you have in us and the information you shared. Study abroad consulting, visas, and anything else, whatever the reason you reach out to us for, we guarantee your information is treated confidentially, with respect and honesty.
                      </p>
                      <p className="text-lg">
                        This Policy describes how we will collect, use, and protect your information when you reach out to us through our website, visit our office, or interact with our team.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Who We Are */}
              <motion.div
                id="who"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Who We Are</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Dunya Consultants has a global presence, with offices located within Pakistan, Egypt, Saudi Arabia, United Kingdom, and Turkey. We are an overseas education consultancy, helping prospective students with university admission processes, visas, and related consultancy services.
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <p className="text-gray-700 font-medium mb-4">For any privacy-related concerns, reach us at:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <a 
                          href="mailto:info@dunyaconsultants.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all group"
                          data-testid="link-email-privacy"
                        >
                          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-[#1D50C9] transition-colors">
                            <Mail className="w-5 h-5 text-[#1D50C9] group-hover:text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium">Email Us</p>
                            <p className="text-sm text-[#1D50C9] font-semibold">info@dunyaconsultants.com</p>
                          </div>
                        </a>
                        <a 
                          href="https://wa.me/923041110947" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all group"
                          data-testid="link-whatsapp-privacy"
                        >
                          <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-600 transition-colors">
                            <Phone className="w-5 h-5 text-green-600 group-hover:text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                            <p className="text-sm text-green-600 font-semibold">+92 304 1110947</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Information We Collect */}
              <motion.div
                id="collect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Information We Collect</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We collect personal information that helps us serve you better, including but not limited to:
                    </p>
                    <div className="grid gap-4">
                      {[
                        { icon: User, title: 'Personal Identification', desc: 'Name, birthday, gender, number, email, and address.' },
                        { icon: FileText, title: 'Academic Information', desc: 'Your qualifications records, transcripts, or certificates.' },
                        { icon: Lock, title: 'Financial & Visa Documents', desc: 'Passport copies, bank statements, or sponsorship letters and proof of funds for visa or admission processes.' },
                        { icon: Globe, title: 'Technical Data', desc: 'Your IP address, type of browser, and device information; cookies for analytics or ads.' },
                        { icon: Mail, title: 'Marketing & Communication Preferences', desc: 'Information you give for newsletter subscriptions or for study abroad information.' },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-lg border border-gray-100 hover:border-blue-200 transition-all"
                        >
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <item.icon className="w-5 h-5 text-[#1D50C9]" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* How We Use Your Information */}
              <motion.div
                id="use"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">3. How We Use Your Information</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Your data is used to deliver personalized and efficient consulting services, including:
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Handling study abroad and visa applications',
                        'Sharing bespoke recommendations and admission advice',
                        'Informing clientele about changes in applications and new opportunities in real time',
                        'Addressing customer inquiries through our contact or lead forms',
                        'Implementing Google Ads and other social media marketing strategies and preparing remarketing strategies',
                        'Enhancing our site and services based on summary analytics data'
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Legal Basis for Processing */}
              <motion.div
                id="legal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Legal Basis for Processing</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We process your data based on one or more of the following legal grounds:
                    </p>
                    <div className="grid gap-4">
                      {[
                        'For example, we consider your consent when you send us an inquiry or fill out a form',
                        'We also have a contract to execute when you sign up for our consultancy services',
                        'Additionally, we comply with legal obligations for immigration and visa processing',
                        'Lastly, we have your valid business interests, for example, improving your services and marketing relevant offers to you'
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-[#1D50C9]"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-[#1D50C9] rounded-full"></div>
                          </div>
                          <p className="text-gray-700">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Data Sharing and Disclosure */}
              <motion.div
                id="sharing"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <Share2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">5. Data Sharing and Disclosure</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Your personal information may be shared only with:
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Partner universities and institutions for admission processing',
                        'Whenever the law requires',
                        'Contracted vendors (like courier, translation, verification agencies) for documentation',
                        'Advertising partners (ex: Google Ads, Facebook, LinkedIn) for analytics and advertising, under strict data protection agreements'
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-green-600" />
                        <p className="font-semibold text-gray-900">
                          We do not sell or rent your personal information to any third party.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cookies and Tracking Technologies */}
              <motion.div
                id="cookies"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <Cookie className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">6. Cookies and Tracking Technologies</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We use cookies to improve your experience and to analyze traffic on our site. We have integrated Google Ads and social media pixels (Facebook, Instagram, LinkedIn) to assist in displaying relevant ads based on your previous activity on our site.
                      </p>
                      <div className="p-5 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">
                            You have the option to change your settings and disable cookies, but keep in mind this might restrict some functionalities of our site.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Data Retention and Security */}
              <motion.div
                id="security"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">7. Data Retention and Security</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We keep your personal data only for the time it's needed for the specific reason it was collected. More sensitive information like passports, financial documents, and transcripts are securely saved in our CRM system which encodes and limits access.
                      </p>
                      <p>
                        To avoid unauthorized access or disclosure, we systematically train our staff in privacy protection.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                id="rights"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">8. Your Rights</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You might have the right to do the following depending on where you are and the laws that apply to you:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {[
                        'Ask for a copy of your information',
                        'Ask to correct or take out information that is wrong',
                        'Take back your approval for marketing messages anytime',
                        'Say no to having your data processed in some situations'
                      ].map((right, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                        >
                          <CheckCircle className="w-5 h-5 text-[#1D50C9] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{right}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-gray-700">
                      To exercise these rights, contact us at{' '}
                      <a 
                        href="mailto:info@dunyaconsultants.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#1D50C9] hover:text-[#1845B3] font-semibold underline transition-colors"
                      >
                        info@dunyaconsultants.com
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Your Consent */}
              <motion.div
                id="consent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">9. Your Consent</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      When you use our website, fill out our contact forms, or give us your information, you are agreeing to this Privacy Policy and the data collection and use as stated within. You can contact us to withdraw your consent at any time.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Updates to This Policy */}
              <motion.div
                id="updates"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-lg">
                        <RefreshCw className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">10. Updates to This Policy</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We might change our Privacy Policy from time to time. If we do, we'll let you know. Those changes are reflected on the effective date on this page.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Us */}
              <motion.div
                id="contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl bg-gradient-to-br from-[#1D50C9] to-[#1845B3] text-white">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">11. Contact Us</h2>
                        <div className="h-1 w-20 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6">
                      If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <a 
                        href="mailto:info@dunyaconsultants.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group border border-white/20"
                        data-testid="link-email-contact"
                      >
                        <div className="p-3 bg-white rounded-lg group-hover:scale-110 transition-transform">
                          <Mail className="w-6 h-6 text-[#1D50C9]" />
                        </div>
                        <div>
                          <p className="text-xs text-white/70 hover:text-white font-medium mb-1">Email Us</p>
                          <p className="text-sm font-bold text-white hover:text-white">info@dunyaconsultants.com</p>
                        </div>
                      </a>
                      <a 
                        href="https://wa.me/923041110947" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group border border-white/20"
                        data-testid="link-whatsapp-contact"
                      >
                        <div className="p-3 bg-white rounded-lg group-hover:scale-110 transition-transform">
                          <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-white/70 hover:text-white font-medium mb-1">WhatsApp</p>
                          <p className="text-sm font-bold text-white hover:text-white">+92 304 1110947</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Last Updated */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center py-6"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600 font-medium">
                    Last Updated: October 2025
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
