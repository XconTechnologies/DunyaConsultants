import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  destination: text("destination").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  program: text("program").notNull(),
  university: text("university").notNull(),
  message: text("message").notNull(),
  rating: integer("rating").notNull(),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const userEngagement = pgTable("user_engagement", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  userId: integer("user_id"),
  action: text("action").notNull(), // page_view, form_submit, tool_use, download, etc.
  category: text("category").notNull(), // navigation, interaction, conversion, etc.
  details: text("details"), // JSON string with additional data
  points: integer("points").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  userId: integer("user_id"),
  badgeType: text("badge_type").notNull(), // explorer, scholar, communicator, planner, etc.
  badgeLevel: text("badge_level").notNull(), // bronze, silver, gold, platinum
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  points: integer("points").notNull(),
  unlockedAt: timestamp("unlocked_at").defaultNow(),
});

export const userStats = pgTable("user_stats", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull().unique(),
  userId: integer("user_id"),
  totalPoints: integer("total_points").default(0),
  level: integer("level").default(1),
  pagesVisited: integer("pages_visited").default(0),
  toolsUsed: integer("tools_used").default(0),
  formsCompleted: integer("forms_completed").default(0),
  documentsDownloaded: integer("documents_downloaded").default(0),
  consultationsBooked: integer("consultations_booked").default(0),
  badgesEarned: integer("badges_earned").default(0),
  streak: integer("streak").default(0),
  lastActiveAt: timestamp("last_active_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const eligibilityChecks = pgTable("eligibility_checks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  educationLevel: text("education_level").notNull(),
  fieldOfStudy: text("field_of_study").notNull(),
  preferredCountry: text("preferred_country").notNull(),
  englishProficiency: text("english_proficiency").notNull(),
  budget: text("budget").notNull(),
  workExperience: text("work_experience"),
  result: json("result"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  dateOfBirth: text("date_of_birth"),
  educationLevel: text("education_level").notNull(),
  fieldOfStudy: text("field_of_study").notNull(),
  preferredCountry: text("preferred_country").notNull(),
  preferredIntake: text("preferred_intake"),
  budget: text("budget"),
  englishTest: text("english_test"),
  workExperience: text("work_experience"),
  additionalInfo: text("additional_info"),
  documents: text("documents").array(),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Admin Dashboard Tables
export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  role: text("role", { enum: ["admin", "user"] }).default("user").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  focusKeyword: text("focus_keyword"),
  featuredImage: text("featured_image"),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  category: text("category").default("General"),
  tags: text("tags").array(),
  status: text("status", { enum: ["draft", "in_review", "published", "archived"] }).default("draft").notNull(),
  viewCount: integer("view_count").default(0).notNull(),
  readingTime: integer("reading_time").default(5),
  isPublished: boolean("is_published").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  authorId: integer("author_id").references(() => adminUsers.id),
  approverId: integer("approver_id").references(() => adminUsers.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  shortDescription: text("short_description"),
  icon: text("icon"),
  image: text("image"),
  features: text("features").array(),
  isActive: boolean("is_active").default(true).notNull(),
  displayOrder: integer("display_order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  metaDescription: text("meta_description"),
  content: text("content").notNull(),
  template: text("template").default("default"),
  isPublished: boolean("is_published").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  authorId: integer("author_id").references(() => adminUsers.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const adminSessions = pgTable("admin_sessions", {
  id: serial("id").primaryKey(),
  sessionToken: text("session_token").notNull().unique(),
  adminUserId: integer("admin_user_id").references(() => adminUsers.id).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// User sessions for reader authentication
export const userSessions = pgTable("user_sessions", {
  id: serial("id").primaryKey(),
  sessionToken: text("session_token").notNull().unique(),
  userId: integer("user_id").references(() => users.id).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Media library for file uploads
export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  filename: text("filename").notNull(),
  originalName: text("original_name").notNull(),
  url: text("url").notNull(),
  alt: text("alt"),
  width: integer("width"),
  height: integer("height"),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  uploadedBy: integer("uploaded_by").references(() => adminUsers.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Blog post revisions for version control
export const blogPostRevisions = pgTable("blog_post_revisions", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").references(() => blogPosts.id).notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  status: text("status").notNull(),
  editorId: integer("editor_id").references(() => adminUsers.id).notNull(),
  note: text("note"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Audit logs for user activity tracking
export const auditLogs = pgTable("audit_logs", {
  id: serial("id").primaryKey(),
  actorId: integer("actor_id").references(() => adminUsers.id).notNull(),
  role: text("role").notNull(),
  action: text("action").notNull(), // create, update, delete, publish, unpublish
  entity: text("entity").notNull(), // blog_post, media, user
  entityId: integer("entity_id").notNull(),
  before: json("before"),
  after: json("after"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
});

export const insertUserEngagementSchema = createInsertSchema(userEngagement).omit({
  id: true,
  createdAt: true,
});

export const insertAchievementSchema = createInsertSchema(achievements).omit({
  id: true,
  unlockedAt: true,
});

export const insertUserStatsSchema = createInsertSchema(userStats).omit({
  id: true,
  createdAt: true,
  lastActiveAt: true,
});

export const insertEligibilityCheckSchema = createInsertSchema(eligibilityChecks).omit({
  id: true,
  createdAt: true,
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
});

export const insertFaqSchema = createInsertSchema(faqs).omit({
  id: true,
  createdAt: true,
});

// Admin Dashboard Schemas
export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
  lastLogin: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  publishedAt: true,
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPageSchema = createInsertSchema(pages).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  publishedAt: true,
});

export const insertAdminSessionSchema = createInsertSchema(adminSessions).omit({
  id: true,
  createdAt: true,
});

// New CMS Schema Inserts
export const insertUserSessionSchema = createInsertSchema(userSessions).omit({
  id: true,
  createdAt: true,
});

export const insertMediaSchema = createInsertSchema(media).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostRevisionSchema = createInsertSchema(blogPostRevisions).omit({
  id: true,
  createdAt: true,
});

export const insertAuditLogSchema = createInsertSchema(auditLogs).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertUserEngagement = z.infer<typeof insertUserEngagementSchema>;
export type UserEngagement = typeof userEngagement.$inferSelect;
export type InsertAchievement = z.infer<typeof insertAchievementSchema>;
export type Achievement = typeof achievements.$inferSelect;
export type InsertUserStats = z.infer<typeof insertUserStatsSchema>;
export type UserStats = typeof userStats.$inferSelect;
export type InsertEligibilityCheck = z.infer<typeof insertEligibilityCheckSchema>;
export type EligibilityCheck = typeof eligibilityChecks.$inferSelect;
export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;
export type InsertFaq = z.infer<typeof insertFaqSchema>;
export type Faq = typeof faqs.$inferSelect;

// Admin Dashboard Types
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;
export type InsertPage = z.infer<typeof insertPageSchema>;
export type Page = typeof pages.$inferSelect;
export type InsertAdminSession = z.infer<typeof insertAdminSessionSchema>;
export type AdminSession = typeof adminSessions.$inferSelect;

// New CMS Types
export type InsertUserSession = z.infer<typeof insertUserSessionSchema>;
export type UserSession = typeof userSessions.$inferSelect;
export type InsertMedia = z.infer<typeof insertMediaSchema>;
export type Media = typeof media.$inferSelect;
export type InsertBlogPostRevision = z.infer<typeof insertBlogPostRevisionSchema>;
export type BlogPostRevision = typeof blogPostRevisions.$inferSelect;
export type InsertAuditLog = z.infer<typeof insertAuditLogSchema>;
export type AuditLog = typeof auditLogs.$inferSelect;
