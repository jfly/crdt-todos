import { startExpressServer } from "@saflib/express";
import { createTodosHttpApp } from "todos-http";
import { todosDb } from "todos-db";
import { makeSubsystemReporters } from "@saflib/node";
import { typedEnv } from "./env.ts";
import { makeContext } from "todos-service-common";

export function startTodosService() {
  const { log, logError } = makeSubsystemReporters("init", "main");
  try {
    log.info("Starting up todos service...");
    log.info("Connecting to todos-db...");
    const dbKey = todosDb.connect({ onDisk: true });
    const context = makeContext({ todosDbKey: dbKey });
    log.info("todos-db connection complete.");

    log.info("Starting todos-http...");
    const expressApp = createTodosHttpApp(context);
    startExpressServer(expressApp, {
      port: parseInt(typedEnv.TODOS_SERVICE_HTTP_PORT || "3000", 10),
    });
    log.info("todos-http startup complete.");
  } catch (error) {
    logError(error);
  }
}
