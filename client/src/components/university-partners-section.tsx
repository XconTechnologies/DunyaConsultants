import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import SmartImage from "@/components/ui/smart-image";
import { LazyImage } from "@/components/ui/lazy-image";

// Import university logos - original 10
import southamptonSolentLogo from "@assets/IMG-20250425-WA0016_1750755121093.jpg";
import southWalesUniversityLogo from "@assets/IMG-20250425-WA0017_1750755121094.jpg";
import qaPartnershipLogo from "@assets/Untitled design (14)_1750755121095.jpg";
import ulsterUniversityLogo from "@assets/IMG-20250425-WA0015_1750755121095.jpg";
import universityAppliedSciencesLogo from "@assets/Uni-Logos-3-14-2048x878_1750755121096.jpg";
import southernCrossLogo from "@assets/Uni-Logos-3-15-1-2048x879_1750755121096.jpg";
import bsbiLogo from "@assets/Uni-Logos-3-16-2048x878_1750755121097.jpg";
import ardenUniversityLogo from "@assets/Uni-Logos-3-17-2048x879_1750755121098.jpg";
import avilaUniversityLogo from "@assets/Uni-Logos-3-18-2048x878_1750755121099.jpg";
import ibatCollegeLogo from "@assets/Uni-Logos-3-20-2048x878_1750755121100.jpg";

// Import additional university logos - batch 2 (12 logos)
import skillsAustraliaLogo from "@assets/Uni-Logos-3-22-2048x878_1750756376768.jpg";
import canterburyChristChurchLogo from "@assets/Uni-Logos-10_1750756376770.jpg";
import concordiaUniversityLogo from "@assets/Uni-Logos-18-1_1750756376771.jpg";
import gloucestershireLogo from "@assets/Uni-Logos-20-1_1750756376772.jpg";
import ulsterUniversityNewLogo from "@assets/Uni-Logos-21_1750756376773.jpg";
import northamptonLogo from "@assets/Uni-Logos-25-1_1750756376774.jpg";
import bangorUniversityLogo from "@assets/Uni-Logos-2-08-1_1750756376776.jpg";
import universityCanadaWestLogo from "@assets/Uni-Logos-3-01-2048x878_1750756376777.jpg";
import kadirHasLogo from "@assets/Uni-Logos-3-02-2048x877_1750756376778.jpg";
import universityOfLawLogo from "@assets/Uni-Logos-3-03-2048x878_1750756376779.jpg";

// Import additional university logos - batch 3 (10 logos)
import deMontfortLogo from "@assets/Group 1000008937_1759736620706.png";
import gbsGlobalLogo from "@assets/Uni-Logos-3-05-2048x879_1750756577520.jpg";
import abertayUniversityLogo from "@assets/Uni-Logos-3-06-2048x878_1750756577521.jpg";
import heriotWattLogo from "@assets/Uni-Logos-3-07-2048x879_1750756577522.jpg";
import bahcesehirLogo from "@assets/Uni-Logos-3-08-2048x878_1750756577523.jpg";
import collegeDeParisLogo from "@assets/Uni-Logos-3-09-2048x879_1750756577524.jpg";
import limCollegeLogo from "@assets/Uni-Logos-3-11-2048x879_1750756577525.jpg";
import gusMedicalLogo from "@assets/Uni-Logos-3-12-2048x878_1750756577526.jpg";
import herzingUniversityLogo from "@assets/Uni-Logos-3-13-2048x879_1750756577527.jpg";
import icUniversityLogo from "@assets/Artboard-1-copy-5_1750756577528.jpg";

// Import additional university logos - batch 4 (10 logos)
import beykozUniversityLogo from "@assets/Artboard-1-copy-14-2_1750756910267.jpg";
import capilanoUniversityLogo from "@assets/Artboard-1-copy-19-3_1750756910268.jpg";
import niagaraFallsLogo from "@assets/Artboard-1-copy-41-1_1750756910271.jpg";
import universityOfEuropeLogo from "@assets/Artboard-1-copy-42_1750756910272.jpg";
import hartpuryUniversityLogo from "@assets/download_1750756910273.jpg";
import etonCollegeLogo from "@assets/download-1_1750756910275.jpg";
import halicUniversityLogo from "@assets/Halic-University-15-2048x879_1750756910276.jpg";
import teessideUniversityLogo from "@assets/Teesside-University-logo_1750756910279.jpg";

