import { pgTable, text, serial, integer, boolean, timestamp, json, varchar, index, uniqueIndex } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Content Block Types for Blog Editor
export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | FAQBlock
  | TableBlock
  | HTMLBlock
  | ButtonBlock
  | ImageBlock
  | YouTubeBlock
  | SpacerBlock
  | DividerBlock
  | SchemaBlock
  | ConsultationBlock
  | WhatsAppChannelBlock
  | TipBlock
  | ListBlock;

export interface ParagraphBlock {
  id: string;
  type: 'paragraph';
  position: number;
  text: string;
}

export interface HeadingBlock {
  id: string;
  type: 'heading';
  position: number;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export interface FAQBlock {
  id: string;
  type: 'faq';
  position: number;
  data: {
    questions?: Array<{
      question: string;
      answer: string;
      questionBgColor?: string;
      answerBgColor?: string;
    }>;
    // Legacy support for old single question format
    question?: string;
    answer?: string;
    questionBgColor?: string;
    answerBgColor?: string;
  };
}

export interface TableBlock {
  id: string;
  type: 'table';
  position: number;
  data: {
    rows: number;
    cols: number;
    headers: string[];
    cells: string[][];
    hasHeader: boolean;
  };
}

export interface HTMLBlock {
  id: string;
  type: 'html';
  position: number;
  data: {
    html: string;
  };
}

export interface ButtonBlock {
  id: string;
  type: 'button';
  position: number;
  data: {
    text: string;
    url: string;
    bgColor: string;
    textColor: string;
    alignment: 'left' | 'center' | 'right' | 'stretch';
    borderWidth: number;
    borderRadius: number;
  };
}

export interface ImageBlock {
  id: string;
  type: 'image';
  position: number;
  data: {
    url: string;
    alt: string;
    alignment: 'left' | 'center' | 'right';
    width: string;
  };
}

export interface YouTubeBlock {
  id: string;
  type: 'youtube';
  position: number;
  data: {
    url: string;
    videoId: string;
  };
}

export interface SpacerBlock {
  id: string;
  type: 'spacer';
  position: number;
  data: {
    height: number;
  };
}

export interface DividerBlock {
  id: string;
  type: 'divider';
  position: number;
  data: {
    thickness: number;
    width: string;
  };
}

export interface SchemaBlock {
  id: string;
  type: 'schema';
  position: number;
  data: {
    schemaJson: string;
  };
}

export interface ConsultationBlock {
  id: string;
  type: 'consultation';
  position: number;
  data: {
    title?: string;
    description?: string;
    // Primary button
    buttonText?: string;
    buttonUrl?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    buttonBorderRadius?: number;
    buttonFontSize?: number;
    // Secondary button
    button2Text?: string;
    button2Url?: string;
    button2BgColor?: string;
    button2TextColor?: string;
    button2BorderRadius?: number;
    button2BorderWidth?: number;
    button2BorderColor?: string;
    button2FontSize?: number;
  };
}

export interface WhatsAppChannelBlock {
  id: string;
  type: 'whatsappChannel';
  position: number;
  data: {
    title?: string;
    description?: string;
    channelUrl?: string;
    buttonText?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    buttonHoverColor?: string;
    buttonBorderRadius?: number;
    buttonFontSize?: number;
  };
}

export interface TipBlock {
  id: string;
  type: 'tip';
  position: number;
  data: {
    prefix?: string;
    text: string;
  };
}

export interface ListBlock {
  id: string;
  type: 'list';
  position: number;
  data: {
    style?: 'ul' | 'ol';
    items?: Array<{
      id: string;
      text: string;
      children?: any[];
    }>;
  };
}

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  city: text("city"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").notNull(),
  phone: text("phone"),
  whatsappNumber: text("whatsapp_number"),
  destination: text("destination"),
  hasLanguageTest: text("has_language_test"),
  testType: text("test_type"),
  otherTestName: text("other_test_name"),
  testScore: text("test_score"),
  interestedCountries: text("interested_countries").array(),
  message: text("message"),
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
  fullName: text("full_name"),
  name: text("name"),
  email: text("email").notNull(),
  whatsappNumber: text("whatsapp_number"),
  phone: text("phone"),
  city: text("city"),
  dateOfBirth: text("date_of_birth"),
  hasLanguageTest: text("has_language_test"),
  testType: text("test_type"),
  otherTestName: text("other_test_name"),
  testScore: text("test_score"),
  educationLevel: text("education_level"),
  degreeGrade: text("degree_grade"),
  fieldOfStudy: text("field_of_study"),
  preferredCountry: text("preferred_country"),
  interestedCountries: text("interested_countries").array(),
  preferredIntake: text("preferred_intake"),
  budget: text("budget"),
  englishTest: text("english_test"),
  workExperience: text("work_experience"),
  additionalInfo: text("additional_info"),
  message: text("message"),
  documents: text("documents").array(),
  status: text("status", { enum: ["pending", "contacted", "converted", "interested", "not_interested"] }).default("pending"),
  source: text("source").default("website"),
  assignedTo: text("assigned_to"),
  audioUrl: text("audio_url"),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ({
  statusIdx: index("consultations_status_idx").on(table.status),
  emailIdx: index("consultations_email_idx").on(table.email),
  createdAtIdx: index("consultations_created_at_idx").on(table.createdAt),
  statusCreatedIdx: index("consultations_status_created_idx").on(table.status, table.createdAt),
}));

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Admin Dashboard Tables - Multi-Role System
export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  displayName: text("display_name"),
  roles: text("roles").array().notNull().default(sql`ARRAY['editor']::text[]`),
  permissions: json("permissions").$type<{
    canCreate?: boolean;
    canEdit?: boolean;
    canPublish?: boolean;
    canDelete?: boolean;
    canManageUsers?: boolean;
    canManageCategories?: boolean;
    canViewAnalytics?: boolean;
    canManageMedia?: boolean;
    canAccessEvents?: boolean;
    canAccessQRScanner?: boolean;
    canDownloadRegistrations?: boolean;
    canDeleteRegistrations?: boolean;
    canManageLeads?: boolean;
  }>(),
  isActive: boolean("is_active").default(true).notNull(),
  lastLogin: timestamp("last_login"),
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Categories table with SEO fields and hierarchical structure
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  parentId: integer("parent_id").references(() => categories.id),
  focusKeyword: text("focus_keyword"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  isActive: boolean("is_active").default(true).notNull(),
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  isActiveIdx: index("categories_is_active_idx").on(table.isActive),
}));

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title"),
  slug: text("slug").unique(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  focusKeyword: text("focus_keyword"),
  featuredImage: text("featured_image"),
  featuredImageAlt: text("featured_image_alt"),
  featuredImageTitle: text("featured_image_title"),
  featuredImageOriginalName: text("featured_image_original_name"),
  content: text("content"),
  contentBlocks: json("content_blocks").$type<ContentBlock[]>(),
  excerpt: text("excerpt"),
  category: text("category").default("General"), // Keep for backward compatibility
  status: text("status", { enum: ["draft", "in_review", "published", "archived"] }).default("draft").notNull(),
  viewCount: integer("view_count").default(0).notNull(),
  readingTime: integer("reading_time").default(5),
  isPublished: boolean("is_published").default(false).notNull(),
  isVerified: boolean("is_verified").default(false).notNull(),
  verifiedAt: timestamp("verified_at"),
  verifiedBy: integer("verified_by").references(() => adminUsers.id),
  publishedAt: timestamp("published_at"),
  authorId: integer("author_id").references(() => adminUsers.id),
  approvalStatus: text("approval_status", { enum: ["approved", "not_approved", "editable"] }).default("editable").notNull(),
  approvedAt: timestamp("approved_at"),
  approverId: integer("approver_id").references(() => adminUsers.id),
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  statusIdx: index("blog_posts_status_idx").on(table.status),
  isPublishedIdx: index("blog_posts_is_published_idx").on(table.isPublished),
  publishedAtIdx: index("blog_posts_published_at_idx").on(table.publishedAt),
  categoryIdx: index("blog_posts_category_idx").on(table.category),
  statusPublishedIdx: index("blog_posts_status_published_idx").on(table.status, table.isPublished, table.publishedAt),
}));

