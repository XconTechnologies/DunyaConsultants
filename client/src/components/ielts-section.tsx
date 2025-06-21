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

const ieltsFeatures = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from certified IELTS trainers with proven track records"
  },
  {
    icon: Lightbulb,
    title: "Advanced Teaching Methods",
    description: "Modern pedagogical approaches for effective learning"
  },
  {
    icon: Target,
    title: "Individual Attention",
    description: "Personalized coaching tailored to your learning needs"
  },
  {
    icon: BookOpen,
    title: "Modern Classrooms",
    description: "State-of-the-art facilities with latest learning resources"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Multiple batch timings to fit your schedule"
  },
  {
    icon: DollarSign,
    title: "Affordable Fee Structure",
    description: "Quality education at competitive prices"
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