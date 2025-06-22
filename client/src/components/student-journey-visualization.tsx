import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  UserCheck, 
  FileText, 
  GraduationCap, 
  Award, 
  Plane, 
  MapPin,
  CheckCircle,
  Clock,
  Star,
  BookOpen,
  Users,
  Trophy
} from "lucide-react";

export default function StudentJourneyVisualization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const journeySteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Free assessment of your profile and career goals",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500",
      duration: "30 mins",
      completion: "Day 1",
      details: [
        "Profile evaluation",
        "Goal setting session",
        "Country recommendation",
        "Budget planning"
      ]
    },
    {
      id: 2,
      title: "University Selection",
      description: "Choose the best universities matching your profile",
      icon: GraduationCap,
      color: "from-purple-500 to-indigo-500",
      duration: "1-2 weeks",
      completion: "Week 1-2",
      details: [
        "University research",
        "Program comparison",
        "Ranking analysis",
        "Final shortlisting"
      ]
    },
    {
      id: 3,
      title: "Application Process",
      description: "Complete applications with required documents",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      duration: "4-6 weeks",
      completion: "Month 1-2",
      details: [
        "Document preparation",
        "SOP writing",
        "Application submission",
        "Follow-up tracking"
      ]
    },
    {
      id: 4,
      title: "Test Preparation",
      description: "IELTS, TOEFL, GRE, GMAT coaching and practice",
      icon: BookOpen,
      color: "from-orange-500 to-red-500",
      duration: "2-4 months",
      completion: "Month 2-4",
      details: [
        "Test registration",
        "Preparation classes",
        "Mock tests",
        "Score improvement"
      ]
    },
    {
      id: 5,
      title: "Admission Success",
      description: "Receive acceptance letters from universities",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      duration: "2-4 months",
      completion: "Month 3-6",
      details: [
        "Offer letters",
        "Scholarship awards",
        "University selection",
        "Enrollment confirmation"
      ]
    },
    {
      id: 6,
      title: "Visa Processing",
      description: "Student visa application and approval",
      icon: MapPin,
      color: "from-teal-500 to-green-500",
      duration: "4-8 weeks",
      completion: "Month 4-7",
      details: [
        "Visa application",
        "Document verification",
        "Interview preparation",
        "Visa approval"
      ]
    },
    {
      id: 7,
      title: "Pre-Departure",
      description: "Final preparations for your journey",
      icon: Plane,
      color: "from-indigo-500 to-purple-500",
      duration: "2-4 weeks",
      completion: "Month 6-8",
      details: [
        "Travel arrangements",
        "Accommodation booking",
        "Orientation sessions",
        "Final briefing"
      ]
    },
    {
      id: 8,
      title: "Study Success",
      description: "Begin your international education journey",
      icon: Trophy,
      color: "from-pink-500 to-rose-500",
      duration: "Ongoing",
      completion: "Achievement",
      details: [
        "Course commencement",
        "Academic support",
        "Career guidance",
        "Alumni network"
      ]
    }
  ];

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setActiveStep(prev => {
        const next = (prev + 1) % journeySteps.length;
        setProgress((next / (journeySteps.length - 1)) * 100);
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isInView]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress((index / (journeySteps.length - 1)) * 100);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-neutral-700">Student Journey</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            Your Path to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Global Education</span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Follow the complete journey from initial consultation to studying abroad with our step-by-step milestone tracking
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-20 left-0 w-full h-1 bg-gray-200 rounded-full hidden lg:block">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative cursor-pointer"
                onClick={() => handleStepClick(index)}
              >
                {/* Step Card */}
                <div
                  className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 border-2 ${
                    activeStep === index
                      ? 'border-primary shadow-2xl scale-105'
                      : 'border-transparent hover:shadow-xl'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-4 pt-2">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                      activeStep === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      {React.createElement(step.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    
                    {/* Glow Effect */}
                    {activeStep === index && (
                      <div className={`absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-50 pt-2`}></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-neutral-800 mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Timing Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center space-x-2 text-xs text-neutral-500">
                        <Clock className="w-3 h-3" />
                        <span>{step.duration}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-xs text-neutral-500">
                        <CheckCircle className="w-3 h-3" />
                        <span>{step.completion}</span>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
                      activeStep === index
                        ? 'bg-primary text-white'
                        : activeStep > index
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {activeStep === index ? (
                        <>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span>In Progress</span>
                        </>
                      ) : activeStep > index ? (
                        <>
                          <CheckCircle className="w-3 h-3" />
                          <span>Completed</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3" />
                          <span>Upcoming</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connecting Line (Desktop) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-2 w-4 h-1 bg-gray-200">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: activeStep > index ? '100%' : '0%' }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-neutral-100"
        >
          <div className="text-center mb-8">
            <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${journeySteps[activeStep].color} text-white rounded-full px-6 py-3 mb-4`}>
              {React.createElement(journeySteps[activeStep].icon, { className: "w-6 h-6" })}
              <span className="font-bold text-lg">{journeySteps[activeStep].title}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Step {journeySteps[activeStep].id}: What to Expect
            </h3>
            
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {journeySteps[activeStep].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps[activeStep].details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm font-medium text-neutral-700">{detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{journeySteps[activeStep].duration}</div>
                <div className="text-sm text-neutral-600">Duration</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{journeySteps[activeStep].completion}</div>
                <div className="text-sm text-neutral-600">Timeline</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Journey Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full p-2 shadow-lg">
            {journeySteps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            Click on any step or dot to explore the journey milestone
          </p>
        </motion.div>
      </div>
    </section>
  );
}