// Junction table for blog posts and categories (many-to-many relationship)
export const blogPostCategories = pgTable("blog_post_categories", {
  id: serial("id").primaryKey(),
  blogPostId: integer("blog_post_id").references(() => blogPosts.id, { onDelete: "cascade" }).notNull(),
  categoryId: integer("category_id").references(() => categories.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Block defaults for storing global and upcoming default settings
export const blockDefaults = pgTable("block_defaults", {
  id: serial("id").primaryKey(),
  blockType: text("block_type").notNull(), // Removed enum restriction to allow all block types
  scope: text("scope", { enum: ["global", "upcoming"] }).notNull(),
  defaults: json("defaults").$type<Record<string, any>>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  typeScopeIdx: uniqueIndex("block_defaults_type_scope_idx").on(table.blockType, table.scope),
}));

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

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  shortDescription: text("short_description").notNull(),
  excerpt: text("excerpt"),
  fullDescription: text("full_description").notNull(),
  contentBlocks: json("content_blocks").$type<ContentBlock[]>(),
  image: text("image").notNull(), // Thumbnail
  detailImage: text("detail_image"), // Banner image
  eventDate: timestamp("event_date").notNull(),
  eventType: text("event_type", { enum: ["Open Day", "Expo", "IELTS Masterclass", "AGMs", "Team Meetings", "Official Representative Meetings", "Student Ambassador Program"] }).notNull(),
  location: text("location"),
  country: text("country").array(),
  studyLevel: text("study_level").array(),
  venue: text("venue"),
  isActive: boolean("is_active").default(true).notNull(),
  status: text("status", { enum: ["draft", "published"] }).default("published").notNull(),
  registrationEnabled: boolean("registration_enabled").default(true).notNull(),
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  // Media attachments for past events
  recordings: json("recordings").$type<Array<{
    url: string;
    title: string;
    duration?: string;
    uploadedAt: string;
  }>>(),
  images: json("images").$type<Array<{
    url: string;
    caption?: string;
    uploadedAt: string;
  }>>(),
  videos: json("videos").$type<Array<{
    url: string;
    title: string;
    thumbnail?: string;
    uploadedAt: string;
  }>>(),
  documents: json("documents").$type<Array<{
    url: string;
    title: string;
    fileType: string;
    size?: number;
    uploadedAt: string;
  }>>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const eventRegistrations = pgTable("event_registrations", {
  id: serial("id").primaryKey(),
  eventId: integer("event_id").references(() => events.id).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  education: text("education"),
  destination: text("destination"),
  token: text("token").notNull().unique(), // Unique token for QR code validation
  qrCodeUrl: text("qr_code_url"), // URL/path to generated QR code image
  sheetRowId: text("sheet_row_id"), // Row ID in Google Sheets
  isAttended: boolean("is_attended").default(false).notNull(),
  attendedAt: timestamp("attended_at"),
  prizeStatus: text("prize_status", { enum: ["pending", "eligible", "distributed"] }).default("pending").notNull(),
  prizeReadyAt: timestamp("prize_ready_at"), // Date when prize becomes available (event date + 1-2 weeks)
  prizeDistributedAt: timestamp("prize_distributed_at"),
  status: text("status").default("confirmed").notNull(),
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  eventIdIdx: index("event_registrations_event_id_idx").on(table.eventId),
  emailIdx: index("event_registrations_email_idx").on(table.email),
  statusIdx: index("event_registrations_status_idx").on(table.status),
  isAttendedIdx: index("event_registrations_is_attended_idx").on(table.isAttended),
}));

// QR Codes for admin-generated custom QR codes
export const qrCodes = pgTable("qr_codes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  link: text("link").notNull(),
  embedType: text("embed_type", { enum: ["none", "text", "image"] }).default("none").notNull(),
  embedContent: text("embed_content"), // Text or image URL to embed in QR
  scanCount: integer("scan_count").default(0).notNull(),
  qrImageUrl: text("qr_image_url"), // Generated QR code image path
  createdBy: integer("created_by").references(() => adminUsers.id).notNull(),
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  createdByIdx: index("qr_codes_created_by_idx").on(table.createdBy),
}));

