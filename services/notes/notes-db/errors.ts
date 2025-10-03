import { HandledDatabaseError } from "@saflib/drizzle";

/**
 * Superclass for all handled notes db errors
 */
export class NotesDatabaseError extends HandledDatabaseError {}

// TODO: Add specific error classes for your database
export class StubError extends NotesDatabaseError {}
