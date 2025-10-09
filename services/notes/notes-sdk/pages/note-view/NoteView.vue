<template>
  <v-container>
    <h1>{{ t(strings.title) }}</h1>
    <NoteEditor :note="docQuery.data" />
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const noteId = route.params.noteId;

import { note_view_page as strings } from "./NoteView.strings.ts";
import { useReverseT } from "../../i18n.ts";
import { useNoteViewLoader } from "./NoteView.loader.ts";
import NoteEditor from "../../components/note-editor/NoteEditor.vue";
const { docQuery } = useNoteViewLoader(noteId as string);

const { t } = useReverseT();
</script>
