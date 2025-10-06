import { createAuthRouter as createAuthRouterFn } from "@saflib/auth";
import { linkToHrefWithHost } from "@saflib/vue";
import { appLinks } from "web-app-links";

export const createAuthRouter = () =>
  createAuthRouterFn({
    defaultRedirect: linkToHrefWithHost(appLinks.home),
  });
