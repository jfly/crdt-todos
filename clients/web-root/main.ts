import { createVueApp, setClientName } from "@saflib/vue";
import App from "./RootApp.vue";
import { vuetifyConfig } from "web-common";
import { createRootRouter } from "./router.ts";
import { webRootStrings } from "./strings.ts";
import { webCommonStrings } from "web-common/strings";
import "@saflib/vue/components"; // to ensure vuetify styles are included

export const main = () => {
  const router = createRootRouter();
  setClientName("root");
  createVueApp(App, {
    router,
    vuetifyConfig,
    i18nMessages: {
      ...webRootStrings,
      ...webCommonStrings,
    },
  });
};
