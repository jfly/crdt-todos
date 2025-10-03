<template>
  <v-container>
    <h1>{{ t(strings.title) }}</h1>
    <p>{{ t(strings.description) }}</p>
      </v-container>
    <div class="ma-4">
      {{ note.contents }}
    </div>
    <NoteEditor v-model="note" />
</template>

<script setup lang="ts">
import { note_list_page as strings } from "./NoteList.strings";
import { useReverseT } from "../../i18n.ts";
import { useNoteListLoader } from "./NoteList.loader.ts";
import NoteEditor from "../../components/note-editor/NoteEditor.vue";
import { ref, watch } from "vue";
import type { Note } from "../../types.ts";
// const { docQuery } = useNoteListLoader();
const note = ref<Note>({
  id: "1",
  title: "First Note",
  contents: "Hello, world!",
  createdAt: new Date(),
  updatedAt: new Date(),
});
// console.log("doc query immediately after loader called", docQuery.data?.value);


const { t } = useReverseT();
</script>
