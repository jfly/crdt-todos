import type { LoaderQuery } from "@saflib/vue";
import { ref } from "vue";
import type { AnyDocumentId, DocHandle } from "@automerge/automerge-repo";

export function useNoteListLoader() {
  const docQuery: LoaderQuery = {
    isLoading: ref(true),
    error: ref(null),
    isError: ref(false),
    data: ref(undefined),
  };

  const load = async () => {
    let handle: DocHandle<any>;
    const firstNote = localStorage.getItem("first-note");
    if (firstNote) {
      handle = await window.repo.find(firstNote as unknown as AnyDocumentId);
    } else {
      handle = window.repo.create({
        id: "first-note",
        title: "First Note",
        contents: "Hello, world!",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      localStorage.setItem("first-note", handle.url);
    }
    console.log("handle", handle.doc());
    console.log("handle2", handle.doc());

    docQuery.data!.value = handle.doc();
    console.log("docQuery.data in loader", docQuery.data.value);
    docQuery.isLoading.value = false;
  };
  load();
  return { docQuery };
}
