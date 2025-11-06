CREATE TABLE "achievements" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" text NOT NULL,
	"user_id" integer,
	"badge_type" text NOT NULL,
	"badge_level" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"icon" text NOT NULL,
	"points" integer NOT NULL,
	"unlocked_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "admin_notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"type" text NOT NULL,
	"title" text NOT NULL,
	"message" text NOT NULL,
	"related_id" integer,
	"is_read" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "admin_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_token" text NOT NULL,
	"admin_user_id" integer NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "admin_sessions_session_token_unique" UNIQUE("session_token")
);
--> statement-breakpoint
CREATE TABLE "admin_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"email" text NOT NULL,
	"roles" text[] DEFAULT ARRAY['editor']::text[] NOT NULL,
	"permissions" json,
	"is_active" boolean DEFAULT true NOT NULL,
	"last_login" timestamp,
	"trashed_at" timestamp,
	"trashed_by" integer,
	"trash_reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "admin_users_username_unique" UNIQUE("username"),
	CONSTRAINT "admin_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "audit_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"actor_id" integer NOT NULL,
	"role" text,
	"action" text NOT NULL,
	"entity" text NOT NULL,
	"entity_id" integer NOT NULL,
	"before" json,
	"after" json,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "backup_configs" (
	"id" serial PRIMARY KEY NOT NULL,
	"frequency" text DEFAULT 'manual' NOT NULL,
	"auto_backup_enabled" boolean DEFAULT false NOT NULL,
	"cloud_provider" text DEFAULT 'none' NOT NULL,
	"cloud_folder_id" text,
	"backup_data_types" json DEFAULT '["leads","eventRegistrations","qrCodes","posts","media","users","forms","categories"]' NOT NULL,
	"last_backup_at" timestamp,
	"next_backup_at" timestamp,
	"created_by" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "backup_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"file_name" text NOT NULL,
	"file_size" integer NOT NULL,
	"file_path" text,
	"cloud_url" text,
	"cloud_provider" text DEFAULT 'none' NOT NULL,
	"status" text DEFAULT 'in_progress' NOT NULL,
	"error_message" text,
	"created_by" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blog_post_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_post_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blog_post_revisions" (
	"id" serial PRIMARY KEY NOT NULL,
	"post_id" integer NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"excerpt" text,
	"status" text NOT NULL,
	"editor_id" integer NOT NULL,
	"note" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blog_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"slug" text,
	"meta_title" text,
	"meta_description" text,
	"focus_keyword" text,
	"featured_image" text,
	"featured_image_alt" text,
	"featured_image_title" text,
	"featured_image_original_name" text,
	"content" text,
	"content_blocks" json,
	"excerpt" text,
	"category" text DEFAULT 'General',
	"status" text DEFAULT 'draft' NOT NULL,
	"view_count" integer DEFAULT 0 NOT NULL,
	"reading_time" integer DEFAULT 5,
	"is_published" boolean DEFAULT false NOT NULL,
	"is_verified" boolean DEFAULT false NOT NULL,
	"verified_at" timestamp,
	"verified_by" integer,
	"published_at" timestamp,
	"author_id" integer,
	"approval_status" text DEFAULT 'editable' NOT NULL,
	"approved_at" timestamp,
	"approver_id" integer,
	"trashed_at" timestamp,
	"trashed_by" integer,
	"trash_reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "branch_icons" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"icon_url" text NOT NULL,
	"route" text NOT NULL,
	"display_order" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"parent_id" integer,
	"focus_keyword" text,
	"meta_title" text,
	"meta_description" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"trashed_at" timestamp,
	"trashed_by" integer,
	"trash_reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "categories_name_unique" UNIQUE("name"),
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "consultations" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"name" text,
	"email" text NOT NULL,
	"whatsapp_number" text,
	"phone" text,
	"city" text,
	"date_of_birth" text,
	"has_language_test" text,
	"test_type" text,
	"other_test_name" text,
	"test_score" text,
	"education_level" text,
	"degree_grade" text,
	"field_of_study" text,
	"preferred_country" text,
	"interested_countries" text[],
	"preferred_intake" text,
	"budget" text,
	"english_test" text,
	"work_experience" text,
	"additional_info" text,
	"message" text,
	"documents" text[],
	"status" text DEFAULT 'pending',
	"source" text DEFAULT 'website',
	"assigned_to" text,
	"audio_url" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"city" text,
	"first_name" text,
	"last_name" text,
	"email" text NOT NULL,
	"phone" text,
	"whatsapp_number" text,
	"destination" text,
	"has_language_test" text,
	"test_type" text,
	"other_test_name" text,
	"test_score" text,
	"interested_countries" text[],
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "custom_form_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"form_id" integer NOT NULL,
	"submission_data" json NOT NULL,
	"submitted_at" timestamp DEFAULT now() NOT NULL,
	"source" text,
	"ip_address" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"notes" text,
	"assigned_to" integer
);
--> statement-breakpoint
CREATE TABLE "custom_forms" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"slug" text NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_by" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"trashed_at" timestamp,
	CONSTRAINT "custom_forms_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "edit_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"post_id" integer NOT NULL,
	"requester_id" integer NOT NULL,
	"current_editor_id" integer NOT NULL,
	"status" varchar(20) DEFAULT 'pending' NOT NULL,
	"requested_at" timestamp DEFAULT now() NOT NULL,
	"responded_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "editing_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"post_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"started_at" timestamp DEFAULT now() NOT NULL,
	"last_activity" timestamp DEFAULT now() NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "eligibility_checks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"education_level" text NOT NULL,
	"field_of_study" text NOT NULL,
	"preferred_country" text NOT NULL,
	"english_proficiency" text NOT NULL,
	"budget" text NOT NULL,
	"work_experience" text,
	"result" json,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "event_assignments" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"event_id" integer NOT NULL,
	"assigned_by" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "event_registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" integer NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"education" text,
	"destination" text,
	"token" text NOT NULL,
	"qr_code_url" text,
	"sheet_row_id" text,
	"is_attended" boolean DEFAULT false NOT NULL,
	"attended_at" timestamp,
	"prize_status" text DEFAULT 'pending' NOT NULL,
	"prize_ready_at" timestamp,
	"prize_distributed_at" timestamp,
	"status" text DEFAULT 'confirmed' NOT NULL,
	"trashed_at" timestamp,
	"trashed_by" integer,
	"trash_reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "event_registrations_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"short_description" text NOT NULL,
	"full_description" text NOT NULL,
	"content_blocks" json,
	"image" text NOT NULL,
	"detail_image" text,
	"event_date" timestamp NOT NULL,
	"event_type" text NOT NULL,
	"location" text,
	"country" text[],
	"study_level" text[],
	"venue" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"registration_enabled" boolean DEFAULT true NOT NULL,
	"trashed_at" timestamp,
	"trashed_by" integer,
	"trash_reason" text,
	"recordings" json,
	"images" json,
	"videos" json,
	"documents" json,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "events_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" text NOT NULL,
	"question" text NOT NULL,
	"answer" text NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "form_fields" (
	"id" serial PRIMARY KEY NOT NULL,
	"form_id" integer NOT NULL,
	"field_label" text NOT NULL,
	"field_type" text NOT NULL,
	"field_name" text NOT NULL,
	"placeholder" text,
	"required" boolean DEFAULT false NOT NULL,
	"options" text[],
	"order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lead_assignments" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"lead_id" integer NOT NULL,
	"assigned_by" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"filename" text NOT NULL,
	"original_name" text NOT NULL,
	"url" text NOT NULL,
	"alt" text,
	"width" integer,
	"height" integer,
	"mime_type" text NOT NULL,
	"size" integer NOT NULL,
	"uploaded_by" integer NOT NULL,
	"trashed_at" timestamp,
	"trashed_by" integer,
	"trash_reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"meta_description" text,
	"content" text NOT NULL,
	"template" text DEFAULT 'default',
	"is_published" boolean DEFAULT false NOT NULL,
	"published_at" timestamp,
	"author_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "pages_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "post_assignments" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"post_id" integer NOT NULL,
	"assigned_by" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "qr_codes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"link" text NOT NULL,
	"embed_type" text DEFAULT 'none' NOT NULL,
	"embed_content" text,
	"scan_count" integer DEFAULT 0 NOT NULL,
	"qr_image_url" text,
	"created_by" integer NOT NULL,
	"trashed_at" timestamp,
	"trashed_by" integer,
	"trash_reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"description" text NOT NULL,
	"short_description" text,
	"icon" text,
	"image" text,
	"features" text[],
	"is_active" boolean DEFAULT true NOT NULL,
	"display_order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "services_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "short_urls" (
	"id" serial PRIMARY KEY NOT NULL,
	"short_code" text NOT NULL,
	"original_url" text NOT NULL,
	"title" text,
	"clicks" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_by" integer NOT NULL,
	"trashed_at" timestamp,
	"trashed_by" integer,
	"trash_reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"last_accessed_at" timestamp,
	CONSTRAINT "short_urls_short_code_unique" UNIQUE("short_code")
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"program" text NOT NULL,
	"university" text NOT NULL,
	"message" text NOT NULL,
	"rating" integer NOT NULL,
	"image_url" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "university_icons" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"logo_url" text NOT NULL,
	"route" text,
	"display_order" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_engagement" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" text NOT NULL,
	"user_id" integer,
	"action" text NOT NULL,
	"category" text NOT NULL,
	"details" text,
	"points" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "user_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_token" text NOT NULL,
	"user_id" integer NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_sessions_session_token_unique" UNIQUE("session_token")
);
--> statement-breakpoint
CREATE TABLE "user_stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" text NOT NULL,
	"user_id" integer,
	"total_points" integer DEFAULT 0,
	"level" integer DEFAULT 1,
	"pages_visited" integer DEFAULT 0,
	"tools_used" integer DEFAULT 0,
	"forms_completed" integer DEFAULT 0,
	"documents_downloaded" integer DEFAULT 0,
	"consultations_booked" integer DEFAULT 0,
	"badges_earned" integer DEFAULT 0,
	"streak" integer DEFAULT 0,
	"last_active_at" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "user_stats_session_id_unique" UNIQUE("session_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "admin_notifications" ADD CONSTRAINT "admin_notifications_user_id_admin_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "admin_sessions" ADD CONSTRAINT "admin_sessions_admin_user_id_admin_users_id_fk" FOREIGN KEY ("admin_user_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "admin_users" ADD CONSTRAINT "admin_users_trashed_by_admin_users_id_fk" FOREIGN KEY ("trashed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_actor_id_admin_users_id_fk" FOREIGN KEY ("actor_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "backup_configs" ADD CONSTRAINT "backup_configs_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "backup_history" ADD CONSTRAINT "backup_history_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_post_categories" ADD CONSTRAINT "blog_post_categories_blog_post_id_blog_posts_id_fk" FOREIGN KEY ("blog_post_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_post_categories" ADD CONSTRAINT "blog_post_categories_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_post_revisions" ADD CONSTRAINT "blog_post_revisions_post_id_blog_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog_posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_post_revisions" ADD CONSTRAINT "blog_post_revisions_editor_id_admin_users_id_fk" FOREIGN KEY ("editor_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_verified_by_admin_users_id_fk" FOREIGN KEY ("verified_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_author_id_admin_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_approver_id_admin_users_id_fk" FOREIGN KEY ("approver_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_trashed_by_admin_users_id_fk" FOREIGN KEY ("trashed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_trashed_by_admin_users_id_fk" FOREIGN KEY ("trashed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "custom_form_submissions" ADD CONSTRAINT "custom_form_submissions_form_id_custom_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."custom_forms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "custom_form_submissions" ADD CONSTRAINT "custom_form_submissions_assigned_to_admin_users_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "custom_forms" ADD CONSTRAINT "custom_forms_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "edit_requests" ADD CONSTRAINT "edit_requests_post_id_blog_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog_posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "edit_requests" ADD CONSTRAINT "edit_requests_requester_id_admin_users_id_fk" FOREIGN KEY ("requester_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "edit_requests" ADD CONSTRAINT "edit_requests_current_editor_id_admin_users_id_fk" FOREIGN KEY ("current_editor_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "editing_sessions" ADD CONSTRAINT "editing_sessions_post_id_blog_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog_posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "editing_sessions" ADD CONSTRAINT "editing_sessions_user_id_admin_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_assignments" ADD CONSTRAINT "event_assignments_user_id_admin_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_assignments" ADD CONSTRAINT "event_assignments_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_assignments" ADD CONSTRAINT "event_assignments_assigned_by_admin_users_id_fk" FOREIGN KEY ("assigned_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_registrations" ADD CONSTRAINT "event_registrations_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_registrations" ADD CONSTRAINT "event_registrations_trashed_by_admin_users_id_fk" FOREIGN KEY ("trashed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_trashed_by_admin_users_id_fk" FOREIGN KEY ("trashed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "form_fields" ADD CONSTRAINT "form_fields_form_id_custom_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."custom_forms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lead_assignments" ADD CONSTRAINT "lead_assignments_user_id_admin_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lead_assignments" ADD CONSTRAINT "lead_assignments_lead_id_consultations_id_fk" FOREIGN KEY ("lead_id") REFERENCES "public"."consultations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lead_assignments" ADD CONSTRAINT "lead_assignments_assigned_by_admin_users_id_fk" FOREIGN KEY ("assigned_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_uploaded_by_admin_users_id_fk" FOREIGN KEY ("uploaded_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_trashed_by_admin_users_id_fk" FOREIGN KEY ("trashed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pages" ADD CONSTRAINT "pages_author_id_admin_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post_assignments" ADD CONSTRAINT "post_assignments_user_id_admin_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post_assignments" ADD CONSTRAINT "post_assignments_post_id_blog_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."blog_posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post_assignments" ADD CONSTRAINT "post_assignments_assigned_by_admin_users_id_fk" FOREIGN KEY ("assigned_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "qr_codes" ADD CONSTRAINT "qr_codes_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "qr_codes" ADD CONSTRAINT "qr_codes_trashed_by_admin_users_id_fk" FOREIGN KEY ("trashed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "short_urls" ADD CONSTRAINT "short_urls_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "short_urls" ADD CONSTRAINT "short_urls_trashed_by_admin_users_id_fk" FOREIGN KEY ("trashed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "blog_posts_status_idx" ON "blog_posts" USING btree ("status");--> statement-breakpoint
CREATE INDEX "blog_posts_is_published_idx" ON "blog_posts" USING btree ("is_published");--> statement-breakpoint
CREATE INDEX "blog_posts_published_at_idx" ON "blog_posts" USING btree ("published_at");--> statement-breakpoint
CREATE INDEX "blog_posts_category_idx" ON "blog_posts" USING btree ("category");--> statement-breakpoint
CREATE INDEX "blog_posts_status_published_idx" ON "blog_posts" USING btree ("status","is_published","published_at");--> statement-breakpoint
CREATE INDEX "categories_is_active_idx" ON "categories" USING btree ("is_active");--> statement-breakpoint
CREATE INDEX "consultations_status_idx" ON "consultations" USING btree ("status");--> statement-breakpoint
CREATE INDEX "consultations_email_idx" ON "consultations" USING btree ("email");--> statement-breakpoint
CREATE INDEX "consultations_created_at_idx" ON "consultations" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "consultations_status_created_idx" ON "consultations" USING btree ("status","created_at");--> statement-breakpoint
CREATE UNIQUE INDEX "event_assignments_user_event_idx" ON "event_assignments" USING btree ("user_id","event_id");--> statement-breakpoint
CREATE INDEX "event_registrations_event_id_idx" ON "event_registrations" USING btree ("event_id");--> statement-breakpoint
CREATE INDEX "event_registrations_email_idx" ON "event_registrations" USING btree ("email");--> statement-breakpoint
CREATE INDEX "event_registrations_status_idx" ON "event_registrations" USING btree ("status");--> statement-breakpoint
CREATE INDEX "event_registrations_is_attended_idx" ON "event_registrations" USING btree ("is_attended");--> statement-breakpoint
CREATE UNIQUE INDEX "lead_assignments_user_lead_idx" ON "lead_assignments" USING btree ("user_id","lead_id");--> statement-breakpoint
CREATE INDEX "media_uploaded_by_idx" ON "media" USING btree ("uploaded_by");--> statement-breakpoint
CREATE UNIQUE INDEX "post_assignments_user_post_idx" ON "post_assignments" USING btree ("user_id","post_id");--> statement-breakpoint
CREATE INDEX "qr_codes_created_by_idx" ON "qr_codes" USING btree ("created_by");--> statement-breakpoint
CREATE UNIQUE INDEX "short_urls_short_code_idx" ON "short_urls" USING btree ("short_code");--> statement-breakpoint
CREATE INDEX "short_urls_created_by_idx" ON "short_urls" USING btree ("created_by");