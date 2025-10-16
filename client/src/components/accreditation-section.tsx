import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export default function AccreditationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                  <svg className="absolute inset-0 w-full h-full transition-all duration-300" viewBox="0 0 200 200">
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
                      {/* Blue shadow filter for hover */}
                      <filter id={`blueshadow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1D50C9" floodOpacity="0.4"/>
                      </filter>
                    </defs>
                    
                    {/* Outer circle border - 15px thick light blue */}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="white"
                      stroke="#D4E2FF"
                      strokeWidth="15"
                      className="transition-all duration-300"
                    />
                    {/* Circle shadow overlay that appears on hover */}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="transparent"
                      strokeWidth="15"
                      className="transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{
                        filter: `url(#blueshadow-${index})`
                      }}
                    />
                    
                    {/* Curved text on top - category in dark blue */}
                    <text className="text-[11px] font-bold uppercase tracking-wide" style={{ fill: '#1D50C9' }}>
                      <textPath href={`#circlePath-top-${index}`} startOffset="50%" textAnchor="middle">
                        {accreditation.category}
                      </textPath>
                    </text>
                    
                    {/* Curved text on bottom - logo name in dark blue */}
                    <text className="text-[11px] font-bold uppercase tracking-wide" style={{ fill: '#1D50C9' }}>
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

      </div>
    </section>
  );
}