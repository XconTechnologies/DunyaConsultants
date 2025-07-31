import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, Star, Globe, Users, BookOpen, Award, Phone, MapPin, Building2, MessageCircle, Calendar, Newspaper, PenTool, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import logoImage from "@assets/DC White Logo_1751441165041.png";
import logoImageBlue from "@assets/DC Blue Logo_1751440868138.png";
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
            { name: "Our Story", href: "/about/story", description: "Learn about our journey and mission" },
            { name: "Who We Are", href: "/about/who-we-are", description: "Meet our dedicated team" },
            { name: "Mission & Vision", href: "/about/mission-vision", description: "Our goals and values" }
          ]
        },
        {
          title: "Why Choose Us",
          icon: Star,
          items: [
            { name: "Success Stories", href: "/about/success-stories", description: "Student achievements" },
            { name: "Why Choose Us", href: "/about/why-choose-us", description: "Our unique advantages" },
            { name: "Leadership & Team", href: "/about/team", description: "Expert counselors" }
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
        {
          title: "Preparation Support",
          icon: BookOpen,
          items: [
            { name: "Spoken English", href: "/test-prep/spoken-english", description: "Improve speaking skills" },
            { name: "Interview Prep", href: "/test-prep/interview", description: "Visa interview coaching" }
          ]
        }
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
          title: "Pakistan Offices",
          icon: MapPin,
          items: [
            { name: "All Office Locations", href: "/offices", description: "Browse all branches" },
            { name: "Sargodha Head Office", href: "/offices/sargodha-head", description: "Main headquarters" },
            { name: "Lahore DHA", href: "/offices/lahore-dha", description: "DHA Phase 1 office" },
            { name: "Islamabad Blue Area", href: "/offices/islamabad", description: "Federal capital office" },
            { name: "Karachi Gulshan", href: "/offices/karachi", description: "Sindh province office" },
            { name: "Faisalabad Civil Lines", href: "/offices/faisalabad", description: "Industrial city office" }
          ]
        },
        {
          title: "Office Services",
          icon: Globe,
          items: [
            { name: "Book Consultation", href: "/consultation-booking", description: "Schedule your visit" },
            { name: "Contact Details", href: "/offices", description: "Phone & addresses" },
            { name: "Office Hours", href: "/offices", description: "Mon-Sat: 9 AM-7 PM" }
          ]
        },
        {
          title: "Services",
          icon: Calendar,
          items: [
            { name: "Appointment Booking", href: "/offices/booking", description: "Schedule your consultation" },
            { name: "Office Timings", href: "/offices/hours", description: "Mon-Sat: 10 AM-6 PM" },
            { name: "Google Maps", href: "/offices/maps", description: "Directions & locations" }
          ]
        }
      ],
      featured: {
        title: "20+ Office Locations",
        description: "Nationwide coverage across Pakistan",
        cta: "Find Office",
        href: "/offices"
      }
    },
    "Blog": {
      icon: Newspaper,
      sections: [
        {
          title: "Study Abroad",
          icon: Globe,
          items: [
            { name: "Blog Archive", href: "/blog", description: "Browse all our blog articles" },
            { name: "Top Study Abroad Countries", href: "/blog/top-study-abroad-countries", description: "Best destinations for international students" },
            { name: "Global Talent Visa Australia", href: "/blog/global-talent-visa-australia", description: "Complete guide to Australian visa" },
            { name: "Study Nursing in the UK", href: "/blog/study-nursing-uk", description: "Healthcare education opportunities" }
          ]
        },
        {
          title: "Test Preparation",
          icon: Award,
          items: [
            { name: "Kaplan Test of English", href: "/blog/kaplan-test-of-english", description: "Complete KTE guide & tips" },
            { name: "IELTS Preparation Tips", href: "/blog/ielts-preparation-tips", description: "Top 10 tips for high band score" },
            { name: "How to Improve IELTS Listening", href: "/blog/improve-ielts-listening", description: "Listening skills enhancement" }
          ]
        },
        {
          title: "Student Stories",
          icon: Heart,
          items: [
            { name: "Student Experiences", href: "/blog/experiences", description: "Success stories & journeys" },
            { name: "University Reviews", href: "/blog/reviews", description: "Campus life & academics" },
            { name: "Career Outcomes", href: "/blog/careers", description: "Post-graduation success" }
          ]
        }
      ],
      featured: {
        title: "Latest Updates",
        description: "Stay informed about study abroad",
        cta: "View Archive",
        href: "/blog"
      }
    },

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
        : "bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 backdrop-blur-md border-b border-white/10"
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
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md border border-blue-600'
              } transition-all duration-300 font-semibold px-6 py-2`}
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
        {activeMegaMenu && megaMenuData[activeMegaMenu] && (
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {megaMenuData[activeMegaMenu].sections.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            {React.createElement(section.icon, { 
                              className: "w-4 h-4 text-white" 
                            })}
                          </div>
                          <h3 className="text-lg font-bold text-neutral-800">{section.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {section.items.map((item, itemIdx) => (
                            <Link key={itemIdx} href={item.href}>
                              <div className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200">
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
                </div>

                {/* Featured Section */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-xl p-5 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                        {React.createElement(megaMenuData[activeMegaMenu].icon, { 
                          className: "w-6 h-6 text-white" 
                        })}
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {megaMenuData[activeMegaMenu].featured.title}
                      </h3>
                      <p className="text-white/90 mb-3 text-sm">
                        {megaMenuData[activeMegaMenu].featured.description}
                      </p>
                      <Link href={megaMenuData[activeMegaMenu].featured.href}>
                        <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium">
                          {megaMenuData[activeMegaMenu].featured.cta} →
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
                  {item.submenu ? (
                    <div className="space-y-2">
                      <div className="text-neutral-800 font-medium py-2 border-b border-gray-100">
                        {item.name}
                      </div>
                      {item.submenu.map((subItem) => (
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
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