// Short URLs for URL shortener
export const shortUrls = pgTable("short_urls", {
  id: serial("id").primaryKey(),
  shortCode: text("short_code").notNull().unique(), // The short identifier (e.g., "abc123")
  originalUrl: text("original_url").notNull(), // The full destination URL
  title: text("title"), // Optional title/description
  clicks: integer("clicks").default(0).notNull(), // Number of times accessed
  isActive: boolean("is_active").default(true).notNull(), // Enable/disable the short URL
  createdBy: integer("created_by").references(() => adminUsers.id).notNull(),
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastAccessedAt: timestamp("last_accessed_at"), // Last time the short URL was used
}, (table) => ({
  shortCodeIdx: uniqueIndex("short_urls_short_code_idx").on(table.shortCode),
  createdByIdx: index("short_urls_created_by_idx").on(table.createdBy),
}));

// URL Redirects for permanent/temporary URL redirections
export const redirects = pgTable("redirects", {
  id: serial("id").primaryKey(),
  sourcePath: text("source_path").notNull().unique(), // Path to redirect from (e.g., "/old-page")
  destinationUrl: text("destination_url").notNull(), // Full URL or path to redirect to
  redirectType: text("redirect_type", { enum: ["permanent", "temporary"] }).default("permanent").notNull(), // 301 or 302
  isActive: boolean("is_active").default(true).notNull(), // Enable/disable redirect
  hitCount: integer("hit_count").default(0).notNull(), // Track redirect usage
  createdBy: integer("created_by").references(() => adminUsers.id).notNull(),
  updatedBy: integer("updated_by").references(() => adminUsers.id),
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  sourcePathIdx: uniqueIndex("redirects_source_path_idx").on(table.sourcePath),
  createdByIdx: index("redirects_created_by_idx").on(table.createdBy),
  isActiveIdx: index("redirects_is_active_idx").on(table.isActive),
}));

