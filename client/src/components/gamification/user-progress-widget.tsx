import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { ChevronUp, ChevronDown, Trophy, Star, Target, Zap } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { getSessionId } from './engagement-tracker';
import AchievementBadge from './achievement-badge';
import AchievementGallery from './achievement-gallery';
import type { UserStats, Achievement } from '@shared/schema';

export default function UserProgressWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const sessionId = getSessionId();

  const { data: userStats } = useQuery<UserStats>({
    queryKey: ['user-stats', sessionId],
    queryFn: async () => {
      const res = await apiRequest('GET', `/api/engagement/stats/${sessionId}`);
      return res.json();
    },
  });

  const { data: achievements } = useQuery<Achievement[]>({
    queryKey: ['user-achievements', sessionId],
    queryFn: async () => {
      const res = await apiRequest('GET', `/api/engagement/achievements/${sessionId}`);
      return res.json();
    },
  });

  if (!userStats) return null;

  const progressToNextLevel = ((userStats.totalPoints % 100) / 100) * 100;
  const achievementsArray = Array.isArray(achievements) ? achievements : [];
  const recentAchievements = achievementsArray.slice(-3);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Collapsed View */}
        <motion.div
          className="p-4 cursor-pointer bg-gradient-to-r from-[#4285F4] to-[#3367D6] text-white"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm">Level {userStats.level}</div>
                <div className="text-xs opacity-90">{userStats.totalPoints} points</div>
              </div>
            </div>
            
            {/* Recent badges preview */}
            <div className="flex -space-x-2">
              {achievementsArray.slice(0, 2).map((achievement) => (
                <div key={achievement.id} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs border-2 border-white/30">
                  {achievement.icon}
                </div>
              ))}
            </div>
            
            <motion.div 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-blue-400 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressToNextLevel}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Expanded View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Target className="w-6 h-6 #3367D6 mx-auto mb-1" />
                    <div className="font-bold text-lg #3367D6">{userStats.pagesVisited}</div>
                    <div className="text-xs text-gray-600">Pages Visited</div>
                  </div>
                  
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Star className="w-6 h-6 #3367D6 mx-auto mb-1" />
                    <div className="font-bold text-lg #3367D6">{userStats.toolsUsed}</div>
                    <div className="text-xs text-gray-600">Tools Used</div>
                  </div>
                  
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Trophy className="w-6 h-6 #3367D6 mx-auto mb-1" />
                    <div className="font-bold text-lg #3367D6">{userStats.badgesEarned}</div>
                    <div className="text-xs text-gray-600">Badges Earned</div>
                  </div>
                  
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Zap className="w-6 h-6 #3367D6 mx-auto mb-1" />
                    <div className="font-bold text-lg #3367D6">{userStats.formsCompleted}</div>
                    <div className="text-xs text-gray-600">Forms Completed</div>
                  </div>
                </div>

                {/* Recent Achievements */}
                {recentAchievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Achievements</h4>
                    <div className="flex space-x-2 justify-center">
                      {recentAchievements.map((achievement) => (
                        <AchievementBadge
                          key={achievement.id}
                          achievement={achievement}
                          size="sm"
                          showDetails={true}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Next Level Progress */}
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">
                    {100 - (userStats.totalPoints % 100)} points to Level {userStats.level + 1}
                  </div>
                  <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#4285F4] to-blue-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressToNextLevel}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* View All Achievements Button */}
                <button
                  onClick={() => setShowGallery(true)}
                  className="w-full bg-gradient-to-r from-[#4285F4] to-[#3367D6] hover:from-#1a73e8 hover:to-[#1a73e8] text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Trophy className="w-5 h-5" />
                  <span>View All Achievements</span>
                </button>

                {/* Engagement Tips */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">💡 Quick Tips</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Use our tools to earn Scholar badges</li>
                    <li>• Complete forms to become a Communicator</li>
                    <li>• Download documents for Planner badges</li>
                    <li>• Book consultations for Commitment badges</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Achievement Gallery Modal */}
      <AchievementGallery 
        isOpen={showGallery} 
        onClose={() => setShowGallery(false)} 
      />
    </motion.div>
  );
}