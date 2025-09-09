import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X, ChevronDown, ArrowRight, Star, Globe, Users, BookOpen, Award, Phone, MapPin, Building2, MessageCircle, Calendar, Newspaper, PenTool, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
const dunyaConsultantsLogoWhiteHeader = "https://dunyaconsultants.com/assets/DC%20White%20Logo_1751441165041-BqFe8mYE.webp";
import logoImageBlue from "@assets/Logo BLue_1754907499757.png";
import ConsultationBooking from "@/components/ConsultationBooking";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [location, setLocation] = useLocation();

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

  const handleHomeClick = (e: React.MouseEvent) => {
    // If already on homepage, scroll to top instead of navigating
    if (location === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
    // Otherwise, let the Link handle navigation normally
  };

  const megaMenuData = {
    "About Us": {
      icon: Users,
      sections: [
        {
          title: "Company",
          icon: Users,
          items: [
            { name: "Who We Are", href: "/about/", description: "Meet our dedicated team" },
            { name: "Team Dunya Consultants", href: "/about/team", description: "Our expert team members" }
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
      ],
      featured: {
        title: "More Than 5 Years of Excellence",
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
            { name: "All Office Locations", href: "/offices", description: "View all 20+ office locations nationwide & internationally" }
          ]
        }
      ],
      featured: {
        title: "20+ Office Locations",
        description: "Nationwide & international coverage",
        cta: "Find Office",
        href: "/offices"
      }
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", megaMenu: true },
    { name: "Study Abroad", megaMenu: true },
    { name: "Test Prep", megaMenu: true },
    { name: "Offices", megaMenu: true },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20" 
        : "bg-gradient-to-r from-[#1D50C9]/20 via-[#1D50C9]/20 to-[#1D50C9]/20 backdrop-blur-md border-b border-white/10"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center h-20 py-4">
          {/* Logo - Extreme Left */}
          <motion.div 
            className="flex items-center mr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Link href="/" onClick={handleHomeClick}>
                  <img 
                    src={isScrolled ? logoImageBlue : dunyaConsultantsLogoWhiteHeader} 
                    alt="Dunya Consultants Logo" 
                    className="h-10 w-auto transition-all duration-500 drop-shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  />
                </Link>
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
                    <Link href={item.href} onClick={item.name === "Home" ? handleHomeClick : undefined}>
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
          
          {/* Free Consultation Button - Right Side */}
          <div className="hidden lg:flex items-center ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="sm"
                  className={`${
                    !isScrolled 
                      ? 'bg-white text-[#1D50C9] hover:bg-blue-50' 
                      : 'bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white hover:from-[#1845B3] hover:to-[#1D50C9]'
                  } font-semibold px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md bg-white">
                <ConsultationBooking country="Pakistan">
                  <div></div>
                </ConsultationBooking>
              </DialogContent>
            </Dialog>
          </div>

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
              } transition-all duration-200`}
              style={{ willChange: 'transform' }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
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
                    (<div className="space-y-3">
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
                    </div>)
                  ) : activeMegaMenu === "Test Prep" ? (
                    // Special layout for Test Prep with 2-column tests
                    (<div className="space-y-3">
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
                    </div>)
                  ) : activeMegaMenu === "Offices" ? (
                    // Special layout for Offices with 2-column offices
                    (<div className="space-y-3">
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
                    </div>)
                  ) : (
                    // Default layout for other menus
                    (<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>)
                  )}
                </div>

                {/* Featured Section */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-[#1D50C9] via-[#1a73e8] to-[#1a73e8] rounded-xl p-5 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1D50C9]/30 to-[#1845B3]/30"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                        {React.createElement(megaMenuData[activeMegaMenu as keyof typeof megaMenuData].icon, { 
                          className: "w-6 h-6 text-white" 
                        })}
                      </div>
                      <h3 className="text-lg font-bold mb-2 mega-menu-title">
                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.title}
                      </h3>
                      <p className="mb-3 text-sm mega-menu-description">
                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.description}
                      </p>
                      <Link href={megaMenuData[activeMegaMenu as keyof typeof megaMenuData].featured.href}>
                        <button className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium mega-menu-button">
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
                        <span>20+ Offices Nationwide</span>
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
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ 
              duration: 0.2, 
              ease: [0.4, 0.0, 0.2, 1],
              type: "tween"
            }}
            className={`lg:hidden overflow-hidden ${
              !isScrolled 
                ? 'bg-white/95 backdrop-blur-md border-t border-white/20' 
                : 'bg-white border-t border-neutral-200'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto" style={{ willChange: 'scroll-position' }}>
              {navItems.map((item) => (
                <div key={item.name || item.href}>
                  {item.megaMenu ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.name ? null : item.name)}
                        className="w-full text-neutral-800 font-semibold py-2 px-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          expandedMobileMenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {/* Mobile mega menu items */}
                      {item.name === "About Us" && expandedMobileMenu === item.name && (
                        <div className="pl-4 space-y-2">
                          <Link href="/about/">
                            <button
                              onClick={() => setIsOpen(false)}
                              className="block w-full text-left text-sm text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                            >
                              Who We Are
                            </button>
                          </Link>
                          <Link href="/about/mission-vision">
                            <button
                              onClick={() => setIsOpen(false)}
                              className="block w-full text-left text-sm text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                            >
                              Mission & Vision
                            </button>
                          </Link>
                          <Link href="/about/team">
                            <button
                              onClick={() => setIsOpen(false)}
                              className="block w-full text-left text-sm text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                            >
                              Team Dunya Consultants
                            </button>
                          </Link>
                          <Link href="/about/our-success-stories">
                            <button
                              onClick={() => setIsOpen(false)}
                              className="block w-full text-left text-sm text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                            >
                              Our Success Stories
                            </button>
                          </Link>
                        </div>
                      )}
                      {item.name === "Study Abroad" && expandedMobileMenu === item.name && (
                        <div className="pl-4 space-y-2">
                          {["USA", "UK", "Canada", "Finland", "Australia", "Belgium", "Turkey"].map((country) => (
                            <Link key={country} href={`/study-abroad/${country.toLowerCase()}`}>
                              <button
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-left text-sm text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                              >
                                {country}
                              </button>
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.name === "Test Prep" && expandedMobileMenu === item.name && (
                        <div className="pl-4 space-y-2">
                          {["IELTS", "PTE", "TOEFL", "Duolingo"].map((test) => (
                            <Link key={test} href={`/test-prep/${test.toLowerCase()}`}>
                              <button
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-left text-sm text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                              >
                                {test}
                              </button>
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.name === "Offices" && expandedMobileMenu === item.name && (
                        <div className="pl-4 space-y-2">
                          <Link href="/offices">
                            <button
                              onClick={() => setIsOpen(false)}
                              className="block w-full text-left text-sm text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                            >
                              All Office Locations
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : item.href ? (
                    <Link href={item.href} onClick={item.name === "Home" ? handleHomeClick : undefined}>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-left text-neutral-800 hover:text-primary transition-colors duration-200 font-semibold py-3 px-3 rounded-lg hover:bg-gray-50"
                      >
                        {item.name}
                      </button>
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
