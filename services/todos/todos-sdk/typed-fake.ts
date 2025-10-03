import { typedCreateHandler } from "@saflib/sdk/testing";
import type { paths } from "todos-spec";

export const { createHandler: todosHandler } =
  typedCreateHandler<paths>({
    subdomain: "todos",
  });
