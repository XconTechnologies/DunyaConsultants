import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Heart, Calendar } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Award,
      title: "200 Certified Counsellors",
      description: "Expert guidance from certified professionals with deep knowledge of immigration policies.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "17 City Branches",
      description: "Nationwide presence with 250 ambassadors ensuring local support everywhere.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Heart,
      title: "20+ University Partnerships",
      description: "Direct partnerships with leading international universities for better admission chances.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const stats = [
    { value: "17", label: "City Branches", color: "text-primary" },
    { value: "200", label: "Certified Counsellors", color: "text-secondary" },
    { value: "250", label: "Ambassadors", color: "text-accent" },
    { value: "20+", label: "University Partners", color: "text-blue-600" }
  ];

  return (
    null
  );
}
