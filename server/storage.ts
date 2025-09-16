import { 
  contacts, testimonials, users, userEngagement, achievements, userStats, eligibilityChecks, consultations,
  adminUsers, blogPosts, services, pages, adminSessions, userSessions, media, blogPostRevisions, auditLogs,
  type User, type InsertUser, type Contact, type InsertContact, 
  type Testimonial, type InsertTestimonial, type UserEngagement, type InsertUserEngagement,
  type Achievement, type InsertAchievement, type UserStats, type InsertUserStats,
  type EligibilityCheck, type InsertEligibilityCheck, type Consultation, type InsertConsultation,
  type AdminUser, type InsertAdminUser, type BlogPost, type InsertBlogPost,
  type Service, type InsertService, type Page, type InsertPage,
  type AdminSession, type InsertAdminSession, type UserSession, type InsertUserSession,
  type Media, type InsertMedia, type BlogPostRevision, type InsertBlogPostRevision,
  type AuditLog, type InsertAuditLog
} from "@shared/schema";
import bcrypt from "bcryptjs";

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
  
  // Admin Authentication
  getAdminByUsername(username: string): Promise<AdminUser | undefined>;
  getAdminById(id: number): Promise<AdminUser | undefined>;
  createAdminUser(adminUser: InsertAdminUser): Promise<AdminUser>;
  createAdminSession(session: InsertAdminSession): Promise<AdminSession>;
  getAdminSession(token: string): Promise<AdminSession | undefined>;
  deleteAdminSession(token: string): Promise<void>;
  updateAdminLastLogin(id: number): Promise<void>;
  
  // Blog Management
  getBlogPosts(published?: boolean): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, updates: Partial<BlogPost>): Promise<BlogPost>;
  deleteBlogPost(id: number): Promise<void>;
  publishBlogPost(id: number): Promise<BlogPost>;
  incrementBlogViews(id: number): Promise<void>;
  
  // Services Management
  getServices(active?: boolean): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: number, updates: Partial<Service>): Promise<Service>;
  deleteService(id: number): Promise<void>;
  
  // Pages Management
  getPages(published?: boolean): Promise<Page[]>;
  getPage(id: number): Promise<Page | undefined>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  createPage(page: InsertPage): Promise<Page>;
  updatePage(id: number, updates: Partial<Page>): Promise<Page>;
  deletePage(id: number): Promise<void>;
  publishPage(id: number): Promise<Page>;
  
  // User Session Management (for reader authentication)
  createUserSession(session: InsertUserSession): Promise<UserSession>;
  getUserSession(token: string): Promise<UserSession | undefined>;
  deleteUserSession(token: string): Promise<void>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserById(id: number): Promise<User | undefined>;
  
  // Enhanced Blog Management with Status Workflow
  getBlogPostsByStatus(status: BlogPost["status"]): Promise<BlogPost[]>;
  getBlogPostsByAuthor(authorId: number): Promise<BlogPost[]>;
  updateBlogPostStatus(id: number, status: BlogPost["status"], approverId?: number): Promise<BlogPost>;
  getRelatedBlogPosts(postId: number, tags: string[], limit?: number): Promise<BlogPost[]>;
  
  // Media Library
  getMedia(): Promise<Media[]>;
  getMediaById(id: number): Promise<Media | undefined>;
  createMedia(media: InsertMedia): Promise<Media>;
  updateMedia(id: number, updates: Partial<Media>): Promise<Media>;
  deleteMedia(id: number): Promise<void>;
  
  // Blog Post Revisions
  getBlogPostRevisions(postId: number): Promise<BlogPostRevision[]>;
  createBlogPostRevision(revision: InsertBlogPostRevision): Promise<BlogPostRevision>;
  
  // Audit Logs
  getAuditLogs(limit?: number, offset?: number): Promise<AuditLog[]>;
  createAuditLog(auditLog: InsertAuditLog): Promise<AuditLog>;
  getAuditLogsByEntity(entity: string, entityId: number): Promise<AuditLog[]>;
}



