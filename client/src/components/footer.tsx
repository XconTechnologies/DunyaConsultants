import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "@assets/Asset-1_1750413567978.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Visa Applications", href: "#" },
        { name: "University Selection", href: "#" },
        { name: "Language Training", href: "#" },
        { name: "Financial Planning", href: "#" }
      ]
    },
    {
      title: "Destinations",
      links: [
        { name: "United States", href: "#" },
        { name: "Canada", href: "#" },
        { name: "United Kingdom", href: "#" },
        { name: "Australia", href: "#" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "About Us", action: () => scrollToSection("about") },
        { name: "Contact", action: () => scrollToSection("contact") },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" }
  ];

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center">
              <img 
                src={logoImage} 
                alt="Path Visa Consultants Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-neutral-400 mb-4">
              Your trusted partner in achieving international education dreams.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-neutral-400">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="hover:text-white transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Path Visa Consultants. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
