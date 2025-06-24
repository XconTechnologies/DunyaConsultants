import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BookOpen, 
  Users, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Target,
  Trophy,
  Lightbulb
} from "lucide-react";
import EducationalTooltip from "./educational-tooltip";

const ieltsFeatures = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from certified IELTS trainers with proven track records",
    tooltip: {
      title: "Expert IELTS Instructors",
      description: "Our certified trainers have 5+ years of experience and maintain updated knowledge of IELTS test patterns, scoring criteria, and effective teaching methodologies.",
      type: "educational" as const
    }
  },
  {
    icon: Lightbulb,
    title: "Advanced Teaching Methods",
    description: "Modern pedagogical approaches for effective learning",
    tooltip: {
      title: "Innovative Learning Techniques",
      description: "We use interactive multimedia resources, practice simulations, and adaptive learning techniques to maximize your IELTS score improvement.",
      type: "process" as const
    }
  },
  {
    icon: Target,
    title: "Individual Attention",
    description: "Personalized coaching tailored to your learning needs",
    tooltip: {
      title: "Personalized Learning Path",
      description: "Each student receives customized study plans, one-on-one feedback sessions, and targeted practice based on their specific strengths and weaknesses.",
      type: "educational" as const
    }
  },
  {
    icon: BookOpen,
    title: "Modern Classrooms",
    description: "State-of-the-art facilities with latest learning resources",
    tooltip: {
      title: "Contemporary Learning Environment",
      description: "Our classrooms feature digital whiteboards, audio-visual equipment, and comfortable seating arrangements designed to enhance the learning experience.",
      type: "info" as const
    }
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Multiple batch timings to fit your schedule",
    tooltip: {
      title: "Convenient Schedule Options",
      description: "Morning, evening, and weekend batches available. We also offer fast-track intensive courses and extended preparation programs to suit different timelines.",
      type: "process" as const
    }
  },
  {
    icon: DollarSign,
    title: "Affordable Fee Structure",
    description: "Quality education at competitive prices",
    tooltip: {
      title: "Value-Based Pricing",
      description: "Our fee structure includes all study materials, practice tests, mock exams, and additional support sessions with no hidden charges.",
      type: "info" as const
    }
  }
];

const additionalServices = [
  {
    icon: CheckCircle,
    title: "Free Assessment",
    description: "Complimentary evaluation of your current English proficiency level"
  },
  {
    icon: Trophy,
    title: "Study Visa Support",
    description: "Complete assistance with your study visa application process"
  },
  {
    icon: Users,
    title: "Education Counselling",
    description: "Expert guidance on course and university selection"
  }
];

export default function IeltsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return null;
}