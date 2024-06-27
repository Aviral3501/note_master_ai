CREATE TABLE IF NOT EXISTS "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"imageUrl" text,
	"userId" text NOT NULL,
	"editor_state" text NOT NULL,
	CONSTRAINT "notes_userId_unique" UNIQUE("userId")
);