// Import additional university logos - batch 5 (6 logos)
import leedsTrinityLogo from "@assets/Uni-Logos-2-01_1750757117512.jpg";
import gismaUniversityLogo from "@assets/Uni-Logos-2-04-1_1750757117514.jpg";
import fanshaweCollegeLogo from "@assets/Uni-Logos-2-06-1_1750757117515.jpg";
import angliRuskinLogo from "@assets/191782_191241_ARU_Logo_Descriptor_RGB_Blue3_1750757117517.jpg";
import ucaLogo from "@assets/Artboard-1-copy-3-2_1750757117518.jpg";
import websterUniversityNewLogo from "@assets/Artboard-1-copy-4_1750757117520.jpg";

// University partners data - all 48 universities (organized by country priority: UK first, then others)
const universityPartners = [
  // UK Universities (First Priority)
  { name: "Southampton Solent University", country: "UK", logoUrl: southamptonSolentLogo },
  { name: "QA Partnership", country: "UK", logoUrl: qaPartnershipLogo },
  { name: "Ulster University", country: "UK", logoUrl: ulsterUniversityLogo },
  { name: "Canterbury Christ Church University", country: "UK", logoUrl: canterburyChristChurchLogo },
  { name: "University of Gloucestershire", country: "UK", logoUrl: gloucestershireLogo },
  { name: "Ulster University", country: "UK", logoUrl: ulsterUniversityNewLogo },
  { name: "University of Northampton", country: "UK", logoUrl: northamptonLogo },
  { name: "The University of Law", country: "UK", logoUrl: universityOfLawLogo },
  { name: "Hartpury University", country: "UK", logoUrl: hartpuryUniversityLogo },
  { name: "Eton College", country: "UK", logoUrl: etonCollegeLogo },
  { name: "Teesside University", country: "UK", logoUrl: teessideUniversityLogo },
  { name: "Leeds Trinity University", country: "UK", logoUrl: leedsTrinityLogo },
  { name: "Anglia Ruskin University", country: "UK", logoUrl: angliRuskinLogo },
  { name: "University for the Creative Arts", country: "UK", logoUrl: ucaLogo },
  
  // Wales Universities
  { name: "University of South Wales", country: "Wales", logoUrl: southWalesUniversityLogo },
  { name: "Bangor University", country: "Wales", logoUrl: bangorUniversityLogo },
  
  // Scotland Universities
  { name: "Abertay University", country: "Scotland", logoUrl: abertayUniversityLogo },
  { name: "Heriot-Watt University", country: "Scotland", logoUrl: heriotWattLogo },
  
  // Germany Universities
  { name: "Berlin School of Business & Innovation", country: "Germany", logoUrl: bsbiLogo },
  { name: "Arden University Berlin", country: "Germany", logoUrl: ardenUniversityLogo },
  { name: "GBS Global Applied Knowledge", country: "Germany", logoUrl: gbsGlobalLogo },
  { name: "University of Europe for Applied Sciences", country: "Germany", logoUrl: universityOfEuropeLogo },
  { name: "Gisma University of Applied Sciences", country: "Germany", logoUrl: gismaUniversityLogo },
  
  // Canada Universities
  { name: "Concordia University", country: "Canada", logoUrl: concordiaUniversityLogo },
  { name: "University Canada West", country: "Canada", logoUrl: universityCanadaWestLogo },
  { name: "Capilano University", country: "Canada", logoUrl: capilanoUniversityLogo },
  { name: "University of Niagara Falls Canada", country: "Canada", logoUrl: niagaraFallsLogo },
  { name: "Fanshawe College", country: "Canada", logoUrl: fanshaweCollegeLogo },
  
  // USA Universities
  { name: "Avila University", country: "USA", logoUrl: avilaUniversityLogo },
  { name: "LIM College", country: "USA", logoUrl: limCollegeLogo },
  { name: "Herzing University", country: "USA", logoUrl: herzingUniversityLogo },
  { name: "Webster University", country: "USA", logoUrl: websterUniversityNewLogo },
  
  // Australia Universities
  { name: "Southern Cross Institute", country: "Australia", logoUrl: southernCrossLogo },
  { name: "Skills Australia Institute", country: "Australia", logoUrl: skillsAustraliaLogo },
  
  // Turkey Universities
  { name: "Kadir Has University", country: "Turkey", logoUrl: kadirHasLogo },
  { name: "Bahçeşehir University", country: "Turkey", logoUrl: bahcesehirLogo },
  { name: "Beykoz University", country: "Turkey", logoUrl: beykozUniversityLogo },
  { name: "Halic University", country: "Turkey", logoUrl: halicUniversityLogo },
  
  // Netherlands Universities
  { name: "University of Applied Sciences Europe", country: "Netherlands", logoUrl: universityAppliedSciencesLogo },
  { name: "IC University of Applied Sciences", country: "Netherlands", logoUrl: icUniversityLogo },
  
  
  // Ireland Universities
  { name: "IBAT College Dublin", country: "Ireland", logoUrl: ibatCollegeLogo },
  
  // France Universities
  { name: "College de Paris", country: "France", logoUrl: collegeDeParisLogo },
  
  // UAE Universities
  { name: "De Montfort University Dubai", country: "UAE", logoUrl: deMontfortLogo },
  
  // Caribbean Universities
  { name: "GUS Medical & Veterinary Schools", country: "Caribbean", logoUrl: gusMedicalLogo }
];

