import { AsyncLocalStorage } from "async_hooks";
import type { DbKey } from "@saflib/drizzle";
import { todosDb } from "todos-db";

export interface TodosServiceContext {
  todosDbKey: DbKey;
}

export const todosServiceStorage =
  new AsyncLocalStorage<TodosServiceContext>();

export interface TodosServiceContextOptions {
  todosDbKey?: DbKey;
}

export const makeContext = (
  options: TodosServiceContextOptions = {},
): TodosServiceContext => {
  const dbKey = options.todosDbKey ?? todosDb.connect();
  return {
    todosDbKey: dbKey,
  };
};
