import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  UserCheck, 
  GraduationCap, 
  CheckSquare, 
  Send, 
  MessageCircle, 
  FileCheck,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const processSteps = [
  {
    icon: UserCheck,
    title: "Get Details",
    description: "Initial consultation to understand your academic background, career goals, and preferences",
    color: "#4285F4",
    step: "01"
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Expert guidance to choose the best universities and programs matching your profile",
    color: "#4285F4",
    step: "02"
  },
  {
    icon: CheckSquare,
    title: "Meet Requirements",
    description: "Assistance in fulfilling all admission requirements including tests and documentation",
    color: "#4285F4",
    step: "03"
  },
  {
    icon: Send,
    title: "Apply",
    description: "Professional application submission with careful review and optimization",
    color: "#4285F4",
    step: "04"
  },
  {
    icon: MessageCircle,
    title: "Interview",
    description: "Comprehensive preparation for university admission and visa interviews",
    color: "#4285F4",
    step: "05"
  },
  {
    icon: FileCheck,
    title: "Visa",
    description: "Complete visa processing support from documentation to final approval",
    color: "#4285F4",
    step: "06"
  }
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleStep = (index: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSteps(newExpanded);
  };

  return null;
}