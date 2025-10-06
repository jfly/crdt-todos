import "@saflib/vue/components"; // for styling - see tricky-imports.ts
import { createVueApp, setClientName } from "@saflib/vue";
import App from "./WebApp.vue";
import { router } from "./router.ts";
import { web_app_strings } from "./strings.ts";

export const main = () => {
  setClientName("app");
  createVueApp(App, {
    router,
    i18nMessages: {
      ...web_app_strings,
    },
  });
};
