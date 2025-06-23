import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@assets/Asset-1_1750664385021.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

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

  const navItems = [
    { name: "Home", href: "/" },
    { 
      name: "About Us", 
      submenu: [
        { name: "Our Story", href: "/about/story" },
        { name: "Who We Are", href: "/about/who-we-are" },
        { name: "Mission & Vision", href: "/about/mission-vision" },
        { name: "Leadership & Team", href: "/about/team" },
        { name: "Success Stories", href: "/about/success-stories" },
        { name: "Why Choose Us", href: "/about/why-choose-us" }
      ]
    },
    { 
      name: "Country Guide", 
      submenu: [
        { name: "Study in Canada", href: "/country-guide/canada" },
        { name: "Study in UK", href: "/country-guide/uk" },
        { name: "Study in Australia", href: "/country-guide/australia" },
        { name: "Study in USA", href: "/country-guide/usa" },
        { name: "Study in Europe", href: "/country-guide/europe" },
        { name: "Study in Turkey", href: "/country-guide/turkey" },
        { name: "University Selection", href: "/services/university-selection" },
        { name: "Course & Career Counselling", href: "/services/counselling" },
        { name: "Application Assistance", href: "/services/applications" },
        { name: "Scholarship Guidance", href: "/services/scholarships" },
        { name: "Visa Processing", href: "/services/visa" }
      ]
    },
    { 
      name: "Test Preparation", 
      submenu: [
        { name: "IELTS", href: "/test-prep/ielts" },
        { name: "PTE", href: "/test-prep/pte" },
        { name: "TOEFL", href: "/test-prep/toefl" },
        { name: "Duolingo", href: "/test-prep/duolingo" },
        { name: "Spoken English & Interview Prep", href: "/test-prep/spoken-english" }
      ]
    },
    { 
      name: "Offices", 
      submenu: [
        { name: "Find a Branch", href: "/offices/branches" },
        { name: "Contact Details", href: "/offices/contact" },
        { name: "Appointment Booking", href: "/offices/booking" }
      ]
    },
    { 
      name: "Blog", 
      submenu: [
        { name: "Study Abroad Tips", href: "/blog/tips" },
        { name: "Country Guides", href: "/blog/country-guides" },
        { name: "Student Experiences", href: "/blog/experiences" }
      ]
    },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20" 
        : "bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 backdrop-blur-md border-b border-white/10"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Dunya Consultants Logo" 
                  className={`h-10 w-auto transition-all duration-500 ${
                    !isScrolled 
                      ? 'brightness-0 invert drop-shadow-lg' 
                      : ''
                  }`}
                />
              </div>
              <div className="hidden sm:block">
                <div className={`text-xl font-bold transition-colors duration-500 ${
                  !isScrolled ? 'text-white drop-shadow-lg' : 'text-neutral-800'
                }`}>Dunya</div>
                <div className={`text-xs transition-colors duration-500 -mt-1 ${
                  !isScrolled ? 'text-white/90 drop-shadow-md' : 'text-neutral-600'
                }`}>Consultants</div>
              </div>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id || item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className={`${
                      !isScrolled 
                        ? 'text-white drop-shadow-md hover:text-white/80 hover:bg-white/10' 
                        : 'text-neutral-800 hover:text-primary hover:bg-primary/5'
                    } transition-all duration-300 font-medium flex items-center space-x-1 px-3 py-2 rounded-lg`}>
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link href={subItem.href}>
                            <span className="w-full cursor-pointer">{subItem.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : item.href ? (
                  <Link href={item.href}>
                    <button className={`${
                      !isScrolled 
                        ? 'text-white drop-shadow-md hover:text-white/80 hover:bg-white/10' 
                        : 'text-neutral-800 hover:text-primary hover:bg-primary/5'
                    } transition-all duration-300 font-medium px-3 py-2 rounded-lg`}>
                      {item.name}
                    </button>
                  </Link>
                ) : null}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                onClick={() => scrollToSection("contact")}
                className={`${
                  !isScrolled
                    ? 'bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 hover:border-white/60 shadow-lg'
                    : 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md'
                } transition-all duration-300 font-semibold`}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden transition-all duration-300 ${
              !isScrolled 
                ? 'bg-white/95 backdrop-blur-md border-t border-white/20' 
                : 'bg-white border-t border-neutral-200'
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.id || item.href}>
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
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary hover:bg-blue-700 text-white"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
