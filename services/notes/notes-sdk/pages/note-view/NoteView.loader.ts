import type { LoaderQuery } from "@saflib/vue";
import { ref, readonly } from "vue";
import { type AnyDocumentId, type DocHandle } from "@automerge/automerge-repo";
import { TanstackError } from "@saflib/sdk";
import type { Note, DocRef } from "../../types.ts";

export function useNoteViewLoader(noteId: string) {
  let handle: DocHandle<Note>;
  const findWithProgress = window.repo.findWithProgress(
    noteId as unknown as AnyDocumentId,
  );
  handle = findWithProgress.handle as DocHandle<Note>;
  const docRef = ref<Note | undefined>();
  if (handle.isReady()) {
    docRef.value = handle.doc();
  }
  const docQuery: LoaderQuery<DocRef<Note>> = {
    isLoading: ref(true),
    error: ref(null),
    isError: ref(false),
    data: {
      change: (fn) => handle.change(fn),
      ref: readonly(docRef),
    },
  };

  handle.on("change", ({ doc, patches }) => {
    if (!docRef.value) {
      return;
    }
    const changedProperties = new Set<keyof Note>();
    for (const patch of patches) {
      changedProperties.add(patch.path[0] as keyof Note);
    }
    for (const property of changedProperties) {
      // @ts-expect-error - doc is the new doc
      docRef.value[property] = doc[property];
    }
  });

  const state = findWithProgress.state;
  switch (state) {
    case "loading":
      docQuery.isLoading.value = true;
      docQuery.isError.value = false;
      docQuery.error.value = null;
      break;
    case "ready":
      docQuery.isLoading.value = false;
      docQuery.isError.value = false;
      docQuery.error.value = null;
      docRef.value = handle.doc();
      break;
    case "failed":
    case "aborted":
    case "unavailable":
      docQuery.isLoading.value = false;
      docQuery.isError.value = true;
      docQuery.error.value = new TanstackError(404, "Document not found");
      break;
    default:
      throw state satisfies never;
  }

  const handleStateChanges = async () => {
    await handle.whenReady(["ready", "unavailable", "deleted"]);
    if (handle.isReady()) {
      docQuery.isLoading.value = false;
      docQuery.isError.value = false;
      docQuery.error.value = null;
    }
    if (handle.isUnavailable() || handle.isDeleted()) {
      docQuery.isLoading.value = false;
      docQuery.isError.value = true;
      docQuery.error.value = new TanstackError(404, "Document not found");
    }
  };
  handleStateChanges();
  return { docQuery };
}
