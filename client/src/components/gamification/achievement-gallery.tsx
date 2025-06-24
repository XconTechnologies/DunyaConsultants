import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Trophy, X, Star, Target, Award, Zap } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { getSessionId } from './engagement-tracker';
import AchievementBadge from './achievement-badge';
import type { Achievement, UserStats } from '@shared/schema';

interface AchievementGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons = {
  explorer: Target,
  scholar: Star,
  communicator: Award,
  planner: Trophy,
  commitment: Zap,
};

const categoryColors = {
  explorer: 'from-green-500 to-emerald-500',
  scholar: 'from-blue-500 to-indigo-500',
  communicator: 'from-purple-500 to-pink-500',
  planner: 'from-orange-500 to-red-500',
  commitment: 'from-yellow-500 to-amber-500',
};

export default function AchievementGallery({ isOpen, onClose }: AchievementGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const sessionId = getSessionId();

  const { data: achievements = [] } = useQuery<Achievement[]>({
    queryKey: ['user-achievements', sessionId],
    queryFn: () => apiRequest('GET', `/api/engagement/achievements/${sessionId}`),
  });

  const { data: userStats } = useQuery<UserStats>({
    queryKey: ['user-stats', sessionId],
    queryFn: () => apiRequest('GET', `/api/engagement/stats/${sessionId}`),
  });

  if (!isOpen) return null;

  const groupedAchievements = (achievements || []).reduce((acc, achievement) => {
    if (!acc[achievement.badgeType]) {
      acc[achievement.badgeType] = [];
    }
    acc[achievement.badgeType].push(achievement);
    return acc;
  }, {} as Record<string, Achievement[]>);

  const categories = Object.keys(categoryIcons);
  const filteredAchievements = selectedCategory 
    ? groupedAchievements[selectedCategory] || []
    : achievements || [];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Achievement Gallery</h2>
                <p className="text-blue-100 mt-1">
                  {(achievements || []).length} badges earned • Level {userStats?.level || 1}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats?.totalPoints || 0}</div>
                <div className="text-sm text-blue-100">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats?.badgesEarned || 0}</div>
                <div className="text-sm text-blue-100">Badges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats?.pagesVisited || 0}</div>
                <div className="text-sm text-blue-100">Pages Visited</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats?.toolsUsed || 0}</div>
                <div className="text-sm text-blue-100">Tools Used</div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedCategory === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                const count = groupedAchievements[category]?.length || 0;
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center space-x-2 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="capitalize">{category}</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Achievement Grid */}
          <div className="p-6 overflow-y-auto max-h-96">
            {filteredAchievements.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {selectedCategory 
                    ? `No ${selectedCategory} badges yet`
                    : 'No achievements yet'
                  }
                </h3>
                <p className="text-gray-500">
                  Keep exploring and using our tools to earn your first badges!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <AchievementBadge
                      achievement={achievement}
                      size="lg"
                      showDetails={true}
                    />
                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                      <div className="flex items-center justify-center mt-2 space-x-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          +{achievement.points} points
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                          {achievement.badgeLevel}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Earned {new Date(achievement.unlockedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Progress to Next Achievement */}
          {userStats && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-3">Progress to Next Achievements</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Next Explorer Badge</span>
                  <span className="text-sm font-semibold">
                    {Math.min(userStats.pagesVisited, 10)}/10 pages
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((userStats.pagesVisited / 10) * 100, 100)}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Next Scholar Badge</span>
                  <span className="text-sm font-semibold">
                    {Math.min(userStats.toolsUsed, 5)}/5 tools
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((userStats.toolsUsed / 5) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}