import { db, withRetry } from "./db";
import { eq, and, desc, asc, sql } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const [user] = await db.insert(users).values({
      ...insertUser,
      password: hashedPassword
    }).returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials).where(eq(testimonials.isActive, true)).orderBy(desc(testimonials.createdAt));
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db.insert(testimonials).values(insertTestimonial).returning();
    return testimonial;
  }

  async createEligibilityCheck(insertEligibilityCheck: InsertEligibilityCheck): Promise<EligibilityCheck> {
    const [eligibilityCheck] = await db.insert(eligibilityChecks).values(insertEligibilityCheck).returning();
    return eligibilityCheck;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const [consultation] = await db.insert(consultations).values(insertConsultation).returning();
    return consultation;
  }

  async trackEngagement(insertEngagement: InsertUserEngagement): Promise<UserEngagement> {
    return await withRetry(async () => {
      const [engagement] = await db.insert(userEngagement).values(insertEngagement).returning();
      await this.updateUserStatsFromEngagement(insertEngagement);
      return engagement;
    });
  }

  async getUserStats(sessionId: string): Promise<UserStats | undefined> {
    return await withRetry(async () => {
      const [stats] = await db.select().from(userStats).where(eq(userStats.sessionId, sessionId));
      return stats || undefined;
    });
  }

  async updateUserStats(sessionId: string, updates: Partial<UserStats>): Promise<UserStats> {
    return await withRetry(async () => {
      const existing = await this.getUserStats(sessionId);
      
      if (existing) {
        const [updated] = await db
          .update(userStats)
          .set({ ...updates, lastActiveAt: new Date() })
          .where(eq(userStats.sessionId, sessionId))
          .returning();
        return updated;
      } else {
        const [created] = await db.insert(userStats).values({
          sessionId,
          ...updates,
          lastActiveAt: new Date(),
        }).returning();
        return created;
      }
    });
  }

  async getUserAchievements(sessionId: string): Promise<Achievement[]> {
    return await db.select().from(achievements).where(eq(achievements.sessionId, sessionId)).orderBy(desc(achievements.unlockedAt));
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const [achievement] = await db.insert(achievements).values(insertAchievement).returning();
    return achievement;
  }

  async checkAndAwardBadges(sessionId: string): Promise<Achievement[]> {
    const stats = await this.getUserStats(sessionId);
    if (!stats) return [];

    const existingAchievements = await this.getUserAchievements(sessionId);
    const existingBadgeTypes = new Set(existingAchievements.map(a => `${a.badgeType}-${a.badgeLevel}`));
    const newAchievements: Achievement[] = [];

    // Define badge criteria (same as MemStorage)
    const badgeCriteria = [
      { type: 'explorer', level: 'bronze', title: 'First Steps', description: 'Visited 3 pages', icon: '🗺️', points: 10, criteria: () => (stats.pagesVisited || 0) >= 3 },
      { type: 'explorer', level: 'silver', title: 'Site Navigator', description: 'Visited 10 pages', icon: '🧭', points: 25, criteria: () => (stats.pagesVisited || 0) >= 10 },
      { type: 'explorer', level: 'gold', title: 'Master Explorer', description: 'Visited 25 pages', icon: '🏆', points: 50, criteria: () => (stats.pagesVisited || 0) >= 25 },
      { type: 'scholar', level: 'bronze', title: 'Knowledge Seeker', description: 'Used 2 tools', icon: '📚', points: 15, criteria: () => (stats.toolsUsed || 0) >= 2 },
      { type: 'scholar', level: 'silver', title: 'Research Expert', description: 'Used 5 tools', icon: '🔬', points: 30, criteria: () => (stats.toolsUsed || 0) >= 5 },
      { type: 'scholar', level: 'gold', title: 'Academic Master', description: 'Used all available tools', icon: '🎓', points: 75, criteria: () => (stats.toolsUsed || 0) >= 10 },
      { type: 'communicator', level: 'bronze', title: 'First Contact', description: 'Completed 1 form', icon: '💬', points: 20, criteria: () => (stats.formsCompleted || 0) >= 1 },
      { type: 'communicator', level: 'silver', title: 'Active Inquirer', description: 'Completed 3 forms', icon: '📞', points: 40, criteria: () => (stats.formsCompleted || 0) >= 3 },
      { type: 'communicator', level: 'gold', title: 'Engagement Champion', description: 'Completed 5 forms', icon: '🤝', points: 80, criteria: () => (stats.formsCompleted || 0) >= 5 },
      { type: 'planner', level: 'bronze', title: 'Future Thinker', description: 'Downloaded 1 document', icon: '📋', points: 15, criteria: () => (stats.documentsDownloaded || 0) >= 1 },
      { type: 'planner', level: 'silver', title: 'Preparation Pro', description: 'Downloaded 3 documents', icon: '📁', points: 35, criteria: () => (stats.documentsDownloaded || 0) >= 3 },
      { type: 'planner', level: 'gold', title: 'Master Organizer', description: 'Downloaded 5+ documents', icon: '🗂️', points: 60, criteria: () => (stats.documentsDownloaded || 0) >= 5 },
      { type: 'commitment', level: 'bronze', title: 'Taking Action', description: 'Booked first consultation', icon: '⭐', points: 50, criteria: () => (stats.consultationsBooked || 0) >= 1 },
      { type: 'commitment', level: 'silver', title: 'Serious Student', description: 'Booked 2 consultations', icon: '🌟', points: 100, criteria: () => (stats.consultationsBooked || 0) >= 2 },
      { type: 'commitment', level: 'gold', title: 'Dedicated Achiever', description: 'Booked 3+ consultations', icon: '✨', points: 150, criteria: () => (stats.consultationsBooked || 0) >= 3 },
    ];

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
        
        await this.updateUserStats(sessionId, {
          totalPoints: (stats.totalPoints || 0) + badge.points,
          badgesEarned: (stats.badgesEarned || 0) + 1,
          level: Math.floor(((stats.totalPoints || 0) + badge.points) / 100) + 1,
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

  // Admin Authentication Methods
  async getAdminByUsername(username: string): Promise<AdminUser | undefined> {
    const [admin] = await db.select().from(adminUsers).where(eq(adminUsers.username, username));
    return admin || undefined;
  }

  async getAdminById(id: number): Promise<AdminUser | undefined> {
    const [admin] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return admin || undefined;
  }

  async createAdminUser(insertAdminUser: InsertAdminUser): Promise<AdminUser> {
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(insertAdminUser.password, 10);
    const [admin] = await db.insert(adminUsers).values({
      ...insertAdminUser,
      password: hashedPassword
    }).returning();
    return admin;
  }

  async createAdminSession(insertSession: InsertAdminSession): Promise<AdminSession> {
    const [session] = await db.insert(adminSessions).values(insertSession).returning();
    return session;
  }

  async getAdminSession(token: string): Promise<AdminSession | undefined> {
    const [session] = await db.select().from(adminSessions).where(eq(adminSessions.sessionToken, token));
    if (session && session.expiresAt > new Date()) {
      return session;
    }
    if (session) {
      await this.deleteAdminSession(token);
    }
    return undefined;
  }

  async deleteAdminSession(token: string): Promise<void> {
    await db.delete(adminSessions).where(eq(adminSessions.sessionToken, token));
  }

  async updateAdminLastLogin(id: number): Promise<void> {
    await db.update(adminUsers).set({ lastLogin: new Date() }).where(eq(adminUsers.id, id));
  }

  // Blog Management Methods
  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    if (published !== undefined) {
      return await db.select().from(blogPosts)
        .where(eq(blogPosts.isPublished, published))
        .orderBy(desc(blogPosts.createdAt));
    }
    return await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || undefined;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db.insert(blogPosts).values(insertBlogPost).returning();
    return post;
  }

  async updateBlogPost(id: number, updates: Partial<BlogPost>): Promise<BlogPost> {
    const [post] = await db.update(blogPosts)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  async deleteBlogPost(id: number): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async publishBlogPost(id: number): Promise<BlogPost> {
    const [post] = await db.update(blogPosts)
      .set({ isPublished: true, publishedAt: new Date(), updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  // Note: Views functionality removed - views column doesn't exist in database

  // Services Management Methods
  async getServices(active?: boolean): Promise<Service[]> {
    if (active !== undefined) {
      return await db.select().from(services)
        .where(eq(services.isActive, active))
        .orderBy(asc(services.displayOrder), desc(services.createdAt));
    }
    return await db.select().from(services).orderBy(asc(services.displayOrder), desc(services.createdAt));
  }

  async getService(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service || undefined;
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.slug, slug));
    return service || undefined;
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(insertService).returning();
    return service;
  }

  async updateService(id: number, updates: Partial<Service>): Promise<Service> {
    const [service] = await db.update(services)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(services.id, id))
      .returning();
    return service;
  }

  async deleteService(id: number): Promise<void> {
    await db.delete(services).where(eq(services.id, id));
  }

  // Pages Management Methods
  async getPages(published?: boolean): Promise<Page[]> {
    if (published !== undefined) {
      return await db.select().from(pages)
        .where(eq(pages.isPublished, published))
        .orderBy(desc(pages.createdAt));
    }
    return await db.select().from(pages).orderBy(desc(pages.createdAt));
  }

  async getPage(id: number): Promise<Page | undefined> {
    const [page] = await db.select().from(pages).where(eq(pages.id, id));
    return page || undefined;
  }

  async getPageBySlug(slug: string): Promise<Page | undefined> {
    const [page] = await db.select().from(pages).where(eq(pages.slug, slug));
    return page || undefined;
  }

  async createPage(insertPage: InsertPage): Promise<Page> {
    const [page] = await db.insert(pages).values(insertPage).returning();
    return page;
  }

  async updatePage(id: number, updates: Partial<Page>): Promise<Page> {
    const [page] = await db.update(pages)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(pages.id, id))
      .returning();
    return page;
  }

  async deletePage(id: number): Promise<void> {
    await db.delete(pages).where(eq(pages.id, id));
  }

  async publishPage(id: number): Promise<Page> {
    const [page] = await db.update(pages)
      .set({ isPublished: true, publishedAt: new Date(), updatedAt: new Date() })
      .where(eq(pages.id, id))
      .returning();
    return page;
  }

  async incrementBlogViews(id: number): Promise<void> {
    await db.update(blogPosts)
      .set({ viewCount: sql`${blogPosts.viewCount} + 1` })
      .where(eq(blogPosts.id, id));
  }

  // User Session Management Methods
  async createUserSession(insertSession: InsertUserSession): Promise<UserSession> {
    const [session] = await db.insert(userSessions).values(insertSession).returning();
    return session;
  }

  async getUserSession(token: string): Promise<UserSession | undefined> {
    const [session] = await db.select().from(userSessions).where(eq(userSessions.sessionToken, token));
    if (session && session.expiresAt > new Date()) {
      return session;
    }
    if (session) {
      await this.deleteUserSession(token);
    }
    return undefined;
  }

  async deleteUserSession(token: string): Promise<void> {
    await db.delete(userSessions).where(eq(userSessions.sessionToken, token));
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async getUserById(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  // Enhanced Blog Management Methods
  async getBlogPostsByStatus(status: BlogPost["status"]): Promise<BlogPost[]> {
    return await db.select().from(blogPosts)
      .where(eq(blogPosts.status, status))
      .orderBy(desc(blogPosts.updatedAt));
  }

  async getBlogPostsByAuthor(authorId: number): Promise<BlogPost[]> {
    return await db.select().from(blogPosts)
      .where(eq(blogPosts.authorId, authorId))
      .orderBy(desc(blogPosts.updatedAt));
  }

  async updateBlogPostStatus(id: number, status: BlogPost["status"], approverId?: number): Promise<BlogPost> {
    const updates: Partial<BlogPost> = { 
      status, 
      updatedAt: new Date() 
    };
    
    if (approverId) {
      updates.approverId = approverId;
    }
    
    // Properly synchronize status with isPublished/publishedAt fields
    switch (status) {
      case 'published':
        updates.isPublished = true;
        updates.publishedAt = new Date();
        break;
      case 'draft':
      case 'in_review':
      case 'archived':
        updates.isPublished = false;
        // Don't clear publishedAt - keep it for history
        break;
    }
    
    const [post] = await db.update(blogPosts)
      .set(updates)
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  async getRelatedBlogPosts(postId: number, tags: string[], limit: number = 6): Promise<BlogPost[]> {
    // Get related posts by matching tags, excluding current post
    return await db.select().from(blogPosts)
      .where(and(
        eq(blogPosts.isPublished, true),
        eq(blogPosts.status, 'published'),
        sql`${blogPosts.id} != ${postId}`,
        sql`${blogPosts.tags} && ${tags}`
      ))
      .orderBy(desc(blogPosts.publishedAt))
      .limit(limit);
  }

  // Media Library Methods
  async getMedia(): Promise<Media[]> {
    return await db.select().from(media).orderBy(desc(media.createdAt));
  }

  async getMediaById(id: number): Promise<Media | undefined> {
    const [mediaItem] = await db.select().from(media).where(eq(media.id, id));
    return mediaItem || undefined;
  }

  async createMedia(insertMedia: InsertMedia): Promise<Media> {
    const [mediaItem] = await db.insert(media).values(insertMedia).returning();
    return mediaItem;
  }

  async updateMedia(id: number, updates: Partial<Media>): Promise<Media> {
    const [mediaItem] = await db.update(media)
      .set(updates)
      .where(eq(media.id, id))
      .returning();
    return mediaItem;
  }

  async deleteMedia(id: number): Promise<void> {
    await db.delete(media).where(eq(media.id, id));
  }

  // Blog Post Revisions Methods
  async getBlogPostRevisions(postId: number): Promise<BlogPostRevision[]> {
    return await db.select().from(blogPostRevisions)
      .where(eq(blogPostRevisions.postId, postId))
      .orderBy(desc(blogPostRevisions.createdAt));
  }

  async createBlogPostRevision(insertRevision: InsertBlogPostRevision): Promise<BlogPostRevision> {
    const [revision] = await db.insert(blogPostRevisions).values(insertRevision).returning();
    return revision;
  }

  // Audit Logs Methods
  async getAuditLogs(limit: number = 100, offset: number = 0): Promise<AuditLog[]> {
    return await db.select().from(auditLogs)
      .orderBy(desc(auditLogs.createdAt))
      .limit(limit)
      .offset(offset);
  }

  async createAuditLog(insertAuditLog: InsertAuditLog): Promise<AuditLog> {
    const [auditLog] = await db.insert(auditLogs).values(insertAuditLog).returning();
    return auditLog;
  }

  async getAuditLogsByEntity(entity: string, entityId: number): Promise<AuditLog[]> {
    return await db.select().from(auditLogs)
      .where(and(
        eq(auditLogs.entity, entity),
        eq(auditLogs.entityId, entityId)
      ))
      .orderBy(desc(auditLogs.createdAt));
  }
}

export const storage = new DatabaseStorage();
