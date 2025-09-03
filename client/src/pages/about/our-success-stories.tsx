import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Globe, 
  Star, 
  Calendar,
  MapPin,
  Users,
  Award,
  TrendingUp,
  Heart,
  CheckCircle,
  Quote,
  BookOpen,
  Target,

} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

// Import Finland visa success images - using the actual files from attached_assets
// Removed image1 as requested by user
import image2 from '@assets/IMG-20250623-WA0011_1754049301060.jpg';
import image3 from '@assets/IMG-20250623-WA0012_1754049278747.jpg';
import image4 from '@assets/IMG-20250623-WA0013_1754049301061.jpg';
import image5 from '@assets/IMG-20250623-WA0014_1754049278748.jpg';
import image6 from '@assets/WhatsApp Image 2025-05-14 at 16.20.14_2ad80b19_1754049278749.jpg';
import image7 from '@assets/WhatsApp Image 2025-05-14 at 16.20.14_663cf00a_1754049278749.jpg';
import image8 from '@assets/WhatsApp Image 2025-06-13 at 15.22.21_168eba8b_1754049309050.jpg';
import image9 from '@assets/WhatsApp Image 2025-06-16 at 12.12.25_5460ad33_1754049309051.jpg';
import image10 from '@assets/WhatsApp Image 2025-06-18 at 12.22.14_ea3c798e_1754049309052.jpg';
import image11 from '@assets/image_1754049820938.png';
import image12 from '@assets/WhatsApp Image 2025-05-14 at 16.20.13_fe907d87_1754049278735.jpg';

// Import UK visa success images
import ukImage1 from '@assets/IMG-20250430-WA0007_1754052308503.jpg';
import ukImage2 from '@assets/IMG-20250430-WA0008_1754052308504.jpg';
import ukImage3 from '@assets/IMG-20250430-WA0010_1754052308505.jpg';
import ukImage4 from '@assets/IMG-20250430-WA0009_1754052308506.jpg';
import ukImage5 from '@assets/WhatsApp Image 2025-05-02 at 16.11.46_aaf6c656_1754052308507.jpg';
import ukImage6 from '@assets/WhatsApp Image 2025-05-09 at 17.19.50_75da8660_1754052308508.jpg';
import ukImage7 from '@assets/WhatsApp Image 2025-05-13 at 13.47.59_569f61a0_1754052308508.jpg';
import ukImage8 from '@assets/WhatsApp Image 2025-05-13 at 15.31.44_003e03c1_1754052308509.jpg';
import ukImage9 from '@assets/WhatsApp Image 2025-05-13 at 15.31.45_84f6344f_1754052308510.jpg';
import ukImage10 from '@assets/WhatsApp Image 2025-05-15 at 11.06.56_4ad17a9f_1754052308510.jpg';
import ukImage11 from '@assets/WhatsApp Image 2025-05-15 at 12.51.57_b853c6cc_1754052308511.jpg';
import ukImage12 from '@assets/WhatsApp Image 2025-05-16 at 13.26.16_313851ff_1754052308511.jpg';
import ukImage13 from '@assets/WhatsApp Image 2025-05-20 at 20.50.49_e5f84e7b_1754052308512.jpg';
import ukImage14 from '@assets/WhatsApp Image 2025-05-21 at 10.42.07_96d3d463_1754052308513.jpg';
import ukImage15 from '@assets/WhatsApp Image 2025-05-23 at 11.43.16_bc371ab0_1754052308513.jpg';
import ukImage16 from '@assets/WhatsApp Image 2025-05-26 at 12.56.19_c094f62c_1754052308514.jpg';
import ukImage17 from '@assets/WhatsApp Image 2025-05-26 at 15.04.07_aee9566a_1754052308514.jpg';
import ukImage18 from '@assets/WhatsApp Image 2025-05-29 at 16.48.23_87f75f66_1754052308515.jpg';
import ukImage19 from '@assets/WhatsApp Image 2025-05-30 at 15.01.00_c1d31a2b_1754052308516.jpg';
import ukImage20 from '@assets/WhatsApp Image 2025-05-30 at 17.32.36_e39cc5c9_1754052308516.jpg';

// Import Sweden visa success images
import swedenImage1 from '@assets/IMG-20250718-WA0049_1754129628346.jpg';
import swedenImage2 from '@assets/IMG-20250718-WA0048_1754129628349.jpg';
import swedenImage3 from '@assets/IMG-20250718-WA0047_1754129628350.jpg';
import swedenImage4 from '@assets/IMG-20250718-WA0046_1754129628351.jpg';
import swedenImage5 from '@assets/IMG-20250718-WA0045_1754129628352.jpg';
import swedenImage6 from '@assets/23,07,2025_1754129628353.jpg';
import swedenImage7 from '@assets/2_1754129628353.jpg';
import swedenImage8 from '@assets/1_1754129628354.jpg';

