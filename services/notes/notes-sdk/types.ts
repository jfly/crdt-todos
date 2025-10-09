import type { DocHandle } from "@automerge/automerge-repo";
import type { Ref } from "vue";

export interface Note {
  id: string;
  title: string;
  contents: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DocRef<T> {
  change: DocHandle<T>["change"];
  ref: Ref<T | undefined>;
}
