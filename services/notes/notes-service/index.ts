import { startExpressServer } from "@saflib/express";
import { createNotesHttpApp } from "notes-http";
import { notesDb } from "notes-db";
import { makeSubsystemReporters } from "@saflib/node";
import { typedEnv } from "./env.ts";
import { makeContext } from "notes-service-common";

export function startNotesService() {
  const { log, logError } = makeSubsystemReporters("init", "main");
  try {
    log.info("Starting up notes service...");
    log.info("Connecting to notes-db...");
    const dbKey = notesDb.connect({ onDisk: true });
    const context = makeContext({ notesDbKey: dbKey });
    log.info("notes-db connection complete.");

    log.info("Starting notes-http...");
    const expressApp = createNotesHttpApp(context);
    startExpressServer(expressApp, {
      port: parseInt(typedEnv.NOTES_SERVICE_HTTP_PORT || "3000", 10),
    });
    log.info("notes-http startup complete.");
  } catch (error) {
    logError(error);
  }
}
