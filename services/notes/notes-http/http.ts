import { createErrorMiddleware, createGlobalMiddleware } from "@saflib/express";
import express from "express";
import { notesDb } from "notes-db";
import {
  notesServiceStorage,
  type NotesServiceContextOptions,
} from "notes-service-common";

/**
 * Creates the HTTP server for the notes service.
 */
export function createNotesHttpApp(
  options: NotesServiceContextOptions,
) {
  let dbKey = options.notesDbKey;
  if (!dbKey) {
    dbKey = notesDb.connect();
  }

  const app = express();
  app.use(createGlobalMiddleware());
  app.set("trust proxy", 1);

  const context = { notesDbKey: dbKey };
  app.use((_req, _res, next) => {
    notesServiceStorage.run(context, () => {
      next();
    });
  });

  // Add route handlers here. Do not prefix the routes; the router will handle the prefix.
  // app.use(createNotesRouter());

  app.use(createErrorMiddleware());

  return app;
}
