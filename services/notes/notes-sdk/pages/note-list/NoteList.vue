<template>
  <v-container>
    <h1>{{ t(strings.title) }}</h1>
    <p>{{ t(strings.description) }}</p>
      </v-container>
    <div class="ma-4">
      {{ docQuery.data.value?.contents }}
    </div>
    <NoteEditor v-if="docQuery.data.value" v-model="docQuery.data.value" />
</template>

<script setup lang="ts">
import { note_list_page as strings } from "./NoteList.strings";
import { useReverseT } from "../../i18n.ts";
import { useNoteListLoader } from "./NoteList.loader.ts";
import NoteEditor from "../../components/note-editor/NoteEditor.vue";
const { docQuery } = useNoteListLoader();

const { t } = useReverseT();
</script>
