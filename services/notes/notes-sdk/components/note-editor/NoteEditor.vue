<template>
  <v-card>
    <v-card-title>
      <h2>{{ noteDoc?.title || t(strings.title) }}</h2>
    </v-card-title>

    <v-card-subtitle v-if="noteDoc?.createdAt">
      Created: {{ noteDoc.createdAt }}
      <br />
      Updated: {{ noteDoc.updatedAt }}
    </v-card-subtitle>

    <v-card-text>
      <v-form>
        <v-textarea
          :model-value="noteDoc.contents"
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
import { type DocHandle } from "@automerge/automerge-repo";
import * as Automerge from "@automerge/automerge";
const { t } = useReverseT();

const props = defineProps<{
  note: DocHandle<Note>;
}>();
const noteDoc = props.note.doc();

const handleEdit = (value: string) => {
  props.note.change((root) => {
    Automerge.updateText(root, ["contents"], value);
    root.updatedAt = new Date();
  });
};
</script>
