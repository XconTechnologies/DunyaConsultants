import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
    isHeadOffice: true
  },
  {
    id: "lahore-dha",
    city: "Lahore",
    name: "DHA Phase 1",
    address: "1st Floor, 174 6th Street 123, Sector H, DHA Phase 1, Lahore",
    phone: "+92 300‑167‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-green-600 to-teal-600"
  },
  {
    id: "lahore-johar",
    city: "Lahore",
    name: "Johar Town",
    address: "1st Floor, 85 /R‑1, Phase 2, Johar Town, Lahore",
    phone: "+92 300‑827‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-orange-600 to-red-600"
  },
  {
    id: "islamabad",
    city: "Islamabad",
    name: "Blue Area",
    address: "Mezzanine‑3, ATS Centre, Fazal‑e‑Haq Road, Blue Area, Islamabad",
    phone: "+92 333‑777‑5458",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-indigo-600 to-blue-600"
  },
  {
    id: "karachi",
    city: "Karachi",
    name: "DHA Phase",
    address: "05‑C Prime Point Building, Main 2, Khayaban‑e‑Ittehad Road, DHA, Karachi",
    phone: "+92 332‑364‑3373",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-cyan-600 to-blue-600"
  },
  {
    id: "faisalabad",
    city: "Faisalabad",
    name: "Koh‑i‑Noor City",
    address: "Mezzanine Floor, Centre Point Plaza, Koh‑i‑Noor City, Jaranwala Road, Faisalabad",
    phone: "+92 332‑662‑8487",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-purple-600 to-pink-600"
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
    gradient: "from-emerald-600 to-green-600"
  },
  {
    id: "gujrat",
    city: "Gujrat",
    name: "GT Road",
    address: "Beside KFC, Service Morh Road, GT Road, Gujrat",
    phone: "+92 300‑105‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-rose-600 to-pink-600"
  },
  {
    id: "bahawalpur",
    city: "Bahawalpur",
    name: "Muslim Town",
    address: "Rafi Qamar Road, near Muslim Town, Goth Muslim Town, Bahawalpur",
    phone: "+92 300‑173‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    id: "mian-channu",
    city: "Mian Channu",
    name: "Moti Plaza",
    address: "1st Floor, Moti Plaza, Allama Iqbal Road, Mian Channu",
    phone: "+92 300‑984‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-teal-600 to-cyan-600"
  },
  {
    id: "mandi-bahauddin",
    city: "Mandi Bahauddin",
    name: "Punjab Center",
    address: "Punjab Center, Mandi Bahauddin",
    phone: "+92 321‑300‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-amber-600 to-yellow-600"
  },
  {
    id: "sheikhupura",
    city: "Sheikhupura",
    name: "Stadium Road",
    address: "Beside Darul Barkat Medicare Hospital, Stadium Road, Sheikhupura",
    phone: "+92 300‑507‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-lime-600 to-green-600"
  },
  {
    id: "multan",
    city: "Multan",
    name: "Shalimar Metro",
    address: "Shalimar Metro Station, Bosan Road, New Sabzazar Colony, Multan",
    phone: "+92 305‑444‑1947",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-red-600 to-rose-600"
  },
  {
    id: "peshawar",
    city: "Peshawar",
    name: "Phase 3",
    address: "Office 27, 4th Floor, Alhaj Tower 2, near Phase 3 Chowk, Peshawar",
    phone: "+92 317‑111‑4726",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-sky-600 to-blue-600"
  },
  {
    id: "jhelum",
    city: "Jhelum",
    name: "Sultan Plaza",
    address: "2nd Floor, NADRA Executive Office, Sultan Plaza, GT Road, Jhelum",
    phone: "+92 317‑111‑4693",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-slate-600 to-gray-600"
  },
  {
    id: "mardan",
    city: "Mardan",
    name: "Walyan Commercial",
    address: "2nd Floor, Office Unit A, Walyan Commercial Centre, Nowshera Road, Mardan",
    phone: "+92 317‑111‑4617",
    hours: "Mon–Sat 10 AM–6 PM",
    gradient: "from-neutral-600 to-stone-600"
  }
];

export default function OfficeLocationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

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

  const visibleOffices = offices.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 mb-6">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Nationwide Presence</span>
          </div>
          
          <h2 className="font-bold text-gray-800 mb-6" style={{ fontSize: '32px' }}>
            Our Office{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Locations
            </span>
          </h2>
          
        </motion.div>

        

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
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`
              }}
            >
              {offices.map((office, index) => (
                <motion.div
                  key={office.id}
                  className={`flex-shrink-0 px-4 ${
                    cardsPerView === 1 ? 'w-full' : cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % cardsPerView) * 0.1 }}
                >
                  <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white group hover:scale-105">
                    <div className={`h-2 bg-gradient-to-r ${office.gradient}`}></div>
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-2xl font-bold text-gray-800">{office.city}</h3>
                            {office.isHeadOffice && (
                              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                Head Office
                              </span>
                            )}
                          </div>
                          <p className="text-lg font-medium text-gray-600">{office.name}</p>
                        </div>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${office.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Office Details */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                          <p className="text-gray-600 leading-relaxed">{office.address}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <a 
                            href={`tel:${office.phone}`}
                            className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                          >
                            {office.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <p className="text-gray-600">{office.hours}</p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Button 
                          className={`flex-1 bg-gradient-to-r ${office.gradient} hover:opacity-90 text-white font-semibold shadow-lg`}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 border-2 hover:bg-gray-50 font-semibold"
                        >
                          Get Directions
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

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find a Nearby Office?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't worry! We offer online consultations and can arrange meetings at your convenience. 
              Our expert counselors are just a call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-xl shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                Call: +92 304 1110947
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 font-bold px-8 py-3 rounded-xl">
                <Users className="w-5 h-5 mr-2" />
                Schedule Online Meeting
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}