<template>
  <v-card>
    <v-card-title>
      <h2>{{ note?.title || t(strings.title) }}</h2>
    </v-card-title>

    <v-card-subtitle v-if="note?.createdAt">
      Created: {{ note.createdAt }}
      <br />
      Updated: {{ note.updatedAt }}
    </v-card-subtitle>

    <v-card-text>
      <v-form>
        <v-textarea
          :model-value="note.contents"
          @update:model-value="handleEdit"
          :label="t(strings.contents_label)"
          rows="10"
          variant="outlined"
          auto-grow
        ></v-textarea>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { note_editor_strings as strings } from "./NoteEditor.strings.ts";
import { useReverseT } from "../../i18n.ts";
import type { Note } from "../../types.ts";

const { t } = useReverseT();

const note = defineModel<Note>({ required: true });

const handleEdit = (value: string) => {
  note.value.contents = value;
  note.value.updatedAt = new Date();
};
</script>