// Import Turkey visa success images
import turkeyImage1 from '@assets/WhatsApp Image 2025-09-03 at 12.46.23_0ac5251e_1756886175507.jpg';
import turkeyImage2 from '@assets/WhatsApp Image 2025-09-03 at 12.46.23_fe2f0e0d_1756886183710.jpg';
import turkeyImage3 from '@assets/WhatsApp Image 2025-09-03 at 12.46.24_1b3e1796_1756886192939.jpg';
import turkeyImage4 from '@assets/WhatsApp Image 2025-09-03 at 12.46.24_192154b4_1756886201760.jpg';
import turkeyImage5 from '@assets/WhatsApp Image 2025-09-03 at 12.46.24_9c6ad7be_1756886210800.jpg';
import turkeyImage6 from '@assets/WhatsApp Image 2025-09-03 at 12.46.25_2860443a_1756886219686.jpg';
import turkeyImage7 from '@assets/WhatsApp Image 2025-09-03 at 12.46.25_9a3d7a44_1756886230561.jpg';
import turkeyImage8 from '@assets/WhatsApp Image 2025-09-03 at 12.46.25_1036e576_1756886239900.jpg';

export default function OurSuccessStories() {
  const finlandSuccessImages = [
    image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12
  ];

  const ukSuccessImages = [
    ukImage1, ukImage2, ukImage3, ukImage4, ukImage5, ukImage6,
    ukImage7, ukImage8, ukImage9, ukImage10, ukImage11, ukImage12,
    ukImage13, ukImage14, ukImage15, ukImage16, ukImage17, ukImage18,
    ukImage19, ukImage20
  ];

  const swedenSuccessImages = [
    swedenImage1, swedenImage2, swedenImage3, swedenImage4,
    swedenImage5, swedenImage6, swedenImage7, swedenImage8
  ];

  const turkeySuccessImages = [
    turkeyImage1, turkeyImage2, turkeyImage3, turkeyImage4,
    turkeyImage5, turkeyImage6, turkeyImage7, turkeyImage8
  ];

  // Tab state for country selection
  const [activeTab, setActiveTab] = useState('UK');

  const achievements = [
    {
      metric: "Students Placed",
      value: "2,500+",
      description: "Successful university placements worldwide"
    },
    {
      metric: "Success Rate",
      value: "98%",
      description: "Visa approval success rate"
    },
    {
      metric: "Branches",
      value: "20+",
      description: "Office branches across Pakistan"
    },
    {
      metric: "Countries",
      value: "15+",
      description: "Global reach across major study destinations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-r from-[#1D50C9] to-[#1565c0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/10 rounded-full backdrop-blur-sm mb-4 sm:mb-6">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-xs sm:text-sm font-medium">Our Success Stories</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white px-2">
              Our Success Stories
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Real stories of students who achieved their dreams with Dunya Consultants
            </p>
            
            {/* Achievements Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 px-2">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2">
                    {achievement.value}
                  </div>
                  <p className="text-blue-100 text-xs sm:text-sm lg:text-base px-1">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="bg-white text-[#1D50C9] hover:bg-blue-50 w-full sm:w-auto">
                Share Your Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Our Success Stories - Visas */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Globe className="w-5 h-5 mr-2 text-[#1845B3]" />
              <span className="text-sm font-medium text-[#1845B3]">Visa Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories{" "}
              <span className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] bg-clip-text text-transparent">
                – Visa Wins
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the incredible journey of our students who secured student visas with exceptional results
            </p>
          </motion.div>

          {/* Country Tabs */}
          <div className="flex justify-center mb-8 px-4">
            <div className="grid grid-cols-2 gap-2 sm:inline-flex sm:gap-0 bg-white rounded-lg p-1 shadow-lg border w-full max-w-xs sm:max-w-none sm:w-auto">
              {[
                { id: 'UK', name: 'United Kingdom', shortName: 'UK', color: 'blue' },
                { id: 'Finland', name: 'Finland', shortName: 'Finland', color: 'blue' },
                { id: 'Sweden', name: 'Sweden', shortName: 'Sweden', color: 'blue' },
                { id: 'Turkey', name: 'Turkey', shortName: 'Turkey', color: 'blue' }
              ].map((country) => (
                <button
                  key={country.id}
                  onClick={() => setActiveTab(country.id)}
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeTab === country.id
                      ? 'bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="sm:hidden">{country.shortName}</span>
                  <span className="hidden sm:inline">{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Visa Success Vertical Scrolling Columns */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6 mb-16">
            {/* Mobile: 2 columns */}
            <div className="md:hidden flex gap-4 h-[600px] relative">
              {/* Top fade overlay */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              
              {/* Bottom fade overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
              
              {(() => {
                // Get current tab images
                const currentImages = activeTab === 'UK' ? ukSuccessImages : 
                                    activeTab === 'Finland' ? finlandSuccessImages : 
                                    activeTab === 'Sweden' ? swedenSuccessImages : 
                                    turkeySuccessImages;
                
                // Split images into 2 columns for mobile
                const splitIntoColumns = (array: string[], numColumns: number) => {
                  const columns = Array.from({ length: numColumns }, () => [] as string[]);
                  array.forEach((item, index) => {
                    columns[index % numColumns].push(item);
                  });
                  return columns;
                };
                
                const columns = splitIntoColumns(currentImages, 2);
                
                return columns.map((column, columnIndex) => (
                  <div key={`${activeTab}-column-mobile-${columnIndex}`} className="flex-1 overflow-hidden">
                    <motion.div
                      className="flex flex-col gap-4"
                      style={{ willChange: 'transform' }}
                      animate={{
                        y: [0, -(320 + 16) * column.length] // h-80 (320px) + gap-4 (16px)
                      }}
                      transition={{
                        duration: 12 + columnIndex * 2, // Much faster: 12, 14 seconds
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >
                      {/* Duplicate column for seamless loop */}
                      {[...column, ...column].map((image, index) => (
                        <div
                          key={`${activeTab}-mobile-${columnIndex}-${index}`}
                          className="group relative bg-white rounded-lg overflow-hidden shadow-lg border hover:shadow-xl transition-shadow duration-200"
                          style={{ willChange: 'transform' }}
                        >
                          <img
                            src={image}
                            alt={`${activeTab} visa success story ${(index % column.length) + 1}`}
                            className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-200"
                            loading="lazy"
                            decoding="async"
                            style={{ willChange: 'transform' }}
                          />
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <h3 className="text-lg font-semibold mb-1">{activeTab} Student Visa</h3>
                              <p className="text-sm text-gray-200">Successfully Approved</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                ));
              })()}
            </div>

            {/* Desktop: 3 columns */}
            <div className="hidden md:flex gap-4 h-[600px] relative">
              {/* Top fade overlay */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              
              {/* Bottom fade overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
              
              {(() => {
                // Get current tab images
                const currentImages = activeTab === 'UK' ? ukSuccessImages : 
                                    activeTab === 'Finland' ? finlandSuccessImages : 
                                    activeTab === 'Sweden' ? swedenSuccessImages : 
                                    turkeySuccessImages;
                
                // Split images into 3 columns for desktop
                const splitIntoColumns = (array: string[], numColumns: number) => {
                  const columns = Array.from({ length: numColumns }, () => [] as string[]);
                  array.forEach((item, index) => {
                    columns[index % numColumns].push(item);
                  });
                  return columns;
                };
                
                const columns = splitIntoColumns(currentImages, 3);
                
                return columns.map((column, columnIndex) => (
                  <div key={`${activeTab}-column-desktop-${columnIndex}`} className="flex-1 overflow-hidden">
                    <motion.div
                      className="flex flex-col gap-4"
                      style={{ willChange: 'transform' }}
                      animate={{
                        y: [0, -(320 + 16) * column.length] // h-80 (320px) + gap-4 (16px)
                      }}
                      transition={{
                        duration: 12 + columnIndex * 2, // Much faster: 12, 14, 16 seconds
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                      }}
                    >
                      {/* Duplicate column for seamless loop */}
                      {[...column, ...column].map((image, index) => (
                        <div
                          key={`${activeTab}-desktop-${columnIndex}-${index}`}
                          className="group relative bg-white rounded-lg overflow-hidden shadow-lg border hover:shadow-xl transition-shadow duration-200"
                          style={{ willChange: 'transform' }}
                        >
                          <img
                            src={image}
                            alt={`${activeTab} visa success story ${(index % column.length) + 1}`}
                            className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-200"
                            loading="lazy"
                            decoding="async"
                            style={{ willChange: 'transform' }}
                          />
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <h3 className="text-lg font-semibold mb-1">{activeTab} Student Visa</h3>
                              <p className="text-sm text-gray-200">Successfully Approved</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                ));
              })()}
            </div>
          </div>

          {/* Success Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0"
          >
            {(activeTab === 'UK' ? [
            ] : activeTab === 'Finland' ? [
              {
                icon: Trophy,
                title: "High Success Rate",
                description: "95% visa approval rate for Finland applications",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              },
              {
                icon: Star,
                title: "Scholarship Winners", 
                description: "Multiple students secured scholarships up to €6000",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              },
              {
                icon: GraduationCap,
                title: "Top Universities",
                description: "Admissions to leading Finnish institutions",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              }
            ] : activeTab === 'Sweden' ? [
              {
                icon: Trophy,
                title: "Lightning Fast Processing",
                description: "Sweden visas approved in 3-7 days with exceptional results",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              },
              {
                icon: Star,
                title: "Top Universities", 
                description: "Admissions to Halmstad University, Uppsala University & more",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              },
              {
                icon: GraduationCap,
                title: "Multiple Entry Visas",
                description: "Schengen multiple entry visas for enhanced mobility",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              }
            ] : [
              {
                icon: Trophy,
                title: "Outstanding Success Rate",
                description: "100% visa approval rate for Turkey applications",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              },
              {
                icon: Star,
                title: "Scholarship Excellence", 
                description: "Students secured scholarships up to 60% without IELTS",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              },
              {
                icon: GraduationCap,
                title: "Premier Universities",
                description: "Admissions to top Turkish universities like ISIK & Atlas",
                gradient: "from-[#1D50C9] to-[#1845B3]"
              }
            ]).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>




      <Footer />
    </div>
  );
}