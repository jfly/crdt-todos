import { typedCreateHandler } from "@saflib/sdk/testing";
import type { paths } from "notes-spec";
import { 
  getNotesFake, 
  getNoteFake, 
  createNoteFake, 
  updateNoteFake, 
  deleteNoteFake 
} from "./requests/notes.fakes.ts";

export const { createHandler: notesHandler } =
  typedCreateHandler<paths>({
    subdomain: "notes",
  });
