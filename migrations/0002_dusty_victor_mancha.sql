CREATE TABLE "block_defaults" (
	"id" serial PRIMARY KEY NOT NULL,
	"block_type" text NOT NULL,
	"scope" text NOT NULL,
	"defaults" json,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP INDEX "blog_posts_wordpress_id_idx";--> statement-breakpoint
ALTER TABLE "admin_users" ADD COLUMN "display_name" text;--> statement-breakpoint
CREATE UNIQUE INDEX "block_defaults_type_scope_idx" ON "block_defaults" USING btree ("block_type","scope");--> statement-breakpoint
ALTER TABLE "blog_posts" DROP COLUMN "wordpress_id";--> statement-breakpoint
ALTER TABLE "blog_posts" DROP COLUMN "source_url";--> statement-breakpoint
ALTER TABLE "blog_posts" DROP COLUMN "last_synced_at";