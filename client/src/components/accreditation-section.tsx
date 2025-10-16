import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Award, Shield, Users, GraduationCap } from "lucide-react";

// Import accreditation images
import britishCouncilLogo from "@assets/Group 1000008328_1758700076447.png";
import duolingoLogo from "@assets/Group 1000008325_1758700076449.png";
import languageCertLogo from "@assets/Group 1000008326_1758700076449.png";
import icefAgencyLogo from "@assets/ICEF_Agency[1]_1758700143132.png";

const accreditationBadges = [
  {
    name: "British Council",
    displayName: "British Council",
    logo: britishCouncilLogo,
    category: "Education Partner"
  },
  {
    name: "ICEF Agency",
    displayName: "ICEF Agency",
    logo: icefAgencyLogo,
    link: "https://accreditations.icef.com/certificate?id=210f08ad-2604-44df-ad7f-9a9af53e90c1",
    category: "Certified Agency"
  },
  {
    name: "Duolingo",
    displayName: "Duolingo",
    logo: duolingoLogo,
    category: "Test Partner"
  },
  {
    name: "LanguageCert",
    displayName: "Language Cert",
    logo: languageCertLogo,
    category: "Language Partner"
  }
];

const reviewStats = [
  {
    platform: "British Council",
    rating: 4.9,
    reviews: "500+",
    icon: Award,
    color: "from-blue-500 to-blue-600"
  },
  {
    platform: "ICEF Agency",
    rating: 4.8,
    reviews: "300+",
    icon: Shield,
    color: "from-purple-500 to-purple-600"
  },
  {
    platform: "Students",
    rating: 4.9,
    reviews: "1000+",
    icon: GraduationCap,
    color: "from-green-500 to-green-600"
  },
  {
    platform: "Google Reviews",
    rating: 4.7,
    reviews: "750+",
    icon: Star,
    color: "from-amber-500 to-amber-600"
  },
  {
    platform: "Client Success",
    rating: 4.8,
    reviews: "850+",
    icon: Users,
    color: "from-indigo-500 to-indigo-600"
  }
];

export default function AccreditationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
        ))}
        {hasHalfStar && <Star className="w-5 h-5 fill-emerald-500 text-emerald-500 opacity-50" />}
      </div>
    );
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6 cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1D50C9 0%, #1845B3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            whileHover={{ scale: 1.05 }}
          >
            Our Accreditation
          </motion.h2>
          <p className="text-neutral-600 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
            Trusted by leading international organizations and certified to provide quality education services
          </p>
        </motion.div>

        {/* Accreditation Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {accreditationBadges.map((accreditation, index) => (
            <motion.div
              key={accreditation.name}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Circular Badge with Border and Curved Text */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-48 h-48">
                  {/* SVG for circular border and curved text */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      {/* Define circular path for top text */}
                      <path
                        id={`circlePath-top-${index}`}
                        d="M 20,100 A 80,80 0 0,1 180,100"
                        fill="none"
                      />
                      {/* Define circular path for bottom text */}
                      <path
                        id={`circlePath-bottom-${index}`}
                        d="M 180,100 A 80,80 0 0,1 20,100"
                        fill="none"
                      />
                    </defs>
                    
                    {/* Outer circle border - 15px thick */}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="white"
                      stroke="#1D50C9"
                      strokeWidth="15"
                      className="group-hover:drop-shadow-2xl transition-all duration-300"
                    />
                    
                    {/* Curved text on top - category */}
                    <text className="text-[11px] font-bold uppercase tracking-wide" style={{ fill: 'white' }}>
                      <textPath href={`#circlePath-top-${index}`} startOffset="50%" textAnchor="middle">
                        {accreditation.category}
                      </textPath>
                    </text>
                    
                    {/* Curved text on bottom - logo name */}
                    <text className="text-[11px] font-bold uppercase tracking-wide" style={{ fill: 'white' }}>
                      <textPath href={`#circlePath-bottom-${index}`} startOffset="50%" textAnchor="middle">
                        {accreditation.displayName}
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Logo in center */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    {accreditation.link ? (
                      <a
                        href={accreditation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <img
                          src={accreditation.logo}
                          alt={`${accreditation.name} logo`}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ) : (
                      <img
                        src={accreditation.logo}
                        alt={`${accreditation.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Review Stats Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {reviewStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.platform}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Rating */}
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {stat.rating}
                    <span className="text-2xl text-gray-400">/5</span>
                  </div>
                  
                  {/* Stars */}
                  <div className="mb-4">
                    {renderStars(stat.rating)}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Platform name */}
                  <p className="font-semibold text-gray-800 mb-1 text-sm">{stat.platform}</p>
                  
                  {/* Reviews count */}
                  <p className="text-xs text-gray-500">Out of {stat.reviews} reviews</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}