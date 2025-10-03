export type * from "./types.ts";
export * from "./errors.ts";

import { notesDbManager } from "./instances.ts";
export const notesDb = notesDbManager.publicInterface();

// TODO: Import query modules as you create them, e.g.:
// export * from "./queries/example/index.ts";
