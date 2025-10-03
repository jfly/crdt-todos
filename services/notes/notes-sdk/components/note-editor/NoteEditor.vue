<template>
  <v-card>
    <v-card-title>
      <h2>{{ model?.title || t(strings.title) }}</h2>
    </v-card-title>

    <v-card-subtitle v-if="model?.createdAt">
      Created: {{ model.createdAt.toLocaleDateString() }}
    </v-card-subtitle>

    <v-card-text>
      <v-form v-if="!loading">
        <v-textarea
          :model-value="model?.contents || ''"
          @update:model-value="(value) => model.contents = value"
          :label="t(strings.contents_label)"
          :placeholder="t(strings.contents_placeholder)"
          :disabled="disabled"
          rows="10"
          variant="outlined"
          auto-grow
          :rules="contentsRules"
          :error-messages="contentsErrors"
        ></v-textarea>
      </v-form>
      
      <!-- Loading skeleton -->
      <div v-else>
        <v-skeleton-loader
          type="text"
          class="mb-4"
        ></v-skeleton-loader>
      </div>
    </v-card-text>

    <v-card-actions v-if="!loading">
      <v-spacer></v-spacer>
      <v-btn
        v-if="showSaveButton"
        :disabled="!isValid || disabled"
        :loading="saving"
        color="primary"
        @click="handleSave"
      >
        {{ t(strings.save_button) }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { note_editor_strings as strings } from "./NoteEditor.strings.ts";
import { useReverseT } from "../../i18n.ts";
import type { Note } from "../../types.ts";

const { t } = useReverseT();

// Props
interface Props {
  loading?: boolean;
  disabled?: boolean;
  showSaveButton?: boolean;
  saving?: boolean;
  contentsErrors?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  disabled: false,
  showSaveButton: false,
  saving: false,
  contentsErrors: () => [],
});

// Emits
const emit = defineEmits<{
  save: [contents: string];
}>();

// Define the model for two-way binding
const model = defineModel<Note>({
  required: true,
});

// Validation rules
const contentsRules = computed(() => [
  (value: string) => {
    if (!value || value.trim().length === 0) {
      return t(strings.validation_required);
    }
    return true;
  },
  (value: string) => {
    if (value && value.length > 10000) {
      return t(strings.validation_too_long);
    }
    return true;
  },
]);

// Validation state
const isValid = computed(() => {
  return model.value?.contents?.trim().length > 0 && 
         model.value?.contents?.length <= 10000 &&
         props.contentsErrors.length === 0;
});

// Event handlers
const handleSave = () => {
  if (isValid.value && model.value?.contents) {
    emit("save", model.value.contents);
  }
};
</script>
