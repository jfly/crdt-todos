import App from "./App.vue";
import { createVueApp, setClientName } from "@saflib/vue";
import "@saflib/vue/components";
import { notesSdkStrings } from "./strings";
import { setupWorker } from "msw/browser";
import { notesServiceFakeHandlers } from "./fakes.ts";
import { http, bypass } from "msw";
import { router } from "./router.ts";

import { Repo } from "@automerge/automerge-repo";
import { IndexedDBStorageAdapter } from "@automerge/automerge-repo-storage-indexeddb";

const repo = new Repo({
  storage: new IndexedDBStorageAdapter(),
});
declare global {
  interface Window {
    repo: Repo;
  }
}
window.repo = repo;

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
      ...notesSdkStrings,
    },
    router,
  });
};

main();
