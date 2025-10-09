<template>
  <AsyncPage
    :loader="() => useNoteViewLoader(noteId)"
    :page-component="NoteView"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useNoteViewLoader } from "./NoteView.loader.ts";
import { AsyncPage } from "@saflib/vue/components";

defineProps<{
  noteId: string;
}>();

const NoteView = defineAsyncComponent(() => import("./NoteView.vue"));
</script>
