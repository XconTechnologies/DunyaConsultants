import { 
  contacts, testimonials, users, userEngagement, achievements, userStats, eligibilityChecks, consultations,
  adminUsers, blogPosts, services, pages, adminSessions, userSessions, media, blogPostRevisions, auditLogs, postAssignments, eventAssignments, leadAssignments, editingSessions, editRequests,
  categories, blogPostCategories, events, eventRegistrations, qrCodes, backupConfigs, backupHistory,
  customForms, formFields, customFormSubmissions,
  type User, type InsertUser, type Contact, type InsertContact, 
  type Testimonial, type InsertTestimonial, type UserEngagement, type InsertUserEngagement,
  type Achievement, type InsertAchievement, type UserStats, type InsertUserStats,
  type EligibilityCheck, type InsertEligibilityCheck, type Consultation, type InsertConsultation,
  type AdminUser, type InsertAdminUser, type BlogPost, type InsertBlogPost,
  type Service, type InsertService, type Page, type InsertPage,
  type AdminSession, type InsertAdminSession, type UserSession, type InsertUserSession,
  type Media, type InsertMedia, type BlogPostRevision, type InsertBlogPostRevision,
  type AuditLog, type InsertAuditLog, type PostAssignment, type InsertPostAssignment,
  type EventAssignment, type InsertEventAssignment, type LeadAssignment, type InsertLeadAssignment,
  type EditingSession, type InsertEditingSession, type EditRequest, type InsertEditRequest,
  type Category, type InsertCategory, type BlogPostCategory, type InsertBlogPostCategory,
  type Event, type InsertEvent, type EventRegistration, type InsertEventRegistration,
  type QrCode, type InsertQrCode,
  type BackupConfig, type InsertBackupConfig, type BackupHistory, type InsertBackupHistory,
  type CustomForm, type InsertCustomForm, type FormField, type InsertFormField,
  type CustomFormSubmission, type InsertCustomFormSubmission
} from "@shared/schema";
import bcrypt from "bcryptjs";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getEvents(): Promise<Event[]>;
  getEventById(id: number): Promise<Event | undefined>;
  getEventBySlug(slug: string): Promise<Event | undefined>;
  createEventRegistration(registration: InsertEventRegistration & { token: string }): Promise<EventRegistration>;
  getEventRegistrationByToken(token: string): Promise<EventRegistration | undefined>;
  updateEventRegistrationQR(id: number, qrCodeUrl: string, sheetRowId?: string): Promise<EventRegistration>;
  updateEventRegistrationToken(id: number, token: string): Promise<EventRegistration>;
  markAttendance(token: string): Promise<EventRegistration | undefined>;
  markAttendanceById(id: number): Promise<EventRegistration | undefined>;
  getEventRegistrations(eventId?: number): Promise<EventRegistration[]>;
  getAllEventRegistrations(): Promise<EventRegistration[]>;
  updatePrizeStatus(id: number, status: 'pending' | 'eligible' | 'distributed'): Promise<EventRegistration>;
  trashEventRegistration(id: number, trashedBy: number, reason?: string): Promise<EventRegistration>;
  restoreEventRegistration(id: number): Promise<EventRegistration>;
  getTrashedEventRegistrations(): Promise<EventRegistration[]>;
  deleteEventRegistration(id: number): Promise<void>;
  bulkDeleteEventRegistrations(ids: number[]): Promise<void>;
  getAllEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, updates: Partial<InsertEvent>): Promise<Event>;
  deleteEvent(id: number): Promise<void>;
  createEligibilityCheck(eligibilityCheck: InsertEligibilityCheck): Promise<EligibilityCheck>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  updateConsultationStatus(id: number, status: string): Promise<Consultation>;
  bulkDeleteConsultations(ids: number[]): Promise<void>;
  
  // QR Code Management
  createQrCode(qrCode: InsertQrCode): Promise<QrCode>;
  getQrCodes(): Promise<QrCode[]>;
  getQrCode(id: number): Promise<QrCode | undefined>;
  updateQrCodeImage(id: number, qrImageUrl: string): Promise<QrCode>;
  incrementQrScan(id: number): Promise<QrCode>;
  trashQrCode(id: number, trashedBy: number, reason?: string): Promise<QrCode>;
  restoreQrCode(id: number): Promise<QrCode>;
  getTrashedQrCodes(): Promise<QrCode[]>;
  getUserQRCodes(userId: number): Promise<QrCode[]>; // Get QR codes created by specific user
  
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
  updateAdminCredentials(id: number, credentials: { username: string; password: string }): Promise<AdminUser>;
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
  verifyBlogPost(id: number, verifiedBy: number): Promise<BlogPost | undefined>;
  unverifyBlogPost(id: number): Promise<BlogPost | undefined>;
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
  getMediaByFilename(filename: string): Promise<Media | undefined>;
  createMedia(media: InsertMedia): Promise<Media>;
  updateMedia(id: number, updates: Partial<Media>): Promise<Media>;
  deleteMedia(id: number): Promise<void>;
  getUserMedia(userId: number): Promise<Media[]>; // Get media uploaded by specific user
  
  // Blog Post Revisions
  getBlogPostRevisions(postId: number): Promise<BlogPostRevision[]>;
  createBlogPostRevision(revision: InsertBlogPostRevision): Promise<BlogPostRevision>;
  
  // Audit Logs
  getAuditLogs(limit?: number, offset?: number): Promise<AuditLog[]>;
  createAuditLog(auditLog: InsertAuditLog): Promise<AuditLog>;
  getAuditLogsByEntity(entity: string, entityId: number): Promise<AuditLog[]>;
  getAuditLogsByActor(actorId: number): Promise<AuditLog[]>;
  getUserActivityLogs(userId?: number, limit?: number): Promise<(AuditLog & { actorUsername: string })[]>;
  
  // User Management (Admin Operations)
  getAllAdminUsers(): Promise<AdminUser[]>;
  getAdminUserById(id: number): Promise<AdminUser | undefined>;
  updateAdminUser(id: number, updates: Partial<AdminUser>): Promise<AdminUser>;
  deleteAdminUser(id: number): Promise<void>;
  bulkDeleteAdminUsers(ids: number[], excludeId?: number): Promise<void>;
  
  // Post Assignment Management
  assignPostToUser(assignment: InsertPostAssignment): Promise<PostAssignment>;
  removePostAssignment(userId: number, postId: number): Promise<void>;
  getUserPostAssignments(userId: number): Promise<PostAssignment[]>;
  getPostAssignments(postId: number): Promise<PostAssignment[]>;
  getUserAssignedPosts(userId: number): Promise<BlogPost[]>;
  hasUserPostAssignments(userId: number): Promise<boolean>; // Check if user has any post assignments
  
  // Event Assignment Management
  assignEventToUser(assignment: InsertEventAssignment): Promise<EventAssignment>;
  removeEventAssignment(userId: number, eventId: number): Promise<void>;
  getUserEventAssignments(userId: number): Promise<EventAssignment[]>;
  getEventAssignments(eventId: number): Promise<EventAssignment[]>;
  getUserAssignedEvents(userId: number): Promise<Event[]>;
  hasUserEventAssignments(userId: number): Promise<boolean>; // Check if user has any event assignments
  
  // Lead Assignment Management
  assignLeadToUser(assignment: InsertLeadAssignment): Promise<LeadAssignment>;
  removeLeadAssignment(userId: number, leadId: number): Promise<void>;
  getUserLeadAssignments(userId: number): Promise<LeadAssignment[]>;
  getLeadAssignments(leadId: number): Promise<LeadAssignment[]>;
  getUserAssignedLeads(userId: number): Promise<Consultation[]>;
  hasUserLeadAssignments(userId: number): Promise<boolean>; // Check if user has any lead assignments
  
  // Editing Session Management
  startEditingSession(session: InsertEditingSession): Promise<EditingSession>;
  updateEditingActivity(sessionId: number): Promise<void>;
  endEditingSession(sessionId: number): Promise<void>;
  getActiveEditingSessions(postId: number): Promise<EditingSession[]>;
  getAllActiveEditingSessions(): Promise<EditingSession[]>;
  getUserEditingSession(userId: number, postId: number): Promise<EditingSession | undefined>;
  cleanupInactiveEditingSessions(): Promise<void>;
  
  // Edit Request Management
  createEditRequest(request: InsertEditRequest): Promise<EditRequest>;
  getEditRequest(id: number): Promise<EditRequest | undefined>;
  getUserEditRequests(userId: number): Promise<EditRequest[]>;
  
  // Category Management
  getCategories(active?: boolean): Promise<Category[]>;
  getHierarchicalCategories(active?: boolean): Promise<any[]>;
  getParentCategories(active?: boolean): Promise<Category[]>;
  getChildCategories(parentId: number, active?: boolean): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategory(id: number, updates: Partial<Category>): Promise<Category>;
  deleteCategory(id: number): Promise<void>;
  
  // Blog Post Categories (Many-to-Many)
  getBlogPostCategories(postId: number): Promise<Category[]>;
  assignCategoryToBlogPost(blogPostId: number, categoryId: number): Promise<BlogPostCategory>;
  removeCategoryFromBlogPost(blogPostId: number, categoryId: number): Promise<void>;
  updateBlogPostCategories(blogPostId: number, categoryIds: number[]): Promise<void>;
  getPostEditRequests(postId: number): Promise<EditRequest[]>;
  updateEditRequestStatus(id: number, status: string, respondedAt?: Date): Promise<EditRequest>;
  deleteEditRequest(id: number): Promise<void>;
  
  // Trash Management (Soft Delete)
  softDeleteMedia(id: number, trashedBy: number, reason?: string): Promise<Media>;
  softDeleteBlogPost(id: number, trashedBy: number, reason?: string): Promise<BlogPost>;
  softDeleteCategory(id: number, trashedBy: number, reason?: string): Promise<Category>;
  softDeleteEvent(id: number, trashedBy: number, reason?: string): Promise<Event>;
  softDeleteAdminUser(id: number, trashedBy: number, reason?: string): Promise<AdminUser>;
  
  // Restore from Trash
  restoreMedia(id: number): Promise<Media>;
  restoreBlogPost(id: number): Promise<BlogPost>;
  restoreCategory(id: number): Promise<Category>;
  restoreEvent(id: number): Promise<Event>;
  restoreAdminUser(id: number): Promise<AdminUser>;
  
  // Permanent Delete (Purge)
  purgeMedia(id: number): Promise<void>;
  purgeBlogPost(id: number): Promise<void>;
  purgeCategory(id: number): Promise<void>;
  purgeEvent(id: number): Promise<void>;
  purgeAdminUser(id: number): Promise<void>;
  
  // Get Trashed Items
  getTrashedItems(type?: string): Promise<{
    media?: Media[];
    blogPosts?: BlogPost[];
    categories?: Category[];
    events?: Event[];
    adminUsers?: AdminUser[];
  }>;
  
  // Backup Management
  getBackupConfig(): Promise<BackupConfig | undefined>;
  createBackupConfig(config: InsertBackupConfig): Promise<BackupConfig>;
  updateBackupConfig(id: number, updates: Partial<BackupConfig>): Promise<BackupConfig>;
  createBackupHistory(backup: InsertBackupHistory): Promise<BackupHistory>;
  updateBackupHistory(id: number, updates: Partial<BackupHistory>): Promise<BackupHistory>;
  getBackupHistory(limit?: number): Promise<BackupHistory[]>;
  getBackupById(id: number): Promise<BackupHistory | undefined>;
  deleteBackupHistory(id: number): Promise<void>;
  
  // Custom Forms (Form Builder)
  getCustomForms(activeOnly?: boolean): Promise<CustomForm[]>;
  getCustomFormById(id: number): Promise<CustomForm | undefined>;
  getCustomFormBySlug(slug: string): Promise<CustomForm | undefined>;
  createCustomForm(form: InsertCustomForm): Promise<CustomForm>;
  updateCustomForm(id: number, updates: Partial<CustomForm>): Promise<CustomForm>;
  deleteCustomForm(id: number): Promise<void>;
  getFormFields(formId: number): Promise<FormField[]>;
  createFormField(field: InsertFormField): Promise<FormField>;
  updateFormField(id: number, updates: Partial<FormField>): Promise<FormField>;
  deleteFormField(id: number): Promise<void>;
  reorderFormFields(formId: number, fieldOrders: { id: number; order: number }[]): Promise<void>;
  getCustomFormSubmissions(formId?: number): Promise<CustomFormSubmission[]>;
  getCustomFormSubmissionById(id: number): Promise<CustomFormSubmission | undefined>;
  createCustomFormSubmission(submission: InsertCustomFormSubmission): Promise<CustomFormSubmission>;
  updateCustomFormSubmission(id: number, updates: Partial<CustomFormSubmission>): Promise<CustomFormSubmission>;
  deleteCustomFormSubmission(id: number): Promise<void>;
}



