import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, BookOpen, Globe, Award, Users, TrendingUp } from "lucide-react";

interface EducationalTooltipProps {
  children: ReactNode;
  title: string;
  description: string;
  type?: "info" | "educational" | "achievement" | "process" | "location" | "statistic";
  delay?: number;
}

const tooltipIcons = {
  info: Info,
  educational: BookOpen,
  achievement: Award,
  process: TrendingUp,
  location: Globe,
  statistic: Users,
};

const tooltipColors = {
  info: "from-blue-500 to-cyan-500",
  educational: "from-green-500 to-emerald-500",
  achievement: "from-yellow-500 to-orange-500",
  process: "from-purple-500 to-pink-500",
  location: "from-red-500 to-rose-500",
  statistic: "from-indigo-500 to-blue-500",
};

export default function EducationalTooltip({ 
  children, 
  title, 
  description, 
  type = "info",
  delay = 0 
}: EducationalTooltipProps) {
  const Icon = tooltipIcons[type];
  const colorGradient = tooltipColors[type];

  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="cursor-help relative group"
          >
            {children}
            {/* Subtle hover indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              <Info className="w-2.5 h-2.5 text-white" />
            </motion.div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="max-w-xs p-0 border-0 shadow-2xl bg-transparent"
          sideOffset={8}
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 relative"
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorGradient} rounded-t-lg`} />
            
            {/* Content */}
            <div className="flex items-start space-x-3 mt-2">
              <div className={`w-8 h-8 bg-gradient-to-r ${colorGradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            {/* Tooltip arrow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-gray-800" />
            </div>
          </motion.div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}