export default function UniversityPartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split universities into columns for vertical scrolling (responsive)
  const splitIntoColumns = (array: typeof universityPartners, numColumns: number) => {
    const columns = Array.from({ length: numColumns }, () => [] as typeof universityPartners);
    array.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });
    return columns;
  };

  // Responsive column count
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const numColumns = isMobile ? 3 : 5; // 3 columns on mobile, 5 on desktop
  const columns = splitIntoColumns(universityPartners, numColumns);

  // Get country colors for modern styling
  const getCountryColor = (country: string): string => {
    const colors: Record<string, string> = {
      "All": "from-gray-500 to-gray-700",
      "UK": "from-[#1D50C9] to-[#1a73e8]",
      "Germany": "from-[#1D50C9] to-[#1845B3]", 
      "Canada": "from-[#1D50C9] to-[#1a73e8]",
      "USA": "from-[#1D50C9] to-[#1845B3]",
      "Australia": "from-[#1D50C9] to-blue-500",
      "Turkey": "from-[#1D50C9] to-#1565c0",
      "Netherlands": "from-[#1D50C9] to-[#1845B3]",
      "Finland": "from-blue-400 to-white",
      "Ireland": "from-[#1D50C9] to-blue-500",
      "France": "from-[#1D50C9] to-[#1845B3]",
      "UAE": "from-[#1D50C9] to-[#1845B3]",
      "Caribbean": "from-[#1D50C9] to-[#1845B3]",
      "Wales": "from-[#1D50C9] to-[#1845B3]",
      "Scotland": "from-[#1D50C9] to-white"
    };
    return colors[country] || "from-gray-500 to-gray-700";
  };

  return (
    <section ref={ref} id="university-partners" className="pt-16 lg:pt-24 pb-8 lg:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6 cursor-pointer transition-all duration-300 hover:scale-105 text-[#1D50C9]"
            whileHover={{ scale: 1.05 }}
          >
            Our Global University Partners
          </motion.h2>
          <p className="text-neutral-600 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
            Unlock your potential with our extensive network of world-class universities and institutions across the globe
          </p>
        </motion.div>





        {/* Vertical Scrolling Columns */}
        <motion.div
          className="relative mb-6 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-5'} gap-1 max-w-6xl mx-auto h-[500px] md:h-[600px] relative ${isMobile ? 'px-8' : 'px-6'} overflow-y-hidden overflow-x-visible`}>
            {/* Top fade overlay */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            
            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
            
            {columns.map((column, columnIndex) => {
              // Calculate the total height of one set of logos for seamless loop
              const itemHeight = isMobile ? 16 * 4 : 20 * 4; // h-16 or h-20 in pixels (multiplied by 4 for rem to px)
              const gapSize = 4; // gap-1 = 4px in Tailwind
              // Total height = (n items × item height) + ((n-1) gaps × gap size)
              const totalHeight = column.length * itemHeight + (column.length - 1) * gapSize;
              
              return (
                <div key={columnIndex} className="overflow-y-hidden overflow-x-visible">
                  <motion.div
                    className="flex flex-col gap-1"
                    animate={{
                      y: [0, -totalHeight]
                    }}
                    transition={{
                      duration: 15 + columnIndex * 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                  >
                    {/* Duplicate column for seamless loop */}
                    {[...column, ...column].map((university, index) => (
                      <div
                        key={`${university.name}-${columnIndex}-${index}`}
                        className={`flex items-center justify-center p-2 ${isMobile ? 'w-28 h-16' : 'w-36 h-20'}`}
                      >
                        <SmartImage
                          src={university.logoUrl}
                          alt={`${university.name} - partner university`}
                          width={isMobile ? 112 : 144}
                          height={isMobile ? 64 : 80}
                          className="block max-h-full max-w-full object-contain object-center pointer-events-none"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>




      </div>
    </section>
  );
}