CREATE TABLE "eduhub_resource" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"title" varchar(140) NOT NULL,
	"resourceType" varchar(32) NOT NULL,
	"subject" varchar(64) NOT NULL,
	"level" varchar(32) NOT NULL,
	"durationMinutes" integer,
	"language" varchar(32),
	"description" text NOT NULL,
	"objective" text,
	"license" varchar(32) NOT NULL,
	"allowComments" boolean DEFAULT true NOT NULL,
	"allowAdaptations" boolean DEFAULT true NOT NULL,
	"file_metadata" jsonb NOT NULL,
	"createdById" varchar(255) NOT NULL,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "eduhub_resource" ADD CONSTRAINT "eduhub_resource_createdById_eduhub_user_id_fk" FOREIGN KEY ("createdById") REFERENCES "public"."eduhub_user"("id") ON DELETE no action ON UPDATE no action;
--> statement-breakpoint
CREATE INDEX "resource_created_by_idx" ON "eduhub_resource" USING btree ("createdById");
