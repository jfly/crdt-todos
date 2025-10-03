<template>
  <v-container>
    <h1>{{ t(strings.title) }}</h1>
    <p>{{ t(strings.description) }}</p>
      </v-container>
</template>

<script setup lang="ts">
import { note_list_page as strings } from "./NoteList.strings";
import { useReverseT } from "../../i18n.ts";
import type { AnyDocumentId, DocHandle } from "@automerge/automerge-repo";

const load = async () => {
  let handle: DocHandle<any>;
  const firstNote = localStorage.getItem("first-note");
  if (firstNote) {
    console.log("loading note", firstNote)
    handle = await window.repo.find(firstNote as unknown as AnyDocumentId);
  }
  else {
    console.log("creating note", "first-note")
    handle = window.repo.create({
      id: "first-note",
      contents: "Hello, world!",
    });
    localStorage.setItem("first-note", handle.url);
  }

  console.log("handle", handle.url)
}
load();

const { t } = useReverseT();
</script>
