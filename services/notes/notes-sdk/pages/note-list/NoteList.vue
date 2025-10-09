<template>
  <v-container>
    <h1>{{ t(strings.title) }}</h1>
    <p>{{ t(strings.description) }}</p>

    <router-link :to="`/note/${docQuery.data}`">View Note</router-link>
  </v-container>
</template>

<script setup lang="ts">
import { note_list_page as strings } from "./NoteList.strings";
import { useReverseT } from "../../i18n.ts";
import { useNoteListLoader } from "./NoteList.loader.ts";
const { docQuery } = useNoteListLoader();

const { t } = useReverseT();
</script>
