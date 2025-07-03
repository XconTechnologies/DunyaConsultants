import { 
  contacts, testimonials, users, userEngagement, achievements, userStats, eligibilityChecks, consultations,
  type User, type InsertUser, type Contact, type InsertContact, 
  type Testimonial, type InsertTestimonial, type UserEngagement, type InsertUserEngagement,
  type Achievement, type InsertAchievement, type UserStats, type InsertUserStats,
  type EligibilityCheck, type InsertEligibilityCheck, type Consultation, type InsertConsultation
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  createEligibilityCheck(eligibilityCheck: InsertEligibilityCheck): Promise<EligibilityCheck>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  // Engagement tracking
  trackEngagement(engagement: InsertUserEngagement): Promise<UserEngagement>;
  getUserStats(sessionId: string): Promise<UserStats | undefined>;
  updateUserStats(sessionId: string, updates: Partial<UserStats>): Promise<UserStats>;
  getUserAchievements(sessionId: string): Promise<Achievement[]>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
  checkAndAwardBadges(sessionId: string): Promise<Achievement[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  private eligibilityChecks: Map<number, EligibilityCheck>;
  private consultations: Map<number, Consultation>;
  private userEngagements: Map<number, UserEngagement>;
  private userAchievements: Map<number, Achievement>;
  private userStatsMap: Map<string, UserStats>;
  private currentUserId: number;
  private currentContactId: number;
  private currentTestimonialId: number;
  private currentEligibilityCheckId: number;
  private currentConsultationId: number;
  private currentEngagementId: number;
  private currentAchievementId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.eligibilityChecks = new Map();
    this.consultations = new Map();
    this.userEngagements = new Map();
    this.userAchievements = new Map();
    this.userStatsMap = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentTestimonialId = 1;
    this.currentEligibilityCheckId = 1;
    this.currentConsultationId = 1;
    this.currentEngagementId = 1;
    this.currentAchievementId = 1;
    
    // Initialize with some testimonials
    this.initializeTestimonials();
  }

  private initializeTestimonials() {
    const sampleTestimonials: Omit<Testimonial, 'id'>[] = [
      {
        name: "Sarah Johnson",
        program: "MBA",
        university: "Stanford University",
        message: "Path made my dream of studying at Stanford a reality. Their expertise in visa processing and university selection was invaluable. I couldn't have done it without them!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        isActive: true,
        createdAt: new Date(),
      },
      {
        name: "Michael Chen",
        program: "MS Computer Science",
        university: "MIT", 
        message: "The team at Path guided me through every step of the process. From TOEFL preparation to visa interview, they were there for me. Now I'm at my dream university!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        isActive: true,
        createdAt: new Date(),
      },
      {
        name: "Priya Patel",
        program: "Medicine",
        university: "University of Toronto",
        message: "Professional, reliable, and incredibly supportive. Path's personalized approach helped me secure admission to my top choice medical school in Canada.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        isActive: true,
        createdAt: new Date(),
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async createEligibilityCheck(insertEligibilityCheck: InsertEligibilityCheck): Promise<EligibilityCheck> {
    const id = this.currentEligibilityCheckId++;
    const eligibilityCheck: EligibilityCheck = {
      ...insertEligibilityCheck,
      id,
      createdAt: new Date(),
    };
    this.eligibilityChecks.set(id, eligibilityCheck);
    return eligibilityCheck;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = this.currentConsultationId++;
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      createdAt: new Date(),
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async trackEngagement(insertEngagement: InsertUserEngagement): Promise<UserEngagement> {
    const id = this.currentEngagementId++;
    const engagement: UserEngagement = {
      ...insertEngagement,
      id,
      createdAt: new Date(),
    };
    this.userEngagements.set(id, engagement);
    
    // Update user stats
    await this.updateUserStatsFromEngagement(insertEngagement);
    
    return engagement;
  }

  async getUserStats(sessionId: string): Promise<UserStats | undefined> {
    return this.userStatsMap.get(sessionId);
  }

  async updateUserStats(sessionId: string, updates: Partial<UserStats>): Promise<UserStats> {
    const existing = this.userStatsMap.get(sessionId);
    const stats: UserStats = {
      id: existing?.id || Math.floor(Math.random() * 1000000),
      sessionId,
      userId: updates.userId || existing?.userId || null,
      totalPoints: updates.totalPoints || existing?.totalPoints || 0,
      level: updates.level || existing?.level || 1,
      pagesVisited: updates.pagesVisited || existing?.pagesVisited || 0,
      toolsUsed: updates.toolsUsed || existing?.toolsUsed || 0,
      formsCompleted: updates.formsCompleted || existing?.formsCompleted || 0,
      documentsDownloaded: updates.documentsDownloaded || existing?.documentsDownloaded || 0,
      consultationsBooked: updates.consultationsBooked || existing?.consultationsBooked || 0,
      badgesEarned: updates.badgesEarned || existing?.badgesEarned || 0,
      streak: updates.streak || existing?.streak || 0,
      lastActiveAt: new Date(),
      createdAt: existing?.createdAt || new Date(),
    };
    this.userStatsMap.set(sessionId, stats);
    return stats;
  }

  async getUserAchievements(sessionId: string): Promise<Achievement[]> {
    return Array.from(this.userAchievements.values()).filter(
      achievement => achievement.sessionId === sessionId
    );
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const id = this.currentAchievementId++;
    const achievement: Achievement = {
      ...insertAchievement,
      id,
      unlockedAt: new Date(),
    };
    this.userAchievements.set(id, achievement);
    return achievement;
  }

  async checkAndAwardBadges(sessionId: string): Promise<Achievement[]> {
    const stats = await this.getUserStats(sessionId);
    if (!stats) return [];

    const existingAchievements = await this.getUserAchievements(sessionId);
    const existingBadgeTypes = new Set(existingAchievements.map(a => `${a.badgeType}-${a.badgeLevel}`));
    const newAchievements: Achievement[] = [];

    // Define badge criteria
    const badgeCriteria = [
      // Explorer badges
      { type: 'explorer', level: 'bronze', title: 'First Steps', description: 'Visited 3 pages', icon: '🗺️', points: 10, criteria: () => stats.pagesVisited >= 3 },
      { type: 'explorer', level: 'silver', title: 'Site Navigator', description: 'Visited 10 pages', icon: '🧭', points: 25, criteria: () => stats.pagesVisited >= 10 },
      { type: 'explorer', level: 'gold', title: 'Master Explorer', description: 'Visited 25 pages', icon: '🏆', points: 50, criteria: () => stats.pagesVisited >= 25 },
      
      // Scholar badges
      { type: 'scholar', level: 'bronze', title: 'Knowledge Seeker', description: 'Used 2 tools', icon: '📚', points: 15, criteria: () => stats.toolsUsed >= 2 },
      { type: 'scholar', level: 'silver', title: 'Research Expert', description: 'Used 5 tools', icon: '🔬', points: 30, criteria: () => stats.toolsUsed >= 5 },
      { type: 'scholar', level: 'gold', title: 'Academic Master', description: 'Used all available tools', icon: '🎓', points: 75, criteria: () => stats.toolsUsed >= 10 },
      
      // Communicator badges
      { type: 'communicator', level: 'bronze', title: 'First Contact', description: 'Completed 1 form', icon: '💬', points: 20, criteria: () => stats.formsCompleted >= 1 },
      { type: 'communicator', level: 'silver', title: 'Active Inquirer', description: 'Completed 3 forms', icon: '📞', points: 40, criteria: () => stats.formsCompleted >= 3 },
      { type: 'communicator', level: 'gold', title: 'Engagement Champion', description: 'Completed 5 forms', icon: '🤝', points: 80, criteria: () => stats.formsCompleted >= 5 },
      
      // Planner badges
      { type: 'planner', level: 'bronze', title: 'Future Thinker', description: 'Downloaded 1 document', icon: '📋', points: 15, criteria: () => stats.documentsDownloaded >= 1 },
      { type: 'planner', level: 'silver', title: 'Preparation Pro', description: 'Downloaded 3 documents', icon: '📁', points: 35, criteria: () => stats.documentsDownloaded >= 3 },
      { type: 'planner', level: 'gold', title: 'Master Organizer', description: 'Downloaded 5+ documents', icon: '🗂️', points: 60, criteria: () => stats.documentsDownloaded >= 5 },
      
      // Commitment badges
      { type: 'commitment', level: 'bronze', title: 'Taking Action', description: 'Booked first consultation', icon: '⭐', points: 50, criteria: () => stats.consultationsBooked >= 1 },
      { type: 'commitment', level: 'silver', title: 'Serious Student', description: 'Booked 2 consultations', icon: '🌟', points: 100, criteria: () => stats.consultationsBooked >= 2 },
      { type: 'commitment', level: 'gold', title: 'Dedicated Achiever', description: 'Booked 3+ consultations', icon: '✨', points: 150, criteria: () => stats.consultationsBooked >= 3 },
    ];

    // Check each badge criteria
    for (const badge of badgeCriteria) {
      const badgeKey = `${badge.type}-${badge.level}`;
      if (!existingBadgeTypes.has(badgeKey) && badge.criteria()) {
        const newAchievement = await this.createAchievement({
          sessionId,
          userId: stats.userId,
          badgeType: badge.type,
          badgeLevel: badge.level,
          title: badge.title,
          description: badge.description,
          icon: badge.icon,
          points: badge.points,
        });
        newAchievements.push(newAchievement);
        
        // Update user stats with new badge and points
        await this.updateUserStats(sessionId, {
          totalPoints: stats.totalPoints + badge.points,
          badgesEarned: stats.badgesEarned + 1,
          level: Math.floor((stats.totalPoints + badge.points) / 100) + 1,
        });
      }
    }

    return newAchievements;
  }

  private async updateUserStatsFromEngagement(engagement: InsertUserEngagement) {
    const stats = await this.getUserStats(engagement.sessionId);
    const updates: Partial<UserStats> = {};

    switch (engagement.action) {
      case 'page_view':
        updates.pagesVisited = (stats?.pagesVisited || 0) + 1;
        break;
      case 'tool_use':
        updates.toolsUsed = (stats?.toolsUsed || 0) + 1;
        break;
      case 'form_submit':
        updates.formsCompleted = (stats?.formsCompleted || 0) + 1;
        break;
      case 'document_download':
        updates.documentsDownloaded = (stats?.documentsDownloaded || 0) + 1;
        break;
      case 'consultation_booking':
        updates.consultationsBooked = (stats?.consultationsBooked || 0) + 1;
        break;
    }

    if (Object.keys(updates).length > 0) {
      updates.totalPoints = (stats?.totalPoints || 0) + (engagement.points || 0);
      await this.updateUserStats(engagement.sessionId, updates);
    }
  }
}

export const storage = new MemStorage();
