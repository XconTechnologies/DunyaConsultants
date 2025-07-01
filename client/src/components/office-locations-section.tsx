import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Clock, ArrowLeft, ArrowRight, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Office {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  gradient: string;
  isHeadOffice?: boolean;
  region: string;
  services: string[];
}

const offices: Office[] = [
  {
    id: "sargodha",
    city: "Sargodha",
    name: "Head Office",
    address: "Alif Tower, Bahadur Shah Zafar Road, Sargodha",
    phone: "+92 323‑251‑6319",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-blue-600 to-purple-600",
    isHeadOffice: true,
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "IELTS Training", "Career Counseling"]
  },
  {
    id: "lahore-dha",
    city: "Lahore",
    name: "DHA Phase 1",
    address: "1st Floor, 174 6th Street 123, Sector H, DHA Phase 1, Lahore",
    phone: "+92 300‑167‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-green-600 to-teal-600",
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "Document Verification"]
  },
  {
    id: "lahore-johar",
    city: "Lahore",
    name: "Johar Town",
    address: "1st Floor, 85 /R‑1, Phase 2, Johar Town, Lahore",
    phone: "+92 300‑827‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-orange-600 to-red-600",
    region: "Punjab",
    services: ["Student Counseling", "Test Preparation", "Career Guidance"]
  },
  {
    id: "islamabad",
    city: "Islamabad",
    name: "Blue Area",
    address: "Mezzanine‑3, ATS Centre, Fazal‑e‑Haq Road, Blue Area, Islamabad",
    phone: "+92 333‑777‑5458",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-indigo-600 to-blue-600",
    region: "Federal",
    services: ["Visa Processing", "Embassy Relations", "Document Attestation"]
  },
  {
    id: "karachi",
    city: "Karachi",
    name: "DHA Phase",
    address: "05‑C Prime Point Building, Main 2, Khayaban‑e‑Ittehad Road, DHA, Karachi",
    phone: "+92 332‑364‑3373",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-cyan-600 to-blue-600",
    region: "Sindh",
    services: ["Visa Processing", "University Applications", "Financial Guidance"]
  },
  {
    id: "faisalabad",
    city: "Faisalabad",
    name: "Koh‑i‑Noor City",
    address: "Mezzanine Floor, Centre Point Plaza, Koh‑i‑Noor City, Jaranwala Road, Faisalabad",
    phone: "+92 332‑662‑8487",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-purple-600 to-pink-600",
    region: "Punjab",
    services: ["Student Counseling", "Test Preparation", "Scholarship Guidance"]
  },
  {
    id: "gujranwala",
    city: "Gujranwala",
    name: "Peoples Colony",
    address: "Dunya Consultants, Peoples Colony Underpass, Gujranwala",
    phone: "+92 332‑999‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    id: "sialkot",
    city: "Sialkot",
    name: "Cantonment",
    address: "2nd Floor, Bank Islami, Cantt Plaza, Sialkot Cantonment",
    phone: "+92 323‑002‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-emerald-600 to-green-600",
    region: "Punjab",
    services: ["Student Counseling", "Visa Processing", "Document Verification"]
  },
  {
    id: "gujrat",
    city: "Gujrat",
    name: "GT Road",
    address: "Beside KFC, Service Morh Road, GT Road, Gujrat",
    phone: "+92 300‑105‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-rose-600 to-pink-600",
    region: "Punjab",
    services: ["University Applications", "IELTS Training", "Career Counseling"]
  },
  {
    id: "bahawalpur",
    city: "Bahawalpur",
    name: "Muslim Town",
    address: "Rafi Qamar Road, near Muslim Town, Goth Muslim Town, Bahawalpur",
    phone: "+92 300‑173‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-violet-600 to-purple-600",
    region: "Punjab",
    services: ["Visa Processing", "Test Preparation", "Document Preparation"]
  },
  {
    id: "mian-channu",
    city: "Mian Channu",
    name: "Moti Plaza",
    address: "1st Floor, Moti Plaza, Allama Iqbal Road, Mian Channu",
    phone: "+92 300‑984‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-teal-600 to-cyan-600",
    region: "Punjab",
    services: ["Student Counseling", "University Applications", "Career Guidance"]
  },
  {
    id: "mandi-bahauddin",
    city: "Mandi Bahauddin",
    name: "Punjab Center",
    address: "Punjab Center, Mandi Bahauddin",
    phone: "+92 321‑300‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-amber-600 to-yellow-600",
    region: "Punjab",
    services: ["Visa Processing", "Document Preparation", "Test Preparation"]
  },
  {
    id: "sheikhupura",
    city: "Sheikhupura",
    name: "Stadium Road",
    address: "Beside Darul Barkat Medicare Hospital, Stadium Road, Sheikhupura",
    phone: "+92 300‑507‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-lime-600 to-green-600",
    region: "Punjab",
    services: ["University Applications", "Career Counseling", "IELTS Training"]
  },
  {
    id: "multan",
    city: "Multan",
    name: "Shalimar Metro",
    address: "Shalimar Metro Station, Bosan Road, New Sabzazar Colony, Multan",
    phone: "+92 305‑444‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-red-600 to-rose-600",
    region: "Punjab",
    services: ["Visa Processing", "University Applications", "Document Verification"]
  },
  {
    id: "peshawar",
    city: "Peshawar",
    name: "Phase 3",
    address: "Office 27, 4th Floor, Alhaj Tower 2, near Phase 3 Chowk, Peshawar",
    phone: "+92 317‑111‑4726",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-sky-600 to-blue-600",
    region: "KPK",
    services: ["Student Counseling", "Visa Processing", "University Applications"]
  },
  {
    id: "jhelum",
    city: "Jhelum",
    name: "Sultan Plaza",
    address: "2nd Floor, NADRA Executive Office, Sultan Plaza, GT Road, Jhelum",
    phone: "+92 317‑111‑4693",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-slate-600 to-gray-600",
    region: "Punjab",
    services: ["Document Preparation", "Career Counseling", "Test Preparation"]
  },
  {
    id: "mardan",
    city: "Mardan",
    name: "Walyan Commercial",
    address: "2nd Floor, Office Unit A, Walyan Commercial Centre, Nowshera Road, Mardan",
    phone: "+92 317‑111‑4617",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-neutral-600 to-stone-600",
    region: "KPK",
    services: ["Student Counseling", "Visa Processing"]
  },
  {
    id: "jeddah",
    city: "Jeddah",
    name: "Engineering Square",
    address: "Above Topten, Engineering Square, Makarona Street, 2nd Floor, Office 27, Jeddah 23447",
    phone: "+966 50‑851‑0785",
    hours: "Mon–Thu 10 AM–5 PM",
    gradient: "from-amber-600 to-yellow-600",
    region: "International",
    services: ["Visa Processing", "Document Attestation", "Student Support"]
  },
  {
    id: "istanbul",
    city: "Istanbul",
    name: "Ataköy Towers",
    address: "Ataköy Towers, Ataköy 7‑8‑9‑10 Kısım Mah., Çobançeşme E‑5 Yan Yol Cad., A Blok Apt. No: 20/1, Bakırköy, Istanbul",
    phone: "+90 505‑305‑8047",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-red-600 to-rose-600",
    region: "International",
    services: ["Student Counseling", "University Applications", "Student Support"]
  },
  {
    id: "edinburgh",
    city: "Edinburgh",
    name: "Ferry Road Place",
    address: "4 Ferry Road Place, Edinburgh EH4 4AX",
    phone: "+44 7448‑419291",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-slate-600 to-gray-600",
    region: "International",
    services: ["Student Support", "University Applications", "Career Guidance"]
  }
];

