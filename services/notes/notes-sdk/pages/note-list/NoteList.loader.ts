import type { LoaderQuery } from "@saflib/vue";
import { ref } from "vue";
import type { AnyDocumentId, DocHandle } from "@automerge/automerge-repo";
import type { Note } from "../../types.ts";

export function useNoteListLoader() {
  const docQuery: LoaderQuery<Note> = {
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

    docQuery.data!.value = handle.doc() as Note;
    docQuery.isLoading.value = false;
  };
  load();
  return { docQuery };
}
