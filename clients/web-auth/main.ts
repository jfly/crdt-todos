import { createVueApp, setClientName } from "@saflib/vue";
import App from "./AuthApp.vue";
import { vuetifyConfig } from "web-common";
import { createAuthRouter } from "./router";
import { authAppStrings } from "./strings";
import { webCommonStrings } from "web-common/strings";

setClientName("auth");

export const main = () => {
  const router = createAuthRouter();
  createVueApp(App, {
    router,
    vuetifyConfig,
    i18nMessages: {
      ...authAppStrings,
      ...webCommonStrings,
    },
  });
};
