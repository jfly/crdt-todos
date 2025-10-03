<template>
  <AsyncPage
    :loader="useNoteListLoader"
    :page-component="NoteList"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useNoteListLoader } from "./NoteList.loader.ts";
import { AsyncPage } from "@saflib/vue/components";
const NoteList = defineAsyncComponent(
  () => import("./NoteList.vue"),
);
</script>
