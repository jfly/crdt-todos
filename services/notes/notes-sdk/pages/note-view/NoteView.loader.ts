import type { LoaderQuery } from "@saflib/vue";
import { ref, watch } from "vue";
import type { AnyDocumentId, DocHandle } from "@automerge/automerge-repo";
import type { Note } from "../../types.ts";

export function useNoteViewLoader(noteId: string) {
  const docQuery: LoaderQuery<Note> = {
    isLoading: ref(true),
    error: ref(null),
    isError: ref(false),
    data: ref(undefined),
  };

  const load = async () => {
    let handle: DocHandle<any>;
    handle = await window.repo.find(noteId as unknown as AnyDocumentId);
    docQuery.data!.value = handle.doc() as Note;
    docQuery.isLoading.value = false;
    watch(
      docQuery.data,
      (data) => {
        if (!data) return;
        handle.change((doc) => {
          if (doc.contents !== data.contents) {
            doc.contents = data.contents;
          }
          if (doc.title !== data.title) {
            doc.title = data.title;
          }
          doc.updatedAt = data.updatedAt;
        });
      },
      { deep: true },
    );
  };
  load();
  return { docQuery };
}
