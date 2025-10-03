import { typedCreateHandler } from "@saflib/sdk/testing";
import type { paths } from "notes-spec";

export const { createHandler: notesHandler } = typedCreateHandler<paths>({
  subdomain: "notes",
});
