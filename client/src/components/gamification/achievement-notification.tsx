import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { getSessionId } from './engagement-tracker';
import AchievementBadge from './achievement-badge';
import type { Achievement } from '@shared/schema';

export default function AchievementNotification() {
  const [notifications, setNotifications] = useState<Achievement[]>([]);
  const [lastCheck, setLastCheck] = useState<Date>(new Date());
  const sessionId = getSessionId();

  const { data: achievements = [] } = useQuery<Achievement[]>({
    queryKey: ['user-achievements', sessionId],
    queryFn: () => apiRequest('GET', `/api/engagement/achievements/${sessionId}`),
    refetchInterval: 5000, // Check for new achievements every 5 seconds
  });

  // Check for new achievements
  useEffect(() => {
    const newAchievements = (achievements || []).filter(
      achievement => new Date(achievement.unlockedAt) > lastCheck
    );
    
    if (newAchievements.length > 0) {
      setNotifications(prev => [...prev, ...newAchievements]);
      setLastCheck(new Date());
    }
  }, [achievements, lastCheck]);

  const dismissNotification = (achievementId: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== achievementId));
  };

  const dismissAll = () => {
    setNotifications([]);
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
      <AnimatePresence mode="popLayout">
        {notifications.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ x: 400, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 400, opacity: 0, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              delay: index * 0.1 
            }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Celebration Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm">Achievement Unlocked!</span>
                </div>
                <button
                  onClick={() => dismissNotification(achievement.id)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Animated sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Achievement Content */}
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <AchievementBadge
                    achievement={achievement}
                    size="md"
                    showDetails={false}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
                  <div className="flex items-center mt-2 space-x-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      +{achievement.points} points
                    </span>
                    <span className="text-xs text-gray-500 capitalize">
                      {achievement.badgeLevel} {achievement.badgeType}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Dismiss All Button */}
      {notifications.length > 1 && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={dismissAll}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 px-4 rounded-lg transition-colors"
        >
          Dismiss All ({notifications.length})
        </motion.button>
      )}
    </div>
  );
}