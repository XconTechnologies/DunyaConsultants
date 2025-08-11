import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, Star, Globe, Users, BookOpen, Award, Phone, MapPin, Building2, MessageCircle, Calendar, Newspaper, PenTool, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import logoImage from "@assets/DC White Logo_1751441165041.png";
import logoImageBlue from "@assets/Logo BLue_1754907499757.png";
import SimpleConsultationPopup from "@/components/simple-consultation-popup";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [showConsultationPopup, setShowConsultationPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setIsHeroSection(scrollPosition < window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const megaMenuData = {
    "About Us": {
      icon: Users,
      sections: [
        {
          title: "Company",
          icon: Users,
          items: [
            { name: "Who We Are", href: "/about/who-we-are", description: "Meet our dedicated team" },
            { name: "Mission & Vision", href: "/about/mission-vision", description: "Our goals and values" }
          ]
        },
        {
          title: "Why Choose Us",
          icon: Star,
          items: [
            { name: "Our Success Stories", href: "/about/our-success-stories", description: "Student achievements" },
            { name: "Why Choose Us", href: "/about/why-choose-us", description: "Our unique advantages" }
          ]
        },
        {
          title: "Resources",
          icon: BookOpen,
          items: [
            { name: "Blog", href: "/blog", description: "Latest updates and guides" }
          ]
        }
      ],
      featured: {
        title: "17+ Years of Excellence",
        description: "Trusted by thousands of students worldwide",
        cta: "Learn More",
        href: "/about"
      }
    },
    "Study Abroad": {
      icon: Globe,
      sections: [
        {
          title: "Popular Destinations",
          icon: Globe,
          items: [
            { name: "USA", href: "/study-abroad/usa", description: "World's top universities & opportunities" },
            { name: "UK", href: "/study-abroad/uk", description: "Quality education & rich culture" },
            { name: "Canada", href: "/study-abroad/canada", description: "Affordable & immigration-friendly" },
            { name: "Finland", href: "/study-abroad/finland", description: "Free education & innovation hub" },
            { name: "Australia", href: "/study-abroad/australia", description: "High quality of life & education" },
            { name: "Belgium", href: "/study-abroad/belgium", description: "European excellence & diversity" },
            { name: "Turkey", href: "/study-abroad/turkey", description: "Cultural bridge & affordable education" }
          ]
        }
      ],
      featured: {
        title: "Free Country Consultation",
        description: "Get personalized study abroad guidance",
        cta: "Book Now",
        href: "/consultation"
      }
    },

    "Test Prep": {
      icon: Award,
      sections: [
        {
          title: "English Tests",
          icon: Award,
          items: [
            { name: "IELTS", href: "/test-prep/ielts", description: "Most accepted English test" },
            { name: "PTE", href: "/test-prep/pte", description: "Computer-based English test" },
            { name: "TOEFL", href: "/test-prep/toefl", description: "Academic English assessment" },
            { name: "Duolingo", href: "/test-prep/duolingo", description: "Online English proficiency" }
          ]
        },

      ],
      featured: {
        title: "Free Mock Tests",
        description: "Practice with real exam format",
        cta: "Start Practice",
        href: "/test-prep"
      }
    },
    "Offices": {
      icon: Building2,
      sections: [
        {
          title: "All Locations",
          icon: MapPin,
          items: [
            { name: "All Office Locations", href: "/offices", description: "View all 18+ office locations nationwide & internationally" }
          ]
        }
      ],
      featured: {
        title: "18+ Office Locations",
        description: "Nationwide & international coverage",
        cta: "Find Office",
        href: "/offices"
      }
    },
    "Blog": {
      icon: Newspaper,
      sections: [
        {
          title: "Latest Articles",
          icon: Newspaper,
          items: [
            { name: "All Blog Posts", href: "/blog", description: "Latest updates and guides" },
            { name: "Study Abroad Tips", href: "/blog", description: "Expert guidance for studying abroad" },
            { name: "Visa Guides", href: "/blog", description: "Step-by-step visa application help" }
          ]
        }
      ],
      featured: {
        title: "Latest Insights",
        description: "Expert guidance and tips",
        cta: "Read More",
        href: "/blog"
      }
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", megaMenu: true },
    { name: "Study Abroad", megaMenu: true },
    { name: "Test Prep", megaMenu: true },
    { name: "Offices", megaMenu: true },
    { name: "Blog", megaMenu: true },
  ];

  return (
    <nav className={`fixed w-full top-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20" 
        : "bg-gradient-to-r from-#1e3a8a/20 via-#1e3a8a/20 to-#1e3a8a/20 backdrop-blur-md border-b border-white/10"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center h-16 py-2">
          {/* Logo - Extreme Left */}
          <motion.div 
            className="flex items-center mr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={isScrolled ? logoImageBlue : logoImage} 
                  alt="Dunya Consultants Logo" 
                  className="h-8 w-auto transition-all duration-500 drop-shadow-lg"
                />
              </div>
              
            </div>
          </motion.div>
          
          {/* Navigation Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.name)}
                  onMouseLeave={() => item.megaMenu && setActiveMegaMenu(null)}
                >
                  {item.megaMenu ? (
                    <button className={`${
                      !isScrolled 
                        ? 'text-white drop-shadow-md hover:text-white/90' 
                        : 'text-neutral-700 hover:text-primary'
                    } transition-all duration-300 font-medium flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10 text-xs`}>
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ml-1 ${
                        activeMegaMenu === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : item.href ? (
                    <Link href={item.href}>
                      <span className={`${
                        !isScrolled 
                          ? 'text-white drop-shadow-md hover:text-white/90' 
                          : 'text-neutral-700 hover:text-primary'
                      } transition-all duration-300 font-medium px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10 text-xs block`}>
                        {item.name}
                      </span>
                    </Link>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CTA Button - Right Side */}
          <motion.div
            className="hidden lg:block ml-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              onClick={() => setShowConsultationPopup(true)}
              className={`${
                !isScrolled
                  ? 'bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 hover:border-white/60 shadow-lg'
                  : 'text-white shadow-md transition-all duration-300'
              } font-semibold px-6 py-2`}
              style={isScrolled ? { 
                backgroundColor: '#1D50C9', 
                borderColor: '#1D50C9'
              } : {}}
              onMouseEnter={isScrolled ? (e) => e.currentTarget.style.backgroundColor = '#1845B3' : undefined}
              onMouseLeave={isScrolled ? (e) => e.currentTarget.style.backgroundColor = '#1D50C9' : undefined}
            >
              Free Consultation
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                !isScrolled 
                  ? 'text-white hover:bg-white/20 drop-shadow-md' 
                  : 'text-neutral-800 hover:text-primary hover:bg-primary/5'
              } transition-all duration-300`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {activeMegaMenu && megaMenuData[activeMegaMenu as keyof typeof megaMenuData] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-neutral-100 z-40"
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="max-w-6xl mx-auto px-6 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Menu Sections */}
                <div className="lg:col-span-3">
                  {activeMegaMenu === "Study Abroad" ? (
                    // Special layout for Study Abroad with 2-column countries
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-lg flex items-center justify-center">
                          {React.createElement(Globe, { 
                            className: "w-4 h-4 text-white" 
                          })}
                        </div>
                        <h3 className="text-lg font-bold text-neutral-800">Popular Destinations</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {megaMenuData["Study Abroad"].sections[0].items.map((item: any, itemIdx: number) => (
                          <Link key={itemIdx} href={item.href}>
                            <div className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200">
                              <ArrowRight className="w-4 h-4 text-primary mt-0.5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-neutral-800 group-hover:text-primary transition-colors duration-200">
                                  {item.name}
                                </div>
                                <div className="text-sm text-neutral-600 mt-1">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : activeMegaMenu === "Test Prep" ? (
                    // Special layout for Test Prep with 2-column tests
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-lg flex items-center justify-center">
                          {React.createElement(Award, { 
                            className: "w-4 h-4 text-white" 
                          })}
                        </div>
                        <h3 className="text-lg font-bold text-neutral-800">English Tests</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {megaMenuData["Test Prep"].sections[0].items.map((item: any, itemIdx: number) => (
                          <Link key={itemIdx} href={item.href}>
                            <div className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200">
                              <ArrowRight className="w-4 h-4 text-primary mt-0.5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-neutral-800 group-hover:text-primary transition-colors duration-200">
                                  {item.name}
                                </div>
                                <div className="text-sm text-neutral-600 mt-1">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : activeMegaMenu === "Offices" ? (
                    // Special layout for Offices with 2-column offices
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-lg flex items-center justify-center">
                          {React.createElement(MapPin, { 
                            className: "w-4 h-4 text-white" 
                          })}
                        </div>
                        <h3 className="text-lg font-bold text-neutral-800">Pakistan Offices</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {megaMenuData["Offices"].sections[0].items.map((item: any, itemIdx: number) => (
                          <Link key={itemIdx} href={item.href}>
                            <div className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200">
                              <ArrowRight className="w-4 h-4 text-primary mt-0.5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-neutral-800 group-hover:text-primary transition-colors duration-200">
                                  {item.name}
                                </div>
                                <div className="text-sm text-neutral-600 mt-1">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : activeMegaMenu === "Blog" ? (
                    // Special layout for Blog with 2-column items (flattened from all sections)
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-lg flex items-center justify-center">
                          {React.createElement(Newspaper, { 
                            className: "w-4 h-4 text-white" 
                          })}
                        </div>
                        <h3 className="text-lg font-bold text-neutral-800">Blog Articles</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {/* Flatten all blog items from all sections into 2 columns */}
                        {megaMenuData["Blog"].sections.flatMap((section: any) => section.items).map((item: any, itemIdx: number) => (
                          <Link key={itemIdx} href={item.href}>
                            <div className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200">
                              <ArrowRight className="w-4 h-4 text-primary mt-0.5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-neutral-800 group-hover:text-primary transition-colors duration-200">
                                  {item.name}
                                </div>
                                <div className="text-sm text-neutral-600 mt-1">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Default layout for other menus
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].sections.map((section: any, idx: number) => (
                        <div key={idx} className="space-y-3">
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#1D50C9] to-[#1845B3] rounded-lg flex items-center justify-center">
                              {React.createElement(section.icon, { 
                                className: "w-4 h-4 text-white" 
                              })}
                            </div>
                            <h3 className="text-lg font-bold text-neutral-800">{section.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {section.items.map((item: any, itemIdx: number) => (
                              <Link key={itemIdx} href={item.href}>
                                <div className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200">
                                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                                  <div>
                                    <div className="font-medium text-neutral-800 group-hover:text-primary transition-colors duration-200">
                                      {item.name}
                                    </div>
                                    <div className="text-sm text-neutral-600 mt-1">
                                      {item.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Featured Section */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-[#1D50C9] via-#1a73e8 to-[#1a73e8] rounded-xl p-5 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9]/30 to-[#1845B3]/30"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                        {React.createElement(megaMenuData[activeMegaMenu as keyof typeof megaMenuData].icon, { 
                          className: "w-6 h-6 text-white" 
                        })}
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.title}
                      </h3>
                      <p className="text-white/90 mb-3 text-sm">
                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.description}
                      </p>
                      <Link href={megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.href}>
                        <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium">
                          {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.cta} →
                        </button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Quick Contact */}
                  <div className="mt-4 p-3 bg-neutral-50 rounded-lg">
                    <h4 className="font-semibold text-neutral-800 mb-3 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Need Help?
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-neutral-600">
                        <Phone className="w-3 h-3" />
                        <span>+92 304 1110947</span>
                      </div>
                      <div className="flex items-center space-x-2 text-neutral-600">
                        <MapPin className="w-3 h-3" />
                        <span>17+ Offices Nationwide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden transition-all duration-300 ${
              !isScrolled 
                ? 'bg-white/95 backdrop-blur-md border-t border-white/20' 
                : 'bg-white border-t border-neutral-200'
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name || item.href}>
                  {(item as any).submenu ? (
                    <div className="space-y-2">
                      <div className="text-neutral-800 font-medium py-2 border-b border-gray-100">
                        {item.name}
                      </div>
                      {(item as any).submenu.map((subItem: any) => (
                        <Link key={subItem.name} href={subItem.href}>
                          <button
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-left pl-4 text-sm text-neutral-600 hover:text-primary transition-colors duration-200 py-1"
                          >
                            {subItem.name}
                          </button>
                        </Link>
                      ))}
                    </div>
                  ) : item.href ? (
                    <Link href={item.href}>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left text-neutral-800 hover:text-primary transition-colors duration-200 font-medium py-2"
                      >
                        {item.name}
                      </button>
                    </Link>
                  ) : null}
                </div>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <Button 
                  onClick={() => {
                    setShowConsultationPopup(true);
                    setIsOpen(false);
                  }}
                  className="w-full #1845B3 hover:bg-#1a73e8 text-white font-semibold"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Popup */}
      <SimpleConsultationPopup 
        isOpen={showConsultationPopup} 
        onClose={() => setShowConsultationPopup(false)} 
      />
    </nav>
  );
}
