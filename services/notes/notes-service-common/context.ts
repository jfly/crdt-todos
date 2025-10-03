import { AsyncLocalStorage } from "async_hooks";
import type { DbKey } from "@saflib/drizzle";
import { notesDb } from "notes-db";

export interface NotesServiceContext {
  notesDbKey: DbKey;
}

export const notesServiceStorage =
  new AsyncLocalStorage<NotesServiceContext>();

export interface NotesServiceContextOptions {
  notesDbKey?: DbKey;
}

export const makeContext = (
  options: NotesServiceContextOptions = {},
): NotesServiceContext => {
  const dbKey = options.notesDbKey ?? notesDb.connect();
  return {
    notesDbKey: dbKey,
  };
};