// Admin Notifications
export const adminNotifications = pgTable("admin_notifications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => adminUsers.id).notNull(),
  type: text("type", { enum: ["event_registration", "new_lead"] }).notNull(),
  title: text("title").notNull(),
  message: text("message").notNull(),
  relatedId: integer("related_id"), // Event registration ID or consultation ID
  isRead: boolean("is_read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Backup Configuration
export const backupConfigs = pgTable("backup_configs", {
  id: serial("id").primaryKey(),
  frequency: text("frequency", { enum: ["manual", "daily", "weekly", "monthly"] }).default("manual").notNull(),
  autoBackupEnabled: boolean("auto_backup_enabled").default(false).notNull(),
  cloudProvider: text("cloud_provider", { enum: ["none", "google_drive", "dropbox", "onedrive"] }).default("none").notNull(),
  cloudFolderId: text("cloud_folder_id"), // Folder/Path in cloud storage
  backupDataTypes: json("backup_data_types").$type<string[]>().default(sql`'["leads","eventRegistrations","qrCodes","posts","media","users","forms","categories"]'`).notNull(), // Which data types to include in backup
  lastBackupAt: timestamp("last_backup_at"),
  nextBackupAt: timestamp("next_backup_at"),
  createdBy: integer("created_by").references(() => adminUsers.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Backup History
export const backupHistory = pgTable("backup_history", {
  id: serial("id").primaryKey(),
  fileName: text("file_name").notNull(),
  fileSize: integer("file_size").notNull(), // in bytes
  filePath: text("file_path"), // local storage path
  cloudUrl: text("cloud_url"), // cloud storage URL if uploaded
  cloudProvider: text("cloud_provider", { enum: ["none", "google_drive", "dropbox", "onedrive"] }).default("none").notNull(),
  status: text("status", { enum: ["in_progress", "completed", "failed"] }).default("in_progress").notNull(),
  errorMessage: text("error_message"),
  createdBy: integer("created_by").references(() => adminUsers.id).notNull(),
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
  trashedAt: timestamp("trashed_at"),
  trashedBy: integer("trashed_by").references(() => adminUsers.id),
  trashReason: text("trash_reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  uploadedByIdx: index("media_uploaded_by_idx").on(table.uploadedBy),
}));

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
  role: text("role"), // Nullable for multi-role support
  action: text("action").notNull(), // create, update, delete, publish, unpublish
  entity: text("entity").notNull(), // blog_post, media, user
  entityId: integer("entity_id").notNull(),
  before: json("before"),
  after: json("after"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Real-time editing sessions tracking
export const editingSessions = pgTable("editing_sessions", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").references(() => blogPosts.id).notNull(),
  userId: integer("user_id").references(() => adminUsers.id).notNull(),
  startedAt: timestamp("started_at").defaultNow().notNull(),
  lastActivity: timestamp("last_activity").defaultNow().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
});

// Edit requests for handling collaborative editing conflicts
export const editRequests = pgTable("edit_requests", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").references(() => blogPosts.id).notNull(),
  requesterId: integer("requester_id").references(() => adminUsers.id).notNull(),
  currentEditorId: integer("current_editor_id").references(() => adminUsers.id).notNull(),
  status: varchar("status", { length: 20 }).default("pending").notNull(), // pending, approved, declined
  requestedAt: timestamp("requested_at").defaultNow().notNull(),
  respondedAt: timestamp("responded_at"),
});

// Post assignments for granular access control
export const postAssignments = pgTable("post_assignments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => adminUsers.id).notNull(),
  postId: integer("post_id").references(() => blogPosts.id).notNull(),
  assignedBy: integer("assigned_by").references(() => adminUsers.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userPostIdx: uniqueIndex("post_assignments_user_post_idx").on(table.userId, table.postId),
}));

// Event assignments for granular access control
export const eventAssignments = pgTable("event_assignments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => adminUsers.id).notNull(),
  eventId: integer("event_id").references(() => events.id).notNull(),
  assignedBy: integer("assigned_by").references(() => adminUsers.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userEventIdx: uniqueIndex("event_assignments_user_event_idx").on(table.userId, table.eventId),
}));

// Lead assignments for granular access control
export const leadAssignments = pgTable("lead_assignments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => adminUsers.id).notNull(),
  leadId: integer("lead_id").references(() => consultations.id).notNull(),
  assignedBy: integer("assigned_by").references(() => adminUsers.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userLeadIdx: uniqueIndex("lead_assignments_user_lead_idx").on(table.userId, table.leadId),
}));

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
export const validRoles = ["admin", "editor", "publisher", "events_manager", "leads_manager"] as const;
export type ValidRole = typeof validRoles[number];

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
  lastLogin: true,
}).extend({
  roles: z.array(z.enum(validRoles)).min(1, "At least one role is required")
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

export const insertEditingSessionSchema = createInsertSchema(editingSessions).omit({
  id: true,
  startedAt: true,
  lastActivity: true,
});

export const insertEditRequestSchema = createInsertSchema(editRequests).omit({
  id: true,
  requestedAt: true,
  respondedAt: true,
});

export const insertPostAssignmentSchema = createInsertSchema(postAssignments).omit({
  id: true,
  createdAt: true,
});

export const insertEventAssignmentSchema = createInsertSchema(eventAssignments).omit({
  id: true,
  createdAt: true,
});

export const insertLeadAssignmentSchema = createInsertSchema(leadAssignments).omit({
  id: true,
  createdAt: true,
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertBlogPostCategorySchema = createInsertSchema(blogPostCategories).omit({
  id: true,
  createdAt: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertEventRegistrationSchema = createInsertSchema(eventRegistrations).omit({
  id: true,
  token: true, // Server-generated
  qrCodeUrl: true, // Server-generated
  sheetRowId: true, // Server-generated
  isAttended: true,
  attendedAt: true,
  prizeStatus: true,
  prizeReadyAt: true,
  prizeDistributedAt: true,
  status: true,
  trashedAt: true,
  trashedBy: true,
  trashReason: true,
  createdAt: true,
});

export const insertQrCodeSchema = createInsertSchema(qrCodes).omit({
  id: true,
  scanCount: true,
  qrImageUrl: true,
  trashedAt: true,
  trashedBy: true,
  trashReason: true,
  createdAt: true,
});

export const insertShortUrlSchema = createInsertSchema(shortUrls).omit({
  id: true,
  clicks: true,
  trashedAt: true,
  trashedBy: true,
  trashReason: true,
  createdAt: true,
  lastAccessedAt: true,
});

export const insertRedirectSchema = createInsertSchema(redirects).omit({
  id: true,
  hitCount: true,
  trashedAt: true,
  trashedBy: true,
  trashReason: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  sourcePath: z.string().min(1, "Source path is required").regex(/^\//, "Source path must start with /"),
  destinationUrl: z.string().url("Must be a valid URL or path"),
});

export const insertAdminNotificationSchema = createInsertSchema(adminNotifications).omit({
  id: true,
  isRead: true,
  createdAt: true,
});

export const insertBackupConfigSchema = createInsertSchema(backupConfigs).omit({
  id: true,
  lastBackupAt: true,
  nextBackupAt: true,
  createdAt: true,
  updatedAt: true,
});

export const insertBackupHistorySchema = createInsertSchema(backupHistory).omit({
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

// Custom Forms (Form Builder)
export const customForms = pgTable("custom_forms", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  slug: text("slug").notNull().unique(),
  isActive: boolean("is_active").notNull().default(true),
  createdBy: integer("created_by").references(() => adminUsers.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  trashedAt: timestamp("trashed_at"),
});

export const insertCustomFormSchema = createInsertSchema(customForms).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const formFields = pgTable("form_fields", {
  id: serial("id").primaryKey(),
  formId: integer("form_id").notNull().references(() => customForms.id, { onDelete: "cascade" }),
  fieldLabel: text("field_label").notNull(),
  fieldType: text("field_type").notNull(), // text, email, phone, select, textarea, number, date, checkbox, radio
  fieldName: text("field_name").notNull(),
  placeholder: text("placeholder"),
  required: boolean("required").notNull().default(false),
  options: text("options").array(), // for select/radio/checkbox
  order: integer("order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertFormFieldSchema = createInsertSchema(formFields).omit({
  id: true,
  createdAt: true,
});

export const customFormSubmissions = pgTable("custom_form_submissions", {
  id: serial("id").primaryKey(),
  formId: integer("form_id").notNull().references(() => customForms.id, { onDelete: "cascade" }),
  submissionData: json("submission_data").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
  source: text("source"), // page where form was submitted
  ipAddress: text("ip_address"),
  status: text("status").notNull().default("pending"), // pending, contacted, converted, lost
  notes: text("notes"),
  assignedTo: integer("assigned_to").references(() => adminUsers.id),
});

export const insertCustomFormSubmissionSchema = createInsertSchema(customFormSubmissions).omit({
  id: true,
  submittedAt: true,
});

// Branch Icons for Homepage Carousel
export const branchIcons = pgTable("branch_icons", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), // City name
  iconUrl: text("icon_url").notNull(), // URL to uploaded icon image
  route: text("route").notNull(), // Link to office page
  displayOrder: integer("display_order").notNull().default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertBranchIconSchema = createInsertSchema(branchIcons).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// University Icons for Homepage Carousel
export const universityIcons = pgTable("university_icons", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), // University name
  logoUrl: text("logo_url").notNull(), // URL to uploaded logo image
  route: text("route"), // Optional link to university page
  displayOrder: integer("display_order").notNull().default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertUniversityIconSchema = createInsertSchema(universityIcons).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

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
export type InsertEditingSession = z.infer<typeof insertEditingSessionSchema>;
export type EditingSession = typeof editingSessions.$inferSelect;
export type InsertEditRequest = z.infer<typeof insertEditRequestSchema>;
export type EditRequest = typeof editRequests.$inferSelect;
export type InsertPostAssignment = z.infer<typeof insertPostAssignmentSchema>;
export type PostAssignment = typeof postAssignments.$inferSelect;
export type InsertEventAssignment = z.infer<typeof insertEventAssignmentSchema>;
export type EventAssignment = typeof eventAssignments.$inferSelect;
export type InsertLeadAssignment = z.infer<typeof insertLeadAssignmentSchema>;
export type LeadAssignment = typeof leadAssignments.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;
export type InsertBlogPostCategory = z.infer<typeof insertBlogPostCategorySchema>;
export type BlogPostCategory = typeof blogPostCategories.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;
export type InsertEventRegistration = z.infer<typeof insertEventRegistrationSchema>;
export type EventRegistration = typeof eventRegistrations.$inferSelect;
export type InsertQrCode = z.infer<typeof insertQrCodeSchema>;
export type QrCode = typeof qrCodes.$inferSelect;
export type InsertShortUrl = z.infer<typeof insertShortUrlSchema>;
export type ShortUrl = typeof shortUrls.$inferSelect;
export type InsertRedirect = z.infer<typeof insertRedirectSchema>;
export type Redirect = typeof redirects.$inferSelect;
export type InsertAdminNotification = z.infer<typeof insertAdminNotificationSchema>;
export type AdminNotification = typeof adminNotifications.$inferSelect;
export type InsertBackupConfig = z.infer<typeof insertBackupConfigSchema>;
export type BackupConfig = typeof backupConfigs.$inferSelect;
export type InsertBackupHistory = z.infer<typeof insertBackupHistorySchema>;
export type BackupHistory = typeof backupHistory.$inferSelect;
export type InsertCustomForm = z.infer<typeof insertCustomFormSchema>;
export type CustomForm = typeof customForms.$inferSelect;
export type InsertFormField = z.infer<typeof insertFormFieldSchema>;
export type FormField = typeof formFields.$inferSelect;
export type InsertCustomFormSubmission = z.infer<typeof insertCustomFormSubmissionSchema>;
export type CustomFormSubmission = typeof customFormSubmissions.$inferSelect;
export type InsertBranchIcon = z.infer<typeof insertBranchIconSchema>;
export type BranchIcon = typeof branchIcons.$inferSelect;
export type InsertUniversityIcon = z.infer<typeof insertUniversityIconSchema>;
export type UniversityIcon = typeof universityIcons.$inferSelect;