import { db, withRetry } from "./db";
import { eq, and, desc, asc, sql, inArray } from "drizzle-orm";

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

  async getEvents(): Promise<Event[]> {
    return await db.select().from(events).where(eq(events.isActive, true)).orderBy(asc(events.eventDate));
  }

  async getEventById(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event || undefined;
  }

  async getEventBySlug(slug: string): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.slug, slug));
    return event || undefined;
  }

  async createEventRegistration(insertRegistration: InsertEventRegistration & { token: string }): Promise<EventRegistration> {
    const [registration] = await db.insert(eventRegistrations).values(insertRegistration).returning();
    return registration;
  }

  async getEventRegistrationByToken(token: string): Promise<EventRegistration | undefined> {
    const [registration] = await db.select().from(eventRegistrations).where(eq(eventRegistrations.token, token));
    return registration || undefined;
  }

  async updateEventRegistrationQR(id: number, qrCodeUrl: string, sheetRowId?: string): Promise<EventRegistration> {
    const [registration] = await db.update(eventRegistrations)
      .set({ qrCodeUrl, sheetRowId })
      .where(eq(eventRegistrations.id, id))
      .returning();
    return registration;
  }

  async updateEventRegistrationToken(id: number, token: string): Promise<EventRegistration> {
    const [registration] = await db.update(eventRegistrations)
      .set({ token })
      .where(eq(eventRegistrations.id, id))
      .returning();
    return registration;
  }

  async markAttendance(token: string): Promise<EventRegistration | undefined> {
    const registration = await this.getEventRegistrationByToken(token);
    if (!registration) {
      return undefined;
    }

    const [updated] = await db.update(eventRegistrations)
      .set({ 
        isAttended: true, 
        attendedAt: new Date(),
        prizeStatus: 'eligible'
      })
      .where(eq(eventRegistrations.token, token))
      .returning();
    
    return updated;
  }

  async markAttendanceById(id: number): Promise<EventRegistration | undefined> {
    const [updated] = await db.update(eventRegistrations)
      .set({ 
        isAttended: true, 
        attendedAt: new Date(),
        prizeStatus: 'eligible'
      })
      .where(eq(eventRegistrations.id, id))
      .returning();
    
    return updated;
  }

  async getEventRegistrations(eventId?: number): Promise<EventRegistration[]> {
    if (eventId) {
      return await db.select().from(eventRegistrations).where(eq(eventRegistrations.eventId, eventId)).orderBy(desc(eventRegistrations.createdAt));
    }
    return await db.select().from(eventRegistrations).orderBy(desc(eventRegistrations.createdAt));
  }

  async getAllEventRegistrations(): Promise<EventRegistration[]> {
    return await db.select().from(eventRegistrations).orderBy(desc(eventRegistrations.createdAt));
  }

  async updatePrizeStatus(id: number, status: 'pending' | 'eligible' | 'distributed'): Promise<EventRegistration> {
    const updates: any = { prizeStatus: status };
    
    if (status === 'distributed') {
      updates.prizeDistributedAt = new Date();
    }
    
    const [registration] = await db.update(eventRegistrations)
      .set(updates)
      .where(eq(eventRegistrations.id, id))
      .returning();
    
    return registration;
  }

  async trashEventRegistration(id: number, trashedBy: number, reason?: string): Promise<EventRegistration> {
    const [registration] = await db.update(eventRegistrations)
      .set({ 
        trashedAt: new Date(), 
        trashedBy,
        trashReason: reason || null
      })
      .where(eq(eventRegistrations.id, id))
      .returning();
    
    return registration;
  }

  async restoreEventRegistration(id: number): Promise<EventRegistration> {
    const [registration] = await db.update(eventRegistrations)
      .set({ 
        trashedAt: null, 
        trashedBy: null,
        trashReason: null
      })
      .where(eq(eventRegistrations.id, id))
      .returning();
    
    return registration;
  }

  async getTrashedEventRegistrations(): Promise<EventRegistration[]> {
    return await db.select()
      .from(eventRegistrations)
      .where(sql`${eventRegistrations.trashedAt} IS NOT NULL`)
      .orderBy(desc(eventRegistrations.trashedAt));
  }

  async deleteEventRegistration(id: number): Promise<void> {
    await db.delete(eventRegistrations).where(eq(eventRegistrations.id, id));
  }

  async bulkDeleteEventRegistrations(ids: number[]): Promise<void> {
    if (ids.length === 0) return;
    await db.delete(eventRegistrations).where(sql`${eventRegistrations.id} IN (${sql.join(ids.map(id => sql`${id}`), sql`, `)})`);
  }

  async getAllEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(desc(events.eventDate));
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const [event] = await db.insert(events).values(insertEvent).returning();
    return event;
  }

  async updateEvent(id: number, updates: Partial<InsertEvent>): Promise<Event> {
    const [event] = await db.update(events)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(events.id, id))
      .returning();
    return event;
  }

  async deleteEvent(id: number): Promise<void> {
    await db.delete(events).where(eq(events.id, id));
  }

  async createEligibilityCheck(insertEligibilityCheck: InsertEligibilityCheck): Promise<EligibilityCheck> {
    const [eligibilityCheck] = await db.insert(eligibilityChecks).values(insertEligibilityCheck).returning();
    return eligibilityCheck;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const [consultation] = await db.insert(consultations).values(insertConsultation).returning();
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return await db.select().from(consultations).orderBy(desc(consultations.createdAt));
  }

  async updateConsultationStatus(id: number, status: string): Promise<Consultation> {
    const [updated] = await db
      .update(consultations)
      .set({ status: status as "pending" | "contacted" | "converted" | "interested" | "not_interested" })
      .where(eq(consultations.id, id))
      .returning();
    return updated;
  }

  async bulkDeleteConsultations(ids: number[]): Promise<void> {
    await db.delete(consultations).where(sql`${consultations.id} IN (${sql.join(ids.map(id => sql`${id}`), sql`, `)})`);
  }

  // QR Code Management
  async createQrCode(insertQrCode: InsertQrCode): Promise<QrCode> {
    const [qrCode] = await db.insert(qrCodes).values(insertQrCode).returning();
    return qrCode;
  }

  async getQrCodes(): Promise<QrCode[]> {
    return await db.select()
      .from(qrCodes)
      .where(sql`${qrCodes.trashedAt} IS NULL`)
      .orderBy(desc(qrCodes.createdAt));
  }

  async getQrCode(id: number): Promise<QrCode | undefined> {
    const [qrCode] = await db.select().from(qrCodes).where(eq(qrCodes.id, id));
    return qrCode || undefined;
  }

  async updateQrCodeImage(id: number, qrImageUrl: string): Promise<QrCode> {
    const [qrCode] = await db.update(qrCodes)
      .set({ qrImageUrl })
      .where(eq(qrCodes.id, id))
      .returning();
    return qrCode;
  }

  async incrementQrScan(id: number): Promise<QrCode> {
    const [qrCode] = await db.update(qrCodes)
      .set({ scanCount: sql`${qrCodes.scanCount} + 1` })
      .where(eq(qrCodes.id, id))
      .returning();
    return qrCode;
  }

  async trashQrCode(id: number, trashedBy: number, reason?: string): Promise<QrCode> {
    const [qrCode] = await db.update(qrCodes)
      .set({ 
        trashedAt: new Date(), 
        trashedBy,
        trashReason: reason || null
      })
      .where(eq(qrCodes.id, id))
      .returning();
    return qrCode;
  }

  async restoreQrCode(id: number): Promise<QrCode> {
    const [qrCode] = await db.update(qrCodes)
      .set({ 
        trashedAt: null, 
        trashedBy: null,
        trashReason: null
      })
      .where(eq(qrCodes.id, id))
      .returning();
    return qrCode;
  }

  async getTrashedQrCodes(): Promise<QrCode[]> {
    return await db.select()
      .from(qrCodes)
      .where(sql`${qrCodes.trashedAt} IS NOT NULL`)
      .orderBy(desc(qrCodes.trashedAt));
  }

  async getUserQRCodes(userId: number): Promise<QrCode[]> {
    return await db.select()
      .from(qrCodes)
      .where(eq(qrCodes.createdBy, userId))
      .orderBy(desc(qrCodes.createdAt));
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
    
    // Handle permissions field properly by ensuring it's cast correctly
    const insertData: any = {
      username: insertAdminUser.username,
      email: insertAdminUser.email,
      password: hashedPassword,
      role: insertAdminUser.role,
      permissions: insertAdminUser.permissions ? JSON.parse(JSON.stringify(insertAdminUser.permissions)) : null,
      isActive: insertAdminUser.isActive !== undefined ? insertAdminUser.isActive : true,
    };
    
    const [admin] = await db.insert(adminUsers).values(insertData).returning();
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

  async updateAdminCredentials(id: number, credentials: { username: string; password: string }): Promise<AdminUser> {
    // Hash the new password
    const hashedPassword = await bcrypt.hash(credentials.password, 10);
    const [admin] = await db.update(adminUsers)
      .set({ 
        username: credentials.username,
        password: hashedPassword 
      })
      .where(eq(adminUsers.id, id))
      .returning();
    return admin;
  }

  async updateAdminLastLogin(id: number): Promise<void> {
    await db.update(adminUsers).set({ lastLogin: new Date() }).where(eq(adminUsers.id, id));
  }

  // Blog Management Methods
  // Optimized method to get blog posts with their categories in fewer queries
  async getBlogPostsWithCategories(published?: boolean): Promise<any[]> {
    try {
      // Get all blog posts and categories in a single optimized query using JOIN
      const postsWithCategories = await db
        .select({
          id: blogPosts.id,
          title: blogPosts.title,
          slug: blogPosts.slug,
          metaTitle: blogPosts.metaTitle,
          metaDescription: blogPosts.metaDescription,
          focusKeyword: blogPosts.focusKeyword,
          featuredImage: blogPosts.featuredImage,
          featuredImageAlt: blogPosts.featuredImageAlt,
          featuredImageTitle: blogPosts.featuredImageTitle,
          featuredImageOriginalName: blogPosts.featuredImageOriginalName,
          content: blogPosts.content,
          excerpt: blogPosts.excerpt,
          category: blogPosts.category,
          status: blogPosts.status,
          viewCount: blogPosts.viewCount,
          readingTime: blogPosts.readingTime,
          isPublished: blogPosts.isPublished,
          publishedAt: blogPosts.publishedAt,
          authorId: blogPosts.authorId,
          approverId: blogPosts.approverId,
          createdAt: blogPosts.createdAt,
          updatedAt: blogPosts.updatedAt,
          authorName: adminUsers.username,
          // Category information
          categoryId: categories.id,
          categoryName: categories.name,
          categorySlug: categories.slug,
          categoryDescription: categories.description,
        })
        .from(blogPosts)
        .leftJoin(adminUsers, eq(blogPosts.authorId, adminUsers.id))
        .leftJoin(blogPostCategories, eq(blogPosts.id, blogPostCategories.blogPostId))
        .leftJoin(categories, eq(blogPostCategories.categoryId, categories.id))
        .where(published !== undefined ? eq(blogPosts.isPublished, published) : undefined)
        .orderBy(desc(blogPosts.publishedAt));
      
      // Group categories by post ID and build the final structure
      const postsMap: Record<number, any> = {};
      
      postsWithCategories.forEach(row => {
        const postId = row.id;
        
        if (!postsMap[postId]) {
          postsMap[postId] = {
            id: row.id,
            title: row.title,
            slug: row.slug,
            metaTitle: row.metaTitle,
            metaDescription: row.metaDescription,
            focusKeyword: row.focusKeyword,
            featuredImage: row.featuredImage,
            featuredImageAlt: row.featuredImageAlt,
            featuredImageTitle: row.featuredImageTitle,
            featuredImageOriginalName: row.featuredImageOriginalName,
            content: row.content,
            excerpt: row.excerpt,
            category: row.category,
            status: row.status,
            viewCount: row.viewCount,
            readingTime: row.readingTime,
            isPublished: row.isPublished,
            publishedAt: row.publishedAt,
            authorId: row.authorId,
            approverId: row.approverId,
            createdAt: row.createdAt,
            updatedAt: row.updatedAt,
            authorName: row.authorName || 'Dunya Consultants',
            categories: []
          };
        }
        
        // Add category if it exists
        if (row.categoryId) {
          postsMap[postId].categories.push({
            id: row.categoryId,
            name: row.categoryName,
            slug: row.categorySlug,
            description: row.categoryDescription,
          });
        }
      });
      
      return Object.values(postsMap);
    } catch (error) {
      console.error('Error in getBlogPostsWithCategories:', error);
      // Fallback to original method
      return this.getBlogPosts(published);
    }
  }

  async getBlogPosts(published?: boolean): Promise<any[]> {
    if (published !== undefined) {
      const posts = await db.select({
        id: blogPosts.id,
        title: blogPosts.title,
        slug: blogPosts.slug,
        metaTitle: blogPosts.metaTitle,
        metaDescription: blogPosts.metaDescription,
        focusKeyword: blogPosts.focusKeyword,
        featuredImage: blogPosts.featuredImage,
        featuredImageAlt: blogPosts.featuredImageAlt,
        featuredImageTitle: blogPosts.featuredImageTitle,
        featuredImageOriginalName: blogPosts.featuredImageOriginalName,
        content: blogPosts.content,
        excerpt: blogPosts.excerpt,
        category: blogPosts.category,
        status: blogPosts.status,
        viewCount: blogPosts.viewCount,
        readingTime: blogPosts.readingTime,
        isPublished: blogPosts.isPublished,
        publishedAt: blogPosts.publishedAt,
        authorId: blogPosts.authorId,
        approverId: blogPosts.approverId,
        createdAt: blogPosts.createdAt,
        updatedAt: blogPosts.updatedAt,
        authorName: adminUsers.username,
      })
      .from(blogPosts)
      .leftJoin(adminUsers, eq(blogPosts.authorId, adminUsers.id))
      .where(eq(blogPosts.isPublished, published))
      .orderBy(desc(blogPosts.publishedAt));
      
      return posts.map(post => ({
        ...post,
        authorName: post.authorName || 'Dunya Consultants'
      }));
    }
    
    const posts = await db.select({
      id: blogPosts.id,
      title: blogPosts.title,
      slug: blogPosts.slug,
      metaTitle: blogPosts.metaTitle,
      metaDescription: blogPosts.metaDescription,
      focusKeyword: blogPosts.focusKeyword,
      featuredImage: blogPosts.featuredImage,
      featuredImageAlt: blogPosts.featuredImageAlt,
      featuredImageTitle: blogPosts.featuredImageTitle,
      featuredImageOriginalName: blogPosts.featuredImageOriginalName,
      content: blogPosts.content,
      excerpt: blogPosts.excerpt,
      category: blogPosts.category,
      status: blogPosts.status,
      viewCount: blogPosts.viewCount,
      readingTime: blogPosts.readingTime,
      isPublished: blogPosts.isPublished,
      publishedAt: blogPosts.publishedAt,
      authorId: blogPosts.authorId,
      approverId: blogPosts.approverId,
      createdAt: blogPosts.createdAt,
      updatedAt: blogPosts.updatedAt,
      authorName: adminUsers.username,
    })
    .from(blogPosts)
    .leftJoin(adminUsers, eq(blogPosts.authorId, adminUsers.id))
    .orderBy(desc(blogPosts.publishedAt));
    
    return posts.map(post => ({
      ...post,
      authorName: post.authorName || 'Dunya Consultants'
    }));
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
    // First delete related blog post revisions
    await db.delete(blogPostRevisions).where(eq(blogPostRevisions.postId, id));
    // Then delete the blog post itself
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async publishBlogPost(id: number): Promise<BlogPost> {
    const [post] = await db.update(blogPosts)
      .set({ isPublished: true, publishedAt: new Date(), updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  async verifyBlogPost(id: number, verifiedBy: number): Promise<BlogPost | undefined> {
    const [post] = await db.update(blogPosts)
      .set({ isVerified: true, verifiedAt: new Date(), verifiedBy, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post || undefined;
  }

  async unverifyBlogPost(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.update(blogPosts)
      .set({ isVerified: false, verifiedAt: null, verifiedBy: null, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post || undefined;
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
      .orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPostsByAuthor(authorId: number): Promise<BlogPost[]> {
    return await db.select().from(blogPosts)
      .where(eq(blogPosts.authorId, authorId))
      .orderBy(desc(blogPosts.publishedAt));
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

  async getMediaByFilename(filename: string): Promise<Media | undefined> {
    const [mediaItem] = await db.select().from(media).where(eq(media.filename, filename));
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

  async getUserMedia(userId: number): Promise<Media[]> {
    return await db.select().from(media)
      .where(eq(media.uploadedBy, userId))
      .orderBy(desc(media.createdAt));
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

  async getAuditLogsByActor(actorId: number): Promise<AuditLog[]> {
    return await db.select().from(auditLogs)
      .where(eq(auditLogs.actorId, actorId))
      .orderBy(desc(auditLogs.createdAt));
  }

  async getUserActivityLogs(userId?: number, limit: number = 100): Promise<(AuditLog & { actorUsername: string })[]> {
    const query = db.select({
      id: auditLogs.id,
      actorId: auditLogs.actorId,
      role: auditLogs.role,
      action: auditLogs.action,
      entity: auditLogs.entity,
      entityId: auditLogs.entityId,
      before: auditLogs.before,
      after: auditLogs.after,
      createdAt: auditLogs.createdAt,
      actorUsername: adminUsers.username,
    })
    .from(auditLogs)
    .leftJoin(adminUsers, eq(auditLogs.actorId, adminUsers.id))
    .orderBy(desc(auditLogs.createdAt))
    .limit(limit);

    if (userId) {
      return await query.where(eq(auditLogs.actorId, userId));
    }
    
    return await query;
  }
  
  // User Management Methods
  async getAllAdminUsers(): Promise<AdminUser[]> {
    return await db.select().from(adminUsers)
      .where(eq(adminUsers.isActive, true))
      .orderBy(desc(adminUsers.createdAt));
  }
  
  async getAdminUserById(id: number): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers)
      .where(eq(adminUsers.id, id))
      .limit(1);
    return user;
  }
  
  async updateAdminUser(id: number, updates: Partial<AdminUser>): Promise<AdminUser> {
    const [admin] = await db.update(adminUsers)
      .set(updates)
      .where(eq(adminUsers.id, id))
      .returning();
    return admin;
  }
  
  async deleteAdminUser(id: number): Promise<void> {
    // Soft delete by setting isActive to false
    await db.update(adminUsers)
      .set({ isActive: false })
      .where(eq(adminUsers.id, id));
  }

  async bulkDeleteAdminUsers(ids: number[], excludeId?: number): Promise<void> {
    if (ids.length === 0) return;
    
    // Filter out the exclude ID if provided
    let idsToDelete = excludeId ? ids.filter(id => id !== excludeId) : ids;
    
    if (idsToDelete.length === 0) return;
    
    // Soft delete by setting isActive to false
    await db.update(adminUsers)
      .set({ isActive: false })
      .where(sql`${adminUsers.id} IN (${sql.join(idsToDelete.map(id => sql`${id}`), sql`, `)})`);
  }
  
  // Post Assignment Methods
  async assignPostToUser(assignment: InsertPostAssignment): Promise<PostAssignment> {
    const [postAssignment] = await db.insert(postAssignments).values(assignment).returning();
    return postAssignment;
  }
  
  async removePostAssignment(userId: number, postId: number): Promise<void> {
    await db.delete(postAssignments)
      .where(and(eq(postAssignments.userId, userId), eq(postAssignments.postId, postId)));
  }
  
  async getUserPostAssignments(userId: number): Promise<PostAssignment[]> {
    return await db.select().from(postAssignments)
      .where(eq(postAssignments.userId, userId))
      .orderBy(desc(postAssignments.createdAt));
  }
  
  async getPostAssignments(postId: number): Promise<PostAssignment[]> {
    return await db.select().from(postAssignments)
      .where(eq(postAssignments.postId, postId))
      .orderBy(desc(postAssignments.createdAt));
  }
  
  async hasUserPostAssignments(userId: number): Promise<boolean> {
    const [result] = await db.select({ count: sql<number>`count(*)` })
      .from(postAssignments)
      .where(eq(postAssignments.userId, userId));
    return Number(result?.count) > 0;
  }
  
  async getUserAssignedPosts(userId: number): Promise<BlogPost[]> {
    // Get posts assigned to the user through postAssignments table
    const assignments = await db.select({
      postId: postAssignments.postId
    }).from(postAssignments)
      .where(eq(postAssignments.userId, userId));
    
    if (assignments.length === 0) {
      return [];
    }
    
    const postIds = assignments.map(a => a.postId);
    
    // Use inArray to get all assigned posts
    return await db.select().from(blogPosts)
      .where(inArray(blogPosts.id, postIds))
      .orderBy(desc(blogPosts.updatedAt));
  }

  // Event Assignment Methods
  async assignEventToUser(assignment: InsertEventAssignment): Promise<EventAssignment> {
    const [eventAssignment] = await db.insert(eventAssignments).values(assignment).returning();
    return eventAssignment;
  }
  
  async removeEventAssignment(userId: number, eventId: number): Promise<void> {
    await db.delete(eventAssignments)
      .where(and(eq(eventAssignments.userId, userId), eq(eventAssignments.eventId, eventId)));
  }
  
  async getUserEventAssignments(userId: number): Promise<EventAssignment[]> {
    return await db.select().from(eventAssignments)
      .where(eq(eventAssignments.userId, userId))
      .orderBy(desc(eventAssignments.createdAt));
  }
  
  async getEventAssignments(eventId: number): Promise<EventAssignment[]> {
    return await db.select().from(eventAssignments)
      .where(eq(eventAssignments.eventId, eventId))
      .orderBy(desc(eventAssignments.createdAt));
  }
  
  async hasUserEventAssignments(userId: number): Promise<boolean> {
    const [result] = await db.select({ count: sql<number>`count(*)` })
      .from(eventAssignments)
      .where(eq(eventAssignments.userId, userId));
    return Number(result?.count) > 0;
  }
  
  async getUserAssignedEvents(userId: number): Promise<Event[]> {
    // Get events assigned to the user through eventAssignments table
    const assignments = await db.select({
      eventId: eventAssignments.eventId
    }).from(eventAssignments)
      .where(eq(eventAssignments.userId, userId));
    
    if (assignments.length === 0) {
      return [];
    }
    
    const eventIds = assignments.map(a => a.eventId);
    
    // Use inArray to get all assigned events
    return await db.select().from(events)
      .where(inArray(events.id, eventIds))
      .orderBy(desc(events.updatedAt));
  }

  // Lead Assignment Methods
  async assignLeadToUser(assignment: InsertLeadAssignment): Promise<LeadAssignment> {
    const [leadAssignment] = await db.insert(leadAssignments).values(assignment).returning();
    return leadAssignment;
  }
  
  async removeLeadAssignment(userId: number, leadId: number): Promise<void> {
    await db.delete(leadAssignments)
      .where(and(eq(leadAssignments.userId, userId), eq(leadAssignments.leadId, leadId)));
  }
  
  async getUserLeadAssignments(userId: number): Promise<LeadAssignment[]> {
    return await db.select().from(leadAssignments)
      .where(eq(leadAssignments.userId, userId))
      .orderBy(desc(leadAssignments.createdAt));
  }
  
  async getLeadAssignments(leadId: number): Promise<LeadAssignment[]> {
    return await db.select().from(leadAssignments)
      .where(eq(leadAssignments.leadId, leadId))
      .orderBy(desc(leadAssignments.createdAt));
  }
  
  async hasUserLeadAssignments(userId: number): Promise<boolean> {
    const [result] = await db.select({ count: sql<number>`count(*)` })
      .from(leadAssignments)
      .where(eq(leadAssignments.userId, userId));
    return Number(result?.count) > 0;
  }
  
  async getUserAssignedLeads(userId: number): Promise<Consultation[]> {
    // Get leads assigned to the user through leadAssignments table
    const assignments = await db.select({
      leadId: leadAssignments.leadId
    }).from(leadAssignments)
      .where(eq(leadAssignments.userId, userId));
    
    if (assignments.length === 0) {
      return [];
    }
    
    const leadIds = assignments.map(a => a.leadId);
    
    // Use inArray to get all assigned leads
    return await db.select().from(consultations)
      .where(inArray(consultations.id, leadIds))
      .orderBy(desc(consultations.createdAt));
  }

  // Editing Session Methods
  async startEditingSession(session: InsertEditingSession): Promise<EditingSession> {
    // First, end any existing session for this user and post
    await db
      .update(editingSessions)
      .set({ isActive: false })
      .where(
        and(
          eq(editingSessions.userId, session.userId),
          eq(editingSessions.postId, session.postId),
          eq(editingSessions.isActive, true)
        )
      );

    // Create new editing session
    const [editingSession] = await db
      .insert(editingSessions)
      .values(session)
      .returning();
    
    return editingSession;
  }

  async updateEditingActivity(sessionId: number): Promise<void> {
    await db
      .update(editingSessions)
      .set({ lastActivity: new Date() })
      .where(eq(editingSessions.id, sessionId));
  }

  async endEditingSession(sessionId: number): Promise<void> {
    await db
      .update(editingSessions)
      .set({ isActive: false })
      .where(eq(editingSessions.id, sessionId));
  }

  async getActiveEditingSessions(postId: number): Promise<EditingSession[]> {
    const sessions = await db
      .select()
      .from(editingSessions)
      .where(
        and(
          eq(editingSessions.postId, postId),
          eq(editingSessions.isActive, true)
        )
      )
      .orderBy(desc(editingSessions.startedAt));
    
    return sessions;
  }

  async getAllActiveEditingSessions(): Promise<EditingSession[]> {
    const sessions = await db
      .select()
      .from(editingSessions)
      .where(eq(editingSessions.isActive, true))
      .orderBy(desc(editingSessions.startedAt));
    
    return sessions;
  }

  async getUserEditingSession(userId: number, postId: number): Promise<EditingSession | undefined> {
    const [session] = await db
      .select()
      .from(editingSessions)
      .where(
        and(
          eq(editingSessions.userId, userId),
          eq(editingSessions.postId, postId),
          eq(editingSessions.isActive, true)
        )
      );
    
    return session || undefined;
  }

  async getEditingSession(sessionId: number): Promise<EditingSession | undefined> {
    const [session] = await db
      .select()
      .from(editingSessions)
      .where(eq(editingSessions.id, sessionId));
    
    return session || undefined;
  }

  async cleanupInactiveEditingSessions(): Promise<void> {
    // Mark sessions inactive if last activity was more than 10 minutes ago
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    
    await db
      .update(editingSessions)
      .set({ isActive: false })
      .where(
        and(
          eq(editingSessions.isActive, true),
          sql`${editingSessions.lastActivity} < ${tenMinutesAgo}`
        )
      );
  }

  // Edit Request Management Implementation
  async createEditRequest(request: InsertEditRequest): Promise<EditRequest> {
    const [editRequest] = await db.insert(editRequests).values(request).returning();
    return editRequest;
  }

  async getEditRequest(id: number): Promise<EditRequest | undefined> {
    const [editRequest] = await db.select().from(editRequests).where(eq(editRequests.id, id));
    return editRequest || undefined;
  }

  async getUserEditRequests(userId: number): Promise<EditRequest[]> {
    return await db
      .select()
      .from(editRequests)
      .where(eq(editRequests.currentEditorId, userId))
      .orderBy(desc(editRequests.requestedAt));
  }

  async getPostEditRequests(postId: number): Promise<EditRequest[]> {
    return await db
      .select()
      .from(editRequests)
      .where(eq(editRequests.postId, postId))
      .orderBy(desc(editRequests.requestedAt));
  }

  async updateEditRequestStatus(id: number, status: string, respondedAt?: Date): Promise<EditRequest> {
    const updateData: any = { status };
    if (respondedAt) {
      updateData.respondedAt = respondedAt;
    }
    
    const [editRequest] = await db
      .update(editRequests)
      .set(updateData)
      .where(eq(editRequests.id, id))
      .returning();
    
    return editRequest;
  }

  async deleteEditRequest(id: number): Promise<void> {
    await db.delete(editRequests).where(eq(editRequests.id, id));
  }

  // Category Management Implementation
  async getCategories(active?: boolean): Promise<Category[]> {
    if (active !== undefined) {
      return await db
        .select()
        .from(categories)
        .where(eq(categories.isActive, active))
        .orderBy(asc(categories.name));
    }
    
    return await db
      .select()
      .from(categories)
      .orderBy(asc(categories.name));
  }

  async getHierarchicalCategories(active?: boolean): Promise<any[]> {
    // Get all categories with their parent information
    const allCategories = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
        description: categories.description,
        parentId: categories.parentId,
        focusKeyword: categories.focusKeyword,
        metaTitle: categories.metaTitle,
        metaDescription: categories.metaDescription,
        isActive: categories.isActive,
        createdAt: categories.createdAt,
        updatedAt: categories.updatedAt,
      })
      .from(categories)
      .where(active !== undefined ? eq(categories.isActive, active) : undefined)
      .orderBy(asc(categories.name));

    // Organize into hierarchical structure
    const parentCategories = allCategories.filter(cat => cat.parentId === null);
    const childCategories = allCategories.filter(cat => cat.parentId !== null);

    return parentCategories.map(parent => ({
      ...parent,
      children: childCategories.filter(child => child.parentId === parent.id)
    }));
  }

  async getParentCategories(active?: boolean): Promise<Category[]> {
    const conditions = [sql`parent_id IS NULL`];
    if (active !== undefined) {
      conditions.push(eq(categories.isActive, active));
    }

    return await db
      .select()
      .from(categories)
      .where(conditions.length > 1 ? and(...conditions) : conditions[0])
      .orderBy(asc(categories.name));
  }

  async getChildCategories(parentId: number, active?: boolean): Promise<Category[]> {
    const conditions = [eq(categories.parentId, parentId)];
    if (active !== undefined) {
      conditions.push(eq(categories.isActive, active));
    }

    return await db
      .select()
      .from(categories)
      .where(and(...conditions))
      .orderBy(asc(categories.name));
  }

  async getCategory(id: number): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.id, id));
    return category || undefined;
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.slug, slug));
    return category || undefined;
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    // Auto-generate slug if not provided
    if (!insertCategory.slug && insertCategory.name) {
      insertCategory.slug = insertCategory.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
    
    const [category] = await db.insert(categories).values(insertCategory).returning();
    return category;
  }

  async updateCategory(id: number, updates: Partial<Category>): Promise<Category> {
    // Auto-update slug if name is changed
    if (updates.name && !updates.slug) {
      updates.slug = updates.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
    
    const [category] = await db
      .update(categories)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(categories.id, id))
      .returning();
    
    return category;
  }

  async deleteCategory(id: number): Promise<void> {
    // First remove all blog post category associations
    await db.delete(blogPostCategories).where(eq(blogPostCategories.categoryId, id));
    // Then delete the category
    await db.delete(categories).where(eq(categories.id, id));
  }

  // Blog Post Categories (Many-to-Many) Implementation
  async getBlogPostCategories(postId: number): Promise<Category[]> {
    return await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
        description: categories.description,
        focusKeyword: categories.focusKeyword,
        metaTitle: categories.metaTitle,
        metaDescription: categories.metaDescription,
        isActive: categories.isActive,
        createdAt: categories.createdAt,
        updatedAt: categories.updatedAt,
      })
      .from(blogPostCategories)
      .innerJoin(categories, eq(blogPostCategories.categoryId, categories.id))
      .where(eq(blogPostCategories.blogPostId, postId))
      .orderBy(asc(categories.name));
  }

  async assignCategoryToBlogPost(blogPostId: number, categoryId: number): Promise<BlogPostCategory> {
    const [assignment] = await db
      .insert(blogPostCategories)
      .values({ blogPostId, categoryId })
      .returning();
    return assignment;
  }

  async removeCategoryFromBlogPost(blogPostId: number, categoryId: number): Promise<void> {
    await db
      .delete(blogPostCategories)
      .where(
        and(
          eq(blogPostCategories.blogPostId, blogPostId),
          eq(blogPostCategories.categoryId, categoryId)
        )
      );
  }

  async updateBlogPostCategories(blogPostId: number, categoryIds: number[]): Promise<void> {
    // First remove all existing category assignments
    await db.delete(blogPostCategories).where(eq(blogPostCategories.blogPostId, blogPostId));
    
    // Then add new assignments
    if (categoryIds.length > 0) {
      const assignments = categoryIds.map(categoryId => ({
        blogPostId,
        categoryId,
      }));
      await db.insert(blogPostCategories).values(assignments);
    }
  }
  
  // Trash Management (Soft Delete) Implementations
  async softDeleteMedia(id: number, trashedBy: number, reason?: string): Promise<Media> {
    const [trashedMedia] = await db
      .update(media)
      .set({
        trashedAt: new Date(),
        trashedBy,
        trashReason: reason || null
      })
      .where(eq(media.id, id))
      .returning();
    return trashedMedia;
  }
  
  async softDeleteBlogPost(id: number, trashedBy: number, reason?: string): Promise<BlogPost> {
    const [trashedPost] = await db
      .update(blogPosts)
      .set({
        trashedAt: new Date(),
        trashedBy,
        trashReason: reason || null
      })
      .where(eq(blogPosts.id, id))
      .returning();
    return trashedPost;
  }
  
  async softDeleteCategory(id: number, trashedBy: number, reason?: string): Promise<Category> {
    const [trashedCategory] = await db
      .update(categories)
      .set({
        trashedAt: new Date(),
        trashedBy,
        trashReason: reason || null
      })
      .where(eq(categories.id, id))
      .returning();
    return trashedCategory;
  }
  
  async softDeleteEvent(id: number, trashedBy: number, reason?: string): Promise<Event> {
    const [trashedEvent] = await db
      .update(events)
      .set({
        trashedAt: new Date(),
        trashedBy,
        trashReason: reason || null
      })
      .where(eq(events.id, id))
      .returning();
    return trashedEvent;
  }
  
  async softDeleteAdminUser(id: number, trashedBy: number, reason?: string): Promise<AdminUser> {
    const [trashedUser] = await db
      .update(adminUsers)
      .set({
        trashedAt: new Date(),
        trashedBy,
        trashReason: reason || null
      })
      .where(eq(adminUsers.id, id))
      .returning();
    return trashedUser;
  }
  
  // Restore from Trash Implementations
  async restoreMedia(id: number): Promise<Media> {
    const [restoredMedia] = await db
      .update(media)
      .set({
        trashedAt: null,
        trashedBy: null,
        trashReason: null
      })
      .where(eq(media.id, id))
      .returning();
    return restoredMedia;
  }
  
  async restoreBlogPost(id: number): Promise<BlogPost> {
    const [restoredPost] = await db
      .update(blogPosts)
      .set({
        trashedAt: null,
        trashedBy: null,
        trashReason: null
      })
      .where(eq(blogPosts.id, id))
      .returning();
    return restoredPost;
  }
  
  async restoreCategory(id: number): Promise<Category> {
    const [restoredCategory] = await db
      .update(categories)
      .set({
        trashedAt: null,
        trashedBy: null,
        trashReason: null
      })
      .where(eq(categories.id, id))
      .returning();
    return restoredCategory;
  }
  
  async restoreEvent(id: number): Promise<Event> {
    const [restoredEvent] = await db
      .update(events)
      .set({
        trashedAt: null,
        trashedBy: null,
        trashReason: null
      })
      .where(eq(events.id, id))
      .returning();
    return restoredEvent;
  }
  
  async restoreAdminUser(id: number): Promise<AdminUser> {
    const [restoredUser] = await db
      .update(adminUsers)
      .set({
        trashedAt: null,
        trashedBy: null,
        trashReason: null
      })
      .where(eq(adminUsers.id, id))
      .returning();
    return restoredUser;
  }
  
  // Permanent Delete (Purge) Implementations
  async purgeMedia(id: number): Promise<void> {
    await db.delete(media).where(eq(media.id, id));
  }
  
  async purgeBlogPost(id: number): Promise<void> {
    // First delete related blog post revisions and categories
    await db.delete(blogPostRevisions).where(eq(blogPostRevisions.postId, id));
    await db.delete(blogPostCategories).where(eq(blogPostCategories.blogPostId, id));
    // Then delete the post
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }
  
  async purgeCategory(id: number): Promise<void> {
    // First remove all blog post category associations
    await db.delete(blogPostCategories).where(eq(blogPostCategories.categoryId, id));
    // Then delete the category
    await db.delete(categories).where(eq(categories.id, id));
  }
  
  async purgeEvent(id: number): Promise<void> {
    // First delete event registrations
    await db.delete(eventRegistrations).where(eq(eventRegistrations.eventId, id));
    // Then delete the event
    await db.delete(events).where(eq(events.id, id));
  }
  
  async purgeAdminUser(id: number): Promise<void> {
    await db.delete(adminUsers).where(eq(adminUsers.id, id));
  }
  
  // Get Trashed Items Implementation
  async getTrashedItems(type?: string): Promise<{
    media?: Media[];
    blogPosts?: BlogPost[];
    categories?: Category[];
    events?: Event[];
    adminUsers?: AdminUser[];
  }> {
    const result: any = {};
    
    if (!type || type === 'media') {
      result.media = await db
        .select()
        .from(media)
        .where(sql`${media.trashedAt} IS NOT NULL`)
        .orderBy(desc(media.trashedAt));
    }
    
    if (!type || type === 'blogPosts') {
      result.blogPosts = await db
        .select()
        .from(blogPosts)
        .where(sql`${blogPosts.trashedAt} IS NOT NULL`)
        .orderBy(desc(blogPosts.trashedAt));
    }
    
    if (!type || type === 'categories') {
      result.categories = await db
        .select()
        .from(categories)
        .where(sql`${categories.trashedAt} IS NOT NULL`)
        .orderBy(desc(categories.trashedAt));
    }
    
    if (!type || type === 'events') {
      result.events = await db
        .select()
        .from(events)
        .where(sql`${events.trashedAt} IS NOT NULL`)
        .orderBy(desc(events.trashedAt));
    }
    
    if (!type || type === 'adminUsers') {
      result.adminUsers = await db
        .select()
        .from(adminUsers)
        .where(sql`${adminUsers.trashedAt} IS NOT NULL`)
        .orderBy(desc(adminUsers.trashedAt));
    }
    
    return result;
  }

  // Backup Management Methods
  async getBackupConfig(): Promise<BackupConfig | undefined> {
    const [config] = await db.select().from(backupConfigs).orderBy(desc(backupConfigs.id)).limit(1);
    return config || undefined;
  }

  async createBackupConfig(config: InsertBackupConfig): Promise<BackupConfig> {
    const [newConfig] = await db.insert(backupConfigs).values(config).returning();
    return newConfig;
  }

  async updateBackupConfig(id: number, updates: Partial<BackupConfig>): Promise<BackupConfig> {
    const [updated] = await db.update(backupConfigs)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(backupConfigs.id, id))
      .returning();
    return updated;
  }

  async createBackupHistory(backup: InsertBackupHistory): Promise<BackupHistory> {
    const [newBackup] = await db.insert(backupHistory).values(backup).returning();
    return newBackup;
  }

  async updateBackupHistory(id: number, updates: Partial<BackupHistory>): Promise<BackupHistory> {
    const [updated] = await db.update(backupHistory)
      .set(updates)
      .where(eq(backupHistory.id, id))
      .returning();
    return updated;
  }

  async getBackupHistory(limit: number = 50): Promise<BackupHistory[]> {
    return await db.select()
      .from(backupHistory)
      .orderBy(desc(backupHistory.createdAt))
      .limit(limit);
  }

  async getBackupById(id: number): Promise<BackupHistory | undefined> {
    const [backup] = await db.select().from(backupHistory).where(eq(backupHistory.id, id));
    return backup || undefined;
  }

  async deleteBackupHistory(id: number): Promise<void> {
    await db.delete(backupHistory).where(eq(backupHistory.id, id));
  }

  // Custom Forms Implementation
  async getCustomForms(activeOnly?: boolean): Promise<CustomForm[]> {
    if (activeOnly) {
      return await db.select()
        .from(customForms)
        .where(and(eq(customForms.isActive, true), sql`${customForms.trashedAt} IS NULL`))
        .orderBy(desc(customForms.createdAt));
    }
    return await db.select()
      .from(customForms)
      .where(sql`${customForms.trashedAt} IS NULL`)
      .orderBy(desc(customForms.createdAt));
  }

  async getCustomFormById(id: number): Promise<CustomForm | undefined> {
    const [form] = await db.select()
      .from(customForms)
      .where(eq(customForms.id, id));
    return form || undefined;
  }

  async getCustomFormBySlug(slug: string): Promise<CustomForm | undefined> {
    const [form] = await db.select()
      .from(customForms)
      .where(eq(customForms.slug, slug));
    return form || undefined;
  }

  async createCustomForm(form: InsertCustomForm): Promise<CustomForm> {
    const [newForm] = await db.insert(customForms).values(form).returning();
    return newForm;
  }

  async updateCustomForm(id: number, updates: Partial<CustomForm>): Promise<CustomForm> {
    const [updated] = await db.update(customForms)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(customForms.id, id))
      .returning();
    return updated;
  }

  async deleteCustomForm(id: number): Promise<void> {
    await db.delete(customForms).where(eq(customForms.id, id));
  }

  async getFormFields(formId: number): Promise<FormField[]> {
    return await db.select()
      .from(formFields)
      .where(eq(formFields.formId, formId))
      .orderBy(asc(formFields.order));
  }

  async createFormField(field: InsertFormField): Promise<FormField> {
    const [newField] = await db.insert(formFields).values(field).returning();
    return newField;
  }

  async updateFormField(id: number, updates: Partial<FormField>): Promise<FormField> {
    const [updated] = await db.update(formFields)
      .set(updates)
      .where(eq(formFields.id, id))
      .returning();
    return updated;
  }

  async deleteFormField(id: number): Promise<void> {
    await db.delete(formFields).where(eq(formFields.id, id));
  }

  async reorderFormFields(formId: number, fieldOrders: { id: number; order: number }[]): Promise<void> {
    for (const { id, order } of fieldOrders) {
      await db.update(formFields)
        .set({ order })
        .where(and(eq(formFields.id, id), eq(formFields.formId, formId)));
    }
  }

  async getCustomFormSubmissions(formId?: number): Promise<CustomFormSubmission[]> {
    if (formId) {
      return await db.select()
        .from(customFormSubmissions)
        .where(eq(customFormSubmissions.formId, formId))
        .orderBy(desc(customFormSubmissions.submittedAt));
    }
    return await db.select()
      .from(customFormSubmissions)
      .orderBy(desc(customFormSubmissions.submittedAt));
  }

  async getCustomFormSubmissionById(id: number): Promise<CustomFormSubmission | undefined> {
    const [submission] = await db.select()
      .from(customFormSubmissions)
      .where(eq(customFormSubmissions.id, id));
    return submission || undefined;
  }

  async createCustomFormSubmission(submission: InsertCustomFormSubmission): Promise<CustomFormSubmission> {
    const [newSubmission] = await db.insert(customFormSubmissions).values(submission).returning();
    return newSubmission;
  }

  async updateCustomFormSubmission(id: number, updates: Partial<CustomFormSubmission>): Promise<CustomFormSubmission> {
    const [updated] = await db.update(customFormSubmissions)
      .set(updates)
      .where(eq(customFormSubmissions.id, id))
      .returning();
    return updated;
  }

  async deleteCustomFormSubmission(id: number): Promise<void> {
    await db.delete(customFormSubmissions).where(eq(customFormSubmissions.id, id));
  }
}

export const storage = new DatabaseStorage();
