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
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Solutions", id: "audience" },
    { 
      name: "IELTS", 
      href: "/ielts",
      submenu: [
        { name: "IELTS Overview", href: "/ielts" },
        { name: "What to Expect on Exam Day", href: "/ielts/exam-day" }
      ]
    },
    { name: "Process", id: "process" },
    { name: "Locations", id: "locations" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Events", href: "/events" },
    { name: "Blogs", href: "/blogs" },
    { 
      name: "Country Guide", 
      href: "/country-guide",
      submenu: [
        { name: "Country Guide Overview", href: "/country-guide" },
        { name: "Study in USA", href: "/country-guide/usa" },
        { name: "Study in UK", href: "/country-guide/uk" },
        { name: "Study in Canada", href: "/country-guide/canada" },
        { name: "Study in Australia", href: "/country-guide/australia" }
      ]
    },
    { name: "Cost Calculator", href: "/cost-calculator" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-lg" 
        : isHeroSection
        ? "bg-white/10 backdrop-blur-sm"
        : "bg-white/95 backdrop-blur-sm shadow-lg"
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
                  className={`h-10 w-auto transition-all duration-300 ${
                    isHeroSection && !isScrolled 
                      ? 'brightness-0 invert' 
                      : ''
                  }`}
                />
              </div>
              <div className="hidden sm:block">
                <div className={`text-xl font-bold transition-colors duration-300 ${
                  isHeroSection && !isScrolled ? 'text-white' : 'text-neutral-800'
                }`}>Dunya</div>
                <div className={`text-xs transition-colors duration-300 -mt-1 ${
                  isHeroSection && !isScrolled ? 'text-white/90' : 'text-neutral-600'
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
                      isHeroSection && !isScrolled 
                        ? 'text-white hover:text-white/80' 
                        : 'text-neutral-800 hover:text-primary'
                    } transition-colors duration-200 font-medium flex items-center space-x-1`}>
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
                      isHeroSection && !isScrolled 
                        ? 'text-white hover:text-white/80' 
                        : 'text-neutral-800 hover:text-primary'
                    } transition-colors duration-200 font-medium`}>
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
                  isHeroSection && !isScrolled
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
                    : 'bg-primary hover:bg-blue-700 text-white'
                } transition-all duration-300`}
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
                isHeroSection && !isScrolled 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-neutral-800 hover:text-primary'
              } transition-colors duration-300`}
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
            className="md:hidden bg-white border-t border-neutral-200"
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
