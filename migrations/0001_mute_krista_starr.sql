ALTER TABLE "blog_posts" ADD COLUMN "wordpress_id" integer;--> statement-breakpoint
ALTER TABLE "blog_posts" ADD COLUMN "source_url" text;--> statement-breakpoint
ALTER TABLE "blog_posts" ADD COLUMN "last_synced_at" timestamp;--> statement-breakpoint
CREATE INDEX "blog_posts_wordpress_id_idx" ON "blog_posts" USING btree ("wordpress_id");