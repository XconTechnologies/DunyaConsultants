import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, MapPin, Compass, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D50C9] via-[#1845B3] to-[#0F3A8A] text-white overflow-hidden relative">
      <Navigation />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-16 w-24 h-24 bg-white/5 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/8 rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-40 h-40 bg-white/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-4">
          
          {/* 404 Number with Creative Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="relative">
              <motion.h1 
                className="text-[12rem] md:text-[16rem] font-black text-white/20 leading-none select-none"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 40px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                404
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Compass className="w-32 h-32 text-white/40" />
              </motion.div>
            </div>
          </motion.div>

          {/* Creative Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Oops! Lost in Space?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-2xl mx-auto">
              It seems like you've ventured into uncharted territory. 
              Don't worry, even the best explorers sometimes take a wrong turn!
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <Star className="w-5 h-5" />
              <span className="text-lg">Let's get you back on track to your study abroad dreams</span>
              <Star className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-[#1D50C9] hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-2xl"
                >
                  <Home className="w-6 h-6 mr-3" />
                  Return Home
                </Button>
              </motion.div>
            </Link>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.history.back()}
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              >
                <ArrowLeft className="w-6 h-6 mr-3" />
                Go Back
              </Button>
            </motion.div>

            <Link href="/offices">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
                >
                  <MapPin className="w-6 h-6 mr-3" />
                  Find Offices
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-16"
          >
            <p className="text-blue-200 mb-6 text-lg">Or explore these popular destinations:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { name: "Study Abroad", href: "/study-abroad/usa" },
                { name: "Test Preparation", href: "/test-prep/ielts" },
                { name: "About Us", href: "/about/" },
                { name: "Contact", href: "/contact" },
                { name: "Blog", href: "/blog" }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.4 }}
                >
                  <Link href={link.href}>
                    <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
                      <Search className="w-4 h-4 mr-2" />
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}