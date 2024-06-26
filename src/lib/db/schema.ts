
import {pgTable,serial,timestamp,text} from 'drizzle-orm/pg-core'
// imports whic us to define the schema and its cols

export const $notes = pgTable('notes', {
    id: serial('id').primaryKey(),
    name:text('name').notNull(),
    createdAt:timestamp('created_at').notNull().defaultNow(),
    imageUrl:text('imageUrl'),
    userId:text('userId').notNull().unique(),
    editorState:text('editor_state').notNull(),
})

export type NoteType = typeof $notes.$inferInsert;