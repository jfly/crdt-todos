import { createErrorMiddleware, createGlobalMiddleware } from "@saflib/express";
import express from "express";
import { todosDb } from "todos-db";
import {
  todosServiceStorage,
  type TodosServiceContextOptions,
} from "todos-service-common";

/**
 * Creates the HTTP server for the todos service.
 */
export function createTodosHttpApp(
  options: TodosServiceContextOptions,
) {
  let dbKey = options.todosDbKey;
  if (!dbKey) {
    dbKey = todosDb.connect();
  }

  const app = express();
  app.use(createGlobalMiddleware());
  app.set("trust proxy", 1);

  const context = { todosDbKey: dbKey };
  app.use((_req, _res, next) => {
    todosServiceStorage.run(context, () => {
      next();
    });
  });

  // Add route handlers here. Do not prefix the routes; the router will handle the prefix.
  // app.use(createTodosRouter());

  app.use(createErrorMiddleware());

  return app;
}
