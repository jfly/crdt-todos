import { HandledDatabaseError } from "@saflib/drizzle";

/**
 * Superclass for all handled todos db errors
 */
export class TodosDatabaseError extends HandledDatabaseError {}

// TODO: Add specific error classes for your database
export class StubError extends TodosDatabaseError {}
