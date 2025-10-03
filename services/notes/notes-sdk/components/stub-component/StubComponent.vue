<template>
  <v-card>
    <v-card-title>
      <h2>{{ t(strings.title) }}</h2>
    </v-card-title>

    <v-card-subtitle>
      {{ t(strings.description) }}
    </v-card-subtitle>

    <v-card-text>
      <!-- Loading skeleton -->
      <div v-if="loading" class="mb-4">
        <v-skeleton-loader
          type="table-heading, table-thead, table-tbody, table-tbody, table-tbody"
          class="elevation-1"
        ></v-skeleton-loader>
      </div>

      <v-alert v-else-if="error" type="error" variant="tonal" class="mb-4">
        {{ getTanstackErrorMessage(error) }}
      </v-alert>

      <v-alert
        type="info"
      >
        Yooooooo
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { stub_component_strings as strings } from "./StubComponent.strings.ts";
import { useReverseT } from "../../../../todos/todos-sdk/i18n.ts";
import { TanstackError, getTanstackErrorMessage } from "@saflib/sdk";

const { t } = useReverseT();

defineProps<{
  loading?: boolean;
  error?: TanstackError;
}>();
</script>
