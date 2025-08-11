import { motion } from 'framer-motion';
import { Trophy, Star, Award, Target } from 'lucide-react';
import type { Achievement } from '@shared/schema';

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
}

const getBadgeColor = (level: string) => {
  switch (level) {
    case 'bronze':
      return 'from-amber-600 to-amber-800';
    case 'silver':
      return 'from-gray-400 to-gray-600';
    case 'gold':
      return 'from-blue-400 to-[#3367D6]';
    case 'platinum':
      return 'from-blue-400 to-[#3367D6]';
    default:
      return 'from-blue-400 to-[#3367D6]';
  }
};

const getBadgeIcon = (type: string) => {
  switch (type) {
    case 'explorer':
      return Target;
    case 'scholar':
      return Star;
    case 'communicator':
      return Award;
    case 'planner':
      return Trophy;
    default:
      return Trophy;
  }
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'sm':
      return { container: 'w-12 h-12', icon: 'w-6 h-6', text: 'text-xs' };
    case 'lg':
      return { container: 'w-20 h-20', icon: 'w-10 h-10', text: 'text-base' };
    default:
      return { container: 'w-16 h-16', icon: 'w-8 h-8', text: 'text-sm' };
  }
};

export default function AchievementBadge({ 
  achievement, 
  size = 'md', 
  showDetails = false 
}: AchievementBadgeProps) {
  const BadgeIcon = getBadgeIcon(achievement.badgeType);
  const sizeClasses = getSizeClasses(size);
  const colorClasses = getBadgeColor(achievement.badgeLevel);

  return (
    <motion.div
      className="relative group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1 
      }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Badge Container */}
      <div className={`
        ${sizeClasses.container} 
        bg-gradient-to-br ${colorClasses}
        rounded-full 
        flex items-center justify-center 
        shadow-lg 
        border-4 border-white 
        relative
        cursor-pointer
        group-hover:shadow-xl
        transition-shadow duration-300
      `}>
        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
        
        {/* Badge Icon or Emoji */}
        {achievement.icon.match(/\p{Emoji}/u) ? (
          <span className={`${sizeClasses.text} relative z-10`}>
            {achievement.icon}
          </span>
        ) : (
          <BadgeIcon className={`${sizeClasses.icon} text-white relative z-10`} />
        )}

        {/* Level Indicator */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-xs font-bold text-gray-800">
            {achievement.badgeLevel === 'bronze' && '🥉'}
            {achievement.badgeLevel === 'silver' && '🥈'}
            {achievement.badgeLevel === 'gold' && '🥇'}
            {achievement.badgeLevel === 'platinum' && '💎'}
          </span>
        </div>
      </div>

      {/* Tooltip/Details */}
      {showDetails && (
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl min-w-max max-w-xs">
            <div className="font-semibold text-sm">{achievement.title}</div>
            <div className="text-xs text-gray-300 mt-1">{achievement.description}</div>
            <div className="text-xs text-blue-400 mt-1">+{achievement.points} points</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </motion.div>
      )}

      {/* New Badge Pulse Animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-blue-400"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1.2, opacity: 0 }}
        transition={{ 
          duration: 2, 
          repeat: 3, 
          ease: "easeOut" 
        }}
      />
    </motion.div>
  );
}