export default function OfficeLocationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);




  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 768) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const maxIndex = offices.length - cardsPerView;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 4000); // Change slide every 4 seconds
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cardsPerView, offices.length]);



  // Pause auto-slide on hover
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const maxIndex = offices.length - cardsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + cardsPerView >= offices.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + cardsPerView >= offices.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, offices.length - cardsPerView) : prev - 1
    );
  };



  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontSize: '32px' }}
          className="font-bold text-center text-gray-900 mb-8 cursor-default"
          whileHover={{ 
            scale: 1.05,
            color: '#3b82f6',
            transition: { duration: 0.3 }
          }}
        >
          Our Office Locations
        </motion.h2>



        {/* Office Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Office Cards */}
          <div 
            className="overflow-hidden rounded-2xl"
            onMouseEnter={pauseAutoSlide}
            onMouseLeave={resumeAutoSlide}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`
              }}
            >
              {offices.map((office, index) => (
                <motion.div
                  key={office.id}
                  className={`flex-shrink-0 px-2 ${
                    cardsPerView === 1 ? 'w-full' : 
                    cardsPerView === 2 ? 'w-1/2' : 
                    cardsPerView === 3 ? 'w-1/3' : 'w-1/4'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % cardsPerView) * 0.1 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white group hover:scale-105">
                    <div className={`h-1.5 bg-gradient-to-r ${office.gradient}`}></div>
                    <CardContent className="p-4">
                      {/* Header - Compact */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1 mb-1">
                            <h3 className="text-lg font-bold text-gray-800 truncate">{office.city}</h3>
                            {office.isHeadOffice && (
                              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
                                HQ
                              </span>
                            )}
                            {office.region === "International" && (
                              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
                                🌍 INT
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium text-gray-600 truncate">{office.name}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ml-2`}>
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Office Details - Compact */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{office.address}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <a 
                            href={`tel:${office.phone}`}
                            className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-xs truncate"
                          >
                            {office.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <p className="text-xs text-gray-600 truncate">{office.hours}</p>
                        </div>
                      </div>

                      {/* Action Buttons - Compact */}
                      <div className="flex space-x-2">
                        <Button 
                          size="sm"
                          className={`flex-1 bg-gradient-to-r ${office.gradient} hover:opacity-90 text-white font-medium shadow-md text-xs`}
                        >
                          <Phone className="w-3 h-3 mr-1" />
                          Call
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1 border hover:bg-gray-50 font-medium text-xs"
                        >
                          Directions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(offices.length / cardsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}