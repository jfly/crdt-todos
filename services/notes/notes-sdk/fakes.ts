// TODO: Re-export files from the requests/ directory that contain fake implementations
// These only export the fake files, so that they're only used in tests
// This also allows the fake in-memory store to automatically refresh the data after each test

import { identityServiceFakeHandlers } from "@saflib/auth/fakes";
import { notesHandler } from "./typed-fake.ts";
import { 
  getNotesFake, 
  getNoteFake, 
  createNoteFake, 
  updateNoteFake, 
  deleteNoteFake 
} from "./requests/notes.fakes.ts";

export const notesServiceFakeHandlers = [
  // add fake handlers here
  ...identityServiceFakeHandlers,
  notesHandler({
    path: "/notes",
    verb: "get",
    status: 200,
    handler: getNotesFake,
  }),
  notesHandler({
    path: "/notes/{id}",
    verb: "get", 
    status: 200,
    handler: getNoteFake,
  }),
  notesHandler({
    path: "/notes",
    verb: "post",
    status: 201,
    handler: createNoteFake,
  }),
  notesHandler({
    path: "/notes/{id}",
    verb: "put",
    status: 200,
    handler: updateNoteFake,
  }),
  notesHandler({
    path: "/notes/{id}",
    verb: "delete",
    status: 204,
    handler: deleteNoteFake,
  }),
];
