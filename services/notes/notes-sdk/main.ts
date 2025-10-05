import App from "./App.vue";
import { createVueApp, setClientName } from "@saflib/vue";
import "@saflib/vue/components";
import { notes_sdk_strings } from "./strings";
// import { setupWorker } from "msw/browser";
// import { notesServiceFakeHandlers } from "./fakes.ts";
// import { http, bypass } from "msw";
import { router } from "./router.ts";

export const main = async () => {
  setClientName("root");
  // const server = setupWorker(
  //   ...notesServiceFakeHandlers,
  //   http.get("*", ({ request }) => {
  //     const originalUrl = new URL(request.url);
  //     const proxyRequest = new Request(originalUrl, {
  //       headers: request.headers,
  //     });
  //     return fetch(bypass(proxyRequest));
  //   }),
  // );
  // await server.start({ onUnhandledRequest: "error" });
  createVueApp(App, {
    i18nMessages: {
      ...notes_sdk_strings,
    },
    router,
  });
};

main();
