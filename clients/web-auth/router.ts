import { createAuthRouter as createAuthRouterFn } from "@saflib/auth";
import { linkToHrefWithHost } from "@saflib/vue";
import { rootLinks } from "web-root-links";

export const createAuthRouter = () =>
  createAuthRouterFn({
    defaultRedirect: linkToHrefWithHost(rootLinks.home),
  });
