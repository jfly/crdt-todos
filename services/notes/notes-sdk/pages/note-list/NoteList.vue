<template>
  <v-container>
    <h1>{{ t(strings.title) }}</h1>
    <p>{{ t(strings.description) }}</p>
      </v-container>
</template>

<script setup lang="ts">
import { note_list_page as strings } from "./NoteList.strings";
import { useReverseT } from "../../i18n.ts";



const { t } = useReverseT();
</script>
